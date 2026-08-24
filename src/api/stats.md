---
title: "Статистика каналов"
original: "https://core.telegram.org/api/stats"
section: api
description: "Telegram предоставляет подробную статистику для каналов и супергрупп."
layout: layout.njk
---

# Статистика каналов

Telegram предоставляет подробную статистику для каналов и супергрупп.

### Статистика каналов

Схема:

```
statsDateRangeDays#b637edaf min_date:int max_date:int = StatsDateRangeDays;

statsAbsValueAndPrev#cb43acde current:double previous:double = StatsAbsValueAndPrev;

statsPercentValue#cbce2fe0 part:double total:double = StatsPercentValue;

statsGraphAsync#4a27eb2d token:string = StatsGraph;
statsGraphError#bedc9822 error:string = StatsGraph;
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;

postInteractionCountersMessage#e7058e7f msg_id:int views:int forwards:int reactions:int = PostInteractionCounters;
postInteractionCountersStory#8a480e27 story_id:int views:int forwards:int reactions:int = PostInteractionCounters;

stats.broadcastStats#396ca5fc period:StatsDateRangeDays followers:StatsAbsValueAndPrev views_per_post:StatsAbsValueAndPrev shares_per_post:StatsAbsValueAndPrev reactions_per_post:StatsAbsValueAndPrev views_per_story:StatsAbsValueAndPrev shares_per_story:StatsAbsValueAndPrev reactions_per_story:StatsAbsValueAndPrev enabled_notifications:StatsPercentValue growth_graph:StatsGraph followers_graph:StatsGraph mute_graph:StatsGraph top_hours_graph:StatsGraph interactions_graph:StatsGraph iv_interactions_graph:StatsGraph views_by_source_graph:StatsGraph new_followers_by_source_graph:StatsGraph languages_graph:StatsGraph reactions_by_emotion_graph:StatsGraph story_interactions_graph:StatsGraph story_reactions_by_emotion_graph:StatsGraph recent_posts_interactions:Vector<PostInteractionCounters> = stats.BroadcastStats;

messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

stats.getBroadcastStats#ab42441a flags:# dark:flags.0?true channel:InputChannel = stats.BroadcastStats;
stats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;

channels.getFullChannel#08736a09 channel:InputChannel = messages.ChatFull;
```

Администраторы [каналов](/api/channel/) определённого размера (точный порог задаётся конфигурацией на стороне сервера и возвращается во флаге `can_view_stats` конструктора [channelFull](/constructor/channelFull/)) могут вызвать [stats.getBroadcastStats](/method/stats.getBroadcastStats/), чтобы получить подробную статистику канала.  
Запрос обязан отправляться в дата-центр с ID `channelFull.stats_dc`, который можно получить с помощью [channels.getFullChannel](/method/channels.getFullChannel/).  
Возвращаемый конструктор [stats.broadcastStats](/constructor/stats.broadcastStats/) содержит несколько статистических показателей:

-   Показатели за период: пара значений — одно на начало, другое на конец рассматриваемого периода (`period`).  
    Длительность периода `period` обычно зависит от активности канала.
    -   Абсолютное число подписчиков (`followers`)
    -   `total_viewcount/postcount` — для постов, опубликованных в рассматриваемый период (`views_per_post`).  
        Учтите, что здесь `current` относится к рассматриваемому периоду `period` (от `min_date` до `max_date`), а `prev` — к предыдущему периоду (от `(min_date - (max_date - min_date))` до `min_date`).
    -   `total_sharecount/postcount` — для постов, опубликованных в рассматриваемый период (`shares_per_post`).  
        Учтите, что здесь `current` относится к рассматриваемому периоду `period` (от `min_date` до `max_date`), а `prev` — к предыдущему периоду (от `(min_date - (max_date - min_date))` до `min_date`).
-   Процентные показатели
    -   Доля подписчиков с включёнными уведомлениями (`enabled_notifications`)
