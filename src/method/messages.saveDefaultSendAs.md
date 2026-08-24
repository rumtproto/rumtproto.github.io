---
title: "messages.saveDefaultSendAs"
original: "https://core.telegram.org/method/messages.saveDefaultSendAs"
section: ref
kind: method
description: "Изменить пир по умолчанию, используемый при отправке сообщений, реакций и голосов в опросах в определённую группу"
layout: layout.njk
---

# messages.saveDefaultSendAs

Изменить пир по умолчанию, используемый при отправке сообщений, реакций и голосов в опросах в определённую группу

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveDefaultSendAs#ccfddf96 peer:InputPeer send_as:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Группа</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пир, используемый по умолчанию при отправке сообщений в группу</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>Вы не можете отправлять сообщения от имени указанного пира.</td></tr></tbody></table>
