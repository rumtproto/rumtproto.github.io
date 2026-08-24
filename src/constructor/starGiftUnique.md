---
title: "starGiftUnique"
original: "https://core.telegram.org/constructor/starGiftUnique"
section: ref
kind: constructor
description: "Представляет коллекционный звёздный подарок, подробнее см. здесь »."
layout: layout.njk
---

# starGiftUnique

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

```
starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>require_premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Этот подарок могут купить только пользователи с подпиской <a href="/api/premium">Premium</a>.</td></tr><tr><td><strong>resale_ton_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Можно ли купить этот подарок только за Grams.</td></tr><tr><td><strong>theme_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Для этого подарка доступна связанная с ним тема оформления чата; подробнее о том, как её использовать, <a href="/api/themes#chat-themes">см. здесь »</a>.</td></tr><tr><td><strong>burned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Этот подарок уже был использован как ингредиент для <a href="/api/gifts#crafting-collectible-gifts">крафта другого коллекционного подарка »</a>.</td></tr><tr><td><strong>crafted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/constructor/true">true</a></td><td>Этот коллекционный подарок получен с помощью <a href="/api/gifts#crafting-collectible-gifts">крафта »</a>, а не улучшением обычного подарка.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Уникальный идентификатор этого коллекционного подарка.</td></tr><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор обычного подарка, из которого был получен этот подарок (у всех коллекционных подарков, улучшенных из одного и того же подарка, будет одинаковый <code>gift_id</code>, но разные атрибуты).</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название коллекционного подарка.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Слаг, по которому можно построить <a href="/api/links#collectible-gift-link">глубокую ссылку на коллекционный подарок »</a> либо использовать его <a href="/api/gifts">в других местах API, где принимается слаг коллекционного подарка</a>.</td></tr><tr><td><strong>num</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Уникальный идентификатор этого коллекционного подарка среди всех (уже улучшенных) коллекционных подарков того же типа.</td></tr><tr><td><strong>owner_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>Владелец подарка.</td></tr><tr><td><strong>owner_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Имя владельца, если не заданы ни <code>owner_id</code>, ни <code>owner_address</code>.</td></tr><tr><td><strong>owner_address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Для <a href="/api/gifts#withdraw-a-collectible-gift-to-the-ton-blockchain">NFT в блокчейне TON</a> содержит адрес владельца (добавьте его к <a href="/api/config#ton-blockchain-explorer-url">значению клиентской конфигурации ton_blockchain_explorer_url »</a>, чтобы получить ссылку со сведениями об адресе).</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftAttribute">StarGiftAttribute</a>&gt;</td><td>Атрибуты коллекционного подарка</td></tr><tr><td><strong>availability_issued</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число подарков того же типа, которые были улучшены до коллекционных.</td></tr><tr><td><strong>availability_total</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число подарков того же типа, которые можно улучшить до коллекционных или которые уже были улучшены до коллекционных.</td></tr><tr><td><strong>gift_address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Для <a href="/api/gifts#withdraw-a-collectible-gift-to-the-ton-blockchain">NFT в блокчейне TON</a> содержит адрес NFT (добавьте его к <a href="/api/config#ton-blockchain-explorer-url">значению клиентской конфигурации ton_blockchain_explorer_url »</a>, чтобы получить ссылку со сведениями об адресе).</td></tr><tr><td><strong>resell_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarsAmount">StarsAmount</a>&gt;</td><td>Цена перепродажи подарка.</td></tr><tr><td><strong>released_by</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/Peer">Peer</a></td><td>Этот подарок был выпущен указанным пиром.</td></tr><tr><td><strong>value_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/long">long</a></td><td>Ориентировочная стоимость подарка.</td></tr><tr><td><strong>value_currency</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/string">string</a></td><td>Валюта, в которой указана оценочная стоимость подарка.</td></tr><tr><td><strong>value_usd_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/long">long</a></td><td>Ориентировочная стоимость подарка в центах США.</td></tr><tr><td><strong>theme_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/Peer">Peer</a></td><td>Чат, в котором сейчас установлена соответствующая <a href="/api/themes#chat-themes">тема чата</a>, если он есть (темы, полученные в подарок, можно установить одновременно только в одном чате).</td></tr><tr><td><strong>peer_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/PeerColor">PeerColor</a></td><td>Может содержать <a href="/api/colors#collectible-message-palettes">коллекционную палитру сообщения »</a>.</td></tr><tr><td><strong>host_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/Peer">Peer</a></td><td>Если установлено, подарок сейчас <a href="/api/gifts#hosted-collectible-gifts">размещён в профиле указанного пользователя или канала »</a>, тогда как право владения остаётся за кошельком TON, указанным в <code>owner_address</code>.</td></tr><tr><td><strong>offer_min_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/int">int</a></td><td>Если установлено, вы можете <a href="/api/gifts#collectible-gift-purchase-offers">отправить предложение о покупке этого подарка »</a>: минимальная цена предложения указана в этом флаге.</td></tr><tr><td><strong>craft_chance_permille</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/type/int">int</a></td><td>Вероятность успеха на 1000, вносимая этим подарком при использовании его для <a href="/api/gifts#crafting-collectible-gifts">крафта »</a>.</td></tr></tbody></table>

### Тип

[StarGift](/type/StarGift/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Темы оформления Telegram](/api/themes/)

Приложения Telegram умеют создавать, отправлять и синхронизировать темы оформления.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!

#### [starGiftAttributeModel](/constructor/starGiftAttributeModel/)

Модель [коллекционного подарка »](/api/gifts/#collectible-gifts).
