---
title: "Сервисные сообщения"
original: "https://core.telegram.org/mtproto/service_messages"
section: mtproto
layout: layout.njk
---

# Сервисные сообщения

Оригинальное русскоязычное описание служебных сообщений слоя MTProto. Первоисточник: [core.telegram.org/mtproto/service_messages](https://core.telegram.org/mtproto/service_messages).

Служебные сообщения не относятся к пользовательским данным: они обеспечивают сам обмен — доставку ответов, подтверждения, пересылку и управление сессией. Все перечисленные ниже конструкторы входят в [схему слоя MTProto](/schema/mtproto/).

## Ответы на запросы

### [`rpc_result`](https://core.telegram.org/constructor/rpc_result/) — результат запроса

Сервер возвращает результат вызова метода: `req_msg_id` — идентификатор сообщения-запроса, далее — сериализованный результат (значение типа схемы или `rpc_error`).

```
rpc_result#f35c6d01 req_msg_id:long result:Object = RpcResult;
```

### [`rpc_error`](https://core.telegram.org/constructor/rpc_error/) — ошибка RPC

Возвращается вместо результата, если запрос не может быть выполнен: числовой `error_code` и строковый `error_message` (например, `PHONE_CODE_INVALID`). Поведение клиента при типовых кодах описано в разделе [Ошибки](/api/errors/).

### [`rpc_answer`](https://core.telegram.org/constructor/rpc_answer/) — ответ на запрос отмены

Ответ на [`rpc_drop_answer`](https://core.telegram.org/constructor/rpc_drop_answer/): что произошло с запросом, который клиент хотел «отменить» (ответ ещё не был вычислен / уже был вычислен / других запросов нет).

## Подтверждения и синхронизация

### [`msgs_ack`](https://core.telegram.org/constructor/msgs_ack/) — подтверждение получения

Список идентификаторов сообщений, которые сторона получила. Не требует ответа. Используется в обе стороны; см. также [Сообщения о сообщениях](/mtproto/service_messages_about_messages/).

### [`future_salts`](https://core.telegram.org/constructor/future_salts/) — будущие соли

Ответ на [`get_future_salts`](https://core.telegram.org/constructor/get_future_salts/): текущая `server_salt` и набор будущих солей с временами действия. Клиент использует их, чтобы заранее знать актуальную соль и не прерывать обмен при её смене.

### [`new_session_created`](https://core.telegram.org/constructor/new_session_created/) — уведомление о новой сессии

Сервер отправляет его первым сообщением, когда для клиента начинается новая сессия (например, после переподключения с прежним `session_id`). Содержит `first_msg_id` (идентификатор первого сообщения, созданного сервером в этой сессии), `unique_id` и актуальную `server_salt` — так клиент понимает, какие сообщения уже были обработаны.

### Пинги: [`ping`](https://core.telegram.org/constructor/ping/), [`pong`](https://core.telegram.org/constructor/pong/), [`ping_delay_disconnect`](https://core.telegram.org/constructor/ping_delay_disconnect/)

Пинги служат для проверки связи и измерения времени. На `ping` сервер отвечает `pong` с тем же `ping_id`; `ping_delay_disconnect` дополнительно просит сервер разорвать соединение, если от клиента в течение указанного времени не придёт ни одного сообщения. [`http_wait`](https://core.telegram.org/constructor/http_wait/) — аналог ожидания для HTTP-транспорта.

## Управление сессиями и ключами

### [`destroy_session`](https://core.telegram.org/constructor/destroy_session/) / [`destroy_sessions`](https://core.telegram.org/constructor/destroy_sessions/)

Просьба завершить чужую сессию по её `session_id` (например, «старую» сессию этого же приложения на другом устройстве). Ответы — [`destroy_session_ok`](https://core.telegram.org/constructor/destroy_session_ok/) / [`destroy_session_none`](https://core.telegram.org/constructor/destroy_session_none/).

### [`destroy_auth_key`](https://core.telegram.org/constructor/destroy_auth_key/)

Уничтожение текущего `auth_key` (выход из аккаунта на устройстве, отзыв ключа). Ответы — [`destroy_auth_key_ok`](https://core.telegram.org/constructor/destroy_auth_key_ok/), [`destroy_auth_key_none`](https://core.telegram.org/constructor/destroy_auth_key_none/), [`destroy_auth_key_fail`](https://core.telegram.org/constructor/destroy_auth_key_fail/).

## Упаковка и сжатие

### [`msg_container`](https://core.telegram.org/constructor/msg_container/) — контейнер сообщений

Несколько сообщений в одном зашифрованном блоке; правила и ограничения — в [подробном описании](/mtproto/description/#контейнеры).

### [`msg_copy`](https://core.telegram.org/constructor/msg_copy/) — копия сообщения

Обёртка, с помощью которой сообщение можно продублировать по его идентификатору; на практике обычно обходятся повторной отправкой.

### [`gzip_packed`](https://core.telegram.org/constructor/gzip_packed/) — сжатый ответ

Большой результат, сжатый gzip: клиент обязан распаковать `packed_data` и продолжить разбор как обычно.

## Что читать дальше

- [Сообщения о сообщениях](/mtproto/service_messages_about_messages/) — запросы состояния, повторная отправка.
- [Подробное описание протокола](/mtproto/description/).
