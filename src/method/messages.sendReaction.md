---
title: "messages.sendReaction"
original: "https://core.telegram.org/method/messages.sendReaction"
section: ref
kind: method
description: "Поставить реакцию на сообщение."
layout: layout.njk
---

# messages.sendReaction

Поставить реакцию на сообщение.

Начиная со слоя 159 реакция отправляется от имени пира, указанного через [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>big</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли показать более крупную и длительную анимацию реакции</td></tr><tr><td><strong>add_to_recent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Добавлять ли эту реакцию в <a href="/api/reactions#recent-reactions">список недавних реакций »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения, на которое нужно поставить реакцию</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Reaction">Reaction</a>&gt;</td><td>Список реакций (конструкторы <a href="/constructor/reactionPaid">reactionPaid</a> не принимаются, для отправки платных реакций используйте <a href="/method/messages.sendPaidReaction">messages.sendPaidReaction</a>).</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>CUSTOM_REACTIONS_TOO_MANY</td><td>Указано слишком много пользовательских реакций.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>MESSAGE_NOT_MODIFIED</td><td>Переданные данные сообщения совпадают с прежними, сообщение не было изменено.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>400</td><td>REACTIONS_TOO_MANY</td><td>К сообщению уже добавлено ровно <code>reactions_uniq_max</code> эмодзи-реакций, поэтому отреагировать новым эмодзи нельзя, <a href="/api/config#client-configuration">подробнее см. в документации&nbsp;»</a>.</td></tr><tr><td>400</td><td>REACTION_EMPTY</td><td>Передана пустая реакция.</td></tr><tr><td>400</td><td>REACTION_INVALID</td><td>Указанная реакция недействительна.</td></tr><tr><td>403</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [reactionPaid](/constructor/reactionPaid/)

Представляет [платную реакцию за Telegram Stars »](/api/reactions/#paid-reactions).

#### [messages.sendPaidReaction](/method/messages.sendPaidReaction/)

Отправляет одну или несколько [платных реакций Telegram Stars »](/api/reactions/#paid-reactions), переводя [Telegram Stars »](/api/stars/) на баланс канала.

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Изменить пир по умолчанию, используемый при отправке сообщений, реакций и голосов в опросах в определённую группу

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
