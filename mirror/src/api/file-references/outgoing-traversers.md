---
title: "Outgoing file reference traversers"
original: "https://core.telegram.org/api/file-references/outgoing-traversers"
section: api
description: "Full list of outgoing traversers contained by the current file reference map file »."
crumbs: [{"title":"API","url":"/api/"},{"title":"Outgoing file reference traversers","url":"/api/file-references/outgoing-traversers/"}]
layout: layout.njk
---

# Outgoing file reference traversers

Full list of outgoing traversers contained by the current [file reference map file »](/api/file-references/#map-file).

See [here »](/api/file-references/#outgoing-traversers) for more info on how outgoing traversers work.

-   ```
    traverseMethodCall{name: account.createTheme, params: [document]}
    ```
    
-   ```
    traverseMethodCall{name: account.reportProfilePhoto, params: [photo_id]}
    ```
    
-   ```
    traverseMethodCall{name: account.saveMusic, params: [id, after_id]}
    ```
    
-   ```
    traverseMethodCall{name: account.saveRingtone, params: [id]}
    ```
    
-   ```
    traverseMethodCall{name: account.updateBusinessIntro, params: [intro]}
    ```
    
-   ```
    traverseMethodCall{name: account.updateTheme, params: [document]}
    ```
    
-   ```
    traverseMethodCall{name: account.uploadRingtone, params: [file]}
    ```
    
-   ```
    traverseMethodCall{name: account.uploadTheme, params: [file, thumb]}
    ```
    
-   ```
    traverseMethodCall{name: account.uploadWallPaper, params: [file]}
    ```
    
-   ```
    traverseMethodCall{name: bots.addPreviewMedia, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: bots.deletePreviewMedia, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: bots.editPreviewMedia, params: [media, new_media]}
    ```
    
-   ```
    traverseMethodCall{name: bots.reorderPreviewMedias, params: [order]}
    ```
    
-   ```
    traverseMethodCall{name: channels.editPhoto, params: [photo]}
    ```
    
-   ```
    traverseMethodCall{name: messages.addPollAnswer, params: [answer]}
    ```
    
-   ```
    traverseMethodCall{name: messages.editChatPhoto, params: [photo]}
    ```
    
-   ```
    traverseMethodCall{name: messages.editInlineBotMessage, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: messages.editMessage, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: messages.faveSticker, params: [id]}
    ```
    
-   ```
    traverseMethodCall{name: messages.getAttachedStickers, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: messages.initHistoryImport, params: [file]}
    ```
    
-   ```
    traverseMethodCall{name: messages.reportMusicListen, params: [id]}
    ```
    
-   ```
    traverseMethodCall{name: messages.saveDraft, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: messages.saveGif, params: [id]}
    ```
    
-   ```
    traverseMethodCall{name: messages.savePreparedInlineMessage, params: [result]}
    ```
    
-   ```
    traverseMethodCall{name: messages.saveRecentSticker, params: [id]}
    ```
    
-   ```
    traverseMethodCall{name: messages.sendMedia, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: messages.sendMultiMedia, params: [multi_media]}
    ```
    
-   ```
    traverseMethodCall{name: messages.sendWebViewResultMessage, params: [result]}
    ```
    
-   ```
    traverseMethodCall{name: messages.setBotGuestChatResult, params: [result]}
    ```
    
-   ```
    traverseMethodCall{name: messages.setInlineBotResults, params: [results]}
    ```
    
-   ```
    traverseMethodCall{name: messages.uploadImportedMedia, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: messages.uploadMedia, params: [media]}
    ```
    
-   ```
    traverseMethodCall{name: payments.exportInvoice, params: [invoice_media]}
    ```
    
-   ```
    traverseMethodCall{name: phone.saveCallLog, params: [file]}
    ```
    
-   ```
    traverseMethodCall{name: photos.deletePhotos, params: [id]}
    ```
    
-   ```
    traverseMethodCall{name: photos.updateProfilePhoto, params: [id]}
    ```
    
-   ```
    traverseMethodCall{name: photos.uploadContactProfilePhoto, params: [file, video]}
    ```
    
-   ```
    traverseMethodCall{name: photos.uploadProfilePhoto, params: [file, video]}
    ```
    
-   ```
    traverseMethodCall{name: stickers.addStickerToSet, params: [sticker]}
    ```
    
-   ```
    traverseMethodCall{name: stickers.changeSticker, params: [sticker]}
    ```
    
-   ```
    traverseMethodCall{name: stickers.changeStickerPosition, params: [sticker]}
    ```
    
-   ```
    traverseMethodCall{name: stickers.createStickerSet, params: [thumb, stickers]}
    ```
    
-   ```
    traverseMethodCall{name: stickers.removeStickerFromSet, params: [sticker]}
    ```
    
-   ```
    traverseMethodCall{name: stickers.replaceSticker, params: [sticker, new_sticker]}
    ```
    
-   ```
    traverseMethodCall{name: stickers.setStickerSetThumb, params: [thumb]}
    ```
    
-   ```
    traverseMethodCall{name: stories.editStory, params: [media, music]}
    ```
    
-   ```
    traverseMethodCall{name: stories.sendStory, params: [media, music]}
    ```
    
-   ```
    traverseMethodCall{name: upload.getFile, params: [location]}
    ```
    
-   ```
    traverseMethodCall{name: upload.getFileHashes, params: [location]}
    ```
    
-   ```
    traverseMethodCall{name: upload.getWebFile, params: [location]}
    ```
    
-   ```
    traverseMethodCall{name: users.getSavedMusicByID, params: [documents]}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputBotInlineResultDocument, params: [document], type: InputBotInlineResult}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputBotInlineResultPhoto, params: [photo], type: InputBotInlineResult}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputBusinessIntro, params: [sticker], type: InputBusinessIntro}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputChatPhoto, params: [id], type: InputChatPhoto}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputChatUploadedPhoto, params: [file, video], type: InputChatPhoto}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputFileStoryDocument, params: [id], type: InputFile}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputMediaDocument, params: [id, video_cover], type: InputMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputMediaDocumentExternal, params: [video_cover], type: InputMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputMediaInvoice, params: [extended_media], type: InputMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputMediaPaidMedia, params: [extended_media], type: InputMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputMediaPhoto, params: [id, video], type: InputMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputMediaPoll, params: [attached_media, solution_media], type: InputMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedDocument, params: [file, thumb, stickers, video_cover], type: InputMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedPhoto, params: [file, stickers, video], type: InputMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputPollAnswer, params: [media], type: PollAnswer}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputSingleMedia, params: [media], type: InputSingleMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputStickerSetItem, params: [document], type: InputStickerSetItem}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputStickeredMediaDocument, params: [id], type: InputStickeredMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputStickeredMediaPhoto, params: [id], type: InputStickeredMedia}
    ```
    
-   ```
    traverseOutgoingConstructor{predicate: inputWebFileAudioAlbumThumbLocation, params: [document], type: InputWebFileLocation}
    ```
    
-   ```
    traverseSwapLocation{predicate: inputDocument, stored_constructor: fileIdDocument, type: InputDocument}
    ```
    
-   ```
    traverseSwapLocation{predicate: inputDocumentFileLocation, stored_constructor: fileIdDocument, type: InputFileLocation}
    ```
    
-   ```
    traverseSwapLocation{predicate: inputPhoto, stored_constructor: fileIdPhoto, type: InputPhoto}
    ```
    
-   ```
    traverseSwapLocation{predicate: inputPhotoFileLocation, stored_constructor: fileIdPhoto, type: InputFileLocation}
    ```
