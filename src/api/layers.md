---
title: "История изменений слоёв"
original: "https://core.telegram.org/api/layers"
section: api
description: "Ниже приведены сведения об изменениях схемы. Подробнее об использовании слоёв (layer — номер версии схемы TL, который клиент сообщает серверу) см. Вызов методов API."
layout: layout.njk
---

# История изменений слоёв

[@term:layer] Ниже приведены сведения об изменениях схемы. Подробнее об использовании слоёв (`layer` — номер версии схемы TL, который клиент сообщает серверу) см. [Вызов методов API](/api/invoking/#layers).

### [Слой 225](https://core.telegram.org/schema?layer=225)

Чтобы просмотреть все изменения с момента прошлого обновления документации, начинайте читать со [слоя 215](#layer-215).

В этот выпуск документации вошли следующие новые и существенно переработанные статьи, описывающие уже существовавшие возможности:

-   [Групповые звонки, видеочаты, живые истории, конференции и трансляции »](/api/group-calls/)
-   [Звонки один на один »](/api/calls/)
-   [Полностью переработана документация по E2E-конференциям »](/api/end-to-end/group-calls/)
-   [@term:file_reference] [Полностью переработана схема базы данных ссылок на файлы, что заметно упрощает её автоматическую генерацию »](/api/file-references/) — `file_reference` (ссылка на файл) — это выдаваемый сервером маркер, который предъявляется при скачивании и пересылке файла и который приходится обновлять, перезапрашивая объект-источник
-   [Применение обновлений обычных групп »](/api/peers/#basic-group-updates)
-   [Применение обновлений групповых звонков »](/api/end-to-end/group-calls/#handling-updates)
-   [Последовательности идентификаторов сообщений »](/api/updates/#message-id-sequences)
-   [Более подробные указания по обработке пропусков в обновлениях (в том числе пропусков за пределами максимального размера ящика сообщений) »](/api/updates/#recovering-gaps-for-very-old-messages)
-   [Параллельные сессии »](/api/datacenter/#parallel-sessions)
-   [Обработка updateMessageID »](/api/updates/#updatemessageid-updates)
-   [Описаны ограничения частоты запросов для живых черновиков »](/api/bots/ai/#live-response-streaming)
-   [Защита содержимого »](/api/content-protection/)
-   [Просмотры сообщений »](/api/views/)
-   [Отправка сообщений от имени принадлежащих вам каналов и групп »](/api/channel/#sending-messages-on-behalf-of-owned-channels-and-groups)
-   [Работа с участниками обычных групп »](/api/channel/#basic-group-participants)
-   [Выход из групп и каналов (полный порядок действий) »](/api/channel/#leaving-groups-channels)
-   [В базу ошибок RPC добавлен номер слоя »](/api/errors/)
-   [Улучшена документация по выгрузке данных »](/api/takeout/)
-   Описаны типы событий [`navigationBarColor` »](/api/web-events/#navigationbarcolor), [`actionBarColor` »](/api/web-events/#actionbarcolor), [`allowScroll` »](/api/web-events/#allowscroll), [`siteName` »](/api/web-events/#sitename)
-   [`whitelisted_bots` »](/api/config/#whitelisted-bots)
-   Подробные списки изменений для ключей конфигурации API, веб-событий, ограничений, предлагаемых действий и прочих констант API теперь автоматически попадают в историю изменений соответствующего слоя, а не только последнего.
-   Опубликован сводный машиночитаемый указатель всех [констант API и push-обновлений »](/api/config/#machine-readable-configuration-index) по новой постоянной ссылке [/api/config.json »](/api/config.json/).
-   [База ошибок RPC »](/api/errors/#error-database) теперь публикуется и в машиночитаемом виде по постоянной ссылке [/api/errors.json »](/api/errors.json/), которая заменяет прежнюю ссылку на встроенный файл.
-   Множество других улучшений и исправлений по всей документации.

А также описаны следующие новые возможности (краткий обзор того, что появилось со времён [слоя 215](#layer-215)):

-   Возможности ИИ: [составление сообщений »](/api/ai/#compose-messages), [тональности ИИ-редактора »](/api/ai/#ai-compose-tones) и [краткий пересказ сообщений »](/api/ai/#summarize-messages)
-   Возможности ИИ для ботов: [живые черновики »](/api/bots/ai/#live-response-streaming)
-   [Форумы ботов »](/api/forum/#bot-forums)
-   [Управляемые боты »](/api/bots/managed-bots/)
-   [Улучшенные сущности оформления текста »](/api/entities/)
-   [Гостевой режим для ботов »](/api/bots/guest-mode/)
-   [Аукционы подарков »](/api/auctions/)
-   [Passkeys »](/api/passkeys/)
-   [Живые истории »](/api/group-calls/#live-stories), [сообщения во время звонка »](/api/group-calls/#in-call-messages), [платные комментарии к живым историям »](/api/group-calls/#paid-live-story-comments) и [платные пожертвования в живых историях »](/api/group-calls/#paid-live-story-donations)
-   [Сводки недавних историй »](/api/stories/#recent-story-summaries)
-   [Повторяющиеся отложенные сообщения »](/api/scheduled-messages/#repeating-scheduled-messages)
-   [Просмотры сообщений »](/api/views/#view-counters) и [метрики прочтения »](/api/views/#read-metrics)
-   [Опросы со свободными вариантами ответа »](/api/poll/#open-answer-polls), [непрочитанные голоса в опросах »](/api/poll/#unread-poll-votes), [медиавложения к вариантам ответа »](/api/poll/#sending-a-poll), [ответы на варианты опроса »](/api/poll/#replying-to-poll-options), [поиск опросов »](/api/poll/#searching-for-polls) и [статистика опросов »](/api/stats/#poll-statistics)
-   [Метки участников и администраторов группы »](/api/rank/)
-   [Передача прав владения группой или каналом »](/api/channel/#transferring-ownership-of-a-group-channel) и [порядок передачи прав при выходе »](/api/channel/#leaving-groups-channels)
-   [Сущности оформления для дат »](/api/entities/#date-entities) и [сущности оформления для показа различий »](/api/entities/#diff-entities)
-   [Коллекционные подарки »](/api/gifts/#collectible-gifts): [ковка »](/api/gifts/#crafting-collectible-gifts), [предложения о покупке »](/api/gifts/#collectible-gift-purchase-offers), [размещённые подарки »](/api/gifts/#hosted-collectible-gifts), [коллекционные палитры сообщений »](/api/colors/#collectible-message-palettes) и [коллекционные палитры профиля »](/api/colors/#collectible-profile-palettes).
-   [Личные заметки о контактах »](/api/contacts/#private-notes-for-contacts)
-   [Дни рождения »](/api/profile/#birthday), [вкладка «Музыка» в профиле »](/api/profile/#music), [сведения об управляющем управляемого бота »](/api/profile/#managed-bot-manager), [личные каналы »](/api/profile/#personal-channel) и [предупреждения о неофициальном клиенте »](/api/profile/#unofficial-client-warning)
-   [Защита содержимого в личных чатах »](/api/content-protection/#for-users)
-   [Стили кнопок »](/api/bots/buttons/#button-styles)
-   [@term:peer] [@term:Mini App] [Запросы пиров из Mini App »](/api/bots/buttons/#requesting-peers-via-mini-apps) — пир (`peer`) обозначает собеседника: пользователя, обычную группу, супергруппу или канал, а `Mini App` — веб-приложение, встроенное в клиент Telegram
-   [Анонимные администраторы групп »](/api/rights/#anonymous-admins) теперь могут [отмечать пункты списка задач »](/api/todo/#mark-items-as-completed)
-   [Удаление реакций участника »](/api/reactions/#removing-participant-reactions)
-   Поддержка [эффектов сообщений »](/api/effects/) для пересланных сообщений
-   [Предложения настроить почту для входа »](/api/auth/#email-verification) и [предложения настроить passkey »](/api/config/#setup-passkey)
-   [Вход через OAuth »](/api/url-authorization/)
-   [`blur_enabled` в событиях `fullscreen_changed` »](/api/bots/webapps/#fullscreen-changed)
-   [@term:deep link] Новые типы [глубоких ссылок »](/api/links/) (`deep link` — ссылка вида `tg://`, открывающая нужный экран приложения):
    -   [Параметризованные ссылки на настройки с возможностью открыть определённую страницу настроек или её раздел »](/api/links/#settings-links)
    -   [Ссылки на список контактов »](/api/links/#contacts-links)
    -   [Ссылки для создания чата »](/api/links/#new-chat-links)
    -   [Ссылки на список чатов »](/api/links/#chat-list-links)
    -   [Ссылки на живые истории »](/api/links/#live-story-links)
    -   [Ссылки на редактор историй »](/api/links/#post-story-links)
    -   [Ссылки с временной меткой »](/api/links/#timestamp-links)
    -   [Подсветка конкретного пункта списка задач или варианта опроса в ссылках на сообщение »](/api/links/#message-links)

Этот слой вводит следующие возможности:

-   [Пользовательские тональности ИИ-редактора »](/api/ai/#ai-compose-tones)
-   [Гостевой режим для ботов »](/api/bots/guest-mode/)
-   [Статистика опросов »](/api/stats/#poll-statistics)
-   [Модерация реакций участников »](/api/reactions/#removing-participant-reactions)
-   [Ботам разрешено получать историю личного канала любого пользователя »](/api/profile/#personal-channel)

#### Константы API

##### Ограничения Premium

[Идентификаторы ограничений Telegram Premium »](/api/premium/#double-limits).

-   Добавлено [`double_limits__aicompose_tone_saved` »](/api/premium/#double-limits-aicompose-tone-saved)

##### Значения типа веб-страницы

Значения типа веб-страницы из конструктора [webPage](/constructor/webPage/).

-   Добавлено `telegram_aicomposetone` — предпросмотр [ссылки на тональность ИИ-редактора »](/api/links/#ai-compose-tone-links), которой делятся при показе предпросмотра [пользовательской тональности ИИ-редактора »](/api/ai/#ai-compose-tones). Поле `attributes` содержит [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/) с [пользовательским эмодзи »](/api/custom-emoji/), представляющим тональность; клиенты отображают кнопку, которая применяет присланную тональность.

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/) — боты используют этот метод, чтобы ответить на запрос [гостевого режима »](/api/bots/guest-mode/), полученный в обновлении [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/), и передать сообщение, которое будет опубликовано в чате от имени гостя; подробнее см. [здесь »](/api/bots/guest-mode/#handling-guest-queries-bot-side).
-   Добавлен [messages.deleteParticipantReactions](/method/messages.deleteParticipantReactions/) — от имени администратора удалить все [реакции](/api/reactions/) конкретного участника со всех сообщений группы или канала.
-   Добавлен [messages.deleteParticipantReaction](/method/messages.deleteParticipantReaction/) — от имени администратора удалить все [реакции](/api/reactions/) конкретного участника с одного сообщения.
-   Добавлен [messages.getPersonalChannelHistory](/method/messages.getPersonalChannelHistory/) — получить историю сообщений [личного канала »](/api/profile/#personal-channel) пользователя.
-   Добавлен [bots.getAccessSettings](/method/bots.getAccessSettings/) — получить [настройки ограничения доступа »](/api/bots/managed-bots/#managing-a-managed-bot) управляемого бота; вызывать может только бот-управляющий.
-   Добавлен [bots.editAccessSettings](/method/bots.editAccessSettings/) — изменить [настройки ограничения доступа »](/api/bots/managed-bots/#managing-a-managed-bot) управляемого бота; вызывать может только бот-управляющий.
-   Добавлен [stats.getPollStats](/method/stats.getPollStats/) — получить [статистику](/api/stats/#poll-statistics) опроса, отправленного в сообщении.
-   Добавлен [aicompose.createTone](/method/aicompose.createTone/) — создать новую пользовательскую [тональность ИИ-редактора »](/api/ai/#ai-compose-tones).
-   Добавлен [aicompose.updateTone](/method/aicompose.updateTone/) — изменить пользовательскую [тональность ИИ-редактора »](/api/ai/#ai-compose-tones), ранее созданную текущим пользователем. Изменяются только те поля, чей флаг установлен.
-   Добавлен [aicompose.saveTone](/method/aicompose.saveTone/) — установить или удалить [тональность ИИ-редактора »](/api/ai/#ai-compose-tones), добавив её в список сохранённых тональностей текущего пользователя или убрав из него.
-   Добавлен [aicompose.deleteTone](/method/aicompose.deleteTone/) — безвозвратно удалить пользовательскую [тональность ИИ-редактора »](/api/ai/#ai-compose-tones), созданную текущим пользователем.
-   Добавлен [aicompose.getTone](/method/aicompose.getTone/) — получить сведения об одной [тональности ИИ-редактора »](/api/ai/#ai-compose-tones), например чтобы разрешить глубокую ссылку на тональность, которой поделились.
-   Добавлен [aicompose.getTones](/method/aicompose.getTones/) — получить список сохранённых [тональностей ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя.
-   Добавлен [aicompose.getToneExample](/method/aicompose.getToneExample/) — получить пример того, как [тональность ИИ-редактора »](/api/ai/#ai-compose-tones) перефразирует образец сообщения; используется для предпросмотра в списке выбора тональности.

##### Изменённые методы

-   Добавлен параметр **bots\_guestchat** в [contacts.getTopPeers](/method/contacts.getTopPeers/)
-   Добавлен параметр **tone**, удалён параметр **change\_tone** в [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/)

##### Новые конструкторы

-   Добавлен [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/) — отправляется [гостевым ботам »](/api/bots/guest-mode/), когда пользователь вызывает бота в чате в качестве гостя. В ответ бот должен вызвать [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/), подробнее см. [здесь »](/api/bots/guest-mode/#handling-guest-queries-bot-side).
-   Добавлен [updateAiComposeTones](/constructor/updateAiComposeTones/) — список сохранённых [тональностей ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя изменился, и его следует запросить заново методом [aicompose.getTones](/method/aicompose.getTones/).
-   Добавлен [topPeerCategoryBotsGuestChat](/constructor/topPeerCategoryBotsGuestChat/) — популярные [гостевые боты »](/api/bots/guest-mode/), то есть боты, которых чаще всего вызывают в чатах в качестве гостей.
-   Добавлен [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/) — [атрибут веб-страницы](/type/WebPageAttribute/), прикрепляемый к конструктору [webPage](/constructor/webPage/) типа `telegram_aicomposetone`; формируется при предпросмотре [тональности ИИ-редактора »](/api/ai/#ai-compose-tones), которой поделились через [ссылку на тональность ИИ-редактора »](/api/links/#ai-compose-tone-links).
-   Добавлен [stats.pollStats](/constructor/stats.pollStats/) — [статистика](/api/stats/#poll-statistics) опроса, отправленного в сообщении.
-   Добавлен [inputAiComposeToneDefault](/constructor/inputAiComposeToneDefault/) — ссылается на встроенную тональность [ИИ-редактора »](/api/ai/#ai-compose-tones) по умолчанию, указывая её строковый идентификатор.
-   [@term:access_hash] Добавлен [inputAiComposeToneID](/constructor/inputAiComposeToneID/) — ссылается на пользовательскую [тональность ИИ-редактора »](/api/ai/#ai-compose-tones), указывая её идентификатор и хеш доступа (`access_hash` — выдаваемое сервером значение, которое обязательно предъявлять вместе с идентификатором объекта при обращении к нему).
-   Добавлен [inputAiComposeToneSlug](/constructor/inputAiComposeToneSlug/) — ссылается на пользовательскую [тональность ИИ-редактора »](/api/ai/#ai-compose-tones), указывая её публичный слаг; применяется при открытии [ссылки на тональность ИИ-редактора »](/api/links/#ai-compose-tone-links).
-   Добавлен [aiComposeTone](/constructor/aiComposeTone/) — пользовательская [тональность ИИ-редактора »](/api/ai/#ai-compose-tones), с помощью которой сообщения перефразируются в заданном стиле через [ИИ-редактор сообщений](/api/ai/#compose-messages).
-   Добавлен [aiComposeToneDefault](/constructor/aiComposeToneDefault/) — встроенная [тональность ИИ-редактора »](/api/ai/#ai-compose-tones) по умолчанию, которая задаётся строковым идентификатором, а не числовым.
-   Добавлен [aicompose.tonesNotModified](/constructor/aicompose.tonesNotModified/) — список сохранённых [тональностей ИИ-редактора »](/api/ai/#ai-compose-tones) не изменился с момента прошлого запроса (то есть значение `hash`, переданное в [aicompose.getTones](/method/aicompose.getTones/), всё ещё актуально).
-   Добавлен [aicompose.tones](/constructor/aicompose.tones/) — список сохранённых [тональностей ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя.
-   Добавлен [aiComposeToneExample](/constructor/aiComposeToneExample/) — пример того, как [тональность ИИ-редактора »](/api/ai/#ai-compose-tones) перефразирует сообщение; используется для предпросмотра в списке выбора тональности.
-   Добавлен [bots.accessSettings](/constructor/bots.accessSettings/) — настройки ограничения доступа для [управляемого бота »](/api/bots/managed-bots/#managing-a-managed-bot).

##### Изменённые конструкторы

-   Добавлен параметр **bot\_guestchat** в [user](/constructor/user/)
-   Добавлен параметр **guestchat\_via\_from** в [message](/constructor/message/)
-   Добавлен параметр **premium\_days** в [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/)
-   Добавлены параметры **subscribers\_only**, **countries\_iso2** в [poll](/constructor/poll/)
-   Добавлен параметр **can\_view\_stats** в [pollResults](/constructor/pollResults/)
-   Добавлен параметр **send\_reactions** в [chatBannedRights](/constructor/chatBannedRights/)
-   Добавлен параметр **premium\_days** в [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/)

#### [Изменения в файле карты базы данных ссылок на файлы »](/api/file-references/)

##### Новые входящие обходчики

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateBotGuestChatQuery, params: [message, reference_messages], type: Update}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getPersonalChannelHistory}
    ```

##### Новые исходящие обходчики

-   Добавлено

    ```
    traverseMethodCall{name: messages.setBotGuestChatResult, params: [result]}
    ```

#### [Схема](/schema/)

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
auth.sentCodePaymentRequired#f8827ebf store_product:string phone_code_hash:string support_email_address:string support_email_subject:string premium_days:int currency:string amount:long = auth.SentCode;
updateBotGuestChatQuery#cdd4093d flags:# query_id:long message:Message reference_messages:flags.0?Vector<Message> qts:int = Update;
updateAiComposeTones#8c0f91fb = Update;
topPeerCategoryBotsGuestChat#6c24f3dd = TopPeerCategory;
poll#966e2dbf id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true open_answers:flags.6?true revoting_disabled:flags.7?true shuffle_answers:flags.8?true hide_results_until_close:flags.9?true creator:flags.10?true subscribers_only:flags.11?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int countries_iso2:flags.12?Vector<string> hash:long = Poll;
pollResults#ba7bb15e flags:# min:flags.0?true has_unread_votes:flags.6?true can_view_stats:flags.7?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> solution_media:flags.5?MessageMedia = PollResults;
chatBannedRights#9f120418 flags:# view_messages:flags.0?true send_messages:flags.1?true send_media:flags.2?true send_stickers:flags.3?true send_gifs:flags.4?true send_games:flags.5?true send_inline:flags.6?true embed_links:flags.7?true send_polls:flags.8?true change_info:flags.10?true invite_users:flags.15?true pin_messages:flags.17?true manage_topics:flags.18?true send_photos:flags.19?true send_videos:flags.20?true send_roundvideos:flags.21?true send_audios:flags.22?true send_voices:flags.23?true send_docs:flags.24?true send_plain:flags.25?true edit_rank:flags.26?true send_reactions:flags.27?true until_date:int = ChatBannedRights;
webPageAttributeAiComposeTone#7781fe18 emoji_id:long = WebPageAttribute;
inputStorePaymentAuthCode#3fc18057 flags:# restore:flags.0?true phone_number:string phone_code_hash:string premium_days:int currency:string amount:long = InputStorePaymentPurpose;
stats.pollStats#2999beed votes_graph:StatsGraph = stats.PollStats;
inputAiComposeToneDefault#1fe9a9bf tone:string = InputAiComposeTone;
inputAiComposeToneID#0773c080 id:long access_hash:long = InputAiComposeTone;
inputAiComposeToneSlug#1fa01357 slug:string = InputAiComposeTone;
aiComposeTone#cff63ea9 flags:# creator:flags.0?true id:long access_hash:long slug:string title:string emoji_id:flags.1?long prompt:flags.4?string installs_count:flags.2?int author_id:flags.3?long example_english:flags.5?AiComposeToneExample = AiComposeTone;
aiComposeToneDefault#9bad6414 tone:string emoji_id:long title:string = AiComposeTone;
aicompose.tonesNotModified#c1f46103 = aicompose.Tones;
aicompose.tones#6c9d0efe hash:long tones:Vector<AiComposeTone> users:Vector<User> = aicompose.Tones;
aiComposeToneExample#f1d628ec from:TextWithEntities to:TextWithEntities = AiComposeToneExample;
bots.accessSettings#dd1fbf93 flags:# restricted:flags.0?true add_users:flags.1?Vector<User> = bots.AccessSettings;
---functions---
contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true bots_guestchat:flags.17?true offset:int limit:int hash:long = contacts.TopPeers;
messages.composeMessageWithAI#daecc589 flags:# proofread:flags.0?true emojify:flags.3?true text:TextWithEntities translate_to_lang:flags.1?string tone:flags.2?InputAiComposeTone = messages.ComposedMessageWithAI;
messages.setBotGuestChatResult#b8f106e3 query_id:long result:InputBotInlineResult = InputBotInlineMessageID;
messages.deleteParticipantReactions#a0b80cf8 peer:InputPeer participant:InputPeer = Bool;
messages.deleteParticipantReaction#e3b7f82c peer:InputPeer msg_id:int participant:InputPeer = Updates;
messages.getPersonalChannelHistory#55fb0996 user_id:InputUser limit:int max_id:int min_id:int hash:long = messages.Messages;
bots.getAccessSettings#213853a3 bot:InputUser = bots.AccessSettings;
bots.editAccessSettings#31813cd8 flags:# restricted:flags.0?true bot:InputUser add_users:flags.1?Vector<InputUser> = Bool;
stats.getPollStats#c27dfa68 flags:# dark:flags.0?true peer:InputPeer msg_id:int = stats.PollStats;
aicompose.createTone#4aa83913 flags:# display_author:flags.0?true emoji_id:long title:string prompt:string = AiComposeTone;
aicompose.updateTone#903bcf59 flags:# tone:InputAiComposeTone display_author:flags.0?Bool emoji_id:flags.1?long title:flags.2?string prompt:flags.3?string = AiComposeTone;
aicompose.saveTone#1782cbb1 tone:InputAiComposeTone unsave:Bool = Bool;
aicompose.deleteTone#dd39316a tone:InputAiComposeTone = Bool;
aicompose.getTone#b2e8ba03 tone:InputAiComposeTone = aicompose.Tones;
aicompose.getTones#abd59201 hash:long = aicompose.Tones;
aicompose.getToneExample#d1b4ab14 tone:InputAiComposeTone num:int = AiComposeToneExample;
```

### [Слой 224](https://core.telegram.org/schema?layer=224)

Этот слой вводит следующие возможности:

-   [ИИ-редактор сообщений »](/api/ai/#compose-messages)
-   [Сущности оформления для показа различий »](/api/entities/#diff-entities)
-   [Просмотры сообщений и метрики прочтения »](/api/views/)
-   [Управляемые боты »](/api/bots/managed-bots/)
-   [Сведения об управляющем боте »](/api/profile/#managed-bot-manager)
-   [Запросы пиров из Mini App »](/api/bots/buttons/#requesting-peers-via-mini-apps)
-   [Подробные метрики сообщений »](/api/views/#read-metrics)
-   [Опросы со свободными вариантами ответа »](/api/poll/#open-answer-polls)
-   [Непрочитанные голоса в опросах »](/api/poll/#unread-poll-votes)
-   [Медиавложения к вариантам ответа »](/api/poll/#sending-a-poll)
-   [Ответы на варианты опроса »](/api/poll/#replying-to-poll-options)
-   [Поиск сообщений с опросами »](/api/poll/#searching-for-polls)
-   [Предупреждение о неофициальном клиенте »](/api/profile/#unofficial-client-warning)

#### Константы API

##### Входящие веб-события

Входящие веб-события описаны [здесь »](/api/web-events/#event-types).

-   Добавлено [`web_app_request_chat` »](/api/web-events/#web-app-request-chat)

##### Исходящие события Mini App

Исходящие события Mini App описаны [здесь »](/api/bots/webapps/#incoming-events-client-to-mini-app).

-   Добавлено [`requested_chat_failed` »](/api/bots/webapps/#requested-chat-failed)
-   Добавлено [`requested_chat_sent` »](/api/bots/webapps/#requested-chat-sent)

##### Возможности Premium

[Идентификаторы возможностей Telegram Premium »](/api/premium/#telegram-premium-features).

-   Добавлен [`ai_compose` »](/api/premium/#ai-compose)

##### Ограничения Premium

[Идентификаторы ограничений Telegram Premium »](/api/premium/#double-limits).

-   Добавлен [`double_limits__bots_create` »](/api/premium/#double-limits-bots-create)

##### Значения типа веб-страницы

Значения типа веб-страницы из конструктора [webPage](/constructor/webPage/).

-   Добавлено `telegram_newbot`

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/) — вызывает ИИ-редактор Telegram, который может перевести, преобразовать, исправить и (или) дополнить эмодзи ваше сообщение множеством разных способов; работает приватно на базе [Cocoon](https://cocoon.org), подробнее [здесь »](/api/ai/#compose-messages)!
-   Добавлен [messages.reportReadMetrics](/method/messages.reportReadMetrics/) — сообщает метрики прочтения для видимых сообщений, показывая, как долго каждое сообщение оставалось в видимой области чата; полное описание процесса см. [здесь »](/api/views/#read-metrics).
-   Добавлен [messages.reportMusicListen](/method/messages.reportMusicListen/) — сообщает длительность прослушивания музыкального трека (аудиодокумента без флага `voice`); полное описание процесса см. [здесь »](/api/views/#music-listens).
-   Добавлен [messages.addPollAnswer](/method/messages.addPollAnswer/) — добавляет вариант ответа в [опрос со свободными вариантами ответа »](/api/poll/#open-answer-polls)
-   Добавлен [messages.deletePollAnswer](/method/messages.deletePollAnswer/) — удаляет вариант ответа из [опроса со свободными вариантами ответа »](/api/poll/#open-answer-polls)
-   Добавлен [messages.getUnreadPollVotes](/method/messages.getUnreadPollVotes/) — получает сообщения с опросами, в которых есть [непрочитанные голоса »](/api/poll/#unread-poll-votes)
-   Добавлен [messages.readPollVotes](/method/messages.readPollVotes/) — помечает все [непрочитанные голоса в опросах »](/api/poll/#unread-poll-votes) в чате как прочитанные
-   Добавлен [bots.checkUsername](/method/bots.checkUsername/) — проверяет, свободно ли имя пользователя и допустимо ли оно при [создании управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot).
-   Добавлен [bots.createBot](/method/bots.createBot/) — создаёт [управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot), принадлежащего текущему пользователю и контролируемого указанным управляющим ботом.
-   Добавлен [bots.exportBotToken](/method/bots.exportBotToken/) — экспортирует токен [управляемого бота »](/api/bots/managed-bots/#managing-a-managed-bot); вызывать может только управляющий бот.
-   Добавлен [bots.requestWebViewButton](/method/bots.requestWebViewButton/) — боты могут использовать этот метод, чтобы подготовить кнопку запроса пира для [Mini App](/api/bots/webapps/), подробнее [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).
-   Добавлен [bots.getRequestedWebViewButton](/method/bots.getRequestedWebViewButton/) — получает кнопку запроса пира, подготовленную ботом для [Mini App](/api/bots/webapps/) с помощью [bots.requestWebViewButton](/method/bots.requestWebViewButton/); вызывается, когда Mini App генерирует событие [`web_app_request_chat`](/api/web-events/#web-app-request-chat), подробнее [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

##### Изменённые методы

-   Добавлен параметр **poll\_hash** в [messages.getPollResults](/method/messages.getPollResults/)
-   Добавлен параметр **tone** в [messages.translateText](/method/messages.translateText/)
-   Добавлены параметры **flags**, **webapp\_req\_id**, тип **msg\_id** изменён с **int** на **flags.0?int** в [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)
-   Добавлен параметр **tone** в [messages.summarizeText](/method/messages.summarizeText/)
-   Добавлен параметр **music** в [stories.sendStory](/method/stories.sendStory/)
-   Добавлен параметр **music** в [stories.editStory](/method/stories.editStory/)

##### Новые конструкторы

-   Добавлен [messageActionPollAppendAnswer](/constructor/messageActionPollAppendAnswer/) — в [опрос со свободными вариантами ответа »](/api/poll/#open-answer-polls) добавлен новый вариант ответа
-   Добавлен [messageActionPollDeleteAnswer](/constructor/messageActionPollDeleteAnswer/) — из [опроса со свободными вариантами ответа »](/api/poll/#open-answer-polls) удалён вариант ответа
-   Добавлен [messageActionManagedBotCreated](/constructor/messageActionManagedBotCreated/) — сервисное сообщение, отправляемое пользователем управляющему боту, когда через него создаётся новый [управляемый бот »](/api/bots/managed-bots/) вызовом [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) с [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/), подробнее [здесь »](/api/bots/buttons/#requesting-a-managed-bot).
-   Добавлен [inputMessagesFilterPoll](/constructor/inputMessagesFilterPoll/) — фильтр для сообщений с опросами, см. [поиск опросов »](/api/poll/#searching-for-polls)
-   Добавлен [updateManagedBot](/constructor/updateManagedBot/) — только для [управляющих ботов](/api/bots/managed-bots/): бот, управляемый текущим авторизованным ботом, был создан или изменён.
-   Добавлен [messageEntityDiffInsert](/constructor/messageEntityDiffInsert/) — обозначает добавление в различиях: отображать его следует, просто подчеркнув указанный участок и окрасив его в зелёный цвет; подробнее об отображении сущностей различий см. [здесь »](/api/entities/#diff-entities).
-   Добавлен [messageEntityDiffReplace](/constructor/messageEntityDiffReplace/) — обозначает замену в различиях, отображать её следует так:
-   Добавлен [messageEntityDiffDelete](/constructor/messageEntityDiffDelete/) — обозначает удаление в различиях: отображать его следует, просто подчеркнув указанный участок и окрасив его в красный цвет; подробнее об отображении сущностей различий см. [здесь »](/api/entities/#diff-entities).
-   Добавлен [inputPollAnswer](/constructor/inputPollAnswer/) — вариант ответа, добавляемый в [опрос со свободными вариантами ответа »](/api/poll/#open-answer-polls)
-   Добавлен [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/) — используется в [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) [управляющим ботом](/api/bots/managed-bots/), чтобы предложить пользователю создать нового [управляемого бота »](/api/bots/managed-bots/), подробнее [здесь »](/api/bots/buttons/#requesting-a-managed-bot).
-   Добавлен [inputMessageReadMetric](/constructor/inputMessageReadMetric/) — метрика прочтения для одного показа сообщения; описывает, как долго сообщение было видно в области просмотра чата.
-   Добавлен [bots.exportedBotToken](/constructor/bots.exportedBotToken/) — токен [управляемого бота »](/api/bots/managed-bots/#managing-a-managed-bot), экспортированный управляющим ботом.
-   Добавлен [bots.requestedButton](/constructor/bots.requestedButton/) — содержит идентификатор запроса, который бот должен передать в [Mini App](/api/bots/webapps/) после подготовки кнопки запроса пира с помощью [bots.requestWebViewButton](/method/bots.requestWebViewButton/), подробнее [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).
-   Добавлен [messages.composedMessageWithAI](/constructor/messages.composedMessageWithAI/) — представляет сообщение, изменённое ИИ.

##### Изменённые конструкторы

-   Добавлены параметры **live\_photo**, **video** в [inputMediaUploadedPhoto](/constructor/inputMediaUploadedPhoto/)
-   Добавлены параметры **live\_photo**, **video** в [inputMediaPhoto](/constructor/inputMediaPhoto/)
-   Добавлены параметры **attached\_media**, **solution\_media**, тип **correct\_answers** изменён с **flags.0?Vector<bytes>** на **flags.0?Vector<int>** в [inputMediaPoll](/constructor/inputMediaPoll/)
-   Добавлен параметр **bot\_can\_manage\_bots** в [user](/constructor/user/)
-   Добавлены параметры **live\_photo**, **video** в [messageMediaPhoto](/constructor/messageMediaPhoto/)
-   Добавлены параметры **flags**, **attached\_media** в [messageMediaPoll](/constructor/messageMediaPoll/)
-   Добавлен параметр **unread\_poll\_votes\_count** в [dialog](/constructor/dialog/)
-   Добавлены параметры **unofficial\_security\_risk**, **bot\_manager\_id** в [userFull](/constructor/userFull/)
-   Добавлены параметры **peer**, **msg\_id**, **top\_msg\_id** в [updateMessagePoll](/constructor/updateMessagePoll/)
-   Добавлен параметр **positions** в [updateMessagePollVote](/constructor/updateMessagePollVote/)
-   Добавлены параметры **flags**, **media**, **added\_by**, **date** в [pollAnswer](/constructor/pollAnswer/)
-   Добавлены параметры **open\_answers**, **revoting\_disabled**, **shuffle\_answers**, **hide\_results\_until\_close**, **creator**, **hash** в [poll](/constructor/poll/)
-   Добавлен параметр **recent\_voters**, тип **voters** изменён с **int** на **flags.2?int** в [pollAnswerVoters](/constructor/pollAnswerVoters/)
-   Добавлены параметры **has\_unread\_votes**, **solution\_media** в [pollResults](/constructor/pollResults/)
-   Добавлены параметры **is\_app**, **verified\_app\_name** в [urlAuthResultRequest](/constructor/urlAuthResultRequest/)
-   Добавлен параметр **poll\_option** в [messageReplyHeader](/constructor/messageReplyHeader/)
-   Добавлен параметр **unread\_poll\_votes\_count** в [forumTopic](/constructor/forumTopic/)
-   Добавлен параметр **music** в [storyItem](/constructor/storyItem/)
-   Добавлен параметр **poll\_option** в [inputReplyToMessage](/constructor/inputReplyToMessage/)
-   Добавлен параметр **poll\_votes\_notify\_from** в [reactionsNotifySettings](/constructor/reactionsNotifySettings/)

#### [Изменения в файле карты базы данных ссылок на файлы »](/api/file-references/)

##### Новые источники

-   Добавлен [updateMessagePoll](/constructor/updateMessagePoll/) —

    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{peer: extractPeerIdFromPeerAndStore(updateMessagePoll.peer?abort_if_empty), id: updateMessagePoll.msg_id?abort_if_empty, quick_reply_shortcut_id: false}
    ```

##### Новые входящие обходчики

-   Добавлен

    ```
    traverseIncomingConstructor{predicate: messageActionPollAppendAnswer, params: [answer], type: MessageAction}
    ```

-   Добавлен

    ```
    traverseIncomingConstructor{predicate: messageActionPollDeleteAnswer, params: [answer], type: MessageAction}
    ```

-   Добавлен

    ```
    traverseIncomingConstructor{predicate: messageMediaPoll, params: [poll, results, attached_media], type: MessageMedia}
    ```

-   Добавлен

    ```
    traverseIncomingConstructor{predicate: poll, params: [answers], type: Poll}
    ```

-   Добавлен

    ```
    traverseIncomingConstructor{predicate: pollAnswer, params: [media], type: PollAnswer}
    ```

-   Добавлен

    ```
    traverseIncomingConstructor{predicate: pollResults, params: [solution_media], type: PollResults}
    ```

-   Добавлен

    ```
    traverseIncomingConstructor{predicate: updateMessagePoll, params: [poll, results], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage)], type: Update}
    ```

-   Добавлен

    ```
    traverseMethodResult{name: messages.getUnreadPollVotes}
    ```

##### Изменённые входящие обходчики

-   Обходчик messageMediaPhoto traverseIncomingConstructor изменён с

    ```
    traverseIncomingConstructor{predicate: messageMediaPhoto, params: [photo], type: MessageMedia}
    ```

    на

    ```
    traverseIncomingConstructor{predicate: messageMediaPhoto, params: [photo, video], type: MessageMedia}
    ```

-   Обходчик storyItem traverseIncomingConstructor изменён с

    ```
    traverseIncomingConstructor{predicate: storyItem, params: [media], push_sources: [fileSourceStory (needs stories.getPinnedStories), fileSourceStory (needs stories.getStoriesArchive), fileSourceStory (needs stories.getStoriesByID), fileSourceStory (needs stories.getAlbumStories), fileSourceStory (needs peerStories), fileSourceStory], type: StoryItem}
    ```

    на

    ```
    traverseIncomingConstructor{predicate: storyItem, params: [media, music], push_sources: [fileSourceStory (needs stories.getPinnedStories), fileSourceStory (needs stories.getStoriesArchive), fileSourceStory (needs stories.getStoriesByID), fileSourceStory (needs stories.getAlbumStories), fileSourceStory (needs peerStories), fileSourceStory], type: StoryItem}
    ```

##### Новые исходящие обходчики

-   Добавлен

    ```
    traverseMethodCall{name: messages.addPollAnswer, params: [answer]}
    ```

-   Добавлен

    ```
    traverseMethodCall{name: messages.reportMusicListen, params: [id]}
    ```

-   Добавлен

    ```
    traverseOutgoingConstructor{predicate: inputMediaPoll, params: [attached_media, solution_media], type: InputMedia}
    ```

-   Добавлен

    ```
    traverseOutgoingConstructor{predicate: inputPollAnswer, params: [media], type: PollAnswer}
    ```

##### Изменённые исходящие обходчики

-   Обходчик stories.editStory traverseMethodCall изменён с

    ```
    traverseMethodCall{name: stories.editStory, params: [media]}
    ```

    на

    ```
    traverseMethodCall{name: stories.editStory, params: [media, music]}
    ```

-   Обходчик stories.sendStory traverseMethodCall изменён с

    ```
    traverseMethodCall{name: stories.sendStory, params: [media]}
    ```

    на

    ```
    traverseMethodCall{name: stories.sendStory, params: [media, music]}
    ```

-   Обходчик inputMediaPhoto traverseOutgoingConstructor изменён с

    ```
    traverseOutgoingConstructor{predicate: inputMediaPhoto, params: [id], type: InputMedia}
    ```

    на

    ```
    traverseOutgoingConstructor{predicate: inputMediaPhoto, params: [id, video], type: InputMedia}
    ```

-   Обходчик inputMediaUploadedPhoto traverseOutgoingConstructor изменён с

    ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedPhoto, params: [file, stickers], type: InputMedia}
    ```

    на

    ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedPhoto, params: [file, stickers, video], type: InputMedia}
    ```

#### [Схема](/schema/)

```
inputMediaUploadedPhoto#7d8375da flags:# spoiler:flags.2?true live_photo:flags.3?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int video:flags.3?InputDocument = InputMedia;
inputMediaPhoto#e3af4434 flags:# spoiler:flags.1?true live_photo:flags.2?true id:InputPhoto ttl_seconds:flags.0?int video:flags.2?InputDocument = InputMedia;
inputMediaPoll#883a4108 flags:# poll:Poll correct_answers:flags.0?Vector<int> attached_media:flags.3?InputMedia solution:flags.1?string solution_entities:flags.1?Vector<MessageEntity> solution_media:flags.2?InputMedia = InputMedia;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
messageMediaPhoto#e216eb63 flags:# spoiler:flags.3?true live_photo:flags.4?true photo:flags.0?Photo ttl_seconds:flags.2?int video:flags.4?Document = MessageMedia;
messageMediaPoll#773f4e66 flags:# poll:Poll results:PollResults attached_media:flags.0?MessageMedia = MessageMedia;
messageActionPollAppendAnswer#9da1cd6c answer:PollAnswer = MessageAction;
messageActionPollDeleteAnswer#399674dc answer:PollAnswer = MessageAction;
messageActionManagedBotCreated#16605e3e bot_id:long = MessageAction;
dialog#fc89f7f3 flags:# pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int unread_poll_votes_count:int notify_settings:PeerNotifySettings pts:flags.0?int draft:flags.1?DraftMessage folder_id:flags.4?int ttl_period:flags.5?int = Dialog;
userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;
inputMessagesFilterPoll#fa2bc90a = MessagesFilter;
updateMessagePoll#d64c522b flags:# peer:flags.1?Peer msg_id:flags.1?int top_msg_id:flags.2?int poll_id:long poll:flags.0?Poll results:PollResults = Update;
updateMessagePollVote#7699f014 poll_id:long peer:Peer options:Vector<bytes> positions:Vector<int> qts:int = Update;
updateManagedBot#4880ed9a user_id:long bot_id:long qts:int = Update;
messageEntityDiffInsert#71777116 offset:int length:int = MessageEntity;
messageEntityDiffReplace#c6c1e5a7 offset:int length:int old_text:string = MessageEntity;
messageEntityDiffDelete#0652c1c5 offset:int length:int = MessageEntity;
pollAnswer#4b7d786a flags:# text:TextWithEntities option:bytes media:flags.0?MessageMedia added_by:flags.1?Peer date:flags.1?int = PollAnswer;
inputPollAnswer#199fed96 flags:# text:TextWithEntities media:flags.0?InputMedia = PollAnswer;
poll#b8425be9 id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true open_answers:flags.6?true revoting_disabled:flags.7?true shuffle_answers:flags.8?true hide_results_until_close:flags.9?true creator:flags.10?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int hash:long = Poll;
pollAnswerVoters#3645230a flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:flags.2?int recent_voters:flags.2?Vector<Peer> = PollAnswerVoters;
pollResults#ba7bb15e flags:# min:flags.0?true has_unread_votes:flags.6?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> solution_media:flags.5?MessageMedia = PollResults;
urlAuthResultRequest#3cd623ec flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true is_app:flags.6?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long verified_app_name:flags.7?string = UrlAuthResult;
messageReplyHeader#1b97dd66 flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int poll_option:flags.12?bytes = MessageReplyHeader;
forumTopic#fcdad815 flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int unread_poll_votes_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
requestPeerTypeCreateBot#3e81e078 flags:# bot_managed:flags.0?true suggested_name:flags.1?string suggested_username:flags.2?string = RequestPeerType;
storyItem#16a4b93c flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> music:flags.20?Document = StoryItem;
inputReplyToMessage#3bd4b7c2 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int poll_option:flags.7?bytes = InputReplyTo;
reactionsNotifySettings#71e4ea58 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom poll_votes_notify_from:flags.2?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
inputMessageReadMetric#402b4495 msg_id:int view_id:long time_in_view_ms:int active_time_in_view_ms:int height_to_viewport_ratio_permille:int seen_range_ratio_permille:int = InputMessageReadMetric;
bots.exportedBotToken#3c60b621 token:string = bots.ExportedBotToken;
bots.requestedButton#f13bbcd7 webapp_req_id:string = bots.RequestedButton;
messages.composedMessageWithAI#90d7adfa flags:# result_text:TextWithEntities diff_text:flags.0?TextWithEntities = messages.ComposedMessageWithAI;
---functions---
messages.getPollResults#eda3e33b peer:InputPeer msg_id:int poll_hash:long = Updates;
messages.translateText#a5eec345 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string tone:flags.2?string = messages.TranslatedText;
messages.sendBotRequestedPeer#6c5cf2a7 flags:# peer:InputPeer msg_id:flags.0?int webapp_req_id:flags.1?string button_id:int requested_peers:Vector<InputPeer> = Updates;
messages.summarizeText#abbbd346 flags:# peer:InputPeer id:int to_lang:flags.0?string tone:flags.2?string = TextWithEntities;
messages.composeMessageWithAI#fd426afe flags:# proofread:flags.0?true emojify:flags.3?true text:TextWithEntities translate_to_lang:flags.1?string change_tone:flags.2?string = messages.ComposedMessageWithAI;
messages.reportReadMetrics#4067c5e6 peer:InputPeer metrics:Vector<InputMessageReadMetric> = Bool;
messages.reportMusicListen#ddbcd819 id:InputDocument listened_duration:int = Bool;
messages.addPollAnswer#19bc4b6d peer:InputPeer msg_id:int answer:PollAnswer = Updates;
messages.deletePollAnswer#ac8505a5 peer:InputPeer msg_id:int option:bytes = Updates;
messages.getUnreadPollVotes#43286cf2 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.readPollVotes#1720b4d8 flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;
bots.checkUsername#87f2219b username:string = Bool;
bots.createBot#e5b17f2b flags:# via_deeplink:flags.0?true name:string username:string manager_id:InputUser = User;
bots.exportBotToken#bd0d99eb bot:InputUser revoke:Bool = bots.ExportedBotToken;
bots.requestWebViewButton#31a2a35e user_id:InputUser button:KeyboardButton = bots.RequestedButton;
bots.getRequestedWebViewButton#bf25b7f3 bot:InputUser webapp_req_id:string = KeyboardButton;
stories.sendStory#8f9e6898 flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> music:flags.9?InputDocument = Updates;
stories.editStory#2c63a72b flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> music:flags.4?InputDocument = Updates;
```

### [Слой 223](https://core.telegram.org/schema?layer=223)

Этот слой вводит:

-   [Вход через Telegram по OAuth »](/api/url-authorization/#oauth-authorization)
-   [Защиту содержимого в личных чатах »](/api/content-protection/#for-users)
-   [Метки участников группы для всех пользователей, а не только для администраторов »](/api/rank/)
-   [Сущности оформления с датой »](/api/entities/#date-entities)
-   [Новую процедуру получения сведений об администраторе, который станет владельцем обычной группы, супергруппы или канала, если прежний владелец покинет их »](/api/channel/#leaving-groups-channels)
-   [Передачу прав владельца для обычных групп (наряду с супергруппами и каналами) »](/api/channel/#transferring-ownership-of-a-group-channel)
-   [Новый фильтр, возвращающий только перепродаваемые подарки, которые можно купить за звёзды](/method/payments.getResaleStarGifts/)

#### Константы API

##### Входящие веб-события

Входящие веб-события описаны [здесь »](/api/web-events/#event-types).

-   Добавлено [`oauth_request` »](/api/web-events/#oauth-request)

##### Исходящие события Mini App

Исходящие события Mini App описаны [здесь »](/api/bots/webapps/#incoming-events-client-to-mini-app).

-   Добавлено [`oauth_supported` »](/api/bots/webapps/#oauth-supported)
-   Добавлено [`oauth_result_confirmed` »](/api/bots/webapps/#oauth-result-confirmed)
-   Добавлено [`oauth_result_failed` »](/api/bots/webapps/#oauth-result-failed)

##### Возможности Premium

[Идентификаторы возможностей Telegram Premium »](/api/premium/#telegram-premium-features).

-   Добавлен [`pm_noforwards` »](/api/premium/#pm-noforwards)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [messages.editChatCreator](/method/messages.editChatCreator/) — передаёт права владельца обычной группы, супергруппы или канала другому пользователю; полное описание процедуры см. [здесь »](/api/channel/#transferring-ownership-of-a-group-channel).
-   Добавлен [messages.getFutureChatCreatorAfterLeave](/method/messages.getFutureChatCreatorAfterLeave/) — только для владельцев групп и каналов: возвращает идентификатор пользователя, который станет новым владельцем группы, если мы решим её покинуть; подробнее о всей процедуре см. [здесь »](/api/channel/#leaving-groups-channels).
-   Добавлен [messages.editChatParticipantRank](/method/messages.editChatParticipantRank/) — изменяет [метку »](/api/rank/) участника группы.
-   Добавлен [messages.declineUrlAuth](/method/messages.declineUrlAuth/) — отклоняет входящий [запрос авторизации по OAuth »](/api/url-authorization/#oauth-authorization), уведомляя сервер о том, что пользователь отказался от входа.
-   Добавлен [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) — проверяет выбранный пользователем код сверки на совпадение с кодом, показанным на странице входа, в рамках [процедуры авторизации по OAuth »](/api/url-authorization/#oauth-authorization).

##### Изменённые методы

-   Добавлен параметр **flags**, тип **rank** изменён с **string** на **flags.0?string** в [channels.editAdmin](/method/channels.editAdmin/)
-   Добавлен параметр **in\_app\_origin** в [messages.requestUrlAuth](/method/messages.requestUrlAuth/)
-   Добавлены параметры **share\_phone\_number**, **match\_code** в [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)
-   Добавлены параметры **flags**, **request\_msg\_id** в [messages.toggleNoForwards](/method/messages.toggleNoForwards/)
-   Добавлен параметр **stars\_only** в [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

##### Удалённые методы

-   Удалён channels.editCreator
-   Удалён channels.getFutureCreatorAfterLeave

##### Новые конструкторы

-   Добавлен [messageEntityFormattedDate](/constructor/messageEntityFormattedDate/) — обозначает конкретный момент времени и отображается так, как описано [здесь »](/api/entities/#date-entities)
-   Добавлен [updateChatParticipantRank](/constructor/updateChatParticipantRank/) — [метка »](/api/rank/) участника [обычной группы »](/api/channel/#basic-groups) изменилась.
-   Добавлен [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/) — отправляется только в личных чатах при включении или отключении [защиты содержимого »](/api/content-protection/#for-users).
-   Добавлен [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) — отправляется только в личных чатах, если собеседник попросил отключить [защиту содержимого »](/api/content-protection/#for-users).
-   Добавлен [channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/) — [метка »](/api/rank/) участника была изменена.

##### Изменённые конструкторы

-   Добавлены параметры **flags**, **rank** в [chatParticipant](/constructor/chatParticipant/)
-   Добавлен параметр **from\_rank** в [message](/constructor/message/)
-   Добавлены параметры **noforwards\_my\_enabled**, **noforwards\_peer\_enabled** в [userFull](/constructor/userFull/)
-   Добавлен параметр **rank** в [channelParticipant](/constructor/channelParticipant/)
-   Добавлен параметр **rank** в [channelParticipantSelf](/constructor/channelParticipantSelf/)
-   Добавлены параметры **flags**, **rank** в [chatParticipantCreator](/constructor/chatParticipantCreator/)
-   Добавлены параметры **flags**, **rank** в [chatParticipantAdmin](/constructor/chatParticipantAdmin/)
-   Добавлен параметр **rank** в [channelParticipantBanned](/constructor/channelParticipantBanned/)
-   Добавлен параметр **edit\_rank** в [channelAdminLogEventsFilter](/constructor/channelAdminLogEventsFilter/)
-   Добавлен параметр **manage\_ranks** в [chatAdminRights](/constructor/chatAdminRights/)
-   Добавлен параметр **edit\_rank** в [chatBannedRights](/constructor/chatBannedRights/)
-   Добавлены параметры **match\_codes\_first**, **match\_codes**, **user\_id\_hint** в [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

#### Изменения в PUSH-уведомлениях

##### Новые PUSH-уведомления

-   Добавлено [OAUTH\_REQUEST](/api/push-updates/#oauth-request) — `Login request for {1} from {2}`

#### [Схема](/schema/)

```
chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
message#3ae56482 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
userFull#a02bc13e flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities = UserFull;
channelParticipant#1bd54456 flags:# user_id:long date:int subscription_until_date:flags.0?int rank:flags.2?string = ChannelParticipant;
channelParticipantSelf#a9478a1a flags:# via_request:flags.0?true user_id:long inviter_id:long date:int subscription_until_date:flags.1?int rank:flags.2?string = ChannelParticipant;
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
chatParticipantAdmin#0360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
channelParticipantBanned#d5f0ad91 flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights rank:flags.2?string = ChannelParticipant;
channelAdminLogEventsFilter#ea107ae4 flags:# join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true sub_extend:flags.18?true edit_rank:flags.19?true = ChannelAdminLogEventsFilter;
chatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true manage_direct_messages:flags.17?true manage_ranks:flags.18?true = ChatAdminRights;
chatBannedRights#9f120418 flags:# view_messages:flags.0?true send_messages:flags.1?true send_media:flags.2?true send_stickers:flags.3?true send_gifs:flags.4?true send_games:flags.5?true send_inline:flags.6?true embed_links:flags.7?true send_polls:flags.8?true change_info:flags.10?true invite_users:flags.15?true pin_messages:flags.17?true manage_topics:flags.18?true send_photos:flags.19?true send_videos:flags.20?true send_roundvideos:flags.21?true send_audios:flags.22?true send_voices:flags.23?true send_docs:flags.24?true send_plain:flags.25?true edit_rank:flags.26?true until_date:int = ChatBannedRights;
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
messageEntityFormattedDate#904ac7c7 flags:# relative:flags.0?true short_time:flags.1?true long_time:flags.2?true short_date:flags.3?true long_date:flags.4?true day_of_week:flags.5?true offset:int length:int date:int = MessageEntity;
updateChatParticipantRank#bd8367b9 chat_id:long user_id:long rank:string version:int = Update;
messageActionNoForwardsToggle#bf7d6572 prev_value:Bool new_value:Bool = MessageAction;
messageActionNoForwardsRequest#3e2793ba flags:# expired:flags.0?true prev_value:Bool new_value:Bool = MessageAction;
channelAdminLogEventActionParticipantEditRank#5806b4ec user_id:long prev_rank:string new_rank:string = ChannelAdminLogEventAction;
---functions---
channels.editAdmin#9a98ad68 flags:# channel:InputChannel user_id:InputUser admin_rights:ChatAdminRights rank:flags.0?string = Updates;
messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;
messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;
messages.toggleNoForwards#b2081a35 flags:# peer:InputPeer enabled:Bool request_msg_id:flags.0?int = Updates;
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
messages.editChatCreator#f743b857 peer:InputPeer user_id:InputUser password:InputCheckPasswordSRP = Updates;
messages.getFutureChatCreatorAfterLeave#3b7d0ea6 peer:InputPeer = User;
messages.editChatParticipantRank#a00f32b0 peer:InputPeer participant:InputPeer rank:string = Updates;
messages.declineUrlAuth#35436bbc url:string = Bool;
messages.checkUrlAuthMatchCode#c9a47b0b url:string match_code:string = Bool;
```

### [Слой 222](https://core.telegram.org/schema?layer=222)

Этот слой вводит следующие возможности:

-   [Собственный фон кнопок клавиатуры и подписи кнопок пользовательскими эмодзи »](/api/bots/buttons/#button-styles)
-   [Краткий пересказ сообщений с помощью ИИ »](/api/ai/#summarize-messages)
-   [Ковка подарков »](/api/gifts/#crafting-collectible-gifts)
-   [Новая процедура получения сведений об администраторе, который станет владельцем супергруппы или канала, если прежний владелец покинет их »](/api/channel/#leaving-groups-channels)

#### Константы API

##### Типы содержимого публикуемых историй

Типы содержимого историй, допустимые в [глубоких ссылках для публикации истории »](/api/links/#post-story-links).

-   Добавлен `photo`
-   Добавлен `video`
-   Добавлен `live`

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [messages.getEmojiGameInfo](/method/messages.getEmojiGameInfo/) — получает сведения об игре в кости.
-   Добавлен [messages.summarizeText](/method/messages.summarizeText/) — кратко пересказывает содержимое сообщения с помощью ИИ, подробнее см. [здесь »](/api/ai/#summarize-messages).
-   Добавлен [payments.getCraftStarGifts](/method/payments.getCraftStarGifts/) — получает принадлежащие пользователю [коллекционные подарки »](/api/gifts/#collectible-gifts) определённого типа, которые можно пустить на [ковку »](/api/gifts/#crafting-collectible-gifts).
-   Добавлен [payments.craftStarGift](/method/payments.craftStarGift/) — выковывает новый [коллекционный подарок »](/api/gifts/#collectible-gifts), объединяя от 1 до 4 принадлежащих пользователю коллекционных подарков одного и того же базового типа.
-   Добавлен [channels.getFutureCreatorAfterLeave](/method/channels.getFutureCreatorAfterLeave/)

##### Изменённые методы

-   Добавлен параметр **for\_craft** в [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

##### Новые конструкторы

-   Добавлен [messages.emojiGameOutcome](/constructor/messages.emojiGameOutcome/) — результат игры в кости.
-   Добавлен [inputMediaStakeDice](/constructor/inputMediaStakeDice/) — медиа игры в кости.
-   Добавлен [messages.emojiGameUnavailable](/constructor/messages.emojiGameUnavailable/) — сведения об игре в кости.
-   Добавлен [messages.emojiGameDiceInfo](/constructor/messages.emojiGameDiceInfo/) — сведения об игре в кости.
-   Добавлен [updateEmojiGameInfo](/constructor/updateEmojiGameInfo/) — обновление игры в кости.
-   Добавлен [inputPasskeyCredentialFirebasePNV](/constructor/inputPasskeyCredentialFirebasePNV/) — альтернативные учётные данные [passkey](/api/passkeys/), которые подтверждают владение номером телефона аккаунта через токен Firebase Phone Number Verification (PNV); применяются в официальных приложениях там, где невозможно создать полноценный [passkey с открытым ключом](/constructor/inputPasskeyCredentialPublicKey/) по WebAuthn, аналогично [аутентификации по SMS через Firebase »](/api/auth/).
-   Добавлен [starGiftAttributeRarity](/constructor/starGiftAttributeRarity/) — точное значение редкости атрибута коллекционного подарка.
-   Добавлен [starGiftAttributeRarityUncommon](/constructor/starGiftAttributeRarityUncommon/) — обозначает необычную редкость атрибута коллекционного подарка.
-   Добавлен [starGiftAttributeRarityRare](/constructor/starGiftAttributeRarityRare/) — обозначает редкую редкость атрибута коллекционного подарка.
-   Добавлен [starGiftAttributeRarityEpic](/constructor/starGiftAttributeRarityEpic/) — обозначает эпическую редкость атрибута коллекционного подарка.
-   Добавлен [starGiftAttributeRarityLegendary](/constructor/starGiftAttributeRarityLegendary/) — обозначает легендарную редкость атрибута коллекционного подарка.
-   Добавлен [updateStarGiftCraftFail](/constructor/updateStarGiftCraftFail/) — означает, что попытка [ковки »](/api/gifts/#crafting-collectible-gifts) не дала нового коллекционного подарка.
-   Добавлен [keyboardButtonStyle](/constructor/keyboardButtonStyle/) — этот конструктор позволяет задать кнопке собственный цвет фона и подпись пользовательским эмодзи, подробнее см. [здесь »](/api/bots/buttons/#button-styles).
-   Добавлен [messageActionNewCreatorPending](/constructor/messageActionNewCreatorPending/) — сервисное сообщение: отправляется в супергруппу, когда [создатель группы или канала покидает её »](/api/channel/#leaving-groups-channels), и означает, что передача прав владельца ожидает завершения. Пользователь `new_creator_id` станет новым владельцем через 7 дней, если прежний владелец не вернётся.
-   Добавлен [messageActionChangeCreator](/constructor/messageActionChangeCreator/) — сервисное сообщение: отправляется в супергруппу, когда [передача прав владельца завершается после ухода прежнего владельца »](/api/channel/#leaving-groups-channels) (через 7 дней после его ухода без возвращения), и означает, что права владельца перешли к новому владельцу.

##### Изменённые конструкторы

-   Добавлен параметр **summary\_from\_language** в [message](/constructor/message/)
-   Удалён параметр **legacy\_ios** в [messageService](/constructor/messageService/)
-   Добавлен параметр **bot\_forum\_can\_manage\_topics** в [user](/constructor/user/)
-   Добавлены параметры **flags**, **style** в [keyboardButton](/constructor/keyboardButton/)
-   Добавлен параметр **monoforum** в [channelForbidden](/constructor/channelForbidden/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonUrl](/constructor/keyboardButtonUrl/)
-   Добавлен параметр **style** в [keyboardButtonCallback](/constructor/keyboardButtonCallback/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonRequestPhone](/constructor/keyboardButtonRequestPhone/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonRequestGeoLocation](/constructor/keyboardButtonRequestGeoLocation/)
-   Добавлен параметр **style** в [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonGame](/constructor/keyboardButtonGame/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonBuy](/constructor/keyboardButtonBuy/)
-   Добавлен параметр **style** в [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/)
-   Добавлен параметр **style** в [inputKeyboardButtonUrlAuth](/constructor/inputKeyboardButtonUrlAuth/)
-   Добавлены параметры **request\_phone\_number**, **browser**, **platform**, **ip**, **region** в [urlAuthResultRequest](/constructor/urlAuthResultRequest/)
-   Добавлен параметр **flags**, тип **url** изменён с **string** на **flags.0?string** в [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/)
-   Добавлен параметр **style** в [keyboardButtonRequestPoll](/constructor/keyboardButtonRequestPoll/)
-   Добавлены параметры **flags**, **game\_outcome** в [messageMediaDice](/constructor/messageMediaDice/)
-   Добавлены параметры **flags**, **style** в [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonWebView](/constructor/keyboardButtonWebView/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)
-   Добавлен параметр **style** в [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)
-   Добавлены параметры **flags**, **style** в [keyboardButtonCopy](/constructor/keyboardButtonCopy/)
-   Добавлены параметры **flags**, **crafted**, **rarity**, удалён параметр **rarity\_permille** в [starGiftAttributeModel](/constructor/starGiftAttributeModel/)
-   Добавлен параметр **rarity**, удалён параметр **rarity\_permille** в [starGiftAttributePattern](/constructor/starGiftAttributePattern/)
-   Добавлен параметр **rarity**, удалён параметр **rarity\_permille** в [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/)
-   Добавлены параметры **burned**, **crafted**, **craft\_chance\_permille** в [starGiftUnique](/constructor/starGiftUnique/)
-   Добавлены параметры **craft**, **can\_craft\_at** в [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Добавлен параметр **can\_craft\_at** в [savedStarGift](/constructor/savedStarGift/)

#### Изменения в PUSH-уведомлениях

##### Новые PUSH-уведомления

-   Добавлено [STORY\_LIVE](/api/push-updates/#story-live) — `started a live stream!`

#### [Изменения в файле карты базы данных ссылок на файлы »](/api/file-references/)

##### Новые входящие обходчики

-   Добавлено

    ```
    traverseMethodResult{name: payments.getCraftStarGifts}
    ```

#### [Схема](/schema/)

```
message#9cb490e9 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
keyboardButton#7d170cff flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
channelForbidden#17d493d5 flags:# broadcast:flags.5?true megagroup:flags.8?true monoforum:flags.10?true id:long access_hash:long title:string until_date:flags.16?int = Chat;
keyboardButtonUrl#d80c25ec flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
keyboardButtonCallback#e62bc960 flags:# requires_password:flags.0?true style:flags.10?KeyboardButtonStyle text:string data:bytes = KeyboardButton;
keyboardButtonRequestPhone#417efd8f flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonRequestGeoLocation#aa40f94d flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonSwitchInline#991399fc flags:# same_peer:flags.0?true style:flags.10?KeyboardButtonStyle text:string query:string peer_types:flags.1?Vector<InlineQueryPeerType> = KeyboardButton;
keyboardButtonGame#89c590f9 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonBuy#3fa53905 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonUrlAuth#f51006f9 flags:# style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.0?string url:string button_id:int = KeyboardButton;
inputKeyboardButtonUrlAuth#68013e72 flags:# request_write_access:flags.0?true style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.1?string url:string bot:InputUser = KeyboardButton;
urlAuthResultRequest#32fabf1a flags:# request_write_access:flags.0?true request_phone_number:flags.1?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
keyboardButtonRequestPoll#7a11d782 flags:# style:flags.10?KeyboardButtonStyle quiz:flags.0?Bool text:string = KeyboardButton;
messageMediaDice#08cbec07 flags:# value:int emoticon:string game_outcome:flags.0?messages.EmojiGameOutcome = MessageMedia;
inputKeyboardButtonUserProfile#7d5e07c7 flags:# style:flags.10?KeyboardButtonStyle text:string user_id:InputUser = KeyboardButton;
keyboardButtonUserProfile#c0fd5d09 flags:# style:flags.10?KeyboardButtonStyle text:string user_id:long = KeyboardButton;
keyboardButtonWebView#e846b1a0 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
keyboardButtonSimpleWebView#e15c4370 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
keyboardButtonRequestPeer#5b0f15f5 flags:# style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
inputKeyboardButtonRequestPeer#02b78156 flags:# name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
keyboardButtonCopy#bcc4af10 flags:# style:flags.10?KeyboardButtonStyle text:string copy_text:string = KeyboardButton;
starGiftAttributeModel#565251e2 flags:# crafted:flags.0?true name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributePattern#4e7085ea name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;
messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;
savedStarGift#41df43fc flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int can_craft_at:flags.20?int = SavedStarGift;
messages.emojiGameOutcome#da2ad647 seed:bytes stake_ton_amount:long ton_amount:long = messages.EmojiGameOutcome;
inputMediaStakeDice#f3a9244a game_hash:string ton_amount:long client_seed:bytes = InputMedia;
messages.emojiGameUnavailable#59e65335 = messages.EmojiGameInfo;
messages.emojiGameDiceInfo#44e56023 flags:# game_hash:string prev_stake:long current_streak:int params:Vector<int> plays_left:flags.0?int = messages.EmojiGameInfo;
updateEmojiGameInfo#fb9c547a info:messages.EmojiGameInfo = Update;
inputPasskeyCredentialFirebasePNV#5b1ccb28 pnv_token:string = InputPasskeyCredential;
starGiftAttributeRarity#36437737 permille:int = StarGiftAttributeRarity;
starGiftAttributeRarityUncommon#dbce6389 = StarGiftAttributeRarity;
starGiftAttributeRarityRare#f08d516b = StarGiftAttributeRarity;
starGiftAttributeRarityEpic#78fbf3a8 = StarGiftAttributeRarity;
starGiftAttributeRarityLegendary#cef7e7a8 = StarGiftAttributeRarity;
updateStarGiftCraftFail#ac072444 = Update;
keyboardButtonStyle#4fdd3430 flags:# bg_primary:flags.0?true bg_danger:flags.1?true bg_success:flags.2?true icon:flags.3?long = KeyboardButtonStyle;
messageActionNewCreatorPending#b07ed085 new_creator_id:long = MessageAction;
messageActionChangeCreator#e188503b new_creator_id:long = MessageAction;
---functions---
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
messages.getEmojiGameInfo#fb7e8ca7 = messages.EmojiGameInfo;
messages.summarizeText#9d4104e2 flags:# peer:InputPeer id:int to_lang:flags.0?string = TextWithEntities;
payments.getCraftStarGifts#fd05dd00 gift_id:long offset:string limit:int = payments.SavedStarGifts;
payments.craftStarGift#b0f9684f stargift:Vector<InputSavedStarGift> = Updates;
channels.getFutureCreatorAfterLeave#a00918af channel:InputChannel = User;
```

### [Слой 220](https://core.telegram.org/schema?layer=220)

Этот слой вводит следующие возможности:

-   [Новая подсказка о настройке passkey »](/api/config/#setup-passkey)
-   Добавлен новый идентификатор premium-возможности для [платных личных сообщений »](/api/paid-messages/)
-   Ряд улучшений для [аукционов »](/api/auctions/):
    -   Добавлено подробное описание всех раундов аукциона в виде объектов [StarGiftAuctionRound](/type/StarGiftAuctionRound/)
    -   Добавлено поле `last_gift_num`, [позволяющее вычислить примерную позицию пользователя »](/api/auctions/#auction-flow)
    -   Добавлены поля для поиска аукционных подарков, выставленных сейчас на перепродажу; подробнее см. [здесь »](/api/auctions/).
-   Добавлен метод [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/), возвращающий **полный** перечень только тех коллекционных атрибутов, которые могут появиться у подарка данного типа после его превращения в [коллекционный подарок »](/api/gifts/#collectible-gifts).
-   Часть полей, связанных с аукционами, перенесена в [starGift](/constructor/starGift/)
-   Добавлен новый конструктор [starGiftBackground](/constructor/starGiftBackground/), описывающий палитру фона карточек подарков и аукционов
-   [Предложения о покупке коллекционных подарков »](/api/gifts/#collectible-gift-purchase-offers)

#### Константы API

##### Premium-возможности

[Идентификаторы возможностей Telegram Premium »](/api/premium/#telegram-premium-features).

-   Добавлен [`paid_messages` »](/api/premium/#paid-messages)

##### Предлагаемые действия

[Основные идентификаторы подсказок »](/api/config/#basic-suggestions)

-   Добавлен [`SETUP_PASSKEY` »](/api/config/#setup-passkey)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [payments.resolveStarGiftOffer](/method/payments.resolveStarGiftOffer/) — принимает или отклоняет ранее полученное [предложение о покупке коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полное описание процедуры см. [здесь »](/api/gifts/#collectible-gift-purchase-offers).
-   Добавлен [payments.sendStarGiftOffer](/method/payments.sendStarGiftOffer/) — отправляет предложение о покупке [коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полное описание процедуры см. [здесь »](/api/gifts/#collectible-gift-purchase-offers).
-   Добавлен [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/) — возвращает **полный** перечень только тех коллекционных атрибутов, которые могут появиться у подарка данного типа после его превращения в [коллекционный подарок »](/api/gifts/#collectible-gifts).

##### Новые конструкторы

-   Добавлен [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/) — содержит [предложение о покупке коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полное описание процедуры см. [здесь »](/api/gifts/#collectible-gift-purchase-offers).
-   Добавлен [messageActionStarGiftPurchaseOfferDeclined](/constructor/messageActionStarGiftPurchaseOfferDeclined/) — [предложение о покупке коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers) было отклонено либо истёк срок его действия; полное описание процедуры см. [здесь »](/api/gifts/#collectible-gift-purchase-offers).
-   Добавлен [starGiftBackground](/constructor/starGiftBackground/) — содержит палитру фона по умолчанию для [типа подарка »](/api/gifts/#listing-all-possible-collectible-variants).
-   Добавлен [starGiftAuctionRound](/constructor/starGiftAuctionRound/) — описывает один или несколько [раундов аукциона коллекционных подарков »](/api/auctions/).
-   Добавлен [starGiftAuctionRoundExtendable](/constructor/starGiftAuctionRoundExtendable/) — описывает один или несколько продлеваемых [раундов аукциона коллекционных подарков »](/api/auctions/).
-   Добавлен [payments.starGiftUpgradeAttributes](/constructor/payments.starGiftUpgradeAttributes/) — перечень только тех коллекционных атрибутов, которые могут появиться у подарка данного типа после его превращения в [коллекционный подарок »](/api/gifts/#collectible-gifts).

##### Изменённые конструкторы

-   Добавлен параметр **legacy\_ios** в [messageService](/constructor/messageService/)
-   Добавлены параметры **auction\_start\_date**, **upgrade\_variants**, **background** в [starGift](/constructor/starGift/)
-   Добавлен параметр **gift\_num** в [messageActionStarGift](/constructor/messageActionStarGift/)
-   Добавлены параметры **value\_usd\_amount**, **offer\_min\_stars** в [starGiftUnique](/constructor/starGiftUnique/)
-   Добавлен параметр **from\_offer** в [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Добавлен параметр **gift\_num** в [savedStarGift](/constructor/savedStarGift/)
-   Добавлены параметры **last\_gift\_num**, **rounds** в [starGiftAuctionState](/constructor/starGiftAuctionState/)
-   Добавлены параметры **flags**, **listed\_count**, **fragment\_listed\_count**, **fragment\_listed\_url** в [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/)
-   Добавлен параметр **chats** в [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/)
-   Добавлен параметр **gift\_num** в [starGiftAuctionAcquiredGift](/constructor/starGiftAuctionAcquiredGift/)
-   Добавлен параметр **chats** в [payments.starGiftActiveAuctions](/constructor/payments.starGiftActiveAuctions/)
-   Удалены параметры **center\_color**, **edge\_color**, **text\_color** в [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/)

#### [Изменения в файле карты базы данных ссылок на файлы »](/api/file-references/)

##### Новые пропускаемые входящие источники

-   Добавлен [payments.starGiftUpgradeAttributes](/constructor/payments.starGiftUpgradeAttributes/) — контексты для звёздных подарков пока не реализованы

##### Новые входящие обходчики

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionStarGiftPurchaseOffer, params: [gift], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionStarGiftPurchaseOfferDeclined, params: [gift], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.starGiftUpgradeAttributes, params: [attributes], type: payments.StarGiftUpgradeAttributes}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarGiftUpgradeAttributes}
    ```

#### [Схема](/schema/)

```
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy_ios:flags.17?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
starGift#313a9547 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int auction_start_date:flags.11?int upgrade_variants:flags.12?int background:flags.13?StarGiftBackground = StarGift;
messageActionStarGift#ea2c31d3 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer gift_num:flags.19?int = MessageAction;
starGiftUnique#569d64c9 flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int = StarGift;
messageActionStarGiftUnique#95728543 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long = MessageAction;
savedStarGift#ead6805e flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int = SavedStarGift;
starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;
starGiftAuctionAcquiredGift#42b00348 flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities gift_num:flags.2?int = StarGiftAuctionAcquiredGift;
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;
webPageAttributeStarGiftAuction#01c641c2 gift:StarGift end_date:int = WebPageAttribute;
messageActionStarGiftPurchaseOffer#774278d4 flags:# accepted:flags.0?true declined:flags.1?true gift:StarGift price:StarsAmount expires_at:int = MessageAction;
messageActionStarGiftPurchaseOfferDeclined#73ada76b flags:# expired:flags.0?true gift:StarGift price:StarsAmount = MessageAction;
starGiftBackground#aff56398 center_color:int edge_color:int text_color:int = StarGiftBackground;
starGiftAuctionRound#3aae0528 num:int duration:int = StarGiftAuctionRound;
starGiftAuctionRoundExtendable#0aa021e5 num:int duration:int extend_top:int extend_window:int = StarGiftAuctionRound;
payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;
---functions---
payments.resolveStarGiftOffer#e9ce781c flags:# decline:flags.0?true offer_msg_id:int = Updates;
payments.sendStarGiftOffer#8fb86b41 flags:# peer:InputPeer slug:string price:StarsAmount duration:int random_id:long allow_paid_stars:flags.0?long = Updates;
payments.getStarGiftUpgradeAttributes#6d038b58 gift_id:long = payments.StarGiftUpgradeAttributes;
```

### [Слой 219](https://core.telegram.org/schema?layer=219)

Этот слой вводит следующие возможности:

-   [Passkey »](/api/passkeys/)
-   Поддержка [эффектов сообщений »](/api/effects/) в [messages.forwardMessages](/method/messages.forwardMessages/).

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [account.initPasskeyRegistration](/method/account.initPasskeyRegistration/) — начинает регистрацию passkey для текущей учётной записи; полное описание процедуры см. [здесь »](/api/passkeys/#creating-a-passkey).
-   Добавлен [account.registerPasskey](/method/account.registerPasskey/) — завершает регистрацию passkey для текущей учётной записи; полное описание процедуры см. [здесь »](/api/passkeys/#creating-a-passkey).
-   Добавлен [account.getPasskeys](/method/account.getPasskeys/) — возвращает список привязанных к текущей учётной записи passkey, которыми можно воспользоваться для входа; подробнее о passkey см. [здесь »](/api/passkeys/#list-passkeys).
-   Добавлен [account.deletePasskey](/method/account.deletePasskey/) — удаляет привязанный к текущей учётной записи passkey; подробнее см. [здесь »](/api/passkeys/#delete-passkeys).
-   Добавлен [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/) — начинает вход с помощью passkey по неавторизованному соединению; подробнее см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).
-   Добавлен [auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) — завершает вход с помощью passkey по неавторизованному соединению; подробнее см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).

##### Изменённые методы

-   Добавлен параметр **effect** в [messages.forwardMessages](/method/messages.forwardMessages/)

##### Новые конструкторы

-   Добавлен [passkey](/constructor/passkey/) — понятные пользователю сведения о привязанном к учётной записи passkey; возвращается при [создании passkey »](/api/passkeys/#creating-a-passkey) или при [получении списка passkey »](/api/passkeys/#list-passkeys).
-   Добавлен [account.passkeys](/constructor/account.passkeys/) — список [passkey »](/api/passkeys/#list-passkeys), привязанных к текущей учётной записи.
-   Добавлен [account.passkeyRegistrationOptions](/constructor/account.passkeyRegistrationOptions/) — параметры регистрации passkey; полное описание процедуры см. [здесь »](/api/passkeys/#creating-a-passkey).
-   Добавлен [auth.passkeyLoginOptions](/constructor/auth.passkeyLoginOptions/) — параметры входа с помощью passkey; полное описание процедуры см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).
-   Добавлен [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/) — ответ WebAuthn при регистрации, используемый при создании нового passkey; полное описание процедуры см. [здесь »](/api/passkeys/#creating-a-passkey).
-   Добавлен [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) — ответ WebAuthn при аутентификации, используемый при входе с помощью passkey; полное описание процедуры см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).
-   Добавлен [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) — учётные данные passkey на основе открытого ключа, используемые как при регистрации, так и при входе; полное описание процедур см. в разделах [создание passkey »](/api/passkeys/#creating-a-passkey) и [вход с помощью passkey »](/api/passkeys/#logging-in-with-a-passkey).

##### Изменённые конструкторы

-   Добавлен параметр **offer** в [starsTransaction](/constructor/starsTransaction/)

#### [Схема](/schema/)

```
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;
inputPasskeyResponseRegister#3e63935c client_data:DataJSON attestation_data:bytes = InputPasskeyResponse;
inputPasskeyResponseLogin#c31fc14a client_data:DataJSON authenticator_data:bytes signature:bytes user_handle:string = InputPasskeyResponse;
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;
---functions---
messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
account.initPasskeyRegistration#429547e8 = account.PasskeyRegistrationOptions;
account.registerPasskey#55b41fd6 credential:InputPasskeyCredential = Passkey;
account.getPasskeys#ea1f0c52 = account.Passkeys;
account.deletePasskey#f5b5563f id:string = Bool;
auth.initPasskeyLogin#518ad0b7 api_id:int api_hash:string = auth.PasskeyLoginOptions;
auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

### [Слой 218](https://core.telegram.org/schema?layer=218)

В этом слое появились:

-   [Аукционы коллекционных подарков »](/api/auctions/)

#### Константы API

##### Значения типа веб-страницы

Значения типа веб-страницы из конструктора [webPage](/constructor/webPage/).

-   Добавлено `telegram_auction`

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/) — возвращает сведения об [аукционе коллекционных подарков »](/api/auctions/); одновременно подписывает пользователя на обновления по этому аукциону, полный порядок действий описан [здесь »](/api/auctions/).
-   Добавлен [payments.getStarGiftAuctionAcquiredGifts](/method/payments.getStarGiftAuctionAcquiredGifts/) — возвращает все подарки, которые текущий пользователь выиграл на [аукционе](/api/auctions/).
-   Добавлен [payments.getStarGiftActiveAuctions](/method/payments.getStarGiftActiveAuctions/) — возвращает все действующие [аукционы подарков](/api/auctions/), **на которых пользователь когда-либо делал ставку** (включая аукционы, где его ставку перебили и деньги вернулись), при условии что аукцион ещё не завершился.

##### Новые конструкторы

-   Добавлен [inputInvoiceStarGiftAuctionBid](/constructor/inputInvoiceStarGiftAuctionBid/) — используется для размещения ставки на [аукционе коллекционных подарков »](/api/auctions/).
-   Добавлен [auctionBidLevel](/constructor/auctionBidLevel/) — описывает ставку на [аукционе](/api/auctions/).
-   Добавлен [starGiftAuctionStateNotModified](/constructor/starGiftAuctionStateNotModified/) — возвращается только методами аукционов (но никогда не приходит в обновлениях), если переданное значение `version` совпадает с [аукцион »](/api/auctions/).`version` на сервере, то есть сведения об аукционе не изменились по сравнению с локально закешированной версией.
-   Добавлен [starGiftAuctionState](/constructor/starGiftAuctionState/) — представляет действующий или ещё не начавшийся [аукцион »](/api/auctions/).
-   Добавлен [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/) — представляет завершённый [аукцион »](/api/auctions/).
-   Добавлен [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) — содержит сведения о положении текущего пользователя на [аукционе »](/api/auctions/).
-   Добавлен [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) — содержит изменения [состояния аукциона; см. здесь »](/api/auctions/), как включить получение таких обновлений.
-   Добавлен [updateStarGiftAuctionUserState](/constructor/updateStarGiftAuctionUserState/) — содержит изменения [состояния аукциона, относящиеся к текущему пользователю; см. здесь »](/api/auctions/), как включить получение таких обновлений.
-   Добавлен [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/) — описывает [аукцион коллекционных подарков »](/api/auctions/).
-   Добавлен [starGiftAuctionAcquiredGift](/constructor/starGiftAuctionAcquiredGift/) — описывает подарок, выигранный текущим пользователем на аукционе.
-   Добавлен [payments.starGiftAuctionAcquiredGifts](/constructor/payments.starGiftAuctionAcquiredGifts/) — описывает все подарки, которые текущий пользователь выиграл на [аукционе](/api/auctions/).
-   Добавлен [starGiftActiveAuctionState](/constructor/starGiftActiveAuctionState/) — содержит сведения об [аукционе, на котором пользователь сделал ставку »](/api/auctions/).
-   Добавлен [payments.starGiftActiveAuctionsNotModified](/constructor/payments.starGiftActiveAuctionsNotModified/) — список действующих [аукционов подарков](/api/auctions/), **на которых пользователь сделал ставку**, не изменился.
-   Добавлен [payments.starGiftActiveAuctions](/constructor/payments.starGiftActiveAuctions/) — описывает все действующие [аукционы подарков](/api/auctions/), **на которых пользователь сделал ставку**.
-   Добавлен [inputStarGiftAuction](/constructor/inputStarGiftAuction/) — используется для получения [аукционов](/api/auctions/) по идентификатору связанного [коллекционного подарка](/api/gifts/#collectible-gifts).
-   Добавлен [inputStarGiftAuctionSlug](/constructor/inputStarGiftAuctionSlug/) — используется для получения [аукционов](/api/auctions/) по [краткому имени из глубокой ссылки на аукцион »](/api/links/#auction-links).
-   Добавлен [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) — содержит сведения об [аукционе коллекционных подарков »](/api/auctions/) для [webPage](/constructor/webPage/)-превью [аукциона »](/api/auctions/) (у такого [webPage](/constructor/webPage/) поле `type` будет равно `telegram_auction`).

##### Изменённые конструкторы

-   Добавлен параметр **stargift\_auction\_bid** в [starsTransaction](/constructor/starsTransaction/)
-   Добавлены параметры **auction**, **auction\_slug**, **gifts\_per\_round** в [starGift](/constructor/starGift/)
-   Добавлены параметры **auction\_acquired**, **to\_id** в [messageActionStarGift](/constructor/messageActionStarGift/)

#### [Изменения в файле карты базы данных ссылок на файлы »](/api/file-references/)

##### Новые входящие обходчики

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.starGiftActiveAuctions, params: [auctions], type: payments.StarGiftActiveAuctions}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.starGiftAuctionState, params: [gift], type: payments.StarGiftAuctionState}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: starGiftActiveAuctionState, params: [gift], type: StarGiftActiveAuctionState}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: webPageAttributeStarGiftAuction, params: [gift], type: WebPageAttribute}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarGiftActiveAuctions}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarGiftAuctionState}
    ```

#### [Схема](/schema/)

```
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
starGift#1b9a4d7f flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int = StarGift;
messageActionStarGift#db596550 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer = MessageAction;
inputInvoiceStarGiftAuctionBid#1ecafa10 flags:# hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?InputPeer gift_id:long bid_amount:long message:flags.1?TextWithEntities = InputInvoice;
auctionBidLevel#310240cc pos:int amount:long date:int = AuctionBidLevel;
starGiftAuctionStateNotModified#fe333952 = StarGiftAuctionState;
starGiftAuctionState#5db04f4b version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int gifts_left:int current_round:int total_rounds:int = StarGiftAuctionState;
starGiftAuctionStateFinished#7d967c3a start_date:int end_date:int average_price:long = StarGiftAuctionState;
starGiftAuctionUserState#2eeed1c4 flags:# returned:flags.1?true bid_amount:flags.0?long bid_date:flags.0?int min_bid_amount:flags.0?long bid_peer:flags.0?Peer acquired_count:int = StarGiftAuctionUserState;
updateStarGiftAuctionState#48e246c2 gift_id:long state:StarGiftAuctionState = Update;
updateStarGiftAuctionUserState#dc58f31e gift_id:long user_state:StarGiftAuctionUserState = Update;
payments.starGiftAuctionState#0e98e474 gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> = payments.StarGiftAuctionState;
starGiftAuctionAcquiredGift#ab60e20b flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities = StarGiftAuctionAcquiredGift;
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;
starGiftActiveAuctionState#d31bc45d gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState = StarGiftActiveAuctionState;
payments.starGiftActiveAuctionsNotModified#db33dad0 = payments.StarGiftActiveAuctions;
payments.starGiftActiveAuctions#97f187d8 auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> = payments.StarGiftActiveAuctions;
inputStarGiftAuction#02e16c98 gift_id:long = InputStarGiftAuction;
inputStarGiftAuctionSlug#7ab58308 slug:string = InputStarGiftAuction;
webPageAttributeStarGiftAuction#034986ab gift:StarGift end_date:int center_color:int edge_color:int text_color:int = WebPageAttribute;
---functions---
payments.getStarGiftAuctionState#5c9ff4d6 auction:InputStarGiftAuction version:int = payments.StarGiftAuctionState;
payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
payments.getStarGiftActiveAuctions#a5d0514d hash:long = payments.StarGiftActiveAuctions;
```

### [Слой 217](https://core.telegram.org/schema?layer=217)

В этом слое появились:

-   [Прямые истории »](/api/group-calls/#live-stories)
-   [Сводки о недавних историях »](/api/stories/#recent-story-summaries)
-   [Методы удаления сообщений группового звонка и комментариев к прямым историям »](/api/group-calls/#in-call-messages)
-   [Повторяющиеся отложенные сообщения »](/api/scheduled-messages/#repeating-scheduled-messages)
-   [Настройки приватности для вкладки с музыкой в профиле »](/api/profile/#music)
-   [Анонимные администраторы групп »](/api/rights/#anonymous-admins) теперь могут [отмечать пункты в чек-листах »](/api/todo/#mark-items-as-completed)
-   [Предложения настроить электронную почту для входа »](/api/auth/#email-verification)

#### Константы API

##### Предлагаемые действия

[Базовые идентификаторы предложений »](/api/config/#basic-suggestions)

-   Добавлен [`SETUP_LOGIN_EMAIL` »](/api/config/#setup-login-email)
-   Добавлен [`SETUP_LOGIN_EMAIL_NOSKIP` »](/api/config/#setup-login-email-noskip)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [stories.startLive](/method/stories.startLive/) — запуск прямой истории, при необходимости в режиме RTMP-трансляции; полный порядок действий описан [здесь »](/api/group-calls/#live-stories).
-   Добавлен [phone.deleteGroupCallMessages](/method/phone.deleteGroupCallMessages/) — удаление отдельных сообщений из [оверлея сообщений внутри звонка »](/api/group-calls/#in-call-messages) видеочата, трансляции или прямой истории, в том числе в режиме RTMP.
-   Добавлен [phone.deleteGroupCallParticipantMessages](/method/phone.deleteGroupCallParticipantMessages/) — удаление администратором всех сообщений конкретного участника из [оверлея сообщений внутри звонка »](/api/group-calls/#in-call-messages) видеочата, трансляции или прямой истории, в том числе в режиме RTMP.
-   Добавлен [phone.getGroupCallStars](/method/phone.getGroupCallStars/) — получение суммы пожертвований прямой истории и списка крупнейших жертвователей; см. [платные пожертвования прямым историям »](/api/group-calls/#paid-live-story-donations).
-   Добавлен [phone.saveDefaultSendAs](/method/phone.saveDefaultSendAs/) — сохранение пира, который по умолчанию отображается как автор комментариев и реакций к прямым историям; см. [сообщения внутри звонка »](/api/group-calls/#in-call-messages).

##### Изменённые методы

-   Добавлен параметр **schedule\_repeat\_period** в [messages.sendMessage](/method/messages.sendMessage/)
-   Добавлен параметр **schedule\_repeat\_period** в [messages.sendMedia](/method/messages.sendMedia/)
-   Добавлен параметр **schedule\_repeat\_period** в [messages.forwardMessages](/method/messages.forwardMessages/)
-   Добавлен параметр **schedule\_repeat\_period** в [messages.editMessage](/method/messages.editMessage/)
-   Добавлен параметр **send\_paid\_messages\_stars** в [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/)
-   Добавлен параметр **for\_live\_stories** в [channels.getSendAs](/method/channels.getSendAs/)
-   Добавлены параметры **flags**, **live\_story** в [phone.getGroupCallStreamRtmpUrl](/method/phone.getGroupCallStreamRtmpUrl/)
-   Тип [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/) изменён с **Vector<int>** на **Vector<RecentStory>**
-   Тип [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/) изменён с **Bool** на **Updates**
-   Добавлены параметры **flags**, **allow\_paid\_stars**, **send\_as** в [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/)

##### Новые конструкторы

-   Добавлен [messageMediaVideoStream](/constructor/messageMediaVideoStream/) — обозначает активный групповой звонок, связанный с [прямой историей »](/api/group-calls/#live-stories).
-   Добавлен [updateDeleteGroupCallMessages](/constructor/updateDeleteGroupCallMessages/) — сообщает, что из [оверлея сообщений внутри звонка »](/api/group-calls/#in-call-messages) видеочата, трансляции или прямой истории были удалены сообщения, в том числе в режиме RTMP.
-   Добавлен [groupCallMessage](/constructor/groupCallMessage/) — представляет [сообщение внутри звонка »](/api/group-calls/#in-call-messages), эмодзи-реакцию, платный комментарий к прямой истории или отдельное платное пожертвование прямой истории.
-   Добавлен [inputPrivacyKeySavedMusic](/constructor/inputPrivacyKeySavedMusic/) — может ли пользователь видеть [композиции, закреплённые нами в профиле »](/api/profile/#music).
-   Добавлен [privacyKeySavedMusic](/constructor/privacyKeySavedMusic/) — может ли пользователь видеть [композиции, закреплённые нами в профиле »](/api/profile/#music).
-   Добавлен [groupCallDonor](/constructor/groupCallDonor/) — описывает жертвователя прямой истории в [таблице лидеров по пожертвованиям »](/api/group-calls/#paid-live-story-donations).
-   Добавлен [phone.groupCallStars](/constructor/phone.groupCallStars/) — содержит сумму пожертвований прямой истории и список крупнейших жертвователей; см. [платные пожертвования прямым историям »](/api/group-calls/#paid-live-story-donations).
-   Добавлен [recentStory](/constructor/recentStory/) — сводка об [активных историях »](/api/stories/#recent-story-summaries) пира; вкладывается в [user](/constructor/user/).`stories_max_id` и [channel](/constructor/channel/).`stories_max_id`, а также возвращается методом [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/).

##### Изменённые конструкторы

-   Добавлен параметр **schedule\_repeat\_period** в [message](/constructor/message/)
-   Тип **stories\_max\_id** изменён с **flags2.5?int** на **flags2.5?RecentStory** в [user](/constructor/user/)
-   Тип **stories\_max\_id** изменён с **flags2.4?int** на **flags2.4?RecentStory** в [channel](/constructor/channel/)
-   Добавлены параметры **send\_paid\_messages\_stars**, **default\_send\_as** в [groupCall](/constructor/groupCall/)
-   Добавлен параметр **paid\_stars\_total** в [groupCallParticipant](/constructor/groupCallParticipant/)
-   Добавлены параметры **live\_story**, **peer**, удалён параметр **chat\_id** в [updateGroupCall](/constructor/updateGroupCall/)
-   Добавлен параметр **days**, удалён параметр **months** в [messageActionGiftPremium](/constructor/messageActionGiftPremium/)
-   Добавлен параметр **live** в [storyItemSkipped](/constructor/storyItemSkipped/)
-   Добавлен параметр **days**, удалён параметр **months** в [payments.checkedGiftCode](/constructor/payments.checkedGiftCode/)
-   Добавлен параметр **days**, удалён параметр **months** в [messageActionGiftCode](/constructor/messageActionGiftCode/)
-   Добавлен параметр **phonegroup\_message** в [starsTransaction](/constructor/starsTransaction/)
-   Добавлен параметр **disallow\_stargifts\_from\_channels** в [disallowedGiftsSettings](/constructor/disallowedGiftsSettings/)
-   Тип **completed\_by** изменён с **long** на **Peer** в [todoCompletion](/constructor/todoCompletion/)
-   Удалены параметры **from\_id**, **random\_id**, тип **message** изменён с **TextWithEntities** на **GroupCallMessage** в [updateGroupCallMessage](/constructor/updateGroupCallMessage/)

#### [Схема](/schema/)

```
message#b92f76cf flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int = Message;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
groupCallParticipant#2a3dc7ac flags:# muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:Peer date:int active_date:flags.3?int source:int volume:flags.7?int about:flags.11?string raise_hand_rating:flags.13?long video:flags.6?GroupCallParticipantVideo presentation:flags.14?GroupCallParticipantVideo paid_stars_total:flags.16?long = GroupCallParticipant;
updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;
messageActionGiftPremium#48e91302 flags:# currency:string amount:long days:int crypto_currency:flags.0?string crypto_amount:flags.0?long message:flags.1?TextWithEntities = MessageAction;
storyItemSkipped#ffadc913 flags:# close_friends:flags.8?true live:flags.9?true id:int date:int expire_date:int = StoryItem;
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;
messageActionGiftCode#31c48347 flags:# via_giveaway:flags.0?true unclaimed:flags.5?true boost_peer:flags.1?Peer days:int slug:string currency:flags.2?string amount:flags.2?long crypto_currency:flags.3?string crypto_amount:flags.3?long message:flags.4?TextWithEntities = MessageAction;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
disallowedGiftsSettings#71f276c4 flags:# disallow_unlimited_stargifts:flags.0?true disallow_limited_stargifts:flags.1?true disallow_unique_stargifts:flags.2?true disallow_premium_gifts:flags.3?true disallow_stargifts_from_channels:flags.4?true = DisallowedGiftsSettings;
todoCompletion#221bb5e4 id:int completed_by:Peer date:int = TodoCompletion;
updateGroupCallMessage#d8326f0d call:InputGroupCall message:GroupCallMessage = Update;
messageMediaVideoStream#ca5cab89 flags:# rtmp_stream:flags.0?true call:InputGroupCall = MessageMedia;
updateDeleteGroupCallMessages#3e85e92c call:InputGroupCall messages:Vector<int> = Update;
groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;
inputPrivacyKeySavedMusic#4dbe9226 = InputPrivacyKey;
privacyKeySavedMusic#ff7a571b = PrivacyKey;
groupCallDonor#ee430c85 flags:# top:flags.0?true my:flags.1?true peer_id:flags.3?Peer stars:long = GroupCallDonor;
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;
recentStory#711d692d flags:# live:flags.0?true max_id:flags.1?int = RecentStory;
---functions---
messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.forwardMessages#41d41ade flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
phone.toggleGroupCallSettings#974392f2 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool send_paid_messages_stars:flags.3?long = Updates;
channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;
phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
stories.getPeerMaxIDs#78499170 id:Vector<InputPeer> = Vector<RecentStory>;
phone.sendGroupCallMessage#b1d11410 flags:# call:InputGroupCall random_id:long message:TextWithEntities allow_paid_stars:flags.0?long send_as:flags.1?InputPeer = Updates;
stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;
phone.deleteGroupCallMessages#f64f54f7 flags:# report_spam:flags.0?true call:InputGroupCall messages:Vector<int> = Updates;
phone.deleteGroupCallParticipantMessages#1dbfeca0 flags:# report_spam:flags.0?true call:InputGroupCall participant:InputPeer = Updates;
phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
phone.saveDefaultSendAs#4167add1 call:InputGroupCall send_as:InputPeer = Bool;
```

### [Слой 216](https://core.telegram.org/schema?layer=216)

В этом слое появились следующие возможности:

-   [Форумы у ботов »](/api/forum/#bot-forums)
-   [Приватные заметки о контактах »](/api/contacts/#private-notes-for-contacts)
-   [Предложение даты рождения »](/api/profile/#birthday)
-   [Коллекционным подаркам теперь можно назначать цветовые палитры сообщений »](/api/colors/#collectible-message-palettes)
-   [Потоковая передача ответа бота в реальном времени »](/api/bots/ai/#live-response-streaming).
-   [Размещённые коллекционные подарки: привязка коллекционного подарка в блокчейне TON к профилю Telegram »](/api/gifts/#hosted-collectible-gifts)

#### Константы API

##### Клиентские конфигурации

[Ключи клиентской конфигурации »](/api/config/#client-configuration).

-   Добавлен [`contact_note_length_limit` »](/api/config/#contact-note-length-limit)
-   Добавлен [`group_call_message_length_limit` »](/api/config/#group-call-message-length-limit)
-   Добавлен [`group_call_message_ttl` »](/api/config/#group-call-message-ttl)
-   Добавлен [`message_typing_draft_ttl` »](/api/config/#message-typing-draft-ttl)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [messages.getForumTopics](/method/messages.getForumTopics/) — получение [тем форума](/api/forum/)
-   Добавлен [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) — получение тем форума по их ID
-   Добавлен [messages.editForumTopic](/method/messages.editForumTopic/) — изменение [темы форума](/api/forum/).
-   Добавлен [messages.updatePinnedForumTopic](/method/messages.updatePinnedForumTopic/) — закрепление или открепление [тем форума](/api/forum/)
-   Добавлен [messages.reorderPinnedForumTopics](/method/messages.reorderPinnedForumTopics/) — изменение порядка закреплённых тем форума
-   Добавлен [messages.createForumTopic](/method/messages.createForumTopic/) — создание [темы форума](/api/forum/).
-   Добавлен [messages.deleteTopicHistory](/method/messages.deleteTopicHistory/) — удаление истории сообщений [темы форума](/api/forum/)
-   Добавлен [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/) — отправка сообщения внутри звонка всем участникам видеочата, трансляции или прямой истории, в том числе в режиме RTMP; подробнее [здесь »](/api/group-calls/#in-call-messages).
-   Добавлен [phone.sendGroupCallEncryptedMessage](/method/phone.sendGroupCallEncryptedMessage/) — отправка сообщения или эмодзи-реакции со сквозным шифрованием всем участникам конференц-звонка. Метод применим только к конференциям; порядок сериализации и шифрования описан [здесь »](/api/end-to-end/group-calls/#conference-in-call-messages).
-   Добавлен [contacts.updateContactNote](/method/contacts.updateContactNote/) — обновление приватной заметки, связанной с контактом; подробнее [здесь »](/api/contacts/#private-notes-for-contacts).
-   Добавлен [users.suggestBirthday](/method/users.suggestBirthday/) — предложить другому пользователю дату его рождения; подробнее о датах рождения в API [здесь »](/api/profile/#birthday).

##### Изменённые методы

-   Добавлен параметр **note** в [contacts.addContact](/method/contacts.addContact/)
-   Добавлен параметр **messages\_enabled** в [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/)
-   Удалён параметр **background\_emoji\_id**, тип **color** изменён с **flags.2?int** на **flags.2?PeerColor** в [account.updateColor](/method/account.updateColor/)
-   Добавлены параметры **peer\_color\_available**, **exclude\_hosted** в [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

##### Удалённые методы

-   Удалён channels.createForumTopic
-   Удалён channels.getForumTopics
-   Удалён channels.getForumTopicsByID
-   Удалён channels.editForumTopic
-   Удалён channels.updatePinnedForumTopic
-   Удалён channels.deleteTopicHistory
-   Удалён channels.reorderPinnedForumTopics

##### Новые конструкторы

-   Добавлен [sendMessageTextDraftAction](/constructor/sendMessageTextDraftAction/) — используется ботами для реализации [потоковой передачи сообщения в реальном времени »](/api/bots/ai/#live-response-streaming).
-   Добавлен [updateGroupCallMessage](/constructor/updateGroupCallMessage/) — получено новое сообщение, реакция, платный комментарий или пожертвование через [оверлей сообщений внутри звонка »](/api/group-calls/#in-call-messages).
-   Добавлен [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/) — в конференц-звонке получено новое сообщение или эмодзи-реакция со сквозным шифрованием; порядок расшифровки описан [здесь »](/api/end-to-end/group-calls/#receiving-and-decrypting-a-message).
-   Добавлен [updatePinnedForumTopic](/constructor/updatePinnedForumTopic/) — [тема форума »](/api/forum/#forum-topics) была закреплена или откреплена.
-   Добавлен [updatePinnedForumTopics](/constructor/updatePinnedForumTopics/) — изменился состав [закреплённых тем](/api/forum/#forum-topics) форума.
-   Добавлен [peerColorCollectible](/constructor/peerColorCollectible/) — представляет [цветовую палитру »](/api/colors/), связанную с [коллекционным подарком »](/api/gifts/#collectible-gifts); подробнее [здесь »](/api/colors/#collectible-gift-palettes).
-   Добавлен [inputPeerColorCollectible](/constructor/inputPeerColorCollectible/) — представляет [цветовую палитру »](/api/colors/), связанную с [коллекционным подарком »](/api/gifts/#collectible-gifts); подробнее [здесь »](/api/colors/#collectible-gift-palettes).
-   Добавлен [messageActionSuggestBirthday](/constructor/messageActionSuggestBirthday/) — с помощью [users.suggestBirthday](/method/users.suggestBirthday/) была предложена новая дата рождения; подробнее о датах рождения в API [здесь »](/api/profile/#birthday).

##### Изменённые конструкторы

-   Добавлены параметры **flags**, **note** в [inputPhoneContact](/constructor/inputPhoneContact/)
-   Добавлен параметр **note** в [userFull](/constructor/userFull/)
-   Добавлен параметр **topics** в [messages.messages](/constructor/messages.messages/)
-   Добавлен параметр **topics** в [messages.messagesSlice](/constructor/messages.messagesSlice/)
-   Добавлены параметры **flags**, **top\_msg\_id** в [updateUserTyping](/constructor/updateUserTyping/)
-   Добавлен параметр **top\_msg\_id** в [updateReadHistoryInbox](/constructor/updateReadHistoryInbox/)
-   Добавлен параметр **bot\_forum\_view** в [user](/constructor/user/)
-   Добавлены параметры **messages\_enabled**, **can\_change\_messages\_enabled**, **min** в [groupCall](/constructor/groupCall/)
-   Добавлены параметры **title\_missing**, **peer** в [forumTopic](/constructor/forumTopic/)
-   Добавлен параметр **title\_missing** в [messageActionTopicCreate](/constructor/messageActionTopicCreate/)
-   Добавлен параметр **peer\_color\_available** в [starGift](/constructor/starGift/)
-   Добавлены параметры **peer\_color**, **host\_id** в [starGiftUnique](/constructor/starGiftUnique/)
-   Добавлен параметр **assigned** в [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

##### Удалённые конструкторы

-   Удалён updateChannelPinnedTopic
-   Удалён updateChannelPinnedTopics

#### Изменения в PUSH-уведомлениях

##### Новые PUSH-уведомления

-   Добавлено [MESSAGE\_SUGGEST\_BIRTHDAY](/api/push-updates/#message-suggest-birthday) — `{1} suggested you your birthday`

#### [Изменения в файле карты базы данных ссылок на файлы »](/api/file-references/)

##### Новые входящие обходчики

-   Добавлен

    ```
    traverseMethodResult{name: messages.getForumTopics}
    ```

-   Добавлен

    ```
    traverseMethodResult{name: messages.getForumTopicsByID}
    ```

##### Удалённые входящие обходчики

-   Удалён

    ```
    traverseMethodResult{name: channels.getForumTopics}
    ```

-   Удалён

    ```
    traverseMethodResult{name: channels.getForumTopicsByID}
    ```

#### Изменения в [сквозной схеме](/schema/end-to-end/)

##### Новые конструкторы

-   Добавлен [jsonObjectValue](/constructor/jsonObjectValue/) — пара «ключ: значение» в JSON
-   Добавлен [jsonNull](/constructor/jsonNull/) — значение JSON null
-   Добавлен [jsonBool](/constructor/jsonBool/) — булево значение JSON
-   Добавлен [jsonNumber](/constructor/jsonNumber/) — числовое значение JSON
-   Добавлен [jsonString](/constructor/jsonString/) — строка JSON
-   Добавлен [jsonArray](/constructor/jsonArray/) — массив JSON
-   Добавлен [jsonObject](/constructor/jsonObject/) — объектное значение JSON
-   Добавлен [textWithEntities](/constructor/textWithEntities/) — оформленный текст с [сущностями оформления](/api/entities/)
-   Добавлен [groupCallMessage](/constructor/groupCallMessage/) — представляет [сообщение внутри звонка »](/api/group-calls/#in-call-messages), эмодзи-реакцию, платный комментарий к прямой истории или отдельное платное пожертвование прямой истории.

#### [Сквозная схема](/schema/end-to-end/)

```
===216===
jsonObjectValue#c0de1bd9 key:string value:JSONValue = JSONObjectValue;
jsonNull#3f6d7b68 = JSONValue;
jsonBool#c7345e6a value:Bool = JSONValue;
jsonNumber#2be0dfa4 value:double = JSONValue;
jsonString#b71e767a value:string = JSONValue;
jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
```

#### [Схема](/schema/)

```
inputPhoneContact#6a1dc4be flags:# client_id:long phone:string first_name:string last_name:string note:flags.0?TextWithEntities = InputContact;
userFull#a02bc13e flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities = UserFull;
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
updateUserTyping#2a17bf5c flags:# user_id:long top_msg_id:flags.0?int action:SendMessageAction = Update;
updateReadHistoryInbox#9e84bc99 flags:# folder_id:flags.0?int peer:Peer top_msg_id:flags.1?int max_id:int still_unread_count:int pts:int pts_count:int = Update;
user#020b1422 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?int color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
groupCall#553b0ba1 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string = GroupCall;
forumTopic#cdff0eca flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
messageActionTopicCreate#0d999256 flags:# title_missing:flags.1?true title:string icon_color:int icon_emoji_id:flags.0?long = MessageAction;
starGift#80ac53c3 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int = StarGift;
starGiftUnique#b0bf741b flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer = StarGift;
messageActionStarGiftUnique#95728543 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long = MessageAction;
sendMessageTextDraftAction#376d975c random_id:long text:TextWithEntities = SendMessageAction;
updateGroupCallMessage#78c314e0 call:InputGroupCall from_id:Peer random_id:long message:TextWithEntities = Update;
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;
updatePinnedForumTopic#683b2c52 flags:# pinned:flags.0?true peer:Peer topic_id:int = Update;
updatePinnedForumTopics#def143d0 flags:# peer:Peer order:flags.0?Vector<int> = Update;
peerColorCollectible#b9c0639a flags:# collectible_id:long gift_emoji_id:long background_emoji_id:long accent_color:int colors:Vector<int> dark_accent_color:flags.0?int dark_colors:flags.1?Vector<int> = PeerColor;
inputPeerColorCollectible#b8ea86a9 collectible_id:long = PeerColor;
messageActionSuggestBirthday#2c8f2a25 birthday:Birthday = MessageAction;
---functions---
contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;
phone.toggleGroupCallSettings#e9723804 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool = Updates;
account.updateColor#684d214e flags:# for_profile:flags.1?true color:flags.2?PeerColor = Bool;
payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
messages.getForumTopics#3ba47bff flags:# peer:InputPeer q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
messages.editForumTopic#cecc1134 flags:# peer:InputPeer topic_id:int title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = Updates;
messages.updatePinnedForumTopic#175df251 peer:InputPeer topic_id:int pinned:Bool = Updates;
messages.reorderPinnedForumTopics#0e7841f0 flags:# force:flags.0?true peer:InputPeer order:Vector<int> = Updates;
messages.createForumTopic#2f98c3d5 flags:# title_missing:flags.4?true peer:InputPeer title:string icon_color:flags.0?int icon_emoji_id:flags.3?long random_id:long send_as:flags.2?InputPeer = Updates;
messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;
phone.sendGroupCallMessage#87893014 call:InputGroupCall random_id:long message:TextWithEntities = Bool;
phone.sendGroupCallEncryptedMessage#e5afa56d call:InputGroupCall encrypted_message:bytes = Bool;
contacts.updateContactNote#139f63fb id:InputUser note:TextWithEntities = Bool;
users.suggestBirthday#fc533372 id:InputUser birthday:Birthday = Updates;
```

### [Слой 215](https://core.telegram.org/schema?layer=215)

В этом слое появились следующие новые возможности и улучшения:

-   [Разрешено удалять starGiftAttributeOriginalDetails у принадлежащего вам подарка »](/api/gifts/#dropping-the-original-details-of-an-upgraded-gift).
-   [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/) теперь возвращает список будущих цен на [улучшение подарка](/api/gifts/#collectible-gifts) в полях **prices** и **next\_prices**.
-   Улучшена постраничная выборка для [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/), а также добавлено примечание о том, что метод может вернуть меньше `limit` результатов, даже если фактическое число оставшихся результатов `>= limit`; чтобы получить их все, следует использовать постраничную выборку.

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [auth.checkPaidAuth](/method/auth.checkPaidAuth/) — проверяет статус [платежа за вход](/api/auth/#paid-auth).

##### Изменённые методы

-   Тип **offset** изменён с **int** на **string** в [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/)

##### Новые конструкторы

-   Добавлен [inputInvoicePremiumAuthCode](/constructor/inputInvoicePremiumAuthCode/) — используется для оплаты кодов входа, если SMS с кодами подтверждения слишком дороги для страны или оператора пользователя; подробнее [здесь »](/api/auth/#paid-auth).
-   Добавлен [inputInvoiceStarGiftDropOriginalDetails](/constructor/inputInvoiceStarGiftDropOriginalDetails/) — используется для оплаты удаления атрибута [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) у коллекционного подарка; полный порядок действий описан [здесь »](/api/gifts/#dropping-the-original-details-of-an-upgraded-gift).
-   Добавлен [starGiftUpgradePrice](/constructor/starGiftUpgradePrice/) — указывает цену на [улучшение подарка »](/api/gifts/#collectible-gifts), действующую начиная с определённого момента времени.

##### Изменённые конструкторы

-   Тип **next\_offset** изменён с **flags.0?int** на **flags.0?string** в [account.chatThemes](/constructor/account.chatThemes/)
-   Добавлен параметр **stargift\_drop\_original\_details** в [starsTransaction](/constructor/starsTransaction/)
-   Добавлен параметр **drop\_original\_details\_stars** в [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Добавлены параметры **prices**, **next\_prices** в [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/)
-   Добавлен параметр **drop\_original\_details\_stars** в [savedStarGift](/constructor/savedStarGift/)
-   Добавлены параметры **currency**, **amount** в [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/)

#### [Схема](/schema/)

```
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
messageActionStarGiftUnique#95728543 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long = MessageAction;
payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;
savedStarGift#8983a452 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long = SavedStarGift;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
inputInvoicePremiumAuthCode#3e77f614 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceStarGiftDropOriginalDetails#0923d8d1 stargift:InputSavedStarGift = InputInvoice;
starGiftUpgradePrice#99ea331d date:int upgrade_stars:long = StarGiftUpgradePrice;
---functions---
account.getUniqueGiftChatThemes#e42ce9c9 offset:string limit:int hash:long = account.ChatThemes;
auth.checkPaidAuth#56e59f9c phone_number:string phone_code_hash:string form_id:long = auth.SentCode;
```

### [Слой 214](https://core.telegram.org/schema?layer=214)

Чтобы просмотреть все изменения, произошедшие с момента предыдущего обновления документации, начинайте читать со [слоя 196](#layer-196). Это обновление документации приносит _также_ следующие изменения:

-   [Совершенно новый файл карты базы данных ссылок на файлы »](/api/file-references/): по нему можно автоматически сгенерировать код полностью работоспособной базы данных ссылок на файлы, подробнее [здесь »](/api/file-references/).

    -   Генератор файла карты имеет открытый исходный код и специально сделан так, чтобы его было легко запускать на более новых, даже экспериментальных слоях, [подробнее здесь »](/api/file-reference-generator/).
    -   В списках изменений между слоями теперь также перечисляются правки в файле карты ссылок на файлы.
-   [Обновлена база данных ошибок RPC »](/api/errors/), и теперь в ней есть следующие дополнительные поля:

    -   `business_supported` — содержит полный список методов, которые бот может использовать в рамках [бизнес-подключения через invokeWithBusinessConnection](/api/bots/connected-business-bots/).
    -   `unauthed_allowed` — содержит полный список методов, которые допустимо использовать на соединениях, где вход ещё не выполнен.
-   Все методы в документации теперь явно указывают, могут ли их использовать боты, пользователи или и те и другие, а также можно ли вызывать его в рамках бизнес-подключения или на неавторизованном соединении.

-   Обновлён список методов, которые допускается использовать в рамках [бизнес-подключения](/api/bots/connected-business-bots/)

    -   [stories.sendStory](/method/stories.sendStory/) и [stories.editStory](/method/stories.editStory/) можно применять и для публикации и редактирования историй от имени подключённого бизнес-аккаунта: в этом случае достаточно передать пир бизнес-аккаунта в `peer`, _не_ оборачивая запрос в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/).  
        Учтите, что с помощью [stories.editStory](/method/stories.editStory/) можно редактировать только те истории, которые от имени пользователя опубликовал тот же самый бизнес-бот.
-   Обновлён список методов, которые допускается использовать на [неавторизованном соединении](/api/auth/#we-are-authorized)

-   [Документация по странице профиля также переработана: в неё вошёл полный список отображаемых вкладок профиля и инструкции по их наполнению »](/api/profile/).

-   [Исправлены инструкции по вычислению хеша для messages.getScheduledHistory: правильный порядок — id, edit\_date, date, а не id, date, edit\_date »](/method/messages.getScheduledHistory/)

-   Добавлена документация о [замороженных аккаунтах »](/api/auth/#frozen-accounts)

-   [Добавлен новый ключ клиентской конфигурации для максимального числа допустимых вариантов ответа в викторине](/api/config/#poll-answers-max)

-   [Добавлен новый ключ клиентской конфигурации для максимального количества Telegram Stars, которое можно вывести с баланса канала или бота »](/api/config/#stars-revenue-withdrawal-max)

-   [Добавлена поддержка проверки возраста, если этого требует законодательство текущей страны »](/api/age-verification/).

-   Для [Mini Apps](/api/bots/webapps/) добавлены API хранилища устройства и защищённого хранилища, использующие следующие события:

    -   [web\_app\_device\_storage\_save\_key](/api/web-events/#web-app-device-storage-save-key) — сохранить или удалить значение в локальном хранилище устройства, связанном с этим пользователем и этим Mini App
    -   [web\_app\_device\_storage\_get\_key](/api/web-events/#web-app-device-storage-get-key) — получить значение из локального хранилища устройства, связанного с этим пользователем и этим Mini App
    -   [web\_app\_device\_storage\_clear](/api/web-events/#web-app-device-storage-clear) — очистить локальное хранилище устройства, связанное с этим пользователем и этим Mini App
    -   [web\_app\_secure\_storage\_save\_key](/api/web-events/#web-app-secure-storage-save-key) — сохранить или удалить значение в защищённом хранилище устройства, связанном с этим пользователем и этим Mini App
    -   [web\_app\_secure\_storage\_get\_key](/api/web-events/#web-app-secure-storage-get-key) — получить значение из защищённого хранилища устройства, связанного с этим пользователем и этим Mini App
    -   [web\_app\_secure\_storage\_restore\_key](/api/web-events/#web-app-secure-storage-restore-key) — восстановить значение в защищённом хранилище устройства, связанном с этим пользователем и этим Mini App
    -   [web\_app\_secure\_storage\_clear](/api/web-events/#web-app-secure-storage-clear) — очистить защищённое хранилище устройства, связанное с этим пользователем и этим Mini App
-   Добавлена поддержка нового [права администратора](/constructor/chatAdminRights/) `manage_direct_messages` в [ссылках для добавления бота в группу или канал](/api/links/#group-channel-bot-links).

-   Обновлена документация по идентификаторам диалогов Bot API: добавлена поддержка нового диапазона идентификаторов монофорумов, подробности [здесь »](/api/bots/ids/#monoforum-ids).

    -   Точнее, идентификаторы диалогов Bot API теперь занимают диапазон от `-4000000000000` до `1099511627775` (прежде диапазон был от `-2002147483648` до `1099511627775`).
    -   Преобразованный диапазон идентификаторов диалогов-монофорумов Bot API — от `-2002147483649` до `-4000000000000` включительно.
-   В push-уведомлениях теперь может присутствовать дополнительный параметр `report_delivery_until_date` для [сообщений с кодом подтверждения Telegram Gateway](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification): если он задан, сообщение содержит код подтверждения Telegram Gateway, и следует вызвать [messages.reportMessagesDelivery](/method/messages.reportMessagesDelivery/) с установленным флагом `push`.

-   Внесено уточнение в [документацию по платным реакциям »](/api/reactions/#paid-reactions): аргумент `random_id` метода [messages.sendPaidReaction](/method/messages.sendPaidReaction/) **обязан** представлять собой 64-битное целое, младшие 32 бита которого случайны, а старшие 32 бита **равны текущему unixtime**, то есть `uint64_t random_id = (time() << 32) | ((uint64_t)random_uint32_t())`; это отличается от формата `random_id` во всех остальных методах API, где берутся просто 64 случайных бита.

-   Уточнено, что добавление новой недавней реакции должно приводить к изменению кешированного списка и повторному вычислению хеша по особому алгоритму, подробности [здесь »](/api/reactions/#recent-reactions).

-   Уточнено, что изменение тегов сохранённых сообщений должно приводить к изменению кешированного списка и повторному вычислению хеша по особому алгоритму, подробности [здесь »](/api/saved-messages/#tags).

-   Обновлён [список типов веб-страниц »](/constructor/webPage/).

-   [Уточнено](/api/invoking/), что в некоторых случаях — например, для обновлений из крупных каналов — API может вернуть конструкторы из более старых слоёв, отличных от текущего слоя соединения.  
    Клиентам следует трактовать это как серверную ошибку `500` и обрабатывать её закрытием и повторным открытием TCP-сокета, повторной инициализацией сессии через [initConnection](/method/initConnection/) и вызовом [getDifference](/api/updates/).

-   Целая россыпь новых возможностей и статей — чтобы увидеть их все, [начинайте читать со слоя 196](#layer-196). А вот изменения в этом слое:

-   [Назначить коллекционный подарок темой чата »](/api/themes/#chat-themes)

-   Разрешена отправка письма в службу поддержки Telegram при получении [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/) во время входа (только для официальных клиентов).

#### Изменения [схемы](/schema/)

##### Новые методы

-   Добавлен [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/) — получить все [темы чата »](/api/themes/#chat-themes), связанные с принадлежащими пользователю или [размещёнными коллекционными подарками »](/api/gifts/#hosted-collectible-gifts).

##### Изменённые методы

-   В [messages.setChatTheme](/method/messages.setChatTheme/) добавлен параметр **theme**, удалён параметр **emoticon**

##### Новые конструкторы

-   Добавлен [chatTheme](/constructor/chatTheme/) — тема чата
-   Добавлен [chatThemeUniqueGift](/constructor/chatThemeUniqueGift/) — тема чата на основе [коллекционного подарка »](/api/gifts/#collectible-gifts).
-   Добавлен [account.chatThemesNotModified](/constructor/account.chatThemesNotModified/) — доступные темы чата не изменились
-   Добавлен [account.chatThemes](/constructor/account.chatThemes/) — доступные [темы чата](/api/themes/#chat-themes)
-   Добавлен [inputChatThemeEmpty](/constructor/inputChatThemeEmpty/) — убрать любую установленную сейчас тему.
-   Добавлен [inputChatTheme](/constructor/inputChatTheme/) — установить тему чата на основе эмодзи, возвращаемую методом [account.getChatThemes](/method/account.getChatThemes/).
-   Добавлен [inputChatThemeUniqueGift](/constructor/inputChatThemeUniqueGift/) — установить тему на основе принадлежащего пользователю или [размещённого коллекционного подарка »](/api/gifts/#hosted-collectible-gifts), возвращаемую методом [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/).

##### Изменённые конструкторы

-   В [messageActionSetChatTheme](/constructor/messageActionSetChatTheme/) добавлен параметр **theme**, удалён параметр **emoticon**
-   В [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/) добавлены параметры **support\_email\_address**, **support\_email\_subject**
-   В [userFull](/constructor/userFull/) добавлен параметр **theme**, удалён параметр **theme\_emoticon**
-   В [starGiftUnique](/constructor/starGiftUnique/) добавлены параметры **theme\_available**, **theme\_peer**

#### Изменения PUSH-уведомлений

##### Новые PUSH-уведомления

-   Добавлено [MESSAGE\_STARGIFT\_UNPACK\_UPGRADE](/api/push-updates/#message-stargift-unpack-upgrade) — `{1} unpacked the Gift that you helped upgrade`

#### Изменения [схемы файла карты ссылок на файлы »](/api/file-references/)

##### Новые конструкторы

-   Добавлен boolFalse — конструктор может трактоваться как **логическое** значение `false`.
-   Добавлен boolTrue — конструктор может трактоваться как **логическое** значение `true`.
-   Добавлен true — см. [предопределённые идентификаторы](/mtproto/TL-formal/#predefined-identifiers).
-   Добавлен vector — универсальный конструктор вектора.
-   Добавлен fileReferenceMap
-   Добавлен traverseParam
-   Добавлен traverseMethodResult
-   Добавлен traverseIncomingConstructor
-   Добавлен traverseCommitSourceLocation
-   Добавлен predicate
-   Добавлен source
-   Добавлен traverseOutgoingConstructor
-   Добавлен traverseSwapLocation
-   Добавлен traverseMethodCall
-   Добавлен skippedSource
-   Добавлен refreshAction
-   Добавлен paramNotFlag
-   Добавлен paramIsFlagAbortIfEmpty
-   Добавлен paramIsFlagFallback
-   Добавлен paramIsFlagPassthrough
-   Добавлен pathPart
-   Добавлен path
-   Добавлен pathParent
-   Добавлен extractAndStore
-   Добавлен extractInputStickerSetFromDocumentAttributesAndStore
-   Добавлен extractInputStickerSetFromStickerSetAndStore
-   Добавлен extractPeerIdFromPeerAndStore
-   Добавлен extractPeerIdFromInputPeerAndStore
-   Добавлен extractChannelIdFromChannelAndStore
-   Добавлен extractChannelIdFromInputChannelAndStore
-   Добавлен extractUserIdFromUserAndStore
-   Добавлен extractUserIdFromInputUserAndStore
-   Добавлен callOp
-   Добавлен getMessageOp
-   Добавлен typedOpArg
-   Добавлен typedOp
-   Добавлен copyOp
-   Добавлен getInputChannelByIdOp
-   Добавлен getInputUserByIdOp
-   Добавлен getInputPeerByIdOp
-   Добавлен constructorOp
-   Добавлен vectorOp
-   Добавлен intLiteralOp
-   Добавлен longLiteralOp
-   Добавлен stringLiteralOp
-   Добавлен bytesLiteralOp
-   Добавлен boolLiteralOp
-   Добавлен doubleLiteralOp
-   Добавлен themeFormatLiteralOp

#### [Схема файла карты ссылок на файлы »](/api/file-references/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
true#3fedd339 = True;
vector#1cb5c415 {t:Type} # [ t ] = Vector t;
fileReferenceMap#72a99250 layer:int db_schema:string db_schema_json:string traversers_incoming:Vector<TraverserIncoming> traversers_outgoing:Vector<TraverserOutgoing> refresh_actions:Vector<RefreshAction> skipped_incoming_sources:Vector<SkippedSource> = FileReferenceMap;
traverseParam#62161b67 flags:# name:string is_flag:flags.0?true is_vector:flags.1?true type:string = TraverseParam;
traverseMethodResult#fda9f236 name:string push_sources:Vector<Source> is_needed_parent:Bool = TraverserIncoming;
traverseIncomingConstructor#6e4d00b6 type:string predicate:string params:Vector<TraverseParam> push_sources:Vector<Source> is_needed_parent:Bool = TraverserIncoming;
traverseCommitSourceLocation#94cc59c5 type:string predicate:string push_sources:Vector<Source> stored_constructor:string = TraverserIncoming;
predicate#de3bc05a predicate:string is_constructor:Bool = Predicate;
source#4ec4751a flags:# predicate:Predicate stored_constructor:string stored_params:Vector<FieldExtractor> skipped_flags:Vector<string> needs_parent:flags.3?Predicate needs_not_parents:Vector<Predicate> = Source;
traverseOutgoingConstructor#3fc5026d type:string predicate:string params:Vector<TraverseParam> = TraverserOutgoing;
traverseSwapLocation#032bf95d type:string predicate:string stored_constructor:string = TraverserOutgoing;
traverseMethodCall#9244f5bb name:string params:Vector<TraverseParam> = TraverserOutgoing;
skippedSource#2b543f6f predicate:Predicate why:string = SkippedSource;
refreshAction#d4e15689 stored_constructor:string action:ActionOp = RefreshAction;
paramNotFlag#acd9d5cf = ParamFlag;
paramIsFlagAbortIfEmpty#f8fe9fee = ParamFlag;
paramIsFlagFallback#202b77a1 fallback:TypedOp = ParamFlag;
paramIsFlagPassthrough#1dc6e17d = ParamFlag;
pathPart#19a10fbf type:string constructor:string param:string param_type:string flag:ParamFlag = PathPart;
path#0c3586a2 parts:Vector<PathPart> = Path;
pathParent#58f13684 parts:Vector<PathPart> = Path;
extractAndStore#72069549 from:Path to:string = FieldExtractor;
extractInputStickerSetFromDocumentAttributesAndStore#369d8d14 from:Path to:string = FieldExtractor;
extractInputStickerSetFromStickerSetAndStore#c167d470 from:Path to:string = FieldExtractor;
extractPeerIdFromPeerAndStore#7d33019c from:Path to:string = FieldExtractor;
extractPeerIdFromInputPeerAndStore#a51acfb4 from:Path to:string = FieldExtractor;
extractChannelIdFromChannelAndStore#5675bc97 from:Path to:string = FieldExtractor;
extractChannelIdFromInputChannelAndStore#b662660e from:Path to:string = FieldExtractor;
extractUserIdFromUserAndStore#4778ec63 from:Path to:string = FieldExtractor;
extractUserIdFromInputUserAndStore#7720aa2e from:Path to:string = FieldExtractor;
callOp#c2ff3383 method:string args:Vector<TypedOpArg> = ActionOp;
getMessageOp#8da4c2ae peer:TypedOp id:TypedOp quick_reply_shortcut_id:TypedOp = ActionOp;
typedOpArg#3a2930c2 key:string value:TypedOp = TypedOpArg;
typedOp#705b10ec type:string op:TypedOpOp = TypedOp;
copyOp#f48f418f from:string = TypedOpOp;
getInputChannelByIdOp#3cb47531 from:string = TypedOpOp;
getInputUserByIdOp#c0ee4326 from:string = TypedOpOp;
getInputPeerByIdOp#19813750 from:string = TypedOpOp;
constructorOp#107f8d8a constructor:string args:Vector<TypedOpArg> = TypedOpOp;
vectorOp#f8fb8f72 values:Vector<TypedOp> = TypedOpOp;
intLiteralOp#cbfabe7c value:int = TypedOpOp;
longLiteralOp#d08b8d3a value:long = TypedOpOp;
stringLiteralOp#2b56ea8e value:string = TypedOpOp;
bytesLiteralOp#fdb395a4 value:bytes = TypedOpOp;
boolLiteralOp#37e07911 value:Bool = TypedOpOp;
doubleLiteralOp#3651e3bf value:double = TypedOpOp;
themeFormatLiteralOp#8e4f9208 = TypedOpOp;
```

#### Изменения [схемы базы данных ссылок на файлы »](/api/file-references/)

##### Новые конструкторы

-   Добавлен boolFalse — конструктор может трактоваться как **логическое** значение `false`.
-   Добавлен boolTrue — конструктор может трактоваться как **логическое** значение `true`.
-   Добавлен true — см. [предопределённые идентификаторы](/mtproto/TL-formal/#predefined-identifiers).
-   Добавлен vector — универсальный конструктор вектора.
-   Добавлен fileIdPhoto
-   Добавлен fileIdDocument
-   Добавлен fileSourceMessage
-   Добавлен fileSourceStarsTransaction
-   Добавлен fileSourceScheduledMessage
-   Добавлен fileSourceStory
-   Добавлен fileSourceWebPage
-   Добавлен fileSourceBotApp
-   Добавлен fileSourceUserFull
-   Добавлен fileSourceAdminLog
-   Добавлен fileSourceStoryAlbum
-   Добавлен fileSourceBotPreviewMedia
-   Добавлен fileSourceBotPreviewInfo
-   Добавлен fileSourcePaidMedia
-   Добавлен fileSourceSavedMusic
-   Добавлен fileSourceChatFull
-   Добавлен fileSourceChannelFull
-   Добавлен fileSourcePremiumPromo
-   Добавлен fileSourceAttachMenuBot
-   Добавлен fileSourceTheme
-   Добавлен fileSourceWallPaper
-   Добавлен fileSourceStickerSet
-   Добавлен fileSourceSavedGifs
-   Добавлен fileSourceSavedRingtones
-   Добавлен fileSourceAvailableEffects
-   Добавлен fileSourceAvailableReactions
-   Добавлен fileSourceUserProfilePhoto
-   Добавлен fileSourceDocumentByHash

#### [Схема базы данных ссылок на файлы »](/api/file-references/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
true#3fedd339 = True;
vector#1cb5c415 {t:Type} # [ t ] = Vector t;
fileIdPhoto#47a0bd49 id:long = FileId;
fileIdDocument#461b1d89 id:long = FileId;
fileSourceMessage#b19f4c78 flags:# quick_reply_shortcut_id:flags.0?int peer:long id:int = FileSource;
fileSourceStarsTransaction#c1bac8c7 flags:# peer:long id:string refund:flags.0?true ton:flags.1?true = FileSource;
fileSourceScheduledMessage#9dc1f5f7 peer:long id:int = FileSource;
fileSourceStory#c820e3eb id:int peer:long = FileSource;
fileSourceWebPage#9e5b749c url:string = FileSource;
fileSourceBotApp#01cf8b7a id:long access_hash:long = FileSource;
fileSourceUserFull#70fdb7b0 id:long = FileSource;
fileSourceAdminLog#4797f959 channel:long max_id:long = FileSource;
fileSourceStoryAlbum#5e01f223 peer:long = FileSource;
fileSourceBotPreviewMedia#0aa91441 bot:long = FileSource;
fileSourceBotPreviewInfo#f9d2d6fc bot:long lang_code:string = FileSource;
fileSourcePaidMedia#b18d9042 id:int peer:long = FileSource;
fileSourceSavedMusic#dd1a7664 user_id:long id:long access_hash:long = FileSource;
fileSourceChatFull#9de75fde chat_id:long = FileSource;
fileSourceChannelFull#6fe19339 channel:long = FileSource;
fileSourcePremiumPromo#c907a44f = FileSource;
fileSourceAttachMenuBot#c3002694 bot:long = FileSource;
fileSourceTheme#92d05e0c id:long access_hash:long = FileSource;
fileSourceWallPaper#50dbf2f7 id:long access_hash:long = FileSource;
fileSourceStickerSet#34c73709 stickerset:InputStickerSet = FileSource;
fileSourceSavedGifs#13e78e07 = FileSource;
fileSourceSavedRingtones#2b25ef1b = FileSource;
fileSourceAvailableEffects#eb8578f0 = FileSource;
fileSourceAvailableReactions#0e432388 = FileSource;
fileSourceUserProfilePhoto#e39ee274 user_id:long max_id:long = FileSource;
fileSourceDocumentByHash#0f151e0f sha256:bytes size:long mime_type:string = FileSource;
```

#### [Изменения схемы базы данных ссылок на файлы »](/api/file-references/)

##### Новые входящие расположения

-   Добавлено — «расположение» здесь описывает место в схеме, откуда извлекается `file_reference` (ссылка на файл — короткая метка, которую сервер выдаёт вместе с файлом и без которой его нельзя скачать)

    ```
    traverseCommitSourceLocation{predicate: document, stored_constructor: fileIdDocument, push_sources: [fileSourceStickerSet, fileSourceSavedMusic (needs users.getSavedMusic), fileSourceSavedMusic (needs users.getSavedMusicByID)], type: Document}
    ```

-   Добавлено

    ```
    traverseCommitSourceLocation{predicate: photo, stored_constructor: fileIdPhoto, push_sources: [fileSourceUserProfilePhoto (needs photos.getUserPhotos)], type: Photo}
    ```

##### Новые исходящие расположения

-   Добавлено

    ```
    traverseSwapLocation{predicate: inputPhoto, stored_constructor: fileIdPhoto, type: InputPhoto}
    ```

-   Добавлено

    ```
    traverseSwapLocation{predicate: inputDocument, stored_constructor: fileIdDocument, type: InputDocument}
    ```

-   Добавлено

    ```
    traverseSwapLocation{predicate: inputDocumentFileLocation, stored_constructor: fileIdDocument, type: InputFileLocation}
    ```

-   Добавлено

    ```
    traverseSwapLocation{predicate: inputPhotoFileLocation, stored_constructor: fileIdPhoto, type: InputFileLocation}
    ```

##### Новые источники

-   Добавлен (1) источник для [document](/constructor/document/) —

    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromDocumentAttributesAndStore(document.attributes)}
    ```

-   Добавлен (2) источник для [document](/constructor/document/) —

    ```
    (needs users.getSavedMusic) fileSourceSavedMusic{user_id: extractUserIdFromInputUserAndStore(users.getSavedMusic.id), id: document.id, access_hash: document.access_hash}
    ```

-   Добавлен (3) источник для [document](/constructor/document/) —

    ```
    (needs users.getSavedMusicByID) fileSourceSavedMusic{user_id: extractUserIdFromInputUserAndStore(users.getSavedMusicByID.id), id: document.id, access_hash: document.access_hash}
    ```

-   Добавлен источник для [photo](/constructor/photo/) —

    ```
    (needs photos.getUserPhotos) fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.getUserPhotos.user_id), max_id: photo.id}
    ```

-   Добавлен источник для [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) —

    ```
    fileSourceSavedRingtones{}
    ```

-   Добавлен источник для [account.savedRingtones](/constructor/account.savedRingtones/) —

    ```
    fileSourceSavedRingtones{}
    ```

-   Добавлен источник для [attachMenuBot](/constructor/attachMenuBot/) —

    ```
    fileSourceAttachMenuBot{bot: attachMenuBot.bot_id}
    ```

-   Добавлен источник для [botApp](/constructor/botApp/) —

    ```
    fileSourceBotApp{id: botApp.id, access_hash: botApp.access_hash}
    ```

-   Добавлен источник для [botInfo](/constructor/botInfo/) —

    ```
    fileSourceUserFull{id: botInfo.user_id?abort_if_empty}
    ```

-   Добавлен источник для [channelAdminLogEvent](/constructor/channelAdminLogEvent/) —

    ```
    (needs channels.getAdminLog) fileSourceAdminLog{channel: extractChannelIdFromInputChannelAndStore(channels.getAdminLog.channel), max_id: channelAdminLogEvent.id}
    ```

-   Добавлен источник для [channelFull](/constructor/channelFull/) —

    ```
    fileSourceChannelFull{channel: channelFull.id}
    ```

-   Добавлен источник для [chatFull](/constructor/chatFull/) —

    ```
    fileSourceChatFull{chat_id: chatFull.id}
    ```

-   Добавлен источник для [foundStory](/constructor/foundStory/) —

    ```
    fileSourceStory{id: foundStory.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(foundStory.peer)}
    ```

-   Добавлен (1) источник для [message](/constructor/message/) —

    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{quick_reply_shortcut_id: message.quick_reply_shortcut_id?passthrough, peer: extractPeerIdFromPeerAndStore(message.peer_id), id: message.id}
    ```

-   Добавлен (2) источник для [message](/constructor/message/) —

    ```
    (needs messages.getScheduledMessages) fileSourceScheduledMessage{peer: extractPeerIdFromInputPeerAndStore(messages.getScheduledMessages.peer), id: message.id}
    ```

-   Добавлен (3) источник для [message](/constructor/message/) —

    ```
    (needs updateNewScheduledMessage) fileSourceScheduledMessage{peer: extractPeerIdFromPeerAndStore(updateNewScheduledMessage.message.message.peer_id), id: message.id}
    ```

-   Добавлен источник для [messageMediaStory](/constructor/messageMediaStory/) —

    ```
    fileSourceStory{id: messageMediaStory.story?abort_if_empty.storyItem.id, peer: extractPeerIdFromPeerAndStore(messageMediaStory.peer)}
    ```

-   Добавлен источник для [messageService](/constructor/messageService/) —

    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{peer: extractPeerIdFromPeerAndStore(messageService.peer_id), id: messageService.id, quick_reply_shortcut_id: false}
    ```

-   Добавлен источник для [messages.availableEffects](/constructor/messages.availableEffects/) —

    ```
    fileSourceAvailableEffects{}
    ```

-   Добавлен источник для [messages.availableReactions](/constructor/messages.availableReactions/) —

    ```
    fileSourceAvailableReactions{}
    ```

-   Добавлен источник для [messages.savedGifs](/constructor/messages.savedGifs/) —

    ```
    fileSourceSavedGifs{}
    ```

-   Добавлен источник для [messages.stickerSet](/constructor/messages.stickerSet/) —

    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(messages.stickerSet.set)}
    ```

-   Добавлен источник для [publicForwardStory](/constructor/publicForwardStory/) —

    ```
    fileSourceStory{id: publicForwardStory.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(publicForwardStory.peer)}
    ```

-   Добавлен (1) источник для [starsTransaction](/constructor/starsTransaction/) —

    ```
    (needs payments.getStarsStatus) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsStatus.peer), ton: payments.getStarsStatus.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```

-   Добавлен (2) источник для [starsTransaction](/constructor/starsTransaction/) —

    ```
    (needs payments.getStarsTransactions) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsTransactions.peer), ton: payments.getStarsTransactions.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```

-   Добавлен (3) источник для [starsTransaction](/constructor/starsTransaction/) —

    ```
    (needs payments.getStarsTransactionsByID) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsTransactionsByID.peer), ton: payments.getStarsTransactionsByID.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```

-   Добавлен (4) источник для [starsTransaction](/constructor/starsTransaction/) —

    ```
    (needs payments.getStarsSubscriptions) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsSubscriptions.peer), id: starsTransaction.id, refund: starsTransaction.refund?passthrough, ton: false}
    ```

-   Добавлен источник для [stickerSetFullCovered](/constructor/stickerSetFullCovered/) —

    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(stickerSetFullCovered.set)}
    ```

-   Добавлен источник для [stickerSetMultiCovered](/constructor/stickerSetMultiCovered/) —

    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(stickerSetMultiCovered.set)}
    ```

-   Добавлен (1) источник для [storyItem](/constructor/storyItem/) —

    ```
    (needs stories.getPinnedStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getPinnedStories.peer)}
    ```

-   Добавлен (2) источник для [storyItem](/constructor/storyItem/) —

    ```
    (needs stories.getStoriesArchive) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getStoriesArchive.peer)}
    ```

-   Добавлен (3) источник для [storyItem](/constructor/storyItem/) —

    ```
    (needs stories.getStoriesByID) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getStoriesByID.peer)}
    ```

-   Добавлен (4) источник для [storyItem](/constructor/storyItem/) —

    ```
    (needs stories.getAlbumStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getAlbumStories.peer)}
    ```

-   Добавлен (5) источник для [storyItem](/constructor/storyItem/) —

    ```
    (needs peerStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromPeerAndStore(peerStories.peer)}
    ```

-   Добавлен (6) источник для [storyItem](/constructor/storyItem/) —

    ```
    fileSourceStory{id: storyItem.id, peer: extractPeerIdFromPeerAndStore(storyItem.from_id?abort_if_empty)}
    ```

-   Добавлен источник для [storyReactionPublicRepost](/constructor/storyReactionPublicRepost/) —

    ```
    fileSourceStory{id: storyReactionPublicRepost.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(storyReactionPublicRepost.peer_id)}
    ```

-   Добавлен источник для [storyViewPublicRepost](/constructor/storyViewPublicRepost/) —

    ```
    fileSourceStory{id: storyViewPublicRepost.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(storyViewPublicRepost.peer_id)}
    ```

-   Добавлен источник для [theme](/constructor/theme/) —

    ```
    fileSourceTheme{id: theme.id, access_hash: theme.access_hash}
    ```

-   Добавлен источник для [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) —

    ```
    fileSourcePaidMedia{id: updateMessageExtendedMedia.msg_id, peer: extractPeerIdFromPeerAndStore(updateMessageExtendedMedia.peer)}
    ```

-   Добавлен (1) источник для [userFull](/constructor/userFull/) —

    ```
    fileSourceUserFull{id: userFull.id}
    ```

-   Добавлен (2) источник для [userFull](/constructor/userFull/) —

    ```
    fileSourceSavedMusic{user_id: userFull.id, id: userFull.saved_music?abort_if_empty.document.id, access_hash: userFull.saved_music?abort_if_empty.document.access_hash}
    ```

-   Добавлен источник для [wallPaper](/constructor/wallPaper/) —

    ```
    fileSourceWallPaper{id: wallPaper.id, access_hash: wallPaper.access_hash}
    ```

-   Добавлен источник для [webPage](/constructor/webPage/) —

    ```
    fileSourceWebPage{url: webPage.url}
    ```

-   Добавлен источник для [webPageAttributeStory](/constructor/webPageAttributeStory/) —

    ```
    fileSourceStory{id: webPageAttributeStory.story?abort_if_empty.storyItem.id, peer: extractPeerIdFromPeerAndStore(webPageAttributeStory.peer)}
    ```

-   Добавлен источник для [account.uploadRingtone](/method/account.uploadRingtone/) —

    ```
    fileSourceSavedRingtones{}
    ```

-   Добавлен источник для [bots.addPreviewMedia](/method/bots.addPreviewMedia/) —

    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.addPreviewMedia.bot), lang_code: bots.addPreviewMedia.lang_code}
    ```

-   Добавлен источник для [bots.editPreviewMedia](/method/bots.editPreviewMedia/) —

    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.editPreviewMedia.bot), lang_code: bots.editPreviewMedia.lang_code}
    ```

-   Добавлен источник для [bots.getPreviewInfo](/method/bots.getPreviewInfo/) —

    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.getPreviewInfo.bot), lang_code: bots.getPreviewInfo.lang_code}
    ```

-   Добавлен источник для [bots.getPreviewMedias](/method/bots.getPreviewMedias/) —

    ```
    fileSourceBotPreviewMedia{bot: extractUserIdFromInputUserAndStore(bots.getPreviewMedias.bot)}
    ```

-   Добавлен источник для [help.getPremiumPromo](/method/help.getPremiumPromo/) —

    ```
    fileSourcePremiumPromo{}
    ```

-   Добавлен источник для [messages.getDocumentByHash](/method/messages.getDocumentByHash/) —

    ```
    fileSourceDocumentByHash{sha256: messages.getDocumentByHash.sha256, size: messages.getDocumentByHash.size, mime_type: messages.getDocumentByHash.mime_type}
    ```

-   Добавлен источник для [photos.updateProfilePhoto](/method/photos.updateProfilePhoto/) —

    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.updateProfilePhoto.bot?fallback(inputUserSelf{})), max_id: photos.updateProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```

-   Добавлен источник для [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/) —

    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.uploadContactProfilePhoto.user_id), max_id: photos.uploadContactProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```

-   Добавлен источник для [photos.uploadProfilePhoto](/method/photos.uploadProfilePhoto/) —

    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.uploadProfilePhoto.bot?fallback(inputUserSelf{})), max_id: photos.uploadProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```

-   Добавлен источник для [stories.createAlbum](/method/stories.createAlbum/) —

    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.createAlbum.peer)}
    ```

-   Добавлен источник для [stories.getAlbums](/method/stories.getAlbums/) —

    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.getAlbums.peer)}
    ```

-   Добавлен источник для [stories.updateAlbum](/method/stories.updateAlbum/) —

    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.updateAlbum.peer)}
    ```

##### Новые пропускаемые входящие источники

-   Добавлен [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/) — не сохраняйте ссылки на файлы из спонсируемых сообщений
-   Добавлен [help.getAppUpdate](/method/help.getAppUpdate/) — не обрабатывайте ссылки на файлы из эфемерных сведений об обновлении приложения
-   Добавлен [help.getRecentMeUrls](/method/help.getRecentMeUrls/) — не обрабатывайте ссылки на файлы из недавних адресов t.me
-   Добавлен [recentMeUrlChatInvite](/constructor/recentMeUrlChatInvite/) — не сохраняйте ссылки, основанные на пригласительных ссылках чата
-   Добавлен [messages.checkChatInvite](/method/messages.checkChatInvite/) — не сохраняйте ссылки, основанные на пригласительных ссылках чата
-   Добавлен [messages.getInlineBotResults](/method/messages.getInlineBotResults/) — результаты инлайн-бота эфемерны
-   Добавлен [messages.getPreparedInlineMessage](/method/messages.getPreparedInlineMessage/) — результаты инлайн-бота эфемерны
-   Добавлен [messages.uploadMedia](/method/messages.uploadMedia/) — только что загруженный медиафайл получит контекст лишь после того, как будет отправлен в чат
-   Добавлен [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/) — только что загруженный медиафайл получит контекст лишь после того, как будет отправлен в чат
-   Добавлен [updateServiceNotification](/constructor/updateServiceNotification/) — сервисные уведомления нельзя перезапросить
-   Добавлен [messages.getWebPagePreview](/method/messages.getWebPagePreview/) — для вызова этого метода расположения не добавляются, поскольку он не принимает на вход постоянные идентификаторы; вместо этого расположение извлекается из постоянных идентификаторов в возвращаемом объекте WebPage
-   Добавлен [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/) — контексты для звёздных подарков пока не реализованы
-   Добавлен [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/) — контексты для звёздных подарков пока не реализованы
-   Добавлен [starGift](/constructor/starGift/) — контексты для звёздных подарков пока не реализованы
-   Добавлен [starGiftUnique](/constructor/starGiftUnique/) — контексты для звёздных подарков пока не реализованы
-   Добавлен [starGiftCollection](/constructor/starGiftCollection/) — контексты для звёздных подарков пока не реализованы
-   Добавлен [payments.starGiftCollections](/constructor/payments.starGiftCollections/) — контексты для звёздных подарков пока не реализованы
-   Добавлен [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/) — не сохраняйте ссылки на файлы в этом контексте
-   Добавлен [account.uploadTheme](/method/account.uploadTheme/) — только что загруженный файл темы получит контекст лишь после того, как будет создан через account.createTheme

##### Новые действия обновления

-   Добавлено fileSourceMessage —

    ```
    getMessageOp(peer: getInputPeerByIdOp(peer), id: copyOp(id), quick_reply_shortcut_id: copyOp(quick_reply_shortcut_id))
    ```

-   Добавлено fileSourceScheduledMessage —

    ```
    messages.getScheduledMessages(peer: getInputPeerByIdOp(peer), id: [copyOp(id)])
    ```

-   Добавлено fileSourceStory —

    ```
    stories.getStoriesByID(id: [copyOp(id)], peer: getInputPeerByIdOp(peer))
    ```

-   Добавлено fileSourceWebPage —

    ```
    messages.getWebPage(url: copyOp(url), hash: 0)
    ```

-   Добавлено fileSourceBotApp —

    ```
    messages.getBotApp(app: inputBotAppID{id: copyOp(id), access_hash: copyOp(access_hash)}, hash: 0)
    ```

-   Добавлено fileSourceUserFull —

    ```
    users.getFullUser(id: getInputUserByIdOp(id))
    ```

-   Добавлено fileSourceAdminLog —

    ```
    channels.getAdminLog(channel: getInputChannelByIdOp(channel), max_id: copyOp(max_id), min_id: copyOp(max_id), limit: 1, q: "")
    ```

-   Добавлено fileSourceStoryAlbum —

    ```
    stories.getAlbums(peer: getInputPeerByIdOp(peer), hash: 0)
    ```

-   Добавлено fileSourceBotPreviewMedia —

    ```
    bots.getPreviewMedias(bot: getInputUserByIdOp(bot))
    ```

-   Добавлено fileSourceBotPreviewInfo —

    ```
    bots.getPreviewInfo(bot: getInputUserByIdOp(bot), lang_code: copyOp(lang_code))
    ```

-   Добавлено fileSourcePaidMedia —

    ```
    messages.getExtendedMedia(id: [copyOp(id)], peer: getInputPeerByIdOp(peer))
    ```

-   Добавлено fileSourceSavedMusic —

    ```
    users.getSavedMusicByID(id: getInputUserByIdOp(user_id), documents: [inputDocument{id: copyOp(id), access_hash: copyOp(access_hash), file_reference: base64_decode("")}])
    ```

-   Добавлено fileSourceChatFull —

    ```
    messages.getFullChat(chat_id: copyOp(chat_id))
    ```

-   Добавлено fileSourceChannelFull —

    ```
    channels.getFullChannel(channel: getInputChannelByIdOp(channel))
    ```

-   Добавлено fileSourcePremiumPromo —

    ```
    help.getPremiumPromo()
    ```

-   Добавлено fileSourceStarsTransaction —

    ```
    payments.getStarsTransactionsByID(peer: getInputPeerByIdOp(peer), ton: copyOp(ton), id: [inputStarsTransaction{id: copyOp(id), refund: copyOp(refund)}])
    ```

-   Добавлено fileSourceAttachMenuBot —

    ```
    messages.getAttachMenuBot(bot: getInputUserByIdOp(bot))
    ```

-   Добавлено fileSourceTheme —

    ```
    account.getTheme(theme: inputTheme{id: copyOp(id), access_hash: copyOp(access_hash)}, format: $themeFormat)
    ```

-   Добавлено fileSourceWallPaper —

    ```
    account.getWallPaper(wallpaper: inputWallPaper{id: copyOp(id), access_hash: copyOp(access_hash)})
    ```

-   Добавлено fileSourceStickerSet —

    ```
    messages.getStickerSet(stickerset: copyOp(stickerset), hash: 0)
    ```

-   Добавлено fileSourceSavedGifs —

    ```
    messages.getSavedGifs(hash: 0)
    ```

-   Добавлено fileSourceSavedRingtones —

    ```
    account.getSavedRingtones(hash: 0)
    ```

-   Добавлено fileSourceAvailableEffects —

    ```
    messages.getAvailableEffects(hash: 0)
    ```

-   Добавлено fileSourceAvailableReactions —

    ```
    messages.getAvailableReactions(hash: 0)
    ```

-   Добавлено fileSourceUserProfilePhoto —

    ```
    photos.getUserPhotos(user_id: getInputUserByIdOp(user_id), offset: -1, max_id: copyOp(max_id), limit: 1)
    ```

-   Добавлено fileSourceDocumentByHash —

    ```
    messages.getDocumentByHash(sha256: copyOp(sha256), size: copyOp(size), mime_type: copyOp(mime_type))
    ```

##### Новые входящие обходчики

-   Добавлено

    ```
    traverseCommitSourceLocation{predicate: document, stored_constructor: fileIdDocument, push_sources: [fileSourceStickerSet, fileSourceSavedMusic (needs users.getSavedMusic), fileSourceSavedMusic (needs users.getSavedMusicByID)], type: Document}
    ```

-   Добавлено

    ```
    traverseCommitSourceLocation{predicate: photo, stored_constructor: fileIdPhoto, push_sources: [fileSourceUserProfilePhoto (needs photos.getUserPhotos)], type: Photo}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: account.chatThemes, params: [themes], type: account.ChatThemes}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: account.savedRingtoneConverted, params: [document], push_sources: [fileSourceSavedRingtones], type: account.SavedRingtone}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: account.savedRingtones, params: [ringtones], push_sources: [fileSourceSavedRingtones], type: account.SavedRingtones}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: account.themes, params: [themes], type: account.Themes}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: account.wallPapers, params: [wallpapers], type: account.WallPapers}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: attachMenuBot, params: [icons], push_sources: [fileSourceAttachMenuBot], type: AttachMenuBot}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: attachMenuBotIcon, params: [icon], type: AttachMenuBotIcon}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: attachMenuBots, params: [bots], type: AttachMenuBots}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: attachMenuBotsBot, params: [bot], type: AttachMenuBotsBot}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: availableReaction, params: [static_icon, appear_animation, select_animation, activate_animation, effect_animation, around_animation, center_icon], type: AvailableReaction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: botApp, params: [photo, document], push_sources: [fileSourceBotApp], type: BotApp}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: botInfo, params: [description_photo, description_document], push_sources: [fileSourceUserFull], type: BotInfo}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: botInlineMediaResult, params: [document], type: BotInlineResult}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: botPreviewMedia, params: [media], type: BotPreviewMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: bots.previewInfo, params: [media], type: bots.PreviewInfo}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: businessIntro, params: [sticker], type: BusinessIntro}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelAdminLogEvent, params: [action], push_sources: [fileSourceAdminLog (needs channels.getAdminLog)], type: ChannelAdminLogEvent}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionChangePhoto, params: [prev_photo, new_photo], type: ChannelAdminLogEventAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionChangeWallpaper, params: [prev_value, new_value], type: ChannelAdminLogEventAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionDeleteMessage, params: [message], type: ChannelAdminLogEventAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionEditMessage, params: [prev_message, new_message], type: ChannelAdminLogEventAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionSendMessage, params: [message], type: ChannelAdminLogEventAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionStopPoll, params: [message], type: ChannelAdminLogEventAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionUpdatePinned, params: [message], type: ChannelAdminLogEventAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channelFull, params: [chat_photo, bot_info, stories, wallpaper], push_sources: [fileSourceChannelFull], type: ChatFull}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: channels.adminLogResults, params: [events], type: channels.AdminLogResults}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: chatFull, params: [chat_photo, bot_info], push_sources: [fileSourceChatFull], type: ChatFull}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: chatThemeUniqueGift, params: [gift, theme_settings], type: ChatTheme}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: foundStory, params: [story], push_sources: [fileSourceStory], type: FoundStory}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: game, params: [photo, document], type: Game}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: help.appUpdate, params: [document, sticker], type: help.AppUpdate}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: help.premiumPromo, params: [videos], type: help.PremiumPromo}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: help.recentMeUrls, params: [urls], type: help.RecentMeUrls}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: message, params: [reply_to, media], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage), fileSourceScheduledMessage (needs messages.getScheduledMessages), fileSourceScheduledMessage (needs updateNewScheduledMessage)], type: Message}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionBotAllowed, params: [app], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionChatEditPhoto, params: [photo], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionRequestedPeerSentMe, params: [peers], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionSetChatTheme, params: [theme], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionSetChatWallPaper, params: [wallpaper], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionStarGift, params: [gift], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionStarGiftUnique, params: [gift], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageActionSuggestProfilePhoto, params: [photo], type: MessageAction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageExtendedMedia, params: [media], type: MessageExtendedMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageMediaDocument, params: [document, alt_documents, video_cover], type: MessageMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageMediaGame, params: [game], type: MessageMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageMediaInvoice, params: [extended_media], type: MessageMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageMediaPaidMedia, params: [extended_media], type: MessageMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageMediaPhoto, params: [photo], type: MessageMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageMediaStory, params: [story], push_sources: [fileSourceStory], type: MessageMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageMediaWebPage, params: [webpage], type: MessageMedia}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageReplyHeader, params: [reply_media], type: MessageReplyHeader}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messageService, params: [reply_to, action], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage)], type: Message}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.archivedStickers, params: [sets], type: messages.ArchivedStickers}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.availableEffects, params: [documents], push_sources: [fileSourceAvailableEffects], type: messages.AvailableEffects}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.availableReactions, params: [reactions], push_sources: [fileSourceAvailableReactions], type: messages.AvailableReactions}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.botApp, params: [app], type: messages.BotApp}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.botResults, params: [results], type: messages.BotResults}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.channelMessages, params: [messages], type: messages.Messages}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.chatFull, params: [full_chat], type: messages.ChatFull}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.dialogs, params: [messages], type: messages.Dialogs}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.dialogsSlice, params: [messages], type: messages.Dialogs}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.discussionMessage, params: [messages], type: messages.DiscussionMessage}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.favedStickers, params: [stickers], type: messages.FavedStickers}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.featuredStickers, params: [sets], type: messages.FeaturedStickers}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.forumTopics, params: [messages], type: messages.ForumTopics}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.foundStickerSets, params: [sets], type: messages.FoundStickerSets}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.foundStickers, params: [stickers], type: messages.FoundStickers}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.messages, params: [messages], type: messages.Messages}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.messagesSlice, params: [messages], type: messages.Messages}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.myStickers, params: [sets], type: messages.MyStickers}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.peerDialogs, params: [messages], type: messages.PeerDialogs}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.preparedInlineMessage, params: [result], type: messages.PreparedInlineMessage}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.quickReplies, params: [messages], type: messages.QuickReplies}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.recentStickers, params: [stickers], type: messages.RecentStickers}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.savedDialogs, params: [messages], type: messages.SavedDialogs}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.savedDialogsSlice, params: [messages], type: messages.SavedDialogs}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.savedGifs, params: [gifs], push_sources: [fileSourceSavedGifs], type: messages.SavedGifs}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.searchResultsCalendar, params: [messages], type: messages.SearchResultsCalendar}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.sponsoredMessages, params: [messages], type: messages.SponsoredMessages}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.stickerSet, params: [documents], push_sources: [fileSourceStickerSet], type: messages.StickerSet}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.stickerSetInstallResultArchive, params: [sets], type: messages.StickerSetInstallResult}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.stickers, params: [stickers], type: messages.Stickers}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.webPage, params: [webpage], type: messages.WebPage}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: messages.webPagePreview, params: [media], type: messages.WebPagePreview}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: page, params: [photos, documents], type: Page}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.resaleStarGifts, params: [gifts, attributes], type: payments.ResaleStarGifts}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.savedStarGifts, params: [gifts], type: payments.SavedStarGifts}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.starGiftCollections, params: [collections], type: payments.StarGiftCollections}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.starGiftUpgradePreview, params: [sample_attributes], type: payments.StarGiftUpgradePreview}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.starGifts, params: [gifts], type: payments.StarGifts}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.starsStatus, params: [history], type: payments.StarsStatus}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: payments.uniqueStarGift, params: [gift], type: payments.UniqueStarGift}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: peerStories, params: [stories], is_needed_parent: true, type: PeerStories}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: photos.photo, params: [photo], type: photos.Photo}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: photos.photos, params: [photos], type: photos.Photos}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: photos.photosSlice, params: [photos], type: photos.Photos}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: publicForwardMessage, params: [message], type: PublicForward}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: publicForwardStory, params: [story], push_sources: [fileSourceStory], type: PublicForward}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: recentMeUrlStickerSet, params: [set], type: RecentMeUrl}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: requestedPeerChannel, params: [photo], type: RequestedPeer}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: requestedPeerChat, params: [photo], type: RequestedPeer}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: requestedPeerUser, params: [photo], type: RequestedPeer}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: savedStarGift, params: [gift], type: SavedStarGift}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: sponsoredMessage, params: [media], type: SponsoredMessage}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: starGift, params: [sticker], type: StarGift}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: starGiftAttributeModel, params: [document], type: StarGiftAttribute}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: starGiftAttributePattern, params: [document], type: StarGiftAttribute}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: starGiftCollection, params: [icon], type: StarGiftCollection}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: starGiftUnique, params: [attributes], type: StarGift}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: starsTransaction, params: [extended_media, stargift], push_sources: [fileSourceStarsTransaction (needs payments.getStarsStatus), fileSourceStarsTransaction (needs payments.getStarsTransactions), fileSourceStarsTransaction (needs payments.getStarsTransactionsByID), fileSourceStarsTransaction (needs payments.getStarsSubscriptions)], type: StarsTransaction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stats.publicForwards, params: [forwards], type: stats.PublicForwards}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stickerSetCovered, params: [cover], type: StickerSetCovered}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stickerSetFullCovered, params: [documents], push_sources: [fileSourceStickerSet], type: StickerSetCovered}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stickerSetMultiCovered, params: [covers], push_sources: [fileSourceStickerSet], type: StickerSetCovered}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stories.albums, params: [albums], type: stories.Albums}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stories.allStories, params: [peer_stories], type: stories.AllStories}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stories.foundStories, params: [stories], type: stories.FoundStories}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stories.peerStories, params: [stories], type: stories.PeerStories}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stories.stories, params: [stories], type: stories.Stories}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stories.storyReactionsList, params: [reactions], type: stories.StoryReactionsList}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: stories.storyViewsList, params: [views], type: stories.StoryViewsList}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: storyAlbum, params: [icon_photo, icon_video], type: StoryAlbum}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: storyItem, params: [media], push_sources: [fileSourceStory (needs stories.getPinnedStories), fileSourceStory (needs stories.getStoriesArchive), fileSourceStory (needs stories.getStoriesByID), fileSourceStory (needs stories.getAlbumStories), fileSourceStory (needs peerStories), fileSourceStory], type: StoryItem}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: storyReactionPublicForward, params: [message], type: StoryReaction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: storyReactionPublicRepost, params: [story], push_sources: [fileSourceStory], type: StoryReaction}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: storyViewPublicForward, params: [message], type: StoryView}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: storyViewPublicRepost, params: [story], push_sources: [fileSourceStory], type: StoryView}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: theme, params: [document, settings], push_sources: [fileSourceTheme], type: Theme}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: themeSettings, params: [wallpaper], type: ThemeSettings}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateBotEditBusinessMessage, params: [message, reply_to_message], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateBotNewBusinessMessage, params: [message, reply_to_message], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateBusinessBotCallbackQuery, params: [message, reply_to_message], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateChannelWebPage, params: [webpage], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateEditChannelMessage, params: [message], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateEditMessage, params: [message], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateMessageExtendedMedia, params: [extended_media], push_sources: [fileSourcePaidMedia], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateNewChannelMessage, params: [message], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateNewMessage, params: [message], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateNewScheduledMessage, params: [message], is_needed_parent: true, type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateNewStickerSet, params: [stickerset], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updatePeerWallpaper, params: [wallpaper], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateQuickReplyMessage, params: [message], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateServiceNotification, params: [media], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateStory, params: [story], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateTheme, params: [theme], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updateWebPage, params: [webpage], type: Update}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updates.channelDifference, params: [new_messages], type: updates.ChannelDifference}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updates.channelDifferenceTooLong, params: [messages], type: updates.ChannelDifference}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updates.difference, params: [new_messages], type: updates.Difference}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: updates.differenceSlice, params: [new_messages], type: updates.Difference}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: userFull, params: [personal_photo, profile_photo, fallback_photo, bot_info, theme, wallpaper, stories, business_intro, saved_music], push_sources: [fileSourceUserFull, fileSourceSavedMusic], type: UserFull}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: users.savedMusic, params: [documents], type: users.SavedMusic}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: users.userFull, params: [full_user], type: users.UserFull}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: wallPaper, params: [document], push_sources: [fileSourceWallPaper], type: WallPaper}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: webPage, params: [photo, document, cached_page, attributes], push_sources: [fileSourceWebPage], type: WebPage}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: webPageAttributeStarGiftCollection, params: [icons], type: WebPageAttribute}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: webPageAttributeStickerSet, params: [stickers], type: WebPageAttribute}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: webPageAttributeStory, params: [story], push_sources: [fileSourceStory], type: WebPageAttribute}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: webPageAttributeTheme, params: [documents, settings], type: WebPageAttribute}
    ```

-   Добавлено

    ```
    traverseIncomingConstructor{predicate: webPageAttributeUniqueStarGift, params: [gift], type: WebPageAttribute}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.createTheme}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.getChatThemes}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.getMultiWallPapers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.getSavedRingtones}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.getTheme}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.getThemes}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.getUniqueGiftChatThemes}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.getWallPaper}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.getWallPapers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.saveRingtone}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.updateTheme}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.uploadRingtone, push_sources: [fileSourceSavedRingtones]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.uploadTheme}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: account.uploadWallPaper}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: bots.addPreviewMedia, push_sources: [fileSourceBotPreviewInfo]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: bots.editPreviewMedia, push_sources: [fileSourceBotPreviewInfo]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: bots.getPreviewInfo, push_sources: [fileSourceBotPreviewInfo]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: bots.getPreviewMedias, push_sources: [fileSourceBotPreviewMedia]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: channels.getAdminLog, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: channels.getForumTopics}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: channels.getForumTopicsByID}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: channels.getFullChannel}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: channels.getMessages}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: channels.searchPosts}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: help.getAppUpdate}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: help.getPremiumPromo, push_sources: [fileSourcePremiumPromo]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: help.getRecentMeUrls}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getArchivedStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getAttachMenuBot}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getAttachMenuBots}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getAttachedStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getAvailableEffects}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getAvailableReactions}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getBotApp}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getCustomEmojiDocuments}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getDialogs}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getDiscussionMessage}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getDocumentByHash, push_sources: [fileSourceDocumentByHash]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getFavedStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getFeaturedEmojiStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getFeaturedStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getFullChat}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getHistory}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getInlineBotResults}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getMessages}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getMyStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getOldFeaturedStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getPeerDialogs}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getPinnedDialogs}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getPinnedSavedDialogs}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getPreparedInlineMessage}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getQuickReplies}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getQuickReplyMessages}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getRecentLocations}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getRecentStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getReplies}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getSavedDialogs}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getSavedDialogsByID}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getSavedGifs}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getSavedHistory}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getScheduledHistory}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getScheduledMessages, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getSearchResultsCalendar}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getSponsoredMessages}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getStickerSet}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getUnreadMentions}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getUnreadReactions}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getWebPage}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.getWebPagePreview}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.installStickerSet}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.search}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.searchEmojiStickerSets}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.searchGlobal}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.searchSentMedia}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.searchStickerSets}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.searchStickers}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.uploadImportedMedia}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: messages.uploadMedia}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.createStarGiftCollection}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getResaleStarGifts}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getSavedStarGift}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getSavedStarGifts}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarGiftCollections}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarGiftUpgradePreview}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarGifts}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarsStatus, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarsSubscriptions, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarsTransactions, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getStarsTransactionsByID, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.getUniqueStarGift}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: payments.updateStarGiftCollection}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: photos.getUserPhotos, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: photos.updateProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: photos.uploadContactProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: photos.uploadProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stats.getMessagePublicForwards}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stats.getStoryPublicForwards}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stickers.addStickerToSet}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stickers.changeSticker}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stickers.changeStickerPosition}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stickers.createStickerSet}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stickers.removeStickerFromSet}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stickers.renameStickerSet}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stickers.replaceSticker}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stickers.setStickerSetThumb}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.createAlbum, push_sources: [fileSourceStoryAlbum]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getAlbumStories, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getAlbums, push_sources: [fileSourceStoryAlbum]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getAllStories}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getPeerStories}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getPinnedStories, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getStoriesArchive, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getStoriesByID, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getStoryReactionsList}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.getStoryViewsList}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.searchPosts}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: stories.updateAlbum, push_sources: [fileSourceStoryAlbum]}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: updates.getChannelDifference}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: updates.getDifference}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: users.getFullUser}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: users.getSavedMusic, is_needed_parent: true}
    ```

-   Добавлено

    ```
    traverseMethodResult{name: users.getSavedMusicByID, is_needed_parent: true}
    ```

##### Новые исходящие обходчики

-   Добавлено

    ```
    traverseMethodCall{name: account.createTheme, params: [document]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: account.reportProfilePhoto, params: [photo_id]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: account.saveMusic, params: [id, after_id]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: account.saveRingtone, params: [id]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: account.updateBusinessIntro, params: [intro]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: account.updateTheme, params: [document]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: account.uploadRingtone, params: [file]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: account.uploadTheme, params: [file, thumb]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: account.uploadWallPaper, params: [file]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: bots.addPreviewMedia, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: bots.deletePreviewMedia, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: bots.editPreviewMedia, params: [media, new_media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: bots.reorderPreviewMedias, params: [order]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: channels.editPhoto, params: [photo]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.editChatPhoto, params: [photo]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.editInlineBotMessage, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.editMessage, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.faveSticker, params: [id]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.getAttachedStickers, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.initHistoryImport, params: [file]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.saveDraft, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.saveGif, params: [id]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.savePreparedInlineMessage, params: [result]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.saveRecentSticker, params: [id]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.sendMedia, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.sendMultiMedia, params: [multi_media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.sendWebViewResultMessage, params: [result]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.setInlineBotResults, params: [results]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.uploadImportedMedia, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: messages.uploadMedia, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: payments.exportInvoice, params: [invoice_media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: phone.saveCallLog, params: [file]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: photos.deletePhotos, params: [id]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: photos.updateProfilePhoto, params: [id]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: photos.uploadContactProfilePhoto, params: [file, video]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: photos.uploadProfilePhoto, params: [file, video]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stickers.addStickerToSet, params: [sticker]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stickers.changeSticker, params: [sticker]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stickers.changeStickerPosition, params: [sticker]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stickers.createStickerSet, params: [thumb, stickers]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stickers.removeStickerFromSet, params: [sticker]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stickers.replaceSticker, params: [sticker, new_sticker]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stickers.setStickerSetThumb, params: [thumb]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stories.editStory, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: stories.sendStory, params: [media]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: upload.getFile, params: [location]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: upload.getFileHashes, params: [location]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: upload.getWebFile, params: [location]}
    ```

-   Добавлено

    ```
    traverseMethodCall{name: users.getSavedMusicByID, params: [documents]}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputBotInlineResultDocument, params: [document], type: InputBotInlineResult}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputBotInlineResultPhoto, params: [photo], type: InputBotInlineResult}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputBusinessIntro, params: [sticker], type: InputBusinessIntro}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputChatPhoto, params: [id], type: InputChatPhoto}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputChatUploadedPhoto, params: [file, video], type: InputChatPhoto}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputFileStoryDocument, params: [id], type: InputFile}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputMediaDocument, params: [id, video_cover], type: InputMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputMediaDocumentExternal, params: [video_cover], type: InputMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputMediaInvoice, params: [extended_media], type: InputMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputMediaPaidMedia, params: [extended_media], type: InputMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputMediaPhoto, params: [id], type: InputMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedDocument, params: [file, thumb, stickers, video_cover], type: InputMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedPhoto, params: [file, stickers], type: InputMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputSingleMedia, params: [media], type: InputSingleMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputStickerSetItem, params: [document], type: InputStickerSetItem}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputStickeredMediaDocument, params: [id], type: InputStickeredMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputStickeredMediaPhoto, params: [id], type: InputStickeredMedia}
    ```

-   Добавлено

    ```
    traverseOutgoingConstructor{predicate: inputWebFileAudioAlbumThumbLocation, params: [document], type: InputWebFileLocation}
    ```

-   Добавлено

    ```
    traverseSwapLocation{predicate: inputDocument, stored_constructor: fileIdDocument, type: InputDocument}
    ```

-   Добавлено

    ```
    traverseSwapLocation{predicate: inputDocumentFileLocation, stored_constructor: fileIdDocument, type: InputFileLocation}
    ```

-   Добавлено

    ```
    traverseSwapLocation{predicate: inputPhoto, stored_constructor: fileIdPhoto, type: InputPhoto}
    ```

-   Добавлено

    ```
    traverseSwapLocation{predicate: inputPhotoFileLocation, stored_constructor: fileIdPhoto, type: InputFileLocation}
    ```

#### [Схема](/schema/)

```
messageActionSetChatTheme#b91bbd3a theme:ChatTheme = MessageAction;
auth.sentCodePaymentRequired#d7a2fcf9 store_product:string phone_code_hash:string support_email_address:string support_email_subject:string = auth.SentCode;
userFull#c577b5ad flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document = UserFull;
chatTheme#c3dffc04 emoticon:string = ChatTheme;
chatThemeUniqueGift#3458f9c8 gift:StarGift theme_settings:Vector<ThemeSettings> = ChatTheme;
account.chatThemesNotModified#e011e1c4 = account.ChatThemes;
account.chatThemes#16484857 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?int = account.ChatThemes;
starGiftUnique#1befe865 flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string theme_peer:flags.10?Peer = StarGift;
inputChatThemeEmpty#83268483 = InputChatTheme;
inputChatTheme#c93de95c emoticon:string = InputChatTheme;
inputChatThemeUniqueGift#87e5dfe4 slug:string = InputChatTheme;
---functions---
account.getUniqueGiftChatThemes#fe74ef9f offset:int limit:int hash:long = account.ChatThemes;
messages.setChatTheme#081202c9 peer:InputPeer theme:InputChatTheme = Updates;
```

### [Слой 213](https://core.telegram.org/schema?layer=213)

Этот слой вводит следующие новые возможности:

-   [Смена вкладки профиля по умолчанию »](/api/profile/#tabs)
-   [Сохранение музыки в профиль »](/api/profile/#music)
-   [В starGift добавлен флаг `locked_until_date` — для заблокированных подарков, которые нельзя отправить раньше указанной даты](/constructor/starGift/).
-   [Добавлен метод payments.checkCanSendGift, позволяющий проверить, не запрещена ли пока отправка незаблокированного подарка по каким-либо иным причинам](/method/payments.checkCanSendGift/).
-   [В inputStorePaymentStarsTopup добавлен необязательный флаг `spend_purpose_peer`; в него следует записывать пир, в котором пополнение баланса было начато из-за нехватки средств (то есть бот — для платежей ботам, канал — для платных медиа и реакций и т. д.) »](/constructor/inputStorePaymentStarsTopup/)[Кроме того, документация о странице профиля была переработана: в неё вошёл полный перечень отображаемых вкладок вместе с указаниями, чем их наполнять »](/api/profile/).

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [account.setMainProfileTab](/method/account.setMainProfileTab/) — меняет главную вкладку профиля текущего пользователя, подробнее [здесь »](/api/profile/#tabs).
-   Добавлен [account.saveMusic](/method/account.saveMusic/) — добавляет композицию в профиль текущего пользователя или убирает её оттуда; [подробнее »](/api/profile/#music) о музыкальной вкладке страницы профиля.
-   Добавлен [account.getSavedMusicIds](/method/account.getSavedMusicIds/) — получает полный список, содержащий только идентификаторы [композиций, добавленных в профиль в данный момент; подробнее »](/api/profile/#music).
-   Добавлен [users.getSavedMusic](/method/users.getSavedMusic/) — получает композиции, [закреплённые в профиле пользователя; подробнее »](/api/profile/#music).
-   Добавлен [users.getSavedMusicByID](/method/users.getSavedMusicByID/) — проверяет, закреплены ли ещё переданные композиции в профиле пользователя, либо обновляет ссылки на файлы композиций, закреплённых в профиле пользователя; [подробнее »](/api/profile/#music).
-   Добавлен [channels.setMainProfileTab](/method/channels.setMainProfileTab/) — меняет главную вкладку профиля канала, подробнее [здесь »](/api/profile/#tabs).
-   Добавлен [payments.checkCanSendGift](/method/payments.checkCanSendGift/) — проверяет, можно ли отправить указанный [подарок »](/api/gifts/).

##### Новые конструкторы

-   Добавлен [profileTabPosts](/constructor/profileTabPosts/) — представляет вкладку [историй](/api/stories/) на странице профиля.
-   Добавлен [profileTabGifts](/constructor/profileTabGifts/) — представляет вкладку [подарков](/api/gifts/) на странице профиля.
-   Добавлен [profileTabMedia](/constructor/profileTabMedia/) — представляет вкладку медиафайлов на странице профиля.
-   Добавлен [profileTabFiles](/constructor/profileTabFiles/) — представляет вкладку общих файлов в профиле.
-   Добавлен [profileTabMusic](/constructor/profileTabMusic/) — представляет вкладку [музыки](/api/profile/#music) на странице профиля.
-   Добавлен [profileTabVoice](/constructor/profileTabVoice/) — представляет вкладку голосовых сообщений на странице профиля.
-   Добавлен [profileTabLinks](/constructor/profileTabLinks/) — представляет вкладку общих ссылок на странице профиля.
-   Добавлен [profileTabGifs](/constructor/profileTabGifs/) — представляет вкладку GIF на странице профиля.
-   Добавлен [users.savedMusicNotModified](/constructor/users.savedMusicNotModified/) — это подмножество композиций, закреплённых в профиле пользователя, не изменилось; подробнее [здесь »](/api/profile/#music).
-   Добавлен [users.savedMusic](/constructor/users.savedMusic/) — список композиций, закреплённых в профиле пользователя в данный момент; подробнее [здесь »](/api/profile/#music).
-   Добавлен [account.savedMusicIdsNotModified](/constructor/account.savedMusicIdsNotModified/) — список идентификаторов композиций (полей `id` конструктора [document](/constructor/document/)), закреплённых в нашем профиле в данный момент, не изменился.
-   Добавлен [account.savedMusicIds](/constructor/account.savedMusicIds/) — список идентификаторов композиций (полей `id` конструктора [document](/constructor/document/)), закреплённых в нашем профиле в данный момент; подробнее [здесь »](/api/profile/#music).
-   Добавлен [payments.checkCanSendGiftResultOk](/constructor/payments.checkCanSendGiftResultOk/) — указанный подарок можно отправить.
-   Добавлен [payments.checkCanSendGiftResultFail](/constructor/payments.checkCanSendGiftResultFail/) — указанный подарок пока нельзя отправить по указанной причине.

##### Изменённые конструкторы

-   Добавлен параметр **main\_tab** в [channelFull](/constructor/channelFull/)
-   Добавлен параметр **upgrade\_separate** в [messageActionStarGift](/constructor/messageActionStarGift/)
-   Добавлены параметры **main\_tab**, **saved\_music** в [userFull](/constructor/userFull/)
-   Добавлены параметры **flags**, **spend\_purpose\_peer** в [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/)
-   Добавлен параметр **locked\_until\_date** в [starGift](/constructor/starGift/)
-   Добавлен параметр **chats** в [payments.uniqueStarGift](/constructor/payments.uniqueStarGift/)
-   Добавлен параметр **chats** в [messages.webPagePreview](/constructor/messages.webPagePreview/)
-   Добавлен параметр **upgrade\_separate** в [savedStarGift](/constructor/savedStarGift/)

#### [Схема](/schema/)

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;
messageActionStarGift#f24de7fa flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int = MessageAction;
userFull#3fd81e28 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document = UserFull;
inputStorePaymentStarsTopup#f9a2a6cb flags:# stars:long currency:string amount:long spend_purpose_peer:flags.0?InputPeer = InputStorePaymentPurpose;
starGift#80ac53c3 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int = StarGift;
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;
savedStarGift#19a9b572 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string = SavedStarGift;
profileTabPosts#b98cd696 = ProfileTab;
profileTabGifts#4d4bd46a = ProfileTab;
profileTabMedia#72c64955 = ProfileTab;
profileTabFiles#ab339c00 = ProfileTab;
profileTabMusic#9f27d26e = ProfileTab;
profileTabVoice#e477092e = ProfileTab;
profileTabLinks#d3656499 = ProfileTab;
profileTabGifs#a2c0f695 = ProfileTab;
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
account.savedMusicIdsNotModified#4fc81d6e = account.SavedMusicIds;
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;
payments.checkCanSendGiftResultOk#374fa7ad = payments.CheckCanSendGiftResult;
payments.checkCanSendGiftResultFail#d5e58274 reason:TextWithEntities = payments.CheckCanSendGiftResult;
---functions---
account.setMainProfileTab#5dee78b0 tab:ProfileTab = Bool;
account.saveMusic#b26732a9 flags:# unsave:flags.0?true id:InputDocument after_id:flags.1?InputDocument = Bool;
account.getSavedMusicIds#e09d5faf hash:long = account.SavedMusicIds;
users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;
users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
channels.setMainProfileTab#3583fcb1 channel:InputChannel tab:ProfileTab = Bool;
payments.checkCanSendGift#c0c4edc9 gift_id:long = payments.CheckCanSendGiftResult;
```

