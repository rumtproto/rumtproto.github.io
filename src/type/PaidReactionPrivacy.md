---
title: "PaidReactionPrivacy (тип)"
original: "https://core.telegram.org/type/PaidReactionPrivacy"
section: ref
kind: type
layout: layout.njk
---

# PaidReactionPrivacy

*Тип из схемы TL.*

> [Paid reaction privacy settings »](https://core.telegram.org/api/reactions#paid-reactions)

## Определение TL

```
paidReactionPrivacyDefault#206ad49e = PaidReactionPrivacy;
paidReactionPrivacyAnonymous#1f0c1ad9 = PaidReactionPrivacy;
paidReactionPrivacyPeer#dc6cfcf0 peer:InputPeer = PaidReactionPrivacy;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [paidReactionPrivacyDefault](/constructor/paidReactionPrivacyDefault/) | Uses the default reaction privacy, set using [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/). |
| [paidReactionPrivacyAnonymous](/constructor/paidReactionPrivacyAnonymous/) | Send paid reactions anonymously. |
| [paidReactionPrivacyPeer](/constructor/paidReactionPrivacyPeer/) | Send paid reactions as the specified peer, fetched using [channels.getSendAs](/method/channels.getSendAs/) with the for_paid_reactions flag set. |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
