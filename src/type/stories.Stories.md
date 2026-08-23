---
title: "stories.Stories (тип)"
original: "https://core.telegram.org/type/stories.Stories"
section: ref
kind: type
layout: layout.njk
---

# stories.Stories

*Тип из схемы TL.*

> List of [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories)

## Определение TL

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;

---functions---

stories.getPinnedStories#5821a5dc peer:InputPeer offset_id:int limit:int = stories.Stories;
stories.getStoriesArchive#b4352016 peer:InputPeer offset_id:int limit:int = stories.Stories;
stories.getStoriesByID#5774ca74 peer:InputPeer id:Vector<int> = stories.Stories;
stories.getAlbumStories#ac806d61 peer:InputPeer album_id:int offset:int limit:int = stories.Stories;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stories.stories](/constructor/stories.stories/) | List of [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories) |

## Методы

| Method | Описание |
|---|---|
| [stories.getPinnedStories](/method/stories.getPinnedStories/) | Fetch the [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories) pinned on a peer's profile. |
| [stories.getStoriesArchive](/method/stories.getStoriesArchive/) | Fetch the [story archive »](https://core.telegram.org/api/stories#pinned-or-archived-stories) of a peer we control. |
| [stories.getStoriesByID](/method/stories.getStoriesByID/) | Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs. |
| [stories.getAlbumStories](/method/stories.getAlbumStories/) | Get stories in a [story album »](https://core.telegram.org/api/stories#story-albums). |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
