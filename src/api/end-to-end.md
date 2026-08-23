---
title: "Секретные чаты (сквозное шифрование)"
original: "https://core.telegram.org/api/end-to-end"
section: api
layout: layout.njk
---

# Секретные чаты (сквозное шифрование)

Оригинальное русскоязычное описание устройства секретных чатов. Первоисточник: [core.telegram.org/api/end-to-end](https://core.telegram.org/api/end-to-end).

Секретный чат — диалог, содержимое которого шифруется так, что расшифровать его могут только устройства двух участников; сервер видит лишь зашифрованные данные. Поверх основного [протокола](/mtproto/) добавляется собственный слой шифрования со своими ключами и правилами.

## Ключи секретного чата

- При создании чата стороны обмениваются публичными ключами Диффи–Хеллмана (по 2048 бита): это происходит в процессе установки секретного чата ([`messages.requestEncryption`](/method/messages.requestEncryption/) → [`messages.acceptEncryption`](/method/messages.acceptEncryption/), значения `g_a`/`g_b` передаются в конструкторах [`EncryptedChat`](/type/EncryptedChat/)).
- Последующая смена ключей выполняется служебными действиями [`decryptedMessageActionRequestKey`](/constructor/decryptedMessageActionRequestKey/) / [`decryptedMessageActionAcceptKey`](/constructor/decryptedMessageActionAcceptKey/) / [`decryptedMessageActionCommitKey`](/constructor/decryptedMessageActionCommitKey/) — см. [Perfect Forward Secrecy](/api/pfs/).
- Общий секрет `chat_key = g^(a*b) mod p` используется для вывода ключей шифрования сообщений.
- У ключа есть `key_fingerprint` (отпечаток, 64 бита) — им помечаются сообщения, и по нему стороны определяют, каким ключом шифровать и расшифровывать, пока идёт смена ключей.
- Проверка отпечатка в интерфейсе («сравнение ключей») позволяет пользователям убедиться в отсутствии подмены.

## Формат зашифрованного сообщения секретного чата

Сообщение передаётся внутри [`EncryptedMessage`](/constructor/encryptedMessage/) (или [`EncryptedMessageService`](/constructor/encryptedMessageService/)):

- Ключ шифрования выводится из `chat_key` и `msg_key`.
- Открытый текст устроен так: `random` (32 байта) | длина сообщения (4 байта) | сериализованное сообщение слоя секретных чатов | случайное дополнение до кратности 16.
- После расшифровки клиент проверяет корректность длины и пересчитывает `msg_key` — он должен совпасть с вычисленным из открытого текста.

Схемы самого слоя — в [справочнике слоя end-to-end](/schema/end-to-end/); содержимое — [`DecryptedMessage`](/type/DecryptedMessage/), вложения — [`DecryptedMessageMedia`](/type/DecryptedMessageMedia/), служебные действия — [`DecryptedMessageAction`](/type/DecryptedMessageAction/).

## Обязательные проверки клиента

1. Проверять `key_fingerprint` входящего сообщения: неизвестный отпечаток означает, что нужно дождаться завершения обмена ключами (или запросить ключ заново).
2. Пересчитывать и сравнивать `msg_key` после расшифровки.
3. Отсеивать повторы по `random`/`date` и по внутренним идентификаторам.
4. При смене ключей не принимать сообщения со старым ключом после фиксации нового.

## Возможности слоя

- Самоуничтожение сообщений по таймеру ([`decryptedMessageActionSetMessageTTL`](/constructor/decryptedMessageActionSetMessageTTL/)).
- Подтверждения прочтения ([`decryptedMessageActionReadMessages`](/constructor/decryptedMessageActionReadMessages/)).
- Уведомление о скриншоте ([`decryptedMessageActionScreenshotMessages`](/constructor/decryptedMessageActionScreenshotMessages/)).
- Удаление истории ([`decryptedMessageActionFlushHistory`](/constructor/decryptedMessageActionFlushHistory/)).

## Ограничения

- Секретные чаты привязаны к устройству: они не синхронизируются между устройствами одного пользователя.
- Групповых секретных чатов нет; только «один на один».
- Звонки и видеозвонки используют собственное сквозное шифрование — см. оригинальные статьи о [звонках](https://core.telegram.org/api/calls/) и [видеозвонках](https://core.telegram.org/api/end-to-end/video-calls/).
