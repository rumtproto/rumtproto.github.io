---
title: "bots.setBotGroupDefaultAdminRights"
original: "https://core.telegram.org/method/bots.setBotGroupDefaultAdminRights"
section: ref
kind: method
description: "Задать рекомендуемые права администратора по умолчанию для ботов, добавляемых администраторами в группы; подробнее о том, как их обрабатывать »."
layout: layout.njk
---

# bots.setBotGroupDefaultAdminRights

Задать [рекомендуемые права администратора](/api/rights/#suggested-bot-rights) по умолчанию для ботов, добавляемых администраторами в группы; [подробнее о том, как их обрабатывать »](/api/rights/#suggested-bot-rights).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotGroupDefaultAdminRights#925ec9ea admin_rights:ChatAdminRights = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Права администратора</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>RIGHTS_NOT_MODIFIED</td><td>Новые права администратора совпадают со старыми, изменений не произошло.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [Права администраторов, ограничения и права по умолчанию](/api/rights/)

Как работать с правами администраторов, детальными ограничениями и общими правами в каналах, группах и супергруппах.
