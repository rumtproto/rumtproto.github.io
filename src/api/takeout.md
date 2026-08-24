---
title: "Takeout API"
original: "https://core.telegram.org/api/takeout"
section: api
description: "API Telegram позволяет пользователю выгрузить всю свою информацию через takeout API (API выгрузки данных)."
layout: layout.njk
---

# Takeout API

[@term:takeout] API Telegram позволяет пользователям выгрузить всю свою информацию через takeout API — API выгрузки данных, то есть особый режим сессии, в котором клиент разом выкачивает все данные аккаунта.

```
account.takeout#4dba4501 id:long = account.Takeout;

inputTakeoutFileLocation#29be5899 = InputFileLocation;

---functions---

account.initTakeoutSession#8ef3eab0 flags:# contacts:flags.0?true message_users:flags.1?true message_chats:flags.2?true message_megagroups:flags.3?true message_channels:flags.4?true files:flags.5?true file_max_size:flags.5?long = account.Takeout;

invokeWithTakeout#aca9fd2e {X:Type} takeout_id:long query:!X = X;

account.finishTakeoutSession#1d2652ee flags:# success:flags.0?true = Bool;
```

С помощью [account.initTakeoutSession](/method/account.initTakeoutSession/) инициализируйте сессию выгрузки: передайте нужные флаги, чтобы разрешить использование соответствующих методов, как описано ниже.

При вызове описанных ниже методов каждый запрос обязан быть обёрнут в [invokeWithTakeout](/method/invokeWithTakeout/) со значением `id`, которое вернул [account.initTakeoutSession](/method/account.initTakeoutSession/).

По завершении выгрузки закройте сессию методом [account.finishTakeoutSession](/method/account.finishTakeoutSession/) (как обычно, обернув его в [invokeWithTakeout](/method/invokeWithTakeout/)).

### Флаги сессии

Флаги, передаваемые в [account.initTakeoutSession](/method/account.initTakeoutSession/), обязаны разрешать ровно те данные, которые пользователь выбрал для выгрузки:

