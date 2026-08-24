---
title: "Подключённые бизнес-боты"
original: "https://core.telegram.org/api/bots/connected-business-bots"
section: api
description: "Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от их имени. Это позволяет бесшовно интегрировать любые уже используемые…"
layout: layout.njk
---

# Подключённые бизнес-боты

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них **от их имени**. Это позволяет **бесшовно интегрировать** любые уже используемые инструменты и рабочие процессы, а также подключать **ИИ-ассистентов**, ведущих переписку в чатах.

```
inputBusinessBotRecipients#c4e5921e flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<InputUser> exclude_users:flags.6?Vector<InputUser> = InputBusinessBotRecipients;

businessBotRecipients#b88cf373 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> exclude_users:flags.6?Vector<long> = BusinessBotRecipients;

connectedBot#cd64636c flags:# bot_id:long recipients:BusinessBotRecipients rights:BusinessBotRights = ConnectedBot;

account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;

botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;

updateBotBusinessConnect#8ae5c97a connection:BotBusinessConnection qts:int = Update;
updateBotNewBusinessMessage#9ddb347c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
updateBotEditBusinessMessage#07df587c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;
updateBotDeleteBusinessMessage#a02a982e connection_id:string peer:Peer messages:Vector<int> qts:int = Update;
updateBusinessBotCallbackQuery#1ea2fda7 flags:# query_id:long user_id:long connection_id:string message:Message reply_to_message:flags.2?Message chat_instance:long data:flags.0?bytes = Update;

---functions---

account.updateConnectedBot#66a08c7e flags:# deleted:flags.1?true rights:flags.0?BusinessBotRights bot:InputUser recipients:InputBusinessBotRecipients = Updates;
account.getConnectedBots#4ea4c80f = account.ConnectedBots;

account.toggleConnectedBotPaused#646e1097 peer:InputPeer paused:Bool = Bool;
account.disablePeerConnectedBot#5e437ed9 peer:InputPeer = Bool;

account.getBotBusinessConnection#76a86270 connection_id:string = Updates;

invokeWithBusinessConnection#dd289f8e {X:Type} connection_id:string query:!X = X;
```

Сейчас к аккаунту пользователя можно подключить только одного бизнес-бота.  
У ботов, которых разрешено подключать к аккаунтам пользователей, установлен флаг [user](/constructor/user/).`bot_business`; попытка подключить бота без этого флага приведёт к ошибке `BOT_BUSINESS_MISSING`.  
Для подключения бизнес-бота не требуется [Telegram Premium »](/api/premium/).

Чтобы подключить бизнес-бота к текущему аккаунту или изменить настройки подключения, используйте [account.updateConnectedBot »](/method/account.updateConnectedBot/).  
Чтобы отключить бизнес-бота от текущего аккаунта, используйте [account.updateConnectedBot »](/method/account.updateConnectedBot/) с установленным флагом `deleted`.  
Чтобы получить список всех подключённых в данный момент бизнес-ботов, используйте [account.getConnectedBots »](/method/account.getConnectedBots/).

Метод [account.toggleConnectedBotPaused »](/method/account.toggleConnectedBotPaused/) приостанавливает или возобновляет обработку конкретного чата, временно отключая его от всех бизнес-ботов (это равносильно временному указанию чата в `recipients.exclude_users` при первоначальной настройке через [account.updateConnectedBot »](/method/account.updateConnectedBot/)).  
Метод [account.disablePeerConnectedBot »](/method/account.disablePeerConnectedBot/) навсегда отключает конкретный чат от всех бизнес-ботов (это равносильно указанию чата в `recipients.exclude_users` при первоначальной настройке через [account.updateConnectedBot »](/method/account.updateConnectedBot/)); чтобы снова подключить чат, отключённый этим методом, пользователь обязан заново подключить бота целиком, вызвав [account.updateConnectedBot »](/method/account.updateConnectedBot/).

[@term:peer] Учтите, что вызов двух описанных выше методов также добавит пир (`peer` — собеседник, чат или канал) в поле `recipients.exclude_users` соответствующего конструктора [connectedBot](/constructor/connectedBot/) (либо в `recipients.users`, если установлен инвертирующий флаг `recipients.exclude_selected`).

