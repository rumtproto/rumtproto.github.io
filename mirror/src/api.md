---
title: "Telegram APIs"
original: "https://core.telegram.org/api"
section: api
description: "We offer three kinds of APIs for developers. The Bot API allows you to easily create programs that use Telegram messages for an interface. The Telegram API and TDLib allow you to…"
crumbs: []
layout: layout.njk
---

# Telegram APIs

We offer three kinds of APIs for developers. The [**Bot API**](#bot-api) allows you to easily create programs that use Telegram messages for an interface. The [**Telegram API and TDLib**](#tdlib-build-your-own-telegram) allow you to build your own customized Telegram clients. You are welcome to use both APIs free of charge. Lastly, the [**Gateway API**](#gateway-api) allows any business, app or website to send verification codes through Telegram instead of traditional SMS.

You can also add [**Telegram Widgets**](/widgets/) to your website.

Designers are welcome to create [**Animated Stickers and Emoji**](/stickers/#animated-stickers-and-emoji) or [**Custom Themes**](/themes/) for Telegram.

* * *

### Bot API

[<img src="https://core.telegram.org/file/811140934/1/tbDSLHSaijc/fdcc7b6d5fb3354adf" title="The Botfather. Click for hi-res picture" style="max-width: 200px;float:right">](https://core.telegram.org/file/811140327/1/zlN4goPTupk/9ff2f2f01c4bd1b013)

This API allows you to connect bots to our system. [**Telegram Bots**](/bots/) are special accounts that do not require an additional phone number to set up. These accounts serve as an interface for code running somewhere on your server.

To use this, you don't need to know anything about how our MTProto encryption protocol works — our intermediary server will handle all encryption and communication with the Telegram API for you. You communicate with this server via a simple HTTPS interface that offers a simplified version of the Telegram API.

> [**Learn more about the Bot API here »**](/bots/)

Bot developers can also make use of our [**Payments API**](/bots/payments/) to accept **payments** from Telegram users around the world.

* * *

### TDLib – build your own Telegram

Even if you're looking for maximum customization, you don't have to create your app from scratch. Try our [**Telegram Database Library**](/tdlib/) (or simply TDLib), a tool for third-party developers that makes it easy to build fast, secure and feature-rich Telegram apps.

TDLib takes care of all **network implementation** details, **encryption** and **local data storage**, so that you can dedicate more time to design, responsive interfaces and beautiful animations.

TDLib supports all Telegram features and makes developing Telegram apps a breeze on any platform. It can be used on Android, iOS, Windows, macOS, Linux and virtually any other system. The library is open source and compatible with virtually **any programming language**.

> [**Learn more about TDLib here »**](/tdlib/)

* * *

## Gateway API

The Telegram Gateway API allows any business, app or website to send authorization codes through Telegram instead of traditional SMS – offering a powerful and convenient way to **lower costs** while increasing the **security** and **delivery speed** of your codes to Telegram’s 1 billion monthly active users. Users will **instantly receive** messages with codes in a special chat inside Telegram.

> [**Telegram's Gateway API is completely free to test. Learn more here »**](/gateway/)

* * *

### Telegram API

This API allows you to build your own customized Telegram clients. It is 100% open for all developers who wish to create Telegram applications on our platform. Feel free to study the open [source code](/apps/#source-code) of existing Telegram applications for examples of how things work here. Don't forget to [register](/api/obtaining_api_id/) your application in our system.

-   [Getting Started](#getting-started)
-   [Security](#security)
-   [Optimization](#optimization)
-   [API methods](#api-methods)

### Getting started

#### [Creating an application](/api/obtaining_api_id/)

How to get your application identifier and create a new Telegram app.

#### [User authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [Two-factor authentication](/api/srp/)

How to log in to a user's account if they have enabled 2FA, and how to change the password.

#### [QR code login](/api/qr-login/)

[QR code](https://en.wikipedia.org/wiki/QR_code) login flow.

#### [Passkeys](/api/passkeys/)

Telegram allows creating a passkey on your device to instantly log in to Telegram with a PIN or biometric data like Face ID and fingerprints — instead of an SMS code.

#### [Error handling](/api/errors/)

How to handle API return errors correctly.

#### [Handling different data centers](/api/datacenter/)

How to connect to the closest DC access point for faster interaction with the API, and things to watch out for when developing a client.

#### [Handling updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Handling PUSH-notifications](/api/push-updates/)

How to subscribe and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Forums](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

Bots can also make use of topics, if enabled through [@botfather](https://t.me/botfather).

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Channel statistics](/api/stats/)

Telegram offers detailed statistics for channels and supergroups.

#### [Message views and read metrics](/api/views/)

How to report read state, channel post views, message read metrics and music listens.

#### [Calling methods](/api/invoking/)

Additional options for calling methods.

#### [Uploading and downloading files](/api/files/)

How to transfer large data batches correctly.

#### [Pagination](/api/offsets/)

How to fetch results from large lists of objects.

#### [Client configuration](/api/config/)

The MTProto API has multiple client configuration parameters that can be fetched with the appropriate methods.

#### [Calls](/api/calls/)

Telegram supports E2E-encrypted one-to-one calls.

#### [Group calls](/api/group-calls/)

Telegram supports E2E-encrypted group calls.

### Security

#### [Secret chats, end-to-end encryption](/api/end-to-end/)

End-to-end-encrypted messaging.

#### [Security guidelines](/mtproto/security_guidelines/)

Important checks required in your client application.

#### [Perfect Forward Secrecy](/api/pfs/)

Binding temporary authorization keys to permanent ones.

#### [End-to-End Encryption in Voice and Video Calls](/api/end-to-end/video-calls/)

End-to-end-encrypted calls.

#### [End-to-End Encryption in Group Calls](/api/end-to-end/group-calls/)

End-to-end-encrypted group calls.

#### [Perfect Forward Secrecy in Secret Chats](/api/end-to-end/pfs/)

Re-keying secret chats to provide Perfect Forward Secrecy.

#### [Sequence numbers in Secret Chats](/api/end-to-end/seq_no/)

How to assign and interpret `seq_no` counters in secret chats.

### Optimization

#### [Client optimization](/api/optimisation/)

Ways to boost API interactions.

### API methods

#### [Available method list](/methods/)

A list of available high-level methods.

#### [API TL-schema](/schema/), [as JSON](/schema/json/)

Text and JSON presentation of types and methods used in the API.

#### [Layer changelog](/api/layers/)

A detailed changelog of available schema versions.

### Other articles

#### [Working with bots, using the MTProto API](/api/bots/)

How to work with bots using the MTProto API.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by [Cocoon](https://cocoon.org) — a decentralized network designed to maximize privacy.

#### [Bot API dialog IDs](/api/bots/ids/)

A bot API dialog ID is a single, unique 64-bit peer ID sequence derived from the user, chat, channel and secret chat ID sequences, maintaining uniqueness across all of them.

[This page](/api/bots/ids/) specifies how to convert MTProto peer IDs to bot API dialog IDs and vice versa.

### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).

#### [Commands](/api/bots/commands/)

[Bots](/bots/) offer a set of commands that can be used by users in private, or in a chat.

#### [Buttons](/api/bots/buttons/)

Users can interact with your bot via **buttons** or even **inline buttons**, straight from inline **messages** in **any** chat.

#### [Menu button](/api/bots/menu/)

Bots can choose the behavior of the menu button shown next to the text input field.

#### [Inline queries](/api/bots/inline/)

Users can interact with your bot via **inline queries**, straight from the **text input field** in **any** chat.

#### [Games](/api/bots/games/)

Bots can offer users HTML5 games to play solo or to compete against each other in groups and one-on-one chats; how to work with games in the MTProto API.

#### [Mini apps](/api/bots/webapps/)

Bots can offer users interactive [HTML5 mini apps](/bots/webapps/) to completely replace **any website**.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their [mini app](/api/bots/webapps/) – allowing **content creators**, other **mini app developers** and **any Telegram user** to promote it and earn commissions on purchases made by people they referred.

#### [Attachment menu](/api/bots/attach/)

Bots can install attachment menu entries, offering conveniently accessible, versatile mini apps.

#### [Editing bot info](/api/bots/info/)

Users can edit and localize the profile picture, name, about text and description of bots they own; the same can be done by the bots themselves.

#### [AI bots](/api/bots/ai/)

Telegram bots offer a number of features for AI chatbots.

#### [Guest mode](/api/bots/guest-mode/)

Guest bots can be queried by username from any non-secret private chat, group and supergroup, posting their results directly into the chat, even if they're not a member.

#### [Bot-to-bot communication »](/api/bots/bot-to-bot/)

Bots may receive and send messages to and from other bots in groups, private chats and chats, if Bot-to-Bot Communication Mode is enabled.

#### [Stories](/api/stories/)

Telegram users and channels can easily post and view [stories](/blog/stories/) through the API.

#### [Similar channels and bots](/api/recommend/)

The API offers a method to obtain a list of similarly themed public channels and bots, selected based on similarities in their **subscriber bases**.

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Search & filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.  
This allows the server to filter messages based on a text query, and even on their type, and this feature is often used by graphical clients to implement features like the chat gallery, chat profile pictures and more.

#### [Polls](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Checklists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.

#### [Reactions](/api/reactions/)

Telegram allows users to react to any message using specific emojis, triggering cute Lottie animations.

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a [custom emoji](/api/custom-emoji/) as status, to show next to their name in chats and profiles.

#### [Invite links and join requests](/api/invites/)

Channels, basic groups and supergroups may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Admin, banned and default rights for channels, supergroups and groups](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Discussion groups](/api/discussion/)

[Groups](/api/channel/) can be associated with a [channel](/api/channel/) as a [discussion group](/blog/privacy-discussions-web-bots/), allowing users to discuss posts.

#### [Channel comments and message threads](/api/threads/)

Telegram allows commenting on a [channel post](/api/channel/) or on a generic [group message](/api/channel/), thanks to message threads.

#### [Admin log](/api/recent-actions/)

Both supergroups and channels offer a so-called [admin log](/blog/admin-revolution/), a log of recent relevant supergroup and channel actions, like the modification of group/channel settings or information on behalf of an admin, user kicks and bans, and more.

#### [Pinned messages](/api/pin/)

Telegram allows pinning multiple messages on top of a specific chat.

#### [Group member/admin tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can now add a **tag** next to their name — to show their role at work, what they study in school, and more.

#### [Mentions](/api/mentions/)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [Scheduled messages](/api/scheduled-messages/)

Telegram allows scheduling messages.

#### [Live geolocations](/api/live-location/)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.

### [Peer database](/api/peers/)

How to work with peer information in the API.

#### [Min constructors](/api/min/)

Sometimes, [user](/constructor/user/) and [channel](/constructor/channel/) constructors encountered in group chat updates may not contain full info about the user: this page explains how to handle such constructors.

#### [Account deletion](/api/account-deletion/)

How to delete a Telegram account.

#### [Imported messages](/api/import/)

Telegram allows importing messages and media from foreign chat apps.

#### [Telegram Passport](/api/passport/)

How to work with [Telegram Passport](/api/passport/) directly using the MTProto API.

#### [Telegram Payments](/api/payments/)

How to work with Telegram Payments directly using the MTProto API.

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, **official third-party services** are able to assign **extra verification icons** to user accounts and chats — in order to **prevent scams** and **reduce misinformation**.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities.

#### [Working with GIFs](/api/gifs/)

Telegram clients support displaying GIFs.

#### [Working with stickers](/api/stickers/)

Telegram clients support displaying animated, static and video stickers.

#### [Working with custom emojis](/api/custom-emoji/)

Telegram allows including custom animated, static and video emojis directly inside of messages.

#### [Working with animated emojis](/api/animated-emojis/)

Graphical Telegram clients should transform emojis into their respective animated versions.

#### [Working with animated dice](/api/dice/)

Telegram supports sending [animated dice](/blog/folders/#and-one-more-thing) emojis.

#### [Message drafts](/api/drafts/)

How to handle message drafts.

#### [Folders](/api/folders/)

Working with folders.

#### [Top peer rating](/api/top-rating/)

If [enabled](/method/contacts.toggleTopPeers/), the rating of [top peers](/constructor/topPeer/) indicates the relevance of a frequently used peer in a certain [category](/type/TopPeerCategory/) (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).

#### [Handling file references](/api/file-references/)

How to handle file references.

#### [Seamless Telegram Login](/api/url-authorization/)

Handle Seamless Telegram Login URL authorization requests.

#### [Wallpapers](/api/wallpapers/)

How to work with chat backgrounds.

#### [Notification sounds](/api/ringtones/)

How to work with chat notification sounds.

#### [Message transcription](/api/transcribe/)

How to transcribe voice messages.

#### [Message translation](/api/translation/)

Telegram allows translating chat messages, and [Telegram Premium](/api/premium/) users may even enable real-time chat translation.

#### [Native antispam system](/api/antispam/)

Admins of supergroups with a certain number of members can choose to unleash the full proactive power of Telegram's own antispam algorithms – turning on the new Aggressive mode for the automated spam filters.

#### [Collectibles](/api/fragment/)

Telegram users can make it easy for others to contact them or find their public groups and channels via [usernames](/faq/#usernames-and-t-me): clients can also assign multiple [Fragment »](https://fragment.com) **collectible usernames** to accounts, supergroups and channels they own; [Fragment »](https://fragment.com) also allows purchasing phone number collectibles that can be used to register Telegram accounts.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app. It is a part of Telegram’s **sustainable monetization** – driven by our users, rather than advertisers or shareholders. This way, Telegram can remain independent and prioritize its users first.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a **business account**, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start page, chatbot support, and more.

Most Telegram Business features are available to [Telegram Premium »](/api/premium/) subscribers; [connected business bots »](/api/bots/connected-business-bots/) are also available to non-Premium users.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Subscriptions](/api/subscriptions/)

Bots and channels may create subscriptions, periodically charging users a certain amount of [Telegram Stars](/api/stars/) in exchange for content and services.

#### [Protected content](/api/content-protection/)

Users and bots who want to keep their messages private, as well as Group and Channel owners who want to keep their content members-only can restrict message forwarding from their chat, which also prevents screenshots, disables message forwards (attempting to forward protected messages will emit a `CHAT_FORWARDS_RESTRICTED` RPC error) and limits the ability to save media from posts.

#### [Gifts](/api/gifts/)

Users can send **Gifts** to their friends. The recipients of gifts can display them on their profile pages or turn them into [Telegram Stars »](/api/stars/). Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](/api/auctions/)

To guarantee fair distribution of [collectible gifts](/api/gifts/#collectible-gifts), new gift releases will be based on **auctions** — allowing users to place bids with Stars for new gifts over several rounds.

#### [Paid media](/api/paid-media/)

Content creators can accept [Stars](/api/stars/) by publishing **paid photos or videos** on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured [Star Messages »](/blog/star-messages-gateway-2-0-and-more/#stay-in-control-of-your-inbox-with-star-messages), requiring a payment for every message sent to them.

#### [Suggested posts](/api/suggested-posts/)

Telegram offers a powerful monetization feature to channel administrators: **suggested posts**.

#### [Channel and supergroup boosts](/api/boost/)

[Telegram Premium](/api/premium/) users can grant their favorite channels additional features like the ability to post [stories](/api/stories/) by giving them **boosts**.

#### [Giveaways & gifts](/api/giveaways/)

Telegram [channel](/api/channel/) administrators may launch giveaways to randomly distribute [Telegram Premium](/api/premium/) subscriptions and other gifts among their followers, in exchange for [boosts](/api/boost/).

#### [Action bar](/api/action-bar/)

Sometimes, when interacting with Telegram users via private or secret chats, an action bar must be shown on top of the chat, offering convenient action buttons or notices regarding the user.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Profile](/api/profile/)

Telegram offers many customization options for your profile!

#### [Themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.

### [Sponsored messages](/api/sponsored-messages/)

If your app allows accessing content from Telegram [channels](/tour/channels/), you must include support for [official sponsored messages](/api/sponsored-messages/) in Telegram channels.

### [Channel and bot ad revenue](/api/revenue/)

Telegram has one of the **most generous reward systems** in the history of social media. Telegram channel and bot owners can now receive **50%** of the revenue from ads displayed in their channels and bots.

This page describes the methods used to withdraw channel and bot ad revenue, as well as view detailed revenue stats.

### [Fact-checks](/api/factcheck/)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.

### [Contacts](/api/contacts/)

Working with contacts in the API.

### [Blocklist](/api/block/)

Working with the blocklist.

### [Age verification](/api/age-verification/)

Some legislations require age verification to view restricted content: Telegram implements this through the [Main Mini App](/api/bots/webapps/#main-mini-apps) of a special bot.

#### [Web events](/api/web-events/)

When interacting with HTML5 games and the websites of payment gateways, Telegram apps should expose the following JS APIs.

#### [Deep links](/api/links/)

Telegram clients must handle special `tg://` and `t.me` deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Takeout](/api/takeout/)

Telegram's API allows users to export all of their information through the takeout API.

#### [Terms of Service](/api/terms/)

Terms of Service that all third-party client apps must comply with.
