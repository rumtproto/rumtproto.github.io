---
title: "messages.setChatWallPaper"
original: "https://core.telegram.org/method/messages.setChatWallPaper"
section: ref
kind: method
description: "Установить пользовательские обои » в конкретном личном чате с другим пользователем."
layout: layout.njk
---

# messages.setChatWallPaper

Установить пользовательские [обои »](/api/wallpapers/) в конкретном личном чате с другим пользователем.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.setChatWallPaper#8ffacae1 flags:# for_both:flags.3?true revert:flags.4?true peer:InputPeer wallpaper:flags.0?InputWallPaper settings:flags.2?WallPaperSettings id:flags.1?int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>for_both</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Только для пользователей <a href="/api/premium">Premium</a>: устанавливает указанные обои для обоих участников чата, не требуя подтверждения от другого пользователя.</td></tr><tr><td><strong>revert</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если нам не нравятся новые обои, выбранные для нас другим пользователем чата с помощью флага <code>for_both</code>, с помощью этого флага можно вернуть прежние обои только на своей стороне.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Личный чат, в котором будут установлены обои</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputWallPaper">InputWallPaper</a></td><td><a href="/api/wallpapers">Обои »</a>, полученные так, как описано в <a href="/api/wallpapers#uploading-wallpapers">документации по обоям »</a>; <strong>не</strong> должны передаваться при установке обоев, полученных из сервисного сообщения <a href="/constructor/messageActionSetChatWallPaper">messageActionSetChatWallPaper</a> (вместо этого следует передать <code>id</code>).</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/WallPaperSettings">WallPaperSettings</a></td><td>Настройки обоев, полученные так, как описано в <a href="/api/wallpapers#uploading-wallpapers">документации по обоям »</a>, или из поля <a href="/constructor/messageActionSetChatWallPaper">messageActionSetChatWallPaper</a>.<code>wallpaper</code>.<code>settings</code>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Если обои были получены из сервисного сообщения <a href="/constructor/messageActionSetChatWallPaper">messageActionSetChatWallPaper</a>, должно содержать идентификатор этого сообщения.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>WALLPAPER_INVALID</td><td>Указанные обои недействительны.</td></tr><tr><td>400</td><td>WALLPAPER_NOT_FOUND</td><td>Указанные обои не найдены.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/)

[Обои »](/api/wallpapers/) текущего чата были изменены.
