---
title: "Трансляция геопозиции"
original: "https://core.telegram.org/api/live-location"
section: api
description: "Telegram позволяет транслировать геопозицию пользователя в чате в реальном времени, при желании — с оповещением о сближении."
layout: layout.njk
---

# Трансляция геопозиции

Telegram позволяет транслировать геопозицию пользователя в чате в реальном времени, при желании — с оповещением о сближении.

### Отправка трансляции геопозиции

```
inputGeoPointEmpty#e4c123d6 = InputGeoPoint;

inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;

inputMediaGeoLive#971fa843 flags:# stopped:flags.0?true geo_point:InputGeoPoint heading:flags.2?int period:flags.1?int proximity_notification_radius:flags.3?int = InputMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
```

Чтобы передать геопозицию в режиме реального времени, вызовите [messages.sendMedia](/method/messages.sendMedia/), указав в поле `media` конструктор [inputMediaGeoLive](/constructor/inputMediaGeoLive/).

Конструктор [inputMediaGeoLive](/constructor/inputMediaGeoLive/) позволяет передать геопозицию в виде [inputGeoPoint](/constructor/inputGeoPoint/) с широтой и долготой в формате с плавающей точкой и необязательным радиусом погрешности `accuracy_radius` в метрах.  
Клиент также может передать `heading` (угол в градусах от 1 до 360, которым обозначают направление движения пользователя), `period` (срок действия текущей геопозиции) и `proximity_notification_radius` (радиус оповещения о сближении).

Отправленную геопозицию следует периодически обновлять методом [messages.editMessage](/method/messages.editMessage/) с интервалом **не более** `period` секунд — именно за счёт этого геопозиция и передаётся в режиме реального времени.

Чтобы прекратить передачу геопозиции, в последнем вызове [messages.editMessage](/method/messages.editMessage/) передайте в качестве геопозиции [inputGeoPointEmpty](/constructor/inputGeoPointEmpty/) и выставьте флаг `stopped` в true.

### Приём трансляции геопозиции

```
geoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;
messageMediaGeoLive#b940c666 flags:# geo:GeoPoint heading:flags.0?int period:int proximity_notification_radius:flags.1?int = MessageMedia;

updateGeoLiveViewed#871fb939 peer:Peer msg_id:int = Update;

---functions---

messages.getRecentLocations#702a40e0 peer:InputPeer limit:int hash:long = messages.Messages;
```

Все недавние трансляции геопозиции, отправленные в чат, можно получить методом [messages.getRecentLocations](/method/messages.getRecentLocations/): он возвращает не более одного сообщения с геопозицией ([messageMediaGeoLive](/constructor/messageMediaGeoLive/)) на каждого участника чата.

Кроме того, клиент получит сообщение с [messageMediaGeoLive](/constructor/messageMediaGeoLive/), где содержатся сведения, переданные отправителем; когда такое сообщение [помечают как прочитанное](/api/views/#read-message-contents), генерируется обновление [updateGeoLiveViewed](/constructor/updateGeoLiveViewed/).

Время от времени геопозиция будет меняться — об этом сообщают обновления [updateEditMessage](/constructor/updateEditMessage/)/[updateEditChannelMessage](/constructor/updateEditChannelMessage/).

#### Превью трансляции геопозиции

```
inputWebFileGeoPointLocation#9f2221c9 geo_point:InputGeoPoint access_hash:long w:int h:int zoom:int scale:int = InputWebFileLocation;

inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;

---functions---

upload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;
```

[@term:access_hash] Чтобы получить превью карты, передайте полученный [geoPoint](/constructor/geoPoint/) в [upload.getWebFile](/api/files/#downloading-webfiles) и скачайте изображение карты (`access_hash` — хеш доступа: сервер выдаёт его вместе с объектом, и без него сослаться на объект нельзя).

-   `geo_point` формируется из параметров `lat`, `long`, `accuracy_radius` конструктора [geoPoint](/constructor/geoPoint/)
-   `access_hash` — хеш доступа из [geoPoint](/constructor/geoPoint/)
-   `w` — ширина карты в пикселях до применения масштаба; 16–1024
-   `h` — высота карты в пикселях до применения масштаба; 16–1024
-   `zoom` — уровень масштабирования карты; 13–20
-   `scale` — масштаб карты; 1–3

Затем изображение скачивается так, как описано [здесь »](/api/files/)

### Оповещение о сближении

```
messageActionGeoProximityReached#98e0d697 from_id:Peer to_id:Peer distance:int = MessageAction;

messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
```

Если:

-   пользователь задаёт `proximity_notification_radius` при отправке геопозиции
-   несколько пользователей передают свою геопозицию в одном и том же чате
-   кто-то из остальных пользователей оказывается ближе `proximity_notification_radius` метров к первому пользователю и обновляет свою геопозицию

[@term:peer] то для всех участников чата генерируется [updateNewMessage](/constructor/updateNewMessage/)/[updateNewChannelMessage](/constructor/updateNewChannelMessage/) с конструктором [messageService](/constructor/messageService/), в котором действием указан [messageActionGeoProximityReached](/constructor/messageActionGeoProximityReached/) (пир, `peer`, — адресат в протоколе: пользователь, чат или канал):

-   `messageActionGeoProximityReached.to_id` — пир, включивший оповещения о сближении
-   `messageActionGeoProximityReached.from_id` — пир, который оказался рядом с `messageActionGeoProximityReached.to_id`
-   `messageActionGeoProximityReached.distance` — расстояние между ними в метрах
