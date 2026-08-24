---
title: "messages.sendMedia"
original: "https://core.telegram.org/method/messages.sendMedia"
section: ref
kind: method
description: "Отправить медиа"
layout: layout.njk
---

# messages.sendMedia

Отправить медиа

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Отправить сообщение без звука (уведомление не должно приходить)</td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Отправить сообщение в фоновом режиме</td></tr><tr><td><strong>clear_draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Удалить черновик</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Только для ботов: запрещает пересылку и сохранение сообщений, даже если в чате назначения не включена <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">защита контента</a></td></tr><tr><td><strong>update_stickersets_order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/constructor/true">true</a></td><td>Перемещать ли использованные наборы стикеров наверх, <a href="/api/stickers#recent-stickersets">подробнее об этом флаге »</a></td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>allow_paid_floodskip</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Только для ботов: если установлено, разрешает отправлять до 1000 сообщений в секунду, игнорируя <a href="/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once">ограничения на рассылку</a>, за плату 0,1 Telegram Stars за сообщение. Соответствующие Stars будут списаны с баланса бота.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Назначение</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Если установлено, указывает, что сообщение следует отправить в ответ на указанное сообщение или историю.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>Прикреплённые медиа</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подпись</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Случайный идентификатор, позволяющий избежать повторной отправки того же сообщения. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup">ReplyMarkup</a></td><td>Разметка ответа для клавиатур ботов</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления</a> сообщения для форматированного текста</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Дата отправки для <a href="/api/scheduled-messages">отложенных сообщений</a></td></tr><tr><td><strong>schedule_repeat_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/type/int">int</a></td><td>После отправки это сообщение будет автоматически запланировано на повторную отправку через указанное число секунд; подробнее о повторяющихся отложенных сообщениях см. <a href="/api/scheduled-messages#repeating-scheduled-messages">здесь »</a>.</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/InputPeer">InputPeer</a></td><td>Отправить это сообщение от имени указанного пира</td></tr><tr><td><strong>quick_reply_shortcut</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/InputQuickReplyShortcut">InputQuickReplyShortcut</a></td><td>Вместо этого добавить сообщение в указанный <a href="/api/business#quick-reply-shortcuts">шаблон быстрого ответа »</a>.</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/long">long</a></td><td>Задаёт <a href="/api/effects">эффект сообщения »</a>, применяемый к сообщению.</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/type/long">long</a></td><td>Для <a href="/api/paid-messages">платных сообщений »</a> указывает количество <a href="/api/stars">Telegram Stars</a>, которое пользователь согласился заплатить за отправку сообщения.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.22?<a href="/type/SuggestedPost">SuggestedPost</a></td><td>Используется, чтобы <a href="/api/suggested-posts">предложить пост каналу; подробнее о полном сценарии см. здесь »</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>ALLOW_PAYMENT_REQUIRED</td><td>Этот пир принимает только <a href="/api/paid-messages">платные сообщения&nbsp;»</a>: эта ошибка возвращается только для старых слоёв без поддержки платных сообщений, поэтому для работы с платными сообщениями клиент необходимо обновить. .</td></tr><tr><td>403</td><td>ALLOW_PAYMENT_REQUIRED_%d</td><td>Этот пир взимает %d <a href="/api/stars">Telegram Stars</a> за сообщение, но параметр <code>allow_paid_stars</code> не был задан либо его значение меньше %d.</td></tr><tr><td>400</td><td>BOT_GAMES_DISABLED</td><td>Игры нельзя отправлять в каналы.</td></tr><tr><td>400</td><td>BOT_PAYMENTS_DISABLED</td><td>Прежде чем вызывать этот метод, включите платежи для бота в botfather.</td></tr><tr><td>400</td><td>BROADCAST_PUBLIC_VOTERS_FORBIDDEN</td><td>Нельзя пересылать опросы с открытым списком проголосовавших.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Через текущее <a href="/api/business#connected-bots">бизнес-подключение</a> нельзя отправлять сообщения указанному пиру.</td></tr><tr><td>400</td><td>BUSINESS_PEER_USAGE_MISSING</td><td>Нельзя отправить сообщение пользователю через <a href="/api/business#connected-bots">бизнес-подключение</a>, если этот пользователь недавно нам не писал.</td></tr><tr><td>400</td><td>BUTTON_COPY_TEXT_INVALID</td><td>Указанное значение <a href="/constructor/keyboardButtonCopy">keyboardButtonCopy</a>.<code>copy_text</code> недействительно.</td></tr><tr><td>400</td><td>BUTTON_DATA_INVALID</td><td>Данные одной или нескольких переданных вами кнопок недействительны.</td></tr><tr><td>400</td><td>BUTTON_POS_INVALID</td><td>Недопустимое положение одной из кнопок клавиатуры (например, кнопка Game или Pay находится не на первой позиции и тому подобное).</td></tr><tr><td>400</td><td>BUTTON_TYPE_INVALID</td><td>Недопустимый тип одной или нескольких переданных вами кнопок.</td></tr><tr><td>400</td><td>BUTTON_URL_INVALID</td><td>Недействительный URL кнопки.</td></tr><tr><td>400</td><td>BUTTON_USER_PRIVACY_RESTRICTED</td><td>Настройка приватности пользователя, указанного в кнопке <a href="/constructor/inputKeyboardButtonUserProfile">inputKeyboardButtonUserProfile</a>, не позволяет создать такую кнопку.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_FORWARDS_RESTRICTED</td><td>Нельзя пересылать сообщения из защищённого чата.</td></tr><tr><td>403</td><td>CHAT_GUEST_SEND_FORBIDDEN</td><td>Прежде чем комментировать, необходимо вступить в группу обсуждения; подробнее см. <a href="/api/discussion#requiring-users-to-join-the-group">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>CHAT_RESTRICTED</td><td>Вы не можете отправлять сообщения в этот чат: на вас наложены ограничения.</td></tr><tr><td>403</td><td>CHAT_SEND_AUDIOS_FORBIDDEN</td><td>В этом чате нельзя отправлять аудиосообщения.</td></tr><tr><td>403</td><td>CHAT_SEND_DOCS_FORBIDDEN</td><td>В этом чате нельзя отправлять документы.</td></tr><tr><td>403</td><td>CHAT_SEND_GIFS_FORBIDDEN</td><td>В этом чате нельзя отправлять GIF.</td></tr><tr><td>403</td><td>CHAT_SEND_MEDIA_FORBIDDEN</td><td>В этом чате нельзя отправлять медиа.</td></tr><tr><td>403</td><td>CHAT_SEND_PHOTOS_FORBIDDEN</td><td>В этом чате нельзя отправлять фотографии.</td></tr><tr><td>403</td><td>CHAT_SEND_PLAIN_FORBIDDEN</td><td>В этом чате нельзя отправлять сообщения без медиа (текстовые).</td></tr><tr><td>403</td><td>CHAT_SEND_POLL_FORBIDDEN</td><td>В этом чате нельзя отправлять опросы.</td></tr><tr><td>403</td><td>CHAT_SEND_ROUNDVIDEOS_FORBIDDEN</td><td>Вы не можете отправлять видеосообщения в этот чат.</td></tr><tr><td>403</td><td>CHAT_SEND_STICKERS_FORBIDDEN</td><td>В этом чате нельзя отправлять стикеры.</td></tr><tr><td>403</td><td>CHAT_SEND_VIDEOS_FORBIDDEN</td><td>В этом чате нельзя отправлять видео.</td></tr><tr><td>403</td><td>CHAT_SEND_VOICES_FORBIDDEN</td><td>В этом чате нельзя отправлять голосовые сообщения.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>CURRENCY_TOTAL_AMOUNT_INVALID</td><td>Итоговая сумма всех цен недействительна.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>400</td><td>EFFECT_CHAT_INVALID</td><td><a href="/api/effects">Эффекты</a> сообщений можно использовать только в личных чатах один на один, однако вызывающая сторона попыталась отправить сообщение с эффектом в группу или канал.</td></tr><tr><td>400</td><td>EFFECT_ID_INVALID</td><td>Указанный идентификатор эффекта недействителен.</td></tr><tr><td>400</td><td>EMOTICON_INVALID</td><td>Указанный эмодзи недействителен.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>Одно из указанных <a href="/api/entities#entity-length">смещений или значений длины сущности оформления</a> недействительно; о том, как правильно вычислять смещение и длину сущности, см. <a href="/api/entities#entity-length">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>EXTENDED_MEDIA_AMOUNT_INVALID</td><td>Указанное значение <code>stars_amount</code> переданного <a href="/constructor/inputMediaPaidMedia">inputMediaPaidMedia</a> недействительно.</td></tr><tr><td>400</td><td>EXTENDED_MEDIA_EMPTY</td><td>Указанное расширенное медиа пусто.</td></tr><tr><td>400</td><td>EXTENDED_MEDIA_INVALID</td><td>Указанное платное медиа недействительно.</td></tr><tr><td>400</td><td>EXTENDED_MEDIA_PEER_INVALID</td><td>Платные медиа не разрешены для целевого пира.</td></tr><tr><td>400</td><td>EXTERNAL_URL_INVALID</td><td>Внешний URL недействителен.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>Недопустимое число частей файла.</td></tr><tr><td>400</td><td>FILE_PART_LENGTH_INVALID</td><td>Недействительная длина части файла.</td></tr><tr><td>400</td><td>FILE_REFERENCE_EMPTY</td><td>Указана пустая <a href="/api/file-references">ссылка на файл</a>.</td></tr><tr><td>400</td><td>FILE_REFERENCE_EXPIRED</td><td>Срок действия ссылки на файл истёк, её необходимо получить заново, как описано в <a href="/api/file-references">документации</a>.</td></tr><tr><td>400</td><td>GAME_BOT_INVALID</td><td>Боты не могут отправлять игру другого бота.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Сбой при обработке изображения.</td></tr><tr><td>400</td><td>INPUT_FILE_INVALID</td><td>Указанный <a href="/type/InputFile">InputFile</a> недействителен.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>INVOICE_PAYLOAD_INVALID</td><td>Указанная полезная нагрузка счёта недействительна.</td></tr><tr><td>400</td><td>MD5_CHECKSUM_INVALID</td><td>Контрольные суммы MD5 не совпадают.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>Подпись слишком длинная.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>Указанный объект медиа недействителен.</td></tr><tr><td>400</td><td>MEDIA_FILE_INVALID</td><td>Указанный медиафайл недействителен.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Медиа недействительно.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>Указанное сообщение пусто.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>Указанное сообщение слишком длинное.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PAYMENT_PROVIDER_INVALID</td><td>Указанный платёжный провайдер недействителен.</td></tr><tr><td>406</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>Недопустимое расширение фотографии.</td></tr><tr><td>400</td><td>PHOTO_INVALID_DIMENSIONS</td><td>Недопустимые размеры фотографии.</td></tr><tr><td>400</td><td>PHOTO_SAVE_FILE_INVALID</td><td>Внутренние неполадки, попробуйте ещё раз позже.</td></tr><tr><td>400</td><td>POLL_ANSWERS_INVALID</td><td>Указаны недопустимые варианты ответа в опросе.</td></tr><tr><td>400</td><td>POLL_ANSWER_INVALID</td><td>Один из вариантов ответа в опросе недопустим.</td></tr><tr><td>400</td><td>POLL_OPTION_DUPLICATE</td><td>Переданы повторяющиеся варианты ответа опроса.</td></tr><tr><td>400</td><td>POLL_OPTION_INVALID</td><td>Указан недопустимый вариант ответа в опросе.</td></tr><tr><td>400</td><td>POLL_QUESTION_INVALID</td><td>Один из вопросов опроса недопустим.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>403</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>Чтобы отправить сообщение этому пользователю, нужна <a href="/api/premium">подписка Telegram Premium</a>.</td></tr><tr><td>400</td><td>QUICK_REPLIES_BOT_NOT_ALLOWED</td><td><a href="/api/business#quick-reply-shortcuts">Быстрые ответы</a> недоступны ботам.</td></tr><tr><td>400</td><td>QUICK_REPLIES_TOO_MUCH</td><td>Можно создать не более <a href="/api/config#quick-replies-limit">appConfig.<code>quick_replies_limit</code></a> шаблонов быстрых ответов, лимит достигнут.</td></tr><tr><td>400</td><td>QUIZ_CORRECT_ANSWERS_EMPTY</td><td>Не указан правильный ответ на викторину.</td></tr><tr><td>400</td><td>QUIZ_CORRECT_ANSWERS_TOO_MUCH</td><td>Вы указали слишком много правильных ответов в викторине: в викторине может быть только один правильный ответ!</td></tr><tr><td>400</td><td>QUIZ_CORRECT_ANSWER_INVALID</td><td>В поле correct_answers передано недопустимое значение.</td></tr><tr><td>400</td><td>QUIZ_MULTIPLE_INVALID</td><td>У викторин нельзя устанавливать флаг multiple_choice!</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>Вы передали случайный идентификатор, который уже использовался.</td></tr><tr><td>400</td><td>REPLY_MARKUP_BUY_EMPTY</td><td>Пустая разметка ответа для кнопки покупки.</td></tr><tr><td>400</td><td>REPLY_MARKUP_GAME_EMPTY</td><td>Редактируется игровое сообщение, но в новой клавиатуре нет кнопки keyboardButtonGame.</td></tr><tr><td>400</td><td>REPLY_MARKUP_INVALID</td><td>Указанная разметка ответа недействительна.</td></tr><tr><td>400</td><td>REPLY_MARKUP_TOO_LONG</td><td>Указанное значение reply_markup слишком длинное.</td></tr><tr><td>400</td><td>REPLY_MESSAGES_TOO_MUCH</td><td>Каждый шаблон быстрого ответа может содержать не более <a href="/api/config#quick-reply-messages-limit">appConfig.<code>quick_reply_messages_limit</code></a> сообщений, лимит достигнут.</td></tr><tr><td>400</td><td>REPLY_MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения, на которое даётся ответ, недействителен.</td></tr><tr><td>400</td><td>REPLY_TO_MONOFORUM_PEER_INVALID</td><td>Указанное значение inputReplyToMonoForum.monoforum_peer_id недействительно.</td></tr><tr><td>400</td><td>SCHEDULE_BOT_NOT_ALLOWED</td><td>Боты не могут планировать отправку сообщений.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_TOO_LATE</td><td>Нельзя запланировать сообщение так далеко в будущем.</td></tr><tr><td>400</td><td>SCHEDULE_TOO_MUCH</td><td>Слишком много отложенных сообщений.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>Вы не можете отправлять сообщения от имени указанного пира.</td></tr><tr><td>420</td><td>SLOWMODE_WAIT_%d</td><td>В этом чате включён медленный режим: подождите %d секунд перед отправкой следующего сообщения в этот чат.</td></tr><tr><td>400</td><td>STARS_INVOICE_INVALID</td><td>Указанный счёт Telegram Stars недействителен.</td></tr><tr><td>400</td><td>STORY_ID_INVALID</td><td>Указанный идентификатор истории недействителен.</td></tr><tr><td>400</td><td>SUBSCRIPTION_EXPORT_MISSING</td><td>Вы не можете отправить <a href="/api/subscriptions#bot-subscriptions">счёт на подписку на бота</a> напрямую, разрешается только создавать ссылки на счета с помощью <a href="/method/payments.exportInvoice">payments.exportInvoice</a>.</td></tr><tr><td>400</td><td>SUGGESTED_POST_PEER_INVALID</td><td>Нельзя отправлять предлагаемые посты пирам, которые не являются <a href="/api/monoforum">монофорумами</a>.</td></tr><tr><td>400</td><td>TERMS_URL_INVALID</td><td>Указанное значение <a href="/constructor/invoice">invoice</a>.<code>terms_url</code> недействительно.</td></tr><tr><td>400</td><td>TODO_ITEMS_EMPTY</td><td>Был указан список задач, но <a href="/api/todo">пункты списка задач</a> не переданы.</td></tr><tr><td>400</td><td>TODO_ITEMS_TOO_MUCH</td><td>Вы указали слишком много пунктов списка задач.</td></tr><tr><td>400</td><td>TODO_ITEM_DUPLICATE</td><td>Обнаружены повторяющиеся <a href="/api/todo">пункты списка задач</a>.</td></tr><tr><td>406</td><td>TOPIC_CLOSED</td><td>Эта тема закрыта, отправлять в неё сообщения больше нельзя.</td></tr><tr><td>406</td><td>TOPIC_DELETED</td><td>Указанная тема была удалена.</td></tr><tr><td>400</td><td>TTL_MEDIA_INVALID</td><td>Указано недопустимое время жизни медиафайла.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>400</td><td>USER_BOT_TO_BOT_DISABLED</td><td>Обмен сообщениями между ботами отключён, поскольку один из двух ботов не включил настройку Bot to Bot в @BotFather.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr><tr><td>400</td><td>USER_IS_BOT</td><td>Боты не могут отправлять сообщения другим ботам.</td></tr><tr><td>400</td><td>VIDEO_CONTENT_TYPE_INVALID</td><td>Тип содержимого видео недействителен.</td></tr><tr><td>400</td><td>VOICE_MESSAGES_FORBIDDEN</td><td>Настройки приватности этого пользователя запрещают вам отправлять ему голосовые сообщения.</td></tr><tr><td>400</td><td>WEBDOCUMENT_MIME_INVALID</td><td>Указан недействительный MIME-тип веб-документа.</td></tr><tr><td>400</td><td>WEBPAGE_CURL_FAILED</td><td>Сбой при получении веб-страницы с помощью cURL.</td></tr><tr><td>400</td><td>WEBPAGE_MEDIA_EMPTY</td><td>Медиа веб-страницы пусто.</td></tr><tr><td>400</td><td>WEBPAGE_NOT_FOUND</td><td>Не удалось создать предпросмотр для веб-страницы, указанной в <code>url</code>.</td></tr><tr><td>400</td><td>WEBPAGE_URL_INVALID</td><td>Указанный <code>url</code> веб-страницы недействителен.</td></tr><tr><td>400</td><td>YOU_BLOCKED_USER</td><td>Вы заблокировали этого пользователя.</td></tr></tbody></table>

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

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.

#### [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/)

[Платное медиа, подробнее см. здесь »](/api/paid-media/).

#### [Ссылки на файлы](/api/file-references/)

Как работать со ссылками на файлы.

#### [InputFile](/type/InputFile/)

Определяет файл, загруженный клиентом.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Подписки за звёзды](/api/subscriptions/)

Боты и каналы могут создавать подписки, периодически списывая с пользователей определённое количество Telegram Stars в обмен на контент и услуги.

#### [payments.exportInvoice](/method/payments.exportInvoice/)

Создать [глубокую ссылку на счёт](/api/links/#invoice-links)

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [invoice](/constructor/invoice/)

Счёт

#### [Чек-листы и списки задач](/api/todo/)

Пользователи Premium теперь могут создавать совместные чек-листы в любом чате, чтобы отслеживать задачи и координировать команды — или вести списки покупок и дел.
