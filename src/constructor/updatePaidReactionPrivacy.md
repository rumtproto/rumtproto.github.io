---
title: "updatePaidReactionPrivacy (конструктор)"
original: "https://core.telegram.org/constructor/updatePaidReactionPrivacy"
section: ref
kind: constructor
layout: layout.njk
---

# updatePaidReactionPrivacy

*Конструктор из схемы TL.*

> Contains the current [default paid reaction privacy, see here »](https://core.telegram.org/api/reactions#paid-reactions) for more info.
> Clients should invoke [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) on startup to fetch the current default reaction privacy because this update is only sent to currently online sessions and cannot be fetched using getDifference on client startup.

## Определение TL

```
updatePaidReactionPrivacy#8b725fce private:PaidReactionPrivacy = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| private | [PaidReactionPrivacy](/type/PaidReactionPrivacy/) | Paid reaction privacy settings. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/)

Fetches an [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) update with the current [default paid reaction privacy, see here »](https://core.telegram.org/api/reactions#paid-reactions) for more info.
