---
title: "help.dismissSuggestion"
original: "https://core.telegram.org/method/help.dismissSuggestion"
section: ref
kind: method
description: "Отклонить подсказку, подробнее см. здесь »."
layout: layout.njk
---

# help.dismissSuggestion

Отклонить [подсказку, подробнее см. здесь »](/api/config/#suggestions).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.dismissSuggestion#f50dbaa1 peer:InputPeer suggestion:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Для ожидающих предложений в <a href="/constructor/channelFull">каналах</a> — идентификатор канала.</td></tr><tr><td><strong>suggestion</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/config#suggestions">Подсказка, подробнее см. здесь »</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
