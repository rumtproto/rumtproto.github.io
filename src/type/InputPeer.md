---
title: "InputPeer"
original: "https://core.telegram.org/type/InputPeer"
section: ref
kind: type
description: "Пир"
layout: layout.njk
---

# InputPeer

Пир

```
inputPeerEmpty#7f3b18ea = InputPeer;
inputPeerSelf#7da07ec9 = InputPeer;
inputPeerChat#35a95cb9 chat_id:long = InputPeer;
inputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;
inputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;
inputPeerUserFromMessage#a87b0a1c peer:InputPeer msg_id:int user_id:long = InputPeer;
inputPeerChannelFromMessage#bd2a0840 peer:InputPeer msg_id:int channel_id:long = InputPeer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputPeerEmpty">inputPeerEmpty</a></td><td>Пустой конструктор, не задан ни пользователь, ни чат.</td></tr><tr><td><a href="/constructor/inputPeerSelf">inputPeerSelf</a></td><td>Определяет текущего пользователя.</td></tr><tr><td><a href="/constructor/inputPeerChat">inputPeerChat</a></td><td>Определяет чат для дальнейшего взаимодействия.</td></tr><tr><td><a href="/constructor/inputPeerUser">inputPeerUser</a></td><td>Определяет пользователя для дальнейшего взаимодействия.</td></tr><tr><td><a href="/constructor/inputPeerChannel">inputPeerChannel</a></td><td>Определяет канал для дальнейшего взаимодействия.</td></tr><tr><td><a href="/constructor/inputPeerUserFromMessage">inputPeerUserFromMessage</a></td><td>Определяет <a href="/api/min">min</a>-пользователя, который встретился в определённом сообщении определённого чата.</td></tr><tr><td><a href="/constructor/inputPeerChannelFromMessage">inputPeerChannelFromMessage</a></td><td>Определяет <a href="/api/min">min</a>-канал, который встретился в определённом сообщении определённого чата.</td></tr></tbody></table>
