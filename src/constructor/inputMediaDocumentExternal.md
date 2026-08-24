---
title: "inputMediaDocumentExternal"
original: "https://core.telegram.org/constructor/inputMediaDocumentExternal"
section: ref
kind: constructor
description: "Документ, который будет загружен серверами Telegram"
layout: layout.njk
---

# inputMediaDocumentExternal

Документ, который будет загружен серверами Telegram

```
inputMediaDocumentExternal#779600f9 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int video_cover:flags.2?InputPhoto video_timestamp:flags.3?int = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли скрыть это медиа за предупреждением о спойлере</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL документа</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Время жизни самоуничтожающегося документа; может быть равно <code>0</code>, чтобы отключить самоуничтожение, или <code>0x7FFFFFFF</code>, чтобы документ уничтожился сразу после воспроизведения; в остальных случаях документ самоуничтожается через <code>ttl_seconds</code> после воспроизведения.</td></tr><tr><td><strong>video_cover</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputPhoto">InputPhoto</a></td><td>Пользовательская обложка видео.</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Начать воспроизведение видео с указанной отметки времени (в секундах).</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)
