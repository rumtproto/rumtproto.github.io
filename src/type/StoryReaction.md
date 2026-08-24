---
title: "StoryReaction"
original: "https://core.telegram.org/type/StoryReaction"
section: ref
kind: type
description: "Как определённый пир отреагировал на историю или взаимодействовал с ней"
layout: layout.njk
---

# StoryReaction

Как определённый пир отреагировал на историю или взаимодействовал с ней

```
storyReaction#6090d6d5 peer_id:Peer date:int reaction:Reaction = StoryReaction;
storyReactionPublicForward#bbab2643 message:Message = StoryReaction;
storyReactionPublicRepost#cfcd0f13 peer_id:Peer story:StoryItem = StoryReaction;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/storyReaction">storyReaction</a></td><td>Как определённый пир отреагировал на историю</td></tr><tr><td><a href="/constructor/storyReactionPublicForward">storyReactionPublicForward</a></td><td>Определённый пир переслал историю в виде сообщения в публичный чат или канал.</td></tr><tr><td><a href="/constructor/storyReactionPublicRepost">storyReactionPublicRepost</a></td><td>Определённый пир сделал репост истории.</td></tr></tbody></table>
