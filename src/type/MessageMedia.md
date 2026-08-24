---
title: "MessageMedia"
original: "https://core.telegram.org/type/MessageMedia"
section: ref
kind: type
description: "Медиа"
layout: layout.njk
---

# MessageMedia

Медиа

```
messageMediaEmpty#3ded6320 = MessageMedia;
messageMediaPhoto#695150d7 flags:# spoiler:flags.3?true photo:flags.0?Photo ttl_seconds:flags.2?int = MessageMedia;
messageMediaGeo#56e0d474 geo:GeoPoint = MessageMedia;
messageMediaContact#70322949 phone_number:string first_name:string last_name:string vcard:string user_id:long = MessageMedia;
messageMediaUnsupported#9f84f49e = MessageMedia;
messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;
messageMediaWebPage#ddf10c3b flags:# force_large_media:flags.0?true force_small_media:flags.1?true manual:flags.3?true safe:flags.4?true webpage:WebPage = MessageMedia;
messageMediaVenue#2ec0533f geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MessageMedia;
messageMediaGame#fdb19008 game:Game = MessageMedia;
messageMediaInvoice#f6a548d3 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string extended_media:flags.4?MessageExtendedMedia = MessageMedia;
messageMediaGeoLive#b940c666 flags:# geo:GeoPoint heading:flags.0?int period:int proximity_notification_radius:flags.1?int = MessageMedia;
messageMediaPoll#4bd6e798 poll:Poll results:PollResults = MessageMedia;
messageMediaDice#8cbec07 flags:# value:int emoticon:string game_outcome:flags.0?messages.EmojiGameOutcome = MessageMedia;
messageMediaStory#68cb6283 flags:# via_mention:flags.1?true peer:Peer id:int story:flags.0?StoryItem = MessageMedia;
messageMediaGiveaway#aa073beb flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.2?true channels:Vector<long> countries_iso2:flags.1?Vector<string> prize_description:flags.3?string quantity:int months:flags.4?int stars:flags.5?long until_date:int = MessageMedia;
messageMediaGiveawayResults#ceaa3ea1 flags:# only_new_subscribers:flags.0?true refunded:flags.2?true channel_id:long additional_peers_count:flags.3?int launch_msg_id:int winners_count:int unclaimed_count:int winners:Vector<long> months:flags.4?int stars:flags.5?long prize_description:flags.1?string until_date:int = MessageMedia;
messageMediaPaidMedia#a8852491 stars_amount:long extended_media:Vector<MessageExtendedMedia> = MessageMedia;
messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;
messageMediaVideoStream#ca5cab89 flags:# rtmp_stream:flags.0?true call:InputGroupCall = MessageMedia;

---functions---

messages.uploadMedia#14967978 flags:# business_connection_id:flags.0?string peer:InputPeer media:InputMedia = MessageMedia;
messages.uploadImportedMedia#2a862092 peer:InputPeer import_id:long file_name:string media:InputMedia = MessageMedia;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messageMediaEmpty">messageMediaEmpty</a></td><td>Пустой конструктор.</td></tr><tr><td><a href="/constructor/messageMediaPhoto">messageMediaPhoto</a></td><td>Вложенная фотография.</td></tr><tr><td><a href="/constructor/messageMediaGeo">messageMediaGeo</a></td><td>Вложенная карта.</td></tr><tr><td><a href="/constructor/messageMediaContact">messageMediaContact</a></td><td>Вложенный контакт.</td></tr><tr><td><a href="/constructor/messageMediaUnsupported">messageMediaUnsupported</a></td><td>Текущая версия клиента не поддерживает этот тип медиафайлов.</td></tr><tr><td><a href="/constructor/messageMediaDocument">messageMediaDocument</a></td><td>Документ (видео, аудио, голосовое сообщение, стикер, любой тип медиа, кроме фотографии)</td></tr><tr><td><a href="/constructor/messageMediaWebPage">messageMediaWebPage</a></td><td>Предпросмотр веб-страницы</td></tr><tr><td><a href="/constructor/messageMediaVenue">messageMediaVenue</a></td><td>Заведение</td></tr><tr><td><a href="/constructor/messageMediaGame">messageMediaGame</a></td><td>Игра Telegram</td></tr><tr><td><a href="/constructor/messageMediaInvoice">messageMediaInvoice</a></td><td>Счёт</td></tr><tr><td><a href="/constructor/messageMediaGeoLive">messageMediaGeoLive</a></td><td>Обозначает <a href="/api/live-location">геопозицию в реальном времени</a></td></tr><tr><td><a href="/constructor/messageMediaPoll">messageMediaPoll</a></td><td>Опрос</td></tr><tr><td><a href="/constructor/messageMediaDice">messageMediaDice</a></td><td><a href="/api/dice">Анимированный стикер с кубиком</a></td></tr><tr><td><a href="/constructor/messageMediaStory">messageMediaStory</a></td><td>Представляет пересланную <a href="/api/stories">историю</a> или упоминание истории.</td></tr><tr><td><a href="/constructor/messageMediaGiveaway">messageMediaGiveaway</a></td><td>Содержит информацию о <a href="/api/giveaways">розыгрыше, подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/messageMediaGiveawayResults">messageMediaGiveawayResults</a></td><td><a href="/api/giveaways">Розыгрыш</a> с публичными победителями завершился; этот конструктор содержит сведения о победителях.</td></tr><tr><td><a href="/constructor/messageMediaPaidMedia">messageMediaPaidMedia</a></td><td><a href="/api/paid-media">Платное медиа, подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/messageMediaToDo">messageMediaToDo</a></td><td>Представляет <a href="/api/todo">список задач »</a>.</td></tr><tr><td><a href="/constructor/messageMediaVideoStream">messageMediaVideoStream</a></td><td>Определяет активный групповой звонок, связанный с <a href="/api/group-calls#live-stories">прямой историей »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.uploadMedia">messages.uploadMedia</a></td><td>Загрузить файл и связать его с чатом (не отправляя его в чат)<br><br>Может также применяться в рамках <a href="/api/bots/connected-business-bots">бизнес-подключения</a>, причём <em>не</em> путём оборачивания запроса в <a href="/method/invokeWithBusinessConnection">invokeWithBusinessConnection »</a>, а путём указания идентификатора бизнес-подключения в параметре <code>business_connection_id</code>.</td></tr><tr><td><a href="/method/messages.uploadImportedMedia">messages.uploadImportedMedia</a></td><td>Загрузить медиафайл, связанный с <a href="/api/import">импортированным чатом, подробнее см. здесь »</a>.</td></tr></tbody></table>
