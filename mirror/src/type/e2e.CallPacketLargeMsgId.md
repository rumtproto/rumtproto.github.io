---
title: "E2e.CallPacketLargeMsgId"
original: "https://core.telegram.org/type/e2e.CallPacketLargeMsgId"
section: ref
description: "Marker constructor whose CRC32 constructor ID is used when signing the large message ID produced while encrypting group call packets."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.CallPacketLargeMsgId","url":"/type/e2e.CallPacketLargeMsgId/"}]
layout: layout.njk
---

# E2e.CallPacketLargeMsgId

Marker constructor whose CRC32 constructor ID is used when signing the large message ID produced while encrypting [group call packets](/api/end-to-end/group-calls/#packet-encryption).

```
e2e.callPacketLargeMsgId#1ce56c2d = e2e.CallPacketLargeMsgId;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.callPacketLargeMsgId/">e2e.callPacketLargeMsgId</a></td><td>Marker constructor whose CRC32 constructor ID is used when signing the large message ID produced while encrypting <a href="/api/end-to-end/group-calls/#packet-encryption">group call packets</a>.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
