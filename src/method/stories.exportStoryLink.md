---
title: "stories.exportStoryLink (метод)"
original: "https://core.telegram.org/method/stories.exportStoryLink"
section: ref
kind: method
layout: layout.njk
---

# stories.exportStoryLink

*Метод из схемы TL.*

> Generate a [story deep link](https://core.telegram.org/api/links#story-links) for a specific story

## Определение TL

```
exportedStoryLink#3fc9053b link:string = ExportedStoryLink;
---functions---
stories.exportStoryLink#7b8def20 peer:InputPeer id:int = ExportedStoryLink;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the story was posted |
| id | [int](/type/int/) | Story ID |

## Результат

[ExportedStoryLink](/type/ExportedStoryLink/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORY_ID_EMPTY | You specified no story IDs. |
| 400 | USER_PUBLIC_MISSING | Cannot generate a link to stories posted by a peer without a username. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
