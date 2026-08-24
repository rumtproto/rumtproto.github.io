---
title: "webViewMessageSent"
original: "https://core.telegram.org/constructor/webViewMessageSent"
section: ref
kind: constructor
description: "Информация об отправленном инлайн-сообщении с веб-представлением"
layout: layout.njk
---

# webViewMessageSent

Информация об отправленном инлайн-сообщении с веб-представлением

```
webViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputBotInlineMessageID">InputBotInlineMessageID</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr></tbody></table>

### Тип

[WebViewMessageSent](/type/WebViewMessageSent/)
