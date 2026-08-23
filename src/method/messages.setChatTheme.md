---
title: "messages.setChatTheme (метод)"
original: "https://core.telegram.org/method/messages.setChatTheme"
section: ref
kind: method
layout: layout.njk
---

# messages.setChatTheme

*Метод из схемы TL.*

> Change the chat theme of a certain chat, see [here »](https://core.telegram.org/api/themes#chat-themes) for more info.

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.setChatTheme#81202c9 peer:InputPeer theme:InputChatTheme = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Private chat where to change theme |
| theme | [InputChatTheme](/type/InputChatTheme/) | The theme to set. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMOJI_INVALID | The specified theme emoji is valid. |
| 400 | EMOJI_NOT_MODIFIED | The theme wasn't changed. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.
