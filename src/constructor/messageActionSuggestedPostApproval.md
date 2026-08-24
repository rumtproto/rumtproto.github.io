---
title: "messageActionSuggestedPostApproval"
original: "https://core.telegram.org/constructor/messageActionSuggestedPostApproval"
section: ref
kind: constructor
description: "Предлагаемый пост » был одобрен или отклонён."
layout: layout.njk
---

# messageActionSuggestedPostApproval

[Предлагаемый пост »](/api/suggested-posts/) был одобрен или отклонён.

```
messageActionSuggestedPostApproval#ee7a1596 flags:# rejected:flags.0?true balance_too_low:flags.1?true reject_comment:flags.2?string schedule_date:flags.3?int price:flags.4?StarsAmount = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>rejected</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Был ли предлагаемый пост отклонён.</td></tr><tr><td><strong>balance_too_low</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, пост был одобрен, но баланса пользователя недостаточно для оплаты предлагаемого поста.</td></tr><tr><td><strong>reject_comment</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Если предлагаемый пост был отклонён, может содержать комментарий к отклонению.</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Дата отправки.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/StarsAmount">StarsAmount</a></td><td>Цена предлагаемого поста.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.
