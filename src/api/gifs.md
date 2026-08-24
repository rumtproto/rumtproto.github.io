---
title: "Работа с GIF"
original: "https://core.telegram.org/api/gifs"
section: api
description: "Клиенты Telegram умеют показывать GIF."
layout: layout.njk
---

# Работа с GIF

Клиенты Telegram умеют показывать GIF.

В Telegram GIF на самом деле представляют собой видео MPEG4 (h264) без звука; если пользователь попытается загрузить настоящий файл GIF, сервер автоматически преобразует его в файл MPEG4.

### Загрузка GIF

```
documentAttributeAnimated#11b58939 = DocumentAttribute;

inputMediaUploadedDocument#37c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;

---functions---

messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

В Telegram GIF на самом деле представляют собой видео MPEG4 без звука; если пользователь попытается загрузить настоящий файл GIF, сервер автоматически преобразует его в файл MPEG4.

Чтобы загрузить GIF, следуйте обычной [процедуре загрузки файлов »](/api/files/#uploading-files), указав атрибут [documentAttributeAnimated](/constructor/documentAttributeAnimated/).

Загрузка GIF автоматически добавляет его в пользовательский [список сохранённых GIF »](#saved-gifs).

#### Загрузка по хешу

Для некоторых типов документов, например для GIF, вместо загрузки с нуля можно поискать документ на серверах Telegram методом [messages.getDocumentByHash](/method/messages.getDocumentByHash/).  
Полное описание процедуры приведено [здесь »](/api/files/#uploading-by-hash).

### Сохранённые GIF

```
updateSavedGifs#9375341e = Update;

messages.savedGifsNotModified#e8025ca2 = messages.SavedGifs;
messages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;

---functions---

messages.saveGif#327a30cb id:InputDocument unsave:Bool = Bool;
messages.getSavedGifs#5cf09635 hash:long = messages.SavedGifs;
```

GIF, полученные в чате, можно добавлять в список сохранённых GIF (или удалять из него) методом [messages.saveGif](/method/messages.saveGif/).

При изменении списка сохранённых GIF указанным выше методом в остальные активные сессии приходит обновление [updateSavedGifs](/constructor/updateSavedGifs/); в ответ на него следует вызвать [messages.getSavedGifs](/method/messages.getSavedGifs/), чтобы обновить локально закешированный список.

Метод [messages.getSavedGifs](/method/messages.getSavedGifs/) следует вызывать также при первом входе в аккаунт.

[Загрузка »](#uploading-gifs) GIF автоматически добавляет его в список сохранённых.

Список сохранённых GIF следует показывать в [интерфейсе выбора GIF »](#searching-gifs).

Максимальное число GIF, которые можно добавить в список сохранённых, задают параметры [appConfig.saved\_gifs\_limit\_default](/api/config/#saved-gifs-limit-default)/[appConfig.saved\_gifs\_limit\_premium](/api/config/#saved-gifs-limit-premium) — соответственно для пользователей без [Premium](/api/premium/) и с [Premium](/api/premium/).

При попытке добавить ещё один GIF после того, как достигнут лимит для пользователей без Premium, следует открыть окно оформления подписки Premium.  
Если пользователь добавляет ещё один GIF даже после того, как достигнут лимит без Premium или с Premium, сервер автоматически удаляет самый старый GIF, а клиенту следует показать всплывающее уведомление об этом удалении.

### Поиск GIF

```
config#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;
```

Клиентам следует реализовать интерфейс выбора и поиска GIF, практически идентичный интерфейсу поиска [стикеров](/api/stickers/): строка поиска (со списком [категорий эмодзи](/api/emoji-categories/)), а под ней (изначально) список [сохранённых GIF](#saved-gifs), которые пользователь может выбрать и отправить в текущий чат.

[@term:inline query] При вводе текста в строку поиска список сохранённых GIF заменяется результатами поиска GIF, а сам поиск обязан выполняться как [инлайн-запрос »](/api/bots/inline/) (`inline query` — запрос к боту прямо из поля ввода, без отправки сообщения) к боту, указанному в [config](/constructor/config/).`gif_search_username`, с `peer`\=[inputPeerEmpty](/constructor/inputPeerEmpty/) и `query`, равным введённому пользователем тексту.  
Повторим: интерфейс поиска GIF должен быть практически идентичен интерфейсу поиска [стикеров](/api/stickers/) — даже если используются инлайн-запросы к боту, обычный интерфейс инлайн-запросов для поиска GIF применять **не** следует.

Как сказано выше, строка поиска GIF должна также предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным критериям; подробнее см. [здесь »](/api/emoji-categories/).

При выборе категории эмодзи строку ввода поиска следует отключить и выполнить поиск, передав в `query` первый эмодзи выбранной группы.
