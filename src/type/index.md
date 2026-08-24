---
title: "Типы — справочник схемы TL"
original: "https://core.telegram.org/schema"
section: ref
description: "Алфавитный указатель всех 620 типов схемы TL Telegram с кратким описанием каждого."
layout: layout.njk
---

# Типы

Все типы схемы TL (620). Имена ведут на страницы со списком конструкторов и методов, возвращающих этот тип.

| Название | Описание |
|---|---|
| [#](/type/%23/) | Страница не была сохранена |
| [account.AuthorizationForm](/type/account.AuthorizationForm/) | Форма авторизации |
| [account.Authorizations](/type/account.Authorizations/) | Активные сессии |
| [account.AutoDownloadSettings](/type/account.AutoDownloadSettings/) | Настройки автозагрузки медиафайлов |
| [account.AutoSaveSettings](/type/account.AutoSaveSettings/) | Содержит настройки автосохранения медиафайлов |
| [account.BusinessChatLinks](/type/account.BusinessChatLinks/) | Содержит информацию о [глубоких ссылках на бизнес-чат »](/api/business/#business-chat-links), созданных текущей учётной записью. |
| [account.ChatThemes](/type/account.ChatThemes/) | Доступные темы чата |
| [account.ConnectedBots](/type/account.ConnectedBots/) | Информация о подключённых в данный момент [бизнес-ботах](/api/bots/connected-business-bots/). |
| [account.ContentSettings](/type/account.ContentSettings/) | Настройки материалов деликатного характера |
| [account.EmailVerified](/type/account.EmailVerified/) | Статус подтверждения электронной почты |
| [account.EmojiStatuses](/type/account.EmojiStatuses/) | Список [эмодзи-статусов](/api/emoji-status/) |
| [account.PaidMessagesRevenue](/type/account.PaidMessagesRevenue/) | Общее количество невозвращённых [Telegram Stars](/api/stars/), потраченных пользователем на отправку нам сообщений — напрямую либо через канал; подробнее о платных сообщениях см. [здесь »](/api/paid-messages/). |
| [account.PasskeyRegistrationOptions](/type/account.PasskeyRegistrationOptions/) | Параметры регистрации passkey; подробнее о полном процессе см. [здесь »](/api/passkeys/#creating-a-passkey). |
| [account.Passkeys](/type/account.Passkeys/) | Список [ключей доступа »](/api/passkeys/#list-passkeys), привязанных к текущему аккаунту. |
| [account.Password](/type/account.Password/) | Настройки двухфакторной авторизации |
| [account.PasswordInputSettings](/type/account.PasswordInputSettings/) | Конструктор для установки нового [пароля двухфакторной аутентификации по SRP](/api/srp/) |
| [account.PasswordSettings](/type/account.PasswordSettings/) | Личные сведения, связанные с информацией о пароле (почта для восстановления, данные Telegram [Passport](https://core.telegram.org/passport) и так далее) |
| [account.PrivacyRules](/type/account.PrivacyRules/) | Правила приватности |
| [account.ResetPasswordResult](/type/account.ResetPasswordResult/) | Результат запроса [account.resetPassword](/method/account.resetPassword/). |
| [account.ResolvedBusinessChatLinks](/type/account.ResolvedBusinessChatLinks/) | Содержит информацию об одной разрешённой [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links). |
| [account.SavedMusicIds](/type/account.SavedMusicIds/) | Список идентификаторов композиций (полей `id` конструктора [document](/constructor/document/)), закреплённых сейчас в нашем профиле, подробнее [см. здесь »](/api/profile/#music). |
| [account.SavedRingtone](/type/account.SavedRingtone/) | Содержит информацию о сохранённом звуке уведомления |
| [account.SavedRingtones](/type/account.SavedRingtones/) | Содержит список сохранённых звуков уведомлений |
| [account.SentEmailCode](/type/account.SentEmailCode/) | Отправленный код подтверждения по электронной почте |
| [account.Takeout](/type/account.Takeout/) | Сведения о выгрузке данных |
| [account.Themes](/type/account.Themes/) | Установленные темы оформления |
| [account.TmpPassword](/type/account.TmpPassword/) | Временный пароль |
| [account.WallPapers](/type/account.WallPapers/) | [Обои](/api/wallpapers/) |
| [account.WebAuthorizations](/type/account.WebAuthorizations/) | Веб-авторизации |
| [AccountDaysTTL](/type/AccountDaysTTL/) | Время жизни текущей учётной записи |
| [aicompose.Tones](/type/aicompose.Tones/) | Список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя. |
| [AiComposeTone](/type/AiComposeTone/) | [Тон ИИ-редактора »](/api/ai/#ai-compose-tones), используемый для перефразирования сообщений в определённом стиле с помощью [ИИ-редактора сообщений](/api/ai/#compose-messages). |
| [AiComposeToneExample](/type/AiComposeToneExample/) | Пример того, как [тон ИИ-редактора »](/api/ai/#ai-compose-tones) перефразирует сообщение; используется для предпросмотра в списке выбора тона. |
| [AttachMenuBot](/type/AttachMenuBot/) | Представляет [mini app бота, который можно запустить из меню вложений »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuBotIcon](/type/AttachMenuBotIcon/) | Представляет значок в меню вложений для [mini app ботов »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuBotIconColor](/type/AttachMenuBotIconColor/) | Представляет цвет значка в меню вложений для [mini app ботов »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuBots](/type/AttachMenuBots/) | Представляет список [mini app ботов, которые можно запустить из меню вложений »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuBotsBot](/type/AttachMenuBotsBot/) | Представляет [mini app бота, который можно запустить из меню вложений »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AttachMenuPeerType](/type/AttachMenuPeerType/) | Обозначает тип пира, поддерживаемый [меню вложений mini app бота](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu) |
| [AuctionBidLevel](/type/AuctionBidLevel/) | Описывает ставку на [аукционе](/api/auctions/). |
| [auth.Authorization](/type/auth.Authorization/) | Объект содержит информацию об авторизации пользователя. |
| [auth.CodeType](/type/auth.CodeType/) | Тип кода подтверждения, который будет отправлен следующим при вызове метода resendCode |
| [auth.ExportedAuthorization](/type/auth.ExportedAuthorization/) | Экспортированная авторизация |
| [auth.LoggedOut](/type/auth.LoggedOut/) | [Токен будущей авторизации »](/api/auth/#future-auth-tokens), который будет использоваться при последующих авторизациях |
| [auth.LoginToken](/type/auth.LoginToken/) | Токен входа (для входа по QR-коду) |
| [auth.PasskeyLoginOptions](/type/auth.PasskeyLoginOptions/) | Параметры входа по passkey; подробнее о полном процессе см. [здесь »](/api/passkeys/#logging-in-with-a-passkey). |
| [auth.PasswordRecovery](/type/auth.PasswordRecovery/) | Сведения о восстановлении [пароля двухфакторной аутентификации](/api/srp/); только для аккаунтов с [настроенной почтой для восстановления](/api/srp/#email-verification). |
| [auth.SentCode](/type/auth.SentCode/) | Содержит информацию о сообщении с кодом подтверждения, отправленном по SMS, звонком или через Telegram. |
| [auth.SentCodeType](/type/auth.SentCodeType/) | Тип отправленного кода подтверждения |
| [Authorization](/type/Authorization/) | Представляет активную сессию |
| [AutoDownloadSettings](/type/AutoDownloadSettings/) | Настройки автозагрузки медиафайлов |
| [AutoSaveException](/type/AutoSaveException/) | Настройки автосохранения для конкретного пира |
| [AutoSaveSettings](/type/AutoSaveSettings/) | Настройки автосохранения медиафайлов |
| [AvailableEffect](/type/AvailableEffect/) | Описывает [эффект сообщения »](/api/effects/). |
| [AvailableReaction](/type/AvailableReaction/) | Анимации, связанные с реакцией на сообщение |
| [BankCardOpenUrl](/type/BankCardOpenUrl/) | URL со сведениями о банковской карте, предоставленный банком |
| [BaseTheme](/type/BaseTheme/) | Основные параметры темы |
| [Birthday](/type/Birthday/) | Сведения о [дне рождения](/api/profile/#birthday) пользователя. |
| [Bool](/type/Bool/) | Логический тип. |
| [Boost](/type/Boost/) | Информация об одном или нескольких [бустах](/api/boost/), применённых определённым пользователем. |
| [BotApp](/type/BotApp/) | Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps). |
| [BotAppSettings](/type/BotAppSettings/) | Настройки [Mini App »](/api/bots/webapps/) |
| [BotBusinessConnection](/type/BotBusinessConnection/) | Содержит информацию о [бизнес-подключении бота](/api/bots/connected-business-bots/). |
| [BotCommand](/type/BotCommand/) | Описывает команду бота, которую можно использовать в чате |
| [BotCommandScope](/type/BotCommandScope/) | Представляет область видимости, в которой будут действовать команды бота, заданные с помощью [bots.setBotCommands](/method/bots.setBotCommands/). |
| [BotInfo](/type/BotInfo/) | Информация о ботах (доступные команды бота и прочее) |
| [BotInlineMessage](/type/BotInlineMessage/) | Инлайн-сообщение |
| [BotInlineResult](/type/BotInlineResult/) | Результаты инлайн-запроса |
| [BotMenuButton](/type/BotMenuButton/) | Указывает действие, выполняемое при нажатии на кнопку меню ботов в интерфейсе |
| [BotPreviewMedia](/type/BotPreviewMedia/) | Представляет [медиафайл предпросмотра главного Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.AccessSettings](/type/bots.AccessSettings/) | Настройки ограничения доступа для управляемого бота. |
| [bots.BotInfo](/type/bots.BotInfo/) | Локализованные имя, текст «О боте» и описание бота. |
| [bots.ExportedBotToken](/type/bots.ExportedBotToken/) | Токен управляемого бота, экспортированный ботом-менеджером. |
| [bots.PopularAppBots](/type/bots.PopularAppBots/) | Популярные [Main Mini Apps](/api/bots/webapps/#main-mini-apps), предназначенные для [вкладки приложений в глобальном поиске »](/api/search/#apps-tab). |
| [bots.PreviewInfo](/type/bots.PreviewInfo/) | Содержит информацию о [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.RequestedButton](/type/bots.RequestedButton/) | Содержит идентификатор запроса Mini App, сформированный, когда бот подготавливает кнопку запроса пира; подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps). |
| [BotVerification](/type/BotVerification/) | Описывает [значок верификации бота »](/api/bots/verification/). |
| [BotVerifierSettings](/type/BotVerifierSettings/) | Информация о текущем [боте-верификаторе »](/api/bots/verification/). |
| [BusinessAwayMessage](/type/BusinessAwayMessage/) | Описывает [сообщение об отсутствии Telegram Business](/api/business/#away-messages), автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в любой другой заданный период, когда мы не можем ответить сразу. |
| [BusinessAwayMessageSchedule](/type/BusinessAwayMessageSchedule/) | Указывает, когда следует отправлять [сообщения об отсутствии Telegram Business](/api/business/#away-messages). |
| [BusinessBotRecipients](/type/BusinessBotRecipients/) | Задаёт личные чаты, из которых [подключённый бизнес-бот »](/api/bots/connected-business-bots/) может получать сообщения и с которыми может взаимодействовать. |
| [BusinessBotRights](/type/BusinessBotRights/) | [Права бизнес-бота](/api/bots/connected-business-bots/). |
| [BusinessChatLink](/type/BusinessChatLink/) | Содержит информацию о [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links), созданной текущей учётной записью. |
| [BusinessGreetingMessage](/type/BusinessGreetingMessage/) | Описывает [приветственное сообщение Telegram Business](/api/business/#greeting-messages), автоматически отправляемое новым пользователям, которые пишут нам в личные сообщения впервые или после определённого периода бездействия. |
| [BusinessIntro](/type/BusinessIntro/) | [Введение в Telegram Business »](/api/business/#business-introduction). |
| [BusinessLocation](/type/BusinessLocation/) | Представляет местоположение [Telegram Business »](/api/business/#location). |
| [BusinessRecipients](/type/BusinessRecipients/) | Задаёт чаты, которые **могут** получать сообщения Telegram Business [об отсутствии »](/api/business/#away-messages) и [приветственные »](/api/business/#greeting-messages). |
| [BusinessWeeklyOpen](/type/BusinessWeeklyOpen/) | Интервал времени, задающий часы работы [Telegram Business](/api/business/#opening-hours). |
| [BusinessWorkHours](/type/BusinessWorkHours/) | Задаёт [часы работы Telegram Business](/api/business/#opening-hours). |
| [bytes](/type/bytes/) | Базовый «голый» тип. Синоним типа **[string](/type/string/)** с той разницей, что значение может содержать произвольные последовательности байтов, в том числе некорректные последовательности UTF-8. |
| [CdnConfig](/type/CdnConfig/) | Конфигурация для скачивания файлов через [CDN](https://core.telegram.org/cdn). |
| [CdnPublicKey](/type/CdnPublicKey/) | Открытый ключ, используемый **только** при рукопожатиях с дата-центрами [CDN](https://core.telegram.org/cdn). |
| [ChannelAdminLogEvent](/type/ChannelAdminLogEvent/) | Событие в журнале администратора канала |
| [ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/) | Событие журнала действий администратора канала |
| [ChannelAdminLogEventsFilter](/type/ChannelAdminLogEventsFilter/) | Фильтр для получения событий из журнала администратора канала |
| [ChannelLocation](/type/ChannelLocation/) | Географическое положение супергруппы (геогруппы) |
| [ChannelMessagesFilter](/type/ChannelMessagesFilter/) | Фильтр для получения только определённых типов сообщений канала |
| [ChannelParticipant](/type/ChannelParticipant/) | Участник канала |
| [ChannelParticipantsFilter](/type/ChannelParticipantsFilter/) | Фильтр для получения участников канала |
| [channels.AdminLogResults](/type/channels.AdminLogResults/) | События журнала администратора |
| [channels.ChannelParticipant](/type/channels.ChannelParticipant/) | Участник канала |
| [channels.ChannelParticipants](/type/channels.ChannelParticipants/) | Участники канала или супергруппы |
| [channels.SendAsPeers](/type/channels.SendAsPeers/) | Список пиров, от имени которых можно отправлять сообщения в определённой группе |
| [channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/) | Состояние вызова метода, использованного для жалобы на [спонсируемое сообщение »](/api/sponsored-messages/). |
| [Chat](/type/Chat/) | Объект описывает группу. |
| [ChatAdminRights](/type/ChatAdminRights/) | Представляет права администратора в [канале или супергруппе](/api/channel/). |
| [ChatAdminWithInvites](/type/ChatAdminWithInvites/) | Сведения о приглашениях в чат, созданных администраторами. |
| [ChatBannedRights](/type/ChatBannedRights/) | Представляет права обычного пользователя в [супергруппе, канале или чате](/api/channel/). |
| [ChatFull](/type/ChatFull/) | Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups), [гигагруппе](/api/channel/#gigagroups) или [обычной группе](/api/channel/#basic-groups). |
| [ChatInvite](/type/ChatInvite/) | Приглашение в чат |
| [ChatInviteImporter](/type/ChatInviteImporter/) | Когда и какой пользователь вступил в чат по пригласительной ссылке |
| [chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/) | Информация о [глубокой ссылке на папку с чатами »](/api/links/#chat-folder-links). |
| [chatlists.ChatlistUpdates](/type/chatlists.ChatlistUpdates/) | Обновлённые сведения о [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.ExportedChatlistInvite](/type/chatlists.ExportedChatlistInvite/) | Экспортированная [глубокая ссылка на папку с чатами »](/api/links/#chat-folder-links). |
| [chatlists.ExportedInvites](/type/chatlists.ExportedInvites/) | Список экспортированных [глубоких ссылок на папки с чатами »](/api/links/#chat-folder-links). |
| [ChatOnlines](/type/ChatOnlines/) | Количество пользователей чата, находящихся в сети |
| [ChatParticipant](/type/ChatParticipant/) | Сведения об участнике группы. |
| [ChatParticipants](/type/ChatParticipants/) | Содержит полный список участников [обычных групп »](/api/channel/#basic-groups); **НЕ** применимо к супергруппам и каналам. |
| [ChatPhoto](/type/ChatPhoto/) | Объект описывает фотографию профиля группы. |
| [ChatReactions](/type/ChatReactions/) | Доступные реакции в чате |
| [ChatTheme](/type/ChatTheme/) | Тема оформления чата |
| [CodeSettings](/type/CodeSettings/) | Настройки типа отправляемого кода |
| [Config](/type/Config/) | Объект содержит информацию о параметрах настройки API. |
| [ConnectedBot](/type/ConnectedBot/) | Содержит информацию о [подключённом бизнес-боте »](/api/bots/connected-business-bots/). |
| [ConnectedBotStarRef](/type/ConnectedBotStarRef/) | Информация об [активной партнёрской программе, в которой мы участвуем с одним из Mini App](/api/bots/referrals/#becoming-an-affiliate) |
| [Contact](/type/Contact/) | Контакт текущего пользователя. |
| [ContactBirthday](/type/ContactBirthday/) | Сведения о дне рождения контакта. |
| [contacts.Blocked](/type/contacts.Blocked/) | Информация о пользователях из чёрного списка текущего пользователя. |
| [contacts.ContactBirthdays](/type/contacts.ContactBirthdays/) | Сведения о днях рождения наших контактов. |
| [contacts.Contacts](/type/contacts.Contacts/) | Информация о списке контактов текущего пользователя. |
| [contacts.Found](/type/contacts.Found/) | Объект содержит информацию о пользователях, найденных по подстроке имени, и вспомогательные данные. |
| [contacts.ImportedContacts](/type/contacts.ImportedContacts/) | Объект содержит информацию об успешно импортированных контактах. |
| [contacts.ResolvedPeer](/type/contacts.ResolvedPeer/) | Пир, возвращённый после разрешения `@username` |
| [contacts.SponsoredPeers](/type/contacts.SponsoredPeers/) | Список спонсируемых пиров. |
| [contacts.TopPeers](/type/contacts.TopPeers/) | Популярные пиры |
| [ContactStatus](/type/ContactStatus/) | Статус контакта: в сети / не в сети. |
| [DataJSON](/type/DataJSON/) | Представляет объект в формате JSON |
| [DcOption](/type/DcOption/) | Информация для подключения к дата-центру. |
| [DecryptedDataBlock](/type/DecryptedDataBlock/) | Расшифрованный блок данных VoIP |
| [DecryptedMessage](/type/DecryptedMessage/) | Объект описывает содержимое зашифрованного сообщения. |
| [DecryptedMessageAction](/type/DecryptedMessageAction/) | Объект описывает действие, с которым связано сервисное сообщение. |
| [DecryptedMessageLayer](/type/DecryptedMessageLayer/) | Объект описывает содержимое зашифрованного сообщения применительно к требуемому слою. |
| [DecryptedMessageMedia](/type/DecryptedMessageMedia/) | Объект описывает медиасодержимое зашифрованного сообщения. |
| [DefaultHistoryTTL](/type/DefaultHistoryTTL/) | Содержит информацию о значении по умолчанию для настройки времени жизни (Time-To-Live), применяемой ко всем новым чатам. |
| [Dialog](/type/Dialog/) | Информация о чате. |
| [DialogFilter](/type/DialogFilter/) | Фильтр диалогов ([папка »](/api/folders/)) |
| [DialogFilterSuggested](/type/DialogFilterSuggested/) | Рекомендуемые фильтры диалогов ([папки »](/api/folders/)) |
| [DialogPeer](/type/DialogPeer/) | Пир или все пиры в папке |
| [DisallowedGiftsSettings](/type/DisallowedGiftsSettings/) | Запретить получение определённых типов [подарков](/api/gifts/). |
| [Document](/type/Document/) | Документ. |
| [DocumentAttribute](/type/DocumentAttribute/) | Различные возможные атрибуты документа (используются, чтобы определить, является ли он стикером, GIF-анимацией, видео, стикером-маской, изображением, аудиозаписью и так далее) |
| [double](/type/double/) | Базовый голый тип, значения которого соответствуют последовательностям из двух элементов, содержащим 64-битные вещественные числа в стандартном формате _double_. |
| [DraftMessage](/type/DraftMessage/) | Представляет [черновик](/api/drafts/) сообщения. |
| [e2e.CallPacket](/type/e2e.CallPacket/) | Конструктор-маркер, идентификатор которого (CRC32) используется при выработке и аутентификации [зашифрованных пакетов группового звонка](/api/end-to-end/group-calls/#packet-encryption). |
| [e2e.CallPacketLargeMsgId](/type/e2e.CallPacketLargeMsgId/) | Конструктор-маркер, идентификатор которого (CRC32) используется при подписи большого идентификатора сообщения, формируемого при шифровании [пакетов группового звонка](/api/end-to-end/group-calls/#packet-encryption). |
| [e2e.chain.Block](/type/e2e.chain.Block/) | Блок [основного блокчейна E2E-конференц-звонка](/api/end-to-end/group-calls/#block-structure), содержащий изменения состояния этого звонка и итоговое доказательство состояния. |
| [e2e.chain.Change](/type/e2e.chain.Change/) | Изменение, применённое к [состоянию блокчейна сквозного конференц-звонка](/api/end-to-end/group-calls/#change-types-for-group-calls) и записанное в [e2e.chain.Block](/type/e2e.chain.Block/) для изменения хранилища «ключ-значение» звонка, списка участников или общего ключа шифрования. |
| [e2e.chain.GroupBroadcast](/type/e2e.chain.GroupBroadcast/) | Широковещательное сообщение, используемое в [протоколе проверки ключей сквозного конференц-звонка](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow), которое реализует схему commit/reveal для генерации проверяемых эмодзи звонка. |
| [e2e.chain.GroupParticipant](/type/e2e.chain.GroupParticipant/) | Участник в [групповом состоянии конференц-звонка со сквозным шифрованием](/api/end-to-end/group-calls/#blockchain-state-management). |
| [e2e.chain.GroupState](/type/e2e.chain.GroupState/) | Список участников и внешняя маска разрешений для [состояния блокчейна сквозного шифрования конференц-звонка](/api/end-to-end/group-calls/#blockchain-state-management). |
| [e2e.chain.SharedKey](/type/e2e.chain.SharedKey/) | Зашифрованный [общий групповой ключевой материал](/api/end-to-end/group-calls/#shared-key-encryption) для конференц-звонка со сквозным шифрованием. |
| [e2e.chain.StateProof](/type/e2e.chain.StateProof/) | Подтверждение [состояния блокчейна сквозного шифрования конференц-звонка](/api/end-to-end/group-calls/#block-application-process) после применения блока. |
| [EmailVerification](/type/EmailVerification/) | Код подтверждения или токен электронной почты |
| [EmailVerifyPurpose](/type/EmailVerifyPurpose/) | Назначение подтверждения электронной почты |
| [EmojiGroup](/type/EmojiGroup/) | Представляет [категорию эмодзи](/api/emoji-categories/). |
| [EmojiKeyword](/type/EmojiKeyword/) | Ключевое слово эмодзи |
| [EmojiKeywordsDifference](/type/EmojiKeywordsDifference/) | Новые ключевые слова эмодзи |
| [EmojiLanguage](/type/EmojiLanguage/) | Язык эмодзи |
| [EmojiList](/type/EmojiList/) | Представляет список [пользовательских эмодзи](/api/custom-emoji/). |
| [EmojiStatus](/type/EmojiStatus/) | [Эмодзи-статус](/api/emoji-status/) |
| [EmojiURL](/type/EmojiURL/) | URL эмодзи |
| [EncryptedChat](/type/EncryptedChat/) | Объект содержит информацию о секретном чате. |
| [EncryptedFile](/type/EncryptedFile/) | Задаёт зашифрованный файл. |
| [EncryptedMessage](/type/EncryptedMessage/) | Объект содержит зашифрованное сообщение. |
| [Error](/type/Error/) | Объект, содержащий ошибку запроса. |
| [ExportedChatInvite](/type/ExportedChatInvite/) | Экспортированное приглашение в чат |
| [ExportedChatlistInvite](/type/ExportedChatlistInvite/) | Экспортированная [глубокая ссылка на папку с чатами »](/api/links/#chat-folder-links). |
| [ExportedContactToken](/type/ExportedContactToken/) | Описывает [временную ссылку на профиль](/api/links/#temporary-profile-links). |
| [ExportedMessageLink](/type/ExportedMessageLink/) | HTTP-ссылка и данные для встраивания сообщения канала |
| [ExportedStoryLink](/type/ExportedStoryLink/) | Представляет [глубокую ссылку на историю](/api/stories/#story-links) |
| [FactCheck](/type/FactCheck/) | Представляет [проверку фактов »](/api/factcheck/), выполненную независимым фактчекером. |
| [FileHash](/type/FileHash/) | Хеш загруженного файла, который следует проверить после скачивания |
| [FileLocation](/type/FileLocation/) | Указывает расположение фотографии; скоро будет объявлено устаревшим |
| [Folder](/type/Folder/) | Папка |
| [FolderPeer](/type/FolderPeer/) | Пир, связанный с папкой |
| [ForumTopic](/type/ForumTopic/) | Содержит информацию о [теме форума](/api/forum/#forum-topics) |
| [FoundStory](/type/FoundStory/) | История, найденная через [глобальный поиск историй »](/api/stories/#searching-stories). |
| [fragment.CollectibleInfo](/type/fragment.CollectibleInfo/) | Информация о [коллекционном объекте fragment](/api/fragment/). |
| [Game](/type/Game/) | Указывает на уже отправленную игру |
| [GeoPoint](/type/GeoPoint/) | Объект определяет географическую точку. |
| [GeoPointAddress](/type/GeoPointAddress/) | Необязательный адрес, связанный с [geoPoint](/constructor/geoPoint/). |
| [GlobalPrivacySettings](/type/GlobalPrivacySettings/) | Глобальные настройки приватности |
| [GroupCall](/type/GroupCall/) | Групповой звонок |
| [GroupCallDonor](/type/GroupCallDonor/) | Описывает донатера прямого эфира истории в [таблице лидеров пожертвований »](/api/group-calls/#paid-live-story-donations). |
| [GroupCallMessage](/type/GroupCallMessage/) | Представляет сообщение во время звонка, [реакцию эмодзи »](/api/group-calls/#in-call-reactions), платный комментарий к прямой трансляции истории или отдельное платное пожертвование в прямой трансляции истории. |
| [GroupCallParticipant](/type/GroupCallParticipant/) | Информация об участнике группового звонка |
| [GroupCallParticipantVideo](/type/GroupCallParticipantVideo/) | Информация о видеопотоке |
| [GroupCallParticipantVideoSourceGroup](/type/GroupCallParticipantVideoSourceGroup/) | Описывает группу идентификаторов источников синхронизации видео |
| [GroupCallStreamChannel](/type/GroupCallStreamChannel/) | Информация о потоке RTMP в групповом звонке или трансляции |
| [help.AppConfig](/type/help.AppConfig/) | Содержит различные [параметры клиентской конфигурации](/api/config/#client-configuration) |
| [help.AppUpdate](/type/help.AppUpdate/) | Содержит информацию о доступности обновления приложения. |
| [help.CountriesList](/type/help.CountriesList/) | Название, код ISO, локализованное название и телефонные коды/шаблоны всех доступных стран |
| [help.Country](/type/help.Country/) | Название, код ISO, локализованное название и телефонные коды/шаблоны конкретной страны |
| [help.CountryCode](/type/help.CountryCode/) | Код страны и шаблон номера телефона для конкретной страны |
| [help.DeepLinkInfo](/type/help.DeepLinkInfo/) | Содержит информацию о неподдерживаемой [глубокой ссылке »](/api/links/#unsupported-links) |
| [help.InviteText](/type/help.InviteText/) | Объект содержит информацию о тексте сообщения с приглашением. |
| [help.PassportConfig](/type/help.PassportConfig/) | Конфигурация Telegram [passport](https://core.telegram.org/passport) |
| [help.PeerColorOption](/type/help.PeerColorOption/) | Содержит информацию о [цветовой палитре »](/api/colors/). |
| [help.PeerColors](/type/help.PeerColors/) | Содержит информацию о нескольких [цветовых палитрах »](/api/colors/). |
| [help.PeerColorSet](/type/help.PeerColorSet/) | Содержит информацию о [цветовой палитре »](/api/colors/). |
| [help.PremiumPromo](/type/help.PremiumPromo/) | Сведения о рекламной кампании Telegram Premium |
| [help.PromoData](/type/help.PromoData/) | Информация о закреплённых пирах MTProxy или общественных объявлений. |
| [help.RecentMeUrls](/type/help.RecentMeUrls/) | Недавние ссылки t.me |
| [help.Support](/type/help.Support/) | Информация о пользователе службы поддержки, относящаяся к текущему пользователю. |
| [help.SupportName](/type/help.SupportName/) | Получить локализованное имя пользователя службы поддержки |
| [help.TermsOfService](/type/help.TermsOfService/) | Содержит информацию о последних условиях использования Telegram. |
| [help.TermsOfServiceUpdate](/type/help.TermsOfServiceUpdate/) | Обновление условий использования Telegram |
| [help.TimezonesList](/type/help.TimezonesList/) | Сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания [часов работы Telegram Business »](/api/business/#opening-hours). |
| [help.UserInfo](/type/help.UserInfo/) | Информация о пользователе |
| [HighScore](/type/HighScore/) | Рекорд в игре |
| [ImportedContact](/type/ImportedContact/) | Объект содержит информацию об успешно импортированном контакте. |
| [InlineBotSwitchPM](/type/InlineBotSwitchPM/) | Бот попросил пользователя написать ему в личных сообщениях |
| [InlineBotWebView](/type/InlineBotWebView/) | Задаёт кнопку [Mini App в инлайн-режиме](/api/bots/webapps/#inline-mode-mini-apps), отображаемую над списком результатов инлайн-запроса. |
| [InlineQueryPeerType](/type/InlineQueryPeerType/) | Тип пира для инлайн-запроса. |
| [InputAiComposeTone](/type/InputAiComposeTone/) | Ссылается на [тональность AI-редактора »](/api/ai/#ai-compose-tones) — либо на встроенную стандартную, либо на пользовательскую (по ID или слагу). |
| [InputAppEvent](/type/InputAppEvent/) | Объект содержит информацию о событии, произошедшем в приложении. |
| [InputBotApp](/type/InputBotApp/) | Используется для получения информации о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps) |
| [InputBotInlineMessage](/type/InputBotInlineMessage/) | Представляет отправленное инлайн-сообщение с точки зрения бота |
| [InputBotInlineMessageID](/type/InputBotInlineMessageID/) | Представляет отправленное инлайн-сообщение с точки зрения бота |
| [InputBotInlineResult](/type/InputBotInlineResult/) | Результат инлайн-бота |
| [InputBusinessAwayMessage](/type/InputBusinessAwayMessage/) | Описывает [сообщение об отсутствии Telegram Business](/api/business/#away-messages), автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в любой другой заданный период, когда мы не можем ответить сразу. |
| [InputBusinessBotRecipients](/type/InputBusinessBotRecipients/) | Задаёт личные чаты, с которыми может взаимодействовать [подключённый бизнес-бот »](/api/bots/connected-business-bots/). |
| [InputBusinessChatLink](/type/InputBusinessChatLink/) | Содержит информацию о [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links), которую предстоит создать текущей учётной записи. |
| [InputBusinessGreetingMessage](/type/InputBusinessGreetingMessage/) | Описывает [приветственное сообщение Telegram Business](/api/business/#greeting-messages), автоматически отправляемое новым пользователям, которые пишут нам в личные сообщения впервые или после определённого периода бездействия. |
| [InputBusinessIntro](/type/InputBusinessIntro/) | [Введение в Telegram Business »](/api/business/#business-introduction). |
| [InputBusinessRecipients](/type/InputBusinessRecipients/) | Задаёт чаты, которые **могут** получать сообщения Telegram Business [об отсутствии »](/api/business/#away-messages) и [приветственные »](/api/business/#greeting-messages). |
| [InputChannel](/type/InputChannel/) | Представляет канал |
| [InputChatlist](/type/InputChatlist/) | Представляет папку |
| [InputChatPhoto](/type/InputChatPhoto/) | Определяет новую фотографию профиля группы. |
| [InputChatTheme](/type/InputChatTheme/) | Задаёт [тему оформления чата »](/api/themes/#chat-themes). |
| [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | Конструкторы для проверки правильности [пароля двухфакторной аутентификации по SRP](/api/srp/). |
| [InputClientProxy](/type/InputClientProxy/) | Информация об [MTProxy](/mtproto/mtproto-transports/#transport-obfuscation), использованном для подключения. |
| [InputCollectible](/type/InputCollectible/) | Представляет [коллекционный объект Fragment »](/api/fragment/). |
| [InputContact](/type/InputContact/) | Объект описывает контакт из телефонной книги пользователя. |
| [InputDialogPeer](/type/InputDialogPeer/) | Пир или все пиры в определённой папке |
| [InputDocument](/type/InputDocument/) | Определяет документ для дальнейшего взаимодействия. |
| [InputEncryptedChat](/type/InputEncryptedChat/) | [Чат со сквозным шифрованием](/api/end-to-end/). |
| [InputEncryptedFile](/type/InputEncryptedFile/) | Объект задаёт зашифрованный файл для вложения |
| [InputFile](/type/InputFile/) | Определяет файл, загруженный клиентом. |
| [InputFileLocation](/type/InputFileLocation/) | Определяет расположение файла для загрузки. |
| [InputFolderPeer](/type/InputFolderPeer/) | Пир в папке |
| [InputGame](/type/InputGame/) | Игра для отправки |
| [InputGeoPoint](/type/InputGeoPoint/) | Определяет географическую точку. |
| [InputGroupCall](/type/InputGroupCall/) | Обозначает групповой звонок |
| [InputInvoice](/type/InputInvoice/) | Счёт |
| [InputMedia](/type/InputMedia/) | Определяет медиасодержимое сообщения. |
| [InputMessage](/type/InputMessage/) | Сообщение |
| [InputMessageReadMetric](/type/InputMessageReadMetric/) | Метрика прочтения для одного показа сообщения, описывающая, как долго сообщение было видно в области просмотра чата. |
| [InputNotifyPeer](/type/InputNotifyPeer/) | Объект описывает набор пользователей и/или групп, которые создают уведомления. |
| [InputPasskeyCredential](/type/InputPasskeyCredential/) | Учётные данные, используемые для регистрации [ключа доступа »](/api/passkeys/) или для входа с его помощью. |
| [InputPasskeyResponse](/type/InputPasskeyResponse/) | Ответ WebAuthn, сформированный аутентификатором при регистрации или входе с помощью [ключа доступа с открытым ключом »](/api/passkeys/). |
| [InputPaymentCredentials](/type/InputPaymentCredentials/) | Платёжные реквизиты |
| [InputPeer](/type/InputPeer/) | Пир |
| [InputPeerNotifySettings](/type/InputPeerNotifySettings/) | Настройки уведомлений. |
| [InputPhoneCall](/type/InputPhoneCall/) | Телефонный звонок |
| [InputPhoto](/type/InputPhoto/) | Определяет фотографию для дальнейшего взаимодействия. |
| [InputPrivacyKey](/type/InputPrivacyKey/) | **Ключи** приватности вместе с [правилами приватности »](/api/privacy/#privacy-rules) определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором [PrivacyKey](/type/PrivacyKey/) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/). |
| [InputPrivacyRule](/type/InputPrivacyRule/) | **Правила** приватности указывают, _кто_ может и кто не может что-либо делать; они задаются типом [PrivacyRule](/type/PrivacyRule/) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/). |
| [InputQuickReplyShortcut](/type/InputQuickReplyShortcut/) | Представляет [шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts). |
| [InputReplyTo](/type/InputReplyTo/) | Содержит информацию о сообщении или истории, на которые даётся ответ. |
| [InputSavedStarGift](/type/InputSavedStarGift/) | Указывает на [подарок »](/api/gifts/). |
| [InputSecureFile](/type/InputSecureFile/) | Защищённый файл [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [InputSecureValue](/type/InputSecureValue/) | Защищённое значение, [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption) |
| [InputSingleMedia](/type/InputSingleMedia/) | Отдельный медиафайл в [альбоме или сгруппированных медиафайлах](/api/files/#albums-grouped-media), отправленный методом [messages.sendMultiMedia](/method/messages.sendMultiMedia/). |
| [InputStarGiftAuction](/type/InputStarGiftAuction/) | Определяет [аукцион коллекционных подарков »](/api/auctions/) — либо по идентификатору связанного коллекционного подарка, либо по слагу глубокой ссылки на аукцион. |
| [InputStarsTransaction](/type/InputStarsTransaction/) | Используется для получения информации о [транзакции с Telegram Stars »](/api/stars/#balance-and-transaction-history). |
| [InputStickeredMedia](/type/InputStickeredMedia/) | Представляет медиафайл с прикреплёнными стикерами |
| [InputStickerSet](/type/InputStickerSet/) | Представляет набор стикеров |
| [InputStickerSetItem](/type/InputStickerSetItem/) | Стикер |
| [InputStorePaymentPurpose](/type/InputStorePaymentPurpose/) | Информация о покупке Telegram Premium |
| [InputTheme](/type/InputTheme/) | Облачная тема оформления |
| [InputThemeSettings](/type/InputThemeSettings/) | Параметры темы оформления |
| [InputUser](/type/InputUser/) | Определяет пользователя для дальнейшего взаимодействия. |
| [InputWallPaper](/type/InputWallPaper/) | [Обои](/api/wallpapers/) |
| [InputWebDocument](/type/InputWebDocument/) | Задаёт документ, который серверы telegram должны будут загрузить по указанному адресу |
| [InputWebFileLocation](/type/InputWebFileLocation/) | Расположение удалённого файла |
| [int](/type/int/) | Базовый голый тип, значения которого соответствуют одноэлементным последовательностям, то есть числам от -2^31 до 2^31-1, которые в этом случае представляют сами себя. |
| [int256](/type/int256/) | Базовый голый тип, значения которого соответствуют 256-битному целому числу. |
| [int32](/type/int32/) | Базовый голый тип, значения которого соответствуют 32-битному целому числу. |
| [int512](/type/int512/) | Базовый голый тип, значения которого соответствуют 512-битному целому числу. |
| [int64](/type/int64/) | Базовый голый тип, значения которого соответствуют 64-битному целому числу. |
| [Invoice](/type/Invoice/) | Счёт |
| [JSONObjectValue](/type/JSONObjectValue/) | Пара «ключ: значение» в формате JSON |
| [JSONValue](/type/JSONValue/) | Значение JSON |
| [KeyboardButton](/type/KeyboardButton/) | Кнопки клавиатуры бота или инлайн-клавиатуры |
| [KeyboardButtonRow](/type/KeyboardButtonRow/) | Ряды клавиатуры бота или инлайн-клавиатуры |
| [KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Этот конструктор позволяет задать для кнопки собственный цвет фона и подпись из пользовательского эмодзи, [подробнее »](/api/bots/buttons/#button-styles). |
| [LabeledPrice](/type/LabeledPrice/) | Ценник с подписью |
| [LangPackDifference](/type/LangPackDifference/) | Изменения языкового пакета |
| [LangPackLanguage](/type/LangPackLanguage/) | Язык языкового пакета |
| [LangPackString](/type/LangPackString/) | Строка языкового пакета |
| [long](/type/long/) | Базовый голый тип, значения которого соответствуют последовательностям из двух элементов, представляющим 64-битные знаковые числа (в порядке little-endian). |
| [MaskCoords](/type/MaskCoords/) | Координаты маски (если это стикер-маска, наложенный на фотографию) |
| [MediaArea](/type/MediaArea/) | Представляет [медиазону истории »](/api/stories/#media-areas) |
| [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | Координаты и размер кликабельной прямоугольной области поверх истории. |
| [Message](/type/Message/) | Объект, описывающий сообщение. |
| [MessageAction](/type/MessageAction/) | Объект, описывающий действия, связанные с сервисным сообщением. |
| [MessageEntity](/type/MessageEntity/) | Сущности оформления сообщения, задающие форматирование текста |
| [MessageExtendedMedia](/type/MessageExtendedMedia/) | [Платное медиа, подробнее см. здесь »](/api/paid-media/). |
| [MessageFwdHeader](/type/MessageFwdHeader/) | Информация о пересланном сообщении |
| [MessageMedia](/type/MessageMedia/) | Медиа |
| [MessagePeerReaction](/type/MessagePeerReaction/) | Как определённый пир отреагировал на сообщение |
| [MessagePeerVote](/type/MessagePeerVote/) | Как пользователь проголосовал в опросе |
| [MessageRange](/type/MessageRange/) | Указывает диапазон сообщений чата |
| [MessageReactions](/type/MessageReactions/) | [Реакции на сообщения »](/api/reactions/) |
| [MessageReactor](/type/MessageReactor/) | Информация о пользователе в [таблице лидеров платных реакций за Telegram Stars](/api/reactions/#paid-reactions) для сообщения. |
| [MessageReplies](/type/MessageReplies/) | Информация о [комментариях к публикациям (для каналов) или ответах на сообщения (для групп)](/api/threads/) |
| [MessageReplyHeader](/type/MessageReplyHeader/) | Сведения об ответе |
| [MessageReportOption](/type/MessageReportOption/) | Пункт меню жалобы |
| [messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/) | Найденные сообщения, затронутые изменениями |
| [messages.AffectedHistory](/type/messages.AffectedHistory/) | Объект содержит информацию о затронутой части истории переписки с пользователем или в чате. |
| [messages.AffectedMessages](/type/messages.AffectedMessages/) | Сообщения, затронутые изменениями |
| [messages.AllStickers](/type/messages.AllStickers/) | Все стикеры |
| [messages.ArchivedStickers](/type/messages.ArchivedStickers/) | Архивированные стикеры |
| [messages.AvailableEffects](/type/messages.AvailableEffects/) | Полный список доступных [анимированных эффектов для сообщений »](/api/effects/). |
| [messages.AvailableReactions](/type/messages.AvailableReactions/) | Анимации и метаданные, связанные с [реакциями на сообщения »](/api/reactions/) |
| [messages.BotApp](/type/messages.BotApp/) | Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps) |
| [messages.BotCallbackAnswer](/type/messages.BotCallbackAnswer/) | Ответ бота на callback-запрос |
| [messages.BotPreparedInlineMessage](/type/messages.BotPreparedInlineMessage/) | Представляет [заранее подготовленное инлайн-сообщение, сохранённое ботом для отправки пользователю через веб-приложение »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |
| [messages.BotResults](/type/messages.BotResults/) | Результат запроса к инлайн-боту |
| [messages.ChatAdminsWithInvites](/type/messages.ChatAdminsWithInvites/) | Сведения о приглашениях в чат, созданных администраторами. |
| [messages.ChatFull](/type/messages.ChatFull/) | Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups), [гигагруппе](/api/channel/#gigagroups) или [обычной группе](/api/channel/#basic-groups). |
| [messages.ChatInviteImporters](/type/messages.ChatInviteImporters/) | Список пользователей, воспользовавшихся пригласительной ссылкой на чат. |
| [messages.Chats](/type/messages.Chats/) | Объект содержит список чатов со вспомогательными данными. |
| [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/) | Содержит текст подтверждения, который следует показать пользователю при [импорте истории переписки, подробнее см. здесь »](/api/import/). |
| [messages.ComposedMessageWithAI](/type/messages.ComposedMessageWithAI/) | Представляет сообщение, изменённое ИИ. |
| [messages.DhConfig](/type/messages.DhConfig/) | Содержит параметры протокола генерации ключа по схеме Диффи — Хеллмана. |
| [messages.DialogFilters](/type/messages.DialogFilters/) | Сведения о [папке](/api/folders/) |
| [messages.Dialogs](/type/messages.Dialogs/) | Объект содержит список чатов с сообщениями и вспомогательными данными. |
| [messages.DiscussionMessage](/type/messages.DiscussionMessage/) | Информация о ветке сообщений |
| [messages.EmojiGameInfo](/type/messages.EmojiGameInfo/) | Информация об игре в кости. |
| [messages.EmojiGameOutcome](/type/messages.EmojiGameOutcome/) | Результат игры в кости. |
| [messages.EmojiGroups](/type/messages.EmojiGroups/) | Представляет список [категорий эмодзи](/api/emoji-categories/). |
| [messages.ExportedChatInvite](/type/messages.ExportedChatInvite/) | Содержит информацию о приглашении в чат и, возможно, указатель на самое новое приглашение в чат. |
| [messages.ExportedChatInvites](/type/messages.ExportedChatInvites/) | Информация о приглашениях в чат, экспортированных определённым администратором. |
| [messages.FavedStickers](/type/messages.FavedStickers/) | Избранные стикеры |
| [messages.FeaturedStickers](/type/messages.FeaturedStickers/) | Новые наборы стикеров |
| [messages.ForumTopics](/type/messages.ForumTopics/) | Содержит информацию о нескольких [темах форума](/api/forum/#forum-topics) |
| [messages.FoundStickers](/type/messages.FoundStickers/) | Найденные [стикеры](/api/stickers/) |
| [messages.FoundStickerSets](/type/messages.FoundStickerSets/) | Найденные наборы стикеров |
| [messages.HighScores](/type/messages.HighScores/) | Рекорды (в играх) |
| [messages.HistoryImport](/type/messages.HistoryImport/) | Идентификатор [сессии импорта истории, подробнее см. здесь »](/api/import/). |
| [messages.HistoryImportParsed](/type/messages.HistoryImportParsed/) | Содержит информацию о файле экспорта чата, выгруженном из стороннего мессенджера. |
| [messages.InactiveChats](/type/messages.InactiveChats/) | Список неактивных чатов |
| [messages.InvitedUsers](/type/messages.InvitedUsers/) | Содержит информацию об успешно и неуспешно [приглашённых »](/api/invites/#direct-invites) пользователях. |
| [messages.MessageEditData](/type/messages.MessageEditData/) | Данные для редактирования сообщения с медиа |
| [messages.MessageReactionsList](/type/messages.MessageReactionsList/) | Список пиров, отреагировавших на конкретное сообщение |
| [messages.Messages](/type/messages.Messages/) | Объект содержит информацию о списке сообщений и вспомогательные данные. |
| [messages.MessageViews](/type/messages.MessageViews/) | Счётчик просмотров и пересылок + сведения об ответах |
| [messages.MyStickers](/type/messages.MyStickers/) | Список [наборов стикеров, принадлежащих текущему аккаунту »](/api/stickers/). |
| [messages.PeerDialogs](/type/messages.PeerDialogs/) | Список диалогов |
| [messages.PeerSettings](/type/messages.PeerSettings/) | Настройки пира |
| [messages.PreparedInlineMessage](/type/messages.PreparedInlineMessage/) | Представляет [заранее подготовленное инлайн-сообщение, полученное через mini app бота, которое можно отправить в некоторые чаты »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |
| [messages.QuickReplies](/type/messages.QuickReplies/) | Информация о [шаблонах быстрых ответов »](/api/business/#quick-reply-shortcuts). |
| [messages.Reactions](/type/messages.Reactions/) | Набор [реакций на сообщения](/api/reactions/) |
| [messages.RecentStickers](/type/messages.RecentStickers/) | Недавние стикеры |
| [messages.SavedDialogs](/type/messages.SavedDialogs/) | Представляет несколько [диалогов из сохранённых сообщений »](/api/saved-messages/). |
| [messages.SavedGifs](/type/messages.SavedGifs/) | Сохранённые GIF |
| [messages.SavedReactionTags](/type/messages.SavedReactionTags/) | Список имён [тегов-реакций »](/api/saved-messages/#tags), назначенных пользователем. |
| [messages.SearchCounter](/type/messages.SearchCounter/) | Количество результатов, которые будут возвращены поиском |
| [messages.SearchResultsCalendar](/type/messages.SearchResultsCalendar/) | Информация о найденных сообщениях, отправленных в определённый день |
| [messages.SearchResultsPositions](/type/messages.SearchResultsPositions/) | Информация о разреженных позициях сообщений |
| [messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/) | Содержит информацию о сообщении, отправленном в секретный чат. |
| [messages.SponsoredMessages](/type/messages.SponsoredMessages/) | Набор [рекламных сообщений](/api/sponsored-messages/), связанных с каналом |
| [messages.Stickers](/type/messages.Stickers/) | Стикеры |
| [messages.StickerSet](/type/messages.StickerSet/) | Набор стикеров |
| [messages.StickerSetInstallResult](/type/messages.StickerSetInstallResult/) | Результат процесса установки набора стикеров |
| [messages.TranscribedAudio](/type/messages.TranscribedAudio/) | [Расшифрованный текст](/api/transcribe/) голосового сообщения |
| [messages.TranslatedText](/type/messages.TranslatedText/) | Переведённый текст с [сущностями оформления](/api/entities/). |
| [messages.VotesList](/type/messages.VotesList/) | Как пользователи проголосовали в опросе |
| [messages.WebPage](/type/messages.WebPage/) | Содержит веб-страницу Instant View. |
| [messages.WebPagePreview](/type/messages.WebPagePreview/) | Представляет предпросмотр веб-страницы. |
| [MessagesFilter](/type/MessagesFilter/) | Объект описывает фильтр сообщений. |
| [MessageViews](/type/MessageViews/) | Счётчик просмотров и пересылок + сведения об ответах на конкретное сообщение |
| [MissingInvitee](/type/MissingInvitee/) | Информация о том, почему определённого пользователя не удалось [пригласить »](/api/invites/#direct-invites). |
| [MyBoost](/type/MyBoost/) | Содержит информацию об одном [слоте буста »](/api/boost/). |
| [NearestDc](/type/NearestDc/) | Объект содержит информацию о ближайшем дата-центре. |
| [NotificationSound](/type/NotificationSound/) | Представляет звук уведомления |
| [NotifyPeer](/type/NotifyPeer/) | Объект описывает набор пользователей и/или групп, которые создают уведомления. |
| [Null](/type/Null/) | Объект соответствует произвольному пустому объекту. |
| [OutboxReadDate](/type/OutboxReadDate/) | Точная дата прочтения личного сообщения, отправленного нами другому пользователю. |
| [Page](/type/Page/) | Страница [Instant view](https://instantview.telegram.org) |
| [PageBlock](/type/PageBlock/) | Представляет [элемент страницы instant view](https://instantview.telegram.org) |
| [PageCaption](/type/PageCaption/) | Подпись страницы |
| [PageListItem](/type/PageListItem/) | Запись в списке заблокированных |
| [PageListOrderedItem](/type/PageListOrderedItem/) | Представляет [упорядоченный список instant view](https://instantview.telegram.org) |
| [PageRelatedArticle](/type/PageRelatedArticle/) | Связанные статьи |
| [PageTableCell](/type/PageTableCell/) | Представляет таблицу в [таблице instant view](https://instantview.telegram.org) |
| [PageTableRow](/type/PageTableRow/) | Строка таблицы |
| [PaidReactionPrivacy](/type/PaidReactionPrivacy/) | [Настройки приватности платных реакций »](/api/reactions/#paid-reactions) |
| [Passkey](/type/Passkey/) | Понятные человеку сведения о ключе доступа, привязанном к аккаунту; возвращаются при [создании ключа доступа »](/api/passkeys/#creating-a-passkey) или [получении списка ключей доступа »](/api/passkeys/#list-passkeys). |
| [PasswordKdfAlgo](/type/PasswordKdfAlgo/) | Функция формирования ключа, используемая при вычислении [хеша пароля для двухфакторной авторизации SRP](/api/srp/) |
| [PaymentCharge](/type/PaymentCharge/) | Списанный платёж |
| [PaymentFormMethod](/type/PaymentFormMethod/) | Представляет способ оплаты |
| [PaymentRequestedInfo](/type/PaymentRequestedInfo/) | Запрошенные платёжные данные |
| [payments.BankCardData](/type/payments.BankCardData/) | Сведения о банковской карте, предоставленные банком (или банками) карты |
| [payments.CheckCanSendGiftResult](/type/payments.CheckCanSendGiftResult/) | Указывает, можно отправить подарок или нет. |
| [payments.CheckedGiftCode](/type/payments.CheckedGiftCode/) | Информация о [подарочном коде Telegram Premium](/api/giveaways/). |
| [payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/) | Активные [партнёрства](/api/bots/referrals/#becoming-an-affiliate) |
| [payments.ExportedInvoice](/type/payments.ExportedInvoice/) | Экспортированный счёт |
| [payments.GiveawayInfo](/type/payments.GiveawayInfo/) | Информация о [розыгрыше Telegram Premium](/api/giveaways/). |
| [payments.PaymentForm](/type/payments.PaymentForm/) | Форма оплаты |
| [payments.PaymentReceipt](/type/payments.PaymentReceipt/) | Чек об оплате |
| [payments.PaymentResult](/type/payments.PaymentResult/) | Результат оплаты |
| [payments.ResaleStarGifts](/type/payments.ResaleStarGifts/) | Список подарков, выставленных на [перепродажу »](/api/gifts/#reselling-collectible-gifts). |
| [payments.SavedInfo](/type/payments.SavedInfo/) | Сохранённые платёжные данные |
| [payments.SavedStarGifts](/type/payments.SavedStarGifts/) | Представляет список [подарков](/api/gifts/). |
| [payments.StarGiftActiveAuctions](/type/payments.StarGiftActiveAuctions/) | Список [аукционов подарков »](/api/auctions/), в которых пользователь сделал ставку и которые сейчас активны, либо признак того, что локально закешированный список не изменился. |
| [payments.StarGiftAuctionAcquiredGifts](/type/payments.StarGiftAuctionAcquiredGifts/) | Описывает все подарки, которые текущий пользователь выиграл на [аукционе](/api/auctions/). |
| [payments.StarGiftAuctionState](/type/payments.StarGiftAuctionState/) | Описывает [аукцион коллекционных подарков »](/api/auctions/). |
| [payments.StarGiftCollections](/type/payments.StarGiftCollections/) | Представляет список [коллекций подарков »](/api/gifts/#gift-collections). |
| [payments.StarGifts](/type/payments.StarGifts/) | Доступные [подарки »](/api/gifts/). |
| [payments.StarGiftUpgradeAttributes](/type/payments.StarGiftUpgradeAttributes/) | Список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [payments.StarGiftUpgradePreview](/type/payments.StarGiftUpgradePreview/) | Предпросмотр возможных атрибутов (выбираемых случайно), которые [подарок »](/api/gifts/) может получить после улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/gifts/#collectible-gifts). |
| [payments.StarGiftWithdrawalUrl](/type/payments.StarGiftWithdrawalUrl/) | URL, по которому можно импортировать экспортированный NFT на Fragment. |
| [payments.StarsRevenueAdsAccountUrl](/type/payments.StarsRevenueAdsAccountUrl/) | Содержит URL страницы, на которой пользователь сможет размещать рекламу для канала или бота, оплачивая её [Telegram Stars](/api/stars/#paying-for-ads). |
| [payments.StarsRevenueStats](/type/payments.StarsRevenueStats/) | [Статистика доходов в Stars; подробнее см. здесь »](/api/stars/). |
| [payments.StarsRevenueWithdrawalUrl](/type/payments.StarsRevenueWithdrawalUrl/) | Содержит URL, который следует использовать для [вывода дохода в Telegram Stars](/api/stars/#withdrawing-revenue). |
| [payments.StarsStatus](/type/payments.StarsStatus/) | Информация о текущих [подписках за Telegram Stars, балансе и истории транзакций »](/api/stars/#balance-and-transaction-history). |
| [payments.SuggestedStarRefBots](/type/payments.SuggestedStarRefBots/) | Список предлагаемых [Mini Apps](/api/bots/webapps/) с доступными [партнёрскими программами](/api/bots/referrals/) |
| [payments.UniqueStarGift](/type/payments.UniqueStarGift/) | Представляет [коллекционный подарок »](/api/gifts/#collectible-gifts). |
| [payments.UniqueStarGiftValueInfo](/type/payments.UniqueStarGiftValueInfo/) | Информация о стоимости [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [payments.ValidatedRequestedInfo](/type/payments.ValidatedRequestedInfo/) | Проверенные запрошенные сведения |
| [PaymentSavedCredentials](/type/PaymentSavedCredentials/) | Сохранённые платёжные реквизиты |
| [Peer](/type/Peer/) | Идентификатор личного чата, обычной группы, группы или канала (подробнее см. [здесь »](/api/peers/)). |
| [PeerBlocked](/type/PeerBlocked/) | Информация о заблокированном пользователе |
| [PeerColor](/type/PeerColor/) | Представляет [цветовую палитру »](/api/colors/). |
| [PeerLocated](/type/PeerLocated/) | Пир с геолокацией |
| [PeerNotifySettings](/type/PeerNotifySettings/) | Настройки уведомлений. |
| [PeerSettings](/type/PeerSettings/) | Список действий, доступных при взаимодействии с этим пользователем; отображаются как предлагаемые действия в панели чата |
| [PeerStories](/type/PeerStories/) | [Истории](/api/stories/), связанные с пиром |
| [PendingSuggestion](/type/PendingSuggestion/) | Представляет [пользовательскую ожидающую рекомендацию »](/api/config/#custom-suggestions). |
| [phone.ExportedGroupCallInvite](/type/phone.ExportedGroupCallInvite/) | Экспортированное приглашение в групповой звонок. |
| [phone.GroupCall](/type/phone.GroupCall/) | Содержит информацию о групповом звонке и частичную информацию о его участниках. |
| [phone.GroupCallStars](/type/phone.GroupCallStars/) | Содержит общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. [платные пожертвования в прямых историях »](/api/group-calls/#paid-live-story-donations). |
| [phone.GroupCallStreamChannels](/type/phone.GroupCallStreamChannels/) | Информация о потоках RTMP в групповом звонке или трансляции |
| [phone.GroupCallStreamRtmpUrl](/type/phone.GroupCallStreamRtmpUrl/) | URL для RTMP и ключ потока для использования в программах трансляции |
| [phone.GroupParticipants](/type/phone.GroupParticipants/) | Информация об участниках группового звонка или трансляции |
| [phone.JoinAsPeers](/type/phone.JoinAsPeers/) | Список пиров, от имени которых можно присоединиться к групповому звонку, представившись определённым пользователем или каналом. |
| [phone.PhoneCall](/type/phone.PhoneCall/) | Телефонный звонок |
| [PhoneCall](/type/PhoneCall/) | Телефонный звонок |
| [PhoneCallDiscardReason](/type/PhoneCallDiscardReason/) | Почему звонок был завершён? |
| [PhoneCallProtocol](/type/PhoneCallProtocol/) | Протокол телефонного звонка |
| [PhoneConnection](/type/PhoneConnection/) | Соединение телефонного звонка |
| [Photo](/type/Photo/) | Объект описывает фотографию. |
| [photos.Photo](/type/photos.Photo/) | Фотография со вспомогательными данными. |
| [photos.Photos](/type/photos.Photos/) | Объект содержит список фотографий со вспомогательными данными. |
| [PhotoSize](/type/PhotoSize/) | Расположение изображения определённого размера |
| [Poll](/type/Poll/) | Обозначает сообщение с опросом |
| [PollAnswer](/type/PollAnswer/) | Обозначает один из вариантов ответа в [опросе](/type/Poll/). |
| [PollAnswerVoters](/type/PollAnswerVoters/) | Как пользователи проголосовали за определённый вариант ответа в опросе |
| [PollResults](/type/PollResults/) | Результаты опроса |
| [PopularContact](/type/PopularContact/) | Популярный контакт |
| [PostAddress](/type/PostAddress/) | Адрес доставки |
| [PostInteractionCounters](/type/PostInteractionCounters/) | Счётчики взаимодействий |
| [premium.BoostsList](/type/premium.BoostsList/) | Список [бустов](/api/boost/), применённых к пиру несколькими пользователями. |
| [premium.BoostsStatus](/type/premium.BoostsStatus/) | Содержит информацию о текущем [состоянии бустов](/api/boost/) пира. |
| [premium.MyBoosts](/type/premium.MyBoosts/) | Список пиров, которых мы сейчас [бустим](/api/boost/), и количество оставшихся у нас [слотов бустов](/api/boost/). |
| [PremiumGiftCodeOption](/type/PremiumGiftCodeOption/) | Вариант [розыгрыша](/api/giveaways/). |
| [PremiumSubscriptionOption](/type/PremiumSubscriptionOption/) | Вариант подписки Telegram Premium |
| [PrepaidGiveaway](/type/PrepaidGiveaway/) | Содержит информацию о [предоплаченном розыгрыше »](/api/giveaways/). |
| [PrivacyKey](/type/PrivacyKey/) | **Ключи** приватности вместе с [правилами приватности »](/api/privacy/#privacy-rules) определяют, _что_ кому разрешено или запрещено делать; они задаются конструктором [PrivacyKey](/type/PrivacyKey/) и его входным аналогом [InputPrivacyKey](/type/InputPrivacyKey/). |
| [PrivacyRule](/type/PrivacyRule/) | **Правила** приватности вместе с [ключами приватности](/api/privacy/#privacy-keys) указывают, _что_ можно и что нельзя делать; они задаются конструктором [PrivacyRule](/type/PrivacyRule/) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/). |
| [ProfileTab](/type/ProfileTab/) | Представляет [вкладку страницы профиля »](/api/profile/#tabs). |
| [PublicForward](/type/PublicForward/) | Содержит информацию о пересылках [истории](/api/stories/) в виде сообщения в публичные чаты и о репостах публичными каналами. |
| [QuickReply](/type/QuickReply/) | [Шаблон быстрого ответа](/api/business/#quick-reply-shortcuts). |
| [Reaction](/type/Reaction/) | [Реакция на сообщение](/api/reactions/) |
| [ReactionCount](/type/ReactionCount/) | Количество пользователей, отреагировавших определённым эмодзи |
| [ReactionNotificationsFrom](/type/ReactionNotificationsFrom/) | Настройки уведомлений о реакциях |
| [ReactionsNotifySettings](/type/ReactionsNotifySettings/) | Настройки уведомлений о реакциях; подробнее см. [здесь »](/api/reactions/#notifications-about-reactions). |
| [ReadParticipantDate](/type/ReadParticipantDate/) | Содержит информацию о том, когда определённый участник прочитал сообщение |
| [ReceivedNotifyMessage](/type/ReceivedNotifyMessage/) | Подтверждение получения сообщения |
| [RecentMeUrl](/type/RecentMeUrl/) | Недавние ссылки t.me |
| [RecentStory](/type/RecentStory/) | Сводка [активных историй »](/api/stories/#recent-story-summaries) пира. |
| [ReplyMarkup](/type/ReplyMarkup/) | Разметка ответа для клавиатур ботов и инлайн-клавиатур |
| [ReportReason](/type/ReportReason/) | Причина жалобы |
| [ReportResult](/type/ReportResult/) | Представляет меню жалобы или её результат |
| [RequestedPeer](/type/RequestedPeer/) | Информация о пире, которым пользователь поделился с текущим авторизованным ботом с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). |
| [RequestPeerType](/type/RequestPeerType/) | Критерии отбора для списка выбора пиров, показываемого пользователю. |
| [RequirementToContact](/type/RequirementToContact/) | Задаёт требование, которое должно быть выполнено, чтобы связаться с пользователем. |
| [RestrictionReason](/type/RestrictionReason/) | Причина ограничения |
| [RichText](/type/RichText/) | Форматированный текст |
| [SavedContact](/type/SavedContact/) | Сохранённый контакт |
| [SavedDialog](/type/SavedDialog/) | Представляет [диалог из сохранённых сообщений »](/api/saved-messages/). |
| [SavedReactionTag](/type/SavedReactionTag/) | Информация о [теге реакции в избранном »](/api/saved-messages/#tags). |
| [SavedStarGift](/type/SavedStarGift/) | Представляет [подарок](/api/gifts/), принадлежащий пиру. |
| [SearchPostsFlood](/type/SearchPostsFlood/) | Указывает, требует ли оплаты указанный [глобальный поиск по публикациям »](/api/search/#posts-tab). |
| [SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/) | Информация о найденных сообщениях, отправленных в определённый день; используется для разбивки поля `messages` в конструкторах [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) по дням. |
| [SearchResultsPosition](/type/SearchResultsPosition/) | Информация о сообщении в определённой позиции |
| [SecureCredentialsEncrypted](/type/SecureCredentialsEncrypted/) | Зашифрованные защищённые учётные данные |
| [SecureData](/type/SecureData/) | Защищённые данные [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#securedata) |
| [SecureFile](/type/SecureFile/) | Защищённый файл [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [SecurePasswordKdfAlgo](/type/SecurePasswordKdfAlgo/) | Алгоритм KDF, используемый для вычисления хеша telegram [passport](https://core.telegram.org/passport) |
| [SecurePlainData](/type/SecurePlainData/) | Проверенные [данные passport](https://core.telegram.org/passport/encryption#secureplaindata) в виде открытого текста. |
| [SecureRequiredType](/type/SecureRequiredType/) | Требуемый тип защищённого файла |
| [SecureSecretSettings](/type/SecureSecretSettings/) | Настройки [Telegram Passport](https://core.telegram.org/passport) |
| [SecureValue](/type/SecureValue/) | Защищённое значение Telegram Passport |
| [SecureValueError](/type/SecureValueError/) | Ошибка защищённого значения |
| [SecureValueHash](/type/SecureValueHash/) | Хеш защищённого значения |
| [SecureValueType](/type/SecureValueType/) | Тип защищённого значения |
| [SendAsPeer](/type/SendAsPeer/) | Указывает пир, который может использоваться для отправки сообщений |
| [SendMessageAction](/type/SendMessageAction/) | Действия пользователя. Используйте это, чтобы показывать пользователям подробные сведения о действиях собеседника: наборе текста или отправке вложений любого рода. |
| [ShippingOption](/type/ShippingOption/) | Варианты доставки |
| [SmsJob](/type/SmsJob/) | Информация о задании на отправку SMS. |
| [smsjobs.EligibilityToJoin](/type/smsjobs.EligibilityToJoin/) | Допуск к SMS-заданиям |
| [smsjobs.Status](/type/smsjobs.Status/) | Статус |
| [SponsoredMessage](/type/SponsoredMessage/) | Рекламное сообщение |
| [SponsoredMessageReportOption](/type/SponsoredMessageReportOption/) | [Вариант жалобы на рекламное сообщение »](/api/sponsored-messages/#reporting-sponsored-messages). |
| [SponsoredPeer](/type/SponsoredPeer/) | Рекламируемый пир. |
| [StarGift](/type/StarGift/) | Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/). |
| [StarGiftActiveAuctionState](/type/StarGiftActiveAuctionState/) | Содержит информацию об [аукционе, на котором пользователь сделал ставку »](/api/auctions/). |
| [StarGiftAttribute](/type/StarGiftAttribute/) | Атрибут [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [StarGiftAttributeCounter](/type/StarGiftAttributeCounter/) | Указывает общее количество подарков, обладающих указанным атрибутом. |
| [StarGiftAttributeId](/type/StarGiftAttributeId/) | Представляет _идентификатор_ [атрибута коллекционного подарка](/api/gifts/#collectible-gifts). |
| [StarGiftAttributeRarity](/type/StarGiftAttributeRarity/) | Редкость атрибута [коллекционного подарка »](/api/gifts/#collectible-gifts), заданная либо точным значением в промилле, либо одним из именованных уровней редкости (необычный, редкий, эпический, легендарный). |
| [StarGiftAuctionAcquiredGift](/type/StarGiftAuctionAcquiredGift/) | Описывает подарок, который текущий пользователь выиграл на аукционе. |
| [StarGiftAuctionRound](/type/StarGiftAuctionRound/) | Описывает один или несколько раундов [аукциона коллекционных подарков »](/api/auctions/) с возможностью продления. |
| [StarGiftAuctionState](/type/StarGiftAuctionState/) | Состояние [аукциона коллекционных подарков »](/api/auctions/): активен или ожидает начала, завершён либо не изменился по сравнению с локально закешированной версией. |
| [StarGiftAuctionUserState](/type/StarGiftAuctionUserState/) | Содержит информацию о состоянии текущего пользователя в [аукционе »](/api/auctions/). |
| [StarGiftBackground](/type/StarGiftBackground/) | Содержит фоновую палитру по умолчанию для [типа подарка »](/api/gifts/#listing-all-possible-collectible-variants). |
| [StarGiftCollection](/type/StarGiftCollection/) | Представляет [коллекцию звёздных подарков »](/api/gifts/#gift-collections). |
| [StarGiftUpgradePrice](/type/StarGiftUpgradePrice/) | Указывает цену [улучшения подарка »](/api/gifts/#collectible-gifts), действующую начиная с определённого момента времени. |
| [StarRefProgram](/type/StarRefProgram/) | Информация о [партнёрской программе, предлагаемой ботом](/api/bots/referrals/) |
| [StarsAmount](/type/StarsAmount/) | Описывает вещественную (то есть возможно дробную) сумму в [Telegram Stars](/api/stars/). |
| [StarsGiftOption](/type/StarsGiftOption/) | [Вариант подарка за Telegram Stars](/api/stars/#buying-or-gifting-stars). |
| [StarsGiveawayOption](/type/StarsGiveawayOption/) | Содержит информацию о варианте [розыгрыша Telegram Stars](/api/giveaways/#star-giveaways). |
| [StarsGiveawayWinnersOption](/type/StarsGiveawayWinnersOption/) | Представляет один из возможных вариантов количества победителей в звёздном розыгрыше |
| [StarsRating](/type/StarsRating/) | Представляет [звёздный рейтинг профиля, подробнее см. здесь »](/api/stars/#star-rating). |
| [StarsRevenueStatus](/type/StarsRevenueStatus/) | Описывает [балансы дохода в Telegram Stars »](/api/stars/). |
| [StarsSubscription](/type/StarsSubscription/) | Представляет [подписку за Telegram Stars »](/api/invites/#paid-invite-links). |
| [StarsSubscriptionPricing](/type/StarsSubscriptionPricing/) | Стоимость [подписки за Telegram Stars »](/api/invites/#paid-invite-links). |
| [StarsTopupOption](/type/StarsTopupOption/) | [Вариант пополнения баланса Telegram Stars](/api/stars/). |
| [StarsTransaction](/type/StarsTransaction/) | Представляет [транзакцию Telegram Stars »](/api/stars/). |
| [StarsTransactionPeer](/type/StarsTransactionPeer/) | Источник входящей [транзакции Telegram Stars](/api/stars/) либо получатель исходящей [транзакции Telegram Stars](/api/stars/). |
| [stats.BroadcastStats](/type/stats.BroadcastStats/) | Статистика канала |
| [stats.MegagroupStats](/type/stats.MegagroupStats/) | Статистика супергруппы |
| [stats.MessageStats](/type/stats.MessageStats/) | Статистика сообщения |
| [stats.PollStats](/type/stats.PollStats/) | [Статистика](/api/stats/#poll-statistics) опроса, отправленного в сообщении. |
| [stats.PublicForwards](/type/stats.PublicForwards/) | Содержит информацию о пересылках [истории](/api/stories/) в виде сообщения в публичные чаты и о репостах публичными каналами. |
| [stats.StoryStats](/type/stats.StoryStats/) | Содержит [статистику](/api/stats/) по [истории](/api/stories/). |
| [StatsAbsValueAndPrev](/type/StatsAbsValueAndPrev/) | Пара значений статистики канала |
| [StatsDateRangeDays](/type/StatsDateRangeDays/) | Диапазон дат статистики канала |
| [StatsGraph](/type/StatsGraph/) | График статистики канала |
| [StatsGroupTopAdmin](/type/StatsGroupTopAdmin/) | Самый активный администратор в [супергруппе](/api/channel/) |
| [StatsGroupTopInviter](/type/StatsGroupTopInviter/) | Самый активный приглашающий в [супергруппе](/api/channel/) |
| [StatsGroupTopPoster](/type/StatsGroupTopPoster/) | Самый активный пользователь в [супергруппе](/api/channel/) |
| [StatsPercentValue](/type/StatsPercentValue/) | Процентное соотношение в статистике канала |
| [StatsURL](/type/StatsURL/) | URL со статистикой чата |
| [StickerKeyword](/type/StickerKeyword/) | Ключевые слова для определённого стикера |
| [StickerPack](/type/StickerPack/) | Набор стикеров |
| [stickers.SuggestedShortName](/type/stickers.SuggestedShortName/) | Предлагаемое краткое имя для указанного стикерпака |
| [StickerSet](/type/StickerSet/) | Представляет набор стикеров (стикерпак) |
| [StickerSetCovered](/type/StickerSetCovered/) | Предпросмотр набора стикеров |
| [storage.FileType](/type/storage.FileType/) | Объект описывает тип файла. |
| [stories.Albums](/type/stories.Albums/) | Представляет список [альбомов историй »](/api/stories/#story-albums). |
| [stories.AllStories](/type/stories.AllStories/) | Полный список активных (или активных и скрытых) [историй](/api/stories/#watching-stories). |
| [stories.CanSendStoryCount](/type/stories.CanSendStoryCount/) | Содержит количество доступных слотов для активных историй (равно значению [параметра клиентской конфигурации `story_expiring_limit_*`](/api/config/#story-expiring-limit-default) за вычетом числа активных на данный момент историй). |
| [stories.FoundStories](/type/stories.FoundStories/) | Истории, найденные с помощью [глобального поиска историй »](/api/stories/#searching-stories). |
| [stories.PeerStories](/type/stories.PeerStories/) | [Список активных историй](/api/stories/#watching-stories) конкретного пира. |
| [stories.Stories](/type/stories.Stories/) | Список [историй](/api/stories/#pinned-or-archived-stories) |
| [stories.StoryReactionsList](/type/stories.StoryReactionsList/) | Список пиров, отреагировавших на конкретную [историю](/api/stories/) |
| [stories.StoryViews](/type/stories.StoryViews/) | Счётчики реакций и просмотров для списка [историй](/api/stories/) |
| [stories.StoryViewsList](/type/stories.StoryViewsList/) | Счётчики реакций и просмотров [истории](/api/stories/) |
| [StoriesStealthMode](/type/StoriesStealthMode/) | [Состояние скрытого режима историй](/api/stories/#stealth-mode) |
| [StoryAlbum](/type/StoryAlbum/) | Представляет [альбом историй »](/api/stories/#story-albums). |
| [StoryFwdHeader](/type/StoryFwdHeader/) | Содержит информацию о первоначальном авторе истории, на которую сделан репост. |
| [StoryItem](/type/StoryItem/) | Представляет [историю Telegram](/api/stories/) |
| [StoryReaction](/type/StoryReaction/) | Как определённый пир отреагировал на историю или взаимодействовал с ней |
| [StoryView](/type/StoryView/) | Сведения о датах просмотра и реакциях для [истории](/api/stories/) |
| [StoryViews](/type/StoryViews/) | Сводные сведения о просмотрах и реакциях [истории](/api/stories/) |
| [string](/type/string/) | Базовый голый тип. Значения типа `string` выглядят по-разному в зависимости от длины `L` сериализуемой строки: |
| [SuggestedPost](/type/SuggestedPost/) | Содержит информацию о [предлагаемом посте »](/api/suggested-posts/). |
| [TextWithEntities](/type/TextWithEntities/) | Оформленный текст с [сущностями оформления](/api/entities/) |
| [Theme](/type/Theme/) | Облачная тема оформления |
| [ThemeSettings](/type/ThemeSettings/) | Параметры темы оформления |
| [Timezone](/type/Timezone/) | Сведения о часовом поясе. |
| [TodoCompletion](/type/TodoCompletion/) | Выполненный пункт [списка задач »](/api/todo/). |
| [TodoItem](/type/TodoItem/) | Пункт [списка задач »](/api/todo/). |
| [TodoList](/type/TodoList/) | Представляет [список задач »](/api/todo/). |
| [TopPeer](/type/TopPeer/) | Популярный пир |
| [TopPeerCategory](/type/TopPeerCategory/) | Категория популярных пиров |
| [TopPeerCategoryPeers](/type/TopPeerCategoryPeers/) | Популярные пиры по категории популярных пиров |
| [True](/type/True/) | См. [предопределённые идентификаторы](/mtproto/TL-formal/#predefined-identifiers). |
| [Update](/type/Update/) | Объект содержит информацию о произошедших событиях. |
| [updates.ChannelDifference](/type/updates.ChannelDifference/) | Содержит разницу (новые сообщения) между нашим локальным состоянием канала и состоянием на сервере |
| [updates.Difference](/type/updates.Difference/) | Произошедшие изменения. |
| [Updates](/type/Updates/) | Объект, который воспринимается клиентом без вызова с его стороны при наступлении события. |
| [updates.State](/type/updates.State/) | Объект содержит информацию о состоянии для дальнейших обновлений. |
| [upload.CdnFile](/type/upload.CdnFile/) | Представляет состояние скачивания файла из CDN |
| [upload.File](/type/upload.File/) | Содержит информацию о файле. |
| [upload.WebFile](/type/upload.WebFile/) | Удалённый файл |
| [UrlAuthResult](/type/UrlAuthResult/) | Результат авторизации по URL |
| [User](/type/User/) | Объект описывает пользователя. |
| [UserFull](/type/UserFull/) | Объект содержит расширенную информацию о пользователе. |
| [Username](/type/Username/) | Содержит информацию об имени пользователя |
| [UserProfilePhoto](/type/UserProfilePhoto/) | Объект содержит информацию о фотографии профиля пользователя. |
| [users.SavedMusic](/type/users.SavedMusic/) | Список композиций ([document](/constructor/document/).`id`), закреплённых сейчас в профиле пользователя; подробнее см. [здесь »](/api/profile/#music). |
| [users.UserFull](/type/users.UserFull/) | Полная информация о пользователе с прилагаемыми контекстными пирами для реакций |
| [users.Users](/type/users.Users/) | Описывает список пользователей (или ботов). |
| [UserStatus](/type/UserStatus/) | Статус пользователя в сети |
| [Vector t](/type/Vector%20t/) | Универсальный вектор. |
| [VideoSize](/type/VideoSize/) | Представляет анимированную миниатюру видео |
| [WallPaper](/type/WallPaper/) | Объект содержит информацию об [обоях](/api/wallpapers/). |
| [WallPaperSettings](/type/WallPaperSettings/) | Сведения об отрисовке обоев. |
| [WebAuthorization](/type/WebAuthorization/) | Веб-авторизация |
| [WebDocument](/type/WebDocument/) | Удалённый документ |
| [WebPage](/type/WebPage/) | Предпросмотр веб-страницы в формате [Instant View](https://instantview.telegram.org) |
| [WebPageAttribute](/type/WebPageAttribute/) | Атрибуты веб-страницы |
| [WebViewMessageSent](/type/WebViewMessageSent/) | Содержит информацию об инлайн-сообщении, отправленном [Web App](https://core.telegram.org/bots/webapps) от имени пользователя. |
| [WebViewResult](/type/WebViewResult/) | Содержит URL веб-представления с добавленными параметрами оформления и сведениями о пользователе |