-   `contacts` => пользователь хочет выгрузить свой [список контактов](#contacts).
-   `message_users` => пользователь хочет выгрузить сообщения из личных чатов с пользователями и/или ботами.
-   `message_chats` => пользователь хочет выгрузить сообщения из обычных групп ([chat](/constructor/chat/)).
-   `message_megagroups` => пользователь хочет выгрузить сообщения из супергрупп; кроме того, устанавливайте этот флаг вместе с `message_chats` при выгрузке сообщений обычных групп, чтобы получить сообщения супергрупп, [преобразованных](#left-channels) из обычной группы.
-   `message_channels` => пользователь хочет выгрузить сообщения из каналов.
-   `files` => пользователь хочет скачивать медиафайлы: устанавливайте флаг, если хотя бы один тип медиа скачивается с ненулевым ограничением размера на файл, а также если выгружаются [фотографии профиля](#profile-pictures) или [истории](#stories).
-   `file_max_size` => максимальный размер скачиваемых файлов в байтах; заполняется всегда, когда заполнен `files`.

Перед началом вызовите [users.getUsers](/method/users.getUsers/) с [inputUserSelf](/constructor/inputUserSelf/), чтобы получить ID текущего пользователя: он нужен, чтобы отличать входящие сообщения от исходящих и чтобы выгружать [только собственные сообщения пользователя](#chats-groups-and-channels), если он этого попросил.

Чтобы завершить выгрузку, вызовите [account.finishTakeoutSession](/method/account.finishTakeoutSession/) с установленным флагом `success`.  
Чтобы прервать выгрузку, вызовите [account.finishTakeoutSession](/method/account.finishTakeoutSession/), не устанавливая флаг `success`.

### Порядок действий

Пример реализации: [tdesktop](https://github.com/telegramdesktop/tdesktop/tree/dev/Telegram/SourceFiles/export).

Ниже — обзор шагов, необходимых для выгрузки информации об аккаунте.

Все запросы обязаны быть обёрнуты в конструктор [invokeWithTakeout](/method/invokeWithTakeout/), включая вызовы [upload.getFile](/method/upload.getFile/) для сохранения файлов.

### Чаты, группы и каналы

#### Диапазоны разбиения

```
messageRange#0ae30253 min_id:int max_id:int = MessageRange;

---functions---

messages.getSplitRanges#1cff7e08 = Vector<MessageRange>;

invokeWithMessagesRange#365275f2 {X:Type} range:MessageRange query:!X = X;
```

Постраничная выборка по диапазонам сообщений нужна **только** для [выгрузки личных чатов, обычных групп, супергрупп и каналов »](#dialog-and-message-export).

Прежде всего получите список диапазонов сообщений, вызвав [messages.getSplitRanges](/method/messages.getSplitRanges/) (как обычно, обернув вызов в [invokeWithTakeout](/method/invokeWithTakeout/)).

Затем, вызывая [messages.getDialogs](/method/messages.getDialogs/), [messages.getHistory](/method/messages.getHistory/) и [messages.getMessages](/method/messages.getMessages/) так, как указано [ниже](#dialog-and-message-export), оборачивайте метод в [invokeWithMessagesRange](/method/invokeWithMessagesRange/), а затем, как обычно, ещё и в [invokeWithTakeout](/method/invokeWithTakeout/).

Начните с первого диапазона сообщений; продолжайте передавать тот же диапазон, пока идёт постраничная выборка [обычными параметрами `offset_*`, `limit` и т. д. »](/api/offsets/); как только результаты закончатся, переходите к следующему диапазону, начиная выборку по `offset_*`, `limit` заново.  
Повторяйте, пока не будут пройдены все диапазоны сообщений, возвращённые методом [messages.getSplitRanges](/method/messages.getSplitRanges/).

Если выбранные типы чатов ограничены публичными супергруппами и каналами, то есть не включают личные чаты с пользователями, чаты с ботами и обычные группы, для постраничной выборки диалогов и сообщений достаточно использовать только последний возвращённый диапазон сообщений.

#### Выгрузка диалогов и сообщений

```
---functions---

messages.getDialogs#a0f4cb4f flags:# exclude_pinned:flags.0?true folder_id:flags.1?int offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.Dialogs;

messages.getHistory#4423e6c5 peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;

messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

Если пользователь хочет скачать сообщения из личных чатов, обычных групп, супергрупп или каналов, сначала получите и сохраните список диалогов с помощью [диапазонов разбиения](#split-ranges) и метода [messages.getDialogs](/method/messages.getDialogs/); в начале каждого используемого диапазона разбиения делайте первый запрос со всеми смещениями, равными `0`, и `limit=1`, чтобы получить общее число диалогов `count` и показать корректный индикатор прогресса.

[Запросите и сохраните сведения о покинутых каналах и супергруппах](#left-channels), если пользователь хочет выгрузить сообщения каналов и групп.

Для каждого диалога, возвращённого методом [messages.getDialogs](/method/messages.getDialogs/), запомните диапазон сообщений, использованный в вернувшем его запросе; если один и тот же диалог возвращён в нескольких диапазонах, сохраните их все.  
Для всех диалогов, которые подходят под выбранные пользователем типы диалогов, скачайте все сообщения методом [messages.getHistory](/method/messages.getHistory/), обёрнутым в каждый запомненный [диапазон разбиения](#split-ranges); для каждого такого диапазона делайте первый запрос со всеми смещениями, равными `0`, и `limit=1`, чтобы узнать начальное число сообщений и показать корректный индикатор прогресса.  
По единственному сообщению, полученному в первом запросе с `limit=1`, отсеивайте также диапазоны, в которых сообщений нет вовсе, — в этом случае возвращается пустой вектор `messages` либо единственный [messageEmpty](/constructor/messageEmpty/).  
Если пользователь дополнительно выбрал скачивание сообщений только за определённый интервал дат, пропускайте диапазоны, у которых:

-   Последнее сообщение (полученное тем же первым запросом с `limit=1`) имеет `date` больше верхней границы заданного интервала дат.
-   Первое сообщение (полученное новым вызовом [messages.getHistory](/method/messages.getHistory/) с `limit=1`, `offset_id=1`, `add_offset=-1`) имеет `date` меньше нижней границы заданного интервала дат.

Для каждого скачанного и сохранённого сообщения скачивайте и сохраняйте также все вложенные медиафайлы, включая [пользовательские эмодзи](#custom-emojis) в тексте сообщений и подписях, соблюдая заданные пользователем ограничения размера на файл.  
Сообщения, относящиеся к [темам форума](#forum-topics), можно получать отдельно, тема за темой.

Если пользователь выбрал скачивание только собственных сообщений, без сообщений других пользователей, используйте [messages.search](/method/messages.search/) вместо [messages.getHistory](/method/messages.getHistory/): укажите в `peer` выгружаемый чат, а в `from_id` — [inputPeerSelf](/constructor/inputPeerSelf/) (для [монофорумов »](/api/monoforum/) вместо этого укажите в `from_id` [связанный канал »](/api/monoforum/)).  
Если вызов [messages.getHistory](/method/messages.getHistory/) завершается ошибкой `CHANNEL_PRIVATE` (например, потому что пользователь покинул канал или был из него удалён), переключитесь на вариант с [messages.search](/method/messages.search/) и `from_id`, чтобы получить собственные сообщения пользователя.

### Истории

```
---functions---

stories.getStoriesArchive#b4352016 peer:InputPeer offset_id:int limit:int = stories.Stories;
```

Если пользователь хочет выгрузить свои [истории »](/api/stories/), используйте [stories.getStoriesArchive](/method/stories.getStoriesArchive/) с [inputPeerSelf](/constructor/inputPeerSelf/), чтобы получить, скачать и сохранить все опубликованные истории.  
Постраничная выборка выполняется так: передавайте `id` последней полученной истории как `offset_id` следующего запроса, с `limit=100`, пока не вернётся пустая страница; поле `count` содержит общее число историй — его удобно использовать для индикатора прогресса.

### Личные данные

```
---functions---

users.getFullUser#b60f5918 id:InputUser = users.UserFull;
```

Если пользователь хочет выгрузить личные данные, вызовите [users.getFullUser](/method/users.getFullUser/) с [inputUserSelf](/constructor/inputUserSelf/) и сохраните результат.

### Фотографии профиля

```
---functions---

photos.getUserPhotos#91cd32a8 user_id:InputUser offset:int max_id:long limit:int = photos.Photos;
```

Если пользователь хочет выгрузить собственные фотографии профиля, вызовите [photos.getUserPhotos](/method/photos.getUserPhotos/) с [inputUserSelf](/constructor/inputUserSelf/), чтобы получить их список и скачать все фотографии профиля.  
Постраничная выборка выполняется так: передавайте `id` последней полученной фотографии как `max_id` следующего запроса, с `offset=0` и `limit=100`, пока не вернётся пустая страница; поле `count` конструктора [photos.photosSlice](/constructor/photos.photosSlice/) содержит общее число фотографий.

### Сессии

```
---functions---

account.getAuthorizations#e320c158 = account.Authorizations;

account.getWebAuthorizations#182e6d6f = account.WebAuthorizations;
```

Если пользователь хочет выгрузить свои сессии, вызовите [account.getAuthorizations](/method/account.getAuthorizations/) и [account.getWebAuthorizations](/method/account.getWebAuthorizations/) и сохраните их результаты.

О том, как скачать все медиафайлы и файлы, на которые ссылаются выгруженные данные, см. [здесь »](#downloading-files).

### Контакты

```
savedPhoneContact#1142bd56 phone:string first_name:string last_name:string date:int = SavedContact;

---functions---

contacts.getSaved#82f1e39f = Vector<SavedContact>;
```

Используйте [contacts.getSaved](/method/contacts.getSaved/), чтобы выгрузить полный список контактов; [здесь »](/api/contacts/#fetching-the-contact-list) описан другой способ, которым можно получить полный список всех контактов, имеющих аккаунт Telegram, без сессии выгрузки данных.

При необходимости номер телефона каждого сохранённого контакта можно сопоставить с идентификатором пользователя через [contacts.resolvePhone](/method/contacts.resolvePhone/).

Затем выгрузите также топ-пиры пользователя: вызовите [contacts.getTopPeers](/method/contacts.getTopPeers/) с установленными флагами `correspondents`, `bots_inline` и `phone_calls`, выполняя постраничную выборку с помощью `offset` и `limit=100` (`hash=0`) до тех пор, пока для каждой возвращённой категории [topPeerCategoryPeers](/constructor/topPeerCategoryPeers/) не выполнится условие `offset + len(peers) >= count` (то есть пока все категории не будут загружены полностью).  
Результат [contacts.topPeersDisabled](/constructor/contacts.topPeersDisabled/) означает, что получать больше нечего.

### Покинутые каналы

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;

---functions---

channels.getLeftChannels#8341ecc0 offset:int = messages.Chats;
```

Используйте [channels.getLeftChannels](/method/channels.getLeftChannels/), чтобы получить список каналов или супергрупп, которые мы покинули, выполняя постраничную выборку с помощью `offset` (увеличивая его на число возвращённых конструкторов [chat](/constructor/chat/)) до тех пор, пока не вернётся [messages.chats](/constructor/messages.chats/) или пустая страница [messages.chatsSlice](/constructor/messages.chatsSlice/); поле `count` конструктора [messages.chatsSlice](/constructor/messages.chatsSlice/) содержит общее число покинутых каналов.

При выгрузке сообщений групп супергруппа, [преобразованная »](/api/channel/) из обычной группы, несёт также историю исходной обычной группы: к такой супергруппе — конструктору [channel](/constructor/channel/) с полем `migrated_from_chat_id` — следует добавить сообщения этой обычной группы, а саму отдельную обычную группу пропустить, чтобы не дублировать историю.

### Музыка в профиле

```
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;

---functions---

users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;
```

Используйте [users.getSavedMusic](/method/users.getSavedMusic/) с [inputUserSelf](/constructor/inputUserSelf/), чтобы получить список музыкальных документов, закреплённых пользователем в профиле; выгружайте только возвращённые аудиодокументы и их миниатюры.  
Постраничная выборка выполняется с помощью `offset`, `limit=100` и `hash=0`.  
Остановитесь, когда вернётся меньше `limit` документов.

### Темы форума

```
---functions---

channels.getMessages#ad8c9a23 channel:InputChannel id:Vector<InputMessage> = messages.Messages;

messages.getReplies#22ddd30c peer:InputPeer msg_id:int offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

Сообщения [темы форума »](/api/forum/) можно выгрузить отдельно от остальной истории супергруппы.

Сначала получите корневое сообщение темы, вызвав [channels.getMessages](/method/channels.getMessages/) и передав [inputMessageID](/constructor/inputMessageID/) с идентификатором корневого сообщения темы.

Затем получите все ответы в теме через [messages.getReplies](/method/messages.getReplies/), передав идентификатор корневого сообщения темы в `msg_id`; выполните первый запрос с `offset_id=0`, `add_offset=0`, `limit=100`, чтобы узнать общее число `count`, а далее листайте выборку, устанавливая `offset_id` равным идентификатору последнего полученного сообщения плюс один, с `add_offset=-100` и `limit=100`, пока не вернётся пустая страница или не будет достигнуто общее число сообщений `count`.

Медиафайлы и [пользовательские эмодзи](#custom-emojis) каждого сообщения темы скачивайте и сохраняйте так же, как для обычных сообщений.

### Пользовательские эмодзи

```
---functions---

messages.getCustomEmojiDocuments#d9ab0f54 document_id:Vector<long> = Vector<Document>;
```

Сообщения, подписи и [реакции »](/api/reactions/) могут содержать [пользовательские эмодзи »](/api/custom-emoji/), на которые ссылаются только по идентификатору документа — через сущности оформления [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/) и реакции [reactionCustomEmoji](/constructor/reactionCustomEmoji/).

Соберите идентификаторы документов всех упомянутых пользовательских эмодзи и получите по ним конструкторы [document](/constructor/document/) вызовом [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/) (не более 100 идентификаторов на запрос), после чего скачайте каждый полученный документ и сохраните его файлом рядом с сообщением.  
Идентификаторы документов, для которых получить документ не удалось (метод их не вернул либо запрос завершился ошибкой), следует считать недоступными.

### Скачивание файлов

```
---functions---

upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

Все медиафайлы — вложения сообщений, фотографии профиля, истории, музыка профиля, пользовательские эмодзи и миниатюры — скачиваются методом [upload.getFile](/method/upload.getFile/), обёрнутым в [invokeWithTakeout](/method/invokeWithTakeout/), как и любой другой запрос, и отправляются в соответствующий медиа-DC.

Скачивайте файлы с учётом выбранного пользователем ограничения на размер одного файла, пропуская файлы больше этого предела.

Обрабатывайте следующие ошибки:

-   `TAKEOUT_FILE_EMPTY` => возвращается для JSON-дампа [inputTakeoutFileLocation](/constructor/inputTakeoutFileLocation/) (см. [ниже](#other-data)), когда дополнительных данных для выгрузки нет: считайте файл пустым.

-   `LOCATION_INVALID`, `VERSION_INVALID`, `LOCATION_NOT_AVAILABLE` => файл больше недоступен, пропустите его.

-   [@term:file_reference] `FILE_REFERENCE_*` (ошибка `400`, тип которой начинается с `FILE_REFERENCE_`) => [ссылка на файл »](/api/file-references/) (`file_reference` — короткоживущий маркер источника, без которого файл не скачать) истекла, и её нужно обновить, повторно получив исходный объект; после этого вызов [upload.getFile](/method/upload.getFile/) следует повторить с того же `offset` уже с новой ссылкой:

    -   Для файлов, вложенных в [историю »](/api/stories/), получите её заново методом [stories.getStoriesByID](/method/stories.getStoriesByID/).
    -   Для файлов, вложенных в сообщение канала или супергруппы, получите его заново методом [channels.getMessages](/method/channels.getMessages/).
    -   Для файлов, вложенных в любое другое сообщение, получите его заново методом [messages.getMessages](/method/messages.getMessages/), обёрнутым в тот [диапазон разбиения](#split-ranges), которому принадлежит сообщение.

    Если обновлённый объект не даёт новой ссылки на файл, файл следует считать недоступным.

### Прочие данные

```
inputTakeoutFileLocation#29be5899 = InputFileLocation;
```

Любые персональные данные, относящиеся к возможностям, для которых пока нет отдельного метода выгрузки (например, данные недавно появившихся функций Telegram), можно выгрузить вызовом [upload.getFile](/method/upload.getFile/) с [inputTakeoutFileLocation](/constructor/inputTakeoutFileLocation/): так скачивается один JSON-файл со всеми такими данными, либо вызов завершается ошибкой `TAKEOUT_FILE_EMPTY`, если выгружать нечего.
