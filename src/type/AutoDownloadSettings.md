---
title: "AutoDownloadSettings (тип)"
original: "https://core.telegram.org/type/AutoDownloadSettings"
section: ref
kind: type
layout: layout.njk
---

# AutoDownloadSettings

*Тип из схемы TL.*

> Media autodownload settings

## Определение TL

```
autoDownloadSettings#baa57628 flags:# disabled:flags.0?true video_preload_large:flags.1?true audio_preload_next:flags.2?true phonecalls_less_data:flags.3?true stories_preload:flags.4?true photo_size_max:int video_size_max:long file_size_max:long video_upload_maxbitrate:int small_queue_active_operations_max:int large_queue_active_operations_max:int = AutoDownloadSettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [autoDownloadSettings](/constructor/autoDownloadSettings/) | Autodownload settings |
