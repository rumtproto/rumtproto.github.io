---
title: "Bot API changelog"
original: "https://core.telegram.org/bots/api-changelog"
section: bots
description: "You will find all changes to our Bot API on this page."
crumbs: []
layout: layout.njk
---

# Bot API changelog

> The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram.  
> To learn how to create and set up a bot, please consult our [**Introduction to Bots »**](/bots/)

You will find all changes to our [**Bot API**](/bots/api/) on this page.

### Recent changes

> Subscribe to [@BotNews](https://t.me/botnews) to be the first to know about the latest updates and join the discussion in [@BotTalk](https://t.me/bottalk)

### 2026

#### July 14, 2026

**Bot API 10.2**

**Rich Messages**

-   Added the class [InputRichMessageMedia](/bots/api/#inputrichmessagemedia) and the field _media_ to the class [InputRichMessage](/bots/api/#inputrichmessage), allowing bots to explicitly specify media used in _markdown_ or _html_ formatting when sending a rich message.
-   Added the class [InputMediaVoiceNote](/bots/api/#inputmediavoicenote), representing a voice message to be sent.
-   Added the class [InputRichBlockListItem](/bots/api/#inputrichblocklistitem), which represents an item in a list to be sent.
-   Added the classes [InputRichBlockParagraph](/bots/api/#inputrichblockparagraph), [InputRichBlockSectionHeading](/bots/api/#inputrichblocksectionheading), [InputRichBlockPreformatted](/bots/api/#inputrichblockpreformatted), [InputRichBlockFooter](/bots/api/#inputrichblockfooter), [InputRichBlockDivider](/bots/api/#inputrichblockdivider), [InputRichBlockMathematicalExpression](/bots/api/#inputrichblockmathematicalexpression), [InputRichBlockAnchor](/bots/api/#inputrichblockanchor), [InputRichBlockList](/bots/api/#inputrichblocklist), [InputRichBlockBlockQuotation](/bots/api/#inputrichblockblockquotation), [InputRichBlockPullQuotation](/bots/api/#inputrichblockpullquotation), [InputRichBlockCollage](/bots/api/#inputrichblockcollage), [InputRichBlockSlideshow](/bots/api/#inputrichblockslideshow), [InputRichBlockTable](/bots/api/#inputrichblocktable), [InputRichBlockDetails](/bots/api/#inputrichblockdetails), [InputRichBlockMap](/bots/api/#inputrichblockmap), [InputRichBlockAnimation](/bots/api/#inputrichblockanimation), [InputRichBlockAudio](/bots/api/#inputrichblockaudio), [InputRichBlockPhoto](/bots/api/#inputrichblockphoto), [InputRichBlockVideo](/bots/api/#inputrichblockvideo), [InputRichBlockVoiceNote](/bots/api/#inputrichblockvoicenote) and [InputRichBlockThinking](/bots/api/#inputrichblockthinking), which represent different types of blocks available to format an outgoing rich message.
-   Added the field _blocks_ to the class [InputRichMessage](/bots/api/#inputrichmessage), allowing bots to specify rich message formatting via block entities.

**Ephemeral Messages**

-   Introduced support for [Ephemeral Messages](/bots/features/#ephemeral-messages), allowing bots to send group messages and receive commands that are visible only to a specific user and the bot.
-   Added the field _is\_ephemeral_ to the class [BotCommand](/bots/api/#botcommand).
-   Added the field _receiver\_user_ to the class [Message](/bots/api/#message).
-   Added the field _ephemeral\_message\_id_ to the class [Message](/bots/api/#message).
-   Added the parameters _receiver\_user\_id_ and _callback\_query\_id_ to the methods [sendMessage](/bots/api/#sendmessage), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendLivePhoto](/bots/api/#sendlivephoto), [sendPhoto](/bots/api/#sendphoto), [sendSticker](/bots/api/#sendsticker), [sendVideo](/bots/api/#sendvideo), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendContact](/bots/api/#sendcontact), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue).
-   Added the field _ephemeral\_message\_id_ to the class [ReplyParameters](/bots/api/#replyparameters), allowing bots to reply to ephemeral messages.
-   Marked the field _message\_id_ in the class [ReplyParameters](/bots/api/#replyparameters) as optional if the field _ephemeral\_message\_id_ is present.
-   Added the methods [editEphemeralMessageText](/bots/api/#editephemeralmessagetext), [editEphemeralMessageMedia](/bots/api/#editephemeralmessagemedia), [editEphemeralMessageCaption](/bots/api/#editephemeralmessagecaption), and [editEphemeralMessageReplyMarkup](/bots/api/#editephemeralmessagereplymarkup) allowing bots to edit ephemeral messages.
-   Added the method [deleteEphemeralMessage](/bots/api/#deleteephemeralmessage) allowing bots to delete ephemeral messages.

**Communities**

-   Introduced initial support for **Communities** - several supergroups, channels, and bots linked together around a shared topic or audience.
-   Added the class [Community](/bots/api/#community) which represents a community.
-   Added the class [CommunityChatAdded](/bots/api/#communitychatadded) and the field _community\_chat\_added_ to the class [Message](/bots/api/#message).
-   Added the class [CommunityChatRemoved](/bots/api/#communitychatremoved) and the field _community\_chat\_removed_ to the class [Message](/bots/api/#message).
-   Added the field _community_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).

**General**

-   Added updates about changes to a user payment subscription, represented by the class [BotSubscriptionUpdated](/bots/api/#botsubscriptionupdated) and the field _subscription_ in the class [Update](/bots/api/#update).
-   Hardened the security of Mini Apps by disallowing the usage of Mini App methods from origins different from the original Mini App domain. The protection will be automatically enabled for all Mini Apps on July 20, 2026. You can opt-out from the protection through the [@BotFather](https://t.me/BotFather) Mini App. If you do so, you acknowledge that it is the responsibility of the bot to ensure that the Mini App has no links to untrusted sites.

#### June 11, 2026

**Bot API 10.1**

**Rich Messages**

-   Added support for [Rich Messages](/bots/features/#rich-messages), allowing bots to send highly structured text and stream AI-generated replies with seamless rich formatting.
-   Added the classes [RichTextBold](/bots/api/#richtextbold), [RichTextItalic](/bots/api/#richtextitalic), [RichTextUnderline](/bots/api/#richtextunderline), [RichTextStrikethrough](/bots/api/#richtextstrikethrough), [RichTextSpoiler](/bots/api/#richtextspoiler), [RichTextDateTime](/bots/api/#richtextdatetime), [RichTextTextMention](/bots/api/#richtexttextmention), [RichTextSubscript](/bots/api/#richtextsubscript), [RichTextSuperscript](/bots/api/#richtextsuperscript), [RichTextMarked](/bots/api/#richtextmarked), [RichTextCode](/bots/api/#richtextcode), [RichTextCustomEmoji](/bots/api/#richtextcustomemoji), [RichTextMathematicalExpression](/bots/api/#richtextmathematicalexpression), [RichTextUrl](/bots/api/#richtexturl), [RichTextEmailAddress](/bots/api/#richtextemailaddress), [RichTextPhoneNumber](/bots/api/#richtextphonenumber), [RichTextBankCardNumber](/bots/api/#richtextbankcardnumber), [RichTextMention](/bots/api/#richtextmention), [RichTextHashtag](/bots/api/#richtexthashtag), [RichTextCashtag](/bots/api/#richtextcashtag), [RichTextBotCommand](/bots/api/#richtextbotcommand), [RichTextAnchor](/bots/api/#richtextanchor), [RichTextAnchorLink](/bots/api/#richtextanchorlink), [RichTextReference](/bots/api/#richtextreference) and [RichTextReferenceLink](/bots/api/#richtextreferencelink), which represent different types of rich formatted text.
-   Added the class [RichText](/bots/api/#richtext), which represents rich formatted text.
-   Added the class [RichBlockCaption](/bots/api/#richblockcaption), which represents the caption of a rich formatted text.
-   Added the class [RichBlockTableCell](/bots/api/#richblocktablecell), which represents a cell in a table.
-   Added the class [RichBlockListItem](/bots/api/#richblocklistitem), which represents an item in a list.
-   Added the classes [RichBlockParagraph](/bots/api/#richblockparagraph), [RichBlockSectionHeading](/bots/api/#richblocksectionheading), [RichBlockPreformatted](/bots/api/#richblockpreformatted), [RichBlockFooter](/bots/api/#richblockfooter), [RichBlockDivider](/bots/api/#richblockdivider), [RichBlockMathematicalExpression](/bots/api/#richblockmathematicalexpression), [RichBlockAnchor](/bots/api/#richblockanchor), [RichBlockList](/bots/api/#richblocklist), [RichBlockBlockQuotation](/bots/api/#richblockblockquotation), [RichBlockPullQuotation](/bots/api/#richblockpullquotation), [RichBlockCollage](/bots/api/#richblockcollage), [RichBlockSlideshow](/bots/api/#richblockslideshow), [RichBlockTable](/bots/api/#richblocktable), [RichBlockDetails](/bots/api/#richblockdetails), [RichBlockMap](/bots/api/#richblockmap), [RichBlockAnimation](/bots/api/#richblockanimation), [RichBlockAudio](/bots/api/#richblockaudio), [RichBlockPhoto](/bots/api/#richblockphoto), [RichBlockVideo](/bots/api/#richblockvideo), [RichBlockVoiceNote](/bots/api/#richblockvoicenote) and [RichBlockThinking](/bots/api/#richblockthinking), which represent different types of blocks in a rich formatted message.
-   Added the class [RichBlock](/bots/api/#richblock), which represents a block in a rich formatted message.
-   Added the class [RichMessage](/bots/api/#richmessage), which represents a rich formatted message.
-   Added the field _rich\_message_ to the class [Message](/bots/api/#message).
-   Added the class [InputRichMessage](/bots/api/#inputrichmessage), describing a rich message to send.
-   Added the class [InputRichMessageContent](/bots/api/#inputrichmessagecontent) and allowed it to be used as [InputMessageContent](/bots/api/#inputmessagecontent) in results of inline, guest, and Web App queries.
-   Added the method [sendRichMessage](/bots/api/#sendrichmessage), allowing bots to send rich messages.
-   Added the method [sendRichMessageDraft](/bots/api/#sendrichmessagedraft), allowing bots to stream partial rich messages.
-   Added the parameter _rich\_message_ to the method [editMessageText](/bots/api/#editmessagetext), allowing bots to edit rich messages.

**Join Request Queries**

-   Added the field _supports\_join\_request\_queries_ to the class [User](/bots/api/#user).
-   Added the field _guard\_bot_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Added the field _query\_id_ to the class [ChatJoinRequest](/bots/api/#chatjoinrequest).
-   Added the method [answerChatJoinRequestQuery](/bots/api/#answerchatjoinrequestquery).
-   Added the method [sendChatJoinRequestWebApp](/bots/api/#sendchatjoinrequestwebapp).

**Polls**

-   Added the class [Link](/bots/api/#link) and the field _link_ to the class [PollMedia](/bots/api/#pollmedia).
-   Added the class [InputMediaLink](/bots/api/#inputmedialink) and allowed it to be used as [InputPollOptionMedia](/bots/api/#inputpolloptionmedia).

#### May 8, 2026

**Bot API 10.0**

**Guest Mode**

-   Introduced support for [guest mode](/bots/features/#guest-bots), allowing bots to receive certain messages and issue replies within chats they are not a member of.
-   Added the field _supports\_guest\_queries_ to the class [User](/bots/api/#user).
-   Added the fields _guest\_bot\_caller\_user_ and _guest\_bot\_caller\_chat_ to the class [Message](/bots/api/#message).
-   Added the field _guest\_query\_id_ to the class [Message](/bots/api/#message).
-   Added the field _guest\_message_ to the class [Update](/bots/api/#update).
-   Added the class [SentGuestMessage](/bots/api/#sentguestmessage) and the method [answerGuestQuery](/bots/api/#answerguestquery).

**Chat Management**

-   Added the field _can\_react\_to\_messages_ to the classes [ChatMemberRestricted](/bots/api/#chatmemberrestricted) and [ChatPermissions](/bots/api/#chatpermissions).
-   Added the parameter _return\_bots_ to the method [getChatAdministrators](/bots/api/#getchatadministrators).
-   Added the method [deleteAllMessageReactions](/bots/api/#deleteallmessagereactions).
-   Added the method [deleteMessageReaction](/bots/api/#deletemessagereaction).
-   Added the ability to see certain messages sent by other bots in groups.

**Polls**

-   Added the classes [InputMediaSticker](/bots/api/#inputmediasticker), [InputMediaLocation](/bots/api/#inputmedialocation), and [InputMediaVenue](/bots/api/#inputmediavenue).
-   Added the class [PollMedia](/bots/api/#pollmedia), representing a media in a poll.
-   Added the field _media_ to the class [Poll](/bots/api/#poll), allowing bots to see media in polls.
-   Added the field _explanation\_media_ to the class [Poll](/bots/api/#poll), allowing bots to see media in quiz explanations.
-   Added the field _media_ to the class [PollOption](/bots/api/#polloption), allowing bots to see media in poll options.
-   Added the class [InputPollMedia](/bots/api/#inputpollmedia) and the parameters _media_ and _explanation\_media_ to the method [sendPoll](/bots/api/#sendpoll), allowing bots to add media to polls.
-   Added the class [InputPollOptionMedia](/bots/api/#inputpolloptionmedia) and the field _media_ to the class [InputPollOption](/bots/api/#inputpolloption), allowing bots to add media to poll options.
-   Added the field _members\_only_ to the class [Poll](/bots/api/#poll).
-   Added the parameter _members\_only_ to the method [sendPoll](/bots/api/#sendpoll).
-   Added the field _country\_codes_ to the class [Poll](/bots/api/#poll).
-   Added the parameter _country\_codes_ to the method [sendPoll](/bots/api/#sendpoll).
-   Decreased the minimum number of poll options from 2 to 1.

**Live photos**

-   Added the class [LivePhoto](/bots/api/#livephoto), which represents a photo with a short video.
-   Added the class [InputMediaLivePhoto](/bots/api/#inputmedialivephoto).
-   Added the field _live\_photo_ to the classes [Message](/bots/api/#message) and [ExternalReplyInfo](/bots/api/#externalreplyinfo).
-   Added the method [sendLivePhoto](/bots/api/#sendlivephoto), allowing bots to send live photos.
-   Added the class [PaidMediaLivePhoto](/bots/api/#paidmedialivephoto), which describes a paid media with a live photo.
-   Added the class [InputPaidMediaLivePhoto](/bots/api/#inputpaidmedialivephoto), allowing bots to send live photos as paid media.
-   Allowed to use live photos in [sendMediaGroup](/bots/api/#sendmediagroup) and [editMessageMedia](/bots/api/#editmessagemedia),

**General**

-   Allowed Business Bots to manage user accounts without a Telegram Premium subscription.
-   Added the ability to send messages to other bots via username if both bots enabled bot-to-bot communication.
-   Added the ability to reply to other bots from a business bot if the business bot enabled bot-to-bot communication.
-   Allowed bots to pass an empty text in the method [sendMessageDraft](/bots/api/#sendmessagedraft).
-   Added the class [BotAccessSettings](/bots/api/#botaccesssettings) and the method [getManagedBotAccessSettings](/bots/api/#getmanagedbotaccesssettings).
-   Added the method [setManagedBotAccessSettings](/bots/api/#setmanagedbotaccesssettings).
-   Added the method [getUserPersonalChatMessages](/bots/api/#getuserpersonalchatmessages).

#### April 3, 2026

**Bot API 9.6**

**Managed Bots**

-   Added the field _can\_manage\_bots_ to the class [User](/bots/api/#user).
-   Added the class [KeyboardButtonRequestManagedBot](/bots/api/#keyboardbuttonrequestmanagedbot) and the field _request\_managed\_bot_ to the class [KeyboardButton](/bots/api/#keyboardbutton).
-   Added the class [ManagedBotCreated](/bots/api/#managedbotcreated) and the field _managed\_bot\_created_ to the class [Message](/bots/api/#message).
-   Added updates about the creation of managed bots and the change of their token, represented by the class [ManagedBotUpdated](/bots/api/#managedbotupdated) and the field _managed\_bot_ in the class [Update](/bots/api/#update).
-   Added the methods [getManagedBotToken](/bots/api/#getmanagedbottoken) and [replaceManagedBotToken](/bots/api/#replacemanagedbottoken).
-   Added the class [PreparedKeyboardButton](/bots/api/#preparedkeyboardbutton) and the method [savePreparedKeyboardButton](/bots/api/#savepreparedkeyboardbutton), allowing bots to request users, chats and managed bots from Mini Apps.
-   Added the method _requestChat_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added support for `https://t.me/newbot/{manager_bot_username}/{suggested_bot_username}[?name={suggested_bot_name}]` links, allowing bots to request the creation of a managed bot via a link.

**Polls**

-   Added support for quizzes with multiple correct answers.
-   Replaced the field _correct\_option\_id_ with the field _correct\_option\_ids_ in the class [Poll](/bots/api/#poll).
-   Replaced the parameter _correct\_option\_id_ with the parameter _correct\_option\_ids_ in the method [sendPoll](/bots/api/#sendpoll).
-   Allowed to pass _allows\_multiple\_answers_ for quizzes in the method [sendPoll](/bots/api/#sendpoll).
-   Increased the maximum time for automatic poll closure to 2628000 seconds.
-   Added the field _allows\_revoting_ to the class [Poll](/bots/api/#poll).
-   Added the parameter _allows\_revoting_ to the method [sendPoll](/bots/api/#sendpoll).
-   Added the parameter _shuffle\_options_ to the method [sendPoll](/bots/api/#sendpoll).
-   Added the parameter _allow\_adding\_options_ to the method [sendPoll](/bots/api/#sendpoll).
-   Added the parameter _hide\_results\_until\_closes_ to the method [sendPoll](/bots/api/#sendpoll).
-   Added the fields _description_ and _description\_entities_ to the class [Poll](/bots/api/#poll).
-   Added the parameters _description_, _description\_parse\_mode_, and _description\_entities_ to the method [sendPoll](/bots/api/#sendpoll).
-   Added the field _persistent\_id_ to the class [PollOption](/bots/api/#polloption), representing a persistent identifier for the option.
-   Added the field _option\_persistent\_ids_ to the class [PollAnswer](/bots/api/#pollanswer).
-   Added the fields _added\_by\_user_ and _added\_by\_chat_ to the class [PollOption](/bots/api/#polloption), denoting the user and the chat which added the option.
-   Added the field _addition\_date_ to the class [PollOption](/bots/api/#polloption), describing the date when the option was added.
-   Added the class [PollOptionAdded](/bots/api/#polloptionadded) and the field _poll\_option\_added_ to the class [Message](/bots/api/#message).
-   Added the class [PollOptionDeleted](/bots/api/#polloptiondeleted) and the field _poll\_option\_deleted_ to the class [Message](/bots/api/#message).
-   Added the field _poll\_option\_id_ to the class [ReplyParameters](/bots/api/#replyparameters), allowing bots to reply to a specific poll option.
-   Added the field _reply\_to\_poll\_option\_id_ to the class [Message](/bots/api/#message).
-   Allowed “date\_time” entities in [checklist](/bots/api/#inputchecklist) title, [checklist task](/bots/api/#inputchecklisttask) text, [TextQuote](/bots/api/#textquote), [ReplyParameters](/bots/api/#replyparameters) quote, [sendGift](/bots/api/#sendgift), and [giftPremiumSubscription](/bots/api/#giftpremiumsubscription).

#### March 1, 2026

**Bot API 9.5**

-   Added the [MessageEntity](/bots/api/#messageentity) type “date\_time”, allowing bots to show a formatted date and time to the user.
-   Allowed all bots to use the method [sendMessageDraft](/bots/api/#sendmessagedraft).
-   Added the field _tag_ to the classes [ChatMemberMember](/bots/api/#chatmembermember) and [ChatMemberRestricted](/bots/api/#chatmemberrestricted).
-   Added the method [setChatMemberTag](/bots/api/#setchatmembertag).
-   Added the field _can\_edit\_tag_ to the classes [ChatMemberRestricted](/bots/api/#chatmemberrestricted) and [ChatPermissions](/bots/api/#chatpermissions).
-   Added the field _can\_manage\_tags_ to the classes [ChatMemberAdministrator](/bots/api/#chatmemberadministrator) and [ChatAdministratorRights](/bots/api/#chatadministratorrights).
-   Added the parameter _can\_manage\_tags_ to the method [promoteChatMember](/bots/api/#promotechatmember).
-   Added the field _sender\_tag_ to the class [Message](/bots/api/#message).
-   Added the field _iconCustomEmojiId_ to the class [BottomButton](/bots/webapps/#bottombutton).

#### February 9, 2026

**Bot API 9.4**

-   Allowed bots to use custom emoji in messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.
-   Allowed bots to create topics in private chats using the method [createForumTopic](/bots/api/#createforumtopic).
-   Allowed bots to prevent users from creating and deleting topics in private chats through a new setting in the [@BotFather](https://t.me/BotFather) Mini App.
-   Added the field _allows\_users\_to\_create\_topics_ to the class [User](/bots/api/#user).
-   Added the field _icon\_custom\_emoji\_id_ to the classes [KeyboardButton](/bots/api/#keyboardbutton) and [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton), allowing bots to show a custom emoji on buttons if they are able to use custom emoji in the message.
-   Added the field _style_ to the classes [KeyboardButton](/bots/api/#keyboardbutton) and [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton), allowing bots to change the color of buttons.
-   Added the class [ChatOwnerLeft](/bots/api/#chatownerleft) and the field _chat\_owner\_left_ to the class [Message](/bots/api/#message).
-   Added the class [ChatOwnerChanged](/bots/api/#chatownerchanged) and the field _chat\_owner\_changed_ to the class [Message](/bots/api/#message).
-   Added the methods [setMyProfilePhoto](/bots/api/#setmyprofilephoto) and [removeMyProfilePhoto](/bots/api/#removemyprofilephoto), allowing bots to manage their profile picture.
-   Added the class [VideoQuality](/bots/api/#videoquality) and the field _qualities_ to the class [Video](/bots/api/#video) allowing bots to get information about other available qualities of a video.
-   Added the field _first\_profile\_audio_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Added the class [UserProfileAudios](/bots/api/#userprofileaudios) and the method [getUserProfileAudios](/bots/api/#getuserprofileaudios), allowing bots to fetch a list of audios added to the profile of a user.
-   Added the field _rarity_ to the class [UniqueGiftModel](/bots/api/#uniquegiftmodel).
-   Added the field _is\_burned_ to the class [UniqueGift](/bots/api/#uniquegift).

### 2025

#### December 31, 2025

**Bot API 9.3**

**Topics in private chats**

-   Added the field _has\_topics\_enabled_ to the class [User](/bots/api/#user), which can be used to determine whether forum topic mode is enabled for the bot in private chats.
-   Added the method [sendMessageDraft](/bots/api/#sendmessagedraft), allowing partial messages to be streamed to a user while being generated.
-   Supported the fields _message\_thread\_id_ and _is\_topic\_message_ in the class [Message](/bots/api/#message) for messages in private chats with forum topic mode enabled.
-   Supported the parameter _message\_thread\_id_ in private chats with topics in the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendPaidMedia](/bots/api/#sendpaidmedia), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendPoll](/bots/api/#sendpoll), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [sendGame](/bots/api/#sendgame), [sendMediaGroup](/bots/api/#sendmediagroup), [copyMessage](/bots/api/#copymessage), [copyMessages](/bots/api/#copymessages), [forwardMessage](/bots/api/#forwardmessage), and [forwardMessages](/bots/api/#forwardmessages), allowing bots to send a message to a specific topic.
-   Supported the parameter _message\_thread\_id_ in private chats in the method [sendChatAction](/bots/api/#sendchataction), allowing bots to send chat actions to a specific topic in private chats.
-   Supported the parameter _message\_thread\_id_ in private chats with topics in the method [editForumTopic](/bots/api/#editforumtopic), [deleteForumTopic](/bots/api/#deleteforumtopic), and [unpinAllForumTopicMessages](/bots/api/#unpinallforumtopicmessages), allowing bots to manage topics in private chats.
-   Added the field _is\_name\_implicit_ to the classes [ForumTopic](/bots/api/#forumtopic) and [ForumTopicCreated](/bots/api/#forumtopiccreated).

**Gifts**

-   Added the methods [getUserGifts](/bots/api/#getusergifts) and [getChatGifts](/bots/api/#getchatgifts).
-   Replaced the field _last\_resale\_star\_count_ with the fields _last\_resale\_currency_ and _last\_resale\_amount_ in the class [UniqueGiftInfo](/bots/api/#uniquegiftinfo).
-   Replaced the parameter _exclude\_limited_ with the parameters _exclude\_limited\_upgradable_ and _exclude\_limited\_non\_upgradable_ in the method [getBusinessAccountGifts](/bots/api/#getbusinessaccountgifts).
-   Added the value “gifted\_upgrade” as a possible value of _UniqueGiftInfo.origin_ for messages about the upgrade of a gift that was purchased after it was sent.
-   Added the value “offer” as a possible value of _UniqueGiftInfo.origin_ for messages about the purchase of a gift through a purchase offer.
-   Added the field _gift\_upgrade\_sent_ to the class [Message](/bots/api/#message).
-   Added the field _gift\_id_ to the class [UniqueGift](/bots/api/#uniquegift).
-   Added the field _is\_from\_blockchain_ to the class [UniqueGift](/bots/api/#uniquegift).
-   Added the parameter _exclude\_from\_blockchain_ in the method [getBusinessAccountGifts](/bots/api/#getbusinessaccountgifts), to filter out gifts that were assigned from the TON blockchain.
-   Added the fields _personal\_total\_count_ and _personal\_remaining\_count_ to the class [Gift](/bots/api/#gift).
-   Added the field _is\_premium_ to the classes [Gift](/bots/api/#gift) and [UniqueGift](/bots/api/#uniquegift).
-   Added the field _is\_upgrade\_separate_ to the classes [GiftInfo](/bots/api/#giftinfo) and [OwnedGiftRegular](/bots/api/#ownedgiftregular).
-   Added the class [UniqueGiftColors](/bots/api/#uniquegiftcolors) that describes the color scheme for a user's name, replies to messages and link previews based on a unique gift.
-   Added the field _has\_colors_ to the class [Gift](/bots/api/#gift).
-   Added the field _colors_ to the class [UniqueGift](/bots/api/#uniquegift).
-   Added the class [GiftBackground](/bots/api/#giftbackground) and the field _background_ to the class [Gift](/bots/api/#gift).
-   Added the field _unique\_gift\_variant\_count_ to the class [Gift](/bots/api/#gift).
-   Added the field _unique\_gift\_number_ to the classes [GiftInfo](/bots/api/#giftinfo) and [OwnedGiftRegular](/bots/api/#ownedgiftregular).
-   Added the field _gifts\_from\_channels_ to the class [AcceptedGiftTypes](/bots/api/#acceptedgifttypes).

**Miscellaneous**

-   Allowed bots to disable their main username if they have additional active usernames purchased on Fragment.
-   Allowed bots to disable the right _can\_restrict\_members_ in channel chats.
-   Added the method [repostStory](/bots/api/#repoststory), allowing bots to repost stories across different business accounts they manage.
-   Added the class [UserRating](/bots/api/#userrating) and the field _rating_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Increased the maximum price for paid media to 25000 Telegram Stars.
-   Added the field _paid\_message\_star\_count_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Added the parameter _message\_effect\_id_ to the methods [forwardMessage](/bots/api/#forwardmessage) and [copyMessage](/bots/api/#copymessage).
-   Added the field _unique\_gift\_colors_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Added the field _completed\_by\_chat_ to the class [ChecklistTask](/bots/api/#checklisttask).

#### August 15, 2025

**Bot API 9.2**

**Checklists**

-   Added the field _checklist\_task\_id_ to the class [ReplyParameters](/bots/api/#replyparameters), allowing bots to reply to a specific checklist task.
-   Added the field _reply\_to\_checklist\_task\_id_ to the class [Message](/bots/api/#message).

**Gifts**

-   Added the field _publisher\_chat_ to the classes [Gift](/bots/api/#gift) and [UniqueGift](/bots/api/#uniquegift) which can be used to get information about the chat that published a gift.

**Direct Messages in Channels**

-   Added the field _is\_direct\_messages_ to the classes [Chat](/bots/api/#chat) and [ChatFullInfo](/bots/api/#chatfullinfo) which can be used to identify supergroups that are used as channel direct messages chats.
-   Added the field _parent\_chat_ to the class [ChatFullInfo](/bots/api/#chatfullinfo) which indicates the parent channel chat for a channel direct messages chat.
-   Added the class [DirectMessagesTopic](/bots/api/#directmessagestopic) and the field _direct\_messages\_topic_ to the class [Message](/bots/api/#message), describing a topic of a direct messages chat.
-   Added the parameter _direct\_messages\_topic\_id_ to the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendPaidMedia](/bots/api/#sendpaidmedia), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [sendMediaGroup](/bots/api/#sendmediagroup), [copyMessage](/bots/api/#copymessage), [copyMessages](/bots/api/#copymessages), [forwardMessage](/bots/api/#forwardmessage) and [forwardMessages](/bots/api/#forwardmessages). This parameter can be used to send a message to a direct messages chat topic.

**Suggested Posts**

-   Added the class [SuggestedPostParameters](/bots/api/#suggestedpostparameters) and the parameter _suggested\_post\_parameters_ to the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendPaidMedia](/bots/api/#sendpaidmedia), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [copyMessage](/bots/api/#copymessage), [forwardMessage](/bots/api/#forwardmessage). This parameter can be used to send a suggested post to a direct messages chat topic.
-   Added the method [approveSuggestedPost](/bots/api/#approvesuggestedpost), allowing bots to approve incoming suggested posts.
-   Added the method [declineSuggestedPost](/bots/api/#declinesuggestedpost), allowing bots to decline incoming suggested posts.
-   Added the field _can\_manage\_direct\_messages_ to the classes [ChatMemberAdministrator](/bots/api/#chatmemberadministrator) and [ChatAdministratorRights](/bots/api/#chatadministratorrights).
-   Added the parameter _can\_manage\_direct\_messages_ to the method [promoteChatMember](/bots/api/#promotechatmember).
-   Added the field _is\_paid\_post_ to the class [Message](/bots/api/#message), which can be used to identify paid posts. Such posts must not be deleted for 24 hours to receive the payment.
-   Added the class [SuggestedPostPrice](/bots/api/#suggestedpostprice), describing the price of a suggested post.
-   Added the class [SuggestedPostInfo](/bots/api/#suggestedpostinfo) and the field _suggested\_post\_info_ to the class [Message](/bots/api/#message), describing a suggested post.
-   Added the class [SuggestedPostApproved](/bots/api/#suggestedpostapproved) and the field _suggested\_post\_approved_ to the class [Message](/bots/api/#message), describing a service message about the approval of a suggested post.
-   Added the class [SuggestedPostApprovalFailed](/bots/api/#suggestedpostapprovalfailed) and the field _suggested\_post\_approval\_failed_ to the class [Message](/bots/api/#message), describing a service message about the failed approval of a suggested post.
-   Added the class [SuggestedPostDeclined](/bots/api/#suggestedpostdeclined) and the field _suggested\_post\_declined_ to the class [Message](/bots/api/#message), describing a service message about the rejection of a suggested post.
-   Added the class [SuggestedPostPaid](/bots/api/#suggestedpostpaid) and the field _suggested\_post\_paid_ to the class [Message](/bots/api/#message), describing a service message about a successful payment for a suggested post.
-   Added the class [SuggestedPostRefunded](/bots/api/#suggestedpostrefunded) and the field _suggested\_post\_refunded_ to the class [Message](/bots/api/#message), describing a service message about a payment refund for a suggested post.

#### July 3, 2025

**Bot API 9.1**

**Checklists**

-   Added the class [ChecklistTask](/bots/api/#checklisttask) representing a task in a checklist.
-   Added the class [Checklist](/bots/api/#checklist) representing a checklist.
-   Added the class [InputChecklistTask](/bots/api/#inputchecklisttask) representing a task to add to a checklist.
-   Added the class [InputChecklist](/bots/api/#inputchecklist) representing a checklist to create.
-   Added the field _checklist_ to the classes [Message](/bots/api/#message) and [ExternalReplyInfo](/bots/api/#externalreplyinfo), describing a checklist in a message.
-   Added the class [ChecklistTasksDone](/bots/api/#checklisttasksdone) and the field _checklist\_tasks\_done_ to the class [Message](/bots/api/#message), describing a service message about status changes for tasks in a checklist (i.e., marked as done/not done).
-   Added the class [ChecklistTasksAdded](/bots/api/#checklisttasksadded) and the field _checklist\_tasks\_added_ to the class [Message](/bots/api/#message), describing a service message about the addition of new tasks to a checklist.
-   Added the method [sendChecklist](/bots/api/#sendchecklist), allowing bots to send a checklist on behalf of a business account.
-   Added the method [editMessageChecklist](/bots/api/#editmessagechecklist), allowing bots to edit a checklist on behalf of a business account.

**Gifts**

-   Added the field _next\_transfer\_date_ to the classes [OwnedGiftUnique](/bots/api/#ownedgiftunique) and [UniqueGiftInfo](/bots/api/#uniquegiftinfo).
-   Added the field _last\_resale\_star\_count_ to the class [UniqueGiftInfo](/bots/api/#uniquegiftinfo).
-   Added “resale” as the possible value of the field _origin_ in the class [UniqueGiftInfo](/bots/api/#uniquegiftinfo).

**General**

-   Increased the maximum number of options in a poll to 12.
-   Added the method [getMyStarBalance](/bots/api/#getmystarbalance), allowing bots to get their current balance of Telegram Stars.
-   Added the class [DirectMessagePriceChanged](/bots/api/#directmessagepricechanged) and the field _direct\_message\_price\_changed_ to the class [Message](/bots/api/#message), describing a service message about a price change for direct messages sent to the channel chat.
-   Added the method _hideKeyboard_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).

#### April 11, 2025

**Bot API 9.0**

**Business Accounts**

-   Added the class [BusinessBotRights](/bots/api/#businessbotrights) and replaced the field _can\_reply_ with the field _rights_ of the type [BusinessBotRights](/bots/api/#businessbotrights) in the class [BusinessConnection](/bots/api/#businessconnection).
-   Added the method [readBusinessMessage](/bots/api/#readbusinessmessage), allowing bots to mark incoming messages as read on behalf of a business account.
-   Added the method [deleteBusinessMessages](/bots/api/#deletebusinessmessages), allowing bots to delete messages on behalf of a business account.
-   Added the method [setBusinessAccountName](/bots/api/#setbusinessaccountname), allowing bots to change the first and last name of a managed business account.
-   Added the method [setBusinessAccountUsername](/bots/api/#setbusinessaccountusername), allowing bots to change the username of a managed business account.
-   Added the method [setBusinessAccountBio](/bots/api/#setbusinessaccountbio), allowing bots to change the bio of a managed business account.
-   Added the class [InputProfilePhoto](/bots/api/#inputprofilephoto), describing a profile photo to be set.
-   Added the methods [setBusinessAccountProfilePhoto](/bots/api/#setbusinessaccountprofilephoto) and [removeBusinessAccountProfilePhoto](/bots/api/#removebusinessaccountprofilephoto), allowing bots to change the profile photo of a managed business account.
-   Added the method [setBusinessAccountGiftSettings](/bots/api/#setbusinessaccountgiftsettings), allowing bots to change the privacy settings pertaining to incoming gifts in a managed business account.
-   Added the class [StarAmount](/bots/api/#staramount) and the method [getBusinessAccountStarBalance](/bots/api/#getbusinessaccountstarbalance), allowing bots to check the current Telegram Star balance of a managed business account.
-   Added the method [transferBusinessAccountStars](/bots/api/#transferbusinessaccountstars), allowing bots to transfer Telegram Stars from the balance of a managed business account to their own balance for withdrawal.
-   Added the classes [OwnedGiftRegular](/bots/api/#ownedgiftregular), [OwnedGiftUnique](/bots/api/#ownedgiftunique), [OwnedGifts](/bots/api/#ownedgifts) and the method [getBusinessAccountGifts](/bots/api/#getbusinessaccountgifts), allowing bots to fetch the list of gifts owned by a managed business account.
-   Added the method [convertGiftToStars](/bots/api/#convertgifttostars), allowing bots to convert gifts received by a managed business account to Telegram Stars.
-   Added the method [upgradeGift](/bots/api/#upgradegift), allowing bots to upgrade regular gifts received by a managed business account to unique gifts.
-   Added the method [transferGift](/bots/api/#transfergift), allowing bots to transfer unique gifts owned by a managed business account.
-   Added the classes [InputStoryContentPhoto](/bots/api/#inputstorycontentphoto) and [InputStoryContentVideo](/bots/api/#inputstorycontentvideo) representing the content of a story to post.
-   Added the classes [StoryArea](/bots/api/#storyarea), [StoryAreaPosition](/bots/api/#storyareaposition), [LocationAddress](/bots/api/#locationaddress), [StoryAreaTypeLocation](/bots/api/#storyareatypelocation), [StoryAreaTypeSuggestedReaction](/bots/api/#storyareatypesuggestedreaction), [StoryAreaTypeLink](/bots/api/#storyareatypelink), [StoryAreaTypeWeather](/bots/api/#storyareatypeweather) and [StoryAreaTypeUniqueGift](/bots/api/#storyareatypeuniquegift), describing clickable active areas on stories.
-   Added the method [postStory](/bots/api/#poststory), allowing bots to post a story on behalf of a managed business account.
-   Added the method [editStory](/bots/api/#editstory), allowing bots to edit stories they had previously posted on behalf of a managed business account.
-   Added the method [deleteStory](/bots/api/#deletestory), allowing bots to delete stories they had previously posted on behalf of a managed business account.

**Mini Apps**

-   Added the field [DeviceStorage](/bots/webapps/#devicestorage), allowing Mini Apps to use persistent local storage on the user's device.
-   Added the field [SecureStorage](/bots/webapps/#securestorage), allowing Mini Apps to use a secure local storage on the user's device for sensitive data.

**Gifts**

-   Added the classes [UniqueGiftModel](/bots/api/#uniquegiftmodel), [UniqueGiftSymbol](/bots/api/#uniquegiftsymbol), [UniqueGiftBackdropColors](/bots/api/#uniquegiftbackdropcolors), and [UniqueGiftBackdrop](/bots/api/#uniquegiftbackdrop) to describe the properties of a unique gift.
-   Added the class [UniqueGift](/bots/api/#uniquegift) describing a gift that was upgraded to a unique one.
-   Added the class [AcceptedGiftTypes](/bots/api/#acceptedgifttypes) describing the types of gifts that are accepted by a user or a chat.
-   Replaced the field _can\_send\_gift_ with the field _accepted\_gift\_types_ of the type [AcceptedGiftTypes](/bots/api/#acceptedgifttypes) in the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Added the class [GiftInfo](/bots/api/#giftinfo) and the field _gift_ to the class [Message](/bots/api/#message), describing a service message about a regular gift that was sent or received.
-   Added the class [UniqueGiftInfo](/bots/api/#uniquegiftinfo) and the field _unique\_gift_ to the class [Message](/bots/api/#message), describing a service message about a unique gift that was sent or received.

**Telegram Premium**

-   Added the method [giftPremiumSubscription](/bots/api/#giftpremiumsubscription), allowing bots to gift a user a Telegram Premium subscription paid in Telegram Stars.
-   Added the field _premium\_subscription\_duration_ to the class [TransactionPartnerUser](/bots/api/#transactionpartneruser) for transactions involving a Telegram Premium subscription purchased by the bot.
-   Added the field _transaction\_type_ to the class [TransactionPartnerUser](/bots/api/#transactionpartneruser), simplifying the differentiation and processing of all transaction types.

**General**

-   Increased the maximum price for paid media to 10000 Telegram Stars.
-   Increased the maximum price for a subscription period to 10000 Telegram Stars.
-   Added the class [PaidMessagePriceChanged](/bots/api/#paidmessagepricechanged) and the field _paid\_message\_price\_changed_ to the class [Message](/bots/api/#message), describing a service message about a price change for paid messages sent to the chat.
-   Added the field _paid\_star\_count_ to the class [Message](/bots/api/#message), containing the number of [Telegram Stars](/blog/telegram-stars/) that were paid to send the message.

#### February 12, 2025

**Bot API 8.3**

-   Added the parameter _chat\_id_ to the method [sendGift](/bots/api/#sendgift), allowing bots to send gifts to channel chats.
-   Added the field _can\_send\_gift_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Added the class [TransactionPartnerChat](/bots/api/#transactionpartnerchat) describing transactions with chats.
-   Added the fields _cover_ and _start\_timestamp_ to the class [Video](/bots/api/#video), containing a message-specific cover and a start timestamp for the video.
-   Added the parameters _cover_ and _start\_timestamp_ to the method [sendVideo](/bots/api/#sendvideo), allowing bots to specify a cover and a start timestamp for the videos they send.
-   Added the fields _cover_ and _start\_timestamp_ to the classes [InputMediaVideo](/bots/api/#inputmediavideo) and [InputPaidMediaVideo](/bots/api/#inputpaidmediavideo), allowing bots to edit video cover and start timestamp and specify them for videos in albums and paid media.
-   Added the parameter _video\_start\_timestamp_ to the methods [forwardMessage](/bots/api/#forwardmessage) and [copyMessage](/bots/api/#copymessage), allowing bots to change the start timestamp for forwarded and copied videos.
-   Allowed to add reactions to most types of service messages.

#### January 1, 2025

**Bot API 8.2**

-   Added the methods [verifyUser](/bots/api/#verifyuser), [verifyChat](/bots/api/#verifychat), [removeUserVerification](/bots/api/#removeuserverification) and [removeChatVerification](/bots/api/#removechatverification), allowing bots to manage [verifications on behalf of an organization](/verify/#third-party-verification).
-   Added the field _upgrade\_star\_count_ to the class [Gift](/bots/api/#gift).
-   Added the parameter _pay\_for\_upgrade_ to the method [sendGift](/bots/api/#sendgift).
-   Removed the field _hide\_url_ from the class [InlineQueryResultArticle](/bots/api/#inlinequeryresultarticle). Pass an empty string as _url_ instead.

### 2024

#### December 4, 2024

**Bot API 8.1**

-   Added the field _nanostar\_amount_ to the class [StarTransaction](/bots/api/#startransaction).
-   Added the class [TransactionPartnerAffiliateProgram](/bots/api/#transactionpartneraffiliateprogram) for transactions pertaining to incoming affiliate commissions.
-   Added the class [AffiliateInfo](/bots/api/#affiliateinfo) and the field _affiliate_ to the class [TransactionPartnerUser](/bots/api/#transactionpartneruser), allowing bots to identify the relevant affiliate in transactions with an affiliate commission.

#### November 17, 2024

**Bot API 8.0**

> Bot API 8.0 introduces **10 powerful new features** for Mini Apps - including the ability to enter [full-screen mode](/blog/fullscreen-miniapps-and-more/#full-screen-mode), launch from [home screen shortcuts](/blog/fullscreen-miniapps-and-more/#home-screen-shortcuts), offer [subscription plans](/blog/fullscreen-miniapps-and-more/#subscription-plans) and more. Check out all the details in our dedicated [blog](/blog/fullscreen-miniapps-and-more/) and Mini App [documentation](/bots/webapps/).

**Star Subscriptions**

-   Bots now support **paid subscriptions** powered by [Telegram Stars](/blog/telegram-stars/) - **monetizing their efforts** with multiple tiers of content and features.
-   Added the parameter _subscription\_period_ to the method [createInvoiceLink](/bots/api/#createinvoicelink) to support the creation of links that are billed periodically.
-   Added the parameter _business\_connection\_id_ to the method [createInvoiceLink](/bots/api/#createinvoicelink) to support the creation of invoice links on behalf of business accounts.
-   Added the fields _subscription\_expiration\_date_, _is\_recurring_ and _is\_first\_recurring_ to the class [SuccessfulPayment](/bots/api/#successfulpayment).
-   Added the method [editUserStarSubscription](/bots/api/#edituserstarsubscription).
-   Added the field _subscription\_period_ to the class [TransactionPartnerUser](/bots/api/#transactionpartneruser).

**Full-screen Mode**

-   Mini Apps are now able to [become full-screen](/blog/fullscreen-miniapps-and-more/#full-screen-mode) in both portrait and **landscape mode** - allowing them to host **more games**, play **widescreen media** and support **immersive** user experiences.
-   Added the methods _requestFullscreen_ and _exitFullscreen_ to the class [WebApp](/bots/webapps/#initializing-mini-apps) to toggle full-screen mode.
-   Added the fields _safeAreaInset_ and _contentSafeAreaInset_ to the class [WebApp](/bots/webapps/#initializing-mini-apps), allowing Mini Apps to ensure that their content properly respects the device's safe area margins.
-   Further added the fields _isActive_ and _isFullscreen_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the [events](/bots/webapps/#events-available-for-mini-apps) _activated_, _deactivated_, _safeAreaChanged_, _contentSafeAreaChanged_, _fullscreenChanged_ and _fullscreenFailed_ for Mini Apps.

**Homescreen Shortcuts**

-   Mini Apps can now be accessed via [direct shortcuts](/blog/fullscreen-miniapps-and-more/#home-screen-shortcuts) added to the **home screen** of mobile devices.
-   Added the method _addToHomeScreen_ to the class [WebApp](/bots/webapps/#initializing-mini-apps) to create a shortcut for users to add to their home screens.
-   Added the method _checkHomeScreenStatus_ to the class [WebApp](/bots/webapps/#initializing-mini-apps) to determine the status and support of the home screen shortcut for the Mini App on the current device.
-   Added the [events](/bots/webapps/#events-available-for-mini-apps) _homeScreenAdded_ and _homeScreenChecked_ for Mini Apps.

**Emoji Status**

-   Mini Apps can now prompt users to set their [emoji status](/blog/fullscreen-miniapps-and-more/#emoji-statuses-from-apps) - or request access to later sync it automatically with in-game badges, third-party APIs and more.
-   Added the method [setUserEmojiStatus](/bots/api/#setuseremojistatus). The user must allow the bot to manage their emoji status.
-   Added the method _setEmojiStatus_ to the class [WebApp](/bots/webapps/#initializing-mini-apps) to let users manually confirm a custom emoji as their new status via a native dialog.
-   Added the method _requestEmojiStatusAccess_ to the class [WebApp](/bots/webapps/#initializing-mini-apps) for obtaining permission to later update a user's emoji status via the Bot API method [setUserEmojiStatus](/bots/api/#setuseremojistatus).
-   Added the [events](/bots/webapps/#events-available-for-mini-apps) _emojiStatusSet_, _emojiStatusFailed_ and _emojiStatusAccessRequested_ for Mini Apps.

**Media Sharing and File Downloads**

-   Users can now [share media](/blog/fullscreen-miniapps-and-more/#media-sharing) directly from Mini Apps - sending **referral codes**, custom memes, artwork and more to **any chat** or posting them [as a story](/blog/w3-browser-mini-app-store/#sharing-from-mini-apps-to-stories).
-   Added the class [PreparedInlineMessage](/bots/api/#preparedinlinemessage) and the method [savePreparedInlineMessage](/bots/api/#savepreparedinlinemessage), allowing bots to suggest users to send a specific message from a Mini App via the method [shareMessage](/bots/webapps/#initializing-mini-apps).
-   Added the method _shareMessage_ to the class [WebApp](/bots/webapps/#initializing-mini-apps) to share media from Mini Apps to Telegram chats.
-   Added the method _downloadFile_ to the class [WebApp](/bots/webapps/#initializing-mini-apps), introducing support for a **native popup** that prompts users to download files from the Mini App.
-   Added the [events](/bots/webapps/#events-available-for-mini-apps) _shareMessageSent_, _shareMessageFailed_ and _fileDownloadRequested_ for Mini Apps.

**Geolocation Access**

-   Mini Apps can now request [geolocation access](/blog/fullscreen-miniapps-and-more/#geolocation-access) to users, allowing them to build virtually any location-based service, from **games** with dynamic points of interest to **interactive maps** for events.
-   Added the field _LocationManager_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the [events](/bots/webapps/#events-available-for-mini-apps) _locationManagerUpdated_ and _locationRequested_ for Mini Apps.

**Device Motion Tracking**

-   Mini Apps can now track detailed [device motion data](/blog/fullscreen-miniapps-and-more/#device-motion-tracking), allowing them to implement better productivity tools, immersive **VR experiences** and more.
-   Added the fields _isOrientationLocked_, _Accelerometer_, _DeviceOrientation_ and _Gyroscope_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the methods _lockOrientation_ and _unlockOrientation_ to the class [WebApp](/bots/webapps/#initializing-mini-apps) to control the screen orientation.
-   Added the [events](/bots/webapps/#events-available-for-mini-apps) _accelerometerStarted_, _accelerometerStopped_, _accelerometerChanged_, _accelerometerFailed_, _deviceOrientationStarted_, _deviceOrientationStopped_, _deviceOrientationChanged_, _deviceOrientationFailed_, _gyroscopeStarted_, _gyroscopeStopped_, _gyroscopeChanged_, _gyroscopeFailed_ for Mini Apps.

**Gifts**

-   Bots can now send [Paid Gifts](/blog/gifts-verification-platform/#gifts) to users in exchange for Telegram Stars.
-   Added the classes [Gift](/bots/api/#gift) and [Gifts](/bots/api/#gifts) and the method [getAvailableGifts](/bots/api/#getavailablegifts), allowing bots to get all gifts available for sending.
-   Added the method [sendGift](/bots/api/#sendgift), allowing bots to send gifts to users.
-   Added the field _gift_ to the class [TransactionPartnerUser](/bots/api/#transactionpartneruser).

**Loading Screen Customization**

-   Mini Apps can customize their loading screen, adding **their own icon** and **specific colors** for light and dark themes.
-   You can access these customization settings in [@BotFather](https://t.me/botfather) via _/mybots > Select Bot > Bot Settings > Configure Mini App > Enable Mini App_

**Hardware-specific Optimizations**

-   Mini Apps running on Android can now receive [basic information](/bots/webapps/#additional-data-in-user-agent) about a device's processing hardware, allowing them to **optimize user experience** based on the device's capabilities.
-   This information includes the OS, App and SDK's respective versions as well as the device's model and performance class.

**General**

-   Added the field _photo\_url_ to the class [WebAppUser](/bots/webapps/#webappuser) for all bots, allowing Mini Apps to access a user's profile photo if their privacy settings allow for it.
-   Third parties (e.g., Mini App builders) that receive or process data on behalf of Mini Apps are now able to [validate it](/bots/webapps/#validating-data-for-third-party-use) without knowing the App's [bot token](/bots/tutorial/#obtain-your-bot-token).
-   Debugging [options](/bots/webapps/#debug-mode-for-mini-apps) have been expanded to include full support for **iOS devices**. You can use these tools to find app-specific issues in your Mini App.

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> Starting December 1, 2024 messages with video that are sent, copied or forwarded to groups and channels with a sufficiently large audience can be automatically scheduled by the server until the respective video is reencoded. Such messages will have 0 as their message identifier and can't be used before they are actually sent.

#### October 31, 2024

**Bot API 7.11**

-   Added the class [CopyTextButton](/bots/api/#copytextbutton) and the field _copy\_text_ in the class [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton) allowing bots to send and receive inline buttons that copy arbitrary text.
-   Added the parameter _allow\_paid\_broadcast_ to the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendPaidMedia](/bots/api/#sendpaidmedia), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendPoll](/bots/api/#sendpoll), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [sendGame](/bots/api/#sendgame), [sendMediaGroup](/bots/api/#sendmediagroup) and [copyMessage](/bots/api/#copymessage).
-   Added the class [TransactionPartnerTelegramApi](/bots/api/#transactionpartnertelegramapi) for transactions related to paid broadcasted messages.
-   Introduced the ability to add media to existing text messages using the method [editMessageMedia](/bots/api/#editmessagemedia).
-   Added support for hashtag and cashtag [entities](/bots/api/#messageentity) with a specified chat username that opens a search for the relevant tag within the specified chat.

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> Starting December 1, 2024 messages with video that are sent, copied or forwarded to groups and channels with a sufficiently large audience can be automatically scheduled by the server until the respective video is reencoded. Such messages will have 0 as their message identifier and can't be used before they are actually sent.

#### September 6, 2024

**Bot API 7.10**

-   Added updates about purchased paid media, represented by the class [PaidMediaPurchased](/bots/api/#paidmediapurchased) and the field _purchased\_paid\_media_ in the class [Update](/bots/api/#update).
-   Added the ability to specify a payload in [sendPaidMedia](/bots/api/#sendpaidmedia) that is received back by the bot in [TransactionPartnerUser](/bots/api/#transactionpartneruser) and _purchased\_paid\_media_ updates.
-   Added the field _prize\_star\_count_ to the classes [GiveawayCreated](/bots/api/#giveawaycreated), [Giveaway](/bots/api/#giveaway), [GiveawayWinners](/bots/api/#giveawaywinners) and [ChatBoostSourceGiveaway](/bots/api/#chatboostsourcegiveaway).
-   Added the field _is\_star\_giveaway_ to the class [GiveawayCompleted](/bots/api/#giveawaycompleted).
-   Added the field _SecondaryButton_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the event _secondaryButtonClicked_ for Mini Apps.
-   Added the field _bottomBarColor_ and the method _setBottomBarColor_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the field _bottom\_bar\_bg\_color_ to the class [ThemeParams](/bots/webapps/#themeparams).

#### August 14, 2024

**Bot API 7.9**

-   Added support for [Super Channels](/blog/superchannels-star-reactions-subscriptions/#super-channels), allowing received channel messages to have users or other channels as their senders.
-   Added the ability to send paid media to any chat.
-   Added the parameter _business\_connection\_id_ to the method [sendPaidMedia](/bots/api/#sendpaidmedia), allowing bots to send paid media on behalf of a business account.
-   Added the field _paid\_media_ to the class [TransactionPartnerUser](/bots/api/#transactionpartneruser) for transactions involving paid media.
-   Added the fields _subscription\_period_ and _subscription\_price_ to the class [ChatInviteLink](/bots/api/#chatinvitelink).
-   Added the method [createChatSubscriptionInviteLink](/bots/api/#createchatsubscriptioninvitelink), allowing bots to create subscription invite links.
-   Added the method [editChatSubscriptionInviteLink](/bots/api/#editchatsubscriptioninvitelink), allowing bots to edit the _name_ of subscription invite links.
-   Added the field _until\_date_ to the class [ChatMemberMember](/bots/api/#chatmembermember) for members with an active subscription.
-   Added support for paid reactions and the class [ReactionTypePaid](/bots/api/#reactiontypepaid).

#### July 31, 2024

**Bot API 7.8**

-   Added the option for bots to set a [Main Mini App](/bots/webapps/#launching-the-main-mini-app), which can be previewed and launched directly from a button in the bot's profile or a link.
-   Added the method _shareToStory_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the field _has\_main\_web\_app_ to the class [User](/bots/api/#user), which is returned in the response to [getMe](/bots/api/#getme).
-   Added the parameter _business\_connection\_id_ to the methods [pinChatMessage](/bots/api/#pinchatmessage) and [unpinChatMessage](/bots/api/#unpinchatmessage), allowing bots to manage pinned messages on behalf of a business account.

#### July 7, 2024

**Bot API 7.7**

-   Added the class [RefundedPayment](/bots/api/#refundedpayment), containing information about a refunded payment.
-   Added the field _refunded\_payment_ to the class [Message](/bots/api/#message), describing a service message about a refunded payment.
-   Added the field _isVerticalSwipesEnabled_ and the methods _enableVerticalSwipes_, _disableVerticalSwipes_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the [event](/bots/webapps/#events-available-for-mini-apps) _scanQrPopupClosed_ for Mini Apps.

#### July 1, 2024

**Bot API 7.6**

-   Added the classes [PaidMedia](/bots/api/#paidmedia), [PaidMediaInfo](/bots/api/#paidmediainfo), [PaidMediaPreview](/bots/api/#paidmediapreview), [PaidMediaPhoto](/bots/api/#paidmediaphoto) and [PaidMediaVideo](/bots/api/#paidmediavideo), containing information about paid media.
-   Added the method [sendPaidMedia](/bots/api/#sendpaidmedia) and the classes [InputPaidMedia](/bots/api/#inputpaidmedia), [InputPaidMediaPhoto](/bots/api/#inputpaidmediaphoto) and [InputPaidMediaVideo](/bots/api/#inputpaidmediavideo), to support sending paid media.
-   Documented that the methods [copyMessage](/bots/api/#copymessage) and [copyMessages](/bots/api/#copymessages) cannot be used to copy paid media.
-   Added the field _can\_send\_paid\_media_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Added the field _paid\_media_ to the classes [Message](/bots/api/#message) and [ExternalReplyInfo](/bots/api/#externalreplyinfo).
-   Added the class [TransactionPartnerTelegramAds](/bots/api/#transactionpartnertelegramads), containing information about Telegram Star transactions involving the Telegram Ads Platform.
-   Added the field _invoice\_payload_ to the class [TransactionPartnerUser](/bots/api/#transactionpartneruser), containing the bot-specified invoice payload.
-   Changed the default opening mode for [Direct Link Mini Apps](/bots/webapps/#direct-link-mini-apps).
-   Added support for launching Web Apps via `t.me` link in the class [MenuButtonWebApp](/bots/api/#menubuttonwebapp).
-   Added the field _section\_separator\_color_ to the class [ThemeParams](/bots/webapps/#themeparams).

#### June 18, 2024

**Bot API 7.5**

-   Added the classes [StarTransactions](/bots/api/#startransactions), [StarTransaction](/bots/api/#startransaction), [TransactionPartner](/bots/api/#transactionpartner) and [RevenueWithdrawalState](/bots/api/#revenuewithdrawalstate), containing information about Telegram Star transactions involving the bot.
-   Added the method [getStarTransactions](/bots/api/#getstartransactions) that can be used to get the list of all Telegram Star transactions for the bot.
-   Added support for _callback_ buttons in [InlineKeyboardMarkup](/bots/api/#inlinekeyboardmarkup) for messages sent on behalf of a business account.
-   Added support for callback queries originating from a message sent on behalf of a business account.
-   Added the parameter _business\_connection\_id_ to the methods [editMessageText](/bots/api/#editmessagetext), [editMessageMedia](/bots/api/#editmessagemedia), [editMessageCaption](/bots/api/#editmessagecaption), [editMessageLiveLocation](/bots/api/#editmessagelivelocation), [stopMessageLiveLocation](/bots/api/#stopmessagelivelocation) and [editMessageReplyMarkup](/bots/api/#editmessagereplymarkup), allowing the bot to edit business messages.
-   Added the parameter _business\_connection\_id_ to the method [stopPoll](/bots/api/#stoppoll), allowing the bot to stop polls it sent on behalf of a business account.

#### May 28, 2024

**Bot API 7.4**

-   Added support for payments in [Telegram Stars](https://t.me/BotNews/90) by introducing the new currency “XTR”.
-   The parameter _provider\_token_ of the methods [sendInvoice](/bots/api/#sendinvoice) and [createInvoiceLink](/bots/api/#createinvoicelink) must be omitted for payments in [Telegram Stars](https://t.me/BotNews/90).
-   The field _provider\_token_ in the class [InputInvoiceMessageContent](/bots/api/#inputinvoicemessagecontent) must be omitted for payments in [Telegram Stars](https://t.me/BotNews/90).
-   Added the method [refundStarPayment](/bots/api/#refundstarpayment).
-   Added the field _effect\_id_ to the class [Message](/bots/api/#message).
-   Added the parameter _message\_effect\_id_ to the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendPoll](/bots/api/#sendpoll), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [sendGame](/bots/api/#sendgame), and [sendMediaGroup](/bots/api/#sendmediagroup).
-   Added the field _show\_caption\_above\_media_ to the classes [Message](/bots/api/#message), [InputMediaAnimation](/bots/api/#inputmediaanimation), [InputMediaPhoto](/bots/api/#inputmediaphoto), [InputMediaVideo](/bots/api/#inputmediavideo), [InlineQueryResultGif](/bots/api/#inlinequeryresultgif), [InlineQueryResultMpeg4Gif](/bots/api/#inlinequeryresultmpeg4gif), [InlineQueryResultPhoto](/bots/api/#inlinequeryresultphoto), [InlineQueryResultVideo](/bots/api/#inlinequeryresultvideo), [InlineQueryResultCachedGif](/bots/api/#inlinequeryresultcachedgif), [InlineQueryResultCachedMpeg4Gif](/bots/api/#inlinequeryresultcachedmpeg4gif), [InlineQueryResultCachedPhoto](/bots/api/#inlinequeryresultcachedphoto), and [InlineQueryResultCachedVideo](/bots/api/#inlinequeryresultcachedvideo).
-   Added the parameter _show\_caption\_above\_media_ to the methods [sendAnimation](/bots/api/#sendanimation), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [copyMessage](/bots/api/#copymessage), and [editMessageCaption](/bots/api/#editmessagecaption).
-   Added support for “expandable\_blockquote” entities in received messages.
-   Added support for “expandable\_blockquote” entity parsing in “MarkdownV2” and “HTML” parse modes.
-   Allowed to explicitly specify “expandable\_blockquote” entities in formatted texts.

#### May 6, 2024

**Bot API 7.3**

-   Added support for [InlineKeyboardMarkup](/bots/api/#inlinekeyboardmarkup) with _url_, _login\_url_, and _callback\_game_ buttons for messages sent on behalf of a business account.
-   Added the field _via\_join\_request_ to the class [ChatMemberUpdated](/bots/api/#chatmemberupdated).
-   Added support for live locations that can be edited indefinitely, allowing 0x7FFFFFFF to be used as _live\_period_.
-   Added the parameter _live\_period_ to the method [editMessageLiveLocation](/bots/api/#editmessagelivelocation).
-   Added the field _question\_entities_ to the class [Poll](/bots/api/#poll).
-   Added the field _text\_entities_ to the class [PollOption](/bots/api/#polloption).
-   Added the parameters _question\_parse\_mode_ and _question\_entities_ to the method [sendPoll](/bots/api/#sendpoll).
-   Added the class [InputPollOption](/bots/api/#inputpolloption) and changed the type of the parameter _options_ in the method [sendPoll](/bots/api/#sendpoll) to Array of [InputPollOption](/bots/api/#inputpolloption).
-   Added the classes [ChatBackground](/bots/api/#chatbackground), [BackgroundType](/bots/api/#backgroundtype), [BackgroundFill](/bots/api/#backgroundfill) and the field _chat\_background\_set_ of type [ChatBackground](/bots/api/#chatbackground) to the class [Message](/bots/api/#message), describing service messages about background changes.
-   Split out the class [ChatFullInfo](/bots/api/#chatfullinfo) from the class [Chat](/bots/api/#chat) and changed the return type of the method [getChat](/bots/api/#getchat) to [ChatFullInfo](/bots/api/#chatfullinfo).
-   Added the field _max\_reaction\_count_ to the class [ChatFullInfo](/bots/api/#chatfullinfo).
-   Documented that .MP3 and .M4A files can be used as voice messages.

#### March 31, 2024

**Bot API 7.2**

**Integration with Business Accounts**

-   Added the class [BusinessConnection](/bots/api/#businessconnection) and updates about the connection or disconnection of the bot to a business account, represented by the field _business\_connection_ in the class [Update](/bots/api/#update).
-   Added updates about new messages in a business account connected to the bot, represented by the field _business\_message_ in the class [Update](/bots/api/#update).
-   Added updates about message edits in a business account connected to the bot, represented by the field _edited\_business\_message_ in the class [Update](/bots/api/#update).
-   Added updates about message deletion in a business account connected to the bot, represented by the class [BusinessMessagesDeleted](/bots/api/#businessmessagesdeleted) and the field _deleted\_business\_messages_ in the class [Update](/bots/api/#update).
-   Added the method [getBusinessConnection](/bots/api/#getbusinessconnection).

**Working on Behalf of Business Accounts**

-   Added the parameter _business\_connection\_id_ to the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendPoll](/bots/api/#sendpoll), [sendDice](/bots/api/#senddice), [sendGame](/bots/api/#sendgame), and [sendMediaGroup](/bots/api/#sendmediagroup).
-   Added the parameter _business\_connection\_id_ to the method [sendChatAction](/bots/api/#sendchataction).
-   Added the field _business\_connection\_id_ to the class [Message](/bots/api/#message).
-   Added the field _sender\_business\_bot_ to the class [Message](/bots/api/#message).

**Information about Business Accounts**

-   Added the class [BusinessIntro](/bots/api/#businessintro) and the field _business\_intro_ to the class [Chat](/bots/api/#chat).
-   Added the class [BusinessLocation](/bots/api/#businesslocation) and the field _business\_location_ to the class [Chat](/bots/api/#chat).
-   Added the classes [BusinessOpeningHours](/bots/api/#businessopeninghours) and [BusinessOpeningHoursInterval](/bots/api/#businessopeninghoursinterval) and the field _business\_opening\_hours_ to the class [Chat](/bots/api/#chat).

**Mixed-Format Sticker Packs**

-   Removed the fields _is\_animated_ and _is\_video_ from the class [StickerSet](/bots/api/#stickerset).
-   Added the field _format_ to the class [InputSticker](/bots/api/#inputsticker).
-   Removed the parameter _sticker\_format_ from the method [createNewStickerSet](/bots/api/#createnewstickerset).
-   Added the parameter _format_ to the method [setStickerSetThumbnail](/bots/api/#setstickersetthumbnail).
-   Increased the maximum number of stickers in any regular and mask sticker set to 120.
-   Allowed to upload .WEBM stickers using [SendSticker](/bots/api/#sendsticker).

**Request Chat Improvements**

-   Added the fields _request\_name_, _request\_username_, and _request\_photo_ to the class [KeyboardButtonRequestUsers](/bots/api/#keyboardbuttonrequestusers).
-   Added the fields _request\_title_, _request\_username_, and _request\_photo_ to the class [KeyboardButtonRequestChat](/bots/api/#keyboardbuttonrequestchat).
-   Added the class _SharedUser_ and replaced the field _user\_ids_ in the class [UsersShared](/bots/api/#usersshared) with the field _users_.
-   Added the fields _title_, _username_, and _photo_ to the class [ChatShared](/bots/api/#chatshared).

**Other Changes**

-   Added the field _is\_from\_offline_ to the class [Message](/bots/api/#message).
-   Added the field _can\_connect\_to\_business_ to the class [User](/bots/api/#user).
-   Added the field _personal\_chat_ to the class [Chat](/bots/api/#chat).
-   Added the method [replaceStickerInSet](/bots/api/#replacestickerinset),
-   Added the class [Birthdate](/bots/api/#birthdate) and the field _birthdate_ to the class [Chat](/bots/api/#chat).
-   Added the field _BiometricManager_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).

#### February 16, 2024

**Bot API 7.1**

-   Added support for the administrator rights _can\_post\_stories_, _can\_edit\_stories_, _can\_delete\_stories_ in supergroups.
-   Added the class [ChatBoostAdded](/bots/api/#chatboostadded) and the field _boost\_added_ to the class [Message](/bots/api/#message) for service messages about a user boosting a chat.
-   Added the field _sender\_boost\_count_ to the class [Message](/bots/api/#message).
-   Added the field _reply\_to\_story_ to the class [Message](/bots/api/#message).
-   Added the fields _chat_ and _id_ to the class [Story](/bots/api/#story).
-   Added the field _unrestrict\_boost\_count_ to the class [Chat](/bots/api/#chat).
-   Added the field _custom\_emoji\_sticker\_set\_name_ to the class [Chat](/bots/api/#chat).

### 2023

#### December 29, 2023

**Bot API 7.0**

**Reactions**

-   Added the classes [ReactionTypeEmoji](/bots/api/#reactiontypeemoji) and [ReactionTypeCustomEmoji](/bots/api/#reactiontypecustomemoji) representing different types of reaction.
-   Added updates about a reaction change on a message with non-anonymous reactions, represented by the class [MessageReactionUpdated](/bots/api/#messagereactionupdated) and the field _message\_reaction_ in the class [Update](/bots/api/#update). The bot must explicitly allow the update to receive it.
-   Added updates about reaction changes on a message with anonymous reactions, represented by the class [MessageReactionCountUpdated](/bots/api/#messagereactioncountupdated) and the field _message\_reaction\_count_ in the class [Update](/bots/api/#update). The bot must explicitly allow the update to receive it.
-   Added the method [setMessageReaction](/bots/api/#setmessagereaction) that allows bots to react to messages.
-   Added the field _available\_reactions_ to the class [Chat](/bots/api/#chat).

**Replies 2.0**

-   Added the ability to reply to messages in other chats or forum topics.
-   Added the class [ExternalReplyInfo](/bots/api/#externalreplyinfo) and the field _external\_reply_ of type [ExternalReplyInfo](/bots/api/#externalreplyinfo) to the class [Message](/bots/api/#message), containing information about a message that is replied to by the current message, but can be from another chat or forum topic.
-   Added the ability to quote a part of the replied message.
-   Added the class [TextQuote](/bots/api/#textquote) and the field _quote_ of type [TextQuote](/bots/api/#textquote) to the class _Message_, which contains the part of the replied message text or caption that is quoted in the current message.
-   Added the class [ReplyParameters](/bots/api/#replyparameters) and replaced parameters _reply\_to\_message\_id_ and _allow\_sending\_without\_reply_ in the methods [copyMessage](/bots/api/#copymessage), [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendPoll](/bots/api/#sendpoll), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [sendGame](/bots/api/#sendgame), and [sendMediaGroup](/bots/api/#sendmediagroup) with the field _reply\_parameters_ of type [ReplyParameters](/bots/api/#replyparameters).

**Link Preview Customization**

-   Allowed to explicitly specify the URL that will be used for link preview generation in outgoing text messages.
-   Allowed to position link previews above the message text.
-   Allowed to choose media size in link previews.
-   Added the class [LinkPreviewOptions](/bots/api/#linkpreviewoptions) and replaced the parameter _disable\_web\_page\_preview_ with _link\_preview\_options_ in the methods [sendMessage](/bots/api/#sendmessage) and [editMessageText](/bots/api/#editmessagetext).
-   Replaced the field _disable\_web\_page\_preview_ with _link\_preview\_options_ in the class [InputTextMessageContent](/bots/api/#inputtextmessagecontent).
-   Added the field _link\_preview\_options_ to the class [Message](/bots/api/#message) with information about the link preview options used to send the message.

**Block Quotation**

-   Added support for “blockquote” entities in received messages.
-   Added support for “blockquote” entity parsing in “MarkdownV2” and “HTML” parse modes.
-   Allowed to explicitly specify “blockquote” entities in formatted texts.

**Multiple Message Actions**

-   Added the method [deleteMessages](/bots/api/#deletemessages) to allow the deletion of multiple messages in a single request.
-   Added the method [forwardMessages](/bots/api/#forwardmessages) for forwarding of multiple messages in a single request.
-   Added the method [copyMessages](/bots/api/#copymessages) for copying of multiple messages in a single request.

**Request for multiple users**

-   Renamed the class _KeyboardButtonRequestUser_ to [KeyboardButtonRequestUsers](/bots/api/#keyboardbuttonrequestusers) and added the field _max\_quantity_ to it.
-   Renamed the field _request\_user_ in the class [KeyboardButton](/bots/api/#keyboardbutton) to _request\_users_. The old name will still work for backward compatibility.
-   Added the class [UsersShared](/bots/api/#usersshared).
-   Replaced the field _user\_shared_ in the class [Message](/bots/api/#message) with the field _users\_shared_.

**Chat Boost**

-   Added updates about chat boost changes, represented by the classes [ChatBoostUpdated](/bots/api/#chatboostupdated) and [ChatBoostRemoved](/bots/api/#chatboostremoved) and the fields _chat\_boost_ and _removed\_chat\_boost_ in the class [Update](/bots/api/#update). The bot must be an administrator in the chat to receive these updates.
-   Added the classes [ChatBoostSourcePremium](/bots/api/#chatboostsourcepremium), [ChatBoostSourceGiftCode](/bots/api/#chatboostsourcegiftcode) and [ChatBoostSourceGiveaway](/bots/api/#chatboostsourcegiveaway), representing different sources of a chat boost.
-   Added the method [getUserChatBoosts](/bots/api/#getuserchatboosts) for obtaining the list of all active boosts a user has contributed to a chat.

**Giveaway**

-   Added the class [Giveaway](/bots/api/#giveaway) and the field _giveaway_ to the class [Message](/bots/api/#message) for messages about scheduled giveaways.
-   Added the class [GiveawayCreated](/bots/api/#giveawaycreated) and the field _giveaway\_created_ to the class [Message](/bots/api/#message) for service messages about the creation of a scheduled giveaway.
-   Added the class [GiveawayWinners](/bots/api/#giveawaywinners) and the field _giveaway\_winners_ to the class [Message](/bots/api/#message) for messages about the completion of a giveaway with public winners.
-   Added the class [GiveawayCompleted](/bots/api/#giveawaycompleted) and the field _giveaway\_completed_ to the class [Message](/bots/api/#message) for service messages about the completion of a giveaway without public winners.

**Web App Changes**

-   Added the field _SettingsButton_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the fields _header\_bg\_color_, _accent\_text\_color_, _section\_bg\_color_, _section\_header\_text\_color_, _subtitle\_text\_color_, _destructive\_text\_color_ to the class [ThemeParams](/bots/webapps/#themeparams).
-   Web Apps no longer close when the method _WebApp.openTelegramLink_ is called.

**Other Changes**

-   Added support for the fields _emoji\_status\_custom\_emoji\_id_ and _emoji\_status\_expiration\_date_ in the class [Chat](/bots/api/#chat) for non-private chats.
-   Added the fields _accent\_color\_id_, _background\_custom\_emoji\_id_, _profile\_accent\_color\_id_, and _profile\_background\_custom\_emoji\_id_ to the class [Chat](/bots/api/#chat).
-   Added the field _has\_visible\_history_ to the class [Chat](/bots/api/#chat).
-   Added the class [MessageOrigin](/bots/api/#messageorigin) and replaced the fields _forward\_from_, _forward\_from\_chat_, _forward\_from\_message\_id_, _forward\_signature_, _forward\_sender\_name_, and _forward\_date_ with the field _forward\_origin_ of type [MessageOrigin](/bots/api/#messageorigin) in the class [Message](/bots/api/#message).
-   Improved documentation for the field _message_ of the class [callbackQuery](/bots/api/#callbackquery) and the field _pinned\_message_ of the class [Message](/bots/api/#message) by adding the classes [MaybeInaccessibleMessage](/bots/api/#maybeinaccessiblemessage) and [InaccessibleMessage](/bots/api/#inaccessiblemessage).

#### September 22, 2023

**Bot API 6.9**

-   Added the new administrator privileges _can\_post\_stories_, _can\_edit\_stories_ and _can\_delete\_stories_ to the classes [ChatMemberAdministrator](/bots/api/#chatmemberadministrator) and [ChatAdministratorRights](/bots/api/#chatadministratorrights).
-   Added the parameters _can\_post\_stories_, _can\_edit\_stories_ and _can\_delete\_stories_ to the method [promoteChatMember](/bots/api/#promotechatmember). Currently, bots have no use for these privileges besides assigning them to other administrators.
-   Added the ability to set any header color for Web App using the method _setHeaderColor_.
-   Added the field _CloudStorage_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added the methods _requestWriteAccess_ and _requestContact_ to the class [WebApp](/bots/webapps/#initializing-mini-apps).
-   Added Web App events _writeAccessRequested_ and _contactRequested_.
-   Added the fields _from\_request_ and _from\_attachment\_menu_ to the class [WriteAccessAllowed](/bots/api/#writeaccessallowed).
-   Added the fields _added\_to\_attachment\_menu_ and _allows\_write\_to\_pm_ to the class [WebAppUser](/bots/webapps/#webappuser).

#### August 18, 2023

**Bot API 6.8**

-   Added the field _story_ to the class [Message](/bots/api/#message) for messages with forwarded stories. Currently, it holds no information.
-   Added the field _voter\_chat_ to the class [PollAnswer](/bots/api/#pollanswer), to contain channel chat voters in [Polls](/bots/api/#poll). For backward compatibility, the field _user_ in such objects will contain the user 136817688 ([@Channel\_Bot](https://t.me/Channel_Bot)).
-   Added the field _emoji\_status\_expiration\_date_ to the class [Chat](/bots/api/#chat).
-   Added the method [unpinAllGeneralForumTopicMessages](/bots/api/#unpinallgeneralforumtopicmessages).
-   Increased to 512 characters the maximum length of the _startapp_ parameter in direct Web App links.

#### April 21, 2023

**Bot API 6.7**

-   Added support for launching [Web Apps](/bots/webapps/) from inline query results by replacing the parameters _switch\_pm\_text_ and _switch\_pm\_parameter_ of the method [answerInlineQuery](/bots/api/#answerinlinequery) with the parameter _button_ of type [InlineQueryResultsButton](/bots/api/#inlinequeryresultsbutton).
-   Added the field _web\_app\_name_ to the class [WriteAccessAllowed](/bots/api/#writeaccessallowed).
-   Added the field _switch\_inline\_query\_chosen\_chat_ of the type [SwitchInlineQueryChosenChat](/bots/api/#switchinlinequerychosenchat) to the class [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton), which allows bots to switch to inline mode in a chosen chat of the given type.
-   Added the field _via\_chat\_folder\_invite\_link_ to the class [ChatMemberUpdated](/bots/api/#chatmemberupdated).
-   Added the ability to set different bot names for different user languages using the method [setMyName](/bots/api/#setmyname).
-   Added the ability to get the current bot name in the given language as the class [BotName](/bots/api/#botname) using the method [getMyName](/bots/api/#getmyname).
-   Added the ability to change bot settings from the bot's profile in official Telegram apps, including the ability to set animated profile photos.
-   Added the ability to specify custom emoji entities using [HTML](/bots/api/#html-style) and [MarkdownV2](/bots/api/#markdownv2-style) formatting options for bots that purchased additional usernames on [Fragment](https://fragment.com).

#### March 9, 2023

**Bot API 6.6**

-   Added the ability to set different bot descriptions for different user languages using the method [setMyDescription](/bots/api/#setmydescription).
-   Added the ability to get the current bot description in the given language as the class [BotDescription](/bots/api/#botdescription) using the method [getMyDescription](/bots/api/#getmydescription).
-   Added the ability to set different bot short descriptions for different user languages using the method [setMyShortDescription](/bots/api/#setmyshortdescription).
-   Added the ability to get the current bot short description in the given language as the class [BotShortDescription](/bots/api/#botshortdescription) using the method [getMyShortDescription](/bots/api/#getmyshortdescription).
-   Added the parameter _emoji_ to the method [sendSticker](/bots/api/#sendsticker) to specify an emoji for just uploaded stickers.
-   Added support for the creation of custom emoji sticker sets in [createNewStickerSet](/bots/api/#createnewstickerset).
-   Added the parameter _needs\_repainting_ to the method [createNewStickerSet](/bots/api/#createnewstickerset) to automatically change the color of emoji based on context (e.g., use text color in messages, accent color in statuses, etc.).
-   Added the field _needs\_repainting_ to the class [Sticker](/bots/api/#sticker).
-   Replaced the parameters _png\_sticker_, _tgs\_sticker_, _webm\_sticker_, _emojis_ and _mask\_position_ in the method [addStickerToSet](/bots/api/#addstickertoset) with the parameter _sticker_ of the type [InputSticker](/bots/api/#inputsticker).
-   Added support for the creation of sticker sets with multiple initial stickers in [createNewStickerSet](/bots/api/#createnewstickerset) by replacing the parameters _png\_sticker_, _tgs\_sticker_, _webm\_sticker_, _emojis_ and _mask\_position_ with the parameters _stickers_ and _sticker\_format_.
-   Added support for .WEBP files in [createNewStickerSet](/bots/api/#createnewstickerset) and [addStickerToSet](/bots/api/#addstickertoset).
-   Added support for .WEBP, .TGS, and .WEBM files in [uploadStickerFile](/bots/api/#uploadstickerfile) by replacing the parameter _png\_sticker_ in the method [uploadStickerFile](/bots/api/#uploadstickerfile) with the parameters _sticker_ and _sticker\_format_.
-   Added the ability to specify search keywords for stickers added to sticker sets.
-   Added the method [setCustomEmojiStickerSetThumbnail](/bots/api/#setcustomemojistickersetthumbnail) for editing the thumbnail of custom emoji sticker sets created by the bot.
-   Added the method [setStickerSetTitle](/bots/api/#setstickersettitle) for editing the title of sticker sets created by the bot.
-   Added the method [deleteStickerSet](/bots/api/#deletestickerset) for complete deletion of a given sticker set that was created by the bot.
-   Added the method [setStickerEmojiList](/bots/api/#setstickeremojilist) for changing the list of emoji associated with a sticker.
-   Added the method [setStickerKeywords](/bots/api/#setstickerkeywords) for changing the search keywords assigned to a sticker.
-   Added the method [setStickerMaskPosition](/bots/api/#setstickermaskposition) for changing the [mask position](/bots/api/#maskposition) of a mask sticker.
-   Renamed the field _thumb_ in the classes [Animation](/bots/api/#animation), [Audio](/bots/api/#audio), [Document](/bots/api/#document), [Sticker](/bots/api/#sticker), [Video](/bots/api/#video), [VideoNote](/bots/api/#videonote), [InputMediaAnimation](/bots/api/#inputmediaanimation), [InputMediaAudio](/bots/api/#inputmediaaudio), [InputMediaDocument](/bots/api/#inputmediadocument), [InputMediaVideo](/bots/api/#inputmediavideo), [StickerSet](/bots/api/#stickerset) to _thumbnail_.
-   Renamed the parameter _thumb_ in the methods [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendVideo](/bots/api/#sendvideo), [sendVideoNote](/bots/api/#sendvideonote) to _thumbnail_.
-   Renamed the method _setStickerSetThumb_ to [setStickerSetThumbnail](/bots/api/#setstickersetthumbnail) and its parameter _thumb_ to _thumbnail_.
-   Renamed the fields _thumb\_url_, _thumb\_width_, and _thumb\_height_ in the classes [InlineQueryResultArticle](/bots/api/#inlinequeryresultarticle), [InlineQueryResultContact](/bots/api/#inlinequeryresultcontact), [InlineQueryResultDocument](/bots/api/#inlinequeryresultdocument), [InlineQueryResultLocation](/bots/api/#inlinequeryresultlocation), and [InlineQueryResultVenue](/bots/api/#inlinequeryresultvenue) to _thumbnail\_url_, _thumbnail\_width_, and _thumbnail\_height_ respectively.
-   Renamed the field _thumb\_url_ in the classes [InlineQueryResultPhoto](/bots/api/#inlinequeryresultphoto) and [InlineQueryResultVideo](/bots/api/#inlinequeryresultvideo) to _thumbnail\_url_.
-   Renamed the fields _thumb\_url_ and _thumb\_mime\_type_ in the classes [InlineQueryResultGif](/bots/api/#inlinequeryresultgif), and [InlineQueryResultMpeg4Gif](/bots/api/#inlinequeryresultmpeg4gif) to _thumbnail\_url_ and _thumbnail\_mime\_type_ respectively.

#### February 3, 2023

**Bot API 6.5**

-   Added [requests for users and chats](/blog/profile-pics-emoji-translations/#chat-selection-for-bots) and support for [granular media permissions](/blog/profile-pics-emoji-translations/#granular-media-permissions).
-   Added the class [KeyboardButtonRequestUser](/bots/api/#keyboardbuttonrequestusers) and the field _request\_user_ to the class [KeyboardButton](/bots/api/#keyboardbutton).
-   Added the class [KeyboardButtonRequestChat](/bots/api/#keyboardbuttonrequestchat) and the field _request\_chat_ to the class [KeyboardButton](/bots/api/#keyboardbutton).
-   Added the classes [UserShared](/bots/api/), [ChatShared](/bots/api/#chatshared) and the fields _user\_shared_, and _chat\_shared_ to the class [Message](/bots/api/#message).
-   Replaced the fields _can\_send\_media\_messages_ in the classes [ChatMemberRestricted](/bots/api/#chatmemberrestricted) and [ChatPermissions](/bots/api/#chatpermissions) with separate fields _can\_send\_audios_, _can\_send\_documents_, _can\_send\_photos_, _can\_send\_videos_, _can\_send\_video\_notes_, and _can\_send\_voice\_notes_ for different media types.
-   Added the parameter _use\_independent\_chat\_permissions_ to the methods [restrictChatMember](/bots/api/#restrictchatmember) and [setChatPermissions](/bots/api/#setchatpermissions).
-   Added the field _user\_chat\_id_ to the class [ChatJoinRequest](/bots/api/#chatjoinrequest).

### 2022

#### December 30, 2022

**Bot API 6.4**

-   Added the field _is\_persistent_ to the class [ReplyKeyboardMarkup](/bots/api/#replykeyboardmarkup), allowing to control when the keyboard is shown.
-   Added the parameter _has\_spoiler_ to the methods [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), and [sendAnimation](/bots/api/#sendanimation).
-   Added the field _has\_spoiler_ to the classes [InputMediaPhoto](/bots/api/#inputmediaphoto), [InputMediaVideo](/bots/api/#inputmediavideo), and [InputMediaAnimation](/bots/api/#inputmediaanimation).
-   Added the field _has\_media\_spoiler_ to the class [Message](/bots/api/#message).
-   The parameters _name_ and _icon\_custom\_emoji\_id_ of the method [editForumTopic](/bots/api/#editforumtopic) are now optional. If they are omitted, the existing values are kept.
-   Added the classes [ForumTopicEdited](/bots/api/#forumtopicedited), [GeneralForumTopicHidden](/bots/api/#generalforumtopichidden), [GeneralForumTopicUnhidden](/bots/api/#generalforumtopicunhidden), and [WriteAccessAllowed](/bots/api/#writeaccessallowed) and the fields _forum\_topic\_edited_, _general\_forum\_topic\_hidden_, _general\_forum\_topic\_unhidden_, and _write\_access\_allowed_ to the class [Message](/bots/api/#message).
-   Added the methods [editGeneralForumTopic](/bots/api/#editgeneralforumtopic), [closeGeneralForumTopic](/bots/api/#closegeneralforumtopic), [reopenGeneralForumTopic](/bots/api/#reopengeneralforumtopic), [hideGeneralForumTopic](/bots/api/#hidegeneralforumtopic), [unhideGeneralForumTopic](/bots/api/#unhidegeneralforumtopic) for managing the General topic in forums.
-   Added the parameter _message\_thread\_id_ to the method [sendChatAction](/bots/api/#sendchataction) for sending chat actions to a specific message thread or a forum topic.
-   Added the field _has\_hidden\_members_ to the class [Chat](/bots/api/#chat). Note that the method [getChatMember](/bots/api/#getchatmember) is only guaranteed to work if the bot is an administrator in the chat.
-   Added the field _has\_aggressive\_anti\_spam\_enabled_ to the class [Chat](/bots/api/#chat).
-   Added Web App events _qrTextReceived_ and _clipboardTextReceived_.
-   Added the field _platform_ to the class [WebApp](/bots/webapps/).
-   Added the methods _showScanQrPopup_, _closeScanQrPopup_, and _readTextFromClipboard_ to the class [WebApp](/bots/webapps/).
-   Added the parameter _options_ to the method _openLink_ of the class [WebApp](/bots/webapps/).

#### November 5, 2022

**Bot API 6.3**

-   Added support for [Topics in Groups](/blog/topics-in-groups-collectible-usernames/#topics-in-groups).
-   Added the field _is\_forum_ to the class [Chat](/bots/api/#chat).
-   Added the fields _is\_topic\_message_ and _message\_thread\_id_ to the class [Message](/bots/api/#message) to allow detection of messages belonging to a forum topic and their message thread identifier.
-   Added the classes [ForumTopicCreated](/bots/api/#forumtopiccreated), [ForumTopicClosed](/bots/api/#forumtopicclosed), and [ForumTopicReopened](/bots/api/#forumtopicreopened) and the fields _forum\_topic\_created_, _forum\_topic\_closed_, and _forum\_topic\_reopened_ to the class [Message](/bots/api/#message). Note that service messages about forum topic creation can't be deleted with the [deleteMessage](/bots/api/#deletemessage) method.
-   Added the field _can\_manage\_topics_ to the classes [ChatAdministratorRights](/bots/api/#chatadministratorrights), [ChatPermissions](/bots/api/#chatpermissions), [ChatMemberAdministrator](/bots/api/#chatmemberadministrator), and [ChatMemberRestricted](/bots/api/#chatmemberrestricted).
-   Added the parameter _can\_manage\_topics_ to the method [promoteChatMember](/bots/api/#promotechatmember).
-   Added the methods [createForumTopic](/bots/api/#createforumtopic), [editForumTopic](/bots/api/#editforumtopic), [closeForumTopic](/bots/api/#closeforumtopic), [reopenForumTopic](/bots/api/#reopenforumtopic), [deleteForumTopic](/bots/api/#deleteforumtopic), [unpinAllForumTopicMessages](/bots/api/#unpinallforumtopicmessages), and [getForumTopicIconStickers](/bots/api/#getforumtopiciconstickers) for forum topic management.
-   Added the parameter _message\_thread\_id_ to the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendPoll](/bots/api/#sendpoll), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [sendGame](/bots/api/#sendgame), [sendMediaGroup](/bots/api/#sendmediagroup), [copyMessage](/bots/api/#copymessage), [forwardMessage](/bots/api/#forwardmessage) to support sending of messages to a forum topic.
-   Added support for [Multiple Usernames](/blog/topics-in-groups-collectible-usernames/#collectible-usernames) via the field _active\_usernames_ in the class [Chat](/bots/api/#chat).
-   Added the field _emoji\_status\_custom\_emoji\_id_ to the class [Chat](/bots/api/#chat).

#### August 12, 2022

**Bot API 6.2**

**Custom Emoji Support**

-   Added the [MessageEntity](/bots/api/#messageentity) type “custom\_emoji”.
-   Added the field _custom\_emoji\_id_ to the class [MessageEntity](/bots/api/#messageentity) for “custom\_emoji” entities.
-   Added the method [getCustomEmojiStickers](/bots/api/#getcustomemojistickers).
-   Added the fields _type_ and _custom\_emoji\_id_ to the class [Sticker](/bots/api/#sticker).
-   Added the field _sticker\_type_ to the class [StickerSet](/bots/api/#stickerset), describing the type of stickers in the set.
-   The field _contains\_masks_ has been removed from the documentation of the class [StickerSet](/bots/api/#stickerset). The field is still returned in the object for backward compatibility, but new bots should use the field _sticker\_type_ instead.
-   Added the parameter _sticker\_type_ to the method [createNewStickerSet](/bots/api/#createnewstickerset).
-   The parameter _contains\_masks_ has been removed from the documentation of the method [createNewStickerSet](/bots/api/#createnewstickerset). The parameter will still work for backward compatibility, but new bots should use the parameter _sticker\_type_ instead.

**Web App Improvements**

-   Added the field _isClosingConfirmationEnabled_ and the methods _enableClosingConfirmation_, _disableClosingConfirmation_, _showPopup_, _showAlert_, _showConfirm_ to the class [WebApp](/bots/webapps/).
-   Added the field _is\_premium_ to the class [WebAppUser](/bots/webapps/#webappuser).
-   Added the event _popupClosed_.

**Other Changes**

-   Added the field _has\_restricted\_voice\_and\_video\_messages_ to the class [Chat](/bots/api/#chat) to support the [new setting](/blog/custom-emoji/#privacy-settings-for-voice-messages).

#### June 20, 2022

**Bot API 6.1**

**Media in Descriptions**

-   Added support for photos and videos in the 'What can this bot do?' section (shown on the bot's start screen). Use [BotFather](https://t.me/BotFather) to set up media.

**Web App Improvements**

-   Added the fields _version_, _headerColor_, _backgroundColor_, _BackButton_, _HapticFeedback_ and the methods _isVersionAtLeast_, _setHeaderColor_, _setBackgroundColor_, _openLink_, _openTelegramLink_, _openInvoice_ to the class [WebApp](/bots/webapps/).
-   Added the field _secondary\_bg\_color_ to the class [ThemeParams](/bots/webapps/#themeparams).
-   Added the method _offClick_ to the class [MainButton](/bots/webapps/).
-   Added the fields _chat_, _can\_send\_after_ to the class [WebAppInitData](/bots/webapps/#webappinitdata).
-   Added the events _backButtonClicked_, _settingsButtonClicked_, _invoiceClosed_.

**Join Requests & Payments**

-   Added the fields _join\_to\_send\_messages_ and _join\_by\_request_ to the class [Chat](/bots/api/#chat).
-   Added the ability to process join requests which were created [without an invite link](/blog/700-million-and-premium/#join-requests-for-public-groups). Bots will receive a “chat\_join\_request” update as usual.
-   Added the method [createInvoiceLink](/bots/api/#createinvoicelink) to generate an HTTP link for an invoice.

**Telegram Premium Support** ([more info](/blog/700-million-and-premium/#telegram-premium))

-   The maximum value of the field _file\_size_ in the classes [Animation](/bots/api/#animation), [Audio](/bots/api/#audio), [Document](/bots/api/#document), [Video](/bots/api/#video), [Voice](/bots/api/#voice), and [File](/bots/api/#file) can no longer be stored in a signed 32-bit integer type. This change is necessary to support 4GB files uploaded by [premium accounts](/blog/700-million-and-premium/#telegram-premium).
-   Added the field _is\_premium_ to the class [User](/bots/api/#user).
-   Added the field _premium\_animation_ to the class [Sticker](/bots/api/#sticker).

**Attachment Menu Integration**

-   Added the field _added\_to\_attachment\_menu_ to the class [User](/bots/api/#user).
-   Bots integrated in the attachment menu can now be used in groups, supergroups and channels.
-   Added support for t.me links that can be used to select the chat in which the attachment menu with the bot will be opened.

**Other Changes**

-   Added the parameter _secret\_token_ to the method [setWebhook](/bots/api/#setwebhook).
-   As previously announced, only HTTPS links are now allowed in _login\_url_ inline keyboard buttons.

#### April 16, 2022

**Bot API 6.0**

-   Added support for **Web Apps**, see the [detailed manual here](/bots/webapps/). ([blog announcement](/blog/notifications-bots/))
-   Added the class [WebAppInfo](/bots/api/#webappinfo) and the fields _web\_app_ to the classes [KeyboardButton](/bots/api/#keyboardbutton) and [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton).
-   Added the class [SentWebAppMessage](/bots/api/#sentwebappmessage) and the method [answerWebAppQuery](/bots/api/#answerwebappquery) for sending an answer to a Web App query, which originated from an inline button of the 'web\_app' type.
-   Added the class [WebAppData](/bots/api/#webappdata) and the field _web\_app\_data_ to the class [Message](/bots/api/#message).
-   Added the class [MenuButton](/bots/api/#menubutton) and the methods [setChatMenuButton](/bots/api/#setchatmenubutton) and [getChatMenuButton](/bots/api/#getchatmenubutton) for managing the behavior of the bot's menu button in private chats.
-   Added the class [ChatAdministratorRights](/bots/api/#chatadministratorrights) and the methods [setMyDefaultAdministratorRights](/bots/api/#setmydefaultadministratorrights) and [getMyDefaultAdministratorRights](/bots/api/#getmydefaultadministratorrights) for managing the bot's default administrator rights.
-   Added support for t.me links that can be used to add the bot to groups and channels as an administrator.
-   Added the field _last\_synchronization\_error\_date_ to the class [WebhookInfo](/bots/api/#webhookinfo).
-   Renamed the field _can\_manage\_voice\_chats_ to _can\_manage\_video\_chats_ in the class [ChatMemberAdministrator](/bots/api/#chatmemberadministrator). The old field will remain temporarily available.
-   Renamed the parameter _can\_manage\_voice\_chats_ to _can\_manage\_video\_chats_ in the method [promoteChatMember](/bots/api/#promotechatmember). The old parameter will remain temporarily available.
-   Renamed the fields _voice\_chat\_scheduled_, _voice\_chat\_started_, _voice\_chat\_ended_, and _voice\_chat\_participants\_invited_ to _video\_chat\_scheduled_, _video\_chat\_started_, _video\_chat\_ended_, and _video\_chat\_participants\_invited_ in the class [Message](/bots/api/#message). The old fields will remain temporarily available.

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> After the next update, only HTTPS links will be allowed in _login\_url_ inline keyboard buttons.

* * *

#### January 31, 2022

**Bot API 5.7**

-   Added support for [Video Stickers](/blog/video-stickers-better-reactions/).
-   Added the field _is\_video_ to the classes [Sticker](/bots/api/#sticker) and [StickerSet](/bots/api/#stickerset).
-   Added the parameter _webm\_sticker_ to the methods [createNewStickerSet](/bots/api/#createnewstickerset) and [addStickerToSet](/bots/api/#addstickertoset).

### 2021

#### December 30, 2021

**Bot API 5.6**

-   Improved support for [Protected Content](/blog/protected-content-delete-by-date-and-more/#protected-content-in-groups-and-channels).
-   Added the parameter _protect\_content_ to the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendPoll](/bots/api/#sendpoll), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [sendGame](/bots/api/#sendgame), [sendMediaGroup](/bots/api/#sendmediagroup), [copyMessage](/bots/api/#copymessage), [forwardMessage](/bots/api/#forwardmessage) to allow sending messages with protected content to any chat.
-   Added support for [spoiler entities](/blog/reactions-spoilers-translations/#spoilers), which will work in Telegram versions released after December 30, 2021. Older clients will display _unsupported message_.
-   Added new [MessageEntity](/bots/api/#messageentity) type “spoiler”.
-   Added the ability to specify spoiler entities using [HTML](/bots/api/#html-style) and [MarkdownV2](/bots/api/#markdownv2-style) formatting options.

#### December 7, 2021

**Bot API 5.5**

-   Bots are now allowed to contact users who sent a join request to a chat where the bot is an administrator with the _can\_invite\_users_ administrator right - even if the user never interacted with the bot before.
-   Added support for mentioning users by their ID in inline keyboards. This will only work in Telegram versions released after December 7, 2021. Older clients will display _unsupported message_.
-   Added the methods [banChatSenderChat](/bots/api/#banchatsenderchat) and [unbanChatSenderChat](/bots/api/#unbanchatsenderchat) for banning and unbanning channel chats in supergroups and channels.
-   Added the field _has\_private\_forwards_ to the class [Chat](/bots/api/#chat) for private chats, which can be used to check the possibility of mentioning the user by their ID.
-   Added the field _has\_protected\_content_ to the classes [Chat](/bots/api/#chat) and [Message](/bots/api/#message).
-   Added the field _is\_automatic\_forward_ to the class [Message](/bots/api/#message).

**Note:** After this update it will become impossible to forward messages from some chats. Use the fields _has\_protected\_content_ in the classes [Message](/bots/api/#message) and [Chat](/bots/api/#chat) to check this.

**Note:** After this update users are able to send messages on behalf of channels they own. Bots are expected to use the field _sender\_chat_ in the class [Message](/bots/api/#message) to correctly support such messages.

**Note:** As previously announced, user identifiers can now have up to 52 significant bits and require a 64-bit integer or double-precision float type to be stored safely.

#### November 5, 2021

**Bot API 5.4**

-   Added the the parameter `creates_join_request` to the methods [createChatInviteLink](/bots/api/#createchatinvitelink) and [editChatInviteLink](/bots/api/#editchatinvitelink) for managing chat invite links that create join requests (read more about this on our [blog](/blog/shared-media-scrolling-calendar-join-requests-and-more/#join-requests-for-groups-and-channels)).
-   Added the fields `creates_join_request` and `pending_join_request_count` to the class [ChatInviteLink](/bots/api/#chatinvitelink).
-   Added the field `name` to the class [ChatInviteLink](/bots/api/#chatinvitelink) and the parameters `name` to the methods [createChatInviteLink](/bots/api/#createchatinvitelink) and [editChatInviteLink](/bots/api/#editchatinvitelink) for managing [invite link names](/blog/shared-media-scrolling-calendar-join-requests-and-more/#unique-names-for-invite-links).
-   Added updates about new requests to join the chat, represented by the class [ChatJoinRequest](/bots/api/#chatjoinrequest) and the field _chat\_join\_request_ in the [Update](/bots/api/#update) class. The bot must be an administrator in the chat with the _can\_invite\_users_ administrator right to receive these updates.
-   Added the methods [approveChatJoinRequest](/bots/api/#approvechatjoinrequest) and [declineChatJoinRequest](/bots/api/#declinechatjoinrequest) for managing requests to join the chat.
-   Added support for the _choose\_sticker_ action in the method [sendChatAction](/bots/api/#sendchataction).

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> User identifiers will become bigger than `2^31 - 1` before the end of this year and it will be no longer possible to store them in a signed 32-bit integer type. User identifiers will have up to 52 significant bits, so a 64-bit integer or double-precision float type would still be safe for storing them. Please make sure that your code can correctly handle such user identifiers.

* * *

#### June 25, 2021

**Bot API 5.3**

**Personalized Commands**

-   Bots can now show lists of commands tailored to specific situations - including localized commands for users with different languages, as well as different commands based on chat type or for specific chats, and special lists of commands for chat admins.
-   Added the class [BotCommandScope](/bots/api/#botcommandscope), describing the scope to which bot commands apply.
-   Added the parameters `scope` and `language_code` to the method [setMyCommands](/bots/api/#setmycommands) to allow bots specify different commands for different chats and users.
-   Added the parameters `scope` and `language_code` to the method [getMyCommands](/bots/api/#getmycommands).
-   Added the method [deleteMyCommands](/bots/api/#deletemycommands) to allow deletion of the bot's commands for the given scope and user language.
-   Improved visibility of bot commands in Telegram apps with the new 'Menu' button in chats with bots, read more on the [blog](/blog/animated-backgrounds/#bot-menu).

**Custom Placeholders**

-   Added the ability to specify a custom input field placeholder in the classes [ReplyKeyboardMarkup](/bots/api/#replykeyboardmarkup) and [ForceReply](/bots/api/#forcereply).

**And More**

-   Improved documentation of the class [ChatMember](/bots/api/#chatmember) by splitting it into 6 subclasses.
-   Renamed the method `kickChatMember` to [banChatMember](/bots/api/#banchatmember). The old method name can still be used.
-   Renamed the method `getChatMembersCount` to [getChatMemberCount](/bots/api/#getchatmembercount). The old method name can still be used.
-   Values of the field `file_unique_id` in objects of the type [PhotoSize](/bots/api/#photosize) and of the fields `small_file_unique_id` and `big_file_unique_id` in objects of the type [ChatPhoto](/bots/api/#chatphoto) were changed.

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> After one of the upcoming Bot API updates, user identifiers will become bigger than `2^31 - 1` and it will be no longer possible to store them in a signed 32-bit integer type. User identifiers will have up to 52 significant bits, so a 64-bit integer or double-precision float type would still be safe for storing them. Please make sure that your code can correctly handle such user identifiers.

* * *

#### April 26, 2021

**Bot API 5.2**

-   Support for [Payments 2.0](/blog/payments-2-0-scheduled-voice-chats/), see [this manual](/bots/payments/) for more details about the **Bot Payments API**.
-   Added the type [InputInvoiceMessageContent](/bots/api/#inputinvoicemessagecontent) to support sending invoices as inline query results.
-   Allowed sending invoices to group, supergroup and channel chats.
-   Added the fields _max\_tip\_amount_ and _suggested\_tip\_amounts_ to the method [sendInvoice](/bots/api/#sendinvoice) to allow adding optional tips to the payment.
-   The parameter _start\_parameter_ of the method [sendInvoice](/bots/api/#sendinvoice) became optional. If the parameter isn't specified, the invoice can be paid directly from forwarded messages.
-   Added the field _chat\_type_ to the class [InlineQuery](/bots/api/#inlinequery), containing the type of the chat, from which the inline request was sent.
-   Added the type [VoiceChatScheduled](/bots/api/) and the field _voice\_chat\_scheduled_ to the class [Message](/bots/api/#message).
-   Fixed an error in [sendChatAction](/bots/api/#sendchataction) documentation to correctly mention “record\_voice” and “upload\_voice” instead of “record\_audio” and “upload\_audio” for related to voice note actions. Old action names will still work for backward compatibility.

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> After the next Bot API update (Bot API 5.3) there will be a one-time change of the value of the field `file_unique_id` in objects of the type [PhotoSize](/bots/api/#photosize) and of the fields `small_file_unique_id` and `big_file_unique_id` in objects of the type [ChatPhoto](/bots/api/#chatphoto).

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> Service messages about non-bot users joining the chat will be soon removed from large groups. We recommend using the “chat\_member” update as a replacement.

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> After one of the upcoming Bot API updates, user identifiers will become bigger than `2^31 - 1` and it will be no longer possible to store them in a signed 32-bit integer type. User identifiers will have up to 52 significant bits, so a 64-bit integer or double-precision float type would still be safe for storing them. Please make sure that your code can correctly handle such user identifiers.

* * *

#### March 9, 2021

**Bot API 5.1**

**Added two new update types**

-   Added updates about member status changes in chats, represented by the class [ChatMemberUpdated](/bots/api/#chatmemberupdated) and the fields _my\_chat\_member_ and _chat\_member_ in the [Update](/bots/api/#update) class. The bot must be an administrator in the chat to receive _chat\_member_ updates about other chat members. By default, only _my\_chat\_member_ updates about the bot itself are received.

**Improved Invite Links**

-   Added the class [ChatInviteLink](/bots/api/#chatinvitelink), representing an invite link to a chat.
-   Added the method [createChatInviteLink](/bots/api/#createchatinvitelink), which can be used to create new invite links in addition to the primary invite link.
-   Added the method [editChatInviteLink](/bots/api/#editchatinvitelink), which can be used to edit non-primary invite links created by the bot.
-   Added the method [revokeChatInviteLink](/bots/api/#revokechatinvitelink), which can be used to revoke invite links created by the bot.

**Voice Chat Info**

-   Added the type [VoiceChatStarted](/bots/api/) and the field _voice\_chat\_started_ to the class [Message](/bots/api/#message).
-   Added the type [VoiceChatEnded](/bots/api/) and the field _voice\_chat\_ended_ to the class [Message](/bots/api/#message).
-   Added the type [VoiceChatParticipantsInvited](/bots/api/) and the field _voice\_chat\_participants\_invited_ to the class [Message](/bots/api/#message).
-   Added the new administrator privilege _can\_manage\_voice\_chats_ to the class [ChatMember](/bots/api/#chatmember) and parameter _can\_manage\_voice\_chats_ to the method [promoteChatMember](/bots/api/#promotechatmember). For now, bots can use this privilege only for passing to other administrators.

**And More**

-   Added the type [MessageAutoDeleteTimerChanged](/bots/api/#messageautodeletetimerchanged) and the field _message\_auto\_delete\_timer\_changed_ to the class [Message](/bots/api/#message).
-   Added the parameter _revoke\_messages_ to the method [kickChatMember](/bots/api/), allowing to delete all messages from a group for the user who is being removed.
-   Added the new administrator privilege _can\_manage\_chat_ to the class [ChatMember](/bots/api/#chatmember) and parameter _can\_manage\_chat_ to the method [promoteChatMember](/bots/api/#promotechatmember). This administrator right is implied by any other administrator privilege.
-   Supported the new _bowling_ animation for the random [dice](/bots/api/#dice). Choose between different animations (dice, darts, basketball, football, bowling, slot machine) by specifying the _emoji_ parameter in the method [sendDice](/bots/api/#senddice).

* * *

>  **<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️"> WARNING! <img class="emoji" src="https://telegram.org/img/emoji/40/E29AA0.png" width="20" height="20" alt="⚠️">**   
> After one of the upcoming Bot API updates, some user identifiers will become bigger than `2^31 - 1` and it will be no longer possible to store them in a signed 32-bit integer type. User identifiers will have up to 52 significant bits, so a 64-bit integer or double-precision float type would still be safe for storing them. Please make sure that your code can correctly handle such user identifiers.

* * *

### 2020

#### November 4, 2020

Introducing **Bot API 5.0**

**Run Your Own Bot API Server**

-   Bot API source code is now available at [telegram-bot-api](https://github.com/tdlib/telegram-bot-api). You can now run your **own Bot API server** locally, boosting your bots' performance.
-   Added the method [logOut](/bots/api/#logout), which can be used to log out from the cloud Bot API server before launching your bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive all updates.
-   Added the method [close](/bots/api/#close), which can be used to close the bot instance before moving it from one local server to another.

**Transfer Bot Ownership**

-   You can now use [@BotFather](https://t.me/botfather) to transfer your existing bots to another Telegram account.

**Webhooks**

-   Added the parameter _ip\_address_ to the method [setWebhook](/bots/api/#setwebhook), allowing to bypass DNS resolving and use the specified fixed IP address to send webhook requests.
-   Added the field _ip\_address_ to the class [WebhookInfo](/bots/api/#webhookinfo), containing the current IP address used for webhook connections creation.
-   Added the ability to drop all pending updates when changing webhook URL using the parameter _drop\_pending\_updates_ in the methods [setWebhook](/bots/api/#setwebhook) and [deleteWebhook](/bots/api/#deletewebhook).

**Working with Groups**

-   The [getChat](/bots/api/#getchat) request now returns the user's bio for private chats if available.
-   The [getChat](/bots/api/#getchat) request now returns the identifier of the linked chat for supergroups and channels, i.e. the discussion group identifier for a channel and vice versa.
-   The [getChat](/bots/api/#getchat) request now returns the location to which the supergroup is connected (see [Local Groups](/blog/contacts-local-groups/)). Added the class [ChatLocation](/bots/api/#chatlocation) to represent the location.
-   Added the parameter _only\_if\_banned_ to the method [unbanChatMember](/bots/api/#unbanchatmember) to allow safe unban.

**Working with Files**

-   Added the field _file\_name_ to the classes [Audio](/bots/api/#audio) and [Video](/bots/api/#video), containing the name of the original file.
-   Added the ability to disable server-side file content type detection using the parameter _disable\_content\_type\_detection_ in the method [sendDocument](/bots/api/#senddocument) and the class [inputMediaDocument](/bots/api/#inputmediadocument).

**Multiple Pinned Messages**

-   Added the ability to **pin messages in private chats**.
-   Added the parameter _message\_id_ to the method [unpinChatMessage](/bots/api/#unpinchatmessage) to allow unpinning of the specific pinned message.
-   Added the method [unpinAllChatMessages](/bots/api/#unpinallchatmessages), which can be used to unpin all pinned messages in a chat.

**File Albums**

-   Added support for sending and receiving audio and document albums in the method [sendMediaGroup](/bots/api/#sendmediagroup).

**Live Locations**

-   Added the field _live\_period_ to the class [Location](/bots/api/#location), representing a maximum period for which the live location can be updated.
-   Added support for live location [heading](https://en.wikipedia.org/wiki/Heading_\(navigation\)): added the field _heading_ to the classes [Location](/bots/api/#location), [InlineQueryResultLocation](/bots/api/#inlinequeryresultlocation), [InputLocationMessageContent](/bots/api/#inputlocationmessagecontent) and the parameter _heading_ to the methods [sendLocation](/bots/api/#sendlocation) and [editMessageLiveLocation](/bots/api/#editmessagelivelocation).
-   Added support for proximity alerts in live locations: added the field _proximity\_alert\_radius_ to the classes [Location](/bots/api/#location), [InlineQueryResultLocation](/bots/api/#inlinequeryresultlocation), [InputLocationMessageContent](/bots/api/#inputlocationmessagecontent) and the parameter _proximity\_alert\_radius_ to the methods [sendLocation](/bots/api/#sendlocation) and [editMessageLiveLocation](/bots/api/#editmessagelivelocation).
-   Added the type [ProximityAlertTriggered](/bots/api/#proximityalerttriggered) and the field _proximity\_alert\_triggered_ to the class [Message](/bots/api/#message).
-   Added possibility to specify the horizontal accuracy of a location. Added the field _horizontal\_accuracy_ to the classes [Location](/bots/api/#location), [InlineQueryResultLocation](/bots/api/#inlinequeryresultlocation), [InputLocationMessageContent](/bots/api/#inputlocationmessagecontent) and the parameter _horizontal\_accuracy_ to the methods [sendLocation](/bots/api/#sendlocation) and [editMessageLiveLocation](/bots/api/#editmessagelivelocation).

**Anonymous Admins**

-   Added the field _sender\_chat_ to the class [Message](/bots/api/#message), containing the sender of a message which is a chat (group or channel). For backward compatibility in non-channel chats, the field _from_ in such messages will contain the user 777000 for messages automatically forwarded to the discussion group and the user 1087968824 ([@GroupAnonymousBot](https://t.me/GroupAnonymousBot)) for messages from anonymous group administrators.
-   Added the field _is\_anonymous_ to the class [chatMember](/bots/api/#chatmember), which can be used to distinguish anonymous chat administrators.
-   Added the parameter _is\_anonymous_ to the method [promoteChatMember](/bots/api/#promotechatmember), which allows to promote anonymous chat administrators. The bot itself should have the _is\_anonymous_ right to do this. Despite the fact that bots can have the _is\_anonymous_ right, they will never appear as anonymous in the chat. Bots can use the right only for passing to other administrators.
-   Added the custom title of an anonymous message sender to the class [Message](/bots/api/#message) as _author\_signature_.

**And More**

-   Added the method [copyMessage](/bots/api/#copymessage), which sends a copy of any message.
-   Maximum poll question length increased to 300.
-   Added the ability to manually specify text entities instead of specifying the _parse\_mode_ in the classes [InputMediaPhoto](/bots/api/#inputmediaphoto), [InputMediaVideo](/bots/api/#inputmediavideo), [InputMediaAnimation](/bots/api/#inputmediaanimation), [InputMediaAudio](/bots/api/#inputmediaaudio), [InputMediaDocument](/bots/api/#inputmediadocument), [InlineQueryResultPhoto](/bots/api/#inlinequeryresultphoto), [InlineQueryResultGif](/bots/api/#inlinequeryresultgif), [InlineQueryResultMpeg4Gif](/bots/api/#inlinequeryresultmpeg4gif), [InlineQueryResultVideo](/bots/api/#inlinequeryresultvideo), [InlineQueryResultAudio](/bots/api/#inlinequeryresultaudio), [InlineQueryResultVoice](/bots/api/#inlinequeryresultvoice), [InlineQueryResultDocument](/bots/api/#inlinequeryresultdocument), [InlineQueryResultCachedPhoto](/bots/api/#inlinequeryresultcachedphoto), [InlineQueryResultCachedGif](/bots/api/#inlinequeryresultcachedgif), [InlineQueryResultCachedMpeg4Gif](/bots/api/#inlinequeryresultcachedmpeg4gif), [InlineQueryResultCachedVideo](/bots/api/#inlinequeryresultcachedvideo), [InlineQueryResultCachedAudio](/bots/api/#inlinequeryresultcachedaudio), [InlineQueryResultCachedVoice](/bots/api/#inlinequeryresultcachedvoice), [InlineQueryResultCachedDocument](/bots/api/#inlinequeryresultcacheddocument), [InputTextMessageContent](/bots/api/#inputtextmessagecontent) and the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendVoice](/bots/api/#sendvoice), [sendPoll](/bots/api/#sendpoll), [editMessageText](/bots/api/#editmessagetext), [editMessageCaption](/bots/api/#editmessagecaption).
-   Added the fields _google\_place\_id_ and _google\_place\_type_ to the classes [Venue](/bots/api/#venue), [InlineQueryResultVenue](/bots/api/#inlinequeryresultvenue), [InputVenueMessageContent](/bots/api/#inputvenuemessagecontent) and the optional parameters _google\_place\_id_ and _google\_place\_type_ to the method [sendVenue](/bots/api/#sendvenue) to support Google Places as a venue API provider.
-   Added the field _allow\_sending\_without\_reply_ to the methods [sendMessage](/bots/api/#sendmessage), [sendPhoto](/bots/api/#sendphoto), [sendVideo](/bots/api/#sendvideo), [sendAnimation](/bots/api/#sendanimation), [sendAudio](/bots/api/#sendaudio), [sendDocument](/bots/api/#senddocument), [sendSticker](/bots/api/#sendsticker), [sendVideoNote](/bots/api/#sendvideonote), [sendVoice](/bots/api/#sendvoice), [sendLocation](/bots/api/#sendlocation), [sendVenue](/bots/api/#sendvenue), [sendContact](/bots/api/#sendcontact), [sendPoll](/bots/api/#sendpoll), [sendDice](/bots/api/#senddice), [sendInvoice](/bots/api/#sendinvoice), [sendGame](/bots/api/#sendgame), [sendMediaGroup](/bots/api/#sendmediagroup) to allow sending messages not a as reply if the replied-to message has already been deleted.

**And Last but not Least**

-   Supported the new **football** and **slot machine** animations for the random [dice](/bots/api/#dice). Choose between different animations (dice, darts, basketball, football, slot machine) by specifying the _emoji_ parameter in the method [sendDice](/bots/api/#senddice).

#### June 4, 2020

**Bot API 4.9**

-   Added the new field _via\_bot_ to the [Message](/bots/api/#message) object. You can now know which bot was used to send a message.
-   Supported video thumbnails for inline [GIF](/bots/api/#inlinequeryresultgif) and [MPEG4](/bots/api/#inlinequeryresultmpeg4gif) animations.
-   Supported the new basketball animation for the random [dice](/bots/api/#dice). Choose between different animations (dice, darts, basketball) by specifying the _emoji_ parameter in the method [sendDice](/bots/api/#senddice).

#### April 24, 2020

**Bot API 4.8**

-   Supported explanations for [Quizzes 2.0](/blog/400-million/#better-quizzes). Add explanations by specifying the parameters _explanation_ and _explanation\_parse\_mode_ in the method [sendPoll](/bots/api/#sendpoll).
-   Added the fields _explanation_ and _explanation\_entities_ to the [Poll](/bots/api/#poll) object.
-   Supported timed polls that automatically close at a certain date and time. Set up by specifying the parameter _open\_period_ or _close\_date_ in the method [sendPoll](/bots/api/#sendpoll).
-   Added the fields _open\_period_ and _close\_date_ to the [Poll](/bots/api/#poll) object.
-   Supported the new [darts](/blog/400-million/#bullseye) animation for the dice mini-game. Choose between the default dice animation and darts animation by specifying the parameter _emoji_ in the method [sendDice](/bots/api/#senddice).
-   Added the field _emoji_ to the [Dice](/bots/api/#dice) object.

#### March 30, 2020

**Bot API 4.7**

-   Added the method [sendDice](/bots/api/#senddice) for sending a dice message, which will have a random value from 1 to 6. (Yes, we're aware of the _“proper”_ singular of _die_. But it's awkward, and we decided to help it change. One dice at a time!)
-   Added the field [dice](/bots/api/#dice) to the [Message](/bots/api/#message) object.
-   Added the method [getMyCommands](/bots/api/#getmycommands) for getting the current list of the bot's commands.
-   Added the method [setMyCommands](/bots/api/#setmycommands) for changing the list of the bot's commands through the Bot API instead of [@BotFather](https://t.me/botfather).
-   Added the ability to create animated sticker sets by specifying the parameter _tgs\_sticker_ instead of _png\_sticker_ in the method [createNewStickerSet](/bots/api/#createnewstickerset).
-   Added the ability to add animated stickers to sets created by the bot by specifying the parameter _tgs\_sticker_ instead of _png\_sticker_ in the method [addStickerToSet](/bots/api/#addstickertoset).
-   Added the field _thumb_ to the [StickerSet](/bots/api/#stickerset) object.
-   Added the ability to change thumbnails of sticker sets created by the bot using the method [setStickerSetThumb](/bots/api/).

#### January 23, 2020

**Bot API 4.6**

-   Supported [Polls 2.0](/blog/polls-2-0-vmq/).
-   Added the ability to send non-anonymous, multiple answer, and quiz-style polls: added the parameters _is\_anonymous_, _type_, _allows\_multiple\_answers_, _correct\_option\_id_, _is\_closed_ options to the method [sendPoll](/bots/api/#sendpoll).
-   Added the object [KeyboardButtonPollType](/bots/api/#keyboardbuttonpolltype) and the field _request\_poll_ to the object [KeyboardButton](/bots/api/#keyboardbutton).
-   Added updates about changes of user answers in non-anonymous polls, represented by the object [PollAnswer](/bots/api/#pollanswer) and the field _poll\_answer_ in the [Update](/bots/api/#update) object.
-   Added the fields _total\_voter\_count_, _is\_anonymous_, _type_, _allows\_multiple\_answers_, _correct\_option\_id_ to the [Poll](/bots/api/#poll) object.
-   Bots can now send polls to private chats.
-   Added more information about the bot in response to the [getMe](/bots/api/#getme) request: added the fields _can\_join\_groups_, _can\_read\_all\_group\_messages_ and _supports\_inline\_queries_ to the [User](/bots/api/#user) object.
-   Added the optional field _language_ to the [MessageEntity](/bots/api/#messageentity) object.

### 2019

#### December 31, 2019

**Bot API 4.5**

-   Added support for two new [MessageEntity](/bots/api/#messageentity) types, _underline_ and _strikethrough_.
-   Added support for nested [MessageEntity](/bots/api/#messageentity) objects. Entities can now contain other entities. If two entities have common characters then one of them is fully contained inside the other.
-   Added support for nested entities and the new tags `<u>/<ins>` (for underlined text) and `<s>/<strike>/<del>` (for strikethrough text) in parse mode HTML.
-   Added a new parse mode, [MarkdownV2](/bots/api/#markdownv2-style), which supports nested entities and two new entities `__` (for underlined text) and `~` (for strikethrough text). Parse mode [Markdown](/bots/api/#markdown-style) remains unchanged for backward compatibility.
-   Added the field _file\_unique\_id_ to the objects [Animation](/bots/api/#animation), [Audio](/bots/api/#audio), [Document](/bots/api/#document), [PassportFile](/bots/api/#passportfile), [PhotoSize](/bots/api/#photosize), [Sticker](/bots/api/#sticker), [Video](/bots/api/#video), [VideoNote](/bots/api/#videonote), [Voice](/bots/api/#voice), [File](/bots/api/#file) and the fields _small\_file\_unique\_id_ and _big\_file\_unique\_id_ to the object [ChatPhoto](/bots/api/#chatphoto). The new fields contain a unique file identifier, which is supposed to be the same over time and for different bots, but can't be used to download or reuse the file.
-   Added the field _custom\_title_ to the [ChatMember](/bots/api/#chatmember) object.
-   Added the new method [setChatAdministratorCustomTitle](/bots/api/#setchatadministratorcustomtitle) to manage the custom titles of administrators promoted by the bot.
-   Added the field _slow\_mode\_delay_ to the [Chat](/bots/api/#chat) object.

#### July 29, 2019

**Bot API 4.4**

-   Added support for [**animated stickers**](/blog/animated-stickers/). New field _is\_animated_ in [Sticker](/bots/api/#sticker) and [StickerSet](/bots/api/#stickerset) objects, animated stickers can now be used in [sendSticker](/bots/api/#sendsticker) and [InlineQueryResultCachedSticker](/bots/api/#inlinequeryresultcachedsticker).
-   Added support for [**default permissions**](/blog/permissions-groups-undo/) in groups. New object [ChatPermissions](/bots/api/#chatpermissions), containing actions which a member can take in a chat. New field _permissions_ in the [Chat](/bots/api/#chat) object; new method [setChatPermissions](/bots/api/#setchatpermissions).
-   The field _all\_members\_are\_administrators_ has been removed from the documentation for the [Chat](/bots/api/#chat) object. The field is still returned in the object for backward compatibility, but new bots should use the _permissions_ field instead.
-   Added support for more permissions for group and supergroup members: added the new field _can\_send\_polls_ to [ChatMember](/bots/api/#chatmember) object, added _can\_change\_info_, _can\_invite\_users_, _can\_pin\_messages_ in [ChatMember](/bots/api/#chatmember) object for restricted users (previously available only for administrators).
-   The method [restrictChatMember](/bots/api/#restrictchatmember) now takes the new user permissions in a single argument of the type [ChatPermissions](/bots/api/#chatpermissions). The old way of passing parameters will keep working for a while for backward compatibility.
-   Added _description_ support for basic groups (previously available in supergroups and channel chats). You can pass a group's chat\_id to [setChatDescription](/bots/api/#setchatdescription) and receive the group's description in the [Chat](/bots/api/#chat) object in the response to [getChat](/bots/api/#getchat) method.
-   Added _invite\_link_ support for basic groups (previously available in supergroups and channel chats). You can pass a group's chat\_id to [exportChatInviteLink](/bots/api/#exportchatinvitelink) and receive the group's invite link in the [Chat](/bots/api/#chat) object in the response to [getChat](/bots/api/#getchat) method.
-   File identifiers from the [ChatPhoto](/bots/api/#chatphoto) object are now invalidated and can no longer be used whenever the photo is changed.
-   All **webhook requests** from the Bot API are now coming from the subnets `149.154.160.0/20` and `91.108.4.0/22`. Most users won't need to do anything to continue receiving webhooks. If you control inbound access with a firewall, you may need to update your configuration. You can always find the list of actual IP addresses of servers used to send webhooks there: [](/bots/webhooks/)[https://core.telegram.org/bots/webhooks](/bots/webhooks/).
-   As of the **next Bot API** update (**version 4.5**), nested [MessageEntity](/bots/api/#messageentity) objects will be allowed in message texts and captions. Please make sure that your code can correctly handle such entities.

#### May 31, 2019

**Bot API 4.3**

-   Added support for [**Seamless Telegram Login**](/blog/privacy-discussions-web-bots/#meet-seamless-web-bots) on external websites.
-   Added the new object [LoginUrl](/bots/api/#loginurl) and the new field _login\_url_ to the [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton) object which allows to **automatically authorize** users before they go to a URL specified by the bot. Users will be asked to confirm authorization in their Telegram app (needs version 5.7 or higher) when they press the button:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c" target="_blank"><img src="https://core.telegram.org/file/811140909/1631/20k1Z53eiyY.23995/c541e89b74253623d9" title="TITLE" alt="TITLE" srcset="/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c , 2x"></a></div>

**Also in this update:**

-   Added the field `reply_markup` to the [Message](/bots/api/#message) object, containing the inline keyboard attached to the message.
-   If a message with an inline keyboard is forwarded, the forwarded message will now have an inline keyboard if the keyboard contained only _url_ and _login\_url_ buttons or if the message was sent via a bot and the keyboard contained only _url_, _login\_url_, _switch\_inline\_query_ or _switch\_inline\_query\_current\_chat_ buttons. In the latter case, _switch\_inline\_query\_current\_chat_ buttons are replaced with _switch\_inline\_query_ buttons.
-   Bots now receive the _edited\_message_ [Update](/bots/api/#update) even if only _Message.reply\_markup_ has changed.
-   Bots that have the _can\_edit\_messages_ right in a channel can now use the method [editMessageReplyMarkup](/bots/api/#editmessagereplymarkup) for messages written by other administrators forever without the 48 hours limit.
-   Don't forget that starting in **July 2019**, **webhook requests** from Bot API will be coming from the subnets `149.154.160.0/20` and `91.108.4.0/22`. Most users won't need to do anything to continue receiving webhooks. If you control inbound access with a firewall, you may need to update your configuration. You can always find the list of actual IP addresses of servers used to send webhooks there: [](/bots/webhooks/)[https://core.telegram.org/bots/webhooks](/bots/webhooks/).

#### April 14, 2019

**Bot API 4.2**

-   Added support for native polls: added the object [Poll](/bots/api/#poll), the methods [sendPoll](/bots/api/#sendpoll) and [stopPoll](/bots/api/#stoppoll) and the field _poll_ in the [Message](/bots/api/#message) and [Update](/bots/api/#update) objects.
-   The method [deleteMessage](/bots/api/#deletemessage) can now be used to delete messages sent by a user to the bot in private chats within 48 hours.
-   Added support for pinned messages in basic groups in addition to supergroups and channel chats: you can pass group's chat\_id to [pinChatMessage](/bots/api/#pinchatmessage) and [unpinChatMessage](/bots/api/#unpinchatmessage), and receive the pinned group message in [Chat](/bots/api/#chat) object.
-   Added the field _is\_member_ to the [ChatMember](/bots/api/#chatmember) object, which can be used to find whether a restricted user is a member of the chat.
-   Added the field _forward\_sender\_name_ to the [Message](/bots/api/#message) object, containing name of the sender who has opted to hide their account.
-   Starting in July 2019, webhook requests from Bot API will be coming from the subnets `149.154.160.0/20` and `91.108.4.0/22`. Most users won't need to do anything to continue receiving webhooks. If you control inbound access with a firewall, you may need to update your configuration. You can always find the list of actual IP addresses of servers used to send webhooks there: [](/bots/webhooks/)[https://core.telegram.org/bots/webhooks](/bots/webhooks/).
-   Document thumbnails now should be inscribed in a 320x320 square instead of 90x90.

### 2018

#### August 27, 2018

**Bot API 4.1**

-   Added support for translated versions of documents in [Telegram Passport](/passport/).
-   New field _translation_ in [EncryptedPassportElement](/bots/api/#encryptedpassportelement).
-   New errors: [PassportElementErrorTranslationFile](/bots/api/#passportelementerrortranslationfile) and [PassportElementErrorTranslationFiles](/bots/api/#passportelementerrortranslationfile) and [PassportElementErrorUnspecified](/bots/api/#passportelementerrorunspecified).

#### July 26, 2018

**Bot API 4.0**.

-   Added support for [**Telegram Passport**](/blog/passport/). See the official announcement on the [blog](/blog/) and the [manual](/passport/) for details.
-   Added support for **editing the media content of messages**: added the method [editMessageMedia](/bots/api/#editmessagemedia) and new types [InputMediaAnimation](/bots/api/#inputmediaanimation), [InputMediaAudio](/bots/api/#inputmediaaudio), and [InputMediaDocument](/bots/api/#inputmediadocument).
-   Added the field _thumb_ to the [Audio](/bots/api/#audio) object to contain the thumbnail of the album cover to which the music file belongs.
-   Added support for attaching custom thumbnails to uploaded files. For animations, audios, videos and video notes, which are less than 10 MB in size, thumbnails are generated automatically.
-   `tg://` URLs now can be used in inline keyboard url buttons and `text_link` message entities.
-   Added the method [sendAnimation](/bots/api/#sendanimation), which can be used instead of [sendDocument](/bots/api/#senddocument) to send animations, specifying their duration, width and height.
-   Added the field [animation](/bots/api/#animation) to the [Message](/bots/api/#message) object. For backward compatibility, when this field is set, the _document_ field will be also set.
-   Added two new [MessageEntity](/bots/api/#messageentity) types: _cashtag_ and _phone\_number_.
-   Added support for Foursquare venues: added the new field _foursquare\_type_ to the objects [Venue](/bots/api/#venue), [InlineQueryResultVenue](/bots/api/#inlinequeryresultvenue) and [InputVenueMessageContent](/bots/api/#inputvenuemessagecontent), and the parameter _foursquare\_type_ to the [sendVenue](/bots/api/#sendvenue) method.
-   You can now create inline mentions of users, who have pressed your bot's callback buttons.
-   You can now use the `Retry-After` response header to configure the delay after which the Bot API will retry the request after an unsuccessful response from a webhook.
-   If a webhook returns the HTTP error `410 Gone` for all requests for more than 23 hours successively, it can be automatically removed.
-   Added [vCard](https://en.wikipedia.org/wiki/VCard) support when sharing contacts: added the field _vcard_ to the objects [Contact](/bots/api/#contact), [InlineQueryResultContact](/bots/api/#inlinequeryresultcontact), [InputContactMessageContent](/bots/api/#inputcontactmessagecontent) and the method [sendContact](/bots/api/#sendcontact).

#### February 13, 2018

**Bot API 3.6**.

-   Supported [text formatting](/bots/api/#formatting-options) in media captions. Specify the desired _parse\_mode_ ([Markdown](/bots/api/#markdown-style) or [HTML](/bots/api/#html-style)) when you provide a caption.
-   In supergroups, if the bot receives a message that is a reply, it will also receive the message to which that message is replying - even if the original message is inaccessible due to the bot's privacy settings. (In other words, replying to any message in a supergroup with a message that mentions the bot or features a command for it acts as forwarding the original message to the bot).
-   Added the new field _connected\_website_ to [Message](/bots/api/#message). The bot will receive a message with this field in a private chat when a user logs in on the bot's connected website using the [Login Widget](/bots/telegram-login/) and allows sending messages from your bot.
-   Added the new parameter _supports\_streaming_ to the [sendVideo](/bots/api/#sendvideo) method and a field with the same name to the [InputMediaVideo](/bots/api/#inputmediavideo) object.

### 2017

#### November 17, 2017

**Bot API 3.5**.

-   Added the new method [sendMediaGroup](/bots/api/#sendmediagroup) and two kinds of [InputMedia](/bots/api/#inputmedia) objects to support the new [albums feature](/blog/albums-saved-messages/).
-   Added support for pinning messages in channels. [pinChatMessage](/bots/api/#pinchatmessage) and [unpinChatMessage](/bots/api/#unpinchatmessage) accept channels.
-   Added the new fields _provider\_data_, _send\_phone\_number\_to\_provider_, _send\_email\_to\_provider_ to [sendInvoice](/bots/api/#sendinvoice) for sharing information about the invoice with the payment provider.

#### October 11, 2017

**Bot API 3.4**.

-   Bots can now send and receive [Live Locations](/blog/live-locations/). Added new field _live\_period_ to the [sendLocation](/bots/api/#sendlocation) method and the [editMessageLiveLocation](/bots/api/#editmessagelivelocation) and [stopMessageLiveLocation](/bots/api/#stopmessagelivelocation) methods as well as the necessary objects for inline bots.
-   Bots can use the new [setChatStickerSet](/bots/api/#setchatstickerset) and [deleteChatStickerSet](/bots/api/#deletechatstickerset) methods to manage [group sticker sets](/blog/).
-   The [getChat](/bots/api/#getchat) request now returns the group's sticker set for supergroups if available.
-   Bots now receive entities from media captions in the new field _caption\_entities_ in [Message](/bots/api/#message).

#### August 23, 2017

**Bot API 3.3**.

-   Bots can now mention users via [inline mentions](/bots/api/#formatting-options), without using usernames.
-   [getChat](/bots/api/#getchat) now also returns pinned messages in supergroups, if present. Added the new field _pinned\_message_ to the [Chat](/bots/api/#chat) object.
-   Added the new fields _author\_signature_ and _forward\_signature_ to the [Message](/bots/api/#message) object.
-   Added the new field _is\_bot_ to the [User](/bots/api/#user) object.

#### July 21, 2017

**Bot API 3.2**. Teach your bot to handle [stickers and sticker sets](/bots/api/#stickers).

-   Added new methods for working with stickers: [getStickerSet](/bots/api/#getstickerset), [uploadStickerFile](/bots/api/#uploadstickerfile), [createNewStickerSet](/bots/api/#createnewstickerset), [addStickerToSet](/bots/api/#addstickertoset), [setStickerPositionInSet](/bots/api/#setstickerpositioninset), and [deleteStickerFromSet](/bots/api/#deletestickerfromset).
-   Added the fields _set\_name_ and _mask\_position_ to the [Sticker](/bots/api/#sticker) object, plus two new objects, [StickerSet](/bots/api/#stickerset), and [MaskPosition](/bots/api/#maskposition).

#### June 30, 2017

**Bot API 3.1**. Build your own robotic police force for supergoups with these new methods for admin bots:

-   Added new methods [restrictChatMember](/bots/api/#restrictchatmember) and [promoteChatMember](/bots/api/#promotechatmember) to manage users and admins, added new parameter _until\_date_ to [kickChatMember](/bots/api/) for temporary bans.
-   Added new methods [exportChatInviteLink](/bots/api/#exportchatinvitelink), [setChatPhoto](/bots/api/#setchatphoto), [deleteChatPhoto](/bots/api/#deletechatphoto), [setChatTitle](/bots/api/#setchattitle), [setChatDescription](/bots/api/#setchatdescription), [pinChatMessage](/bots/api/#pinchatmessage) and [unpinChatMessage](/bots/api/#unpinchatmessage) to manage groups and channels.
-   Added the new fields _photo_, _description_ and _invite\_link_ to the [Chat](/bots/api/#chat) object.
-   Added the new fields _until\_date_, _can\_be\_edited_, _can\_change\_info_, _can\_post\_messages_, _can\_edit\_messages_, _can\_delete\_messages_, _can\_invite\_users_, _can\_restrict\_members_, _can\_pin\_messages_, _can\_promote\_members_, _can\_send\_messages_, _can\_send\_media\_messages_, _can\_send\_other\_messages_ and _can\_add\_web\_page\_previews_ to the [ChatMember](/bots/api/#chatmember) object.

#### May 18, 2017

Introducing **Bot API 3.0**.

**NEW Payment Platform**

See [Introduction to Bot Payments](/bots/payments/) for a brief overview. If you're not a developer, you may like [this user-friendly blog post](/blog/payments/) better.

-   Your bot can now accept [payments](/bots/api/#payments) for goods and services via Telegram.
-   Added new kinds of [updates](/bots/api/#update), _shipping\_query_ and _pre\_checkout\_query_, and new types of [message](/bots/api/#message) content, _invoice_ and _successful\_payment_.
-   Added new methods for payments: [sendInvoice](/bots/api/#sendinvoice), [answerShippingQuery](/bots/api/#answershippingquery), and [answerPreCheckoutQuery](/bots/api/#answerprecheckoutquery).
-   Added a new type of button, the **pay** button to [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton).

**NEW Video Messages**

-   As of Telegram v.4.0, users can send short rounded [video messages](/blog/payments/), using an interface similar to that of voice notes.
-   Added the [sendVideoNote](/bots/api/#sendvideonote) method, the new field _video\_note_ to [Message](/bots/api/#message), the fields _record\_video\_note_ or _upload\_video\_note_ to [sendChatAction](/bots/api/#sendchataction).

**NEW Multilingual Bots**

-   The [User](/bots/api/#user) object now may have a _language\_code_ field that contains the [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language.
-   Thanks to this, your bot can now offer localized responses to users that speak different languages.

**More power to admin bots**

-   [unbanChatMemeber](/bots/api/#unbanchatmember) now also works in channels!
-   New method [deleteMessage](/bots/api/#deletemessages) that allows the bot to delete its own messages, as well as messages posted by other in groups and channels where the bot is an administrator.

**Minor Changes**

-   Replaced the field _new\_chat\_member_ in [Message](/bots/api/#message) with _new\_chat\_members_ (the old field will still be available for a while for compatibility purposes).
-   [Inline keyboards](/bots/api/#inlinekeyboardbutton) with _switch\_inline\_query_ and _switch\_inline\_query\_current\_chat_ can no longer be sent to channels because they are useless there.
-   New fields _gif\_duration_ in [InlineQueryResultGif](/bots/api/#inlinequeryresultgif) and _mpeg4\_duration_ in [InlineQueryResultMpeg4Gif](/bots/api/#inlinequeryresultmpeg4gif).

### 2016

#### December 4, 2016

Introducing **Bot API 2.3.1**, a nifty little update that will give you more control over how your bot gets its updates.

-   Use the new field _max\_connections_ in [setWebhook](/bots/api/#setwebhook) to optimize your bot's server load
-   Use _allowed\_updates_ in [setWebhook](/bots/api/#setwebhook) and [getUpdates](/bots/api/#getupdates) to selectively subscribe to updates of a certain type. Among other things, this allows you to stop getting updates about new posts in channels where your bot is an admin.
-   [deleteWebhook](/bots/api/#deletewebhook) moved out of [setWebhook](/bots/api/#setwebhook) to get a whole separate method for itself.

#### November 21, 2016

**Bot API 2.3**

-   Modified [**bot privacy mode**](/bots/faq/#what-messages-will-my-bot-get) for the sake of consistency.
-   Your bot can now get **updates about posts in channels**. Added new fields _channel\_post_ and _edited\_channel\_post_ to [Update](/bots/).
    
-   You can now update high scores to a lower value by using the new _force_ parameter in [setGameScore](/bots/). Handy for punishing **cheaters** or fixing errors in your game's High Score table.
    
-   Starting today, messages with high scores will be updated with new high scores by default. Use _disable\_edit\_message_ in [setGameScore](/bots/) if you don't want this.
-   The _edit\_message_ parameter from [setGameScore](/bots/) is no longer in use. For backward compatibility, it will be taken into account for a while, unless _disable\_edit\_message_ is passed explicitly.
-   Added the new field _forward\_from\_message\_id_ to [Message](/bots/).
-   Added the new parameter _cache\_time_ to [answerCallbackQuery](/bots/). Will eventually work in Telegram apps - somewhere after version 3.14, maybe 3.15.
-   Renamed _hide\_keyboard_ to _remove\_keyboard_ in [ReplyKeyboardRemove](/bots/) for clarity. _hide\_keyboard_ will still work for a while for backward compatibility.

#### October 3, 2016

**Bot API 2.2.** [Introducing a new Gaming Platform!](/bots/games/) See [this introduction](/bots/games/) for a brief overview.  
If you're not a developer, you may like [**this user-friendly blog post**](/blog/games/) better.

-   New tools for building [**HTML5 games**](/bots/api/#games).
-   New method [sendGame](/bots/api/#sendgame), new object [InlineQueryResultGame](/bots/api/#inlinequeryresultgame), new field _game_ in [Message](/bots/api/#message).
-   New parameter _url_ in [answerCallbackQuery](/bots/api/#answercallbackquery). Create a game and accept the conditions using Botfather to send custom urls that open your games for the user.
-   New field _callback\_game_ in [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton), new fields _game\_short\_name_ and _chat\_instance_ in [CallbackQuery](/bots/api/#callbackquery), new object [CallbackGame](/bots/api/#callbackgame).
-   New methods [setGameScore](/bots/api/#setgamescore) and [getGameHighScores](/bots/api/#getgamehighscores).

**Other changes**

-   Making life easier for webhook users. Added a detailed [**Guide to All Things Webhook**](/bots/webhooks/) that describes every pothole you can run into on the webhook road.
-   New method [getWebhookInfo](/bots/api/#getwebhookinfo) to check current webhook status.
    
-   Added the option to specify an **HTTP URL** for a file in all methods where [InputFile](/bots/api/#inputfile) or _file\_id_ can be used (except voice messages). Telegram will get the file from the specified URL and send it to the user. Files must be smaller than 5 MB for photos and smaller than 20 MB for all other types of content.
    
-   Use the new _url_ parameter in [answerCallbackQuery](/bots/api/#answercallbackquery) to create buttons that open your bot with user-specific parameters.
-   Added new field _switch\_inline\_query\_current\_chat_ in [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton).
-   Added _caption_ fields to [sendAudio](/bots/api/#sendaudio), [sendVoice](/bots/api/#sendvoice), [InlineQueryResultAudio](/bots/api/#inlinequeryresultaudio), [InlineQueryResultVoice](/bots/api/#inlinequeryresultvoice), [InlineQueryResultCachedAudio](/bots/api/#inlinequeryresultcachedaudio), and [InlineQueryResultCachedVoice](/bots/api/#inlinequeryresultcachedvoice).

-   New field _all\_members\_are\_administrators_ in the [Chat](/bots/api/#chat) object.
-   Certain server responses may now contain the new [_parameters_](/bots/api/#responseparameters) field with expanded info on errors that occurred while processing your requests.

#### May 25, 2016

-   [Inline keyboards](/bots/api/#inlinekeyboardmarkup) may now be used in group chats. Channels coming soon.
-   Check out [@vote](https://telegram.me/vote) and [@like](https://telegram.me/like) for examples.

#### May 22, 2016

-   **Bot API 2.1.** Added more tools for group administrator bots. Your bot can now get a list of administrators and members count in a group, check a user's current status (administrator, creator, left the group, kicked from the group), and leave a group.
-   Added new methods: [getChat](/bots/api/#getchat), [leaveChat](/bots/api/#leavechat), [getChatAdministrators](/bots/api/#getchatadministrators), [getChatMember](/bots/api/#getchatmember), [getChatMembersCount](/bots/api/).
-   Added support for [edited messages](/blog/edit/) and [new mentions](/blog/edit/#new-mentions) from Telegram v.3.9. New fields: _edited\_message_ in [Update](/bots/api/#update), _edit\_date_ in [Message](/bots/api/#message), _user_ in [MessageEntity](/bots/api/#messageentity). New value _text\_mention_ for the _type_ field in [MessageEntity](/bots/api/#messageentity).

#### May 12, 2016

-   Added consistency to what messages bots get in groups and supergroups. [See updated FAQ for details »](/bots/faq/#what-messages-will-my-bot-get)

#### May 6, 2016

-   Added the field _emoji_ to the [Sticker](/bots/api/#sticker) object. Your bot can now know the emoji a sticker corresponds to.
-   Added the field _forward\_from\_chat_ to the [Message](/bots/api/#message) object for messages forwarded from channels.

#### April 9, 2016

Introducing **Bot API 2.0**. Check out [this page](/bots/2-0-intro/) for a review of this major update.

-   New [**inline keyboards**](/bots/2-0-intro/#new-inline-keyboards) with **callback** and **URL buttons**. Added new objects [InlineKeyboardMarkup](/bots/api/#inlinekeyboardmarkup), [InlineKeyboardButton](/bots/api/#inlinekeyboardbutton) and [CallbackQuery](/bots/api/#callbackquery), added _reply\_markup_ fields to all [InlineQueryResult](/bots/api/#inlinequeryresult) objects. Added field _callback\_query_ to the [Update](/bots/api/#update) object, new method [answerCallbackQuery](/bots/api/#answercallbackquery).
-   Bots can now [**edit** their messages](/bots/api/#updating-messages). Added methods [editMessageText](/bots/api/#editmessagetext), [editMessageCaption](/bots/api/#editmessagecaption), [editMessageReplyMarkup](/bots/api/#editmessagereplymarkup).
-   Bots can request **location** and **phone number** from the user. The _keyboard_ field in the object [ReplyKeyboardMarkup](/bots/api/#replykeyboardmarkup) now supports [KeyboardButton](/bots/api/#keyboardbutton), a new object that can have the fields _request\_location_ and _request\_contact_.

**Inline bots**

-   Added support for all content types available on Telegram. **19 types** of [InlineQueryResult](/bots/api/#inlinequeryresult) objects are now supported.
-   Inline bots can now **substitute** all kinds of content with text. Added 4 types of [InputMessageContent](/bots/api/#inputmessagecontent) objects.
-   Your inline bot can also ask users for permission to use their location. Added the new Botfather command `/setinlinegeo`, added field _location_ to the [InlineQuery](/bots/api/#inlinequery) object, added fields _location_ and _inline\_message\_id_ to the [ChosenInlineResult](/bots/api/#choseninlineresult) object.
-   Added an easy way to **switch** between inline mode and a private chat with the bot - useful for settings, establishing external connections and teaching users how to use your bot in inline mode. Added parameters _switch\_pm\_text_ and _switch\_pm\_parameter_ to the method [answerInlineQuery](/bots/api/#answerinlinequery).

**Miscellaneous**

-   Added group **administration** tools. New methods [kickChatMember](/bots/api/) and [unbanChatMember](/bots/api/#unbanchatmember).
-   Added fields _venue_, _pinned\_message_ and _entities_ to the [Message](/bots/api/#message) object. Added new objects [MessageEntity](/bots/api/#messageentity) and [Venue](/bots/api/#venue), new methods [sendVenue](/bots/api/#sendvenue) and [sendContact](/bots/api/#sendcontact).
-   Renamed the fields _new\_chat\_participant_ and _left\_chat\_participant_ of the [Message](/bots/api/#message) object to _new\_chat\_member_ and _left\_chat\_member_.

#### February 20, 2016

-   Added the _disable\_notification_ parameter to all methods that send messages or any kind.
-   Removed backward compatibility from the method [sendAudio](/bots/api/#sendaudio). Voice messages now must be sent using the method [sendVoice](/bots/api/#sendvoice). There is no more need to specify a non-empty title or performer while sending the audio by _file\_id_.

#### January 20, 2016

-   By the way, you can use both HTML-style and markdown-style formatting in your bot's messages to send bold, italic or fixed-width text and inline links. All official Telegram clients support this. See [Formatting options](/bots/api/#formatting-options) for details.

#### January 14, 2016

-   You can now [collect feedback](/bots/inline/#collecting-feedback) on which results provided by your inline bot get chosen by the users. Added the `setinlinefeedback` command for Botfather, new type [ChosenInlineResult](/bots/api/#choseninlineresult), new field _chosen\_inline\_result_ to the [Update](/bots/api/#update) object.

#### January 4, 2016

-   Added support for [Inline Mode](/bots/inline/), a new way for people to contact your bot by typing its username and a query in the text input field in any chat. Enable by sending `/setinline` to [@BotFather](https://telegram.me/botfather).
-   New optional field _inline\_query_ added to the [Update](/bots/api/#update) object.
-   Added new method [answerInlineQuery](/bots/api/#answerinlinequery) and new objects [InlineQuery](/bots/api/#inlinequery), [InlineQueryResultArticle](/bots/api/#inlinequeryresultarticle), [InlineQueryResultPhoto](/bots/api/#inlinequeryresultphoto), [InlineQueryResultGif](/bots/api/#inlinequeryresultgif), [InlineQueryResultMpeg4Gif](/bots/api/#inlinequeryresultmpeg4gif) and [InlineQueryResultVideo](/bots/api/#inlinequeryresultvideo).

### 2015

#### November, 2015

-   Added support for [supergroups](/blog/supergroups/). The _Type_ field in the [Chat](/bots/api/#chat) object can now contain 'supergroup'.
-   New optional fields added to the [Message](/bots/api/#message) object: _supergroup\_chat\_created_, _migrate\_to\_chat\_id_, _migrate\_from\_chat\_id_ and _channel\_chat\_created_.

#### October 8, 2015

-   Added initial channel support for bots (no Telegram clients support this at the moment, please wait for updates):
-   The _Chat_ field in the [Message](/bots/api/#message) is now of the new type [Chat](/bots/api/#chat).
-   You can now pass a channel username (in the format `@channelusername`) in the place of _chat\_id_ in all methods (and instead of _from\_chat\_id_ in [forwardMessage](/bots/api/#forwardmessage)). For this to work, the bot must be an administrator in the channel (and that's exactly what Telegram clients don't support yet - adding bots as administrators coming soon).

#### September 18, 2015

-   Bots can now download files and media sent by users.
-   Added [getFile](/bots/api/#getfile) and [File](/bots/api/#file).

#### September 7, 2015

-   You can now [pass parameters](/bots/api/#making-requests) using _application/json_ (please note that this doesn't work for file uploads: use _multipart/form-data_ to upload files).
-   Added very basic [markdown support](/bots/api/). New field _parse\_mode_ added to [sendMessage](/bots/api/#sendmessage). For the moment messages with markdown will be displayed correctly only in Telegram for **Android**. Other official apps will catch up soon.

#### August 29, 2015

-   Added support for self-signed certificates: upload your certificate using the _certificate_ parameter in the [setWebhook](/bots/api/#setwebhook) method.
-   You can now make [new requests](/bots/api/#making-requests-when-getting-updates) when responding to webhook updates.

#### August 15, 2015

-   Added new type **[Voice](/bots/api/#voice)** and new method [**sendVoice**](/bots/api/#sendvoice) for sending voice messages.
-   Earlier **[Audio](/bots/api/#audio)** and **[sendAudio](/bots/api/#sendaudio)** should now be used for sending music files. Telegram clients will show such files in the in-app music player. If you were using [**sendAudio**](/bots/api/#sendaudio) for your bot to send voice messages, please use [**sendVoice**](/bots/api/#sendaudio) instead.
-   Added optional fields _performer_, _title_ to the [**Audio**](/bots/api/#audio) object and [**sendAudio**](/bots/api/#sendaudio) method.
-   Added optional field _voice_ to the [**Message**](/bots/api/#message) object.

#### July 2015

-   The **thumb** field is now optional for [Video](/bots/api/#video), [Sticker](/bots/api/#sticker) and [Document](/bots/api/#document) objects
-   The API now supports both video and photo captions. The **caption** field has been removed from the [Video](/bots/api/#video) object and added to the [Message](/bots/api/#message) object instead.
-   **caption** and **duration** optional fields have been added to the [sendVideo](/bots/api/#sendvideo) method.
-   Fixed typo: **user\_id** in the Contact object is now correctly labeled as Integer, not String

#### June 24, 2015

The bot platform is [officially launched](/blog/bot-revolution/).

> **[Back to the Bot API Manual »](/bots/api/)**
