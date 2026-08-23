---
title: "messages.getOutboxReadDate (метод)"
original: "https://core.telegram.org/method/messages.getOutboxReadDate"
section: ref
kind: method
layout: layout.njk
---

# messages.getOutboxReadDate

*Метод из схемы TL.*

> Get the exact read date of one of our messages, sent to a private chat with another user.
> Can be only done for private outgoing messages not older than [appConfig.pm\_read\_date\_expire\_period »](https://core.telegram.org/api/config#pm-read-date-expire-period).
> If the `peer`'s [userFull](/constructor/userFull/).`read_dates_private` flag is set, we will not be able to fetch the exact read date of messages we send to them, and a `USER_PRIVACY_RESTRICTED` RPC error will be emitted.  
> The exact read date of messages might still be unavailable for other reasons, see [here »](/constructor/globalPrivacySettings/) for more info.  
> To set [userFull](/constructor/userFull/).`read_dates_private` for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the `settings.hide_read_marks` flag.

## Определение TL

```
outboxReadDate#3bb842ac date:int = OutboxReadDate;
---functions---
messages.getOutboxReadDate#8c4bfe5d peer:InputPeer msg_id:int = OutboxReadDate;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The user to whom we sent the message. |
| msg_id | [int](/type/int/) | The message ID. |

## Результат

[OutboxReadDate](/type/OutboxReadDate/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MESSAGE_NOT_READ_YET | The specified message wasn't read yet. |
| 400 | MESSAGE_TOO_OLD | The message is too old, the requested information is not available. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 403 | USER_PRIVACY_RESTRICTED | The user's privacy settings do not allow you to do this. |
| 403 | YOUR_PRIVACY_RESTRICTED | You cannot fetch the read date of this message because you have disallowed other users to do so for your messages; to fix, allow other users to see your exact last online date OR purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription. |

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Global privacy settings

#### [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/)

Set global privacy settings

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
