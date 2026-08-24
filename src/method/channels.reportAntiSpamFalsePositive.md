---
title: "channels.reportAntiSpamFalsePositive"
original: "https://core.telegram.org/method/channels.reportAntiSpamFalsePositive"
section: ref
kind: method
description: "Сообщить о ложном срабатывании встроенной защиты от спама"
layout: layout.njk
---

# channels.reportAntiSpamFalsePositive

Сообщить о ложном срабатывании [встроенной защиты от спама](/api/antispam/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.reportAntiSpamFalsePositive#a850a693 channel:InputChannel msg_id:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Идентификатор супергруппы</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения, ошибочно удалённого системой <a href="/api/antispam">встроенной защиты от спама</a>, взятый из <a href="/api/recent-actions">журнала администратора</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Встроенная система антиспама](/api/antispam/)

Администраторы супергрупп с определённым числом участников могут задействовать всю упреждающую мощь собственных антиспам-алгоритмов Telegram — включить новый агрессивный режим автоматических спам-фильтров.

#### [Журнал действий администраторов](/api/recent-actions/)

И супергруппы, и каналы предоставляют так называемый журнал администратора — журнал недавних значимых действий в супергруппе и канале: изменение настроек или информации группы/канала от имени администратора, исключения и блокировки пользователей и многое другое.
