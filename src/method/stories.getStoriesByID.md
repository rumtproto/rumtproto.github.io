---
title: "stories.getStoriesByID (метод)"
original: "https://core.telegram.org/method/stories.getStoriesByID"
section: ref
kind: method
layout: layout.njk
---

# stories.getStoriesByID

*Метод из схемы TL.*

> Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs.

## Определение TL

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;
---functions---
stories.getStoriesByID#5774ca74 peer:InputPeer id:Vector<int> = stories.Stories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the stories were posted |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Story IDs |

## Результат

[stories.Stories](/type/stories.Stories/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORIES_NEVER_CREATED | This peer hasn't ever posted any stories. |
| 400 | STORY_ID_EMPTY | You specified no story IDs. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
