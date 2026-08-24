---
title: "emojiStatusCollectible"
original: "https://core.telegram.org/constructor/emojiStatusCollectible"
section: ref
kind: constructor
description: "Принадлежащий вам или размещённый коллекционный подарок » в качестве эмодзи-статуса."
layout: layout.njk
---

# emojiStatusCollectible

Принадлежащий вам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса.

**Нельзя** передать в [account.updateEmojiStatus](/method/account.updateEmojiStatus/): перед вызовом этого метода объект необходимо преобразовать в [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/).

```
emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>collectible_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор коллекционного подарка (из <a href="/constructor/starGiftUnique">starGiftUnique</a>.<code>id</code>).</td></tr><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/custom-emoji">пользовательского эмодзи</a>, обозначающего статус.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название коллекционного подарка.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Уникальный идентификатор коллекционного подарка, по которому можно построить <a href="/api/links#collectible-gift-link">ссылку на коллекционный подарок »</a> для текущего подарка либо получить о нём дополнительные сведения через <a href="/method/payments.getUniqueStarGift">payments.getUniqueStarGift</a>.</td></tr><tr><td><strong>pattern_document_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор узора, который следует наложить на подложку профиля; соответствует <a href="/constructor/starGiftAttributePattern">starGiftAttributePattern</a> подарка, указанного в <code>slug</code>.</td></tr><tr><td><strong>center_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет центра подложки профиля в формате RGB24, из атрибута <a href="/constructor/starGiftAttributeBackdrop">starGiftAttributeBackdrop</a> подарка.</td></tr><tr><td><strong>edge_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет краёв фона профиля в формате RGB24, из <a href="/constructor/starGiftAttributeBackdrop">starGiftAttributeBackdrop</a> подарка.</td></tr><tr><td><strong>pattern_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет узора <code>pattern_document_id</code>, наложенного на подложку профиля, в формате RGB24, из атрибута <a href="/constructor/starGiftAttributeBackdrop">starGiftAttributeBackdrop</a> подарка.</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет текста на подложке профиля в формате RGB24, из атрибута <a href="/constructor/starGiftAttributeBackdrop">starGiftAttributeBackdrop</a> подарка.</td></tr><tr><td><strong>until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, эмодзи-статус будет активен до указанного unixtime.</td></tr></tbody></table>

### Тип

[EmojiStatus](/type/EmojiStatus/)

### Связанные страницы

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/)

Получить сведения о [коллекционном подарке »](/api/gifts/#collectible-gifts) по слагу, полученному из [ссылки на коллекционный подарок »](/api/links/#collectible-gift-link).

#### [starGiftAttributePattern](/constructor/starGiftAttributePattern/)

[Стикер](/api/stickers/), наложенный повторяющимся узором на подложку [коллекционного подарка »](/api/gifts/).

#### [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/)

Подложка [коллекционного подарка »](/api/gifts/#collectible-gifts).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [account.updateEmojiStatus](/method/account.updateEmojiStatus/)

Установить [эмодзи-статус](/api/emoji-status/)

#### [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)

Принадлежащий вам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса: может использоваться только в [account.updateEmojiStatus](/method/account.updateEmojiStatus/), никогда не возвращается API.

Учтите, что после установки статус будет возвращаться пользователям в виде конструктора [emojiStatusCollectible](/constructor/emojiStatusCollectible/) (который **нельзя** передавать в [account.updateEmojiStatus](/method/account.updateEmojiStatus/) — его необходимо сначала преобразовать в [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)).
