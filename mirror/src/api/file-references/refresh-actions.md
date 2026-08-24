---
title: "Refresh actions"
original: "https://core.telegram.org/api/file-references/refresh-actions"
section: api
description: "Full list of actions used to refresh all file source types », contained by the current file reference map file »."
crumbs: [{"title":"API","url":"/api/"},{"title":"Refresh actions","url":"/api/file-references/refresh-actions/"}]
layout: layout.njk
---

# Refresh actions

Full list of actions used to refresh all [file source types »](/api/file-references/sources/), contained by the current [file reference map file »](/api/file-references/#map-file).

See [here »](/api/file-references/) for more info on the file reference database.

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
