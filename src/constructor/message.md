---
title: "message"
original: "https://core.telegram.org/constructor/message"
section: ref
kind: constructor
description: "Сообщение"
layout: layout.njk
---

# message

Сообщение

```
message#3ae56482 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>out</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Является ли это исходящим сообщением</td></tr><tr><td><strong>mentioned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Были ли мы <a href="/api/mentions">упомянуты</a> в этом сообщении</td></tr><tr><td><strong>media_unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Есть ли в этом сообщении непрочитанные медиавложения; подробнее о том, как сбросить этот флаг, см. <a href="/api/views#read-message-contents">здесь »</a>.</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Является ли это сообщением без звука (уведомление не показывается)</td></tr><tr><td><strong>post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Является ли это записью в канале</td></tr><tr><td><strong>from_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/constructor/true">true</a></td><td>Является ли это <a href="/api/scheduled-messages">отложенным сообщением</a></td></tr><tr><td><strong>legacy</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Это устаревшее сообщение: его необходимо запросить заново на новом слое</td></tr><tr><td><strong>edit_hide</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/constructor/true">true</a></td><td>Следует ли показывать сообщение пользователю как неизменённое, даже если указана дата редактирования</td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/constructor/true">true</a></td><td><a href="/api/pin">Закреплено</a> ли это сообщение</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.26?<a href="/constructor/true">true</a></td><td>Является ли это сообщение <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">защищённым</a> и потому непересылаемым; клиентам также следует запретить пользователям сохранять вложенные медиафайлы (то есть видео должны только транслироваться, фотографии должны храниться в оперативной памяти и так далее).</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.27?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>flags2</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>offline</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, сообщение было отправлено из-за запланированного действия отправителя, например как сообщение об отсутствии или приветственное сервисное сообщение.</td></tr><tr><td><strong>video_processing_pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.4?<a href="/constructor/true">true</a></td><td>Видео, содержащееся в сообщении, в данный момент обрабатывается сервером (например, для создания альтернативных качеств, которые будут содержаться в итоговом <a href="/constructor/messageMediaDocument">messageMediaDocument</a>.<code>alt_document</code>), и будет отправлено после обработки, которая завершится примерно в указанную дату <code>date</code> (то есть сообщения с этим флагом следует обрабатывать так же, как <a href="/api/scheduled-messages">отложенные сообщения</a>, но вместо даты отправки поле <code>date</code> содержит предполагаемую дату завершения преобразования).<br>Подробнее см. <a href="/api/files#video-qualities">здесь »</a>.</td></tr><tr><td><strong>paid_suggested_post_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.8?<a href="/constructor/true">true</a></td><td>Устанавливается, если это <a href="/api/suggested-posts">предлагаемый пост в канале »</a>, оплаченный с помощью <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>paid_suggested_post_ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.9?<a href="/constructor/true">true</a></td><td>Устанавливается, если это <a href="/api/suggested-posts">предлагаемый пост в канале »</a>, оплаченный с помощью Grams.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/Peer">Peer</a></td><td>Идентификатор отправителя сообщения</td></tr><tr><td><strong>from_boosts_applied</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.29?<a href="/type/int">int</a></td><td>Только для супергрупп: содержит количество <a href="/api/boost">бустов</a>, отданных этим пользователем текущей супергруппе; его следует показывать в интерфейсе в заголовке сообщения.<br>Присутствует только у входящих сообщений от неанонимных участников супергруппы, которые её забустили.<br>Обратите внимание, что для неанонимных <em>исходящих</em> сообщений этот счётчик следует локально переопределять текущим значением <a href="/constructor/channelFull">channelFull</a>.<code>boosts_applied</code>, чтобы значение было верным даже для сообщений, отправленных текущим пользователем до буста супергруппы (или после истечения срока буста либо изменения их числа); для входящих сообщений от других пользователей это значение обновлять не следует, даже если их бусты изменились.</td></tr><tr><td><strong>from_rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.12?<a href="/type/string">string</a></td><td>Только в <a href="/api/channel#supergroups">супергруппах »</a> (никогда не в обычных группах, где эти сведения хранятся <a href="/api/rank">в другом месте »</a>) — содержит <a href="/api/rank">звание »</a> отправителя.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Идентификатор пира — чата, в который было отправлено это сообщение</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.28?<a href="/type/Peer">Peer</a></td><td>[@term:peer] У сообщений из <a href="/api/saved-messages">диалога избранного »</a> поле <code>peer</code>=<a href="/constructor/inputPeerSelf">inputPeerSelf</a>, а флаг <code>saved_peer_id</code> установлен в идентификатор сохранённого диалога.<br>У сообщений из <a href="/api/monoforum">монофорума »</a> поле <code>peer</code>=идентификатор монофорума, а флаг <code>saved_peer_id</code> установлен в идентификатор темы.</td></tr><tr><td><strong>fwd_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/MessageFwdHeader">MessageFwdHeader</a></td><td>Информация о пересланных сообщениях</td></tr><tr><td><strong>via_bot_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/long">long</a></td><td>Идентификатор инлайн-бота, создавшего сообщение</td></tr><tr><td><strong>via_business_bot_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.0?<a href="/type/long">long</a></td><td>Было ли сообщение отправлено от имени пользователя <a href="/api/bots/connected-business-bots">бизнес-ботом</a>, указанным в <code>via_bot_id</code>.</td></tr><tr><td><strong>guestchat_via_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.19?<a href="/type/Peer">Peer</a></td><td>Если сообщение было отправлено <a href="/api/bots/guest-mode#guest-messages">гостевым ботом »</a> — пир, от имени которого бот отправил сообщение.</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/MessageReplyHeader">MessageReplyHeader</a></td><td>Сведения об ответе</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата сообщения</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/MessageMedia">MessageMedia</a></td><td>Прикреплённое медиа</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/ReplyMarkup">ReplyMarkup</a></td><td>Разметка ответа (клавиатуры ботов и инлайн-клавиатуры)</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления</a> сообщения для форматированного текста</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Количество просмотров для постов канала</td></tr><tr><td><strong>forwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Счётчик пересылок</td></tr><tr><td><strong>replies</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.23?<a href="/type/MessageReplies">MessageReplies</a></td><td>Информация о <a href="/api/threads">комментариях к публикациям (для каналов) или ответах на сообщения (для групп)</a></td></tr><tr><td><strong>edit_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/int">int</a></td><td>Дата последнего изменения этого сообщения</td></tr><tr><td><strong>post_author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/type/string">string</a></td><td>Имя автора этого сообщения для постов в канале (при включённых подписях)</td></tr><tr><td><strong>grouped_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/long">long</a></td><td>Несколько медиасообщений, отправленных методом <a href="/method/messages.sendMultiMedia">messages.sendMultiMedia</a> с одинаковым идентификатором группы, образуют <a href="/api/files#albums-grouped-media">альбом или группу медиафайлов</a></td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/type/MessageReactions">MessageReactions</a></td><td>Реакции на это сообщение</td></tr><tr><td><strong>restriction_reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.22?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/RestrictionReason">RestrictionReason</a>&gt;</td><td>Содержит причину, по которой доступ к этому сообщению должен быть ограничен.</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/type/int">int</a></td><td>Время жизни сообщения: как только message.date+message.ttl_period === time(), сообщение будет удалено на сервере, и его также необходимо удалить локально.</td></tr><tr><td><strong>quick_reply_shortcut_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.30?<a href="/type/int">int</a></td><td>Если установлено, это сообщение является <a href="/api/business#quick-reply-shortcuts">сообщением шаблона быстрого ответа »</a> (учтите, что у сообщений шаблона быстрого ответа, <em>отправленных</em> в личный чат, это поле установлено <em>не</em> будет).</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.2?<a href="/type/long">long</a></td><td><a href="/api/effects">Эффект сообщения, который должен быть воспроизведён так, как описано здесь »</a>.</td></tr><tr><td><strong>factcheck</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.3?<a href="/type/FactCheck">FactCheck</a></td><td>Представляет <a href="/api/factcheck">проверку фактов »</a>.</td></tr><tr><td><strong>report_delivery_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.5?<a href="/type/int">int</a></td><td>Используется для <a href="https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification">проверочных сообщений Telegram Gateway</a>: если флаг установлен и текущее unixtime больше указанного unixtime, вызовите <a href="/method/messages.reportMessagesDelivery">messages.reportMessagesDelivery</a>, передав идентификатор и пир этого сообщения, сразу после его получения клиентом (при желании объединяя запросы для одного и того же пира).</td></tr><tr><td><strong>paid_message_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.6?<a href="/type/long">long</a></td><td>Количество звёзд, которое <strong>отправитель</strong> заплатил за отправку сообщения; подробнее см. <a href="/api/paid-messages">здесь »</a>.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.7?<a href="/type/SuggestedPost">SuggestedPost</a></td><td>Используется, чтобы <a href="/api/suggested-posts">предложить пост каналу; подробнее о полном сценарии см. здесь »</a>.</td></tr><tr><td><strong>schedule_repeat_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.10?<a href="/type/int">int</a></td><td>После отправки это сообщение будет автоматически запланировано на повторную отправку через указанное число секунд; подробнее о повторяющихся отложенных сообщениях см. <a href="/api/scheduled-messages#repeating-scheduled-messages">здесь »</a>.</td></tr><tr><td><strong>summary_from_language</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.11?<a href="/type/string">string</a></td><td>Если установлено, клиентам следует предлагать <a href="/api/ai#summarize-messages">кнопку краткого пересказа »</a> для этого сообщения; содержит двухбуквенный код языка по ISO 639-1, определённый для текущего сообщения.</td></tr></tbody></table>

### Тип

[Message](/type/Message/)

### Связанные страницы

#### [Упоминания и ответы](/api/mentions/)

Telegram позволяет упоминать других пользователей по срочным утиным вопросам и быстро переходить к этим упоминаниям, чтобы прочитать их как можно скорее.

#### [Просмотры и метрики прочтения](/api/views/)

Клиентам следует сообщать о состоянии прочтения, просмотрах сообщений и прослушиваниях музыки с помощью специального набора методов.

#### [Отложенные сообщения](/api/scheduled-messages/)

Telegram позволяет планировать отправку сообщений

#### [Закреплённые сообщения](/api/pin/)

Telegram позволяет закреплять несколько сообщений вверху конкретного чата.

#### [messageMediaDocument](/constructor/messageMediaDocument/)

Документ (видео, аудио, голосовое сообщение, стикер, любой тип медиа, кроме фотографии)

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Определяет текущего пользователя.

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [Гостевой режим для ботов](/api/bots/guest-mode/)

Гостевых ботов можно вызывать по имени пользователя из **любого** несекретного личного чата, группы и супергруппы (кроме групп и супергрупп с включённой [защитой контента »](/api/content-protection/#for-groups-and-channels)); они публикуют свои результаты прямо в чат, даже если не состоят в нём.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Отправить [альбом или сгруппированные медиафайлы](/api/files/#albums-grouped-media)

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.

#### [Проверки фактов](/api/factcheck/)

Клиенты Telegram поддерживают отображение проверок фактов, добавленных к сообщениям независимыми фактчекерами.

#### [messages.reportMessagesDelivery](/method/messages.reportMessagesDelivery/)

Используется для [проверочных сообщений Telegram Gateway »](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification): сообщает серверу, что одно или несколько [сообщений](/constructor/message/) были получены клиентом, если этого требует флаг [message](/constructor/message/).**report\_delivery\_until\_date** или равнозначный флаг в [push-уведомлениях](/api/push-updates/).

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.
