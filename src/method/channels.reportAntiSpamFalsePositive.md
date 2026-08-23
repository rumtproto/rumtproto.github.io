---
title: "channels.reportAntiSpamFalsePositive (метод)"
original: "https://core.telegram.org/method/channels.reportAntiSpamFalsePositive"
section: ref
kind: method
layout: layout.njk
---

# channels.reportAntiSpamFalsePositive

*Метод из схемы TL.*

> Report a [native antispam](https://core.telegram.org/api/antispam) false positive

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.reportAntiSpamFalsePositive#a850a693 channel:InputChannel msg_id:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Supergroup ID |
| msg_id | [int](/type/int/) | Message ID that was mistakenly deleted by the [native antispam](https://core.telegram.org/api/antispam) system, taken from the [admin log](https://core.telegram.org/api/recent-actions) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |

## Related pages

#### [Native antispam system](https://core.telegram.org/api/antispam)

Admins of supergroups with a certain number of members can choose to unleash the full proactive power of Telegram's own antispam algorithms – turning on the new Aggressive mode for the automated spam filters.

#### [Admin log](https://core.telegram.org/api/recent-actions)

Both supergroups and channels offer a so-called admin log, a log of recent relevant supergroup and channel actions, like the modification of group/channel settings or information on behalf of an admin, user kicks and bans, and more.
