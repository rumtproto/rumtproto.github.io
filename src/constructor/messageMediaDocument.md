---
title: "messageMediaDocument"
original: "https://core.telegram.org/constructor/messageMediaDocument"
section: ref
kind: constructor
description: "Документ (видео, аудио, голосовое сообщение, стикер, любой тип медиа, кроме фотографии)"
layout: layout.njk
---

# messageMediaDocument

Документ (видео, аудио, голосовое сообщение, стикер, любой тип медиа, кроме фотографии)

```
messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>nopremium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли это обычным стикером; если флаг не установлен, это премиум-стикер и необходимо воспроизвести премиум-анимацию стикера.</td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Следует ли скрыть это медиа за предупреждением о спойлере</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Является ли это видео.</td></tr><tr><td><strong>round</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Является ли это видеосообщением.</td></tr><tr><td><strong>voice</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Является ли это голосовым сообщением.</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Document">Document</a></td><td>Вложенный документ</td></tr><tr><td><strong>alt_documents</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Только для видео: содержит альтернативные качества видео.</td></tr><tr><td><strong>video_cover</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/Photo">Photo</a></td><td>Пользовательская обложка видео.</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Начать воспроизведение видео с указанной отметки времени (в секундах).</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Время жизни самоуничтожающегося документа; может быть равно <code>0</code>, чтобы отключить самоуничтожение, или <code>0x7FFFFFFF</code>, чтобы документ уничтожился сразу после воспроизведения; в остальных случаях документ самоуничтожается через <code>ttl_seconds</code> после воспроизведения.</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)
