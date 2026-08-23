---
title: "InputPeer (тип)"
original: "https://core.telegram.org/type/InputPeer"
section: ref
kind: type
layout: layout.njk
---

# InputPeer

*Тип из схемы TL.*

> Peer

## Определение TL

```
inputPeerEmpty#7f3b18ea = InputPeer;
inputPeerSelf#7da07ec9 = InputPeer;
inputPeerChat#35a95cb9 chat_id:long = InputPeer;
inputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;
inputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;
inputPeerUserFromMessage#a87b0a1c peer:InputPeer msg_id:int user_id:long = InputPeer;
inputPeerChannelFromMessage#bd2a0840 peer:InputPeer msg_id:int channel_id:long = InputPeer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputPeerEmpty](/constructor/inputPeerEmpty/) | An empty constructor, no user or chat is defined. |
| [inputPeerSelf](/constructor/inputPeerSelf/) | Defines the current user. |
| [inputPeerChat](/constructor/inputPeerChat/) | Defines a chat for further interaction. |
| [inputPeerUser](/constructor/inputPeerUser/) | Defines a user for further interaction. |
| [inputPeerChannel](/constructor/inputPeerChannel/) | Defines a channel for further interaction. |
| [inputPeerUserFromMessage](/constructor/inputPeerUserFromMessage/) | Defines a [min](https://core.telegram.org/api/min) user that was seen in a certain message of a certain chat. |
| [inputPeerChannelFromMessage](/constructor/inputPeerChannelFromMessage/) | Defines a [min](https://core.telegram.org/api/min) channel that was seen in a certain message of a certain chat. |
