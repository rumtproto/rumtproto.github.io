---
title: "users.suggestBirthday (метод)"
original: "https://core.telegram.org/method/users.suggestBirthday"
section: ref
kind: method
layout: layout.njk
---

# users.suggestBirthday

*Метод из схемы TL.*

> Suggest a birthday to another user, see [here »](https://core.telegram.org/api/profile#birthday) for more info on birthdays in the API.

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
users.suggestBirthday#fc533372 id:InputUser birthday:Birthday = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputUser](/type/InputUser/) | The user that will receive the suggested birthday date. |
| birthday | [Birthday](/type/Birthday/) | The birthday to suggest. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BIRTHDAY_ALREADY | The target user already has a birthday set. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
