---
title: "Источники ссылок на файлы"
original: "https://core.telegram.org/api/file-references/sources"
section: api
description: "Извлекатель источника содержит инструкцию, с помощью которой клиент может извлечь источник файла »; ниже приведён полный список извлекателей источников файлов, содержащихся в…"
layout: layout.njk
---

# Источники ссылок на файлы

[@term:file_reference] Извлекатель источника содержит инструкцию, по которой клиент может извлечь [источник файла »](/api/file-references/#source-extraction); ниже приведён полный список извлекателей источников файлов, содержащихся в текущем [файле карты ссылок на файлы »](/api/file-references/#map-file) (`file_reference` — ссылка на файл, короткая метка, которая подтверждает право клиента скачать конкретный файл и которую нужно предъявлять при скачивании).

Подробнее об извлекателях источников файлов см. [здесь »](/api/file-references/#source-extraction).

-   (1) [document](/constructor/document/) —

    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromDocumentAttributesAndStore(document.attributes)}
    ```

-   (2) [document](/constructor/document/) —

    ```
    (needs users.getSavedMusic) fileSourceSavedMusic{user_id: extractUserIdFromInputUserAndStore(users.getSavedMusic.id), id: document.id, access_hash: document.access_hash}
    ```

-   (3) [document](/constructor/document/) —

    ```
    (needs users.getSavedMusicByID) fileSourceSavedMusic{user_id: extractUserIdFromInputUserAndStore(users.getSavedMusicByID.id), id: document.id, access_hash: document.access_hash}
    ```

-   [photo](/constructor/photo/) —

    ```
    (needs photos.getUserPhotos) fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.getUserPhotos.user_id), max_id: photo.id}
    ```

-   [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) —

    ```
    fileSourceSavedRingtones{}
    ```

-   [account.savedRingtones](/constructor/account.savedRingtones/) —

    ```
    fileSourceSavedRingtones{}
    ```

-   [attachMenuBot](/constructor/attachMenuBot/) —

    ```
    fileSourceAttachMenuBot{bot: attachMenuBot.bot_id}
    ```

-   [botApp](/constructor/botApp/) —

    ```
    fileSourceBotApp{id: botApp.id, access_hash: botApp.access_hash}
    ```

-   [botInfo](/constructor/botInfo/) —

    ```
    fileSourceUserFull{id: botInfo.user_id?abort_if_empty}
    ```

-   [channelAdminLogEvent](/constructor/channelAdminLogEvent/) —

    ```
    (needs channels.getAdminLog) fileSourceAdminLog{channel: extractChannelIdFromInputChannelAndStore(channels.getAdminLog.channel), max_id: channelAdminLogEvent.id}
    ```

-   [channelFull](/constructor/channelFull/) —

    ```
    fileSourceChannelFull{channel: channelFull.id}
    ```

-   [chatFull](/constructor/chatFull/) —

    ```
    fileSourceChatFull{chat_id: chatFull.id}
    ```

-   [foundStory](/constructor/foundStory/) —

    ```
    fileSourceStory{id: foundStory.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(foundStory.peer)}
    ```

-   (1) [message](/constructor/message/) —

    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{quick_reply_shortcut_id: message.quick_reply_shortcut_id?passthrough, peer: extractPeerIdFromPeerAndStore(message.peer_id), id: message.id}
    ```

-   (2) [message](/constructor/message/) —

    ```
    (needs messages.getScheduledMessages) fileSourceScheduledMessage{peer: extractPeerIdFromInputPeerAndStore(messages.getScheduledMessages.peer), id: message.id}
    ```

-   (3) [message](/constructor/message/) —

    ```
    (needs updateNewScheduledMessage) fileSourceScheduledMessage{peer: extractPeerIdFromPeerAndStore(updateNewScheduledMessage.message.message.peer_id), id: message.id}
    ```

-   [messageMediaStory](/constructor/messageMediaStory/) —

    ```
    fileSourceStory{id: messageMediaStory.story?abort_if_empty.storyItem.id, peer: extractPeerIdFromPeerAndStore(messageMediaStory.peer)}
    ```

-   [messageService](/constructor/messageService/) —

    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{peer: extractPeerIdFromPeerAndStore(messageService.peer_id), id: messageService.id, quick_reply_shortcut_id: false}
    ```

-   [messages.availableEffects](/constructor/messages.availableEffects/) —

    ```
    fileSourceAvailableEffects{}
    ```

-   [messages.availableReactions](/constructor/messages.availableReactions/) —

    ```
    fileSourceAvailableReactions{}
    ```

-   [messages.savedGifs](/constructor/messages.savedGifs/) —

    ```
    fileSourceSavedGifs{}
    ```

-   [messages.stickerSet](/constructor/messages.stickerSet/) —

    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(messages.stickerSet.set)}
    ```

