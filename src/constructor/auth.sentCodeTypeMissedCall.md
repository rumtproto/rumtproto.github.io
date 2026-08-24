---
title: "auth.sentCodeTypeMissedCall"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeMissedCall"
section: ref
kind: constructor
description: "Код будет отправлен сбросом звонка, который сразу же завершится. Код — это последние цифры номера, с которого поступил звонок; пользователь должен ввести их вручную."
layout: layout.njk
---

# auth.sentCodeTypeMissedCall

Код будет отправлен сбросом звонка, который сразу же завершится. Код — это последние цифры номера, с которого поступил звонок; пользователь должен ввести их вручную.

```
auth.sentCodeTypeMissedCall#82006484 prefix:string length:int = auth.SentCodeType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>prefix</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Префикс телефонного номера, с которого будет совершён звонок</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина кода подтверждения</td></tr></tbody></table>

### Тип

[auth.SentCodeType](/type/auth.SentCodeType/)
