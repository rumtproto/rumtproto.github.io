---
title: "inputMediaDocument"
original: "https://core.telegram.org/constructor/inputMediaDocument"
section: ref
kind: constructor
description: "Пересланный документ"
layout: layout.njk
---

# inputMediaDocument

Пересланный документ

```
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Следует ли скрыть это медиа за предупреждением о спойлере</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Документ, который требуется переслать.</td></tr><tr><td><strong>video_cover</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/InputPhoto">InputPhoto</a></td><td>Пользовательская обложка видео.</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Начать воспроизведение видео с указанной отметки времени (в секундах).</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Время жизни самоуничтожающегося документа; может быть равно <code>0</code>, чтобы отключить самоуничтожение, или <code>0x7FFFFFFF</code>, чтобы документ уничтожился сразу после воспроизведения; в остальных случаях документ самоуничтожается через <code>ttl_seconds</code> после воспроизведения.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Текстовый запрос или эмодзи, по которому пользователь нашёл этот стикер или GIF: используется для повышения релевантности результатов поиска.</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)
