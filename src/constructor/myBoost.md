---
title: "myBoost"
original: "https://core.telegram.org/constructor/myBoost"
section: ref
kind: constructor
description: "Содержит информацию об одном слоте буста »."
layout: layout.njk
---

# myBoost

Содержит информацию об одном [слоте буста »](/api/boost/).

```
myBoost#c448415c flags:# slot:int peer:flags.0?Peer date:int expires:int cooldown_until_date:flags.1?int = MyBoost;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>slot</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/boost">Идентификатор слота буста »</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>[@term:peer] Если установлено, указывает, что этот слот сейчас занят, то есть мы <a href="/api/boost">бустим</a> этого пира.<br>Обратите внимание, что одному и тому же пиру можно назначить несколько слотов буста.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда (unixtime) мы начали бустить <code>peer</code>, иначе <code>0</code>.</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Указывает дату истечения буста в <code>peer</code> (unixtime) (<code>0</code>, если <code>peer</code> не задан).</td></tr><tr><td><strong>cooldown_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Если задано поле <code>peer</code>, указывает дату (unixtime), после которой этот буст можно переназначить другому каналу.</td></tr></tbody></table>

### Тип

[MyBoost](/type/MyBoost/)

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