### [Слой 212](https://core.telegram.org/schema?layer=212)

Этот слой вводит следующие возможности:

-   [Отдельная предоплата улучшения подарка »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade).
-   [Получение сведений о стоимости коллекционного подарка »](/method/payments.getUniqueStarGiftValueInfo/)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [payments.getUniqueStarGiftValueInfo](/method/payments.getUniqueStarGiftValueInfo/) — получает сведения о стоимости [коллекционного подарка »](/api/gifts/#collectible-gifts).

##### Изменённые методы

-   Добавлены параметры **exclude\_upgradable**, **exclude\_unupgradable**, удалён параметр **exclude\_limited** в [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

##### Новые конструкторы

-   Добавлен [inputInvoiceStarGiftPrepaidUpgrade](/constructor/inputInvoiceStarGiftPrepaidUpgrade/) — [отдельная предоплата улучшения подарка »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade).
-   Добавлен [payments.uniqueStarGiftValueInfo](/constructor/payments.uniqueStarGiftValueInfo/) — сведения о стоимости [коллекционного подарка »](/api/gifts/#collectible-gifts).

##### Изменённые конструкторы

-   Добавлены параметры **prepaid\_upgrade**, **prepaid\_upgrade\_hash**, **gift\_msg\_id** в [messageActionStarGift](/constructor/messageActionStarGift/)
-   Добавлен параметр **prepaid\_upgrade** в [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Добавлены параметры **posts\_search**, **stargift\_prepaid\_upgrade** в [starsTransaction](/constructor/starsTransaction/)
-   Добавлены параметры **gift\_id**, **value\_amount**, **value\_currency** в [starGiftUnique](/constructor/starGiftUnique/)
-   Добавлен параметр **prepaid\_upgrade\_hash** в [savedStarGift](/constructor/savedStarGift/)

#### Изменения в [схеме сквозного шифрования групповых звонков »](/api/end-to-end/group-calls/)

##### Новые конструкторы

-   Добавлен [e2e.chain.groupBroadcastNonceCommit](/constructor/e2e.chain.groupBroadcastNonceCommit/) — сообщение-обязательство для [протокола проверки эмодзи в сквозно зашифрованной конференции](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow).
-   Добавлен [e2e.chain.groupBroadcastNonceReveal](/constructor/e2e.chain.groupBroadcastNonceReveal/) — сообщение-раскрытие для [протокола проверки эмодзи в сквозно зашифрованной конференции](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow).
-   Добавлен [e2e.chain.groupParticipant](/constructor/e2e.chain.groupParticipant/) — участник и его права в [состоянии группы сквозно зашифрованной конференции »](/api/end-to-end/group-calls/#participants-and-permissions).
-   Добавлен [e2e.chain.groupState](/constructor/e2e.chain.groupState/) — список участников и маска внешних прав для [состояния блокчейна сквозно зашифрованной конференции »](/api/end-to-end/group-calls/#participants-and-permissions).
-   Добавлен [e2e.chain.sharedKey](/constructor/e2e.chain.sharedKey/) — зашифрованный [материал общего группового ключа](/api/end-to-end/group-calls/#shared-key-encryption) для сквозно зашифрованной конференции.
-   Добавлен [e2e.chain.changeNoop](/constructor/e2e.chain.changeNoop/) — пустое [изменение блокчейна сквозно зашифрованной конференции](/api/end-to-end/group-calls/#change-types-for-group-calls), которое может применяться лишь для того, чтобы сделать итоговый хеш блока случайным.
-   Добавлен [e2e.chain.changeSetValue](/constructor/e2e.chain.changeSetValue/) — обновляет [состояние ключ-значение в префиксном дереве блокчейна сквозно зашифрованной конференции](/api/end-to-end/group-calls/#change-types-for-group-calls).
-   Добавлен [e2e.chain.changeSetGroupState](/constructor/e2e.chain.changeSetGroupState/) — обновляет [список участников и права в сквозно зашифрованной конференции](/api/end-to-end/group-calls/#change-types-for-group-calls), сбрасывая текущее состояние общего ключа.
-   Добавлен [e2e.chain.changeSetSharedKey](/constructor/e2e.chain.changeSetSharedKey/) — устанавливает новый общий ключ шифрования для сквозно зашифрованной конференции, см. [типы изменений для групповых звонков »](/api/end-to-end/group-calls/#change-types-for-group-calls).
-   Добавлен [e2e.chain.stateProof](/constructor/e2e.chain.stateProof/) — доказательство [состояния блокчейна сквозно зашифрованной конференции](/api/end-to-end/group-calls/#block-application-process) после применения блока.
-   Добавлен [e2e.chain.block](/constructor/e2e.chain.block/) — блок в [основном блокчейне сквозно зашифрованной конференции](/api/end-to-end/group-calls/#block-structure), содержащий изменения состояния звонка и доказательство итогового состояния.
-   Добавлен [e2e.callPacket](/constructor/e2e.callPacket/) — конструктор-маркер, чей идентификатор CRC32 используется при выработке ключей и аутентификации [зашифрованных пакетов группового звонка](/api/end-to-end/group-calls/#packet-encryption).
-   Добавлен [e2e.callPacketLargeMsgId](/constructor/e2e.callPacketLargeMsgId/) — конструктор-маркер, чей идентификатор CRC32 используется при подписывании длинного идентификатора сообщения, который вырабатывается при шифровании [пакетов группового звонка](/api/end-to-end/group-calls/#packet-encryption).

#### [Схема сквозного шифрования групповых звонков »](/api/end-to-end/group-calls/)

```
e2e.chain.groupBroadcastNonceCommit#d1512ae7 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce_hash:int256 = e2e.chain.GroupBroadcast;
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;
e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;
e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;
e2e.chain.stateProof#d6b679e6 flags:# kv_hash:int256 group_state:flags.0?e2e.chain.GroupState shared_key:flags.1?e2e.chain.SharedKey = e2e.chain.StateProof;
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;
e2e.callPacket#40a6bee9 = e2e.CallPacket;
e2e.callPacketLargeMsgId#1ce56c2d = e2e.CallPacketLargeMsgId;
```

#### [Схема](/schema/)

```
messageActionStarGift#f24de7fa flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int = MessageAction;
messageActionStarGiftUnique#34f762f3 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int = MessageAction;
inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
starGiftUnique#26a5553e flags:# require_premium:flags.6?true resale_ton_only:flags.7?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string = StarGift;
savedStarGift#19a9b572 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string = SavedStarGift;
payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;
---functions---
payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
payments.getUniqueStarGiftValueInfo#4365af6b slug:string = payments.UniqueStarGiftValueInfo;
```

### [Слой 211](https://core.telegram.org/schema?layer=211)

Этот слой вводит:

-   [Альбомы историй »](/api/stories/#story-albums)
-   [Предпросмотр ссылок на коллекции подарков »](/constructor/webPageAttributeStarGiftCollection/)
-   [Полнотекстовый глобальный поиск по постам каналов »](/api/search/#posts-tab)
-   [Возможность указать цену перепродажи коллекционного подарка в TON »](/constructor/messageActionStarGiftUnique/)
-   [Ожидающие звёздные рейтинги »](/api/stars/#star-rating)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [channels.checkSearchPostsFlood](/method/channels.checkSearchPostsFlood/) — проверяет, требует ли указанный [глобальный поиск по постам »](/api/search/#posts-tab) оплаты.
-   Добавлен [stories.createAlbum](/method/stories.createAlbum/) — создаёт [альбом историй](/api/stories/#story-albums).
-   Добавлен [stories.updateAlbum](/method/stories.updateAlbum/) — переименовывает [альбом историй »](/api/stories/#story-albums) либо добавляет, удаляет или переупорядочивает истории в нём.
-   Добавлен [stories.reorderAlbums](/method/stories.reorderAlbums/) — переупорядочивает [альбомы историй в профиле »](/api/stories/#story-albums).
-   Добавлен [stories.deleteAlbum](/method/stories.deleteAlbum/) — удаляет [альбом историй](/api/stories/#story-albums).
-   Добавлен [stories.getAlbums](/method/stories.getAlbums/) — получает [альбомы историй](/api/stories/#story-albums), созданные пиром.
-   Добавлен [stories.getAlbumStories](/method/stories.getAlbumStories/) — получает истории, входящие в [альбом историй »](/api/stories/#story-albums).

##### Изменённые методы

-   Добавлены параметры **flags**, **query**, **allow\_paid\_stars**, тип параметра **hashtag** изменён с **string** на **flags.0?string** в [channels.searchPosts](/method/channels.searchPosts/)
-   Добавлен параметр **resell\_amount**, удалён параметр **resell\_stars** в [payments.updateStarGiftPrice](/method/payments.updateStarGiftPrice/)
-   Добавлен параметр **albums** в [stories.sendStory](/method/stories.sendStory/)

##### Новые конструкторы

-   Добавлен [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) — содержит сведения о [коллекции подарков »](/api/gifts/#gift-collections) для предпросмотра [webPage](/constructor/webPage/) этой [коллекции подарков »](/api/gifts/#gift-collections) (у такого [webPage](/constructor/webPage/) поле `type` будет равно `telegram_collection`).
-   Добавлен [storyAlbum](/constructor/storyAlbum/) — представляет [альбом историй »](/api/stories/#story-albums).
-   Добавлен [stories.albumsNotModified](/constructor/stories.albumsNotModified/) — [список альбомов историй »](/api/stories/#story-albums) не изменился.
-   Добавлен [stories.albums](/constructor/stories.albums/) — [альбомы историй »](/api/stories/#story-albums).
-   Добавлен [searchPostsFlood](/constructor/searchPostsFlood/) — указывает, требует ли указанный [глобальный поиск по постам »](/api/search/#posts-tab) оплаты.

##### Изменённые конструкторы

-   Добавлен параметр **resale\_amount**, удалён параметр **resale\_stars** в [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Добавлены параметры **stars\_my\_pending\_rating**, **stars\_my\_pending\_rating\_date** в [userFull](/constructor/userFull/)
-   Добавлен параметр **search\_flood** в [messages.messagesSlice](/constructor/messages.messagesSlice/)
-   Добавлены параметры **flags**, **ton** в [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/)
-   Добавлен параметр **albums** в [storyItem](/constructor/storyItem/)
-   Добавлены параметры **resale\_ton\_only**, **resell\_amount**, удалён параметр **resell\_stars** в [starGiftUnique](/constructor/starGiftUnique/)

#### [Схема](/schema/)

```
messageActionStarGiftUnique#34f762f3 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int = MessageAction;
userFull#7e63ce1f flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int = UserFull;
messages.messagesSlice#762b263d flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;
webPageAttributeStarGiftCollection#31cad303 icons:Vector<Document> = WebPageAttribute;
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;
storyItem#edf164f1 flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> = StoryItem;
starGiftUnique#3a274d50 flags:# require_premium:flags.6?true resale_ton_only:flags.7?true id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer = StarGift;
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;
stories.albumsNotModified#564edaeb = stories.Albums;
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;
---functions---
channels.searchPosts#f2c4f24d flags:# hashtag:flags.0?string query:flags.1?string offset_rate:int offset_peer:InputPeer offset_id:int limit:int allow_paid_stars:flags.2?long = messages.Messages;
channels.checkSearchPostsFlood#22567115 flags:# query:flags.0?string = SearchPostsFlood;
payments.updateStarGiftPrice#edbe6ccb stargift:InputSavedStarGift resell_amount:StarsAmount = Updates;
stories.sendStory#737fc2ec flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> = Updates;
stories.createAlbum#a36396e5 peer:InputPeer title:string stories:Vector<int> = StoryAlbum;
stories.updateAlbum#5e5259b6 flags:# peer:InputPeer album_id:int title:flags.0?string delete_stories:flags.1?Vector<int> add_stories:flags.2?Vector<int> order:flags.3?Vector<int> = StoryAlbum;
stories.reorderAlbums#8535fbd9 peer:InputPeer order:Vector<int> = Bool;
stories.deleteAlbum#8d3456d0 peer:InputPeer album_id:int = Bool;
stories.getAlbums#25b3eac7 peer:InputPeer hash:long = stories.Albums;
stories.getAlbumStories#ac806d61 peer:InputPeer album_id:int offset:int limit:int = stories.Stories;
```

### [Слой 210](https://core.telegram.org/schema?layer=210)

Этот слой вводит:

-   [Коллекции звёздных подарков »](/api/gifts/#gift-collections)
-   Подарки только для обладателей Premium (`require_premium`) и ограничения на число подарков некоторых типов, которые может получить один пользователь (`per_user_total`, `per_user_remains`).
-   [Звёздные рейтинги »](/api/stars/#star-rating)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [payments.createStarGiftCollection](/method/payments.createStarGiftCollection/) — создаёт [коллекцию звёздных подарков »](/api/gifts/#gift-collections).
-   Добавлен [payments.updateStarGiftCollection](/method/payments.updateStarGiftCollection/) — добавляет подарки в [коллекцию звёздных подарков »](/api/gifts/#gift-collections) или удаляет их оттуда, а также переименовывает коллекцию.
-   Добавлен [payments.reorderStarGiftCollections](/method/payments.reorderStarGiftCollections/) — переупорядочивает [коллекции звёздных подарков »](/api/gifts/#gift-collections) в профиле подконтрольного нам пира.
-   Добавлен [payments.deleteStarGiftCollection](/method/payments.deleteStarGiftCollection/) — удаляет [коллекцию звёздных подарков »](/api/gifts/#gift-collections).
-   Добавлен [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/) — получает все [коллекции звёздных подарков »](/api/gifts/#gift-collections) пира.

##### Изменённые методы

-   Добавлен параметр **collection\_id** в [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

##### Новые конструкторы

-   Добавлен [starsRating](/constructor/starsRating/) — представляет [звёздный рейтинг профиля, подробности здесь »](/api/stars/#star-rating).
-   Добавлен [starGiftCollection](/constructor/starGiftCollection/) — представляет [коллекцию звёздных подарков »](/api/gifts/#gift-collections).
-   Добавлен [payments.starGiftCollectionsNotModified](/constructor/payments.starGiftCollectionsNotModified/) — список [коллекций звёздных подарков »](/api/gifts/#gift-collections) не изменился.
-   Добавлен [payments.starGiftCollections](/constructor/payments.starGiftCollections/) — представляет список [коллекций звёздных подарков »](/api/gifts/#gift-collections).

##### Изменённые конструкторы

-   Добавлен параметр **stars\_rating** в [userFull](/constructor/userFull/)
-   Добавлены параметры **require\_premium**, **limited\_per\_user**, **per\_user\_total**, **per\_user\_remains** в [starGift](/constructor/starGift/)
-   Добавлен параметр **require\_premium** в [starGiftUnique](/constructor/starGiftUnique/)
-   Добавлен параметр **collection\_id** в [savedStarGift](/constructor/savedStarGift/)

#### [Схема](/schema/)

```
userFull#29de80be flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating = UserFull;
starGift#00bcff5b flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int = StarGift;
starGiftUnique#f63778ae flags:# require_premium:flags.6?true id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_stars:flags.4?long released_by:flags.5?Peer = StarGift;
savedStarGift#1ea646df flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> = SavedStarGift;
starsRating#1b0e4f07 flags:# level:int current_level_stars:long stars:long next_level_stars:flags.0?long = StarsRating;
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;
payments.starGiftCollectionsNotModified#a0ba4f17 = payments.StarGiftCollections;
payments.starGiftCollections#8a2932f3 collections:Vector<StarGiftCollection> = payments.StarGiftCollections;
---functions---
payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_limited:flags.3?true exclude_unique:flags.4?true sort_by_value:flags.5?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
payments.createStarGiftCollection#1f4a0e87 peer:InputPeer title:string stargift:Vector<InputSavedStarGift> = StarGiftCollection;
payments.updateStarGiftCollection#4fddbee7 flags:# peer:InputPeer collection_id:int title:flags.0?string delete_stargift:flags.1?Vector<InputSavedStarGift> add_stargift:flags.2?Vector<InputSavedStarGift> order:flags.3?Vector<InputSavedStarGift> = StarGiftCollection;
payments.reorderStarGiftCollections#c32af4cc peer:InputPeer order:Vector<int> = Bool;
payments.deleteStarGiftCollection#ad5648e8 peer:InputPeer collection_id:int = Bool;
payments.getStarGiftCollections#981b91dd peer:InputPeer hash:long = payments.StarGiftCollections;
```

### [Слой 208](https://core.telegram.org/schema?layer=208)

Этот слой вводит:

-   [Предлагаемые публикации в каналах »](/api/suggested-posts/)
-   Добавлено новое [право администратора](/constructor/chatAdminRights/) `manage_direct_messages`
-   Добавлена поддержка нового [права администратора](/constructor/chatAdminRights/) `manage_direct_messages` в [ссылках для добавления бота в группу или канал](/api/links/#group-channel-bot-links)
-   [Возможность отвечать на конкретные задачи списка »](/api/todo/)
-   Статистика доходов канала и способы вывода средств приведены к единому виду с теми, что используются для звёзд: для этого достаточно было добавить флаг `ton` и недостающие параметры:
    -   [Баланс и история транзакций »](/api/stars/#balance-and-transaction-history)
    -   [Статистика доходов »](/api/stars/#revenue-statistics)
    -   [Вывод доходов »](/api/stars/#withdrawing-revenue)
-   В некоторых местах API вместо звёзд можно использовать Grams — подробности [здесь »](/api/stars/#gram).

#### Изменения в [схеме](/schema/)

##### Изменённые конструкторы

-   Добавлен параметр **todo\_item\_id** в [messageReplyHeader](/constructor/messageReplyHeader/)
-   Добавлен параметр **todo\_item\_id** в [inputReplyToMessage](/constructor/inputReplyToMessage/)
-   Удалён параметр **posts\_search** из [starsTransaction](/constructor/starsTransaction/)

#### [Схема](/schema/)

```
messageReplyHeader#6917560b flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int = MessageReplyHeader;
inputReplyToMessage#869fbe10 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int = InputReplyTo;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
```

### [Слой 207](https://core.telegram.org/schema?layer=207)

Этот слой вводит:

-   [Предлагаемые посты »](/api/suggested-posts/) — пользователи могут предлагать каналам платные посты; для одобрения, успешной публикации и возврата средств предусмотрены [сервисные сообщения](/constructor/messageActionSuggestedPostApproval/)
-   Новое [право администратора](/constructor/chatAdminRights/) `manage_direct_messages`
-   Возможность дарить, хранить и выводить [Gram »](/api/stars/#gram) наряду с Telegram Stars: балансы и транзакции в TON в методах статуса, транзакций и доходов для Stars, подарки в TON ([messageActionGiftTon](/constructor/messageActionGiftTon/), [starsTonAmount](/constructor/starsTonAmount/)), а также объединение статистики доходов канала и выводов средств с аналогичными методами для Stars
-   [Глобальный поиск по постам »](/api/search/#posts-tab)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [messages.toggleSuggestedPostApproval](/method/messages.toggleSuggestedPostApproval/) — одобряет или отклоняет [предлагаемый пост »](/api/suggested-posts/).

##### Изменённые методы

-   Добавлен параметр **suggested\_post** в [messages.sendMessage](/method/messages.sendMessage/)
-   Добавлен параметр **suggested\_post** в [messages.sendMedia](/method/messages.sendMedia/)
-   Добавлен параметр **suggested\_post** в [messages.forwardMessages](/method/messages.forwardMessages/)
-   Добавлен параметр **suggested\_post** в [messages.saveDraft](/method/messages.saveDraft/)
-   Добавлены параметры **flags**, **ton** в [payments.getStarsStatus](/method/payments.getStarsStatus/)
-   Добавлен параметр **ton** в [payments.getStarsTransactions](/method/payments.getStarsTransactions/)
-   Добавлен параметр **ton** в [payments.getStarsRevenueStats](/method/payments.getStarsRevenueStats/)
-   Добавлены параметры **flags**, **ton**, **amount**, удалён параметр **stars** в [payments.getStarsRevenueWithdrawalUrl](/method/payments.getStarsRevenueWithdrawalUrl/)
-   Добавлены параметры **flags**, **ton** в [payments.getStarsTransactionsByID](/method/payments.getStarsTransactionsByID/)

##### Удалённые методы

-   Удалён stats.getBroadcastRevenueStats
-   Удалён stats.getBroadcastRevenueWithdrawalUrl
-   Удалён stats.getBroadcastRevenueTransactions

##### Новые конструкторы

-   Добавлен [suggestedPost](/constructor/suggestedPost/) — содержит сведения о [предлагаемом посте »](/api/suggested-posts/).
-   Добавлен [messageActionSuggestedPostApproval](/constructor/messageActionSuggestedPostApproval/) — [предлагаемый пост »](/api/suggested-posts/) был одобрен или отклонён.
-   Добавлен [messageActionSuggestedPostSuccess](/constructor/messageActionSuggestedPostSuccess/) — [предлагаемый пост »](/api/suggested-posts/) был успешно опубликован, и оплата за него успешно получена.
-   Добавлен [messageActionSuggestedPostRefund](/constructor/messageActionSuggestedPostRefund/) — [предлагаемый пост »](/api/suggested-posts/) был принят и опубликован или запланирован, но либо канал удалил опубликованный или запланированный пост до того, как прошло [stars\_suggested\_post\_age\_min](/api/config/#stars-suggested-post-age-min) секунд, либо пользователю вернули оплату за Stars, потраченные на предлагаемый пост.
-   Добавлен [starsTonAmount](/constructor/starsTonAmount/) — описывает сумму в Gram, выраженную в нанограммах (то есть в `1/1_000_000_000` Gram).
-   Добавлен [messageActionGiftTon](/constructor/messageActionGiftTon/) — вам подарили некоторое количество Gram.
-   Добавлен [inputStickerSetTonGifts](/constructor/inputStickerSetTonGifts/) — набор стикеров для подарков в TON.

##### Изменённые конструкторы

-   Добавлены параметры **paid\_suggested\_post\_stars**, **paid\_suggested\_post\_ton**, **suggested\_post** в [message](/constructor/message/)
-   Добавлен параметр **suggested\_post** в [draftMessage](/constructor/draftMessage/)
-   Добавлен параметр **manage\_direct\_messages** в [chatAdminRights](/constructor/chatAdminRights/)
-   Добавлены параметры **posts\_search**, **amount**, **ads\_proceeds\_from\_date**, **ads\_proceeds\_to\_date**, удалён параметр **stars** в [starsTransaction](/constructor/starsTransaction/)
-   Добавлены параметры **flags**, **top\_hours\_graph** в [payments.starsRevenueStats](/constructor/payments.starsRevenueStats/)
-   Добавлен параметр **released\_by** в [starGift](/constructor/starGift/)
-   Добавлены параметры **chats**, **users** в [payments.starGifts](/constructor/payments.starGifts/)
-   Добавлен параметр **released\_by** в [starGiftUnique](/constructor/starGiftUnique/)

##### Удалённые конструкторы

-   Удалён stats.broadcastRevenueStats
-   Удалён stats.broadcastRevenueWithdrawalUrl
-   Удалён broadcastRevenueTransactionProceeds
-   Удалён broadcastRevenueTransactionWithdrawal
-   Удалён broadcastRevenueTransactionRefund
-   Удалён stats.broadcastRevenueTransactions
-   Удалён broadcastRevenueBalances
-   Удалён updateBroadcastRevenueTransactions

#### [Схема](/schema/)

```
message#9815cec8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost = Message;
draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;
chatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true manage_direct_messages:flags.17?true = ChatAdminRights;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;
starGift#7f853c12 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer = StarGift;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;
starGiftUnique#f63778ae flags:# id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_stars:flags.4?long released_by:flags.5?Peer = StarGift;
suggestedPost#0e8e37e5 flags:# accepted:flags.1?true rejected:flags.2?true price:flags.3?StarsAmount schedule_date:flags.0?int = SuggestedPost;
messageActionSuggestedPostApproval#ee7a1596 flags:# rejected:flags.0?true balance_too_low:flags.1?true reject_comment:flags.2?string schedule_date:flags.3?int price:flags.4?StarsAmount = MessageAction;
messageActionSuggestedPostSuccess#95ddcf69 price:StarsAmount = MessageAction;
messageActionSuggestedPostRefund#69f916f8 flags:# payer_initiated:flags.0?true = MessageAction;
starsTonAmount#74aee3e0 amount:long = StarsAmount;
messageActionGiftTon#a8a3c699 flags:# currency:string amount:long crypto_currency:string crypto_amount:long transaction_id:flags.0?string = MessageAction;
inputStickerSetTonGifts#1cf671a0 = InputStickerSet;
---functions---
messages.sendMessage#fe05dc9a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#ac55d9c1 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.forwardMessages#978928ca flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
messages.saveDraft#54ae308e flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo peer:InputPeer message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia effect:flags.7?long suggested_post:flags.8?SuggestedPost = Bool;
payments.getStarsStatus#4ea9b3bf flags:# ton:flags.0?true peer:InputPeer = payments.StarsStatus;
payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;
payments.getStarsRevenueStats#d91ffad6 flags:# dark:flags.0?true ton:flags.1?true peer:InputPeer = payments.StarsRevenueStats;
payments.getStarsRevenueWithdrawalUrl#2433dc92 flags:# ton:flags.0?true peer:InputPeer amount:flags.1?long password:InputCheckPasswordSRP = payments.StarsRevenueWithdrawalUrl;
payments.getStarsTransactionsByID#2dca16b8 flags:# ton:flags.0?true peer:InputPeer id:Vector<InputStarsTransaction> = payments.StarsStatus;
messages.toggleSuggestedPostApproval#8107455c flags:# reject:flags.1?true peer:InputPeer msg_id:int schedule_date:flags.0?int reject_comment:flags.2?string = Updates;
```

### [Слой 205](https://core.telegram.org/schema?layer=205)

Этот слой вводит:

-   [Рекламные сообщения для показа в видео каналов »](/api/sponsored-messages/#getting-sponsored-video-advertisements)
-   [Списки дел »](/api/todo/)
-   [Переименование account.addNoPaidMessagesException в account.toggleNoPaidMessagesException и добавление флага `require_payment`, позволяющего вернуть все Stars, которые пир перевёл нам за платные сообщения »](/method/account.toggleNoPaidMessagesException/)
-   Возможность вызывать [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/) для тем моноформа, а также новое обновление [updateMonoForumNoPaidException](/constructor/updateMonoForumNoPaidException/), сообщающее об изменениях в [monoForumDialog](/constructor/monoForumDialog/).`nopaid_messages_exception` другим администраторам и другим активным сеансам этого администратора моноформа.

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/) — помечает один или несколько пунктов [списка дел »](/api/todo/) как выполненные или невыполненные.
-   Добавлен [messages.appendTodoList](/method/messages.appendTodoList/) — добавляет один или несколько пунктов в [список дел »](/api/todo/).
-   Добавлен [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/) — разрешает пользователю отправлять нам сообщения без оплаты, если включены [платные сообщения »](/api/paid-messages/).

##### Изменённые методы

-   Добавлены параметры **flags**, **msg\_id** в [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/)
-   Добавлены параметры **flags**, **parent\_peer** в [account.getPaidMessagesRevenue](/method/account.getPaidMessagesRevenue/)

##### Удалённые методы

-   Удалён account.addNoPaidMessagesException

##### Новые конструкторы

-   Добавлен [todoItem](/constructor/todoItem/) — пункт [списка дел »](/api/todo/).
-   Добавлен [todoList](/constructor/todoList/) — представляет [список дел »](/api/todo/).
-   Добавлен [todoCompletion](/constructor/todoCompletion/) — выполненный пункт [списка дел »](/api/todo/).
-   Добавлен [inputMediaTodo](/constructor/inputMediaTodo/) — создаёт [список дел »](/api/todo/).
-   Добавлен [messageMediaToDo](/constructor/messageMediaToDo/) — представляет [список дел »](/api/todo/).
-   Добавлен [messageActionTodoCompletions](/constructor/messageActionTodoCompletions/) — пункты [списка дел »](/api/todo/) были помечены как выполненные или невыполненные.
-   Добавлен [messageActionTodoAppendTasks](/constructor/messageActionTodoAppendTasks/) — в [список дел »](/api/todo/) были добавлены пункты.
-   Добавлен [updateMonoForumNoPaidException](/constructor/updateMonoForumNoPaidException/) — администратор освободил (или перестал освобождать) эту [тему моноформа »](/api/monoforum/) от платы за отправку сообщений с помощью [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/).

##### Изменённые конструкторы

-   Добавлен параметр **saved\_peer\_id** в [messageService](/constructor/messageService/)
-   Добавлен параметр **send\_paid\_messages\_stars** в [channelFull](/constructor/channelFull/)
-   Добавлены параметры **min\_display\_duration**, **max\_display\_duration** в [sponsoredMessage](/constructor/sponsoredMessage/)
-   Добавлены параметры **start\_delay**, **between\_delay** в [messages.sponsoredMessages](/constructor/messages.sponsoredMessages/)
-   Добавлен параметр **nopaid\_messages\_exception** в [monoForumDialog](/constructor/monoForumDialog/)

#### Изменения в PUSH-уведомлениях

##### Новые PUSH-уведомления

-   Добавлено [CHANNEL\_MESSAGE\_TODO](/api/push-updates/#channel-message-todo) — `{1} posted a checklist {2}`
-   Добавлено [CHANNEL\_MESSAGE\_TODO\_APPEND](/api/push-updates/#channel-message-todo-append) — `{1} added {2} tasks`
-   Добавлено [CHANNEL\_MESSAGE\_TODO\_DONE](/api/push-updates/#channel-message-todo-done) — `{1} toggled {2} tasks`
-   Добавлено [CHAT\_MESSAGE\_TODO](/api/push-updates/#chat-message-todo) — `{1} sent a checklist {3} to the group {2}`
-   Добавлено [CHAT\_MESSAGE\_TODO\_APPEND](/api/push-updates/#chat-message-todo-append) — `{1} added {3} tasks in the group {2}`
-   Добавлено [CHAT\_MESSAGE\_TODO\_DONE](/api/push-updates/#chat-message-todo-done) — `{1} toggled {3} tasks in the group {2}`
-   Добавлено [CHAT\_REACT\_TODO](/api/push-updates/#chat-react-todo) — `{1}: {3} to your checklist {4} in {2}`
-   Добавлено [MESSAGE\_TODO](/api/push-updates/#message-todo) — `{1} sent you a checklist {2}`
-   Добавлено [PINNED\_TODO](/api/push-updates/#pinned-todo) — `{1} pinned a checklist {2}`
-   Добавлено [REACT\_TODO](/api/push-updates/#react-todo) — `{1}: {2} to your checklist {3}`

#### [Схема](/schema/)

```
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
channelFull#e07429de flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long = ChatFull;
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
todoItem#cba9a52f id:int title:TextWithEntities = TodoItem;
todoList#49b92a26 flags:# others_can_append:flags.0?true others_can_complete:flags.1?true title:TextWithEntities list:Vector<TodoItem> = TodoList;
todoCompletion#4cc120b7 id:int completed_by:long date:int = TodoCompletion;
inputMediaTodo#9fc55fde todo:TodoList = InputMedia;
messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;
messageActionTodoCompletions#cc7c5c89 completed:Vector<int> incompleted:Vector<int> = MessageAction;
messageActionTodoAppendTasks#c7edbc83 list:Vector<TodoItem> = MessageAction;
updateMonoForumNoPaidException#9f812b08 flags:# exception:flags.0?true channel_id:long saved_peer_id:Peer = Update;
---functions---
messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
account.getPaidMessagesRevenue#19ba4a67 flags:# parent_peer:flags.0?InputPeer user_id:InputUser = account.PaidMessagesRevenue;
messages.toggleTodoCompleted#d3e03124 peer:InputPeer msg_id:int completed:Vector<int> incompleted:Vector<int> = Updates;
messages.appendTodoList#21a61057 peer:InputPeer msg_id:int list:Vector<TodoItem> = Updates;
account.toggleNoPaidMessagesException#fe2eda76 flags:# refund_charged:flags.0?true require_payment:flags.2?true parent_peer:flags.1?InputPeer user_id:InputUser = Bool;
```

### [Слой 204](https://core.telegram.org/schema?layer=204)

Этот слой вводит:

-   [Моноформы »](/api/monoforum/)
-   [Идентификаторы моноформов в Bot API »](/api/bots/ids/#monoforum-ids)
-   [Интерфейс форума с вкладками »](/api/forum/#tabbed-or-list-based-forum-ui)
-   Все флаги, добавленные в [channel](/constructor/channel/) (перечислены ниже), — корректные флаги `min`: их обязательно применять поверх локально сохранённой версии, даже если у входящего конструктора [channel](/constructor/channel/) установлен флаг `min`.

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [messages.getSavedDialogsByID](/method/messages.getSavedDialogsByID/) — получает информацию о конкретных [диалогах избранного »](/api/saved-messages/#saved-message-dialogs) или [темах моноформа »](/api/monoforum/).
-   Добавлен [messages.readSavedHistory](/method/messages.readSavedHistory/) — помечает сообщения в [теме моноформа »](/api/monoforum/) как прочитанные.
-   Добавлен [channels.getMessageAuthor](/method/channels.getMessageAuthor/) — может вызываться только администраторами [моноформа »](/api/monoforum/), которые не являются ботами; возвращает исходного отправителя сообщения, которое было отправлено в моноформ другими администраторами моноформа от имени связанного с ним канала.

##### Изменённые методы

-   Добавлен параметр **reply\_to** в [messages.forwardMessages](/method/messages.forwardMessages/)
-   Добавлен параметр **parent\_peer** в [messages.markDialogUnread](/method/messages.markDialogUnread/)
-   Добавлены параметры **flags**, **parent\_peer** в [messages.getDialogUnreadMarks](/method/messages.getDialogUnreadMarks/)
-   Добавлен параметр **saved\_peer\_id** в [messages.unpinAllMessages](/method/messages.unpinAllMessages/)
-   Добавлен параметр **saved\_peer\_id** в [messages.getUnreadReactions](/method/messages.getUnreadReactions/)
-   Добавлен параметр **saved\_peer\_id** в [messages.readReactions](/method/messages.readReactions/)
-   Добавлен параметр **tabs** в [channels.toggleForum](/method/channels.toggleForum/)
-   Добавлен параметр **parent\_peer** в [messages.getSavedDialogs](/method/messages.getSavedDialogs/)
-   Добавлены параметры **flags**, **parent\_peer** в [messages.getSavedHistory](/method/messages.getSavedHistory/)
-   Добавлен параметр **parent\_peer** в [messages.deleteSavedHistory](/method/messages.deleteSavedHistory/)
-   Добавлены параметры **flags**, **broadcast\_messages\_allowed** в [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/)

##### Новые конструкторы

-   Добавлен [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/) — используется для отправки сообщений в [тему моноформа](/api/monoforum/).
-   Добавлен [monoForumDialog](/constructor/monoForumDialog/) — представляет [тему моноформа »](/api/monoforum/).
-   Добавлен [updateReadMonoForumInbox](/constructor/updateReadMonoForumInbox/) — входящие сообщения в [теме моноформа](/api/monoforum/) были прочитаны
-   Добавлен [updateReadMonoForumOutbox](/constructor/updateReadMonoForumOutbox/) — исходящие сообщения в [моноформе](/api/monoforum/) были прочитаны.

##### Изменённые конструкторы

-   Добавлены параметры **broadcast\_messages\_allowed**, **monoforum**, **forum\_tabs**, **linked\_monoforum\_id** в [channel](/constructor/channel/)
-   Добавлен параметр **saved\_peer\_id** в [updateDraftMessage](/constructor/updateDraftMessage/)
-   Добавлен параметр **saved\_peer\_id** в [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/)
-   Добавлен параметр **saved\_peer\_id** в [updateDialogUnreadMark](/constructor/updateDialogUnreadMark/)
-   Добавлен параметр **saved\_peer\_id** в [updateMessageReactions](/constructor/updateMessageReactions/)
-   Добавлен параметр **monoforum\_peer\_id** в [inputReplyToMessage](/constructor/inputReplyToMessage/)
-   Добавлены параметры **flags**, **broadcast\_messages\_allowed** в [messageActionPaidMessagesPrice](/constructor/messageActionPaidMessagesPrice/)

#### [Схема](/schema/)

```
channel#fe685355 flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?int color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;
updateDraftMessage#edfc111e flags:# peer:Peer top_msg_id:flags.0?int saved_peer_id:flags.1?Peer draft:DraftMessage = Update;
updateChannelReadMessagesContents#25f324f7 flags:# channel_id:long top_msg_id:flags.0?int saved_peer_id:flags.1?Peer messages:Vector<int> = Update;
updateDialogUnreadMark#b658f23e flags:# unread:flags.0?true peer:DialogPeer saved_peer_id:flags.1?Peer = Update;
updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;
inputReplyToMessage#b07038b0 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer = InputReplyTo;
messageActionPaidMessagesPrice#84b88578 flags:# broadcast_messages_allowed:flags.0?true stars:long = MessageAction;
inputReplyToMonoForum#69d66c45 monoforum_peer_id:InputPeer = InputReplyTo;
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
updateReadMonoForumInbox#77b0e372 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
updateReadMonoForumOutbox#a4a79376 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
---functions---
messages.forwardMessages#38f0188c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int allow_paid_stars:flags.21?long = Updates;
messages.markDialogUnread#8c5006f8 flags:# unread:flags.0?true parent_peer:flags.1?InputPeer peer:InputDialogPeer = Bool;
messages.getDialogUnreadMarks#21202222 flags:# parent_peer:flags.0?InputPeer = Vector<DialogPeer>;
messages.unpinAllMessages#062dd747 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
messages.getUnreadReactions#bd7f90ac flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.readReactions#9ec44f93 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
channels.toggleForum#3ff75734 channel:InputChannel enabled:Bool tabs:Bool = Updates;
messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
messages.getSavedHistory#998ab009 flags:# parent_peer:flags.0?InputPeer peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
channels.updatePaidMessagesPrice#4b12327b flags:# broadcast_messages_allowed:flags.0?true channel:InputChannel send_paid_messages_stars:long = Updates;
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
messages.readSavedHistory#ba4a3b5b parent_peer:InputPeer peer:InputPeer max_id:int = Bool;
channels.getMessageAuthor#ece2a0e6 channel:InputChannel id:int = User;
```

### [Слой 203](https://core.telegram.org/schema?layer=203)

Этот слой вводит:

-   [Методы перепродажи коллекционных подарков »](/api/gifts/#reselling-collectible-gifts)
-   [Автоперевод для всех пользователей канала »](/api/translation/#autotranslation-for-channels)
-   [stories.canSendStory теперь возвращает число доступных активных слотов для историй »](/method/stories.canSendStory/)
-   [Ссылки на коллекционные подарки »](/api/links/#collectible-gift-link)
-   [Пользовательские предложения »](/api/config/#custom-suggestions)
-   [Все поля, связанные с предложениями, перенесены из объекта клиентской конфигурации в help.getPromoData »](/api/config/#suggestions)
-   Все флаги, добавленные в [channel](/constructor/channel/) (перечислены ниже), — корректные флаги `min`: их обязательно применять поверх локально сохранённой версии, даже если у входящего конструктора [channel](/constructor/channel/) установлен флаг `min`.

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) — получает [коллекционные подарки](/api/gifts/#collectible-gifts) заданного типа, выставленные сейчас на перепродажу; подробнее см. [здесь »](/api/gifts/#reselling-collectible-gifts).
-   Добавлен [payments.updateStarGiftPrice](/method/payments.updateStarGiftPrice/) — этим методом [принадлежащий нам коллекционный подарок »](/api/gifts/#collectible-gifts) можно выставить на продажу на [маркетплейсе подарков »](https://telegram.org/blog/gift-marketplace-and-more); подробнее см. [здесь »](/api/gifts/#reselling-collectible-gifts).
-   Добавлен [channels.toggleAutotranslation](/method/channels.toggleAutotranslation/) — включает или отключает автоперевод в канале для всех пользователей; подробнее см. [здесь »](/api/translation/#autotranslation-for-channels).

##### Изменённые методы

-   Тип [stories.canSendStory](/method/stories.canSendStory/) изменён с **Bool** на **stories.CanSendStoryCount**

##### Новые конструкторы

-   Добавлен [inputSavedStarGiftSlug](/constructor/inputSavedStarGiftSlug/) — указывает на [коллекционный подарок, полученный по ссылке на коллекционный подарок »](/api/links/#collectible-gift-link).
-   Добавлен [starGiftAttributeIdModel](/constructor/starGiftAttributeIdModel/) — идентификатор модели [коллекционного подарка »](/api/gifts/#collectible-gifts).
-   Добавлен [starGiftAttributeIdPattern](/constructor/starGiftAttributeIdPattern/) — идентификатор узора [коллекционного подарка »](/api/gifts/#collectible-gifts).
-   Добавлен [starGiftAttributeIdBackdrop](/constructor/starGiftAttributeIdBackdrop/) — идентификатор фона [коллекционного подарка »](/api/gifts/#collectible-gifts).
-   Добавлен [starGiftAttributeCounter](/constructor/starGiftAttributeCounter/) — указывает общее число подарков с заданным атрибутом.
-   Добавлен [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/) — список подарков, выставленных сейчас на [перепродажу »](/api/gifts/#reselling-collectible-gifts).
-   Добавлен [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/) — используется для покупки [коллекционного подарка](/api/gifts/#collectible-gifts), выставленного сейчас на перепродажу; подробнее обо всей процедуре см. [здесь](/api/gifts/#reselling-collectible-gifts).
-   Добавлен [channelAdminLogEventActionToggleAutotranslation](/constructor/channelAdminLogEventActionToggleAutotranslation/) — [автоперевод в канале был включён или отключён »](/api/translation/#autotranslation-for-channels).
-   Добавлен [stories.canSendStoryCount](/constructor/stories.canSendStoryCount/) — содержит число доступных активных слотов для историй (равно значению [параметра клиентской конфигурации `story_expiring_limit_*`](/api/config/#story-expiring-limit-default) минус число сейчас активных историй).
-   Добавлен [pendingSuggestion](/constructor/pendingSuggestion/) — представляет [пользовательское ожидающее предложение »](/api/config/#custom-suggestions).

##### Изменённые конструкторы

-   Добавлен параметр **autotranslation** в [channel](/constructor/channel/)
-   Добавлены параметры **pending\_suggestions**, **dismissed\_suggestions**, **custom\_pending\_suggestion**, тип параметра **peer** изменён с **Peer** на **flags.3?Peer** в [help.promoData](/constructor/help.promoData/)
-   Добавлены параметры **availability\_resale**, **resell\_min\_stars**, **title** в [starGift](/constructor/starGift/)
-   Добавлен параметр **backdrop\_id** в [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/)
-   Добавлен параметр **resell\_stars** в [starGiftUnique](/constructor/starGiftUnique/)
-   Добавлены параметры **resale\_stars**, **can\_transfer\_at**, **can\_resell\_at** в [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Добавлены параметры **can\_transfer\_at**, **can\_resell\_at** в [savedStarGift](/constructor/savedStarGift/)

#### [Схема](/schema/)

```
channel#7482147e flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?int color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long = Chat;
help.promoData#08a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;
starGift#c62aca28 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string = StarGift;
starGiftAttributeBackdrop#d93d859c name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity_permille:int = StarGiftAttribute;
starGiftUnique#6411db89 flags:# id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_stars:flags.4?long = StarGift;
messageActionStarGiftUnique#2e3ae60e flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_stars:flags.8?long can_transfer_at:flags.9?int can_resell_at:flags.10?int = MessageAction;
savedStarGift#dfda0499 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int = SavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;
starGiftAttributeIdModel#48aaae3c document_id:long = StarGiftAttributeId;
starGiftAttributeIdPattern#4a162433 document_id:long = StarGiftAttributeId;
starGiftAttributeIdBackdrop#1f01c757 backdrop_id:int = StarGiftAttributeId;
starGiftAttributeCounter#2eb1b658 attribute:StarGiftAttributeId count:int = StarGiftAttributeCounter;
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;
inputInvoiceStarGiftResale#63cbc38c slug:string to_id:InputPeer = InputInvoice;
channelAdminLogEventActionToggleAutotranslation#c517f77e new_value:Bool = ChannelAdminLogEventAction;
stories.canSendStoryCount#c387c04e count_remains:int = stories.CanSendStoryCount;
pendingSuggestion#e7e82e12 suggestion:string title:TextWithEntities description:TextWithEntities url:string = PendingSuggestion;
---functions---
stories.canSendStory#30eb63f0 peer:InputPeer = stories.CanSendStoryCount;
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
payments.updateStarGiftPrice#3baea4e1 stargift:InputSavedStarGift resell_stars:long = Updates;
channels.toggleAutotranslation#167fc0a1 channel:InputChannel enabled:Bool = Updates;
```

### [Слой 202](https://core.telegram.org/schema?layer=202)

Этот слой вводит:

-   [Групповые звонки со сквозным шифрованием »](/api/end-to-end/group-calls/)
    -   [Глубокие ссылки на конференции »](/api/links/#conference-links)
-   [Сервисные сообщения о возврате средств за платные сообщения »](/constructor/messageActionPaidMessagesRefunded/)
-   [Сервисные сообщения об изменении цены платных сообщений »](/constructor/messageActionPaidMessagesPrice/)
-   Настройки приватности подарков:
    -   [globalPrivacySettings](/constructor/globalPrivacySettings/).`disallowed_gifts`/[userFull](/constructor/userFull/).`disallowed_gifts`: [запрет на получение подарков определённых типов »](/constructor/disallowedGiftsSettings/)
    -   [globalPrivacySettings](/constructor/globalPrivacySettings/).`display_gifts_button`/[userFull](/constructor/userFull/).`display_gifts_button`: показать или скрыть кнопку подарка в поле ввода текста в личных чатах.
-   [Перевод звёзд с бизнес-аккаунта на бизнес-бота »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot)
-   [Спонсируемые пиры в результатах поиска »](/api/sponsored-messages/#getting-sponsored-search-results)
-   [Права бизнес-бота »](/constructor/businessBotRights/)
-   [Методы работы со спонсируемыми сообщениями больше не требуют указывать `peer`, в котором показывается спонсируемое сообщение »](/api/sponsored-messages/)
-   [Переименован метод, которым официальные приложения проверяют возможность покупки через магазин приложений »](/method/payments.canPurchaseStore/)
-   [Платные коды авторизации для официальных приложений](/constructor/auth.sentCodePaymentRequired/)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [payments.canPurchaseStore](/method/payments.canPurchaseStore/) — проверяет, возможна ли покупка. Обязан вызываться перед покупкой через магазин приложений; только для официальных приложений.
-   Добавлен [contacts.getSponsoredPeers](/method/contacts.getSponsoredPeers/) — получает список спонсируемых пиров — результатов поиска по заданному запросу
-   Добавлен [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) — удаляет участников из [конференц-звонка »](/api/end-to-end/group-calls/#removing-a-participant).
-   Добавлен [phone.sendConferenceCallBroadcast](/method/phone.sendConferenceCallBroadcast/) — отправляет проверочное сообщение в подцепочку `1` конференц-звонка, см. [подцепочки »](/api/end-to-end/group-calls/#subchains).
-   Добавлен [phone.inviteConferenceCallParticipant](/method/phone.inviteConferenceCallParticipant/) — приглашает пользователя в [конференц-звонок](/api/group-calls/#conference-calls).
-   Добавлен [phone.declineConferenceCallInvite](/method/phone.declineConferenceCallInvite/) — отклоняет приглашение в [конференц-звонок](/api/group-calls/#conference-calls).
-   Добавлен [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) — получает блоки из [подцепочки »](/api/end-to-end/group-calls/#subchains) конференц-звонка; обрабатывать возвращаемый [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) следует так, как [описано здесь »](/api/end-to-end/group-calls/#handling-updates).

##### Изменённые методы

-   Удалён параметр **conference\_call** в [phone.requestCall](/method/phone.requestCall/)
-   Добавлены параметры **public\_key**, **block**, удалён параметр **key\_fingerprint** в [phone.joinGroupCall](/method/phone.joinGroupCall/)
-   Добавлен параметр **rights**, удалён параметр **can\_reply** в [account.updateConnectedBot](/method/account.updateConnectedBot/)
-   Удалён параметр **peer** в [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/)
-   Удалён параметр **peer** в [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/)
-   Удалён параметр **peer** в [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)
-   Тип [phone.createConferenceCall](/method/phone.createConferenceCall/) изменён с **phone.PhoneCall** на **Updates**
-   Добавлены параметры **flags**, **muted**, **video\_stopped**, **join**, **random\_id**, **public\_key**, **block**, **params**, удалены параметры **peer**, **key\_fingerprint** в [phone.createConferenceCall](/method/phone.createConferenceCall/)

##### Удалённые методы

-   Удалён payments.canPurchasePremium

##### Новые конструкторы

-   Добавлен [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/) — официальные приложения могут получить этот конструктор; он означает, что из-за высокой стоимости SMS с кодами подтверждения для страны или оператора пользователя для продолжения входа или регистрации пользователь обязан приобрести подписку [Telegram Premium](/api/premium/); подробнее см. [здесь »](/api/auth/#paid-auth).
-   Добавлен [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/) — обозначает оплату кода для входа.
-   Добавлен [updateSentPhoneCode](/constructor/updateSentPhoneCode/) — платное SMS с кодом для входа успешно отправлено.
-   Добавлен [businessBotRights](/constructor/businessBotRights/) — [права бизнес-бота](/api/bots/connected-business-bots/).
-   Добавлен [messageActionPaidMessagesRefunded](/constructor/messageActionPaidMessagesRefunded/) — отправляется от пира A к пиру B и означает, что A вернул все [звёзды](/api/stars/), которые B ранее уплатил за отправку сообщений пиру A; подробнее о платных сообщениях см. [здесь »](/api/paid-messages/).
-   Добавлен [messageActionPaidMessagesPrice](/constructor/messageActionPaidMessagesPrice/) — цена [платных сообщений »](/api/paid-messages/) в этом чате изменилась.
-   Добавлен [disallowedGiftsSettings](/constructor/disallowedGiftsSettings/) — запрещает получение [подарков](/api/gifts/) определённых типов.
-   Добавлен [sponsoredPeer](/constructor/sponsoredPeer/) — спонсируемый пир.
-   Добавлен [contacts.sponsoredPeersEmpty](/constructor/contacts.sponsoredPeersEmpty/) — для этого запроса спонсируемых пиров нет.
-   Добавлен [contacts.sponsoredPeers](/constructor/contacts.sponsoredPeers/) — спонсируемые пиры.
-   Добавлен [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) — переводит звёзды с баланса аккаунта пользователя, [подключённого к бизнес-боту](/api/bots/connected-business-bots/), на баланс [бизнес-бота](/api/bots/connected-business-bots/); подробнее обо всей процедуре см. [здесь »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot).
-   Добавлен [inputGroupCallSlug](/constructor/inputGroupCallSlug/) — идентифицирует [конференц-звонок »](/api/group-calls/#conference-calls) по слагу из пригласительной ссылки на него.
-   Добавлен [inputGroupCallInviteMessage](/constructor/inputGroupCallInviteMessage/) — идентифицирует [конференц-звонок »](/api/group-calls/#conference-calls) по пригласительному сервисному сообщению [messageActionConferenceCall](/constructor/messageActionConferenceCall/).
-   Добавлен [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) — содержит блоки блокчейна конференц-звонка, см. [обработку обновлений групповых звонков со сквозным шифрованием »](/api/end-to-end/group-calls/#handling-updates).
-   Добавлен [messageActionConferenceCall](/constructor/messageActionConferenceCall/) — представляет [конференц-звонок »](/api/group-calls/#conference-calls) либо, если не установлен ни флаг `missed`, ни флаг `active`, — приглашение в него.
-   Добавлен [phoneCallDiscardReasonMigrateConferenceCall](/constructor/phoneCallDiscardReasonMigrateConferenceCall/) — этот звонок был переведён в [конференц-звонок](/api/end-to-end/group-calls/).

##### Изменённые конструкторы

-   Добавлены параметры **display\_gifts\_button**, **disallowed\_gifts** в [userFull](/constructor/userFull/)
-   Удалён параметр **conference\_call** в [phoneCallWaiting](/constructor/phoneCallWaiting/)
-   Удалён параметр **conference\_call** в [phoneCallRequested](/constructor/phoneCallRequested/)
-   Удалён параметр **conference\_call** в [phoneCallAccepted](/constructor/phoneCallAccepted/)
-   Добавлен параметр **conference\_supported**, удалён параметр **conference\_call** в [phoneCall](/constructor/phoneCall/)
-   Удалён параметр **conference\_call** в [phoneCallDiscarded](/constructor/phoneCallDiscarded/)
-   Добавлены параметры **display\_gifts\_button**, **disallowed\_gifts** в [globalPrivacySettings](/constructor/globalPrivacySettings/)
-   Добавлены параметры **conference**, **creator**, **invite\_link**, удалён параметр **conference\_from\_call** в [groupCall](/constructor/groupCall/)
-   Добавлен параметр **rights**, удалён параметр **can\_reply** в [connectedBot](/constructor/connectedBot/)
-   Добавлен параметр **rights**, удалён параметр **can\_reply** в [botBusinessConnection](/constructor/botBusinessConnection/)

#### Изменения в PUSH-уведомлениях

##### Новые PUSH-уведомления

-   Добавлено [CONF\_CALL\_MISSED](/api/push-updates/#conf-call-missed) — `You missed a call from {1}`

#### [Схема](/schema/)

```
userFull#99e78045 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings = UserFull;
phoneCallWaiting#c5226f17 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long protocol:PhoneCallProtocol receive_date:flags.0?int = PhoneCall;
phoneCallRequested#14b0ed0c flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_hash:bytes protocol:PhoneCallProtocol = PhoneCall;
phoneCallAccepted#3660c311 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_b:bytes protocol:PhoneCallProtocol = PhoneCall;
phoneCall#30535af5 flags:# p2p_allowed:flags.5?true video:flags.6?true conference_supported:flags.8?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long protocol:PhoneCallProtocol connections:Vector<PhoneConnection> start_date:int custom_parameters:flags.7?DataJSON = PhoneCall;
phoneCallDiscarded#50ca4de1 flags:# need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = PhoneCall;
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;
groupCall#553b0ba1 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string = GroupCall;
connectedBot#cd64636c flags:# bot_id:long recipients:BusinessBotRecipients rights:BusinessBotRights = ConnectedBot;
botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;
auth.sentCodePaymentRequired#d7cef980 store_product:string phone_code_hash:string = auth.SentCode;
inputStorePaymentAuthCode#9bb2636d flags:# restore:flags.0?true phone_number:string phone_code_hash:string currency:string amount:long = InputStorePaymentPurpose;
updateSentPhoneCode#504aa18f sent_code:auth.SentCode = Update;
businessBotRights#a0624cf7 flags:# reply:flags.0?true read_messages:flags.1?true delete_sent_messages:flags.2?true delete_received_messages:flags.3?true edit_name:flags.4?true edit_bio:flags.5?true edit_profile_photo:flags.6?true edit_username:flags.7?true view_gifts:flags.8?true sell_gifts:flags.9?true change_gift_settings:flags.10?true transfer_and_upgrade_gifts:flags.11?true transfer_stars:flags.12?true manage_stories:flags.13?true = BusinessBotRights;
messageActionPaidMessagesRefunded#ac1f1fcd count:int stars:long = MessageAction;
messageActionPaidMessagesPrice#bcd71419 stars:long = MessageAction;
disallowedGiftsSettings#71f276c4 flags:# disallow_unlimited_stargifts:flags.0?true disallow_limited_stargifts:flags.1?true disallow_unique_stargifts:flags.2?true disallow_premium_gifts:flags.3?true = DisallowedGiftsSettings;
sponsoredPeer#c69708d3 flags:# random_id:bytes peer:Peer sponsor_info:flags.0?string additional_info:flags.1?string = SponsoredPeer;
contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;
inputGroupCallSlug#fe06823f slug:string = InputGroupCall;
inputGroupCallInviteMessage#8c10603f msg_id:int = InputGroupCall;
updateGroupCallChainBlocks#a477288f call:InputGroupCall sub_chain_id:int blocks:Vector<bytes> next_offset:int = Update;
messageActionConferenceCall#2ffe2f7a flags:# missed:flags.0?true active:flags.1?true video:flags.4?true call_id:long duration:flags.2?int other_participants:flags.3?Vector<Peer> = MessageAction;
phoneCallDiscardReasonMigrateConferenceCall#9fbbf1f7 slug:string = PhoneCallDiscardReason;
---functions---
phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
account.updateConnectedBot#66a08c7e flags:# deleted:flags.1?true rights:flags.0?BusinessBotRights bot:InputUser recipients:InputBusinessBotRecipients = Updates;
messages.viewSponsoredMessage#269e3643 random_id:bytes = Bool;
messages.clickSponsoredMessage#8235057e flags:# media:flags.0?true fullscreen:flags.1?true random_id:bytes = Bool;
messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
phone.createConferenceCall#7d0444bb flags:# muted:flags.0?true video_stopped:flags.2?true join:flags.3?true random_id:int public_key:flags.3?int256 block:flags.3?bytes params:flags.3?DataJSON = Updates;
payments.canPurchaseStore#4fdc5ea7 purpose:InputStorePaymentPurpose = Bool;
contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
phone.deleteConferenceCallParticipants#8ca60525 flags:# only_left:flags.0?true kick:flags.1?true call:InputGroupCall ids:Vector<long> block:bytes = Updates;
phone.sendConferenceCallBroadcast#c6701900 call:InputGroupCall block:bytes = Updates;
phone.inviteConferenceCallParticipant#bcf22685 flags:# video:flags.0?true call:InputGroupCall user_id:InputUser = Updates;
phone.declineConferenceCallInvite#3c479971 msg_id:int = Updates;
phone.getGroupCallChainBlocks#ee9f88a6 call:InputGroupCall sub_chain_id:int offset:int limit:int = Updates;
```

### [Слой 200](https://core.telegram.org/schema?layer=200)

Этот слой вводит:

-   [Подробные сведения об аккаунте для новых личных чатов »](/api/action-bar/#account-information)
-   [Платные сообщения »](/api/paid-messages/)
-   [Закрепление конкретного полученного подарка в профиле »](/api/gifts/#pinning-a-received-gift)
-   [Отправка платных реакций от имени канала »](/api/reactions/#paid-reaction-privacy)
-   [В channelFull добавлен флаг `paid_messages_available`, который показывает, можно ли включить платные сообщения в этой супергруппе](/constructor/channelFull/)
-   [Подарить подписку Telegram Premium, расплатившись Telegram Stars »](/api/premium/#gifting-telegram-premium)  
    Это изменение также упрощает процедуру дарения Telegram Premium: флаг [userFull](/constructor/userFull/).`premium_gifts` полностью заменён методом [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/).
-   [Адреса коллекционных подарков в блокчейне перенесены в блокчейн TON в виде NFT »](/api/gifts/#withdraw-a-collectible-gift-to-the-ton-blockchain)
-   Все флаги, добавленные в [channel](/constructor/channel/) (перечислены ниже), — корректные флаги `min`: их обязательно применять поверх локально сохранённой версии, даже если у входящего конструктора [channel](/constructor/channel/) установлен флаг `min`.
-   Все флаги, добавленные в [user](/constructor/user/) (перечислены ниже), — корректные флаги `min`: их обязательно применять поверх локально сохранённой версии, даже если у входящего конструктора [user](/constructor/user/) установлен флаг `min`.

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [invokeWithReCaptcha](/method/invokeWithReCaptcha/) — только для официальных клиентов: повторно выполняет вызов метода, для которого потребовалась проверка reCAPTCHA через `RECAPTCHA_CHECK_%s__%s`, где первый заполнитель — это `action`, а второй — идентификатор ключа reCAPTCHA.
-   Добавлен [account.addNoPaidMessagesException](/method/account.addNoPaidMessagesException/)
-   Добавлен [account.getPaidMessagesRevenue](/method/account.getPaidMessagesRevenue/) — получает количество звёзд, полученных нами от указанного пользователя благодаря [платным сообщениям »](/api/paid-messages/); полученная сумма равна отправленной сумме, умноженной на [stars\_paid\_message\_commission\_permille](/api/config/#stars-paid-message-commission-permille) и делённой на 1000.
-   Добавлен [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/) — включает или отключает [платные сообщения »](/api/paid-messages/) в этой [супергруппе](/api/channel/) или [монофоруме](/api/monoforum/).
-   Добавлен [users.getRequirementsToContact](/method/users.getRequirementsToContact/) — проверяет, можем ли мы писать указанным пользователям; используется для массовых проверок при реализации [сообщений только для Premium »](/api/privacy/#require-premium-for-new-non-contact-users) и [платных сообщений »](/api/paid-messages/).
-   Добавлен [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/) — закрепляет полученный подарок вверху профиля пользователя или подконтрольных нам каналов с помощью [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).

##### Изменённые методы

-   Добавлен параметр **allow\_paid\_stars** в [messages.sendMessage](/method/messages.sendMessage/)
-   Добавлен параметр **allow\_paid\_stars** в [messages.sendMedia](/method/messages.sendMedia/)
-   Добавлен параметр **allow\_paid\_stars** в [messages.forwardMessages](/method/messages.forwardMessages/)
-   Добавлен параметр **allow\_paid\_stars** в [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/)
-   Добавлен параметр **allow\_paid\_stars** в [messages.sendMultiMedia](/method/messages.sendMultiMedia/)
-   Добавлены параметры **flags**, **for\_paid\_reactions** в [channels.getSendAs](/method/channels.getSendAs/)
-   Тип параметра **private** изменён с **flags.0?Bool** на **flags.0?PaidReactionPrivacy** в [messages.sendPaidReaction](/method/messages.sendPaidReaction/)
-   Тип параметра **private** изменён с **Bool** на **PaidReactionPrivacy** в [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/)

##### Удалённые методы

-   Удалён users.getIsPremiumRequiredToContact

##### Новые конструкторы

-   Добавлен [paidReactionPrivacyDefault](/constructor/paidReactionPrivacyDefault/) — использует приватность реакций по умолчанию, заданную через [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/).
-   Добавлен [paidReactionPrivacyAnonymous](/constructor/paidReactionPrivacyAnonymous/) — отправлять платные реакции анонимно.
-   Добавлен [paidReactionPrivacyPeer](/constructor/paidReactionPrivacyPeer/) — отправлять платные реакции от имени указанного пира, полученного через [channels.getSendAs](/method/channels.getSendAs/) с установленным флагом `for_paid_reactions`.
-   Добавлен [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) — кто может писать вам без оплаты, если включены [платные сообщения »](/api/paid-messages/).
-   Добавлен [privacyKeyNoPaidMessages](/constructor/privacyKeyNoPaidMessages/) — кто может писать вам без оплаты, если включены [платные сообщения »](/api/paid-messages/).
-   Добавлен [account.paidMessagesRevenue](/constructor/account.paidMessagesRevenue/) — общее количество невозвращённых [Telegram Stars](/api/stars/), которые пользователь потратил на отправку нам сообщений напрямую или через канал; подробнее о платных сообщениях см. [здесь »](/api/paid-messages/).
-   Добавлен [requirementToContactEmpty](/constructor/requirementToContactEmpty/) — с этим пользователем можно связаться беспрепятственно.
-   Добавлен [requirementToContactPremium](/constructor/requirementToContactPremium/) — чтобы связаться с этим пользователем, нам необходимо приобрести подписку [Premium](/api/premium/).
-   Добавлен [requirementToContactPaidMessages](/constructor/requirementToContactPaidMessages/) — чтобы отправить сообщение этому пользователю, нам необходимо заплатить указанное количество [Telegram Stars](/api/stars/); всю процедуру см. [здесь »](/api/paid-messages/).
-   Добавлен [inputInvoicePremiumGiftStars](/constructor/inputInvoicePremiumGiftStars/) — используется, чтобы подарить другому пользователю подписку [Telegram Premium](/api/premium/), расплатившись [Telegram Stars](/api/stars/).

##### Изменённые конструкторы

-   Добавлен параметр **paid\_message\_stars** в [message](/constructor/message/)
-   Добавлены параметры **charge\_paid\_message\_stars**, **registration\_month**, **phone\_country**, **name\_change\_date**, **photo\_change\_date** в [peerSettings](/constructor/peerSettings/)
-   Добавлен параметр **send\_paid\_messages\_stars**, удалён параметр **premium\_gifts** в [userFull](/constructor/userFull/)
-   Добавлен параметр **send\_paid\_messages\_stars** в [user](/constructor/user/)
-   Добавлен параметр **send\_paid\_messages\_stars** в [channel](/constructor/channel/)
-   Добавлен параметр **paid\_messages\_available** в [channelFull](/constructor/channelFull/)
-   Добавлен параметр **noncontact\_peers\_paid\_stars** в [globalPrivacySettings](/constructor/globalPrivacySettings/)
-   Добавлены параметры **business\_transfer**, **stargift\_resale**, **paid\_messages**, **premium\_gift\_months** в [starsTransaction](/constructor/starsTransaction/)
-   Тип параметра **private** изменён с **Bool** на **PaidReactionPrivacy** в [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/)
-   Добавлен параметр **gift\_address** в [starGiftUnique](/constructor/starGiftUnique/)

##### Удалённые конструкторы

-   Удалён premiumGiftOption

#### [Схема](/schema/)

```
message#eabcdd4d flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long = Message;
peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;
userFull#d2234ea0 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long = UserFull;
user#020b1422 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?int color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
channel#7482147e flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?int color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long = Chat;
channelFull#52d6806b flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int = ChatFull;
globalPrivacySettings#c9d8df1c flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true noncontact_peers_paid_stars:flags.5?long = GlobalPrivacySettings;
starsTransaction#a39fd94a flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true id:string stars:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int = StarsTransaction;
updatePaidReactionPrivacy#8b725fce private:PaidReactionPrivacy = Update;
starGiftUnique#5c62d151 flags:# id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string = StarGift;
paidReactionPrivacyDefault#206ad49e = PaidReactionPrivacy;
paidReactionPrivacyAnonymous#1f0c1ad9 = PaidReactionPrivacy;
paidReactionPrivacyPeer#dc6cfcf0 peer:InputPeer = PaidReactionPrivacy;
inputPrivacyKeyNoPaidMessages#bdc597b4 = InputPrivacyKey;
privacyKeyNoPaidMessages#17d348d2 = PrivacyKey;
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;
requirementToContactEmpty#050a9839 = RequirementToContact;
requirementToContactPremium#e581e4e9 = RequirementToContact;
requirementToContactPaidMessages#b4f67e93 stars_amount:long = RequirementToContact;
inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;
---functions---
messages.sendMessage#fbf2340a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
messages.sendMedia#a550cd78 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
messages.forwardMessages#bb9fa475 flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int allow_paid_stars:flags.21?long = Updates;
messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true peer:InputPeer = channels.SendAsPeers;
messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;
messages.togglePaidReactionPrivacy#435885b5 peer:InputPeer msg_id:int private:PaidReactionPrivacy = Bool;
invokeWithReCaptcha#adbb0f94 {X:Type} token:string query:!X = X;
account.addNoPaidMessagesException#6f688aa7 flags:# refund_charged:flags.0?true user_id:InputUser = Bool;
account.getPaidMessagesRevenue#f1266f38 user_id:InputUser = account.PaidMessagesRevenue;
channels.updatePaidMessagesPrice#fc84653f channel:InputChannel send_paid_messages_stars:long = Updates;
users.getRequirementsToContact#d89a83a3 id:Vector<InputUser> = Vector<RequirementToContact>;
payments.toggleStarGiftsPinnedToTop#1513e7b0 peer:InputPeer stargift:Vector<InputSavedStarGift> = Bool;
```

### [Слой 198](https://core.telegram.org/schema?layer=198)

Этот слой вводит:

-   [Коллекционные предметы в качестве эмодзи-статусов (и небольшие правки в API эмодзи-статусов) »](/api/emoji-status/#collectibles-as-emoji-statuses)
-   Отправку подарков каналам
-   [Уведомления о подарках, полученных каналами »](/api/gifts/#notifications-for-received-channel-gifts)
-   [Получение всех подарков, полученных пиром »](/api/gifts/#list-all-received-gifts)
-   [Получение сведений о конкретных подарках, принадлежащих подконтрольному нам пиру »](/api/gifts/#list-specific-owned-gifts)
-   [Вывод коллекционного подарка в блокчейн TON »](/api/gifts/#withdraw-a-collectible-gift-to-the-ton-blockchain)
-   [Пользовательские обложки видео »](/api/files/#video-covers)
-   [Пользовательские метки времени начала воспроизведения видео »](/api/files/#start-video-at-timestamp)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [account.getCollectibleEmojiStatuses](/method/account.getCollectibleEmojiStatuses/) — получает список [эмодзи-статусов »](/api/emoji-status/) для принадлежащих нам или [размещённых коллекционных подарков »](/api/gifts/#hosted-collectible-gifts).
-   Добавлен [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) — получает полный список [подарков »](/api/gifts/#list-all-received-gifts), которые принадлежат пиру, получены им или [размещены »](/api/gifts/#hosted-collectible-gifts) у него.
-   Добавлен [payments.getSavedStarGift](/method/payments.getSavedStarGift/) — получает сведения о конкретных [подарках](/api/gifts/), принадлежащих подконтрольному нам пиру.
-   Добавлен [payments.getStarGiftWithdrawalUrl](/method/payments.getStarGiftWithdrawalUrl/) — преобразует [коллекционный подарок »](/api/gifts/) в NFT в блокчейне TON.
-   Добавлен [payments.toggleChatStarGiftNotifications](/method/payments.toggleChatStarGiftNotifications/) — включает или отключает получение уведомлений каждый раз, когда указанный канал получает [подарок »](/api/gifts/); может вызываться только администраторами с [правами администратора](/constructor/chatAdminRights/) `post_messages`.

##### Изменённые методы

-   Добавлен параметр **video\_timestamp** в [messages.forwardMessages](/method/messages.forwardMessages/)
-   Добавлен параметр **stargift**, удалён параметр **msg\_id** в [payments.saveStarGift](/method/payments.saveStarGift/)
-   Добавлен параметр **stargift**, удалён параметр **msg\_id** в [payments.convertStarGift](/method/payments.convertStarGift/)
-   Добавлен параметр **stargift**, удалён параметр **msg\_id** в [payments.upgradeStarGift](/method/payments.upgradeStarGift/)
-   Добавлен параметр **stargift**, удалён параметр **msg\_id**, тип параметра **to\_id** изменён с **InputUser** на **InputPeer** в [payments.transferStarGift](/method/payments.transferStarGift/)

##### Удалённые методы

-   Удалён payments.getUserStarGifts
-   Удалён payments.getUserStarGift

##### Новые конструкторы

-   Добавлен [emojiStatusCollectible](/constructor/emojiStatusCollectible/) — принадлежащий нам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса.
-   Добавлен [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) — принадлежащий нам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса: может использоваться только в [account.updateEmojiStatus](/method/account.updateEmojiStatus/), никогда не возвращается API.
-   Добавлен [savedStarGift](/constructor/savedStarGift/) — представляет [подарок](/api/gifts/), принадлежащий пиру.
-   Добавлен [payments.savedStarGifts](/constructor/payments.savedStarGifts/) — представляет список [подарков](/api/gifts/).
-   Добавлен [inputSavedStarGiftUser](/constructor/inputSavedStarGiftUser/) — подарок, полученный в личном чате с другим пользователем.
-   Добавлен [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/) — подарок, полученный принадлежащим нам каналом.
-   Добавлен [payments.starGiftWithdrawalUrl](/constructor/payments.starGiftWithdrawalUrl/) — URL, по которому можно импортировать экспортированный NFT на Fragment.

##### Изменённые конструкторы

-   Добавлены параметры **video\_cover**, **video\_timestamp** в [inputMediaUploadedDocument](/constructor/inputMediaUploadedDocument/)
-   Добавлены параметры **video\_cover**, **video\_timestamp** в [inputMediaDocument](/constructor/inputMediaDocument/)
-   Добавлены параметры **video\_cover**, **video\_timestamp** в [messageMediaDocument](/constructor/messageMediaDocument/)
-   Добавлены параметры **stargifts\_available**, **stargifts\_count** в [channelFull](/constructor/channelFull/)
-   Добавлены параметры **video\_cover**, **video\_timestamp** в [inputMediaDocumentExternal](/constructor/inputMediaDocumentExternal/)
-   Добавлены параметры **flags**, **until** в [emojiStatus](/constructor/emojiStatus/)
-   Добавлен параметр **peer**, удалён параметр **user\_id** в [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/)
-   Добавлены параметры **from\_id**, **peer**, **saved\_id** в [messageActionStarGift](/constructor/messageActionStarGift/)
-   Тип параметра **sender\_id** изменён с **flags.0?long** на **flags.0?Peer**, параметра **recipient\_id** — с **long** на **Peer** в [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)
-   Добавлен параметр **owner\_address**, тип параметра **owner\_id** изменён с **flags.0?long** на **flags.0?Peer** в [starGiftUnique](/constructor/starGiftUnique/)
-   Добавлены параметры **from\_id**, **peer**, **saved\_id** в [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Добавлен параметр **stargift**, удалён параметр **msg\_id** в [inputInvoiceStarGiftUpgrade](/constructor/inputInvoiceStarGiftUpgrade/)
-   Добавлен параметр **stargift**, удалён параметр **msg\_id**, тип параметра **to\_id** изменён с **InputUser** на **InputPeer** в [inputInvoiceStarGiftTransfer](/constructor/inputInvoiceStarGiftTransfer/)

##### Удалённые конструкторы

-   Удалён emojiStatusUntil
-   Удалён userStarGift
-   Удалён payments.userStarGifts

#### [Схема](/schema/)

```
inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;
messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;
channelFull#52d6806b flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int = ChatFull;
inputMediaDocumentExternal#779600f9 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int video_cover:flags.2?InputPhoto video_timestamp:flags.3?int = InputMedia;
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;
inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
messageActionStarGift#4717e8a4 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long = MessageAction;
starGiftAttributeOriginalDetails#e0bff26c flags:# sender_id:flags.0?Peer recipient_id:Peer date:int message:flags.1?TextWithEntities = StarGiftAttribute;
starGiftUnique#f2fe7e4a flags:# id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int = StarGift;
messageActionStarGiftUnique#acdfcb81 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long = MessageAction;
inputInvoiceStarGiftUpgrade#4d818d5d flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;
inputEmojiStatusCollectible#07141dbf flags:# collectible_id:long until:flags.0?int = EmojiStatus;
savedStarGift#6056dba5 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long = SavedStarGift;
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
payments.starGiftWithdrawalUrl#84aa3a9c url:string = payments.StarGiftWithdrawalUrl;
---functions---
messages.forwardMessages#6d74da08 flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int = Updates;
payments.saveStarGift#2a2a697c flags:# unsave:flags.0?true stargift:InputSavedStarGift = Bool;
payments.convertStarGift#74bf076b stargift:InputSavedStarGift = Bool;
payments.upgradeStarGift#aed6e4f5 flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = Updates;
payments.transferStarGift#7f18176a stargift:InputSavedStarGift to_id:InputPeer = Updates;
account.getCollectibleEmojiStatuses#2e7b4543 hash:long = account.EmojiStatuses;
payments.getSavedStarGifts#23830de9 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_limited:flags.3?true exclude_unique:flags.4?true sort_by_value:flags.5?true peer:InputPeer offset:string limit:int = payments.SavedStarGifts;
payments.getSavedStarGift#b455a106 stargift:Vector<InputSavedStarGift> = payments.SavedStarGifts;
payments.getStarGiftWithdrawalUrl#d06e93a8 stargift:InputSavedStarGift password:InputCheckPasswordSRP = payments.StarGiftWithdrawalUrl;
payments.toggleChatStarGiftNotifications#60eaefa1 flags:# enabled:flags.0?true peer:InputPeer = Bool;
```

### [Слой 197](https://core.telegram.org/schema?layer=197)

Этот слой вводит:

-   [Ссылки на коллекционные подарки »](/api/links/#collectible-gift-link)
-   [Медиа-области историй с коллекционными подарками »](/api/stories/#collectible-gifts)
-   [Предпросмотр веб-страниц с коллекционными подарками »](/constructor/webPageAttributeUniqueStarGift/)
-   [Рекомендации похожих ботов »](/api/recommend/#similar-bots)

#### Изменения в [схеме](/schema/)

##### Новые методы

-   Добавлен [bots.getBotRecommendations](/method/bots.getBotRecommendations/) — получает список ботов схожей тематики, подобранных по сходству их аудиторий подписчиков; подробнее см. [здесь »](/api/recommend/).
-   Добавлен [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/) — получает сведения о [коллекционном подарке »](/api/gifts/#collectible-gifts) по слагу, полученному из [ссылки на коллекционный подарок »](/api/links/#collectible-gift-link).

##### Изменённые методы

-   Тип метода [messages.getWebPagePreview](/method/messages.getWebPagePreview/) изменён с **MessageMedia** на **messages.WebPagePreview**

##### Новые конструкторы

-   Добавлен [users.users](/constructor/users.users/) — описывает список пользователей (или ботов).
-   Добавлен [users.usersSlice](/constructor/users.usersSlice/) — описывает часть списка пользователей.
-   Добавлен [payments.uniqueStarGift](/constructor/payments.uniqueStarGift/) — представляет [коллекционный подарок »](/api/gifts/#collectible-gifts).
-   Добавлен [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) — содержит сведения о [коллекционном подарке »](/api/gifts/#collectible-gifts) для предпросмотра [webPage](/constructor/webPage/) такого [коллекционного подарка »](/api/gifts/#collectible-gifts) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_nft`).
-   Добавлен [mediaAreaStarGift](/constructor/mediaAreaStarGift/) — представляет [коллекционный подарок »](/api/gifts/#collectible-gifts).
-   Добавлен [messages.webPagePreview](/constructor/messages.webPagePreview/) — представляет предпросмотр веб-страницы.

##### Изменённые конструкторы

-   Добавлены параметры **flags**, **slug**, **owner\_name**, тип параметра **owner\_id** изменён с **long** на **flags.0?long** в [starGiftUnique](/constructor/starGiftUnique/)

#### [Схема](/schema/)

```
starGiftUnique#3482f322 flags:# id:long title:string slug:string num:int owner_id:flags.0?long owner_name:flags.1?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int = StarGift;
users.users#62d706b8 users:Vector<User> = users.Users;
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;
payments.uniqueStarGift#caa2f60b gift:StarGift users:Vector<User> = payments.UniqueStarGift;
webPageAttributeUniqueStarGift#cf6f6db8 gift:StarGift = WebPageAttribute;
mediaAreaStarGift#5787686d coordinates:MediaAreaCoordinates slug:string = MediaArea;
messages.webPagePreview#b53e8b21 media:MessageMedia users:Vector<User> = messages.WebPagePreview;
---functions---
messages.getWebPagePreview#570d6f6f flags:# message:string entities:flags.3?Vector<MessageEntity> = messages.WebPagePreview;
bots.getBotRecommendations#a1b70815 bot:InputUser = users.Users;
payments.getUniqueStarGift#a1974d72 slug:string = payments.UniqueStarGift;
```

### [Слой 196](https://core.telegram.org/schema?layer=196)

Этот слой вводит:

-   [Дополнительно защищённые групповые звонки »](https://telegram.org/blog/group-calls-made-easy)
-   [Явное подтверждение доставки для проверочных сообщений Telegram Gateway »](/method/messages.reportMessagesDelivery/).
-   [Сторонняя верификация »](/api/bots/verification/)
-   [Реакции на сервисные сообщения »](/api/reactions/)
-   [Коллекционные подарки »](/api/gifts/#collectible-gifts)
-   Добавлена поддержка сущностей оформления в названиях папок, а также новый флаг `title_noanimate`, позволяющий при желании остановить анимацию эмодзи в названии.
-   Все флаги, добавленные в [channel](/constructor/channel/) (перечислены ниже), — корректные флаги `min`: их обязательно применять поверх локально сохранённой версии, даже если у входящего конструктора [channel](/constructor/channel/) установлен флаг `min`.
-   Все флаги, добавленные в [user](/constructor/user/) (перечислены ниже), — корректные флаги `min`: их обязательно применять поверх локально сохранённой версии, даже если у входящего конструктора [user](/constructor/user/) установлен флаг `min`.

#### Изменения в PUSH-уведомлениях

##### Новые PUSH-уведомления

-   Добавлено [MESSAGE\_STARGIFT\_UPGRADE](/api/push-updates/#message-stargift-upgrade) — `{1} upgraded your Gift`
-   Добавлено [MESSAGE\_UNIQUE\_STARGIFT](/api/push-updates/#message-unique-stargift) — `{1} transferred you a Gift!`
