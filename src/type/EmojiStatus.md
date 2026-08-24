---
title: "EmojiStatus"
original: "https://core.telegram.org/type/EmojiStatus"
section: ref
kind: type
description: "Эмодзи-статус"
layout: layout.njk
---

# EmojiStatus

[Эмодзи-статус](/api/emoji-status/)

```
emojiStatusEmpty#2de11aae = EmojiStatus;
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;
emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;
inputEmojiStatusCollectible#7141dbf flags:# collectible_id:long until:flags.0?int = EmojiStatus;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/emojiStatusEmpty">emojiStatusEmpty</a></td><td>Эмодзи-статус не установлен</td></tr><tr><td><a href="/constructor/emojiStatus">emojiStatus</a></td><td><a href="/api/emoji-status">Статус эмодзи</a></td></tr><tr><td><a href="/constructor/emojiStatusCollectible">emojiStatusCollectible</a></td><td>Принадлежащий пользователю или <a href="/api/gifts#hosted-collectible-gifts">размещённый коллекционный подарок »</a> в качестве эмодзи-статуса.<br><br><strong>Нельзя</strong> передавать в <a href="/method/account.updateEmojiStatus">account.updateEmojiStatus</a>: перед вызовом этого метода необходимо преобразовать его в <a href="/constructor/inputEmojiStatusCollectible">inputEmojiStatusCollectible</a>.</td></tr><tr><td><a href="/constructor/inputEmojiStatusCollectible">inputEmojiStatusCollectible</a></td><td>Принадлежащий пользователю или <a href="/api/gifts#hosted-collectible-gifts">размещённый коллекционный подарок »</a> в качестве эмодзи-статуса: может использоваться только в <a href="/method/account.updateEmojiStatus">account.updateEmojiStatus</a> и никогда не возвращается API.<br><br>Учтите, что после установки статус будет возвращаться пользователям в виде конструктора <a href="/constructor/emojiStatusCollectible">emojiStatusCollectible</a>, который <strong>нельзя</strong> передавать в <a href="/method/account.updateEmojiStatus">account.updateEmojiStatus</a> и который необходимо предварительно преобразовать в <a href="/constructor/inputEmojiStatusCollectible">inputEmojiStatusCollectible</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.
