---
title: "messages.checkHistoryImportPeer"
original: "https://core.telegram.org/method/messages.checkHistoryImportPeer"
section: ref
kind: method
description: "Проверить, можно ли импортировать в определённый чат Telegram историю переписки, экспортированную из другого мессенджера; подробнее см. здесь »."
layout: layout.njk
---

# messages.checkHistoryImportPeer

Проверить, можно ли [импортировать в определённый чат Telegram историю переписки, экспортированную из другого мессенджера; подробнее см. здесь »](/api/import/).

Если проверка проходит успешно и не возвращается ошибок RPC, будет возвращён конструктор [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/) с текстом подтверждения, который следует показать пользователю перед фактическим началом импорта.

```
messages.checkedHistoryImportPeer#a24de717 confirm_text:string = messages.CheckedHistoryImportPeer;
---functions---
messages.checkHistoryImportPeer#5dc60f03 peer:InputPeer = messages.CheckedHistoryImportPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат, в который требуется <a href="/api/import">импортировать историю »</a>.</td></tr></tbody></table>

### Результат

[messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>USER_NOT_MUTUAL_CONTACT</td><td>Указанный пользователь не является взаимным контактом.</td></tr></tbody></table>

### Связанные страницы

#### [Импортированные сообщения](/api/import/)

Telegram позволяет импортировать сообщения и медиа из сторонних мессенджеров.

#### [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/)

Содержит текст подтверждения, который следует показать пользователю при [импорте истории переписки, подробнее см. здесь »](/api/import/).
