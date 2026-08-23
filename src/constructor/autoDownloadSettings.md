---
title: "autoDownloadSettings (конструктор)"
original: "https://core.telegram.org/constructor/autoDownloadSettings"
section: ref
kind: constructor
layout: layout.njk
---

# autoDownloadSettings

*Конструктор из схемы TL.*

> Autodownload settings

## Определение TL

```
autoDownloadSettings#baa57628 flags:# disabled:flags.0?true video_preload_large:flags.1?true audio_preload_next:flags.2?true phonecalls_less_data:flags.3?true stories_preload:flags.4?true photo_size_max:int video_size_max:long file_size_max:long video_upload_maxbitrate:int small_queue_active_operations_max:int large_queue_active_operations_max:int = AutoDownloadSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Disable automatic media downloads? |
| video_preload_large | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to preload the first seconds of videos larger than the specified limit |
| audio_preload_next | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether to preload the next audio track when you're listening to music |
| phonecalls_less_data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether to enable data saving mode in phone calls |
| stories_preload | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether to preload [stories](https://core.telegram.org/api/stories); in particular, the first [documentAttributeVideo](/constructor/documentAttributeVideo/).preload_prefix_size bytes of story videos should be preloaded. |
| photo_size_max | [int](/type/int/) | Maximum size of photos to preload |
| video_size_max | [long](/type/long/) | Maximum size of videos to preload |
| file_size_max | [long](/type/long/) | Maximum size of other files to preload |
| video_upload_maxbitrate | [int](/type/int/) | Maximum suggested bitrate for uploading videos |
| small_queue_active_operations_max | [int](/type/int/) | A limit, specifying the maximum number of files that should be downloaded in parallel from the same DC, for files smaller than 20MB. |
| large_queue_active_operations_max | [int](/type/int/) | A limit, specifying the maximum number of files that should be downloaded in parallel from the same DC, for files bigger than 20MB. |

## Тип

[AutoDownloadSettings](/type/AutoDownloadSettings/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [documentAttributeVideo](/constructor/documentAttributeVideo/)

Defines a video
