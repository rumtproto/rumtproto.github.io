---
title: "contacts.exportContactToken"
original: "https://core.telegram.org/method/contacts.exportContactToken"
section: ref
kind: method
description: "Создаёт временную ссылку на профиль для текущего авторизованного пользователя."
layout: layout.njk
---

# contacts.exportContactToken

Создаёт [временную ссылку на профиль](/api/links/#temporary-profile-links) для текущего авторизованного пользователя.

```
exportedContactToken#41bf109b url:string expires:int = ExportedContactToken;
---functions---
contacts.exportContactToken#f8654027 = ExportedContactToken;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[ExportedContactToken](/type/ExportedContactToken/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
