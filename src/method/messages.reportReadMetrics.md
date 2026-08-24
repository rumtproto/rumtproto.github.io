---
title: "messages.reportReadMetrics"
original: "https://core.telegram.org/method/messages.reportReadMetrics"
section: ref
kind: method
description: "Передать метрики просмотра для видимых сообщений, указывающие, как долго каждое сообщение оставалось в области просмотра чата; подробнее обо всём процессе см. здесь »."
layout: layout.njk
---

# messages.reportReadMetrics

Передать метрики просмотра для видимых сообщений, указывающие, как долго каждое сообщение оставалось в области просмотра чата; подробнее обо всём процессе см. [здесь »](/api/views/#read-metrics).

```
 Method schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором находятся сообщения</td></tr><tr><td><strong>metrics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputMessageReadMetric">InputMessageReadMetric</a>&gt;</td><td>Список показателей прочтения по отдельным сообщениям</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Просмотры и метрики прочтения](/api/views/)

Клиентам следует сообщать о состоянии прочтения, просмотрах сообщений и прослушиваниях музыки с помощью специального набора методов.
