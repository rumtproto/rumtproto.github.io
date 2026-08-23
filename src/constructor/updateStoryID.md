---
title: "updateStoryID (конструктор)"
original: "https://core.telegram.org/constructor/updateStoryID"
section: ref
kind: constructor
layout: layout.njk
---

# updateStoryID

*Конструктор из схемы TL.*

> A story was successfully uploaded.
> Once a story is successfully uploaded, an [updateStoryID](/constructor/updateStoryID/) will be returned, indicating the story ID (`id`) that was attributed to the story (like for messages, `random_id` indicates the `random_id` that was passed to [stories.sendStory](/method/stories.sendStory/): this way, you can tell which story was assigned a specific `id` by checking which [stories.sendStory](/method/stories.sendStory/) call has the returned `random_id`).

## Определение TL

```
updateStoryID#1bf335b9 id:int random_id:long = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | The id that was attributed to the story. |
| random_id | [long](/type/long/) | The random_id that was passed to [stories.sendStory](/method/stories.sendStory/). See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |

## Тип

[Update](/type/Update/)

## Related pages

#### [stories.sendStory](/method/stories.sendStory/)

Uploads a [Telegram Story](https://core.telegram.org/api/stories).

May also be used in a [business connection](https://core.telegram.org/api/bots/connected-business-bots), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in `peer`.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updateStoryID](/constructor/updateStoryID/)

A story was successfully uploaded.

Once a story is successfully uploaded, an [updateStoryID](/constructor/updateStoryID/) will be returned, indicating the story ID (`id`) that was attributed to the story (like for messages, `random_id` indicates the `random_id` that was passed to [stories.sendStory](/method/stories.sendStory/): this way, you can tell which story was assigned a specific `id` by checking which [stories.sendStory](/method/stories.sendStory/) call has the returned `random_id`).
