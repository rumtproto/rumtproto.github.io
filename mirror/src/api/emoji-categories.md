---
title: "Emoji categories"
original: "https://core.telegram.org/api/emoji-categories"
section: api
description: "Sticker, emoji, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria."
crumbs: [{"title":"API","url":"/api/"},{"title":"Emoji categories","url":"/api/emoji-categories/"}]
layout: layout.njk
---

# Emoji categories

Sticker, emoji, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.

```
messages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;
messages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;

emojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupGreeting#80d26cc7 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;
emojiGroupPremium#93bcf34 title:string icon_emoji_id:long = EmojiGroup;

---functions---

messages.getEmojiGroups#7488ce5b hash:int = messages.EmojiGroups;
messages.getEmojiStickerGroups#1dd840f5 hash:int = messages.EmojiGroups;
messages.getEmojiStatusGroups#2ecd56cd hash:int = messages.EmojiGroups;
messages.getEmojiProfilePhotoGroups#21a548f3 hash:int = messages.EmojiGroups;
```

Use:

-   [messages.getEmojiStickerGroups](/method/messages.getEmojiStickerGroups/) when choosing a sticker.
-   [messages.getEmojiStatusGroups](/method/messages.getEmojiStatusGroups/) when choosing a custom emoji to set as [emoji status](/api/emoji-status/).
-   [messages.getEmojiProfilePhotoGroups](/method/messages.getEmojiProfilePhotoGroups/) when choosing a custom emoji to set as [profile picture](/api/files/#sticker-profile-pictures)
-   [messages.getEmojiGroups](/method/messages.getEmojiGroups/) in all other cases (including GIFs, emojis and custom emojis).

The methods listed above must be used to fetch a categorized list of UTF-8 emojis, periodically refreshed by the client, passing the `hash` returned by the previous call.

Each category is described by a `title` (i.e. "Animals", "Faces", "Flags"), is represented in the UI by a single [custom emoji »](/api/custom-emoji/) (`icon_emoji_id`).

All categories should be displayed in the sticker/emoji/custom emoji/GIF search bar, located in the top section of the sticker/custom emoji/GIF selection UI, using the `icon_emoji_id`.

When the user clicks on a specific emoji category, the client should display:

-   All [Premium](/api/premium/)\-only stickers (i.e. those with a [Premium effect »](/api/stickers/#premium-animated-sticker-effects))/[Premium](/api/premium/)\-only [custom emojis](/api/custom-emoji/) (i.e. those where the [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`free` flag is **not** set) if the [emojiGroupPremium](/constructor/emojiGroupPremium/) category is clicked OR
-   All stickers/[custom emojis](/api/custom-emoji/)/emojis/GIFs matching the emojis in `emoticons` for the selected category, if an [emojiGroup](/constructor/emojiGroup/)/[emojiGroupGreeting](/constructor/emojiGroupGreeting/) category is clicked.

Note:

-   When [choosing GIFs](/api/gifs/), include only [emojiGroup](/constructor/emojiGroup/)s in the category list.
-   When choosing emojis, first list all (usable, i.e. Premium+non-Premium for Premium users, non-Premium only for non-Premium users) custom emojis matching the `emoticons` of the chosen category, then the `emoticons` themselves.
-   When choosing a sticker for a [business introduction](/api/business/#business-introduction), locally sort the result of [messages.getEmojiStickerGroups](/method/messages.getEmojiStickerGroups/), putting all [emojiGroupGreeting](/constructor/emojiGroupGreeting/) categories first.
