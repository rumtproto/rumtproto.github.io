---
title: "Создание авторизационного ключа (auth_key)"
original: "https://core.telegram.org/mtproto/auth_key"
section: mtproto
layout: layout.njk
---

# Создание авторизационного ключа (auth_key)

Оригинальное русскоязычное изложение обмена, которым клиент и сервер вырабатывают общий ключ `auth_key` (авторизационный ключ — долговременный общий секрет длиной 2048 бит, которым шифруются все дальнейшие сообщения). Первоисточник: [core.telegram.org/mtproto/auth_key](https://core.telegram.org/mtproto/auth_key).

В основе обмена — протокол Диффи–Хеллмана: на раннем шаге данные клиента защищены публичным RSA-ключом сервера (это подтверждает, что обмен идёт именно с сервером), а итоговый общий секрет `auth_key` получается возведением в степень по модулю большого простого числа `dh_prime` и в открытом виде никогда не передаётся.

Обмен состоит из пяти шагов. Все конструкторы ниже — из [схемы слоя MTProto](/schema/mtproto/).

## Шаг 1. Запрос и получение параметров (клиент → сервер → клиент)

1. Клиент генерирует `nonce` (128 бит случайных данных) и отправляет [`req_pq_multi`](https://core.telegram.org/constructor/req_pq_multi/):

```
req_pq_multi#be7e8ef1 nonce:int128 = ResPQ;
```

2. Сервер отвечает [`resPQ`](https://core.telegram.org/constructor/resPQ/): тот же `nonce`, свой `server_nonce` (256 бит), число `pq` (произведение двух простых) и список отпечатков `server_public_key_fingerprints` своих RSA-ключей.

Проверки клиента: полученный `nonce` обязан совпасть с отправленным.

## Шаг 2. Факторизация и запрос DH-параметров (клиент → сервер)

3. Клиент разлагает `pq` на простые множители `p` и `q`. Число `pq` 64-битное, поэтому разложение находится быстро — перебором делителей или алгоритмом Полларда. Затем клиент выбирает отпечаток `f`, который есть в списке сервера и соответствует известному клиенту публичному RSA-ключу Telegram.
4. Клиент строит [`p_q_inner_data_dc`](https://core.telegram.org/constructor/p_q_inner_data_dc/) (pq, p, q, nonce, server_nonce, `new_nonce` — свежие 256 бит случайности, `dc_id` — номер дата-центра), сериализует и шифрует публичным RSA-ключом сервера (схема `RSA_PAD`: блок дополняется случайными байтами до 256 байт и шифруется RSA без OAEP).
5. Отправляется [`req_DH_params`](https://core.telegram.org/constructor/req_DH_params/) с nonce, server_nonce, p, q, отпечатком и зашифрованными данными.

Сервер расшифровывает, проверяет значения и переходит к шагу 3. Если что-то не так — отвечает [`server_DH_params_fail`](https://core.telegram.org/constructor/server_DH_params_fail/).

## Шаг 3. Получение DH-параметров сервера (сервер → клиент)

6. Сервер отвечает [`server_DH_params_ok`](https://core.telegram.org/constructor/server_DH_params_ok/), внутри которого зашифрованный (симметрически) [`server_DH_inner_data`](https://core.telegram.org/constructor/server_DH_inner_data/): `g` (генератор), `dh_prime` (2048-битное простое), `g_a = g^a mod dh_prime` и `server_time`.

Ключ шифрования этого блока выводится из `SHA1`:

```
tmp_aes_key   = SHA1(new_nonce + server_nonce) + первые 12 байт SHA1(server_nonce + new_nonce)
tmp_aes_iv    = последние 8 байт SHA1(server_nonce + new_nonce) + SHA1(new_nonce + new_nonce) + первые 4 байта new_nonce
```

(шифрование — также `AES-256-IGE`; расшифрованный блок проверяется по хешу `SHA1` в начале).

Проверки клиента: `nonce` и `server_nonce` совпадают с ранее полученными; `dh_prime` — действительно простое число, причём «безопасное» простое (простыми должны быть и `dh_prime`, и `(dh_prime − 1)/2`); `g` — одно из стандартных значений 2, 3, 4, 5, 6 или 7; `g_a` лежит в диапазоне `1 < g_a < dh_prime − 1`.

## Шаг 4. Завершение Диффи–Хеллмана (клиент → сервер)

7. Клиент выбирает случайное 2048-битное `b` и вычисляет:

```
g_b       = g^b mod dh_prime
auth_key  = g_a^b mod dh_prime
```

`auth_key` — ровно 2048 бит; при необходимости дополняется ведущими нулями. `auth_key_id` = последние 8 байт `SHA1(auth_key)`.

8. Клиент отправляет [`set_client_DH_params`](https://core.telegram.org/constructor/set_client_DH_params/) с зашифрованным (тем же `tmp_aes_*`) [`client_DH_inner_data`](https://core.telegram.org/constructor/client_DH_inner_data/): nonce, server_nonce, `retry_id` (0 при первой попытке) и `g_b`.

## Шаг 5. Подтверждение (сервер → клиент)

9. Сервер проверяет `g_b` (должно быть `1 < g_b < dh_prime − 1`) и вычисляет `auth_key = g_b^a mod dh_prime` — у обеих сторон получается одно и то же значение.
10. Сервер отвечает одним из конструкторов [`DhGen`](https://core.telegram.org/type/DhGen/):
    - [`dh_gen_ok`](https://core.telegram.org/constructor/dh_gen_ok/) — успех; клиент проверяет `new_nonce_hash1`: это младшие 128 бит `SHA1(new_nonce + байт 0x01 + aux_hash)`, где `aux_hash` — первые 8 байт `SHA1(auth_key)`;
    - [`dh_gen_retry`](https://core.telegram.org/constructor/dh_gen_retry/) — повторить;
    - [`dh_gen_fail`](https://core.telegram.org/constructor/dh_gen_fail/) — ошибка.

После успешного завершения ключ готов к использованию в [зашифрованных сообщениях](/mtproto/description/).

## После создания ключа

Типичные следующие шаги клиента:

- [`help.getConfig`](/method/help.getConfig/) — получить конфигурацию и адреса дата-центров;
- [`auth.bindTempAuthKey`](/method/auth.bindTempAuthKey/) — привязка временного ключа (используется, например, для сессий с ограниченным сроком жизни);
- запрос будущих значений `server_salt` — [`get_future_salts`](https://core.telegram.org/constructor/get_future_salts/) (ответ — [`future_salts`](https://core.telegram.org/constructor/future_salts/)).

## Важные замечания по безопасности

- Все случайные значения (`nonce`, `new_nonce`, `b`) должны быть криптографически случайными.
- Клиент обязан выполнять проверки простых чисел и диапазонов — см. [Рекомендации по безопасности](/mtproto/security_guidelines/).
- В устаревшей версии 1.0 использовался `req_pq` вместо `req_pq_multi`; новые реализации должны использовать 2.0 — см. [описание версии 1](/mtproto_v1/).
- Числовой разбор всех шагов с конкретными значениями — см. [Пример создания ключа](/mtproto/samples-auth_key/).
