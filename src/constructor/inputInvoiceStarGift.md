---
title: "inputInvoiceStarGift"
original: "https://core.telegram.org/constructor/inputInvoiceStarGift"
section: ref
kind: constructor
description: "Используется для покупки звёздного подарка Telegram, подробнее см. здесь »."
layout: layout.njk
---

# inputInvoiceStarGift

Используется для покупки [звёздного подарка Telegram, подробнее см. здесь »](/api/gifts/).

```
inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>hide_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, ваше имя будет скрыто, если пользователь-получатель решит показать подарок в своём профиле (он всё равно будет видеть, что подарок отправили вы)</td></tr><tr><td><strong>include_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Также оплатить возможное превращение подарка в <a href="/api/gifts#collectible-gifts">коллекционный подарок »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Получатель подарка.</td></tr><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор подарка, из <a href="/constructor/starGift">starGift</a>.<code>id</code></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Необязательное сообщение, приложенное к подарку.<br>Максимальная длина этого поля указана в <a href="/api/config#stargifts-message-length-max">значении клиентской конфигурации stargifts_message_length_max »</a>.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [starGift](/constructor/starGift/)

Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/).

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
