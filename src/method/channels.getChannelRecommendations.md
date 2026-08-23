---
title: "channels.getChannelRecommendations (метод)"
original: "https://core.telegram.org/method/channels.getChannelRecommendations"
section: ref
kind: method
layout: layout.njk
---

# channels.getChannelRecommendations

*Метод из схемы TL.*

> Obtain a list of similarly themed public channels, selected based on similarities in their **subscriber bases**.

## Определение TL

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getChannelRecommendations#25a71742 flags:# channel:flags.0?InputChannel = messages.Chats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| channel | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputChannel](/type/InputChannel/) | The method will return channels related to the passed channel. If not set, the method will returns channels related to channels the user has joined. |

## Результат

[messages.Chats](/type/messages.Chats/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
