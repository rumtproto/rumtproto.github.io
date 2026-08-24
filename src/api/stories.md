---
title: "Telegram Stories"
original: "https://core.telegram.org/api/stories"
section: api
description: "Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API."
layout: layout.njk
---

# Telegram Stories

Пользователи и каналы Telegram могут без труда публиковать и просматривать [истории](https://telegram.org/blog/stories) через API.

### Публикация историй

Схема:

```
inputPeerSelf#7da07ec9 = InputPeer;
inputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;

boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;

updateStory#75b3b798 peer:Peer story:StoryItem = Update;

updateStoryID#1bf335b9 id:int random_id:long = Update;

---functions---

stories.canSendStory#30eb63f0 peer:InputPeer = stories.CanSendStoryCount;
stories.sendStory#8f9e6898 flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> music:flags.9?InputDocument = Updates;

stories.getChatsToSend#a56a8b60 = messages.Chats;
```

[@term:peer] Перед публикацией истории клиенту следует вызвать [stories.canSendStory](/method/stories.canSendStory/), чтобы убедиться, что он вправе отправлять истории указанному `peer` (пиру — адресату, от имени которого публикуется история); это может быть [inputPeerSelf](/constructor/inputPeerSelf/) для публикации от имени обычного пользователя и [inputPeerChannel](/constructor/inputPeerChannel/) для публикации от имени канала или супергруппы.

Метод [stories.getChatsToSend](/method/stories.getChatsToSend/) позволяет получить список каналов и супергрупп, в которых пользователь может публиковать истории; при этом перед загрузкой истории всё равно необходимо вызвать [stories.canSendStory](/method/stories.canSendStory/), чтобы убедиться, что не достигнут какой-либо другой лимит, как описано в [основной документации »](/api/stories/#posting-stories). Учтите: чтобы получить право публиковать истории от имени канала или супергруппы, его сначала нужно забустить — подробности [здесь »](/api/boost/).

Метод [stories.canSendStory](/method/stories.canSendStory/) возвращает [stories.canSendStoryCount](/constructor/stories.canSendStoryCount/) с числом свободных слотов для активных историй (оно равно значению [параметра клиентской конфигурации `story_expiring_limit_*`](/api/config/#story-expiring-limit-default) минус количество уже активных историй) только в следующих случаях:

-   Если история публикуется от имени канала или супергруппы:
    -   Текущий пользователь — администратор канала или супергруппы и обладает [правом администратора `post_stories`](/constructor/chatAdminRights/); иначе возвращается ошибка `CHAT_ADMIN_REQUIRED`.
    -   И канал или супергруппа [набрали достаточно бустов для публикации истории »](/api/boost/); иначе возвращается ошибка `BOOSTS_REQUIRED`.
-   Если история публикуется от имени текущего пользователя:
    -   Пользователю разрешено публиковать истории согласно [параметру клиентской конфигурации `stories_posting`](/api/config/#stories-posting); иначе возвращается ошибка `PREMIUM_ACCOUNT_REQUIRED`.
    -   И пользователь не достиг предельного числа активных историй, заданного [параметрами клиентской конфигурации `story_expiring_limit_*`](/api/config/#story-expiring-limit-default); иначе возвращается ошибка `STORIES_TOO_MUCH`, означающая, что пользователю следует оформить подписку [Premium](/api/premium/), удалить одну из активных историй или дождаться, пока истечёт срок жизни самой старой из них.
    -   И пользователь не достиг недельного лимита историй, заданного [параметрами клиентской конфигурации `stories_sent_weekly_limit_*`](/api/config/#stories-sent-weekly-limit-default); иначе возвращается ошибка `STORY_SEND_FLOOD_WEEKLY_%d`, указывающая, сколько секунд нужно подождать перед публикацией новой истории.
    -   И пользователь не достиг месячного лимита историй, заданного [параметрами клиентской конфигурации `stories_sent_monthly_limit_*`](/api/config/#stories-sent-monthly-limit-default); иначе возвращается ошибка `STORY_SEND_FLOOD_MONTHLY_%d`, указывающая, сколько секунд нужно подождать перед публикацией новой истории.

Убедившись, что историю можно опубликовать, клиент может вызвать [stories.sendStory](/method/stories.sendStory/) для её загрузки.  
Учтите, что если в промежутке между вызовами [stories.canSendStory](/method/stories.canSendStory/) и [stories.sendStory](/method/stories.sendStory/) какое-либо из условий изменится (например, пользователь опубликует историю с другого клиента и упрётся в недельный лимит), то [stories.sendStory](/method/stories.sendStory/) вернёт те же ошибки, что перечислены выше для [stories.canSendStory](/method/stories.canSendStory/).

Параметры метода [stories.sendStory](/method/stories.sendStory/) полностью описаны на [странице метода »](/method/stories.sendStory/), здесь приведены лишь наиболее важные из них:

-   `peer`: пир, от имени которого публикуется история.
-   `media`: медиафайл истории (вертикальное фото или вертикальное видео размером не более 30 МБ).
-   `media_areas`: [медиаобласти](/api/stories/#media-areas), связанные с историей, подробнее [здесь »](/api/stories/#media-areas).
-   `privacy_rules`: набор [правил приватности »](/api/privacy/#privacy-rules) для истории в виде массива конструкторов [InputPrivacyRule](/type/InputPrivacyRule/), определяющих, кто может и кто не может её просматривать.
-   `expire`: срок в секундах, по истечении которого история перемещается в [архив](#pinned-or-archived-stories) (и [в профиль](#pinned-or-archived-stories), если установлен флаг `pinned`); должен быть равен одному из значений `6 * 3600`, `12 * 3600`, `86400` или `2 * 86400` для пользователей Telegram Premium и `86400` для всех остальных.
-   `pinned`: нужно ли по истечении срока автоматически [добавлять историю также и в профиль](#pinned-or-archived-stories). Если флаг не установлен, история попадёт только в [архив](#pinned-or-archived-stories).
-   `caption` и `entities`: подпись к истории и связанные с ней [сущности оформления](/api/entities/); учтите, что длина подписи ограничена ключами конфигурации [`story_caption_length_limit_*` »](/api/config/#story-caption-length-limit-default), а отправлять и отображать сущности оформления истории следует только в соответствии со значением ключа конфигурации [stories\_entities »](/api/config/#stories-entities).

После успешной загрузки истории будет возвращено обновление [updateStoryID](/constructor/updateStoryID/), сообщающее присвоенный истории идентификатор (`id`); как и в случае с сообщениями, поле `random_id` содержит то самое значение `random_id`, которое было передано в [stories.sendStory](/method/stories.sendStory/) — так можно понять, какой истории присвоен конкретный `id`, сопоставив его с вызовом [stories.sendStory](/method/stories.sendStory/), в котором использовался возвращённый `random_id`.

Кроме того, публикация истории порождает обновление [updateStory](/constructor/updateStory/) как у нас, так и у наших подписчиков и контактов (даже если они [скрыли](#hiding-stories-of-other-users) наши истории).

Дополнительно, если автор истории упомянул нас в её подписи, автоматически будет создано сообщение с [messageMediaStory](/constructor/messageMediaStory/) и флагом `via_mention`, пришедшее от автора истории.

[@term:Mini App] [Mini apps](/api/bots/webapps/) (мини-приложения, работающие внутри Telegram) также могут запросить публикацию истории в профиле пользователя с помощью [события web\_app\_share\_to\_story »](/api/web-events/#web-app-share-to-story).

#### Редактирование историй

```
inputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;
inputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;
inputFileStoryDocument#62dc8b48 id:InputDocument = InputFile;

inputMediaUploadedPhoto#7d8375da flags:# spoiler:flags.2?true live_photo:flags.3?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int video:flags.3?InputDocument = InputMedia;
inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;

inputMediaPhoto#e3af4434 flags:# spoiler:flags.1?true live_photo:flags.2?true id:InputPhoto ttl_seconds:flags.0?int video:flags.2?InputDocument = InputMedia;
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;

---functions---

stories.editStory#2c63a72b flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> music:flags.4?InputDocument = Updates;
```

Историю также можно отредактировать с помощью [stories.editStory](/method/stories.editStory/).

**Примечание**: [обычно](/api/files/#editing-uploaded-files) при изменении одних лишь атрибутов [DocumentAttribute](/type/DocumentAttribute/) у файлов (например, имени файла через [documentAttributeFilename](/constructor/documentAttributeFilename/), метки времени видеоминиатюры через [documentAttributeVideo](/constructor/documentAttributeVideo/).`preload_prefix_size` и т. п.), без изменения самого медиафайла, требуется полностью скачать и заново загрузить исходное медиа: атрибуты запечены в медиафайл и не могут быть изменены через [inputMediaDocument](/constructor/inputMediaDocument/) (в отличие от некоторых других атрибутов, например `spoiler`, который допускается менять без повторной загрузки — достаточно передать старое медиа в [inputMediaDocument](/constructor/inputMediaDocument/).`id` и выставить нужные флаги в [inputMediaDocument](/constructor/inputMediaDocument/)).

Однако полного скачивания и повторной загрузки можно избежать **только для видеоисторий**, когда меняется единственный атрибут [documentAttributeVideo](/constructor/documentAttributeVideo/).`video_start_ts`: в этом случае следует использовать [inputMediaUploadedDocument](/constructor/inputMediaUploadedDocument/), передав в `file` конструктор [inputFileStoryDocument](/constructor/inputFileStoryDocument/) со старым медиа истории вместо заново загруженного [inputFile](/constructor/inputFile/), а остальные поля и атрибуты заполнив ровно теми же значениями, что и раньше, — кроме атрибута [documentAttributeVideo](/constructor/documentAttributeVideo/).`video_start_ts`, который должен содержать новое значение.

#### Закреплённые и архивные истории

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;

---functions---

stories.togglePinned#9a75a1ef peer:InputPeer id:Vector<int> pinned:Bool = Vector<int>;
stories.togglePinnedToTop#0b297e9b peer:InputPeer id:Vector<int> = Bool;

stories.getStoriesArchive#b4352016 peer:InputPeer offset_id:int limit:int = stories.Stories;

stories.getPinnedStories#5821a5dc peer:InputPeer offset_id:int limit:int = stories.Stories;
```

После того как активная история истекает, она автоматически попадает в архив историй: истории в архиве видны только автору либо администраторам канала или супергруппы, обладающим [правом администратора `edit_stories`](/constructor/chatAdminRights/).

Для получения историй из архива используется метод [stories.getStoriesArchive](/method/stories.getStoriesArchive/).

Архивные истории затем можно закрепить в профиле, откуда их смогут получить методом [stories.getPinnedStories](/method/stories.getPinnedStories/) пользователи, которые явно открыли ваш профиль: закрепить или открепить одну или несколько историй в своём профиле позволяет метод [stories.togglePinned](/method/stories.togglePinned/).

Истории также могут закрепляться автоматически по истечении срока, если [при публикации](#posting-stories) был выставлен флаг `pinned`.

Кроме того, закреплённые в профиле истории могут быть **дополнительно** закреплены **в верхней части профиля** методом [stories.togglePinnedToTop](/method/stories.togglePinnedToTop/); истории, закреплённые вверху профиля (не более [stories\_pinned\_to\_top\_count\_max](/api/config/#stories-pinned-to-top-count-max)), следует показывать первыми при открытии профиля.  
Истории, закреплённые вверху профиля, возвращаются первыми при вызове [stories.getPinnedStories](/method/stories.getPinnedStories/) с `offset_id=0`, а их идентификаторы также содержатся в [stories.stories](/constructor/stories.stories/).`pinned_to_top`.

#### Удаление историй

```
---functions---

stories.deleteStories#ae59db5f peer:InputPeer id:Vector<int> = Vector<int>;
```

Метод [stories.deleteStories](/method/stories.deleteStories/) удаляет одну или несколько активных, закреплённых или архивных историй по их идентификаторам, переданным в `id`.

#### Как запретить пользователям смотреть ваши истории

Отдельным пользователям можно запретить просмотр всех ваших историй, добавив их в [чёрный список историй »](/api/block/).

### Прямые эфиры в историях

```
---functions---

stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;
```

Прямой эфир в истории — это прямая трансляция группового звонка, связанная с историей, которую опубликовал пользователь, супергруппа или канал. У каждого пира может быть только один активный эфир в историях.

У эфира в истории есть единственный ведущий, остальные участники подключаются как слушатели.

Эфиры в историях отображаются в списке историй, поддерживают сообщения, реакции, платные комментарии и донаты, а после завершения заменяются своей видеозаписью.

Подробное описание работы с API — создание, публикация, подключение и взаимодействие с эфирами в историях — приведено в разделе [Прямые эфиры в историях »](/api/group-calls/#live-stories).

### Альбомы историй

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;

stories.albumsNotModified#564edaeb = stories.Albums;
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;

---functions---

stories.createAlbum#a36396e5 peer:InputPeer title:string stories:Vector<int> = StoryAlbum;
stories.getAlbums#25b3eac7 peer:InputPeer hash:long = stories.Albums;
stories.updateAlbum#5e5259b6 flags:# peer:InputPeer album_id:int title:flags.0?string delete_stories:flags.1?Vector<int> add_stories:flags.2?Vector<int> order:flags.3?Vector<int> = StoryAlbum;
stories.reorderAlbums#8535fbd9 peer:InputPeer order:Vector<int> = Bool;
stories.deleteAlbum#8d3456d0 peer:InputPeer album_id:int = Bool;

stories.getAlbumStories#ac806d61 peer:InputPeer album_id:int offset:int limit:int = stories.Stories;
```

Истории можно объединять в альбомы.

Метод [stories.createAlbum](/method/stories.createAlbum/) создаёт альбом историй.

Метод [stories.getAlbums](/method/stories.getAlbums/) возвращает все альбомы историй, принадлежащие пользователю.

Метод [stories.getAlbumStories](/method/stories.getAlbumStories/) возвращает истории, добавленные в альбом.

Параметр **albums** метода [stories.sendStory](/method/stories.sendStory/) позволяет добавить только что опубликованную историю в один или несколько альбомов.

Метод [stories.updateAlbum](/method/stories.updateAlbum/) переименовывает альбом, а также добавляет, удаляет и переупорядочивает истории в альбоме.

Метод [stories.reorderAlbums](/method/stories.reorderAlbums/) меняет порядок альбомов в профиле.

Метод [stories.deleteAlbum](/method/stories.deleteAlbum/) удаляет альбом.

В профиле может быть не более [stories\_albums\_limit »](/api/config/#stories-albums-limit) альбомов, в каждом из которых — не более [stories\_album\_stories\_limit](/api/config/#stories-album-stories-limit) историй.

[@term:deep link] Поделиться альбомом можно с помощью [глубоких ссылок на альбомы историй »](/api/links/#story-album-links) (`deep link` — специальная ссылка вида `https://t.me/...`, которая открывается прямо в приложении Telegram).

### Просмотр историй

```
storyItem#16a4b93c flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> music:flags.20?Document = StoryItem;
storyItemSkipped#ffadc913 flags:# close_friends:flags.8?true live:flags.9?true id:int date:int expire_date:int = StoryItem;
storyItemDeleted#51e6ee4f id:int = StoryItem;

peerStories#9a35e999 flags:# peer:Peer max_read_id:flags.0?int stories:Vector<StoryItem> = PeerStories;

storiesStealthMode#712e27fd flags:# active_until_date:flags.0?int cooldown_until_date:flags.1?int = StoriesStealthMode;

stories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;
stories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;

stories.peerStories#cae68768 stories:PeerStories chats:Vector<Chat> users:Vector<User> = stories.PeerStories;

updateReadStories#f74e932b peer:Peer max_id:int = Update;

---functions---

stories.getAllStories#eeb0d625 flags:# next:flags.1?true hidden:flags.2?true state:flags.0?string = stories.AllStories;

stories.getStoriesByID#5774ca74 peer:InputPeer id:Vector<int> = stories.Stories;
stories.getPeerStories#2c4ada50 peer:InputPeer = stories.PeerStories;

stories.readStories#a556dac8 peer:InputPeer max_id:int = Vector<int>;
stories.incrementStoryViews#b2028afb peer:InputPeer id:Vector<int> = Bool;

stories.getAllReadPeerStories#9b5ae7f9 = Updates;
```

[@term:action bar] Активные истории контактов, каналов и супергрупп, на которые подписан пользователь, а также [пользователя со списком изменений](/api/config/#stories-changelog-user-id) следует показывать на панели историй (`action bar` — горизонтальная лента аватарок над списком чатов) главного экрана.  
Полный список активных историй возвращает метод [stories.getAllStories](/method/stories.getAllStories/).

При необходимости можно выставить флаг `hidden` — тогда вместо основного списка историй будут получены [скрытые истории, которые показываются во вкладке архива](#hiding-stories-of-other-users).

[@term:state] Постраничная выборка в этом методе устроена несколько иначе, чем обычно: состояние выборки хранится в строке `state` (непрозрачный маркер, который сервер выдаёт клиенту и который тот возвращает при следующих вызовах).

-   При первом вызове не следует выставлять ни флаг `next`, ни `state`: по завершении RPC-вызова возвращается новая строка `state`, которую нужно сохранить локально, связав её либо с основным, либо со скрытым списком историй (в зависимости от переданного значения `hidden`); во всех последующих вызовах метода передавайте сохранённое значение `state`.
-   Если доступны ещё не полученные истории, в ответе будет выставлен флаг [stories.allStories](/constructor/stories.allStories/).`has_more`: в этом случае клиент должен повторно вызвать метод с только что полученным значением `state` **и** выставленным флагом `next`, чтобы получить новое значение `state` и оставшиеся истории из выбранного списка; повторять это следует до тех пор, пока не закончатся истории (флаг `has_more` **не** будет выставлен).

Когда список историй получен целиком, метод [stories.allStories](/constructor/stories.allStories/) можно вызвать с сохранённым значением `state`, **не** выставляя флаг `next`, — чтобы проверить, не изменился ли список активных историй: если с момента последнего вызова изменений не было, возвращается [stories.allStoriesNotModified](/constructor/stories.allStoriesNotModified/), иначе — [stories.allStories](/constructor/stories.allStories/) (возможно, потребуется дальнейшая постраничная выборка, как описано выше).  
Обратите внимание: изменением сейчас считается только добавление пира в список историй или его удаление оттуда (в том числе перенос в скрытый список и обратно), но не публикация новой истории; о таких изменениях сообщают обычные обновления [updateStory](/constructor/updateStory/).

Изменения в списке активных историй содержатся в поле [stories.allStories](/constructor/stories.allStories/).`peer_stories`: это вектор конструкторов [peerStories](/constructor/peerStories/), по одному на каждого пира, в котором указаны идентификатор пира, идентификатор последней прочитанной истории (если он есть) и список конструкторов [StoryItem](/type/StoryItem/) следующих типов:

-   [storyItem](/constructor/storyItem/) — активная история
-   [storyItemSkipped](/constructor/storyItemSkipped/) — активная история, полная информация о которой опущена из соображений экономии места и производительности; чтобы получить полные сведения о такой истории (или нескольких), используйте метод [stories.getStoriesByID](/method/stories.getStoriesByID/), когда и если они понадобятся
-   [storyItemDeleted](/constructor/storyItemDeleted/) — ранее активная история, которая была удалена

Получить полный список активных историй конкретного пира позволяет также метод [stories.getPeerStories](/method/stories.getPeerStories/).

Метод [stories.readStories](/method/stories.readStories/) отмечает прочитанными все истории заданного пира вплоть до указанного идентификатора: если помечается более новый идентификатор, чем прежде, этот метод рассылает обновление [updateReadStories](/constructor/updateReadStories/) во все активные сессии.  
Метод [stories.getAllReadPeerStories](/method/stories.getAllReadPeerStories/) при первом входе в аккаунт возвращает идентификаторы последних прочитанных историй для всех пиров в виде списка обновлений [updateReadStories](/constructor/updateReadStories/): после входа повторно вызывать его не нужно, поскольку об изменениях идентификатора последней прочитанной истории будут сообщать обновления [updateReadStories](/constructor/updateReadStories/), доставляемые [обычными способами](/api/updates/).

Метод [stories.incrementStoryViews](/method/stories.incrementStoryViews/) увеличивает счётчик просмотров историй, которые пользователь действительно посмотрел (за один раз передаётся не более 200 идентификаторов историй).

#### Сводки о недавних историях

```
recentStory#711d692d flags:# live:flags.0?true max_id:flags.1?int = RecentStory;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

updateReadStories#f74e932b peer:Peer max_id:int = Update;

---functions---

stories.getPeerMaxIDs#78499170 id:Vector<InputPeer> = Vector<RecentStory>;
```

[@term:stories_max_id] Поле `stories_max_id` конструкторов [user](/constructor/user/) и [channel](/constructor/channel/) содержит краткую сводку [recentStory](/constructor/recentStory/) об активных историях пира — компактное описание того, что у него сейчас опубликовано.

Если в сводке установлен флаг `live`, то `max_id` указывает на активный [прямой эфир пира »](#live-stories).

В противном случае `max_id` — это максимальный идентификатор среди активных историй пира.

В любом случае, когда `max_id` больше сохранённого локально максимального идентификатора прочитанной истории этого пира, у пира есть непрочитанные активные истории. Максимальный идентификатор прочитанной истории хранится в поле [peerStories](/constructor/peerStories/).`max_read_id` и обновляется через [updateReadStories](/constructor/updateReadStories/).

Используйте [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/), чтобы обновить эти компактные сводки сразу для списка пиров, не загружая полные конструкторы [StoryItem](/type/StoryItem/). В результате [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/) конструктор [recentStory](/constructor/recentStory/) без единого установленного флага означает, что у пира нет активных историй.

#### Скрытие историй других пользователей

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

---functions---

stories.togglePeerStoriesHidden#bd0415c4 peer:InputPeer hidden:Bool = Bool;

stories.toggleAllStoriesHidden#7c2557c4 hidden:Bool = Bool;
```

Метод [stories.togglePeerStoriesHidden](/method/stories.toggleAllStoriesHidden/) позволяет скрыть активные истории конкретного пира, чтобы они не показывались на панели историй главного экрана.  
Когда истории пользователя помечены как скрытые, в соответствующем конструкторе [user](/constructor/user/) выставляется флаг `stories_hidden`, и такие истории должны отображаться в панели историй только при открытии [папки «Архив»](/api/folders/#peer-folders) — для этого при вызове [stories.getAllStories](/method/stories.getAllStories/) указывается флаг `hidden`, подробнее см. [здесь](#watching-stories).

Учтите, что [папка «Архив» — это папка пиров, куда попадают архивированные чаты](/api/folders/#peer-folders): скрытые истории показываются там исключительно из-за особенности реализации интерфейса, а не потому, что они действительно добавлены в [архивную папку пиров »](/api/folders/#peer-folders) или в [архив историй »](#pinned-or-archived-stories) — это разные вещи.

### Отправка историй в чаты

```
inputMediaStory#89fdd778 peer:InputPeer id:int = InputMedia;

messageMediaStory#68cb6283 flags:# via_mention:flags.1?true peer:Peer id:int story:flags.0?StoryItem = MessageMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

Историю можно отправить сообщением в любой чат — достаточно вызвать [messages.sendMedia](/method/messages.sendMedia/), передав [inputMediaStory](/constructor/inputMediaStory/) со ссылкой на нужную историю.

История будет отправлена как [messageMediaStory](/constructor/messageMediaStory/) и должна отображаться как сообщение, пересланное от автора истории (даже несмотря на то, что метод [messages.forwardMessages](/method/messages.forwardMessages/) не использовался, а поле `fwd_from` конструктора [message](/constructor/message/) **не будет** заполнено).

Сообщение с [messageMediaStory](/constructor/messageMediaStory/) и флагом `via_mention` от автора истории будет создано автоматически ещё и в том случае, если автор упомянул нас в подписи к истории.

### Получение списка взаимодействий

```
storyView#b0bdeac5 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:long date:int reaction:flags.2?Reaction = StoryView;
storyViewPublicForward#9083670b flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true message:Message = StoryView;
storyViewPublicRepost#bd74cf49 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer story:StoryItem = StoryView;

stories.storyViewsList#59d78fc5 flags:# count:int views_count:int forwards_count:int reactions_count:int views:Vector<StoryView> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;

storyReaction#6090d6d5 peer_id:Peer date:int reaction:Reaction = StoryReaction;
storyReactionPublicForward#bbab2643 message:Message = StoryReaction;
storyReactionPublicRepost#cfcd0f13 peer_id:Peer story:StoryItem = StoryReaction;

stories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;

storyViews#8d595cd6 flags:# has_viewers:flags.1?true views_count:int forwards_count:flags.2?int reactions:flags.3?Vector<ReactionCount> reactions_count:flags.4?int recent_viewers:flags.0?Vector<long> = StoryViews;
stories.storyViews#de9eed1d views:Vector<StoryViews> users:Vector<User> = stories.StoryViews;

---functions---

stories.getStoryViewsList#7ed23c57 flags:# just_contacts:flags.0?true reactions_first:flags.2?true forwards_first:flags.3?true peer:InputPeer q:flags.1?string id:int offset:string limit:int = stories.StoryViewsList;

stories.getStoryReactionsList#b9b2881f flags:# forwards_first:flags.2?true peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = stories.StoryReactionsList;

stories.getStoriesViews#28e16cc8 peer:InputPeer id:Vector<int> = stories.StoryViews;
```

[@term:next_offset] Метод [stories.getStoryViewsList](/method/stories.getStoryViewsList/) позволяет получить полный список пользователей, которые как-либо взаимодействовали с конкретной историей, опубликованной нами от лица пользователя; список возвращается в виде набора конструкторов [StoryView](/type/StoryView/). Для постраничной выборки следует передавать полученное значение `next_offset` (маркер продолжения выборки — непрозрачная строка, которую сервер возвращает вместе с очередной порцией результатов), если оно присутствует, в параметр `offset`. Полный список постоянно доступен только пользователям [Premium](/api/premium/); для историй, опубликованных пользователями без [Premium](/api/premium/), он удаляется через [story\_viewers\_expire\_period »](/api/config/#story-viewers-expire-period) секунд после истечения срока жизни истории. Если список всё ещё доступен для просмотра, будет установлен флаг `has_viewers`.

Описанный выше метод применим только к историям, опубликованным пользователями. Чтобы получить практически ту же самую информацию для историй, опубликованных каналами и супергруппами, используйте [stories.getStoryReactionsList](/method/stories.getStoryReactionsList/): данные, возвращаемые обоими методами, действительно почти полностью совпадают, и различия сводятся к следующему:

-   [stories.getStoryViewsList](/method/stories.getStoryViewsList/) можно использовать только для историй, опубликованных текущим пользователем; кроме того, он содержит сведения о просмотрах и о [списке заблокированных](/api/block/).
-   [stories.getStoryReactionsList](/method/stories.getStoryReactionsList/) можно использовать только для историй, опубликованных каналами или супергруппами, администратором которых мы являемся; сведений о просмотрах он не содержит.

В остальном оба метода возвращают информацию о:

-   Реакциях на историю: [storyView](/constructor/storyView/)/[storyReaction](/constructor/storyReaction/)
-   Пересылке истории сообщением в публичный чат или канал: [storyViewPublicForward](/constructor/storyViewPublicForward/)/[storyReactionPublicForward](/constructor/storyReactionPublicForward/)
-   Репостах истории (в виде истории в публичный канал, супергруппу или к пользователю): [storyViewPublicRepost](/constructor/storyViewPublicRepost/)/[storyReactionPublicRepost](/constructor/storyReactionPublicRepost/)

Кроме того, метод [stories.getStoriesViews](/method/stories.getStoriesViews/) позволяет одним-единственным вызовом без постраничной выборки получить сведения о количестве просмотров, количестве пересылок, реакциях и списке недавних зрителей сразу для одной или нескольких историй — разумеется, информации при этом может вернуться меньше, чем при вызове [stories.getStoryViewsList](/method/stories.getStoryViewsList/).

### Ответы на истории

```
inputReplyToStory#5881323a peer:InputPeer story_id:int = InputReplyTo;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

На истории, опубликованные пользователями и супергруппами, можно отвечать с помощью [messages.sendMessage](/method/messages.sendMessage/), [messages.sendMedia](/method/messages.sendMedia/) или любого другого метода отправки сообщений: в поле `reply_to` передаётся конструктор [inputReplyToStory](/constructor/inputReplyToStory/) с идентификатором пользователя, опубликовавшего историю (он же должен быть указан в качестве получателя `peer` этого сообщения), и с идентификатором самой истории.

### Репосты историй

```
storyFwdHeader#b826e150 flags:# modified:flags.3?true from:flags.0?Peer from_name:flags.1?string story_id:flags.2?int = StoryFwdHeader;

storyItem#16a4b93c flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> music:flags.20?Document = StoryItem;

---functions---

stories.sendStory#8f9e6898 flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> music:flags.9?InputDocument = Updates;
```

Истории можно репостить с помощью метода [stories.sendStory](/method/stories.sendStory/), указав в поле `fwd_from_story` идентификатор исходной истории, а в поле `fwd_from_id` — пир, который её опубликовал.

Пользователь вправе изменить историю (например, наложив поверх медиа круглое видео с реакцией); в любом случае в поле `media` обычным порядком передаётся либо изменённое, либо исходное медиа, а если медиа было изменено, дополнительно устанавливается флаг `fwd_modified`.

У репостнутых историй в конструкторе [storyItem](/constructor/storyItem/) будет задано и заполнено поле с конструктором [storyFwdHeader](/constructor/storyFwdHeader/), содержащим сведения об исходной истории.

### Поиск историй

```
foundStory#e87acbc0 peer:Peer story:StoryItem = FoundStory;

stories.foundStories#e2de7737 flags:# count:int stories:Vector<FoundStory> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stories.FoundStories;

---functions---

stories.searchPosts#d1810907 flags:# hashtag:flags.0?string area:flags.1?MediaArea peer:flags.2?InputPeer offset:string limit:int = stories.FoundStories;
```

Метод [stories.searchPosts](/method/stories.searchPosts/) позволяет вести глобальный поиск историй всех пользователей (в том числе не состоящих у нас в контактах, и других пиров, с которыми мы раньше вообще не сталкивались) — либо по хештегу, переданному в `hashtag` (без символа `#`), либо по [метке местоположения](#location-tags), переданной в `area`.

Глобальный поиск следует запускать автоматически при нажатии на хештег в описании истории либо при нажатии на [метку местоположения](#location-tags) (результаты показываются под картой).

Обратите внимание: области [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) доступны для поиска, только если у них задан связанный `address`.

При вызове метода обязательно должен быть задан либо `hashtag`, либо `area`, а `offset` изначально должен быть пустой строкой.  
Постраничная выборка результатов выполняется повторными вызовами метода: в `offset` передаётся значение поля [stories.foundStories](/constructor/stories.foundStories/).`next_offset`, полученное в предыдущем ответе.

### Жалобы на истории

```
inputReportReasonSpam#58dbcab8 = ReportReason;
inputReportReasonViolence#1e22c78d = ReportReason;
inputReportReasonPornography#2e59d922 = ReportReason;
inputReportReasonChildAbuse#adf44ee3 = ReportReason;
inputReportReasonOther#c1e4a2b1 = ReportReason;
inputReportReasonCopyright#9b89f93a = ReportReason;
inputReportReasonGeoIrrelevant#dbd4feed = ReportReason;
inputReportReasonFake#f5ddd6e7 = ReportReason;
inputReportReasonIllegalDrugs#0a8eb2be = ReportReason;
inputReportReasonPersonalDetails#9ec7863d = ReportReason;

---functions---

stories.report#19d8eb45 peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;
```

Для отправки жалобы на одну или несколько историй используется метод [stories.report](/method/stories.report/).

### Ссылки на истории

```
exportedStoryLink#3fc9053b link:string = ExportedStoryLink;

---functions---

stories.exportStoryLink#7b8def20 peer:InputPeer id:int = ExportedStoryLink;
```

Метод [stories.exportStoryLink](/method/stories.exportStoryLink/) создаёт [глубокую ссылку на историю](/api/links/#story-links) для конкретной истории.

Встретив глубокую ссылку на историю, клиент должен открыть указанную историю так, как [описано здесь »](#watching-stories).

Подробнее о глубоких ссылках на истории см. [здесь »](/api/links/#story-links).

[Глубокая ссылка на прямой эфир »](/api/links/#live-story-links) открывает идущий в данный момент прямой эфир пользователя или канала, а [глубокая ссылка на публикацию истории »](/api/links/#post-story-links) открывает редактор историй.

### Медиаобласти

Схема:

```
mediaAreaCoordinates#cfc9e002 flags:# x:double y:double w:double h:double rotation:double radius:flags.0?double = MediaAreaCoordinates;

storyItem#16a4b93c flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> music:flags.20?Document = StoryItem;

---functions---

stories.sendStory#8f9e6898 flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> music:flags.9?InputDocument = Updates;
stories.editStory#2c63a72b flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> music:flags.4?InputDocument = Updates;
```

Истории могут содержать так называемые «медиаобласти» (media areas) — кликабельные прямоугольные участки с анимированными наложениями поверх истории, которые дают дополнительные возможности вроде меток местоположения или реакций.

Координаты и размер каждой медиаобласти задаются конструктором [mediaAreaCoordinates](/constructor/mediaAreaCoordinates/), прикреплённым к каждому [MediaArea](/type/MediaArea/); подробнее см. [на странице конструктора »](/constructor/mediaAreaCoordinates/).

Собранный вектор конструкторов [MediaArea](/type/MediaArea/) передаётся затем в [stories.sendStory](/method/stories.sendStory/) или [stories.editStory](/method/stories.editStory/).

#### Публикации из каналов

Схема:

```
inputMediaAreaChannelPost#2271f2bf coordinates:MediaAreaCoordinates channel:InputChannel msg_id:int = MediaArea;

mediaAreaChannelPost#770416af coordinates:MediaAreaCoordinates channel_id:long msg_id:int = MediaArea;
```

Сообщения из каналов можно репостить в истории с помощью [inputMediaAreaChannelPost](/constructor/inputMediaAreaChannelPost/)/[mediaAreaChannelPost](/constructor/mediaAreaChannelPost/).

Клиент должен загрузить и отобразить копию публикации канала поверх истории в соответствии с полем `coordinates` [медиаобласти](#media-areas): нажатие на медиаобласть должно открывать связанную публикацию.

#### Метки местоположения

Схема:

```
geoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;
geoPointAddress#de4c5d93 flags:# country_iso2:string state:flags.0?string city:flags.1?string street:flags.2?string = GeoPointAddress;

mediaAreaGeoPoint#cad5452d flags:# coordinates:MediaAreaCoordinates geo:GeoPoint address:flags.0?GeoPointAddress = MediaArea;
mediaAreaVenue#be82db9c coordinates:MediaAreaCoordinates geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MediaArea;

inputMediaAreaVenue#b282217f coordinates:MediaAreaCoordinates query_id:long result_id:string = MediaArea;
```

Метки местоположения представлены конструкторами [mediaAreaVenue](/constructor/mediaAreaVenue/) или [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) и связаны с геостикером поверх медиафайла истории, которому соответствует [кликабельная медиаобласть](#media-areas).

У обоих конструкторов есть связанные геокоординаты в виде [geoPoint](/constructor/geoPoint/), а также сведения о кликабельной медиаобласти поверх медиафайла истории в виде конструктора [mediaAreaCoordinates](/constructor/mediaAreaCoordinates/).

Конструктор [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) описывает просто геопозицию с _необязательным_ текстовым адресом.  
Конструктор [mediaAreaVenue](/constructor/mediaAreaVenue/) описывает местоположение конкретного заведения (например, торгового центра, магазина, школы танцев и т. п.) и, помимо координат заведения, содержит текстовое представление адреса, название заведения (`title`), а также тип и идентификатор заведения (`venue_id`/`venue_type`) в формате, поддерживаемом поставщиком данных, который указан в `provider`.

На данный момент единственный поставщик, который необходимо поддерживать, — `foursquare`.

[@term:inline query] Чтобы отправить [mediaAreaVenue](/constructor/mediaAreaVenue/), клиент должен использовать [inputMediaAreaVenue](/constructor/inputMediaAreaVenue/), собранный следующим образом (ниже используется инлайн-запрос, `inline query` — запрос к боту прямо из интерфейса клиента, минуя обычную отправку сообщения):

-   Если пользователь разрешил передавать своё местоположение поставщику данных, отправьте инлайн-запрос инлайн-боту, указанному в [параметре клиентской конфигурации `stories_venue_search_username` »](/api/config/#stories-venue-search-username), как описано в [документации по инлайн-запросам »](/api/bots/inline/), заполнив `geo_point`.  
    Учтите, что это должно происходить незаметно для пользователя, в интерфейсе карты, а не в обычном интерфейсе инлайн-запросов в строке ввода чата.
-   Результаты, возвращённые ботом, содержат список заведений рядом с указанным `geo_point` и должны выводиться в нижней части интерфейса карты; после выбора одного из них соберите [inputMediaAreaVenue](/constructor/inputMediaAreaVenue/) со следующими значениями:
    -   `query_id`: значение `query_id` из [messages.botResults](/constructor/messages.botResults/).
    -   `result_id`: поле `id` выбранного результата.

Повторно использовать существующие конструкторы [mediaAreaVenue](/constructor/mediaAreaVenue/) допускается только при перемещении уже имеющейся метки местоположения во время редактирования истории; при публикации новой истории или при добавлении новой метки местоположения к существующей истории используйте [inputMediaAreaVenue](/constructor/inputMediaAreaVenue/).

[Глобальный поиск историй »](#searching-stories) должен запускаться автоматически при нажатии на местоположение: конструктор [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/)/[mediaAreaVenue](/constructor/mediaAreaVenue/) передаётся в [stories.searchPosts](/method/stories.searchPosts/), а результаты отображаются под картой.

Обратите внимание: области [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) доступны для поиска, только если у них задан связанный `address`.

#### Реакции

Схема:

```
reactionEmoji#1b2286b8 emoticon:string = Reaction;
reactionCustomEmoji#8935fc73 document_id:long = Reaction;

mediaAreaSuggestedReaction#14455871 flags:# dark:flags.0?true flipped:flags.1?true coordinates:MediaAreaCoordinates reaction:Reaction = MediaArea;

updateSentStoryReaction#7d627683 peer:Peer story_id:int reaction:Reaction = Update;

updateNewStoryReaction#1824e40b story_id:int peer:Peer reaction:Reaction = Update;

---functions---

stories.sendReaction#7fd736b2 flags:# add_to_recent:flags.0?true peer:InputPeer story_id:int reaction:Reaction = Updates;
```

[Реакции](/api/reactions/) на истории реализованы обычной кнопкой в интерфейсе, которая позволяет пользователю отправить любую реакцию с помощью метода [stories.sendReaction](/method/stories.sendReaction/).

Вызов этого метода вернёт обновление [updateSentStoryReaction](/constructor/updateSentStoryReaction/) всем активным сессиям.  
Автор истории также получит обновление [updateNewStoryReaction](/constructor/updateNewStoryReaction/), когда пользователь поставит реакцию на его историю, — если такие уведомления включены, как описано [здесь »](/api/reactions/#notifications-about-reactions).

При этом автор истории может дополнительно предложить несколько конкретных реакций в виде простых кликабельных кнопок, используя [медиаобласти »](#media-areas) [mediaAreaSuggestedReaction](/constructor/mediaAreaSuggestedReaction/): они отображаются как круглое «облако мыслей» в стиле комиксов с «хвостиком» справа, с белым фоном и [реакцией »](/api/reactions/) из поля `reaction` в центре.  
Если установлен флаг `dark`, фон должен быть чёрным.  
Если установлен флаг `flipped`, «хвостик» должен располагаться слева. Максимальное число медиаобластей с реакциями, которые можно добавить к одной истории, задаётся ключами конфигурации [`stories_suggested_reactions_limit_*` »](/api/config/#stories-suggested-reactions-limit-default).  
Нажатие на такую кнопку должно, как обычно, вызывать [stories.sendReaction](/method/stories.sendReaction/).

О том, как получить список реакций на [историю](/api/stories/), см. [здесь »](#fetching-the-interaction-list).

#### Ссылки

```
mediaAreaUrl#37381085 coordinates:MediaAreaCoordinates url:string = MediaArea;
```

Медиаобласти со ссылкой представляют собой стикеры, при нажатии на которые пользователю должно предлагаться (в виде всплывающей подсказки на стикере) открыть указанный `url`.

Максимальное число медиаобластей со ссылками, которые можно добавить к одной истории, задаётся ключом конфигурации [`stories_area_url_max` »](/api/config/#stories-area-url-max).

#### Погода

```
mediaAreaWeather#49a6549c coordinates:MediaAreaCoordinates emoji:string temperature_c:double color:int = MediaArea;

---functions---

messages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;
```

Теперь пользователи могут делиться прогнозом погоды в своих историях, добавляя к ним одну погодную медиаобласть, представленную конструктором [mediaAreaWeather](/constructor/mediaAreaWeather/).

Погодная медиаобласть должна отображаться с фоновым цветом ARGB, указанным в `color`, и содержать эмодзи из поля `emoji` (отображаемый как [анимированный эмодзи](/api/animated-emojis/)), за которым следует температура из поля `temperature_c` (в градусах Цельсия; клиент должен пересчитать её в градусы Фаренгейта, если этого требуют настройки устройства), а затем `°C` или `°F` — в зависимости от используемой единицы измерения.

Чтобы получить текущую температуру и эмодзи для _создания_ погодной медиаобласти при публикации истории, клиент должен внутренне отправить [инлайн-запрос](/api/bots/inline/) методом [messages.getInlineBotResults](/method/messages.getInlineBotResults/) боту `bot`, указанному в параметре клиентской конфигурации [weather\_search\_username](/api/config/#weather-search-username), передав текущее местоположение пользователя в `geo_point` и [inputPeerEmpty](/constructor/inputPeerEmpty/) в `peer`.  
Этот запрос вернёт один результат [botInlineResult](/constructor/botInlineResult/): нужный `emoji` будет содержаться в поле [botInlineResult](/constructor/botInlineResult/).`title`, а температура (всегда в градусах Цельсия) — в поле [botInlineResult](/constructor/botInlineResult/).`description` (там будет только значение без единицы измерения, чтобы его легко было привести к типу double).

Инлайн-запрос должен выполняться клиентом внутренне, когда пользователь создаёт новую погодную медиаобласть: не через обычный интерфейс инлайн-запросов, а как обычный вызов API для получения погоды по текущему местоположению пользователя.

Если параметр клиентской конфигурации [story\_weather\_preload](/api/config/#story-weather-preload) равен true, клиент должен заранее загружать погоду описанным выше способом при запуске (а не только в момент создания погодной медиаобласти).

#### Коллекционные подарки

Схема:

```
mediaAreaStarGift#5787686d coordinates:MediaAreaCoordinates slug:string = MediaArea;
```

[@term:slug] Принадлежащими пользователю [коллекционными подарками »](/api/gifts/#collectible-gifts) можно делиться в истории с помощью [mediaAreaStarGift](/constructor/mediaAreaStarGift/), содержащего `slug` (короткий текстовый идентификатор объекта, пригодный для подстановки в ссылку) из поля [starGiftUnique](/constructor/starGiftUnique/).`slug`, который разрешается [как описано здесь »](/api/gifts/#sharing-and-getting-info-about-a-collectible-gift).

### Режим невидимки

[@term:stealth mode] [Пользователи Premium](/api/premium/) могут включить [режим невидимки](https://telegram.org/tour/stories#stealth-mode) (`stealth mode` — режим скрытого просмотра): он стирает их просмотры со всех историй, открытых за последние [`stories_stealth_past_period` секунд »](/api/config/#stories-stealth-past-period), и скрывает их просмотры историй в течение следующих [`stories_stealth_future_period` секунд »](/api/config/#stories-stealth-future-period), как указано в [клиентской конфигурации »](/api/config/#client-configuration).

Схема:

```
storiesStealthMode#712e27fd flags:# active_until_date:flags.0?int cooldown_until_date:flags.1?int = StoriesStealthMode;

updateStoriesStealthMode#2c084dc1 stealth_mode:StoriesStealthMode = Update;

---functions---

stories.activateStealthMode#57bbd166 flags:# past:flags.0?true future:flags.1?true = Updates;
```

Чтобы включить режим невидимки, следует вызвать [stories.activateStealthMode](/method/stories.activateStealthMode/), передав флаг `past` — чтобы стереть просмотры историй, открытых за последние [`stories_stealth_past_period` секунд »](/api/config/#stories-stealth-past-period), и (или) флаг `future` — чтобы скрыть будущие просмотры историй в течение следующих [`stories_stealth_future_period` секунд »](/api/config/#stories-stealth-future-period).

[@term:cooldown period] Клиенты могут вызывать этот метод не чаще, чем раз в [`stories_stealth_cooldown_period` секунд](/api/config/#stories-stealth-cooldown-period), как указано в [клиентской конфигурации](/api/config/#client-configuration): вызов метода до истечения периода ожидания (`cooldown period` — обязательная пауза между повторными вызовами) приведёт к ошибке `FLOOD_WAIT_X`, где `X` — число секунд, оставшихся до конца этого периода.

В ответ будет возвращён конструктор [updateStoriesStealthMode](/constructor/updateStoriesStealthMode/), содержащий следующие поля:

-   `active_until_date` — дата, до которой режим невидимки будет активен
-   `cooldown_until_date` — дата, начиная с которой пользователю будет разрешено снова вызвать [stories.activateStealthMode](/method/stories.activateStealthMode/); вызов метода раньше этого момента вернёт ошибку `FLOOD_WAIT_X`, как описано выше.

### Статистика

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;

publicForwardMessage#01f2bf4a message:Message = PublicForward;
publicForwardStory#edf3add0 peer:Peer story:StoryItem = PublicForward;

stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;

---functions---

stats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;

stats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;
```

Метод [stats.getStoryStats](/method/stats.getStoryStats/) позволяет получить статистику по истории; возвращаемые графики [StatsGraph](/type/StatsGraph/) отрисовываются [как описано здесь »](/api/stats/#graph-visualization).

Метод [stats.getStoryPublicForwards](/method/stats.getStoryPublicForwards/) позволяет получить пересылки истории в виде сообщения в публичные чаты, а также репосты публичными каналами.
