---
title: "Просмотры и метрики прочтения"
original: "https://core.telegram.org/api/views"
section: api
description: "Клиентам следует сообщать о состоянии прочтения, просмотрах сообщений и прослушиваниях музыки при помощи определённого набора методов."
layout: layout.njk
---

# Просмотры и метрики прочтения

Клиентам следует сообщать о состоянии прочтения, просмотрах сообщений и прослушиваниях музыки при помощи определённого набора методов.

### Состояние прочтения

```
---functions---

messages.readHistory#0e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;
channels.readHistory#cc104937 channel:InputChannel max_id:int = Bool;
messages.readSavedHistory#ba4a3b5b parent_peer:InputPeer peer:InputPeer max_id:int = Bool;
messages.readDiscussion#f731a9f4 peer:InputPeer msg_id:int read_max_id:int = Bool;
messages.readEncryptedHistory#7f4b690a peer:InputEncryptedChat max_date:int = Bool;
```

[@term:peer] Используйте один из следующих методов — в зависимости от типа диалога, в котором пользователь отметил сообщения прочитанными (пир (`peer`) — собеседник, группа или канал, к которому относится диалог):

-   [messages.readHistory](/method/messages.readHistory/) отмечает сообщения как прочитанные в диалоге с пользователем или в [обычной группе](/api/channel/#basic-groups).
-   [channels.readHistory](/method/channels.readHistory/) отмечает сообщения как прочитанные в [канале, супергруппе или гигагруппе](/api/channel/).
-   [messages.readSavedHistory](/method/messages.readSavedHistory/) отмечает сообщения как прочитанные в теме [монофорума](/api/monoforum/).
-   [messages.readDiscussion](/method/messages.readDiscussion/) отмечает сообщения как прочитанные в [обсуждении](/api/threads/).
-   [messages.readEncryptedHistory](/method/messages.readEncryptedHistory/) отмечает сообщения как прочитанные в [секретном чате](/api/end-to-end/).

Вызовы этих методов следует группировать в пакеты по такому принципу:

-   Локально отслеживайте последнее прочитанное сообщение для всех открытых в данный момент чатов (то есть идентификатор последнего прочитанного сообщения может только расти, но не уменьшаться).
    -   [@term:seqno] Поскольку в секретных чатах нет монотонно возрастающего идентификатора сообщения (да и передавать его за пределы секретного чата **нельзя** ни при каких обстоятельствах), для определения более новых сообщений используйте `seqno` (порядковый номер сообщения внутри секретного чата) вместо идентификатора, но когда придёт время отправлять данные — передавайте **дату получения** последнего прочитанного сообщения, а **не** `seqno`.
-   Если указатель на последнее сообщение конкретного пира не менялся в течение последних 3 секунд, а просмотр ещё не был отправлен на сервер, вызовите подходящий для этого типа пира метод readHistory.
-   Если пользователь закрывает или сворачивает клиент, немедленно выполните все отложенные вызовы readHistory.

Эти методы обновляют только серверное состояние непрочитанного: они не [увеличивают счётчики просмотров постов канала](#read-message-contents) и [не отправляют метрики области видимости](#read-metrics).

### Прочтение содержимого сообщений

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

decryptedMessageActionReadMessages#0c4f40be random_ids:Vector<long> = DecryptedMessageAction;
decryptedMessageService#aa48327d random_id:long random_bytes:bytes action:DecryptedMessageAction = DecryptedMessage;

---functions---

messages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;
channels.readMessageContents#eab5dc38 channel:InputChannel id:Vector<int> = Bool;
messages.sendEncryptedService#32d439a4 peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
```

При чтении входящих сообщений [методы readHistory »](#read-state) по-прежнему всегда следует вызывать в пакетном режиме, однако _в дополнение_ к `readHistory` следует использовать и перечисленные ниже методы — чтобы отметить прочитанными отдельные медиасообщения определённых типов, отметить прочитанными [трансляции геопозиции](/api/live-location/) и запустить таймеры удаления для самоуничтожающихся медиафайлов:

-   [messages.readMessageContents](/method/messages.readMessageContents/) — для сообщений в диалогах с пользователями и в [обычных группах](/api/channel/#basic-groups).
-   [channels.readMessageContents](/method/channels.readMessageContents/) — для сообщений в [каналах, супергруппах и гигагруппах](/api/channel/).
-   [messages.sendEncryptedService](/method/messages.sendEncryptedService/) с конструктором [decryptedMessageService](/constructor/decryptedMessageService/), содержащим [decryptedMessageActionReadMessages](/constructor/decryptedMessageActionReadMessages/), — для сообщений в [секретных чатах](/api/end-to-end/).

В отличие от методов readHistory, эти методы принимают **список конкретных идентификаторов сообщений**, а не диапазон, задаваемый через `max_id`.

Чтобы не запрашивать заново обновлённые конструкторы [message](/constructor/message/) при отметке прочитанными сообщений в несекретных чатах, клиенту следует после успешной отправки запроса readMessageContents локально сбросить следующее состояние непрочитанности:

-   Флаг [message](/constructor/message/).`media_unread`.
-   Флаг [message](/constructor/message/).`mentioned`.
-   Непрочитанные [реакции](/api/reactions/).
-   Непрочитанные голоса в опросах.

Вызывайте эти методы только для входящих сообщений и только в описанных ниже случаях.

#### Непрочитанные упоминания в медиа

Для входящего сообщения в несекретном чате с непрочитанным упоминанием в медиа вызывайте [messages.readMessageContents](/method/messages.readMessageContents/) или [channels.readMessageContents](/method/channels.readMessageContents/) в момент, когда сообщение становится видимым в чате.

Условие: `message.mentioned && message.media_unread && !message.isVoice() && !message.isRoundVideo()`

Непрочитанное упоминание в медиа выражается тем, что одновременно установлены флаги [message](/constructor/message/).`mentioned` и [message](/constructor/message/).`media_unread`.

Не используйте один только флаг [message](/constructor/message/).`media_unread` как триггер видимости. Без флага [message](/constructor/message/).`mentioned` непрочитанное воспроизводимое медиа отмечается прочитанным только при начале воспроизведения, а для самоуничтожающегося медиа — при его открытии.

Голосовые сообщения содержат [messageMediaDocument](/constructor/messageMediaDocument/) с атрибутом [documentAttributeAudio](/constructor/documentAttributeAudio/), в котором установлен флаг `voice`.

Круглые видео содержат [messageMediaDocument](/constructor/messageMediaDocument/) с атрибутом [documentAttributeVideo](/constructor/documentAttributeVideo/), в котором установлен флаг `round_message`.

Голосовые сообщения и круглые видео исключены из этого условия, поскольку они отмечаются прочитанными при воспроизведении.

Сообщения секретных чатов исключены из этого условия, поскольку конструктор [decryptedMessage](/constructor/decryptedMessage/) не содержит флагов `mentioned` и `media_unread`.

#### Непрочитанное воспроизводимое медиа

Для входящего сообщения в несекретном чате с непрочитанным воспроизводимым медиа вызывайте [messages.readMessageContents](/method/messages.readMessageContents/) или [channels.readMessageContents](/method/channels.readMessageContents/) в момент начала воспроизведения.

Условие: установлен флаг [message](/constructor/message/).`media_unread`, и пользователь начинает воспроизведение медиа.

Для голосовых сообщений и круглых видео в секретных чатах конструктор [decryptedMessage](/constructor/decryptedMessage/) не содержит флага `media_unread`. Клиенту следует хранить локальный флаг непрочитанности содержимого, устанавливая его в true при получении голосового сообщения или круглого видео и сбрасывая после воспроизведения медиа.

Условие для секретных чатов: `local_content_unread && (decryptedMessage.isVoice() || decryptedMessage.isRoundVideo())` в момент начала воспроизведения.

Для секретных чатов вызывайте [messages.sendEncryptedService](/method/messages.sendEncryptedService/) с конструктором [decryptedMessageActionReadMessages](/constructor/decryptedMessageActionReadMessages/), содержащим значение [decryptedMessage](/constructor/decryptedMessage/).`random_id`.

#### Самоуничтожающееся медиа вне секретных чатов

Для входящих сообщений в несекретных чатах с самоуничтожающимся медиа вызывайте [messages.readMessageContents](/method/messages.readMessageContents/) или [channels.readMessageContents](/method/channels.readMessageContents/) и запускайте таймер удаления в момент, когда пользователь открывает медиа или начинает воспроизведение.

У самоуничтожающегося медиа поле [messageMediaPhoto](/constructor/messageMediaPhoto/).`ttl_seconds` или [messageMediaDocument](/constructor/messageMediaDocument/).`ttl_seconds` отлично от нуля.

Условие: `0 < media.ttl_seconds < 0x7FFFFFFF && local_destroy_timer_not_started && user_opens_or_starts_playback`.

#### Одноразовое медиа вне секретных чатов

Для входящего медиа в несекретных чатах со значением `media.ttl_seconds == 0x7FFFFFFF` вызывайте [messages.readMessageContents](/method/messages.readMessageContents/) или [channels.readMessageContents](/method/channels.readMessageContents/) в момент, когда пользователь открывает медиа или начинает воспроизведение.

Условие: `media.ttl_seconds == 0x7FFFFFFF && local_destroy_timer_not_started && user_opens_or_starts_playback`.

Таймер удаления по времени запускать не нужно. Удаляйте медиа локально после закрытия просмотрщика медиа или проигрывателя голосовых сообщений.

#### Самоуничтожающееся медиа в секретных чатах

Сообщения секретных чатов используют поле [decryptedMessage](/constructor/decryptedMessage/).`ttl`.

При `0 < ttl < 0x7FFFFFFF` вызывайте [messages.sendEncryptedService](/method/messages.sendEncryptedService/) с конструктором [decryptedMessageActionReadMessages](/constructor/decryptedMessageActionReadMessages/), содержащим значение [decryptedMessage](/constructor/decryptedMessage/).`random_id`, в момент, когда пользователь открывает медиа или начинает воспроизведение, и одновременно запускайте локальный таймер удаления.

Условие: `0 < decryptedMessage.ttl < 0x7FFFFFFF && local_destroy_timer_not_started && user_opens_or_starts_playback`.

Для медиа в секретных чатах со значением `decryptedMessage.ttl == 0x7FFFFFFF` не отправляйте [decryptedMessageActionReadMessages](/constructor/decryptedMessageActionReadMessages/). Считайте такое медиа одноразовым: показывайте его только после явного действия открытия и удаляйте локально после закрытия.

#### Трансляции геопозиции

Для сообщения в несекретном чате, содержащего [трансляцию геопозиции](/api/live-location/), вызывайте [messages.readMessageContents](/method/messages.readMessageContents/) или [channels.readMessageContents](/method/channels.readMessageContents/), пока открыта карта с трансляцией геопозиции.

Сообщения с трансляцией геопозиции содержат [messageMediaGeoLive](/constructor/messageMediaGeoLive/).

Условие: `message.media instanceof messageMediaGeoLive`

Повторяйте вызов метода для всех известных сообщений с трансляцией геопозиции в чате — обычно это те, что возвращает [messages.getRecentLocations](/method/messages.getRecentLocations/), — каждые 60 секунд, пока карта с трансляцией геопозиции не будет закрыта.

### Счётчики просмотров

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

messageViews#455b853d flags:# views:flags.0?int forwards:flags.1?int replies:flags.2?MessageReplies = MessageViews;
messages.messageViews#b6c4f543 views:Vector<MessageViews> chats:Vector<Chat> users:Vector<User> = messages.MessageViews;

---functions---

messages.getMessagesViews#5784d3e1 peer:InputPeer id:Vector<int> increment:Bool = messages.MessageViews;
```

Сообщения, отправленные в каналы и пересланные из каналов, имеют счётчик просмотров в поле [message](/constructor/message/).`views`: чтобы увеличить счётчик просмотров и получить обновлённые значения счётчика просмотров, счётчика пересылок и сведений об обсуждении, вызовите метод [messages.getMessagesViews](/method/messages.getMessagesViews/) с параметром `increment`, равным [boolTrue](/constructor/boolTrue/).

Вызовы [messages.getMessagesViews](/method/messages.getMessagesViews/) следует группировать в пакеты так:

-   [@term:viewport] Добавляйте в локальную очередь, отдельную для каждого пира, идентификаторы всех конструкторов [message](/constructor/message/) с полем `views`, которые видны в области просмотра (`viewport`) чата.
-   Не добавляйте один и тот же идентификатор сообщения в очередь увеличения счётчика дважды для одного и того же пира (очередь должна быть множеством).
-   Сбрасывайте очередь не позднее чем через 5 секунд после постановки в неё первого идентификатора, вызывая [messages.getMessagesViews](/method/messages.getMessagesViews/) с параметром `increment`, равным [boolTrue](/constructor/boolTrue/), — по одному запросу на пир и не более 100 идентификаторов сообщений в запросе.

Для непрочитанных сообщений ставьте счётчик просмотров в очередь, когда становится виден нижний край сообщения.  
Для уже прочитанных сообщений с полем `views` ставьте его в очередь, когда становится видна вертикальная середина сообщения.

### Метрики прочтения

```
inputMessageReadMetric#402b4495 msg_id:int view_id:long time_in_view_ms:int active_time_in_view_ms:int height_to_viewport_ratio_permille:int seen_range_ratio_permille:int = InputMessageReadMetric;

---functions---

messages.reportReadMetrics#4067c5e6 peer:InputPeer metrics:Vector<InputMessageReadMetric> = Bool;
```

С помощью метода [messages.reportReadMetrics](/method/messages.reportReadMetrics/) сообщайте, сколько времени видимые сообщения оставались в области просмотра чата.

Область просмотра — это видимый прямоугольник списка истории чата за вычетом элементов интерфейса, которые перекрывают сообщения.

Пока сообщение остаётся в области просмотра, отслеживайте один показ — непрерывный отрезок времени, в течение которого сообщение видно:

-   Не учитывайте показ длительностью менее 300 миллисекунд.
-   Для каждого принятого показа начинайте новый `view_id`.
-   Завершайте показ (то есть добавляйте его в очередь отправки), когда сообщение покидает область просмотра не менее чем на 300 миллисекунд.
-   Завершайте показ (то есть добавляйте его в очередь отправки) и начинайте отслеживание заново после 5 минут непрерывного показа.
-   Приостанавливайте накопление времени, пока приложение или экран чата неактивны.
-   Засчитывайте активное время только тогда, когда пользователь активен; официальные клиенты считают пользователя активным в течение 15 секунд после его действия.
-   Накапливайте завершённые метрики пакетами по пирам и отправляйте их методом [messages.reportReadMetrics](/method/messages.reportReadMetrics/). Официальные клиенты используют задержку сброса в 5 секунд.

Каждый конструктор [inputMessageReadMetric](/constructor/inputMessageReadMetric/) вычисляется так:

-   `msg_id` — серверный [идентификатор сообщения](/api/updates/#message-id-sequences) в чате `peer`.
-   `view_id` — случайный ненулевой 64-битный идентификатор, сгенерированный для данного показа.
-   `time_in_view_ms` — суммарное время в миллисекундах, в течение которого был виден хотя бы один пиксель сообщения, считая после начальной отсрочки в 300 миллисекунд.
-   `active_time_in_view_ms` — та часть `time_in_view_ms`, которая накоплена, пока пользователь был активен.
-   `height_to_viewport_ratio_permille` — это `round(max_message_height * 1000 / max_viewport_height)`. Значение может превышать `1000`, если сообщение выше области просмотра.
-   `seen_range_ratio_permille` — это `round(max_seen_vertical_range * 1000 / max_message_height)`, ограниченное диапазоном `0...1000`.

Если сгруппированный медиаальбом отображается как один визуальный блок, при вычислении `height_to_viewport_ratio_permille` и `seen_range_ratio_permille` для сообщений этого блока последовательно используйте прямоугольник блока альбома.

### Прослушивания музыки

```
---functions---

messages.reportMusicListen#ddbcd819 id:InputDocument listened_duration:int = Bool;
```

С помощью метода [messages.reportMusicListen](/method/messages.reportMusicListen/) сообщайте время прослушивания [document](/constructor/document/), представляющего песню, — то есть аудиодокумента, описанного атрибутом [documentAttributeAudio](/constructor/documentAttributeAudio/) без флага `voice`.

Накапливайте только то время, в течение которого песня действительно воспроизводится. Не включайте в него время паузы, постановки на паузу и остановки.  
Вызывайте [messages.reportMusicListen](/method/messages.reportMusicListen/), когда воспроизведение останавливается, когда начинается другой трек, когда плеер закрывается или когда пауза длится не менее 60 секунд.

Вызывайте [messages.reportMusicListen](/method/messages.reportMusicListen/) только если накопленная длительность составляет не менее 3 секунд:

-   `id` — [InputDocument](/type/InputDocument/) прослушанной песни.
-   `listened_duration` — накопленное время воспроизведения в целых секундах.
