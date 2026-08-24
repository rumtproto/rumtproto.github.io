---
title: "stories.PeerStories"
original: "https://core.telegram.org/type/stories.PeerStories"
section: ref
kind: type
description: "Список активных историй конкретного пира."
layout: layout.njk
---

# stories.PeerStories

[Список активных историй](/api/stories/#watching-stories) конкретного пира.

```
stories.peerStories#cae68768 stories:PeerStories chats:Vector<Chat> users:Vector<User> = stories.PeerStories;

---functions---

stories.getPeerStories#2c4ada50 peer:InputPeer = stories.PeerStories;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.peerStories">stories.peerStories</a></td><td><a href="/api/stories#watching-stories">Список активных историй</a> конкретного пира.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.getPeerStories">stories.getPeerStories</a></td><td>Получить полный <a href="/api/stories#watching-stories">список активных историй</a> конкретного пира.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
