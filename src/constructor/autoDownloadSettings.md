---
title: "autoDownloadSettings"
original: "https://core.telegram.org/constructor/autoDownloadSettings"
section: ref
kind: constructor
description: "Настройки автозагрузки"
layout: layout.njk
---

# autoDownloadSettings

Настройки автозагрузки

```
autoDownloadSettings#baa57628 flags:# disabled:flags.0?true video_preload_large:flags.1?true audio_preload_next:flags.2?true phonecalls_less_data:flags.3?true stories_preload:flags.4?true photo_size_max:int video_size_max:long file_size_max:long video_upload_maxbitrate:int small_queue_active_operations_max:int large_queue_active_operations_max:int = AutoDownloadSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Отключить автоматическую загрузку медиафайлов?</td></tr><tr><td><strong>video_preload_large</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Предзагружать ли первые секунды видео, размер которых превышает указанное ограничение</td></tr><tr><td><strong>audio_preload_next</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Предзагружать ли следующий аудиотрек во время прослушивания музыки</td></tr><tr><td><strong>phonecalls_less_data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Включать ли режим экономии трафика в звонках</td></tr><tr><td><strong>stories_preload</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Предзагружать ли <a href="/api/stories">истории</a>; в частности, следует предзагрузить первые <a href="/constructor/documentAttributeVideo">documentAttributeVideo</a>.<code>preload_prefix_size</code> байт видео историй.</td></tr><tr><td><strong>photo_size_max</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальный размер фотографий для предварительной загрузки</td></tr><tr><td><strong>video_size_max</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Максимальный размер видео для предварительной загрузки</td></tr><tr><td><strong>file_size_max</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Максимальный размер прочих файлов для предварительной загрузки</td></tr><tr><td><strong>video_upload_maxbitrate</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальный рекомендуемый битрейт для <strong>отправки</strong> видео</td></tr><tr><td><strong>small_queue_active_operations_max</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ограничение, задающее максимальное число файлов, которые следует скачивать параллельно с одного DC, для файлов меньше 20 МБ.</td></tr><tr><td><strong>large_queue_active_operations_max</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ограничение, задающее максимальное число файлов, которые следует скачивать параллельно с одного DC, для файлов больше 20 МБ.</td></tr></tbody></table>

### Тип

[AutoDownloadSettings](/type/AutoDownloadSettings/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [documentAttributeVideo](/constructor/documentAttributeVideo/)

Определяет видео
