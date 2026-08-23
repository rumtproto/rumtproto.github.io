---
title: "PrivacyKey (тип)"
original: "https://core.telegram.org/type/PrivacyKey"
section: ref
kind: type
layout: layout.njk
---

# PrivacyKey

*Тип из схемы TL.*

> Privacy **keys** together with [privacy rules »](https://core.telegram.org/api/privacy#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).
> See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

## Определение TL

```
privacyKeyStatusTimestamp#bc2eab30 = PrivacyKey;
privacyKeyChatInvite#500e6dfa = PrivacyKey;
privacyKeyPhoneCall#3d662b7b = PrivacyKey;
privacyKeyPhoneP2P#39491cc8 = PrivacyKey;
privacyKeyForwards#69ec56a3 = PrivacyKey;
privacyKeyProfilePhoto#96151fed = PrivacyKey;
privacyKeyPhoneNumber#d19ae46d = PrivacyKey;
privacyKeyAddedByPhone#42ffd42b = PrivacyKey;
privacyKeyVoiceMessages#697f414 = PrivacyKey;
privacyKeyAbout#a486b761 = PrivacyKey;
privacyKeyBirthday#2000a518 = PrivacyKey;
privacyKeyStarGiftsAutoSave#2ca4fdf8 = PrivacyKey;
privacyKeyNoPaidMessages#17d348d2 = PrivacyKey;
privacyKeySavedMusic#ff7a571b = PrivacyKey;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [privacyKeyStatusTimestamp](/constructor/privacyKeyStatusTimestamp/) | Whether we can see the last online timestamp of this user. Note that if we decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) and we do not have a [Premium](https://core.telegram.org/api/premium) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users do share it with us. If those users do share their exact online status with us, but we can't see it due to the reason mentioned above, the by_me flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set. |
| [privacyKeyChatInvite](/constructor/privacyKeyChatInvite/) | Whether the user can be invited to chats |
| [privacyKeyPhoneCall](/constructor/privacyKeyPhoneCall/) | Whether the user accepts phone calls |
| [privacyKeyPhoneP2P](/constructor/privacyKeyPhoneP2P/) | Whether P2P connections in phone calls with this user are allowed |
| [privacyKeyForwards](/constructor/privacyKeyForwards/) | Whether messages forwarded from the user will be [anonymously forwarded](https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding) |
| [privacyKeyProfilePhoto](/constructor/privacyKeyProfilePhoto/) | Whether the profile picture of the user is visible |
| [privacyKeyPhoneNumber](/constructor/privacyKeyPhoneNumber/) | Whether the user allows us to see his phone number |
| [privacyKeyAddedByPhone](/constructor/privacyKeyAddedByPhone/) | Whether this user can be added to our contact list by their phone number |
| [privacyKeyVoiceMessages](/constructor/privacyKeyVoiceMessages/) | Whether the user accepts voice messages |
| [privacyKeyAbout](/constructor/privacyKeyAbout/) | Whether people can see your bio |
| [privacyKeyBirthday](/constructor/privacyKeyBirthday/) | Whether the user can see our birthday. |
| [privacyKeyStarGiftsAutoSave](/constructor/privacyKeyStarGiftsAutoSave/) | Whether received [gifts](https://core.telegram.org/api/gifts) will be automatically displayed on our profile |
| [privacyKeyNoPaidMessages](/constructor/privacyKeyNoPaidMessages/) | Who can send you messages without paying, if [paid messages »](https://core.telegram.org/api/paid-messages) are enabled. |
| [privacyKeySavedMusic](/constructor/privacyKeySavedMusic/) | Whether the user can see the [songs we pinned to our profile »](https://core.telegram.org/api/profile#music). |

## Related pages

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [PrivacyKey](/type/PrivacyKey/)

Privacy **keys** together with [privacy rules »](https://core.telegram.org/api/privacy#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

#### [InputPrivacyKey](/type/InputPrivacyKey/)

Privacy **keys** together with [privacy rules »](https://core.telegram.org/api/privacy#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.
