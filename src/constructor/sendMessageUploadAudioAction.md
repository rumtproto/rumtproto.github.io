---
title: "sendMessageUploadAudioAction"
original: "https://core.telegram.org/constructor/sendMessageUploadAudioAction"
section: ref
kind: constructor
description: "Пользователь загружает голосовое сообщение."
layout: layout.njk
---

# sendMessageUploadAudioAction

Пользователь загружает голосовое сообщение.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===17===
sendMessageUploadAudioAction#e6ac8a6f = SendMessageAction;
```

#### Схема API

```
sendMessageUploadAudioAction#f351d7ab progress:int = SendMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>progress</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Процент выполнения</td></tr></tbody></table>

### Тип

[SendMessageAction](/type/SendMessageAction/)
