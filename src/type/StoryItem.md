---
title: "StoryItem"
original: "https://core.telegram.org/type/StoryItem"
section: ref
kind: type
description: "Представляет историю Telegram"
layout: layout.njk
---

# StoryItem

Представляет [историю Telegram](/api/stories/)

```
storyItemDeleted#51e6ee4f id:int = StoryItem;
storyItemSkipped#ffadc913 flags:# close_friends:flags.8?true live:flags.9?true id:int date:int expire_date:int = StoryItem;
storyItem#edf164f1 flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> = StoryItem;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/storyItemDeleted">storyItemDeleted</a></td><td>Представляет ранее активную историю, которая была удалена</td></tr><tr><td><a href="/constructor/storyItemSkipped">storyItemSkipped</a></td><td>Представляет активную историю, полная информация о которой опущена из соображений экономии места и производительности; используйте <a href="/method/stories.getStoriesByID">stories.getStoriesByID</a>, чтобы при необходимости получить полные сведения о пропущенной истории.</td></tr><tr><td><a href="/constructor/storyItem">storyItem</a></td><td>Представляет <a href="/api/stories">историю</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
