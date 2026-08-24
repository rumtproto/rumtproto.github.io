---
title: "sendMessageUploadRoundAction"
original: "https://core.telegram.org/constructor/sendMessageUploadRoundAction"
section: ref
kind: constructor
description: "Пользователь загружает видеосообщение"
layout: layout.njk
---

# sendMessageUploadRoundAction

Пользователь загружает видеосообщение

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===66===
sendMessageUploadRoundAction#bb718624 = SendMessageAction;
```

#### Схема API

```
sendMessageUploadRoundAction#243e1c66 progress:int = SendMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>progress</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Процент выполнения</td></tr></tbody></table>

### Тип

[SendMessageAction](/type/SendMessageAction/)
