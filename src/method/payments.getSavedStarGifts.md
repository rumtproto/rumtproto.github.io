---
title: "payments.getSavedStarGifts"
original: "https://core.telegram.org/method/payments.getSavedStarGifts"
section: ref
kind: method
description: "Получить полный список подарков », которыми пир владеет, которые он получил или размещает »."
layout: layout.njk
---

# payments.getSavedStarGifts

Получить полный список [подарков »](/api/gifts/#list-all-received-gifts), которыми пир владеет, которые он получил или [размещает »](/api/gifts/#hosted-collectible-gifts).

Обратите внимание: вопреки названию, метод может использоваться для получения как «сохранённых», так и «несохранённых» подарков (то есть как закреплённых, так и не закреплённых в профиле) — в зависимости от переданных флагов.

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
---functions---
payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>exclude_unsaved</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Исключить подарки, не закреплённые в профиле.</td></tr><tr><td><strong>exclude_saved</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Исключить подарки, закреплённые в профиле.</td></tr><tr><td><strong>exclude_unlimited</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Исключить подарки, у которых не установлен флаг <a href="/constructor/starGift">starGift</a>.<code>limited</code>.</td></tr><tr><td><strong>exclude_unique</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Исключить <a href="/api/gifts#collectible-gifts">коллекционные подарки »</a>.</td></tr><tr><td><strong>sort_by_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Если установлено, сортирует подарки по цене, а не по дате получения.</td></tr><tr><td><strong>exclude_upgradable</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Исключить подарки, которые можно <a href="/api/gifts#collectible-gifts">улучшить до коллекционных »</a>.</td></tr><tr><td><strong>exclude_unupgradable</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Исключить подарки, которые нельзя <a href="/api/gifts#collectible-gifts">улучшить до коллекционных »</a>.</td></tr><tr><td><strong>peer_color_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Если установлено, возвращает только <a href="/api/gifts#collectible-gifts">коллекционные подарки</a>, палитру которых можно использовать как <a href="/api/colors#collectible-message-palettes">коллекционную палитру сообщения »</a>.</td></tr><tr><td><strong>exclude_hosted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>[@term:peer] Если установлено, исключает <a href="/api/gifts#hosted-collectible-gifts">размещённые коллекционные подарки »</a>, возвращая только подарки, которыми владеет или которые получил <code>peer</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Получить только подарки, которыми владеет, которые получил или <a href="/api/gifts#hosted-collectible-gifts">размещает »</a> указанный пир, а именно: пользователь, с peer=<a href="/constructor/inputPeerUser">inputPeerUser</a>; канал, с peer=<a href="/constructor/inputPeerChannel">inputPeerChannel</a>; <a href="/api/bots/connected-business-bots">подключённый бизнес-пользователь »</a> (при вызове метода ботом через бизнес-подключение), с peer=<a href="/constructor/inputPeerUser">inputPeerUser</a>.</td></tr><tr><td><strong>collection_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Возвращать только подарки из указанной <a href="/api/gifts#gift-collections">коллекции »</a>.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/offsets">Смещение для постраничной выборки</a>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>COLLECTION_ID_INVALID</td><td>Указанный идентификатор коллекции недействителен.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [starGift](/constructor/starGift/)

Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!

#### [inputPeerUser](/constructor/inputPeerUser/)

Определяет пользователя для дальнейшего взаимодействия.

#### [inputPeerChannel](/constructor/inputPeerChannel/)

Определяет канал для дальнейшего взаимодействия.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
