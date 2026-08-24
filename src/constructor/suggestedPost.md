---
title: "suggestedPost"
original: "https://core.telegram.org/constructor/suggestedPost"
section: ref
kind: constructor
description: "Содержит информацию о предлагаемом посте »."
layout: layout.njk
---

# suggestedPost

Содержит информацию о [предлагаемом посте »](/api/suggested-posts/).

```
suggestedPost#e8e37e5 flags:# accepted:flags.1?true rejected:flags.2?true price:flags.3?StarsAmount schedule_date:flags.0?int = SuggestedPost;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>accepted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Был ли предлагаемый пост принят.</td></tr><tr><td><strong>rejected</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Был ли предлагаемый пост отклонён.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/StarsAmount">StarsAmount</a></td><td>Цена предлагаемого поста.</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Дата отправки.</td></tr></tbody></table>

### Тип

[SuggestedPost](/type/SuggestedPost/)

### Связанные страницы

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.
