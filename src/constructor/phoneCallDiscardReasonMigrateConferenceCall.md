---
title: "phoneCallDiscardReasonMigrateConferenceCall (конструктор)"
original: "https://core.telegram.org/constructor/phoneCallDiscardReasonMigrateConferenceCall"
section: ref
kind: constructor
layout: layout.njk
---

# phoneCallDiscardReasonMigrateConferenceCall

*Конструктор из схемы TL.*

> This phone call was migrated to a [conference call](https://core.telegram.org/api/end-to-end/group-calls).

## Определение TL

```
phoneCallDiscardReasonMigrateConferenceCall#9fbbf1f7 slug:string = PhoneCallDiscardReason;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | [Conference link »](https://core.telegram.org/api/links#conference-links) slug. |

## Тип

[PhoneCallDiscardReason](/type/PhoneCallDiscardReason/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [E2E Group Calls](https://core.telegram.org/api/end-to-end/group-calls)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
