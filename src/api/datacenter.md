---
title: "Работа с разными дата-центрами"
original: "https://core.telegram.org/api/datacenter"
section: api
description: "Серверы разделены на несколько дата-центров (далее «DC» — от англ. data center), расположенных в разных частях света. Полный список прокси-точек доступа к этим DC можно получить…"
layout: layout.njk
---

# Работа с разными дата-центрами

[@term:DC] Серверы разделены на несколько дата-центров (далее «DC» — от англ. data center), расположенных в разных частях света. Полный список прокси-точек доступа к этим DC можно получить методом [help.getConfig](/method/help.getConfig/):

```
dcOption#18b7a10d flags:# ipv6:flags.0?true media_only:flags.1?true tcpo_only:flags.2?true cdn:flags.3?true static:flags.4?true this_port_only:flags.5?true id:int ip_address:string port:int secret:flags.10?bytes = DcOption;
config#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;
---functions---
help.getConfig#c4f9186b = Config;
```

Здесь **this\_dc** — номер текущего DC, а **dc\_options** — список всех доступных на данный момент DC, у каждого из которых есть **id**, **ip** и **port** для установки соединения. Обратите внимание, что **ip** и **port** могут часто меняться в зависимости от нагрузки на прокси-серверы и текущего местоположения пользователя.  
Как правило, у каждого DC есть по меньшей мере один адрес (endpoint) IPv4 и один IPv6.

Чтобы взаимодействие клиента с API было оптимальным, каждый клиент обязан использовать для своих основных запросов (отправка сообщений, получение контактов и т. д.) соединение с ближайшей точкой доступа. Поэтому перед началом работы с API необходимо знать, как выбирать DC.

### Регистрация и авторизация

Метод [auth.sendCode](/method/auth.sendCode/) — это основная точка входа при регистрации нового пользователя или авторизации уже существующего. На вызов этого метода приходится 95 % всех случаев перенаправления на другой DC.

[@term:phone_number] Клиент ещё не знает, с каким DC он будет связан, поэтому устанавливает шифрованное соединение со случайным адресом и отправляет запрос туда. Получив от клиента **phone\_number** (номер телефона пользователя), мы можем выяснить, зарегистрирован ли он в системе. Если зарегистрирован, то при необходимости вместо отправки текстового сообщения мы просим клиента сначала установить соединение с другим DC (ошибка PHONE\_MIGRATE\_X). Если пользователя с таким номером у нас пока нет, мы изучаем его IP-адрес: по нему можно определить ближайший DC. И снова при необходимости перенаправляем пользователя на другой DC (ошибка NETWORK\_MIGRATE\_X).

#### Проверка перенаправлений

