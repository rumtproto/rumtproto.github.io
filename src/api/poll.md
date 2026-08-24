---
title: "Опросы и викторины"
original: "https://core.telegram.org/api/poll"
section: api
description: "Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, а то и миллионы пользователей в чатах и каналах."
layout: layout.njk
---

# Опросы и викторины

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, а то и миллионы пользователей в чатах и каналах.

### Отправка опроса

```
pollAnswer#4b7d786a flags:# text:TextWithEntities option:bytes media:flags.0?MessageMedia added_by:flags.1?Peer date:flags.1?int = PollAnswer;

poll#966e2dbf id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true open_answers:flags.6?true revoting_disabled:flags.7?true shuffle_answers:flags.8?true hide_results_until_close:flags.9?true creator:flags.10?true subscribers_only:flags.11?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int countries_iso2:flags.12?Vector<string> hash:long = Poll;

inputMediaPoll#883a4108 flags:# poll:Poll correct_answers:flags.0?Vector<int> attached_media:flags.3?InputMedia solution:flags.1?string solution_entities:flags.1?Vector<MessageEntity> solution_media:flags.2?InputMedia = InputMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

Чтобы отправить опрос в чат, вызовите [messages.sendMedia](/method/messages.sendMedia/), передав [inputMediaPoll](/constructor/inputMediaPoll/): его поле `poll` содержит собственно конструктор [poll](/constructor/poll/), а остальные поля [inputMediaPoll](/constructor/inputMediaPoll/) задают правильные ответы викторины, разъяснение к ней и необязательные медиавложения.

Описание всех доступных полей приведено на страницах конструкторов [poll](/constructor/poll/) и [inputMediaPoll](/constructor/inputMediaPoll/).

[@term:deep link] На конкретный вариант ответа внутри сообщения-опроса можно сослаться с помощью параметра `option` в [глубокой ссылке на сообщение »](/api/links/#message-links) (`deep link` — ссылка, открывающая нужное место прямо в приложении); этот параметр содержит закодированное в base64url значение [pollAnswer](/constructor/pollAnswer/).`option` того ответа, который нужно выделить.

Чтобы досрочно завершить опрос и запретить дальнейшее голосование, используйте [messages.editMessage](/method/messages.editMessage/), установив флаг `poll.closed` в true.

### Опросы с открытым списком ответов

```
poll#966e2dbf id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true open_answers:flags.6?true revoting_disabled:flags.7?true shuffle_answers:flags.8?true hide_results_until_close:flags.9?true creator:flags.10?true subscribers_only:flags.11?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int countries_iso2:flags.12?Vector<string> hash:long = Poll;

inputPollAnswer#199fed96 flags:# text:TextWithEntities media:flags.0?InputMedia = PollAnswer;

pollAnswer#4b7d786a flags:# text:TextWithEntities option:bytes media:flags.0?MessageMedia added_by:flags.1?Peer date:flags.1?int = PollAnswer;

messageActionPollAppendAnswer#9da1cd6c answer:PollAnswer = MessageAction;
messageActionPollDeleteAnswer#399674dc answer:PollAnswer = MessageAction;

---functions---

messages.addPollAnswer#19bc4b6d peer:InputPeer msg_id:int answer:PollAnswer = Updates;
messages.deletePollAnswer#ac8505a5 peer:InputPeer msg_id:int option:bytes = Updates;
```

Если опрос создан с установленным флагом [poll](/constructor/poll/).`open_answers`, пользователи могут добавлять в него новые варианты ответа уже после отправки.

Чтобы добавить новый вариант, вызовите [messages.addPollAnswer](/method/messages.addPollAnswer/), передав [inputPollAnswer](/constructor/inputPollAnswer/) с текстом нового ответа в поле `text` и необязательным вложением `media`.

Чтобы удалить вариант ответа, вызовите [messages.deletePollAnswer](/method/messages.deletePollAnswer/), указав идентификатор `option` удаляемого ответа. Удалить ответ может только добавивший его пользователь или создатель опроса; при этом всем, кроме создателя опроса, разрешено удалить собственный ответ лишь в течение [`poll_answer_delete_period` »](/api/config/#poll-answer-delete-period) секунд после добавления.

При добавлении или удалении варианта ответа все участники чата получают сервисное сообщение: [messageActionPollAppendAnswer](/constructor/messageActionPollAppendAnswer/) — когда ответ добавлен, и [messageActionPollDeleteAnswer](/constructor/messageActionPollDeleteAnswer/) — когда ответ удалён.

[@term:peer] Поля `pollAnswer.added_by` и `pollAnswer.date` указывают, какой пир (`peer` — пользователь, чат или канал) добавил данный вариант ответа и когда именно. Эти поля заполняются только для ответов, динамически добавленных в опрос с открытым списком ответов; у исходных вариантов, заданных при создании опроса, этих полей нет.

### Голосование в опросах

```
pollAnswerVoters#3645230a flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:flags.2?int recent_voters:flags.2?Vector<Peer> = PollAnswerVoters;

