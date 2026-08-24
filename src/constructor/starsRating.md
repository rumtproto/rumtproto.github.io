---
title: "starsRating"
original: "https://core.telegram.org/constructor/starsRating"
section: ref
kind: constructor
description: "Представляет звёздный рейтинг профиля, подробнее см. здесь »."
layout: layout.njk
---

# starsRating

Представляет [звёздный рейтинг профиля, подробнее см. здесь »](/api/stars/#star-rating).

```
starsRating#1b0e4f07 flags:# level:int current_level_stars:long stars:long next_level_stars:flags.0?long = StarsRating;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>level</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Текущий уровень, может быть отрицательным.</td></tr><tr><td><strong>current_level_stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Числовое значение рейтинга, необходимое для текущего уровня.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Числовое значение текущего рейтинга.</td></tr><tr><td><strong>next_level_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Числовое значение рейтинга, необходимое для следующего уровня.</td></tr></tbody></table>

### Тип

[StarsRating](/type/StarsRating/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
