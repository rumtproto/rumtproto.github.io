---
title: "Работа с обновлениями"
original: "https://core.telegram.org/api/updates"
section: api
description: "Пока клиент активно используется, происходят события, которые затрагивают текущего пользователя и о которых он должен узнать как можно скорее — например, приход нового сообщения.…"
layout: layout.njk
---

# Работа с обновлениями

Пока клиент активно используется, происходят события, которые затрагивают текущего пользователя и о которых он должен узнать как можно скорее — например, приход нового сообщения. Чтобы клиенту не приходилось периодически выкачивать эти события самостоятельно, предусмотрен механизм доставки обновлений: сервер сам присылает пользователю уведомления по одному из доступных ему соединений с клиентом.

### Подписка на обновления

События-обновления отправляются авторизованному пользователю в последнее активное соединение (за исключением соединений, задействованных для скачивания и загрузки файлов).

Поэтому, чтобы начать получать обновления, клиент должен инициализировать соединение и вызвать какой-либо метод API — например, [запросить текущее состояние](#fetching-state).

Обязательно **всегда игнорируйте обновления, полученные по незашифрованным соединениям** — то есть до того, как завершится рукопожатие (начальный обмен, в ходе которого вырабатывается ключ шифрования).

Если соединение зашифровано, но сессия ещё не вошла в аккаунт или уже вышла из него, обрабатывать допускается только следующие обновления:

-   [updateLoginToken](/constructor/updateLoginToken/) — для [входа по QR-коду](/api/qr-login/)
-   [updateSentPhoneCode](/constructor/updateSentPhoneCode/) — для [входа](/api/auth/) по платному SMS-коду
-   [updateDcOptions](/constructor/updateDcOptions/) — изменения в параметрах подключения к дата-центрам, которые следует применить
-   [updateConfig](/constructor/updateConfig/) — серверная конфигурация изменилась; клиенту следует перезапросить её методами [help.getConfig](/method/help.getConfig/) и [help.getAppConfig](/method/help.getAppConfig/).
-   [updateLangPackTooLong](/constructor/updateLangPackTooLong/), [updateLangPack](/constructor/updateLangPack/) — обновления пакетов локализации

### Последовательности событий

Все события приходят из сокета как последовательность TL-сериализованных объектов [Updates](/type/Updates/), которые могут быть дополнительно сжаты gzip — так же, как и [ответы на запросы](/api/invoking/#decompressing-data).

Каждый объект [Updates](/type/Updates/) может содержать один или несколько объектов [Update](/type/Update/), описывающих разные произошедшие события.

[@term:pts] [@term:qts] [@term:seq] Чтобы применять все обновления строго по порядку и гарантировать, что ни одно из них не будет пропущено или применено дважды, в конструкторах [Updates](/type/Updates/) есть атрибут `seq` — номер в общей последовательности обновлений, а в конструкторах [Update](/type/Update/) — атрибуты `pts` (вместе с `pts_count`) или `qts`: монотонно растущие счётчики состояния, каждый из которых считает события в своей последовательности. Клиент обязан использовать значения этих атрибутов вместе с локально сохранённым состоянием, чтобы корректно применять входящие обновления.

Когда в последовательности обновлений возникает разрыв, его необходимо заполнить вызовом одного из методов API. [Подробнее ниже »](#recovering-gaps)

При использовании [параллельных сессий бота »](/api/datacenter/#parallel-sessions) каждая сессия обладает полной авторизацией аккаунта и **может получать [обновления](/api/updates/)**, причём все они используют одну и ту же последовательность `pts`/`seq`/`qts`: каждое обновление доставляется лишь через **одну** из активных в данный момент сессий, выбранную случайным образом.

### Последовательность [Updates](/type/Updates/)

Как сказано выше, каждая посылка с обновлениями имеет TL-тип [Updates](/type/Updates/). Из приведённой ниже схемы видно, что у этого типа несколько конструкторов.

```
updatesTooLong#e317af7e = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
```

[updatesTooLong](/constructor/updatesTooLong/) означает, что накопилось слишком много событий, ожидающих отправки клиенту, поэтому их нужно [получить вручную](#recovering-gaps).

События внутри конструкторов [updateShort](/constructor/updateShort/), как правило, имеют более низкий приоритет и рассылаются большому числу пользователей — например, когда один из участников большого чата начал набирать текст ([updateChatUserTyping](/constructor/updateChatUserTyping/)).

Конструкторы [updateShortMessage](/constructor/updateShortMessage/), [updateShortSentMessage](/constructor/updateShortMessage/) и [updateShortChatMessage](/constructor/updateShortChatMessage/) избыточны, но позволяют существенно сократить размер передаваемого сообщения для 90 % обновлений. При получении их следует преобразовывать в [updateShort](/constructor/updateShort/).

Два оставшихся конструктора, [updates](/constructor/updates/) и [updatesCombined](/constructor/updatesCombined/), входят в последовательность Updates. У обоих есть атрибут `seq`, который указывает состояние обновлений на сервере после формирования этой посылки, а `seq_start` указывает состояние обновлений на сервере после того, как сформировано _первое_ из обновлений в посылке. У конструктора [updates](/constructor/updates/) атрибут `seq_start` опущен, поскольку предполагается, что он всегда равен `seq`.

### Последовательности событий, связанных с сообщениями

[@term:message box] Каждое _событие_, связанное с ящиком сообщений (`message box` — серверная очередь событий одного чата или группы чатов), — сообщение создано, изменено, удалено и т. д. — определяется уникальным автоинкрементным значением `pts`, а для обновлений секретных чатов, некоторых обновлений ботов и тому подобного — значением `qts`.

Каждый ящик сообщений можно рассматривать как некоторую серверную таблицу базы данных, в которой хранятся сообщения и связанные с ними события. Все ящики полностью независимы, и каждая последовательность pts привязана ровно к одному ящику (см. ниже).

Объект [Update](/type/Update/) может содержать сведения сразу о _нескольких событиях_ (например, [updateDeleteMessages](/constructor/updateDeleteMessages/)). Именно поэтому у всех одиночных обновлений может присутствовать параметр `pts_count`, указывающий _количество событий_, содержащихся в полученном _обновлении_ (за некоторыми исключениями — в этом случае `pts_count` считается равным `0`).

У каждого [канала](/api/channel/#channels) и каждой [супергруппы](/api/channel/#supergroups) есть свой ящик сообщений и, как следствие, _своя последовательность событий_; личные чаты и [обычные группы](/api/channel/#basic-groups) одного пользователя имеют другую, _общую последовательность событий_.  
Секретные чаты, некоторые события ботов и прочие виды обновлений имеют ещё одну, _общую вторичную последовательность событий_.

Итак, чтобы корректно обрабатывать обновления, клиент обязан следить за целостностью следующих последовательностей:

-   Последовательность обновлений (seq)
    -   Последовательность общего ящика сообщений (pts)
    -   Вторичная последовательность событий (qts)
    -   Последовательность ящика сообщений канала 1 (pts)
    -   Последовательность ящика сообщений канала 2 (pts)
    -   Последовательность ящика сообщений канала 3 (pts)
    -   и так далее...

### Последовательности ID сообщений

```
// Message constructors
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
messageEmpty#90a6ca84 flags:# id:int peer_id:flags.0?Peer = Message;

// Updates related to messages in the common message queue
updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
updateEditMessage#e40370a3 message:Message pts:int pts_count:int = Update;
updateDeleteMessages#a20db0e5 messages:Vector<int> pts:int pts_count:int = Update;

// Updates related to channel/supergroup messages
updateNewChannelMessage#62ba04d9 message:Message pts:int pts_count:int = Update;
updateEditChannelMessage#1b3f4df7 message:Message pts:int pts_count:int = Update;
updateDeleteChannelMessages#c32d5b12 channel_id:long messages:Vector<int> pts:int pts_count:int = Update;

// Updates related to scheduled messages
updateNewScheduledMessage#39a51dfb message:Message = Update;
updateDeleteScheduledMessages#f2a71983 flags:# peer:Peer messages:Vector<int> sent_messages:flags.0?Vector<int> = Update;

// Updates related to quick-reply messages
updateQuickReplyMessage#3e050d0f message:Message = Update;
updateDeleteQuickReplyMessages#566fe7cd shortcut_id:int messages:Vector<int> = Update;
updateDeleteQuickReply#53e6f1ec shortcut_id:int = Update;

// Updates related to messages received via Telegram business connections
updateBotNewBusinessMessage#9ddb347c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
updateBotEditBusinessMessage#07df587c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
updateBotDeleteBusinessMessage#a02a982e connection_id:string peer:Peer messages:Vector<int> qts:int = Update;

updateBusinessBotCallbackQuery#1ea2fda7 flags:# query_id:long user_id:long connection_id:string message:Message reply_to_message:flags.2?Message chat_instance:long data:flags.0?bytes = Update;

// E2E message updates
updateNewEncryptedMessage#12bcbd9a message:EncryptedMessage qts:int = Update;
```

Среди множества обновлений, которые могут прийти из различных [ящиков сообщений »](#message-related-event-sequences), важнее всего обновления, связанные с **сообщениями**.

У сообщений есть и собственные последовательности идентификаторов (поле `id`) — независимые как от последовательностей `pts`/`qts` тех [ящиков сообщений](#message-related-event-sequences), которые содержат обновления о них, так и друг от друга:

-   Общая последовательность идентификаторов сообщений.

    Монотонно возрастает, применяется ко всем конструкторам [Message](/type/Message/), находящимся в личных чатах и [обычных группах](/api/channel/#basic-groups).

    Последовательность является общей для всех сообщений в личных чатах и [обычных группах](/api/channel/#basic-groups) в рамках текущего аккаунта, а это значит, что:

    -   Идентификаторы сообщений из общей последовательности будут одинаковыми во всех сессиях одного и того же аккаунта, то есть конкретное сообщение в конкретном личном чате или обычной группе будет иметь один и тот же идентификатор при просмотре из разных сессий одного аккаунта.
    -   Идентификаторы сообщений из общей последовательности **не** будут одинаковыми для разных аккаунтов, то есть конкретное сообщение в конкретном личном чате или обычной группе может иметь разный идентификатор при просмотре из разных аккаунтов.

    Вот наиболее важные обновления о сообщениях, принадлежащих общей последовательности идентификаторов сообщений:

    -   [updateNewMessage](/constructor/updateNewMessage/) — получено или отправлено новое входящее/исходящее сообщение, принадлежащее общей последовательности идентификаторов сообщений
    -   [updateEditMessage](/constructor/updateEditMessage/) — отредактировано сообщение, принадлежащее общей последовательности идентификаторов сообщений
    -   [updateDeleteMessages](/constructor/updateDeleteMessages/) — удалено сообщение, принадлежащее общей последовательности идентификаторов сообщений

    Учтите также, что следующие обновления могут приходить от [пользователей, подключённых к боту через бизнес-подключение »](/api/bots/connected-business-bots/): в этом случае сообщения, находящиеся в личных чатах и [обычных группах](/api/channel/#basic-groups), будут использовать общую последовательность идентификаторов сообщений подключённого пользователя, а **не** общую последовательность идентификаторов сообщений бота.

    -   [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/) — в одном из чатов подключённого пользователя получено или отправлено новое входящее/исходящее сообщение
    -   [updateBotEditBusinessMessage](/constructor/updateBotEditBusinessMessage/) — в одном из чатов подключённого пользователя отредактировано сообщение
    -   [updateBotDeleteBusinessMessage](/constructor/updateBotDeleteBusinessMessage/) — из одного из чатов подключённого пользователя удалено сообщение
-   Последовательности идентификаторов сообщений каналов и супергрупп.

    Монотонно возрастает, применяется ко всем конструкторам [Message](/type/Message/), находящимся в личных чатах и [обычных группах](/api/channel/#basic-groups).

    У каждого канала и каждой супергруппы своя последовательность.

    -   Идентификаторы сообщений канала или супергруппы будут одинаковыми во всех сессиях одного и того же аккаунта, то есть конкретное сообщение в конкретном канале или супергруппе будет иметь один и тот же идентификатор при просмотре из разных сессий одного аккаунта.
    -   Идентификаторы сообщений канала или супергруппы будут одинаковыми и для разных аккаунтов, то есть конкретное сообщение в конкретном канале или супергруппе будет иметь один и тот же идентификатор при просмотре из разных аккаунтов.

    Вот наиболее важные обновления о сообщениях, принадлежащих каналам и супергруппам:

    -   [updateNewChannelMessage](/constructor/updateNewChannelMessage/) — получено или отправлено новое входящее/исходящее сообщение канала или супергруппы
    -   [updateEditChannelMessage](/constructor/updateEditChannelMessage/) — отредактировано сообщение канала или супергруппы
    -   [updateDeleteChannelMessages](/constructor/updateDeleteChannelMessages/) — удалено сообщение канала или супергруппы

    Учтите также, что следующие обновления могут приходить от [пользователей, подключённых к боту через бизнес-подключение »](/api/bots/connected-business-bots/): в этом случае сообщения, находящиеся в каналах и супергруппах, будут использовать ту же последовательность идентификаторов, которую использует бот (и все остальные пользователи Telegram).

    -   [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/) — в одном из чатов подключённого пользователя получено или отправлено новое входящее/исходящее сообщение
    -   [updateBotEditBusinessMessage](/constructor/updateBotEditBusinessMessage/) — в одном из чатов подключённого пользователя отредактировано сообщение
    -   [updateBotDeleteBusinessMessage](/constructor/updateBotDeleteBusinessMessage/) — из одного из чатов подключённого пользователя удалено сообщение
-   Последовательность идентификаторов сообщений секретных чатов.

    [@term:random_id] **Не** возрастает монотонно: каждое сообщение секретного чата (представленное конструктором [DecryptedMessage](/constructor/decryptedMessage/), а **не** содержащим его [EncryptedMessage](/type/EncryptedMessage/)) однозначно определяется своим значением `random_id` — полностью случайным 64-битным целым числом, которое выбирает отправитель.

    У каждого секретного чата своя последовательность (одна общая для обеих сторон чата); порядок сообщений в секретном чате обеспечивается [порядковым номером](/api/end-to-end/seq_no/), а не идентификатором сообщения.

    Идентификаторы сообщений секретного чата, разумеется, одинаковы для обеих сторон секретного чата.

    Обновления об отправленных и полученных шифрованных сообщениях содержатся в [updateNewEncryptedMessage](/constructor/updateNewEncryptedMessage/).

-   Последовательность идентификаторов отложенных сообщений.

    Монотонно возрастает, применяется ко всем [отложенным сообщениям](/api/scheduled-messages/) лишь до тех пор, пока они находятся в очереди отложенной отправки; при отправке идентификатор сообщения сменится на идентификатор из общей последовательности идентификаторов сообщений либо из последовательности канала или супергруппы.

    У каждого канала, каждой супергруппы, каждой обычной группы и каждого личного чата своя последовательность (в отличие от обычных сообщений, где обычные группы и личные чаты используют одну общую последовательность).

    Вот наиболее важные обновления о сообщениях, находящихся в очереди отложенной отправки:

    -   [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/) — в очередь отложенной отправки добавлено новое сообщение
    -   [updateDeleteScheduledMessages](/constructor/updateDeleteScheduledMessages/) — сообщение удалено из очереди отложенной отправки
-   Последовательность идентификаторов [сообщений быстрых ответов »](/api/business/#quick-reply-shortcuts).

    Монотонно возрастает, применяется ко всем [сообщениям быстрых ответов](/api/scheduled-messages/), находящимся в шаблонах быстрых ответов; при отправке сообщение дублируется и получает новый идентификатор, который будет сгенерирован из общей последовательности идентификаторов сообщений либо из последовательности канала или супергруппы.

    Учтите, что отправка шаблона быстрого ответа не удаляет сообщения из шаблона: они остаются в нём, сохраняя тот же идентификатор сообщения в шаблоне.

    Все сообщения быстрых ответов из всех шаблонов используют одну и ту же последовательность идентификаторов.

    Вот наиболее важные обновления о сообщениях, принадлежащих шаблону быстрого ответа:

    -   [updateQuickReplyMessage](/constructor/updateQuickReplyMessage/) — в шаблон добавлено новое сообщение
    -   [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) — сообщение удалено из шаблона
    -   [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/) — удалены все сообщения, принадлежащие шаблону, вместе с самим шаблоном.

Идентификаторы сообщений используются во многих местах API для указания на сообщения, и _только_ идентификаторы сообщений каналов и супергрупп могут также использоваться для формирования [глубоких ссылок на сообщение »](/api/links/#message-links), ведущих на это сообщение.

Идентификаторы сообщений используются также для упорядочивания сообщений в чатах (кроме сообщений секретных чатов, где вместо них применяется [seqno](/api/end-to-end/seq_no/)).

Редактирование сообщения не меняет его идентификатор.

#### Обновления `updateMessageID`

```
updateMessageID#4e90bfd6 id:int random_id:long = Update;
updateStoryID#1bf335b9 id:int random_id:long = Update;
encryptedMessage#ed18c118 random_id:long chat_id:int date:int bytes:bytes file:EncryptedFile = EncryptedMessage;
encryptedMessageService#23734b06 random_id:long chat_id:int date:int bytes:bytes = EncryptedMessage;
sendMessageTextDraftAction#376d975c random_id:long text:TextWithEntities = SendMessageAction;
inputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;
inputStorePaymentPremiumGiveaway#160544ca flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentStarsGiveaway#751f08fa flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true stars:long boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long users:int = InputStorePaymentPurpose;
sponsoredPeer#c69708d3 flags:# random_id:bytes peer:Peer sponsor_info:flags.0?string additional_info:flags.1?string = SponsoredPeer;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
messages.requestEncryption#f64daf43 user_id:InputUser random_id:int g_a:bytes = EncryptedChat;
messages.sendEncrypted#44fa7a15 flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
messages.sendEncryptedFile#5559481d flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes file:InputEncryptedFile = messages.SentEncryptedMessage;
messages.sendEncryptedService#32d439a4 peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
messages.startBot#e6df7378 bot:InputUser peer:InputPeer random_id:long start_param:string = Updates;
messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
messages.sendScreenshotNotification#a1405817 peer:InputPeer reply_to:InputReplyTo random_id:long = Updates;
messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
messages.sendWebViewData#dc0242c8 bot:InputUser random_id:long button_text:string data:string = Updates;
messages.sendQuickReplyMessages#6c750de1 peer:InputPeer shortcut_id:int id:Vector<int> random_id:Vector<long> = Updates;
messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;
messages.viewSponsoredMessage#269e3643 random_id:bytes = Bool;
messages.clickSponsoredMessage#8235057e flags:# media:flags.0?true fullscreen:flags.1?true random_id:bytes = Bool;
messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
messages.createForumTopic#2f98c3d5 flags:# title_missing:flags.4?true peer:InputPeer title:string icon_color:flags.0?int icon_emoji_id:flags.3?long random_id:long send_as:flags.2?InputPeer = Updates;
payments.sendStarGiftOffer#8fb86b41 flags:# peer:InputPeer slug:string price:StarsAmount duration:int random_id:long allow_paid_stars:flags.0?long = Updates;
phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;
phone.createConferenceCall#7d0444bb flags:# muted:flags.0?true video_stopped:flags.2?true join:flags.3?true random_id:int public_key:flags.3?int256 block:flags.3?bytes params:flags.3?DataJSON = Updates;
phone.sendGroupCallMessage#b1d11410 flags:# call:InputGroupCall random_id:long message:TextWithEntities allow_paid_stars:flags.0?long send_as:flags.1?InputPeer = Updates;
stories.sendStory#8f9e6898 flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> music:flags.9?InputDocument = Updates;
stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;
```

Многие методы API принимают параметр `random_id`: он служит для того, чтобы сопоставить порождённое исходящее сообщение с вызовом метода, который его создал, — и тем самым определить, например, было ли сообщение успешно отправлено.

Обычно для определения того, отправлено сообщение или нет, достаточно самого ответа на метод. Однако если сервер удалит MTProto-сессию в промежутке между вызовом метода и формированием ответа, ответ на вызов теряется, и восстановить его невозможно.

Само по себе это не было бы большой бедой, потому что обычная [логика обработки обновлений »](#update-handling) всё равно восстановила бы (например) [updateNewMessage](/constructor/updateNewMessage/), порождённое вызовом [messages.sendMessage](/method/messages.sendMessage/), когда клиент создаст новую MTProto-сессию и вызовет getDifference. Но такое [updateNewMessage](/constructor/updateNewMessage/) уже не будет связано с породившим его [messages.sendMessage](/method/messages.sendMessage/), поскольку придёт в составе ответа [updates.getDifference](/method/updates.getDifference/).

Это значит, что клиент не сможет отметить [messages.sendMessage](/method/messages.sendMessage/) как успешно выполненный и (ошибочно) сочтёт сообщение неотправленным — даже если на деле оно доставлено. В результате в чате появятся две копии одного и того же сообщения: одна успешно отправленная, а другая помеченная как неотправленная.

Похожая ситуация возможна, если метод породит внутреннюю ошибку RPC (то есть 500) до того, как сформирован ответ, но уже после того, как сообщение успешно ушло получателю.

Все эти проблемы решает [updateMessageID](/constructor/updateMessageID/): его порождают все методы, которые принимают `random_id` и создают конструктор [Message](/type/Message/) в каком-либо чате. Это обновление содержит идентификатор созданного исходящего [Message](/type/Message/) и `random_id` того вызова метода, который породил сообщение.

Самое важное, что [updateMessageID](/constructor/updateMessageID/) доставляется как обычное обновление: даже если ответ на породивший его метод потеряется, обновление рано или поздно будет доставлено повторно через [логику обработки обновлений »](#update-handling) (например, посредством [updates.getDifference](/method/updates.getDifference/)).

Метод [messages.sendMultiMedia](/method/messages.sendMultiMedia/) принимает массив значений `random_id` внутри передаваемых конструкторов [inputSingleMedia](/constructor/inputSingleMedia/) и порождает ровно столько же обновлений [updateMessageID](/constructor/updateMessageID/).

Кроме того, сервер использует `random_id` для устранения дубликатов вызовов: если клиент попытается вызвать метод с таким `random_id`, который уже применялся в предыдущем вызове метода того же (или другого) типа к тому же пиру из любой сессии текущей учётной записи в любой момент в прошлом (использованные значения `random_id` хранятся на сервере и **не** устаревают), то вызов просто вернёт сообщения, порождённые предыдущим вызовом, вместо отправки нового сообщения; а если предыдущий вызов ещё выполняется (то есть сообщение сейчас формируется на сервере), будет выдана ошибка `RANDOM_ID_DUPLICATE`.

В некоторых случаях — например, для [messages.requestEncryption](/method/messages.requestEncryption/) — при передаче повторного `random_id` всегда выдаётся `RANDOM_ID_DUPLICATE` (вместо возврата ранее созданного секретного чата).

Конструктор [updateStoryID](/constructor/updateStoryID/) — это аналог [updateMessageID](/constructor/updateMessageID/) для [историй »](/api/stories/): он сопоставляет [StoryItem](/type/StoryItem/) с вызовом метода, который его породил.

С другой стороны, значения `random_id` в [живых черновиках »](/api/bots/ai/#live-response-streaming) **можно**, а часто и **нужно** использовать повторно, чтобы продолжать обновлять один и тот же живой черновик.

### Получение состояния

_Общее_ состояние обновлений представлено конструктором [updates.State](/type/updates.State/). При первом входе пользователя в аккаунт необходимо вызвать [updates.getState](/method/updates.getState/) и сохранить последнее состояние обновлений (это будет не абсолютное начальное состояние, а лишь актуальное на текущий момент). Общее состояние обновлений можно также получить из [updates.differenceTooLong](/constructor/updates.differenceTooLong/).

_Состояние обновлений канала_ представлено просто значением `pts` последовательности событий: при первом входе начальное состояние канала можно получить из конструктора [dialog](/constructor/dialog/) при загрузке диалогов, из [полной информации о канале](/constructor/channelFull/), либо получить [в виде обновления updateChannelTooLong](/constructor/updateChannelTooLong/).

_Вторичное состояние обновлений_ представлено значением `qts` последовательности секретных событий; оно содержится в [updates.State](/type/updates.State/) _общего состояния обновлений_.

_Состояние последовательности Updates_ представлено полями `date` и `seq` _последовательности Updates_; оно содержится в [updates.State](/type/updates.State/) _общего_ состояния обновлений.

### Обработка обновлений

Обработка обновлений в клиентах Telegram состоит из приёма событий, проверки того, что в соответствующей последовательности событий не возникло пропусков и ни одно событие не было потеряно (проверка ведётся по локально сохранённому состоянию), и последующего обновления локально сохранённого состояния по полученным параметрам.

Получив посылку с сериализованными обновлениями, клиент прежде всего должен обойти все вложенные объекты [Update](/type/Update/) и проверить, относятся ли они к какой-либо из последовательностей ящиков сообщений (то есть содержат ли параметры `pts` или `qts`). Такие обновления обрабатываются отдельно, с учётом соответствующего локального состояния и новых значений `pts`/`qts`. [Подробности ниже »](#pts-checking-and-applying)

После обработки обновлений из ящиков сообщений клиент должен обработать оставшиеся обновления, если они есть, с учётом `seq`. [Подробности ниже »](#seq-checking-and-applying)

#### `pts`: проверка и применение

Здесь `local_pts` — локальное состояние, `pts` — состояние на сервере, `pts_count` — число событий в обновлении.

-   Если `local_pts + pts_count === pts`, обновление можно применить.
-   Если `local_pts + pts_count > pts`, обновление уже было применено и его следует проигнорировать.
-   Если `local_pts + pts_count < pts`, образовался пропуск в обновлениях, который необходимо [восполнить](#recovering-gaps).

Для примера предположим, что у клиента для канала `123456789` сохранено следующее локальное состояние:

```
local_pts = 131
```

Теперь предположим, что от канала `123456789` получено обновление [updateNewChannelMessage](/constructor/updateNewChannelMessage/) с `pts = 132` и `pts_count=1`. Поскольку `local_pts + pts_count === pts`, общее число событий с момента последнего сохранённого состояния действительно равно `pts_count`: значит, обновление можно безопасно принять, а серверное значение `pts` — применить:

```
local_pts = 132
```

Поскольку:

-   `pts` обозначает состояние сервера **после** того, как события о новом сообщении в канале были сгенерированы;
-   `pts_count` обозначает число событий в обновлении о новом сообщении в канале;
-   состояние сервера **до того, как было сгенерировано событие о новом сообщении в канале**, должно быть равно `pts_before = pts - pts_count = 131`, что как раз совпадает с нашим локальным состоянием.

Теперь предположим, что от канала `123456789` получено обновление [updateNewChannelMessage](/constructor/updateNewChannelMessage/) с `pts = 132` и `pts_count=1`. Поскольку `local_pts + pts_count > pts` (`133 > 132`), обновление пропускается: оно уже было обработано (более того, текущее значение `local_pts` было установлено этим же самым обновлением, а прислано оно повторно из-за проблем с сетью или иных сбоев).

Теперь предположим, что от канала `123456789` получено обновление [updateDeleteChannelMessages](/constructor/updateDeleteChannelMessages/) с `pts = 140` и `pts_count=5`. Поскольку `local_pts + pts_count < pts` (`137 < 140`), это означает, что часть обновлений была пропущена и пропуск необходимо восполнить.

##### `qts`: секретные чаты и боты

Тот же алгоритм, что применяется к [обновлениям с pts](#pts-checking-and-applying), используется и для секретных чатов, а также для некоторых обновлений ботов, но вместо `pts` там фигурирует `qts`, а события никогда не группируются, поэтому `qts_count` всегда равен 1 (по этой причине такое избыточное поле в обновлениях отсутствует).

#### `seq`: проверка и применение

На верхнем уровне при обработке полученных конструкторов [updates](/constructor/updates/) и [updatesCombined](/constructor/updatesCombined/) возможны четыре случая:

-   Если `seq_start === 0`, обновления можно применить: это особый случай для обновлений, которые не упорядочены и должны применяться сразу же.
-   Если `local_seq + 1 === seq_start`, обновления можно применить.
-   Если `local_seq + 1 > seq_start`, обновления уже были применены и их следует проигнорировать.
-   Если `local_seq + 1 < seq_start`, образовался пропуск в обновлениях, который необходимо [восполнить](#recovering-gaps) (нужно использовать updates.getDifference, как и для общей и секретной последовательностей событий).

Если обновления были применены, локальное _состояние обновлений_ необходимо обновить значениями `seq` (если оно не равно 0) и `date` из конструктора.

Для всех остальных конструкторов типа [Updates](/type/Updates/) проверять `seq` или изменять локальное состояние не требуется.

#### `version`: проверка и применение

Некоторые обновления, относящиеся к обычным группам или групповым звонкам, содержат целочисленное поле `version`, которое следует использовать так же, как значения `pts`/`qts`, — для отбрасывания дубликатов и обновления устаревших сведений о чате, как описано [здесь (обычные группы) »](/api/peers/#basic-group-updates) и [здесь (групповые звонки) »](/api/group-calls/#applying-group-call-updates).

#### `next_offset`: проверка и применение

Обновления, относящиеся к [блокчейну конференций со сквозным шифрованием](/api/end-to-end/group-calls/), содержат целочисленное поле `next_offset`, которое следует использовать так же, как значения `pts`, — для отбрасывания дублирующихся входящих блоков, как описано [здесь »](/api/end-to-end/group-calls/#handling-updates).

### Восполнение пропусков

Для этого необходимо вызвать [updates.getDifference](/method/updates.getDifference/) (общее/секретное состояние) или [updates.getChannelDifference](/method/updates.getChannelDifference/) (состояние канала), передав соответствующие локальные состояния.

Получать обновления вручную с помощью перечисленных выше методов требуется в следующих ситуациях:

-   При запуске следует вызывать _только_ [updates.getDifference](/method/updates.getDifference/), чтобы получить обновления, пришедшие, пока клиент был не в сети (желательно с некоторыми флагами, снижающими нагрузку на сервер, — см. документацию метода).  
    Вызывать [updates.getChannelDifference](/method/updates.getChannelDifference/) вручную для всех каналов при запуске _не_ нужно.  
    Вместо этого вызов [updates.getChannelDifference](/method/updates.getChannelDifference/) будет инициирован автоматически — только для тех каналов, которым требуется догнать состояние, — набором обновлений [updateChannelTooLong](/constructor/updateChannelTooLong/), которые вернёт вызов [updates.getDifference](/method/updates.getDifference/).
-   Потеря синхронизации: обнаружен пропуск в **seq** / **pts** / **qts** / **version** (как описано выше). Учтите, что в такой ситуации бывает полезно подождать до 0,5 секунды, так как недостающие обновления могли просто прийти от сервера не по порядку и поступят чуть позже, закрыв пропуск. Если в течение 0,5 секунды пропуск не закрывается другим входящим обновлением, следует переходить к логике ручного восполнения пропусков.
-   Потеря сессии на сервере: клиент получает [уведомление о создании новой сессии](/mtproto/service_messages/#new-session-creation-notification). Причиной может быть сборка мусора на сервере MTProto или его перезапуск.
-   Некорректное обновление: клиент не может десериализовать полученные данные.
-   Неполное обновление: клиенту не хватает данных о чате или пользователе из одного из сокращённых конструкторов, например [updateShortChatMessage](/constructor/updateShortChatMessage/) и подобных.
-   Длительное отсутствие обновлений: нет обновлений в течение 15 минут или дольше.
-   Сервер сам просит клиента запросить разницу — обновлением [updateChannelTooLong](/constructor/updateChannelTooLong/) или [updatesTooLong](/constructor/updatesTooLong/).

Если при вызове [updates.getDifference](/method/updates.getDifference/) в ответ возвращается конструктор [updates.differenceSlice](/constructor/updates.differenceSlice/), значит полная разница оказалась слишком велика, чтобы передать её за один запрос. Промежуточное состояние **intermediate\_state** необходимо сохранить на клиенте и повторить запрос, используя промежуточное состояние в качестве текущего.

[@term:final] Чтобы получить разницу обновлений канала, используется [updates.getChannelDifference](/method/updates.getChannelDifference/).  
Если разница слишком велика, чтобы передать её за один запрос, флаг `final` (признак того, что разница отдана целиком и продолжать выборку не нужно) в результате **не** выставляется (см. [документацию](/type/updates.ChannelDifference/)).  
Промежуточное состояние, представленное значением **pts**, необходимо сохранить на клиенте и повторить запрос, используя промежуточное состояние в качестве текущего.

Из соображений производительности и ради удобства пользователя клиенты могут задавать число обновлений, возвращаемых каждым вызовом при постраничной выборке, с помощью параметра `pts_total_limit` метода [updates.getDifference](/method/updates.getDifference/) и параметра `limit` метода [updates.getChannelDifference](/method/updates.getChannelDifference/).

Рекомендуется использовать ограничение, равное `10-100` для каналов и `1000-10000` в остальных случаях.

Как уже говорилось выше, заданное ограничение **не** ограничивает общее число обновлений, которые можно получить через getChannelDifference/getDifference: оно ограничивает лишь число обновлений, возвращаемых каждым отдельным вызовом getDifference при постраничном проходе по ящику сообщений, когда каждый раз передаётся значение `pts`/`qts`, полученное от предыдущего вызова, — и так до тех пор, пока не вернётся результат с флагом `final` либо результат, не являющийся срезом: это означает, что новых обновлений больше нет.

Не вызывайте [updates.getChannelDifference](/method/updates.getChannelDifference/) повторно, если возвращённая разница помечена как `final`, — за исключением случая, когда [пользователь открыл канал или супергруппу »](#subscribing-to-updates-of-channels-supergroups).

#### Восполнение пропусков для очень старых сообщений

У различных [ящиков сообщений](#event-sequences) (общий ящик, ящики каналов и т. д.) есть фиксированный размер `size`: точный размер ящика — деталь серверной реализации, полагаться на которую клиентам не следует, но обычно он весьма велик: 100000 для каналов и 5000000 для общего ящика сообщений.

Очень старые сообщения с `pts < (latestPts - size)` удаляются из ящика сообщений, и получить их через [updates.getChannelDifference](/method/updates.getChannelDifference/)/[updates.getDifference](/method/updates.getDifference/) больше нельзя: вызов этих методов с `pts < (latestPts - size)` вернёт конструктор [updates.channelDifferenceTooLong](/constructor/updates.channelDifferenceTooLong/)/[updates.differenceTooLong](/constructor/updates.differenceTooLong/), и клиент обязан обработать это, [заново запросив последнее состояние этого ящика](#fetching-state) и возобновив получение обновлений с этого состояния, а при необходимости — вручную восполнив пропуски в более старых сообщениях с помощью [channels.getMessages](/method/channels.getMessages/) и [messages.getMessages](/method/messages.getMessages/) (то есть если пользователь прокрутит историю сообщений или чата достаточно далеко назад).

Учтите, что обновления [updatesTooLong](/constructor/updatesTooLong/)/[updateChannelTooLong](/constructor/updateChannelTooLong/), напротив, **не** обязательно означают, что достигнут предел размера ящика сообщений: они лишь сообщают, что обновлений в очереди ящика накопилось слишком много, чтобы доставить их пассивно через сокет, а для получения разницы можно как обычно вызвать [updates.getDifference](/method/updates.getDifference/)/[updates.getChannelDifference](/method/updates.getChannelDifference/).

Обратите внимание на тонкое различие между обычным восполнением пропусков через getChannelDifference/getDifference и восполнением пропусков для действительно старых сообщений (`< (latestPts - size)`) через [channels.getMessages](/method/channels.getMessages/)/[messages.getMessages](/method/messages.getMessages/):

-   При обычной логике восполнения пропусков через getChannelDifference/getDifference достаточно просто хранить последнее известное значение PTS и запрашивать новые обновления, передавая это значение в getDifference, постранично проходя по обновлениям до тех пор, пока клиент не догонит состояние.

    Если у клиента есть база данных сообщений, её можно наполнять непосредственно логикой обработки обновлений (как через пассивные обновления, так и через логику getDiff), применяя обновления одно за другим по мере их поступления (после переупорядочивания и устранения дубликатов обычной логикой обработки обновлений, описанной выше) и просто сохраняя сообщения в базу, используя в качестве первичного ключа [идентификатор сообщения](#message-id-sequences) (общий ящик сообщений) либо [идентификатор пира + идентификатор сообщения](#message-id-sequences) (ящики сообщений каналов, секретные чаты).

    При обычной логике восполнения пропусков не нужно беспокоиться о пропусках в последовательности идентификаторов сообщений, обнаруженных в локальной базе данных сообщений: гарантируется, что getDifference доставит все обновления, необходимые для наполнения базы, а пропуски в идентификаторах сообщений вызваны (например) удалёнными сообщениями и «восполняться» не должны.

-   А вот при логике восполнения пропусков для этого крайнего случая — через [channels.getMessages](/method/channels.getMessages/)/[messages.getMessages](/method/messages.getMessages/) — пропуски в идентификаторах сообщений, обнаруженные в локальной базе данных сообщений, сразу становятся проблемой: законные ли это пропуски, вызванные удалёнными сообщениями, которые следует игнорировать, — или же пропуски, вызванные невосполнимой дырой в getDifference, которые необходимо закрыть с помощью [channels.getMessages](/method/channels.getMessages/)/[messages.getMessages](/method/messages.getMessages/), поскольку за ними могут скрываться настоящие, неудалённые сообщения?

    Один из множества способов справиться с этим — отслеживать известные диапазоны идентификаторов сообщений, не содержащие пропусков, с помощью структуры данных вроде дерева отрезков или любой другой структуры, позволяющей эффективно проверить, входит ли идентификатор сообщения в какой-либо из диапазонов.

    Все сообщения, принадлежащие личным чатам и [обычным группам »](/api/channel/#basic-groups), хранятся в одном-единственном экземпляре такой структуры данных (поскольку у них общая [последовательность идентификаторов](#message-id-sequences)).  
    Сообщения, принадлежащие супергруппам и каналам, хранятся каждое в своём экземпляре структуры данных, по одному на канал/супергруппу (так как у каждого канала и каждой супергруппы своя независимая [последовательность идентификаторов](#message-id-sequences)).

    Например, несколько наивная и неэффективная реализация могла бы хранить идентификаторы сообщений `[start_msg_id, end_msg_id]` для корректных диапазонов в простом списке:

    ```
    struct {
      list: List<Pair[int, int]>,
      pending: bool,
    }
    ```

    Структура сначала инициализируется пустым списком и значением `pending`, равным true.

    Получение сообщения через сокет или через getDifference/getChannelDifference приводит к следующим эффектам:

    -   Если `pending` равно true, первое обработанное сообщение атомарно добавит в `list` новую пару `Pair{}` (у которой оба элемента диапазона равны идентификатору сообщения) и установит `pending` в false.
    -   Если `pending` равно true, входящие сообщения атомарно обновят `end_msg_id` последней пары `Pair` в `list` (присвоив ему идентификатор сообщения).
    -   Если при вызове getChannelDifference/getDifference обнаружен невосполнимый пропуск, `pending` устанавливается в `true`, состояние обновлений (pts) запрашивается заново с нуля, а getChannelDifference/getDifference вызывается повторно с новым значением pts.

    [@note] В оригинале первые два пункта начинаются с одного и того же условия «если `pending` равно true». По смыслу второй пункт описывает противоположный случай: диапазон продлевается, когда `pending` уже сброшен в false, то есть первая пара в списке создана предыдущим пунктом.

    При прокрутке истории сообщений назад или при просмотре контекста вокруг отдельных сообщений всегда отслеживайте диапазон отображаемых сообщений, и если обнаружен пропуск (либо потому, что диапазонов больше нет, либо потому, что диапазон изменился), восполните его вызовом:

    -   [messages.getMessages](/method/messages.getMessages/) — для всех обычных групп и личных чатов, передавая до 200 идентификаторов из диапазона, который требуется восполнить, и повторяя вызов метода, пока нужный диапазон не будет получен.  
        Этот метод **не** ограничен размером общего ящика сообщений.
    -   [channels.getMessages](/method/channels.getMessages/) — для отдельных супергрупп и каналов, передавая до 200 идентификаторов из диапазона, который требуется восполнить, и повторяя вызов метода, пока нужный диапазон не будет получен.  
        Этот метод **не** ограничен размером ящика сообщений канала, однако **очень** старые сообщения каналов и супергрупп всё же могут оказаться недоступны. .

    Сообщения, возвращённые этими методами, следует надлежащим образом загрузить в базу данных сообщений и обновить ими существующие диапазоны (либо создать новые, если возвращённый диапазон не соприкасается с другими существующими диапазонами).

    Для удалённых или иным образом непредставимых сообщений эти методы возвращают конструкторы-заглушки [messageEmpty](/constructor/messageEmpty/), так что весь запрошенный диапазон возвращается целиком, тем или иным образом.

    Сообщения, полученные другими методами, например [messages.getHistory](/method/messages.getHistory/) (то есть не только теми, что возвращают [Updates](/type/Updates/) и направляются в обычную логику устранения дубликатов и обработки обновлений), также могут расширять или порождать диапазоны.

    Учтите, однако, что [messages.getHistory](/method/messages.getHistory/) **нельзя** использовать для восполнения пропусков в **каналах и супергруппах**, так как этот метод тоже ограничен размером ящика сообщений канала.

### Подписка на обновления каналов и супергрупп

_Обычно_ API сам присылает пассивные обновления (то есть отдельные конструкторы [Updates](/type/Updates/) прямо в сокет) для каналов и супергрупп, участником которых является пользователь или бот.

Однако в некоторых случаях API может перестать присылать обновления для отдельных каналов и супергрупп (или присылать их реже), поэтому клиенты (только пользовательские аккаунты) должны дополнительно периодически вызывать [updates.getChannelDifference](/method/updates.getChannelDifference/) для тех каналов и супергрупп, которые пользователь просматривает в данный момент (то есть явно открыл в одной или нескольких вкладках или окнах).

Если возвращённая разница не помечена как `final`, метод следует немедленно вызвать с новыми параметрами — [как обычно](#recovering-gaps).

Если возвращённая разница помечена как `final`, а пользователь всё ещё просматривает сообщения супергруппы или канала (то есть в отдельных вкладках или окнах), [updates.getChannelDifference](/method/updates.getChannelDifference/) следует вызвать заново через `timeout` секунд (если этот флаг задан; иначе — через одну секунду).

Этот же механизм позволяет включить _пассивный_ приём обновлений от каналов и супергрупп, участником которых мы **не** являемся: если указанный канал или супергруппа публичны либо приватны, но временно доступны на ограниченный срок благодаря [chatInvitePeek](/constructor/chatInvitePeek/), API начнёт пассивно рассылать обновления (то есть отдельные конструкторы [Updates](/type/Updates/) в сокет — так же, как это уже происходит для обычных каналов и супергрупп, к которым мы присоединились) во все активные сессии до тех пор, пока хотя бы одна из сессий продолжает периодически вызывать [updates.getChannelDifference](/method/updates.getChannelDifference/) — каждые `timeout` секунд (значение возвращает сам метод), или каждую секунду, если флаг `timeout` в ответе отсутствует, или немедленно с новыми параметрами, если возвращённая разница не помечена как `final`.

Как только пользователь закрывает канал или супергруппу, клиентам следует прекратить опрос через [updates.getChannelDifference](/method/updates.getChannelDifference/): API _может_ продолжать пассивно присылать обновления **только** в том случае, если пользователь состоит в этом канале или супергруппе.

Кроме того, клиентам следует ограничить десятью максимальное число каналов и супергрупп, опрашиваемых описанным выше способом (то есть если пользователь открыл 11 окон с 11 разными каналами, короткий опрос через [updates.getChannelDifference](/method/updates.getChannelDifference/) выполняется только для первых десяти).

### Примеры реализаций

Реализации также должны позаботиться о том, чтобы откладывать обновления, приходящие через сокет, пока восполняются пропуски в последовательностях событий и Updates, и чтобы не запускать восполнение пропусков в одной и той же последовательности повторно, пока предыдущее не завершилось.

Примеры реализаций: [tdlib](https://github.com/tdlib/td), [MadelineProto](https://github.com/danog/MadelineProto).

Интересный и простой способ реализовать это без разнообразных блокировок — использовать фоновые циклы, как сделано в [MadelineProto »](https://docs.madelineproto.xyz/docs/UPDATES_INTERNAL.html).

### [PUSH-уведомления об обновлениях](/api/push-updates/)

Если в момент события у клиента нет активного соединения, пригодятся также [PUSH-уведомления](/api/push-updates/).
