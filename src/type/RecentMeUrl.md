---
title: "RecentMeUrl"
original: "https://core.telegram.org/type/RecentMeUrl"
section: ref
kind: type
description: "Недавние ссылки t.me"
layout: layout.njk
---

# RecentMeUrl

Недавние ссылки t.me

```
recentMeUrlUnknown#46e1d13d url:string = RecentMeUrl;
recentMeUrlUser#b92c09e2 url:string user_id:long = RecentMeUrl;
recentMeUrlChat#b2da71d2 url:string chat_id:long = RecentMeUrl;
recentMeUrlChatInvite#eb49081d url:string chat_invite:ChatInvite = RecentMeUrl;
recentMeUrlStickerSet#bc0a57dc url:string set:StickerSetCovered = RecentMeUrl;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/recentMeUrlUnknown">recentMeUrlUnknown</a></td><td>Неизвестный адрес t.me</td></tr><tr><td><a href="/constructor/recentMeUrlUser">recentMeUrlUser</a></td><td>Недавняя ссылка t.me на пользователя</td></tr><tr><td><a href="/constructor/recentMeUrlChat">recentMeUrlChat</a></td><td>Недавняя ссылка t.me на чат</td></tr><tr><td><a href="/constructor/recentMeUrlChatInvite">recentMeUrlChatInvite</a></td><td>Недавняя пригласительная ссылка t.me на чат</td></tr><tr><td><a href="/constructor/recentMeUrlStickerSet">recentMeUrlStickerSet</a></td><td>Недавняя ссылка t.me для установки набора стикеров</td></tr></tbody></table>
