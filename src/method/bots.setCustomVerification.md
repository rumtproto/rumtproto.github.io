---
title: "bots.setCustomVerification (метод)"
original: "https://core.telegram.org/method/bots.setCustomVerification"
section: ref
kind: method
layout: layout.njk
---

# bots.setCustomVerification

*Метод из схемы TL.*

> Verify a user or chat [on behalf of an organization »](https://core.telegram.org/api/bots/verification).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setCustomVerification#8b89dfbd flags:# enabled:flags.1?true bot:flags.0?InputUser peer:InputPeer custom_description:flags.2?string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, adds the verification; otherwise removes verification. |
| bot | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputUser](/type/InputUser/) | Must not be set if invoked by a bot, must be set to the ID of an owned bot if invoked by a user. |
| peer | [InputPeer](/type/InputPeer/) | The peer to verify |
| custom_description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Custom description for the verification, the UTF-8 length limit for this field is contained in [bot_verification_description_length_limit »](https://core.telegram.org/api/config#bot-verification-description-length-limit). If not set, Was verified by organization "organization_name" will be used as description. |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 403 | BOT_VERIFIER_FORBIDDEN | This bot cannot assign [verification icons](https://core.telegram.org/api/bots/verification). |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Third-party verification](https://core.telegram.org/api/bots/verification)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
