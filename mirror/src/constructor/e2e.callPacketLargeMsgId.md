---
title: "e2e.callPacketLargeMsgId"
original: "https://core.telegram.org/constructor/e2e.callPacketLargeMsgId"
section: ref
description: "Marker constructor whose CRC32 constructor ID is used when signing the large message ID produced while encrypting group call packets."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.callPacketLargeMsgId","url":"/constructor/e2e.callPacketLargeMsgId/"}]
layout: layout.njk
---

# e2e.callPacketLargeMsgId

Marker constructor whose CRC32 constructor ID is used when signing the large message ID produced while encrypting [group call packets](/api/end-to-end/group-calls/#packet-encryption).

```
e2e.callPacketLargeMsgId#1ce56c2d = e2e.CallPacketLargeMsgId;
```

### Parameters

This constructor does not require any parameters.

### Type

[e2e.CallPacketLargeMsgId](/type/e2e.CallPacketLargeMsgId/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