-   [publicForwardStory](/constructor/publicForwardStory/) —

    ```
    fileSourceStory{id: publicForwardStory.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(publicForwardStory.peer)}
    ```

-   (1) [starsTransaction](/constructor/starsTransaction/) —

    ```
    (needs payments.getStarsStatus) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsStatus.peer), ton: payments.getStarsStatus.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```

-   (2) [starsTransaction](/constructor/starsTransaction/) —

    ```
    (needs payments.getStarsTransactions) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsTransactions.peer), ton: payments.getStarsTransactions.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```

-   (3) [starsTransaction](/constructor/starsTransaction/) —

    ```
    (needs payments.getStarsTransactionsByID) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsTransactionsByID.peer), ton: payments.getStarsTransactionsByID.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```

-   (4) [starsTransaction](/constructor/starsTransaction/) —

    ```
    (needs payments.getStarsSubscriptions) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsSubscriptions.peer), id: starsTransaction.id, refund: starsTransaction.refund?passthrough, ton: false}
    ```

-   [stickerSetFullCovered](/constructor/stickerSetFullCovered/) —

    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(stickerSetFullCovered.set)}
    ```

-   [stickerSetMultiCovered](/constructor/stickerSetMultiCovered/) —

    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(stickerSetMultiCovered.set)}
    ```

-   (1) [storyItem](/constructor/storyItem/) —

    ```
    (needs stories.getPinnedStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getPinnedStories.peer)}
    ```

-   (2) [storyItem](/constructor/storyItem/) —

    ```
    (needs stories.getStoriesArchive) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getStoriesArchive.peer)}
    ```

-   (3) [storyItem](/constructor/storyItem/) —

    ```
    (needs stories.getStoriesByID) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getStoriesByID.peer)}
    ```

-   (4) [storyItem](/constructor/storyItem/) —

    ```
    (needs stories.getAlbumStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getAlbumStories.peer)}
    ```

-   (5) [storyItem](/constructor/storyItem/) —

    ```
    (needs peerStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromPeerAndStore(peerStories.peer)}
    ```

-   (6) [storyItem](/constructor/storyItem/) —

    ```
    fileSourceStory{id: storyItem.id, peer: extractPeerIdFromPeerAndStore(storyItem.from_id?abort_if_empty)}
    ```

-   [storyReactionPublicRepost](/constructor/storyReactionPublicRepost/) —

    ```
    fileSourceStory{id: storyReactionPublicRepost.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(storyReactionPublicRepost.peer_id)}
    ```

-   [storyViewPublicRepost](/constructor/storyViewPublicRepost/) —

    ```
    fileSourceStory{id: storyViewPublicRepost.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(storyViewPublicRepost.peer_id)}
    ```

-   [theme](/constructor/theme/) —

    ```
    fileSourceTheme{id: theme.id, access_hash: theme.access_hash}
    ```

-   [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) —

    ```
    fileSourcePaidMedia{id: updateMessageExtendedMedia.msg_id, peer: extractPeerIdFromPeerAndStore(updateMessageExtendedMedia.peer)}
    ```

-   [updateMessagePoll](/constructor/updateMessagePoll/) —

    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{peer: extractPeerIdFromPeerAndStore(updateMessagePoll.peer?abort_if_empty), id: updateMessagePoll.msg_id?abort_if_empty, quick_reply_shortcut_id: false}
    ```

-   (1) [userFull](/constructor/userFull/) —

    ```
    fileSourceUserFull{id: userFull.id}
    ```

-   (2) [userFull](/constructor/userFull/) —

    ```
    fileSourceSavedMusic{user_id: userFull.id, id: userFull.saved_music?abort_if_empty.document.id, access_hash: userFull.saved_music?abort_if_empty.document.access_hash}
    ```

-   [wallPaper](/constructor/wallPaper/) —

    ```
    fileSourceWallPaper{id: wallPaper.id, access_hash: wallPaper.access_hash}
    ```

-   [webPage](/constructor/webPage/) —

    ```
    fileSourceWebPage{url: webPage.url}
    ```

-   [webPageAttributeStory](/constructor/webPageAttributeStory/) —

    ```
    fileSourceStory{id: webPageAttributeStory.story?abort_if_empty.storyItem.id, peer: extractPeerIdFromPeerAndStore(webPageAttributeStory.peer)}
    ```

-   [account.uploadRingtone](/method/account.uploadRingtone/) —

    ```
    fileSourceSavedRingtones{}
    ```

-   [bots.addPreviewMedia](/method/bots.addPreviewMedia/) —

    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.addPreviewMedia.bot), lang_code: bots.addPreviewMedia.lang_code}
    ```