-   Графики: [графики описаны ниже »](#graph-visualization).

### Статистика супергрупп

Схема:

```
statsGroupTopPoster#9d04af9b user_id:long messages:int avg_chars:int = StatsGroupTopPoster;
statsGroupTopInviter#535f779d user_id:long invitations:int = StatsGroupTopInviter;
statsGroupTopAdmin#d7584c87 user_id:long deleted:int kicked:int banned:int = StatsGroupTopAdmin;

stats.megagroupStats#ef7ff916 period:StatsDateRangeDays members:StatsAbsValueAndPrev messages:StatsAbsValueAndPrev viewers:StatsAbsValueAndPrev posters:StatsAbsValueAndPrev growth_graph:StatsGraph members_graph:StatsGraph new_members_by_source_graph:StatsGraph languages_graph:StatsGraph messages_graph:StatsGraph actions_graph:StatsGraph top_hours_graph:StatsGraph weekdays_graph:StatsGraph top_posters:Vector<StatsGroupTopPoster> top_admins:Vector<StatsGroupTopAdmin> top_inviters:Vector<StatsGroupTopInviter> users:Vector<User> = stats.MegagroupStats;

messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

stats.getMegagroupStats#dcdf8607 flags:# dark:flags.0?true channel:InputChannel = stats.MegagroupStats;

channels.getFullChannel#08736a09 channel:InputChannel = messages.ChatFull;
```

Администраторы [супергрупп](/api/channel/) определённого размера (точный порог задаётся конфигурацией на стороне сервера и возвращается во флаге `can_view_stats` конструктора [channelFull](/constructor/channelFull/)) могут вызвать [stats.getMegagroupStats](/method/stats.getMegagroupStats/), чтобы получить подробную статистику супергруппы.  
Запрос обязан отправляться в дата-центр с ID `channelFull.stats_dc`, который можно получить с помощью [channels.getFullChannel](/method/channels.getFullChannel/).  
Возвращаемый конструктор [stats.broadcastStats](/constructor/stats.broadcastStats/) содержит несколько статистических показателей, [подробнее см. на странице конструктора »](/constructor/stats.broadcastStats/).

### Статистика сообщений

```
stats.messageStats#7fe91c14 views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.MessageStats;

messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

stats.getMessageStats#b6e0a3f5 flags:# dark:flags.0?true channel:InputChannel msg_id:int = stats.MessageStats;

channels.getFullChannel#08736a09 channel:InputChannel = messages.ChatFull;

stats.getMessagePublicForwards#5f150144 channel:InputChannel msg_id:int offset:string limit:int = stats.PublicForwards;
```

Администраторы [каналов](/api/channel/) определённого размера (точный порог задаётся конфигурацией на стороне сервера и возвращается во флаге `can_view_stats` конструктора [channelFull](/constructor/channelFull/)) могут вызвать [stats.getMessageStats](/method/stats.getMessageStats/), чтобы получить статистику по конкретному сообщению.  
Запрос обязан отправляться в дата-центр с ID `channelFull.stats_dc`, который можно получить с помощью [channels.getFullChannel](/method/channels.getFullChannel/).  
Возвращаемый конструктор [stats.messageStats](/constructor/stats.messageStats/) содержит график просмотров сообщения.

[stats.getMessagePublicForwards](/method/stats.getMessagePublicForwards/) позволяет также получить список сообщений, показывающий, в какие другие публичные каналы было переслано сообщение канала: метод вернёт список [сообщений](/constructor/message/), у которых поле `peer_id` указывает на публичный канал, куда это сообщение было переслано.

### Статистика историй

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;

publicForwardMessage#01f2bf4a message:Message = PublicForward;
publicForwardStory#edf3add0 peer:Peer story:StoryItem = PublicForward;

stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;

---functions---

stats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;

stats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;
```

Для получения статистики по истории используйте [stats.getStoryStats](/method/stats.getStoryStats/).

Метод [stats.getStoryPublicForwards](/method/stats.getStoryPublicForwards/) возвращает пересылки истории в виде сообщений в публичные чаты, а также репосты публичными каналами.

### Статистика опросов

```
pollResults#ba7bb15e flags:# min:flags.0?true has_unread_votes:flags.6?true can_view_stats:flags.7?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> solution_media:flags.5?MessageMedia = PollResults;

stats.pollStats#2999beed votes_graph:StatsGraph = stats.PollStats;

---functions---

stats.getPollStats#c27dfa68 flags:# dark:flags.0?true peer:InputPeer msg_id:int = stats.PollStats;
```

Флаг `can_view_stats` конструктора [pollResults](/constructor/pollResults/) показывает, может ли текущий пользователь просматривать подробную статистику по отправленному им [опросу »](/api/poll/).

[@term:peer] Если флаг установлен, вызовите [stats.getPollStats](/method/stats.getPollStats/), передав `peer` — пир, то есть пользователь, группа или канал, куда был отправлен опрос, — и `msg_id` сообщения с этим опросом.

Возвращаемый конструктор [stats.pollStats](/constructor/stats.pollStats/) содержит поле `votes_graph` — график изменения числа отданных в опросе голосов во времени.

Установите флаг `dark`, чтобы получить цвета графика, подходящие для тёмной темы.

## Визуализация графиков

Для типов графиков доступно четыре способа визуализации:

-   [Линейный график](#line-graph)
-   [Ступенчатый график](#step-graph)
-   [Столбчатый график](#bar-graph)
-   [График с областями](#area-graph)

Модификаторы графиков (примеры см. в разделе [разные графики](#graph-examples)):

-   `y_scaled` — указывает, что каждая из двух (!) линий ступенчатого графика должна отображаться в собственном масштабе, с двумя разными осями делений слева и справа от графика
-   `percentage` — указывает, следует ли показывать в подписях процентные доли значений
-   `stacked` — в зависимости от типа графика указывает на объединение нескольких столбцов одного графика в стопку

### Синтаксис графиков

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
statsGraphError#bedc9822 error:string = StatsGraph;
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;

dataJSON#7d748d04 data:string = DataJSON;

---functions---

stats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;
```

Некоторые графики не передаются напрямую в конструкторе [stats.broadcastStats](/constructor/stats.broadcastStats/) — так снижается нагрузка на сервер: вместо этого они присылаются в виде конструктора [statsGraphAsync](/constructor/statsGraphAsync/) и должны запрашиваться отдельно с помощью [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/).

Получив полный конструктор [statsGraph](/constructor/statsGraph/), клиенты должны разобрать JSON-объект графика из поля `json`.

Структура объекта:

<table class="table"><thead><tr><th scope="col">Ключ</th><th scope="col">Название графика</th></tr></thead><tbody><tr><td>columns</td><td>Массив всех массивов-столбцов данных диаграммы. В каждом массиве-столбце на позиции 0 стоит его <strong>метка</strong>, за которой следуют значения.</td></tr><tr><td>types</td><td><a href="#graph-visualization">Типы графиков</a> для каждого из массивов-столбцов (объект, <code>"label": "type"</code>):<br>- <code>line</code> — <a href="#line-graph">линейный график</a><br>- <code>area</code> — <a href="#area-graph">график с областями</a><br>- <code>step</code> — <a href="#step-graph">ступенчатый график</a><br>- <code>bar</code> — <a href="#bar-graph">столбчатый график</a><br>- <code>x</code> — значения оси x для каждой из диаграмм на соответствующих позициях, метки времени UNIX в миллисекундах.</td></tr><tr><td>colors</td><td>Цвет для каждого типа (объект, <code>"label": "colorKey#AAAAAA"</code>; см. <a href="#chart-colors">цвета диаграмм</a>).</td></tr><tr><td>names</td><td>Локализованное название каждой переменной (объект, <code>"label": "Name"</code>)</td></tr><tr><td>subchart</td><td>Объект, задающий диапазон масштабирования графика по умолчанию; его структура такова:<br>- <code>show</code> — использовать ли указанный диапазон масштабирования (логическое значение)<br>- <code>defaultZoom</code> — массив из двух значений <code>x</code>, задающих границы диапазона масштабирования по умолчанию</td></tr><tr><td>y_scaled</td><td>Указывает, что каждая из двух (!) линий ступенчатого графика должна отображаться в собственном масштабе, с двумя разными осями делений слева и справа от графика (логическое значение, примеры см. в разделе <a href="#graph-examples">разные графики</a>)</td></tr><tr><td>percentage</td><td>Указывает, следует ли показывать в подписях процентные доли значений (логическое значение, примеры см. в разделе <a href="#graph-examples">разные графики</a>)</td></tr><tr><td>stacked</td><td>В зависимости от типа графика указывает на объединение нескольких столбцов одного графика в стопку (логическое значение, примеры см. в разделе <a href="#graph-examples">разные графики</a>)</td></tr></tbody></table>

К диаграммам применяются следующие ограничения:

-   Клиент обязан поддерживать до 50 столбцов на одном графике.
-   Типы диаграмм всегда одинаковы для всех столбцов графика.
-   Тип диаграммы `bar` и параметр `stacked` всегда используются вместе.
-   `percentage` всегда используется вместе с графиком типа `area`.

### Масштабирование диаграмм

```
statsGraphError#bedc9822 error:string = StatsGraph;
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;

dataJSON#7d748d04 data:string = DataJSON;

---functions---

stats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;
```

[@term:zoom_token] У графиков, поддерживающих масштабирование, в конструкторе [statsGraph](/constructor/statsGraph/) заполнено поле `zoom_token` — маркер масштабирования, строка, по которой сервер отдаёт детализированный подграфик.  
Этот маркер следует затем передать как `token` в новом вызове [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/), который выполняется, когда пользователь нажимает на подпись, относящуюся к определённой оси x графика (см. [примеры графиков](#graph-examples)).  
Координату `x` этой подписи следует передать в параметре `x`; в ответ метод вернёт (если такие данные есть) более подробный подграфик.  
Если данных недостаточно, будет возвращён локализованный [statsGraphError](/constructor/statsGraphError/).

Типичные правила _отображения_ при масштабировании:

-   Любой график с модификатором `percentage` (даже если `zoom_token` отсутствует) => [круговая диаграмма](#piechart)
-   [линейный график](#line-graph) => [линейный график](#line-graph)
-   [ступенчатый график](#step-graph) => [ступенчатый график](#step-graph)
-   [столбчатый график](#bar-graph) => [столбчатый график](#bar-graph)
-   [график с областями](#area-graph) => [график с областями](#area-graph)

### Цвета диаграмм

Цвета диаграммы могут задаваться ключом цвета, за которым следует значение основного цвета в шестнадцатеричном формате:

```
red#e05356
```

Ключом цвета может быть одно из значений `red`, `lightblue`, `lightgreen`, `golden`, `green`, `orange`, `blue`, `indigo`.  
Приложения могут использовать значение цвета, заданное текущей загруженной темой: например, [приложение для Android](https://github.com/DrKLO/Telegram/blob/59a0bc1af3985a4efa340b430dad867ae0e8d073/TMessagesProj/src/main/java/org/telegram/ui/Charts/data/ChartData.java#L99) использует для каждого из ключей цвета ключи темы `statisticChartLine_*`; в [каталоге ресурсов](https://github.com/DrKLO/Telegram/tree/master/TMessagesProj/src/main/assets) собрано несколько стандартных тем с разными цветами для статистики канала.

Однако сервер может вернуть и просто значение цвета в шестнадцатеричном формате:

```
#e05356
```

В этом случае флаг `dark` метода [stats.getBroadcastStats](/method/stats.getBroadcastStats/) позволяет выбрать палитру возвращаемых цветов.

## Примеры графиков

### Линейный график

Простой график с одной линией

### Ступенчатый график

Ступенчатый график, всегда «стопкой» (чтобы показать несколько линий)

### Столбчатый график

Столбчатый график с несколькими линиями, всегда «стопкой» (то есть с настоящими столбцами, сложенными в стопку, — самые большие столбцы идут первыми)

### График с областями

Смешанный столбчато-линейный график, всегда «стопкой» (то есть с настоящими столбцами, сложенными в стопку, — самые большие столбцы идут первыми)

### Круговая диаграмма

Круговая диаграмма; обычно получается только при масштабировании графиков с процентными долями
