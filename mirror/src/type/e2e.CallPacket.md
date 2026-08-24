---
title: "E2e.CallPacket"
original: "https://core.telegram.org/type/e2e.CallPacket"
section: ref
description: "Marker constructor whose CRC32 constructor ID is used when deriving and authenticating encrypted group call packets."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.CallPacket","url":"/type/e2e.CallPacket/"}]
layout: layout.njk
---

# E2e.CallPacket

Marker constructor whose CRC32 constructor ID is used when deriving and authenticating [encrypted group call packets](/api/end-to-end/group-calls/#packet-encryption).

```
e2e.callPacket#40a6bee9 = e2e.CallPacket;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.callPacket/">e2e.callPacket</a></td><td>Marker constructor whose CRC32 constructor ID is used when deriving and authenticating <a href="/api/end-to-end/group-calls/#packet-encryption">encrypted group call packets</a>.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
