---
title: "chatlists.hideChatlistUpdates"
original: "https://core.telegram.org/method/chatlists.hideChatlistUpdates"
section: ref
kind: method
description: "Отклонить новых ожидающих пиров, недавно добавленных по глубокой ссылке на папку чатов »."
layout: layout.njk
---

# chatlists.hideChatlistUpdates

Отклонить новых ожидающих пиров, недавно добавленных по [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
chatlists.hideChatlistUpdates#66e486fb chatlist:InputChatlist = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist">InputChatlist</a></td><td>Папка</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>Указанный идентификатор фильтра недействителен.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>Указанный фильтр нельзя использовать в этом контексте.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
