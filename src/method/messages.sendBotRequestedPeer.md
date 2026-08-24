---
title: "messages.sendBotRequestedPeer"
original: "https://core.telegram.org/method/messages.sendBotRequestedPeer"
section: ref
kind: method
description: "Отправить один или несколько выбранных пиров по запросу кнопки keyboardButtonRequestPeer."
layout: layout.njk
---

# messages.sendBotRequestedPeer

Отправить один или несколько выбранных пиров по запросу кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendBotRequestedPeer#91b2d060 peer:InputPeer msg_id:int button_id:int requested_peers:Vector<InputPeer> = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Бот, отправивший кнопку <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a>.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения, содержавшего клавиатуру ответа с кнопкой <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a>.</td></tr><tr><td><strong>webapp_req_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>[@term:Mini App] Если кнопка была подготовлена для <a href="/api/bots/buttons#requesting-peers-via-mini-apps">Mini App »</a> — идентификатор запроса Mini App, возвращённый методом <a href="/method/bots.requestWebViewButton">bots.requestWebViewButton</a>.</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Поле <code>button_id</code> из конструктора <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a>.</td></tr><tr><td><strong>requested_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Выбранные пиры.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Доступно только в личных чатах, в [клавиатурах ответа](/constructor/replyKeyboardMarkup/).

Полное описание процесса см. в разделе [запросы пиров](/api/bots/buttons/#peer-requests).

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [bots.requestWebViewButton](/method/bots.requestWebViewButton/)

Боты могут использовать этот метод, чтобы подготовить кнопку запроса пира для [Mini App](/api/bots/webapps/); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).
