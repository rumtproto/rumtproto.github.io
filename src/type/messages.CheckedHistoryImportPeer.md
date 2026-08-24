---
title: "messages.CheckedHistoryImportPeer"
original: "https://core.telegram.org/type/messages.CheckedHistoryImportPeer"
section: ref
kind: type
description: "Содержит текст подтверждения, который следует показать пользователю при импорте истории переписки, подробнее см. здесь »."
layout: layout.njk
---

# messages.CheckedHistoryImportPeer

Содержит текст подтверждения, который следует показать пользователю при [импорте истории переписки, подробнее см. здесь »](/api/import/).

```
messages.checkedHistoryImportPeer#a24de717 confirm_text:string = messages.CheckedHistoryImportPeer;

---functions---

messages.checkHistoryImportPeer#5dc60f03 peer:InputPeer = messages.CheckedHistoryImportPeer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.checkedHistoryImportPeer">messages.checkedHistoryImportPeer</a></td><td>Содержит текст подтверждения, который следует показать пользователю при <a href="/api/import">импорте истории чата, подробнее см. здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.checkHistoryImportPeer">messages.checkHistoryImportPeer</a></td><td>Проверить, можно ли <a href="/api/import">импортировать в определённый чат Telegram историю переписки, экспортированную из другого мессенджера; подробнее см. здесь »</a>.<br><br>Если проверка прошла успешно и ошибок RPC не возвращено, будет возвращён конструктор <a href="/type/messages.CheckedHistoryImportPeer">messages.CheckedHistoryImportPeer</a> с текстом подтверждения, который следует показать пользователю перед фактическим запуском импорта.</td></tr></tbody></table>

### Связанные страницы

#### [Импортированные сообщения](/api/import/)

Telegram позволяет импортировать сообщения и медиа из сторонних мессенджеров.
