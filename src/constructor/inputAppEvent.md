---
title: "inputAppEvent"
original: "https://core.telegram.org/constructor/inputAppEvent"
section: ref
kind: constructor
description: "Событие, произошедшее в приложении."
layout: layout.njk
---

# inputAppEvent

Событие, произошедшее в приложении.

```
inputAppEvent#1d1b1245 time:double type:string peer:long data:JSONValue = InputAppEvent;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>time</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Точная клиентская отметка времени события</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Тип события</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:peer] Произвольное числовое значение для более удобной выборки определённых типов событий или событий, относящихся к определённому объекту</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/JSONValue">JSONValue</a></td><td>Сведения о событии</td></tr></tbody></table>

### Тип

[InputAppEvent](/type/InputAppEvent/)
