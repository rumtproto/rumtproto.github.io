---
title: "messages.readMessageContents (метод)"
original: "https://core.telegram.org/method/messages.readMessageContents"
section: ref
kind: method
layout: layout.njk
---

# messages.readMessageContents

*Метод из схемы TL.*

> Notifies the sender about the recipient having listened a voice message or watched a video, emitting an [updateReadMessagesContents](/constructor/updateReadMessagesContents/).

## Определение TL

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
messages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Message ID list |

## Результат

[messages.AffectedMessages](/type/messages.AffectedMessages/)

## Only users can use this method

## Related pages

#### [updateReadMessagesContents](/constructor/updateReadMessagesContents/)

Contents of messages in the common [message box](/api/updates/) were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [messages.readMessageContents](/method/messages.readMessageContents/)).
