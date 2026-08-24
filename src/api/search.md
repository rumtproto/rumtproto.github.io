---
title: "Поиск и фильтры"
original: "https://core.telegram.org/api/search"
section: api
description: "Telegram позволяет применять детальные фильтры сообщений при поиске сообщений в чатах."
layout: layout.njk
---

# Поиск и фильтры

Telegram позволяет применять детальные фильтры сообщений при поиске сообщений в чатах.

### Фильтры поиска

```
inputMessagesFilterEmpty#57e2f66c = MessagesFilter;
inputMessagesFilterPhotos#9609a51c = MessagesFilter;
inputMessagesFilterVideo#9fc00e65 = MessagesFilter;
inputMessagesFilterPhotoVideo#56e9f0e4 = MessagesFilter;
inputMessagesFilterDocument#9eddf188 = MessagesFilter;
inputMessagesFilterUrl#7ef0dd87 = MessagesFilter;
inputMessagesFilterGif#ffc86587 = MessagesFilter;
inputMessagesFilterVoice#50f5c392 = MessagesFilter;
inputMessagesFilterMusic#3751b49e = MessagesFilter;
inputMessagesFilterChatPhotos#3a20ecb8 = MessagesFilter;
inputMessagesFilterPhoneCalls#80c99768 flags:# missed:flags.0?true = MessagesFilter;
inputMessagesFilterRoundVoice#7a7c17a4 = MessagesFilter;
inputMessagesFilterRoundVideo#b549da53 = MessagesFilter;
inputMessagesFilterMyMentions#c1f8e69a = MessagesFilter;
inputMessagesFilterGeo#e7026d0d = MessagesFilter;
inputMessagesFilterContacts#e062db83 = MessagesFilter;
inputMessagesFilterPinned#1bb00451 = MessagesFilter;

messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;

---functions---

messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;

messages.searchGlobal#4bc6589a flags:# broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;
```

При использовании [messages.search](/method/messages.search/) или [messages.searchGlobal](/method/messages.searchGlobal/) можно применить определённый фильтр сообщений.  
Это позволяет серверу отбирать сообщения по текстовому запросу и даже по их типу; графические клиенты часто используют такую возможность, чтобы реализовать галерею чата, фотографии профиля чата и не только. Доступные фильтры:

-   [inputMessagesFilterPhotos](/constructor/inputMessagesFilterPhotos/) — возвращает только фотографии; применяется для галереи фотографий чата, а также при пролистывании влево и вправо во время просмотра фотографии
-   [inputMessagesFilterVideo](/constructor/inputMessagesFilterVideo/) — возвращает только видео; применяется для видеогалереи чата, а также при пролистывании влево и вправо во время просмотра видео
-   [inputMessagesFilterPhotoVideo](/constructor/inputMessagesFilterPhotoVideo/) — возвращает только видео и фотографии; применяется для медиагалереи чата
-   [inputMessagesFilterDocument](/constructor/inputMessagesFilterDocument/) — возвращает только видео и фотографии; применяется для галереи документов чата
-   [inputMessagesFilterUrl](/constructor/inputMessagesFilterUrl/) — возвращает только сообщения со ссылками; применяется для галереи ссылок чата
-   [inputMessagesFilterGif](/constructor/inputMessagesFilterGif/) — возвращает только GIF; применяется для галереи GIF чата
-   [inputMessagesFilterVoice](/constructor/inputMessagesFilterVoice/) — возвращает только голосовые сообщения; применяется для галереи голосовых сообщений чата, а также для последовательного воспроизведения голосовых сообщений в чате
-   [inputMessagesFilterMusic](/constructor/inputMessagesFilterMusic/) — возвращает только музыкальные файлы; применяется для музыкальной галереи чата
-   [inputMessagesFilterChatPhotos](/constructor/inputMessagesFilterChatPhotos/) — возвращает только фотографии чата; позволяет пролистывать историю фотографий профиля группы
-   [inputMessagesFilterPhoneCalls](/constructor/inputMessagesFilterPhoneCalls/) — возвращает только звонки; используется вместе с [messages.searchGlobal](/method/messages.searchGlobal/) для реализации вкладки звонков с историей вызовов
-   [inputMessagesFilterRoundVoice](/constructor/inputMessagesFilterRoundVoice/) — возвращает только круглые видео и голосовые сообщения; применяется для последовательного воспроизведения круглых видео и голосовых сообщений в чате
-   [inputMessagesFilterRoundVideo](/constructor/inputMessagesFilterRoundVideo/) — возвращает только круглые видео; применяется для последовательного воспроизведения круглых видео в чате
-   [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/) — возвращает только сообщения с упоминанием меня; может использоваться для отображения [истории упоминаний](/api/mentions/) либо, в сочетании с другим фильтром или запросом, для получения только тех сообщений, которые удовлетворяют определённому условию и содержат упоминание.
-   [inputMessagesFilterGeo](/constructor/inputMessagesFilterGeo/) — возвращает только геолокации; применяется, чтобы получить все недавние действующие [геолокации или трансляции местоположения](/api/live-location/), отправленные в группе, и показать их все на одной карте
-   [inputMessagesFilterContacts](/constructor/inputMessagesFilterContacts/) — возвращает только контакты
-   [inputMessagesFilterPinned](/constructor/inputMessagesFilterPinned/) — возвращает только [закреплённые сообщения](/api/pin/); применяется для реализации списка закреплённых сообщений

