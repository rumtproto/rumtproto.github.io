---
title: "messages.updateSavedReactionTag (метод)"
original: "https://core.telegram.org/method/messages.updateSavedReactionTag"
section: ref
kind: method
layout: layout.njk
---

# messages.updateSavedReactionTag

*Метод из схемы TL.*

> Update the [description of a saved message tag »](https://core.telegram.org/api/saved-messages#tags).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.updateSavedReactionTag#60297dec flags:# reaction:Reaction title:flags.0?string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| reaction | [Reaction](/type/Reaction/) | [Reaction](https://core.telegram.org/api/reactions) associated to the tag |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Tag description, max 12 UTF-8 characters; to remove the description call the method without setting this flag. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |
| 400 | REACTION_INVALID | The specified reaction is invalid. |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
