---
title: "sendMessageUploadVideoAction"
original: "https://core.telegram.org/constructor/sendMessageUploadVideoAction"
section: ref
kind: constructor
description: "Пользователь загружает видео."
layout: layout.njk
---

# sendMessageUploadVideoAction

Пользователь загружает видео.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===17===
sendMessageUploadVideoAction#92042ff7 = SendMessageAction;
```

#### Схема API

```
sendMessageUploadVideoAction#e9763aec progress:int = SendMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>progress</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Процент выполнения</td></tr></tbody></table>

### Тип

[SendMessageAction](/type/SendMessageAction/)
