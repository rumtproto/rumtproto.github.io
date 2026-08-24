---
title: "messageActionStarGift"
original: "https://core.telegram.org/constructor/messageActionStarGift"
section: ref
kind: constructor
description: "Вы получили подарок, подробнее см. здесь »."
layout: layout.njk
---

# messageActionStarGift

Вы получили [подарок, подробнее см. здесь »](/api/gifts/).

```
messageActionStarGift#ea2c31d3 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer gift_num:flags.19?int = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>name_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, имя отправителя подарка будет скрыто, если пользователь-получатель решит показать подарок в своём профиле</td></tr><tr><td><strong>saved</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Был ли этот подарок добавлен в профиль пользователя-получателя (можно переключить с помощью <a href="/method/payments.saveStarGift">payments.saveStarGift</a> и получить с помощью <a href="/method/payments.getSavedStarGifts">payments.getSavedStarGifts</a>)</td></tr><tr><td><strong>converted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Был ли этот подарок обменян на <a href="/api/stars">Telegram Stars</a>, из-за чего его больше нельзя показывать в профиле.</td></tr><tr><td><strong>upgraded</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Этот подарок был улучшен до <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>.</td></tr><tr><td><strong>refunded</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Этот подарок больше недоступен, поскольку был запрошен возврат платежа, связанного с этим подарком, и деньги были возвращены.</td></tr><tr><td><strong>can_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Если установлено, этот подарок можно <a href="/api/gifts#upgrade-a-gift-to-a-collectible-gift">улучшить до коллекционного подарка</a>; может быть установлено только для получателя подарка.</td></tr><tr><td><strong>prepaid_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Отправитель уже заранее оплатил улучшение этого подарка до коллекционного.</td></tr><tr><td><strong>upgrade_separate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>Это сервисное сообщение — уведомление об <a href="/api/gifts#prepaying-for-someone-elses-upgrade">отдельной предоплате улучшения принадлежащего нам подарка</a>.</td></tr><tr><td><strong>auction_acquired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/constructor/true">true</a></td><td>Если установлено, этот подарок был приобретён на <a href="/api/auctions">аукционе коллекционных подарков »</a>.</td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift">StarGift</a></td><td>Информация о подарке</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Дополнительное сообщение от отправителя подарка</td></tr><tr><td><strong>convert_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/long">long</a></td><td>Получатель этого подарка может обменять его на указанное количество Telegram Stars вместо того, чтобы показывать подарок в своём профиле.<br>Значение <code>convert_stars</code> будет равно <code>stars</code>, только если подарок был куплен за недавно приобретённые Telegram Stars, иначе оно будет меньше <code>stars</code>.</td></tr><tr><td><strong>upgrade_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Если установлено, этот подарок был <a href="/api/gifts#upgrade-a-gift-to-a-collectible-gift">улучшен до коллекционного подарка</a>, и соответствующий <a href="/constructor/messageActionStarGiftUnique">messageActionStarGiftUnique</a> доступен по указанному идентификатору сообщения.</td></tr><tr><td><strong>upgrade_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/long">long</a></td><td>Количество Telegram Stars, которое пользователь может заплатить, чтобы <a href="/api/gifts#collectible-gifts">превратить подарок в коллекционный »</a>.</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/Peer">Peer</a></td><td>Отправитель подарка (не задан для анонимных подарков).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/Peer">Peer</a></td><td>[@term:peer] Получатель подарка.</td></tr><tr><td><strong>saved_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/long">long</a></td><td>Для подарков каналам — идентификатор, который следует использовать в конструкторах <a href="/constructor/inputSavedStarGiftChat">inputSavedStarGiftChat</a>.</td></tr><tr><td><strong>prepaid_upgrade_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/string">string</a></td><td><a href="/api/gifts#prepaying-for-someone-elses-upgrade">Хеш для отдельной предоплаты улучшения подарка »</a>.</td></tr><tr><td><strong>gift_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/int">int</a></td><td>Для <a href="/api/gifts#prepaying-for-someone-elses-upgrade">отдельных улучшений</a> — идентификатор сообщения с подарком, улучшение которого было оплачено заранее (действителен только для получателя сервисного сообщения).</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/Peer">Peer</a></td><td>Для подарков, полученных на <a href="/api/auctions">аукционе »</a> (то есть когда установлен флаг <code>auction_acquired</code>), — пир, которому был назначен подарок; присутствует, только если целевой пир отличается от участника торгов, и в этом случае присутствует лишь в messageActionStarGift, отправленном участнику торгов, но не в messageActionStarGift, отправленном целевому пиру.</td></tr><tr><td><strong>gift_num</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/type/int">int</a></td><td>Для подарков, полученных на <a href="/api/auctions">аукционе »</a>, — коллекционный номер выигранного <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>; это поле не связано с <code>auction_acquired</code>, поскольку флаг не будет установлен <strong>только</strong> у аукционных коллекционных подарков, выигранных до появления этого поля в API.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [payments.saveStarGift](/method/payments.saveStarGift/)

Показать в нашем профиле или убрать из него [полученный или размещённый подарок »](/api/gifts/#hosted-collectible-gifts).

#### [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

Получить полный список [подарков »](/api/gifts/#list-all-received-gifts), которыми пир владеет, которые он получил или [размещает »](/api/gifts/#hosted-collectible-gifts).

Обратите внимание: вопреки названию, метод может использоваться для получения как «сохранённых», так и «несохранённых» подарков (то есть как закреплённых, так и не закреплённых в профиле) — в зависимости от переданных флагов.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

[Подарок »](/api/gifts/) был улучшен до [коллекционного подарка »](/api/gifts/#collectible-gifts).

#### [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/)

Подарок, полученный каналом, которым мы владеем.
