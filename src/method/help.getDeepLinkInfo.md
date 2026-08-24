---
title: "help.getDeepLinkInfo"
original: "https://core.telegram.org/method/help.getDeepLinkInfo"
section: ref
kind: method
description: "Получить информацию о неподдерживаемой глубокой ссылке, подробнее см. здесь »."
layout: layout.njk
---

# help.getDeepLinkInfo

Получить информацию о неподдерживаемой глубокой ссылке, [подробнее см. здесь »](/api/links/#unsupported-links).

```
help.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;
help.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;
---functions---
help.getDeepLinkInfo#3fedc75f path:string = help.DeepLinkInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>path</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Компонент пути ссылки <code>tg:</code></td></tr></tbody></table>

### Результат

[help.DeepLinkInfo](/type/help.DeepLinkInfo/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
