---
title: "EmojiStatus (тип)"
original: "https://core.telegram.org/type/EmojiStatus"
section: ref
kind: type
layout: layout.njk
---

# EmojiStatus

*Тип из схемы TL.*

> [Emoji status](https://core.telegram.org/api/emoji-status)

## Определение TL

```
emojiStatusEmpty#2de11aae = EmojiStatus;
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;
emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;
inputEmojiStatusCollectible#7141dbf flags:# collectible_id:long until:flags.0?int = EmojiStatus;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [emojiStatusEmpty](/constructor/emojiStatusEmpty/) | No emoji status is set |
| [emojiStatus](/constructor/emojiStatus/) | An [emoji status](https://core.telegram.org/api/emoji-status) |
| [emojiStatusCollectible](/constructor/emojiStatusCollectible/) | An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status. Cannot be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first before passing it to that method. |
| [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) | An owned or [hosted collectible gift »](https://core.telegram.org/api/gifts#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API. Note that once set, the status will be returned to users as a [emojiStatusCollectible](/constructor/emojiStatusCollectible/) constructor, instead (which cannot be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), and must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first). |

## Related pages

#### [Emoji status](https://core.telegram.org/api/emoji-status)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
