---
title: "account.setGlobalPrivacySettings (метод)"
original: "https://core.telegram.org/method/account.setGlobalPrivacySettings"
section: ref
kind: method
layout: layout.njk
---

# account.setGlobalPrivacySettings

*Метод из схемы TL.*

> Set global privacy settings

## Определение TL

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;
---functions---
account.setGlobalPrivacySettings#1edaaac2 settings:GlobalPrivacySettings = GlobalPrivacySettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| settings | [GlobalPrivacySettings](/type/GlobalPrivacySettings/) | Global privacy settings |

## Результат

[GlobalPrivacySettings](/type/GlobalPrivacySettings/)

## Only users can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | AUTOARCHIVE_NOT_AVAILABLE | The autoarchive setting is not available at this time: please check the value of the [autoarchive_setting_available field in client config »](https://core.telegram.org/api/config#client-configuration) before calling this method. |
| 403 | BOT_ACCESS_FORBIDDEN | The specified method can be used over a [business connection](https://core.telegram.org/api/bots/connected-business-bots) for some operations, but the specified query attempted an operation that is not allowed over a business connection. |
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
