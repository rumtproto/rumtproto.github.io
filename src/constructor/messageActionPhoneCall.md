---
title: "messageActionPhoneCall"
original: "https://core.telegram.org/constructor/messageActionPhoneCall"
section: ref
kind: constructor
description: "Телефонный звонок"
layout: layout.njk
---

# messageActionPhoneCall

Телефонный звонок

```
messageActionPhoneCall#80e11a7f flags:# video:flags.2?true call_id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Является ли это видеозвонком?</td></tr><tr><td><strong>call_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор звонка</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PhoneCallDiscardReason">PhoneCallDiscardReason</a></td><td>Если звонок завершён — причина его завершения</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Длительность звонка в секундах</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)
