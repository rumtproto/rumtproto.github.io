---
title: "account.uploadTheme (метод)"
original: "https://core.telegram.org/method/account.uploadTheme"
section: ref
kind: method
layout: layout.njk
---

# account.uploadTheme

*Метод из схемы TL.*

> Upload theme

## Определение TL

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
account.uploadTheme#1c3db333 flags:# file:InputFile thumb:flags.0?InputFile file_name:string mime_type:string = Document;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| file | [InputFile](/type/InputFile/) | [Previously uploaded](https://core.telegram.org/api/themes#uploading-theme-files) theme file with platform-specific colors for UI components, can be left unset when creating themes that only modify the wallpaper or accent colors. |
| thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputFile](/type/InputFile/) | Thumbnail |
| file_name | [string](/type/string/) | File name |
| mime_type | [string](/type/string/) | MIME type, must be application/x-tgtheme-{format}, where format depends on the client |

## Результат

[Document](/type/Document/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | THEME_FILE_INVALID | Invalid theme file provided. |
| 400 | THEME_MIME_INVALID | The theme's MIME type is invalid. |

## Related pages

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.
