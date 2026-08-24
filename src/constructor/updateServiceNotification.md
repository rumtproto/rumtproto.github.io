---
title: "updateServiceNotification"
original: "https://core.telegram.org/constructor/updateServiceNotification"
section: ref
kind: constructor
description: "Сервисное сообщение для пользователя."
layout: layout.njk
---

# updateServiceNotification

Сервисное сообщение для пользователя.

При получении этого обновления приложение обязано показать сообщение пользователю. Если был передан параметр **popup**, текст сообщения необходимо сразу же вывести во всплывающем окне. Текст рекомендуется обрабатывать так же, как обычное сообщение: подсвечивать ссылки и т. п. Кроме того, сообщение необходимо сохранить локально в истории переписки с пользователем `777000` (Telegram Notifications).

```
updateServiceNotification#ebe46819 flags:# popup:flags.0?true invert_media:flags.2?true inbox_date:flags.1?int type:string message:string media:MessageMedia entities:Vector<MessageEntity> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>popup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, сообщение должно быть показано во всплывающем окне.</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>inbox_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Когда было получено уведомление<br>Сообщение также должно храниться локально как часть истории переписки с пользователем с идентификатором <code>777000</code> (Telegram Notifications).</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Строка, по формату и содержимому совпадающая с полем <a href="/api/errors#error-type"><strong>type</strong></a> в ошибках API. Описывает тип сервисного сообщения. Допускается игнорировать повторяющиеся сообщения одного и того же <strong>типа</strong> в течение короткого промежутка времени (15 минут).</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст сообщения</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/MessageMedia">MessageMedia</a></td><td>Содержимое медиа (необязательно)</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Обработка ошибок](/api/errors/)

Как правильно обрабатывать ошибки, возвращаемые API.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
