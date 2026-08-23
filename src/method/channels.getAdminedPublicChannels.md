---
title: "channels.getAdminedPublicChannels (метод)"
original: "https://core.telegram.org/method/channels.getAdminedPublicChannels"
section: ref
kind: method
layout: layout.njk
---

# channels.getAdminedPublicChannels

*Метод из схемы TL.*

> Get [channels/supergroups/geogroups](https://core.telegram.org/api/channel) we're admin in. Usually called when the user exceeds the [limit](/constructor/config/) for owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), and the user is given the choice to remove one of his channels/supergroups/geogroups.

## Определение TL

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getAdminedPublicChannels#f8b036af flags:# by_location:flags.0?true check_limit:flags.1?true for_personal:flags.2?true = messages.Chats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| by_location | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Get geogroups |
| check_limit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set and the user has reached the limit of owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), instead of returning the channel list one of the specified [errors](#possible-errors) will be returned. Useful to check if a new public channel can indeed be created, even before asking the user to enter a channel username to use in [channels.checkUsername](/method/channels.checkUsername/)/[channels.updateUsername](/method/channels.updateUsername/). |
| for_personal | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Set this flag to only fetch the full list of channels that may be passed to [account.updatePersonalChannel](/method/account.updatePersonalChannel/) to [display them on our profile page](https://core.telegram.org/api/profile#personal-channel). |

## Результат

[messages.Chats](/type/messages.Chats/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNELS_ADMIN_LOCATED_TOO_MUCH | The user has reached the limit of public geogroups. |
| 400 | CHANNELS_ADMIN_PUBLIC_TOO_MUCH | You're admin of too many public channels, make some channels private to change the username of this channel. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [channels.checkUsername](/method/channels.checkUsername/)

Check if a username is free and can be assigned to a channel/supergroup

#### [channels.updateUsername](/method/channels.updateUsername/)

Change or remove the username of a supergroup/channel

#### [account.updatePersonalChannel](/method/account.updatePersonalChannel/)

Associate (or remove) a personal [channel »](https://core.telegram.org/api/channel), that will be listed on our personal [profile page »](https://core.telegram.org/api/profile#personal-channel).

Changing it will emit an [updateUser](/constructor/updateUser/) update.

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!

#### [config](/constructor/config/)

Current configuration
