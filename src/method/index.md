---
title: "Методы — справочник схемы TL"
original: "https://core.telegram.org/schema"
section: ref
description: "Алфавитный указатель всех 787 методов схемы TL Telegram с кратким описанием каждого."
layout: layout.njk
---

# Методы

Все методы схемы TL (787). Имена ведут на страницы с полным определением, параметрами, результатом и возможными ошибками.

| Название | Описание |
|---|---|
| [account.acceptAuthorization](/method/account.acceptAuthorization/) | Отправляет форму авторизации Telegram Passport, тем самым передавая данные сервису |
| [account.addNoPaidMessagesException](/method/account.addNoPaidMessagesException/) | Разрешить пользователю отправлять нам сообщения без оплаты, если включены [платные сообщения »](/api/paid-messages/). |
| [account.cancelPasswordEmail](/method/account.cancelPasswordEmail/) | Отменить код, отправленный для подтверждения адреса электронной почты, используемого как [способ восстановления 2FA](/api/srp/). |
| [account.changeAuthorizationSettings](/method/account.changeAuthorizationSettings/) | Изменить настройки, связанные с сессией. |
| [account.changePhone](/method/account.changePhone/) | Изменить номер телефона текущего аккаунта |
| [account.checkUsername](/method/account.checkUsername/) | Проверяет корректность имени пользователя и его доступность. |
| [account.clearRecentEmojiStatuses](/method/account.clearRecentEmojiStatuses/) | Очищает список недавно использованных [эмодзи-статусов](/api/emoji-status/) |
| [account.confirmPasswordEmail](/method/account.confirmPasswordEmail/) | Подтвердить адрес электронной почты для использования в качестве [способа восстановления двухфакторной аутентификации](/api/srp/). |
| [account.confirmPhone](/method/account.confirmPhone/) | Подтвердить номер телефона, чтобы отменить удаление аккаунта; подробнее [см. здесь »](/api/account-deletion/) |
| [account.createBusinessChatLink](/method/account.createBusinessChatLink/) | Создать [глубокую ссылку на бизнес-чат »](/api/business/#business-chat-links). |
| [account.createTheme](/method/account.createTheme/) | Создать тему оформления |
| [account.declinePasswordReset](/method/account.declinePasswordReset/) | Отменить незавершённый сброс пароля двухфакторной аутентификации, [подробнее см. здесь »](/api/srp/#password-reset) |
| [account.deleteAccount](/method/account.deleteAccount/) | Удалить аккаунт пользователя с серверов Telegram. |
| [account.deleteAutoSaveExceptions](/method/account.deleteAutoSaveExceptions/) | Удалить все настройки автосохранения для отдельных пиров. |
| [account.deleteBusinessChatLink](/method/account.deleteBusinessChatLink/) | Удалить [глубокую ссылку на бизнес-чат »](/api/business/#business-chat-links). |
| [account.deletePasskey](/method/account.deletePasskey/) | Удалить ключ доступа, привязанный к текущему аккаунту; подробнее см. [здесь »](/api/passkeys/#delete-passkeys). |
| [account.deleteSecureValue](/method/account.deleteSecureValue/) | Удалить сохранённые документы [Telegram Passport](https://core.telegram.org/passport), [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption) |
| [account.disablePeerConnectedBot](/method/account.disablePeerConnectedBot/) | Безвозвратно отключить конкретный чат от всех [бизнес-ботов »](/api/bots/connected-business-bots/) (равнозначно указанию его в `recipients.exclude_users` при первоначальной настройке через [account.updateConnectedBot »](/method/account.updateConnectedBot/)); чтобы снова подключить чат, отключённый этим методом, пользователь обязан заново подключить бота целиком, вызвав [account.updateConnectedBot »](/method/account.updateConnectedBot/). |
| [account.editBusinessChatLink](/method/account.editBusinessChatLink/) | Изменить созданную [глубокую ссылку на бизнес-чат »](/api/business/#business-chat-links). |
| [account.finishTakeoutSession](/method/account.finishTakeoutSession/) | Завершить [сессию выгрузки данных, подробнее см. здесь »](/api/takeout/). |
| [account.getAccountTTL](/method/account.getAccountTTL/) | Получить срок жизни аккаунта в днях |
| [account.getAllSecureValues](/method/account.getAllSecureValues/) | Получить все сохранённые документы [Telegram Passport](https://core.telegram.org/passport), [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption) |
| [account.getAuthorizationForm](/method/account.getAuthorizationForm/) | Возвращает форму авторизации Telegram Passport для передачи данных сервису |
| [account.getAuthorizations](/method/account.getAuthorizations/) | Получить список активных сессий |
| [account.getAutoDownloadSettings](/method/account.getAutoDownloadSettings/) | Получить настройки автозагрузки медиафайлов |
| [account.getAutoSaveSettings](/method/account.getAutoSaveSettings/) | Получить настройки автосохранения |
| [account.getBotBusinessConnection](/method/account.getBotBusinessConnection/) | Боты могут вызывать этот метод, чтобы заново получить конструктор [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/), связанный с конкретным [бизнес-подключением `connection_id`, подробнее о подключённых бизнес-ботах см. здесь »](/api/bots/connected-business-bots/). |
| [account.getBusinessChatLinks](/method/account.getBusinessChatLinks/) | Перечислить все созданные [глубокие ссылки на бизнес-чат »](/api/business/#business-chat-links). |
| [account.getChannelDefaultEmojiStatuses](/method/account.getChannelDefaultEmojiStatuses/) | Получить список предлагаемых по умолчанию [эмодзи-статусов канала](/api/emoji-status/). |
| [account.getChannelRestrictedStatusEmojis](/method/account.getChannelRestrictedStatusEmojis/) | Возвращает полный список [идентификаторов пользовательских эмодзи »](/api/custom-emoji/), которые нельзя использовать в [эмодзи-статусах каналов »](/api/emoji-status/). |
| [account.getChatThemes](/method/account.getChatThemes/) | Получить все доступные [темы оформления чатов »](/api/themes/). |
| [account.getCollectibleEmojiStatuses](/method/account.getCollectibleEmojiStatuses/) | Получить список [эмодзи-статусов »](/api/emoji-status/) для принадлежащих вам или [размещённых коллекционных подарков »](/api/gifts/#hosted-collectible-gifts). |
| [account.getConnectedBots](/method/account.getConnectedBots/) | Перечислить все подключённые в данный момент [бизнес-боты »](/api/bots/connected-business-bots/) |
| [account.getContactSignUpNotification](/method/account.getContactSignUpNotification/) | Будет ли пользователь получать уведомления о регистрации контактов |
| [account.getContentSettings](/method/account.getContentSettings/) | Получить настройки материалов деликатного характера |
| [account.getDefaultBackgroundEmojis](/method/account.getDefaultBackgroundEmojis/) | Получить набор рекомендуемых [стикеров пользовательских эмодзи](/api/custom-emoji/), которые можно использовать в [узоре акцентного цвета](/api/colors/). |
| [account.getDefaultEmojiStatuses](/method/account.getDefaultEmojiStatuses/) | Получить список предлагаемых по умолчанию [эмодзи-статусов](/api/emoji-status/) |
| [account.getDefaultGroupPhotoEmojis](/method/account.getDefaultGroupPhotoEmojis/) | Получить набор рекомендуемых [стикеров пользовательских эмодзи](/api/custom-emoji/), которые можно [использовать в качестве изображения группы](/api/files/#sticker-profile-pictures) |
| [account.getDefaultProfilePhotoEmojis](/method/account.getDefaultProfilePhotoEmojis/) | Получить набор рекомендуемых [стикеров пользовательских эмодзи](/api/custom-emoji/), которые можно [использовать в качестве фотографии профиля](/api/files/#sticker-profile-pictures) |
| [account.getGlobalPrivacySettings](/method/account.getGlobalPrivacySettings/) | Получить глобальные настройки приватности |
| [account.getMultiWallPapers](/method/account.getMultiWallPapers/) | Получить информацию о нескольких [обоях](/api/wallpapers/) |
| [account.getNotifyExceptions](/method/account.getNotifyExceptions/) | Возвращает список чатов с настройками уведомлений, отличными от стандартных |
| [account.getNotifySettings](/method/account.getNotifySettings/) | Возвращает текущие настройки уведомлений для заданного пользователя или группы либо для всех пользователей или всех групп. |
| [account.getPaidMessagesRevenue](/method/account.getPaidMessagesRevenue/) | Получить количество звёзд, полученных нами от указанного пользователя благодаря [платным сообщениям »](/api/paid-messages/); полученная сумма равна отправленной сумме, умноженной на [stars\_paid\_message\_commission\_permille](/api/config/#stars-paid-message-commission-permille) и делённой на 1000. |
| [account.getPasskeys](/method/account.getPasskeys/) | Получить список ключей доступа, привязанных к текущему аккаунту и пригодных для входа; подробнее о ключах доступа [см. здесь »](/api/passkeys/#list-passkeys). |
| [account.getPassword](/method/account.getPassword/) | Получить настройки двухфакторной авторизации с паролем |
| [account.getPasswordSettings](/method/account.getPasswordSettings/) | Получить личные данные, связанные с настройками пароля (резервный адрес электронной почты, данные telegram [passport](https://core.telegram.org/passport) и т. д.) |
| [account.getPrivacy](/method/account.getPrivacy/) | Получить настройки приватности текущего аккаунта |
| [account.getReactionsNotifySettings](/method/account.getReactionsNotifySettings/) | Получить текущие [настройки уведомлений о реакциях »](/api/reactions/#notifications-about-reactions). |
| [account.getRecentEmojiStatuses](/method/account.getRecentEmojiStatuses/) | Получить недавно использованные [эмодзи-статусы](/api/emoji-status/) |
| [account.getSavedMusicIds](/method/account.getSavedMusicIds/) | Получить полный список, содержащий только идентификаторы [композиций, добавленных в профиль в данный момент; подробнее см. здесь »](/api/profile/#music). |
| [account.getSavedRingtones](/method/account.getSavedRingtones/) | Получить сохранённые звуки уведомлений |
| [account.getSecureValue](/method/account.getSecureValue/) | Получить сохранённый документ [Telegram Passport](https://core.telegram.org/passport), [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption) |
| [account.getTheme](/method/account.getTheme/) | Получить информацию о теме оформления |
| [account.getThemes](/method/account.getThemes/) | Получить установленные темы оформления |
| [account.getTmpPassword](/method/account.getTmpPassword/) | Получить временный платёжный пароль |
| [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/) | Получить все [темы оформления чатов »](/api/themes/#chat-themes), связанные с принадлежащими вам или [размещёнными коллекционными подарками »](/api/gifts/#hosted-collectible-gifts). |
| [account.getWallPaper](/method/account.getWallPaper/) | Получить информацию об определённых [обоях](/api/wallpapers/) |
| [account.getWallPapers](/method/account.getWallPapers/) | Возвращает список доступных [обоев](/api/wallpapers/). |
| [account.getWebAuthorizations](/method/account.getWebAuthorizations/) | Получить авторизации через веб-[виджет входа](https://core.telegram.org/widgets/login) |
| [account.initPasskeyRegistration](/method/account.initPasskeyRegistration/) | Начать регистрацию ключа доступа для текущего аккаунта; подробнее о полном процессе см. [здесь »](/api/passkeys/#creating-a-passkey). |
| [account.initTakeoutSession](/method/account.initTakeoutSession/) | Инициализировать [сессию выгрузки данных, подробнее см. здесь »](/api/takeout/). |
| [account.installTheme](/method/account.installTheme/) | Установить тему оформления |
| [account.installWallPaper](/method/account.installWallPaper/) | Установить [обои](/api/wallpapers/) |
| [account.invalidateSignInCodes](/method/account.invalidateSignInCodes/) | Аннулировать указанные коды входа; подробнее см. [здесь »](/api/auth/#invalidating-login-codes). |
| [account.registerDevice](/method/account.registerDevice/) | Зарегистрировать устройство для получения [PUSH-уведомлений](/api/push-updates/) |
| [account.registerPasskey](/method/account.registerPasskey/) | Завершить регистрацию ключа доступа для текущего аккаунта; подробнее о полном порядке действий см. [здесь »](/api/passkeys/#creating-a-passkey). |
| [account.reorderUsernames](/method/account.reorderUsernames/) | Изменить порядок имён пользователя, связанных с текущим авторизованным пользователем. |
| [account.reportPeer](/method/account.reportPeer/) | Пожаловаться на пира за нарушение условий использования Telegram |
| [account.reportProfilePhoto](/method/account.reportProfilePhoto/) | Пожаловаться на фотографию профиля диалога |
| [account.resendPasswordEmail](/method/account.resendPasswordEmail/) | Повторно отправить код для подтверждения адреса электронной почты, используемого как [способ восстановления 2FA](/api/srp/). |
| [account.resetAuthorization](/method/account.resetAuthorization/) | Завершить активную [авторизованную сессию](/api/auth/) по её хешу |
| [account.resetNotifySettings](/method/account.resetNotifySettings/) | Сбрасывает все настройки уведомлений от пользователей и групп. |
| [account.resetPassword](/method/account.resetPassword/) | Начать сброс пароля двухфакторной аутентификации: может использоваться, только если пользователь уже вошёл в аккаунт, [подробнее см. здесь »](/api/srp/#password-reset) |
| [account.resetWallPapers](/method/account.resetWallPapers/) | Удалить все установленные [обои](/api/wallpapers/), вернувшись к стандартному набору обоев. |
| [account.resetWebAuthorization](/method/account.resetWebAuthorization/) | Завершить активную веб-сессию [telegram login](https://core.telegram.org/widgets/login) |
| [account.resetWebAuthorizations](/method/account.resetWebAuthorizations/) | Завершить все активные веб-сессии [telegram login](https://core.telegram.org/widgets/login) |
| [account.resolveBusinessChatLink](/method/account.resolveBusinessChatLink/) | Разрешить [глубокую ссылку на бизнес-чат »](/api/business/#business-chat-links). |
| [account.saveAutoDownloadSettings](/method/account.saveAutoDownloadSettings/) | Изменить настройки автозагрузки медиафайлов |
| [account.saveAutoSaveSettings](/method/account.saveAutoSaveSettings/) | Изменить настройки автосохранения |
| [account.saveMusic](/method/account.saveMusic/) | Добавляет или удаляет композицию из профиля текущего пользователя; подробнее о вкладке с музыкой на странице профиля [см. здесь »](/api/profile/#music). |
| [account.saveRingtone](/method/account.saveRingtone/) | Сохранить или удалить сохранённый звук уведомления. |
| [account.saveSecureValue](/method/account.saveSecureValue/) | Безопасно сохранить документ [Telegram Passport](https://core.telegram.org/passport), [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption) |
| [account.saveTheme](/method/account.saveTheme/) | Сохранить тему оформления |
| [account.saveWallPaper](/method/account.saveWallPaper/) | Установить или удалить [обои](/api/wallpapers/) |
| [account.sendChangePhoneCode](/method/account.sendChangePhoneCode/) | Подтвердить новый номер телефона для привязки к текущему аккаунту |
| [account.sendConfirmPhoneCode](/method/account.sendConfirmPhoneCode/) | Отправить код подтверждения для отмены удаления аккаунта; подробнее [см. здесь »](/api/account-deletion/) |
| [account.sendVerifyEmailCode](/method/account.sendVerifyEmailCode/) | Отправить код подтверждения по электронной почте. |
| [account.sendVerifyPhoneCode](/method/account.sendVerifyPhoneCode/) | Отправить код подтверждения по телефону для Telegram [Passport](https://core.telegram.org/passport). |
| [account.setAccountTTL](/method/account.setAccountTTL/) | Задать срок самоуничтожения аккаунта |
| [account.setAuthorizationTTL](/method/account.setAuthorizationTTL/) | Задать время жизни текущей сессии |
| [account.setContactSignUpNotification](/method/account.setContactSignUpNotification/) | Включить или отключить уведомления о регистрации контактов |
| [account.setContentSettings](/method/account.setContentSettings/) | Задать настройки материалов деликатного характера (для показа или скрытия контента NSFW) |
| [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/) | Задать глобальные настройки приватности |
| [account.setMainProfileTab](/method/account.setMainProfileTab/) | Изменяет основную вкладку профиля текущего пользователя, подробнее [здесь »](/api/profile/#tabs). |
| [account.setPrivacy](/method/account.setPrivacy/) | Изменить настройки приватности текущего аккаунта |
| [account.setReactionsNotifySettings](/method/account.setReactionsNotifySettings/) | Изменить [настройки уведомлений о реакциях »](/api/reactions/#notifications-about-reactions). |
| [account.toggleConnectedBotPaused](/method/account.toggleConnectedBotPaused/) | Приостановить или возобновить конкретный чат, временно отключив его от всех [бизнес-ботов »](/api/bots/connected-business-bots/). |
| [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/) | Разрешить пользователю отправлять нам сообщения без оплаты, если включены [платные сообщения »](/api/paid-messages/). |
| [account.toggleSponsoredMessages](/method/account.toggleSponsoredMessages/) | Отключить или снова включить рекламу Telegram для текущего аккаунта [Premium](/api/premium/). |
| [account.toggleUsername](/method/account.toggleUsername/) | Активировать или деактивировать купленное на [fragment.com](https://fragment.com) имя пользователя, связанное с текущим авторизованным пользователем. |
| [account.unregisterDevice](/method/account.unregisterDevice/) | Удаляет устройство по его токену и прекращает отправку на него PUSH-уведомлений. |
| [account.updateBirthday](/method/account.updateBirthday/) | Обновить нашу дату рождения, [подробнее см. здесь »](/api/profile/#birthday). |
| [account.updateBusinessAwayMessage](/method/account.updateBusinessAwayMessage/) | Задать список [сообщений об отсутствии Telegram Business](/api/business/#away-messages). |
| [account.updateBusinessGreetingMessage](/method/account.updateBusinessGreetingMessage/) | Задать список [приветственных сообщений Telegram Business](/api/business/#greeting-messages). |
| [account.updateBusinessIntro](/method/account.updateBusinessIntro/) | Задать или удалить [приветствие Telegram Business »](/api/business/#business-introduction). |
| [account.updateBusinessLocation](/method/account.updateBusinessLocation/) | [Бизнес-аккаунты »](/api/business/#location) могут указывать своё местоположение с помощью этого метода, подробнее см. [здесь »](/api/business/#location). |
| [account.updateBusinessWorkHours](/method/account.updateBusinessWorkHours/) | Задать [часы работы Telegram Business](/api/business/#opening-hours). |
| [account.updateColor](/method/account.updateColor/) | Обновить [акцентный цвет и фоновый пользовательский эмодзи »](/api/colors/) текущей учётной записи. |
| [account.updateConnectedBot](/method/account.updateConnectedBot/) | Подключить [бизнес-бота »](/api/bots/connected-business-bots/) к текущему аккаунту либо изменить текущие настройки подключения. |
| [account.updateDeviceLocked](/method/account.updateDeviceLocked/) | Если на стороне клиента включена блокировка кодом-паролем, тексты сообщений не будут показываться во входящих [PUSH-уведомлениях](/api/push-updates/). |
| [account.updateEmojiStatus](/method/account.updateEmojiStatus/) | Установить [эмодзи-статус](/api/emoji-status/) |
| [account.updateNotifySettings](/method/account.updateNotifySettings/) | Изменяет настройки уведомлений для заданного пользователя или группы, для всех пользователей или всех групп. |
| [account.updatePasswordSettings](/method/account.updatePasswordSettings/) | Задать новый пароль двухфакторной аутентификации |
| [account.updatePersonalChannel](/method/account.updatePersonalChannel/) | Привязать (или отвязать) личный [канал »](/api/channel/), который будет показан на нашей личной [странице профиля »](/api/profile/#personal-channel). |
| [account.updateProfile](/method/account.updateProfile/) | Обновляет профиль пользователя. |
| [account.updateStatus](/method/account.updateStatus/) | Обновляет статус присутствия пользователя в сети. |
| [account.updateTheme](/method/account.updateTheme/) | Обновить тему оформления |
| [account.updateUsername](/method/account.updateUsername/) | Изменяет имя пользователя текущего аккаунта. |
| [account.uploadRingtone](/method/account.uploadRingtone/) | Загрузить звук уведомления; для его преобразования и добавления в список сохранённых звуков уведомлений используйте [account.saveRingtone](/method/account.saveRingtone/). |
| [account.uploadTheme](/method/account.uploadTheme/) | Загрузить тему оформления |
| [account.uploadWallPaper](/method/account.uploadWallPaper/) | Создать и загрузить новые [обои](/api/wallpapers/) |
| [account.verifyEmail](/method/account.verifyEmail/) | Подтвердить адрес электронной почты. |
| [account.verifyPhone](/method/account.verifyPhone/) | Подтвердить номер телефона для [passport](https://core.telegram.org/passport) в Telegram. |
| [aicompose.createTone](/method/aicompose.createTone/) | Создать новую пользовательскую [тональность AI-редактора »](/api/ai/#ai-compose-tones). |
| [aicompose.deleteTone](/method/aicompose.deleteTone/) | Безвозвратно удалить пользовательский [тон AI-редактора »](/api/ai/#ai-compose-tones), созданный текущим пользователем. |
| [aicompose.getTone](/method/aicompose.getTone/) | Получить сведения об одном [тоне ИИ-редактора »](/api/ai/#ai-compose-tones), например чтобы разрешить общедоступную ссылку на тон. |
| [aicompose.getToneExample](/method/aicompose.getToneExample/) | Получить пример того, как [тон ИИ-редактора »](/api/ai/#ai-compose-tones) перефразирует образец сообщения; используется для предпросмотра в списке выбора тона. |
| [aicompose.getTones](/method/aicompose.getTones/) | Получить список сохранённых [тонов ИИ-редактора »](/api/ai/#ai-compose-tones) текущего пользователя. |
| [aicompose.saveTone](/method/aicompose.saveTone/) | Установить или удалить [тон ИИ-редактора »](/api/ai/#ai-compose-tones), добавив его в список сохранённых тонов текущего пользователя или удалив из него. |
| [aicompose.updateTone](/method/aicompose.updateTone/) | Изменить пользовательский [тон ИИ-редактора »](/api/ai/#ai-compose-tones), ранее созданный текущим пользователем. Будут изменены только те поля, для которых установлен флаг. |
| [auth.acceptLoginToken](/method/auth.acceptLoginToken/) | Принять токен входа по QR-коду, выполнив вход в приложении, которое его сгенерировало. |
| [auth.bindTempAuthKey](/method/auth.bindTempAuthKey/) | Привязывает временный авторизационный ключ `temp_auth_key_id` к постоянному авторизационному ключу `perm_auth_key_id`. |
| [auth.cancelCode](/method/auth.cancelCode/) | Отменить код подтверждения входа |
| [auth.checkPaidAuth](/method/auth.checkPaidAuth/) | Проверяет состояние [платежа за вход](/api/auth/#paid-auth). |
| [auth.checkPassword](/method/auth.checkPassword/) | Попытаться войти в аккаунт, защищённый [паролем двухфакторной аутентификации](/api/srp/). |
| [auth.checkRecoveryPassword](/method/auth.checkRecoveryPassword/) | Проверить, действителен ли [код восстановления двухфакторной аутентификации](/api/srp/), отправленный методом [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/), прежде чем передавать его в [auth.recoverPassword](/method/auth.recoverPassword/). |
| [auth.dropTempAuthKeys](/method/auth.dropTempAuthKeys/) | Удалить все временные авторизационные ключи, **кроме** указанных |
| [auth.exportAuthorization](/method/auth.exportAuthorization/) | Возвращает данные для копирования авторизации в другой дата-центр. |
| [auth.exportLoginToken](/method/auth.exportLoginToken/) | Сгенерировать токен входа для [входа по QR-коду](/api/qr-login/). |
| [auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) | Завершить вход по ключу доступа через неавторизованное подключение; подробнее см. [здесь »](/api/passkeys/#logging-in-with-a-passkey). |
| [auth.importAuthorization](/method/auth.importAuthorization/) | Выполняет вход пользователя с помощью ключа, переданного из его родного дата-центра. |
| [auth.importBotAuthorization](/method/auth.importBotAuthorization/) | Вход как бот |
| [auth.importLoginToken](/method/auth.importLoginToken/) | Вход с использованием перенаправленного токена входа, который формируется при несовпадении DC во время [входа по QR-коду](/api/qr-login/). |
| [auth.importWebTokenAuthorization](/method/auth.importWebTokenAuthorization/) | Вход путём импорта токена авторизации |
| [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/) | Начать вход по ключу доступа через неавторизованное подключение; подробнее см. [здесь »](/api/passkeys/#logging-in-with-a-passkey). |
| [auth.logOut](/method/auth.logOut/) | Выполняет выход пользователя. |
| [auth.recoverPassword](/method/auth.recoverPassword/) | Сбросить [пароль двухфакторной аутентификации](/api/srp/) с помощью кода восстановления, отправленного методом [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/). |
| [auth.reportMissingCode](/method/auth.reportMissingCode/) | Только для официальных приложений: сообщает, что SMS с кодом авторизации не было доставлено. |
| [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/) | Запросить SMS с кодом через Firebase. |
| [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/) | Запросить код восстановления [пароля двухфакторной аутентификации](/api/srp/); доступно только для аккаунтов с [настроенной почтой для восстановления](/api/srp/#email-verification). |
| [auth.resendCode](/method/auth.resendCode/) | Повторно отправить код входа другим способом; тип кода определяется значением, возвращённым предыдущим вызовом auth.sendCode/auth.resendCode: подробнее см. [вход](/api/auth/). |
| [auth.resetAuthorizations](/method/auth.resetAuthorizations/) | Завершает все авторизованные сессии пользователя, кроме текущей. |
| [auth.resetLoginEmail](/method/auth.resetLoginEmail/) | Сбросить [почту для входа »](/api/auth/#email-verification). |
| [auth.sendCode](/method/auth.sendCode/) | Отправить код подтверждения для входа |
| [auth.signIn](/method/auth.signIn/) | Выполняет вход пользователя с подтверждённым номером телефона. |
| [auth.signUp](/method/auth.signUp/) | Регистрирует в системе подтверждённый номер телефона. |
| [bots.addPreviewMedia](/method/bots.addPreviewMedia/) | Добавить [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.allowSendMessage](/method/bots.allowSendMessage/) | Разрешить указанному боту отправлять нам сообщения |
| [bots.answerWebhookJSONQuery](/method/bots.answerWebhookJSONQuery/) | Отвечает на пользовательский запрос; только для ботов |
| [bots.canSendMessage](/method/bots.canSendMessage/) | Проверить, может ли указанный бот отправлять нам сообщения |
| [bots.checkDownloadFileParams](/method/bots.checkDownloadFileParams/) | Проверить, может ли [Mini App](/api/bots/webapps/) запросить скачивание конкретного файла: вызывается при обработке [событий web\_app\_request\_file\_download »](/api/web-events/#web-app-request-file-download) |
| [bots.checkUsername](/method/bots.checkUsername/) | Проверить, доступно ли имя пользователя и подходит ли оно для использования при [создании управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot). |
| [bots.createBot](/method/bots.createBot/) | Создать [управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot), принадлежащего текущему пользователю и управляемого указанным ботом-менеджером. |
| [bots.deletePreviewMedia](/method/bots.deletePreviewMedia/) | Удалить [предпросмотр главного Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.editAccessSettings](/method/bots.editAccessSettings/) | Изменить [настройки ограничения доступа »](/api/bots/managed-bots/#managing-a-managed-bot) управляемого бота; может вызываться только ботом-менеджером. |
| [bots.editPreviewMedia](/method/bots.editPreviewMedia/) | Изменить [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.exportBotToken](/method/bots.exportBotToken/) | Экспортировать токен [управляемого бота »](/api/bots/managed-bots/#managing-a-managed-bot); может вызываться только ботом-менеджером. |
| [bots.getAccessSettings](/method/bots.getAccessSettings/) | Получить [настройки ограничения доступа »](/api/bots/managed-bots/#managing-a-managed-bot) управляемого бота; может вызываться только ботом-менеджером. |
| [bots.getAdminedBots](/method/bots.getAdminedBots/) | Получить список ботов, принадлежащих текущему пользователю |
| [bots.getBotCommands](/method/bots.getBotCommands/) | Получить список команд бота для указанной области видимости и кода языка |
| [bots.getBotInfo](/method/bots.getBotInfo/) | Получить локализованное имя, текст «о себе» и описание бота (или текущего аккаунта, если метод вызван ботом). |
| [bots.getBotMenuButton](/method/bots.getBotMenuButton/) | Получает действие кнопки меню для указанного пользователя или для всех пользователей, ранее заданное с помощью [bots.setBotMenuButton](/method/bots.setBotMenuButton/); пользователи видят эту информацию в конструкторе [botInfo](/constructor/botInfo/). |
| [bots.getBotRecommendations](/method/bots.getBotRecommendations/) | Получить список ботов схожей тематики, отобранных по сходству их аудитории подписчиков; подробнее см. [здесь »](/api/recommend/). |
| [bots.getPopularAppBots](/method/bots.getPopularAppBots/) | Получить популярные [Main Mini Apps](/api/bots/webapps/#main-mini-apps) для использования во [вкладке приложений в глобальном поиске »](/api/search/#apps-tab). |
| [bots.getPreviewInfo](/method/bots.getPreviewInfo/) | Только для владельцев ботов: получить [сведения о предпросмотре главного mini app, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.getPreviewMedias](/method/bots.getPreviewMedias/) | Получить [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.getRequestedWebViewButton](/method/bots.getRequestedWebViewButton/) | Получить кнопку запроса пира, подготовленную ботом для [Mini App](/api/bots/webapps/) с помощью [bots.requestWebViewButton](/method/bots.requestWebViewButton/); вызывается, когда Mini App генерирует событие [`web_app_request_chat`](/api/web-events/#web-app-request-chat); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps). |
| [bots.invokeWebViewCustomMethod](/method/bots.invokeWebViewCustomMethod/) | Отправить произвольный запрос от [mini bot app](/api/bots/webapps/), инициированный [событием web\_app\_invoke\_custom\_method »](/api/web-events/#web-app-invoke-custom-method). |
| [bots.reorderPreviewMedias](/method/bots.reorderPreviewMedias/) | Изменить порядок [превью главного mini app, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews). |
| [bots.reorderUsernames](/method/bots.reorderUsernames/) | Изменить порядок имён пользователя, связанных с принадлежащим нам ботом. |
| [bots.requestWebViewButton](/method/bots.requestWebViewButton/) | Боты могут использовать этот метод, чтобы подготовить кнопку запроса пира для [Mini App](/api/bots/webapps/); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps). |
| [bots.resetBotCommands](/method/bots.resetBotCommands/) | Удалить команды бота для указанной области видимости и кода языка |
| [bots.sendCustomRequest](/method/bots.sendCustomRequest/) | Отправляет произвольный запрос; только для ботов |
| [bots.setBotBroadcastDefaultAdminRights](/method/bots.setBotBroadcastDefaultAdminRights/) | Задать [рекомендуемые права администратора](/api/rights/#suggested-bot-rights) по умолчанию для ботов, добавляемых администраторами в каналы; [подробнее о том, как их обрабатывать »](/api/rights/#suggested-bot-rights). |
| [bots.setBotCommands](/method/bots.setBotCommands/) | Задать список команд бота |
| [bots.setBotGroupDefaultAdminRights](/method/bots.setBotGroupDefaultAdminRights/) | Задать [рекомендуемые права администратора](/api/rights/#suggested-bot-rights) по умолчанию для ботов, добавляемых администраторами в группы; [подробнее о том, как их обрабатывать »](/api/rights/#suggested-bot-rights). |
| [bots.setBotInfo](/method/bots.setBotInfo/) | Задать локализованные имя, текст «о себе» и описание бота (или текущего аккаунта, если метод вызывается ботом). |
| [bots.setBotMenuButton](/method/bots.setBotMenuButton/) | Задаёт [действие кнопки меню »](/api/bots/menu/) для указанного пользователя или для всех пользователей |
| [bots.setCustomVerification](/method/bots.setCustomVerification/) | Верифицировать пользователя или чат [от имени организации »](/api/bots/verification/). |
| [bots.toggleUserEmojiStatusPermission](/method/bots.toggleUserEmojiStatusPermission/) | Разрешить или запретить боту [изменять наш эмодзи-статус »](/api/emoji-status/#setting-an-emoji-status-from-a-bot) |
| [bots.toggleUsername](/method/bots.toggleUsername/) | Активировать или деактивировать купленное на [fragment.com](https://fragment.com) имя пользователя, связанное с принадлежащим нам ботом. |
| [bots.updateStarRefProgram](/method/bots.updateStarRefProgram/) | Создать, изменить или удалить [партнёрскую программу](/api/bots/referrals/) принадлежащего нам бота |
| [bots.updateUserEmojiStatus](/method/bots.updateUserEmojiStatus/) | Изменить эмодзи-статус пользователя (вызывается ботами, подробнее о полном порядке действий [здесь »](/api/emoji-status/#setting-an-emoji-status-from-a-bot)) |
| [channels.checkSearchPostsFlood](/method/channels.checkSearchPostsFlood/) | Проверить, требует ли оплаты указанный [глобальный поиск по публикациям »](/api/search/#posts-tab). |
| [channels.checkUsername](/method/channels.checkUsername/) | Проверить, свободно ли имя пользователя и можно ли назначить его каналу или супергруппе |
| [channels.convertToGigagroup](/method/channels.convertToGigagroup/) | Преобразовать [супергруппу](/api/channel/) в [гигагруппу](/api/channel/) по запросу от [подсказок для канала](/api/config/#channel-suggestions). |
| [channels.createChannel](/method/channels.createChannel/) | Создать [супергруппу или канал](/api/channel/). |
| [channels.deactivateAllUsernames](/method/channels.deactivateAllUsernames/) | Отключить все купленные имена пользователя супергруппы или канала |
| [channels.deleteChannel](/method/channels.deleteChannel/) | Удалить [канал/супергруппу](/api/channel/) |
| [channels.deleteHistory](/method/channels.deleteHistory/) | Удалить историю [супергруппы](/api/channel/) |
| [channels.deleteMessages](/method/channels.deleteMessages/) | Удалить сообщения в [канале/супергруппе](/api/channel/) |
| [channels.deleteParticipantHistory](/method/channels.deleteParticipantHistory/) | Удалить все сообщения, отправленные определённым участником заданной супергруппы |
| [channels.editAdmin](/method/channels.editAdmin/) | Изменить права администратора пользователя в [супергруппе или канале](/api/channel/). |
| [channels.editBanned](/method/channels.editBanned/) | Заблокировать, разблокировать или исключить пользователя в [супергруппе или канале](/api/channel/). |
| [channels.editLocation](/method/channels.editLocation/) | Изменить местоположение геогруппы; подробнее о геогруппах см. [здесь »](/api/nearby/). |
| [channels.editPhoto](/method/channels.editPhoto/) | Изменить фотографию [канала/супергруппы](/api/channel/) |
| [channels.editTitle](/method/channels.editTitle/) | Изменить название [канала или супергруппы](/api/channel/) |
| [channels.exportMessageLink](/method/channels.exportMessageLink/) | Получить ссылку и данные для встраивания сообщения в [канале или супергруппе](/api/channel/) |
| [channels.getAdminedPublicChannels](/method/channels.getAdminedPublicChannels/) | Получить [каналы, супергруппы и геогруппы](/api/channel/), в которых мы являемся администратором. Обычно вызывается, когда пользователь превышает [ограничение](/constructor/config/) на число принадлежащих ему публичных [каналов, супергрупп и геогрупп](/api/channel/) и ему предлагается удалить один из его каналов, супергрупп или геогрупп. |
| [channels.getAdminLog](/method/channels.getAdminLog/) | Получить журнал администратора [канала или супергруппы](/api/channel/) |
| [channels.getChannelRecommendations](/method/channels.getChannelRecommendations/) | Получить список публичных каналов схожей тематики, отобранных по сходству их **аудитории подписчиков**. |
| [channels.getChannels](/method/channels.getChannels/) | Получить информацию о [каналах и супергруппах](/api/channel/) |
| [channels.getForumTopics](/method/channels.getForumTopics/) | Получить [темы форума](/api/forum/) |
| [channels.getForumTopicsByID](/method/channels.getForumTopicsByID/) | Получить темы форума по их идентификаторам |
| [channels.getFullChannel](/method/channels.getFullChannel/) | Получить полную информацию о [супергруппе](/api/channel/#supergroups), [гигагруппе](/api/channel/#gigagroups) или [канале](/api/channel/#channels) |
| [channels.getFutureCreatorAfterLeave](/method/channels.getFutureCreatorAfterLeave/) | Только для владельцев групп и каналов: возвращает идентификатор пользователя, который станет новым владельцем группы, если мы решим её покинуть; подробнее о полном порядке действий см. [здесь »](/api/channel/#leaving-groups-channels). |
| [channels.getGroupsForDiscussion](/method/channels.getGroupsForDiscussion/) | Получить все группы, которые можно использовать в качестве [групп обсуждения](/api/discussion/). |
| [channels.getInactiveChannels](/method/channels.getInactiveChannels/) | Получить неактивные каналы и супергруппы |
| [channels.getLeftChannels](/method/channels.getLeftChannels/) | Получить список [каналов и супергрупп](/api/channel/), которые мы покинули; требуется [сессия выгрузки данных, подробнее см. здесь »](/api/takeout/). |
| [channels.getMessageAuthor](/method/channels.getMessageAuthor/) | Может быть вызван только администраторами [монофорума »](/api/monoforum/), не являющимися ботами; возвращает исходного отправителя сообщения, отправленного в монофорум другими администраторами монофорума от имени канала, связанного с этим монофорумом. |
| [channels.getMessages](/method/channels.getMessages/) | Получить сообщения [канала или супергруппы](/api/channel/) |
| [channels.getParticipant](/method/channels.getParticipant/) | Получить информацию об участнике [канала или супергруппы](/api/channel/) |
| [channels.getParticipants](/method/channels.getParticipants/) | Получить участников [супергруппы или канала](/api/channel/) |
| [channels.getSendAs](/method/channels.getSendAs/) | Получает список пиров, которые могут отображаться в качестве отправителя в определённом контексте. С флагом `for_live_stories` возвращает пиров, которые могут быть авторами [сообщений во время прямого эфира »](/api/group-calls/#in-call-messages). |
| [channels.inviteToChannel](/method/channels.inviteToChannel/) | Пригласить пользователей в канал или супергруппу |
| [channels.joinChannel](/method/channels.joinChannel/) | Вступить в канал или супергруппу |
| [channels.leaveChannel](/method/channels.leaveChannel/) | Покинуть [канал или супергруппу](/api/channel/) |
| [channels.readHistory](/method/channels.readHistory/) | Отметить историю [канала или супергруппы](/api/channel/) как прочитанную |
| [channels.readMessageContents](/method/channels.readMessageContents/) | Отметить содержимое сообщений [канала/супергруппы](/api/channel/) как прочитанное, порождая [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/). |
| [channels.reorderUsernames](/method/channels.reorderUsernames/) | Изменить порядок активных имён пользователя |
| [channels.reportAntiSpamFalsePositive](/method/channels.reportAntiSpamFalsePositive/) | Сообщить о ложном срабатывании [встроенной защиты от спама](/api/antispam/) |
| [channels.reportSpam](/method/channels.reportSpam/) | Пожаловаться на несколько сообщений пользователя в супергруппе как на спам; требуются права администратора в супергруппе |
| [channels.restrictSponsoredMessages](/method/channels.restrictSponsoredMessages/) | Отключить рекламу в указанном канале для всех пользователей. |
| [channels.searchPosts](/method/channels.searchPosts/) | Глобальный поиск постов в публичных [каналах »](/api/channel/) (_в том числе_ в тех, участниками которых мы не являемся) по определённому хештегу _или_ по полнотекстовому запросу. |
| [channels.setBoostsToUnblockRestrictions](/method/channels.setBoostsToUnblockRestrictions/) | Администраторы с [правами администратора ban\_users »](/constructor/chatAdminRights/) могут разрешить пользователям, отдавшим группе определённое количество [бустов »](/api/boost/), обходить [медленный режим »](/method/channels.toggleSlowMode/) и [другие »](/api/rights/#default-rights) ограничения супергруппы; подробнее [см. здесь »](/api/boost/#bypass-slowmode-and-chat-restrictions). |
| [channels.setDiscussionGroup](/method/channels.setDiscussionGroup/) | Привязать группу к каналу в качестве [группы обсуждения](/api/discussion/) для этого канала |
| [channels.setEmojiStickers](/method/channels.setEmojiStickers/) | Задать [набор пользовательских эмодзи](/api/custom-emoji/) для супергрупп. Использовать можно только после достижения как минимум [уровня буста »](/api/boost/), указанного в параметре конфигурации [`group_emoji_stickers_level_min` »](/api/config/#group-emoji-stickers-level-min). |
| [channels.setMainProfileTab](/method/channels.setMainProfileTab/) | Изменяет основную вкладку профиля канала, подробнее [здесь »](/api/profile/#tabs). |
| [channels.setStickers](/method/channels.setStickers/) | Привязать набор стикеров к супергруппе |
| [channels.toggleAntiSpam](/method/channels.toggleAntiSpam/) | Включить или отключить [встроенную защиту от спама](/api/antispam/). |
| [channels.toggleAutotranslation](/method/channels.toggleAutotranslation/) | Включить или отключить автоперевод в канале для всех пользователей: подробнее см. [здесь »](/api/translation/#autotranslation-for-channels). |
| [channels.toggleForum](/method/channels.toggleForum/) | Включить или отключить [функциональность форума](/api/forum/) в супергруппе. |
| [channels.toggleJoinRequest](/method/channels.toggleJoinRequest/) | Задать, должны ли все пользователи [запрашивать одобрение администратора для вступления в группу »](/api/invites/#join-requests). |
| [channels.toggleJoinToSend](/method/channels.toggleJoinToSend/) | Задать, должны ли все пользователи [вступать в группу обсуждения, чтобы комментировать пост »](/api/discussion/#requiring-users-to-join-the-group) |
| [channels.toggleParticipantsHidden](/method/channels.toggleParticipantsHidden/) | Скрыть или показать список участников [супергруппы](/api/channel/). |
| [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/) | Скрыть или показать историю сообщений для новых участников канала или супергруппы |
| [channels.toggleSignatures](/method/channels.toggleSignatures/) | Включить или отключить подписи авторов под сообщениями в каналах |
| [channels.toggleSlowMode](/method/channels.toggleSlowMode/) | Переключить медленный режим в супергруппе: если он включён, пользователи смогут отправлять только одно сообщение каждые `seconds` секунд |
| [channels.toggleUsername](/method/channels.toggleUsername/) | Активировать или деактивировать купленное на [fragment.com](https://fragment.com) имя пользователя, связанное с принадлежащими нам [супергруппой или каналом](/api/channel/). |
| [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/) | Пользователи также могут отображать сообщения из всех тем [форума](/api/forum/) так, как если бы они были отправлены в обычную группу, — с помощью настройки «Показывать как сообщения» в локальном клиенте: эта настройка влияет только на текущий аккаунт и синхронизируется с другими активными сессиями с помощью этого метода. |
| [channels.updateColor](/method/channels.updateColor/) | Обновить [акцентный цвет и фоновый пользовательский эмодзи »](/api/colors/) канала. |
| [channels.updateEmojiStatus](/method/channels.updateEmojiStatus/) | Установить [эмодзи-статус](/api/emoji-status/) для канала или супергруппы. |
| [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/) | Включить или отключить [платные сообщения »](/api/paid-messages/) в этой [супергруппе](/api/channel/) или [монофоруме](/api/monoforum/). |
| [channels.updateUsername](/method/channels.updateUsername/) | Изменить или удалить имя пользователя супергруппы или канала |
| [chatlists.checkChatlistInvite](/method/chatlists.checkChatlistInvite/) | Получить сведения о [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.deleteExportedInvite](/method/chatlists.deleteExportedInvite/) | Удалить ранее созданную [глубокую ссылку на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.editExportedInvite](/method/chatlists.editExportedInvite/) | Изменить [глубокую ссылку на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.exportChatlistInvite](/method/chatlists.exportChatlistInvite/) | Экспортировать [папку »](/api/folders/), создав [глубокую ссылку на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.getChatlistUpdates](/method/chatlists.getChatlistUpdates/) | Получить новые чаты, связанные с импортированной [глубокой ссылкой на папку чатов »](/api/links/#chat-folder-links). Вызывается не чаще одного раза в `chatlist_update_period` секунд (согласно соответствующему [параметру конфигурации клиента »](/api/config/#chatlist-update-period)). |
| [chatlists.getExportedInvites](/method/chatlists.getExportedInvites/) | Перечислить все [глубокие ссылки на папку чатов »](/api/links/#chat-folder-links), связанные с папкой |
| [chatlists.getLeaveChatlistSuggestions](/method/chatlists.getLeaveChatlistSuggestions/) | Возвращает идентификаторы закреплённых или всегда включённых чатов из папки чатов, импортированной по [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links), которые предлагается покинуть при удалении папки. |
| [chatlists.hideChatlistUpdates](/method/chatlists.hideChatlistUpdates/) | Отклонить новых ожидающих пиров, недавно добавленных по [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.joinChatlistInvite](/method/chatlists.joinChatlistInvite/) | Импортировать [глубокую ссылку на папку чатов »](/api/links/#chat-folder-links), вступив в некоторые или во все чаты папки. |
| [chatlists.joinChatlistUpdates](/method/chatlists.joinChatlistUpdates/) | Присоединиться к каналам и супергруппам, недавно добавленным в [глубокую ссылку на папку чатов »](/api/links/#chat-folder-links). |
| [chatlists.leaveChatlist](/method/chatlists.leaveChatlist/) | Удалить папку, импортированную с помощью [глубокой ссылки на папку чатов »](/api/links/#chat-folder-links) |
| [contacts.acceptContact](/method/contacts.acceptContact/) | Если [активна панель действий «добавить контакт»](/api/action-bar/#add-contact), добавить этого пользователя в контакты |
| [contacts.addContact](/method/contacts.addContact/) | Добавить существующего пользователя Telegram в контакты. |
| [contacts.block](/method/contacts.block/) | Добавляет пира в список заблокированных; подробнее [см. здесь »](/api/block/). |
| [contacts.blockFromReplies](/method/contacts.blockFromReplies/) | Прекратить получать уведомления об [ответах в обсуждении](/api/discussion/) от определённого пользователя в `@replies` |
| [contacts.deleteByPhones](/method/contacts.deleteByPhones/) | Удалить контакты по номеру телефона |
| [contacts.deleteContacts](/method/contacts.deleteContacts/) | Удаляет несколько контактов из списка. |
| [contacts.editCloseFriends](/method/contacts.editCloseFriends/) | Изменить [список близких друзей, подробнее см. здесь »](/api/privacy/). |
| [contacts.exportContactToken](/method/contacts.exportContactToken/) | Создаёт [временную ссылку на профиль](/api/links/#temporary-profile-links) для текущего авторизованного пользователя. |
| [contacts.getBirthdays](/method/contacts.getBirthdays/) | Получить всех пользователей, у которых день рождения приходится на промежуток ±1 день относительно текущего дня. Клиентам следует вызывать этот метод каждые 6–8 часов, и если результат непустой, использовать его для соответствующего обновления локально сохранённых сведений о дне рождения в [user](/constructor/user/).`birthday`. |
| [contacts.getBlocked](/method/contacts.getBlocked/) | Возвращает список заблокированных пользователей. |
| [contacts.getContactIDs](/method/contacts.getContactIDs/) | Получить идентификаторы Telegram всех контактов. |
| [contacts.getContacts](/method/contacts.getContacts/) | Возвращает список контактов текущего пользователя. |
| [contacts.getLocated](/method/contacts.getLocated/) | Получить пользователей и геочаты поблизости; подробнее см. [здесь »](/api/nearby/). |
| [contacts.getSaved](/method/contacts.getSaved/) | Получить все контакты; требуется [сессия выгрузки данных, подробнее см. здесь »](/api/takeout/). |
| [contacts.getSponsoredPeers](/method/contacts.getSponsoredPeers/) | Получить список рекламных результатов поиска пиров по заданному запросу |
| [contacts.getStatuses](/method/contacts.getStatuses/) | Этот метод позволяет получить сетевой статус всех контактов, у которых есть доступный аккаунт Telegram. |
| [contacts.getTopPeers](/method/contacts.getTopPeers/) | Получить наиболее используемые пиры |
| [contacts.importContacts](/method/contacts.importContacts/) | Импортирует контакты: сохраняет полный список на сервере, добавляет уже зарегистрированных контактов в список контактов, возвращает добавленные контакты и сведения о них. |
| [contacts.importContactToken](/method/contacts.importContactToken/) | Получить сведения о пользователе по [временной ссылке на профиль](/api/links/#temporary-profile-links). |
| [contacts.resetSaved](/method/contacts.resetSaved/) | Удаляет все контакты, у которых нет связанного аккаунта Telegram. |
| [contacts.resetTopPeerRating](/method/contacts.resetTopPeerRating/) | Сбросить [рейтинг](/api/top-rating/) популярного пира |
| [contacts.resolvePhone](/method/contacts.resolvePhone/) | Разрешить номер телефона, чтобы получить сведения о пользователе, если это допускают его настройки конфиденциальности. |
| [contacts.resolveUsername](/method/contacts.resolveUsername/) | Разрешить @username, чтобы получить сведения о пире |
| [contacts.search](/method/contacts.search/) | Возвращает пользователей, найденных по подстроке имени пользователя. |
| [contacts.setBlocked](/method/contacts.setBlocked/) | Заменить содержимое всего [списка заблокированных, подробнее см. здесь »](/api/block/). |
| [contacts.toggleTopPeers](/method/contacts.toggleTopPeers/) | Включить или отключить [наиболее используемые пиры](/api/top-rating/) |
| [contacts.unblock](/method/contacts.unblock/) | Удаляет пира из списка заблокированных; подробнее [см. здесь »](/api/block/). |
| [contacts.updateContactNote](/method/contacts.updateContactNote/) | Обновить личную заметку, связанную с контактом; подробнее [см. здесь »](/api/contacts/#private-notes-for-contacts). |
| [folders.editPeerFolders](/method/folders.editPeerFolders/) | Изменить пиров в [папке пиров](/api/folders/#peer-folders) |
| [fragment.getCollectibleInfo](/method/fragment.getCollectibleInfo/) | Получить сведения о [коллекционном объекте Fragment; подробнее о полном сценарии см. здесь »](/api/fragment/#fetching-info-about-fragment-collectibles). |
| [help.acceptTermsOfService](/method/help.acceptTermsOfService/) | Принять новые условия обслуживания |
| [help.dismissSuggestion](/method/help.dismissSuggestion/) | Отклонить [подсказку, подробнее см. здесь »](/api/config/#suggestions). |
| [help.editUserInfo](/method/help.editUserInfo/) | Для внутреннего использования |
| [help.getAppConfig](/method/help.getAppConfig/) | Получить конфигурацию, специфичную для приложения; подробнее о результате см. [клиентскую конфигурацию](/api/config/#client-configuration). |
| [help.getAppUpdate](/method/help.getAppUpdate/) | Возвращает информацию о доступности обновления для текущего приложения. |
| [help.getCdnConfig](/method/help.getCdnConfig/) | Получить конфигурацию для скачивания файлов через [CDN](https://core.telegram.org/cdn). |
| [help.getConfig](/method/help.getConfig/) | Возвращает текущую конфигурацию, включая конфигурацию дата-центров. |
| [help.getCountriesList](/method/help.getCountriesList/) | Получить название, код ISO, локализованное название и телефонные коды/шаблоны всех доступных стран |
| [help.getDeepLinkInfo](/method/help.getDeepLinkInfo/) | Получить информацию о неподдерживаемой глубокой ссылке, [подробнее см. здесь »](/api/links/#unsupported-links). |
| [help.getInviteText](/method/help.getInviteText/) | Возвращает локализованный текст сообщения с приглашением. |
| [help.getNearestDc](/method/help.getNearestDc/) | Возвращает сведения о ближайшем к пользователю дата-центре. |
| [help.getPassportConfig](/method/help.getPassportConfig/) | Получить конфигурацию [passport](https://core.telegram.org/passport) |
| [help.getPeerColors](/method/help.getPeerColors/) | Получить набор [палитр акцентных цветов »](/api/colors/), которые можно использовать для акцентов в сообщениях. |
| [help.getPeerProfileColors](/method/help.getPeerProfileColors/) | Получить набор [палитр акцентных цветов »](/api/colors/), которые можно использовать для фона страницы профиля. |
| [help.getPremiumPromo](/method/help.getPremiumPromo/) | Получить сведения о рекламной кампании Telegram Premium |
| [help.getPromoData](/method/help.getPromoData/) | Возвращает набор полезных подсказок и рекламные пиры PSA/MTProxy; подробнее см. [здесь »](/api/config/#suggestions). |
| [help.getRecentMeUrls](/method/help.getRecentMeUrls/) | Получить недавно использованные ссылки `t.me`. |
| [help.getSupport](/method/help.getSupport/) | Возвращает пользователя службы поддержки для функции «задать вопрос». |
| [help.getSupportName](/method/help.getSupportName/) | Получить локализованное имя пользователя службы поддержки Telegram |
| [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/) | Проверить наличие обновлений условий использования Telegram |
| [help.getTimezonesList](/method/help.getTimezonesList/) | Возвращает сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания [часов работы Telegram Business »](/api/business/#opening-hours). |
| [help.getUserInfo](/method/help.getUserInfo/) | Может использоваться только участниками TSF для получения внутренней информации. |
| [help.hidePromoData](/method/help.hidePromoData/) | Скрыть сведения об MTProxy или общественном объявлении |
| [help.saveAppLog](/method/help.saveAppLog/) | Сохраняет журналы работы приложения на сервере. |
| [help.setBotUpdatesStatus](/method/help.setBotUpdatesStatus/) | Сообщает серверу количество необработанных обновлений бота, если они долго не обрабатывались; только для ботов |
| [initConnection](/method/initConnection/) | Инициализировать подключение |
| [invokeAfterMsg](/method/invokeAfterMsg/) | Выполняет запрос после успешного завершения одного из предыдущих запросов. |
| [invokeAfterMsgs](/method/invokeAfterMsgs/) | Выполняет запрос после успешного завершения предыдущих запросов |
| [invokeWithApnsSecret](/method/invokeWithApnsSecret/) | Только для официальных клиентов: вызвать с проверкой push-уведомления Apple. |
| [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/) | Вызвать метод через [подключение Telegram Business Bot; подробнее, включая список методов, которые можно обернуть в этот конструктор, см. здесь »](/api/bots/connected-business-bots/). |
| [invokeWithGooglePlayIntegrity](/method/invokeWithGooglePlayIntegrity/) | Только для официальных клиентов: вызвать с токеном Google Play Integrity. |
| [invokeWithLayer](/method/invokeWithLayer/) | Выполнить указанный запрос с использованием указанного [слоя](/api/invoking/#layers) API |
| [invokeWithMessagesRange](/method/invokeWithMessagesRange/) | Выполнить с указанным диапазоном сообщений |
| [invokeWithoutUpdates](/method/invokeWithoutUpdates/) | Выполнить запрос, не подписывая используемое соединение на [обновления](/api/updates/) (для [файловых запросов](/api/files/) это включено по умолчанию). |
| [invokeWithReCaptcha](/method/invokeWithReCaptcha/) | Только для официальных клиентов: повторно выполнить вызов метода, потребовавший проверки reCAPTCHA через `RECAPTCHA_CHECK_%s__%s`, где первая подстановка — это `action`, а вторая — идентификатор ключа reCAPTCHA. |
| [invokeWithTakeout](/method/invokeWithTakeout/) | Вызвать метод в рамках [сессии выгрузки данных, подробнее см. здесь »](/api/takeout/). |
| [langpack.getDifference](/method/langpack.getDifference/) | Получить новые строки языкового пакета |
| [langpack.getLangPack](/method/langpack.getLangPack/) | Получить строки пакета локализации |
| [langpack.getLanguage](/method/langpack.getLanguage/) | Получить информацию о языке из пакета локализации |
| [langpack.getLanguages](/method/langpack.getLanguages/) | Получить информацию обо всех языках в пакете локализации |
| [langpack.getStrings](/method/langpack.getStrings/) | Получить строки языкового пакета |
| [messages.acceptEncryption](/method/messages.acceptEncryption/) | Подтверждает создание секретного чата |
| [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) | Используйте этот метод, чтобы подтвердить запрос авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/) |
| [messages.addChatUser](/method/messages.addChatUser/) | Добавляет пользователя в чат и отправляет в нём сервисное сообщение. |
| [messages.addPollAnswer](/method/messages.addPollAnswer/) | Добавить вариант ответа в [опрос со свободным ответом »](/api/poll/#open-answer-polls) |
| [messages.appendTodoList](/method/messages.appendTodoList/) | Добавляет один или несколько пунктов в [список задач »](/api/todo/). |
| [messages.checkChatInvite](/method/messages.checkChatInvite/) | Проверить действительность пригласительной ссылки на чат и получить основные сведения о ней |
| [messages.checkHistoryImport](/method/messages.checkHistoryImport/) | Получает информацию о файле экспорта чата, выгруженном из стороннего мессенджера; [подробнее об импортированных чатах см. здесь »](/api/import/). |
| [messages.checkHistoryImportPeer](/method/messages.checkHistoryImportPeer/) | Проверить, можно ли [импортировать в определённый чат Telegram историю переписки, экспортированную из другого мессенджера; подробнее см. здесь »](/api/import/). |
| [messages.checkQuickReplyShortcut](/method/messages.checkQuickReplyShortcut/) | Перед тем как предложить пользователю добавить сообщение в [шаблон быстрого ответа](/api/business/#quick-reply-shortcuts), чтобы убедиться, что ни одно из ограничений, указанных [здесь »](/api/business/#quick-reply-shortcuts), не достигнуто. |
| [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) | Сверить выбранный пользователем код соответствия с кодом, показанным на странице входа, в рамках [процесса авторизации OAuth »](/api/url-authorization/#oauth-authorization). |
| [messages.clearAllDrafts](/method/messages.clearAllDrafts/) | Удалить все [черновики](/api/drafts/). |
| [messages.clearRecentReactions](/method/messages.clearRecentReactions/) | Очистить список недавно использованных [реакций на сообщения](/api/reactions/) |
| [messages.clearRecentStickers](/method/messages.clearRecentStickers/) | Очистить недавние стикеры |
| [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/) | Сообщает серверу, что пользователь взаимодействовал с рекламным сообщением [одним из перечисленных здесь способов »](/api/sponsored-messages/#clicking-on-sponsored-messages). |
| [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/) | Вызывает ИИ-редактор Telegram, который может множеством разных способов перевести ваше сообщение, преобразовать его, исправить в нём ошибки и (или) добавить эмодзи; всё это приватно работает на [Cocoon](https://cocoon.org), подробнее см. [здесь »](/api/ai/#compose-messages)! |
| [messages.createChat](/method/messages.createChat/) | Создаёт новый чат. |
| [messages.createForumTopic](/method/messages.createForumTopic/) | Создать [тему форума](/api/forum/). |
| [messages.declineUrlAuth](/method/messages.declineUrlAuth/) | Отклонить входящий [запрос авторизации OAuth »](/api/url-authorization/#oauth-authorization), сообщив серверу, что пользователь отказал в запросе на вход. |
| [messages.deleteChat](/method/messages.deleteChat/) | Удалить [чат](/api/channel/) |
| [messages.deleteChatUser](/method/messages.deleteChatUser/) | Удаляет пользователя из чата и отправляет об этом сервисное сообщение. |
| [messages.deleteExportedChatInvite](/method/messages.deleteExportedChatInvite/) | Удалить приглашение в чат |
| [messages.deleteFactCheck](/method/messages.deleteFactCheck/) | Удалить [проверку фактов](/api/factcheck/) из сообщения. |
| [messages.deleteHistory](/method/messages.deleteHistory/) | Удаляет историю переписки. |
| [messages.deleteMessages](/method/messages.deleteMessages/) | Удаляет сообщения по их идентификаторам. |
| [messages.deleteParticipantReaction](/method/messages.deleteParticipantReaction/) | Будучи администратором, удалить все [реакции](/api/reactions/) определённого участника с одного сообщения. |
| [messages.deleteParticipantReactions](/method/messages.deleteParticipantReactions/) | Будучи администратором, удалить все [реакции](/api/reactions/) определённого участника со всех сообщений в группе или канале. |
| [messages.deletePhoneCallHistory](/method/messages.deletePhoneCallHistory/) | Удалить всю историю звонков. |
| [messages.deletePollAnswer](/method/messages.deletePollAnswer/) | Удалить вариант ответа из [опроса со свободным ответом »](/api/poll/#open-answer-polls) |
| [messages.deleteQuickReplyMessages](/method/messages.deleteQuickReplyMessages/) | Удалить одно или несколько сообщений из [шаблона быстрого ответа](/api/business/#quick-reply-shortcuts). При этом также отправляется обновление [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/). |
| [messages.deleteQuickReplyShortcut](/method/messages.deleteQuickReplyShortcut/) | Полностью удалить [ярлык быстрого ответа](/api/business/#quick-reply-shortcuts). |
| [messages.deleteRevokedExportedChatInvites](/method/messages.deleteRevokedExportedChatInvites/) | Удалить все отозванные приглашения в чат |
| [messages.deleteSavedHistory](/method/messages.deleteSavedHistory/) | Удаляет сообщения из [темы монофорума »](/api/monoforum/) либо удаляет сообщения, пересланные от определённого пира в [избранное »](/api/saved-messages/). |
| [messages.deleteScheduledMessages](/method/messages.deleteScheduledMessages/) | Удалить отложенные сообщения |
| [messages.deleteTopicHistory](/method/messages.deleteTopicHistory/) | Удалить историю сообщений [темы форума](/api/forum/) |
| [messages.discardEncryption](/method/messages.discardEncryption/) | Отменяет запрос на создание секретного чата и/или удаляет информацию о нём. |
| [messages.editChatAbout](/method/messages.editChatAbout/) | Изменить описание [группы, супергруппы или канала](/api/channel/). |
| [messages.editChatAdmin](/method/messages.editChatAdmin/) | Назначить пользователя администратором [обычной группы](/api/channel/#basic-groups). |
| [messages.editChatCreator](/method/messages.editChatCreator/) | Передать права владельца обычной группы, супергруппы или канала другому пользователю; полное описание процесса см. [здесь »](/api/channel/#transferring-ownership-of-a-group-channel). |
| [messages.editChatDefaultBannedRights](/method/messages.editChatDefaultBannedRights/) | Изменить права по умолчанию для заблокированных пользователей [канала, супергруппы или группы](/api/channel/). |
| [messages.editChatParticipantRank](/method/messages.editChatParticipantRank/) | Изменить [звание »](/api/rank/) участника группы. |
| [messages.editChatPhoto](/method/messages.editChatPhoto/) | Изменяет фотографию чата и отправляет в него сервисное сообщение |
| [messages.editChatTitle](/method/messages.editChatTitle/) | Изменяет название чата и отправляет в него сервисное сообщение. |
| [messages.editExportedChatInvite](/method/messages.editExportedChatInvite/) | Изменить экспортированное приглашение в чат |
| [messages.editFactCheck](/method/messages.editFactCheck/) | Изменить или создать [проверку фактов](/api/factcheck/) для сообщения. |
| [messages.editForumTopic](/method/messages.editForumTopic/) | Изменить [тему форума](/api/forum/). |
| [messages.editInlineBotMessage](/method/messages.editInlineBotMessage/) | Изменить сообщение инлайн-бота |
| [messages.editMessage](/method/messages.editMessage/) | Изменить сообщение |
| [messages.editQuickReplyShortcut](/method/messages.editQuickReplyShortcut/) | Переименовать [быстрый ответ](/api/business/#quick-reply-shortcuts). |
| [messages.exportChatInvite](/method/messages.exportChatInvite/) | Экспортировать пригласительную ссылку для чата |
| [messages.faveSticker](/method/messages.faveSticker/) | Добавить стикер в избранное или удалить его оттуда |
| [messages.forwardMessages](/method/messages.forwardMessages/) | Пересылает сообщения по их идентификаторам. |
| [messages.getAdminsWithInvites](/method/messages.getAdminsWithInvites/) | Получить информацию о приглашениях в чат, созданных администраторами. |
| [messages.getAllDrafts](/method/messages.getAllDrafts/) | Вернуть все [черновики](/api/drafts/) сообщений. |
| [messages.getAllStickers](/method/messages.getAllStickers/) | Получить все установленные стикеры |
| [messages.getArchivedStickers](/method/messages.getArchivedStickers/) | Получить все архивированные стикеры |
| [messages.getAttachedStickers](/method/messages.getAttachedStickers/) | Получить стикеры, прикреплённые к фотографии или видео |
| [messages.getAttachMenuBot](/method/messages.getAttachMenuBot/) | Возвращает запись меню вложений для [mini app бота, который можно запустить из меню вложений »](/api/bots/attach/) |
| [messages.getAttachMenuBots](/method/messages.getAttachMenuBots/) | Возвращает установленные в меню вложений [mini app ботов »](/api/bots/attach/) |
| [messages.getAvailableEffects](/method/messages.getAvailableEffects/) | Получить полный список доступных [анимированных эффектов для сообщений »](/api/effects/). |
| [messages.getAvailableReactions](/method/messages.getAvailableReactions/) | Получить доступные [реакции на сообщения »](/api/reactions/) |
| [messages.getBotApp](/method/messages.getBotApp/) | Получить сведения о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps) |
| [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/) | Нажать инлайн-кнопку обратного вызова и получить ответ от бота |
| [messages.getChatInviteImporters](/method/messages.getChatInviteImporters/) | Получить информацию о пользователях, вступивших в чат по определённой пригласительной ссылке |
| [messages.getChats](/method/messages.getChats/) | Возвращает основные сведения о чатах по их идентификаторам. |
| [messages.getCommonChats](/method/messages.getCommonChats/) | Получить общие с пользователем чаты |
| [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/) | Получить [стикеры с пользовательскими эмодзи »](/api/custom-emoji/). |
| [messages.getDefaultHistoryTTL](/method/messages.getDefaultHistoryTTL/) | Возвращает значение по умолчанию настройки времени жизни сообщений (Time-To-Live), применяемое ко всем новым чатам. |
| [messages.getDefaultTagReactions](/method/messages.getDefaultTagReactions/) | Получить рекомендуемый список [реакций-тегов для сохранённых сообщений](/api/saved-messages/#tags) по умолчанию. |
| [messages.getDhConfig](/method/messages.getDhConfig/) | Возвращает параметры конфигурации для генерации ключа по схеме Диффи — Хеллмана. Может также вернуть случайную последовательность байтов требуемой длины. |
| [messages.getDialogFilters](/method/messages.getDialogFilters/) | Получить [папки](/api/folders/) |
| [messages.getDialogs](/method/messages.getDialogs/) | Возвращает список диалогов текущего пользователя. |
| [messages.getDialogUnreadMarks](/method/messages.getDialogUnreadMarks/) | Получить диалоги, вручную отмеченные как непрочитанные |
| [messages.getDiscussionMessage](/method/messages.getDiscussionMessage/) | Получить [сообщение обсуждения](/api/threads/) из [связанной группы обсуждения](/api/discussion/) канала, чтобы показать его над разделом комментариев, не вступая при этом в группу |
| [messages.getDocumentByHash](/method/messages.getDocumentByHash/) | Получить документ по его хешу SHA256; метод используется в основном для GIF |
| [messages.getEmojiGameInfo](/method/messages.getEmojiGameInfo/) | Получить информацию об игре в кости. |
| [messages.getEmojiGroups](/method/messages.getEmojiGroups/) | Представляет список [категорий эмодзи](/api/emoji-categories/). |
| [messages.getEmojiKeywords](/method/messages.getEmojiKeywords/) | Получить локализованные [ключевые слова эмодзи »](/api/custom-emoji/#emoji-keywords). |
| [messages.getEmojiKeywordsDifference](/method/messages.getEmojiKeywordsDifference/) | Получить изменённые [ключевые слова эмодзи »](/api/custom-emoji/#emoji-keywords). |
| [messages.getEmojiKeywordsLanguages](/method/messages.getEmojiKeywordsLanguages/) | Получить список родственных языков, которые необходимо использовать при загрузке [списков ключевых слов эмодзи »](/api/custom-emoji/#emoji-keywords). |
| [messages.getEmojiProfilePhotoGroups](/method/messages.getEmojiProfilePhotoGroups/) | Представляет список [категорий эмодзи](/api/emoji-categories/), используемый при выборе пользовательских эмодзи для установки в качестве [фотографии профиля](/api/files/#sticker-profile-pictures). |
| [messages.getEmojiStatusGroups](/method/messages.getEmojiStatusGroups/) | Представляет список [категорий эмодзи](/api/emoji-categories/), используемый при выборе пользовательских эмодзи для установки в качестве [эмодзи-статуса](/api/). |
| [messages.getEmojiStickerGroups](/method/messages.getEmojiStickerGroups/) | Представляет список [категорий эмодзи](/api/emoji-categories/), используемый при выборе стикера. |
| [messages.getEmojiStickers](/method/messages.getEmojiStickers/) | Получает список установленных на данный момент [наборов стикеров с пользовательскими эмодзи](/api/custom-emoji/). |
| [messages.getEmojiURL](/method/messages.getEmojiURL/) | Возвращает HTTP-адрес, по которому можно автоматически войти на платформу переводов и предложить новые [ключевые слова эмодзи »](/api/custom-emoji/#emoji-keywords). Адрес действителен в течение 30 секунд после создания. |
| [messages.getExportedChatInvite](/method/messages.getExportedChatInvite/) | Получить информацию о приглашении в чат |
| [messages.getExportedChatInvites](/method/messages.getExportedChatInvites/) | Получить информацию о приглашениях конкретного чата |
| [messages.getExtendedMedia](/method/messages.getExtendedMedia/) | Получить обновлённую информацию о [платном медиа; полное описание процесса см. здесь »](/api/paid-media/). |
| [messages.getFactCheck](/method/messages.getFactCheck/) | Получить одну или несколько [проверок фактов; полное описание процесса см. здесь »](/api/factcheck/). |
| [messages.getFavedStickers](/method/messages.getFavedStickers/) | Получить избранные стикеры |
| [messages.getFeaturedEmojiStickers](/method/messages.getFeaturedEmojiStickers/) | Получает рекомендуемые наборы стикеров с пользовательскими эмодзи. |
| [messages.getFeaturedStickers](/method/messages.getFeaturedStickers/) | Получить рекомендуемые стикеры |
| [messages.getForumTopics](/method/messages.getForumTopics/) | Получить [темы форума](/api/forum/) |
| [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) | Получить темы форума по их идентификаторам |
| [messages.getFullChat](/method/messages.getFullChat/) | Получить полную информацию об [обычной группе](/api/channel/#basic-groups). |
| [messages.getFutureChatCreatorAfterLeave](/method/messages.getFutureChatCreatorAfterLeave/) | Только для владельцев групп и каналов: возвращает идентификатор пользователя, который станет новым владельцем группы, если мы решим её покинуть; подробнее о полном порядке действий см. [здесь »](/api/channel/#leaving-groups-channels). |
| [messages.getGameHighScores](/method/messages.getGameHighScores/) | Получить рекорды в игре |
| [messages.getHistory](/method/messages.getHistory/) | Возвращает историю сообщений в пире. |
| [messages.getInlineBotResults](/method/messages.getInlineBotResults/) | Запрос к инлайн-боту |
| [messages.getInlineGameHighScores](/method/messages.getInlineGameHighScores/) | Получить рекорды в игре, отправленной через инлайн-бота |
| [messages.getMaskStickers](/method/messages.getMaskStickers/) | Получить установленные стикеры-маски |
| [messages.getMessageEditData](/method/messages.getMessageEditData/) | Узнать, можно ли изменить подпись к медиасообщению |
| [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/) | Получить список [реакций на сообщение](/api/reactions/) вместе с отправителем каждой реакции. |
| [messages.getMessageReadParticipants](/method/messages.getMessageReadParticipants/) | Получить список пользователей, прочитавших определённое сообщение: доступно только для групп и супергрупп, где менее [`chat_read_mark_size_threshold` участников](/api/config/#chat-read-mark-size-threshold); сведения о прочтении хранятся в течение [`chat_read_mark_expire_period` секунд после отправки сообщения](/api/config/#chat-read-mark-expire-period), подробнее см. [конфигурацию клиента »](/api/config/#client-configuration). |
| [messages.getMessages](/method/messages.getMessages/) | Возвращает список сообщений по их идентификаторам. |
| [messages.getMessagesReactions](/method/messages.getMessagesReactions/) | Получить [реакции на сообщения »](/api/reactions/) |
| [messages.getMessagesViews](/method/messages.getMessagesViews/) | Получить и увеличить счётчик просмотров сообщения, отправленного или пересланного из [канала](/api/channel/) |
| [messages.getMyStickers](/method/messages.getMyStickers/) | Получить все [наборы стикеров »](/api/stickers/), принадлежащие текущему пользователю. |
| [messages.getOldFeaturedStickers](/method/messages.getOldFeaturedStickers/) | Метод для получения ранее рекомендуемых стикеров |
| [messages.getOnlines](/method/messages.getOnlines/) | Получить количество пользователей чата, находящихся в сети |
| [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/) | Получить точную дату прочтения одного из наших сообщений, отправленных в личный чат с другим пользователем. |
| [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) | Получает обновление [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) с текущей [настройкой приватности платных реакций по умолчанию, подробнее см. здесь »](/api/reactions/#paid-reactions). |
| [messages.getPeerDialogs](/method/messages.getPeerDialogs/) | Получить сведения о диалогах указанных пиров |
| [messages.getPeerSettings](/method/messages.getPeerSettings/) | Получить настройки пира |
| [messages.getPersonalChannelHistory](/method/messages.getPersonalChannelHistory/) | Получить историю сообщений [персонального канала »](/api/profile/#personal-channel) пользователя. |
| [messages.getPinnedDialogs](/method/messages.getPinnedDialogs/) | Получить закреплённые диалоги |
| [messages.getPinnedSavedDialogs](/method/messages.getPinnedSavedDialogs/) | Получить закреплённые [сохранённые диалоги, подробнее см. здесь »](/api/saved-messages/). |
| [messages.getPollResults](/method/messages.getPollResults/) | Получить результаты опроса |
| [messages.getPollVotes](/method/messages.getPollVotes/) | Получить результаты неанонимных опросов |
| [messages.getPreparedInlineMessage](/method/messages.getPreparedInlineMessage/) | Получить [заранее подготовленное инлайн-сообщение](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message), созданное [mini app](/api/bots/webapps/): вызывается при обработке [событий web\_app\_send\_prepared\_message](/api/web-events/#web-app-send-prepared-message) |
| [messages.getQuickReplies](/method/messages.getQuickReplies/) | Получить основные сведения обо всех существующих [шаблонах быстрых ответов](/api/business/#quick-reply-shortcuts). |
| [messages.getQuickReplyMessages](/method/messages.getQuickReplyMessages/) | Получить сообщения (все или их часть) в [шаблоне быстрого ответа »](/api/business/#quick-reply-shortcuts). |
| [messages.getRecentLocations](/method/messages.getRecentLocations/) | Получить все недавние [трансляции геопозиции](/api/live-location/), отправленные в определённый чат: возвращает не более одного сообщения с геопозицией ([messageMediaGeoLive](/constructor/messageMediaGeoLive/)) на каждого участника чата. |
| [messages.getRecentReactions](/method/messages.getRecentReactions/) | Получить недавно использованные [реакции на сообщения](/api/reactions/) |
| [messages.getRecentStickers](/method/messages.getRecentStickers/) | Получить недавние стикеры |
| [messages.getReplies](/method/messages.getReplies/) | Получить сообщения из ветки обсуждения |
| [messages.getSavedDialogs](/method/messages.getSavedDialogs/) | Возвращает текущий [список избранных диалогов »](/api/saved-messages/) или [список тем монофорума »](/api/monoforum/). |
| [messages.getSavedDialogsByID](/method/messages.getSavedDialogsByID/) | Получить информацию о конкретных [диалогах сохранённых сообщений »](/api/saved-messages/#saved-message-dialogs) или [темах монофорума »](/api/monoforum/). |
| [messages.getSavedGifs](/method/messages.getSavedGifs/) | Получить сохранённые GIF. |
| [messages.getSavedHistory](/method/messages.getSavedHistory/) | Получить [сохранённые сообщения »](/api/saved-messages/), пересланные от определённого пира, либо сообщения из [темы монофорума »](/api/monoforum/). |
| [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/) | Получить полный список [тегов сохранённых сообщений](/api/saved-messages/#tags), созданных пользователем. |
| [messages.getScheduledHistory](/method/messages.getScheduledHistory/) | Получить отложенные сообщения |
| [messages.getScheduledMessages](/method/messages.getScheduledMessages/) | Получить отложенные сообщения |
| [messages.getSearchCounters](/method/messages.getSearchCounters/) | Получить количество результатов, которые вернул бы вызов [messages.search](/method/messages.search/) с теми же параметрами |
| [messages.getSearchResultsCalendar](/method/messages.getSearchResultsCalendar/) | Возвращает информацию о следующих сообщениях указанного типа в чате с разбивкой по дням. |
| [messages.getSearchResultsPositions](/method/messages.getSearchResultsPositions/) | Возвращает разреженные позиции сообщений указанного типа в чате для реализации прокрутки общих медиа. |
| [messages.getSplitRanges](/method/messages.getSplitRanges/) | Получить диапазоны сообщений для сохранения истории чатов пользователя |
| [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/) | Получить список [рекламных сообщений для пира, подробнее см. здесь »](/api/sponsored-messages/). |
| [messages.getStickers](/method/messages.getStickers/) | Получить стикеры по эмодзи |
| [messages.getStickerSet](/method/messages.getStickerSet/) | Получить информацию о наборе стикеров |
| [messages.getSuggestedDialogFilters](/method/messages.getSuggestedDialogFilters/) | Получить [рекомендуемые папки](/api/folders/) |
| [messages.getTopReactions](/method/messages.getTopReactions/) | Получены популярные [реакции на сообщения](/api/reactions/) |
| [messages.getUnreadMentions](/method/messages.getUnreadMentions/) | Получить непрочитанные сообщения, в которых нас упомянули |
| [messages.getUnreadPollVotes](/method/messages.getUnreadPollVotes/) | Получить сообщения с опросами, в которых есть [непрочитанные голоса »](/api/poll/#unread-poll-votes) |
| [messages.getUnreadReactions](/method/messages.getUnreadReactions/) | Получить непрочитанные реакции на отправленные вами сообщения |
| [messages.getWebPage](/method/messages.getWebPage/) | Получить страницу [instant view](https://instantview.telegram.org) |
| [messages.getWebPagePreview](/method/messages.getWebPagePreview/) | Получить предпросмотр веб-страницы |
| [messages.hideAllChatJoinRequests](/method/messages.hideAllChatJoinRequests/) | Отклонить или одобрить все [заявки на вступление](/api/invites/#join-requests) в определённый чат или канал. |
| [messages.hideChatJoinRequest](/method/messages.hideChatJoinRequest/) | Отклонить или одобрить [заявку на вступление](/api/invites/#join-requests) в определённый чат или канал. |
| [messages.hidePeerSettingsBar](/method/messages.hidePeerSettingsBar/) | Должен вызываться после того, как пользователь скрыл [панель «пожаловаться на спам / добавить в контакты»](/api/action-bar/) нового чата; фактически запрещает пользователю выполнять действия, указанные в [панели действий »](/api/action-bar/). |
| [messages.importChatInvite](/method/messages.importChatInvite/) | Применить приглашение в чат и вступить в личный чат/супергруппу/канал |
| [messages.initHistoryImport](/method/messages.initHistoryImport/) | Импортировать историю переписки из стороннего мессенджера в определённый чат Telegram; [подробнее об импортированных чатах см. здесь »](/api/import/). |
| [messages.installStickerSet](/method/messages.installStickerSet/) | Установить набор стикеров |
| [messages.markDialogUnread](/method/messages.markDialogUnread/) | Вручную отметить диалог как непрочитанный |
| [messages.migrateChat](/method/messages.migrateChat/) | Превратить [обычную группу в супергруппу](/api/channel/#migration) |
| [messages.prolongWebView](/method/messages.prolongWebView/) | Сообщить серверу (со стороны пользователя), что пользователь всё ещё работает с веб-приложением. |
| [messages.rateTranscribedAudio](/method/messages.rateTranscribedAudio/) | Оценить [расшифровку голосового сообщения](/api/transcribe/) |
| [messages.readDiscussion](/method/messages.readDiscussion/) | Отметить [ветку](/api/threads/) как прочитанную |
| [messages.readEncryptedHistory](/method/messages.readEncryptedHistory/) | Отмечает историю сообщений в секретном чате как прочитанную. |
| [messages.readFeaturedStickers](/method/messages.readFeaturedStickers/) | Отметить новые рекомендуемые стикеры как просмотренные |
| [messages.readHistory](/method/messages.readHistory/) | Отмечает историю сообщений как прочитанную. |
| [messages.readMentions](/method/messages.readMentions/) | Отметить упоминания как прочитанные; может использоваться в [форумах](/api/forum/), но **не может** использоваться в [монофорумах](/api/monoforum/). |
| [messages.readMessageContents](/method/messages.readMessageContents/) | Уведомляет отправителя о том, что получатель прослушал голосовое сообщение или посмотрел видео, порождая [updateReadMessagesContents](/constructor/updateReadMessagesContents/). |
| [messages.readPollVotes](/method/messages.readPollVotes/) | Отметить все [непрочитанные голоса в опросах »](/api/poll/#unread-poll-votes) в чате как прочитанные |
| [messages.readReactions](/method/messages.readReactions/) | Отметить [реакции на сообщения »](/api/reactions/) как прочитанные |
| [messages.readSavedHistory](/method/messages.readSavedHistory/) | Отметить сообщения в [теме монофорума »](/api/monoforum/) как прочитанные. |
| [messages.receivedMessages](/method/messages.receivedMessages/) | Подтверждает получение сообщений клиентом, отменяет отправку PUSH-уведомлений. |
| [messages.receivedQueue](/method/messages.receivedQueue/) | Подтверждает получение сообщений в секретном чате клиентом, отменяет push-уведомления. |
| [messages.reorderPinnedDialogs](/method/messages.reorderPinnedDialogs/) | Изменить порядок закреплённых диалогов |
| [messages.reorderPinnedForumTopics](/method/messages.reorderPinnedForumTopics/) | Изменить порядок закреплённых тем форума |
| [messages.reorderPinnedSavedDialogs](/method/messages.reorderPinnedSavedDialogs/) | Изменить порядок закреплённых [диалогов из сохранённых сообщений »](/api/saved-messages/). |
| [messages.reorderQuickReplies](/method/messages.reorderQuickReplies/) | Изменить порядок [быстрых ответов](/api/business/#quick-reply-shortcuts). |
| [messages.reorderStickerSets](/method/messages.reorderStickerSets/) | Изменить порядок установленных наборов стикеров |
| [messages.report](/method/messages.report/) | Пожаловаться на сообщение в чате за нарушение условий использования Telegram |
| [messages.reportEncryptedSpam](/method/messages.reportEncryptedSpam/) | Пожаловаться на секретный чат за спам |
| [messages.reportMessagesDelivery](/method/messages.reportMessagesDelivery/) | Используется для [проверочных сообщений Telegram Gateway »](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification): сообщает серверу, что одно или несколько [сообщений](/constructor/message/) были получены клиентом, если этого требует флаг [message](/constructor/message/).**report\_delivery\_until\_date** или равнозначный флаг в [push-уведомлениях](/api/push-updates/). |
| [messages.reportMusicListen](/method/messages.reportMusicListen/) | Сообщить о длительности прослушивания музыкального трека (аудиодокумента без флага `voice`); подробнее обо всём процессе см. [здесь »](/api/views/#music-listens). |
| [messages.reportReaction](/method/messages.reportReaction/) | Пожаловаться на [реакцию на сообщение](/api/reactions/) |
| [messages.reportReadMetrics](/method/messages.reportReadMetrics/) | Передать метрики просмотра для видимых сообщений, указывающие, как долго каждое сообщение оставалось в области просмотра чата; подробнее обо всём процессе см. [здесь »](/api/views/#read-metrics). |
| [messages.reportSpam](/method/messages.reportSpam/) | Пожаловаться на новый входящий чат за спам, если [настройки пира](/constructor/peerSettings/) этого чата позволяют это сделать |
| [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/) | Пожаловаться на [рекламное сообщение »](/api/sponsored-messages/); подробнее обо всём процессе см. [здесь »](/api/sponsored-messages/#reporting-sponsored-messages). |
| [messages.requestAppWebView](/method/messages.requestAppWebView/) | Открыть [mini app бота](https://core.telegram.org/bots/webapps) по [прямой ссылке на Mini App](/api/links/#direct-mini-app-links), передав сведения о пользователе после его подтверждения. |
| [messages.requestEncryption](/method/messages.requestEncryption/) | Отправляет пользователю запрос на создание секретного чата. |
| [messages.requestMainWebView](/method/messages.requestMainWebView/) | Открыть [Main Mini App](/api/bots/webapps/#main-mini-apps). |
| [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/) | Открыть [mini app бота](/api/bots/webapps/). |
| [messages.requestUrlAuth](/method/messages.requestUrlAuth/) | Получить дополнительную информацию о запросе авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/) |
| [messages.requestWebView](/method/messages.requestWebView/) | Открыть [mini app бота](https://core.telegram.org/bots/webapps), передав сведения о пользователе после его подтверждения. |
| [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/) | Изменить пир по умолчанию, используемый при отправке сообщений, реакций и голосов в опросах в определённую группу |
| [messages.saveDraft](/method/messages.saveDraft/) | Сохранить [черновик](/api/drafts/) сообщения, связанный с чатом. |
| [messages.saveGif](/method/messages.saveGif/) | Добавить GIF в список сохранённых GIF |
| [messages.savePreparedInlineMessage](/method/messages.savePreparedInlineMessage/) | Сохранить [заранее подготовленное инлайн-сообщение](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message) для отправки пользователем mini app через [событие web\_app\_send\_prepared\_message](/api/web-events/#web-app-send-prepared-message) |
| [messages.saveRecentSticker](/method/messages.saveRecentSticker/) | Добавить стикер в список недавних стикеров или удалить его оттуда |
| [messages.search](/method/messages.search/) | Поиск сообщений. |
| [messages.searchCustomEmoji](/method/messages.searchCustomEmoji/) | Искать [пользовательские эмодзи](/api/custom-emoji/), связанные с UTF8-эмодзи |
| [messages.searchEmojiStickerSets](/method/messages.searchEmojiStickerSets/) | Поиск [наборов стикеров с пользовательскими эмодзи »](/api/custom-emoji/) |
| [messages.searchGlobal](/method/messages.searchGlobal/) | Глобальный поиск сообщений и пиров |
| [messages.searchSentMedia](/method/messages.searchSentMedia/) | Просмотр и поиск среди недавно отправленных медиафайлов. |
| [messages.searchStickers](/method/messages.searchStickers/) | Поиск стикеров по ключевым словам с использованием ИИ |
| [messages.searchStickerSets](/method/messages.searchStickerSets/) | Поиск наборов стикеров |
| [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) | Отправить один или несколько выбранных пиров по запросу кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/). |
| [messages.sendEncrypted](/method/messages.sendEncrypted/) | Отправляет текстовое сообщение в секретный чат. |
| [messages.sendEncryptedFile](/method/messages.sendEncryptedFile/) | Отправляет в секретный чат сообщение с вложенным файлом |
| [messages.sendEncryptedService](/method/messages.sendEncryptedService/) | Отправляет сервисное сообщение в секретный чат. |
| [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/) | Отправить результат, полученный с помощью [messages.getInlineBotResults](/method/messages.getInlineBotResults/). |
| [messages.sendMedia](/method/messages.sendMedia/) | Отправить медиа |
| [messages.sendMessage](/method/messages.sendMessage/) | Отправляет сообщение в чат |
| [messages.sendMultiMedia](/method/messages.sendMultiMedia/) | Отправить [альбом или сгруппированные медиафайлы](/api/files/#albums-grouped-media) |
| [messages.sendPaidReaction](/method/messages.sendPaidReaction/) | Отправляет одну или несколько [платных реакций Telegram Stars »](/api/reactions/#paid-reactions), переводя [Telegram Stars »](/api/stars/) на баланс канала. |
| [messages.sendQuickReplyMessages](/method/messages.sendQuickReplyMessages/) | Отправить [шаблон быстрого ответа »](/api/business/#quick-reply-shortcuts). |
| [messages.sendReaction](/method/messages.sendReaction/) | Поставить реакцию на сообщение. |
| [messages.sendScheduledMessages](/method/messages.sendScheduledMessages/) | Немедленно отправить отложенные сообщения |
| [messages.sendScreenshotNotification](/method/messages.sendScreenshotNotification/) | Уведомить собеседника в личном чате о том, что сделан снимок экрана чата |
| [messages.sendVote](/method/messages.sendVote/) | Проголосовать в [опросе](/constructor/poll/) |
| [messages.sendWebViewData](/method/messages.sendWebViewData/) | Используется пользователем для передачи данных из открытого [бот-мини-приложения на клавиатуре ответа](/api/bots/webapps/) боту, которому оно принадлежит. |
| [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/) | Завершить взаимодействие с веб-представлением, начатое через [messages.requestWebView](/method/messages.requestWebView/), отправив указанное сообщение в чат от имени пользователя. |
| [messages.setBotCallbackAnswer](/method/messages.setBotCallbackAnswer/) | Задать ответ обратного вызова на нажатие кнопки пользователем (только для ботов) |
| [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/) | Боты могут использовать этот метод, чтобы ответить на запрос [гостевого режима »](/api/bots/guest-mode/), полученный через обновление [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/), передав сообщение для публикации в чате в качестве гостя; подробнее [см. здесь »](/api/bots/guest-mode/#handling-guest-queries-bot-side). |
| [messages.setBotPrecheckoutResults](/method/messages.setBotPrecheckoutResults/) | После того как пользователь подтвердил платёж и данные доставки, бот получает обновление [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/). |
| [messages.setBotShippingResults](/method/messages.setBotShippingResults/) | Если вы отправили счёт, запрашивающий адрес доставки, и был указан параметр is\_flexible, бот получит обновление [updateBotShippingQuery](/constructor/updateBotShippingQuery/). Используйте этот метод, чтобы ответить на запросы доставки. |
| [messages.setChatAvailableReactions](/method/messages.setChatAvailableReactions/) | Изменить набор [реакций на сообщения »](/api/reactions/), которые можно использовать в определённой группе, супергруппе или канале |
| [messages.setChatTheme](/method/messages.setChatTheme/) | Изменить тему оформления определённого чата, подробнее [здесь »](/api/themes/#chat-themes). |
| [messages.setChatWallPaper](/method/messages.setChatWallPaper/) | Установить пользовательские [обои »](/api/wallpapers/) в конкретном личном чате с другим пользователем. |
| [messages.setDefaultHistoryTTL](/method/messages.setDefaultHistoryTTL/) | Изменяет значение по умолчанию настройки времени жизни сообщений (Time-To-Live), применяемое ко всем новым чатам. |
| [messages.setDefaultReaction](/method/messages.setDefaultReaction/) | Изменить эмодзи-реакцию по умолчанию, используемую в меню быстрых реакций: значение синхронизируется между устройствами и может быть получено через [help.getConfig, поле `reactions_default`](/method/help.getConfig/). |
| [messages.setEncryptedTyping](/method/messages.setEncryptedTyping/) | Отправить событие набора текста текущим пользователем в секретный чат. |
| [messages.setGameScore](/method/messages.setGameScore/) | Этот метод позволяет задать счёт указанного пользователя в игре, отправленной обычным сообщением (только для ботов). |
| [messages.setHistoryTTL](/method/messages.setHistoryTTL/) | Задать максимальное время жизни (TTL) всех сообщений в указанном чате |
| [messages.setInlineBotResults](/method/messages.setInlineBotResults/) | Ответить на инлайн-запрос, только для ботов |
| [messages.setInlineGameScore](/method/messages.setInlineGameScore/) | Этот метод позволяет задать счёт указанного пользователя в игре, отправленной инлайн-сообщением (только для ботов). |
| [messages.setTyping](/method/messages.setTyping/) | Отправляет событие набора текста текущим пользователем (все типы событий см. в [SendMessageAction](/type/SendMessageAction/)) собеседнику или в группу. |
| [messages.startBot](/method/messages.startBot/) | Начать переписку с ботом, используя [параметр глубокой ссылки](/api/links/#bot-links) |
| [messages.startHistoryImport](/method/messages.startHistoryImport/) | Завершить [процесс импорта истории](/api/import/), импортировав все сообщения в чат. |
| [messages.summarizeText](/method/messages.summarizeText/) | Составить краткое содержание сообщения с помощью ИИ; подробнее см. [здесь »](/api/ai/#summarize-messages). |
| [messages.toggleBotInAttachMenu](/method/messages.toggleBotInAttachMenu/) | Включить или отключить [меню вложений веб-бота »](/api/bots/attach/) |
| [messages.toggleDialogFilterTags](/method/messages.toggleDialogFilterTags/) | Включить или отключить [теги папок »](/api/folders/#folder-tags). |
| [messages.toggleDialogPin](/method/messages.toggleDialogPin/) | Закрепить или открепить диалог |
| [messages.toggleNoForwards](/method/messages.toggleNoForwards/) | Включить или отключить [защиту контента](/api/content-protection/) в канале, группе или личном чате. |
| [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/) | Изменяет приватность уже отправленных [платных реакций](/api/reactions/#paid-reactions) на конкретное сообщение. |
| [messages.togglePeerTranslations](/method/messages.togglePeerTranslations/) | Показать или скрыть [всплывающее окно перевода чата в реальном времени](/api/translation/) для определённого чата |
| [messages.toggleSavedDialogPin](/method/messages.toggleSavedDialogPin/) | Закрепить или открепить [диалог сохранённых сообщений »](/api/saved-messages/). |
| [messages.toggleStickerSets](/method/messages.toggleStickerSets/) | Применить изменения к нескольким наборам стикеров |
| [messages.toggleSuggestedPostApproval](/method/messages.toggleSuggestedPostApproval/) | Одобрить или отклонить [предлагаемый пост »](/api/suggested-posts/). |
| [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/) | Отметить один или несколько пунктов [списка задач »](/api/todo/) как выполненные или невыполненные. |
| [messages.transcribeAudio](/method/messages.transcribeAudio/) | [Расшифровка голосовых сообщений](/api/transcribe/) |
| [messages.translateText](/method/messages.translateText/) | Перевести заданный текст. |
| [messages.uninstallStickerSet](/method/messages.uninstallStickerSet/) | Удалить набор стикеров |
| [messages.unpinAllMessages](/method/messages.unpinAllMessages/) | [Открепить](/api/pin/) все закреплённые сообщения |
| [messages.updateDialogFilter](/method/messages.updateDialogFilter/) | Обновить [папку](/api/folders/) |
| [messages.updateDialogFiltersOrder](/method/messages.updateDialogFiltersOrder/) | Изменить порядок [папок](/api/folders/) |
| [messages.updatePinnedForumTopic](/method/messages.updatePinnedForumTopic/) | Закрепить или открепить [темы форума](/api/forum/) |
| [messages.updatePinnedMessage](/method/messages.updatePinnedMessage/) | Закрепить сообщение |
| [messages.updateSavedReactionTag](/method/messages.updateSavedReactionTag/) | Обновить [описание тега сохранённого сообщения »](/api/saved-messages/#tags). |
| [messages.uploadEncryptedFile](/method/messages.uploadEncryptedFile/) | Загрузить зашифрованный файл и связать его с секретным чатом (без отправки в сам чат). |
| [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/) | Загрузить медиафайл, связанный с [импортированным чатом; подробнее см. здесь »](/api/import/). |
| [messages.uploadMedia](/method/messages.uploadMedia/) | Загрузить файл и связать его с чатом (не отправляя его в чат) |
| [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/) | Отметить конкретное [рекламное сообщение »](/api/sponsored-messages/) как прочитанное |
| [payments.applyGiftCode](/method/payments.applyGiftCode/) | Активировать [подарочный код Telegram Premium »](/api/giveaways/) |
| [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/) | Сообщает серверу о покупке, совершённой через App Store: только для официальных приложений. |
| [payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/) | Сообщает серверу о покупке, совершённой через Play Store: только для официальных приложений. |
| [payments.botCancelStarsSubscription](/method/payments.botCancelStarsSubscription/) | Отменить [подписку на бота](/api/subscriptions/#bot-subscriptions) |
| [payments.canPurchaseStore](/method/payments.canPurchaseStore/) | Проверяет, возможна ли покупка. Обязан вызываться перед покупкой во внутреннем магазине, только для официальных клиентов. |
| [payments.changeStarsSubscription](/method/payments.changeStarsSubscription/) | Активировать или деактивировать [подписку за Telegram Stars »](/api/invites/#paid-invite-links). |
| [payments.checkCanSendGift](/method/payments.checkCanSendGift/) | Проверить, можно ли отправить указанный [подарок »](/api/gifts/). |
| [payments.checkGiftCode](/method/payments.checkGiftCode/) | Получить сведения о [подарочном коде Telegram Premium »](/api/giveaways/) |
| [payments.clearSavedInfo](/method/payments.clearSavedInfo/) | Удалить сохранённые платёжные данные |
| [payments.connectStarRefBot](/method/payments.connectStarRefBot/) | Присоединиться к [партнёрской программе бота, став партнёром »](/api/bots/referrals/#becoming-an-affiliate) |
| [payments.convertStarGift](/method/payments.convertStarGift/) | Преобразовать [полученный подарок »](/api/gifts/) в Telegram Stars: подарок будет безвозвратно уничтожен и превращён в [starGift](/constructor/starGift/).`convert_stars` [Telegram Stars](/api/stars/), которые будут зачислены на баланс пользователя. |
| [payments.craftStarGift](/method/payments.craftStarGift/) | Создать новый [коллекционный подарок »](/api/gifts/#collectible-gifts), объединив от 1 до 4 принадлежащих вам коллекционных подарков одного и того же базового типа. |
| [payments.createStarGiftCollection](/method/payments.createStarGiftCollection/) | Создать [коллекцию звёздных подарков »](/api/gifts/#gift-collections). |
| [payments.deleteStarGiftCollection](/method/payments.deleteStarGiftCollection/) | Удалить [коллекцию звёздных подарков »](/api/gifts/#gift-collections). |
| [payments.editConnectedStarRefBot](/method/payments.editConnectedStarRefBot/) | Выйти из [партнёрской программы »](/api/bots/referrals/#becoming-an-affiliate) бота |
| [payments.exportInvoice](/method/payments.exportInvoice/) | Создать [глубокую ссылку на счёт](/api/links/#invoice-links) |
| [payments.fulfillStarsSubscription](/method/payments.fulfillStarsSubscription/) | Повторно вступить в приватный канал, связанный с активной [подпиской за Telegram Stars »](/api/invites/#paid-invite-links). |
| [payments.getBankCardData](/method/payments.getBankCardData/) | Получить сведения о банковской карте |
| [payments.getConnectedStarRefBot](/method/payments.getConnectedStarRefBot/) | Получить сведения о конкретном [партнёрстве с ботом »](/api/bots/referrals/) |
| [payments.getConnectedStarRefBots](/method/payments.getConnectedStarRefBots/) | Получить все партнёрства, созданные нами для определённого пира |
| [payments.getCraftStarGifts](/method/payments.getCraftStarGifts/) | Получить принадлежащие пользователю [коллекционные подарки »](/api/gifts/#collectible-gifts) определённого типа, которые можно использовать для [создания »](/api/gifts/#crafting-collectible-gifts). |
| [payments.getGiveawayInfo](/method/payments.getGiveawayInfo/) | Получить сведения о [розыгрыше Telegram Premium »](/api/giveaways/). |
| [payments.getPaymentForm](/method/payments.getPaymentForm/) | Получить форму оплаты |
| [payments.getPaymentReceipt](/method/payments.getPaymentReceipt/) | Получить чек об оплате |
| [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/) | Получить список вариантов [розыгрыша или подарочного кода »](/api/giveaways/) Telegram Premium. |
| [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) | Получить [коллекционные подарки](/api/gifts/#collectible-gifts) определённого типа, выставленные на перепродажу; подробнее [см. здесь »](/api/gifts/#reselling-collectible-gifts). |
| [payments.getSavedInfo](/method/payments.getSavedInfo/) | Получить сохранённые платёжные данные |
| [payments.getSavedStarGift](/method/payments.getSavedStarGift/) | Получить сведения о конкретных [подарках](/api/gifts/), принадлежащих подконтрольному нам пиру. |
| [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) | Получить полный список [подарков »](/api/gifts/#list-all-received-gifts), которыми пир владеет, которые он получил или [размещает »](/api/gifts/#hosted-collectible-gifts). |
| [payments.getStarGiftActiveAuctions](/method/payments.getStarGiftActiveAuctions/) | Получает все текущие активные [аукционы подарков](/api/auctions/), **на которых пользователь когда-либо делал ставку** (включая аукционы, где ставку пользователя перебили и она была возвращена), при условии что аукцион ещё не завершился. |
| [payments.getStarGiftAuctionAcquiredGifts](/method/payments.getStarGiftAuctionAcquiredGifts/) | Получает все подарки, которые текущий пользователь выиграл на [аукционе](/api/auctions/). |
| [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/) | Возвращает сведения об [аукционе коллекционных подарков »](/api/auctions/); также подписывает пользователя на обновления аукциона, подробнее обо всём процессе см. [здесь »](/api/auctions/). |
| [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/) | Получает все [коллекции звёздных подарков »](/api/gifts/#gift-collections) пира. |
| [payments.getStarGifts](/method/payments.getStarGifts/) | Получить список доступных [подарков, подробнее см. здесь »](/api/gifts/). |
| [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/) | Получает **полный** список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его превращения в [коллекционный подарок »](/api/gifts/#collectible-gifts). |
| [payments.getStarGiftUpgradePreview](/method/payments.getStarGiftUpgradePreview/) | Получить предпросмотр возможных атрибутов (выбираемых случайно), которые [подарок »](/api/gifts/) может получить после улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/gifts/#collectible-gifts). |
| [payments.getStarGiftWithdrawalUrl](/method/payments.getStarGiftWithdrawalUrl/) | Преобразовать [коллекционный подарок »](/api/gifts/) в NFT в блокчейне TON. |
| [payments.getStarsGiftOptions](/method/payments.getStarsGiftOptions/) | Получить список [вариантов подарка за Telegram Stars »](/api/stars/#buying-or-gifting-stars) в виде конструкторов [starsGiftOption](/constructor/starsGiftOption/). |
| [payments.getStarsGiveawayOptions](/method/payments.getStarsGiveawayOptions/) | Получить список [вариантов розыгрыша звёзд »](/api/giveaways/#star-giveaways). |
| [payments.getStarsRevenueAdsAccountUrl](/method/payments.getStarsRevenueAdsAccountUrl/) | Возвращает URL аккаунта рекламной платформы Telegram, который можно использовать для настройки рекламы канала или бота в `peer` с оплатой звёздами Telegram Stars, принадлежащими указанному `peer`; подробнее см. [здесь »](/api/stars/#paying-for-ads). |
| [payments.getStarsRevenueStats](/method/payments.getStarsRevenueStats/) | Получить [статистику доходов в Telegram Stars »](/api/stars/). |
| [payments.getStarsRevenueWithdrawalUrl](/method/payments.getStarsRevenueWithdrawalUrl/) | Вывести средства с [баланса Stars »](/api/stars/#withdrawing-revenue) канала или бота. |
| [payments.getStarsStatus](/method/payments.getStarsStatus/) | Получить текущий [баланс Telegram Stars](/api/stars/) текущего аккаунта (при peer=[inputPeerSelf](/constructor/inputPeerSelf/)) либо баланс звёзд бота или канала, указанного в `peer`. |
| [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/) | Получить список активных, истёкших или отменённых [подписок за Telegram Stars »](/api/invites/#paid-invite-links). |
| [payments.getStarsTopupOptions](/method/payments.getStarsTopupOptions/) | Получить список [вариантов пополнения баланса Telegram Stars »](/api/stars/#buying-or-gifting-stars) в виде конструкторов [starsTopupOption](/constructor/starsTopupOption/). |
| [payments.getStarsTransactions](/method/payments.getStarsTransactions/) | Получить [транзакции Telegram Stars](/api/stars/#balance-and-transaction-history). |
| [payments.getStarsTransactionsByID](/method/payments.getStarsTransactionsByID/) | Получить информацию о [транзакциях Telegram Stars »](/api/stars/#balance-and-transaction-history) по конкретным идентификаторам транзакций. |
| [payments.getSuggestedStarRefBots](/method/payments.getSuggestedStarRefBots/) | Получить список рекомендуемых [mini apps](/api/bots/webapps/) с доступными [партнёрскими программами](/api/bots/referrals/) |
| [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/) | Получить сведения о [коллекционном подарке »](/api/gifts/#collectible-gifts) по слагу, полученному из [ссылки на коллекционный подарок »](/api/links/#collectible-gift-link). |
| [payments.getUniqueStarGiftValueInfo](/method/payments.getUniqueStarGiftValueInfo/) | Получить информацию о стоимости [коллекционного подарка »](/api/gifts/#collectible-gifts). |
| [payments.launchPrepaidGiveaway](/method/payments.launchPrepaidGiveaway/) | Запустить [предоплаченный розыгрыш »](/api/giveaways/). |
| [payments.refundStarsCharge](/method/payments.refundStarsCharge/) | Вернуть средства по транзакции [Telegram Stars](/api/stars/); подробнее см. [здесь »](/api/payments/#6-refunds). |
| [payments.reorderStarGiftCollections](/method/payments.reorderStarGiftCollections/) | Изменить порядок [коллекций звёздных подарков »](/api/gifts/#gift-collections) в профиле принадлежащего нам пира. |
| [payments.resolveStarGiftOffer](/method/payments.resolveStarGiftOffer/) | Принять или отклонить полученное ранее [предложение о покупке коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полный порядок действий описан [здесь »](/api/gifts/#collectible-gift-purchase-offers). |
| [payments.saveStarGift](/method/payments.saveStarGift/) | Показать в нашем профиле или убрать из него [полученный или размещённый подарок »](/api/gifts/#hosted-collectible-gifts). |
| [payments.sendPaymentForm](/method/payments.sendPaymentForm/) | Отправить заполненную форму оплаты |
| [payments.sendStarGiftOffer](/method/payments.sendStarGiftOffer/) | Отправить предложение о покупке [коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полный порядок действий см. [здесь »](/api/gifts/#collectible-gift-purchase-offers). |
| [payments.sendStarsForm](/method/payments.sendStarsForm/) | Произвести оплату с помощью [Telegram Stars, подробнее »](/api/stars/#using-stars). |
| [payments.toggleChatStarGiftNotifications](/method/payments.toggleChatStarGiftNotifications/) | Включает или отключает получение уведомлений при каждом получении [подарка »](/api/gifts/) указанным каналом; может вызываться только администраторами с [правом администратора](/constructor/chatAdminRights/) `post_messages`. |
| [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/) | Закрепляет полученный подарок в верхней части профиля пользователя или принадлежащих ему каналов с помощью [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/). |
| [payments.transferStarGift](/method/payments.transferStarGift/) | Передать [коллекционный подарок](/api/gifts/#collectible-gifts) другому пользователю или каналу: можно использовать, только если передача бесплатна (то есть поле [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).`transfer_stars` не установлено); подробнее обо всём процессе (включая другой порядок действий на случай, когда передача платная) см. [здесь »](/api/gifts/#transferring-collectible-gifts). |
| [payments.updateStarGiftCollection](/method/payments.updateStarGiftCollection/) | Добавить подарки в [коллекцию звёздных подарков »](/api/gifts/#gift-collections) или удалить их оттуда, либо переименовать коллекцию. |
| [payments.updateStarGiftPrice](/method/payments.updateStarGiftPrice/) | [Принадлежащий нам коллекционный подарок »](/api/gifts/#collectible-gifts) можно выставить на продажу на [торговой площадке подарков »](https://telegram.org/blog/gift-marketplace-and-more) с помощью этого метода; подробнее [см. здесь »](/api/gifts/#reselling-collectible-gifts). |
| [payments.upgradeStarGift](/method/payments.upgradeStarGift/) | Улучшить [подарок](/api/gifts/) до [коллекционного подарка](/api/gifts/#collectible-gifts): может использоваться, только если улучшение уже оплачено отправителем подарка; подробнее о полном порядке действий (включая другой порядок на случай, когда улучшение не было оплачено отправителем подарка) [см. здесь »](/api/gifts/#upgrade-a-gift-to-a-collectible-gift). |
| [payments.validateRequestedInfo](/method/payments.validateRequestedInfo/) | Отправить запрошенные сведения о заказе на проверку |
| [phone.acceptCall](/method/phone.acceptCall/) | Принять входящий звонок; подробнее о полном процессе см. [здесь »](/api/calls/#one-to-one-calls). |
| [phone.checkGroupCall](/method/phone.checkGroupCall/) | Проверить, какие из указанных идентификаторов источников сервер по-прежнему считает подключёнными к групповому звонку. Этот метод применим ко всем типам групповых звонков, подробнее см. [здесь »](/api/group-calls/#maintaining-group-call-connections). |
| [phone.confirmCall](/method/phone.confirmCall/) | [Завершить обмен ключами сквозного шифрования для звонка »](/api/end-to-end/voice-calls/); подробнее о полном порядке действий см. [здесь »](/api/calls/#one-to-one-calls). |
| [phone.createConferenceCall](/method/phone.createConferenceCall/) | Создать новый [конференц-звонок »](/api/group-calls/#conference-calls) и при желании присоединиться к нему. |
| [phone.createGroupCall](/method/phone.createGroupCall/) | Создать видеочат или трансляцию; полный порядок действий см. [здесь »](/api/group-calls/#video-chats-livestreams). |
| [phone.declineConferenceCallInvite](/method/phone.declineConferenceCallInvite/) | Отклонить приглашение на [конференц-звонок](/api/group-calls/#conference-calls). |
| [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) | Удалить участников из [конференц-звонка »](/api/end-to-end/group-calls/#removing-a-participant). |
| [phone.deleteGroupCallMessages](/method/phone.deleteGroupCallMessages/) | Удалить определённые сообщения из [наложения сообщений во время звонка »](/api/group-calls/#in-call-messages) видеочата, трансляции или прямой истории, в том числе в режиме RTMP. |
| [phone.deleteGroupCallParticipantMessages](/method/phone.deleteGroupCallParticipantMessages/) | Будучи администратором, удалить все сообщения определённого участника в [наложении сообщений во время звонка »](/api/group-calls/#in-call-messages) видеочата, трансляции или прямого эфира в историях, в том числе в режиме RTMP. |
| [phone.discardCall](/method/phone.discardCall/) | Отклонить или завершить текущий звонок; подробнее о полном порядке действий см. [здесь »](/api/calls/#one-to-one-calls). |
| [phone.discardGroupCall](/method/phone.discardGroupCall/) | Завершить групповой звонок, закрыв комнату для всех участников. Этот метод можно использовать с групповыми звонками любого типа, подробнее см. [здесь »](/api/group-calls/#managing-an-active-group-call). |
| [phone.editGroupCallParticipant](/method/phone.editGroupCallParticipant/) | Изменить сведения об участнике видеочата, трансляции или конференции без RTMP. Поле `raise_hand` поддерживается только в видеочатах и трансляциях; подробнее см. [здесь »](/api/group-calls/#managing-an-active-group-call). |
| [phone.editGroupCallTitle](/method/phone.editGroupCallTitle/) | Изменить название видеочата или трансляции. Этот метод нельзя использовать с прямыми историями и конференциями; подробнее см. [здесь »](/api/group-calls/#video-chats-livestreams). |
| [phone.exportGroupCallInvite](/method/phone.exportGroupCallInvite/) | Получить пригласительную ссылку на публичный [видеочат или трансляцию »](/api/group-calls/#video-chats-livestreams). |
| [phone.getCallConfig](/method/phone.getCallConfig/) | УСТАРЕЛО: получить конфигурацию звонков для передачи в общую конфигурацию libtgvoip (устаревшей библиотеки). |
| [phone.getGroupCall](/method/phone.getGroupCall/) | Получить информацию о [групповом звонке](/api/group-calls/#getting-info-about-a-group-call) и его участниках. |
| [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) | Получить блоки из [подцепочки »](/api/end-to-end/group-calls/#subchains) группового звонка-конференции; возвращённое обновление [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) следует обрабатывать [как описано здесь »](/api/end-to-end/group-calls/#handling-updates). |
| [phone.getGroupCallJoinAs](/method/phone.getGroupCallJoinAs/) | Получить список пиров, от имени которых можно присоединиться к [видеочату или трансляции »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels), представившись определённым пользователем или каналом. |
| [phone.getGroupCallStars](/method/phone.getGroupCallStars/) | Получить общую сумму пожертвований для прямой истории и список крупнейших жертвователей, см. [платные пожертвования в прямых историях »](/api/group-calls/#paid-live-story-donations). |
| [phone.getGroupCallStreamChannels](/method/phone.getGroupCallStreamChannels/) | Получить доступные каналы потока и текущую позицию воспроизведения видеочата, трансляции или прямой истории в режиме RTMP; полный порядок действий описан [здесь »](/api/group-calls/#rtmp-mode). |
| [phone.getGroupCallStreamRtmpUrl](/method/phone.getGroupCallStreamRtmpUrl/) | Получить URL для RTMP и ключ потока, используемые единственным внешним вещателем, который публикует весь звук и видео для видеочата, трансляции или прямой истории в режиме RTMP. |
| [phone.getGroupParticipants](/method/phone.getGroupParticipants/) | Получить участников [группового звонка](/api/group-calls/#getting-info-about-a-group-call). |
| [phone.inviteConferenceCallParticipant](/method/phone.inviteConferenceCallParticipant/) | Пригласить пользователя в [конференц-звонок](/api/group-calls/#conference-calls). |
| [phone.inviteToGroupCall](/method/phone.inviteToGroupCall/) | Пригласить группу пользователей в [видеочат или трансляцию »](/api/group-calls/#video-chats-livestreams); нельзя использовать для [прямых историй »](/api/group-calls/#live-stories) и [конференц-звонков »](/api/group-calls/#conference-calls). |
| [phone.joinGroupCall](/method/phone.joinGroupCall/) | Присоединиться к групповому звонку [любого типа »](/api/group-calls/#group-call-types). Для конференций дополнительно требуется [сквозной сценарий подключения »](/api/end-to-end/group-calls/#joining-a-call). |
| [phone.joinGroupCallPresentation](/method/phone.joinGroupCallPresentation/) | Начать демонстрацию экрана в видеочате, трансляции или конференции без RTMP. Презентации не поддерживаются в прямых историях и в видеочатах или трансляциях в режиме RTMP; подробнее см. [здесь »](/api/group-calls/#presentations). |
| [phone.leaveGroupCall](/method/phone.leaveGroupCall/) | Покинуть групповой звонок, не завершая его для остальных участников. Этот метод можно использовать со всеми типами групповых звонков, подробнее [см. здесь »](/api/group-calls/#managing-an-active-group-call). |
| [phone.leaveGroupCallPresentation](/method/phone.leaveGroupCallPresentation/) | Прекратить демонстрацию экрана в видеочате, трансляции или конференции без RTMP. Презентации не поддерживаются в прямых историях и в видеочатах или трансляциях в режиме RTMP; подробнее см. [здесь »](/api/group-calls/#presentations). |
| [phone.receivedCall](/method/phone.receivedCall/) | Необязательно: уведомить сервер о том, что пользователь сейчас занят в звонке — это приведёт к автоматическому отклонению всех входящих звонков до завершения текущего; подробнее обо всём процессе см. [здесь »](/api/calls/#one-to-one-calls). |
| [phone.requestCall](/method/phone.requestCall/) | Начать телефонный звонок Telegram; подробнее о полном сценарии см. [здесь »](/api/calls/#one-to-one-calls). |
| [phone.saveCallDebug](/method/phone.saveCallDebug/) | Отправить на сервер отладочные данные [звонка](/api/calls/#call-debug). |
| [phone.saveCallLog](/method/phone.saveCallLog/) | Устарело: отправить отладочную информацию о звонке libtgvoip |
| [phone.saveDefaultGroupCallJoinAs](/method/phone.saveDefaultGroupCallJoinAs/) | Задать пир по умолчанию, используемый для присоединения к [видеочату или трансляции »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels), связанным с конкретным диалогом. |
| [phone.saveDefaultSendAs](/method/phone.saveDefaultSendAs/) | Сохранить пир, отображаемый по умолчанию как автор комментариев и реакций в прямых историях, см. [сообщения во время звонка »](/api/group-calls/#in-call-messages). |
| [phone.sendConferenceCallBroadcast](/method/phone.sendConferenceCallBroadcast/) | Отправить сообщение проверки в подцепочку `1` конференц-звонка, см. [подцепочки »](/api/end-to-end/group-calls/#subchains). |
| [phone.sendGroupCallEncryptedMessage](/method/phone.sendGroupCallEncryptedMessage/) | Отправить сообщение или эмодзи-реакцию со сквозным шифрованием всем участникам конференц-звонка. Этот метод можно использовать только с конференциями; о процессе сериализации и шифрования см. [здесь »](/api/end-to-end/group-calls/#conference-in-call-messages). |
| [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/) | Отправить сообщение внутри звонка всем участникам видеочата, трансляции или прямой истории, в том числе в режиме RTMP; подробнее см. [здесь »](/api/group-calls/#in-call-messages). |
| [phone.sendSignalingData](/method/phone.sendSignalingData/) | Отправить [сигнальные данные](/api/calls/#signaling-data) VoIP для текущего звонка. |
| [phone.setCallRating](/method/phone.setCallRating/) | Оценить звонок; возвращает сведения о сообщении с оценкой, отправленном официальному VoIP-боту; подробнее обо всём процессе см. [здесь »](/api/calls/#call-rating). |
| [phone.startScheduledGroupCall](/method/phone.startScheduledGroupCall/) | Начать запланированный [групповой звонок](/api/group-calls/#video-chats-livestreams). |
| [phone.toggleGroupCallRecord](/method/phone.toggleGroupCallRecord/) | Начать или остановить запись видеочата или трансляции; подробнее см. [здесь »](/api/group-calls/#video-chats-livestreams). Записанные аудио- и видеопотоки будут автоматически отправлены в «Избранное» (чат с самим собой). |
| [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/) | Изменить настройки группового звонка. Каждая настройка поддерживает разные типы групповых звонков, подробнее см. [здесь »](/api/group-calls/#managing-an-active-group-call). |
| [phone.toggleGroupCallStartSubscription](/method/phone.toggleGroupCallStartSubscription/) | Подписаться на запланированный [групповой звонок](/api/group-calls/#video-chats-livestreams) или отписаться от него. |
| [photos.deletePhotos](/method/photos.deletePhotos/) | Удаляет фотографии профиля. Метод возвращает список идентификаторов успешно удалённых фотографий. |
| [photos.getUserPhotos](/method/photos.getUserPhotos/) | Возвращает список фотографий пользователя. |
| [photos.updateProfilePhoto](/method/photos.updateProfilePhoto/) | Устанавливает ранее загруженную фотографию в качестве фотографии профиля. |
| [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/) | Загрузить собственную фотографию профиля для контакта или предложить контакту новую фотографию профиля. |
| [photos.uploadProfilePhoto](/method/photos.uploadProfilePhoto/) | Обновляет фотографию профиля текущего пользователя. |
| [premium.applyBoost](/method/premium.applyBoost/) | Применить один или несколько [бустов »](/api/boost/) к пиру. |
| [premium.getBoostsList](/method/premium.getBoostsList/) | Получает сведения о бустах, выданных определённому каналу или супергруппе (только для администраторов) |
| [premium.getBoostsStatus](/method/premium.getBoostsStatus/) | Получает текущее [количество бустов](/api/boost/) канала или супергруппы. |
| [premium.getMyBoosts](/method/premium.getMyBoosts/) | Получить список пиров, которых мы сейчас [бустим](/api/boost/), и количество оставшихся у нас [слотов буста](/api/boost/). |
| [premium.getUserBoosts](/method/premium.getUserBoosts/) | Возвращает списки бустов, применённых к каналу/супергруппе определённым пользователем (только для администраторов) |
| [smsjobs.finishJob](/method/smsjobs.finishJob/) | Завершить задание на отправку SMS (только для официальных клиентов). |
| [smsjobs.getSmsJob](/method/smsjobs.getSmsJob/) | Получить информацию о задании на отправку SMS (только для официальных клиентов). |
| [smsjobs.getStatus](/method/smsjobs.getStatus/) | Получить статус заданий на отправку SMS (только для официальных клиентов). |
| [smsjobs.isEligibleToJoin](/method/smsjobs.isEligibleToJoin/) | Проверить, можем ли мы обрабатывать задания на отправку SMS (только для официальных клиентов). |
| [smsjobs.join](/method/smsjobs.join/) | Включить задания на отправку SMS (только для официальных клиентов). |
| [smsjobs.leave](/method/smsjobs.leave/) | Отключить SMS-задания (только для официальных клиентов). |
| [smsjobs.updateSettings](/method/smsjobs.updateSettings/) | Обновить настройки заданий SMS (только для официальных клиентов). |
| [stats.getBroadcastStats](/method/stats.getBroadcastStats/) | Получить [статистику канала](/api/stats/) |
| [stats.getMegagroupStats](/method/stats.getMegagroupStats/) | Получить [статистику супергруппы](/api/stats/) |
| [stats.getMessagePublicForwards](/method/stats.getMessagePublicForwards/) | Получает список сообщений, показывающий, в какие другие публичные каналы было переслано сообщение канала. |
| [stats.getMessageStats](/method/stats.getMessageStats/) | Получить [статистику сообщения](/api/stats/) |
| [stats.getPollStats](/method/stats.getPollStats/) | Получить [статистику](/api/stats/#poll-statistics) опроса, отправленного в сообщении. |
| [stats.getStoryPublicForwards](/method/stats.getStoryPublicForwards/) | Получить пересылки [истории](/api/stories/) в виде сообщения в публичные чаты и репосты публичными каналами. |
| [stats.getStoryStats](/method/stats.getStoryStats/) | Получить [статистику](/api/stats/) по определённой [истории](/api/stories/). |
| [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/) | Асинхронно загрузить [график статистики канала](/api/stats/) |
| [stickers.addStickerToSet](/method/stickers.addStickerToSet/) | Добавить стикер в набор стикеров. Набор стикеров должен быть создан текущим пользователем или ботом. |
| [stickers.changeSticker](/method/stickers.changeSticker/) | Обновить ключевые слова, эмодзи или [координаты маски](/api/stickers/#mask-stickers) стикера. |
| [stickers.changeStickerPosition](/method/stickers.changeStickerPosition/) | Изменяет абсолютную позицию стикера в наборе, которому он принадлежит. Набор стикеров должен быть создан текущим пользователем или ботом. |
| [stickers.checkShortName](/method/stickers.checkShortName/) | Проверить, свободно ли указанное короткое имя |
| [stickers.createStickerSet](/method/stickers.createStickerSet/) | Создать набор стикеров. |
| [stickers.deleteStickerSet](/method/stickers.deleteStickerSet/) | Удаляет созданный нами набор стикеров. |
| [stickers.removeStickerFromSet](/method/stickers.removeStickerFromSet/) | Удалить стикер из набора, которому он принадлежит. Набор стикеров должен быть создан текущим пользователем или ботом. |
| [stickers.renameStickerSet](/method/stickers.renameStickerSet/) | Переименовывает набор стикеров. |
| [stickers.replaceSticker](/method/stickers.replaceSticker/) | Заменить стикер в [наборе стикеров »](/api/stickers/). |
| [stickers.setStickerSetThumb](/method/stickers.setStickerSetThumb/) | Задать миниатюру набора стикеров |
| [stickers.suggestShortName](/method/stickers.suggestShortName/) | Предлагает краткое имя для заданного названия стикерпака |
| [stories.activateStealthMode](/method/stories.activateStealthMode/) | Включает [режим невидимки для историй](/api/stories/#stealth-mode), подробнее см. [здесь »](/api/stories/#stealth-mode). |
| [stories.canSendStory](/method/stories.canSendStory/) | Проверить, можем ли мы публиковать истории от имени указанного пира. |
| [stories.createAlbum](/method/stories.createAlbum/) | Создаёт [альбом историй](/api/stories/#story-albums). |
| [stories.deleteAlbum](/method/stories.deleteAlbum/) | Удалить [альбом историй](/api/stories/#story-albums). |
| [stories.deleteStories](/method/stories.deleteStories/) | Удаляет несколько опубликованных [историй](/api/stories/). |
| [stories.editStory](/method/stories.editStory/) | Изменить загруженную [историю](/api/stories/) |
| [stories.exportStoryLink](/method/stories.exportStoryLink/) | Создать [глубокую ссылку на историю](/api/links/#story-links) для конкретной истории |
| [stories.getAlbums](/method/stories.getAlbums/) | Получить [альбомы историй](/api/stories/#story-albums), созданные пиром. |
| [stories.getAlbumStories](/method/stories.getAlbumStories/) | Получить истории из [альбома историй »](/api/stories/#story-albums). |
| [stories.getAllReadPeerStories](/method/stories.getAllReadPeerStories/) | Получить идентификатор последней прочитанной истории для всех пиров при первом входе в систему; возвращается в виде списка обновлений [updateReadStories](/constructor/updateReadStories/); подробнее см. [здесь »](/api/stories/#watching-stories). |
| [stories.getAllStories](/method/stories.getAllStories/) | Получить список активных (или активных и скрытых) историй; подробнее о просмотре историй см. [здесь »](/api/stories/#watching-stories). |
| [stories.getChatsToSend](/method/stories.getChatsToSend/) | Получить список каналов, в которых пользователь может публиковать [истории](/api/stories/) |
| [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/) | Получить компактные [сводки активных историй »](/api/stories/#recent-story-summaries) для набора пиров. |
| [stories.getPeerStories](/method/stories.getPeerStories/) | Получить полный [список активных историй](/api/stories/#watching-stories) конкретного пира. |
| [stories.getPinnedStories](/method/stories.getPinnedStories/) | Получить [истории](/api/stories/#pinned-or-archived-stories), закреплённые в профиле пира. |
| [stories.getStoriesArchive](/method/stories.getStoriesArchive/) | Получить [архив историй »](/api/stories/#pinned-or-archived-stories) подконтрольного нам пира. |
| [stories.getStoriesByID](/method/stories.getStoriesByID/) | Получить полные сведения о наборе [историй](/api/stories/) по их идентификаторам. |
| [stories.getStoriesViews](/method/stories.getStoriesViews/) | Получить информацию о количестве просмотров, количестве пересылок, реакциях и недавних зрителях одной или нескольких [историй](/api/stories/). |
| [stories.getStoryReactionsList](/method/stories.getStoryReactionsList/) | Получить список [реакций](/api/reactions/) и взаимодействий с [историей](/api/stories/), опубликованной в канале, вместе с отправителем каждой реакции. |
| [stories.getStoryViewsList](/method/stories.getStoryViewsList/) | Получить список пользователей, просмотревших конкретную [опубликованную нами историю](/api/stories/) |
| [stories.incrementStoryViews](/method/stories.incrementStoryViews/) | Увеличить счётчик просмотров одной или нескольких историй. |
| [stories.readStories](/method/stories.readStories/) | Отметить все истории указанного пира вплоть до определённого ID как прочитанные; всем авторизованным сессиям будет отправлено обновление [updateReadStories](/constructor/updateReadStories/). |
| [stories.reorderAlbums](/method/stories.reorderAlbums/) | Изменить порядок [альбомов историй в профиле »](/api/stories/#story-albums). |
| [stories.report](/method/stories.report/) | Пожаловаться на историю. |
| [stories.searchPosts](/method/stories.searchPosts/) | Глобальный поиск [историй](/api/stories/) по хештегу или [медиазоне с местоположением](/api/stories/#location-tags); подробнее о полном порядке действий см. [здесь »](/api/stories/#searching-stories). |
| [stories.sendReaction](/method/stories.sendReaction/) | Поставить реакцию на историю. |
| [stories.sendStory](/method/stories.sendStory/) | Загружает [историю Telegram](/api/stories/). |
| [stories.startLive](/method/stories.startLive/) | Начать прямую историю, при необходимости в режиме трансляции RTMP; полный сценарий см. [здесь »](/api/group-calls/#live-stories). |
| [stories.toggleAllStoriesHidden](/method/stories.toggleAllStoriesHidden/) | Скрыть активные истории указанного пира, чтобы они не отображались на панели действий на главном экране. |
| [stories.togglePeerStoriesHidden](/method/stories.togglePeerStoriesHidden/) | Скрыть активные истории пользователя, чтобы они не отображались на панели действий на главном экране; подробнее см. [здесь »](/api/stories/#hiding-stories-of-other-users). |
| [stories.togglePinned](/method/stories.togglePinned/) | Закрепить или открепить одну или несколько историй |
| [stories.togglePinnedToTop](/method/stories.togglePinnedToTop/) | Закрепить несколько историй вверху профиля, подробнее см. [здесь »](/api/stories/#pinned-or-archived-stories). |
| [stories.updateAlbum](/method/stories.updateAlbum/) | Переименовать [альбом историй »](/api/stories/#story-albums), либо добавить, удалить или переупорядочить истории в нём. |
| [updates.getChannelDifference](/method/updates.getChannelDifference/) | Возвращает разницу между текущим состоянием обновлений определённого канала и переданным состоянием. |
| [updates.getDifference](/method/updates.getDifference/) | Получить новые [обновления](/api/updates/). |
| [updates.getState](/method/updates.getState/) | Возвращает текущее состояние обновлений. |
| [upload.getCdnFile](/method/upload.getCdnFile/) | Скачать файл из [CDN](https://core.telegram.org/cdn). |
| [upload.getCdnFileHashes](/method/upload.getCdnFileHashes/) | Получить хеши SHA256 для проверки скачанных файлов [CDN](https://core.telegram.org/cdn) |
| [upload.getFile](/method/upload.getFile/) | Возвращает содержимое файла целиком или его части. |
| [upload.getFileHashes](/method/upload.getFileHashes/) | Получить хеши SHA256 для проверки скачанных файлов |
| [upload.getWebFile](/method/upload.getWebFile/) | Возвращает содержимое веб-файла, проксируя запрос через Telegram; подробнее см. [документацию по веб-файлам](/api/files/#downloading-webfiles). |
| [upload.reuploadCdnFile](/method/upload.reuploadCdnFile/) | Запросить повторную загрузку определённого файла в [CDN DC](https://core.telegram.org/cdn). |
| [upload.saveBigFilePart](/method/upload.saveBigFilePart/) | Сохраняет часть большого файла (размером свыше 10 МБ) для последующей передачи в один из методов. |
| [upload.saveFilePart](/method/upload.saveFilePart/) | Сохраняет часть файла для дальнейшей передачи в один из методов. |
| [users.getFullUser](/method/users.getFullUser/) | Возвращает расширенную информацию о пользователе по идентификатору. |
| [users.getRequirementsToContact](/method/users.getRequirementsToContact/) | Проверить, можем ли мы писать указанным пользователям; используется для массовых проверок [сообщений только для Premium »](/api/privacy/#require-premium-for-new-non-contact-users) и [платных сообщений »](/api/paid-messages/). |
| [users.getSavedMusic](/method/users.getSavedMusic/) | Получить композиции, [закреплённые в профиле пользователя; подробнее см. здесь »](/api/profile/#music). |
| [users.getSavedMusicByID](/method/users.getSavedMusicByID/) | Проверить, закреплены ли ещё указанные композиции в профиле пользователя, либо обновить ссылки на файлы композиций, закреплённых в профиле пользователя; подробнее [см. здесь »](/api/profile/#music). |
| [users.getUsers](/method/users.getUsers/) | Возвращает основные сведения о пользователях по их идентификаторам. |
| [users.setSecureValueErrors](/method/users.setSecureValueErrors/) | Уведомить пользователя о том, что отправленные данные [passport](https://core.telegram.org/passport) содержат ошибки. Пользователь не сможет повторно отправить вам данные Passport, пока ошибки не будут исправлены (содержимое поля, для которого возвращена ошибка, должно измениться). |
| [users.suggestBirthday](/method/users.suggestBirthday/) | Предложить другому пользователю дату рождения; подробнее о датах рождения в API см. [здесь »](/api/profile/#birthday). |
