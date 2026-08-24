---
title: "messageMediaWebPage"
original: "https://core.telegram.org/constructor/messageMediaWebPage"
section: ref
kind: constructor
description: "Предпросмотр веб-страницы"
layout: layout.njk
---

# messageMediaWebPage

Предпросмотр веб-страницы

```
messageMediaWebPage#ddf10c3b flags:# force_large_media:flags.0?true force_small_media:flags.1?true manual:flags.3?true safe:flags.4?true webpage:WebPage = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>force_large_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что следует использовать крупный предпросмотр медиа.</td></tr><tr><td><strong>force_small_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что следует использовать небольшой предпросмотр медиа.</td></tr><tr><td><strong>manual</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что URL для предпросмотра веб-страницы был задан вручную с помощью <a href="/constructor/inputMediaWebPage">inputMediaWebPage</a> и может не иметь отношения ни к одному из URL, указанных в сообщении.</td></tr><tr><td><strong>safe</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если установлено, веб-страницу можно открыть сразу без подтверждения пользователя; в противном случае требуется подтверждение пользователя с показом точного URL, который будет открыт.</td></tr><tr><td><strong>webpage</strong></td><td style="text-align: center;"><a href="/type/WebPage">WebPage</a></td><td>Предпросмотр веб-страницы</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [inputMediaWebPage](/constructor/inputMediaWebPage/)

Задаёт параметры, которые будут использованы для создания предпросмотра ссылки в подписи, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения.
