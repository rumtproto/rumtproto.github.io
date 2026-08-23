---
title: "stories.AllStories (тип)"
original: "https://core.telegram.org/type/stories.AllStories"
section: ref
kind: type
layout: layout.njk
---

# stories.AllStories

*Тип из схемы TL.*

> Full list of active (or active and hidden) [stories](https://core.telegram.org/api/stories#watching-stories).

## Определение TL

```
stories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;
stories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;

---functions---

stories.getAllStories#eeb0d625 flags:# next:flags.1?true hidden:flags.2?true state:flags.0?string = stories.AllStories;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stories.allStoriesNotModified](/constructor/stories.allStoriesNotModified/) | The list of active (or active and hidden) [stories](https://core.telegram.org/api/stories#watching-stories) has not changed. |
| [stories.allStories](/constructor/stories.allStories/) | Full list of active (or active and hidden) [stories](https://core.telegram.org/api/stories#watching-stories). |

## Методы

| Method | Описание |
|---|---|
| [stories.getAllStories](/method/stories.getAllStories/) | Fetch the List of active (or active and hidden) stories, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on watching stories. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
