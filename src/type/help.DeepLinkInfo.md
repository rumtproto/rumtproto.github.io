---
title: "help.DeepLinkInfo"
original: "https://core.telegram.org/type/help.DeepLinkInfo"
section: ref
kind: type
description: "Содержит информацию о неподдерживаемой глубокой ссылке »"
layout: layout.njk
---

# Help.DeepLinkInfo

Содержит информацию о неподдерживаемой [глубокой ссылке »](/api/links/#unsupported-links)

```
help.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;
help.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;

---functions---

help.getDeepLinkInfo#3fedc75f path:string = help.DeepLinkInfo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.deepLinkInfoEmpty">help.deepLinkInfoEmpty</a></td><td>Информация о глубокой ссылке отсутствует</td></tr><tr><td><a href="/constructor/help.deepLinkInfo">help.deepLinkInfo</a></td><td>Информация о глубокой ссылке, <a href="/api/links#unsupported-links">подробнее см. здесь</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getDeepLinkInfo">help.getDeepLinkInfo</a></td><td>Получить информацию о неподдерживаемой глубокой ссылке, <a href="/api/links#unsupported-links">подробнее см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
