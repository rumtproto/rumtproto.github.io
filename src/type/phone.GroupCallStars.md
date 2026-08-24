---
title: "phone.GroupCallStars"
original: "https://core.telegram.org/type/phone.GroupCallStars"
section: ref
kind: type
description: "Содержит общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. платные пожертвования в прямых историях »."
layout: layout.njk
---

# Phone.GroupCallStars

Содержит общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. [платные пожертвования в прямых историях »](/api/group-calls/#paid-live-story-donations).

```
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;

---functions---

phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCallStars">phone.groupCallStars</a></td><td>Содержит общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. <a href="/api/group-calls#paid-live-story-donations">платные пожертвования в прямых историях »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallStars">phone.getGroupCallStars</a></td><td>Получить общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. <a href="/api/group-calls#paid-live-story-donations">платные пожертвования в прямых историях »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
