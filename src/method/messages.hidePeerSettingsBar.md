---
title: "messages.hidePeerSettingsBar"
original: "https://core.telegram.org/method/messages.hidePeerSettingsBar"
section: ref
kind: method
description: "Должен вызываться после того, как пользователь скрыл панель «пожаловаться на спам / добавить в контакты» нового чата; фактически запрещает пользователю выполнять действия,…"
layout: layout.njk
---

# messages.hidePeerSettingsBar

Должен вызываться после того, как пользователь скрыл [панель «пожаловаться на спам / добавить в контакты»](/api/action-bar/) нового чата; фактически запрещает пользователю выполнять действия, указанные в [панели действий »](/api/action-bar/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.hidePeerSettingsBar#4facb138 peer:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Панель действий](/api/action-bar/)

Иногда при взаимодействии с пользователями Telegram через личные или секретные чаты вверху чата необходимо показать панель действий, предлагающую удобные кнопки или уведомления об этом пользователе.
