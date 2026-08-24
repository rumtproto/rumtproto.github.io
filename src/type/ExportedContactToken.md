---
title: "ExportedContactToken"
original: "https://core.telegram.org/type/ExportedContactToken"
section: ref
kind: type
description: "Описывает временную ссылку на профиль."
layout: layout.njk
---

# ExportedContactToken

Описывает [временную ссылку на профиль](/api/links/#temporary-profile-links).

```
exportedContactToken#41bf109b url:string expires:int = ExportedContactToken;

---functions---

contacts.exportContactToken#f8654027 = ExportedContactToken;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/exportedContactToken">exportedContactToken</a></td><td>Описывает <a href="/api/links#temporary-profile-links">временную ссылку на профиль</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/contacts.exportContactToken">contacts.exportContactToken</a></td><td>Создаёт <a href="/api/links#temporary-profile-links">временную ссылку на профиль</a> для текущего авторизованного пользователя.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
