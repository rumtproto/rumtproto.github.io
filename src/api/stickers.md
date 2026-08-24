---
title: "Стикеры и маски"
original: "https://core.telegram.org/api/stickers"
section: api
description: "Клиенты Telegram умеют показывать статичные и анимированные стикеры."
layout: layout.njk
---

# Стикеры и маски

Клиенты Telegram умеют показывать статичные и анимированные стикеры.

### Отображение стикеров

```
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

documentAttributeSticker#6319d612 flags:# mask:flags.1?true alt:string stickerset:InputStickerSet mask_coords:flags.0?MaskCoords = DocumentAttribute;

inputStickerSetEmpty#ffb62b95 = InputStickerSet;
inputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
inputStickerSetAnimatedEmoji#028703c8 = InputStickerSet;
inputStickerSetDice#e67f520e emoticon:string = InputStickerSet;
inputStickerSetAnimatedEmojiAnimations#0cde3739 = InputStickerSet;
inputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;
inputStickerSetEmojiGenericAnimations#04c4d4ce = InputStickerSet;
inputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;
inputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;
inputStickerSetEmojiChannelDefaultStatuses#49748553 = InputStickerSet;
```

Стикеры могут содержаться в конструкторах [document](/constructor/document/), прикреплённых к [сообщениям](/constructor/message/), и всегда имеют атрибут типа [documentAttributeSticker](/constructor/documentAttributeSticker/).