[@term:offset_id_offset] Возвращаемые конструкторы [messages.Messages](/type/messages.Messages/) содержат параметры [постраничной выборки](/api/offsets/), сами сообщения и два параметра — `offset_id_offset` (порядковый номер первого возвращённого сообщения в общей выборке) и `count` (общее число найденных сообщений), — по которым можно показать счётчик вида `progress/total`, например `фото 134 из 200`.  
Скажем, при показе галереи фотографий чата сверху можно вывести индикатор `фото ${offset_id_offset} из ${count}`.

#### Счётчики поиска

```
messages.searchCounter#e844ebff flags:# inexact:flags.1?true filter:MessagesFilter count:int = messages.SearchCounter;

---functions---

messages.getSearchCounters#1bbcf300 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer top_msg_id:flags.0?int filters:Vector<MessagesFilter> = Vector<messages.SearchCounter>;
```

Счётчики чата с фильтрами можно получить и без загрузки самих сообщений — как показано в схеме выше.

### Глобальный поиск

Экран глобального поиска следует разделить на несколько вкладок:

-   [Вкладка чатов](#chats-tab)
-   [Вкладка каналов](#channels-tab)
-   [Вкладка приложений](#apps-tab)
-   [Вкладка медиа](#media-tab)
-   [Вкладка загрузок](#downloads-tab)
-   [Вкладка ссылок](#links-tab)
-   [Вкладка файлов](#files-tab)
-   [Вкладка музыки](#music-tab)
-   [Вкладка голосовых сообщений](#voice-messages-tab)

#### Вкладка чатов

```
topPeerCategoryCorrespondents#0637b7ed = TopPeerCategory;
topPeerCategoryBotsPM#ab661b5b = TopPeerCategory;
topPeerCategoryGroups#bd17a14a = TopPeerCategory;
topPeerCategoryChannels#161d9628 = TopPeerCategory;

contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;

messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;

---functions---

contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true bots_guestchat:flags.17?true offset:int limit:int hash:long = contacts.TopPeers;

messages.searchGlobal#4bc6589a flags:# broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;
```

[@term:peer] Содержит результаты — пиры (`peer` — любой адресат: пользователь, чат или канал) и сообщения — из всех личных и секретных чатов, приватных и публичных групп, приватных и публичных каналов, разбитые на следующие разделы:

-   `Frequent contacts`: содержит аватары и имена наиболее часто используемых пользователей, отсортированные [как описано здесь »](/api/top-rating/) (категория [topPeerCategoryCorrespondents](/constructor/topPeerCategoryCorrespondents/)).
-   `Recent`: содержит аватары и имена наиболее часто используемых пиров (пользователей, чатов и каналов), отсортированные [как описано здесь »](/api/top-rating/) (категории [topPeerCategoryCorrespondents](/constructor/topPeerCategoryCorrespondents/), [topPeerCategoryBotsPM](/constructor/topPeerCategoryBotsPM/), [topPeerCategoryGroups](/constructor/topPeerCategoryGroups/), [topPeerCategoryChannels](/constructor/topPeerCategoryChannels/)).

Поиск во вкладке чатов должен вызывать [messages.searchGlobal](/method/messages.searchGlobal/), заменяя перечисленные выше разделы списком пиров (аватар и имя) и сообщений (не более одного сообщения на пир).

#### Вкладка каналов

```
topPeerCategoryChannels#161d9628 = TopPeerCategory;

contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;

messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;

messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;

---functions---

contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true bots_guestchat:flags.17?true offset:int limit:int hash:long = contacts.TopPeers;

channels.getChannelRecommendations#25a71742 flags:# channel:flags.0?InputChannel = messages.Chats;

messages.searchGlobal#4bc6589a flags:# broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;

bots.getPopularAppBots#c2510192 offset:string limit:int = bots.PopularAppBots;
```

Содержит результаты только из приватных и публичных каналов, разбитые на следующие разделы:

-   `Channels you joined`: содержит аватары и имена наиболее часто используемых каналов, отсортированные [как описано здесь »](/api/top-rating/) (категория [topPeerCategoryChannels](/constructor/topPeerCategoryChannels/)).
-   `Similar channels`: содержит аватары и имена рекомендованных публичных каналов, похожих на те, на которые текущий пользователь уже подписан; они запрашиваются методом [channels.getChannelRecommendations](/method/channels.getChannelRecommendations/) без указания флага `channel`, подробнее см. [здесь »](/api/recommend/).

Поиск во вкладке каналов должен вызывать [messages.searchGlobal](/method/messages.searchGlobal/) с установленным флагом `broadcasts_only`, заменяя перечисленные выше разделы списком пиров (аватар, имя и найденное сообщение — не более одной строки на пир).

#### Вкладка приложений

```
topPeerCategoryBotsApp#fd9e7bec = TopPeerCategory;

contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;

bots.popularAppBots#1991b13b flags:# next_offset:flags.0?string users:Vector<User> = bots.PopularAppBots;

// Parse only the `users` field of the following constructors (ignoring messages.channelMessages)
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;

---functions---

contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true bots_guestchat:flags.17?true offset:int limit:int hash:long = contacts.TopPeers;

bots.getPopularAppBots#c2510192 offset:string limit:int = bots.PopularAppBots;

messages.searchGlobal#4bc6589a flags:# broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;
```

[@term:Mini App] Используется для реализации [Mini App Store](https://telegram.org/blog/w3-browser-mini-app-store#mini-app-store) — каталога Mini App, то есть мини-приложений, которые выполняются внутри клиента Telegram.

Содержит только ботов со связанным приложением [Main Mini App](/api/bots/webapps/#main-mini-apps) (то есть тех, у кого выставлен флаг [user](/constructor/user/).`bot_has_main_app`); содержимое разбито на следующие разделы:

-   `Apps you use`: содержит аватарки, имена и счётчики MAU (из [user](/constructor/user/).`bot_active_users`) для [Main Mini Apps](/api/bots/webapps/#main-mini-apps) тех ботов, которыми пользователь пользуется чаще всего; сортировка выполняется [как описано здесь »](/api/top-rating/) (категория [topPeerCategoryBotsApp](/constructor/topPeerCategoryBotsApp/)).
-   `Popular apps`: содержит аватарки, имена и счётчики MAU для [Main Mini Apps](/api/bots/webapps/#main-mini-apps) тех ботов, которые возвращает [bots.getPopularAppBots](/method/bots.getPopularAppBots/).

Поиск во вкладке приложений должен вызывать [messages.searchGlobal](/method/messages.searchGlobal/), заменяя перечисленные выше разделы списком аватарок, имён и счётчиков MAU (из [user](/constructor/user/).`bot_active_users`) для [Main Mini Apps](/api/bots/webapps/#main-mini-apps) возвращённых ботов (клиентам следует использовать только возвращённое поле `users`, отбирая ботов с выставленным флагом [user](/constructor/user/).`bot_has_main_app`).

[@note] MAU (monthly active users) — число активных пользователей за месяц; это значение сервер отдаёт в поле `bot_active_users`.

#### Вкладка постов

```
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;

messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;

---functions---

channels.checkSearchPostsFlood#22567115 flags:# query:flags.0?string = SearchPostsFlood;

channels.searchPosts#f2c4f24d flags:# hashtag:flags.0?string query:flags.1?string offset_rate:int offset_peer:InputPeer offset_id:int limit:int allow_paid_stars:flags.2?long = messages.Messages;
```

Метод [channels.searchPosts](/method/channels.searchPosts/), вызванный с выставленным флагом `query`, ищет указанную строку запроса глобально по всем публичным каналам.

Глобальный поиск по постам платный: пользователи [Premium](/api/premium/) получают некоторое количество бесплатных поисков, после чего каждый поиск стоит определённое количество звёзд.  
Это означает, что поиск должен запускаться пользователем вручную — нажатием отдельной кнопки после ввода запроса в поле ввода, в отличие от остальных видов поиска, которые работают практически в реальном времени (с некоторой задержкой) по мере ввода запроса в поле ввода.

Перед вызовом метода [channels.searchPosts](/method/channels.searchPosts/) вызовите [channels.checkSearchPostsFlood](/method/channels.checkSearchPostsFlood/), чтобы получить общее ([searchPostsFlood](/constructor/searchPostsFlood/).`total_daily`) и оставшееся ([searchPostsFlood](/constructor/searchPostsFlood/).`remains`) количество бесплатных суточных поисковых слотов, а также unixtime, когда пользователю станут доступны новые бесплатные слоты ([searchPostsFlood](/constructor/searchPostsFlood/).`wait_till`).

Кроме того, для некоторых запросов будет выставлен флаг [searchPostsFlood](/constructor/searchPostsFlood/).`query_is_free`: он означает, что данный поиск бесплатен и **не** израсходует бесплатные поисковые слоты (например, потому что результат закеширован сервером или по какой-то другой серверной причине).

Метод [channels.searchPosts](/method/channels.searchPosts/) всегда возвращает [messages.messagesSlice](/constructor/messages.messagesSlice/), в котором может быть выставлен флаг `search_flood` (он может отсутствовать, если значение не изменилось), содержащий новое значение [searchPostsFlood](/constructor/searchPostsFlood/) (флаг `query_is_free` относится только к текущему вызову, а не к следующему вызову постраничной выборки: все последующие вызовы постраничной выборки всегда бесплатны).

Если пользователь израсходовал все бесплатные поисковые слоты и решил заплатить за поиск [searchPostsFlood](/constructor/searchPostsFlood/).`stars_amount` звёзд вместо того, чтобы ждать до [searchPostsFlood](/constructor/searchPostsFlood/).`wait_till`, передайте `stars_amount` в параметре `allow_paid_stars` метода [channels.searchPosts](/method/channels.searchPosts/), чтобы разрешить списание указанной суммы [Telegram Stars](/api/stars/) за выполнение поиска.

#### Вкладка медиа

Ищет сообщения с фотографиями и видео.

Поиск должен вызывать [messages.searchGlobal](/method/messages.searchGlobal/) с фильтром [inputMessagesFilterPhotoVideo](/constructor/inputMessagesFilterPhotoVideo/), а результаты отображаются так, как описано для [вкладки чатов](#chats-tab).

Изначально вкладка должна заполняться результатами, полученными при передаче пустой строки в `q`.

#### Вкладка загрузок

Содержит формируемый локально список недавно скачанных медиафайлов (любого типа) из всех пиров.

Поиск должен выполняться локально по этому списку.

#### Вкладка ссылок

Ищет сообщения со ссылками.

Поиск должен вызывать [messages.searchGlobal](/method/messages.searchGlobal/) с фильтром [inputMessagesFilterUrl](/constructor/inputMessagesFilterUrl/), а результаты отображаются так, как описано для [вкладки чатов](#chats-tab).

Изначально вкладка должна заполняться результатами, полученными при передаче пустой строки в `q`.

#### Вкладка файлов

Ищет сообщения с файлами.

Поиск должен вызывать [messages.searchGlobal](/method/messages.searchGlobal/) с фильтром [inputMessagesFilterDocument](/constructor/inputMessagesFilterDocument/), а результаты отображаются так, как описано для [вкладки чатов](#chats-tab).

Изначально вкладка должна заполняться результатами, полученными при передаче пустой строки в `q`.

#### Вкладка музыки

Ищет музыкальные файлы.

Поиск должен вызывать [messages.searchGlobal](/method/messages.searchGlobal/) с фильтром [inputMessagesFilterMusic](/constructor/inputMessagesFilterMusic/), а результаты отображаются так, как описано для [вкладки чатов](#chats-tab).

Изначально вкладка должна заполняться результатами, полученными при передаче пустой строки в `q`.

[@term:inline query] Клиенты могут дополнительно предлагать поиск музыки через специального [инлайн-бота](/api/bots/inline/) — бота, который отвечает на инлайн-запросы (`inline query`), — чьё имя пользователя задаётся параметром конфигурации [`music_search_username` »](/api/config/#music-search-username).

#### Вкладка голосовых сообщений

Ищет голосовые сообщения.

Поиск должен вызывать [messages.searchGlobal](/method/messages.searchGlobal/) с фильтром [inputMessagesFilterVoice](/constructor/inputMessagesFilterVoice/), а результаты отображаются так, как описано для [вкладки чатов](#chats-tab).

Изначально вкладка должна заполняться результатами, полученными при передаче пустой строки в `q`.

### Поиск по хештегам

```
messageEntityHashtag#6f635b0d offset:int length:int = MessageEntity;

---functions---

messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

Нажатие на хештег или кештег — [сущность оформления »](/api/entities/) [messageEntityHashtag](/constructor/messageEntityHashtag/)/[messageEntityCashtag](/constructor/messageEntityCashtag/) — должно открывать интерфейс поиска, вызывая [messages.search](/method/messages.search/) в текущем чате, передавая `#hashtag`/`$cashtag` в поле `q`: так находятся все сообщения текущего чата с тем же хештегом или кештегом.

### Глобальный поиск по хештегам

```
---functions---

channels.searchPosts#f2c4f24d flags:# hashtag:flags.0?string query:flags.1?string offset_rate:int offset_peer:InputPeer offset_id:int limit:int allow_paid_stars:flags.2?long = messages.Messages;
```

Специальный метод [channels.searchPosts](/method/channels.searchPosts/) позволяет вести глобальный поиск постов в публичных каналах (_в том числе_ в тех, на которые мы не подписаны) и историй у публичных пользователей, каналов и групп (_в том числе_ у не-контактов и у пиров, которых мы раньше никогда не видели), содержащих определённый хештег (его следует передавать в поле `hashtag` без символа `#`); флаг `query` при этом устанавливать **нельзя** (он используется для [глобального поиска постов, см. здесь »](#posts-tab)).

Кроме того, [здесь »](/api/stories/#searching-stories) описан глобальный поиск _историй_ — его следует запускать _не_ из общей строки поиска, а только при нажатии на хештег или геометку в истории.
