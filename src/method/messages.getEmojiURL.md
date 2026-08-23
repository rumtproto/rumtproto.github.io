---
title: "messages.getEmojiURL (метод)"
original: "https://core.telegram.org/method/messages.getEmojiURL"
section: ref
kind: method
layout: layout.njk
---

# messages.getEmojiURL

*Метод из схемы TL.*

> Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). The URL will be valid for 30 seconds after generation.

## Определение TL

```
emojiURL#a575739d url:string = EmojiURL;
---functions---
messages.getEmojiURL#d5b10c26 lang_code:string = EmojiURL;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_code | [string](/type/string/) | Language code for which the emoji keywords will be suggested |

## Результат

[EmojiURL](/type/EmojiURL/)

## Only users can use this method

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