Атрибут [documentAttributeSticker](/constructor/documentAttributeSticker/) содержит сведения о связанном [наборе стикеров](#stickersets), об эмодзи, который представляет стикер, и другие данные.

Доступно несколько типов стикеров:

-   [Статичные стикеры »](#static-stickers)
-   [Анимированные стикеры »](#animated-stickers)
-   [Видеостикеры »](#video-stickers)

Как и у всех файлов, у стикеров есть набор превью, которые следует обрабатывать так, как описано [здесь »](/api/files/#handling-audio-video-and-vector-previews).

Стикеры объединяются в [наборы стикеров »](#stickersets), а также используются в следующих случаях:

-   [Кубики »](/api/dice/)
-   [Анимированные эмодзи »](/api/animated-emojis/)
-   [Пользовательские эмодзи »](/api/custom-emoji/)
-   [Реакции »](/api/reactions/)
-   [Стикеры-маски »](#mask-stickers)

Один набор стикеров может одновременно содержать [статичные](#static-stickers), [анимированные](#animated-stickers) и [видеостикеры](#video-stickers).

#### Статичные стикеры

Статичные стикеры — это изображения [WebP](https://en.wikipedia.org/wiki/WebP) со следующими характеристиками:

-   Для стикеров ширина или высота должна быть равна 512 пикселям.
-   Для [пользовательских эмодзи](/api/custom-emoji/) разрешение должно быть 100×100 пикселей.
-   Поддерживается прозрачность.

Они определяются по полю `mime_type` связанного [document](/constructor/document/), которое всегда равно `image/webp`.

Советы о том, как создать идеальный статичный стикер, смотрите [здесь »](https://core.telegram.org/stickers#static-stickers-and-emoji), а о том, как загрузить его через API, — [здесь »](#creating-stickersets).

#### Анимированные стикеры

Анимированные стикеры — это [векторные анимации Lottie »](https://en.wikipedia.org/wiki/Lottie_\(file_format\)).

Для анимаций lottie в Telegram используется особый формат файлов `.tgs`: это сжатый gzip JSON-файл bodymovin, который воспроизводится с помощью библиотеки [rlottie](https://github.com/Samsung/rlottie).

Характеристики анимации Lottie:

-   Размер холста должен быть 512×512 пикселей.
-   Объекты не должны выходить за пределы холста.
-   Длительность анимации не должна превышать 3 секунд.
-   Все анимации должны быть зациклены.
-   Все анимации должны воспроизводиться со скоростью 60 кадров в секунду.

Они определяются по полю `mime_type` связанного [document](/constructor/document/), которое всегда равно `application/x-tgsticker`.

Советы о том, как создать идеальный анимированный стикер, смотрите [здесь »](https://core.telegram.org/stickers#creating-animations), а о том, как загрузить его через API, — [здесь »](#creating-stickersets).

##### Анимированные эффекты премиум-стикеров

```
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

videoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;

inputDocumentFileLocation#bad07584 id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
```

У некоторых анимированных стикеров есть также прикреплённый анимированный эффект (ещё одна анимация Lottie), который следует проигрывать, как только стикер попадает в область видимости.

Этот эффект больше самого стикера; его следует размещать _под_ основной анимацией стикера, но _поверх_ любых других соседних элементов интерфейса.

Проигрывать его следует при первом появлении стикера в поле зрения, а также повторно, если чат закрыть и открыть заново.

_Отправлять_ премиум-стикеры могут только пользователи с подпиской [Premium](/api/premium/), а вот анимированный эффект следует воспроизводить у всех пользователей, в том числе у тех, у кого подписки Premium нет.

Премиум-стикер определяется по наличию [videoSize](/constructor/videoSize/) с `type=f` в основном [document](/constructor/document/) стикера.  
TGS-файл анимированного эффекта (он отличается от TGS-файла самого стикера) можно получить с помощью [inputDocumentFileLocation](/constructor/inputDocumentFileLocation/) с `thumb_size=f`, как описано [здесь »](/api/files/#downloading-files).

Учтите, что [анимированные эффекты сообщений »](/api/effects/) также могут повторно использовать анимированный эффект премиум-стикера.

Кроме того, премиум-стикеры с анимацией могут отправляться с дополнительным [анимированным эффектом сообщения »](/api/effects/); в этом случае эффект стикера и дополнительный эффект следует воспроизводить одновременно.

#### Видеостикеры

Видеостикеры — это видео [VP9](https://en.wikipedia.org/wiki/VP9) со следующими характеристиками:

-   Видео должно быть закодировано с помощью [VP9](https://en.wikipedia.org/wiki/VP9) в контейнере [WebM](https://en.wikipedia.org/wiki/WebM).
-   Контейнер [WebM](https://en.wikipedia.org/wiki/WebM) не должен содержать **аудиодорожки**.
-   Для стикеров ширина или высота должна быть равна 512 пикселям.
-   Для [пользовательских эмодзи](/api/custom-emoji/) разрешение должно быть 100×100 пикселей.
-   Максимальная длительность: 3 секунды.
-   Частота кадров: до 30 FPS.
-   Поддерживается прозрачность.
-   Для наилучшего впечатления пользователя видео следует зациклить.

Они определяются по полю `mime_type` связанного [document](/constructor/document/), которое всегда равно `video/webm`.

Советы о том, как создать идеальный видеостикер, смотрите [здесь »](https://core.telegram.org/stickers#video-stickers-and-emoji), а о том, как загрузить его через API, — [здесь »](#creating-stickersets).

### Наборы стикеров

```
inputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
inputStickerSetAnimatedEmoji#028703c8 = InputStickerSet;
inputStickerSetDice#e67f520e emoticon:string = InputStickerSet;
inputStickerSetAnimatedEmojiAnimations#0cde3739 = InputStickerSet;
inputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;
inputStickerSetEmojiGenericAnimations#04c4d4ce = InputStickerSet;
inputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;
inputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;
inputStickerSetEmojiChannelDefaultStatuses#49748553 = InputStickerSet;

messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;

stickerSet#2dd14edc flags:# archived:flags.1?true official:flags.2?true masks:flags.3?true emojis:flags.7?true text_color:flags.9?true channel_emoji_status:flags.10?true creator:flags.11?true installed_date:flags.0?int id:long access_hash:long title:string short_name:string thumbs:flags.4?Vector<PhotoSize> thumb_dc_id:flags.4?int thumb_version:flags.4?int thumb_document_id:flags.8?long count:int hash:int = StickerSet;

stickerPack#12b299d4 emoticon:string documents:Vector<long> = StickerPack;

---functions---

messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;
```

Стикеры объединяются в так называемые «стикерпаки», однако в API они называются «наборами стикеров» (sticker sets), а название «стикерпак» (sticker pack) закреплено за другим понятием — об этом ниже.

Чтобы получить сведения о наборе стикеров, используйте [messages.getStickerSet](/method/messages.getStickerSet/), передав следующие параметры:

-   `stickerset` — один из конструкторов, перечисленных [здесь »](/type/InputStickerSet/); выберите подходящий в зависимости от того, какой набор запрашивается.
-   `hash` — изначально 0, в дальнейшем должен содержать значение поля `hash` из возвращённого [stickerSet](/constructor/stickerSet/).

[@term:hash] Метод вернёт [messages.stickerSetNotModified](/constructor/messages.stickerSetNotModified/), если передан ненулевой `hash` (хеш выборки — контрольное значение, по которому сервер определяет, изменились ли данные с прошлого запроса) и набор стикеров не изменился с момента последней загрузки.  
В противном случае будет возвращён [messages.stickerSet](/constructor/messages.stickerSet/), содержащий:

-   Конструктор [stickerSet](/constructor/stickerSet/) со сведениями о наборе стикеров
-   Вектор конструкторов [document](/constructor/document/) со всеми стикерами.  
    Учтите, что даже если передан устаревший `hash` и изменено или переупорядочено всего несколько стикеров, всё равно будут возвращены все стикеры.
-   Вектор конструкторов [stickerPack](/constructor/stickerPack/) со всеми идентификаторами стикеров в стикерпаке, сгруппированными по эмодзи.  
    Основной эмодзи, который следует показывать при предпросмотре стикеров в списке чатов, находится в поле `alt` конструктора [document](/constructor/document/).  
    На деле это поле позволяет связать со стикером более одного эмодзи: это значит, что один и тот же идентификатор документа может присутствовать сразу в нескольких [stickerPack](/constructor/stickerPack/).

### Превью наборов стикеров

```
stickerSetCovered#6410a5d2 set:StickerSet cover:Document = StickerSetCovered;
stickerSetMultiCovered#3407e51b set:StickerSet covers:Vector<Document> = StickerSetCovered;
stickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;
```

В некоторых частях API вместо полных конструкторов [document](/constructor/document/) для каждого стикера набора могут возвращаться сокращённые конструкторы [StickerSetCovered](/type/StickerSetCovered/):

-   [stickerSetCovered](/constructor/stickerSetCovered/) — содержит общие сведения о наборе стикеров и один стикер для предпросмотра: чтобы получить все стикеры набора, используйте [messages.getStickerSet](/method/messages.getStickerSet/).
-   [stickerSetMultiCovered](/constructor/stickerSetMultiCovered/) — содержит общие сведения о наборе стикеров и несколько стикеров для предпросмотра: чтобы получить все стикеры набора, используйте [messages.getStickerSet](/method/messages.getStickerSet/).
-   [stickerSetFullCovered](/constructor/stickerSetFullCovered/) — содержит общие сведения о наборе стикеров и все стикеры набора (а не только превью): в настоящее время используется только для [наборов пользовательских эмодзи](/api/custom-emoji/), чтобы избежать дополнительного вызова [messages.getStickerSet](/method/messages.getStickerSet/).

Кроме того, как и у всех файлов, у [документов](/constructor/document/) стикеров есть набор превью, которые следует обрабатывать так, как описано [здесь »](/api/files/#handling-audio-video-and-vector-previews).

### Установка наборов стикеров

```
inputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
inputStickerSetAnimatedEmoji#028703c8 = InputStickerSet;
inputStickerSetDice#e67f520e emoticon:string = InputStickerSet;
inputStickerSetAnimatedEmojiAnimations#0cde3739 = InputStickerSet;
inputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;
inputStickerSetEmojiGenericAnimations#04c4d4ce = InputStickerSet;
inputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;
inputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;
inputStickerSetEmojiChannelDefaultStatuses#49748553 = InputStickerSet;

messages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;
messages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;

messages.allStickersNotModified#e86602c3 = messages.AllStickers;
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;

updateNewStickerSet#688a30aa stickerset:messages.StickerSet = Update;
updateStickerSetsOrder#0bb2d201 flags:# masks:flags.0?true emojis:flags.1?true order:Vector<long> = Update;
updateStickerSets#31c24808 flags:# masks:flags.0?true emojis:flags.1?true = Update;

---functions---

messages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;
messages.uninstallStickerSet#f96e55de stickerset:InputStickerSet = Bool;
messages.toggleStickerSets#b5052fea flags:# uninstall:flags.0?true archive:flags.1?true unarchive:flags.2?true stickersets:Vector<InputStickerSet> = Bool;
messages.reorderStickerSets#78337739 flags:# masks:flags.0?true emojis:flags.1?true order:Vector<long> = Bool;
messages.getAllStickers#b8a0a1a8 hash:long = messages.AllStickers;
messages.getMaskStickers#640f82b8 hash:long = messages.AllStickers;
messages.getEmojiStickers#fbfca18f hash:long = messages.AllStickers;
```

[Набор стикеров](#stickersets) можно установить методом [messages.installStickerSet](/method/messages.installStickerSet/) с `archived=false`; возможные возвращаемые значения:

-   [messages.stickerSetInstallResultSuccess](/constructor/messages.stickerSetInstallResultSuccess/) — набор стикеров успешно установлен
-   [messages.stickerSetInstallResultArchive](/constructor/messages.stickerSetInstallResultArchive/) — набор стикеров успешно установлен и вытеснил несколько более старых неиспользуемых наборов, перечисленных в поле `sets`, [отправив их в архив](#archived-stickersets).

Чтобы удалить один или несколько наборов стикеров, используйте [messages.uninstallStickerSet](/method/messages.uninstallStickerSet/) либо [messages.toggleStickerSets](/method/messages.toggleStickerSets/) с флагом `uninstall`.

При установке наборов стикеров в остальные активные сессии отправляется обновление [updateNewStickerSet](/constructor/updateNewStickerSet/).

При удалении или архивировании наборов стикеров в остальные активные сессии отправляется обновление [updateStickerSets](/constructor/updateStickerSets/).  
По этому обновлению следует вызвать перечисленные ниже методы:

-   Если выставлено поле `masks`, вызовите [messages.getMaskStickers](/method/messages.getMaskStickers/).
-   Если выставлено поле `emoji`, вызовите [messages.getEmojiStickers](/method/messages.getEmojiStickers/).
-   Иначе вызовите [messages.getAllStickers](/method/messages.getAllStickers/) и [messages.getArchivedStickers](/method/messages.getArchivedStickers/).

Метод [messages.reorderStickerSets](/method/messages.reorderStickerSets/) меняет порядок установленных наборов стикеров, принимая идентификаторы [stickerSet](/constructor/stickerSet/): учтите, что обычные наборы, наборы [масок](#mask-stickers) и наборы [пользовательских эмодзи](/api/custom-emoji/) упорядочиваются независимо друг от друга, поэтому нужным флагом следует указать, наборы какого типа сортируются.

При изменении порядка наборов стикеров в остальные активные сессии отправляется обновление [updateStickerSetsOrder](/constructor/updateStickerSetsOrder/).  
По этому обновлению следует вызвать [messages.getAllStickers](/method/messages.getAllStickers/), [messages.getArchivedStickers](/method/messages.getArchivedStickers/) и [messages.getEmojiStickers](/method/messages.getEmojiStickers/).

Метод [messages.getAllStickers](/method/messages.getAllStickers/) возвращает все установленные и не убранные в архив наборы стикеров.  
Метод [messages.getEmojiStickers](/method/messages.getEmojiStickers/) возвращает все установленные и не убранные в архив наборы [пользовательских эмодзи](/api/custom-emoji/).

### Создание наборов стикеров

```
inputStickerSetItem#32da9e9c flags:# document:InputDocument emoji:string mask_coords:flags.0?MaskCoords keywords:flags.1?string = InputStickerSetItem;

messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;

messages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;

stickers.suggestedShortName#85fea03f short_name:string = stickers.SuggestedShortName;

---functions---

messages.uploadMedia#14967978 flags:# business_connection_id:flags.0?string peer:InputPeer media:InputMedia = MessageMedia;

stickers.checkShortName#284b3639 short_name:string = Bool;
stickers.suggestShortName#4dafc503 title:string = stickers.SuggestedShortName;

stickers.createStickerSet#9021ab67 flags:# masks:flags.0?true emojis:flags.5?true text_color:flags.6?true user_id:InputUser title:string short_name:string thumb:flags.2?InputDocument stickers:Vector<InputStickerSetItem> software:flags.3?string = messages.StickerSet;

messages.getMyStickers#d0b5e1fc offset_id:long limit:int = messages.MyStickers;

stickers.addStickerToSet#8653febe stickerset:InputStickerSet sticker:InputStickerSetItem = messages.StickerSet;
stickers.replaceSticker#4696459a sticker:InputDocument new_sticker:InputStickerSetItem = messages.StickerSet;
stickers.removeStickerFromSet#f7760f51 sticker:InputDocument = messages.StickerSet;
stickers.changeStickerPosition#ffb6d4ca sticker:InputDocument position:int = messages.StickerSet;
stickers.setStickerSetThumb#a76a5392 flags:# stickerset:InputStickerSet thumb:flags.0?InputDocument thumb_document_id:flags.1?long = messages.StickerSet;
```

Боты и пользователи могут создавать наборы стикеров с помощью перечисленных ниже методов.  
Бот [@stickers](https://t.me/stickers), которым раньше можно было редактировать стикеры, теперь **устарел**; вместо него следует пользоваться встроенным редактором (то есть вызывать описанные далее методы).

[@term:short name] Учтите, что при создании наборов стикеров неофициальные боты **обязаны** дописывать к короткому имени набора (`short name` — уникальный текстовый идентификатор набора, по которому на него ссылаются) окончание `"_by_<bot_username>"`. Пользователи и боты могут напрямую изменять наборы, созданные через [stickers.createStickerSet](/method/stickers.createStickerSet/) и через [@stickers](https://t.me/stickers): у наборов, принадлежащих текущему пользователю или боту, будет выставлен флаг `creator`.

[@note] В оригинале эта добавка названа словом «prefix» (приставка), хотя из самой строки `"_by_<bot_username>"` и из практики видно, что она дописывается в конец короткого имени. Здесь следует ориентироваться на формат строки, а не на термин оригинала.

Чтобы получить наборы стикеров, созданные текущей учётной записью, используйте [messages.getMyStickers](/method/messages.getMyStickers/).

Чтобы загрузить стикеры и миниатюры, если у вас ещё нет доступа к ранее загруженному [document](/constructor/document/), используйте [messages.uploadMedia](/method/messages.uploadMedia/).

Чтобы проверить, свободно ли то или иное короткое имя, используйте [stickers.checkShortName](/method/stickers.checkShortName/), а чтобы сервер сам предложил короткое имя по названию набора, — [stickers.suggestShortName](/method/stickers.suggestShortName/).

Метод [stickers.createStickerSet](/method/stickers.createStickerSet/) создаёт обычные наборы, наборы [масок](#mask-stickers) и наборы [пользовательских эмодзи](/api/custom-emoji/) — в том числе _и_ при [импорте стикеров через stickers SDK](https://core.telegram.org/import-stickers).

Чтобы добавить стикеры в набор, используйте [stickers.addStickerToSet](/method/stickers.addStickerToSet/).  
Чтобы заменить стикер в наборе, используйте [stickers.replaceSticker](/method/stickers.replaceSticker/) (передавать идентификатор самого набора здесь не нужно).  
Чтобы изменить миниатюру набора после его создания, используйте [stickers.setStickerSetThumb](/method/stickers.addStickerToSet/).  
Чтобы удалить стикеры из набора, используйте [stickers.removeStickerFromSet](/method/stickers.removeStickerFromSet/), а чтобы переставить стикеры внутри набора — [stickers.changeStickerPosition](/method/stickers.changeStickerPosition/) (достаточно просто указать документ стикера).

### Поиск наборов стикеров

```
messages.foundStickerSetsNotModified#0d54b65d = messages.FoundStickerSets;
messages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;

---functions---

messages.searchStickerSets#35705b8a flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;

messages.searchEmojiStickerSets#92b4494c flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
```

Методы [messages.searchStickerSets](/method/messages.searchStickerSets/) и [messages.searchEmojiStickerSets](/method/messages.searchEmojiStickerSets/) позволяют искать по названию глобально доступные обычные наборы стикеров и [наборы пользовательских эмодзи »](/api/custom-emoji/): учтите, что этот метод возвращает набор [превью наборов стикеров »](#stickerset-previews).

### Поиск стикеров

```
messages.foundStickersNotModified#6010c534 flags:# next_offset:flags.0?int = messages.FoundStickers;
messages.foundStickers#82c9e290 flags:# next_offset:flags.0?int hash:long stickers:Vector<Document> = messages.FoundStickers;

---functions---

messages.searchStickers#29b1c66a flags:# emojis:flags.0?true q:string emoticon:string lang_code:Vector<string> offset:int limit:int hash:long = messages.FoundStickers;
```

Метод [messages.searchStickers](/method/messages.searchStickers/) позволяет искать глобально доступные обычные стикеры и [пользовательские эмодзи »](/api/custom-emoji/) по ключевым словам (`q`) на нескольких языках (их можно перечислить в `lang_code`) и/или по списку эмодзи, разделённых пробелами (`emoticon`).

Благодаря серверной модели искусственного интеллекта этот метод поддерживает сложные запросы с несколькими ключевыми словами.

### Рекомендуемые наборы стикеров

```
messages.featuredStickersNotModified#c6dc0c66 count:int = messages.FeaturedStickers;
messages.featuredStickers#be382906 flags:# premium:flags.0?true hash:long count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;

updateReadFeaturedStickers#571d2742 = Update;
updateReadFeaturedEmojiStickers#fb4c496c = Update;

---functions---

messages.getFeaturedStickers#64780b14 hash:long = messages.FeaturedStickers;
messages.readFeaturedStickers#5b118126 id:Vector<long> = Bool;

messages.getOldFeaturedStickers#7ed094a1 offset:int limit:int hash:long = messages.FeaturedStickers;

messages.getFeaturedEmojiStickers#0ecf6736 hash:long = messages.FeaturedStickers;
```

Telegram показывает подборку рекомендуемых наборов стикеров: их можно получить с помощью [messages.getFeaturedStickers](/method/messages.getFeaturedStickers/) или, для [пользовательских эмодзи](/api/custom-emoji/), с помощью [messages.getFeaturedEmojiStickers](/method/messages.getFeaturedEmojiStickers/).

Клиентам следует предзагружать рекомендуемые стикеры при запуске в соответствии со значением [параметра конфигурации](/constructor/config/) `preload_featured_stickers`.

Кроме того, метод возвращает в поле `unread` набор идентификаторов непрочитанных [stickerSet](/constructor/stickerSet/): чтобы отметить их прочитанными, используйте [messages.readFeaturedStickers](/method/messages.readFeaturedStickers/); учтите, что это повлияет только на поле `unread` — все наборы стикеров будут возвращаться и дальше, если дополнительно не [вычислить `hash`](/api/offsets/#hash-generation).  
Также этот метод разошлёт обновление [updateReadFeaturedStickers](/constructor/updateReadFeaturedStickers/) или [updateReadFeaturedEmojiStickers](/constructor/updateReadFeaturedEmojiStickers/) во все остальные активные сессии.

Метод [messages.getOldFeaturedStickers](/method/messages.getOldFeaturedStickers/) позволяет получить расширенный список с ещё большим числом рекомендуемых наборов — тех, что раньше были в коротком списке, возвращаемом методом [messages.getFeaturedStickers](/method/messages.getFeaturedStickers/).

### Избранные наборы стикеров

```
messages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;
messages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;

updateFavedStickers#e511996d = Update;

---functions---

messages.faveSticker#b9ffc55b id:InputDocument unfave:Bool = Bool;
messages.getFavedStickers#04f1aaa9 hash:long = messages.FavedStickers;
```

Набор стикеров можно добавить в избранное или убрать оттуда с помощью [messages.faveSticker](/method/messages.faveSticker/).

[@note] Оригинал говорит здесь о наборах, но метод `messages.faveSticker` принимает параметр `id` типа `InputDocument`, то есть в избранное добавляется отдельный стикер, а не весь набор. То же расхождение сохраняется и в остальных абзацах раздела.

Избранные стикеры получают с помощью [messages.getFavedStickers](/method/messages.getFavedStickers/): учтите, что этот метод возвращает набор [превью наборов стикеров »](#stickerset-previews).

Пользователь может добавить в избранное лишь ограниченное число наборов стикеров — предел задаётся следующими параметрами [конфигурации](/api/config/#client-configuration):

-   Пользователи Premium могут добавить в избранное в общей сложности [`stickers_faved_limit_premium` наборов стикеров](/api/config/#stickers-faved-limit-premium).
-   Пользователи без Premium могут добавить в избранное в общей сложности [`stickers_faved_limit_default` наборов стикеров](/api/config/#stickers-faved-limit-default).

При добавлении наборов стикеров в избранное или удалении их оттуда во все остальные активные сессии рассылается обновление [updateFavedStickers](/constructor/updateFavedStickers/).  
Получив это обновление, следует вызвать [messages.getFavedStickers](/method/messages.getFavedStickers/).

### Архивированные наборы стикеров

```
messages.archivedStickers#4fcba9c8 count:int sets:Vector<StickerSetCovered> = messages.ArchivedStickers;

updateStickerSets#31c24808 flags:# masks:flags.0?true emojis:flags.1?true = Update;

---functions---

messages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;
messages.toggleStickerSets#b5052fea flags:# uninstall:flags.0?true archive:flags.1?true unarchive:flags.2?true stickersets:Vector<InputStickerSet> = Bool;

messages.getArchivedStickers#57f17692 flags:# masks:flags.0?true emojis:flags.1?true offset_id:long limit:int = messages.ArchivedStickers;
```

Один или несколько наборов стикеров можно архивировать (или разархивировать) с помощью [messages.installStickerSet](/method/messages.installStickerSet/) с `archived=true|false` либо с помощью [messages.toggleStickerSets](/method/messages.toggleStickerSets/) с флагом `archive` или `unarchive`.

Неиспользуемый набор стикеров может быть заархивирован и автоматически — при [установке новых наборов](#installing-stickersets).

Архивированные стикеры не возвращаются методом [messages.getAllStickers](/method/messages.getAllStickers/), и получить их можно только через [messages.getArchivedStickers](/method/messages.getArchivedStickers/): учтите, что этот метод возвращает набор [превью наборов стикеров »](#stickerset-previews).

При архивировании и разархивировании наборов стикеров во все остальные активные сессии рассылается обновление [updateStickerSets](/constructor/updateStickerSets/).  
Получив это обновление, следует вызвать [messages.getArchivedStickers](/method/messages.getArchivedStickers/).

### Недавние стикеры

```
messages.recentStickersNotModified#0b17f890 = messages.RecentStickers;
messages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;

updateRecentStickers#9a422c20 = Update;

---functions---

messages.saveRecentSticker#392718f8 flags:# attached:flags.0?true id:InputDocument unsave:Bool = Bool;
messages.getRecentStickers#9da9403b flags:# attached:flags.0?true hash:long = messages.RecentStickers;
messages.clearRecentStickers#8999602d flags:# attached:flags.0?true = Bool;
```

Использовав стикер в сообщении, клиент должен вызвать [messages.saveRecentSticker](/method/messages.saveRecentSticker/) (только для обычных стикеров и [масок](#mask-stickers); для масок необходимо выставить флаг `attached`).

Затем стикер можно убрать из списка недавних с помощью [messages.saveRecentSticker](/method/messages.saveRecentSticker/) с `unsave=true`, а очистить весь список целиком — с помощью [messages.clearRecentStickers](/method/messages.clearRecentStickers/).

Для получения списка недавних стикеров используйте [messages.getRecentStickers](/method/messages.getRecentStickers/).

Пользователь может добавить лишь ограниченное число недавних стикеров — предел задаётся значением [параметра конфигурации](/constructor/config/) `stickers_recent_limit`.

При изменении списка недавних стикеров во все остальные активные сессии рассылается обновление [updateRecentStickers](/constructor/updateRecentStickers/).  
Получив это обновление, следует вызвать [messages.getRecentStickers](/method/messages.getRecentStickers/).

### Недавние наборы стикеров

```
updateMoveStickerSetToTop#86fccf85 flags:# masks:flags.0?true emojis:flags.1?true stickerset:long = Update;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
```

Флаг `update_stickersets_order` следует выставлять, когда пользователь вручную выбирает стикеры, [маски](#mask-stickers) и [пользовательские эмодзи](/api/custom-emoji/) из конкретного набора в панели выбора наборов (а не через разделы интерфейса с предложенными или недавними наборами).  
Учтите, что для [пользовательских эмодзи](/api/custom-emoji/) этот флаг следует выставлять только тогда, когда эмодзи выбираются вручную из одного набора пользовательских эмодзи (а не из нескольких сразу).

Выставленный флаг приведёт к рассылке обновления [updateMoveStickerSetToTop](/constructor/updateMoveStickerSetToTop/) (вместо обычных [updateStickerSetsOrder](/constructor/updateStickerSetsOrder/)/[updateStickerSets](/constructor/updateStickerSetsOrder/)), которое означает, что список установленных наборов был переупорядочен и указанный набор перемещён в начало.

Учтите, что API предлагает и отдельный список недавних _стикеров_ (а не наборов) — подробнее см. [здесь »](#recent-stickers).

### Категории эмодзи

В интерфейсе выбора стикеров следует показывать список категорий, позволяющий быстро отфильтровать результаты по эмодзи (или по набору эмодзи) либо по какому-то другому признаку — подробнее см. [здесь »](/api/emoji-categories/).

### Предложение стикеров

```
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;

emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;

---functions---

messages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;
messages.searchCustomEmoji#2c11c0d7 emoticon:string hash:long = EmojiList;
```

Когда пользователь вводит эмодзи в строке ввода текста, клиентам следует показывать всплывающее окно со списком предлагаемых стикеров и [пользовательских эмодзи](/api/custom-emoji/).

[@term:app configuration] **Если** [параметр конфигурации приложения](/api/config/#stickers-emoji-suggest-only-api) `stickers_emoji_suggest_only_api` (конфигурация приложения — набор передаваемых сервером настроек, которые управляют поведением клиента) равен true, клиент обязан вызывать [messages.getStickers](/method/messages.getStickers/)/[messages.searchCustomEmoji](/method/messages.searchCustomEmoji/), чтобы получить список предлагаемых для этого эмодзи стикеров и [пользовательских эмодзи](/api/custom-emoji/).  
Параметр [stickers\_emoji\_cache\_time из appConfig](/api/config/#stickers-emoji-cache-time) задаёт срок годности локального кеша результатов [messages.getStickers](/method/messages.getStickers/)/[messages.searchCustomEmoji](/method/messages.searchCustomEmoji/); он же учитывается при вычислении хеша выборки для вызова этих методов.

**Иначе** следует применять описанную ниже локальную логику.

-   Постройте два списка недавно использованных стикеров, подходящих под этот эмодзи:
    -   Список **a**) содержит все обычные стикеры (не Premium).
    -   Список **b**) содержит все Premium-стикеры.
-   Итоговый список предлагаемых стикеров **c** составляется так:
    -   Если у пользователя нет [подписки Premium](/api/premium/): все стикеры из **a**, а за ними `stickers_premium_by_emoji_num` стикеров из **b**.
    -   Если у пользователя есть [подписка Premium](/api/premium/): `stickers_normal_by_emoji_per_premium_num` стикеров из **a**, затем 1 стикер из **b**, и так далее, пока оба списка не опустеют.

### Особые стикеры

```
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;

---functions---

messages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;
```

В некоторых местах интерфейса нужен заданный сервером список стикеров, не зависящий от установленных наборов; его можно получить с сервера методом [messages.getStickers](/method/messages.getStickers/), передав особое значение `emoticon`.

#### Примеры Premium-стикеров

В некоторых местах интерфейса может потребоваться показать список Premium-стикеров — как пример стикеров, которые станут доступны, если пользователь оформит [подписку Premium](/api/premium/).

Чтобы получить этот особый список, вызовите [messages.getStickers](/method/messages.getStickers/) с `emoticon=<img class="emoji" src="https://telegram.org/img/emoji/40/E2AD90.png" width="20" height="20" alt="⭐️"><img class="emoji" src="https://telegram.org/img/emoji/40/E2AD90.png" width="20" height="20" alt="⭐️">`

#### Приветственные стикеры

Когда пользователь открывает личный чат с собеседником, с которым у него ещё нет переписки, в интерфейсе следует показать случайно выбранный приветственный стикер и предложение отправить сообщение.

Чтобы получить этот особый список приветственных стикеров, вызовите [messages.getStickers](/method/messages.getStickers/) с `emoticon=<img class="emoji" src="https://telegram.org/img/emoji/40/F09F918B.png" width="20" height="20" alt="👋"><img class="emoji" src="https://telegram.org/img/emoji/40/E2AD90.png" width="20" height="20" alt="⭐️">`.

Учтите, что при включённом собственном [представлении Telegram Business »](/api/business/#business-introduction) вместо этого обязательно использовать сообщение и стикер, указанные в поле `intro` конструктора [userFull](/constructor/userFull/).

### Прикреплённые стикеры

```
inputMediaUploadedPhoto#7d8375da flags:# spoiler:flags.2?true live_photo:flags.3?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int video:flags.3?InputDocument = InputMedia;

inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;

photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;

document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
documentAttributeHasStickers#9801d2f7 = DocumentAttribute;

inputStickeredMediaPhoto#4a992157 id:InputPhoto = InputStickeredMedia;
inputStickeredMediaDocument#0438865b id:InputDocument = InputStickeredMedia;

inputStickerSetItem#32da9e9c flags:# document:InputDocument emoji:string mask_coords:flags.0?MaskCoords keywords:flags.1?string = InputStickerSetItem;

stickerSetCovered#6410a5d2 set:StickerSet cover:Document = StickerSetCovered;
stickerSetMultiCovered#3407e51b set:StickerSet covers:Vector<Document> = StickerSetCovered;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

messages.getAttachedStickers#cc5b67cc media:InputStickeredMedia = Vector<StickerSetCovered>;
```

Стикеры любого вида можно прикреплять к фотографиям и видео.  
Сначала клиент накладывает стикер поверх медиафайла локально (корректно обрабатывая [координаты маски](#mask-stickers) по умолчанию, если они заданы), а затем [загружает](/api/files/) изменённый медиафайл.  
Далее, отправляя медиафайл методом [messages.sendMedia](/method/messages.sendMedia/), следует указать наложенные стикеры в поле `stickers` конструктора [inputMediaUploadedPhoto](/constructor/inputMediaUploadedPhoto/) или [inputMediaUploadedDocument](/constructor/inputMediaUploadedPhoto/).

У отправленных [фотографий](/constructor/photo/) со стикерами будет выставлен флаг `has_stickers`.  
У отправленных [видеодокументов](/constructor/document/) со стикерами будет атрибут [documentAttributeHasStickers](/constructor/documentAttributeHasStickers/).

Получив такой медиафайл, клиенты должны вызвать [messages.getAttachedStickers](/method/messages.getAttachedStickers/), передав этот медиафайл: метод вернёт набор [превью наборов стикеров »](#stickerset-previews) со сведениями о наборах стикеров (а не об отдельных стикерах), использованных в медиафайле.

#### Стикеры-маски

Стикеры-маски — особая разновидность [статичных](#static-stickers) стикеров, которые предназначены для наложения поверх фотографий и прикрепления к медиафайлам, как описано [здесь »](#attached-stickers).

```
maskCoords#aed6dbb2 n:int x:double y:double zoom:double = MaskCoords;

documentAttributeSticker#6319d612 flags:# mask:flags.1?true alt:string stickerset:InputStickerSet mask_coords:flags.0?MaskCoords = DocumentAttribute;

inputStickerSetItem#32da9e9c flags:# document:InputDocument emoji:string mask_coords:flags.0?MaskCoords keywords:flags.1?string = InputStickerSetItem;

---functions---

messages.getMaskStickers#640f82b8 hash:long = messages.AllStickers;
```

[@term:mask_coords] Стикерам-маскам можно дополнительно сопоставить координаты (`mask_coords` — привязка маски к черте лица вместе со смещением и масштабом), которые содержатся в конструкторе [maskCoords](/constructor/maskCoords/).

Позиция `n` указывает, где следует разместить маску:

-   0 => Относительно лба
-   1 => Относительно глаз
-   2 => Относительно рта
-   3 => Относительно подбородка

Параметры `x`, `y` и `zoom` дополнительно уточняют положение относительно выбранной черты лица.

Учтите, что эти координаты используются только для того, чтобы задать положение по умолчанию при [прикреплении стикеров к медиафайлам](#attached-stickers): клиент локально запускает распознавание лиц и помещает стикер-маску в подходящие координаты относительно выбранной черты лица.  
Пользователь может изменить итоговое положение стикера перед тем, как будет создано новое фото или видео с впечатанным в него стикером.  
Итоговые координаты не отправляются вместе с прикреплённым медиафайлом, поскольку служат лишь предлагаемым положением по умолчанию при размещении стикера.

Координаты по умолчанию выбирает создатель набора стикеров при [загрузке стикера](#creating-stickersets).
