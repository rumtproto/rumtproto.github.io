---
title: "Пользовательские эмодзи"
original: "https://core.telegram.org/api/custom-emoji"
section: api
description: "Telegram позволяет вставлять в сообщения анимированные и статические пользовательские эмодзи."
layout: layout.njk
---

# Пользовательские эмодзи

Telegram позволяет вставлять в сообщения анимированные и статические пользовательские эмодзи.

### Сущности пользовательских эмодзи

```
messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;

document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

documentAttributeCustomEmoji#fd149899 flags:# free:flags.0?true text_color:flags.1?true alt:string stickerset:InputStickerSet = DocumentAttribute;

---functions---

messages.getCustomEmojiDocuments#d9ab0f54 document_id:Vector<long> = Vector<Document>;
```

[@term:message entity] Пользовательские эмодзи — это особая разновидность [сущностей оформления »](/api/entities/) (`message entity` — разметка, накладываемая на диапазон символов текста); такая сущность содержит только поле `document_id`, которое можно передать в [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/), чтобы получить [статический, анимированный или видеостикер-эмодзи](/api/stickers/), отображаемый пользователю так, как описано в [документации по стикерам](/api/stickers/).

Документы пользовательских эмодзи содержат атрибут [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) вместо [documentAttributeSticker](/constructor/documentAttributeSticker/); в нём указаны сведения о связанном эмодзи (`alt`), о том, доступен ли он тем, у кого нет подписки Telegram Premium (`free`), а также связанный набор стикеров (`stickerset`).  
Если в [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) установлен флаг `text_color`, цвет такого TGS-эмодзи следует менять на цвет текста при использовании в сообщениях, на акцентный цвет — при использовании в качестве статуса эмодзи, на белый — на фотографиях чатов, либо на другой подходящий цвет в зависимости от контекста.

Учтите, что при отправке сообщений с прикреплёнными пользовательскими эмодзи [сущность »](/api/entities/) [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/) обязана охватывать в соответствующем тексте ровно один обычный эмодзи (тот, что указан в поле `alt` конструктора [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)), иначе сервер её проигнорирует.

Как и стикеры, пользовательские эмодзи объединяются в [наборы стикеров](/api/stickers/#stickersets): подробнее о работе с ними см. [документацию по стикерам »](/api/stickers/).

Чтобы отправить сообщение с одним или несколькими пользовательскими эмодзи, создайте и прикрепите к сообщению [сущности »](/api/entities/) [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/).  
Учтите, что прикрепить можно не более `message_animated_emoji_max` пользовательских эмодзи — это значение задаётся [полем appConfig »](/api/config/#message-animated-emoji-max).

### Категории эмодзи

Интерфейс выбора пользовательских эмодзи должен предлагать список категорий, позволяющий быстро отфильтровать результаты по эмодзи (или их набору) либо по иным критериям; подробнее см. [здесь »](/api/emoji-categories/).

### Ключевые слова эмодзи

```
emojiKeyword#d5b3b9f9 keyword:string emoticons:Vector<string> = EmojiKeyword;
emojiKeywordDeleted#236df622 keyword:string emoticons:Vector<string> = EmojiKeyword;

emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;

emojiLanguage#b3fb5361 lang_code:string = EmojiLanguage;
emojiURL#a575739d url:string = EmojiURL;

---functions---

messages.getEmojiKeywords#35a0e062 lang_code:string = EmojiKeywordsDifference;
messages.getEmojiKeywordsDifference#1508b6af lang_code:string from_version:int = EmojiKeywordsDifference;
messages.getEmojiKeywordsLanguages#4e9963b2 lang_codes:Vector<string> = Vector<EmojiLanguage>;

messages.getEmojiURL#d5b10c26 lang_code:string = EmojiURL;
```

Прежде всего вызовите [messages.getEmojiKeywordsLanguages](/method/messages.getEmojiKeywordsLanguages/), чтобы получить список языков, которые обязательно нужно использовать при загрузке списков ключевых слов эмодзи: обычно метод возвращает переданные коды языков (если для них есть локализация), плюс `en`, плюс коды нескольких близких языков (если такие имеются).  
Затем вызовите [messages.getEmojiKeywords](/method/messages.getEmojiKeywords/) для всех возвращённых кодов языков, чтобы загрузить локализованные списки ключевых слов, сопоставленных эмодзи в кодировке UTF-8.

Полученные ключевые слова позволяют пользователю искать по ключевому слову как обычные, так и пользовательские эмодзи: показывайте и сопоставленные ключевому слову эмодзи UTF-8, и пользовательские эмодзи, связанные с этими эмодзи UTF-8.

Регулярно вызывайте [messages.getEmojiKeywordsDifference](/method/messages.getEmojiKeywordsDifference/), чтобы получать изменения для сохранённых локально списков ключевых слов по всем языкам.

Метод [messages.getEmojiURL](/method/messages.getEmojiURL/) позволяет получить HTTP-адрес, по которому можно автоматически войти на платформу переводов и предложить новые ключевые слова для эмодзи; этот адрес действителен в течение 30 секунд после создания.

Кроме того, у пользовательских эмодзи и у любых стикеров, кроме масок, может быть набор _собственных_ ключевых слов, возвращаемых в [сведениях о наборе пользовательских эмодзи](/api/stickers/#stickersets):

```
stickerKeyword#fcfeb29c document_id:long keyword:Vector<string> = StickerKeyword;

messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;

stickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;
```
