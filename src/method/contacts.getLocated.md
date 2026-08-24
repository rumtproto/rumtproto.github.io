---
title: "contacts.getLocated"
original: "https://core.telegram.org/method/contacts.getLocated"
section: ref
kind: method
description: "Получить пользователей и геочаты поблизости; подробнее см. здесь »."
layout: layout.njk
---

# contacts.getLocated

Получить пользователей и геочаты поблизости; подробнее см. [здесь »](/api/nearby/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
contacts.getLocated#d348bc44 flags:# background:flags.1?true geo_point:InputGeoPoint self_expires:flags.0?int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Пока геолокация текущего пользователя является публичной, клиентам следует обновлять её в фоновом режиме примерно каждые полчаса, устанавливая этот флаг.<br>Делайте это только в том случае, если новое местоположение находится дальше 1 км от предыдущего либо предыдущее местоположение неизвестно.</td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Геопозиция</td></tr><tr><td><strong>self_expires</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, геолокация текущего пользователя будет публичной в течение указанного числа секунд; передайте 0x7fffffff, чтобы отключить истечение срока, и 0, чтобы сделать текущую геолокацию приватной; если флаг не установлен, изменения не применяются.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>BUSINESS_ADDRESS_ACTIVE</td><td>Пользователь в настоящий момент указывает <a href="/api/business#location">местоположение компании</a>; изменить (или удалить) местоположение можно только с помощью <a href="/method/account.updateBusinessLocation">account.updateBusinessLocation&nbsp;»</a>. .</td></tr><tr><td>400</td><td>GEO_POINT_INVALID</td><td>Указано недействительное географическое положение.</td></tr><tr><td>406</td><td>USERPIC_PRIVACY_REQUIRED</td><td>Чтобы сделать свою геопозицию публичной, необходимо отключить настройки приватности для фотографии профиля.</td></tr><tr><td>406</td><td>USERPIC_UPLOAD_REQUIRED</td><td>Чтобы опубликовать свою геопозицию, необходимо иметь фотографию профиля.</td></tr></tbody></table>

### Связанные страницы

#### [Пользователи и чаты поблизости](/api/nearby/)

Как работать с возможностями на основе геолокации, такими как геочаты и поиск пользователей поблизости.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [account.updateBusinessLocation](/method/account.updateBusinessLocation/)

[Бизнес-аккаунты »](/api/business/#location) могут указывать своё местоположение с помощью этого метода, подробнее см. [здесь »](/api/business/#location).

Чтобы удалить сведения о местоположении компании, вызовите метод, не задавая ни одного из параметров.