Существуют зарезервированные префиксы номеров телефона, позволяющие проверить, правильно ли приложение обрабатывает перенаправления между DC. Подробнее об этом — в статье [Авторизация пользователя](https://core.telegram.org/api/auth#test-phone-numbers).

### Доступ к файлам

Файл, сохранённый пользователем с помощью [upload.saveFilePart](/method/upload.saveFilePart/), будет доступен для прямого скачивания только с того DC, где выполнялся запрос. Именно поэтому у каждого файла есть параметр **dc\_id**:

```
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;

encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;

userProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;
chatPhoto#1c6e1c11 flags:# has_video:flags.0?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = ChatPhoto;
```

Чтобы скачать файл, нужно установить шифрованное соединение с DC под номером **dc\_id** и выполнить через него запрос [upload.getFile](/method/upload.getFile/). При попытке скачать файл по неверному соединению будет возвращена ошибка FILE\_MIGRATE\_X.

[@term:auth_key] Обратите внимание: ключи шифрования между DC не копируются, поэтому для каждого нового DC процедура установки шифрованного соединения начинается с самого начала. Выданный `auth_key` (авторизационный ключ — долговременный секрет, которым шифруются все сообщения) можно связать с текущим авторизованным пользователем через [перенос авторизации](#authorization-transfer).

### Миграция пользователя

В процессе работы с API данные пользователя накапливаются в том DC, с которым он связан. По этой причине клиент не может самостоятельно привязать пользователя к другому DC. Однако впоследствии, при длительной работе из непривычного местоположения, мы можем решить, что данные пользователя следует перенести в другой DC. Через некоторое время данные будут скопированы, а привязка обновлена. После этого на любой запрос, переданный в старый DC, API вернёт ошибку USER\_MIGRATE\_X. Клиенту тогда придётся установить соединение с новым DC и повторить запрос.

### Перенос авторизации

Чтобы пользователю не приходилось каждый раз вводить код из текстового сообщения, применяются следующие методы:

```
auth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
---functions---
auth.importAuthorization#a57a7dad id:long bytes:bytes = auth.Authorization;
auth.exportAuthorization#e5bfffcd dc_id:int = auth.ExportedAuthorization;
```

Метод [auth.exportAuthorization](/method/auth.exportAuthorization/) обязан выполняться в текущем DC (том, с которым соединение уже установлено), а в качестве значения **dc\_id** ему передаётся номер нового DC. Метод должен вернуть идентификатор пользователя и длинную строку случайных данных. Отправив полученное в новый DC, можно выполнить там операцию импорта. После этого в новом DC станет возможно успешно выполнять запросы, требующие авторизации.

### Параллельные сессии

```
config#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;

auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
```

[@term:session] Один [авторизационный ключ](/mtproto/auth_key/) может одновременно использоваться **несколькими независимыми сессиями MTProto** (сессия — самостоятельный поток обмена сообщениями со своим состоянием, живущий поверх общего ключа).

[@term:session_id] [@term:msg_id] Каждая сессия определяется собственным случайно сгенерированным 64-битным идентификатором [session\_id](/mtproto/description/#session), при этом все сессии используют один и тот же **auth\_key\_id**: сервер считает каждую пару `(auth_key_id, session_id)` отдельной сессией со своим пространством [идентификаторов сообщений](/mtproto/description/#message-identifier-msg-id) (`msg_id`) и [порядковых номеров](/mtproto/description/#message-sequence-number-msg-seqno), со своим использованием соли и своим состоянием подтверждений.

Поэтому открытие дополнительной сессии **не** требует повторной авторизации: клиент просто генерирует новый **session\_id** поверх уже имеющегося авторизационного ключа.

[@term:Perfect Forward Secrecy] Обратите внимание: если включён режим [Perfect Forward Secrecy](/api/pfs/) (совершенная прямая секретность), то для создания новой параллельной сессии клиент **обязан** сгенерировать новый временный авторизационный ключ, а не просто сменить **session\_id**; в этом случае у каждой сессии будут различаться оба элемента пары `(auth_key_id, session_id)`.

Клиенты применяют это, чтобы распределить трафик по нескольким одновременным соединениям с одним и тем же DC, и делают это двумя разными способами:

-   **Сессии медиа-DC.** Крупные [файловые запросы](/api/files/) к медиа-дата-центрам ([upload.getFile](/method/upload.getFile/), [upload.saveFilePart](/method/upload.saveFilePart/)) следует обслуживать через одну или несколько отдельных сессий и отдельных соединений, в которых не выполняются никакие другие методы, — чтобы объёмная передача данных не мешала [получению обновлений](/api/updates/) и вызовам остальных методов. Такие сессии никогда не доставляют [обновления](/api/updates/#subscribing-to-updates) и устанавливаются к [медиа-дата-центрам](#file-access) (они обозначены флагом `media_only` в конструкторе [dcOption](/constructor/dcOption/)).  
    Подробности — в разделе [распараллеливание передачи файлов »](/api/files/#general-considerations).

    Сессии медиа-DC можно распараллеливать как при включённом [Perfect Forward Secrecy](/api/pfs/), так и без него.

-   **Основные (RPC) сессии.** Количество параллельных сессий, которые клиент вправе открыть к **основному соединению** своего домашнего DC, сервер сообщает в поле **tmp\_sessions** конструкторов [config](/constructor/config/) и [auth.authorization](/constructor/auth.authorization/).

    Если значение **tmp\_sessions** больше `1`, клиент может открыть к своему домашнему DC указанное число одновременных сессий и распределять между ними исходящие вызовы API, повышая пропускную способность; если же поле отсутствует или его значение `≤ 1`, клиент обязан обойтись одной-единственной основной сессией.

    Обратите внимание: если **tmp\_sessions** больше `1`, клиент **обязан** включить [Perfect Forward Secrecy](/api/pfs/) для всех своих сессий: каждая сессия привязывает собственный временный авторизационный ключ к постоянному и никогда не использует постоянный ключ напрямую.

    [@term:pts] В отличие от сессий для передачи файлов, все основные сессии пользуются общей полной авторизацией аккаунта и **могут получать [обновления](/api/updates/)**, разделяя при этом общую последовательность `pts`/`seq`/`qts` (счётчики состояния обновлений): каждое обновление доставляется только через **одну** из активных в данный момент сессий, выбранную случайным образом.

    Клиент **не должен** открывать к домашнему DC больше одновременных сессий, чем указано в **tmp\_sessions** (при отсутствии флага значение по умолчанию — `1`), иначе сервер завершит все сессии с [ошибкой `AUTH_KEY_DUPLICATED`](/api/errors/#406-not-acceptable), что вдобавок сделает авторизационный ключ недействительным и вынудит пользователя войти в аккаунт заново.

    Таким образом, соблюдать значение **tmp\_sessions** обязательно (а при его отсутствии или значении `≤ 1` — использовать одну основную сессию); только [сессии передачи файлов](/api/files/#general-considerations) на медиа-дата-центрах разрешено открывать параллельно всегда, независимо от значения **tmp\_sessions**.
