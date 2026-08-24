---
title: "messages.setChatAvailableReactions"
original: "https://core.telegram.org/method/messages.setChatAvailableReactions"
section: ref
kind: method
description: "Изменить набор реакций на сообщения », которые можно использовать в определённой группе, супергруппе или канале"
layout: layout.njk
---

# messages.setChatAvailableReactions

Изменить набор [реакций на сообщения »](/api/reactions/), которые можно использовать в определённой группе, супергруппе или канале

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.setChatAvailableReactions#864b2581 flags:# peer:InputPeer available_reactions:ChatReactions reactions_limit:flags.0?int paid_enabled:flags.1?Bool = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Группа, в которой нужно применить изменения</td></tr><tr><td><strong>available_reactions</strong></td><td style="text-align: center;"><a href="/type/ChatReactions">ChatReactions</a></td><td>Разрешённые эмодзи-реакции</td></tr><tr><td><strong>reactions_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Этот флаг можно использовать, чтобы задать собственное ограничение на число уникальных реакций (то есть настраиваемый вариант <a href="/api/config#reactions-uniq-max">appConfig.reactions_uniq_max</a>); после этого данное поле и остальные сведения, заданные методом, станут доступны пользователям в <a href="/constructor/channelFull">channelFull</a> и <a href="/constructor/chatFull">chatFull</a>.<br>Если этот флаг не установлен, ранее настроенное значение <code>reactions_limit</code> не изменится.</td></tr><tr><td><strong>paid_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Bool">Bool</a></td><td>Если этот флаг установлен и передано значение <a href="/type/Bool">Bool</a>, метод включит или отключит <a href="/api/reactions#paid-reactions">платные реакции на сообщения »</a>. Если флаг не установлен, ранее сохранённая настройка не изменится.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>Информация о чате не изменена, потому что переданные вами новые данные совпадают с текущими.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>400</td><td>LIMIT_PER_POST_INVALID</td><td>Указанное значение reactions_limit недопустимо.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>REACTION_INVALID</td><td>Указанная реакция недействительна.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [chatFull](/constructor/chatFull/)

Полная информация об [обычной группе](/api/channel/#basic-groups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [Bool](/type/Bool/)

Логический тип.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
