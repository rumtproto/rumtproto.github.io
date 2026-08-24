---
title: "inputEmojiStatusCollectible"
original: "https://core.telegram.org/constructor/inputEmojiStatusCollectible"
section: ref
kind: constructor
description: "Принадлежащий вам или размещённый коллекционный подарок » в качестве эмодзи-статуса: может использоваться только в account.updateEmojiStatus, никогда не возвращается API."
layout: layout.njk
---

# inputEmojiStatusCollectible

Принадлежащий вам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса: может использоваться только в [account.updateEmojiStatus](/method/account.updateEmojiStatus/), никогда не возвращается API.

Учтите, что после установки статус будет возвращаться пользователям в виде конструктора [emojiStatusCollectible](/constructor/emojiStatusCollectible/) (который **нельзя** передавать в [account.updateEmojiStatus](/method/account.updateEmojiStatus/) — его необходимо сначала преобразовать в [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)).

```
inputEmojiStatusCollectible#7141dbf flags:# collectible_id:long until:flags.0?int = EmojiStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>collectible_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор коллекционного подарка (из <a href="/constructor/starGiftUnique">starGiftUnique</a>.<code>id</code>).</td></tr><tr><td><strong>until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, эмодзи-статус будет активен до указанного unixtime.</td></tr></tbody></table>

### Тип

[EmojiStatus](/type/EmojiStatus/)

### Связанные страницы

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [account.updateEmojiStatus](/method/account.updateEmojiStatus/)

Установить [эмодзи-статус](/api/emoji-status/)

#### [emojiStatusCollectible](/constructor/emojiStatusCollectible/)

Принадлежащий вам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса.

**Нельзя** передать в [account.updateEmojiStatus](/method/account.updateEmojiStatus/): перед вызовом этого метода объект необходимо преобразовать в [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/).

#### [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)

Принадлежащий вам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса: может использоваться только в [account.updateEmojiStatus](/method/account.updateEmojiStatus/), никогда не возвращается API.

Учтите, что после установки статус будет возвращаться пользователям в виде конструктора [emojiStatusCollectible](/constructor/emojiStatusCollectible/) (который **нельзя** передавать в [account.updateEmojiStatus](/method/account.updateEmojiStatus/) — его необходимо сначала преобразовать в [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)).
