---
title: "Incoming file reference traversers"
original: "https://core.telegram.org/api/file-references/incoming-traversers"
section: api
description: "Full list of incoming traversers contained by the current file reference map file »."
crumbs: [{"title":"API","url":"/api/"},{"title":"Incoming file reference traversers","url":"/api/file-references/incoming-traversers/"}]
layout: layout.njk
---

# Incoming file reference traversers

Full list of incoming traversers contained by the current [file reference map file »](/api/file-references/#map-file).

See [here »](/api/file-references/#incoming-traversers) for more info on how incoming traversers work.

-   ```
    traverseCommitSourceLocation{predicate: document, stored_constructor: fileIdDocument, push_sources: [fileSourceStickerSet, fileSourceSavedMusic (needs users.getSavedMusic), fileSourceSavedMusic (needs users.getSavedMusicByID)], type: Document}
    ```
    
-   ```
    traverseCommitSourceLocation{predicate: photo, stored_constructor: fileIdPhoto, push_sources: [fileSourceUserProfilePhoto (needs photos.getUserPhotos)], type: Photo}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: account.chatThemes, params: [themes], type: account.ChatThemes}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: account.savedRingtoneConverted, params: [document], push_sources: [fileSourceSavedRingtones], type: account.SavedRingtone}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: account.savedRingtones, params: [ringtones], push_sources: [fileSourceSavedRingtones], type: account.SavedRingtones}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: account.themes, params: [themes], type: account.Themes}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: account.wallPapers, params: [wallpapers], type: account.WallPapers}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: attachMenuBot, params: [icons], push_sources: [fileSourceAttachMenuBot], type: AttachMenuBot}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: attachMenuBotIcon, params: [icon], type: AttachMenuBotIcon}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: attachMenuBots, params: [bots], type: AttachMenuBots}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: attachMenuBotsBot, params: [bot], type: AttachMenuBotsBot}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: availableReaction, params: [static_icon, appear_animation, select_animation, activate_animation, effect_animation, around_animation, center_icon], type: AvailableReaction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: botApp, params: [photo, document], push_sources: [fileSourceBotApp], type: BotApp}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: botInfo, params: [description_photo, description_document], push_sources: [fileSourceUserFull], type: BotInfo}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: botInlineMediaResult, params: [document], type: BotInlineResult}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: botPreviewMedia, params: [media], type: BotPreviewMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: bots.previewInfo, params: [media], type: bots.PreviewInfo}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: businessIntro, params: [sticker], type: BusinessIntro}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelAdminLogEvent, params: [action], push_sources: [fileSourceAdminLog (needs channels.getAdminLog)], type: ChannelAdminLogEvent}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionChangePhoto, params: [prev_photo, new_photo], type: ChannelAdminLogEventAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionChangeWallpaper, params: [prev_value, new_value], type: ChannelAdminLogEventAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionDeleteMessage, params: [message], type: ChannelAdminLogEventAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionEditMessage, params: [prev_message, new_message], type: ChannelAdminLogEventAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionSendMessage, params: [message], type: ChannelAdminLogEventAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionStopPoll, params: [message], type: ChannelAdminLogEventAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionUpdatePinned, params: [message], type: ChannelAdminLogEventAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channelFull, params: [chat_photo, bot_info, stories, wallpaper], push_sources: [fileSourceChannelFull], type: ChatFull}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: channels.adminLogResults, params: [events], type: channels.AdminLogResults}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: chatFull, params: [chat_photo, bot_info], push_sources: [fileSourceChatFull], type: ChatFull}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: chatThemeUniqueGift, params: [gift, theme_settings], type: ChatTheme}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: foundStory, params: [story], push_sources: [fileSourceStory], type: FoundStory}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: game, params: [photo, document], type: Game}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: help.appUpdate, params: [document, sticker], type: help.AppUpdate}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: help.premiumPromo, params: [videos], type: help.PremiumPromo}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: help.recentMeUrls, params: [urls], type: help.RecentMeUrls}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: message, params: [reply_to, media], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage), fileSourceScheduledMessage (needs messages.getScheduledMessages), fileSourceScheduledMessage (needs updateNewScheduledMessage)], type: Message}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionBotAllowed, params: [app], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionChatEditPhoto, params: [photo], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionPollAppendAnswer, params: [answer], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionPollDeleteAnswer, params: [answer], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionRequestedPeerSentMe, params: [peers], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionSetChatTheme, params: [theme], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionSetChatWallPaper, params: [wallpaper], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionStarGift, params: [gift], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionStarGiftPurchaseOffer, params: [gift], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionStarGiftPurchaseOfferDeclined, params: [gift], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionStarGiftUnique, params: [gift], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageActionSuggestProfilePhoto, params: [photo], type: MessageAction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageExtendedMedia, params: [media], type: MessageExtendedMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageMediaDocument, params: [document, alt_documents, video_cover], type: MessageMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageMediaGame, params: [game], type: MessageMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageMediaInvoice, params: [extended_media], type: MessageMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageMediaPaidMedia, params: [extended_media], type: MessageMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageMediaPhoto, params: [photo, video], type: MessageMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageMediaPoll, params: [poll, results, attached_media], type: MessageMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageMediaStory, params: [story], push_sources: [fileSourceStory], type: MessageMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageMediaWebPage, params: [webpage], type: MessageMedia}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageReplyHeader, params: [reply_media], type: MessageReplyHeader}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messageService, params: [reply_to, action], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage)], type: Message}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.archivedStickers, params: [sets], type: messages.ArchivedStickers}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.availableEffects, params: [documents], push_sources: [fileSourceAvailableEffects], type: messages.AvailableEffects}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.availableReactions, params: [reactions], push_sources: [fileSourceAvailableReactions], type: messages.AvailableReactions}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.botApp, params: [app], type: messages.BotApp}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.botResults, params: [results], type: messages.BotResults}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.channelMessages, params: [messages], type: messages.Messages}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.chatFull, params: [full_chat], type: messages.ChatFull}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.dialogs, params: [messages], type: messages.Dialogs}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.dialogsSlice, params: [messages], type: messages.Dialogs}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.discussionMessage, params: [messages], type: messages.DiscussionMessage}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.favedStickers, params: [stickers], type: messages.FavedStickers}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.featuredStickers, params: [sets], type: messages.FeaturedStickers}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.forumTopics, params: [messages], type: messages.ForumTopics}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.foundStickerSets, params: [sets], type: messages.FoundStickerSets}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.foundStickers, params: [stickers], type: messages.FoundStickers}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.messages, params: [messages], type: messages.Messages}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.messagesSlice, params: [messages], type: messages.Messages}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.myStickers, params: [sets], type: messages.MyStickers}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.peerDialogs, params: [messages], type: messages.PeerDialogs}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.preparedInlineMessage, params: [result], type: messages.PreparedInlineMessage}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.quickReplies, params: [messages], type: messages.QuickReplies}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.recentStickers, params: [stickers], type: messages.RecentStickers}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.savedDialogs, params: [messages], type: messages.SavedDialogs}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.savedDialogsSlice, params: [messages], type: messages.SavedDialogs}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.savedGifs, params: [gifs], push_sources: [fileSourceSavedGifs], type: messages.SavedGifs}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.searchResultsCalendar, params: [messages], type: messages.SearchResultsCalendar}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.sponsoredMessages, params: [messages], type: messages.SponsoredMessages}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.stickerSet, params: [documents], push_sources: [fileSourceStickerSet], type: messages.StickerSet}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.stickerSetInstallResultArchive, params: [sets], type: messages.StickerSetInstallResult}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.stickers, params: [stickers], type: messages.Stickers}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.webPage, params: [webpage], type: messages.WebPage}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: messages.webPagePreview, params: [media], type: messages.WebPagePreview}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: page, params: [photos, documents], type: Page}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.resaleStarGifts, params: [gifts, attributes], type: payments.ResaleStarGifts}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.savedStarGifts, params: [gifts], type: payments.SavedStarGifts}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.starGiftActiveAuctions, params: [auctions], type: payments.StarGiftActiveAuctions}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.starGiftAuctionState, params: [gift], type: payments.StarGiftAuctionState}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.starGiftCollections, params: [collections], type: payments.StarGiftCollections}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.starGiftUpgradeAttributes, params: [attributes], type: payments.StarGiftUpgradeAttributes}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.starGiftUpgradePreview, params: [sample_attributes], type: payments.StarGiftUpgradePreview}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.starGifts, params: [gifts], type: payments.StarGifts}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.starsStatus, params: [history], type: payments.StarsStatus}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: payments.uniqueStarGift, params: [gift], type: payments.UniqueStarGift}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: peerStories, params: [stories], is_needed_parent: true, type: PeerStories}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: photos.photo, params: [photo], type: photos.Photo}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: photos.photos, params: [photos], type: photos.Photos}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: photos.photosSlice, params: [photos], type: photos.Photos}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: poll, params: [answers], type: Poll}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: pollAnswer, params: [media], type: PollAnswer}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: pollResults, params: [solution_media], type: PollResults}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: publicForwardMessage, params: [message], type: PublicForward}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: publicForwardStory, params: [story], push_sources: [fileSourceStory], type: PublicForward}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: recentMeUrlStickerSet, params: [set], type: RecentMeUrl}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: requestedPeerChannel, params: [photo], type: RequestedPeer}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: requestedPeerChat, params: [photo], type: RequestedPeer}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: requestedPeerUser, params: [photo], type: RequestedPeer}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: savedStarGift, params: [gift], type: SavedStarGift}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: sponsoredMessage, params: [media], type: SponsoredMessage}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: starGift, params: [sticker], type: StarGift}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: starGiftActiveAuctionState, params: [gift], type: StarGiftActiveAuctionState}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: starGiftAttributeModel, params: [document], type: StarGiftAttribute}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: starGiftAttributePattern, params: [document], type: StarGiftAttribute}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: starGiftCollection, params: [icon], type: StarGiftCollection}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: starGiftUnique, params: [attributes], type: StarGift}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: starsTransaction, params: [extended_media, stargift], push_sources: [fileSourceStarsTransaction (needs payments.getStarsStatus), fileSourceStarsTransaction (needs payments.getStarsTransactions), fileSourceStarsTransaction (needs payments.getStarsTransactionsByID), fileSourceStarsTransaction (needs payments.getStarsSubscriptions)], type: StarsTransaction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stats.publicForwards, params: [forwards], type: stats.PublicForwards}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stickerSetCovered, params: [cover], type: StickerSetCovered}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stickerSetFullCovered, params: [documents], push_sources: [fileSourceStickerSet], type: StickerSetCovered}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stickerSetMultiCovered, params: [covers], push_sources: [fileSourceStickerSet], type: StickerSetCovered}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stories.albums, params: [albums], type: stories.Albums}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stories.allStories, params: [peer_stories], type: stories.AllStories}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stories.foundStories, params: [stories], type: stories.FoundStories}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stories.peerStories, params: [stories], type: stories.PeerStories}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stories.stories, params: [stories], type: stories.Stories}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stories.storyReactionsList, params: [reactions], type: stories.StoryReactionsList}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: stories.storyViewsList, params: [views], type: stories.StoryViewsList}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: storyAlbum, params: [icon_photo, icon_video], type: StoryAlbum}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: storyItem, params: [media, music], push_sources: [fileSourceStory (needs stories.getPinnedStories), fileSourceStory (needs stories.getStoriesArchive), fileSourceStory (needs stories.getStoriesByID), fileSourceStory (needs stories.getAlbumStories), fileSourceStory (needs peerStories), fileSourceStory], type: StoryItem}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: storyReactionPublicForward, params: [message], type: StoryReaction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: storyReactionPublicRepost, params: [story], push_sources: [fileSourceStory], type: StoryReaction}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: storyViewPublicForward, params: [message], type: StoryView}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: storyViewPublicRepost, params: [story], push_sources: [fileSourceStory], type: StoryView}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: theme, params: [document, settings], push_sources: [fileSourceTheme], type: Theme}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: themeSettings, params: [wallpaper], type: ThemeSettings}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateBotEditBusinessMessage, params: [message, reply_to_message], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateBotGuestChatQuery, params: [message, reference_messages], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateBotNewBusinessMessage, params: [message, reply_to_message], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateBusinessBotCallbackQuery, params: [message, reply_to_message], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateChannelWebPage, params: [webpage], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateEditChannelMessage, params: [message], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateEditMessage, params: [message], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateMessageExtendedMedia, params: [extended_media], push_sources: [fileSourcePaidMedia], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateMessagePoll, params: [poll, results], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage)], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateNewChannelMessage, params: [message], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateNewMessage, params: [message], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateNewScheduledMessage, params: [message], is_needed_parent: true, type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateNewStickerSet, params: [stickerset], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updatePeerWallpaper, params: [wallpaper], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateQuickReplyMessage, params: [message], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateServiceNotification, params: [media], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateStory, params: [story], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateTheme, params: [theme], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updateWebPage, params: [webpage], type: Update}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updates.channelDifference, params: [new_messages], type: updates.ChannelDifference}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updates.channelDifferenceTooLong, params: [messages], type: updates.ChannelDifference}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updates.difference, params: [new_messages], type: updates.Difference}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: updates.differenceSlice, params: [new_messages], type: updates.Difference}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: userFull, params: [personal_photo, profile_photo, fallback_photo, bot_info, theme, wallpaper, stories, business_intro, saved_music], push_sources: [fileSourceUserFull, fileSourceSavedMusic], type: UserFull}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: users.savedMusic, params: [documents], type: users.SavedMusic}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: users.userFull, params: [full_user], type: users.UserFull}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: wallPaper, params: [document], push_sources: [fileSourceWallPaper], type: WallPaper}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: webPage, params: [photo, document, cached_page, attributes], push_sources: [fileSourceWebPage], type: WebPage}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: webPageAttributeStarGiftAuction, params: [gift], type: WebPageAttribute}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: webPageAttributeStarGiftCollection, params: [icons], type: WebPageAttribute}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: webPageAttributeStickerSet, params: [stickers], type: WebPageAttribute}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: webPageAttributeStory, params: [story], push_sources: [fileSourceStory], type: WebPageAttribute}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: webPageAttributeTheme, params: [documents, settings], type: WebPageAttribute}
    ```
    
-   ```
    traverseIncomingConstructor{predicate: webPageAttributeUniqueStarGift, params: [gift], type: WebPageAttribute}
    ```
    
-   ```
    traverseMethodResult{name: account.createTheme}
    ```
    
-   ```
    traverseMethodResult{name: account.getChatThemes}
    ```
    
-   ```
    traverseMethodResult{name: account.getMultiWallPapers}
    ```
    
-   ```
    traverseMethodResult{name: account.getSavedRingtones}
    ```
    
-   ```
    traverseMethodResult{name: account.getTheme}
    ```
    
-   ```
    traverseMethodResult{name: account.getThemes}
    ```
    
-   ```
    traverseMethodResult{name: account.getUniqueGiftChatThemes}
    ```
    
-   ```
    traverseMethodResult{name: account.getWallPaper}
    ```
    
-   ```
    traverseMethodResult{name: account.getWallPapers}
    ```
    
-   ```
    traverseMethodResult{name: account.saveRingtone}
    ```
    
-   ```
    traverseMethodResult{name: account.updateTheme}
    ```
    
-   ```
    traverseMethodResult{name: account.uploadRingtone, push_sources: [fileSourceSavedRingtones]}
    ```
    
-   ```
    traverseMethodResult{name: account.uploadTheme}
    ```
    
-   ```
    traverseMethodResult{name: account.uploadWallPaper}
    ```
    
-   ```
    traverseMethodResult{name: bots.addPreviewMedia, push_sources: [fileSourceBotPreviewInfo]}
    ```
    
-   ```
    traverseMethodResult{name: bots.editPreviewMedia, push_sources: [fileSourceBotPreviewInfo]}
    ```
    
-   ```
    traverseMethodResult{name: bots.getPreviewInfo, push_sources: [fileSourceBotPreviewInfo]}
    ```
    
-   ```
    traverseMethodResult{name: bots.getPreviewMedias, push_sources: [fileSourceBotPreviewMedia]}
    ```
    
-   ```
    traverseMethodResult{name: channels.getAdminLog, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: channels.getFullChannel}
    ```
    
-   ```
    traverseMethodResult{name: channels.getMessages}
    ```
    
-   ```
    traverseMethodResult{name: channels.searchPosts}
    ```
    
-   ```
    traverseMethodResult{name: help.getAppUpdate}
    ```
    
-   ```
    traverseMethodResult{name: help.getPremiumPromo, push_sources: [fileSourcePremiumPromo]}
    ```
    
-   ```
    traverseMethodResult{name: help.getRecentMeUrls}
    ```
    
-   ```
    traverseMethodResult{name: messages.getArchivedStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getAttachMenuBot}
    ```
    
-   ```
    traverseMethodResult{name: messages.getAttachMenuBots}
    ```
    
-   ```
    traverseMethodResult{name: messages.getAttachedStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getAvailableEffects}
    ```
    
-   ```
    traverseMethodResult{name: messages.getAvailableReactions}
    ```
    
-   ```
    traverseMethodResult{name: messages.getBotApp}
    ```
    
-   ```
    traverseMethodResult{name: messages.getCustomEmojiDocuments}
    ```
    
-   ```
    traverseMethodResult{name: messages.getDialogs}
    ```
    
-   ```
    traverseMethodResult{name: messages.getDiscussionMessage}
    ```
    
-   ```
    traverseMethodResult{name: messages.getDocumentByHash, push_sources: [fileSourceDocumentByHash]}
    ```
    
-   ```
    traverseMethodResult{name: messages.getFavedStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getFeaturedEmojiStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getFeaturedStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getForumTopics}
    ```
    
-   ```
    traverseMethodResult{name: messages.getForumTopicsByID}
    ```
    
-   ```
    traverseMethodResult{name: messages.getFullChat}
    ```
    
-   ```
    traverseMethodResult{name: messages.getHistory}
    ```
    
-   ```
    traverseMethodResult{name: messages.getInlineBotResults}
    ```
    
-   ```
    traverseMethodResult{name: messages.getMessages}
    ```
    
-   ```
    traverseMethodResult{name: messages.getMyStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getOldFeaturedStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getPeerDialogs}
    ```
    
-   ```
    traverseMethodResult{name: messages.getPersonalChannelHistory}
    ```
    
-   ```
    traverseMethodResult{name: messages.getPinnedDialogs}
    ```
    
-   ```
    traverseMethodResult{name: messages.getPinnedSavedDialogs}
    ```
    
-   ```
    traverseMethodResult{name: messages.getPreparedInlineMessage}
    ```
    
-   ```
    traverseMethodResult{name: messages.getQuickReplies}
    ```
    
-   ```
    traverseMethodResult{name: messages.getQuickReplyMessages}
    ```
    
-   ```
    traverseMethodResult{name: messages.getRecentLocations}
    ```
    
-   ```
    traverseMethodResult{name: messages.getRecentStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getReplies}
    ```
    
-   ```
    traverseMethodResult{name: messages.getSavedDialogs}
    ```
    
-   ```
    traverseMethodResult{name: messages.getSavedDialogsByID}
    ```
    
-   ```
    traverseMethodResult{name: messages.getSavedGifs}
    ```
    
-   ```
    traverseMethodResult{name: messages.getSavedHistory}
    ```
    
-   ```
    traverseMethodResult{name: messages.getScheduledHistory}
    ```
    
-   ```
    traverseMethodResult{name: messages.getScheduledMessages, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: messages.getSearchResultsCalendar}
    ```
    
-   ```
    traverseMethodResult{name: messages.getSponsoredMessages}
    ```
    
-   ```
    traverseMethodResult{name: messages.getStickerSet}
    ```
    
-   ```
    traverseMethodResult{name: messages.getStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.getUnreadMentions}
    ```
    
-   ```
    traverseMethodResult{name: messages.getUnreadPollVotes}
    ```
    
-   ```
    traverseMethodResult{name: messages.getUnreadReactions}
    ```
    
-   ```
    traverseMethodResult{name: messages.getWebPage}
    ```
    
-   ```
    traverseMethodResult{name: messages.getWebPagePreview}
    ```
    
-   ```
    traverseMethodResult{name: messages.installStickerSet}
    ```
    
-   ```
    traverseMethodResult{name: messages.search}
    ```
    
-   ```
    traverseMethodResult{name: messages.searchEmojiStickerSets}
    ```
    
-   ```
    traverseMethodResult{name: messages.searchGlobal}
    ```
    
-   ```
    traverseMethodResult{name: messages.searchSentMedia}
    ```
    
-   ```
    traverseMethodResult{name: messages.searchStickerSets}
    ```
    
-   ```
    traverseMethodResult{name: messages.searchStickers}
    ```
    
-   ```
    traverseMethodResult{name: messages.uploadImportedMedia}
    ```
    
-   ```
    traverseMethodResult{name: messages.uploadMedia}
    ```
    
-   ```
    traverseMethodResult{name: payments.createStarGiftCollection}
    ```
    
-   ```
    traverseMethodResult{name: payments.getCraftStarGifts}
    ```
    
-   ```
    traverseMethodResult{name: payments.getResaleStarGifts}
    ```
    
-   ```
    traverseMethodResult{name: payments.getSavedStarGift}
    ```
    
-   ```
    traverseMethodResult{name: payments.getSavedStarGifts}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarGiftActiveAuctions}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarGiftAuctionState}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarGiftCollections}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarGiftUpgradeAttributes}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarGiftUpgradePreview}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarGifts}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarsStatus, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarsSubscriptions, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarsTransactions, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: payments.getStarsTransactionsByID, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: payments.getUniqueStarGift}
    ```
    
-   ```
    traverseMethodResult{name: payments.updateStarGiftCollection}
    ```
    
-   ```
    traverseMethodResult{name: photos.getUserPhotos, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: photos.updateProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```
    
-   ```
    traverseMethodResult{name: photos.uploadContactProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```
    
-   ```
    traverseMethodResult{name: photos.uploadProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```
    
-   ```
    traverseMethodResult{name: stats.getMessagePublicForwards}
    ```
    
-   ```
    traverseMethodResult{name: stats.getStoryPublicForwards}
    ```
    
-   ```
    traverseMethodResult{name: stickers.addStickerToSet}
    ```
    
-   ```
    traverseMethodResult{name: stickers.changeSticker}
    ```
    
-   ```
    traverseMethodResult{name: stickers.changeStickerPosition}
    ```
    
-   ```
    traverseMethodResult{name: stickers.createStickerSet}
    ```
    
-   ```
    traverseMethodResult{name: stickers.removeStickerFromSet}
    ```
    
-   ```
    traverseMethodResult{name: stickers.renameStickerSet}
    ```
    
-   ```
    traverseMethodResult{name: stickers.replaceSticker}
    ```
    
-   ```
    traverseMethodResult{name: stickers.setStickerSetThumb}
    ```
    
-   ```
    traverseMethodResult{name: stories.createAlbum, push_sources: [fileSourceStoryAlbum]}
    ```
    
-   ```
    traverseMethodResult{name: stories.getAlbumStories, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: stories.getAlbums, push_sources: [fileSourceStoryAlbum]}
    ```
    
-   ```
    traverseMethodResult{name: stories.getAllStories}
    ```
    
-   ```
    traverseMethodResult{name: stories.getPeerStories}
    ```
    
-   ```
    traverseMethodResult{name: stories.getPinnedStories, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: stories.getStoriesArchive, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: stories.getStoriesByID, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: stories.getStoryReactionsList}
    ```
    
-   ```
    traverseMethodResult{name: stories.getStoryViewsList}
    ```
    
-   ```
    traverseMethodResult{name: stories.searchPosts}
    ```
    
-   ```
    traverseMethodResult{name: stories.updateAlbum, push_sources: [fileSourceStoryAlbum]}
    ```
    
-   ```
    traverseMethodResult{name: updates.getChannelDifference}
    ```
    
-   ```
    traverseMethodResult{name: updates.getDifference}
    ```
    
-   ```
    traverseMethodResult{name: users.getFullUser}
    ```
    
-   ```
    traverseMethodResult{name: users.getSavedMusic, is_needed_parent: true}
    ```
    
-   ```
    traverseMethodResult{name: users.getSavedMusicByID, is_needed_parent: true}
    ```
