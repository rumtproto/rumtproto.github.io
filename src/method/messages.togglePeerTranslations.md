---
title: "messages.togglePeerTranslations"
original: "https://core.telegram.org/method/messages.togglePeerTranslations"
section: ref
kind: method
description: "Показать или скрыть всплывающее окно перевода чата в реальном времени для определённого чата"
layout: layout.njk
---

# messages.togglePeerTranslations

Показать или скрыть [всплывающее окно перевода чата в реальном времени](/api/translation/) для определённого чата

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.togglePeerTranslations#e47cb579 flags:# disabled:flags.0?true peer:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Отключить всплывающее окно перевода чата в реальном времени или включить его</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Перевод сообщений](/api/translation/)

Telegram позволяет переводить сообщения в чатах: пользователи Telegram Premium могут даже включить перевод чата в реальном времени.
