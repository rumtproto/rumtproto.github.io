---
title: "messages.sendMessage"
original: "https://core.telegram.org/method/messages.sendMessage"
section: ref
kind: method
description: "Отправляет сообщение в чат"
layout: layout.njk
---

# messages.sendMessage

Отправляет сообщение в чат

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>no_webpage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы отключить создание предпросмотра веб-страницы</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Отправить это сообщение без звука (без уведомлений для получателей)</td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Отправить это сообщение как фоновое</td></tr><tr><td><strong>clear_draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Очистить поле черновика</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Только для ботов: запрещает пересылку и сохранение сообщений, даже если в чате назначения не включена <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">защита контента</a></td></tr><tr><td><strong>update_stickersets_order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/constructor/true">true</a></td><td>Перемещать ли использованные наборы стикеров наверх, <a href="/api/stickers#recent-stickersets">подробнее об этом флаге »</a></td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>allow_paid_floodskip</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Только для ботов: если установлено, разрешает отправлять до 1000 сообщений в секунду, игнорируя <a href="/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once">ограничения на рассылку</a>, за плату 0,1 Telegram Stars за сообщение. Соответствующие Stars будут списаны с баланса бота.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Адресат, которому будет отправлено сообщение</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Если установлено, указывает, что сообщение следует отправить в ответ на указанное сообщение или историю.<br>Также используется для цитирования других сообщений.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Уникальный идентификатор сообщения на стороне клиента, необходимый для предотвращения повторной отправки сообщения. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup">ReplyMarkup</a></td><td>Разметка ответа для отправки кнопок бота</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления</a> сообщения для отправки форматированного текста</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Дата отправки для <a href="/api/scheduled-messages">отложенных сообщений</a></td></tr><tr><td><strong>schedule_repeat_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/type/int">int</a></td><td>После отправки это сообщение будет автоматически запланировано на повторную отправку через указанное число секунд; подробнее о повторяющихся отложенных сообщениях см. <a href="/api/scheduled-messages#repeating-scheduled-messages">здесь »</a>.</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/InputPeer">InputPeer</a></td><td>Отправить это сообщение от имени указанного пира</td></tr><tr><td><strong>quick_reply_shortcut</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/InputQuickReplyShortcut">InputQuickReplyShortcut</a></td><td>Вместо этого добавить сообщение в указанный <a href="/api/business#quick-reply-shortcuts">шаблон быстрого ответа »</a>.</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/long">long</a></td><td>Задаёт <a href="/api/effects">эффект сообщения »</a>, применяемый к сообщению.</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/type/long">long</a></td><td>Для <a href="/api/paid-messages">платных сообщений »</a> указывает количество <a href="/api/stars">Telegram Stars</a>, которое пользователь согласился заплатить за отправку сообщения.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.22?<a href="/type/SuggestedPost">SuggestedPost</a></td><td>Используется, чтобы <a href="/api/suggested-posts">предложить пост каналу; подробнее о полном сценарии см. здесь »</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ADMIN_RIGHTS_EMPTY</td><td>В конструкторе chatAdminRights, переданном в keyboardButtonRequestPeer.peer_type.user_admin_rights, не задано ни одного права (то есть flags равно 0).</td></tr><tr><td>406</td><td>ALLOW_PAYMENT_REQUIRED</td><td>Этот пир принимает только <a href="/api/paid-messages">платные сообщения&nbsp;»</a>: эта ошибка возвращается только для старых слоёв без поддержки платных сообщений, поэтому для работы с платными сообщениями клиент необходимо обновить. .</td></tr><tr><td>403</td><td>ALLOW_PAYMENT_REQUIRED_%d</td><td>Этот пир взимает %d <a href="/api/stars">Telegram Stars</a> за сообщение, но параметр <code>allow_paid_stars</code> не был задан либо его значение меньше %d.</td></tr><tr><td>400</td><td>BALANCE_TOO_LOW</td><td>Транзакцию невозможно завершить, так как текущий <a href="/api/stars">баланс Telegram Stars</a> слишком мал.</td></tr><tr><td>400</td><td>BOT_DOMAIN_INVALID</td><td>Недействительный домен бота.</td></tr><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Через текущее <a href="/api/business#connected-bots">бизнес-подключение</a> нельзя отправлять сообщения указанному пиру.</td></tr><tr><td>400</td><td>BUSINESS_PEER_USAGE_MISSING</td><td>Нельзя отправить сообщение пользователю через <a href="/api/business#connected-bots">бизнес-подключение</a>, если этот пользователь недавно нам не писал.</td></tr><tr><td>400</td><td>BUTTON_COPY_TEXT_INVALID</td><td>Указанное значение <a href="/constructor/keyboardButtonCopy">keyboardButtonCopy</a>.<code>copy_text</code> недействительно.</td></tr><tr><td>400</td><td>BUTTON_DATA_INVALID</td><td>Данные одной или нескольких переданных вами кнопок недействительны.</td></tr><tr><td>400</td><td>BUTTON_ID_INVALID</td><td>Указанный идентификатор кнопки недействителен.</td></tr><tr><td>400</td><td>BUTTON_TYPE_INVALID</td><td>Недопустимый тип одной или нескольких переданных вами кнопок.</td></tr><tr><td>400</td><td>BUTTON_URL_INVALID</td><td>Недействительный URL кнопки.</td></tr><tr><td>400</td><td>BUTTON_USER_INVALID</td><td>Значение <code>user_id</code>, переданное в inputKeyboardButtonUserProfile, недействительно!</td></tr><tr><td>400</td><td>BUTTON_USER_PRIVACY_RESTRICTED</td><td>Настройка приватности пользователя, указанного в кнопке <a href="/constructor/inputKeyboardButtonUserProfile">inputKeyboardButtonUserProfile</a>, не позволяет создать такую кнопку.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel#monoforums">Монофорумы</a> не поддерживают эту возможность.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_FORWARDS_RESTRICTED</td><td>Нельзя пересылать сообщения из защищённого чата.</td></tr><tr><td>403</td><td>CHAT_GUEST_SEND_FORBIDDEN</td><td>Прежде чем комментировать, необходимо вступить в группу обсуждения; подробнее см. <a href="/api/discussion#requiring-users-to-join-the-group">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>CHAT_RESTRICTED</td><td>Вы не можете отправлять сообщения в этот чат: на вас наложены ограничения.</td></tr><tr><td>403</td><td>CHAT_SEND_PLAIN_FORBIDDEN</td><td>В этом чате нельзя отправлять сообщения без медиа (текстовые).</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>400</td><td>EFFECT_CHAT_INVALID</td><td><a href="/api/effects">Эффекты</a> сообщений можно использовать только в личных чатах один на один, однако вызывающая сторона попыталась отправить сообщение с эффектом в группу или канал.</td></tr><tr><td>400</td><td>ENCRYPTION_DECLINED</td><td>Секретный чат был отклонён.</td></tr><tr><td>400</td><td>ENTITIES_TOO_LONG</td><td>Вы указали слишком много сущностей оформления текста.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>Одно из указанных <a href="/api/entities#entity-length">смещений или значений длины сущности оформления</a> недействительно; о том, как правильно вычислять смещение и длину сущности, см. <a href="/api/entities#entity-length">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>ENTITY_DATE_FORMAT_INVALID</td><td>У одного из переданных объектов messageEntityFormattedDate недопустимый формат (то есть недопустимое сочетание флагов формата).</td></tr><tr><td>400</td><td>ENTITY_DATE_INVALID</td><td>У одного из переданных объектов messageEntityFormattedDate указана недопустимая дата: допустимы значения от <code>0</code> до текущей даты плюс 1098 дней (<code>time()+1098*86400</code>).</td></tr><tr><td>400</td><td>ENTITY_DATE_TOO_LONG</td><td>Максимальный фрагмент текста, который может быть охвачен сущностью даты, составляет 31 кодовую единицу UTF-16, если установлен хотя бы один из флагов форматирования даты, и 127 кодовых единиц UTF-16 в противном случае. .</td></tr><tr><td>400</td><td>ENTITY_MENTION_USER_INVALID</td><td>Вы упомянули недействительного пользователя.</td></tr><tr><td>400</td><td>FROM_MESSAGE_BOT_DISABLED</td><td>Боты не могут использовать конструкторы fromMessage min.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>Указанное сообщение пусто.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>Указанное сообщение слишком длинное.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>500</td><td>MSG_WAIT_FAILED</td><td>Вызов, окончания которого ожидал этот запрос, вернул ошибку.</td></tr><tr><td>406</td><td>PAYMENT_UNSUPPORTED</td><td>Подробное описание ошибки будет получено отдельно, как описано <a href="/api/errors#406-not-acceptable">здесь&nbsp;»</a>.</td></tr><tr><td>404</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PEER_TYPES_INVALID</td><td>Переданное поле <a href="/constructor/keyboardButtonSwitchInline">keyboardButtonSwitchInline</a>.<code>peer_types</code> недействительно.</td></tr><tr><td>400</td><td>PINNED_DIALOGS_TOO_MUCH</td><td>Слишком много закреплённых диалогов.</td></tr><tr><td>400</td><td>POLL_OPTION_INVALID</td><td>Указан недопустимый вариант ответа в опросе.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>406</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>Чтобы отправить сообщение этому пользователю, нужна <a href="/api/premium">подписка Telegram Premium</a>.</td></tr><tr><td>400</td><td>QUICK_REPLIES_BOT_NOT_ALLOWED</td><td><a href="/api/business#quick-reply-shortcuts">Быстрые ответы</a> недоступны ботам.</td></tr><tr><td>400</td><td>QUICK_REPLIES_TOO_MUCH</td><td>Можно создать не более <a href="/api/config#quick-replies-limit">appConfig.<code>quick_replies_limit</code></a> шаблонов быстрых ответов, лимит достигнут.</td></tr><tr><td>400</td><td>QUOTE_TEXT_INVALID</td><td>Указанное поле <code>reply_to</code>.<code>quote_text</code> недействительно.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>Вы передали случайный идентификатор, который уже использовался.</td></tr><tr><td>400</td><td>RANDOM_ID_EMPTY</td><td>Пустой случайный идентификатор.</td></tr><tr><td>400</td><td>REPLY_MARKUP_INVALID</td><td>Указанная разметка ответа недействительна.</td></tr><tr><td>400</td><td>REPLY_MARKUP_TOO_LONG</td><td>Указанное значение reply_markup слишком длинное.</td></tr><tr><td>400</td><td>REPLY_MESSAGES_TOO_MUCH</td><td>Каждый шаблон быстрого ответа может содержать не более <a href="/api/config#quick-reply-messages-limit">appConfig.<code>quick_reply_messages_limit</code></a> сообщений, лимит достигнут.</td></tr><tr><td>400</td><td>REPLY_MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения, на которое даётся ответ, недействителен.</td></tr><tr><td>400</td><td>REPLY_TO_INVALID</td><td>Указанное поле <code>reply_to</code> недействительно.</td></tr><tr><td>400</td><td>REPLY_TO_MONOFORUM_PEER_INVALID</td><td>Указанное значение inputReplyToMonoForum.monoforum_peer_id недействительно.</td></tr><tr><td>400</td><td>REPLY_TO_USER_INVALID</td><td>Пользователь, которому даётся ответ, недействителен.</td></tr><tr><td>400</td><td>SCHEDULE_BOT_NOT_ALLOWED</td><td>Боты не могут планировать отправку сообщений.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_TOO_LATE</td><td>Нельзя запланировать сообщение так далеко в будущем.</td></tr><tr><td>400</td><td>SCHEDULE_STATUS_PRIVATE</td><td>Нельзя запланировать отправку до появления пользователя в сети, если время его последнего посещения скрыто настройками приватности.</td></tr><tr><td>400</td><td>SCHEDULE_TOO_MUCH</td><td>Слишком много отложенных сообщений.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>Вы не можете отправлять сообщения от имени указанного пира.</td></tr><tr><td>420</td><td>SLOWMODE_WAIT_%d</td><td>В этом чате включён медленный режим: подождите %d секунд перед отправкой следующего сообщения в этот чат.</td></tr><tr><td>400</td><td>STORIES_NEVER_CREATED</td><td>Этот пир ни разу не публиковал историй.</td></tr><tr><td>400</td><td>STORY_ID_INVALID</td><td>Указанный идентификатор истории недействителен.</td></tr><tr><td>400</td><td>SUGGESTED_POST_AMOUNT_INVALID</td><td>Указанная цена предлагаемого поста недопустима.</td></tr><tr><td>400</td><td>SUGGESTED_POST_PEER_INVALID</td><td>Нельзя отправлять предлагаемые посты пирам, которые не являются <a href="/api/monoforum">монофорумами</a>.</td></tr><tr><td>406</td><td>TOPIC_CLOSED</td><td>Эта тема закрыта, отправлять в неё сообщения больше нельзя.</td></tr><tr><td>406</td><td>TOPIC_DELETED</td><td>Указанная тема была удалена.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>400</td><td>USER_BOT_TO_BOT_DISABLED</td><td>Обмен сообщениями между ботами отключён, поскольку один из двух ботов не включил настройку Bot to Bot в @BotFather.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr><tr><td>400</td><td>USER_IS_BOT</td><td>Боты не могут отправлять сообщения другим ботам.</td></tr><tr><td>400</td><td>WC_CONVERT_URL_INVALID</td><td>Недействительный URL преобразования WC.</td></tr><tr><td>400</td><td>YOU_BLOCKED_USER</td><td>Вы заблокировали этого пользователя.</td></tr></tbody></table>

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.

#### [Bots FAQ — частые вопросы о ботах](https://core.telegram.org/bots/faq)

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Отложенные сообщения](/api/scheduled-messages/)

Telegram позволяет планировать отправку сообщений

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.

#### [keyboardButtonCopy](/constructor/keyboardButtonCopy/)

Кнопка копирования в буфер обмена

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты обязаны скопировать `copy_text` в буфер обмена.

#### [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/)

Кнопка, ведущая непосредственно в профиль пользователя

Используйте этот конструктор, чтобы отправить кнопку [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) в [инлайн-клавиатуре](https://core.telegram.org/bots/features#inline-keyboards).

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.

#### [Обработка ошибок](/api/errors/)

Как правильно обрабатывать ошибки, возвращаемые API.

#### [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/)

Кнопка для переключения пользователя в инлайн-режим

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты обязаны вставить имя пользователя бота и `query` в поле ввода чата, инициировав [инлайн-запрос](/api/bots/inline/).

Если установлен `same_peer`, клиенты используют текущий чат. Иначе клиенты предлагают пользователю выбрать чат, отфильтрованный по `peer_types`, если он указан.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.
