---
title: "phone.getGroupCallStars"
original: "https://core.telegram.org/method/phone.getGroupCallStars"
section: ref
kind: method
description: "Получить общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. платные пожертвования в прямых историях »."
layout: layout.njk
---

# phone.getGroupCallStars

Получить общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. [платные пожертвования в прямых историях »](/api/group-calls/#paid-live-story-donations).

```
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;
---functions---
phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок прямой истории</td></tr></tbody></table>

### Результат

[phone.GroupCallStars](/type/phone.GroupCallStars/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
