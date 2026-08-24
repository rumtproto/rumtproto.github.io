---
title: "InputChannel"
original: "https://core.telegram.org/type/InputChannel"
section: ref
kind: type
description: "Представляет канал"
layout: layout.njk
---

# InputChannel

Представляет канал

```
inputChannelEmpty#ee8c1e86 = InputChannel;
inputChannel#f35aec28 channel_id:long access_hash:long = InputChannel;
inputChannelFromMessage#5b934f9d peer:InputPeer msg_id:int channel_id:long = InputChannel;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputChannelEmpty">inputChannelEmpty</a></td><td>Представляет отсутствие канала</td></tr><tr><td><a href="/constructor/inputChannel">inputChannel</a></td><td>Представляет канал</td></tr><tr><td><a href="/constructor/inputChannelFromMessage">inputChannelFromMessage</a></td><td>Определяет <a href="/api/min">min</a>-канал, который встретился в определённом сообщении определённого чата.</td></tr></tbody></table>