Оба описанных выше метода следует вызывать при нажатии соответствующих кнопок в [панели действий, см. здесь »](/api/action-bar/#manage-a-connected-business-bot) — там же приведены подробности о панели действий бизнес-бота, которую следует показывать для всех пиров, управляемых ботом в данный момент, в соответствии с [флагами панели действий »](/api/action-bar/#manage-a-connected-business-bot).

Подключение или отключение бизнес-бота, а также изменение настроек подключения приводит к отправке боту обновления [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) с новыми настройками и с идентификатором `connection_id`, который бот будет использовать для обработки обновлений и отправки сообщений от имени пользователя.

В соответствии с заданными настройками бот начнёт получать обновления [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/), [updateBotEditBusinessMessage](/constructor/updateBotEditBusinessMessage/), [updateBotDeleteBusinessMessage](/constructor/updateBotDeleteBusinessMessage/), содержащие сообщения, отправленные подключённому пользователю через бизнес-подключение.

Боты могут вызвать [account.getBotBusinessConnection](/method/account.getBotBusinessConnection/), чтобы повторно запросить конструктор [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/), связанный с конкретным `connection_id`.  
Это нужно, например, только что авторизовавшимся ботам, которые получают обновления [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/) и подобные им, потому что некоторые пользователи успели подключиться к боту ещё до того, как он смог войти в сессию.  
В таком случае бот получает сообщения из бизнес-подключения, но ещё не закешировал связанный с ним конструктор [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) со сведениями о подключении (может ли бот отвечать на сообщения? и так далее) и не может получить прежние обновления, так как их отправили, когда бот ещё не вошёл в сессию.  
Этот метод позволяет получить сведения о ещё не закешированном бизнес-подключении; его не следует вызывать, если сведения уже закешированы, а также ради отслеживания изменений: любые изменения придут боту сами — в виде новых обновлений [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/), обычными [способами доставки обновлений »](/api/updates/).

Бот сможет вызывать от имени пользователя через бизнес-подключение перечисленные ниже методы (в соответствии с правами [businessBotRights](/constructor/businessBotRights/), переданными в [account.updateConnectedBot](/method/account.updateConnectedBot/)), оборачивая запрос в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) и передавая идентификатор подключения:

