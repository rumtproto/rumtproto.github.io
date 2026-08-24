---
title: "auth.sentCodeTypeFlashCall"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeFlashCall"
section: ref
kind: constructor
description: "Код будет отправлен сбросом звонка, который сразу же завершится. Кодом при этом будет сам номер телефона — достаточно убедиться, что номер соответствует указанному шаблону."
layout: layout.njk
---

# auth.sentCodeTypeFlashCall

Код будет отправлен сбросом звонка, который сразу же завершится. Кодом при этом будет сам номер телефона — достаточно убедиться, что номер соответствует указанному шаблону.

```
auth.sentCodeTypeFlashCall#ab03c6d9 pattern:string = auth.SentCodeType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>pattern</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/pattern">шаблон</a> для сопоставления</td></tr></tbody></table>

### Тип

[auth.SentCodeType](/type/auth.SentCodeType/)

### Связанные страницы

#### [Сопоставление с шаблоном](/api/pattern/)

Некоторые методы требуют, чтобы клиент проверил, соответствуют ли данные, полученные из внешнего источника, определённому шаблону.
