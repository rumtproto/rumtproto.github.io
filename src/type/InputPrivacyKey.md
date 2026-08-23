---
title: "InputPrivacyKey (тип)"
original: "https://core.telegram.org/type/InputPrivacyKey"
section: ref
kind: type
layout: layout.njk
---

# InputPrivacyKey

*Тип из схемы TL.*

> Privacy **keys** together with [privacy rules »](https://core.telegram.org/api/privacy#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).
> See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

## Определение TL

```
inputPrivacyKeyStatusTimestamp#4f96cb18 = InputPrivacyKey;
inputPrivacyKeyChatInvite#bdfb0426 = InputPrivacyKey;
inputPrivacyKeyPhoneCall#fabadc5f = InputPrivacyKey;
inputPrivacyKeyPhoneP2P#db9e70d2 = InputPrivacyKey;
inputPrivacyKeyForwards#a4dd4c08 = InputPrivacyKey;
inputPrivacyKeyProfilePhoto#5719bacc = InputPrivacyKey;
inputPrivacyKeyPhoneNumber#352dafa = InputPrivacyKey;
inputPrivacyKeyAddedByPhone#d1219bdd = InputPrivacyKey;
inputPrivacyKeyVoiceMessages#aee69d68 = InputPrivacyKey;
inputPrivacyKeyAbout#3823cc40 = InputPrivacyKey;
inputPrivacyKeyBirthday#d65a11cc = InputPrivacyKey;
inputPrivacyKeyStarGiftsAutoSave#e1732341 = InputPrivacyKey;
inputPrivacyKeyNoPaidMessages#bdc597b4 = InputPrivacyKey;
inputPrivacyKeySavedMusic#4dbe9226 = InputPrivacyKey;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/) | Whether people will be able to see our exact last online timestamp. Note that if we decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) and we do not have a [Premium](https://core.telegram.org/api/premium) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users do share it with us. If those users do share their exact online status with us, but we can't see it due to the reason mentioned above, the by_me flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set. |
| [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/) | Whether people will be able to invite you to chats |
| [inputPrivacyKeyPhoneCall](/constructor/inputPrivacyKeyPhoneCall/) | Whether you will accept phone calls |
| [inputPrivacyKeyPhoneP2P](/constructor/inputPrivacyKeyPhoneP2P/) | Whether to allow P2P communication during VoIP calls |
| [inputPrivacyKeyForwards](/constructor/inputPrivacyKeyForwards/) | Whether messages forwarded from you will be [anonymous](https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding) |
| [inputPrivacyKeyProfilePhoto](/constructor/inputPrivacyKeyProfilePhoto/) | Whether people will be able to see your profile picture |
| [inputPrivacyKeyPhoneNumber](/constructor/inputPrivacyKeyPhoneNumber/) | Whether people will be able to see your phone number |
| [inputPrivacyKeyAddedByPhone](/constructor/inputPrivacyKeyAddedByPhone/) | Whether people can add you to their contact list by your phone number |
| [inputPrivacyKeyVoiceMessages](/constructor/inputPrivacyKeyVoiceMessages/) | Whether people can send you voice messages or round videos ([Premium](https://core.telegram.org/api/premium) users only). |
| [inputPrivacyKeyAbout](/constructor/inputPrivacyKeyAbout/) | Whether people can see your bio |
| [inputPrivacyKeyBirthday](/constructor/inputPrivacyKeyBirthday/) | Whether the user can see our birthday. |
| [inputPrivacyKeyStarGiftsAutoSave](/constructor/inputPrivacyKeyStarGiftsAutoSave/) | Whether received [gifts](https://core.telegram.org/api/gifts) will be automatically displayed on our profile |
| [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) | Who can send you messages without paying, if [paid messages »](https://core.telegram.org/api/paid-messages) are enabled. |
| [inputPrivacyKeySavedMusic](/constructor/inputPrivacyKeySavedMusic/) | Whether the user can see the [songs we pinned to our profile »](https://core.telegram.org/api/profile#music). |

## Related pages

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [PrivacyKey](/type/PrivacyKey/)

Privacy **keys** together with [privacy rules »](https://core.telegram.org/api/privacy#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

#### [InputPrivacyKey](/type/InputPrivacyKey/)

Privacy **keys** together with [privacy rules »](https://core.telegram.org/api/privacy#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.
