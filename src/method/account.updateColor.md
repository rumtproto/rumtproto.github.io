---
title: "account.updateColor"
original: "https://core.telegram.org/method/account.updateColor"
section: ref
kind: method
description: "Обновить акцентный цвет и фоновый пользовательский эмодзи » текущей учётной записи."
layout: layout.njk
---

# account.updateColor

Обновить [акцентный цвет и фоновый пользовательский эмодзи »](/api/colors/) текущей учётной записи.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateColor#684d214e flags:# for_profile:flags.1?true color:flags.2?PeerColor = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>for_profile</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Менять ли акцентный цвет и узор из эмодзи на странице профиля; иначе будут изменены акцентный цвет и узор из эмодзи в сообщениях.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/PeerColor">PeerColor</a></td><td><a href="/api/colors">Идентификатор используемой палитры акцентных цветов »</a> (не RGB24, подробнее см. <a href="/api/colors">здесь »</a>).</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>COLOR_INVALID</td><td>Указанный идентификатор цветовой палитры недействителен.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr></tbody></table>

### Связанные страницы

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
