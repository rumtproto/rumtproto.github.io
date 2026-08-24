---
title: "e2e.callPacket"
original: "https://core.telegram.org/constructor/e2e.callPacket"
section: ref
description: "Marker constructor whose CRC32 constructor ID is used when deriving and authenticating encrypted group call packets."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.callPacket","url":"/constructor/e2e.callPacket/"}]
layout: layout.njk
---

# e2e.callPacket

Marker constructor whose CRC32 constructor ID is used when deriving and authenticating [encrypted group call packets](/api/end-to-end/group-calls/#packet-encryption).

```
e2e.callPacket#40a6bee9 = e2e.CallPacket;
```

### Parameters

This constructor does not require any parameters.

### Type

[e2e.CallPacket](/type/e2e.CallPacket/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
