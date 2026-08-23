---
title: "botVerifierSettings (конструктор)"
original: "https://core.telegram.org/constructor/botVerifierSettings"
section: ref
kind: constructor
layout: layout.njk
---

# botVerifierSettings

*Конструктор из схемы TL.*

> Info about the current [verifier bot »](https://core.telegram.org/api/bots/verification).

## Определение TL

```
botVerifierSettings#b0cd6617 flags:# can_modify_custom_description:flags.1?true icon:long company:string custom_description:flags.0?string = BotVerifierSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| can_modify_custom_description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Indicates whether the bot is allowed to set a custom description field for individual verified peers, different from the custom_description provided here. |
| icon | [long](/type/long/) | Verification icon |
| company | [string](/type/string/) | The name of the organization that provides the verification |
| custom_description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | An optional default description for the verification |

## Тип

[BotVerifierSettings](/type/BotVerifierSettings/)

## Related pages

#### [Third-party verification](https://core.telegram.org/api/bots/verification)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
