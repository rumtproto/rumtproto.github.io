---
title: "contacts.resolvePhone"
original: "https://core.telegram.org/method/contacts.resolvePhone"
section: ref
kind: method
description: "Разрешить номер телефона, чтобы получить сведения о пользователе, если это допускают его настройки конфиденциальности."
layout: layout.njk
---

# contacts.resolvePhone

Разрешить номер телефона, чтобы получить сведения о пользователе, если это допускают его настройки конфиденциальности.

Обязательно реализуйте на стороне клиента ограничение частоты вызовов и подавление дребезга для этого метода, допуская не более 1 вызова каждые 3 секунды.

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;
---functions---
contacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона в международном формате, возможно полученный из <a href="/api/links#phone-number-links">глубокой ссылки на номер телефона</a>.</td></tr></tbody></table>

### Результат

[contacts.ResolvedPeer](/type/contacts.ResolvedPeer/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PHONE_NOT_OCCUPIED</td><td>С указанным номером телефона не связан ни один пользователь.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
