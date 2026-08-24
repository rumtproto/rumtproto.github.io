---
title: "messages.uploadMedia"
original: "https://core.telegram.org/method/messages.uploadMedia"
section: ref
kind: method
description: "Загрузить файл и связать его с чатом (не отправляя его в чат)"
layout: layout.njk
---

# messages.uploadMedia

Загрузить файл и связать его с чатом (не отправляя его в чат)

Может также применяться в рамках [бизнес-подключения](/api/bots/connected-business-bots/), причём _не_ путём оборачивания запроса в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), а путём указания идентификатора бизнес-подключения в параметре `business_connection_id`.

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
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>business_connection_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Будет ли медиафайл использоваться только в указанном <a href="/api/bots/connected-business-bots">бизнес-подключении »</a>, а не непосредственно ботом.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат; для ботов допускается <a href="/constructor/inputPeerEmpty">inputPeerEmpty</a>, для пользователей — <a href="/constructor/inputPeerSelf">inputPeerSelf</a>.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>Файл, загруженный по частям, как описано в разделе <a href="/api/files">файлы »</a></td></tr></tbody></table>

### Результат

[MessageMedia](/type/MessageMedia/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>CHAT_RESTRICTED</td><td>Вы не можете отправлять сообщения в этот чат: на вас наложены ограничения.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>Недопустимое число частей файла.</td></tr><tr><td>400</td><td>FILE_PART_LENGTH_INVALID</td><td>Недействительная длина части файла.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Сбой при обработке изображения.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Медиа недействительно.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>Недопустимое расширение фотографии.</td></tr><tr><td>400</td><td>PHOTO_INVALID_DIMENSIONS</td><td>Недопустимые размеры фотографии.</td></tr><tr><td>400</td><td>PHOTO_SAVE_FILE_INVALID</td><td>Внутренние неполадки, попробуйте ещё раз позже.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>400</td><td>VOICE_MESSAGES_FORBIDDEN</td><td>Настройки приватности этого пользователя запрещают вам отправлять ему голосовые сообщения.</td></tr><tr><td>400</td><td>WEBPAGE_CURL_FAILED</td><td>Сбой при получении веб-страницы с помощью cURL.</td></tr></tbody></table>

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

Пустой конструктор, не задан ни пользователь, ни чат.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Определяет текущего пользователя.

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Вызвать метод через [подключение Telegram Business Bot; подробнее, включая список методов, которые можно обернуть в этот конструктор, см. здесь »](/api/bots/connected-business-bots/).

Всегда отправляйте запросы, обёрнутые в `invokeWithBusinessConnection`, в дата-центр с идентификатором, указанным в поле `dc_id` используемого [botBusinessConnection](/constructor/botBusinessConnection/).