-   [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/) — задать глобальные настройки приватности
-   [account.updateProfile](/method/account.updateProfile/) — обновляет профиль пользователя.
-   [messages.deleteMessages](/method/messages.deleteMessages/) — удаляет сообщения по их идентификаторам.
-   [messages.editMessage](/method/messages.editMessage/) — редактировать сообщение
-   [messages.readHistory](/method/messages.readHistory/) — отмечает историю сообщений как прочитанную.
-   [messages.sendMedia](/method/messages.sendMedia/) — отправить медиафайл
-   [messages.sendMessage](/method/messages.sendMessage/) — отправляет сообщение в чат
-   [messages.sendMultiMedia](/method/messages.sendMultiMedia/) — отправить [альбом или сгруппированные медиафайлы](/api/files/#albums-grouped-media)
-   [messages.setTyping](/method/messages.setTyping/) — отправляет собеседнику или в группу событие о том, что текущий пользователь набирает текст (все типы событий см. в [SendMessageAction](/type/SendMessageAction/)).
-   [messages.updatePinnedMessage](/method/messages.updatePinnedMessage/) — закрепить сообщение
-   [payments.convertStarGift](/method/payments.convertStarGift/) — обменять [полученный подарок »](/api/gifts/) на Telegram Stars: подарок будет безвозвратно уничтожен и превращён в [starGift](/constructor/starGift/).`convert_stars` [Telegram Stars](/api/stars/), которые зачисляются на баланс пользователя.
-   [payments.exportInvoice](/method/payments.exportInvoice/) — сформировать [глубокую ссылку на счёт](/api/links/#invoice-links)
-   [payments.getPaymentForm](/method/payments.getPaymentForm/) — получить платёжную форму
-   [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) — получить полный список [подарков »](/api/gifts/#list-all-received-gifts), которыми пир владеет, которые он получил или [размещает »](/api/gifts/#hosted-collectible-gifts).
-   [payments.getStarsStatus](/method/payments.getStarsStatus/) — получить текущий [баланс Telegram Stars](/api/stars/) текущего аккаунта (при peer=[inputPeerSelf](/constructor/inputPeerSelf/)) либо баланс звёзд бота или канала, указанного в `peer`.
-   [payments.sendStarsForm](/method/payments.sendStarsForm/) — провести платёж с помощью [Telegram Stars, см. здесь »](/api/stars/#using-stars) — там подробности.
-   [payments.transferStarGift](/method/payments.transferStarGift/) — передать [коллекционный подарок](/api/gifts/#collectible-gifts) другому пользователю или каналу: доступно, только если передача бесплатна (то есть [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).`transfer_stars` не установлено); подробнее о полном порядке действий (в том числе об ином порядке, когда передача платная) см. [здесь »](/api/gifts/#transferring-collectible-gifts).
-   [payments.upgradeStarGift](/method/payments.upgradeStarGift/) — улучшить [подарок](/api/gifts/) до [коллекционного](/api/gifts/#collectible-gifts): доступно, только если улучшение уже оплачено отправителем подарка; подробнее о полном порядке действий (в том числе об ином порядке, когда улучшение не оплачено отправителем) см. [здесь »](/api/gifts/#upgrade-a-gift-to-a-collectible-gift).
-   [stories.deleteStories](/method/stories.deleteStories/) — удаляет часть опубликованных [историй](/api/stories/).

Запросы, обёрнутые в `invokeWithBusinessConnection`, обязательно нужно отправлять на тот дата-центр (DC), идентификатор которого указан в поле `dc_id` используемого конструктора [botBusinessConnection](/constructor/botBusinessConnection/).

Учтите, что полный список методов, доступных в бизнес-подключениях, есть и в формате JSON — в [базе RPC »](/api/errors/#error-database).

Метод [messages.uploadMedia](/method/messages.uploadMedia/) также можно использовать в бизнес-подключениях, но _не_ оборачивая его в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), а указывая идентификатор бизнес-подключения в параметре `business_connection_id`.

Методы [stories.sendStory](/method/stories.sendStory/) и [stories.editStory](/method/stories.editStory/) также можно использовать для публикации и редактирования историй от имени подключённого бизнес-аккаунта: в этом случае достаточно передать пир бизнес-аккаунта в `peer`, _не_ оборачивая запрос в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/).  
Учтите, что [stories.editStory](/method/stories.editStory/) позволяет редактировать только те истории, которые тот же бизнес-бот опубликовал от имени пользователя.

При использовании [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) будет возвращена RPC-ошибка `BUSINESS_CONNECTION_INVALID` (а для некоторых бизнес-методов — `BOT_METHOD_INVALID`), если переданный в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) идентификатор `connection_id` недействителен или изменился (из-за изменения параметров бизнес-подключения; в этом случае будет отправлено новое обновление [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) с новым `connection_id`).

При использовании [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) будет возвращена RPC-ошибка `BUSINESS_CONNECTION_NOT_ALLOWED`, если верно одно из следующего:

-   Метод вызвал пользователь (что очевидно, поскольку пользователи не могут вызывать методы через бизнес-подключение).
-   Метод вызвал бот, но режим бизнес-бота отключён в @botfather.
-   Метод вызвал бот, но этот метод нельзя вызывать через бизнес-подключение.

RPC-ошибка `BOT_ACCESS_FORBIDDEN` будет возвращена при использовании [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) либо остальных методов, доступных в бизнес-подключениях и _не_ требующих [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), если запрос пытался выполнить операцию, недопустимую в бизнес-подключении (например, отредактировать историю, загруженную не этим бизнес-ботом, и тому подобное).

У сообщений [message](/constructor/message/), отправленных бизнес-ботами от имени пользователя таким способом, будет установлен флаг `via_business_connection`: он показывает, что сообщение отправил бизнес-бот, указанный в [message](/constructor/message/).`via_bot_id`.

Сообщения [message](/constructor/message/), отправленные бизнес-ботами от имени пользователя, могут также содержать [инлайн-клавиатуры](/api/bots/buttons/), в том числе [callback-кнопки](/constructor/keyboardButtonCallback/): при нажатии на такую кнопку будет отправлено обновление [updateBusinessBotCallbackQuery](/constructor/updateBusinessBotCallbackQuery/), которое следует обрабатывать так, как описано [здесь »](/api/bots/buttons/#answering-a-callback-query) (_без_ обёртывания запроса в `invokeWithBusinessConnection`).

#### Перевод звёзд с бизнес-аккаунта бизнес-боту

Конструктор [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) позволяет перевести звёзды с баланса пользовательского аккаунта, подключённого к бизнес-боту, на баланс самого бизнес-бота; подробнее о полном порядке действий см. [здесь »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot).
