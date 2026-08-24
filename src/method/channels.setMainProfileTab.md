---
title: "channels.setMainProfileTab"
original: "https://core.telegram.org/method/channels.setMainProfileTab"
section: ref
kind: method
description: "Изменяет основную вкладку профиля канала, подробнее здесь »."
layout: layout.njk
---

# channels.setMainProfileTab

Изменяет основную вкладку профиля канала, подробнее [здесь »](/api/profile/#tabs).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setMainProfileTab#3583fcb1 channel:InputChannel tab:ProfileTab = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Канал.</td></tr><tr><td><strong>tab</strong></td><td style="text-align: center;"><a href="/type/ProfileTab">ProfileTab</a></td><td>Вкладка, которую нужно сделать главной.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