pollResults#ba7bb15e flags:# min:flags.0?true has_unread_votes:flags.6?true can_view_stats:flags.7?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> solution_media:flags.5?MessageMedia = PollResults;

poll#966e2dbf id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true open_answers:flags.6?true revoting_disabled:flags.7?true shuffle_answers:flags.8?true hide_results_until_close:flags.9?true creator:flags.10?true subscribers_only:flags.11?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int countries_iso2:flags.12?Vector<string> hash:long = Poll;

messageMediaPoll#773f4e66 flags:# poll:Poll results:PollResults attached_media:flags.0?MessageMedia = MessageMedia;

updateMessagePoll#d64c522b flags:# peer:flags.1?Peer msg_id:flags.1?int top_msg_id:flags.2?int poll_id:long poll:flags.0?Poll results:PollResults = Update;

---functions---

messages.sendVote#10ea6184 peer:InputPeer msg_id:int options:Vector<bytes> = Updates;
```

Получив [сообщение](/constructor/message/) с вложением [messageMediaPoll](/constructor/messageMediaPoll/), пользователи могут проголосовать в нём с помощью [messages.sendVote](/method/messages.sendVote/), указав идентификаторы `option` выбранных вариантов.

Метод возвращает [updateMessagePoll](/constructor/updateMessagePoll/) с обновлённым конструктором [pollResults](/constructor/pollResults/), в котором у выбранных вариантов установлен флаг `chosen`, а у правильных ответов — флаг `correct`.

Кроме того, [pollResults](/constructor/pollResults/) содержит:

-   `has_unread_votes` — есть ли в неанонимном опросе ещё не прочитанные голоса (см. [непрочитанные голоса в опросах »](#unread-poll-votes))
-   `solution_media` — необязательное медиавложение, показываемое вместе с разъяснением правильного ответа викторины
-   `can_view_stats` — может ли текущий пользователь просматривать подробную [статистику опроса »](/api/stats/#poll-statistics)

[@term:file_reference] Теперь [updateMessagePoll](/constructor/updateMessagePoll/) вдобавок к `poll_id` содержит поля `peer`, `msg_id` и `top_msg_id`, позволяющие точно определить, к какому именно сообщению относится обновление (в том числе ради [ссылок на файлы](/api/file-references/), `file_reference`, которые привязаны к конкретному сообщению и обновляются через него); эти поля отсутствуют, когда результаты опроса рассылаются подписчикам канала.

#### Ограничения на голосование

Прежде чем включать интерфейс голосования, клиентам следует убедиться, что текущему пользователю действительно разрешено голосовать. Пользователь **не может** проголосовать в опросе, если выполняется хотя бы одно из условий:

-   Опрос закрыт, то есть установлен флаг [poll](/constructor/poll/).`closed` (см. [выше](#sending-a-poll)).
-   Опрос предназначен [только для подписчиков »](#subscriber-only-polls), а пользователь не отвечает условиям для подписчиков.
-   Опрос [ограничен по странам »](#country-restricted-polls), а страна пользователя отсутствует в списке разрешённых.

### Опросы только для подписчиков

```
poll#966e2dbf id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true open_answers:flags.6?true revoting_disabled:flags.7?true shuffle_answers:flags.8?true hide_results_until_close:flags.9?true creator:flags.10?true subscribers_only:flags.11?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int countries_iso2:flags.12?Vector<string> hash:long = Poll;

channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

channelForbidden#17d493d5 flags:# broadcast:flags.5?true megagroup:flags.8?true monoforum:flags.10?true id:long access_hash:long title:string until_date:flags.16?int = Chat;

messageFwdHeader#4e4df4bb flags:# imported:flags.7?true saved_out:flags.11?true from_id:flags.0?Peer from_name:flags.5?string date:int channel_post:flags.2?int post_author:flags.3?string saved_from_peer:flags.4?Peer saved_from_msg_id:flags.4?int saved_from_id:flags.8?Peer saved_from_name:flags.9?string saved_date:flags.10?int psa_type:flags.6?string = MessageFwdHeader;

---functions---

messages.sendVote#10ea6184 peer:InputPeer msg_id:int options:Vector<bytes> = Updates;
```

Если у конструктора [poll](/constructor/poll/) установлен флаг `subscribers_only` (`flags.11`), голосовать в опросе могут только подписчики канала или супергруппы, где он был опубликован.

Пользователь допускается к голосованию, только если выполнены **оба** следующих условия; они проверяются по конструктору [channel](/constructor/channel/) того пира, где был опубликован опрос (для пересланных опросов — по исходному пиру из поля `from_id` конструктора [messageFwdHeader](/constructor/messageFwdHeader/)):

-   Пользователь подписан в данный момент: флаг `left` (`flags.2`) конструктора [channel](/constructor/channel/) **не установлен**. (У заблокированных и исключённых пользователей флаг `left` установлен, либо канал отдаётся как [channelForbidden](/constructor/channelForbidden/), вообще без сведений о членстве.)
-   Пользователь подписался не менее чем за **24 часа** (`86400` секунд) до публикации сообщения с опросом, то есть `message.date - channel.date >= 86400`, где `date` конструктора [channel](/constructor/channel/) — это дата подписки текущего пользователя. Для пересланных опросов дату публикации опроса следует брать из поля `date` конструктора [messageFwdHeader](/constructor/messageFwdHeader/), а не из поля `date` конструктора [message](/constructor/message/).

Если хотя бы одно из условий не выполнено, клиенту следует отключить интерфейс голосования и сообщить, что голосовать могут только давние подписчики.

### Опросы с ограничением по странам

Если при создании опроса [poll](/constructor/poll/) заполнено поле `countries_iso2` (не более чем [`poll_countries_max` »](/api/config/#poll-countries-max) кодов стран в формате [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), голосовать в нём могут только пользователи, находящиеся в одной из перечисленных стран.

Чтобы определить, вправе ли голосовать текущий пользователь, клиент обязан сравнить список `countries_iso2` опроса с кодом страны самого пользователя, который отдаётся параметром конфигурации [`phone_country_iso2` »](/api/config/#phone-country-iso2) (сервер выводит его из номера телефона пользователя).

Если значения `phone_country_iso2` **нет** в списке `countries_iso2` опроса, пользователю голосовать не разрешено: клиенту следует отключить интерфейс голосования и сообщить, что голосование доступно только из стран, разрешённых для этого опроса.

[@note] Несмотря на формулировку «находящиеся в стране», фактическое местоположение пользователя не проверяется: страна определяется по `phone_country_iso2`, то есть по коду страны номера телефона, с которым зарегистрирован аккаунт.

### Получение результатов голосования

```
pollAnswerVoters#3645230a flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:flags.2?int recent_voters:flags.2?Vector<Peer> = PollAnswerVoters;

pollResults#ba7bb15e flags:# min:flags.0?true has_unread_votes:flags.6?true can_view_stats:flags.7?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> solution_media:flags.5?MessageMedia = PollResults;

updateMessagePoll#d64c522b flags:# peer:flags.1?Peer msg_id:flags.1?int top_msg_id:flags.2?int poll_id:long poll:flags.0?Poll results:PollResults = Update;

---functions---

