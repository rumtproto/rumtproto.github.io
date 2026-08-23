---
title: "PhoneCallDiscardReason (тип)"
original: "https://core.telegram.org/type/PhoneCallDiscardReason"
section: ref
kind: type
layout: layout.njk
---

# PhoneCallDiscardReason

*Тип из схемы TL.*

> Why was the phone call discarded?

## Определение TL

```
phoneCallDiscardReasonMissed#85e42301 = PhoneCallDiscardReason;
phoneCallDiscardReasonDisconnect#e095c1a0 = PhoneCallDiscardReason;
phoneCallDiscardReasonHangup#57adc690 = PhoneCallDiscardReason;
phoneCallDiscardReasonBusy#faf7e8c9 = PhoneCallDiscardReason;
phoneCallDiscardReasonMigrateConferenceCall#9fbbf1f7 slug:string = PhoneCallDiscardReason;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phoneCallDiscardReasonMissed](/constructor/phoneCallDiscardReasonMissed/) | The phone call was missed, see [here »](https://core.telegram.org/api/calls) for more info. |
| [phoneCallDiscardReasonDisconnect](/constructor/phoneCallDiscardReasonDisconnect/) | The phone call was disconnected, see [here »](https://core.telegram.org/api/calls) for more info. |
| [phoneCallDiscardReasonHangup](/constructor/phoneCallDiscardReasonHangup/) | The phone call was ended normally, see [here »](https://core.telegram.org/api/calls) for more info. |
| [phoneCallDiscardReasonBusy](/constructor/phoneCallDiscardReasonBusy/) | The phone call was discarded because the user is busy in another call, see [here »](https://core.telegram.org/api/calls) for more info. |
| [phoneCallDiscardReasonMigrateConferenceCall](/constructor/phoneCallDiscardReasonMigrateConferenceCall/) | This phone call was migrated to a [conference call](https://core.telegram.org/api/end-to-end/group-calls). |
