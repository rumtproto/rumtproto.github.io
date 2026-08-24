---
title: "account.disablePeerConnectedBot"
original: "https://core.telegram.org/method/account.disablePeerConnectedBot"
section: ref
kind: method
description: "Безвозвратно отключить конкретный чат от всех бизнес-ботов » (равнозначно указанию его в recipients.exclude_users при первоначальной настройке через account.updateConnectedBot »);…"
layout: layout.njk
---

# account.disablePeerConnectedBot

Безвозвратно отключить конкретный чат от всех [бизнес-ботов »](/api/bots/connected-business-bots/) (равнозначно указанию его в `recipients.exclude_users` при первоначальной настройке через [account.updateConnectedBot »](/method/account.updateConnectedBot/)); чтобы снова подключить чат, отключённый этим методом, пользователь обязан заново подключить бота целиком, вызвав [account.updateConnectedBot »](/method/account.updateConnectedBot/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.disablePeerConnectedBot#5e437ed9 peer:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат, который следует отключить</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_ALREADY_DISABLED</td><td>Подключённый бизнес-бот уже был отключён для указанного пира.</td></tr><tr><td>400</td><td>BOT_NOT_CONNECTED_YET</td><td>К пользователю, вошедшему в аккаунт в данный момент, не подключён ни один <a href="/api/business#connected-bots">бизнес-бот</a>.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [account.updateConnectedBot](/method/account.updateConnectedBot/)

Подключить [бизнес-бота »](/api/bots/connected-business-bots/) к текущему аккаунту либо изменить текущие настройки подключения.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
