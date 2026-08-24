---
title: "messages.getEmojiURL"
original: "https://core.telegram.org/method/messages.getEmojiURL"
section: ref
kind: method
description: "Возвращает HTTP-адрес, по которому можно автоматически войти на платформу переводов и предложить новые ключевые слова эмодзи ». Адрес действителен в течение 30 секунд после…"
layout: layout.njk
---

# messages.getEmojiURL

Возвращает HTTP-адрес, по которому можно автоматически войти на платформу переводов и предложить новые [ключевые слова эмодзи »](/api/custom-emoji/#emoji-keywords). Адрес действителен в течение 30 секунд после создания.

```
emojiURL#a575739d url:string = EmojiURL;
---functions---
messages.getEmojiURL#d5b10c26 lang_code:string = EmojiURL;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка, для которого будут предложены ключевые слова эмодзи</td></tr></tbody></table>

### Результат

[EmojiURL](/type/EmojiURL/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
