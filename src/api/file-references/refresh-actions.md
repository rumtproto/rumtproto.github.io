---
title: "Действия обновления"
original: "https://core.telegram.org/api/file-references/refresh-actions"
section: api
description: "Полный список действий, которыми обновляются все типы источников файлов »; эти действия содержатся в текущем файле карты ссылок на файлы » (file_reference — короткая метка,…"
layout: layout.njk
---

# Действия обновления

[@term:file_reference] Полный список действий, которыми обновляются ссылки на файлы (`file_reference` — короткая метка, подтверждающая право клиента скачать конкретный файл; она быстро устаревает, и получать её приходится заново) для всех [типов источников файлов »](/api/file-references/sources/); эти действия перечислены в текущем [файле с картой ссылок на файлы »](/api/file-references/#map-file).

Подробнее о базе ссылок на файлы — [здесь »](/api/file-references/).

-   fileSourceMessage -

    ```
    getMessageOp(peer: getInputPeerByIdOp(peer), id: copyOp(id), quick_reply_shortcut_id: copyOp(quick_reply_shortcut_id))
    ```

-   fileSourceScheduledMessage -

    ```
    messages.getScheduledMessages(peer: getInputPeerByIdOp(peer), id: [copyOp(id)])
    ```

-   fileSourceStory -

    ```
    stories.getStoriesByID(id: [copyOp(id)], peer: getInputPeerByIdOp(peer))
    ```

-   fileSourceWebPage -

    ```
    messages.getWebPage(url: copyOp(url), hash: 0)
    ```

-   fileSourceBotApp -

    ```
    messages.getBotApp(app: inputBotAppID{id: copyOp(id), access_hash: copyOp(access_hash)}, hash: 0)
    ```

-   fileSourceUserFull -

    ```
    users.getFullUser(id: getInputUserByIdOp(id))
    ```

-   fileSourceAdminLog -

    ```
    channels.getAdminLog(channel: getInputChannelByIdOp(channel), max_id: copyOp(max_id), min_id: copyOp(max_id), limit: 1, q: "")
    ```

-   fileSourceStoryAlbum -

    ```
    stories.getAlbums(peer: getInputPeerByIdOp(peer), hash: 0)
    ```

-   fileSourceBotPreviewMedia -

    ```
    bots.getPreviewMedias(bot: getInputUserByIdOp(bot))
    ```

-   fileSourceBotPreviewInfo -

    ```
    bots.getPreviewInfo(bot: getInputUserByIdOp(bot), lang_code: copyOp(lang_code))
    ```

-   fileSourcePaidMedia -

    ```
    messages.getExtendedMedia(id: [copyOp(id)], peer: getInputPeerByIdOp(peer))
    ```

-   fileSourceSavedMusic -

    ```
    users.getSavedMusicByID(id: getInputUserByIdOp(user_id), documents: [inputDocument{id: copyOp(id), access_hash: copyOp(access_hash), file_reference: base64_decode("")}])
    ```

-   fileSourceChatFull -

    ```
    messages.getFullChat(chat_id: copyOp(chat_id))
    ```

-   fileSourceChannelFull -

    ```
    channels.getFullChannel(channel: getInputChannelByIdOp(channel))
    ```

-   fileSourcePremiumPromo -

    ```
    help.getPremiumPromo()
    ```

-   fileSourceStarsTransaction -

    ```
    payments.getStarsTransactionsByID(peer: getInputPeerByIdOp(peer), ton: copyOp(ton), id: [inputStarsTransaction{id: copyOp(id), refund: copyOp(refund)}])
    ```

-   fileSourceAttachMenuBot -

    ```
    messages.getAttachMenuBot(bot: getInputUserByIdOp(bot))
    ```

-   fileSourceTheme -

    ```
    account.getTheme(theme: inputTheme{id: copyOp(id), access_hash: copyOp(access_hash)}, format: $themeFormat)
    ```

-   fileSourceWallPaper -

    ```
    account.getWallPaper(wallpaper: inputWallPaper{id: copyOp(id), access_hash: copyOp(access_hash)})
    ```

-   fileSourceStickerSet -

    ```
    messages.getStickerSet(stickerset: copyOp(stickerset), hash: 0)
    ```

-   fileSourceSavedGifs -

    ```
    messages.getSavedGifs(hash: 0)
    ```

-   fileSourceSavedRingtones -

    ```
    account.getSavedRingtones(hash: 0)
    ```

-   fileSourceAvailableEffects -

    ```
    messages.getAvailableEffects(hash: 0)
    ```

-   fileSourceAvailableReactions -

    ```
    messages.getAvailableReactions(hash: 0)
    ```

-   fileSourceUserProfilePhoto -

    ```
    photos.getUserPhotos(user_id: getInputUserByIdOp(user_id), offset: -1, max_id: copyOp(max_id), limit: 1)
    ```

-   fileSourceDocumentByHash -

    ```
    messages.getDocumentByHash(sha256: copyOp(sha256), size: copyOp(size), mime_type: copyOp(mime_type))
    ```
