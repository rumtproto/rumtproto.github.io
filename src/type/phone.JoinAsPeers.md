---
title: "phone.JoinAsPeers (тип)"
original: "https://core.telegram.org/type/phone.JoinAsPeers"
section: ref
kind: type
layout: layout.njk
---

# phone.JoinAsPeers

*Тип из схемы TL.*

> A list of peers that can be used to join a group call, presenting yourself as a specific user/channel.

## Определение TL

```
phone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;

---functions---

phone.getGroupCallJoinAs#ef7c213a peer:InputPeer = phone.JoinAsPeers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phone.joinAsPeers](/constructor/phone.joinAsPeers/) | Contains the peers that may be used to join a video chat/livestream, see [joining on behalf of owned channels »](https://core.telegram.org/api/group-calls#joining-a-group-call-on-behalf-of-owned-channels). |

## Методы

| Method | Описание |
|---|---|
| [phone.getGroupCallJoinAs](/method/phone.getGroupCallJoinAs/) | Get a list of peers that can be used to join a [video chat or livestream »](https://core.telegram.org/api/group-calls#joining-a-group-call-on-behalf-of-owned-channels), presenting yourself as a specific user/channel. This method cannot be used for live stories or conference calls. To comment or react in a live story as another peer, use [channels.getSendAs](/method/channels.getSendAs/) with for_live_stories set and pass one of the returned peers to [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/).send_as. |
