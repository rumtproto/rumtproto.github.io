---
title: "botInfo (конструктор)"
original: "https://core.telegram.org/constructor/botInfo"
section: ref
kind: constructor
layout: layout.njk
---

# botInfo

*Конструктор из схемы TL.*

> Info about bots (available bot commands, etc)

## Определение TL

```
botInfo#4d8a0299 flags:# has_preview_medias:flags.6?true user_id:flags.0?long description:flags.1?string description_photo:flags.4?Photo description_document:flags.5?Document commands:flags.2?Vector<BotCommand> menu_button:flags.3?BotMenuButton privacy_policy_url:flags.7?string app_settings:flags.8?BotAppSettings verifier_settings:flags.9?BotVerifierSettings = BotInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_preview_medias | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | If set, the bot has some [preview medias for the configured Main Mini App, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info on Main Mini App preview medias. |
| user_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | ID of the bot |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Description of the bot |
| description_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Photo](/type/Photo/) | Description photo |
| description_document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[Document](/type/Document/) | Description animation in MPEG4 format |
| commands | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[BotCommand](/type/BotCommand/)> | Bot commands that can be used in the chat |
| menu_button | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[BotMenuButton](/type/BotMenuButton/) | Indicates the action to execute when pressing the in-UI menu button for bots |
| privacy_policy_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[string](/type/string/) | The HTTP link to the privacy policy of the bot. If not set, then the /privacy command must be used, if supported by the bot (i.e. if it's present in the commands vector). If it isn't supported, then [https://telegram.org/privacy-tpa](https://telegram.org/privacy-tpa) must be opened, instead. |
| app_settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[BotAppSettings](/type/BotAppSettings/) | [Mini app »](https://core.telegram.org/api/bots/webapps) settings |
| verifier_settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[BotVerifierSettings](/type/BotVerifierSettings/) | This bot can [verify peers](https://core.telegram.org/api/bots/verification): this field contains more info about the verification the bot can assign to peers. |

## Тип

[BotInfo](/type/BotInfo/)

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Third-party verification](https://core.telegram.org/api/bots/verification)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
