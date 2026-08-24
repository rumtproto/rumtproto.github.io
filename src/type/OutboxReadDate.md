---
title: "OutboxReadDate"
original: "https://core.telegram.org/type/OutboxReadDate"
section: ref
kind: type
description: "Точная дата прочтения личного сообщения, отправленного нами другому пользователю."
layout: layout.njk
---

# OutboxReadDate

Точная дата прочтения личного сообщения, отправленного нами другому пользователю.

```
outboxReadDate#3bb842ac date:int = OutboxReadDate;

---functions---

messages.getOutboxReadDate#8c4bfe5d peer:InputPeer msg_id:int = OutboxReadDate;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/outboxReadDate">outboxReadDate</a></td><td>Точная дата прочтения личного сообщения, отправленного нами другому пользователю.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getOutboxReadDate">messages.getOutboxReadDate</a></td><td>[@term:peer] Получить точную дату прочтения одного из наших сообщений, отправленных в личный чат с другим пользователем.<br><br>Возможно только для исходящих личных сообщений не старше <a href="/api/config#pm-read-date-expire-period">appConfig.pm_read_date_expire_period »</a>.<br><br>Если у <code>peer</code> установлен флаг <a href="/constructor/userFull">userFull</a>.<code>read_dates_private</code>, мы не сможем получить точную дату прочтения отправленных ему сообщений, и будет возвращена ошибка RPC <code>USER_PRIVACY_RESTRICTED</code>.<br>Точная дата прочтения сообщений может быть недоступна и по другим причинам, подробнее см. <a href="/constructor/globalPrivacySettings">здесь »</a>.<br>Чтобы установить <a href="/constructor/userFull">userFull</a>.<code>read_dates_private</code> для себя, вызовите <a href="/method/account.setGlobalPrivacySettings">account.setGlobalPrivacySettings</a>, установив флаг <code>settings.hide_read_marks</code>.</td></tr></tbody></table>
