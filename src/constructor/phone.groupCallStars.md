---
title: "phone.groupCallStars"
original: "https://core.telegram.org/constructor/phone.groupCallStars"
section: ref
kind: constructor
description: "Содержит общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. платные пожертвования в прямых историях »."
layout: layout.njk
---

# phone.groupCallStars

Содержит общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. [платные пожертвования в прямых историях »](/api/group-calls/#paid-live-story-donations).

```
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>total_stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Всего stars, пожертвованных прямой истории</td></tr><tr><td><strong>top_donors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/GroupCallDonor">GroupCallDonor</a>&gt;</td><td>Крупнейшие жертвователи</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в <code>top_donors</code></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в <code>top_donors</code></td></tr></tbody></table>

### Тип

[phone.GroupCallStars](/type/phone.GroupCallStars/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
