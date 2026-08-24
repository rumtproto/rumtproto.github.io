---
title: "bots.getBotRecommendations"
original: "https://core.telegram.org/method/bots.getBotRecommendations"
section: ref
kind: method
description: "Получить список ботов схожей тематики, отобранных по сходству их аудитории подписчиков; подробнее см. здесь »."
layout: layout.njk
---

# bots.getBotRecommendations

Получить список ботов схожей тематики, отобранных по сходству их аудитории подписчиков; подробнее см. [здесь »](/api/recommend/).

```
users.users#62d706b8 users:Vector<User> = users.Users;
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;
---functions---
bots.getBotRecommendations#a1b70815 bot:InputUser = users.Users;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Метод вернёт ботов, связанных с переданным ботом.</td></tr></tbody></table>

### Результат

[users.Users](/type/users.Users/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Похожие каналы и боты](/api/recommend/)

API предоставляет метод для получения списка публичных каналов и ботов схожей тематики, отобранных по сходству их аудиторий подписчиков.
