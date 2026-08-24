---
title: "Конструкторы — справочник схемы TL"
original: "https://core.telegram.org/schema"
section: ref
description: "Алфавитный указатель всех 1615 конструкторов схемы TL Telegram с кратким описанием каждого."
layout: layout.njk
---

# Конструкторы

Все конструкторы схемы TL (1615). Имена ведут на страницы с полным определением, параметрами и описанием.

| Название | Описание |
|---|---|
| [account.authorizationForm](/constructor/account.authorizationForm/) | Форма авторизации [Telegram Passport](https://core.telegram.org/passport) |
| [account.authorizations](/constructor/account.authorizations/) | Активные сессии |
| [account.autoDownloadSettings](/constructor/account.autoDownloadSettings/) | Настройки автозагрузки медиафайлов |
| [account.autoSaveSettings](/constructor/account.autoSaveSettings/) | Содержит настройки автосохранения медиафайлов |
| [account.businessChatLinks](/constructor/account.businessChatLinks/) | Содержит информацию о [глубоких ссылках на бизнес-чат »](/api/business/#business-chat-links), созданных текущей учётной записью. |
| [account.chatThemes](/constructor/account.chatThemes/) | Доступные [темы оформления чатов](/api/themes/#chat-themes) |
| [account.chatThemesNotModified](/constructor/account.chatThemesNotModified/) | Доступные темы оформления чатов не изменились |
| [account.connectedBots](/constructor/account.connectedBots/) | Информация о подключённых в данный момент [бизнес-ботах](/api/bots/connected-business-bots/). |
| [account.contentSettings](/constructor/account.contentSettings/) | Настройки материалов деликатного характера |
| [account.emailVerified](/constructor/account.emailVerified/) | Адрес электронной почты подтверждён верно. |
| [account.emailVerifiedLogin](/constructor/account.emailVerifiedLogin/) | Адрес электронной почты подтверждён верно, и на него только что был отправлен код для входа. |
| [account.emojiStatuses](/constructor/account.emojiStatuses/) | Список [эмодзи-статусов](/api/emoji-status/) |
| [account.emojiStatusesNotModified](/constructor/account.emojiStatusesNotModified/) | Серверный список [эмодзи-статусов](/api/emoji-status/) не изменился |
| [account.paidMessagesRevenue](/constructor/account.paidMessagesRevenue/) | Общее количество невозвращённых [Telegram Stars](/api/stars/), потраченных пользователем на отправку нам сообщений — напрямую либо через канал; подробнее о платных сообщениях см. [здесь »](/api/paid-messages/). |
| [account.passkeyRegistrationOptions](/constructor/account.passkeyRegistrationOptions/) | Параметры регистрации passkey; подробнее о полном процессе см. [здесь »](/api/passkeys/#creating-a-passkey). |
| [account.passkeys](/constructor/account.passkeys/) | Список [ключей доступа »](/api/passkeys/#list-passkeys), привязанных к текущему аккаунту. |
| [account.password](/constructor/account.password/) | Настройки двухфакторной авторизации |
| [account.passwordInputSettings](/constructor/account.passwordInputSettings/) | Параметры настройки нового пароля |
| [account.passwordSettings](/constructor/account.passwordSettings/) | Личные сведения, связанные с информацией о пароле (почта для восстановления, данные Telegram [Passport](https://core.telegram.org/passport) и так далее) |
| [account.privacyRules](/constructor/account.privacyRules/) | Правила приватности |
| [account.resetPasswordFailedWait](/constructor/account.resetPasswordFailedWait/) | Недавно вы запросили сброс пароля, который был отменён; дождитесь указанной даты, прежде чем запрашивать новый сброс. |
| [account.resetPasswordOk](/constructor/account.resetPasswordOk/) | Пароль двухфакторной аутентификации успешно сброшен. |
| [account.resetPasswordRequestedWait](/constructor/account.resetPasswordRequestedWait/) | Сброс пароля успешно запрошен; дождитесь указанной даты, прежде чем завершать сброс. |
| [account.resolvedBusinessChatLinks](/constructor/account.resolvedBusinessChatLinks/) | Содержит информацию об одной разрешённой [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links). |
| [account.savedMusicIds](/constructor/account.savedMusicIds/) | Список идентификаторов композиций (полей `id` конструктора [document](/constructor/document/)), закреплённых сейчас в нашем профиле, подробнее [см. здесь »](/api/profile/#music). |
| [account.savedMusicIdsNotModified](/constructor/account.savedMusicIdsNotModified/) | Список идентификаторов композиций (значений [document](/constructor/document/).`id`), закреплённых в нашем профиле, не изменился. |
| [account.savedRingtone](/constructor/account.savedRingtone/) | Звук уведомления уже был в формате MP3 и был сохранён без изменений |
| [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) | Звук уведомления был не в формате MP3, он был успешно преобразован и сохранён; далее используйте возвращённый [Document](/type/Document/) для обращения к этому звуку уведомления |
| [account.savedRingtones](/constructor/account.savedRingtones/) | Список сохранённых звуков уведомлений |
| [account.savedRingtonesNotModified](/constructor/account.savedRingtonesNotModified/) | Список звуков уведомлений не изменился. |
| [account.sentEmailCode](/constructor/account.sentEmailCode/) | Отправленный код из письма |
| [account.takeout](/constructor/account.takeout/) | Сведения о выгрузке данных |
| [account.themes](/constructor/account.themes/) | Установленные темы оформления |
| [account.themesNotModified](/constructor/account.themesNotModified/) | Новые темы не установлены |
| [account.tmpPassword](/constructor/account.tmpPassword/) | Временный платёжный пароль |
| [account.wallPapers](/constructor/account.wallPapers/) | Установленные [обои](/api/wallpapers/) |
| [account.wallPapersNotModified](/constructor/account.wallPapersNotModified/) | Новых [обоев](/api/wallpapers/) не найдено |
| [account.webAuthorizations](/constructor/account.webAuthorizations/) | Веб-авторизации |
| [accountDaysTTL](/constructor/accountDaysTTL/) | Срок жизни текущей учётной записи в днях |
| [aicompose.tones](/constructor/aicompose.tones/) | Список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя. |
| [aicompose.tonesNotModified](/constructor/aicompose.tonesNotModified/) | Список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) не изменился с момента последнего получения (то есть значение `hash`, переданное в [aicompose.getTones](/method/aicompose.getTones/), всё ещё действительно). |
| [aiComposeTone](/constructor/aiComposeTone/) | Пользовательская [тональность AI-составителя »](/api/ai/#ai-compose-tones), применяемая для перефразирования сообщений в определённом стиле с помощью [AI-составителя сообщений](/api/ai/#compose-messages). |
| [aiComposeToneDefault](/constructor/aiComposeToneDefault/) | Встроенный тон [ИИ-редактора »](/api/ai/#ai-compose-tones) по умолчанию, определяемый строковым идентификатором, а не числовым идентификатором. |
| [aiComposeToneExample](/constructor/aiComposeToneExample/) | Пример того, как [тон ИИ-редактора »](/api/ai/#ai-compose-tones) перефразирует сообщение; используется для предпросмотра в списке выбора тона. |
| [attachMenuBot](/constructor/attachMenuBot/) | Представляет [mini app бота, который можно запустить из меню вложений или бокового меню »](/api/bots/attach/) |
| [attachMenuBotIcon](/constructor/attachMenuBotIcon/) | Представляет значок в меню вложений для [mini app ботов »](/api/bots/attach/) |
| [attachMenuBotIconColor](/constructor/attachMenuBotIconColor/) | Представляет цвет значка в меню вложений для [mini app ботов »](/api/bots/attach/) |
| [attachMenuBots](/constructor/attachMenuBots/) | Представляет список [mini app ботов, которые можно запустить из меню вложений »](/api/bots/attach/) |
| [attachMenuBotsBot](/constructor/attachMenuBotsBot/) | Представляет [mini app бота, который можно запустить из меню вложений »](/api/bots/attach/) |
| [attachMenuBotsNotModified](/constructor/attachMenuBotsNotModified/) | Список mini app ботов не изменился |
| [attachMenuPeerTypeBotPM](/constructor/attachMenuPeerTypeBotPM/) | Пункт меню вложений бота доступен в личных чатах с другими ботами (кроме бота, который предлагает текущее меню вложений) |
| [attachMenuPeerTypeBroadcast](/constructor/attachMenuPeerTypeBroadcast/) | Пункт меню вложений бота доступен в каналах |
| [attachMenuPeerTypeChat](/constructor/attachMenuPeerTypeChat/) | Пункт меню вложений бота доступен в [группах и супергруппах](/api/channel/) |
| [attachMenuPeerTypePM](/constructor/attachMenuPeerTypePM/) | Пункт меню вложений бота доступен в личных чатах с другими пользователями (не ботами) |
| [attachMenuPeerTypeSameBotPM](/constructor/attachMenuPeerTypeSameBotPM/) | Пункт меню вложений бота доступен в чате с тем ботом, который его предлагает |
| [auctionBidLevel](/constructor/auctionBidLevel/) | Описывает ставку на [аукционе](/api/auctions/). |
| [auth.authorization](/constructor/auth.authorization/) | Содержит информацию об авторизации пользователя. |
| [auth.authorizationSignUpRequired](/constructor/auth.authorizationSignUpRequired/) | Учётной записи с этим номером телефона в Telegram не существует: пользователю необходимо [ввести основные сведения и зарегистрироваться](/api/auth/) |
| [auth.codeTypeCall](/constructor/auth.codeTypeCall/) | В следующий раз код аутентификации будет доставлен через исходящий телефонный звонок. |
| [auth.codeTypeFlashCall](/constructor/auth.codeTypeFlashCall/) | В следующий раз код аутентификации будет доставлен через немедленно сброшенный входящий звонок. |
| [auth.codeTypeFragmentSms](/constructor/auth.codeTypeFragmentSms/) | В следующий раз код аутентификации будет доставлен через [fragment.com](https://fragment.com) |
| [auth.codeTypeMissedCall](/constructor/auth.codeTypeMissedCall/) | В следующий раз код аутентификации будет доставлен через немедленно сброшенный входящий звонок, который пользователь обрабатывает вручную. |
| [auth.codeTypeSms](/constructor/auth.codeTypeSms/) | В следующий раз код аутентификации будет доставлен через немедленно сброшенный входящий звонок. |
| [auth.exportedAuthorization](/constructor/auth.exportedAuthorization/) | Данные для копирования авторизации между дата-центрами. |
| [auth.loggedOut](/constructor/auth.loggedOut/) | [Токен будущей авторизации »](/api/auth/#future-auth-tokens), который будет использоваться при последующих авторизациях |
| [auth.loginToken](/constructor/auth.loginToken/) | Токен входа (для [входа по QR-коду](/api/qr-login/)) |
| [auth.loginTokenMigrateTo](/constructor/auth.loginTokenMigrateTo/) | Повторить запрос к указанному дата-центру |
| [auth.loginTokenSuccess](/constructor/auth.loginTokenSuccess/) | Вход по токену (QR-коду) выполнен успешно! |
| [auth.passkeyLoginOptions](/constructor/auth.passkeyLoginOptions/) | Параметры входа по passkey; подробнее о полном процессе см. [здесь »](/api/passkeys/#logging-in-with-a-passkey). |
| [auth.passwordRecovery](/constructor/auth.passwordRecovery/) | Сведения о восстановлении [пароля двухфакторной аутентификации](/api/srp/); только для аккаунтов с [настроенной почтой для восстановления](/api/srp/#email-verification). |
| [auth.sentCode](/constructor/auth.sentCode/) | Содержит информацию об отправленном коде подтверждения. |
| [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/) | Официальные приложения могут получить этот конструктор: он означает, что из-за высокой стоимости SMS с кодом подтверждения для страны или оператора пользователя для продолжения входа или регистрации пользователь обязан приобрести подписку [Telegram Premium](/api/premium/); подробнее [см. здесь »](/api/auth/#paid-auth). |
| [auth.sentCodeSuccess](/constructor/auth.sentCodeSuccess/) | Пользователь успешно авторизовался с помощью [токенов будущей авторизации](/api/auth/#future-auth-tokens) |
| [auth.sentCodeTypeApp](/constructor/auth.sentCodeTypeApp/) | Код был отправлен через приложение Telegram |
| [auth.sentCodeTypeCall](/constructor/auth.sentCodeTypeCall/) | Код будет передан телефонным звонком: синтезированный голос продиктует пользователю код подтверждения, который нужно ввести. |
| [auth.sentCodeTypeEmailCode](/constructor/auth.sentCodeTypeEmailCode/) | Код был отправлен на [ранее заданный адрес электронной почты для входа »](/api/auth/#email-verification) |
| [auth.sentCodeTypeFirebaseSms](/constructor/auth.sentCodeTypeFirebaseSms/) | Код аутентификации должен быть доставлен по SMS после аттестации Firebase, как описано в [документации по авторизации »](/api/auth/). |
| [auth.sentCodeTypeFlashCall](/constructor/auth.sentCodeTypeFlashCall/) | Код будет отправлен сбросом звонка, который сразу же завершится. Кодом при этом будет сам номер телефона — достаточно убедиться, что номер соответствует указанному шаблону. |
| [auth.sentCodeTypeFragmentSms](/constructor/auth.sentCodeTypeFragmentSms/) | Код был доставлен через [fragment.com](https://fragment.com). |
| [auth.sentCodeTypeMissedCall](/constructor/auth.sentCodeTypeMissedCall/) | Код будет отправлен сбросом звонка, который сразу же завершится. Код — это последние цифры номера, с которого поступил звонок; пользователь должен ввести их вручную. |
| [auth.sentCodeTypeSetUpEmailRequired](/constructor/auth.sentCodeTypeSetUpEmailRequired/) | Для входа пользователь должен добавить и подтвердить адрес электронной почты, как описано [здесь »](/api/auth/#email-verification). |
| [auth.sentCodeTypeSms](/constructor/auth.sentCodeTypeSms/) | Код был отправлен по SMS |
| [auth.sentCodeTypeSmsPhrase](/constructor/auth.sentCodeTypeSmsPhrase/) | Код был отправлен по SMS в виде секретной фразы, начинающейся со слова, указанного в `beginning` |
| [auth.sentCodeTypeSmsWord](/constructor/auth.sentCodeTypeSmsWord/) | Код был отправлен по SMS в виде секретного слова, начинающегося с буквы, указанной в `beginning` |
| [authorization](/constructor/authorization/) | Активная сессия |
| [autoDownloadSettings](/constructor/autoDownloadSettings/) | Настройки автозагрузки |
| [autoSaveException](/constructor/autoSaveException/) | Настройки автосохранения медиафайлов для конкретного пира |
| [autoSaveSettings](/constructor/autoSaveSettings/) | Настройки автосохранения медиафайлов |
| [availableEffect](/constructor/availableEffect/) | Представляет [эффект сообщения »](/api/effects/). |
| [availableReaction](/constructor/availableReaction/) | Анимации, связанные с реакцией на сообщение |
| [bankCardOpenUrl](/constructor/bankCardOpenUrl/) | URL со сведениями о банковской карте, предоставленный банком |
| [baseThemeArctic](/constructor/baseThemeArctic/) | Тема Arctic |
| [baseThemeClassic](/constructor/baseThemeClassic/) | Классическая тема оформления |
| [baseThemeDay](/constructor/baseThemeDay/) | Дневная тема |
| [baseThemeNight](/constructor/baseThemeNight/) | Ночная тема |
| [baseThemeTinted](/constructor/baseThemeTinted/) | Тонированная тема оформления |
| [birthday](/constructor/birthday/) | Сведения о [дне рождения](/api/profile/#birthday) пользователя. |
| [boolFalse](/constructor/boolFalse/) | Конструктор может интерпретироваться как **логическое**`false`-значение. |
| [boolTrue](/constructor/boolTrue/) | Конструктор можно трактовать как **логическое** значение `true`. |
| [boost](/constructor/boost/) | Информация об одном или нескольких [бустах](/api/boost/), применённых определённым пользователем. |
| [botApp](/constructor/botApp/) | Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps). |
| [botAppNotModified](/constructor/botAppNotModified/) | Сведения о приложении бота не изменились. |
| [botAppSettings](/constructor/botAppSettings/) | Настройки [Mini App »](/api/bots/webapps/) |
| [botBusinessConnection](/constructor/botBusinessConnection/) | Содержит информацию о [бизнес-подключении бота](/api/bots/connected-business-bots/). |
| [botCommand](/constructor/botCommand/) | Описывает команду бота, которую можно использовать в чате |
| [botCommandScopeChatAdmins](/constructor/botCommandScopeChatAdmins/) | Указанные команды бота будут действовать только для администраторов чатов во всех [группах и супергруппах](/api/channel/). |
| [botCommandScopeChats](/constructor/botCommandScopeChats/) | Указанные команды бота будут действовать во всех [группах и супергруппах](/api/channel/). |
| [botCommandScopeDefault](/constructor/botCommandScopeDefault/) | Команды будут действовать во всех диалогах |
| [botCommandScopePeer](/constructor/botCommandScopePeer/) | Указанные команды бота будут действовать только в конкретном диалоге. |
| [botCommandScopePeerAdmins](/constructor/botCommandScopePeerAdmins/) | Указанные команды бота будут действовать для всех администраторов указанной [группы или супергруппы](/api/channel/). |
| [botCommandScopePeerUser](/constructor/botCommandScopePeerUser/) | Указанные команды бота будут действовать только для конкретного пользователя в указанной [группе или супергруппе](/api/channel/). |
| [botCommandScopeUsers](/constructor/botCommandScopeUsers/) | Указанные команды бота будут действовать только во всех личных чатах с пользователями. |
| [botInfo](/constructor/botInfo/) | Информация о ботах (доступные команды бота и прочее) |
| [botInlineMediaResult](/constructor/botInlineMediaResult/) | Результат с медиа |
| [botInlineMessageMediaAuto](/constructor/botInlineMessageMediaAuto/) | Отправить медиа, приложенное к [botInlineMediaResult](/constructor/botInlineMediaResult/) |
| [botInlineMessageMediaContact](/constructor/botInlineMessageMediaContact/) | Отправить контакт |
| [botInlineMessageMediaGeo](/constructor/botInlineMessageMediaGeo/) | Отправить геопозицию |
| [botInlineMessageMediaInvoice](/constructor/botInlineMessageMediaInvoice/) | Отправить счёт |
| [botInlineMessageMediaVenue](/constructor/botInlineMessageMediaVenue/) | Отправить заведение |
| [botInlineMessageMediaWebPage](/constructor/botInlineMessageMediaWebPage/) | Задаёт параметры, которые должны использоваться для создания предпросмотра ссылки в сообщении, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения. |
| [botInlineMessageText](/constructor/botInlineMessageText/) | Отправить простое текстовое сообщение |
| [botInlineResult](/constructor/botInlineResult/) | Обобщённый результат |
| [botMenuButton](/constructor/botMenuButton/) | [Кнопка меню бота](/api/bots/menu/), открывающая при нажатии [веб-приложение](/api/bots/webapps/). |
| [botMenuButtonCommands](/constructor/botMenuButtonCommands/) | [Кнопка меню бота](/api/bots/menu/), открывающая при нажатии список команд бота. |
| [botMenuButtonDefault](/constructor/botMenuButtonDefault/) | Заглушка [кнопки меню бота](/api/bots/menu/), никогда не возвращаемая пользователям: подробнее [см. документацию](/api/bots/menu/). |
| [botPreviewMedia](/constructor/botPreviewMedia/) | Представляет [медиафайл предпросмотра главного Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.accessSettings](/constructor/bots.accessSettings/) | Настройки ограничения доступа для [управляемого бота »](/api/bots/managed-bots/#managing-a-managed-bot). |
| [bots.botInfo](/constructor/bots.botInfo/) | Локализованные сведения о боте. |
| [bots.exportedBotToken](/constructor/bots.exportedBotToken/) | Токен [управляемого бота »](/api/bots/managed-bots/#managing-a-managed-bot), экспортированный ботом-менеджером. |
| [bots.popularAppBots](/constructor/bots.popularAppBots/) | Популярные [Main Mini Apps](/api/bots/webapps/#main-mini-apps), предназначенные для [вкладки приложений в глобальном поиске »](/api/search/#apps-tab). |
| [bots.previewInfo](/constructor/bots.previewInfo/) | Содержит информацию о [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.requestedButton](/constructor/bots.requestedButton/) | Содержит идентификатор запроса, который бот должен передать в [Mini App](/api/bots/webapps/) после подготовки кнопки запроса пира с помощью [bots.requestWebViewButton](/method/bots.requestWebViewButton/); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps). |
| [botVerification](/constructor/botVerification/) | Описывает [значок верификации бота »](/api/bots/verification/). |
| [botVerifierSettings](/constructor/botVerifierSettings/) | Информация о текущем [боте-верификаторе »](/api/bots/verification/). |
| [businessAwayMessage](/constructor/businessAwayMessage/) | Описывает [сообщение об отсутствии Telegram Business](/api/business/#away-messages), автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в любой другой заданный период, когда мы не можем ответить сразу. |
| [businessAwayMessageScheduleAlways](/constructor/businessAwayMessageScheduleAlways/) | Всегда отправлять [сообщения об отсутствии Telegram Business](/api/business/#away-messages) пользователям, которые пишут нам в личные сообщения. |
| [businessAwayMessageScheduleCustom](/constructor/businessAwayMessageScheduleCustom/) | Отправлять [сообщения об отсутствии Telegram Business](/api/business/#away-messages) пользователям, которые пишут нам в личные сообщения в указанный промежуток времени. |
| [businessAwayMessageScheduleOutsideWorkHours](/constructor/businessAwayMessageScheduleOutsideWorkHours/) | Отправлять [сообщения об отсутствии Telegram Business](/api/business/#away-messages) пользователям, которые пишут нам в личные сообщения вне заданных [рабочих часов Telegram Business](/api/business/#opening-hours). |
| [businessBotRecipients](/constructor/businessBotRecipients/) | Задаёт личные чаты, из которых [подключённый бизнес-бот »](/api/bots/connected-business-bots/) может получать сообщения и с которыми может взаимодействовать. |
| [businessBotRights](/constructor/businessBotRights/) | [Права бизнес-бота](/api/bots/connected-business-bots/). |
| [businessChatLink](/constructor/businessChatLink/) | Содержит информацию о [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links), созданной текущей учётной записью. |
| [businessGreetingMessage](/constructor/businessGreetingMessage/) | Описывает [приветственное сообщение Telegram Business](/api/business/#greeting-messages), автоматически отправляемое новым пользователям, которые пишут нам в личные сообщения впервые или после определённого периода бездействия. |
| [businessIntro](/constructor/businessIntro/) | [Введение в Telegram Business »](/api/business/#business-introduction). |
| [businessLocation](/constructor/businessLocation/) | Представляет местоположение [Telegram Business »](/api/business/#location). |
| [businessRecipients](/constructor/businessRecipients/) | Задаёт чаты, которые **могут** получать сообщения Telegram Business [об отсутствии »](/api/business/#away-messages) и [приветственные »](/api/business/#greeting-messages). |
| [businessWeeklyOpen](/constructor/businessWeeklyOpen/) | Интервал времени, задающий часы работы компании. |
| [businessWorkHours](/constructor/businessWorkHours/) | Задаёт [часы работы Telegram Business](/api/business/#opening-hours). |
| [cdnConfig](/constructor/cdnConfig/) | Конфигурация для скачивания файлов через [CDN](https://core.telegram.org/cdn). |
| [cdnPublicKey](/constructor/cdnPublicKey/) | Открытый ключ, используемый **только** при рукопожатиях с дата-центрами [CDN](https://core.telegram.org/cdn). |
| [channel](/constructor/channel/) | Информация о канале или супергруппе |
| [channelAdminLogEvent](/constructor/channelAdminLogEvent/) | Событие журнала администратора |
| [channelAdminLogEventActionChangeAbout](/constructor/channelAdminLogEventActionChangeAbout/) | Описание было изменено |
| [channelAdminLogEventActionChangeAvailableReactions](/constructor/channelAdminLogEventActionChangeAvailableReactions/) | Набор разрешённых [реакций на сообщения »](/api/reactions/) для этого канала изменился |
| [channelAdminLogEventActionChangeEmojiStatus](/constructor/channelAdminLogEventActionChangeEmojiStatus/) | Изменился [эмодзи-статус](/api/emoji-status/) |
| [channelAdminLogEventActionChangeEmojiStickerSet](/constructor/channelAdminLogEventActionChangeEmojiStickerSet/) | Изменён [набор пользовательских эмодзи](/api/boost/#setting-a-custom-emoji-stickerset-for-supergroups) супергруппы. |
| [channelAdminLogEventActionChangeHistoryTTL](/constructor/channelAdminLogEventActionChangeHistoryTTL/) | Время жизни сообщений в этом чате было изменено |
| [channelAdminLogEventActionChangeLinkedChat](/constructor/channelAdminLogEventActionChangeLinkedChat/) | Связанный чат был изменён |
| [channelAdminLogEventActionChangeLocation](/constructor/channelAdminLogEventActionChangeLocation/) | Местоположение геогруппы было изменено |
| [channelAdminLogEventActionChangePeerColor](/constructor/channelAdminLogEventActionChangePeerColor/) | Изменился [акцентный цвет сообщений](/api/colors/) |
| [channelAdminLogEventActionChangePhoto](/constructor/channelAdminLogEventActionChangePhoto/) | Изображение канала или супергруппы было изменено |
| [channelAdminLogEventActionChangeProfilePeerColor](/constructor/channelAdminLogEventActionChangeProfilePeerColor/) | Изменился [акцентный цвет профиля](/api/colors/) |
| [channelAdminLogEventActionChangeStickerSet](/constructor/channelAdminLogEventActionChangeStickerSet/) | Набор стикеров супергруппы был изменён |
| [channelAdminLogEventActionChangeTitle](/constructor/channelAdminLogEventActionChangeTitle/) | Название канала/супергруппы было изменено |
| [channelAdminLogEventActionChangeUsername](/constructor/channelAdminLogEventActionChangeUsername/) | Имя пользователя канала/супергруппы было изменено |
| [channelAdminLogEventActionChangeUsernames](/constructor/channelAdminLogEventActionChangeUsernames/) | Список имён пользователя, связанных с каналом, был изменён |
| [channelAdminLogEventActionChangeWallpaper](/constructor/channelAdminLogEventActionChangeWallpaper/) | Изменились [обои](/api/wallpapers/) |
| [channelAdminLogEventActionCreateTopic](/constructor/channelAdminLogEventActionCreateTopic/) | [Тема форума](/api/forum/#forum-topics) была создана |
| [channelAdminLogEventActionDefaultBannedRights](/constructor/channelAdminLogEventActionDefaultBannedRights/) | Права по умолчанию для заблокированных пользователей были изменены |
| [channelAdminLogEventActionDeleteMessage](/constructor/channelAdminLogEventActionDeleteMessage/) | Сообщение было удалено |
| [channelAdminLogEventActionDeleteTopic](/constructor/channelAdminLogEventActionDeleteTopic/) | [Тема форума](/api/forum/#forum-topics) была удалена |
| [channelAdminLogEventActionDiscardGroupCall](/constructor/channelAdminLogEventActionDiscardGroupCall/) | Групповой звонок завершён |
| [channelAdminLogEventActionEditMessage](/constructor/channelAdminLogEventActionEditMessage/) | Сообщение было отредактировано |
| [channelAdminLogEventActionEditTopic](/constructor/channelAdminLogEventActionEditTopic/) | [Тема форума](/api/forum/#forum-topics) была изменена |
| [channelAdminLogEventActionExportedInviteDelete](/constructor/channelAdminLogEventActionExportedInviteDelete/) | Пригласительная ссылка на чат была удалена |
| [channelAdminLogEventActionExportedInviteEdit](/constructor/channelAdminLogEventActionExportedInviteEdit/) | Пригласительная ссылка на чат была изменена |
| [channelAdminLogEventActionExportedInviteRevoke](/constructor/channelAdminLogEventActionExportedInviteRevoke/) | Конкретная пригласительная ссылка отозвана |
| [channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/) | [Звание »](/api/rank/) участника изменено. |
| [channelAdminLogEventActionParticipantInvite](/constructor/channelAdminLogEventActionParticipantInvite/) | Пользователь был приглашён в группу |
| [channelAdminLogEventActionParticipantJoin](/constructor/channelAdminLogEventActionParticipantJoin/) | Пользователь вступил в группу (для больших групп сведения о вступившем пользователе не показываются) |
| [channelAdminLogEventActionParticipantJoinByInvite](/constructor/channelAdminLogEventActionParticipantJoinByInvite/) | Пользователь вступил в [супергруппу или канал](/api/channel/) по конкретной пригласительной ссылке |
| [channelAdminLogEventActionParticipantJoinByRequest](/constructor/channelAdminLogEventActionParticipantJoinByRequest/) | Администратор принял в чат нового участника |
| [channelAdminLogEventActionParticipantLeave](/constructor/channelAdminLogEventActionParticipantLeave/) | Пользователь покинул канал/супергруппу (для больших групп сведения о вступившем пользователе не показываются) |
| [channelAdminLogEventActionParticipantMute](/constructor/channelAdminLogEventActionParticipantMute/) | Участнику группового звонка отключили микрофон |
| [channelAdminLogEventActionParticipantSubExtend](/constructor/channelAdminLogEventActionParticipantSubExtend/) | Платный подписчик продлил свою [подписку за Telegram Stars »](/api/stars/#star-subscriptions). |
| [channelAdminLogEventActionParticipantToggleAdmin](/constructor/channelAdminLogEventActionParticipantToggleAdmin/) | [Права](/api/rights/) администратора у пользователя были изменены |
| [channelAdminLogEventActionParticipantToggleBan](/constructor/channelAdminLogEventActionParticipantToggleBan/) | [Права](/api/rights/) заблокированного пользователя были изменены |
| [channelAdminLogEventActionParticipantUnmute](/constructor/channelAdminLogEventActionParticipantUnmute/) | Участнику группового звонка включили микрофон |
| [channelAdminLogEventActionParticipantVolume](/constructor/channelAdminLogEventActionParticipantVolume/) | channelAdminLogEvent.user\_id установил громкость participant.peer в значение participant.volume |
| [channelAdminLogEventActionPinTopic](/constructor/channelAdminLogEventActionPinTopic/) | [Тема форума](/api/forum/#forum-topics) была закреплена или откреплена |
| [channelAdminLogEventActionSendMessage](/constructor/channelAdminLogEventActionSendMessage/) | В канале было опубликовано сообщение |
| [channelAdminLogEventActionStartGroupCall](/constructor/channelAdminLogEventActionStartGroupCall/) | Групповой звонок начат |
| [channelAdminLogEventActionStopPoll](/constructor/channelAdminLogEventActionStopPoll/) | Опрос остановлен |
| [channelAdminLogEventActionToggleAntiSpam](/constructor/channelAdminLogEventActionToggleAntiSpam/) | [Встроенная защита от спама](/api/antispam/) была включена или отключена. |
| [channelAdminLogEventActionToggleAutotranslation](/constructor/channelAdminLogEventActionToggleAutotranslation/) | [Автоперевод в канале был переключён »](/api/translation/#autotranslation-for-channels). |
| [channelAdminLogEventActionToggleForum](/constructor/channelAdminLogEventActionToggleForum/) | Функциональность [форума](/api/forum/) была включена или отключена. |
| [channelAdminLogEventActionToggleGroupCallSetting](/constructor/channelAdminLogEventActionToggleGroupCallSetting/) | Настройки группового звонка были изменены |
| [channelAdminLogEventActionToggleInvites](/constructor/channelAdminLogEventActionToggleInvites/) | Приглашения были включены или отключены |
| [channelAdminLogEventActionToggleNoForwards](/constructor/channelAdminLogEventActionToggleNoForwards/) | Пересылка была включена или отключена |
| [channelAdminLogEventActionTogglePreHistoryHidden](/constructor/channelAdminLogEventActionTogglePreHistoryHidden/) | Настройка скрытия предыдущей истории была [изменена](/method/channels.togglePreHistoryHidden/) |
| [channelAdminLogEventActionToggleSignatureProfiles](/constructor/channelAdminLogEventActionToggleSignatureProfiles/) | Ссылки на профили в подписях канала были включены или отключены. |
| [channelAdminLogEventActionToggleSignatures](/constructor/channelAdminLogEventActionToggleSignatures/) | Подписи авторов в канале были включены/отключены |
| [channelAdminLogEventActionToggleSlowMode](/constructor/channelAdminLogEventActionToggleSlowMode/) | [Изменена настройка медленного режима для супергрупп](/method/channels.toggleSlowMode/) |
| [channelAdminLogEventActionUpdatePinned](/constructor/channelAdminLogEventActionUpdatePinned/) | Сообщение было закреплено |
| [channelAdminLogEventsFilter](/constructor/channelAdminLogEventsFilter/) | Получать только определённые события журнала администратора |
| [channelForbidden](/constructor/channelForbidden/) | Обозначает канал или супергруппу, к которым у нас нет доступа из-за блокировки или по иной причине. |
| [channelFull](/constructor/channelFull/) | Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups). |
| [channelLocation](/constructor/channelLocation/) | Географическое положение супергруппы (геогруппы) |
| [channelLocationEmpty](/constructor/channelLocationEmpty/) | Без местоположения (обычная супергруппа) |
| [channelMessagesFilter](/constructor/channelMessagesFilter/) | Фильтр для получения только определённых типов сообщений канала. |
| [channelMessagesFilterEmpty](/constructor/channelMessagesFilterEmpty/) | Без фильтра |
| [channelParticipant](/constructor/channelParticipant/) | Участник канала или супергруппы |
| [channelParticipantAdmin](/constructor/channelParticipantAdmin/) | Администратор |
| [channelParticipantBanned](/constructor/channelParticipantBanned/) | Заблокированный/исключённый пользователь |
| [channelParticipantCreator](/constructor/channelParticipantCreator/) | Создатель канала или супергруппы |
| [channelParticipantLeft](/constructor/channelParticipantLeft/) | Участник, покинувший канал или супергруппу |
| [channelParticipantsAdmins](/constructor/channelParticipantsAdmins/) | Получить только участников-администраторов |
| [channelParticipantsBanned](/constructor/channelParticipantsBanned/) | Получить только заблокированных участников |
| [channelParticipantsBots](/constructor/channelParticipantsBots/) | Получить только участников-ботов |
| [channelParticipantsContacts](/constructor/channelParticipantsContacts/) | Получить только участников из числа контактов |
| [channelParticipantSelf](/constructor/channelParticipantSelf/) | Я сам |
| [channelParticipantsKicked](/constructor/channelParticipantsKicked/) | Получить только исключённых участников |
| [channelParticipantsMentions](/constructor/channelParticipantsMentions/) | Этот фильтр используется при поиске участников супергруппы для упоминания. |
| [channelParticipantsRecent](/constructor/channelParticipantsRecent/) | Получить только недавних участников |
| [channelParticipantsSearch](/constructor/channelParticipantsSearch/) | Поиск участников по имени |
| [channels.adminLogResults](/constructor/channels.adminLogResults/) | События журнала администратора |
| [channels.channelParticipant](/constructor/channels.channelParticipant/) | Представляет участника канала |
| [channels.channelParticipants](/constructor/channels.channelParticipants/) | Представляет несколько участников канала |
| [channels.channelParticipantsNotModified](/constructor/channels.channelParticipantsNotModified/) | Новых сведений об участнике не найдено |
| [channels.sendAsPeers](/constructor/channels.sendAsPeers/) | Список пиров, от имени которых можно отправлять сообщения в определённой группе |
| [channels.sponsoredMessageReportResultAdsHidden](/constructor/channels.sponsoredMessageReportResultAdsHidden/) | Спонсируемые сообщения были скрыты для пользователя во всех чатах. |
| [channels.sponsoredMessageReportResultChooseOption](/constructor/channels.sponsoredMessageReportResultChooseOption/) | Пользователь должен выбрать вариант жалобы из локализованных вариантов, доступных в `options`, после чего необходимо повторно вызвать [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/), передав поле `option` выбранного варианта в параметр `option` метода. |
| [channels.sponsoredMessageReportResultReported](/constructor/channels.sponsoredMessageReportResultReported/) | Жалоба на рекламное сообщение успешно отправлена. |
| [chat](/constructor/chat/) | Информация о группе. |
| [chatAdminRights](/constructor/chatAdminRights/) | Представляет права администратора в [канале или супергруппе](/api/channel/). |
| [chatAdminWithInvites](/constructor/chatAdminWithInvites/) | Сведения о приглашениях в чат, созданных администраторами. |
| [chatBannedRights](/constructor/chatBannedRights/) | Представляет права обычного пользователя в [супергруппе, канале или чате](/api/channel/). В этом случае флаги инвертированы: если флаг установлен, он **запрещает** пользователю выполнять соответствующее действие. |
| [chatEmpty](/constructor/chatEmpty/) | Пустой конструктор, группа не существует |
| [chatForbidden](/constructor/chatForbidden/) | Группа, к которой у пользователя нет доступа. Например, потому что пользователя исключили из группы. |
| [chatFull](/constructor/chatFull/) | Полная информация об [обычной группе](/api/channel/#basic-groups). |
| [chatInvite](/constructor/chatInvite/) | Сведения о приглашении в чат |
| [chatInviteAlready](/constructor/chatInviteAlready/) | Пользователь уже вступил в этот чат |
| [chatInviteExported](/constructor/chatInviteExported/) | Экспортированное приглашение в чат |
| [chatInviteImporter](/constructor/chatInviteImporter/) | Когда и какой пользователь вступил в чат по пригласительной ссылке |
| [chatInvitePeek](/constructor/chatInvitePeek/) | Приглашение в чат, которое также позволяет заглянуть в группу и читать сообщения, не вступая в неё. |
| [chatInvitePublicJoinRequests](/constructor/chatInvitePublicJoinRequests/) | Используется в обновлениях и в журнале канала, чтобы указать, что пользователь подаёт заявку на вступление в [группу обсуждения](/api/discussion/#requiring-users-to-join-the-group) или уже вступил в неё |
| [chatlists.chatlistInvite](/constructor/chatlists.chatlistInvite/) | Информация о [глубокой ссылке на папку с чатами »](/api/links/#chat-folder-links). |
| [chatlists.chatlistInviteAlready](/constructor/chatlists.chatlistInviteAlready/) | Обновлённые сведения о ранее импортированной [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.chatlistUpdates](/constructor/chatlists.chatlistUpdates/) | Обновлённая информация о [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.exportedChatlistInvite](/constructor/chatlists.exportedChatlistInvite/) | Информация об экспортированной [глубокой ссылке на папку с чатами »](/api/links/#chat-folder-links). |
| [chatlists.exportedInvites](/constructor/chatlists.exportedInvites/) | Информация о нескольких [глубоких ссылках на папки с чатами »](/api/links/#chat-folder-links). |
| [chatOnlines](/constructor/chatOnlines/) | Количество пользователей чата, находящихся в сети |
| [chatParticipant](/constructor/chatParticipant/) | Участник [обычной группы](/api/channel/#basic-groups) (неприменимо к супергруппам). |
| [chatParticipantAdmin](/constructor/chatParticipantAdmin/) | Администратор [обычной группы](/api/channel/#basic-groups) (неприменимо к супергруппам). |
| [chatParticipantCreator](/constructor/chatParticipantCreator/) | Представляет создателя [обычной группы »](/api/channel/#basic-groups) |
| [chatParticipants](/constructor/chatParticipants/) | Содержит полный список участников [обычных групп »](/api/channel/#basic-groups); **НЕ** применимо к супергруппам и каналам. |
| [chatParticipantsForbidden](/constructor/chatParticipantsForbidden/) | Полный список участников [обычных групп »](/api/channel/#basic-groups) вам недоступен, поскольку вы были заблокированы. |
| [chatPhoto](/constructor/chatPhoto/) | Фотография профиля группы. |
| [chatPhotoEmpty](/constructor/chatPhotoEmpty/) | Фотография группы не установлена. |
| [chatReactionsAll](/constructor/chatReactionsAll/) | Разрешены все реакции или все реакции, кроме пользовательских |
| [chatReactionsNone](/constructor/chatReactionsNone/) | Реакции не разрешены |
| [chatReactionsSome](/constructor/chatReactionsSome/) | Разрешены некоторые реакции |
| [chatTheme](/constructor/chatTheme/) | Тема оформления чата |
| [chatThemeUniqueGift](/constructor/chatThemeUniqueGift/) | Тема оформления чата на основе [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [codeSettings](/constructor/codeSettings/) | Настройки, используемые серверами Telegram для отправки кода подтверждения. |
| [config](/constructor/config/) | Текущая конфигурация |
| [connectedBot](/constructor/connectedBot/) | Содержит информацию о [подключённом бизнес-боте »](/api/bots/connected-business-bots/). |
| [connectedBotStarRef](/constructor/connectedBotStarRef/) | Информация об [активной партнёрской программе, в которой мы участвуем с одним из Mini App](/api/bots/referrals/#becoming-an-affiliate) |
| [contact](/constructor/contact/) | Контакт текущего пользователя, зарегистрированный в системе. |
| [contactBirthday](/constructor/contactBirthday/) | Сведения о дне рождения контакта. |
| [contacts.blocked](/constructor/contacts.blocked/) | Полный список заблокированных пользователей. |
| [contacts.blockedSlice](/constructor/contacts.blockedSlice/) | Неполный список заблокированных пользователей. |
| [contacts.contactBirthdays](/constructor/contacts.contactBirthdays/) | Сведения о днях рождения наших контактов. |
| [contacts.contacts](/constructor/contacts.contacts/) | Список контактов текущего пользователя и сведения о пользователях. |
| [contacts.contactsNotModified](/constructor/contacts.contactsNotModified/) | Список контактов на сервере совпадает со списком на клиенте. |
| [contacts.found](/constructor/contacts.found/) | Пользователи, найденные по подстроке имени, и вспомогательные данные. |
| [contacts.importedContacts](/constructor/contacts.importedContacts/) | Информация об успешно импортированных контактах. |
| [contacts.resolvedPeer](/constructor/contacts.resolvedPeer/) | Разрешённый пир |
| [contacts.sponsoredPeers](/constructor/contacts.sponsoredPeers/) | Спонсируемые пиры. |
| [contacts.sponsoredPeersEmpty](/constructor/contacts.sponsoredPeersEmpty/) | Для этого запроса нет рекламируемых пиров. |
| [contacts.topPeers](/constructor/contacts.topPeers/) | Популярные пиры |
| [contacts.topPeersDisabled](/constructor/contacts.topPeersDisabled/) | Популярные пиры отключены |
| [contacts.topPeersNotModified](/constructor/contacts.topPeersNotModified/) | Сведения о популярных пирах не изменились |
| [contactStatus](/constructor/contactStatus/) | Статус контакта: в сети / не в сети. |
| [dataJSON](/constructor/dataJSON/) | Представляет объект в формате JSON |
| [dcOption](/constructor/dcOption/) | Дата-центр |
| [decryptedMessage](/constructor/decryptedMessage/) | Содержимое зашифрованного сообщения. |
| [decryptedMessageActionAbortKey](/constructor/decryptedMessageActionAbortKey/) | Прервать смену ключей |
| [decryptedMessageActionAcceptKey](/constructor/decryptedMessageActionAcceptKey/) | Принять новый ключ |
| [decryptedMessageActionCommitKey](/constructor/decryptedMessageActionCommitKey/) | Зафиксировать новый ключ, см. [процесс смены ключей](/api/end-to-end/pfs/) |
| [decryptedMessageActionDeleteMessages](/constructor/decryptedMessageActionDeleteMessages/) | Удалённые сообщения. |
| [decryptedMessageActionFlushHistory](/constructor/decryptedMessageActionFlushHistory/) | Вся история сообщений была удалена. |
| [decryptedMessageActionNoop](/constructor/decryptedMessageActionNoop/) | Действие NOOP |
| [decryptedMessageActionNotifyLayer](/constructor/decryptedMessageActionNotifyLayer/) | Уведомление о том, какой слой API использует клиент. Следует использовать свой текущий слой и при отправке сообщений учитывать слой, используемый на другой стороне переписки. |
| [decryptedMessageActionReadMessages](/constructor/decryptedMessageActionReadMessages/) | Сообщения отмечены как прочитанные. |
| [decryptedMessageActionRequestKey](/constructor/decryptedMessageActionRequestKey/) | Запросить смену ключей, см. [процесс смены ключей](/api/end-to-end/pfs/) |
| [decryptedMessageActionResend](/constructor/decryptedMessageActionResend/) | Запрос к другой стороне секретного чата на автоматическую повторную отправку непрерывного диапазона ранее отправленных сообщений, как описано в разделе [Sequence number is Secret Chats](/api/end-to-end/seq_no/). |
| [decryptedMessageActionScreenshotMessages](/constructor/decryptedMessageActionScreenshotMessages/) | Сделан снимок экрана. |
| [decryptedMessageActionSetMessageTTL](/constructor/decryptedMessageActionSetMessageTTL/) | Установка времени жизни сообщения после прочтения. |
| [decryptedMessageActionTyping](/constructor/decryptedMessageActionTyping/) | Пользователь готовит сообщение: набирает текст, записывает, загружает и т. п. |
| [decryptedMessageLayer](/constructor/decryptedMessageLayer/) | Задаёт номер слоя для содержимого зашифрованного сообщения. |
| [decryptedMessageMediaAudio](/constructor/decryptedMessageMediaAudio/) | Аудиофайл, вложенный в сообщение секретного чата. |
| [decryptedMessageMediaContact](/constructor/decryptedMessageMediaContact/) | Контакт, приложенный к зашифрованному сообщению. |
| [decryptedMessageMediaDocument](/constructor/decryptedMessageMediaDocument/) | Документ, вложенный в сообщение в секретном чате. |
| [decryptedMessageMediaEmpty](/constructor/decryptedMessageMediaEmpty/) | Пустой конструктор, медиасодержимое отсутствует. |
| [decryptedMessageMediaExternalDocument](/constructor/decryptedMessageMediaExternalDocument/) | Документ не из сквозного шифрования, пересланный из несекретного чата |
| [decryptedMessageMediaGeoPoint](/constructor/decryptedMessageMediaGeoPoint/) | Географическая точка, приложенная к зашифрованному сообщению. |
| [decryptedMessageMediaPhoto](/constructor/decryptedMessageMediaPhoto/) | Фотография, вложенная в зашифрованное сообщение. |
| [decryptedMessageMediaVenue](/constructor/decryptedMessageMediaVenue/) | Заведение |
| [decryptedMessageMediaVideo](/constructor/decryptedMessageMediaVideo/) | Видео, вложенное в зашифрованное сообщение. |
| [decryptedMessageMediaWebPage](/constructor/decryptedMessageMediaWebPage/) | Предпросмотр веб-страницы |
| [decryptedMessageService](/constructor/decryptedMessageService/) | Содержимое зашифрованного сервисного сообщения. |
| [defaultHistoryTTL](/constructor/defaultHistoryTTL/) | Содержит информацию о значении по умолчанию для настройки времени жизни (Time-To-Live), применяемой ко всем новым чатам. |
| [dialog](/constructor/dialog/) | Чат |
| [dialogFilter](/constructor/dialogFilter/) | Фильтр диалогов, он же [папка](/api/folders/) |
| [dialogFilterChatlist](/constructor/dialogFilterChatlist/) | Папка, импортированная по [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links). |
| [dialogFilterDefault](/constructor/dialogFilterDefault/) | Используется только при изменении порядка папок для обозначения папки по умолчанию (все чаты). |
| [dialogFilterSuggested](/constructor/dialogFilterSuggested/) | Рекомендуемые [папки](/api/folders/) |
| [dialogFolder](/constructor/dialogFolder/) | Диалог в папке |
| [dialogPeer](/constructor/dialogPeer/) | Пир |
| [dialogPeerFolder](/constructor/dialogPeerFolder/) | [Папка пира](/api/folders/#peer-folders) |
| [disallowedGiftsSettings](/constructor/disallowedGiftsSettings/) | Запретить получение определённых типов [подарков](/api/gifts/). |
| [document](/constructor/document/) | Документ |
| [documentAttributeAnimated](/constructor/documentAttributeAnimated/) | Определяет анимированный GIF |
| [documentAttributeAudio](/constructor/documentAttributeAudio/) | Представляет аудиофайл |
| [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) | Информация о пользовательском эмодзи |
| [documentAttributeFilename](/constructor/documentAttributeFilename/) | Простой документ с именем файла |
| [documentAttributeHasStickers](/constructor/documentAttributeHasStickers/) | Есть ли у текущего документа прикреплённые стикеры |
| [documentAttributeImageSize](/constructor/documentAttributeImageSize/) | Определяет ширину и высоту изображения, загруженного как документ |
| [documentAttributeSticker](/constructor/documentAttributeSticker/) | Определяет стикер |
| [documentAttributeVideo](/constructor/documentAttributeVideo/) | Определяет видео |
| [documentEmpty](/constructor/documentEmpty/) | Пустой конструктор, документ не существует. |
| [draftMessage](/constructor/draftMessage/) | Представляет [черновик](/api/drafts/) сообщения. |
| [draftMessageEmpty](/constructor/draftMessageEmpty/) | Пустой черновик |
| [e2e.callPacket](/constructor/e2e.callPacket/) | Конструктор-маркер, идентификатор которого (CRC32) используется при выработке и аутентификации [зашифрованных пакетов группового звонка](/api/end-to-end/group-calls/#packet-encryption). |
| [e2e.callPacketLargeMsgId](/constructor/e2e.callPacketLargeMsgId/) | Конструктор-маркер, идентификатор которого (CRC32) используется при подписи большого идентификатора сообщения, формируемого при шифровании [пакетов группового звонка](/api/end-to-end/group-calls/#packet-encryption). |
| [e2e.chain.block](/constructor/e2e.chain.block/) | Блок [основного блокчейна E2E-конференц-звонка](/api/end-to-end/group-calls/#block-structure), содержащий изменения состояния этого звонка и итоговое доказательство состояния. |
| [e2e.chain.changeNoop](/constructor/e2e.chain.changeNoop/) | Холостое [изменение блокчейна сквозного шифрования конференц-звонка](/api/end-to-end/group-calls/#change-types-for-group-calls), которое может использоваться только для рандомизации итогового хеша блока. |
| [e2e.chain.changeSetGroupState](/constructor/e2e.chain.changeSetGroupState/) | Обновляет [список участников и права в конференц-звонке со сквозным шифрованием](/api/end-to-end/group-calls/#change-types-for-group-calls), очищая текущее состояние общего ключа. |
| [e2e.chain.changeSetSharedKey](/constructor/e2e.chain.changeSetSharedKey/) | Устанавливает новый общий ключ шифрования для конференц-звонка со сквозным шифрованием, см. [типы изменений для групповых звонков »](/api/end-to-end/group-calls/#change-types-for-group-calls). |
| [e2e.chain.changeSetValue](/constructor/e2e.chain.changeSetValue/) | Обновляет [состояние префиксного дерева «ключ-значение» блокчейна конференц-звонка со сквозным шифрованием](/api/end-to-end/group-calls/#change-types-for-group-calls). |
| [e2e.chain.groupBroadcastNonceCommit](/constructor/e2e.chain.groupBroadcastNonceCommit/) | Сообщение-обязательство для [протокола проверки эмодзи в сквозно шифрованных конференц-звонках](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow). |
| [e2e.chain.groupBroadcastNonceReveal](/constructor/e2e.chain.groupBroadcastNonceReveal/) | Сообщение с раскрытием для [протокола проверки эмодзи в сквозном шифрованном конференц-звонке](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow). |
| [e2e.chain.groupParticipant](/constructor/e2e.chain.groupParticipant/) | Участник и его права в [групповом состоянии конференц-звонка со сквозным шифрованием »](/api/end-to-end/group-calls/#participants-and-permissions). |
| [e2e.chain.groupState](/constructor/e2e.chain.groupState/) | Список участников и внешняя маска разрешений для [состояния блокчейна сквозного шифрования конференц-звонка »](/api/end-to-end/group-calls/#participants-and-permissions). |
| [e2e.chain.sharedKey](/constructor/e2e.chain.sharedKey/) | Зашифрованный [общий групповой ключевой материал](/api/end-to-end/group-calls/#shared-key-encryption) для конференц-звонка со сквозным шифрованием. |
| [e2e.chain.stateProof](/constructor/e2e.chain.stateProof/) | Подтверждение [состояния блокчейна сквозного шифрования конференц-звонка](/api/end-to-end/group-calls/#block-application-process) после применения блока. |
| [emailVerificationApple](/constructor/emailVerificationApple/) | Токен подтверждения адреса электронной почты Apple ID |
| [emailVerificationCode](/constructor/emailVerificationCode/) | Код подтверждения электронной почты |
| [emailVerificationGoogle](/constructor/emailVerificationGoogle/) | Токен подтверждения адреса электронной почты Google ID |
| [emailVerifyPurposeLoginChange](/constructor/emailVerifyPurposeLoginChange/) | Назначение подтверждения электронной почты: смена почты для входа |
| [emailVerifyPurposeLoginSetup](/constructor/emailVerifyPurposeLoginSetup/) | Назначение подтверждения электронной почты: настройка почты для входа |
| [emailVerifyPurposePassport](/constructor/emailVerifyPurposePassport/) | Подтвердить адрес электронной почты для использования в [telegram passport](/api/passport/) |
| [emojiGroup](/constructor/emojiGroup/) | Представляет [категорию эмодзи](/api/emoji-categories/). |
| [emojiGroupGreeting](/constructor/emojiGroupGreeting/) | Представляет [категорию эмодзи](/api/emoji-categories/), которую следует переместить в начало списка при выборе стикера для [приветствия Telegram Business](/api/business/#business-introduction) |
| [emojiGroupPremium](/constructor/emojiGroupPremium/) | [Категория эмодзи](/api/emoji-categories/), используемая для выбора всех [Premium](/api/premium/)-стикеров (то есть тех, у которых есть [эффект Premium »](/api/stickers/#premium-animated-sticker-effects))/[Premium](/api/premium/)-[пользовательских эмодзи](/api/custom-emoji/) (то есть тех, у которых флаг [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`free` **не** установлен) |
| [emojiKeyword](/constructor/emojiKeyword/) | Ключевое слово эмодзи |
| [emojiKeywordDeleted](/constructor/emojiKeywordDeleted/) | Удалённое ключевое слово эмодзи |
| [emojiKeywordsDifference](/constructor/emojiKeywordsDifference/) | Изменения в ключевых словах эмодзи |
| [emojiLanguage](/constructor/emojiLanguage/) | Язык эмодзи |
| [emojiList](/constructor/emojiList/) | Представляет список [пользовательских эмодзи](/api/custom-emoji/). |
| [emojiListNotModified](/constructor/emojiListNotModified/) | Список [пользовательских эмодзи](/api/custom-emoji/) не изменился. |
| [emojiStatus](/constructor/emojiStatus/) | [Статус эмодзи](/api/emoji-status/) |
| [emojiStatusCollectible](/constructor/emojiStatusCollectible/) | Принадлежащий вам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса. |
| [emojiStatusEmpty](/constructor/emojiStatusEmpty/) | Эмодзи-статус не установлен |
| [emojiURL](/constructor/emojiURL/) | HTTP-адрес, по которому можно автоматически войти на платформу переводов и предложить новые замены эмодзи. Адрес действителен в течение 30 секунд после создания |
| [encryptedChat](/constructor/encryptedChat/) | Зашифрованный чат |
| [encryptedChatDiscarded](/constructor/encryptedChatDiscarded/) | Отменённый или удалённый чат. |
| [encryptedChatEmpty](/constructor/encryptedChatEmpty/) | Пустой конструктор. |
| [encryptedChatRequested](/constructor/encryptedChatRequested/) | Запрос на создание секретного чата. |
| [encryptedChatWaiting](/constructor/encryptedChatWaiting/) | Чат ожидает подтверждения от второго участника. |
| [encryptedFile](/constructor/encryptedFile/) | Зашифрованный файл. |
| [encryptedFileEmpty](/constructor/encryptedFileEmpty/) | Пустой конструктор, несуществующий файл. |
| [encryptedMessage](/constructor/encryptedMessage/) | Зашифрованное сообщение. |
| [encryptedMessageService](/constructor/encryptedMessageService/) | Зашифрованное сервисное сообщение |
| [error](/constructor/error/) | Ошибка. |
| [exportedChatlistInvite](/constructor/exportedChatlistInvite/) | Экспортированная [глубокая ссылка на папку с чатами »](/api/links/#chat-folder-links). |
| [exportedContactToken](/constructor/exportedContactToken/) | Описывает [временную ссылку на профиль](/api/links/#temporary-profile-links). |
| [exportedMessageLink](/constructor/exportedMessageLink/) | Ссылка на сообщение в супергруппе или канале |
| [exportedStoryLink](/constructor/exportedStoryLink/) | Представляет [глубокую ссылку на историю](/api/stories/#story-links). |
| [factCheck](/constructor/factCheck/) | Представляет [проверку фактов »](/api/factcheck/), выполненную независимым фактчекером. |
| [fileHash](/constructor/fileHash/) | Хеш SHA256 загруженного файла — для проверки целостности после скачивания |
| [fileLocation](/constructor/fileLocation/) | Расположение файла. |
| [fileLocationUnavailable](/constructor/fileLocationUnavailable/) | Файл сейчас недоступен. |
| [folder](/constructor/folder/) | Папка |
| [folderPeer](/constructor/folderPeer/) | Пир в папке |
| [forumTopic](/constructor/forumTopic/) | Представляет [тему форума](/api/forum/#forum-topics). |
| [forumTopicDeleted](/constructor/forumTopicDeleted/) | Представляет удалённую [тему форума](/api/forum/#forum-topics). |
| [foundStory](/constructor/foundStory/) | История, найденная через [глобальный поиск историй »](/api/stories/#searching-stories). |
| [fragment.collectibleInfo](/constructor/fragment.collectibleInfo/) | Информация о [коллекционном объекте fragment](/api/fragment/). |
| [game](/constructor/game/) | Указывает на уже отправленную игру |
| [geoPoint](/constructor/geoPoint/) | Географическая точка. |
| [geoPointAddress](/constructor/geoPointAddress/) | Необязательный адрес, связанный с [geoPoint](/constructor/geoPoint/). |
| [geoPointEmpty](/constructor/geoPointEmpty/) | Пустой конструктор. |
| [globalPrivacySettings](/constructor/globalPrivacySettings/) | Глобальные настройки приватности |
| [groupCall](/constructor/groupCall/) | Описывает [групповой звонок](/api/group-calls/). |
| [groupCallDiscarded](/constructor/groupCallDiscarded/) | Описывает завершённый [групповой звонок](/api/group-calls/). |
| [groupCallDonor](/constructor/groupCallDonor/) | Описывает донатера прямого эфира истории в [таблице лидеров пожертвований »](/api/group-calls/#paid-live-story-donations). |
| [groupCallMessage](/constructor/groupCallMessage/) | Представляет [сообщение во время звонка »](/api/group-calls/#in-call-messages), реакцию эмодзи, платный комментарий к прямой трансляции истории или отдельное платное пожертвование в прямой трансляции истории. |
| [groupCallParticipant](/constructor/groupCallParticipant/) | Описывает участника группового звонка и его текущее состояние, см. [применение обновлений группового звонка »](/api/group-calls/#applying-group-call-updates). |
| [groupCallParticipantVideo](/constructor/groupCallParticipantVideo/) | Информация о видеопотоке |
| [groupCallParticipantVideoSourceGroup](/constructor/groupCallParticipantVideoSourceGroup/) | Описывает группу идентификаторов источников синхронизации видео |
| [groupCallStreamChannel](/constructor/groupCallStreamChannel/) | Описывает доступный канал RTMP-трансляции и его текущую позицию воспроизведения; см. [воспроизведение RTMP-трансляции »](/api/group-calls/#rtmp-mode). |
| [help.appConfig](/constructor/help.appConfig/) | Содержит различные [параметры клиентской конфигурации](/api/config/#client-configuration) |
| [help.appConfigNotModified](/constructor/help.appConfigNotModified/) | Параметры конфигурации клиента не изменились |
| [help.appUpdate](/constructor/help.appUpdate/) | Доступно обновление приложения. |
| [help.countriesList](/constructor/help.countriesList/) | Название, код ISO, локализованное название и телефонные коды/шаблоны всех доступных стран |
| [help.countriesListNotModified](/constructor/help.countriesListNotModified/) | Список стран не изменился |
| [help.country](/constructor/help.country/) | Название, код ISO, локализованное название и телефонные коды/шаблоны конкретной страны |
| [help.countryCode](/constructor/help.countryCode/) | Код страны и шаблон номера телефона для конкретной страны |
| [help.deepLinkInfo](/constructor/help.deepLinkInfo/) | Информация о глубокой ссылке, [подробнее см. здесь](/api/links/#unsupported-links) |
| [help.deepLinkInfoEmpty](/constructor/help.deepLinkInfoEmpty/) | Информация о глубокой ссылке отсутствует |
| [help.inviteText](/constructor/help.inviteText/) | Текст текстового сообщения с приглашением установить Telegram. |
| [help.noAppUpdate](/constructor/help.noAppUpdate/) | Обновлений для приложения нет. |
| [help.passportConfig](/constructor/help.passportConfig/) | Конфигурация Telegram [passport](https://core.telegram.org/passport) |
| [help.passportConfigNotModified](/constructor/help.passportConfigNotModified/) | Настройки пароля не изменены |
| [help.peerColorOption](/constructor/help.peerColorOption/) | Содержит информацию о [цветовой палитре »](/api/colors/). |
| [help.peerColorProfileSet](/constructor/help.peerColorProfileSet/) | Представляет [цветовую палитру, которую можно использовать на страницах профиля »](/api/colors/). |
| [help.peerColors](/constructor/help.peerColors/) | Содержит информацию о нескольких [цветовых палитрах »](/api/colors/). |
| [help.peerColorSet](/constructor/help.peerColorSet/) | Представляет [цветовую палитру, которую можно использовать для акцентов в сообщениях »](/api/colors/). |
| [help.peerColorsNotModified](/constructor/help.peerColorsNotModified/) | Список цветовых палитр не изменился. |
| [help.premiumPromo](/constructor/help.premiumPromo/) | Сведения о рекламной кампании Telegram Premium |
| [help.promoData](/constructor/help.promoData/) | Набор полезных подсказок и рекламный пир PSA/MTProxy; подробнее см. [здесь »](/api/config/#suggestions). |
| [help.promoDataEmpty](/constructor/help.promoDataEmpty/) | Сведения о PSA/MTProxy недоступны |
| [help.recentMeUrls](/constructor/help.recentMeUrls/) | Недавние ссылки t.me |
| [help.support](/constructor/help.support/) | Информация о пользователе службы поддержки. |
| [help.supportName](/constructor/help.supportName/) | Локализованное название службы поддержки Telegram |
| [help.termsOfService](/constructor/help.termsOfService/) | Информация о последних условиях использования Telegram |
| [help.termsOfServiceUpdate](/constructor/help.termsOfServiceUpdate/) | Информация об обновлении условий использования Telegram. Если условия использования отклонены, следует вызвать метод [account.deleteAccount](/method/account.deleteAccount/) с причиной «Decline ToS update» |
| [help.termsOfServiceUpdateEmpty](/constructor/help.termsOfServiceUpdateEmpty/) | Условия использования Telegram не изменились |
| [help.timezonesList](/constructor/help.timezonesList/) | Сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания [часов работы Telegram Business »](/api/business/#opening-hours). |
| [help.timezonesListNotModified](/constructor/help.timezonesListNotModified/) | Список часовых поясов не изменился. |
| [help.userInfo](/constructor/help.userInfo/) | Для внутреннего использования |
| [help.userInfoEmpty](/constructor/help.userInfoEmpty/) | Для внутреннего использования |
| [highScore](/constructor/highScore/) | Рекорд в игре |
| [importedContact](/constructor/importedContact/) | Успешно импортированный контакт. |
| [inlineBotSwitchPM](/constructor/inlineBotSwitchPM/) | Бот попросил пользователя написать ему в личных сообщениях |
| [inlineBotWebView](/constructor/inlineBotWebView/) | Задаёт кнопку [Mini App в инлайн-режиме](/api/bots/webapps/#inline-mode-mini-apps), отображаемую над списком результатов инлайн-запроса. |
| [inlineQueryPeerTypeBotPM](/constructor/inlineQueryPeerTypeBotPM/) | Тип пира: личный чат с ботом. |
| [inlineQueryPeerTypeBroadcast](/constructor/inlineQueryPeerTypeBroadcast/) | Тип пира: [канал](/api/channel/) |
| [inlineQueryPeerTypeChat](/constructor/inlineQueryPeerTypeChat/) | Тип пира: [чат](/api/channel/) |
| [inlineQueryPeerTypeMegagroup](/constructor/inlineQueryPeerTypeMegagroup/) | Тип пира: [супергруппа](/api/channel/) |
| [inlineQueryPeerTypePM](/constructor/inlineQueryPeerTypePM/) | Тип пира: личный чат |
| [inlineQueryPeerTypeSameBotPM](/constructor/inlineQueryPeerTypeSameBotPM/) | Тип пира: личный чат с самим ботом |
| [inputAiComposeToneDefault](/constructor/inputAiComposeToneDefault/) | Ссылается на встроенный [тон ИИ-редактора »](/api/ai/#ai-compose-tones), используемый по умолчанию, по его строковому идентификатору. |
| [inputAiComposeToneID](/constructor/inputAiComposeToneID/) | Ссылается на пользовательскую [тональность AI-редактора »](/api/ai/#ai-compose-tones) по её ID и хешу доступа. |
| [inputAiComposeToneSlug](/constructor/inputAiComposeToneSlug/) | Ссылается на пользовательскую [тональность AI-редактора »](/api/ai/#ai-compose-tones) по её публичному слагу; используется при открытии [ссылки на тональность AI-редактора »](/api/links/#ai-compose-tone-links). |
| [inputAppEvent](/constructor/inputAppEvent/) | Событие, произошедшее в приложении. |
| [inputBotAppID](/constructor/inputBotAppID/) | Используется для получения информации о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps) по его идентификатору |
| [inputBotAppShortName](/constructor/inputBotAppShortName/) | Используется для получения информации о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps) по его короткому имени |
| [inputBotInlineMessageGame](/constructor/inputBotInlineMessageGame/) | Игра |
| [inputBotInlineMessageID](/constructor/inputBotInlineMessageID/) | Представляет отправленное инлайн-сообщение с точки зрения бота (устаревший конструктор) |
| [inputBotInlineMessageID64](/constructor/inputBotInlineMessageID64/) | Представляет отправленное инлайн-сообщение с точки зрения бота |
| [inputBotInlineMessageMediaAuto](/constructor/inputBotInlineMessageMediaAuto/) | Медиафайл |
| [inputBotInlineMessageMediaContact](/constructor/inputBotInlineMessageMediaContact/) | Контакт |
| [inputBotInlineMessageMediaGeo](/constructor/inputBotInlineMessageMediaGeo/) | Геопозиция |
| [inputBotInlineMessageMediaInvoice](/constructor/inputBotInlineMessageMediaInvoice/) | Счёт |
| [inputBotInlineMessageMediaVenue](/constructor/inputBotInlineMessageMediaVenue/) | Заведение |
| [inputBotInlineMessageMediaWebPage](/constructor/inputBotInlineMessageMediaWebPage/) | Задаёт параметры, которые будут использованы для создания предпросмотра ссылки в сообщении, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения. |
| [inputBotInlineMessageText](/constructor/inputBotInlineMessageText/) | Простое текстовое сообщение |
| [inputBotInlineResult](/constructor/inputBotInlineResult/) | Результат инлайн-бота |
| [inputBotInlineResultDocument](/constructor/inputBotInlineResultDocument/) | Документ (медиа любого типа, кроме фотографий) |
| [inputBotInlineResultGame](/constructor/inputBotInlineResultGame/) | Игра |
| [inputBotInlineResultPhoto](/constructor/inputBotInlineResultPhoto/) | Фотография |
| [inputBusinessAwayMessage](/constructor/inputBusinessAwayMessage/) | Описывает [сообщение об отсутствии Telegram Business](/api/business/#away-messages), автоматически отправляемое пользователям, которые пишут нам, когда мы не в сети, в нерабочие часы, во время отпуска или в любой другой заданный период, когда мы не можем ответить сразу. |
| [inputBusinessBotRecipients](/constructor/inputBusinessBotRecipients/) | Задаёт личные чаты, с которыми может взаимодействовать [подключённый бизнес-бот »](/api/bots/connected-business-bots/). |
| [inputBusinessChatLink](/constructor/inputBusinessChatLink/) | Содержит информацию о [глубокой ссылке на бизнес-чат »](/api/business/#business-chat-links), которую предстоит создать текущей учётной записи. |
| [inputBusinessGreetingMessage](/constructor/inputBusinessGreetingMessage/) | Описывает [приветственное сообщение Telegram Business](/api/business/#greeting-messages), автоматически отправляемое новым пользователям, которые пишут нам в личные сообщения впервые или после определённого периода бездействия. |
| [inputBusinessIntro](/constructor/inputBusinessIntro/) | [Введение в Telegram Business »](/api/business/#business-introduction). |
| [inputBusinessRecipients](/constructor/inputBusinessRecipients/) | Задаёт чаты, которые **могут** получать сообщения Telegram Business [об отсутствии »](/api/business/#away-messages) и [приветственные »](/api/business/#greeting-messages). |
| [inputChannel](/constructor/inputChannel/) | Представляет канал |
| [inputChannelEmpty](/constructor/inputChannelEmpty/) | Представляет отсутствие канала |
| [inputChannelFromMessage](/constructor/inputChannelFromMessage/) | Определяет [min](/api/min/)-канал, который встретился в определённом сообщении определённого чата. |
| [inputChatlistDialogFilter](/constructor/inputChatlistDialogFilter/) | Идентификатор папки |
| [inputChatPhoto](/constructor/inputChatPhoto/) | Существующая фотография, которую нужно установить как фотографию профиля чата. |
| [inputChatPhotoEmpty](/constructor/inputChatPhotoEmpty/) | Пустой конструктор, удалить фотографию группы. |
| [inputChatTheme](/constructor/inputChatTheme/) | Установить тему оформления чата на основе эмодзи, возвращаемую методом [account.getChatThemes](/method/account.getChatThemes/). |
| [inputChatThemeEmpty](/constructor/inputChatThemeEmpty/) | Удалить любую заданную в данный момент тему оформления. |
| [inputChatThemeUniqueGift](/constructor/inputChatThemeUniqueGift/) | Установить тему оформления на основе принадлежащего вам или [размещённого коллекционного подарка »](/api/gifts/#hosted-collectible-gifts), возвращаемого методом [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/). |
| [inputChatUploadedPhoto](/constructor/inputChatUploadedPhoto/) | Новая фотография, которая будет установлена как фотография профиля группы. |
| [inputCheckPasswordEmpty](/constructor/inputCheckPasswordEmpty/) | Пароль не задан |
| [inputCheckPasswordSRP](/constructor/inputCheckPasswordSRP/) | Конструктор для проверки правильности пароля двухфакторной аутентификации по SRP (см. [SRP](/api/srp/)) |
| [inputClientProxy](/constructor/inputClientProxy/) | Информация об [MTProxy](/mtproto/mtproto-transports/#transport-obfuscation), использованном для подключения. |
| [inputCollectiblePhone](/constructor/inputCollectiblePhone/) | Представляет [коллекционный номер телефона fragment](/api/fragment/) |
| [inputCollectibleUsername](/constructor/inputCollectibleUsername/) | Представляет [коллекционное имя пользователя fragment](/api/fragment/) |
| [inputDialogPeer](/constructor/inputDialogPeer/) | Пир |
| [inputDialogPeerFolder](/constructor/inputDialogPeerFolder/) | Все пиры в [папке пира](/api/folders/#peer-folders) |
| [inputDocument](/constructor/inputDocument/) | Определяет документ для дальнейшего взаимодействия. |
| [inputDocumentEmpty](/constructor/inputDocumentEmpty/) | Пустой конструктор. |
| [inputDocumentFileLocation](/constructor/inputDocumentFileLocation/) | Местоположение документа (видео, голосовое сообщение, аудио — в общем, любой тип, кроме фотографии) |
| [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) | Принадлежащий вам или [размещённый коллекционный подарок »](/api/gifts/#hosted-collectible-gifts) в качестве эмодзи-статуса: может использоваться только в [account.updateEmojiStatus](/method/account.updateEmojiStatus/), никогда не возвращается API. |
| [inputEncryptedChat](/constructor/inputEncryptedChat/) | [Чат со сквозным шифрованием](/api/end-to-end/). |
| [inputEncryptedFile](/constructor/inputEncryptedFile/) | Задаёт пересылаемый зашифрованный файл для вложения. |
| [inputEncryptedFileBigUploaded](/constructor/inputEncryptedFileBigUploaded/) | Задаёт новый большой зашифрованный файл (размером более 10 МБ), сохранённый по частям с помощью метода [upload.saveBigFilePart](/method/upload.saveBigFilePart/). |
| [inputEncryptedFileEmpty](/constructor/inputEncryptedFileEmpty/) | Пустой конструктор. |
| [inputEncryptedFileLocation](/constructor/inputEncryptedFileLocation/) | Расположение зашифрованного файла из секретного чата. |
| [inputEncryptedFileUploaded](/constructor/inputEncryptedFileUploaded/) | Задаёт новый зашифрованный файл, сохранённый по частям с помощью метода upload.saveFilePart. |
| [inputFile](/constructor/inputFile/) | Определяет файл, сохранённый по частям с помощью метода [upload.saveFilePart](/method/upload.saveFilePart/). |
| [inputFileBig](/constructor/inputFileBig/) | Задаёт большой файл (размером более 10 МБ), сохранённый по частям с помощью метода [upload.saveBigFilePart](/method/upload.saveBigFilePart/). |
| [inputFileLocation](/constructor/inputFileLocation/) | УСТАРЕЛО: расположение фотографии |
| [inputFileStoryDocument](/constructor/inputFileStoryDocument/) | Используется, чтобы [изменить миниатюру или статичный предпросмотр истории; подробнее обо всём процессе см. здесь »](/api/stories/#editing-stories). |
| [inputFolderPeer](/constructor/inputFolderPeer/) | Пир в папке |
| [inputGameID](/constructor/inputGameID/) | Указывает на уже отправленную игру |
| [inputGameShortName](/constructor/inputGameShortName/) | Игра по краткому имени |
| [inputGeoPoint](/constructor/inputGeoPoint/) | Определяет географическую точку по её координатам. |
| [inputGeoPointEmpty](/constructor/inputGeoPointEmpty/) | Пустой конструктор географической точки. |
| [inputGroupCall](/constructor/inputGroupCall/) | Указывает на конкретный [групповой звонок](/api/group-calls/). |
| [inputGroupCallInviteMessage](/constructor/inputGroupCallInviteMessage/) | Определяет [конференц-звонок »](/api/group-calls/#conference-calls) по его пригласительному сервисному сообщению [messageActionConferenceCall](/constructor/messageActionConferenceCall/). |
| [inputGroupCallSlug](/constructor/inputGroupCallSlug/) | Определяет [конференц-звонок »](/api/group-calls/#conference-calls) по слагу из его пригласительной ссылки. |
| [inputGroupCallStream](/constructor/inputGroupCallStream/) | Определяет фрагмент медиа видеочата, трансляции или прямой истории в режиме RTMP, см. [воспроизведение RTMP-трансляции »](/api/group-calls/#downloading-media-chunks). |
| [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) | Перевести stars с баланса учётной записи пользователя, [подключённой к бизнес-боту](/api/bots/connected-business-bots/), на баланс [бизнес-бота](/api/bots/connected-business-bots/); подробнее обо всём процессе см. [здесь »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot). |
| [inputInvoiceChatInviteSubscription](/constructor/inputInvoiceChatInviteSubscription/) | Используется для оплаты [подписки за Telegram Stars »](/api/stars/#star-subscriptions). |
| [inputInvoiceMessage](/constructor/inputInvoiceMessage/) | Счёт, содержащийся в сообщении [messageMediaInvoice](/constructor/messageMediaInvoice/) или в [платном медиа »](/api/paid-media/). |
| [inputInvoicePremiumAuthCode](/constructor/inputInvoicePremiumAuthCode/) | Используется для оплаты кодов входа в случае высокой стоимости SMS с кодами подтверждения для страны или оператора пользователя; подробнее [см. здесь »](/api/auth/#paid-auth). |
| [inputInvoicePremiumGiftCode](/constructor/inputInvoicePremiumGiftCode/) | Используется, если пользователь хочет запустить [розыгрыш](/api/giveaways/) в канале или супергруппе либо отправить [подарочные коды](/api/giveaways/) участникам канала или супергруппы в обмен на [бусты](/api/boost/). |
| [inputInvoicePremiumGiftStars](/constructor/inputInvoicePremiumGiftStars/) | Используется, чтобы подарить другому пользователю подписку [Telegram Premium](/api/premium/) с оплатой [Telegram Stars](/api/stars/). |
| [inputInvoiceSlug](/constructor/inputInvoiceSlug/) | Идентификатор счёта (slug), взятый из [глубокой ссылки на счёт](/api/links/#invoice-links) или из [параметра конфигурации приложения `premium_invoice_slug` »](/api/config/#premium-invoice-slug) |
| [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/) | Используется для покупки [звёздного подарка Telegram, подробнее см. здесь »](/api/gifts/). |
| [inputInvoiceStarGiftAuctionBid](/constructor/inputInvoiceStarGiftAuctionBid/) | Используется, чтобы сделать ставку на [аукционе коллекционных подарков »](/api/auctions/). |
| [inputInvoiceStarGiftDropOriginalDetails](/constructor/inputInvoiceStarGiftDropOriginalDetails/) | Используется для оплаты удаления атрибута [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) у коллекционного подарка; полный порядок действий см. [здесь »](/api/gifts/#dropping-the-original-details-of-an-upgraded-gift). |
| [inputInvoiceStarGiftPrepaidUpgrade](/constructor/inputInvoiceStarGiftPrepaidUpgrade/) | [Отдельная предоплата улучшения подарка »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade). |
| [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/) | Используется для покупки [коллекционного подарка](/api/gifts/#collectible-gifts), выставленного на перепродажу; подробнее обо всём процессе см. [здесь](/api/gifts/#reselling-collectible-gifts). |
| [inputInvoiceStarGiftTransfer](/constructor/inputInvoiceStarGiftTransfer/) | Используется, чтобы [оплатить передачу коллекционного подарка другому пиру](/api/gifts/#transferring-collectible-gifts); подробнее см. документацию по [подаркам »](/api/gifts/#transferring-collectible-gifts). |
| [inputInvoiceStarGiftUpgrade](/constructor/inputInvoiceStarGiftUpgrade/) | Используется, чтобы [оплатить улучшение подарка до коллекционного](/api/gifts/#upgrade-a-gift-to-a-collectible-gift); подробнее обо всём процессе см. документацию по [коллекционным подаркам »](/api/gifts/#collectible-gifts). |
| [inputInvoiceStars](/constructor/inputInvoiceStars/) | Используется для пополнения баланса [Telegram Stars](/api/stars/) текущего или чужого аккаунта, а также для запуска [розыгрыша Telegram Stars »](/api/giveaways/#star-giveaways). |
| [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/) | Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). |
| [inputKeyboardButtonUrlAuth](/constructor/inputKeyboardButtonUrlAuth/) | Кнопка для запроса [авторизации](/method/messages.acceptUrlAuth/) пользователя по URL через [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots). |
| [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/) | Кнопка, ведущая непосредственно в профиль пользователя |
| [inputMediaAreaChannelPost](/constructor/inputMediaAreaChannelPost/) | Представляет пост канала |
| [inputMediaAreaVenue](/constructor/inputMediaAreaVenue/) | Представляет [метку места](/api/stories/#media-areas), прикреплённую к [истории](/api/stories/), с дополнительными сведениями о заведении. |
| [inputMediaContact](/constructor/inputMediaContact/) | Контакт из телефонной книги |
| [inputMediaDice](/constructor/inputMediaDice/) | Отправить [анимированный стикер с игральной костью](/api/dice/) |
| [inputMediaDocument](/constructor/inputMediaDocument/) | Пересланный документ |
| [inputMediaDocumentExternal](/constructor/inputMediaDocumentExternal/) | Документ, который будет загружен серверами Telegram |
| [inputMediaEmpty](/constructor/inputMediaEmpty/) | Пустое медиасодержимое сообщения. |
| [inputMediaGame](/constructor/inputMediaGame/) | Игра |
| [inputMediaGeoLive](/constructor/inputMediaGeoLive/) | [Геолокация в реальном времени](/api/live-location/) |
| [inputMediaGeoPoint](/constructor/inputMediaGeoPoint/) | Карта. |
| [inputMediaInvoice](/constructor/inputMediaInvoice/) | Сформированный счёт [платежа через бота](https://core.telegram.org/bots/payments) |
| [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/) | [Платное медиа, подробнее см. здесь »](/api/paid-media/). |
| [inputMediaPhoto](/constructor/inputMediaPhoto/) | Пересланная фотография |
| [inputMediaPhotoExternal](/constructor/inputMediaPhotoExternal/) | Новая фотография, которая будет загружена сервером по указанному URL |
| [inputMediaPoll](/constructor/inputMediaPoll/) | Опрос |
| [inputMediaStakeDice](/constructor/inputMediaStakeDice/) | Медиа игры в кости. |
| [inputMediaStory](/constructor/inputMediaStory/) | Пересланная история |
| [inputMediaTodo](/constructor/inputMediaTodo/) | Создаёт [список задач »](/api/todo/). |
| [inputMediaUploadedDocument](/constructor/inputMediaUploadedDocument/) | Новый документ |
| [inputMediaUploadedPhoto](/constructor/inputMediaUploadedPhoto/) | Фотография |
| [inputMediaVenue](/constructor/inputMediaVenue/) | Может использоваться для отправки геопозиции заведения. |
| [inputMediaWebPage](/constructor/inputMediaWebPage/) | Задаёт параметры, которые будут использованы для создания предпросмотра ссылки в подписи, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения. |
| [inputMessageCallbackQuery](/constructor/inputMessageCallbackQuery/) | Используется ботами для получения сведений о сообщении, из которого пришёл callback-запрос |
| [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/) | Сущность оформления, с помощью которой можно создать [упоминание пользователя](/api/mentions/); в получаемых упоминаниях вместо неё используется конструктор [messageEntityMentionName](/constructor/messageEntityMentionName/). |
| [inputMessageID](/constructor/inputMessageID/) | Сообщение по идентификатору |
| [inputMessagePinned](/constructor/inputMessagePinned/) | Закреплённое сообщение |
| [inputMessageReadMetric](/constructor/inputMessageReadMetric/) | Метрика прочтения для одного показа сообщения, описывающая, как долго сообщение было видно в области просмотра чата. |
| [inputMessageReplyTo](/constructor/inputMessageReplyTo/) | Сообщение, на которое отвечает указанное сообщение |
| [inputMessagesFilterChatPhotos](/constructor/inputMessagesFilterChatPhotos/) | Возвращать только изменения фотографии чата |
| [inputMessagesFilterContacts](/constructor/inputMessagesFilterContacts/) | Возвращать только сообщения с контактами |
| [inputMessagesFilterDocument](/constructor/inputMessagesFilterDocument/) | Фильтр для сообщений, содержащих документы. |
| [inputMessagesFilterEmpty](/constructor/inputMessagesFilterEmpty/) | Фильтр отсутствует. |
| [inputMessagesFilterGeo](/constructor/inputMessagesFilterGeo/) | Возвращать только сообщения с геолокациями |
| [inputMessagesFilterGif](/constructor/inputMessagesFilterGif/) | Возвращать только сообщения с GIF |
| [inputMessagesFilterMusic](/constructor/inputMessagesFilterMusic/) | Возвращать только сообщения с аудиофайлами |
| [inputMessagesFilterMyMentions](/constructor/inputMessagesFilterMyMentions/) | Возвращать только сообщения, в которых [упомянут](/api/mentions/) текущий пользователь. |
| [inputMessagesFilterPhoneCalls](/constructor/inputMessagesFilterPhoneCalls/) | Возвращать только телефонные звонки |
| [inputMessagesFilterPhotos](/constructor/inputMessagesFilterPhotos/) | Фильтр для сообщений, содержащих фотографии. |
| [inputMessagesFilterPhotoVideo](/constructor/inputMessagesFilterPhotoVideo/) | Фильтр для сообщений, содержащих фотографии или видео. |
| [inputMessagesFilterPinned](/constructor/inputMessagesFilterPinned/) | Получить только закреплённые сообщения |
| [inputMessagesFilterPoll](/constructor/inputMessagesFilterPoll/) | Фильтр для сообщений с опросами, см. [поиск опросов »](/api/poll/#searching-for-polls) |
| [inputMessagesFilterRoundVideo](/constructor/inputMessagesFilterRoundVideo/) | Возвращать только видеосообщения |
| [inputMessagesFilterRoundVoice](/constructor/inputMessagesFilterRoundVoice/) | Возвращать только видеосообщения и голосовые сообщения |
| [inputMessagesFilterUrl](/constructor/inputMessagesFilterUrl/) | Возвращать только сообщения со ссылками |
| [inputMessagesFilterVideo](/constructor/inputMessagesFilterVideo/) | Фильтр для сообщений, содержащих видео. |
| [inputMessagesFilterVoice](/constructor/inputMessagesFilterVoice/) | Возвращать только сообщения с голосовыми сообщениями |
| [inputNotifyBroadcasts](/constructor/inputNotifyBroadcasts/) | Все [каналы](/api/channel/) |
| [inputNotifyChats](/constructor/inputNotifyChats/) | Уведомления, создаваемые всеми группами. |
| [inputNotifyForumTopic](/constructor/inputNotifyForumTopic/) | Уведомления, создаваемые [темой](/api/forum/#forum-topics) в [форуме](/api/forum/). |
| [inputNotifyPeer](/constructor/inputNotifyPeer/) | Уведомления, создаваемые определённым пользователем или группой. |
| [inputNotifyUsers](/constructor/inputNotifyUsers/) | Уведомления, создаваемые всеми пользователями. |
| [inputPasskeyCredentialFirebasePNV](/constructor/inputPasskeyCredentialFirebasePNV/) | Альтернативные учётные данные [ключа доступа](/api/passkeys/), подтверждающие владение номером телефона аккаунта с помощью токена Firebase Phone Number Verification (PNV); используются в официальных приложениях, где невозможно создать полноценный [ключ доступа с открытым ключом](/constructor/inputPasskeyCredentialPublicKey/) по стандарту WebAuthn, аналогично [аутентификации по SMS через Firebase »](/api/auth/). |
| [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) | Учётные данные ключа доступа с открытым ключом, используемые как для регистрации, так и для входа; полное описание процессов см. в разделах [создание ключа доступа »](/api/passkeys/#creating-a-passkey) и [вход с помощью ключа доступа »](/api/passkeys/#logging-in-with-a-passkey). |
| [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) | Ответ WebAuthn при аутентификации, используемый при входе по ключу доступа; подробнее о полном процессе см. [здесь »](/api/passkeys/#logging-in-with-a-passkey). |
| [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/) | Ответ WebAuthn при регистрации, используемый при регистрации нового ключа доступа; подробнее о полном процессе см. [здесь »](/api/passkeys/#creating-a-passkey). |
| [inputPaymentCredentials](/constructor/inputPaymentCredentials/) | Платёжные реквизиты |
| [inputPaymentCredentialsApplePay](/constructor/inputPaymentCredentialsApplePay/) | Платёжные реквизиты Apple Pay |
| [inputPaymentCredentialsGooglePay](/constructor/inputPaymentCredentialsGooglePay/) | Платёжные данные Google Pay |
| [inputPaymentCredentialsSaved](/constructor/inputPaymentCredentialsSaved/) | Сохранённые платёжные реквизиты |
| [inputPeerChannel](/constructor/inputPeerChannel/) | Определяет канал для дальнейшего взаимодействия. |
| [inputPeerChannelFromMessage](/constructor/inputPeerChannelFromMessage/) | Определяет [min](/api/min/)-канал, который встретился в определённом сообщении определённого чата. |
| [inputPeerChat](/constructor/inputPeerChat/) | Определяет чат для дальнейшего взаимодействия. |
| [inputPeerColorCollectible](/constructor/inputPeerColorCollectible/) | Представляет [цветовую палитру »](/api/colors/), связанную с [коллекционным подарком »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/colors/#collectible-gift-palettes). |
| [inputPeerEmpty](/constructor/inputPeerEmpty/) | Пустой конструктор, не задан ни пользователь, ни чат. |
| [inputPeerNotifySettings](/constructor/inputPeerNotifySettings/) | Настройки уведомлений. |
| [inputPeerPhotoFileLocation](/constructor/inputPeerPhotoFileLocation/) | Расположение фотографии профиля канала, группы, супергруппы или пользователя |
| [inputPeerSelf](/constructor/inputPeerSelf/) | Определяет текущего пользователя. |
| [inputPeerUser](/constructor/inputPeerUser/) | Определяет пользователя для дальнейшего взаимодействия. |
| [inputPeerUserFromMessage](/constructor/inputPeerUserFromMessage/) | Определяет [min](/api/min/)-пользователя, который встретился в определённом сообщении определённого чата. |
| [inputPhoneCall](/constructor/inputPhoneCall/) | Определяет [звонок](/api/calls/). |
| [inputPhoneContact](/constructor/inputPhoneContact/) | Телефонный контакт. |
| [inputPhoto](/constructor/inputPhoto/) | Определяет фотографию для дальнейшего взаимодействия. |
| [inputPhotoEmpty](/constructor/inputPhotoEmpty/) | Пустой конструктор. |
| [inputPhotoFileLocation](/constructor/inputPhotoFileLocation/) | Этот объект используется для скачивания фотографии методом [upload.getFile](/method/upload.getFile/) |
| [inputPhotoLegacyFileLocation](/constructor/inputPhotoLegacyFileLocation/) | УСТАРЕЛО: расположение файла фотографии в старом формате |
| [inputPollAnswer](/constructor/inputPollAnswer/) | Вариант ответа для добавления в [опрос со свободным ответом »](/api/poll/#open-answer-polls) |
| [inputPrivacyKeyAbout](/constructor/inputPrivacyKeyAbout/) | Могут ли другие видеть вашу биографию |
| [inputPrivacyKeyAddedByPhone](/constructor/inputPrivacyKeyAddedByPhone/) | Могут ли другие добавить вас в список контактов по номеру телефона |
| [inputPrivacyKeyBirthday](/constructor/inputPrivacyKeyBirthday/) | Может ли пользователь видеть наш день рождения. |
| [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/) | Смогут ли другие приглашать вас в чаты |
| [inputPrivacyKeyForwards](/constructor/inputPrivacyKeyForwards/) | Будут ли сообщения, пересланные от вас, [анонимными](https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding) |
| [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) | Кто может писать вам без оплаты, если включены [платные сообщения »](/api/paid-messages/). |
| [inputPrivacyKeyPhoneCall](/constructor/inputPrivacyKeyPhoneCall/) | Будете ли вы принимать звонки |
| [inputPrivacyKeyPhoneNumber](/constructor/inputPrivacyKeyPhoneNumber/) | Смогут ли другие видеть ваш номер телефона |
| [inputPrivacyKeyPhoneP2P](/constructor/inputPrivacyKeyPhoneP2P/) | Разрешать ли P2P-связь во время VoIP-звонков |
| [inputPrivacyKeyProfilePhoto](/constructor/inputPrivacyKeyProfilePhoto/) | Смогут ли другие видеть вашу фотографию профиля |
| [inputPrivacyKeySavedMusic](/constructor/inputPrivacyKeySavedMusic/) | Может ли пользователь видеть [композиции, закреплённые в нашем профиле »](/api/profile/#music). |
| [inputPrivacyKeyStarGiftsAutoSave](/constructor/inputPrivacyKeyStarGiftsAutoSave/) | Будут ли полученные [подарки](/api/gifts/) автоматически отображаться в нашем профиле |
| [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/) | Смогут ли другие видеть точное время нашего последнего пребывания в сети. |
| [inputPrivacyKeyVoiceMessages](/constructor/inputPrivacyKeyVoiceMessages/) | Могут ли другие отправлять вам голосовые сообщения или видеосообщения (только для пользователей [Premium](/api/premium/)). |
| [inputPrivacyValueAllowAll](/constructor/inputPrivacyValueAllowAll/) | Разрешить всем пользователям |
| [inputPrivacyValueAllowBots](/constructor/inputPrivacyValueAllowBots/) | Разрешить ботам и mini app |
| [inputPrivacyValueAllowChatParticipants](/constructor/inputPrivacyValueAllowChatParticipants/) | Разрешить только участникам определённых чатов |
| [inputPrivacyValueAllowCloseFriends](/constructor/inputPrivacyValueAllowCloseFriends/) | Разрешить только [близким друзьям »](/api/privacy/) |
| [inputPrivacyValueAllowContacts](/constructor/inputPrivacyValueAllowContacts/) | Разрешить только контактам |
| [inputPrivacyValueAllowPremium](/constructor/inputPrivacyValueAllowPremium/) | Разрешить только пользователям с [подпиской Premium »](/api/premium/); в настоящее время применимо только для [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/). |
| [inputPrivacyValueAllowUsers](/constructor/inputPrivacyValueAllowUsers/) | Разрешить только определённым пользователям |
| [inputPrivacyValueDisallowAll](/constructor/inputPrivacyValueDisallowAll/) | Запретить всем |
| [inputPrivacyValueDisallowBots](/constructor/inputPrivacyValueDisallowBots/) | Запретить ботам и мини-приложениям |
| [inputPrivacyValueDisallowChatParticipants](/constructor/inputPrivacyValueDisallowChatParticipants/) | Запретить только участникам определённых чатов |
| [inputPrivacyValueDisallowContacts](/constructor/inputPrivacyValueDisallowContacts/) | Запретить только контактам |
| [inputPrivacyValueDisallowUsers](/constructor/inputPrivacyValueDisallowUsers/) | Запретить только определённым пользователям |
| [inputQuickReplyShortcut](/constructor/inputQuickReplyShortcut/) | Выбирает [шаблон быстрого ответа](/api/business/#quick-reply-shortcuts) по названию. |
| [inputQuickReplyShortcutId](/constructor/inputQuickReplyShortcutId/) | Выбирает [шаблон быстрого ответа](/api/business/#quick-reply-shortcuts) по его числовому идентификатору. |
| [inputReplyToMessage](/constructor/inputReplyToMessage/) | Ответить на сообщение. |
| [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/) | Используется для отправки сообщений в [тему монофорума](/api/monoforum/). |
| [inputReplyToStory](/constructor/inputReplyToStory/) | Ответить на историю. |
| [inputReportReasonChildAbuse](/constructor/inputReportReasonChildAbuse/) | Жалоба на насилие над детьми |
| [inputReportReasonCopyright](/constructor/inputReportReasonCopyright/) | Жалоба на нарушение авторских прав |
| [inputReportReasonFake](/constructor/inputReportReasonFake/) | Жалоба на выдачу себя за другое лицо |
| [inputReportReasonGeoIrrelevant](/constructor/inputReportReasonGeoIrrelevant/) | Пожаловаться на нерелевантную геогруппу |
| [inputReportReasonIllegalDrugs](/constructor/inputReportReasonIllegalDrugs/) | Жалоба на запрещённые наркотики |
| [inputReportReasonOther](/constructor/inputReportReasonOther/) | Прочее |
| [inputReportReasonPersonalDetails](/constructor/inputReportReasonPersonalDetails/) | Жалоба на разглашение персональных данных |
| [inputReportReasonPornography](/constructor/inputReportReasonPornography/) | Жалоба на порнографию |
| [inputReportReasonSpam](/constructor/inputReportReasonSpam/) | Жалоба на спам |
| [inputReportReasonViolence](/constructor/inputReportReasonViolence/) | Жалоба на насилие |
| [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/) | Подарок, полученный каналом, которым мы владеем. |
| [inputSavedStarGiftSlug](/constructor/inputSavedStarGiftSlug/) | Указывает на [коллекционный подарок, полученный по ссылке на коллекционный подарок »](/api/links/#collectible-gift-link). |
| [inputSavedStarGiftUser](/constructor/inputSavedStarGiftUser/) | Подарок, полученный в личном чате с другим пользователем. |
| [inputSecureFile](/constructor/inputSecureFile/) | Заранее загруженный файл [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [inputSecureFileLocation](/constructor/inputSecureFileLocation/) | Расположение зашифрованного файла telegram [passport](https://core.telegram.org/passport). |
| [inputSecureFileUploaded](/constructor/inputSecureFileUploaded/) | Загруженный защищённый файл; подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [inputSecureValue](/constructor/inputSecureValue/) | Защищённое значение, [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption) |
| [inputSingleMedia](/constructor/inputSingleMedia/) | Отдельный медиафайл в [альбоме или сгруппированных медиафайлах](/api/files/#albums-grouped-media), отправленный методом [messages.sendMultiMedia](/method/messages.sendMultiMedia/). |
| [inputStarGiftAuction](/constructor/inputStarGiftAuction/) | Используется для получения [аукционов](/api/auctions/) по идентификатору связанного [коллекционного подарка](/api/gifts/#collectible-gifts). |
| [inputStarGiftAuctionSlug](/constructor/inputStarGiftAuctionSlug/) | Используется для получения [аукционов](/api/auctions/) по [слагу глубокой ссылки на аукцион »](/api/links/#auction-links). |
| [inputStarsTransaction](/constructor/inputStarsTransaction/) | Используется для получения информации о [транзакции с Telegram Stars »](/api/stars/#balance-and-transaction-history). |
| [inputStickeredMediaDocument](/constructor/inputStickeredMediaDocument/) | Документ с прикреплёнными стикерами |
| [inputStickeredMediaPhoto](/constructor/inputStickeredMediaPhoto/) | Фотография с прикреплёнными стикерами |
| [inputStickerSetAnimatedEmoji](/constructor/inputStickerSetAnimatedEmoji/) | Набор анимированных эмодзи |
| [inputStickerSetAnimatedEmojiAnimations](/constructor/inputStickerSetAnimatedEmojiAnimations/) | Набор стикеров для реакций анимированными эмодзи (содержит анимации, которые проигрываются при нажатии пользователем на соответствующий анимированный эмодзи) |
| [inputStickerSetDice](/constructor/inputStickerSetDice/) | Используется для получения [анимированных стикеров с кубиками](/api/dice/) |
| [inputStickerSetEmojiChannelDefaultStatuses](/constructor/inputStickerSetEmojiChannelDefaultStatuses/) | Набор стикеров [эмодзи-статусов](/api/emoji-status/) по умолчанию для статусов каналов |
| [inputStickerSetEmojiDefaultStatuses](/constructor/inputStickerSetEmojiDefaultStatuses/) | Набор стикеров [эмодзи-статусов](/api/emoji-status/) по умолчанию |
| [inputStickerSetEmojiDefaultTopicIcons](/constructor/inputStickerSetEmojiDefaultTopicIcons/) | Набор [пользовательских эмодзи](/api/custom-emoji/) по умолчанию для [значков тем форума](/api/forum/#forum-topics) |
| [inputStickerSetEmojiGenericAnimations](/constructor/inputStickerSetEmojiGenericAnimations/) | Общий набор анимаций, содержащий анимации, которые проигрываются при [реакции на сообщения обычным эмодзи без собственной анимации](/api/reactions/) |
| [inputStickerSetEmpty](/constructor/inputStickerSetEmpty/) | Пустой конструктор |
| [inputStickerSetID](/constructor/inputStickerSetID/) | Набор стикеров по идентификатору |
| [inputStickerSetItem](/constructor/inputStickerSetItem/) | Стикер в наборе стикеров |
| [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/) | Стикеры, показываемые при получении подписки Telegram Premium в подарок |
| [inputStickerSetShortName](/constructor/inputStickerSetShortName/) | Набор стикеров по краткому имени, из [глубокой ссылки на набор стикеров »](/api/links/#stickerset-links) |
| [inputStickerSetThumb](/constructor/inputStickerSetThumb/) | Расположение миниатюры набора стикеров (см. [файлы](/api/files/)) |
| [inputStickerSetTonGifts](/constructor/inputStickerSetTonGifts/) | Набор стикеров для подарков TON. |
| [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/) | Обозначает оплату кода для входа. |
| [inputStorePaymentGiftPremium](/constructor/inputStorePaymentGiftPremium/) | Информация о покупке Telegram Premium в подарок |
| [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/) | Используется, чтобы подарить подписки [Telegram Premium](/api/premium/) только определённым подписчикам канала или супергруппы либо некоторым из наших контактов; подробнее о розыгрышах и подарках см. [здесь »](/api/giveaways/). |
| [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/) | Используется для оплаты [розыгрыша; подробнее см. здесь »](/api/giveaways/). |
| [inputStorePaymentPremiumSubscription](/constructor/inputStorePaymentPremiumSubscription/) | Информация о покупке Telegram Premium |
| [inputStorePaymentStarsGift](/constructor/inputStorePaymentStarsGift/) | Используется, чтобы подарить другу [Telegram Stars](/api/stars/). |
| [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/) | Используется для оплаты [розыгрыша звёзд; подробнее см. здесь »](/api/giveaways/#star-giveaways). |
| [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/) | Используется для пополнения [баланса Telegram Stars](/api/stars/) текущего аккаунта. |
| [inputTakeoutFileLocation](/constructor/inputTakeoutFileLocation/) | Используется для скачивания JSON-файла, который будет содержать все персональные данные, относящиеся к возможностям, для которых пока нет специализированного [метода выгрузки](/api/takeout/); подробнее об API выгрузки данных см. [здесь »](/api/takeout/). |
| [inputTheme](/constructor/inputTheme/) | Тема оформления |
| [inputThemeSettings](/constructor/inputThemeSettings/) | Параметры темы оформления |
| [inputThemeSlug](/constructor/inputThemeSlug/) | Тема оформления по её идентификатору |
| [inputUser](/constructor/inputUser/) | Определяет пользователя для дальнейшего взаимодействия. |
| [inputUserEmpty](/constructor/inputUserEmpty/) | Пустой конструктор, пользователь не задан. |
| [inputUserFromMessage](/constructor/inputUserFromMessage/) | Определяет [min](/api/min/)-пользователя, который встретился в определённом сообщении определённого чата. |
| [inputUserSelf](/constructor/inputUserSelf/) | Определяет текущего пользователя. |
| [inputWallPaper](/constructor/inputWallPaper/) | [Обои](/api/wallpapers/) |
| [inputWallPaperNoFile](/constructor/inputWallPaperNoFile/) | [Обои](/api/wallpapers/) без хеша доступа к файлу; используются, например, при удалении обоев (`unsave=true`) методом [account.saveWallPaper](/method/account.saveWallPaper/), когда передаётся только идентификатор обоев. |
| [inputWallPaperSlug](/constructor/inputWallPaperSlug/) | [Обои](/api/wallpapers/) по слагу (уникальному идентификатору, полученному из [ссылки на обои »](/api/links/#wallpaper-links)) |
| [inputWebDocument](/constructor/inputWebDocument/) | Документ |
| [inputWebFileAudioAlbumThumbLocation](/constructor/inputWebFileAudioAlbumThumbLocation/) | Используется для загрузки обложки альбома для любого музыкального файла с помощью [upload.getWebFile](/method/upload.getWebFile/); подробнее см. [документацию по webfile »](/api/files/#downloading-webfiles). |
| [inputWebFileGeoPointLocation](/constructor/inputWebFileGeoPointLocation/) | Используется для скачивания сгенерированного сервером изображения с предпросмотром карты по [geoPoint](/constructor/geoPoint/); подробнее см. [документацию по веб-файлам »](/api/files/#downloading-webfiles). |
| [inputWebFileLocation](/constructor/inputWebFileLocation/) | Расположение удалённого файла HTTP(s) |
| [invoice](/constructor/invoice/) | Счёт |
| [jsonArray](/constructor/jsonArray/) | Массив JSON |
| [jsonBool](/constructor/jsonBool/) | Логическое значение JSON |
| [jsonNull](/constructor/jsonNull/) | Значение JSON null |
| [jsonNumber](/constructor/jsonNumber/) | Числовое значение JSON |
| [jsonObject](/constructor/jsonObject/) | Объектное значение JSON |
| [jsonObjectValue](/constructor/jsonObjectValue/) | Пара «ключ: значение» в формате JSON |
| [jsonString](/constructor/jsonString/) | Строка JSON |
| [keyboardButton](/constructor/keyboardButton/) | Кнопка клавиатуры бота |
| [keyboardButtonBuy](/constructor/keyboardButtonBuy/) | Кнопка для покупки товара |
| [keyboardButtonCallback](/constructor/keyboardButtonCallback/) | Callback-кнопка |
| [keyboardButtonCopy](/constructor/keyboardButtonCopy/) | Кнопка копирования в буфер обмена |
| [keyboardButtonGame](/constructor/keyboardButtonGame/) | Кнопка для запуска игры |
| [keyboardButtonRequestGeoLocation](/constructor/keyboardButtonRequestGeoLocation/) | Кнопка для запроса геолокации пользователя |
| [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) | Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) |
| [keyboardButtonRequestPhone](/constructor/keyboardButtonRequestPhone/) | Кнопка для запроса номера телефона пользователя |
| [keyboardButtonRequestPoll](/constructor/keyboardButtonRequestPoll/) | Кнопка для запроса опроса у пользователя |
| [keyboardButtonRow](/constructor/keyboardButtonRow/) | Ряд инлайн-клавиатуры |
| [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/) | Кнопка для открытия [mini app бота](/api/bots/webapps/) с помощью [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) без передачи сведений о пользователе веб-приложению. |
| [keyboardButtonStyle](/constructor/keyboardButtonStyle/) | Этот конструктор позволяет задать для кнопки собственный цвет фона и подпись из пользовательского эмодзи, [подробнее »](/api/bots/buttons/#button-styles). |
| [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/) | Кнопка для переключения пользователя в инлайн-режим |
| [keyboardButtonUrl](/constructor/keyboardButtonUrl/) | Кнопка со ссылкой |
| [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) | Кнопка для запроса авторизации пользователя по URL через [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots). Когда пользователь нажимает такую кнопку, следует вызвать [messages.requestUrlAuth](/method/messages.requestUrlAuth/), передав `button_id` и идентификатор сообщения-контейнера. Возвращённый объект [urlAuthResultRequest](/constructor/urlAuthResultRequest/) будет содержать более подробные сведения о запросе авторизации (`request_write_access`, если бот хочет отправлять пользователю сообщения, а также имя пользователя бота, который будет использован для авторизации). Наконец, пользователь может вызвать [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) и получить [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) с URL, который следует открыть вместо поля `url` этого конструктора, либо [urlAuthResultDefault](/constructor/urlAuthResultDefault/) — в этом случае необходимо открыть именно `url` этого конструктора. Если пользователь отклоняет запрос авторизации, но всё же хочет открыть ссылку, необходимо использовать `url` этого конструктора. |
| [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) | Кнопка, ведущая непосредственно в профиль пользователя |
| [keyboardButtonWebView](/constructor/keyboardButtonWebView/) | Кнопка для открытия [mini app бота](/api/bots/webapps/) с помощью [messages.requestWebView](/method/messages.requestWebView/) с передачей сведений о пользователе после его подтверждения. |
| [labeledPrice](/constructor/labeledPrice/) | Этот объект описывает часть стоимости товаров или услуг. |
| [langPackDifference](/constructor/langPackDifference/) | Изменения в языковом пакете приложения |
| [langPackLanguage](/constructor/langPackLanguage/) | Определяет пакет локализации |
| [langPackString](/constructor/langPackString/) | Переведённая строка локализации |
| [langPackStringDeleted](/constructor/langPackStringDeleted/) | Удалённая строка локализации |
| [langPackStringPluralized](/constructor/langPackStringPluralized/) | Строка языкового пакета, имеющая разные формы в зависимости от количества упоминаемого в ней объекта. Подробнее см. [https://www.unicode.org/cldr/charts/latest/supplemental/language\_plural\_rules.html](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html) |
| [maskCoords](/constructor/maskCoords/) | Место на фотографии, куда следует поместить маску при [прикреплении стикеров к медиафайлам »](/api/stickers/#attached-stickers) |
| [mediaAreaChannelPost](/constructor/mediaAreaChannelPost/) | Представляет пост канала. |
| [mediaAreaCoordinates](/constructor/mediaAreaCoordinates/) | Координаты и размер кликабельной прямоугольной области поверх истории. |
| [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/) | Представляет геометку, прикреплённую к [истории](/api/stories/). |
| [mediaAreaStarGift](/constructor/mediaAreaStarGift/) | Представляет [коллекционный подарок »](/api/gifts/#collectible-gifts). |
| [mediaAreaSuggestedReaction](/constructor/mediaAreaSuggestedReaction/) | Представляет пузырёк реакции. |
| [mediaAreaUrl](/constructor/mediaAreaUrl/) | Представляет [медиазону со ссылкой](/api/stories/#urls). |
| [mediaAreaVenue](/constructor/mediaAreaVenue/) | Представляет метку места, прикреплённую к [истории](/api/stories/), с дополнительными сведениями о заведении. |
| [mediaAreaWeather](/constructor/mediaAreaWeather/) | Представляет [виджет погоды »](/api/stories/#weather). |
| [message](/constructor/message/) | Сообщение |
| [messageActionBoostApply](/constructor/messageActionBoostApply/) | К каналу или супергруппе были применены [бусты »](/api/boost/). |
| [messageActionBotAllowed](/constructor/messageActionBotAllowed/) | Мы разрешили боту отправлять нам личные сообщения. |
| [messageActionChangeCreator](/constructor/messageActionChangeCreator/) | Сервисное сообщение: отправляется в супергруппу, когда [передача прав владения завершается после ухода прежнего владельца из группы »](/api/channel/#leaving-groups-channels) (через 7 дней после ухода прежнего владельца, если он не вернулся), и означает, что права владения переданы новому владельцу. |
| [messageActionChannelCreate](/constructor/messageActionChannelCreate/) | Канал был создан |
| [messageActionChannelMigrateFrom](/constructor/messageActionChannelMigrateFrom/) | Указывает, что канал был [перенесён](/api/channel/) из указанного чата |
| [messageActionChatAddUser](/constructor/messageActionChatAddUser/) | Новый участник в группе |
| [messageActionChatCreate](/constructor/messageActionChatCreate/) | Группа создана |
| [messageActionChatDeletePhoto](/constructor/messageActionChatDeletePhoto/) | Фотография профиля группы удалена. |
| [messageActionChatDeleteUser](/constructor/messageActionChatDeleteUser/) | Пользователь покинул группу. |
| [messageActionChatEditPhoto](/constructor/messageActionChatEditPhoto/) | Профиль группы изменён |
| [messageActionChatEditTitle](/constructor/messageActionChatEditTitle/) | Название группы изменено. |
| [messageActionChatJoinedByLink](/constructor/messageActionChatJoinedByLink/) | Пользователь вступил в чат по пригласительной ссылке |
| [messageActionChatJoinedByRequest](/constructor/messageActionChatJoinedByRequest/) | Администратор принял пользователя в группу |
| [messageActionChatMigrateTo](/constructor/messageActionChatMigrateTo/) | Указывает, что чат был [перенесён](/api/channel/) в указанную супергруппу |
| [messageActionConferenceCall](/constructor/messageActionConferenceCall/) | Представляет [конференц-звонок »](/api/group-calls/#conference-calls) либо приглашение на него, если не установлен ни флаг `missed`, ни флаг `active`. |
| [messageActionContactSignUp](/constructor/messageActionContactSignUp/) | Контакт только что зарегистрировался в Telegram |
| [messageActionCustomAction](/constructor/messageActionCustomAction/) | Пользовательское действие (скорее всего, не поддерживается текущим слоем, может потребоваться обновление) |
| [messageActionEmpty](/constructor/messageActionEmpty/) | Пустой конструктор. |
| [messageActionGameScore](/constructor/messageActionGameScore/) | Кто-то набрал очки в игре |
| [messageActionGeoProximityReached](/constructor/messageActionGeoProximityReached/) | Участник чата оказался рядом с другим пользователем |
| [messageActionGiftCode](/constructor/messageActionGiftCode/) | Содержит [ссылку на подарочный код Telegram Premium](/api/links/#premium-giftcode-links). |
| [messageActionGiftPremium](/constructor/messageActionGiftPremium/) | Информация о подписке Telegram Premium, полученной в подарок |
| [messageActionGiftStars](/constructor/messageActionGiftStars/) | Вы подарили или вам подарили некоторое количество [Telegram Stars](/api/stars/). |
| [messageActionGiftTon](/constructor/messageActionGiftTon/) | Вам подарили некоторое количество Grams. |
| [messageActionGiveawayLaunch](/constructor/messageActionGiveawayLaunch/) | [Розыгрыш](/api/giveaways/) начат. |
| [messageActionGiveawayResults](/constructor/messageActionGiveawayResults/) | [Розыгрыш](/api/giveaways/) завершён. |
| [messageActionGroupCall](/constructor/messageActionGroupCall/) | [Видеочат или трансляция](/api/group-calls/#video-chats-livestreams) были начаты или завершены. |
| [messageActionGroupCallScheduled](/constructor/messageActionGroupCallScheduled/) | [Видеочат или трансляция](/api/group-calls/#video-chats-livestreams) были запланированы. |
| [messageActionHistoryClear](/constructor/messageActionHistoryClear/) | История переписки была очищена |
| [messageActionInviteToGroupCall](/constructor/messageActionInviteToGroupCall/) | Группа пользователей была приглашена в [видеочат или трансляцию »](/api/group-calls/#video-chats-livestreams). |
| [messageActionManagedBotCreated](/constructor/messageActionManagedBotCreated/) | Сервисное сообщение, отправляемое пользователем боту-менеджеру, когда через него создаётся новый [управляемый бот »](/api/bots/managed-bots/) вызовом [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) с [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/); подробнее см. [здесь »](/api/bots/buttons/#requesting-a-managed-bot). |
| [messageActionNewCreatorPending](/constructor/messageActionNewCreatorPending/) | Сервисное сообщение: отправляется в супергруппу, когда [создатель группы или канала покидает группу »](/api/channel/#leaving-groups-channels), и означает, что передача прав владения ожидает завершения. Пользователь `new_creator_id` станет новым владельцем через 7 дней, если прежний владелец не вернётся. |
| [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) | Отправляется только в личных чатах, если собеседник попросил отключить [защиту контента »](/api/content-protection/#for-users). |
| [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/) | Отправляется только в личных чатах при включении или отключении [защиты контента »](/api/content-protection/#for-users). |
| [messageActionPaidMessagesPrice](/constructor/messageActionPaidMessagesPrice/) | Цена [платных сообщений »](/api/paid-messages/) в этом чате была изменена. |
| [messageActionPaidMessagesRefunded](/constructor/messageActionPaidMessagesRefunded/) | Отправляется от пира A пиру B и означает, что A вернул все [stars](/api/stars/), которые B ранее заплатил за отправку сообщений пиру A; подробнее о платных сообщениях см. [здесь »](/api/paid-messages/). |
| [messageActionPaymentRefunded](/constructor/messageActionPaymentRefunded/) | Описывает возврат платежа (сервисное сообщение, получаемое и пользователями, и ботами). |
| [messageActionPaymentSent](/constructor/messageActionPaymentSent/) | Платёж отправлен |
| [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/) | Пользователь только что отправил платёж мне (боту) |
| [messageActionPhoneCall](/constructor/messageActionPhoneCall/) | Телефонный звонок |
| [messageActionPinMessage](/constructor/messageActionPinMessage/) | Сообщение было закреплено |
| [messageActionPollAppendAnswer](/constructor/messageActionPollAppendAnswer/) | В [опрос с открытыми ответами »](/api/poll/#open-answer-polls) был добавлен новый вариант ответа |
| [messageActionPollDeleteAnswer](/constructor/messageActionPollDeleteAnswer/) | Вариант ответа был удалён из [опроса с открытым ответом »](/api/poll/#open-answer-polls) |
| [messageActionPrizeStars](/constructor/messageActionPrizeStars/) | Вы выиграли некоторое количество [Telegram Stars](/api/stars/) в [розыгрыше Telegram Star »](/api/giveaways/#star-giveaways). |
| [messageActionRequestedPeer](/constructor/messageActionRequestedPeer/) | Содержит информацию об одном или нескольких пирах, которыми мы (пользователь) поделились с ботом после нажатия кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) (сервисное сообщение, отправленное пользователем). |
| [messageActionRequestedPeerSentMe](/constructor/messageActionRequestedPeerSentMe/) | Содержит информацию об одном или нескольких пирах, которыми пользователь поделился с нами (с ботом) после нажатия кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) (сервисное сообщение, полученное ботом). |
| [messageActionScreenshotTaken](/constructor/messageActionScreenshotTaken/) | Сделан снимок экрана чата |
| [messageActionSecureValuesSent](/constructor/messageActionSecureValuesSent/) | Запрос значений [telegram passport](https://core.telegram.org/passport) был отправлен |
| [messageActionSecureValuesSentMe](/constructor/messageActionSecureValuesSentMe/) | Получены защищённые значения [telegram passport](https://core.telegram.org/passport) |
| [messageActionSetChatTheme](/constructor/messageActionSetChatTheme/) | Тема оформления чата была изменена |
| [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/) | [Обои »](/api/wallpapers/) текущего чата были изменены. |
| [messageActionSetMessagesTTL](/constructor/messageActionSetMessagesTTL/) | Время жизни сообщений в этом чате было изменено. |
| [messageActionStarGift](/constructor/messageActionStarGift/) | Вы получили [подарок, подробнее см. здесь »](/api/gifts/). |
| [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/) | Содержит предложение о покупке [коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полный порядок действий см. [здесь »](/api/gifts/#collectible-gift-purchase-offers). |
| [messageActionStarGiftPurchaseOfferDeclined](/constructor/messageActionStarGiftPurchaseOfferDeclined/) | [Предложение о покупке коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers) было отклонено либо срок его действия истёк; весь порядок действий описан [здесь »](/api/gifts/#collectible-gift-purchase-offers). |
| [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/) | [Подарок »](/api/gifts/) был улучшен до [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [messageActionSuggestBirthday](/constructor/messageActionSuggestBirthday/) | С помощью [users.suggestBirthday](/method/users.suggestBirthday/) была предложена новая дата рождения; подробнее о датах рождения в API см. [здесь »](/api/profile/#birthday). |
| [messageActionSuggestedPostApproval](/constructor/messageActionSuggestedPostApproval/) | [Предлагаемый пост »](/api/suggested-posts/) был одобрен или отклонён. |
| [messageActionSuggestedPostRefund](/constructor/messageActionSuggestedPostRefund/) | [Предлагаемый пост »](/api/suggested-posts/) был принят и опубликован или запланирован, но либо канал удалил опубликованный/запланированный пост до того, как прошло [stars\_suggested\_post\_age\_min](/api/config/#stars-suggested-post-age-min) секунд, либо пользователь вернул платёж за звёзды, которыми был оплачен предлагаемый пост. |
| [messageActionSuggestedPostSuccess](/constructor/messageActionSuggestedPostSuccess/) | [Предлагаемый пост »](/api/suggested-posts/) был успешно опубликован, и оплата за него успешно получена. |
| [messageActionSuggestProfilePhoto](/constructor/messageActionSuggestProfilePhoto/) | Новая фотография профиля предложена с помощью [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/). |
| [messageActionTodoAppendTasks](/constructor/messageActionTodoAppendTasks/) | Пункты были добавлены в [список задач »](/api/todo/). |
| [messageActionTodoCompletions](/constructor/messageActionTodoCompletions/) | Пункты были отмечены как выполненные или невыполненные в [списке задач »](/api/todo/). |
| [messageActionTopicCreate](/constructor/messageActionTopicCreate/) | [Тема форума](/api/forum/#forum-topics) была создана. |
| [messageActionTopicEdit](/constructor/messageActionTopicEdit/) | Сведения о [теме форума](/api/forum/#forum-topics) были изменены. |
| [messageActionWebViewDataSent](/constructor/messageActionWebViewDataSent/) | Данные из открытого [мини-приложения бота в клавиатуре ответов](/api/bots/webapps/) были переданы боту, которому оно принадлежит (сервисное сообщение на стороне пользователя). |
| [messageActionWebViewDataSentMe](/constructor/messageActionWebViewDataSentMe/) | Данные из открытого [мини-приложения бота в клавиатуре ответов](/api/bots/webapps/) были переданы боту, которому оно принадлежит (сервисное сообщение на стороне бота). |
| [messageEmpty](/constructor/messageEmpty/) | Пустой конструктор, несуществующее сообщение. |
| [messageEntityBankCard](/constructor/messageEntityBankCard/) | Обозначает номер банковской карты |
| [messageEntityBlockquote](/constructor/messageEntityBlockquote/) | Сущность оформления, представляющая цитату. |
| [messageEntityBold](/constructor/messageEntityBold/) | Сущность оформления, представляющая **полужирный текст**. |
| [messageEntityBotCommand](/constructor/messageEntityBotCommand/) | Сущность оформления, представляющая /команду бота |
| [messageEntityCashtag](/constructor/messageEntityCashtag/) | Сущность оформления, представляющая **$cashtag**. |
| [messageEntityCode](/constructor/messageEntityCode/) | Сущность оформления, представляющая `codeblock`. |
| [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/) | Представляет пользовательский эмодзи. |
| [messageEntityDiffDelete](/constructor/messageEntityDiffDelete/) | Представляет удаление в diff: отобразите его, просто подчеркнув указанный фрагмент и окрасив его в красный цвет; подробнее об отображении сущностей diff см. [здесь »](/api/entities/#diff-entities). |
| [messageEntityDiffInsert](/constructor/messageEntityDiffInsert/) | Представляет добавление в diff: отобразите его, просто подчеркнув указанный фрагмент и окрасив его в зелёный цвет; подробнее об отображении сущностей diff см. [здесь »](/api/entities/#diff-entities). |
| [messageEntityDiffReplace](/constructor/messageEntityDiffReplace/) | Представляет замену в diff, отображайте её следующим образом: |
| [messageEntityEmail](/constructor/messageEntityEmail/) | Сущность оформления, представляющая адрес [email@example.com](mailto:email@example.com). |
| [messageEntityFormattedDate](/constructor/messageEntityFormattedDate/) | Представляет конкретный момент времени, отображаемый так, как указано [здесь »](/api/entities/#date-entities) |
| [messageEntityHashtag](/constructor/messageEntityHashtag/) | Сущность оформления **#хештег** |
| [messageEntityItalic](/constructor/messageEntityItalic/) | Сущность оформления, представляющая _курсивный текст_. |
| [messageEntityMention](/constructor/messageEntityMention/) | Сущность оформления, [упоминающая](/api/mentions/) пользователя по `@username`; для упоминания пользователей по их идентификатору можно также использовать [messageEntityMentionName](/constructor/messageEntityMentionName/). |
| [messageEntityMentionName](/constructor/messageEntityMentionName/) | Сущность оформления, представляющая [упоминание пользователя](/api/mentions/): для _создания_ упоминания используйте [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/). |
| [messageEntityPhone](/constructor/messageEntityPhone/) | Сущность оформления, представляющая номер телефона. |
| [messageEntityPre](/constructor/messageEntityPre/) | Сущность оформления, представляющая форматированный `codeblock` с возможностью указать язык программирования для этого блока кода. |
| [messageEntitySpoiler](/constructor/messageEntitySpoiler/) | Сущность оформления, представляющая спойлер |
| [messageEntityStrike](/constructor/messageEntityStrike/) | Сущность оформления, представляющая зачёркнутый текст. |
| [messageEntityTextUrl](/constructor/messageEntityTextUrl/) | Сущность оформления, представляющая [текстовую ссылку](https://google.com): для ссылок прямо в тексте, вроде [https://google.com](https://google.com), используйте [messageEntityUrl](/constructor/messageEntityUrl/). |
| [messageEntityUnderline](/constructor/messageEntityUnderline/) | Сущность оформления, представляющая подчёркнутый текст. |
| [messageEntityUnknown](/constructor/messageEntityUnknown/) | Неизвестная сущность оформления |
| [messageEntityUrl](/constructor/messageEntityUrl/) | Сущность оформления, представляющая ссылку в тексте: [https://google.com](https://google.com); для [текстовых ссылок](https://google.com) используйте [messageEntityTextUrl](/constructor/messageEntityTextUrl/). |
| [messageExtendedMedia](/constructor/messageExtendedMedia/) | Уже оплаченное платное медиа; подробнее [см. здесь »](/api/paid-media/). |
| [messageExtendedMediaPreview](/constructor/messageExtendedMediaPreview/) | Предпросмотр платных медиа, которые ещё не куплены, подробнее [см. здесь »](/api/paid-media/). |
| [messageFwdHeader](/constructor/messageFwdHeader/) | Информация о пересланном сообщении |
| [messageMediaContact](/constructor/messageMediaContact/) | Вложенный контакт. |
| [messageMediaDice](/constructor/messageMediaDice/) | [Анимированный стикер с кубиком](/api/dice/) |
| [messageMediaDocument](/constructor/messageMediaDocument/) | Документ (видео, аудио, голосовое сообщение, стикер, любой тип медиа, кроме фотографии) |
| [messageMediaEmpty](/constructor/messageMediaEmpty/) | Пустой конструктор. |
| [messageMediaGame](/constructor/messageMediaGame/) | Игра Telegram |
| [messageMediaGeo](/constructor/messageMediaGeo/) | Вложенная карта. |
| [messageMediaGeoLive](/constructor/messageMediaGeoLive/) | Обозначает [геопозицию в реальном времени](/api/live-location/) |
| [messageMediaGiveaway](/constructor/messageMediaGiveaway/) | Содержит информацию о [розыгрыше, подробнее см. здесь »](/api/giveaways/). |
| [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/) | [Розыгрыш](/api/giveaways/) с публичными победителями завершился; этот конструктор содержит сведения о победителях. |
| [messageMediaInvoice](/constructor/messageMediaInvoice/) | Счёт |
| [messageMediaPaidMedia](/constructor/messageMediaPaidMedia/) | [Платное медиа, подробнее см. здесь »](/api/paid-media/). |
| [messageMediaPhoto](/constructor/messageMediaPhoto/) | Вложенная фотография. |
| [messageMediaPoll](/constructor/messageMediaPoll/) | Опрос |
| [messageMediaStory](/constructor/messageMediaStory/) | Представляет пересланную [историю](/api/stories/) или упоминание истории. |
| [messageMediaToDo](/constructor/messageMediaToDo/) | Представляет [список задач »](/api/todo/). |
| [messageMediaUnsupported](/constructor/messageMediaUnsupported/) | Текущая версия клиента не поддерживает этот тип медиафайлов. |
| [messageMediaVenue](/constructor/messageMediaVenue/) | Заведение |
| [messageMediaVideoStream](/constructor/messageMediaVideoStream/) | Определяет активный групповой звонок, связанный с [прямой историей »](/api/group-calls/#live-stories). |
| [messageMediaWebPage](/constructor/messageMediaWebPage/) | Предпросмотр веб-страницы |
| [messagePeerReaction](/constructor/messagePeerReaction/) | Как определённый пир отреагировал на сообщение |
| [messagePeerVote](/constructor/messagePeerVote/) | Как пир проголосовал в опросе |
| [messagePeerVoteInputOption](/constructor/messagePeerVoteInputOption/) | Как пир проголосовал в опросе (сокращённый конструктор, возвращается, если параметр `option` был передан в [messages.getPollVotes](/method/messages.getPollVotes/)) |
| [messagePeerVoteMultiple](/constructor/messagePeerVoteMultiple/) | Как пир проголосовал в опросе с несколькими вариантами ответа |
| [messageRange](/constructor/messageRange/) | Указывает диапазон сообщений чата |
| [messageReactions](/constructor/messageReactions/) | [Реакции на сообщения »](/api/reactions/) |
| [messageReactor](/constructor/messageReactor/) | Информация о пользователе в [таблице лидеров платных реакций за Telegram Stars](/api/reactions/#paid-reactions) для сообщения. |
| [messageReplies](/constructor/messageReplies/) | Информация о [разделе комментариев к публикации канала, простой ветке сообщений, теме форума или теме в личных сообщениях](/api/threads/) (все эти возможности в конечном счёте основаны на ветках сообщений). |
| [messageReplyHeader](/constructor/messageReplyHeader/) | Сведения об ответах на сообщение и о [ветке обсуждения](/api/threads/) |
| [messageReplyStoryHeader](/constructor/messageReplyStoryHeader/) | Представляет ответ на [историю](/api/stories/) |
| [messageReportOption](/constructor/messageReportOption/) | Пункт меню жалобы |
| [messages.affectedFoundMessages](/constructor/messages.affectedFoundMessages/) | Найденные сообщения, затронутые изменениями |
| [messages.affectedHistory](/constructor/messages.affectedHistory/) | Затронутая часть истории переписки с пользователем или в чате. |
| [messages.affectedMessages](/constructor/messages.affectedMessages/) | События, затронутые операцией |
| [messages.allStickers](/constructor/messages.allStickers/) | Информация обо всех установленных стикерах |
| [messages.allStickersNotModified](/constructor/messages.allStickersNotModified/) | Информация обо всех установленных стикерах не изменилась |
| [messages.archivedStickers](/constructor/messages.archivedStickers/) | Архивированные наборы стикеров |
| [messages.availableEffects](/constructor/messages.availableEffects/) | Полный список доступных [анимированных эффектов для сообщений »](/api/effects/). |
| [messages.availableEffectsNotModified](/constructor/messages.availableEffectsNotModified/) | Полный список доступных [анимированных эффектов для сообщений »](/api/effects/) не изменился. |
| [messages.availableReactions](/constructor/messages.availableReactions/) | Анимации и метаданные, связанные с [реакциями на сообщения »](/api/reactions/) |
| [messages.availableReactionsNotModified](/constructor/messages.availableReactionsNotModified/) | Новых реакций нет |
| [messages.botApp](/constructor/messages.botApp/) | Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps) |
| [messages.botCallbackAnswer](/constructor/messages.botCallbackAnswer/) | Ответ на callback-запрос, отправленный ботом в ответ на нажатие кнопки |
| [messages.botPreparedInlineMessage](/constructor/messages.botPreparedInlineMessage/) | Представляет [заранее подготовленное инлайн-сообщение, сохранённое ботом для отправки пользователю через веб-приложение »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |
| [messages.botResults](/constructor/messages.botResults/) | Результат запроса к инлайн-боту |
| [messages.channelMessages](/constructor/messages.channelMessages/) | Сообщения канала |
| [messages.chatAdminsWithInvites](/constructor/messages.chatAdminsWithInvites/) | Сведения о приглашениях в чат, созданных администраторами. |
| [messages.chatFull](/constructor/messages.chatFull/) | Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups), [гигагруппе](/api/channel/#gigagroups) или [обычной группе](/api/channel/#basic-groups). |
| [messages.chatInviteImporters](/constructor/messages.chatInviteImporters/) | Информация о пользователях, вступивших в чат по определённой пригласительной ссылке |
| [messages.chats](/constructor/messages.chats/) | Список чатов со вспомогательными данными. |
| [messages.chatsSlice](/constructor/messages.chatsSlice/) | Неполный список чатов; остальные придётся получить с помощью [постраничной выборки](/api/offsets/) |
| [messages.checkedHistoryImportPeer](/constructor/messages.checkedHistoryImportPeer/) | Содержит текст подтверждения, который следует показать пользователю при [импорте истории переписки, подробнее см. здесь »](/api/import/). |
| [messages.composedMessageWithAI](/constructor/messages.composedMessageWithAI/) | Представляет сообщение, изменённое ИИ. |
| [messages.dhConfig](/constructor/messages.dhConfig/) | Новый набор параметров настройки. |
| [messages.dhConfigNotModified](/constructor/messages.dhConfigNotModified/) | Параметры конфигурации не изменились. |
| [messages.dialogFilters](/constructor/messages.dialogFilters/) | Сведения о [папке и тегах папок](/api/folders/) |
| [messages.dialogs](/constructor/messages.dialogs/) | Полный список чатов с сообщениями и вспомогательными данными. |
| [messages.dialogsNotModified](/constructor/messages.dialogsNotModified/) | Диалоги не изменились |
| [messages.dialogsSlice](/constructor/messages.dialogsSlice/) | Неполный список диалогов с сообщениями и вспомогательными данными. |
| [messages.discussionMessage](/constructor/messages.discussionMessage/) | Информация о [ветке сообщений](/api/threads/) |
| [messages.emojiGameDiceInfo](/constructor/messages.emojiGameDiceInfo/) | Информация об игре в кости. |
| [messages.emojiGameOutcome](/constructor/messages.emojiGameOutcome/) | Результат игры в кости. |
| [messages.emojiGameUnavailable](/constructor/messages.emojiGameUnavailable/) | Информация об игре в кости. |
| [messages.emojiGroups](/constructor/messages.emojiGroups/) | Представляет список [категорий эмодзи](/api/emoji-categories/). |
| [messages.emojiGroupsNotModified](/constructor/messages.emojiGroupsNotModified/) | Список [категорий эмодзи](/api/emoji-categories/) не изменился. |
| [messages.exportedChatInvite](/constructor/messages.exportedChatInvite/) | Информация о приглашении в чат |
| [messages.exportedChatInviteReplaced](/constructor/messages.exportedChatInviteReplaced/) | Указанная пригласительная ссылка на чат была заменена другой |
| [messages.exportedChatInvites](/constructor/messages.exportedChatInvites/) | Информация о приглашениях в чат, экспортированных определённым администратором. |
| [messages.favedStickers](/constructor/messages.favedStickers/) | Избранные стикеры |
| [messages.favedStickersNotModified](/constructor/messages.favedStickersNotModified/) | Новых избранных стикеров не найдено |
| [messages.featuredStickers](/constructor/messages.featuredStickers/) | Рекомендуемые наборы стикеров |
| [messages.featuredStickersNotModified](/constructor/messages.featuredStickersNotModified/) | Рекомендуемые стикеры не изменились |
| [messages.forumTopics](/constructor/messages.forumTopics/) | Содержит информацию о нескольких [темах форума](/api/forum/#forum-topics) |
| [messages.foundStickers](/constructor/messages.foundStickers/) | Найденные стикеры |
| [messages.foundStickerSets](/constructor/messages.foundStickerSets/) | Найденные наборы стикеров |
| [messages.foundStickerSetsNotModified](/constructor/messages.foundStickerSetsNotModified/) | Больше результатов не найдено |
| [messages.foundStickersNotModified](/constructor/messages.foundStickersNotModified/) | По указанному запросу новых стикеров не найдено |
| [messages.highScores](/constructor/messages.highScores/) | Рекорды в игре |
| [messages.historyImport](/constructor/messages.historyImport/) | Идентификатор конкретного [сеанса импорта чата, подробнее см. здесь »](/api/import/). |
| [messages.historyImportParsed](/constructor/messages.historyImportParsed/) | Содержит информацию о файле экспорта чата, [выгруженном из стороннего мессенджера; подробнее см. здесь](/api/import/). |
| [messages.inactiveChats](/constructor/messages.inactiveChats/) | Список неактивных чатов |
| [messages.invitedUsers](/constructor/messages.invitedUsers/) | Содержит информацию об успешно и неуспешно [приглашённых »](/api/invites/#direct-invites) пользователях. |
| [messages.messageEditData](/constructor/messages.messageEditData/) | Данные для редактирования сообщения с медиа |
| [messages.messageReactionsList](/constructor/messages.messageReactionsList/) | Список пиров, отреагировавших на конкретное сообщение |
| [messages.messages](/constructor/messages.messages/) | Полный список сообщений со вспомогательными данными. |
| [messages.messagesNotModified](/constructor/messages.messagesNotModified/) | Новых сообщений, соответствующих запросу, не найдено |
| [messages.messagesSlice](/constructor/messages.messagesSlice/) | Неполный список сообщений и вспомогательных данных. |
| [messages.messageViews](/constructor/messages.messageViews/) | Счётчик просмотров и пересылок + сведения об ответах |
| [messages.myStickers](/constructor/messages.myStickers/) | Список [наборов стикеров, принадлежащих текущему аккаунту »](/api/stickers/). |
| [messages.peerDialogs](/constructor/messages.peerDialogs/) | Сведения о диалогах нескольких пиров |
| [messages.peerSettings](/constructor/messages.peerSettings/) | Настройки пира |
| [messages.preparedInlineMessage](/constructor/messages.preparedInlineMessage/) | Представляет [заранее подготовленное инлайн-сообщение, полученное через mini app бота, которое можно отправить в некоторые чаты »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) |
| [messages.quickReplies](/constructor/messages.quickReplies/) | Информация о [шаблонах быстрых ответов »](/api/business/#quick-reply-shortcuts). |
| [messages.quickRepliesNotModified](/constructor/messages.quickRepliesNotModified/) | Информация о [шаблонах быстрых ответов »](/api/business/#quick-reply-shortcuts) не изменилась. |
| [messages.reactions](/constructor/messages.reactions/) | Список [реакций на сообщения](/api/reactions/) |
| [messages.reactionsNotModified](/constructor/messages.reactionsNotModified/) | Серверный список [реакций на сообщения](/api/reactions/) не изменился |
| [messages.recentStickers](/constructor/messages.recentStickers/) | Недавно использованные стикеры |
| [messages.recentStickersNotModified](/constructor/messages.recentStickersNotModified/) | Новых недавних стикеров не найдено |
| [messages.savedDialogs](/constructor/messages.savedDialogs/) | Представляет несколько [диалогов из сохранённых сообщений »](/api/saved-messages/). |
| [messages.savedDialogsNotModified](/constructor/messages.savedDialogsNotModified/) | Сохранённые диалоги не изменились |
| [messages.savedDialogsSlice](/constructor/messages.savedDialogsSlice/) | Неполный список [диалогов из сохранённых сообщений »](/api/saved-messages/) с сообщениями и вспомогательными данными. |
| [messages.savedGifs](/constructor/messages.savedGifs/) | Сохранённые GIF |
| [messages.savedGifsNotModified](/constructor/messages.savedGifsNotModified/) | Новых сохранённых GIF не найдено |
| [messages.savedReactionTags](/constructor/messages.savedReactionTags/) | Список имён [тегов-реакций »](/api/saved-messages/#tags), назначенных пользователем. |
| [messages.savedReactionTagsNotModified](/constructor/messages.savedReactionTagsNotModified/) | Список имён [тегов-реакций »](/api/saved-messages/#tags), назначенных пользователем, не изменился. |
| [messages.searchCounter](/constructor/messages.searchCounter/) | Указывает, сколько результатов было бы найдено вызовом [messages.search](/method/messages.search/) с теми же параметрами |
| [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) | Информация о найденных сообщениях, отправленных в определённый день |
| [messages.searchResultsPositions](/constructor/messages.searchResultsPositions/) | Информация о разреженных позициях сообщений |
| [messages.sentEncryptedFile](/constructor/messages.sentEncryptedFile/) | Сообщение с вложенным файлом, отправленное в защищённый чат |
| [messages.sentEncryptedMessage](/constructor/messages.sentEncryptedMessage/) | Сообщение без вложенных файлов, отправленное в зашифрованный файл. |
| [messages.sponsoredMessages](/constructor/messages.sponsoredMessages/) | Набор рекламных сообщений, связанных с каналом |
| [messages.sponsoredMessagesEmpty](/constructor/messages.sponsoredMessagesEmpty/) | Рекламные сообщения недоступны. |
| [messages.stickers](/constructor/messages.stickers/) | Найденные стикеры |
| [messages.stickerSet](/constructor/messages.stickerSet/) | Набор стикеров и стикеры внутри него |
| [messages.stickerSetInstallResultArchive](/constructor/messages.stickerSetInstallResultArchive/) | Набор стикеров установлен, но, поскольку наборов слишком много, часть из них была архивирована |
| [messages.stickerSetInstallResultSuccess](/constructor/messages.stickerSetInstallResultSuccess/) | Набор стикеров успешно установлен |
| [messages.stickerSetNotModified](/constructor/messages.stickerSetNotModified/) | Набор стикеров не изменился |
| [messages.stickersNotModified](/constructor/messages.stickersNotModified/) | По данному запросу новых стикеров не найдено |
| [messages.transcribedAudio](/constructor/messages.transcribedAudio/) | [Расшифрованный текст голосового сообщения »](/api/transcribe/) |
| [messages.translateResult](/constructor/messages.translateResult/) | Переведённый текст с [сущностями оформления](/api/entities/) |
| [messages.votesList](/constructor/messages.votesList/) | Как пользователи проголосовали в опросе |
| [messages.webPage](/constructor/messages.webPage/) | Представляет веб-страницу Instant View. |
| [messages.webPagePreview](/constructor/messages.webPagePreview/) | Представляет предпросмотр веб-страницы. |
| [messageService](/constructor/messageService/) | Обозначает сервисное сообщение |
| [messageViews](/constructor/messageViews/) | Счётчик просмотров и пересылок + сведения об ответах на конкретное сообщение |
| [missingInvitee](/constructor/missingInvitee/) | Информация о том, почему определённого пользователя не удалось [пригласить »](/api/invites/#direct-invites). |
| [monoForumDialog](/constructor/monoForumDialog/) | Представляет [тему монофорума »](/api/monoforum/). |
| [myBoost](/constructor/myBoost/) | Содержит информацию об одном [слоте буста »](/api/boost/). |
| [nearestDc](/constructor/nearestDc/) | Ближайший дата-центр, определённый по geo-ip. |
| [notificationSoundDefault](/constructor/notificationSoundDefault/) | Указывает, что следует использовать звук уведомления по умолчанию |
| [notificationSoundLocal](/constructor/notificationSoundLocal/) | Указывает, что следует использовать определённый локальный звук уведомления |
| [notificationSoundNone](/constructor/notificationSoundNone/) | Звук уведомления использовать не следует |
| [notificationSoundRingtone](/constructor/notificationSoundRingtone/) | Следует использовать конкретный ранее загруженный звук уведомления |
| [notifyBroadcasts](/constructor/notifyBroadcasts/) | Настройки уведомлений канала |
| [notifyChats](/constructor/notifyChats/) | Уведомления, создаваемые всеми группами. |
| [notifyForumTopic](/constructor/notifyForumTopic/) | Уведомления, создаваемые [темой](/api/forum/#forum-topics) в [форуме](/api/forum/). |
| [notifyPeer](/constructor/notifyPeer/) | Уведомления, создаваемые определённым пользователем или группой. |
| [notifyUsers](/constructor/notifyUsers/) | Уведомления, создаваемые всеми пользователями. |
| [null](/constructor/null/) | Соответствует произвольному пустому объекту. |
| [outboxReadDate](/constructor/outboxReadDate/) | Точная дата прочтения личного сообщения, отправленного нами другому пользователю. |
| [page](/constructor/page/) | Страница [Instant view](https://instantview.telegram.org) |
| [pageBlockAnchor](/constructor/pageBlockAnchor/) | Ссылка на раздел внутри самой страницы (вида `<a href="#target">anchor</a>`) |
| [pageBlockAudio](/constructor/pageBlockAudio/) | Аудио |
| [pageBlockAuthorDate](/constructor/pageBlockAuthorDate/) | Автор и дата создания статьи |
| [pageBlockBlockquote](/constructor/pageBlockBlockquote/) | Цитата (эквивалент HTML-тега `<blockquote>`) |
| [pageBlockChannel](/constructor/pageBlockChannel/) | Ссылка на канал Telegram |
| [pageBlockCollage](/constructor/pageBlockCollage/) | Коллаж из медиа |
| [pageBlockCover](/constructor/pageBlockCover/) | Обложка страницы |
| [pageBlockDetails](/constructor/pageBlockDetails/) | Сворачиваемый блок подробностей |
| [pageBlockDivider](/constructor/pageBlockDivider/) | Пустой блок, разделяющий страницу |
| [pageBlockEmbed](/constructor/pageBlockEmbed/) | Встроенная веб-страница |
| [pageBlockEmbedPost](/constructor/pageBlockEmbedPost/) | Встроенный пост |
| [pageBlockFooter](/constructor/pageBlockFooter/) | Нижний колонтитул страницы |
| [pageBlockHeader](/constructor/pageBlockHeader/) | Верхний колонтитул страницы |
| [pageBlockKicker](/constructor/pageBlockKicker/) | Надзаголовок |
| [pageBlockList](/constructor/pageBlockList/) | Неупорядоченный список блоков IV |
| [pageBlockMap](/constructor/pageBlockMap/) | Карта |
| [pageBlockOrderedList](/constructor/pageBlockOrderedList/) | Упорядоченный список блоков IV |
| [pageBlockParagraph](/constructor/pageBlockParagraph/) | Абзац |
| [pageBlockPhoto](/constructor/pageBlockPhoto/) | Фотография |
| [pageBlockPreformatted](/constructor/pageBlockPreformatted/) | Форматированный текст (`<pre>`) |
| [pageBlockPullquote](/constructor/pageBlockPullquote/) | Врезка с цитатой |
| [pageBlockRelatedArticles](/constructor/pageBlockRelatedArticles/) | Связанные статьи |
| [pageBlockSlideshow](/constructor/pageBlockSlideshow/) | Слайд-шоу |
| [pageBlockSubheader](/constructor/pageBlockSubheader/) | Подзаголовок |
| [pageBlockSubtitle](/constructor/pageBlockSubtitle/) | Подзаголовок |
| [pageBlockTable](/constructor/pageBlockTable/) | Таблица |
| [pageBlockTitle](/constructor/pageBlockTitle/) | Название |
| [pageBlockUnsupported](/constructor/pageBlockUnsupported/) | Неподдерживаемый элемент IV |
| [pageBlockVideo](/constructor/pageBlockVideo/) | Видео |
| [pageCaption](/constructor/pageCaption/) | Подпись страницы |
| [pageListItemBlocks](/constructor/pageListItemBlocks/) | Элемент списка |
| [pageListItemText](/constructor/pageListItemText/) | Элемент списка |
| [pageListOrderedItemBlocks](/constructor/pageListOrderedItemBlocks/) | Упорядоченный список блоков [IV](https://instantview.telegram.org) |
| [pageListOrderedItemText](/constructor/pageListOrderedItemText/) | Упорядоченный список текстовых элементов |
| [pageRelatedArticle](/constructor/pageRelatedArticle/) | Связанная статья |
| [pageTableCell](/constructor/pageTableCell/) | Ячейка таблицы |
| [pageTableRow](/constructor/pageTableRow/) | Строка таблицы |
| [paidReactionPrivacyAnonymous](/constructor/paidReactionPrivacyAnonymous/) | Отправить платные реакции анонимно. |
| [paidReactionPrivacyDefault](/constructor/paidReactionPrivacyDefault/) | Используется настройка приватности реакций по умолчанию, заданная методом [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/). |
| [paidReactionPrivacyPeer](/constructor/paidReactionPrivacyPeer/) | Отправлять платные реакции от имени указанного пира, полученного с помощью [channels.getSendAs](/method/channels.getSendAs/) с установленным флагом `for_paid_reactions`. |
| [passkey](/constructor/passkey/) | Понятные человеку сведения о ключе доступа, привязанном к аккаунту; возвращаются при [создании ключа доступа »](/api/passkeys/#creating-a-passkey) или [получении списка ключей доступа »](/api/passkeys/#list-passkeys). |
| [passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow](/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/) | Этот алгоритм формирования ключа определяет, что должен использоваться [вход с двухфакторной аутентификацией по SRP](/api/srp/) |
| [passwordKdfAlgoUnknown](/constructor/passwordKdfAlgoUnknown/) | Неизвестная KDF (скорее всего, клиент устарел и не поддерживает указанный алгоритм KDF) |
| [paymentCharge](/constructor/paymentCharge/) | Идентификатор платежа |
| [paymentFormMethod](/constructor/paymentFormMethod/) | Представляет дополнительный способ оплаты |
| [paymentRequestedInfo](/constructor/paymentRequestedInfo/) | Сведения о заказе, указанные пользователем |
| [payments.bankCardData](/constructor/payments.bankCardData/) | Сведения о банковской карте, предоставленные банком (или банками) карты |
| [payments.checkCanSendGiftResultFail](/constructor/payments.checkCanSendGiftResultFail/) | Указанный подарок пока нельзя отправить по указанной причине. |
| [payments.checkCanSendGiftResultOk](/constructor/payments.checkCanSendGiftResultOk/) | Указанный подарок можно отправить. |
| [payments.checkedGiftCode](/constructor/payments.checkedGiftCode/) | Содержит информацию о [ссылке на подарочный код Telegram Premium](/api/links/#premium-giftcode-links). |
| [payments.connectedStarRefBots](/constructor/payments.connectedStarRefBots/) | Активные [партнёрства](/api/bots/referrals/#becoming-an-affiliate) |
| [payments.exportedInvoice](/constructor/payments.exportedInvoice/) | Экспортированная [глубокая ссылка на счёт](/api/links/#invoice-links) |
| [payments.giveawayInfo](/constructor/payments.giveawayInfo/) | Содержит информацию о текущем [розыгрыше](/api/giveaways/). |
| [payments.giveawayInfoResults](/constructor/payments.giveawayInfoResults/) | [Розыгрыш](/api/giveaways/) завершён. |
| [payments.paymentForm](/constructor/payments.paymentForm/) | Форма оплаты |
| [payments.paymentFormStarGift](/constructor/payments.paymentFormStarGift/) | Представляет форму оплаты [подарка, подробнее см. здесь »](/api/gifts/). |
| [payments.paymentFormStars](/constructor/payments.paymentFormStars/) | Представляет форму оплаты для платежей за [Telegram Stars, подробнее см. здесь »](/api/stars/). |
| [payments.paymentReceipt](/constructor/payments.paymentReceipt/) | Чек |
| [payments.paymentReceiptStars](/constructor/payments.paymentReceiptStars/) | Чек за [платёж, совершённый с помощью Telegram Stars](/api/stars/). |
| [payments.paymentResult](/constructor/payments.paymentResult/) | Результат оплаты |
| [payments.paymentVerificationNeeded](/constructor/payments.paymentVerificationNeeded/) | Платёж не прошёл, требуется дополнительная проверка |
| [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/) | Список подарков, выставленных на [перепродажу »](/api/gifts/#reselling-collectible-gifts). |
| [payments.savedInfo](/constructor/payments.savedInfo/) | Сохранённые на сервере сведения о заказе |
| [payments.savedStarGifts](/constructor/payments.savedStarGifts/) | Представляет список [подарков](/api/gifts/). |
| [payments.starGiftActiveAuctions](/constructor/payments.starGiftActiveAuctions/) | Описывает все текущие активные [аукционы подарков](/api/auctions/), **на которых пользователь сделал ставку**. |
| [payments.starGiftActiveAuctionsNotModified](/constructor/payments.starGiftActiveAuctionsNotModified/) | Список [аукционов подарков](/api/auctions/), которые сейчас активны и **в которых пользователь сделал ставку**, не изменился. |
| [payments.starGiftAuctionAcquiredGifts](/constructor/payments.starGiftAuctionAcquiredGifts/) | Описывает все подарки, которые текущий пользователь выиграл на [аукционе](/api/auctions/). |
| [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/) | Описывает [аукцион коллекционных подарков »](/api/auctions/). |
| [payments.starGiftCollections](/constructor/payments.starGiftCollections/) | Представляет список [коллекций подарков »](/api/gifts/#gift-collections). |
| [payments.starGiftCollectionsNotModified](/constructor/payments.starGiftCollectionsNotModified/) | Список [коллекций звёздных подарков »](/api/gifts/#gift-collections) не изменился. |
| [payments.starGifts](/constructor/payments.starGifts/) | Доступные [подарки »](/api/gifts/). |
| [payments.starGiftsNotModified](/constructor/payments.starGiftsNotModified/) | Список доступных [подарков »](/api/gifts/) не изменился. |
| [payments.starGiftUpgradeAttributes](/constructor/payments.starGiftUpgradeAttributes/) | Список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/) | Предпросмотр возможных атрибутов (выбираемых случайно), которые [подарок »](/api/gifts/) может получить после улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/gifts/#collectible-gifts). |
| [payments.starGiftWithdrawalUrl](/constructor/payments.starGiftWithdrawalUrl/) | URL, по которому можно импортировать экспортированный NFT на Fragment. |
| [payments.starsRevenueAdsAccountUrl](/constructor/payments.starsRevenueAdsAccountUrl/) | Содержит URL страницы, на которой пользователь сможет размещать рекламу для канала или бота, оплачивая её [Telegram Stars](/api/stars/#paying-for-ads). |
| [payments.starsRevenueStats](/constructor/payments.starsRevenueStats/) | [Статистика доходов в Stars; подробнее см. здесь »](/api/stars/). |
| [payments.starsRevenueWithdrawalUrl](/constructor/payments.starsRevenueWithdrawalUrl/) | Содержит URL, который следует использовать для [вывода дохода в Telegram Stars](/api/stars/#withdrawing-revenue). |
| [payments.starsStatus](/constructor/payments.starsStatus/) | Информация о текущих [подписках за Telegram Stars, балансе и истории транзакций »](/api/stars/#balance-and-transaction-history). |
| [payments.suggestedStarRefBots](/constructor/payments.suggestedStarRefBots/) | Список предлагаемых [Mini Apps](/api/bots/webapps/) с доступными [партнёрскими программами](/api/bots/referrals/) |
| [payments.uniqueStarGift](/constructor/payments.uniqueStarGift/) | Представляет [коллекционный подарок »](/api/gifts/#collectible-gifts). |
| [payments.uniqueStarGiftValueInfo](/constructor/payments.uniqueStarGiftValueInfo/) | Информация о стоимости [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [payments.validatedRequestedInfo](/constructor/payments.validatedRequestedInfo/) | Проверенные данные, предоставленные пользователем |
| [paymentSavedCredentialsCard](/constructor/paymentSavedCredentialsCard/) | Сохранённая банковская карта |
| [peerBlocked](/constructor/peerBlocked/) | Информация о заблокированном пире |
| [peerChannel](/constructor/peerChannel/) | Канал или супергруппа |
| [peerChat](/constructor/peerChat/) | Группа. |
| [peerColor](/constructor/peerColor/) | Представляет [цветовую палитру »](/api/colors/). |
| [peerColorCollectible](/constructor/peerColorCollectible/) | Представляет [цветовую палитру »](/api/colors/), связанную с [коллекционным подарком »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/colors/#collectible-gift-palettes). |
| [peerLocated](/constructor/peerLocated/) | Пир, находящийся поблизости по геолокации |
| [peerNotifySettings](/constructor/peerNotifySettings/) | Настройки уведомлений. |
| [peerSelfLocated](/constructor/peerSelfLocated/) | Текущий пир |
| [peerSettings](/constructor/peerSettings/) | Список действий, доступных при взаимодействии с этим пользователем; они показываются как предлагаемые действия в [панели действий чата »](/api/action-bar/), подробнее [см. здесь »](/api/action-bar/). |
| [peerStories](/constructor/peerStories/) | [Истории](/api/stories/), связанные с пиром |
| [peerUser](/constructor/peerUser/) | Собеседник |
| [pendingSuggestion](/constructor/pendingSuggestion/) | Представляет [пользовательскую ожидающую рекомендацию »](/api/config/#custom-suggestions). |
| [phone.exportedGroupCallInvite](/constructor/phone.exportedGroupCallInvite/) | Приглашение в групповой звонок или на трансляцию |
| [phone.groupCall](/constructor/phone.groupCall/) | Содержит информацию о групповом звонке и первую страницу списка участников, см. [получение информации о групповом звонке »](/api/group-calls/#getting-info-about-a-group-call). |
| [phone.groupCallStars](/constructor/phone.groupCallStars/) | Содержит общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. [платные пожертвования в прямых историях »](/api/group-calls/#paid-live-story-donations). |
| [phone.groupCallStreamChannels](/constructor/phone.groupCallStreamChannels/) | Содержит доступные каналы группового звонка в режиме RTMP, см. [воспроизведение RTMP-трансляции »](/api/group-calls/#rtmp-mode). |
| [phone.groupCallStreamRtmpUrl](/constructor/phone.groupCallStreamRtmpUrl/) | Содержит URL для публикации по RTMP и секретный ключ потока, см. [создание и публикация RTMP-трансляции »](/api/group-calls/#creating-and-publishing-an-rtmp-livestream). |
| [phone.groupParticipants](/constructor/phone.groupParticipants/) | Содержит страницу списка участников группового звонка, см. [получение сведений о групповом звонке »](/api/group-calls/#getting-info-about-a-group-call). |
| [phone.joinAsPeers](/constructor/phone.joinAsPeers/) | Содержит пиры, которые могут использоваться для подключения к видеочату или трансляции, см. [подключение от имени принадлежащих вам каналов »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels). |
| [phone.phoneCall](/constructor/phone.phoneCall/) | Телефонный звонок VoIP |
| [phoneCall](/constructor/phoneCall/) | Телефонный звонок, подробнее о полной последовательности действий см. [здесь »](/api/calls/). |
| [phoneCallAccepted](/constructor/phoneCallAccepted/) | Принятый звонок; подробнее о полном процессе см. [здесь »](/api/calls/). |
| [phoneCallDiscarded](/constructor/phoneCallDiscarded/) | Обозначает завершённый звонок; подробнее о полном процессе см. [здесь »](/api/calls/). |
| [phoneCallDiscardReasonBusy](/constructor/phoneCallDiscardReasonBusy/) | Звонок был отклонён, потому что пользователь занят другим звонком; подробнее см. [здесь »](/api/calls/). |
| [phoneCallDiscardReasonDisconnect](/constructor/phoneCallDiscardReasonDisconnect/) | Звонок был разорван; подробнее см. [здесь »](/api/calls/). |
| [phoneCallDiscardReasonHangup](/constructor/phoneCallDiscardReasonHangup/) | Звонок завершился штатно; подробнее см. [здесь »](/api/calls/). |
| [phoneCallDiscardReasonMigrateConferenceCall](/constructor/phoneCallDiscardReasonMigrateConferenceCall/) | Этот звонок был переведён в [конференц-звонок](/api/end-to-end/group-calls/). |
| [phoneCallDiscardReasonMissed](/constructor/phoneCallDiscardReasonMissed/) | Звонок был пропущен; подробнее см. [здесь »](/api/calls/). |
| [phoneCallEmpty](/constructor/phoneCallEmpty/) | Пустой конструктор |
| [phoneCallProtocol](/constructor/phoneCallProtocol/) | Сведения о протоколе для библиотеки VoIP; подробнее о том, как их заполнять, см. [здесь »](/api/calls/#populating-phonecallprotocol). |
| [phoneCallRequested](/constructor/phoneCallRequested/) | Запрошенный телефонный звонок; подробнее о полном порядке действий см. [здесь »](/api/calls/). |
| [phoneCallWaiting](/constructor/phoneCallWaiting/) | Входящий телефонный звонок; подробнее о полном процессе см. [здесь »](/api/calls/). |
| [phoneConnection](/constructor/phoneConnection/) | УСТАРЕЛО (libtgvoip): обозначает адрес (endpoint), который может использоваться для соединения с другим пользователем во время звонка |
| [phoneConnectionWebrtc](/constructor/phoneConnectionWebrtc/) | Параметры WebRTC-соединения для [звонка](/api/calls/). |
| [photo](/constructor/photo/) | Фотография |
| [photoCachedSize](/constructor/photoCachedSize/) | Описание изображения и его содержимого. |
| [photoEmpty](/constructor/photoEmpty/) | Пустой конструктор, несуществующая фотография |
| [photoPathSize](/constructor/photoPathSize/) | Сообщения с анимированными стикерами могут содержать сжатый svg (< 300 байт), чтобы показать контур стикера до загрузки самой анимации lottie. |
| [photos.photo](/constructor/photos.photo/) | Фотография со вспомогательными данными. |
| [photos.photos](/constructor/photos.photos/) | Полный список фотографий со вспомогательными данными. |
| [photos.photosSlice](/constructor/photos.photosSlice/) | Неполный список фотографий со вспомогательными данными. |
| [photoSize](/constructor/photoSize/) | Описание изображения. |
| [photoSizeEmpty](/constructor/photoSizeEmpty/) | Пустой конструктор. Изображение с такой миниатюрой недоступно. |
| [photoSizeProgressive](/constructor/photoSizeProgressive/) | Размер фотографии с прогрессивным кодированием |
| [photoStrippedSize](/constructor/photoStrippedSize/) | Сжатые JPG-данные низкого разрешения |
| [poll](/constructor/poll/) | Опрос |
| [pollAnswer](/constructor/pollAnswer/) | Возможный вариант ответа в опросе |
| [pollAnswerVoters](/constructor/pollAnswerVoters/) | Вариант ответа в опросе и то, как за него голосовали пользователи |
| [pollResults](/constructor/pollResults/) | Результаты опроса |
| [popularContact](/constructor/popularContact/) | Популярный контакт |
| [postAddress](/constructor/postAddress/) | Адрес доставки |
| [postInteractionCountersMessage](/constructor/postInteractionCountersMessage/) | Счётчики взаимодействий с сообщением. |
| [postInteractionCountersStory](/constructor/postInteractionCountersStory/) | Счётчики взаимодействий с историей. |
| [premium.boostsList](/constructor/premium.boostsList/) | Список [бустов](/api/boost/), применённых к пиру несколькими пользователями. |
| [premium.boostsStatus](/constructor/premium.boostsStatus/) | Содержит информацию о текущем [состоянии бустов](/api/boost/) пира. |
| [premium.myBoosts](/constructor/premium.myBoosts/) | Список пиров, которых мы сейчас [бустим](/api/boost/), и количество оставшихся у нас [слотов бустов](/api/boost/). |
| [premiumGiftCodeOption](/constructor/premiumGiftCodeOption/) | Содержит информацию о варианте [розыгрыша или подарка](/api/giveaways/). |
| [premiumSubscriptionOption](/constructor/premiumSubscriptionOption/) | Описывает вариант подписки Telegram Premium |
| [prepaidGiveaway](/constructor/prepaidGiveaway/) | Содержит информацию о [предоплаченном розыгрыше »](/api/giveaways/). |
| [prepaidStarsGiveaway](/constructor/prepaidStarsGiveaway/) | Содержит информацию о [предоплаченном розыгрыше Telegram Stars »](/api/giveaways/#star-giveaways). |
| [privacyKeyAbout](/constructor/privacyKeyAbout/) | Могут ли другие видеть вашу биографию |
| [privacyKeyAddedByPhone](/constructor/privacyKeyAddedByPhone/) | Можно ли добавить этого пользователя в наш список контактов по номеру телефона |
| [privacyKeyBirthday](/constructor/privacyKeyBirthday/) | Может ли пользователь видеть наш день рождения. |
| [privacyKeyChatInvite](/constructor/privacyKeyChatInvite/) | Можно ли приглашать пользователя в чаты |
| [privacyKeyForwards](/constructor/privacyKeyForwards/) | Будут ли сообщения, пересланные от этого пользователя, [пересылаться анонимно](https://telegram.org/blog/unsend-privacy-emoji#anonymous-forwarding) |
| [privacyKeyNoPaidMessages](/constructor/privacyKeyNoPaidMessages/) | Кто может писать вам без оплаты, если включены [платные сообщения »](/api/paid-messages/). |
| [privacyKeyPhoneCall](/constructor/privacyKeyPhoneCall/) | Принимает ли пользователь звонки |
| [privacyKeyPhoneNumber](/constructor/privacyKeyPhoneNumber/) | Разрешает ли пользователь нам видеть его номер телефона |
| [privacyKeyPhoneP2P](/constructor/privacyKeyPhoneP2P/) | Разрешены ли P2P-соединения при звонках с этим пользователем |
| [privacyKeyProfilePhoto](/constructor/privacyKeyProfilePhoto/) | Видна ли фотография профиля пользователя |
| [privacyKeySavedMusic](/constructor/privacyKeySavedMusic/) | Может ли пользователь видеть [композиции, закреплённые в нашем профиле »](/api/profile/#music). |
| [privacyKeyStarGiftsAutoSave](/constructor/privacyKeyStarGiftsAutoSave/) | Будут ли полученные [подарки](/api/gifts/) автоматически отображаться в нашем профиле |
| [privacyKeyStatusTimestamp](/constructor/privacyKeyStatusTimestamp/) | Можем ли мы видеть время последнего пребывания этого пользователя в сети. |
| [privacyKeyVoiceMessages](/constructor/privacyKeyVoiceMessages/) | Принимает ли пользователь голосовые сообщения |
| [privacyValueAllowAll](/constructor/privacyValueAllowAll/) | Разрешить всем пользователям |
| [privacyValueAllowBots](/constructor/privacyValueAllowBots/) | Разрешить ботам и mini app |
| [privacyValueAllowChatParticipants](/constructor/privacyValueAllowChatParticipants/) | Разрешить всем участникам определённых чатов |
| [privacyValueAllowCloseFriends](/constructor/privacyValueAllowCloseFriends/) | Разрешить только [близким друзьям »](/api/privacy/) |
| [privacyValueAllowContacts](/constructor/privacyValueAllowContacts/) | Разрешить всем контактам |
| [privacyValueAllowPremium](/constructor/privacyValueAllowPremium/) | Разрешить только пользователям с [подпиской Premium »](/api/premium/); в настоящее время применимо только для [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/). |
| [privacyValueAllowUsers](/constructor/privacyValueAllowUsers/) | Разрешить только определённым пользователям |
| [privacyValueDisallowAll](/constructor/privacyValueDisallowAll/) | Запретить всем пользователям |
| [privacyValueDisallowBots](/constructor/privacyValueDisallowBots/) | Запретить ботам и мини-приложениям |
| [privacyValueDisallowChatParticipants](/constructor/privacyValueDisallowChatParticipants/) | Запретить только участникам определённых чатов |
| [privacyValueDisallowContacts](/constructor/privacyValueDisallowContacts/) | Запретить только контактам |
| [privacyValueDisallowUsers](/constructor/privacyValueDisallowUsers/) | Запретить только определённым пользователям |
| [profileTabFiles](/constructor/profileTabFiles/) | Представляет вкладку общих файлов профиля. |
| [profileTabGifs](/constructor/profileTabGifs/) | Представляет вкладку GIF на странице профиля. |
| [profileTabGifts](/constructor/profileTabGifts/) | Представляет вкладку [подарков](/api/gifts/) на странице профиля. |
| [profileTabLinks](/constructor/profileTabLinks/) | Представляет вкладку ссылок на странице профиля. |
| [profileTabMedia](/constructor/profileTabMedia/) | Представляет вкладку медиафайлов на странице профиля. |
| [profileTabMusic](/constructor/profileTabMusic/) | Представляет вкладку [музыки](/api/profile/#music) на странице профиля. |
| [profileTabPosts](/constructor/profileTabPosts/) | Представляет вкладку [историй](/api/stories/) на странице профиля. |
| [profileTabVoice](/constructor/profileTabVoice/) | Представляет вкладку голосовых сообщений на странице профиля. |
| [publicForwardMessage](/constructor/publicForwardMessage/) | Содержит информацию о пересылке [истории](/api/stories/) в виде сообщения. |
| [publicForwardStory](/constructor/publicForwardStory/) | Содержит информацию о пересылке [истории](/api/stories/) в виде репоста публичным каналом. |
| [quickReply](/constructor/quickReply/) | [Шаблон быстрого ответа](/api/business/#quick-reply-shortcuts). |
| [reactionCount](/constructor/reactionCount/) | Реакции |
| [reactionCustomEmoji](/constructor/reactionCustomEmoji/) | Реакция на сообщение [пользовательским эмодзи](/api/custom-emoji/) |
| [reactionEmoji](/constructor/reactionEmoji/) | Обычная реакция на сообщение в виде эмодзи |
| [reactionEmpty](/constructor/reactionEmpty/) | Без реакции |
| [reactionNotificationsFromAll](/constructor/reactionNotificationsFromAll/) | Получать уведомления о реакциях от любых пользователей. |
| [reactionNotificationsFromContacts](/constructor/reactionNotificationsFromContacts/) | Получать уведомления о реакциях только от наших контактов. |
| [reactionPaid](/constructor/reactionPaid/) | Представляет [платную реакцию за Telegram Stars »](/api/reactions/#paid-reactions). |
| [reactionsNotifySettings](/constructor/reactionsNotifySettings/) | Настройки уведомлений о реакциях; подробнее см. [здесь »](/api/reactions/#notifications-about-reactions). |
| [readParticipantDate](/constructor/readParticipantDate/) | Содержит информацию о том, когда определённый участник прочитал сообщение |
| [receivedNotifyMessage](/constructor/receivedNotifyMessage/) | Идентификатор сообщения, для которого были отменены PUSH-уведомления. |
| [recentMeUrlChat](/constructor/recentMeUrlChat/) | Недавняя ссылка t.me на чат |
| [recentMeUrlChatInvite](/constructor/recentMeUrlChatInvite/) | Недавняя пригласительная ссылка t.me на чат |
| [recentMeUrlStickerSet](/constructor/recentMeUrlStickerSet/) | Недавняя ссылка t.me для установки набора стикеров |
| [recentMeUrlUnknown](/constructor/recentMeUrlUnknown/) | Неизвестный адрес t.me |
| [recentMeUrlUser](/constructor/recentMeUrlUser/) | Недавняя ссылка t.me на пользователя |
| [recentStory](/constructor/recentStory/) | Сводка [активных историй »](/api/stories/#recent-story-summaries) пира, встроенная в [user](/constructor/user/).`stories_max_id` и [channel](/constructor/channel/).`stories_max_id` и возвращаемая методом [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/). |
| [replyInlineMarkup](/constructor/replyInlineMarkup/) | Представляет инлайн-клавиатуру |
| [replyKeyboardForceReply](/constructor/replyKeyboardForceReply/) | Заставить пользователя отправить ответ |
| [replyKeyboardHide](/constructor/replyKeyboardHide/) | Скрыть отправленную клавиатуру ответа |
| [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/) | Представляет клавиатуру ответа |
| [reportResultAddComment](/constructor/reportResultAddComment/) | Пользователь должен ввести дополнительный комментарий для модераторов, после чего необходимо повторно вызвать [messages.report](/method/messages.report/), передав комментарий в [messages.report](/method/messages.report/).`message`. |
| [reportResultChooseOption](/constructor/reportResultChooseOption/) | Пользователь должен выбрать один из следующих вариантов, после чего необходимо повторно вызвать [messages.report](/method/messages.report/), передав идентификатор `option` выбранного варианта в [messages.report](/method/messages.report/).`option`. |
| [reportResultReported](/constructor/reportResultReported/) | Жалоба успешно отправлена, дальнейшие действия не требуются. |
| [requestedPeerChannel](/constructor/requestedPeerChannel/) | Информация о [канале или супергруппе](/api/channel/), которыми пользователь поделился с текущим авторизованным ботом с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). |
| [requestedPeerChat](/constructor/requestedPeerChat/) | Информация о [чате](/api/channel/), которым пользователь поделился с текущим авторизованным ботом с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). |
| [requestedPeerUser](/constructor/requestedPeerUser/) | Информация о пользователе, которым пользователь поделился с текущим авторизованным ботом с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). |
| [requestPeerTypeBroadcast](/constructor/requestPeerTypeBroadcast/) | Выбрать канал |
| [requestPeerTypeChat](/constructor/requestPeerTypeChat/) | Выбрать чат или супергруппу |
| [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/) | Используется в [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) [ботом-менеджером](/api/bots/managed-bots/), чтобы попросить пользователя создать новый [управляемый бот »](/api/bots/managed-bots/); подробнее см. [здесь »](/api/bots/buttons/#requesting-a-managed-bot). |
| [requestPeerTypeUser](/constructor/requestPeerTypeUser/) | Выбрать пользователя. |
| [requirementToContactEmpty](/constructor/requirementToContactEmpty/) | С этим пользователем можно свободно связаться. |
| [requirementToContactPaidMessages](/constructor/requirementToContactPaidMessages/) | Этот пользователь требует уплатить указанное количество [Telegram Stars](/api/stars/) за отправку ему сообщения; полное описание процесса см. [здесь »](/api/paid-messages/). |
| [requirementToContactPremium](/constructor/requirementToContactPremium/) | Этот пользователь требует приобрести подписку [Premium](/api/premium/), чтобы связаться с ним. |
| [restrictionReason](/constructor/restrictionReason/) | Причина ограничения. |
| [savedDialog](/constructor/savedDialog/) | Представляет [сохранённый диалог »](/api/saved-messages/). |
| [savedPhoneContact](/constructor/savedPhoneContact/) | Сохранённый контакт |
| [savedReactionTag](/constructor/savedReactionTag/) | Информация о [теге реакции в избранном »](/api/saved-messages/#tags). |
| [savedStarGift](/constructor/savedStarGift/) | Представляет [подарок](/api/gifts/), принадлежащий пиру. |
| [searchPostsFlood](/constructor/searchPostsFlood/) | Указывает, требует ли оплаты указанный [глобальный поиск по публикациям »](/api/search/#posts-tab). |
| [searchResultPosition](/constructor/searchResultPosition/) | Информация о сообщении в определённой позиции |
| [searchResultsCalendarPeriod](/constructor/searchResultsCalendarPeriod/) | Информация о найденных сообщениях, отправленных в определённый день; используется для разбивки поля `messages` в конструкторах [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) по дням. |
| [secureCredentialsEncrypted](/constructor/secureCredentialsEncrypted/) | Зашифрованные учётные данные, необходимые для расшифровки данных [telegram passport](https://core.telegram.org/passport). |
| [secureData](/constructor/secureData/) | Защищённые данные [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#securedata) |
| [secureFile](/constructor/secureFile/) | Защищённый файл [passport](https://core.telegram.org/passport); подробнее [см. документацию по Telegram Passport »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [secureFileEmpty](/constructor/secureFileEmpty/) | Пустой конструктор |
| [securePasswordKdfAlgoPBKDF2HMACSHA512iter100000](/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000/) | Алгоритм KDF: PBKDF2 с SHA512 и 100000 итераций |
| [securePasswordKdfAlgoSHA512](/constructor/securePasswordKdfAlgoSHA512/) | Алгоритм KDF на основе SHA512 |
| [securePasswordKdfAlgoUnknown](/constructor/securePasswordKdfAlgoUnknown/) | Неизвестный алгоритм KDF (скорее всего, клиент необходимо обновить) |
| [securePlainEmail](/constructor/securePlainEmail/) | Адрес электронной почты для использования в [telegram passport](https://core.telegram.org/passport): [его необходимо предварительно подтвердить »](https://core.telegram.org/passport/encryption#secureplaindata). |
| [securePlainPhone](/constructor/securePlainPhone/) | Номер телефона для использования в [telegram passport](https://core.telegram.org/passport): [сначала он должен быть подтверждён »](https://core.telegram.org/passport/encryption#secureplaindata). |
| [secureRequiredType](/constructor/secureRequiredType/) | Требуемый тип |
| [secureRequiredTypeOneOf](/constructor/secureRequiredTypeOneOf/) | Одно из значений |
| [secureSecretSettings](/constructor/secureSecretSettings/) | Настройки безопасности |
| [secureValue](/constructor/secureValue/) | Защищённое значение |
| [secureValueError](/constructor/secureValueError/) | Ошибка защищённого значения |
| [secureValueErrorData](/constructor/secureValueErrorData/) | Представляет проблему в одном из полей данных, предоставленных пользователем. Ошибка считается устранённой, когда значение поля меняется. |
| [secureValueErrorFile](/constructor/secureValueErrorFile/) | Представляет проблему со сканом документа. Ошибка считается устранённой, когда файл со сканом документа меняется. |
| [secureValueErrorFiles](/constructor/secureValueErrorFiles/) | Представляет проблему со списком сканов. Ошибка считается устранённой, когда список файлов со сканами меняется. |
| [secureValueErrorFrontSide](/constructor/secureValueErrorFrontSide/) | Представляет проблему с лицевой стороной документа. Ошибка считается устранённой, когда файл с лицевой стороной документа меняется. |
| [secureValueErrorReverseSide](/constructor/secureValueErrorReverseSide/) | Представляет проблему с обратной стороной документа. Ошибка считается устранённой, когда файл с обратной стороной документа меняется. |
| [secureValueErrorSelfie](/constructor/secureValueErrorSelfie/) | Представляет проблему с селфи с документом. Ошибка считается устранённой, когда файл с селфи меняется. |
| [secureValueErrorTranslationFile](/constructor/secureValueErrorTranslationFile/) | Представляет проблему с одним из файлов, составляющих перевод документа. Ошибка считается устранённой, когда файл меняется. |
| [secureValueErrorTranslationFiles](/constructor/secureValueErrorTranslationFiles/) | Представляет проблему с переведённой версией документа. Ошибка считается устранённой, когда файл с переводом документа меняется. |
| [secureValueHash](/constructor/secureValueHash/) | Хеш защищённого значения |
| [secureValueTypeAddress](/constructor/secureValueTypeAddress/) | Адрес |
| [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/) | Выписка из банка |
| [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/) | Водительское удостоверение |
| [secureValueTypeEmail](/constructor/secureValueTypeEmail/) | Электронная почта |
| [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/) | Удостоверение личности |
| [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/) | Внутренний [passport](https://core.telegram.org/passport) |
| [secureValueTypePassport](/constructor/secureValueTypePassport/) | Passport |
| [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/) | Внутренняя регистрация [passport](https://core.telegram.org/passport) |
| [secureValueTypePersonalDetails](/constructor/secureValueTypePersonalDetails/) | Личные данные |
| [secureValueTypePhone](/constructor/secureValueTypePhone/) | Телефон |
| [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/) | Договор аренды |
| [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/) | Временная регистрация |
| [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/) | Счёт за коммунальные услуги |
| [sendAsPeer](/constructor/sendAsPeer/) | Указывает пир, который может использоваться для отправки сообщений |
| [sendMessageCancelAction](/constructor/sendMessageCancelAction/) | Отменяет все предыдущие обновления о действии. Например, когда пользователь удаляет введённый текст или прерывает загрузку видео. |
| [sendMessageChooseContactAction](/constructor/sendMessageChooseContactAction/) | Пользователь выбирает контакт для отправки. |
| [sendMessageChooseStickerAction](/constructor/sendMessageChooseStickerAction/) | Пользователь выбирает стикер |
| [sendMessageEmojiInteraction](/constructor/sendMessageEmojiInteraction/) | Пользователь нажал на анимированный эмодзи, вызвав [реакцию; подробнее см. здесь »](/api/animated-emojis/#emoji-reactions). |
| [sendMessageEmojiInteractionSeen](/constructor/sendMessageEmojiInteractionSeen/) | Пользователь наблюдает за реакцией анимированным эмодзи, вызванной другим пользователем; [подробнее см. здесь »](/api/animated-emojis/#emoji-reactions). |
| [sendMessageGamePlayAction](/constructor/sendMessageGamePlayAction/) | Пользователь играет в игру |
| [sendMessageGeoLocationAction](/constructor/sendMessageGeoLocationAction/) | Пользователь выбирает геопозицию для отправки. |
| [sendMessageHistoryImportAction](/constructor/sendMessageHistoryImportAction/) | Выполняется импорт истории переписки |
| [sendMessageRecordAudioAction](/constructor/sendMessageRecordAudioAction/) | Пользователь записывает голосовое сообщение. |
| [sendMessageRecordRoundAction](/constructor/sendMessageRecordRoundAction/) | Пользователь записывает видеосообщение для отправки |
| [sendMessageRecordVideoAction](/constructor/sendMessageRecordVideoAction/) | Пользователь записывает видео. |
| [sendMessageTextDraftAction](/constructor/sendMessageTextDraftAction/) | Используется ботами для реализации [потоковой передачи сообщений »](/api/bots/ai/#live-response-streaming). |
| [sendMessageTypingAction](/constructor/sendMessageTypingAction/) | Пользователь набирает текст. |
| [sendMessageUploadAudioAction](/constructor/sendMessageUploadAudioAction/) | Пользователь загружает голосовое сообщение. |
| [sendMessageUploadDocumentAction](/constructor/sendMessageUploadDocumentAction/) | Пользователь загружает файл. |
| [sendMessageUploadPhotoAction](/constructor/sendMessageUploadPhotoAction/) | Пользователь загружает фотографию. |
| [sendMessageUploadRoundAction](/constructor/sendMessageUploadRoundAction/) | Пользователь загружает видеосообщение |
| [sendMessageUploadVideoAction](/constructor/sendMessageUploadVideoAction/) | Пользователь загружает видео. |
| [shippingOption](/constructor/shippingOption/) | Вариант доставки |
| [smsJob](/constructor/smsJob/) | Информация о задании на отправку SMS. |
| [smsjobs.eligibleToJoin](/constructor/smsjobs.eligibleToJoin/) | Допуск к SMS-заданиям |
| [smsjobs.status](/constructor/smsjobs.status/) | Статус |
| [speakingInGroupCallAction](/constructor/speakingInGroupCallAction/) | Пользователь сейчас говорит в групповом звонке |
| [sponsoredMessage](/constructor/sponsoredMessage/) | [Рекламное сообщение](/api/sponsored-messages/). |
| [sponsoredMessageReportOption](/constructor/sponsoredMessageReportOption/) | [Вариант жалобы на рекламное сообщение »](/api/sponsored-messages/#reporting-sponsored-messages). |
| [sponsoredPeer](/constructor/sponsoredPeer/) | Рекламируемый пир. |
| [starGift](/constructor/starGift/) | Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/). |
| [starGiftActiveAuctionState](/constructor/starGiftActiveAuctionState/) | Содержит информацию об [аукционе, на котором пользователь сделал ставку »](/api/auctions/). |
| [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/) | Подложка [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [starGiftAttributeCounter](/constructor/starGiftAttributeCounter/) | Указывает общее количество подарков, обладающих указанным атрибутом. |
| [starGiftAttributeIdBackdrop](/constructor/starGiftAttributeIdBackdrop/) | Идентификатор подложки [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [starGiftAttributeIdModel](/constructor/starGiftAttributeIdModel/) | Идентификатор модели [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [starGiftAttributeIdPattern](/constructor/starGiftAttributeIdPattern/) | Идентификатор узора [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [starGiftAttributeModel](/constructor/starGiftAttributeModel/) | Модель [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) | Сведения об отправителе, получателе и сообщении, приложенных к исходному [подарку »](/api/gifts/), до того как он был превращён в [коллекционный подарок »](/api/gifts/#collectible-gifts). |
| [starGiftAttributePattern](/constructor/starGiftAttributePattern/) | [Стикер](/api/stickers/), наложенный повторяющимся узором на подложку [коллекционного подарка »](/api/gifts/). |
| [starGiftAttributeRarity](/constructor/starGiftAttributeRarity/) | Точное значение редкости для атрибута коллекционного подарка. |
| [starGiftAttributeRarityEpic](/constructor/starGiftAttributeRarityEpic/) | Обозначает эпическую редкость атрибута коллекционного подарка. |
| [starGiftAttributeRarityLegendary](/constructor/starGiftAttributeRarityLegendary/) | Обозначает легендарную редкость атрибута коллекционного подарка. |
| [starGiftAttributeRarityRare](/constructor/starGiftAttributeRarityRare/) | Обозначает редкий уровень редкости атрибута коллекционного подарка. |
| [starGiftAttributeRarityUncommon](/constructor/starGiftAttributeRarityUncommon/) | Обозначает необычную редкость атрибута коллекционного подарка. |
| [starGiftAuctionAcquiredGift](/constructor/starGiftAuctionAcquiredGift/) | Описывает подарок, который текущий пользователь выиграл на аукционе. |
| [starGiftAuctionRound](/constructor/starGiftAuctionRound/) | Описывает один или несколько [раундов аукциона коллекционных подарков »](/api/auctions/). |
| [starGiftAuctionRoundExtendable](/constructor/starGiftAuctionRoundExtendable/) | Описывает один или несколько продлеваемых [раундов аукциона коллекционных подарков »](/api/auctions/). |
| [starGiftAuctionState](/constructor/starGiftAuctionState/) | Представляет активный или ожидающий [аукцион »](/api/auctions/). |
| [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/) | Представляет завершившийся [аукцион »](/api/auctions/). |
| [starGiftAuctionStateNotModified](/constructor/starGiftAuctionStateNotModified/) | Возвращается только методами аукциона (никогда в обновлениях), если переданное значение `version` совпадает со значением [аукциона »](/api/auctions/).`version` на сервере, то есть информация об аукционе не изменилась по сравнению с локально закешированной версией. |
| [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) | Содержит информацию о состоянии текущего пользователя в [аукционе »](/api/auctions/). |
| [starGiftBackground](/constructor/starGiftBackground/) | Содержит фоновую палитру по умолчанию для [типа подарка »](/api/gifts/#listing-all-possible-collectible-variants). |
| [starGiftCollection](/constructor/starGiftCollection/) | Представляет [коллекцию звёздных подарков »](/api/gifts/#gift-collections). |
| [starGiftUnique](/constructor/starGiftUnique/) | Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts). |
| [starGiftUpgradePrice](/constructor/starGiftUpgradePrice/) | Указывает цену [улучшения подарка »](/api/gifts/#collectible-gifts), действующую начиная с определённого момента времени. |
| [starRefProgram](/constructor/starRefProgram/) | Информация о [партнёрской программе, предлагаемой ботом](/api/bots/referrals/) |
| [starsAmount](/constructor/starsAmount/) | Описывает вещественную (то есть возможно дробную) сумму в [Telegram Stars](/api/stars/). |
| [starsGiftOption](/constructor/starsGiftOption/) | [Вариант подарка за Telegram Stars](/api/stars/#buying-or-gifting-stars). |
| [starsGiveawayOption](/constructor/starsGiveawayOption/) | Содержит информацию о варианте [розыгрыша Telegram Stars](/api/giveaways/#star-giveaways). |
| [starsGiveawayWinnersOption](/constructor/starsGiveawayWinnersOption/) | Допустимые варианты числа победителей розыгрыша. |
| [starsRating](/constructor/starsRating/) | Представляет [звёздный рейтинг профиля, подробнее см. здесь »](/api/stars/#star-rating). |
| [starsRevenueStatus](/constructor/starsRevenueStatus/) | Описывает [балансы дохода в Telegram Stars »](/api/stars/). |
| [starsSubscription](/constructor/starsSubscription/) | Представляет [подписку за Telegram Stars »](/api/invites/#paid-invite-links). |
| [starsSubscriptionPricing](/constructor/starsSubscriptionPricing/) | Стоимость [подписки за Telegram Stars »](/api/invites/#paid-invite-links). |
| [starsTonAmount](/constructor/starsTonAmount/) | Описывает сумму в Gram, выраженную в нанограммах (то есть в `1/1_000_000_000` доли Gram). |
| [starsTopupOption](/constructor/starsTopupOption/) | [Вариант пополнения баланса Telegram Stars](/api/stars/). |
| [starsTransaction](/constructor/starsTransaction/) | Представляет [транзакцию Telegram Stars или TON »](/api/stars/). |
| [starsTransactionPeer](/constructor/starsTransactionPeer/) | Описывает транзакцию [Telegram Star](/api/stars/) с другим пиром. |
| [starsTransactionPeerAds](/constructor/starsTransactionPeerAds/) | Описывает транзакцию [Telegram Stars](/api/stars/), использованную для оплаты [рекламы в Telegram, как описано здесь »](/api/stars/#paying-for-ads). |
| [starsTransactionPeerAPI](/constructor/starsTransactionPeerAPI/) | Описывает транзакцию [Telegram Star](/api/stars/), которой оплачивается платное использование API, например [платные рассылки ботов](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once). |
| [starsTransactionPeerAppStore](/constructor/starsTransactionPeerAppStore/) | Описывает транзакцию [Telegram Star](/api/stars/) с App Store, используемую при покупке Telegram Stars через App Store. |
| [starsTransactionPeerFragment](/constructor/starsTransactionPeerFragment/) | Описывает транзакцию [Telegram Star](/api/stars/) с [Fragment](https://fragment.com), используемую при покупке Telegram Stars через [Fragment](https://fragment.com). |
| [starsTransactionPeerPlayMarket](/constructor/starsTransactionPeerPlayMarket/) | Описывает транзакцию [Telegram Star](/api/stars/) с Play Store, используемую при покупке Telegram Stars через Play Store. |
| [starsTransactionPeerPremiumBot](/constructor/starsTransactionPeerPremiumBot/) | Описывает транзакцию [Telegram Stars](/api/stars/), совершённую через [@PremiumBot](https://t.me/premiumbot) (то есть по схеме [inputInvoiceStars](/constructor/inputInvoiceStars/), описанной [здесь »](/api/stars/#buying-or-gifting-stars)). |
| [starsTransactionPeerUnsupported](/constructor/starsTransactionPeerUnsupported/) | Описывает транзакцию [Telegram Stars](/api/stars/), которую невозможно описать средствами текущего слоя. |
| [stats.broadcastStats](/constructor/stats.broadcastStats/) | [Статистика канала](/api/stats/). |
| [stats.megagroupStats](/constructor/stats.megagroupStats/) | [Статистика](/api/stats/) супергруппы |
| [stats.messageStats](/constructor/stats.messageStats/) | Статистика сообщения |
| [stats.pollStats](/constructor/stats.pollStats/) | [Статистика](/api/stats/#poll-statistics) опроса, отправленного в сообщении. |
| [stats.publicForwards](/constructor/stats.publicForwards/) | Содержит информацию о пересылках [истории](/api/stories/) в виде сообщения в публичные чаты и о репостах публичными каналами. |
| [stats.storyStats](/constructor/stats.storyStats/) | Содержит [статистику](/api/stats/) по [истории](/api/stories/). |
| [statsAbsValueAndPrev](/constructor/statsAbsValueAndPrev/) | Пара статистических значений: начальное и конечное значение за рассматриваемый период времени |
| [statsDateRangeDays](/constructor/statsDateRangeDays/) | Диапазон дат [статистики канала](/api/stats/) |
| [statsGraph](/constructor/statsGraph/) | [График статистики канала](/api/stats/) |
| [statsGraphAsync](/constructor/statsGraphAsync/) | Этот [график статистики канала](/api/stats/) должен формироваться асинхронно с помощью [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/), чтобы снизить нагрузку на сервер |
| [statsGraphError](/constructor/statsGraphError/) | При построении [графика статистики](/api/stats/) произошла ошибка |
| [statsGroupTopAdmin](/constructor/statsGroupTopAdmin/) | Информация об активном администраторе супергруппы |
| [statsGroupTopInviter](/constructor/statsGroupTopInviter/) | Информация об активно приглашающем участнике супергруппы |
| [statsGroupTopPoster](/constructor/statsGroupTopPoster/) | Информация об активном пользователе супергруппы |
| [statsPercentValue](/constructor/statsPercentValue/) | [Процентное значение в статистике канала](/api/stats/). |
| [statsURL](/constructor/statsURL/) | URL со статистикой чата |
| [stickerKeyword](/constructor/stickerKeyword/) | Ключевые слова для определённого стикера |
| [stickerPack](/constructor/stickerPack/) | Стикерпак — это группа стикеров, связанных с одним и тем же эмодзи. |
| [stickers.suggestedShortName](/constructor/stickers.suggestedShortName/) | Предлагаемое краткое имя набора стикеров |
| [stickerSet](/constructor/stickerSet/) | Представляет набор стикеров (стикерпак) |
| [stickerSetCovered](/constructor/stickerSetCovered/) | Набор стикеров с одним стикером в качестве предпросмотра |
| [stickerSetFullCovered](/constructor/stickerSetFullCovered/) | Предпросмотр набора стикеров со всеми входящими в него стикерами. |
| [stickerSetMultiCovered](/constructor/stickerSetMultiCovered/) | Набор стикеров с несколькими стикерами в качестве предпросмотра |
| [stickerSetNoCovered](/constructor/stickerSetNoCovered/) | Только информация о наборе стикеров, без предпросмотров. |
| [storage.fileGif](/constructor/storage.fileGif/) | Изображение GIF. MIME-тип: `image/gif`. |
| [storage.fileJpeg](/constructor/storage.fileJpeg/) | Изображение JPEG. MIME-тип: `image/jpeg`. |
| [storage.fileMov](/constructor/storage.fileMov/) | Видео Quicktime. MIME-тип: `video/quicktime`. |
| [storage.fileMp3](/constructor/storage.fileMp3/) | Аудио в формате Mp3. MIME-тип: `audio/mpeg`. |
| [storage.fileMp4](/constructor/storage.fileMp4/) | Видео в формате MPEG-4. MIME-тип: `video/mp4`. |
| [storage.filePartial](/constructor/storage.filePartial/) | Часть более крупного файла. |
| [storage.filePdf](/constructor/storage.filePdf/) | Изображение документа PDF. MIME-тип: `application/pdf`. |
| [storage.filePng](/constructor/storage.filePng/) | Изображение PNG. MIME-тип: `image/png`. |
| [storage.fileUnknown](/constructor/storage.fileUnknown/) | Неизвестный тип. |
| [storage.fileWebp](/constructor/storage.fileWebp/) | Изображение WEBP. MIME-тип: `image/webp`. |
| [stories.albums](/constructor/stories.albums/) | [Альбомы историй »](/api/stories/#story-albums). |
| [stories.albumsNotModified](/constructor/stories.albumsNotModified/) | [Список альбомов историй »](/api/stories/#story-albums) не изменился. |
| [stories.allStories](/constructor/stories.allStories/) | Полный список активных (или активных и скрытых) [историй](/api/stories/#watching-stories). |
| [stories.allStoriesNotModified](/constructor/stories.allStoriesNotModified/) | Список активных (или активных и скрытых) [историй](/api/stories/#watching-stories) не изменился. |
| [stories.canSendStoryCount](/constructor/stories.canSendStoryCount/) | Содержит количество доступных слотов для активных историй (равно значению [параметра клиентской конфигурации `story_expiring_limit_*`](/api/config/#story-expiring-limit-default) за вычетом числа активных на данный момент историй). |
| [stories.foundStories](/constructor/stories.foundStories/) | Истории, найденные с помощью [глобального поиска историй »](/api/stories/#searching-stories). |
| [stories.peerStories](/constructor/stories.peerStories/) | [Список активных историй](/api/stories/#watching-stories) конкретного пира. |
| [stories.stories](/constructor/stories.stories/) | Список [историй](/api/stories/#pinned-or-archived-stories) |
| [stories.storyReactionsList](/constructor/stories.storyReactionsList/) | Список пиров, отреагировавших на конкретную [историю](/api/stories/) или иначе взаимодействовавших с ней |
| [stories.storyViews](/constructor/stories.storyViews/) | Счётчики реакций и просмотров для списка [историй](/api/stories/) |
| [stories.storyViewsList](/constructor/stories.storyViewsList/) | Счётчики реакций и просмотров [истории](/api/stories/) |
| [storiesStealthMode](/constructor/storiesStealthMode/) | Информация о текущем сеансе [скрытого режима](/api/stories/#stealth-mode). |
| [storyAlbum](/constructor/storyAlbum/) | Представляет [альбом историй »](/api/stories/#story-albums). |
| [storyFwdHeader](/constructor/storyFwdHeader/) | Содержит информацию о первоначальном авторе истории, на которую сделан репост. |
| [storyItem](/constructor/storyItem/) | Представляет [историю](/api/stories/). |
| [storyItemDeleted](/constructor/storyItemDeleted/) | Представляет ранее активную историю, которая была удалена |
| [storyItemSkipped](/constructor/storyItemSkipped/) | Представляет активную историю, полная информация о которой опущена из соображений экономии места и производительности; используйте [stories.getStoriesByID](/method/stories.getStoriesByID/), чтобы при необходимости получить полные сведения о пропущенной истории. |
| [storyReaction](/constructor/storyReaction/) | Как определённый пир отреагировал на историю |
| [storyReactionPublicForward](/constructor/storyReactionPublicForward/) | Определённый пир переслал историю в виде сообщения в публичный чат или канал. |
| [storyReactionPublicRepost](/constructor/storyReactionPublicRepost/) | Определённый пир сделал репост истории. |
| [storyView](/constructor/storyView/) | Сведения о датах просмотра и реакциях для [истории](/api/stories/) |
| [storyViewPublicForward](/constructor/storyViewPublicForward/) | Определённый пир переслал историю в виде сообщения в публичный чат или канал. |
| [storyViewPublicRepost](/constructor/storyViewPublicRepost/) | Определённый пир сделал репост истории. |
| [storyViews](/constructor/storyViews/) | Сводные сведения о просмотрах и реакциях [истории](/api/stories/). |
| [suggestedPost](/constructor/suggestedPost/) | Содержит информацию о [предлагаемом посте »](/api/suggested-posts/). |
| [textAnchor](/constructor/textAnchor/) | Текст, ссылающийся на другой раздел страницы |
| [textBold](/constructor/textBold/) | **Полужирный** текст |
| [textConcat](/constructor/textConcat/) | Объединение форматированных текстов |
| [textEmail](/constructor/textEmail/) | Форматированный текст со ссылкой на адрес электронной почты |
| [textEmpty](/constructor/textEmpty/) | Пустой элемент форматированного текста |
| [textFixed](/constructor/textFixed/) | Моноширинный (`fixed-width`) форматированный текст |
| [textImage](/constructor/textImage/) | Встроенное изображение |
| [textItalic](/constructor/textItalic/) | _Курсивный_ текст |
| [textMarked](/constructor/textMarked/) | Выделенный текст |
| [textPhone](/constructor/textPhone/) | Форматированный текст со ссылкой на номер телефона |
| [textPlain](/constructor/textPlain/) | Обычный текст |
| [textStrike](/constructor/textStrike/) | Зачёркнутый текст |
| [textSubscript](/constructor/textSubscript/) | Подстрочный текст |
| [textSuperscript](/constructor/textSuperscript/) | Надстрочный текст |
| [textUnderline](/constructor/textUnderline/) | Подчёркнутый текст |
| [textUrl](/constructor/textUrl/) | Ссылка |
| [textWithEntities](/constructor/textWithEntities/) | Оформленный текст с [сущностями оформления](/api/entities/) |
| [theme](/constructor/theme/) | Тема оформления |
| [themeSettings](/constructor/themeSettings/) | Параметры темы оформления |
| [timezone](/constructor/timezone/) | Сведения о часовом поясе. |
| [todoCompletion](/constructor/todoCompletion/) | Выполненный пункт [списка задач »](/api/todo/). |
| [todoItem](/constructor/todoItem/) | Пункт [списка задач »](/api/todo/). |
| [todoList](/constructor/todoList/) | Представляет [список задач »](/api/todo/). |
| [topPeer](/constructor/topPeer/) | Популярный пир |
| [topPeerCategoryBotsApp](/constructor/topPeerCategoryBotsApp/) | Наиболее часто используемые [основные Mini App ботов](/api/bots/webapps/#main-mini-apps). |
| [topPeerCategoryBotsGuestChat](/constructor/topPeerCategoryBotsGuestChat/) | Популярные [гостевые боты »](/api/bots/guest-mode/), то есть боты, которых чаще всего вызывают в чатах как гостей. |
| [topPeerCategoryBotsInline](/constructor/topPeerCategoryBotsInline/) | Наиболее используемые инлайн-боты |
| [topPeerCategoryBotsPM](/constructor/topPeerCategoryBotsPM/) | Наиболее используемые боты |
| [topPeerCategoryChannels](/constructor/topPeerCategoryChannels/) | Наиболее посещаемые каналы |
| [topPeerCategoryCorrespondents](/constructor/topPeerCategoryCorrespondents/) | Пользователи, с которыми мы переписываемся чаще всего |
| [topPeerCategoryForwardChats](/constructor/topPeerCategoryForwardChats/) | Чаты, в которые пользователь часто пересылает сообщения |
| [topPeerCategoryForwardUsers](/constructor/topPeerCategoryForwardUsers/) | Пользователи, которым пользователь часто пересылает сообщения |
| [topPeerCategoryGroups](/constructor/topPeerCategoryGroups/) | Часто открываемые группы и супергруппы |
| [topPeerCategoryPeers](/constructor/topPeerCategoryPeers/) | Категория популярных пиров |
| [topPeerCategoryPhoneCalls](/constructor/topPeerCategoryPhoneCalls/) | Пользователи, которым чаще всего звонят |
| [true](/constructor/true/) | См. [предопределённые идентификаторы](/mtproto/TL-formal/#predefined-identifiers). |
| [updateAiComposeTones](/constructor/updateAiComposeTones/) | Список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя изменился; его следует получить заново с помощью [aicompose.getTones](/method/aicompose.getTones/). |
| [updateAttachMenuBots](/constructor/updateAttachMenuBots/) | Список установленных [пунктов меню вложений »](/api/bots/attach/) изменился; используйте [messages.getAttachMenuBots](/method/messages.getAttachMenuBots/), чтобы получить обновлённый список. |
| [updateAutoSaveSettings](/constructor/updateAutoSaveSettings/) | Настройки автосохранения медиа изменились и должны быть перезапрошены с помощью [account.getAutoSaveSettings](/method/account.getAutoSaveSettings/). |
| [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) | Подключение или отключение [бизнес-бота](/api/bots/connected-business-bots/), а также изменение настроек подключения отправляет боту обновление [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) с новыми настройками и идентификатором `connection_id`, который бот будет использовать, чтобы обрабатывать обновления от пользователя и отправлять сообщения от его имени. |
| [updateBotCallbackQuery](/constructor/updateBotCallbackQuery/) | Нажата callback-кнопка, и данные кнопки отправлены боту, который её создал |
| [updateBotChatBoost](/constructor/updateBotChatBoost/) | Изменился [буст канала или супергруппы](/api/boost/) (только для ботов) |
| [updateBotChatInviteRequester](/constructor/updateBotChatInviteRequester/) | Кто-то подал заявку на вступление в чат или канал (только для ботов; пользователи вместо этого получат [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/)) |
| [updateBotCommands](/constructor/updateBotCommands/) | Изменился [набор команд](/api/bots/commands/) определённого бота в определённом чате. |
| [updateBotDeleteBusinessMessage](/constructor/updateBotDeleteBusinessMessage/) | Сообщение было удалено в [подключённом бизнес-чате »](/api/bots/connected-business-bots/). |
| [updateBotEditBusinessMessage](/constructor/updateBotEditBusinessMessage/) | Сообщение было отредактировано в [подключённом бизнес-чате »](/api/bots/connected-business-bots/). |
| [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/) | Отправляется [гостевым ботам »](/api/bots/guest-mode/), когда пользователь вызывает бота в чате как гостя. Боту следует ответить вызовом [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/), подробнее см. [здесь »](/api/bots/guest-mode/#handling-guest-queries-bot-side). |
| [updateBotInlineQuery](/constructor/updateBotInlineQuery/) | Входящий инлайн-запрос |
| [updateBotInlineSend](/constructor/updateBotInlineSend/) | Результат инлайн-запроса, который пользователь выбрал и отправил своему собеседнику. О том, как включить эти обновления для вашего бота, см. документацию по [сбору обратной связи](https://core.telegram.org/bots/inline#collecting-feedback). |
| [updateBotMenuButton](/constructor/updateBotMenuButton/) | Поведение кнопки меню для указанного бота изменилось |
| [updateBotMessageReaction](/constructor/updateBotMessageReaction/) | Только для ботов: пользователь изменил свои реакции на сообщении с публичными реакциями. |
| [updateBotMessageReactions](/constructor/updateBotMessageReactions/) | Только для ботов: изменилось число реакций на сообщении с анонимными реакциями. |
| [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/) | Сообщение получено через [подключённый бизнес-чат »](/api/bots/connected-business-bots/). |
| [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/) | Этот объект содержит информацию о входящем запросе предварительной проверки заказа. |
| [updateBotPurchasedPaidMedia](/constructor/updateBotPurchasedPaidMedia/) | Только для ботов: пользователь приобрёл [платное медиа](/api/paid-media/). |
| [updateBotShippingQuery](/constructor/updateBotShippingQuery/) | Этот объект содержит информацию о входящем запросе доставки. |
| [updateBotStopped](/constructor/updateBotStopped/) | Бот был остановлен или запущен заново. |
| [updateBotWebhookJSON](/constructor/updateBotWebhookJSON/) | Новое входящее событие; только для ботов |
| [updateBotWebhookJSONQuery](/constructor/updateBotWebhookJSONQuery/) | Новый входящий запрос; только для ботов |
| [updateBusinessBotCallbackQuery](/constructor/updateBusinessBotCallbackQuery/) | Была нажата callback-кнопка, отправленная через [бизнес-подключение](/api/bots/connected-business-bots/), и данные кнопки были отправлены боту, который её создал. |
| [updateChannel](/constructor/updateChannel/) | Информация о канале или супергруппе ([channel](/constructor/channel/) и/или [channelFull](/constructor/channelFull/)) была обновлена. |
| [updateChannelAvailableMessages](/constructor/updateChannelAvailableMessages/) | История [канала или супергруппы](/api/channel/) была скрыта. |
| [updateChannelMessageForwards](/constructor/updateChannelMessageForwards/) | Изменился счётчик пересылок сообщения в канале |
| [updateChannelMessageViews](/constructor/updateChannelMessageViews/) | Счётчик просмотров сообщения в канале изменился |
| [updateChannelParticipant](/constructor/updateChannelParticipant/) | Участник вышел, вступил, был заблокирован или назначен администратором в [канале или супергруппе](/api/channel/). |
| [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/) | Указанные сообщения [канала или супергруппы](/api/channel/) были прочитаны (генерируется специально для таких сообщений, как голосовые сообщения или видео, только после того, как медиафайл просмотрен и отмечен как прочитанный с помощью [channels.readMessageContents](/method/channels.readMessageContents/)) |
| [updateChannelTooLong](/constructor/updateChannelTooLong/) | В указанном канале появились новые обновления; клиент обязан получить их вручную, вызвав [updates.getChannelDifference](/method/updates.getChannelDifference/), как описано в [документации »](/api/updates/). |
| [updateChannelUserTyping](/constructor/updateChannelUserTyping/) | Пользователь набирает текст в [супергруппе, канале](/api/channel/) или [ветке сообщений](/api/threads/) |
| [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/) | Пользователи также могут выбрать отображение сообщений из всех тем так, как если бы они были отправлены в обычную группу, с помощью настройки «Показывать как сообщения» в локальном клиенте. |
| [updateChannelWebPage](/constructor/updateChannelWebPage/) | Для ссылки в сообщении [канала или супергруппы](/api/channel/) был сформирован предпросмотр веб-страницы |
| [updateChat](/constructor/updateChat/) | Информация о чате ([chat](/constructor/chat/) и/или [chatFull](/constructor/chatFull/)) была обновлена. |
| [updateChatDefaultBannedRights](/constructor/updateChatDefaultBannedRights/) | Права по умолчанию для заблокированных пользователей в [обычной группе](/api/channel/#basic-groups) были изменены |
| [updateChatParticipant](/constructor/updateChatParticipant/) | Пользователь вступил в определённую [обычную группу »](/api/channel/#basic-groups) или вышел из неё: это обновление могут получать только боты; пользовательский вариант этого обновления описан [здесь »](/api/peers/#basic-group-updates). |
| [updateChatParticipantAdd](/constructor/updateChatParticipantAdd/) | Новый участник группы. |
| [updateChatParticipantAdmin](/constructor/updateChatParticipantAdmin/) | Изменены права администратора у пользователя в [обычной группе](/api/channel/#basic-groups) |
| [updateChatParticipantDelete](/constructor/updateChatParticipantDelete/) | Участник покинул [обычную группу](/api/channel/#basic-groups). |
| [updateChatParticipantRank](/constructor/updateChatParticipantRank/) | Изменился [тег »](/api/rank/) участника [обычной группы »](/api/channel/#basic-groups). |
| [updateChatParticipants](/constructor/updateChatParticipants/) | Изменился состав участников [обычной группы »](/api/channel/#basic-groups). |
| [updateChatUserTyping](/constructor/updateChatUserTyping/) | Пользователь готовит сообщение в группе: набирает текст, записывает, загружает и т. п. Это обновление действительно 6 секунд. Если в течение 6 секунд не поступит новых обновлений такого рода, следует считать, что пользователь прекратил своё действие |
| [updateConfig](/constructor/updateConfig/) | Конфигурация на стороне сервера изменилась; клиенту следует заново запросить её с помощью [help.getConfig](/method/help.getConfig/) и [help.getAppConfig](/method/help.getAppConfig/). |
| [updateContactsReset](/constructor/updateContactsReset/) | Все контакты удалены |
| [updateDcOptions](/constructor/updateDcOptions/) | Изменения в параметрах конфигурации дата-центров. |
| [updateDeleteChannelMessages](/constructor/updateDeleteChannelMessages/) | Некоторые сообщения в [супергруппе или канале](/api/channel/) были удалены |
| [updateDeleteGroupCallMessages](/constructor/updateDeleteGroupCallMessages/) | Указывает, что из [наложения сообщений во время звонка »](/api/group-calls/#in-call-messages) видеочата, трансляции или прямого эфира в историях были удалены сообщения, в том числе в режиме RTMP. |
| [updateDeleteMessages](/constructor/updateDeleteMessages/) | Сообщения были удалены. |
| [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/) | [Шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts) был удалён. Это **не** вызовет обновлений [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/), даже если этим обновлением удаляются и все сообщения шаблона. |
| [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) | Одно или несколько сообщений в [шаблоне быстрого ответа »](/api/business/#quick-reply-shortcuts) были удалены. |
| [updateDeleteScheduledMessages](/constructor/updateDeleteScheduledMessages/) | Некоторые [отложенные сообщения](/api/scheduled-messages/) были удалены (или отправлены) из очереди отложенных сообщений чата |
| [updateDialogFilter](/constructor/updateDialogFilter/) | Была добавлена новая [папка](/api/folders/) |
| [updateDialogFilterOrder](/constructor/updateDialogFilterOrder/) | Новый порядок [папок](/api/folders/) |
| [updateDialogFilters](/constructor/updateDialogFilters/) | Клиентам следует обновить сведения о [папке](/api/folders/) |
| [updateDialogPinned](/constructor/updateDialogPinned/) | Диалог был закреплён/откреплён |
| [updateDialogUnreadMark](/constructor/updateDialogUnreadMark/) | Была изменена ручная отметка о непрочитанности чата |
| [updateDraftMessage](/constructor/updateDraftMessage/) | Сообщает об изменении [черновика](/api/drafts/) сообщения. |
| [updateEditChannelMessage](/constructor/updateEditChannelMessage/) | Сообщение было отредактировано в [канале или супергруппе](/api/channel/) |
| [updateEditMessage](/constructor/updateEditMessage/) | Сообщение было отредактировано |
| [updateEmojiGameInfo](/constructor/updateEmojiGameInfo/) | Обновление игры в кости. |
| [updateEncryptedChatTyping](/constructor/updateEncryptedChatTyping/) | Собеседник набирает сообщение в секретном чате. Период обновления — 6 секунд. Если за это время повторное обновление не пришло, следует считать, что собеседник перестал набирать текст. |
| [updateEncryptedMessagesRead](/constructor/updateEncryptedMessagesRead/) | История переписки в зашифрованном чате была отмечена как прочитанная. |
| [updateEncryption](/constructor/updateEncryption/) | Изменение состояния зашифрованного чата. |
| [updateFavedStickers](/constructor/updateFavedStickers/) | Список избранных стикеров изменился, клиенту следует вызвать [messages.getFavedStickers](/method/messages.getFavedStickers/), чтобы запросить новый список |
| [updateFolderPeers](/constructor/updateFolderPeers/) | Обновлён список пиров в [папке пиров](/api/folders/#peer-folders) |
| [updateGeoLiveViewed](/constructor/updateGeoLiveViewed/) | Сообщение с геопозицией в реальном времени было просмотрено |
| [updateGroupCall](/constructor/updateGroupCall/) | Указывает, что информация о групповом звонке изменилась, см. [применение обновлений групповых звонков »](/api/group-calls/#applying-group-call-updates). |
| [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) | Содержит блоки блокчейна конференц-звонка, см. [обработку обновлений сквозного группового звонка »](/api/end-to-end/group-calls/#handling-updates). |
| [updateGroupCallConnection](/constructor/updateGroupCallConnection/) | Параметры подключения, возвращаемые после присоединения к групповому звонку, см. [презентации »](/api/group-calls/#presentations) и [режим трансляции »](/api/group-calls/#stream-mode). |
| [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/) | В конференц-звонке получено новое сообщение или эмодзи-реакция со сквозным шифрованием; о процессе расшифровки см. [здесь »](/api/end-to-end/group-calls/#receiving-and-decrypting-a-message). |
| [updateGroupCallMessage](/constructor/updateGroupCallMessage/) | Через [оверлей сообщений в звонке »](/api/group-calls/#in-call-messages) получено новое сообщение, реакция, платный комментарий или пожертвование. |
| [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) | Изменился список участников [группового звонка](/api/group-calls/#applying-group-call-updates). |
| [updateInlineBotCallbackQuery](/constructor/updateInlineBotCallbackQuery/) | Это уведомление получают боты при нажатии кнопки |
| [updateLangPack](/constructor/updateLangPack/) | Языковой пакет обновлён |
| [updateLangPackTooLong](/constructor/updateLangPackTooLong/) | Языковой пакет изменился, клиенту следует самостоятельно получить изменившиеся строки с помощью [langpack.getDifference](/method/langpack.getDifference/) |
| [updateLoginToken](/constructor/updateLoginToken/) | Токен входа (для входа по QR-коду) принят. |
| [updateManagedBot](/constructor/updateManagedBot/) | Только для [ботов-менеджеров](/api/bots/managed-bots/): бот, управляемый текущим авторизованным ботом, был создан или изменён. |
| [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) | Вы [купили платное медиа »](/api/paid-media/): это обновление содержит раскрытое медиа. |
| [updateMessageID](/constructor/updateMessageID/) | Отправленному сообщению с клиентским идентификатором **random\_id** был присвоен идентификатор. |
| [updateMessagePoll](/constructor/updateMessagePoll/) | Результаты опроса изменились |
| [updateMessagePollVote](/constructor/updateMessagePollVote/) | Конкретный пир проголосовал в опросе (это обновление может получить только бот). |
| [updateMessageReactions](/constructor/updateMessageReactions/) | Доступны новые [реакции на сообщение »](/api/reactions/) |
| [updateMonoForumNoPaidException](/constructor/updateMonoForumNoPaidException/) | Администратор освободил эту [тему монофорума »](/api/monoforum/) от платы за отправку сообщений (или отменил освобождение) с помощью [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/). |
| [updateMoveStickerSetToTop](/constructor/updateMoveStickerSetToTop/) | Набор стикеров был перемещён в начало списка, [подробнее см. здесь »](/api/stickers/#recent-stickersets) |
| [updateNewAuthorization](/constructor/updateNewAuthorization/) | В аккаунт текущего пользователя вошла новая сессия с неизвестного устройства. |
| [updateNewChannelMessage](/constructor/updateNewChannelMessage/) | В [канале или супергруппе](/api/channel/) было отправлено новое сообщение |
| [updateNewEncryptedMessage](/constructor/updateNewEncryptedMessage/) | Новое зашифрованное сообщение. |
| [updateNewMessage](/constructor/updateNewMessage/) | Новое сообщение в личном чате или в [обычной группе](/api/channel/#basic-groups). |
| [updateNewQuickReply](/constructor/updateNewQuickReply/) | Был создан новый [шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts). |
| [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/) | Сообщение добавлено в [очередь отложенных сообщений чата](/api/scheduled-messages/) |
| [updateNewStickerSet](/constructor/updateNewStickerSet/) | Установлен новый набор стикеров |
| [updateNewStoryReaction](/constructor/updateNewStoryReaction/) | Представляет новую [реакцию на историю](/api/reactions/#notifications-about-reactions). |
| [updateNotifySettings](/constructor/updateNotifySettings/) | Изменения в настройках уведомлений. |
| [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) | Содержит текущую [настройку приватности платных реакций по умолчанию, подробнее см. здесь »](/api/reactions/#paid-reactions). |
| [updatePeerBlocked](/constructor/updatePeerBlocked/) | Мы заблокировали пира; подробнее о списках заблокированных см. [здесь »](/api/block/). |
| [updatePeerHistoryTTL](/constructor/updatePeerHistoryTTL/) | Время жизни сообщений, отправляемых текущим пользователем в определённом чате, было изменено |
| [updatePeerLocated](/constructor/updatePeerLocated/) | Список ближайших пиров был обновлён |
| [updatePeerSettings](/constructor/updatePeerSettings/) | Изменились настройки определённого пира |
| [updatePeerWallpaper](/constructor/updatePeerWallpaper/) | Изменились [обои »](/api/wallpapers/) указанного пира. |
| [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/) | Кто-то подал заявку на вступление в чат или канал |
| [updatePhoneCall](/constructor/updatePhoneCall/) | Входящий телефонный звонок |
| [updatePhoneCallSignalingData](/constructor/updatePhoneCallSignalingData/) | Сигнальные данные входящего звонка |
| [updatePinnedChannelMessages](/constructor/updatePinnedChannelMessages/) | Сообщения были закреплены или откреплены в [канале или супергруппе](/api/channel/) |
| [updatePinnedDialogs](/constructor/updatePinnedDialogs/) | Закреплённые диалоги были обновлены |
| [updatePinnedForumTopic](/constructor/updatePinnedForumTopic/) | [Тема форума »](/api/forum/#forum-topics) была закреплена или откреплена. |
| [updatePinnedForumTopics](/constructor/updatePinnedForumTopics/) | Изменились [закреплённые темы](/api/forum/#forum-topics) форума. |
| [updatePinnedMessages](/constructor/updatePinnedMessages/) | Несколько сообщений были закреплены в чате |
| [updatePinnedSavedDialogs](/constructor/updatePinnedSavedDialogs/) | [Закреплённые сохранённые диалоги »](/api/saved-messages/) были обновлены |
| [updatePrivacy](/constructor/updatePrivacy/) | Правила приватности были изменены |
| [updatePtsChanged](/constructor/updatePtsChanged/) | Изменился [PTS общего ящика сообщений](/api/updates/), [состояние нужно перезапросить с помощью updates.getState](/api/updates/#fetching-state) |
| [updateQuickReplies](/constructor/updateQuickReplies/) | Изменились сведения о [шаблонах быстрых ответов »](/api/business/#quick-reply-shortcuts) или их порядок. |
| [updateQuickReplyMessage](/constructor/updateQuickReplyMessage/) | В [шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts) было добавлено новое сообщение. |
| [updateReadChannelDiscussionInbox](/constructor/updateReadChannelDiscussionInbox/) | Входящие комментарии в [обсуждении](/api/threads/) были отмечены как прочитанные |
| [updateReadChannelDiscussionOutbox](/constructor/updateReadChannelDiscussionOutbox/) | Исходящие комментарии в [ветке обсуждения](/api/threads/) были отмечены как прочитанные |
| [updateReadChannelInbox](/constructor/updateReadChannelInbox/) | Входящие сообщения в [канале или супергруппе](/api/channel/) были прочитаны |
| [updateReadChannelOutbox](/constructor/updateReadChannelOutbox/) | Исходящие сообщения в [канале/супергруппе](/api/channel/) были прочитаны |
| [updateReadFeaturedEmojiStickers](/constructor/updateReadFeaturedEmojiStickers/) | Некоторые рекомендуемые [стикеры с пользовательскими эмодзи](/api/custom-emoji/) были отмечены как прочитанные |
| [updateReadFeaturedStickers](/constructor/updateReadFeaturedStickers/) | Некоторые рекомендуемые стикеры были отмечены как прочитанные |
| [updateReadHistoryInbox](/constructor/updateReadHistoryInbox/) | Входящие сообщения были прочитаны |
| [updateReadHistoryOutbox](/constructor/updateReadHistoryOutbox/) | Исходящие сообщения были прочитаны |
| [updateReadMessagesContents](/constructor/updateReadMessagesContents/) | Содержимое сообщений в общем [ящике сообщений](/api/updates/) было прочитано (генерируется специально для таких сообщений, как голосовые сообщения или видео, только после того, как медиафайл просмотрен и отмечен как прочитанный с помощью [messages.readMessageContents](/method/messages.readMessageContents/)). |
| [updateReadMonoForumInbox](/constructor/updateReadMonoForumInbox/) | Входящие сообщения в [теме монофорума](/api/monoforum/) были прочитаны |
| [updateReadMonoForumOutbox](/constructor/updateReadMonoForumOutbox/) | Исходящие сообщения в [монофоруме](/api/monoforum/) были прочитаны. |
| [updateReadStories](/constructor/updateReadStories/) | Истории определённого пира были отмечены как прочитанные. |
| [updateRecentEmojiStatuses](/constructor/updateRecentEmojiStatuses/) | Список недавних [эмодзи-статусов](/api/emoji-status/) изменился |
| [updateRecentReactions](/constructor/updateRecentReactions/) | Список недавних [реакций на сообщения](/api/reactions/) изменился |
| [updateRecentStickers](/constructor/updateRecentStickers/) | Список недавних стикеров был обновлён |
| [updates.channelDifference](/constructor/updates.channelDifference/) | Новые обновления |
| [updates.channelDifferenceEmpty](/constructor/updates.channelDifferenceEmpty/) | Новых обновлений нет |
| [updates.channelDifferenceTooLong](/constructor/updates.channelDifferenceTooLong/) | Переданное значение `pts` слишком старое: одно или несколько обновлений, начиная с указанного PTS, были удалены из ящика сообщений этого канала. |
| [updates.difference](/constructor/updates.difference/) | Полный список произошедших событий. |
| [updates.differenceEmpty](/constructor/updates.differenceEmpty/) | Событий нет. |
| [updates.differenceSlice](/constructor/updates.differenceSlice/) | Неполный список произошедших событий. |
| [updates.differenceTooLong](/constructor/updates.differenceTooLong/) | Разница [слишком велика](/api/updates/#recovering-gaps), и для повторного получения обновлений следует использовать указанное состояние. |
| [updates](/constructor/updates/) | Полный конструктор обновлений |
| [updates.state](/constructor/updates.state/) | Состояние обновлений. |
| [updateSavedDialogPinned](/constructor/updateSavedDialogPinned/) | [Диалог в сохранённых сообщениях](/api/saved-messages/) был закреплён или откреплён |
| [updateSavedGifs](/constructor/updateSavedGifs/) | Список сохранённых GIF изменился, клиенту следует запросить его заново с помощью [messages.getSavedGifs](/method/messages.getSavedGifs/) |
| [updateSavedReactionTags](/constructor/updateSavedReactionTags/) | Список имён [тегов-реакций »](/api/saved-messages/#tags), назначенных пользователем, изменился, и его следует запросить заново с помощью [messages.getSavedReactionTags »](/method/messages.getSavedReactionTags/). |
| [updateSavedRingtones](/constructor/updateSavedRingtones/) | Список сохранённых звуков уведомлений изменился; используйте [account.getSavedRingtones](/method/account.getSavedRingtones/), чтобы получить новый список. |
| [updatesCombined](/constructor/updatesCombined/) | Конструктор для группы обновлений. |
| [updateSentPhoneCode](/constructor/updateSentPhoneCode/) | Платный SMS-код входа успешно отправлен. |
| [updateSentStoryReaction](/constructor/updateSentStoryReaction/) | Указывает, что мы [отреагировали на историю »](/api/stories/#reactions). |
| [updateServiceNotification](/constructor/updateServiceNotification/) | Сервисное сообщение для пользователя. |
| [updateShort](/constructor/updateShort/) | Сокращённый конструктор со сведениями об одном обновлении, не требующем вспомогательных данных |
| [updateShortChatMessage](/constructor/updateShortChatMessage/) | Сокращённый конструктор со сведениями об одном новом входящем текстовом сообщении из чата |
| [updateShortMessage](/constructor/updateShortMessage/) | Информация о сообщении, отправленном другому пользователю (или полученном от него) |
| [updateShortSentMessage](/constructor/updateShortSentMessage/) | Сокращённый конструктор со сведениями об одном исходящем сообщении контакту (чат назначения нужно определить по вызову метода, вернувшему этот объект). |
| [updateSmsJob](/constructor/updateSmsJob/) | Получено новое задание на отправку SMS |
| [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) | Содержит обновления [состояния аукциона; подробнее о том, как включить эти обновления, см. здесь »](/api/auctions/). |
| [updateStarGiftAuctionUserState](/constructor/updateStarGiftAuctionUserState/) | Содержит обновления [состояния аукциона, относящиеся к текущему пользователю; подробнее о том, как включить эти обновления, см. здесь »](/api/auctions/). |
| [updateStarGiftCraftFail](/constructor/updateStarGiftCraftFail/) | Указывает, что попытка [создания »](/api/gifts/#crafting-collectible-gifts) не привела к появлению нового коллекционного подарка. |
| [updateStarsBalance](/constructor/updateStarsBalance/) | Изменился [баланс Telegram Stars »](/api/stars/) текущей учётной записи. |
| [updateStarsRevenueStatus](/constructor/updateStarsRevenueStatus/) | [Баланс Telegram Stars канала или бота, которым мы владеем, изменился »](/api/stars/#revenue-statistics). |
| [updateStickerSets](/constructor/updateStickerSets/) | Установленные наборы стикеров изменились, клиенту следует запросить их заново, как [описано в документации](/api/stickers/#installing-stickersets). |
| [updateStickerSetsOrder](/constructor/updateStickerSetsOrder/) | Порядок наборов стикеров был изменён |
| [updatesTooLong](/constructor/updatesTooLong/) | Количество обновлений в очереди общего ящика сообщений слишком велико, чтобы доставить их пассивно через сокет; вызовите [updates.getDifference](/method/updates.getDifference/), чтобы получить разницу, как описано в [документации »](/api/updates/). |
| [updateStoriesStealthMode](/constructor/updateStoriesStealthMode/) | Указывает, что был включён [скрытый режим историй](/api/stories/#stealth-mode). |
| [updateStory](/constructor/updateStory/) | Опубликована новая история. |
| [updateStoryID](/constructor/updateStoryID/) | История успешно загружена. |
| [updateTheme](/constructor/updateTheme/) | Облачная тема была обновлена |
| [updateTranscribedAudio](/constructor/updateTranscribedAudio/) | Обновилась ожидающая [расшифровка голосового сообщения »](/api/transcribe/), запущенная методом [messages.transcribeAudio](/method/messages.transcribeAudio/). |
| [updateUser](/constructor/updateUser/) | Информация о пользователе ([user](/constructor/user/) и/или [userFull](/constructor/userFull/)) была обновлена. |
| [updateUserEmojiStatus](/constructor/updateUserEmojiStatus/) | Изменился [эмодзи-статус](/api/emoji-status/) определённого пользователя |
| [updateUserName](/constructor/updateUserName/) | Изменяет имя, фамилию и имя пользователя. |
| [updateUserPhone](/constructor/updateUserPhone/) | Номер телефона пользователя изменился |
| [updateUserStatus](/constructor/updateUserStatus/) | Обновление статуса контакта. |
| [updateUserTyping](/constructor/updateUserTyping/) | Пользователь готовит сообщение: набирает текст, записывает, загружает и т. п. Это обновление действительно 6 секунд. Если в течение 6 секунд не поступит новых обновлений такого рода, следует считать, что пользователь прекратил своё действие |
| [updateWebPage](/constructor/updateWebPage/) | Был сформирован предпросмотр веб-страницы [instant view](https://instantview.telegram.org) |
| [updateWebViewResultSent](/constructor/updateWebViewResultSent/) | Сообщает боту, что веб-представление было закрыто и от имени пользователя было отправлено инлайн-сообщение с помощью [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/) |
| [upload.cdnFile](/constructor/upload.cdnFile/) | Представляет фрагмент файла [CDN](https://core.telegram.org/cdn). |
| [upload.cdnFileReuploadNeeded](/constructor/upload.cdnFileReuploadNeeded/) | Файл был удалён из временного кеша в оперативной памяти [CDN](https://core.telegram.org/cdn), и его необходимо загрузить повторно. |
| [upload.file](/constructor/upload.file/) | Содержимое файла. |
| [upload.fileCdnRedirect](/constructor/upload.fileCdnRedirect/) | Файл должен быть скачан из [CDN DC](https://core.telegram.org/cdn). |
| [upload.webFile](/constructor/upload.webFile/) | Представляет фрагмент [веб-файла HTTP](/api/files/), загружаемого через защищённые серверы MTProto Telegram |
| [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) | Сведения о принятом запросе авторизации; подробнее [см. здесь »](/api/url-authorization/) |
| [urlAuthResultDefault](/constructor/urlAuthResultDefault/) | Сведения о принятом запросе авторизации; подробнее [см. здесь »](/api/url-authorization/) |
| [urlAuthResultRequest](/constructor/urlAuthResultRequest/) | Сведения о запросе авторизации; подробнее [см. здесь »](/api/url-authorization/) |
| [user](/constructor/user/) | Содержит сведения об определённом пользователе. |
| [userEmpty](/constructor/userEmpty/) | Пустой конструктор, несуществующий пользователь. |
| [userFull](/constructor/userFull/) | Расширенные сведения о пользователе |
| [username](/constructor/username/) | Содержит информацию об имени пользователя. |
| [userProfilePhoto](/constructor/userProfilePhoto/) | Фотография профиля пользователя. |
| [userProfilePhotoEmpty](/constructor/userProfilePhotoEmpty/) | Фотография профиля не установлена или скрыта. |
| [users.savedMusic](/constructor/users.savedMusic/) | Список композиций, закреплённых сейчас в профиле пользователя; подробнее см. [здесь »](/api/profile/#music). |
| [users.savedMusicNotModified](/constructor/users.savedMusicNotModified/) | Это подмножество композиций, закреплённых в профиле пользователя, не изменилось; подробнее см. [здесь »](/api/profile/#music). |
| [users.userFull](/constructor/users.userFull/) | Полная информация о пользователе |
| [users.users](/constructor/users.users/) | Описывает список пользователей (или ботов). |
| [users.usersSlice](/constructor/users.usersSlice/) | Описывает частичный список пользователей. |
| [userStatusEmpty](/constructor/userStatusEmpty/) | Статус пользователя ещё не установлен. |
| [userStatusLastMonth](/constructor/userStatusLastMonth/) | Статус в сети: последний раз в сети в прошлом месяце |
| [userStatusLastWeek](/constructor/userStatusLastWeek/) | Статус в сети: последний раз в сети на прошлой неделе |
| [userStatusOffline](/constructor/userStatusOffline/) | Статус пользователя «не в сети». |
| [userStatusOnline](/constructor/userStatusOnline/) | Статус пользователя в сети. |
| [userStatusRecently](/constructor/userStatusRecently/) | Статус в сети: недавно был в сети |
| [vector](/constructor/vector/) | Универсальный конструктор вектора. |
| [videoSize](/constructor/videoSize/) | [Анимированная фотография профиля](/api/files/#animated-profile-pictures) в формате MPEG4 |
| [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/) | [Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера пользовательского эмодзи](/api/custom-emoji/). |
| [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/) | [Анимированная фотография профиля](/api/files/#animated-profile-pictures) на основе [стикера](/api/stickers/). |
| [wallPaper](/constructor/wallPaper/) | Представляет [обои](/api/wallpapers/) на основе изображения. |
| [wallPaperNoFile](/constructor/wallPaperNoFile/) | Представляет [обои](/api/wallpapers/), построенные только на цветах или градиентах. |
| [wallPaperSettings](/constructor/wallPaperSettings/) | Сведения об отрисовке [обоев](/api/wallpapers/). |
| [webAuthorization](/constructor/webAuthorization/) | Представляет бота, авторизованного через [виджет входа Telegram](https://core.telegram.org/widgets/login) |
| [webDocument](/constructor/webDocument/) | Удалённый документ |
| [webDocumentNoProxy](/constructor/webDocumentNoProxy/) | Удалённый документ, который можно скачать без [проксирования через telegram](/api/files/) |
| [webPage](/constructor/webPage/) | Предпросмотр веб-страницы |
| [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/) | [Атрибут веб-страницы](/type/WebPageAttribute/), прикреплённый к [webPage](/constructor/webPage/) типа `telegram_aicomposetone`; создаётся при предпросмотре [тона ИИ-редактора »](/api/ai/#ai-compose-tones), которым поделились через [ссылку на тон ИИ-редактора »](/api/links/#ai-compose-tone-links). |
| [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) | Содержит информацию об [аукционе коллекционного подарка »](/api/auctions/) для предпросмотра [webPage](/constructor/webPage/) [аукциона »](/api/auctions/) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_auction`). |
| [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) | Содержит информацию о [коллекции подарков »](/api/gifts/#gift-collections) для предпросмотра [webPage](/constructor/webPage/) [коллекции подарков »](/api/gifts/#gift-collections) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_collection`). |
| [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/) | Содержит информацию о [наборе стикеров »](/api/stickers/) для предпросмотра [webPage](/constructor/webPage/) [глубокой ссылки на набор стикеров »](/api/links/#stickerset-links) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_stickerset`). |
| [webPageAttributeStory](/constructor/webPageAttributeStory/) | Предпросмотр веб-страницы для истории Telegram |
| [webPageAttributeTheme](/constructor/webPageAttributeTheme/) | Тема оформления страницы |
| [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) | Содержит информацию о [коллекционном подарке »](/api/gifts/#collectible-gifts) для предпросмотра [webPage](/constructor/webPage/) [коллекционного подарка »](/api/gifts/#collectible-gifts) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_nft`). |
| [webPageEmpty](/constructor/webPageEmpty/) | Предпросмотр для этой веб-страницы недоступен |
| [webPageNotModified](/constructor/webPageNotModified/) | Предпросмотр веб-страницы не изменился |
| [webPagePending](/constructor/webPagePending/) | Предпросмотр веб-страницы сейчас создаётся |
| [webViewMessageSent](/constructor/webViewMessageSent/) | Информация об отправленном инлайн-сообщении с веб-представлением |
| [webViewResultUrl](/constructor/webViewResultUrl/) | Содержит URL веб-представления с добавленными параметрами оформления и сведениями о пользователе |
