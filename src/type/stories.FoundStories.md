---
title: "stories.FoundStories (тип)"
original: "https://core.telegram.org/type/stories.FoundStories"
section: ref
kind: type
layout: layout.njk
---

# stories.FoundStories

*Тип из схемы TL.*

> Stories found using [global story search »](https://core.telegram.org/api/stories#searching-stories).

## Определение TL

```
stories.foundStories#e2de7737 flags:# count:int stories:Vector<FoundStory> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stories.FoundStories;

---functions---

stories.searchPosts#d1810907 flags:# hashtag:flags.0?string area:flags.1?MediaArea peer:flags.2?InputPeer offset:string limit:int = stories.FoundStories;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stories.foundStories](/constructor/stories.foundStories/) | Stories found using [global story search »](https://core.telegram.org/api/stories#searching-stories). |

## Методы

| Method | Описание |
|---|---|
| [stories.searchPosts](/method/stories.searchPosts/) | Globally search for [stories](https://core.telegram.org/api/stories) using a hashtag or a [location media area](https://core.telegram.org/api/stories#location-tags), see [here »](https://core.telegram.org/api/stories#searching-stories) for more info on the full flow. Either hashtag or area must be set when invoking the method. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
