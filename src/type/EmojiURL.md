---
title: "EmojiURL (тип)"
original: "https://core.telegram.org/type/EmojiURL"
section: ref
kind: type
layout: layout.njk
---

# EmojiURL

*Тип из схемы TL.*

> Emoji URL

## Определение TL

```
emojiURL#a575739d url:string = EmojiURL;

---functions---

messages.getEmojiURL#d5b10c26 lang_code:string = EmojiURL;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [emojiURL](/constructor/emojiURL/) | An HTTP URL which can be used to automatically log in into translation platform and suggest new emoji replacements. The URL will be valid for 30 seconds after generation |

## Методы

| Method | Описание |
|---|---|
| [messages.getEmojiURL](/method/messages.getEmojiURL/) | Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). The URL will be valid for 30 seconds after generation. |