messages.getPollResults#eda3e33b peer:InputPeer msg_id:int poll_hash:long = Updates;
```

Обычно, если в доступных пользователю опросах кто-то проголосовал, ему приходит обновление [updateMessagePoll](/constructor/updateMessagePoll/) с актуальными результатами [pollResults](/constructor/pollResults/).

[@term:hash] Тот же конструктор можно запросить вручную методом [messages.getPollResults](/method/messages.getPollResults/). В параметре `poll_hash` следует передать текущее значение `poll.hash` из последнего полученного состояния опроса — это хеш выборки, по которому сервер понимает, что данные не изменились, и не присылает их повторно.

### Непрочитанные голоса в опросах

```
---functions---

messages.getUnreadPollVotes#43286cf2 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.readPollVotes#1720b4d8 flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;
```

Когда пользователи голосуют в неанонимном опросе, владельцу опроса в конструкторах [dialog](/constructor/dialog/) и [forumTopic](/constructor/forumTopic/) отдаётся счётчик `unread_poll_votes_count`, который растёт с каждым непрочитанным голосом. Флаг `has_unread_votes` конструктора [pollResults](/constructor/pollResults/) сообщает, что у этого конкретного опроса есть непрочитанные голоса.

[@term:pagination] Метод [messages.getUnreadPollVotes](/method/messages.getUnreadPollVotes/) возвращает сообщения указанного чата, содержащие опросы с непрочитанными голосами. Параметры `offset_id`, `add_offset`, `limit`, `max_id` и `min_id` работают так же, как в остальных методах с постраничной выборкой (`pagination` — обход длинного списка порциями, от заданного смещения и не более `limit` элементов за раз). Необязательный параметр `top_msg_id` ограничивает выдачу конкретной темой форума.

Метод [messages.readPollVotes](/method/messages.readPollVotes/) помечает все непрочитанные голоса в указанном чате (или в теме форума, если задан `top_msg_id`) как прочитанные, обнуляя счётчик `unread_poll_votes_count`.

### Получение проголосовавших в неанонимных опросах

```
messagePeerVote#b6cc2d5c peer:Peer option:bytes date:int = MessagePeerVote;
messagePeerVoteInputOption#74cda504 peer:Peer date:int = MessagePeerVote;
messagePeerVoteMultiple#4628f6e6 peer:Peer options:Vector<bytes> date:int = MessagePeerVote;

messages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList; 

updateMessagePollVote#7699f014 poll_id:long peer:Peer options:Vector<bytes> positions:Vector<int> qts:int = Update;

---functions---

messages.getPollVotes#b86e380e flags:# peer:InputPeer id:int option:flags.0?bytes offset:flags.1?string limit:int = messages.VotesList; 
```

[@term:qts] Метод [messages.getPollVotes](/method/messages.getPollVotes/) позволяет получить результаты неанонимных опросов и увидеть, как именно каждый пользователь проголосовал за тот или иной вариант ответа.  
Кроме того, боты получают обновление [updateMessagePollVote](/constructor/updateMessagePollVote/) каждый раз, когда пользователь меняет свой ответ в неанонимном опросе (поле `qts` — отдельный счётчик состояния для обновлений, адресованных ботам). Боты получают новые голоса только в тех опросах, которые отправили сами.

Поле `positions` содержит отсчитываемые с нуля индексы выбранных вариантов `options` в векторе `answers` опроса; элементы обоих векторов соответствуют друг другу поэлементно.

### Ответ на вариант опроса

```
inputReplyToMessage#3bd4b7c2 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int poll_option:flags.7?bytes = InputReplyTo;

messageReplyHeader#1b97dd66 flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int poll_option:flags.12?bytes = MessageReplyHeader;
```

Сообщение можно отправить как ответ на конкретный вариант опроса: для этого в конструкторе [inputReplyToMessage](/constructor/inputReplyToMessage/) следует заполнить поле `poll_option` байтами `option` нужного варианта ответа. Полученное сообщение будет содержать в [messageReplyHeader](/constructor/messageReplyHeader/) те же байты `poll_option` — они показывают, какому именно варианту ответа адресован этот ответ.

### Поиск опросов

```
inputMessagesFilterPoll#fa2bc90a = MessagesFilter;
```

Чтобы получить из чата только сообщения с опросами, передайте [inputMessagesFilterPoll](/constructor/inputMessagesFilterPoll/) в параметре `filter` метода `messages.search`.
