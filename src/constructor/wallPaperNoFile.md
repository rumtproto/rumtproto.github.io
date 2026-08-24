---
title: "wallPaperNoFile"
original: "https://core.telegram.org/constructor/wallPaperNoFile"
section: ref
kind: constructor
description: "Представляет обои, построенные только на цветах или градиентах."
layout: layout.njk
---

# wallPaperNoFile

Представляет [обои](/api/wallpapers/), построенные только на цветах или градиентах.

```
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор обоев</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>default</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Являются ли это обоями по умолчанию</td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Следует ли использовать эти обои в тёмной теме.</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/WallPaperSettings">WallPaperSettings</a></td><td>Информация о том, как построить обои.</td></tr></tbody></table>

### Тип

[WallPaper](/type/WallPaper/)

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
