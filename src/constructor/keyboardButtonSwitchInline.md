---
title: "keyboardButtonSwitchInline (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonSwitchInline"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonSwitchInline

*Конструктор из схемы TL.*

> Button to switch the user to inline mode
> Available only in [inline keyboards](/constructor/replyInlineMarkup/).
> When pressed, clients must insert the bot's username and `query` into the chat input field, triggering an [inline query](https://core.telegram.org/api/bots/inline).
> If `same_peer` is set, clients use the current chat. Otherwise, clients prompt the user to select a chat, filtered by `peer_types` if specified.

## Определение TL

```
keyboardButtonSwitchInline#991399fc flags:# same_peer:flags.0?true style:flags.10?KeyboardButtonStyle text:string query:string peer_types:flags.1?Vector<InlineQueryPeerType> = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| same_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button label |
| query | [string](/type/string/) | The inline query to use |
| peer_types | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[InlineQueryPeerType](/type/InlineQueryPeerType/)> | Filter to use when selecting chats. |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard

#### [Inline queries](https://core.telegram.org/api/bots/inline)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
