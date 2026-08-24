---
title: "inputBusinessIntro"
original: "https://core.telegram.org/constructor/inputBusinessIntro"
section: ref
kind: constructor
description: "Введение в Telegram Business »."
layout: layout.njk
---

# inputBusinessIntro

[Введение в Telegram Business »](/api/business/#business-introduction).

```
inputBusinessIntro#9c469cd flags:# title:string description:string sticker:flags.0?InputDocument = InputBusinessIntro;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Заголовок приветственного сообщения</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание профиля</td></tr><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputDocument">InputDocument</a></td><td>Необязательный приветственный <a href="/api/stickers">стикер</a>.</td></tr></tbody></table>

### Тип

[InputBusinessIntro](/type/InputBusinessIntro/)

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
