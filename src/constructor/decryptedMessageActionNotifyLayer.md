---
title: "decryptedMessageActionNotifyLayer"
original: "https://core.telegram.org/constructor/decryptedMessageActionNotifyLayer"
section: ref
kind: constructor
description: "Уведомление о том, какой слой API использует клиент. Следует использовать свой текущий слой и при отправке сообщений учитывать слой, используемый на другой стороне переписки."
layout: layout.njk
---

# decryptedMessageActionNotifyLayer

Уведомление о том, какой слой API использует клиент. Следует использовать свой текущий слой и при отправке сообщений учитывать слой, используемый на другой стороне переписки.

```
===17===
decryptedMessageActionNotifyLayer#f3048883 layer:int = DecryptedMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>layer</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:layer] Номер слоя, обязан быть <strong>17</strong> или выше (этот конструктор появился в слое 17.</td></tr></tbody></table>

### Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)
