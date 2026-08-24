---
title: "chatlists.joinChatlistInvite"
original: "https://core.telegram.org/method/chatlists.joinChatlistInvite"
section: ref
kind: method
description: "Импортировать глубокую ссылку на папку чатов », вступив в некоторые или во все чаты папки."
layout: layout.njk
---

# chatlists.joinChatlistInvite

Импортировать [глубокую ссылку на папку чатов »](/api/links/#chat-folder-links), вступив в некоторые или во все чаты папки.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
chatlists.joinChatlistInvite#a6b1e39a slug:string peers:Vector<InputPeer> = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] <code>slug</code>, полученный из <a href="/api/links#chat-folder-links">глубокой ссылки на папку с чатами »</a>.</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Список новых чатов, к которым нужно присоединиться; получается методом <a href="/method/chatlists.checkChatlistInvite">chatlists.checkChatlistInvite</a> и фильтруется так, как указано в <a href="/api/folders#shared-folders">документации »</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_TOO_MUCH</td><td>Вы состоите в слишком большом числе каналов и супергрупп.</td></tr><tr><td>400</td><td>CHATLISTS_TOO_MUCH</td><td>Вы создали слишком много ссылок на папки, достигнув заданных параметрами <code>chatlist_invites_limit_default</code>/<code>chatlist_invites_limit_premium</code> <a href="/api/config#chatlist-invites-limit-default">ограничений&nbsp;»</a>.</td></tr><tr><td>400</td><td>FILTER_INCLUDE_EMPTY</td><td>Вектор include_peers у фильтра пуст.</td></tr><tr><td>400</td><td>INVITE_SLUG_EMPTY</td><td>Указанный слаг приглашения пуст.</td></tr><tr><td>400</td><td>INVITE_SLUG_EXPIRED</td><td>Срок действия указанной ссылки на папку чатов истёк.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [chatlists.checkChatlistInvite](/method/chatlists.checkChatlistInvite/)

Получить сведения о [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links).

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
