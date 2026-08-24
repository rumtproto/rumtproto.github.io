---
title: "messages.setDefaultHistoryTTL"
original: "https://core.telegram.org/method/messages.setDefaultHistoryTTL"
section: ref
kind: method
description: "Изменяет значение по умолчанию настройки времени жизни сообщений (Time-To-Live), применяемое ко всем новым чатам."
layout: layout.njk
---

# messages.setDefaultHistoryTTL

Изменяет значение по умолчанию настройки времени жизни сообщений (Time-To-Live), применяемое ко всем новым чатам.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setDefaultHistoryTTL#9eb51445 period:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Новое время жизни (Time-To-Live) по умолчанию для всех сообщений, отправляемых в новых чатах, в секундах.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>TTL_PERIOD_INVALID</td><td>[@term:TTL] Указанный период TTL недействителен.</td></tr></tbody></table>
