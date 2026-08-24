---
title: "mediaAreaSuggestedReaction"
original: "https://core.telegram.org/constructor/mediaAreaSuggestedReaction"
section: ref
kind: constructor
description: "Представляет пузырёк реакции."
layout: layout.njk
---

# mediaAreaSuggestedReaction

Представляет пузырёк реакции.

```
mediaAreaSuggestedReaction#14455871 flags:# dark:flags.0?true flipped:flags.1?true coordinates:MediaAreaCoordinates reaction:Reaction = MediaArea;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Имеет ли пузырёк реакции тёмный фон.</td></tr><tr><td><strong>flipped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Отражён ли пузырёк реакции зеркально (подробнее <a href="/api/stories#reactions">см. здесь »</a>).</td></tr><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates">MediaAreaCoordinates</a></td><td>Координаты медиа-области, соответствующей кнопке реакции.</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction">Reaction</a></td><td>Реакция, которая должна отправляться при нажатии на эту область.</td></tr></tbody></table>

### Тип

[MediaArea](/type/MediaArea/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
