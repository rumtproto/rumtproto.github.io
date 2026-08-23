---
title: "Вызов методов"
original: "https://core.telegram.org/api/invoking"
section: api
layout: layout.njk
---

# Вызов методов

Оригинальное русскоязычное описание правил вызова методов схемы. Первоисточник: [core.telegram.org/api/invoking](https://core.telegram.org/api/invoking).

Метод схемы — это RPC-запрос: клиент сериализует конструктор метода и отправляет его как тело зашифрованного сообщения ([формат](/mtproto/description/)); сервер отвечает результатом через [`rpc_result`](https://core.telegram.org/constructor/rpc_result/) или ошибкой [`rpc_error`](https://core.telegram.org/constructor/rpc_error/).

## Слои (layers)

Схема версионируется слоями: каждый клиент сообщает серверу, какую версию схемы он понимает.

- Первый запрос авторизованной сессии оборачивается в цепочку: [`invokeWithLayer`](/method/invokeWithLayer/) (номер актуального слоя) → [`initConnection`](/method/initConnection/) (параметры приложения и устройства) → сам запрос.
- Пока клиент не сообщил слой, сервер отвечает схемой минимальной совместимости.
- История изменений схемы по слоям — на странице [Слои схемы](/api/layers/).

## Повторные вызовы и идемпотентность

- Методы с побочными эффектами (отправка сообщений, платежи и т.п.) принимают `random_id` — повторный вызов с тем же `random_id` не создаёт дубликат.
- Повторно отправлять сам запрос на уровне протокола допустимо (с тем же `message_id`), если он точно не был доставлен; см. [сообщения о сообщениях](/mtproto/service_messages_about_messages/).

## Ограничения и ошибки

- **Флуд-контроль**: ошибка `FLOOD_WAIT_N` — повторить не раньше чем через `N` секунд. Поведение по типовым кодам — в [ошибках](/api/errors/).
- **Таймауты**: если ответ не приходит разумное время, запросите состояние ([`msg_resend_req`](https://core.telegram.org/constructor/msg_resend_req/)), а не дублируйте запрос с новым идентификатором.
- **Отмена**: [`rpc_drop_answer`](https://core.telegram.org/constructor/rpc_drop_answer/) позволяет отказаться от ожидания ответа (например, для «долгих» запросов при уходе в фон).

## Полезные обёртки

- [`invokeWithoutUpdates`](/method/invokeWithoutUpdates/) — не присылать обновления, порождённые этим запросом.
- [`invokeWithMessagesRange`](/method/invokeWithMessagesRange/) / [`invokeWithTakeout`](/method/invokeWithTakeout/) — вызовы в контексте диапазона сообщений / выгрузки данных.
- [`invokeAfterMsg`](/method/invokeAfterMsg/) — просить сервер выполнить запрос после указанного (упорядочивание).
