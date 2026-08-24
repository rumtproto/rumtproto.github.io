---
title: "messages.editMessage"
original: "https://core.telegram.org/method/messages.editMessage"
section: ref
kind: method
description: "Изменить сообщение"
layout: layout.njk
---

# messages.editMessage

Изменить сообщение

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>no_webpage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Отключить предпросмотр веб-страницы</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Куда было отправлено сообщение</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор редактируемого сообщения</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/string">string</a></td><td>Новое сообщение</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/InputMedia">InputMedia</a></td><td>Новый прикреплённый медиафайл</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup">ReplyMarkup</a></td><td>Разметка ответа для инлайн-клавиатур</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/int">int</a></td><td>Дата отправки для <a href="/api/scheduled-messages">отложенных сообщений</a></td></tr><tr><td><strong>schedule_repeat_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/int">int</a></td><td>После отправки это сообщение будет автоматически запланировано на повторную отправку через указанное число секунд; подробнее о повторяющихся отложенных сообщениях см. <a href="/api/scheduled-messages#repeating-scheduled-messages">здесь »</a>.</td></tr><tr><td><strong>quick_reply_shortcut_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/int">int</a></td><td>Если указано, вместо этого редактирует <a href="/api/business#quick-reply-shortcuts">сообщение шаблона быстрого ответа »</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_DOMAIN_INVALID</td><td>Недействительный домен бота.</td></tr><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Через текущее <a href="/api/business#connected-bots">бизнес-подключение</a> нельзя отправлять сообщения указанному пиру.</td></tr><tr><td>400</td><td>BUTTON_COPY_TEXT_INVALID</td><td>Указанное значение <a href="/constructor/keyboardButtonCopy">keyboardButtonCopy</a>.<code>copy_text</code> недействительно.</td></tr><tr><td>400</td><td>BUTTON_DATA_INVALID</td><td>Данные одной или нескольких переданных вами кнопок недействительны.</td></tr><tr><td>400</td><td>BUTTON_TYPE_INVALID</td><td>Недопустимый тип одной или нескольких переданных вами кнопок.</td></tr><tr><td>400</td><td>BUTTON_URL_INVALID</td><td>Недействительный URL кнопки.</td></tr><tr><td>400</td><td>BUTTON_USER_PRIVACY_RESTRICTED</td><td>Настройка приватности пользователя, указанного в кнопке <a href="/constructor/inputKeyboardButtonUserProfile">inputKeyboardButtonUserProfile</a>, не позволяет создать такую кнопку.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_FORWARDS_RESTRICTED</td><td>Нельзя пересылать сообщения из защищённого чата.</td></tr><tr><td>403</td><td>CHAT_SEND_GIFS_FORBIDDEN</td><td>В этом чате нельзя отправлять GIF.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr><tr><td>406</td><td>EDIT_MESSAGE_TEMP_RESTRICTED</td><td>Редактирование сообщений временно запрещено для этого пользователя из-за нормативных ограничений.</td></tr><tr><td>400</td><td>ENTITIES_TOO_LONG</td><td>Вы указали слишком много сущностей оформления текста.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>Одно из указанных <a href="/api/entities#entity-length">смещений или значений длины сущности оформления</a> недействительно; о том, как правильно вычислять смещение и длину сущности, см. <a href="/api/entities#entity-length">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>Недопустимое число частей файла.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Сбой при обработке изображения.</td></tr><tr><td>403</td><td>INLINE_BOT_REQUIRED</td><td>Редактировать сообщение может только инлайн-бот.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>Подпись слишком длинная.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>Указанный объект медиа недействителен.</td></tr><tr><td>400</td><td>MEDIA_GROUPED_INVALID</td><td>Вы попытались отправить в альбоме медиа разных типов.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Медиа недействительно.</td></tr><tr><td>400</td><td>MEDIA_NEW_INVALID</td><td>Новый медиафайл недействителен.</td></tr><tr><td>400</td><td>MEDIA_PREV_INVALID</td><td>Предыдущее медиа недействительно.</td></tr><tr><td>400</td><td>MEDIA_TTL_INVALID</td><td>[@term:TTL] Указанное значение TTL для медиа недействительно.</td></tr><tr><td>403</td><td>MESSAGE_AUTHOR_REQUIRED</td><td>Требуется автор сообщения.</td></tr><tr><td>400</td><td>MESSAGE_EDIT_TIME_EXPIRED</td><td>Это сообщение больше нельзя редактировать: с момента его создания прошло слишком много времени.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>Указанное сообщение пусто.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>MESSAGE_NOT_MODIFIED</td><td>Переданные данные сообщения совпадают с прежними, сообщение не было изменено.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>Указанное сообщение слишком длинное.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>500</td><td>MSG_WAIT_FAILED</td><td>Вызов, окончания которого ожидал этот запрос, вернул ошибку.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PEER_TYPES_INVALID</td><td>Переданное поле <a href="/constructor/keyboardButtonSwitchInline">keyboardButtonSwitchInline</a>.<code>peer_types</code> недействительно.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>Недопустимое расширение фотографии.</td></tr><tr><td>400</td><td>PHOTO_INVALID_DIMENSIONS</td><td>Недопустимые размеры фотографии.</td></tr><tr><td>400</td><td>PHOTO_SAVE_FILE_INVALID</td><td>Внутренние неполадки, попробуйте ещё раз позже.</td></tr><tr><td>400</td><td>REPLY_MARKUP_INVALID</td><td>Указанная разметка ответа недействительна.</td></tr><tr><td>400</td><td>REPLY_MARKUP_TOO_LONG</td><td>Указанное значение reply_markup слишком длинное.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_INVALID</td><td>Указана недопустимая дата отложенной отправки.</td></tr><tr><td>400</td><td>TODO_ITEMS_EMPTY</td><td>Был указан список задач, но <a href="/api/todo">пункты списка задач</a> не переданы.</td></tr><tr><td>400</td><td>TODO_ITEM_DUPLICATE</td><td>Обнаружены повторяющиеся <a href="/api/todo">пункты списка задач</a>.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>400</td><td>WEBPAGE_NOT_FOUND</td><td>Не удалось создать предпросмотр для веб-страницы, указанной в <code>url</code>.</td></tr></tbody></table>

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Отложенные сообщения](/api/scheduled-messages/)

Telegram позволяет планировать отправку сообщений

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [keyboardButtonCopy](/constructor/keyboardButtonCopy/)

Кнопка копирования в буфер обмена

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты обязаны скопировать `copy_text` в буфер обмена.

#### [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/)

Кнопка, ведущая непосредственно в профиль пользователя

Используйте этот конструктор, чтобы отправить кнопку [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) в [инлайн-клавиатуре](https://core.telegram.org/bots/features#inline-keyboards).

#### [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/)

Кнопка для переключения пользователя в инлайн-режим

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

При нажатии клиенты обязаны вставить имя пользователя бота и `query` в поле ввода чата, инициировав [инлайн-запрос](/api/bots/inline/).

Если установлен `same_peer`, клиенты используют текущий чат. Иначе клиенты предлагают пользователю выбрать чат, отфильтрованный по `peer_types`, если он указан.

#### [Чек-листы и списки задач](/api/todo/)

Пользователи Premium теперь могут создавать совместные чек-листы в любом чате, чтобы отслеживать задачи и координировать команды — или вести списки покупок и дел.