-   [bots.editPreviewMedia](/method/bots.editPreviewMedia/) —

    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.editPreviewMedia.bot), lang_code: bots.editPreviewMedia.lang_code}
    ```

-   [bots.getPreviewInfo](/method/bots.getPreviewInfo/) —

    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.getPreviewInfo.bot), lang_code: bots.getPreviewInfo.lang_code}
    ```

-   [bots.getPreviewMedias](/method/bots.getPreviewMedias/) —

    ```
    fileSourceBotPreviewMedia{bot: extractUserIdFromInputUserAndStore(bots.getPreviewMedias.bot)}
    ```

-   [help.getPremiumPromo](/method/help.getPremiumPromo/) —

    ```
    fileSourcePremiumPromo{}
    ```

-   [messages.getDocumentByHash](/method/messages.getDocumentByHash/) —

    ```
    fileSourceDocumentByHash{sha256: messages.getDocumentByHash.sha256, size: messages.getDocumentByHash.size, mime_type: messages.getDocumentByHash.mime_type}
    ```

-   [photos.updateProfilePhoto](/method/photos.updateProfilePhoto/) —

    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.updateProfilePhoto.bot?fallback(inputUserSelf{})), max_id: photos.updateProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```

-   [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/) —

    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.uploadContactProfilePhoto.user_id), max_id: photos.uploadContactProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```

-   [photos.uploadProfilePhoto](/method/photos.uploadProfilePhoto/) —

    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.uploadProfilePhoto.bot?fallback(inputUserSelf{})), max_id: photos.uploadProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```

-   [stories.createAlbum](/method/stories.createAlbum/) —

    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.createAlbum.peer)}
    ```

-   [stories.getAlbums](/method/stories.getAlbums/) —

    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.getAlbums.peer)}
    ```

-   [stories.updateAlbum](/method/stories.updateAlbum/) —

    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.updateAlbum.peer)}
    ```

-   [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/) — не сохранять ссылки на файлы из рекламных сообщений
-   [help.getAppUpdate](/method/help.getAppUpdate/) — не обрабатывать ссылки на файлы из недолговечных сведений об обновлении приложения
-   [help.getRecentMeUrls](/method/help.getRecentMeUrls/) — не обрабатывать ссылки на файлы из недавних адресов t.me
-   [recentMeUrlChatInvite](/constructor/recentMeUrlChatInvite/) — не сохранять ссылки, полученные из пригласительных ссылок на чат
-   [messages.checkChatInvite](/method/messages.checkChatInvite/) — не сохранять ссылки, полученные из пригласительных ссылок на чат
-   [messages.getInlineBotResults](/method/messages.getInlineBotResults/) — результаты инлайн-ботов недолговечны
-   [messages.getPreparedInlineMessage](/method/messages.getPreparedInlineMessage/) — результаты инлайн-ботов недолговечны
-   [messages.uploadMedia](/method/messages.uploadMedia/) — только что загруженный медиафайл получит контекст лишь после того, как будет отправлен в чат
-   [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/) — только что загруженный медиафайл получит контекст лишь после того, как будет отправлен в чат
-   [updateServiceNotification](/constructor/updateServiceNotification/) — сервисные уведомления невозможно запросить повторно
-   [messages.getWebPagePreview](/method/messages.getWebPagePreview/) — для вызова этого метода расположения не добавляются, так как на вход он не принимает постоянные идентификаторы; расположение извлекается из постоянных идентификаторов в возвращаемом объекте WebPage
-   [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/) — контексты для подарков за Telegram Stars ещё не реализованы
-   [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/) — контексты для подарков за Telegram Stars ещё не реализованы
-   [starGift](/constructor/starGift/) — контексты для подарков за Telegram Stars ещё не реализованы
-   [starGiftUnique](/constructor/starGiftUnique/) — контексты для подарков за Telegram Stars ещё не реализованы
-   [starGiftCollection](/constructor/starGiftCollection/) — контексты для подарков за Telegram Stars ещё не реализованы
-   [payments.starGiftCollections](/constructor/payments.starGiftCollections/) — контексты для подарков за Telegram Stars ещё не реализованы
-   [payments.starGiftUpgradeAttributes](/constructor/payments.starGiftUpgradeAttributes/) — контексты для подарков за Telegram Stars ещё не реализованы
-   [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/) — не сохранять ссылки на файлы в этом контексте
-   [account.uploadTheme](/method/account.uploadTheme/) — только что загруженный файл темы получит контекст лишь после того, как тема будет создана через account.createTheme
