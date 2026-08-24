---
title: "peerColor"
original: "https://core.telegram.org/constructor/peerColor"
section: ref
kind: constructor
description: "Представляет цветовую палитру »."
layout: layout.njk
---

# peerColor

Представляет [цветовую палитру »](/api/colors/).

```
peerColor#b54b5acf flags:# color:flags.0?int background_emoji_id:flags.1?long = PeerColor;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td><a href="/api/colors">Идентификатор цветовой палитры, подробнее см. здесь »</a>; если не задан, следует использовать палитру по умолчанию.</td></tr><tr><td><strong>background_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>Необязательный <a href="/api/custom-emoji">идентификатор пользовательского эмодзи</a>, используемый для построения узора.</td></tr></tbody></table>

### Тип

[PeerColor](/type/PeerColor/)

### Связанные страницы

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
