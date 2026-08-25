---
title: "Telegram Mini Apps"
original: "https://core.telegram.org/bots/webapps"
section: bots
description: "With Mini Apps developers can use _JavaScript_ to create infinitely flexible interfaces that can be launched right inside Telegram — and can completely replace any website."
crumbs: [{"title":"Bots","url":"/bots/"},{"title":"Telegram Mini Apps","url":"/bots/webapps/"}]
layout: layout.njk
---

# Telegram Mini Apps

With **Mini Apps** developers can use _JavaScript_ to create **infinitely flexible interfaces** that can be launched right inside Telegram — and can completely replace **any website**.

Like bots, **Mini Apps** support [seamless authorization](/blog/privacy-discussions-web-bots/#meet-seamless-web-bots), payments via third-party [payment providers](/bots/payments/) (with _Google Pay_ and _Apple Pay_ out of the box), delivering tailored push notifications to users, and [much more](/bots/).

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://core.telegram.org/file/464001434/100bf/eWprjdgzEbE.100386/644bbea83084f44c8f" style="max-width: 600px;" title="console.log('Vive la révolution')" alt="Bot Revolution"><source src="https://core.telegram.org/file/464001679/11aa9/KQx_BlPVXRo.4922145.mp4/c65433c8ac11a347a8" type="video/mp4"></video></div>

> To see a **Mini App** in action, try our sample [@DurgerKingBot](https://t.me/durgerkingbot).

* * *

### Recent changes

#### April 3, 2026

**Bot API 9.6**

-   Added the method _requestChat_ to the class [WebApp](#initializing-mini-apps).

#### March 1, 2026

**Bot API 9.5**

-   Added the field _iconCustomEmojiId_ to the class [BottomButton](#bottombutton).

#### July 3, 2025

**Bot API 9.1**

-   Added the method _hideKeyboard_ to the class [WebApp](#initializing-mini-apps).

#### April 11, 2025

**Bot API 9.0**

-   Added the field [DeviceStorage](#devicestorage), allowing Mini Apps to use persistent local storage on the user's device.
-   Added the field [SecureStorage](#securestorage), allowing Mini Apps to use a secure local storage on the user's device for sensitive data.

#### November 17, 2024

**Bot API 8.0**

> This is the **largest update** in the history of Telegram mini apps – adding more than **10 new features** and monetization options for developers. To read more about all these changes, check out this [dedicated blog post](/blog/fullscreen-miniapps-and-more/).

**Full-screen Mode**

-   Mini Apps are now able to [become full-screen](/blog/fullscreen-miniapps-and-more/#full-screen-mode) in both portrait and **landscape mode** – allowing them to host **more games**, play **widescreen media** and support **immersive** user experiences.
-   Added the methods _requestFullscreen_ and _exitFullscreen_ to toggle full-screen mode.
-   Added the fields _safeAreaInset_ and _contentSafeAreaInset_, allowing Mini Apps to ensure that their content properly respects the device's safe area margins.
-   Further added the fields _isActive_ and _isFullscreen_ to the class [WebApp](#initializing-mini-apps).
-   Added the [events](#events-available-for-mini-apps) _activated_, _deactivated_, _safeAreaChanged_, _contentSafeAreaChanged_, _fullscreenChanged_ and _fullscreenFailed_.

**Homescreen Shortcuts**

-   Mini Apps can now be accessed via [direct shortcuts](/blog/fullscreen-miniapps-and-more/#home-screen-shortcuts) added to the **home screen** of mobile devices.
-   Added the method _addToHomeScreen_ to create a shortcut for users to add to their home screens.
-   Added the method _checkHomeScreenStatus_ to determine the status and support of the home screen shortcut for the Mini App on the current device.
-   Added the [events](#events-available-for-mini-apps) _homeScreenAdded_ and _homeScreenChecked_.

**Emoji Status**

-   Mini Apps can now prompt users to set their [emoji status](/blog/fullscreen-miniapps-and-more/#emoji-statuses-from-apps) – or request access to later sync it automatically with in-game badges, third-party APIs and more.
-   Added the method _setEmojiStatus_ to let users manually confirm a custom emoji as their new status via a native dialog.
-   Added the method _requestEmojiStatusAccess_ for obtaining permission to later update a user's emoji status via the Bot API method [setUserEmojiStatus](/bots/api/#setuseremojistatus).
-   Added the [events](#events-available-for-mini-apps) _emojiStatusSet_, _emojiStatusFailed_ and _emojiStatusAccessRequested_.

**Media Sharing and File Downloads**

-   Users can now [share media](/blog/fullscreen-miniapps-and-more/#media-sharing) directly from Mini Apps – sending **referral codes**, custom memes, artwork and more to **any chat** or posting them [as a story](/blog/w3-browser-mini-app-store/#sharing-from-mini-apps-to-stories).
-   Added the method _shareMessage_ to share media from Mini Apps to Telegram chats. Also see [PreparedInlineMessage](/bots/api/#preparedinlinemessage).
-   Added the method _downloadFile_, introducing support for a **native popup** that prompts users to download files from the Mini App.
-   Added the [events](#events-available-for-mini-apps) _shareMessageSent_, _shareMessageFailed_ and _fileDownloadRequested_.

**Geolocation Access**

-   Mini Apps can now request [geolocation access](/blog/fullscreen-miniapps-and-more/#geolocation-access) to users, allowing them to build virtually any location-based service, from **games** with dynamic points of interest to **interactive maps** for events.
-   Added the field _LocationManager_ to the class [WebApp](#initializing-mini-apps).
-   Added the [events](#events-available-for-mini-apps) _locationManagerUpdated_ and _locationRequested_.

**Device Motion Tracking**

-   Mini Apps can now track detailed [device motion data](/blog/fullscreen-miniapps-and-more/#device-motion-tracking), allowing them to implement better productivity tools, immersive **VR experiences** and more.
-   Added the fields _isOrientationLocked_, _Accelerometer_, _DeviceOrientation_ and _Gyroscope_ to the class [WebApp](#initializing-mini-apps).
-   Added the methods _lockOrientation_ and _unlockOrientation_ to control the screen orientation.
-   Added the [events](#events-available-for-mini-apps) _accelerometerStarted_, _accelerometerStopped_, _accelerometerChanged_, _accelerometerFailed_, _deviceOrientationStarted_, _deviceOrientationStopped_, _deviceOrientationChanged_, _deviceOrientationFailed_, _gyroscopeStarted_, _gyroscopeStopped_, _gyroscopeChanged_, _gyroscopeFailed_.

**Subscription Plans and Gifts for Telegram Stars**

-   Mini Apps now support **paid subscriptions** powered by [Telegram Stars](/blog/telegram-stars/) – **monetizing their efforts** with multiple tiers of content and features.
-   Mini Apps can use their balance of [Telegram Stars](/blog/telegram-stars/) to **send gifts** to their users.
-   You can read more on implementing Paid Subscriptions and Gifts in our [Bot API documentation](/bots/api-changelog/#november-17-2024).

**Loading Screen Customization**

-   Mini Apps can customize their loading screen, adding **their own icon** and **specific colors** for light and dark themes.
-   You can access these customization settings in [@BotFather](https://t.me/botfather) via _/mybots > Select Bot > Bot Settings > Configure Mini App > Enable Mini App_

**Hardware-specific Optimizations**

-   Mini Apps running on Android can now receive [basic information](#additional-data-in-user-agent) about a device's processing hardware, allowing them to **optimize user experience** based on the device's capabilities.
-   This information includes the OS, App and SDK's respective versions as well as the device's model and performance class.

**General**

-   The field _photo\_url_ in the class [WebAppUser](#webappuser) is now available to all Mini Apps, allowing them to access a user's profile photo if their privacy settings allow for it.
-   Third parties (e.g., Mini App builders, external SDKs etc.) that receive or process data on behalf of Mini Apps are now able to [validate it](#validating-data-for-third-party-use) without knowing the App's [bot token](/bots/tutorial/#obtain-your-bot-token).
-   Debugging [options](#debug-mode-for-mini-apps) have been expanded to include full support for **iOS devices**. You can use these tools to find app-specific issues in your Mini App.

#### September 6, 2024

**Bot API 7.10**

-   Added the field _SecondaryButton_ to the class [WebApp](#initializing-mini-apps).
-   Added the event _secondaryButtonClicked_.
-   Renamed the class _MainButton_ to the class [BottomButton](#bottombutton).
-   Added the field _bottomBarColor_ and the method _setBottomBarColor_ to the class [WebApp](#initializing-mini-apps).
-   Added the field _bottom\_bar\_bg\_color_ to the class [ThemeParams](#themeparams).

#### July 31, 2024

**Bot API 7.8**

-   Added the option for bots to set a [Main Mini App](#launching-the-main-mini-app), which can be previewed and launched directly from a button in the bot's profile or a link.
-   Added the method _shareToStory_ to the class [WebApp](#initializing-mini-apps).

#### July 7, 2024

**Bot API 7.7**

-   Added the field _isVerticalSwipesEnabled_ and the methods _enableVerticalSwipes_, _disableVerticalSwipes_ to the class [WebApp](#initializing-mini-apps).
-   Added the event _scanQrPopupClosed_.

#### July 1, 2024

**Bot API 7.6**

-   Added the field _section\_separator\_color_ to the class [ThemeParams](#themeparams).
-   Changed the default opening mode for [Direct Link Mini Apps](#direct-link-mini-apps).

#### March 31, 2024

**Bot API 7.2**

-   Added the field _BiometricManager_ to the class [WebApp](#initializing-mini-apps).

#### December 29, 2023

**Bot API 7.0**

-   Added the field _SettingsButton_ to the class [WebApp](#initializing-mini-apps).
-   Added the fields _header\_bg\_color_, _accent\_text\_color_, _section\_bg\_color_, _section\_header\_text\_color_, _subtitle\_text\_color_, _destructive\_text\_color_ to the class [ThemeParams](#themeparams).
-   Mini Apps no longer close when the method _WebApp.openTelegramLink_ is called.

#### September 22, 2023

**Bot API 6.9**

-   Added the field _CloudStorage_ to the class [WebApp](#initializing-mini-apps).
-   Added the methods _requestWriteAccess_ and _requestContact_ to the class [WebApp](#initializing-mini-apps).
-   Added the fields _added\_to\_attachment\_menu_ and _allows\_write\_to\_pm_ to the class [WebAppUser](#webappuser).
-   Added the events _writeAccessRequested_ and _contactRequested_.
-   Added the ability to set any header color using the _setHeaderColor_ method.

#### April 21, 2023

**Bot API 6.7**

-   Added support for launching Mini Apps from inline query results and from a direct link.
-   Added the method _switchInlineQuery_ to the class [WebApp](#initializing-mini-apps).

#### December 30, 2022

**Bot API 6.4**

-   Added the field _platform_, the optional parameter _options_ to the method _openLink_ and the methods _showScanQrPopup_, _closeScanQrPopup_, _readTextFromClipboard_ to the class [WebApp](#initializing-mini-apps).
-   Added the events _qrTextReceived_, _clipboardTextReceived_.

#### August 12, 2022

**Bot API 6.2**

-   Added the field _isClosingConfirmationEnabled_ and the methods _enableClosingConfirmation_, _disableClosingConfirmation_, _showPopup_, _showAlert_, _showConfirm_ to the class [WebApp](#initializing-mini-apps).
-   Added the field _is\_premium_ to the class [WebAppUser](#webappuser).
-   Added the event _popupClosed_.

#### June 20, 2022

**Bot API 6.1**

-   Added the ability to use bots added to the attachment menu in group, supergroup and channel chats.
-   Added support for [t.me links](#adding-bots-to-the-attachment-menu) that can be used to select the chat in which the attachment menu with the bot will be opened.
-   Added the fields _version_, _headerColor_, _backgroundColor_, _BackButton_, _HapticFeedback_ and the methods _isVersionAtLeast_, _setHeaderColor_, _setBackgroundColor_, _openLink_, _openTelegramLink_, _openInvoice_ to the class [WebApp](#initializing-mini-apps).
-   Added the field _secondary\_bg\_color_ to the class [ThemeParams](#themeparams).
-   Added the method _offClick_ to the class [MainButton](#).
-   Added the fields _chat_, _can\_send\_after_ to the class [WebAppInitData](#webappinitdata).
-   Added the [events](#events-available-for-mini-apps) _backButtonClicked_, _settingsButtonClicked_, _invoiceClosed_.

* * *

### Designing Mini Apps

#### Color Schemes

Mini Apps always receive data about the user's current **color theme** in real time, so you can adjust the appearance of your interfaces to match it. For example, when users switch between **Day and Night** modes or use various [custom themes](/blog/protected-content-delete-by-date-and-more/#global-chat-themes-on-android).

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://core.telegram.org/file/464001576/10249/wikoQUNnrH4.112118/7b6c8d3366ada2615b" style="max-width: 600px;" title="" alt="Switching Colors"><source src="https://core.telegram.org/file/464001257/12087/QNQUbIi864k.909800.mp4/8ea7adad7db407388e" type="video/mp4"></video></div>

> [Jump to technical information](#themeparams)

#### Design Guidelines

Telegram apps are known for being snappy, smooth and following a consistent cross-platform design. Your Mini App should ideally reflect these principles.

-   All elements should be responsive and designed with a mobile-first approach.
-   Interactive elements should mimic the style, behavior, and intent of UI components that already exist.
-   All included animations should be smooth, ideally 60fps.
-   All inputs and images should contain labels for accessibility purposes.
-   The app should deliver a seamless experience by monitoring the [dynamic theme-based colors](#color-schemes) provided by the API and using them accordingly.
-   Ensure that the app’s interface respects the [safe area](#safeareainset) and [content safe area](#contentsafeareainset) to avoid overlapping with control elements, especially when using fullscreen mode.
-   For Android devices, consider the additional information in the User-Agent (see [User-Agent details](#additional-data-in-user-agent)) and adjust for the device’s performance class, minimizing animations and visual effects on low-performance devices to ensure smooth performance.

* * *

### Implementing Mini Apps

Telegram currently supports seven different ways of launching Mini Apps: the main Mini App from a [profile button](#launching-the-main-mini-app), from a [keyboard button](#keyboard-button-mini-apps), from an [inline button](#inline-button-mini-apps), from the [bot menu button](#launching-mini-apps-from-the-menu-button), via [inline mode](#inline-mode-mini-apps), from a [direct link](#direct-link-mini-apps) – and even from the [attachment menu](#launching-mini-apps-from-the-attachment-menu).

[<img src="https://core.telegram.org/file/464001388/10b1a/IYpn0wWfggw.1156850/fd9a32baa81dcecbe4" title="" alt="Types of buttons" class="dev_page_image">](https://core.telegram.org/file/464001388/10b1a/IYpn0wWfggw.1156850/fd9a32baa81dcecbe4)

#### Keyboard Button Mini Apps

> **TL;DR:** Mini Apps launched from a **web\_app** type [keyboard button](/bots/api/#keyboardbutton) can send data back to the bot in a _service message_ using [Telegram.WebApp.sendData](#initializing-mini-apps). This makes it possible for the bot to produce a response without communicating with any external servers.

Users can interact with bots using [custom keyboards](/bots/), [buttons under bot messages](/bots/), as well as by sending freeform **text messages** or any of the **attachment types** supported by Telegram: photos and videos, files, locations, contacts and polls. For even more flexibility, bots can utilize the full power of **HTML5** to create user-friendly input interfaces.

You can send a **web\_app** type [KeyboardButton](/bots/api/#keyboardbutton) that opens a Mini App from the specified URL.

To transmit data from the user back to the bot, the Mini App can call the [Telegram.WebApp.sendData](#initializing-mini-apps) method. Data will be transmitted to the bot as a String in a service message. The bot can continue communicating with the user after receiving it.

**Good for:**

-   **Сustom data input interfaces** (a personalized calendar for selecting dates; selecting data from a list with advanced search options; a randomizer that lets the user “spin a wheel” and chooses one of the available options, etc.)
-   **Reusable components** that do not depend on a particular bot.

#### Inline Button Mini Apps

> **TL;DR:** For more interactive Mini Apps like [@DurgerKingBot](https://t.me/durgerkingbot), use a **web\_app** type [Inline KeyboardButton](/bots/api/#inlinekeyboardbutton), which gets basic user information and can be used to send a message on behalf of the user to the chat with the bot.

If receiving text data alone is insufficient or you need a more advanced and personalized interface, you can open a Mini App using a **web\_app** type [Inline KeyboardButton](/bots/api/#inlinekeyboardbutton).

From the button, a Mini App will open with the URL specified in the button. In addition to the user's [theme settings](#color-schemes), it will receive basic user information (`ID`, `name`, `username`, `language_code`) and a unique identifier for the session, **query\_id**, which allows messages on behalf of the user to be sent back to the bot.

The bot can call the Bot API method [answerWebAppQuery](/bots/api/#answerwebappquery) to send an inline message from the user back to the bot and close the Mini App. After receiving the message, the bot can continue communicating with the user.

**Good for:**

-   Fully-fledged web services and integrations of any kind.
-   The use cases are effectively **unlimited**.

#### Launching Mini Apps from the Menu Button

> **TL;DR:** Mini Apps can be launched from a customized menu button. This simply offers a quicker way to access the app and is otherwise **identical** to [launching a mini app from an inline button](#inline-button-mini-apps).

By default, chats with bots always show a convenient **menu button** that provides quick access to all listed [commands](/bots/). With [Bot API 6.0](/bots/api-changelog/#april-16-2022), this button can be used to **launch a Mini App** instead.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://core.telegram.org/file/464001829/12247/e6LoU12o4Ng.109921/1226afb8f18f8ea8c4
" style="max-width: 600px;" title="" alt="Menu Button"><source src="https://core.telegram.org/file/464001838/10fa2/WrJmkuIMan0.1217917.mp4/e25a5f31bc4e6493f7" type="video/mp4"></video></div>

To configure the menu button, you must specify the text it should show and the Mini App URL. There are two ways to set these parameters:

-   To customize the button for **all users**, use [@BotFather](https://t.me/botfather) (the `/setmenubutton` command or _Bot Settings > Menu Button_).
-   To customize the button for both **all users** and **specific users**, use the [setChatMenuButton](/bots/api/#setchatmenubutton) method in the Bot API. For example, change the button text according to the user's language, or show links to different Mini Apps based on a user's settings in your bot.

Apart from this, Mini Apps opened via the menu button work in the exact same way as when [using inline buttons](#inline-button-mini-apps).

> [@DurgerKingBot](https://t.me/durgerkingbot) allows launching its Mini App both from an inline button and from the menu button.

#### Launching the main Mini App

> **TL;DR:** If your bot is a mini app, you can add a prominent **Launch app** button as well as high-quality demo videos and screenshots to the bot’s profile. To do this, go to [@BotFather](https://t.me/botfather) and set up your bot's **Main Mini App**.

If your bot is a mini app, you can unlock a number of features that streamline and simplify the way in which users view and interact with it. To do this, go to [@BotFather](https://t.me/botfather) and set up your bot's **Main Mini App**.

After setting a main mini app, you'll be able to upload detailed **media preview demos** to publicly highlight your app's key features on its profile. A **Launch app** button will also appear, allowing users to open your app directly from its profile. Bots that enabled a main mini app will be displayed in the _Apps_ tab of the search for users who have launched them.

> Media previews support [multiple languages](/bots/features/#mini-app-previews) – so you can upload **translated versions** of your previews that will be shown to users based on their **app language**.

A bot's **main Mini App** can also be opened in the current chat by direct link in the format `https://t.me/botusername?startapp`. If a non-empty _startapp_ parameter is included in the link, it will be passed to the Mini App in the _start\_param_ field and in the GET parameter _tgWebAppStartParam_.

**Examples**

`https://t.me/botusername?startapp`  
`https://t.me/botusername?startapp=command`  
`https://t.me/botusername?startapp=command&mode=compact`

In this mode, Mini Apps can use the _chat\_type_ and _chat\_instance_ parameters to keep track of the current chat context. This introduces support for **concurrent** and **shared** usage by multiple chat members – to create live whiteboards, group orders, multiplayer games and similar apps.

By default, the main Mini App opens to full-screen height, and users cannot reduce them to half-height. However, you can change this behavior via [@BotFather](https://t.me/botfather) or by including the parameter `mode=compact` in the link to the Mini App, in which case it will open to half-screen height by default.

**Good for:**

-   Fully-fledged web services and integrations that any user can open in one tap.
-   Cooperative, multiplayer or teamwork-oriented services within a chat context.
-   The use cases are effectively **unlimited**.

> Successful bots which **enable** a main Mini App and **accept payments** in [Telegram Stars](/bots/payments-stars/) may be featured in the Telegram [Mini App Store](https://t.me/BotNews/99). To increase the chances of being featured, we recommend uploading high-quality media showcasing your app on your bot's profile and following our [design guidelines](#design-guidelines).

#### Inline Mode Mini Apps

> **TL;DR:** Mini Apps launched via **web\_app** type [InlineQueryResultsButton](/bots/api/#inlinequeryresultsbutton) can be used anywhere in inline mode. Users can create content in a web interface and then seamlessly send it to the current chat via inline mode.

You can use the _button_ parameter in the [answerInlineQuery](/bots/api/#answerinlinequery) method to display a special 'Switch to Mini App' button either above or in place of the inline results. This button will **open a Mini App** from the specified URL. Once done, you can call the [Telegram.WebApp.switchInlineQuery](#initializing-mini-apps) method to send the user back to inline mode.

Inline Mini Apps have **no access** to the chat – they can't read messages or send new ones on behalf of the user. To send messages, the user must be redirected to **inline mode** and actively pick a result.

**Good for:**

-   Fully-fledged web services and integrations in inline mode.

#### Direct Link Mini Apps

> **TL;DR:** Mini App Bots can be launched from a direct link in any chat. They support a _startapp_ parameter and are aware of the current chat context.

You can use direct links to **open a Mini App** directly in the current chat. If a non-empty _startapp_ parameter is included in the link, it will be passed to the Mini App in the _start\_param_ field and in the GET parameter _tgWebAppStartParam_.

In this mode, Mini Apps can use the _chat\_type_ and _chat\_instance_ parameters to keep track of the current chat context. This introduces support for **concurrent** and **shared** usage by multiple chat members – to create live whiteboards, group orders, multiplayer games and similar apps.

Mini Apps opened from a direct link have **no access** to the chat – they can't read messages or send new ones on behalf of the user. To send messages, the user must be redirected to **inline mode** and actively pick a result.

Starting from Bot API 7.6, by default, Mini Apps of this type open to full-screen height, and users cannot reduce them to half-height. However, you can change this behavior by including the parameter `mode=compact` in the link to the Mini App, in which case it will open to half-screen height by default.

**Examples**

`https://t.me/botusername/appname`  
`https://t.me/botusername/appname?startapp=command`  
`https://t.me/botusername/appname?startapp=command&mode=compact`

**Good for:**

-   Fully-fledged web services and integrations that any user can open in one tap.
-   Cooperative, multiplayer or teamwork-oriented services within a chat context.
-   The use cases are effectively **unlimited**.

#### Launching Mini Apps from the Attachment Menu

> **TL;DR:** Mini App Bots can request to be added directly to a user's attachment menu, allowing them to be quickly launched from any chat. To try this mode, open this [attachment menu link](https://t.me/durgerkingbot?startattach) for _@DurgerKingBot_, then use the <img class="icon" src="https://core.telegram.org/file/464001085/2/E4hNXSNQimQ.2503/bf6ffcab3cb3afd43d" alt="Attach"> menu in **any type of chat**.

Mini App Bots can request to be added directly to a user's attachment menu, allowing them to be quickly launched from **any type of chat**. You can configure in which types of chats your mini app can be started from the attachment menu (private, groups, supergroups or channels).

Attachment menu integration is currently only available for major advertisers on the [Telegram Ad Platform](https://promote.telegram.org/basics). However, **all bots** can use it in the [test server environment](#using-bots-in-the-test-environment).

To enable this feature for your bot, open [@BotFather](https://t.me/botfather) [from an account on the test server](#using-bots-in-the-test-environment) and send the `/setattach` command – or go to _Bot Settings > Configure Attachment Menu_. Then specify the URL that will be opened to launch the bot's Mini App via its icon in the attachment menu.

You can add a 'Settings' item to the context menu of your Mini App using [@BotFather](https://t.me/botfather). When users select this option from the menu, your bot will receive a `settingsButtonClicked` event.

In addition to the user's [theme settings](#color-schemes), the bot will receive basic user information (`ID`, `name`, `username`, `language_code`, `photo`), as well as public info about the chat partner (`ID`, `name`, `username`, `photo`) or the chat info (`ID`, `type`, `title`, `username`, `photo`) and a unique identifier for the web view session **query\_id**, which allows messages of any type to be sent to the chat on behalf of the user that opened the bot.

The bot can call the Bot API method [answerWebAppQuery](/bots/api/#answerwebappquery), which sends an inline message from the user via the bot to the chat where it was launched and closes the Mini App.

> You can read more about adding bots to the attachment menu [here](#adding-bots-to-the-attachment-menu).

* * *

### Initializing Mini Apps

To connect your Mini App to the Telegram client, place the script [telegram-web-app.js](https://telegram.org/js/telegram-web-app.js?63) in the `<head>` tag before any other scripts, using this code:

```
<script src="https://telegram.org/js/telegram-web-app.js?63"></script>
```

Once the script is connected, a `window.Telegram.WebApp` object will become available with the following fields:

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>initData</td><td>String</td><td>A string with raw data transferred to the Mini App, convenient for <a href="#validating-data-received-via-the-mini-app">validating data</a>.<br><strong>WARNING:</strong> <a href="#validating-data-received-via-the-mini-app">Validate data</a> from this field before using it on the bot's server.</td></tr><tr><td>initDataUnsafe</td><td><a href="#webappinitdata">WebAppInitData</a></td><td>An object with input data transferred to the Mini App.<br><strong>WARNING:</strong> Data from this field should not be trusted. You should only use data from <em>initData</em> on the bot's server and only after it has been <a href="#validating-data-received-via-the-mini-app">validated</a>.</td></tr><tr><td>version</td><td>String</td><td>The version of the Bot API available in the user's Telegram app.</td></tr><tr><td>platform</td><td>String</td><td>The name of the platform of the user's Telegram app.</td></tr><tr><td>colorScheme</td><td>String</td><td>The color scheme currently used in the Telegram app. Either “light” or “dark”.<br>Also available as the CSS variable <code>var(--tg-color-scheme)</code>.</td></tr><tr><td>themeParams</td><td><a href="#themeparams">ThemeParams</a></td><td>An object containing the current theme settings used in the Telegram app.</td></tr><tr><td>isActive <sup><mark class="mark-new">NEW</mark></sup></td><td>Boolean</td><td><mark>Bot API 8.0+</mark> <em>True</em>, if the Mini App is currently active. <em>False</em>, if the Mini App is minimized.</td></tr><tr><td>isExpanded</td><td>Boolean</td><td><em>True</em>, if the Mini App is expanded to the maximum available height. False, if the Mini App occupies part of the screen and can be expanded to the full height using the <strong>expand()</strong> method.</td></tr><tr><td>viewportHeight</td><td>Float</td><td>The current height of the visible area of the Mini App. Also available in CSS as the variable <code>var(--tg-viewport-height)</code>.<br><br>The application can display just the top part of the Mini App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Mini App to its maximum height, while the bot can do the same by calling the <strong>expand()</strong> method. As the position of the Mini App changes, the current height value of the visible area will be updated in real time.<br><br>Please note that the refresh rate of this value is not sufficient to smoothly follow the lower border of the window. It should not be used to pin interface elements to the bottom of the visible area. It's more appropriate to use the value of the <code>viewportStableHeight</code> field for this purpose.</td></tr><tr><td>viewportStableHeight</td><td>Float</td><td>The height of the visible area of the Mini App in its last stable state. Also available in CSS as a variable <code>var(--tg-viewport-stable-height)</code>.<br><br>The application can display just the top part of the Mini App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Mini App to its maximum height, while the bot can do the same by calling the <strong>expand()</strong> method. Unlike the value of <code>viewportHeight</code>, the value of <code>viewportStableHeight</code> does not change as the position of the Mini App changes with user gestures or during animations. The value of <code>viewportStableHeight</code> will be updated after all gestures and animations are completed and the Mini App reaches its final size.<br><br><em>Note the <a href="#events-available-for-mini-apps">event</a> <code>viewportChanged</code> with the passed parameter <code>isStateStable=true</code>, which will allow you to track when the stable state of the height of the visible area changes.</em></td></tr><tr><td>headerColor</td><td>String</td><td>Current header color in the <code>#RRGGBB</code> format.</td></tr><tr><td>backgroundColor</td><td>String</td><td>Current background color in the <code>#RRGGBB</code> format.</td></tr><tr><td>bottomBarColor</td><td>String</td><td>Current bottom bar color in the <code>#RRGGBB</code> format.</td></tr><tr><td>isClosingConfirmationEnabled</td><td>Boolean</td><td><em>True</em>, if the confirmation dialog is enabled while the user is trying to close the Mini App. <em>False</em>, if the confirmation dialog is disabled.</td></tr><tr><td>isVerticalSwipesEnabled</td><td>Boolean</td><td><em>True</em>, if vertical swipes to close or minimize the Mini App are enabled. <em>False</em>, if vertical swipes to close or minimize the Mini App are disabled. In any case, the user will still be able to minimize and close the Mini App by swiping the Mini App's header.</td></tr><tr><td>isFullscreen <sup><mark class="mark-new">NEW</mark></sup></td><td>Boolean</td><td><em>True</em>, if the Mini App is currently being displayed in fullscreen mode.</td></tr><tr><td>isOrientationLocked <sup><mark class="mark-new">NEW</mark></sup></td><td>Boolean</td><td><em>True</em>, if the Mini App’s orientation is currently locked. <em>False</em>, if orientation changes freely based on the device’s rotation.</td></tr><tr><td>safeAreaInset <sup><mark class="mark-new">NEW</mark></sup></td><td><a href="#safeareainset">SafeAreaInset</a></td><td>An object representing the device's safe area insets, accounting for system UI elements like notches or navigation bars.</td></tr><tr><td>contentSafeAreaInset <sup><mark class="mark-new">NEW</mark></sup></td><td><a href="#contentsafeareainset">ContentSafeAreaInset</a></td><td>An object representing the safe area for displaying content within the app, free from overlapping Telegram UI elements.</td></tr><tr><td>BackButton</td><td><a href="#backbutton">BackButton</a></td><td>An object for controlling the back button which can be displayed in the header of the Mini App in the Telegram interface.</td></tr><tr><td>MainButton</td><td><a href="#bottombutton">BottomButton</a></td><td>An object for controlling the main button, which is displayed at the bottom of the Mini App in the Telegram interface.</td></tr><tr><td>SecondaryButton</td><td><a href="#bottombutton">BottomButton</a></td><td>An object for controlling the secondary button, which is displayed at the bottom of the Mini App in the Telegram interface.</td></tr><tr><td>SettingsButton</td><td><a href="#settingsbutton">SettingsButton</a></td><td>An object for controlling the Settings item in the context menu of the Mini App in the Telegram interface.</td></tr><tr><td>HapticFeedback</td><td><a href="#hapticfeedback">HapticFeedback</a></td><td>An object for controlling haptic feedback.</td></tr><tr><td>CloudStorage</td><td><a href="#cloudstorage">CloudStorage</a></td><td>An object for controlling cloud storage.</td></tr><tr><td>BiometricManager</td><td><a href="#biometricmanager">BiometricManager</a></td><td>An object for controlling biometrics on the device.</td></tr><tr><td>Accelerometer <sup><mark class="mark-new">NEW</mark></sup></td><td><a href="#accelerometer">Accelerometer</a></td><td>An object for accessing accelerometer data on the device.</td></tr><tr><td>DeviceOrientation <sup><mark class="mark-new">NEW</mark></sup></td><td><a href="#deviceorientation">DeviceOrientation</a></td><td>An object for accessing device orientation data on the device.</td></tr><tr><td>Gyroscope <sup><mark class="mark-new">NEW</mark></sup></td><td><a href="#gyroscope">Gyroscope</a></td><td>An object for accessing gyroscope data on the device.</td></tr><tr><td>LocationManager <sup><mark class="mark-new">NEW</mark></sup></td><td><a href="#locationmanager">LocationManager</a></td><td>An object for controlling location on the device.</td></tr><tr><td>DeviceStorage <sup><mark class="mark-new">NEW</mark></sup></td><td><a href="#devicestorage">DeviceStorage</a></td><td>An object for storing and retrieving data from the device's local storage.</td></tr><tr><td>SecureStorage <sup><mark class="mark-new">NEW</mark></sup></td><td><a href="#securestorage">SecureStorage</a></td><td>An object for storing and retrieving data from the device's secure storage.</td></tr><tr><td>isVersionAtLeast(version)</td><td>Function</td><td>Returns true if the user's app supports a version of the Bot API that is equal to or higher than the version passed as the parameter.</td></tr><tr><td>setHeaderColor(color)</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method that sets the app header color in the <code>#RRGGBB</code> format. You can also use keywords <em>bg_color</em> and <em>secondary_bg_color</em>.<br><br>Up to <mark>Bot API 6.9</mark> You can only pass <em>Telegram.WebApp.themeParams.bg_color</em> or <em>Telegram.WebApp.themeParams.secondary_bg_color</em> as a color or <em>bg_color</em>, <em>secondary_bg_color</em> keywords.</td></tr><tr><td>setBackgroundColor(color)</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method that sets the app background color in the <code>#RRGGBB</code> format. You can also use keywords <em>bg_color</em> and <em>secondary_bg_color</em>.</td></tr><tr><td>setBottomBarColor(color)</td><td>Function</td><td><mark>Bot API 7.10+</mark> A method that sets the app's bottom bar color in the <code>#RRGGBB</code> format. You can also use the keywords <em>bg_color</em>, <em>secondary_bg_color</em>, and <em>bottom_bar_bg_color</em>. This color is also applied to the navigation bar on Android.</td></tr><tr><td>enableClosingConfirmation()</td><td>Function</td><td><mark>Bot API 6.2+</mark> A method that enables a confirmation dialog while the user is trying to close the Mini App.</td></tr><tr><td>disableClosingConfirmation()</td><td>Function</td><td><mark>Bot API 6.2+</mark> A method that disables the confirmation dialog while the user is trying to close the Mini App.</td></tr><tr><td>enableVerticalSwipes()</td><td>Function</td><td><mark>Bot API 7.7+</mark> A method that enables vertical swipes to close or minimize the Mini App. For user convenience, it is recommended to always enable swipes unless they conflict with the Mini App's own gestures.</td></tr><tr><td>disableVerticalSwipes()</td><td>Function</td><td><mark>Bot API 7.7+</mark> A method that disables vertical swipes to close or minimize the Mini App. This method is useful if your Mini App uses swipe gestures that may conflict with the gestures for minimizing and closing the app.</td></tr><tr><td>requestFullscreen() <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that requests opening the Mini App in fullscreen mode. Although the header is transparent in fullscreen mode, it is recommended that the Mini App sets the header color using the <em>setHeaderColor</em> method. This color helps determine a contrasting color for the status bar and other UI controls.</td></tr><tr><td>exitFullscreen() <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that requests exiting fullscreen mode.</td></tr><tr><td>lockOrientation() <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that locks the Mini App’s orientation to its current mode (either portrait or landscape). Once locked, the orientation remains fixed, regardless of device rotation. This is useful if a stable orientation is needed during specific interactions.</td></tr><tr><td>unlockOrientation() <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that unlocks the Mini App’s orientation, allowing it to follow the device's rotation freely. Use this to restore automatic orientation adjustments based on the device orientation.</td></tr><tr><td>addToHomeScreen() <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that prompts the user to add the Mini App to the home screen. After successfully adding the icon, the <code>homeScreenAdded</code> event will be triggered if supported by the device. Note that if the device cannot determine the installation status, the event may not be received even if the icon has been added.</td></tr><tr><td>checkHomeScreenStatus([callback]) <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that checks if adding to the home screen is supported and if the Mini App has already been added. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a single argument <em>status</em>, which is a string indicating the home screen status. Possible values for <em>status</em> are:<br>- <strong>unsupported</strong> – the feature is not supported, and it is not possible to add the icon to the home screen,<br>- <strong>unknown</strong> – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,<br>- <strong>added</strong> – the icon has already been added to the home screen,<br>- <strong>missed</strong> – the icon has not been added to the home screen.</td></tr><tr><td>onEvent(eventType, eventHandler)</td><td>Function</td><td>A method that sets the app event handler. Check <a href="#events-available-for-mini-apps">the list of available events</a>.</td></tr><tr><td>offEvent(eventType, eventHandler)</td><td>Function</td><td>A method that deletes a previously set event handler.</td></tr><tr><td>sendData(data)</td><td>Function</td><td>A method used to send data to the bot. When this method is called, a service message is sent to the bot containing the data <em>data</em> of the length up to 4096 bytes, and the Mini App is closed. See the field <em>web_app_data</em> in the class <a href="/bots/api/#message">Message</a>.<br><br><em>This method is only available for Mini Apps launched via a <a href="#keyboard-button-mini-apps">Keyboard button</a>.</em></td></tr><tr><td>switchInlineQuery(query[, choose_chat_types])</td><td>Function</td><td><mark>Bot API 6.7+</mark> A method that inserts the bot's username and the specified inline <em>query</em> in the current chat's input field. Query may be empty, in which case only the bot's username will be inserted. If an optional <em>choose_chat_types</em> parameter was passed, the client prompts the user to choose a specific chat, then opens that chat and inserts the bot's username and the specified inline query in the input field. You can specify which types of chats the user will be able to choose from. It can be one or more of the following types: <em>users</em>, <em>bots</em>, <em>groups</em>, <em>channels</em>.</td></tr><tr><td>openLink(url[, options])</td><td>Function</td><td>A method that opens a link in an external browser. The Mini App will <em>not</em> be closed.<br><mark>Bot API 6.4+</mark> If the optional <em>options</em> parameter is passed with the field <em>try_instant_view=true</em>, the link will be opened in <a href="https://instantview.telegram.org/">Instant View</a> mode if possible.<br><br><em>Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)</em></td></tr><tr><td>openTelegramLink(url)</td><td>Function</td><td>A method that opens a telegram link inside the Telegram app. The Mini App will <em>not</em> be closed after this method is called.<br><br>Up to <mark>Bot API 7.0</mark> The Mini App <em>will</em> be closed after this method is called.</td></tr><tr><td>openInvoice(url[, callback])</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method that opens an invoice using the link <em>url</em>. The Mini App will receive the <a href="#events-available-for-mini-apps">event</a> <em>invoiceClosed</em> when the invoice is closed. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called and the invoice status will be passed as the first argument.</td></tr><tr><td>shareToStory(media_url[, params])</td><td>Function</td><td><mark>Bot API 7.8+</mark> A method that opens the native story editor with the media specified in the <em>media_url</em> parameter as an HTTPS URL. An optional <em>params</em> argument of the type <a href="#storyshareparams">StoryShareParams</a> describes additional sharing settings.</td></tr><tr><td>shareMessage(msg_id[, callback]) <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that opens a dialog allowing the user to share a message provided by the bot. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean as the first argument, indicating whether the message was successfully sent. The message id passed to this method must belong to a <a href="/bots/api/#preparedinlinemessage">PreparedInlineMessage</a> previously obtained via the Bot API method <a href="/bots/api/#savepreparedinlinemessage">savePreparedInlineMessage</a>.</td></tr><tr><td>setEmojiStatus(custom_emoji_id[, params, callback])</td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that opens a dialog allowing the user to set the specified custom emoji as their status. An optional <em>params</em> argument of type <a href="#emojistatusparams">EmojiStatusParams</a> specifies additional settings, such as duration. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean as the first argument, indicating whether the status was set.<br><br><em>Note: this method opens a native dialog and cannot be used to set the emoji status without manual user interaction. For fully programmatic changes, you should instead use the Bot API method <a href="/bots/api/#setuseremojistatus">setUserEmojiStatus</a> after obtaining authorization to do so via the Mini App method requestEmojiStatusAccess.</em></td></tr><tr><td>requestEmojiStatusAccess([callback]) <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that shows a native popup requesting permission for the bot to manage user's emoji status. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.</td></tr><tr><td>downloadFile(params[, callback]) <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that displays a native popup prompting the user to download a file specified by the <em>params</em> argument of type <a href="#downloadfileparams">DownloadFileParams</a>. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called when the popup is closed, with the first argument as a boolean indicating whether the user accepted the download request.</td></tr><tr><td>hideKeyboard() <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 9.1+</mark> A method that hides the on-screen keyboard, if it is currently visible. Does nothing if the keyboard is not active.</td></tr><tr><td>showPopup(params[, callback])</td><td>Function</td><td><mark>Bot API 6.2+</mark> A method that shows a native popup described by the <em>params</em> argument of the type <a href="#popupparams">PopupParams</a>. The Mini App will receive the <a href="#events-available-for-mini-apps">event</a> <em>popupClosed</em> when the popup is closed. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called and the field <em>id</em> of the pressed button will be passed as the first argument.</td></tr><tr><td>showAlert(message[, callback])</td><td>Function</td><td><mark>Bot API 6.2+</mark> A method that shows <em>message</em> in a simple alert with a 'Close' button. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called when the popup is closed.</td></tr><tr><td>showConfirm(message[, callback])</td><td>Function</td><td><mark>Bot API 6.2+</mark> A method that shows <em>message</em> in a simple confirmation window with 'OK' and 'Cancel' buttons. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called when the popup is closed and the first argument will be a boolean indicating whether the user pressed the 'OK' button.</td></tr><tr><td>showScanQrPopup(params[, callback])</td><td>Function</td><td><mark>Bot API 6.4+</mark> A method that shows a native popup for scanning a QR code described by the <em>params</em> argument of the type <a href="#scanqrpopupparams">ScanQrPopupParams</a>. The Mini App will receive the <a href="#events-available-for-mini-apps">event</a> <em>qrTextReceived</em> every time the scanner catches a code with text data. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called and the text from the QR code will be passed as the first argument. Returning <em>true</em> inside this callback function causes the popup to be closed. Starting from <mark>Bot API 7.7</mark>, the Mini App will receive the <em>scanQrPopupClosed</em> event if the user closes the native popup for scanning a QR code.</td></tr><tr><td>closeScanQrPopup()</td><td>Function</td><td><mark>Bot API 6.4+</mark> A method that closes the native popup for scanning a QR code opened with the <em>showScanQrPopup</em> method. Run it if you received valid data in the <a href="#events-available-for-mini-apps">event</a> <em>qrTextReceived</em>.</td></tr><tr><td>readTextFromClipboard([callback])</td><td>Function</td><td><mark>Bot API 6.4+</mark> A method that requests text from the clipboard. The Mini App will receive the <a href="#events-available-for-mini-apps">event</a> <em>clipboardTextReceived</em>. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called and the text from the clipboard will be passed as the first argument.<br><br><em>Note: this method can be called only for Mini Apps launched from the attachment menu and only in response to a user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button).</em></td></tr><tr><td>requestWriteAccess([callback])</td><td>Function</td><td><mark>Bot API 6.9+</mark> A method that shows a native popup requesting permission for the bot to send messages to the user. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.</td></tr><tr><td>requestContact([callback])</td><td>Function</td><td><mark>Bot API 6.9+</mark> A method that shows a native popup prompting the user for their phone number. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called when the popup is closed and the first argument will be a boolean indicating whether the user shared its phone number.</td></tr><tr><td>requestChat(req_id[, callback]) <sup><mark class="mark-new">NEW</mark></sup></td><td>Function</td><td><mark>Bot API 9.6+</mark> A method that opens a dialog allowing the user to select an existing chat or create a new one. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean as the first argument, indicating whether the message was successfully sent. The request id passed to this method must belong to a <a href="/bots/api/#preparedkeyboardbutton">PreparedKeyboardButton</a> previously obtained via the Bot API method <a href="/bots/api/#savepreparedkeyboardbutton">savePreparedKeyboardButton</a>.</td></tr><tr><td>ready()</td><td>Function</td><td>A method that informs the Telegram app that the Mini App is ready to be displayed.<br>It is recommended to call this method as early as possible, as soon as all essential interface elements are loaded. Once this method is called, the loading placeholder is hidden and the Mini App is shown.<br>If the method is not called, the placeholder will be hidden only when the page is fully loaded.</td></tr><tr><td>expand()</td><td>Function</td><td>A method that expands the Mini App to the maximum available height. To find out if the Mini App is expanded to the maximum height, refer to the value of the <em>Telegram.WebApp.isExpanded</em> parameter</td></tr><tr><td>close()</td><td>Function</td><td>A method that closes the Mini App.</td></tr></tbody></table>

#### ThemeParams

Mini Apps can [adjust the appearance](#color-schemes) of the interface to match the Telegram user's app in real time. This object contains the user's current theme settings:

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>bg_color</td><td>String</td><td><em>Optional</em>. Background color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-bg-color)</code>.</td></tr><tr><td>text_color</td><td>String</td><td><em>Optional</em>. Main text color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-text-color)</code>.</td></tr><tr><td>hint_color</td><td>String</td><td><em>Optional</em>. Hint text color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-hint-color)</code>.</td></tr><tr><td>link_color</td><td>String</td><td><em>Optional</em>. Link color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-link-color)</code>.</td></tr><tr><td>button_color</td><td>String</td><td><em>Optional</em>. Button color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-button-color)</code>.</td></tr><tr><td>button_text_color</td><td>String</td><td><em>Optional</em>. Button text color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-button-text-color)</code>.</td></tr><tr><td>secondary_bg_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 6.1+</mark> Secondary background color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-secondary-bg-color)</code>.</td></tr><tr><td>header_bg_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 7.0+</mark> Header background color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-header-bg-color)</code>.</td></tr><tr><td>bottom_bar_bg_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 7.10+</mark> Bottom background color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-bottom-bar-bg-color)</code>.</td></tr><tr><td>accent_text_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 7.0+</mark> Accent text color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-accent-text-color)</code>.</td></tr><tr><td>section_bg_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 7.0+</mark> Background color for the section in the <code>#RRGGBB</code> format. It is recommended to use this in conjunction with <em>secondary_bg_color</em>.<br>Also available as the CSS variable <code>var(--tg-theme-section-bg-color)</code>.</td></tr><tr><td>section_header_text_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 7.0+</mark> Header text color for the section in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-section-header-text-color)</code>.</td></tr><tr><td>section_separator_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 7.6+</mark> Section separator color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-section-separator-color)</code>.</td></tr><tr><td>subtitle_text_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 7.0+</mark> Subtitle text color in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-subtitle-text-color)</code>.</td></tr><tr><td>destructive_text_color</td><td>String</td><td><em>Optional</em>. <mark>Bot API 7.0+</mark> Text color for destructive actions in the <code>#RRGGBB</code> format.<br>Also available as the CSS variable <code>var(--tg-theme-destructive-text-color)</code>.</td></tr></tbody></table>

[<img src="https://core.telegram.org/file/400780400851/2/6GwDkk6T-aY.416569/b591d589108b487d63" title="WebViewColors explained" class="dev_page_image">](https://core.telegram.org/file/400780400851/2/6GwDkk6T-aY.416569/b591d589108b487d63)

#### StoryShareParams

This object describes additional sharing settings for the native story editor.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td><em>Optional</em>. The caption to be added to the media, 0-200 characters for regular users and 0-2048 characters for <a href="/faq_premium/#telegram-premium">premium</a> subscribers.</td></tr><tr><td>widget_link</td><td><a href="#storywidgetlink">StoryWidgetLink</a></td><td><em>Optional</em>. An object that describes a widget link to be included in the story. Note that only <a href="/faq_premium/#telegram-premium">premium</a> subscribers can post stories with links.</td></tr></tbody></table>

#### StoryWidgetLink

This object describes a widget link to be included in the story.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>The URL to be included in the story.</td></tr><tr><td>name</td><td>String</td><td><em>Optional</em>. The name to be displayed for the widget link, 0-48 characters.</td></tr></tbody></table>

#### ScanQrPopupParams

This object describes the native popup for scanning QR codes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td><em>Optional</em>. The text to be displayed under the 'Scan QR' heading, 0-64 characters.</td></tr></tbody></table>

#### PopupParams

This object describes the native popup.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td><em>Optional</em>. The text to be displayed in the popup title, 0-64 characters.</td></tr><tr><td>message</td><td>String</td><td>The message to be displayed in the body of the popup, 1-256 characters.</td></tr><tr><td>buttons</td><td>Array of <a href="#popupbutton">PopupButton</a></td><td><em>Optional</em>. List of buttons to be displayed in the popup, 1-3 buttons. Set to <em>[{“type”:“close”}]</em> by default.</td></tr></tbody></table>

#### PopupButton

This object describes the native popup button.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td><em>Optional</em>. Identifier of the button, 0-64 characters. Set to empty string by default.<br>If the button is pressed, its <em>id</em> is returned in the callback and the <em>popupClosed</em> event.</td></tr><tr><td>type</td><td>String</td><td><em>Optional</em>. Type of the button. Set to <em>default</em> by default.<br>Can be one of these values:<br>- <em>default</em>, a button with the default style,<br>- <em>ok</em>, a button with the localized text “OK”,<br>- <em>close</em>, a button with the localized text “Close”,<br>- <em>cancel</em>, a button with the localized text “Cancel”,<br>- <em>destructive</em>, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).</td></tr><tr><td>text</td><td>String</td><td><em>Optional</em>. The text to be displayed on the button, 0-64 characters. Required if <em>type</em> is <em>default</em> or <em>destructive</em>. Irrelevant for other types.</td></tr></tbody></table>

#### EmojiStatusParams

This object describes additional settings for setting an emoji status.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>duration</td><td>Integer</td><td><em>Optional</em>. The duration for which the status will remain set, in seconds.</td></tr></tbody></table>

#### DownloadFileParams

This object describes the parameters for the file download request.

> **Note:** To ensure consistent file download behavior across platforms, include the HTTP headers `Content-Disposition: attachment; filename="<file_name>"` and `Access-Control-Allow-Origin: https://web.telegram.org` in the server response. Without these headers, the download may not work as expected, especially on web platforms.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>The HTTPS URL of the file to be downloaded.</td></tr><tr><td>file_name</td><td>String</td><td>The suggested name for the downloaded file.</td></tr></tbody></table>

#### SafeAreaInset

This object represents the system-defined safe area insets, providing padding values to ensure content remains within visible boundaries, avoiding overlap with system UI elements like notches or navigation bars.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>top</td><td>Integer</td><td>The top inset in pixels, representing the space to avoid at the top of the screen. Also available as the CSS variable <code>var(--tg-safe-area-inset-top)</code>.</td></tr><tr><td>bottom</td><td>Integer</td><td>The bottom inset in pixels, representing the space to avoid at the bottom of the screen. Also available as the CSS variable <code>var(--tg-safe-area-inset-bottom)</code>.</td></tr><tr><td>left</td><td>Integer</td><td>The left inset in pixels, representing the space to avoid on the left side of the screen. Also available as the CSS variable <code>var(--tg-safe-area-inset-left)</code>.</td></tr><tr><td>right</td><td>Integer</td><td>The right inset in pixels, representing the space to avoid on the right side of the screen. Also available as the CSS variable <code>var(--tg-safe-area-inset-right)</code>.</td></tr></tbody></table>

[<img src="https://core.telegram.org/file/400780400066/1/tTFDI7OC8tE.1374724/9e496dd312c7706a38" title="SafeAreaInset explained" class="dev_page_image">](https://core.telegram.org/file/400780400066/1/tTFDI7OC8tE.1374724/9e496dd312c7706a38)

#### ContentSafeAreaInset

This object represents the content-defined safe area insets, providing padding values to ensure content remains within visible boundaries, avoiding overlap with Telegram UI elements.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>top</td><td>Integer</td><td>The top inset in pixels, representing the space to avoid at the top of the content area. Also available as the CSS variable <code>var(--tg-content-safe-area-inset-top)</code>.</td></tr><tr><td>bottom</td><td>Integer</td><td>The bottom inset in pixels, representing the space to avoid at the bottom of the content area. Also available as the CSS variable <code>var(--tg-content-safe-area-inset-bottom)</code>.</td></tr><tr><td>left</td><td>Integer</td><td>The left inset in pixels, representing the space to avoid on the left side of the content area. Also available as the CSS variable <code>var(--tg-content-safe-area-inset-left)</code>.</td></tr><tr><td>right</td><td>Integer</td><td>The right inset in pixels, representing the space to avoid on the right side of the content area. Also available as the CSS variable <code>var(--tg-content-safe-area-inset-right)</code>.</td></tr></tbody></table>

[<img src="https://core.telegram.org/file/400780400676/2/8VT7jCQvpsk.1386608/d249aa072662450345" title="ContentSafeAreaInset explained" class="dev_page_image">](https://core.telegram.org/file/400780400676/2/8VT7jCQvpsk.1386608/d249aa072662450345)

#### BackButton

This object controls the **back** button, which can be displayed in the header of the Mini App in the Telegram interface.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>isVisible</td><td>Boolean</td><td>Shows whether the button is visible. Set to <em>false</em> by default.</td></tr><tr><td>onClick(callback)</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method that sets the button press event handler. An alias for <code>Telegram.WebApp.onEvent('backButtonClicked', callback)</code></td></tr><tr><td>offClick(callback)</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method that removes the button press event handler. An alias for <code>Telegram.WebApp.offEvent('backButtonClicked', callback)</code></td></tr><tr><td>show()</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method to make the button active and visible.</td></tr><tr><td>hide()</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method to hide the button.</td></tr></tbody></table>

All these methods return the BackButton object so they can be chained.

#### BottomButton

This object controls the button that is displayed at the bottom of the Mini App in the Telegram interface.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td><em>Readonly.</em> Type of the button. It can be either <em>main</em> for the main button or <em>secondary</em> for the secondary button.</td></tr><tr><td>iconCustomEmojiId</td><td>String</td><td><mark>Bot API 9.5+</mark> Unique identifier of the custom emoji shown before the text of the button.</td></tr><tr><td>text</td><td>String</td><td>Current button text. Set to <em>Continue</em> for the main button and <em>Cancel</em> for the secondary button by default.</td></tr><tr><td>color</td><td>String</td><td>Current button color. Set to <em>themeParams.button_color</em> for the main button and <em>themeParams.bottom_bar_bg_color</em> for the secondary button by default.</td></tr><tr><td>textColor</td><td>String</td><td>Current button text color. Set to <em>themeParams.button_text_color</em> for the main button and <em>themeParams.button_color</em> for the secondary button by default.</td></tr><tr><td>isVisible</td><td>Boolean</td><td>Shows whether the button is visible. Set to <em>false</em> by default.</td></tr><tr><td>isActive</td><td>Boolean</td><td>Shows whether the button is active. Set to <em>true</em> by default.</td></tr><tr><td>hasShineEffect</td><td>Boolean</td><td><mark>Bot API 7.10+</mark> Shows whether the button has a shine effect. Set to <em>false</em> by default.</td></tr><tr><td>position</td><td>String</td><td><mark>Bot API 7.10+</mark> Position of the secondary button. Not defined for the main button. It applies only if both the main and secondary buttons are visible. Set to <em>left</em> by default.<br>Supported values:<br>- <em>left</em>, displayed to the left of the main button,<br>- <em>right</em>, displayed to the right of the main button,<br>- <em>top</em>, displayed above the main button,<br>- <em>bottom</em>, displayed below the main button.</td></tr><tr><td>isProgressVisible</td><td>Boolean</td><td><em>Readonly.</em> Shows whether the button is displaying a loading indicator.</td></tr><tr><td>setText(text)</td><td>Function</td><td>A method to set the button text.</td></tr><tr><td>onClick(callback)</td><td>Function</td><td>A method that sets the button's press event handler. An alias for <code>Telegram.WebApp.onEvent('mainButtonClicked', callback)</code></td></tr><tr><td>offClick(callback)</td><td>Function</td><td>A method that removes the button's press event handler. An alias for <code>Telegram.WebApp.offEvent('mainButtonClicked', callback)</code></td></tr><tr><td>show()</td><td>Function</td><td>A method to make the button visible.<br><em>Note that opening the Mini App from the <a href="#launching-mini-apps-from-the-attachment-menu">attachment menu</a> hides the main button until the user interacts with the Mini App interface.</em></td></tr><tr><td>hide()</td><td>Function</td><td>A method to hide the button.</td></tr><tr><td>enable()</td><td>Function</td><td>A method to enable the button.</td></tr><tr><td>disable()</td><td>Function</td><td>A method to disable the button.</td></tr><tr><td>showProgress(leaveActive)</td><td>Function</td><td>A method to show a loading indicator on the button.<br>It is recommended to display loading progress if the action tied to the button may take a long time. By default, the button is disabled while the action is in progress. If the parameter <code>leaveActive=true</code> is passed, the button remains enabled.</td></tr><tr><td>hideProgress()</td><td>Function</td><td>A method to hide the loading indicator.</td></tr><tr><td>setParams(params)</td><td>Function</td><td>A method to set the button parameters. The <em>params</em> parameter is an object containing one or several fields that need to be changed:<br><strong>icon_custom_emoji_id</strong> - <mark>Bot API 9.5+</mark> button icon emoji id;<br><strong>text</strong> - button text;<br><strong>color</strong> - button color;<br><strong>text_color</strong> - button text color;<br><strong>has_shine_effect</strong> - <mark>Bot API 7.10+</mark> enable shine effect;<br><strong>position</strong> - position of the secondary button;<br><strong>is_active</strong> - enable the button;<br><strong>is_visible</strong> - show the button.</td></tr></tbody></table>

All these methods return the BottomButton object so they can be chained.

#### SettingsButton

This object controls the **Settings** item in the context menu of the Mini App in the Telegram interface.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>isVisible</td><td>Boolean</td><td>Shows whether the context menu item is visible. Set to <em>false</em> by default.</td></tr><tr><td>onClick(callback)</td><td>Function</td><td><mark>Bot API 7.0+</mark> A method that sets the press event handler for the Settings item in the context menu. An alias for <code>Telegram.WebApp.onEvent('settingsButtonClicked', callback)</code></td></tr><tr><td>offClick(callback)</td><td>Function</td><td><mark>Bot API 7.0+</mark> A method that removes the press event handler from the Settings item in the context menu. An alias for <code>Telegram.WebApp.offEvent('settingsButtonClicked', callback)</code></td></tr><tr><td>show()</td><td>Function</td><td><mark>Bot API 7.0+</mark> A method to make the Settings item in the context menu visible.</td></tr><tr><td>hide()</td><td>Function</td><td><mark>Bot API 7.0+</mark> A method to hide the Settings item in the context menu.</td></tr></tbody></table>

All these methods return the [SettingsButton](#settingsbutton) object so they can be chained.

#### HapticFeedback

This object controls haptic feedback.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>impactOccurred(style)</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on style value passed. Style can be one of these values:<br>- <em>light</em>, indicates a collision between small or lightweight UI objects,<br>- <em>medium</em>, indicates a collision between medium-sized or medium-weight UI objects,<br>- <em>heavy</em>, indicates a collision between large or heavyweight UI objects,<br>- <em>rigid</em>, indicates a collision between hard or inflexible UI objects,<br>- <em>soft</em>, indicates a collision between soft or flexible UI objects.</td></tr><tr><td>notificationOccurred(type)</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method tells that a task or action has succeeded, failed, or produced a warning. The Telegram app may play the appropriate haptics based on type value passed. Type can be one of these values:<br>- <em>error</em>, indicates that a task or action has failed,<br>- <em>success</em>, indicates that a task or action has completed successfully,<br>- <em>warning</em>, indicates that a task or action produced a warning.</td></tr><tr><td>selectionChanged()</td><td>Function</td><td><mark>Bot API 6.1+</mark> A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.<br><br><em>Do not use this feedback when the user makes or confirms a selection; use it only when the selection changes.</em></td></tr></tbody></table>

All these methods return the HapticFeedback object so they can be chained.

#### CloudStorage

This object controls the cloud storage. Each bot can store up to 1024 items per user in the cloud storage.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>setItem(key, value[, callback])</td><td>Function</td><td><mark>Bot API 6.9+</mark> A method that stores a value in the cloud storage using the specified key. The key should contain 1-128 characters, only <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>_</code> and <code>-</code> are allowed. The value should contain 0-4096 characters. You can store up to 1024 keys in the cloud storage. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether the value was stored.</td></tr><tr><td>getItem(key, callback)</td><td>Function</td><td><mark>Bot API 6.9+</mark> A method that receives a value from the cloud storage using the specified key. The key should contain 1-128 characters, only <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>_</code> and <code>-</code> are allowed. In case of an error, the <em>callback</em> function will be called and the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the value will be passed as the second argument.</td></tr><tr><td>getItems(keys, callback)</td><td>Function</td><td><mark>Bot API 6.9+</mark> A method that receives values from the cloud storage using the specified keys. The keys should contain 1-128 characters, only <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>_</code> and <code>-</code> are allowed. In case of an error, the <em>callback</em> function will be called and the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the values will be passed as the second argument.</td></tr><tr><td>removeItem(key[, callback])</td><td>Function</td><td><mark>Bot API 6.9+</mark> A method that removes a value from the cloud storage using the specified key. The key should contain 1-128 characters, only <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>_</code> and <code>-</code> are allowed. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether the value was removed.</td></tr><tr><td>removeItems(keys[, callback])</td><td>Function</td><td><mark>Bot API 6.9+</mark> A method that removes values from the cloud storage using the specified keys. The keys should contain 1-128 characters, only <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>_</code> and <code>-</code> are allowed. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether the values were removed.</td></tr><tr><td>getKeys(callback)</td><td>Function</td><td><mark>Bot API 6.9+</mark> A method that receives the list of all keys stored in the cloud storage. In case of an error, the <em>callback</em> function will be called and the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the list of keys will be passed as the second argument.</td></tr></tbody></table>

All these methods return the [CloudStorage](#cloudstorage) object, so they can be chained.

#### BiometricManager

This object controls biometrics on the device. Before the first use of this object, it needs to be initialized using the _init_ method.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>isInited</td><td>Boolean</td><td>Shows whether biometrics object is initialized.</td></tr><tr><td>isBiometricAvailable</td><td>Boolean</td><td>Shows whether biometrics is available on the current device.</td></tr><tr><td>biometricType</td><td>String</td><td>The type of biometrics currently available on the device. Can be one of these values:<br>- <em>finger</em>, fingerprint-based biometrics,<br>- <em>face</em>, face-based biometrics,<br>- <em>unknown</em>, biometrics of an unknown type.</td></tr><tr><td>isAccessRequested</td><td>Boolean</td><td>Shows whether permission to use biometrics has been requested.</td></tr><tr><td>isAccessGranted</td><td>Boolean</td><td>Shows whether permission to use biometrics has been granted.</td></tr><tr><td>isBiometricTokenSaved</td><td>Boolean</td><td>Shows whether the token is saved in secure storage on the device.</td></tr><tr><td>deviceId</td><td>String</td><td>A unique device identifier that can be used to match the token to the device.</td></tr><tr><td>init([callback])</td><td>Function</td><td><mark>Bot API 7.2+</mark> A method that initializes the BiometricManager object. It should be called before the object's first use. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called when the object is initialized.</td></tr><tr><td>requestAccess(params[, callback])</td><td>Function</td><td><mark>Bot API 7.2+</mark> A method that requests permission to use biometrics according to the <em>params</em> argument of type <a href="#biometricrequestaccessparams">BiometricRequestAccessParams</a>. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called and the first argument will be a boolean indicating whether the user granted access.</td></tr><tr><td>authenticate(params[, callback])</td><td>Function</td><td><mark>Bot API 7.2+</mark> A method that authenticates the user using biometrics according to the <em>params</em> argument of type <a href="#biometricauthenticateparams">BiometricAuthenticateParams</a>. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called and the first argument will be a boolean indicating whether the user authenticated successfully. If so, the second argument will be a biometric token.</td></tr><tr><td>updateBiometricToken(token, [callback])</td><td>Function</td><td><mark>Bot API 7.2+</mark> A method that updates the biometric token in secure storage on the device. To remove the token, pass an empty string. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called and the first argument will be a boolean indicating whether the token was updated.</td></tr><tr><td>openSettings()</td><td>Function</td><td><mark>Bot API 7.2+</mark> A method that opens the biometric access settings for bots. Useful when you need to request biometrics access to users who haven't granted it yet.<br><br><em>Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)</em></td></tr></tbody></table>

All these methods return the [BiometricManager](#biometricmanager) object so they can be chained.

#### BiometricRequestAccessParams

This object describes the native popup for requesting permission to use biometrics.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>reason</td><td>String</td><td><em>Optional</em>. The text to be displayed to a user in the popup describing why the bot needs access to biometrics, 0-128 characters.</td></tr></tbody></table>

#### BiometricAuthenticateParams

This object describes the native popup for authenticating the user using biometrics.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>reason</td><td>String</td><td><em>Optional</em>. The text to be displayed to a user in the popup describing why you are asking them to authenticate and what action you will be taking based on that authentication, 0-128 characters.</td></tr></tbody></table>

#### Accelerometer

This object provides access to accelerometer data on the device.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>isStarted</td><td>Boolean</td><td>Indicates whether accelerometer tracking is currently active.</td></tr><tr><td>x</td><td>Float</td><td>The current acceleration in the X-axis, measured in m/s².</td></tr><tr><td>y</td><td>Float</td><td>The current acceleration in the Y-axis, measured in m/s².</td></tr><tr><td>z</td><td>Float</td><td>The current acceleration in the Z-axis, measured in m/s².</td></tr><tr><td>start(params[, callback])</td><td>Function</td><td><mark>Bot API 8.0+</mark> Starts tracking accelerometer data using <em>params</em> of type <a href="#accelerometerstartparams">AccelerometerStartParams</a>. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean indicating whether tracking was successfully started.</td></tr><tr><td>stop([callback])</td><td>Function</td><td><mark>Bot API 8.0+</mark> Stops tracking accelerometer data. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean indicating whether tracking was successfully stopped.</td></tr></tbody></table>

All these methods return the [Accelerometer](#accelerometer) object so they can be chained.

[<img src="https://core.telegram.org/file/400780400808/3/4R4bxuff6H0.529743/2a9f6212eaed26d194" title="Accelerometer" class="dev_page_image" width="480">](https://core.telegram.org/file/400780400808/3/4R4bxuff6H0.529743/2a9f6212eaed26d194)

#### AccelerometerStartParams

This object defines the parameters for starting accelerometer tracking.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>refresh_rate</td><td>Integer</td><td><em>Optional.</em> The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to <em>1000</em> by default. Note that <em>refresh_rate</em> may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.</td></tr></tbody></table>

#### DeviceOrientation

This object provides access to orientation data on the device.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>isStarted</td><td>Boolean</td><td>Indicates whether device orientation tracking is currently active.</td></tr><tr><td>absolute</td><td>Boolean</td><td>A boolean that indicates whether or not the device is providing orientation data in absolute values.</td></tr><tr><td>alpha</td><td>Float</td><td>The rotation around the Z-axis, measured in radians.</td></tr><tr><td>beta</td><td>Float</td><td>The rotation around the X-axis, measured in radians.</td></tr><tr><td>gamma</td><td>Float</td><td>The rotation around the Y-axis, measured in radians.</td></tr><tr><td>start(params[, callback])</td><td>Function</td><td><mark>Bot API 8.0+</mark> Starts tracking device orientation data using <em>params</em> of type <a href="#deviceorientationstartparams">DeviceOrientationStartParams</a>. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean indicating whether tracking was successfully started.</td></tr><tr><td>stop([callback])</td><td>Function</td><td><mark>Bot API 8.0+</mark> Stops tracking device orientation data. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean indicating whether tracking was successfully stopped.</td></tr></tbody></table>

All these methods return the [DeviceOrientation](#deviceorientation) object so they can be chained.

[<img src="https://core.telegram.org/file/400780400662/2/6ziukR8E4pc.4269149/aa2ec0a86b39709a92" title="DeviceOrientation" class="dev_page_image">](https://core.telegram.org/file/400780400662/2/6ziukR8E4pc.4269149/aa2ec0a86b39709a92)

#### DeviceOrientationStartParams

This object defines the parameters for starting device orientation tracking.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>refresh_rate</td><td>Integer</td><td><em>Optional.</em> The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to <em>1000</em> by default. Note that <em>refresh_rate</em> may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.</td></tr><tr><td>need_absolute</td><td>Boolean</td><td><em>Optional.</em> Pass <em>true</em> to receive absolute orientation data, allowing you to determine the device's attitude relative to magnetic north. Use this option if implementing features like a compass in your app. If relative data is sufficient, pass <em>false</em>. Set to <em>false</em> by default.<br><br><strong>Note:</strong> Keep in mind that some devices may not support absolute orientation data. In such cases, you will receive relative data even if <em>need_absolute=true</em> is passed. Check the <em>DeviceOrientation.absolute</em> parameter to determine whether the data provided is absolute or relative.</td></tr></tbody></table>

#### Gyroscope

This object provides access to gyroscope data on the device.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>isStarted</td><td>Boolean</td><td>Indicates whether gyroscope tracking is currently active.</td></tr><tr><td>x</td><td>Float</td><td>The current rotation rate around the X-axis, measured in rad/s.</td></tr><tr><td>y</td><td>Float</td><td>The current rotation rate around the Y-axis, measured in rad/s.</td></tr><tr><td>z</td><td>Float</td><td>The current rotation rate around the Z-axis, measured in rad/s.</td></tr><tr><td>start(params[, callback])</td><td>Function</td><td><mark>Bot API 8.0+</mark> Starts tracking gyroscope data using <em>params</em> of type <a href="#gyroscopestartparams">GyroscopeStartParams</a>. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean indicating whether tracking was successfully started.</td></tr><tr><td>stop([callback])</td><td>Function</td><td><mark>Bot API 8.0+</mark> Stops tracking gyroscope data. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called with a boolean indicating whether tracking was successfully stopped.</td></tr></tbody></table>

All these methods return the [Gyroscope](#gyroscope) object so they can be chained.

[<img src="https://core.telegram.org/file/400780400892/5/GDxCwbAAG7U.579631/7895611bc90a998a13" title="Gyroscope" class="dev_page_image" width="480">](https://core.telegram.org/file/400780400892/5/GDxCwbAAG7U.579631/7895611bc90a998a13)

#### GyroscopeStartParams

This object defines the parameters for starting gyroscope tracking.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>refresh_rate</td><td>Integer</td><td><em>Optional.</em> The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to <em>1000</em> by default. Note that <em>refresh_rate</em> may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.</td></tr></tbody></table>

#### LocationManager

This object controls location access on the device. Before the first use of this object, it needs to be initialized using the _init_ method.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>isInited</td><td>Boolean</td><td>Shows whether the LocationManager object has been initialized.</td></tr><tr><td>isLocationAvailable</td><td>Boolean</td><td>Shows whether location services are available on the current device.</td></tr><tr><td>isAccessRequested</td><td>Boolean</td><td>Shows whether permission to use location has been requested.</td></tr><tr><td>isAccessGranted</td><td>Boolean</td><td>Shows whether permission to use location has been granted.</td></tr><tr><td>init([callback])</td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that initializes the LocationManager object. It should be called before the object's first use. If an optional <em>callback</em> parameter is provided, the <em>callback</em> function will be called when the object is initialized.</td></tr><tr><td>getLocation(callback)</td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that requests location data. The <em>callback</em> function will be called with <em>null</em> as the first argument if access to location was not granted, or an object of type <a href="#locationdata">LocationData</a> as the first argument if access was successful.</td></tr><tr><td>openSettings()</td><td>Function</td><td><mark>Bot API 8.0+</mark> A method that opens the location access settings for bots. Useful when you need to request location access from users who haven't granted it yet.<br><br><em>Note that this method can be called only in response to user interaction with the Mini App interface (e.g., a click inside the Mini App or on the main button).</em></td></tr></tbody></table>

All these methods return the [LocationManager](#locationmanager) object so they can be chained.

#### LocationData

This object contains data about the current location.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>latitude</td><td>Float</td><td>Latitude in degrees.</td></tr><tr><td>longitude</td><td>Float</td><td>Longitude in degrees.</td></tr><tr><td>altitude</td><td>Float</td><td>Altitude above sea level in meters. <em>null</em> if altitude data is not available on the device.</td></tr><tr><td>course</td><td>Float</td><td>The direction the device is moving in degrees (0 = North, 90 = East, 180 = South, 270 = West). <em>null</em> if course data is not available on the device.</td></tr><tr><td>speed</td><td>Float</td><td>The speed of the device in m/s. <em>null</em> if speed data is not available on the device.</td></tr><tr><td>horizontal_accuracy</td><td>Float</td><td>Accuracy of the latitude and longitude values in meters. <em>null</em> if horizontal accuracy data is not available on the device.</td></tr><tr><td>vertical_accuracy</td><td>Float</td><td>Accuracy of the altitude value in meters. <em>null</em> if vertical accuracy data is not available on the device.</td></tr><tr><td>course_accuracy</td><td>Float</td><td>Accuracy of the course value in degrees. <em>null</em> if course accuracy data is not available on the device.</td></tr><tr><td>speed_accuracy</td><td>Float</td><td>Accuracy of the speed value in m/s. <em>null</em> if speed accuracy data is not available on the device.</td></tr></tbody></table>

#### DeviceStorage

This object provides access to persistent local storage on the user’s device. It is conceptually similar to the browser's `localStorage` API, but integrated within the Telegram client. All data is stored locally and is available only to the bot that created it. Each bot can store up to **5 MB per user** using this storage.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>setItem(key, value[, callback])</td><td>Function</td><td><mark>Bot API 9.0+</mark> A method that stores a value in the device's local storage using the specified key. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether the value was stored.</td></tr><tr><td>getItem(key, callback)</td><td>Function</td><td><mark>Bot API 9.0+</mark> A method that receives a value from the device's local storage using the specified key. In case of an error, the <em>callback</em> function will be called and the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the value will be passed as the second argument.</td></tr><tr><td>removeItem(key[, callback])</td><td>Function</td><td><mark>Bot API 9.0+</mark> A method that removes a value from the device's local storage using the specified key. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether the value was removed.</td></tr><tr><td>clear([callback])</td><td>Function</td><td><mark>Bot API 9.0+</mark> A method that clears all keys previously stored by the bot in the device's local storage. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether all values were removed.</td></tr></tbody></table>

All these methods return the [DeviceStorage](#devicestorage) object, so they can be chained.

#### SecureStorage

This object provides access to a secure storage on the user’s device for sensitive data. On **iOS**, it uses the system **Keychain**; on **Android**, it uses the **Keystore**. This ensures that all stored values are encrypted at rest and inaccessible to unauthorized applications.

Secure storage is suitable for storing tokens, secrets, authentication state, and other sensitive user-specific information. Each bot can store up to **10 items per user**.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>setItem(key, value[, callback])</td><td>Function</td><td><mark>Bot API 9.0+</mark> A method that stores a value in the device's secure storage using the specified key. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether the value was stored.</td></tr><tr><td>getItem(key, callback)</td><td>Function</td><td><mark>Bot API 9.0+</mark> A method that receives a value from the device's secure storage using the specified key. In case of an error, the <em>callback</em> function will be called and the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the value will be passed as the second argument. If the key was not found, the second argument will be <em>null</em>, and the third argument will be a boolean indicating whether the key can be restored from the current device.</td></tr><tr><td>restoreItem(key[, callback])</td><td>Function</td><td><mark>Bot API 9.0+</mark> Attempts to restore a key that previously existed on the current device. When called, the user will be asked for permission to restore the value. If the user declines or an error occurs, the first argument in the <em>callback</em> will contain the error. If restored successfully, the first argument will be <em>null</em> and the second argument will contain the restored value.</td></tr><tr><td>removeItem(key[, callback])</td><td>Function</td><td><mark>Bot API 9.0+</mark> A method that removes a value from the device's secure storage using the specified key. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether the value was removed.</td></tr><tr><td>clear([callback])</td><td>Function</td><td><mark>Bot API 9.0+</mark> A method that clears all keys previously stored by the bot in the device's secure storage. If an optional <em>callback</em> parameter was passed, the <em>callback</em> function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be <em>null</em> and the second argument will be a boolean indicating whether all values were removed.</td></tr></tbody></table>

All these methods return the [SecureStorage](#securestorage) object, so they can be chained.

#### WebAppInitData

This object contains data that is transferred to the Mini App when it is opened. It is empty if the Mini App was launched from a [keyboard button](#keyboard-button-mini-apps) or from [inline mode](#inline-mode-mini-apps).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>query_id</td><td>String</td><td><em>Optional.</em> A unique identifier for the Mini App session, required for sending messages via the <a href="/bots/api/#answerwebappquery">answerWebAppQuery</a> method.</td></tr><tr><td>user</td><td><a href="#webappuser">WebAppUser</a></td><td><em>Optional.</em> An object containing data about the current user.</td></tr><tr><td>receiver</td><td><a href="#webappuser">WebAppUser</a></td><td><em>Optional.</em> An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for private chats and only for Mini Apps launched via the attachment menu.</td></tr><tr><td>chat</td><td><a href="#webappchat">WebAppChat</a></td><td><em>Optional.</em> An object containing data about the chat where the bot was launched via the attachment menu. Returned for supergroups, channels and group chats – only for Mini Apps launched via the attachment menu.</td></tr><tr><td>chat_type</td><td>String</td><td><em>Optional.</em> Type of the chat from which the Mini App was opened. Can be either “sender” for a private chat with the user opening the link, “private”, “group”, “supergroup”, or “channel”. Returned only for Mini Apps launched from direct links.</td></tr><tr><td>chat_instance</td><td>String</td><td><em>Optional.</em> Global identifier, uniquely corresponding to the chat from which the Mini App was opened. Returned only for Mini Apps launched from a direct link.</td></tr><tr><td>start_param</td><td>String</td><td><em>Optional.</em> The value of the <em>startattach</em> parameter, passed <a href="#adding-bots-to-the-attachment-menu">via link</a>. Only returned for Mini Apps when launched from the attachment menu via link.<br><br>The value of the <code>start_param</code> parameter will also be passed in the GET-parameter <code>tgWebAppStartParam</code>, so the Mini App can load the correct interface right away.</td></tr><tr><td>can_send_after</td><td>Integer</td><td><em>Optional.</em> Time in seconds, after which a message can be sent via the <a href="/bots/api/#answerwebappquery">answerWebAppQuery</a> method.</td></tr><tr><td>auth_date</td><td>Integer</td><td>Unix time when the form was opened.</td></tr><tr><td>hash</td><td>String</td><td>A hash of all passed parameters, which the bot server can use to <a href="#validating-data-received-via-the-mini-app">check their validity</a>.</td></tr><tr><td>signature <sup><mark class="mark-new">NEW</mark></sup></td><td>String</td><td>A signature of all passed parameters (except <em>hash</em>), which the third party can use to <a href="#validating-data-for-third-party-use">check their validity</a>.</td></tr></tbody></table>

#### WebAppUser

This object contains the data of the Mini App user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>Integer</td><td>A unique identifier for the user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. It has at most 52 significant bits, so a 64-bit integer or a double-precision float type is safe for storing this identifier.</td></tr><tr><td>is_bot</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if this user is a bot. Returns in the <a href="#webappinitdata">receiver</a> field only.</td></tr><tr><td>first_name</td><td>String</td><td>First name of the user or bot.</td></tr><tr><td>last_name</td><td>String</td><td><em>Optional</em>. Last name of the user or bot.</td></tr><tr><td>username</td><td>String</td><td><em>Optional</em>. Username of the user or bot.</td></tr><tr><td>language_code</td><td>String</td><td><em>Optional</em>. <a href="https://en.wikipedia.org/wiki/IETF_language_tag">IETF language tag</a> of the user's language. Returns in <em>user</em> field only.</td></tr><tr><td>is_premium</td><td>True</td><td><em>Optional</em>. <em>True</em>, if this user is a Telegram Premium user.</td></tr><tr><td>added_to_attachment_menu</td><td>True</td><td><em>Optional</em>. <em>True</em>, if this user added the bot to the attachment menu.</td></tr><tr><td>allows_write_to_pm</td><td>True</td><td><em>Optional</em>. <em>True</em>, if this user allowed the bot to message them.</td></tr><tr><td>photo_url</td><td>String</td><td><em>Optional</em>. URL of the user’s profile photo. The photo can be in .jpeg or .svg formats.</td></tr></tbody></table>

#### WebAppChat

This object represents a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>Integer</td><td>Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>type</td><td>String</td><td>Type of chat, can be either “group”, “supergroup” or “channel”</td></tr><tr><td>title</td><td>String</td><td>Title of the chat</td></tr><tr><td>username</td><td>String</td><td><em>Optional</em>. Username of the chat</td></tr><tr><td>photo_url</td><td>String</td><td><em>Optional</em>. URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned for Mini Apps launched from the attachment menu.</td></tr></tbody></table>

#### Validating data received via the Mini App

To validate data received via the Mini App, one should send the data from the _Telegram.WebApp.initData_ field to the bot's backend. The data is a query string, which is composed of a series of field-value pairs.

You can verify the integrity of the data received by comparing the received _hash_ parameter with the hexadecimal representation of the [HMAC-SHA-256](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) signature of the **data-check-string** with the secret key, which is the [HMAC-SHA-256](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) signature of the [bot's token](/bots/tutorial/#obtain-your-bot-token) with the constant string `WebAppData` used as a key.

**Data-check-string** is a chain of all received fields, sorted alphabetically, in the format `key=<value>` with a [line feed](https://en.wikipedia.org/wiki/Newline) character ('  
', 0x0A) used as separator – e.g., `'auth_date=<auth_date> query_id=<query_id> user=<user>'`.

The full check might look like:

```
data_check_string = ...
secret_key = HMAC_SHA256(<bot_token>, "WebAppData")
if (hex(HMAC_SHA256(data_check_string, secret_key)) == hash) {
  // data is from Telegram
}
```

To prevent the use of outdated data, you can additionally check the _auth\_date_ field, which contains a Unix timestamp of when it was received by the Mini App.

Once validated, the data may be used on your server. Complex data types are represented as JSON-serialized objects.

#### Validating data for Third-Party Use

NEW If you need to share the data with a third party, they can validate the data without requiring access to your [bot's token](/bots/tutorial/#obtain-your-bot-token). Simply provide them with the data from the _Telegram.WebApp.initData_ field and your _bot\_id_.

The integrity of the data can be verified by validating the received _signature_ parameter, which is the base64url-encoded representation of the [Ed25519](https://en.wikipedia.org/wiki/EdDSA) signature of the **data-check-string**. The verification is performed using the public key provided by Telegram.

**Data-check-string** is constructed as follows:  
1\. Prepend the _bot\_id_, followed by `:` and the constant string `WebAppData`.  
2\. Add a [line feed](https://en.wikipedia.org/wiki/Newline) character (`' '`, 0x0A).  
3\. Append all received fields (except _hash_ and _signature_), sorted alphabetically, in the format `key=<value>`.  
4\. Separate each key-value pair with a line feed character (`' '`, 0x0A).

**Example:**  
`'12345678:WebAppData auth_date=<auth_date> query_id=<query_id> user=<user>'`

The verification process might look like this:

```
data_check_string = ...
public_key = "<Telegram_public_key>"
if (Ed25519_verify(public_key, data_check_string, signature)) {
  // data is valid and originated from Telegram
}
```

> Telegram provides the following [Ed25519](https://en.wikipedia.org/wiki/EdDSA) public keys for signature verification:
> 
> **Test environment:** `40055058a4ee38156a06562e52eece92a771bcd8346a8c4615cb7376eddf72ec` (hex)  
> **Production:** `e7bf03a2fa4602af4580703d88dda5bb59f32ed8b02a56c187fe7d34caed242d` (hex)

To prevent the use of outdated data, the third party should additionally validate the _auth\_date_ field. This field contains a Unix timestamp indicating when the data was received by the Mini App.

Once validated, the data may be used. Complex data types are represented as JSON-serialized objects.

#### Events Available for Mini Apps

The Mini App can receive events from the Telegram app, onto which a handler can be attached using the `Telegram.WebApp.onEvent(eventType, eventHandler)` method. Inside `eventHandler` the _this_ object refers to _Telegram.WebApp_, the set of parameters sent to the handler depends on the event type. Below is a list of possible events:

<table class="table"><thead><tr><th scope="col">eventType</th><th scope="col">Description</th></tr></thead><tbody><tr><td><code>activated</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the Mini App becomes active (e.g., opened from minimized state or selected among tabs).<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>deactivated</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the Mini App becomes inactive (e.g., minimized or moved to an inactive tab).<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>themeChanged</code></td><td>Occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).<br><em>eventHandler</em> receives no parameters, new theme settings and color scheme can be received via <em>this.themeParams</em> and <em>this.colorScheme</em> respectively.</td></tr><tr><td><code>viewportChanged</code></td><td>Occurs when the visible section of the Mini App is changed.<br><em>eventHandler</em> receives an object with the single field <em>isStateStable</em>. If <em>isStateStable</em> is true, the resizing of the Mini App is finished. If it is false, the resizing is ongoing (the user is expanding or collapsing the Mini App or an animated object is playing). The current value of the visible section’s height is available in <em>this.viewportHeight</em>.</td></tr><tr><td><code>safeAreaChanged</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the device's safe area insets change (e.g., due to orientation change or screen adjustments).<br><em>eventHandler</em> receives no parameters. The current inset values can be accessed via <em>this.safeAreaInset</em>.</td></tr><tr><td><code>contentSafeAreaChanged</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the safe area for content changes (e.g., due to orientation change or screen adjustments).<br><em>eventHandler</em> receives no parameters. The current inset values can be accessed via <em>this.contentSafeAreaInset</em>.</td></tr><tr><td><code>mainButtonClicked</code></td><td>Occurs when the <a href="#bottombutton">main button</a> is pressed.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>secondaryButtonClicked</code></td><td><mark>Bot API 7.10+</mark> Occurs when the <a href="#bottombutton">secondary button</a> is pressed.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>backButtonClicked</code></td><td><mark>Bot API 6.1+</mark> Occurrs when the <a href="#backbutton">back button</a> is pressed.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>settingsButtonClicked</code></td><td><mark>Bot API 6.1+</mark> Occurrs when the Settings item in context menu is pressed.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>invoiceClosed</code></td><td><mark>Bot API 6.1+</mark> Occurrs when the opened invoice is closed.<br><em>eventHandler</em> receives an object with the two fields: <em>url</em> – invoice link provided and <em>status</em> – one of the invoice statuses:<br>- <strong>paid</strong> – invoice was paid successfully,<br>- <strong>cancelled</strong> – user closed this invoice without paying,<br>- <strong>failed</strong> – user tried to pay, but the payment was failed,<br>- <strong>pending</strong> – the payment is still processing. The bot will receive a service message about a <a href="/bots/api/#successfulpayment">successful payment</a> when the payment is successfully paid.</td></tr><tr><td><code>popupClosed</code></td><td><mark>Bot API 6.2+</mark> Occurrs when the opened popup is closed.<br><em>eventHandler</em> receives an object with the single field <em>button_id</em> – the value of the field <em>id</em> of the pressed button. If no buttons were pressed, the field <em>button_id</em> will be <em>null</em>.</td></tr><tr><td><code>qrTextReceived</code></td><td><mark>Bot API 6.4+</mark> Occurs when the QR code scanner catches a code with text data.<br><em>eventHandler</em> receives an object with the single field <em>data</em> containing text data from the QR code.</td></tr><tr><td><code>scanQrPopupClosed</code></td><td><mark>Bot API 7.7+</mark> Occurs when the QR code scanner popup is closed by the user.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>clipboardTextReceived</code></td><td><mark>Bot API 6.4+</mark> Occurrs when the <code>readTextFromClipboard</code> method is called.<br><em>eventHandler</em> receives an object with the single field <em>data</em> containing text data from the clipboard. If the clipboard contains non-text data, the field <em>data</em> will be an empty string. If the Mini App has no access to the clipboard, the field <em>data</em> will be <em>null</em>.</td></tr><tr><td><code>writeAccessRequested</code></td><td><mark>Bot API 6.9+</mark> Occurs when the write permission was requested.<br><em>eventHandler</em> receives an object with the single field <em>status</em> containing one of the statuses:<br>- <strong>allowed</strong> – user granted write permission to the bot,<br>- <strong>cancelled</strong> – user declined this request.</td></tr><tr><td><code>contactRequested</code></td><td><mark>Bot API 6.9+</mark> Occurrs when the user's phone number was requested.<br><em>eventHandler</em> receives an object with the single field <em>status</em> containing one of the statuses:<br>- <strong>sent</strong> – user shared their phone number with the bot,<br>- <strong>cancelled</strong> – user declined this request.</td></tr><tr><td><code>biometricManagerUpdated</code></td><td><mark>Bot API 7.2+</mark> Occurs whenever BiometricManager object is changed.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>biometricAuthRequested</code></td><td><mark>Bot API 7.2+</mark> Occurs whenever biometric authentication was requested.<br><em>eventHandler</em> receives an object with the field <em>isAuthenticated</em> containing a boolean indicating whether the user was authenticated successfully. If <em>isAuthenticated</em> is true, the field <em>biometricToken</em> will contain the biometric token stored in secure storage on the device.</td></tr><tr><td><code>biometricTokenUpdated</code></td><td><mark>Bot API 7.2+</mark> Occurs whenever the biometric token was updated.<br><em>eventHandler</em> receives an object with the single field <em>isUpdated</em>, containing a boolean indicating whether the token was updated.</td></tr><tr><td><code>fullscreenChanged</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs whenever the Mini App enters or exits fullscreen mode.<br><em>eventHandler</em> receives no parameters. The current fullscreen state can be checked via <em>this.isFullscreen</em>.</td></tr><tr><td><code>fullscreenFailed</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs if a request to enter fullscreen mode fails.<br><em>eventHandler</em> receives an object with the single field <em>error</em>, describing the reason for the failure. Possible values for <em>error</em> are:<br><strong>UNSUPPORTED</strong> – Fullscreen mode is not supported on this device or platform.<br><strong>ALREADY_FULLSCREEN</strong> – The Mini App is already in fullscreen mode.</td></tr><tr><td><code>homeScreenAdded</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the Mini App is successfully added to the home screen.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>homeScreenChecked</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs after checking the home screen status.<br><em>eventHandler</em> receives an object with the field <em>status</em>, which is a string indicating the current home screen status. Possible values for <em>status</em> are:<br>- <strong>unsupported</strong> – the feature is not supported, and it is not possible to add the icon to the home screen,<br>- <strong>unknown</strong> – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,<br>- <strong>added</strong> – the icon has already been added to the home screen,<br>- <strong>missed</strong> – the icon has not been added to the home screen.</td></tr><tr><td><code>accelerometerStarted</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when accelerometer tracking has started successfully.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>accelerometerStopped</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when accelerometer tracking has stopped.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>accelerometerChanged</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs with the specified frequency after calling the <code>start</code> method, sending the current accelerometer data.<br><em>eventHandler</em> receives no parameters, the current acceleration values can be received via <em>this.x</em>, <em>this.y</em> and <em>this.z</em> respectively.</td></tr><tr><td><code>accelerometerFailed</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs if a request to start accelerometer tracking fails.<br><em>eventHandler</em> receives an object with the single field <em>error</em>, describing the reason for the failure. Possible values for <em>error</em> are:<br><strong>UNSUPPORTED</strong> – Accelerometer tracking is not supported on this device or platform.</td></tr><tr><td><code>deviceOrientationStarted</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when device orientation tracking has started successfully.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>deviceOrientationStopped</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when device orientation tracking has stopped.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>deviceOrientationChanged</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs with the specified frequency after calling the <code>start</code> method, sending the current orientation data.<br><em>eventHandler</em> receives no parameters, the current device orientation values can be received via <em>this.alpha</em>, <em>this.beta</em> and <em>this.gamma</em> respectively.</td></tr><tr><td><code>deviceOrientationFailed</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs if a request to start device orientation tracking fails.<br><em>eventHandler</em> receives an object with the single field <em>error</em>, describing the reason for the failure. Possible values for <em>error</em> are:<br><strong>UNSUPPORTED</strong> – Device orientation tracking is not supported on this device or platform.</td></tr><tr><td><code>gyroscopeStarted</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when gyroscope tracking has started successfully.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>gyroscopeStopped</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when gyroscope tracking has stopped.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>gyroscopeChanged</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs with the specified frequency after calling the <code>start</code> method, sending the current gyroscope data.<br><em>eventHandler</em> receives no parameters, the current rotation rates can be received via <em>this.x</em>, <em>this.y</em> and <em>this.z</em> respectively.</td></tr><tr><td><code>gyroscopeFailed</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs if a request to start gyroscope tracking fails.<br><em>eventHandler</em> receives an object with the single field <em>error</em>, describing the reason for the failure. Possible values for <em>error</em> are:<br><strong>UNSUPPORTED</strong> – Gyroscope tracking is not supported on this device or platform.</td></tr><tr><td><code>locationManagerUpdated</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs whenever LocationManager object is changed.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>locationRequested</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when location data is requested.<br><em>eventHandler</em> receives an object with the single field <em>locationData</em> of type <a href="#locationdata">LocationData</a>, containing the current location information.</td></tr><tr><td><code>shareMessageSent</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the message is successfully shared by the user.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>shareMessageFailed</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs if sharing the message fails.<br><em>eventHandler</em> receives an object with the single field <em>error</em>, describing the reason for the failure. Possible values for <em>error</em> are:<br><strong>UNSUPPORTED</strong> – The feature is not supported by the client.<br><strong>MESSAGE_EXPIRED</strong> – The message could not be retrieved because it has expired.<br><strong>MESSAGE_SEND_FAILED</strong> – An error occurred while attempting to send the message.<br><strong>USER_DECLINED</strong> – The user closed the dialog without sharing the message.<br><strong>UNKNOWN_ERROR</strong> – An unknown error occurred.</td></tr><tr><td><code>emojiStatusSet</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the emoji status is successfully set.<br><em>eventHandler</em> receives no parameters.</td></tr><tr><td><code>emojiStatusFailed</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs if setting the emoji status fails.<br><em>eventHandler</em> receives an object with the single field <em>error</em>, describing the reason for the failure. Possible values for <em>error</em> are:<br><strong>UNSUPPORTED</strong> – The feature is not supported by the client.<br><strong>SUGGESTED_EMOJI_INVALID</strong> – One or more emoji identifiers are invalid.<br><strong>DURATION_INVALID</strong> – The specified duration is invalid.<br><strong>USER_DECLINED</strong> – The user closed the dialog without setting a status.<br><strong>SERVER_ERROR</strong> – A server error occurred when attempting to set the status.<br><strong>UNKNOWN_ERROR</strong> – An unknown error occurred.</td></tr><tr><td><code>emojiStatusAccessRequested</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the write permission was requested.<br><em>eventHandler</em> receives an object with the single field <em>status</em> containing one of the statuses:<br>- <strong>allowed</strong> – user granted emoji status permission to the bot,<br>- <strong>cancelled</strong> – user declined this request.</td></tr><tr><td><code>fileDownloadRequested</code> <sup><mark class="mark-new">NEW</mark></sup></td><td><mark>Bot API 8.0+</mark> Occurs when the user responds to the file download request.<br><em>eventHandler</em> receives an object with the single field <em>status</em> containing one of the statuses:<br>- <strong>downloading</strong> – the file download has started,<br>- <strong>cancelled</strong> – user declined this request.</td></tr></tbody></table>

#### Adding Bots to the Attachment Menu

Attachment menu integration is currently only available for major advertisers on the [Telegram Ad Platform](https://promote.telegram.org/basics). However, **all bots** can use it in the [test server environment](#using-bots-in-the-test-environment). Talk to Botfather on the test server to [set up the integration](#using-bots-in-the-test-environment).

A special link is used to add bots to the attachment menu:

`https://t.me/botusername?startattach`  
or  
`https://t.me/botusername?startattach=command`

> For example, open this [attachment menu link](https://t.me/durgerkingbot?startattach) for _@DurgerKingBot_, then use the <img class="icon" src="https://core.telegram.org/file/464001085/2/E4hNXSNQimQ.2503/bf6ffcab3cb3afd43d" alt="Attach"> menu in any **private chat**.

Opening the link prompts the user to add the bot to their attachment menu. If the bot has already been added, the attachment menu will open in the current chat and redirect to the bot there (if the link is opened from a 1-on-1 chat). If a non-empty _startattach_ parameter was included in the link, it will be passed to the Mini App in the _start\_param_ field and in the GET parameter _tgWebAppStartParam_.

The following link formats are also supported:

`https://t.me/username?attach=botusername`  
`https://t.me/username?attach=botusername&startattach=command`  
`https://t.me/+1234567890?attach=botusername`  
`https://t.me/+1234567890?attach=botusername&startattach=command`

These links open the Mini App in the attachment menu in the chat with a specific user. If the bot wasn't already added to the attachment menu, the user will be prompted to do so. If a non-empty _startattach_ parameter was included in the link, it will be passed to the Mini App in the _start\_param_ field and in the GET parameter _tgWebAppStartParam_.

Bot API 6.1+ supports a new link format:

`https://t.me/botusername?startattach&choose=users+bots`  
`https://t.me/botusername?startattach=command&choose=groups+channels`

Opening such a link prompts the user to choose a specific chat and opens the attachment menu in that chat. If the bot wasn't already added to the attachment menu, the user will be prompted to do so. You can specify which types of chats the user will be able to choose from. It can be one or more of the following types: _users_, _bots_, _groups_, _channels_ separated by a `+` sign. If a non-empty _startattach_ parameter was included in the link, it will be passed to the Mini App in the _start\_param_ field and in the GET parameter _tgWebAppStartParam_.

#### Additional Data in User-Agent

When the Mini App is running on Android, additional information is appended to the User-Agent string to provide more context about the app environment. This information includes the app version, device model, Android version, SDK version, and device performance class, formatted as follows:

```
Telegram-Android/{app_version} ({manufacturer} {model}; Android {android_version}; SDK {sdk_version}; {performance_class})
```

where:

-   **{app\_version}** is the version of the Telegram app (e.g., `11.3.3`),
-   **{manufacturer} {model}** represents the device’s manufacturer and model (e.g., `Google sdk_gphone64_arm64`),
-   **{android\_version}** is the Android OS version running on the device (e.g., `14`),
-   **{sdk\_version}** indicates the Android SDK version (e.g., `34`),
-   **{performance\_class}** specifies the device performance class as `LOW`, `AVERAGE`, or `HIGH`, indicating the device's performance capacity.

> **Example**  
> `Mozilla/5.0 (Linux; Android 14; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5672.136 Mobile Safari/537.36 Telegram-Android/11.3.3 (Google sdk_gphone64_arm64; Android 14; SDK 34; LOW)`

We recommend using this information to optimize your Mini App based on the device's capabilities. For instance, you can adjust animations and visual effects in games on low-performance devices to ensure a smooth experience for all users, regardless of device specifications.

### Testing Mini Apps

#### Using bots in the test environment

To log in to the test environment, use either of the following:

-   **iOS:** tap 10 times on the Settings icon > Accounts > Login to another account > Test.
-   **Telegram Desktop:** open ☰ Settings > Shift + Alt + Right click ‘Add Account’ and select ‘Test Server’.
-   **macOS:** click the Settings icon 10 times to open the Debug Menu, ⌘ + click ‘Add Account’ and log in via phone number.

The test environment is completely separate from the main environment, so you will need to create a **new user account** and a **new bot** with @BotFather.

After receiving your bot token, you can send requests to the Bot API in this format:

```
https://api.telegram.org/bot<token>/test/METHOD_NAME
```

> **Note:** When working with the test environment, you may use HTTP links without TLS to test your Mini App.

#### Debug Mode for Mini Apps

Use these tools to find app-specific issues in your Mini App:

**iOS**

-   In Telegram tap 10 times on the Settings icon and toggle on _Allow Web View Inspection_.
-   Connect your phone to your computer using a USB cable.
-   Open Safari on your Mac, then go to _Develop > \[Your Device Name\]_ in the menu bar.
-   Launch your Mini App on the iOS device – it will appear in the _Develop_ menu under your device.

**Android**

-   [Enable USB-Debugging](https://developer.chrome.com/docs/devtools/remote-debugging/) on your device.
-   In Telegram Settings, scroll all the way down, press and hold on the **version number** two times.
-   Choose _Enable WebView Debug_ in the Debug Settings.
-   Connect your phone to your computer and open `chrome://inspect/#devices` in Chrome – you will see your Mini App there when you launch it on your phone.

**Telegram Desktop on Windows and Linux**

-   Download and launch the [Beta Version](https://desktop.telegram.org/changelog#beta-version) of Telegram Desktop on **Windows** or **Linux** (not supported on Telegram Desktop for macOS yet).
-   Go to _Settings > Advanced > Experimental settings > Enable webview inspection_.
-   Right click in the WebView and choose _Inspect_.

**Telegram macOS**

-   Download and launch the [Beta Version](https://telegram.org/dl/macos/beta) of Telegram macOS.
-   Quickly click 5 times on the Settings icon to open the debug menu and enable “Debug Mini Apps”.
-   Right click in the Mini App and choose _Inspect Element_.  
    faq > If you are new to Telegram bots, we recommend checking out our [**Introduction to Bots**](/bots/) first.  
    You may also find the **[Bot API Manual](/bots/api/)** useful.

[**General**](#general-questions)

-   [How do I create a bot?](#how-do-i-create-a-bot)
-   [Where can I get some code examples?](#i-m-a-developer-where-can-i-find-some-examples)
-   [I have a feature request!](#will-you-add-x-to-the-bot-api)
-   [What messages will my bot get?](#what-messages-will-my-bot-get)
-   [Why doesn't my bot see messages from other bots?](#why-doesn-t-my-bot-see-messages-from-other-bots)

[**Getting Updates**](#getting-updates)

-   [How do I get updates?](#how-do-i-get-updates)
-   [Long polling problems](#long-polling-gives-me-the-same-updates-again-and-again)
-   [Webhook problems](#i-m-having-problems-with-webhooks)
-   [Using self-signed certificates](#i-m-having-trouble-with-my-self-signed-certificate)
-   [How can I make sure webhook requests come from Telegram?](#how-can-i-make-sure-that-webhook-requests-are-coming-from-telegram)

[**Handling Media**](#handling-media)

-   [Downloading files](#how-do-i-download-files)
-   [Uploading large files](#how-do-i-upload-a-large-file)
-   [Can I count of file\_ids to be persistent?](#can-i-count-on-file-ids-to-be-persistent)

[**Broadcasting to Users**](#broadcasting-to-users)

-   [How do I avoid hitting limits?](#my-bot-is-hitting-limits-how-do-i-avoid-this)
-   [How do I message all my subscribers?](#how-can-i-message-all-of-my-bot-s-subscribers-at-once)  
    

* * *

### General Questions

#### How do I create a bot?

Creating Telegram bots is super-easy, but you will need at least some skills at computer programming. In order for a bot to work, set up a bot account with [@BotFather](https://telegram.me/botfather), then connect it to your backend server via our [API](/bots/api/).

Unfortunately, there are no out-of-the-box ways to create a working bot if you are not a developer. But we're sure you'll soon find plenty of bots created by other people to play with.

#### I'm a developer. Where can I find some examples?

Here are two sample bots, both written in PHP:

-   [Hello Bot](/bots/samples/hellobot/) demonstrates the basics of the Telegram bot API.
-   [Simple Poll bot](https://github.com/kolar/telegram-poll-bot) is a more complete example, it supports both long-polling and Webhooks for updates.

> Many members of our community are building bots and publishing sources.  
> We're collecting them on [**this page »**](/bots/samples/)

Ping us on [@BotSupport](https://telegram.me/botsupport) if you've built a bot and would like to share it with others.

#### Will you add X to the Bot API?

The bot API is still pretty young. There are many potential features to consider and implement. We'll be studying what people do with their bots for a while to see which directions will be most important for the platform.

All bot developers are welcome to share ideas for our Bot API with our [**@BotSupport**](https://telegram.me/botsupport) account.

#### What messages will my bot get?

**1.** **All bots**, regardless of settings, will receive:

-   All service messages.
-   All messages from private chats with users.
-   All messages from channels where they are a member.

**2.** **Bot admins** and bots with [privacy mode](/bots/) **disabled** will receive all messages except messages sent by other bots.

**3.** Bots with [privacy mode](/bots/) **enabled** will receive:

-   Commands explicitly meant for them (e.g., /command@this\_bot).
-   General commands from users (e.g. /start) **if** the bot was the last bot to send a message to the group.
-   Messages sent [via](/bots/api/#inline-mode) this bot.
-   Replies to any messages implicitly or explicitly meant for this bot.

**Note** that each particular message can only be available to **one** privacy-enabled bot at a time, i.e., a reply to bot A containing an explicit command for bot B or sent via bot C will only be available to bot A. Replies have the highest priority.

#### Why doesn't my bot see messages from other bots?

Bots talking to each other could potentially get stuck in unwelcome loops. To avoid this, we decided that bots will not be able to see messages from other bots regardless of mode.

### Getting Updates

#### How do I get updates?

There are currently two ways of getting updates. You can either use [long polling](/bots/api/#getupdates) or [Webhooks](/bots/api/#setwebhook). Please note that it's **not** possible to get updates via long polling while an outgoing Webhook is set.

#### Long polling gives me the same updates again and again!

The [getUpdates](/bots/api/#getupdates) method returns the earliest 100 unconfirmed updates. To confirm an update, use the _offset_ parameter when calling getUpdates like this:

offset = update\_id of last processed update + 1

All updates with _update\_id_ less than or equal to _offset_ will be marked as confirmed on the server and will no longer be returned.

#### I'm having problems with Webhooks.

If you've set up your webhook successfully, but are not getting any updates, please remember:

-   You need a valid SSL certificate for webhooks to work.
-   To use a self-signed certificate, you need to upload your public key certificate using the _certificate_ parameter in [setWebhook](/bots/api/#setwebhook). Please upload as InputFile, sending a String will not work.
-   Ports currently supported for Webhooks: **443**, **80**, **88**, **8443**.
-   Wildcard certificates may not be supported.
-   Redirects are not supported.
-   CN must exactly match your domain.

> Please check out this new [**WEBHOOK GUIDE**](/bots/webhooks/) to learn all there is to know about webhooks!

#### I'm having trouble with my self-signed certificate!

Please take a look at this [self-signed certificate guide](/bots/self-signed/) we made just for you. If you've read it and still have a question, ping us on botsupport.

#### How can I make sure that Webhook requests are coming from Telegram?

If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL you give us, e.g. www.example.com/your\_token. Since nobody else knows your bot's token, you can be pretty sure it's us.

#### How can I make requests in response to updates?

This is possible if you're using webhooks. The upside is that you need less requests, the downside — that in this case it's not possible to know that such a request was successful or get its result.

Whenever you receive a webhook update, you have two options:

**1\. Issue POST to https://api.telegram.org/bot&lt;token>/method**

[<img src="https://core.telegram.org/file/811140979/3/5p52TWl9X2o/5c6d684ee0d6a4399d" title="Confirm and request" class="dev_page_image" style="width:500px;">](https://core.telegram.org/file/811140979/3/5p52TWl9X2o/5c6d684ee0d6a4399d)

**2\. Reply directly and give method as JSON payload in the reply**

[<img src="https://core.telegram.org/file/811140266/2/vGxiVmENAos/6cffad00cbe72be7f2" title="Reply with payload" class="dev_page_image" style="width:500px;">](https://core.telegram.org/file/811140266/2/vGxiVmENAos/6cffad00cbe72be7f2)

> You may also want to look at our sample [HelloBot](/bots/samples/hellobot/), it offers a PHP implementation of this.

### Handling Media

#### How do I download files?

Use the [getFile](/bots/api/#getfile) method. Please note that this will only work with files of up to 20 MB in size.

#### How do I upload a large file?

Bots can currently send files of any type of up to 50 MB in size, so yes, very large files won't work for now. Sorry. This limit may be changed in the future.

#### Can I count on file\_ids to be persistent?

Yes, file\_ids can be treated as persistent.

### Broadcasting to Users

#### My bot is hitting limits, how do I avoid this?

By default, bots are able to message their users **at no cost** – but have limitations on the number of messages they can broadcast in a single interval:

-   In a single chat, avoid sending more than one message per second. We may allow short bursts that go over this limit, but eventually you'll begin receiving 429 errors.
-   In a group, bots are not be able to send more than 20 messages per minute.
-   For bulk notifications, bots are not able to broadcast more than about 30 messages per second, unless they enable [paid broadcasts](/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once) to increase the limit.

#### How can I message all of my bot's subscribers at once?

Enabling [paid broadcasts](/bots/api-changelog/#october-31-2024) in [@BotFather](https://t.me/botfather) allows a bot to broadcast up to **1000 messages per second**. Each message broadcasted over the free amount of 30 per second incurs a cost of **0.1 Stars per message**, paid with [Telegram Stars](/blog/telegram-stars/) from the bot's balance. In order to enable this feature, a bot must have at least **10,000 Stars** on its balance and at least **10,000** monthly active users.

> Bots with increased limits are only charged for messages that are broadcasted successfully.

If you do not wish to enable paid broadcasts, consider spreading them over longer intervals (e.g. 8-12 hours) to avoid hitting the limit. The API will not allow bulk notifications to more than ~30 users per second – if you go over that, you'll start getting 429 errors.

* * *

> If you've got questions that are not answered on this page, ping us at [@BotSupport](https://telegram.me/botsupport) in Telegram.  
> We welcome any suggestions for the Bot Platform and API.  
> telegram-login Telegram offers app and website developers **a free and open platform** that lets over **1 billion** users seamlessly **sign up and log in** with their Telegram accounts.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://core.telegram.org/file/400780400046/6/lzgRh3Hn0Ec.49953.jpg/d6bd5793f35f463749" style="max-width: 600px;" alt="Telegram Login"><source src="https://core.telegram.org/file/400780400885/2/Qc3SOZNZOLA.3171201.mp4/da53cf9e54f1eeab73" type="video/mp4"></video></div></div>

#### Benefits of Telegram Login

-   **Higher conversion**  
    Users sign in with a few taps, boosting conversion and retention.
    
-   **Lower verification costs**  
    Users can share their **verified phone number**, removing the need for expensive codes.
    
-   **Direct communication channels**  
    You can reach your users within Telegram, with built-in push notification support.
    
-   **Further integration**  
    You can deliver more services directly via the [Bot API](/bots/) and [Mini Apps](/bots/webapps/).
    

> **Note:** This document describes the Telegram Login library and the new [OpenID Connect](https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_\(OIDC%29) login flow.  
> The legacy iframe-based JavaScript widget documentation is archived [here](/widgets/login-legacy/).

* * *

### Getting Started

Telegram offers a [compact tool](#using-the-telegram-login-library) to quickly add Telegram login buttons to your interface. You can also directly access our library's [JS API](#available-methods).

For mobile developers, we also provide ready-to-use **[Native SDKs](#native-sdks)** for iOS and Android.

Alternatively, Telegram supports the standard [OpenID Connect](https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_\(OIDC%29) protocol. This allows you to integrate Telegram authentication into your application using any OIDC-compatible library or authentication platform (e.g., Keycloak, Authentik, Auth0 etc.).

Our implementation follows the standard [Authorization Code Flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) with **PKCE** support.

> For an in-depth understanding of the general OIDC flow, please refer to the [OpenID Foundation's Developer Guide](https://openid.net/developers/how-connect-works).

#### TL;DR

-   **[Set up a bot](#setting-up-a-bot)** to represent your application.
-   **[Register your Allowed URLs](#registering-your-allowed-urls)** via [@BotFather](https://t.me/botfather) and obtain your Client ID and Secret.
-   **[Add the Telegram Login library](#using-the-telegram-login-library)** to your page.
-   **[Integrate Native SDKs](#native-sdks)** if you are building an iOS or Android mobile application.
-   **[Validate ID tokens](#validating-id-tokens)** to cryptographically verify incoming requests.

Alternatively, you can [use an OpenID integration](#openid-connect).

> Having trouble with any of the steps above? Feel free to reach out to us at [@BotSupport](https://t.me/botsupport), making sure to include the hashtag #oidc in your message.

#### Setting up a bot

To use Telegram Login, you'll need a [**Telegram bot**](/bots/#how-do-i-create-a-bot) to represent your application.

We strongly recommend that the **profile picture** of the bot corresponds with your website's logo, and that the bot's **name** reflects that connection. Users will see a confirmation box similar to the one below when logging in:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/400780400680/1/LQAYyWKJXy0.260963.png/8fe2cdf47d8a182740" target="_blank"><img src="https://core.telegram.org/file/400780400680/1/LQAYyWKJXy0.260963.png/8fe2cdf47d8a182740" title="Login confirmation box"></a></div>

> Users are much more likely to authorize your app if the bot has a name and logo they recognize and expect. Official services can also [apply for verification](/verify/) from Telegram or [third parties](/verify/#third-party-verification) for greater transparency.

#### Registering your Allowed URLs

Once you have chosen a bot, open the [**@BotFather**](https://t.me/botfather?startapp) mini app and navigate to **Bot Settings > Web Login**.

Add all **Allowed URLs** for your application. This includes the website origins where you embed the login widget (e.g., `https://example.com`) and specific redirect URIs for your OIDC flow (e.g., `https://example.com/auth/callback`). You can register multiple URLs to support different domains or endpoints.

In this section, [@BotFather](https://t.me/botfather) will also display your **Client ID** and **Client Secret**. Save these values securely – you will need them to configure your OIDC client.

> **Important:** For security reasons, Telegram will only process logins or redirect users using your pre-registered URLs.

### Using the Telegram Login library

Use the tool below to customize your button and get the HTML snippet for your website.

.tg-auth-button { margin: 24px auto; }

Client ID:

Button Style:

 Rounded Outlined  Icon  Shine

Scopes:

 Request Direct Messages Request Phone Number

Embed Code:

Alternatively, you can interact with the library using the following JS methods:

#### Available Methods

<table class="table"><thead><tr><th scope="col" align="left">Method</th><th scope="col" align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>Telegram.Login.init(InitOptions, callback)</code></td><td align="left">Initialize the SDK and register an auth callback.</td></tr><tr><td align="left"><code>Telegram.Login.open([callback])</code></td><td align="left">Open the login popup using the initialized options.</td></tr><tr><td align="left"><code>Telegram.Login.auth(InitOptions, callback)</code></td><td align="left">Open the login popup with explicit options.</td></tr></tbody></table>

#### InitOptions

<table class="table"><thead><tr><th scope="col" align="left">Option</th><th scope="col" align="left">Type</th><th scope="col" align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>client_id</code></td><td align="left">number</td><td align="left">Your bot’s Client ID provided by <a href="https://t.me/botfather">@BotFather</a>.</td></tr><tr><td align="left"><code>request_access</code></td><td align="left">array(<code>phone</code> | <code>write</code>)</td><td align="left"><em>Optional.</em> Ask for a phone number / permission to message the user.</td></tr><tr><td align="left"><code>lang</code></td><td align="left">string</td><td align="left"><em>Optional.</em> UI language code (e.g., <code>en</code>, <code>es</code>).</td></tr><tr><td align="left"><code>nonce</code></td><td align="left">string</td><td align="left"><em>Optional.</em> Server-generated random string to be included in the resulting <code>id_token</code> to prevent replay attacks.</td></tr></tbody></table>

#### Callback Data

When the login flow completes, the callback may receive either a success payload (user data) or an error.

<table class="table"><thead><tr><th scope="col" align="left">Field</th><th scope="col" align="left">Type</th><th scope="col" align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>id_token</code></td><td align="left">string</td><td align="left">An OIDC JWT token containing user claims. <strong>Important: <a href="#validating-id-tokens">Verify the validity of ID token server-side</a></strong></td></tr><tr><td align="left"><code>user</code></td><td align="left"><a href="#user-data-structure">UserData</a></td><td align="left">Decoded <code>id_token</code>, containing the requested user info.</td></tr><tr><td align="left"><code>error</code></td><td align="left">string</td><td align="left">Error description.</td></tr></tbody></table>

> **Important:** The `telegram-login.js` library relies on communicating with a popup window to complete the authentication flow. If your website serves the `Cross-Origin-Opener-Policy: same-origin` HTTP header, this cross-window communication will be blocked and the login process will fail. To ensure the JavaScript library functions correctly, you must either remove this header or use a more permissive policy, such as `Cross-Origin-Opener-Policy: same-origin-allow-popups`.

* * *

### Native SDKs

If you are building a native mobile application, Telegram provides dedicated SDKs to streamline the login experience on iOS and Android devices, bypassing the need for web-based views.

-   **[Telegram Login for iOS](https://github.com/TelegramMessenger/telegram-login-ios)**  
    A native Swift package for integrating Telegram authentication into your iOS or iPadOS applications.
    
-   **[Telegram Login for Android](https://github.com/TelegramMessenger/telegram-login-android)**  
    A native Android library allowing you to seamlessly authenticate users within your Kotlin or Java Android applications.
    

> **Note:** Complete setup guides, installation instructions, and usage examples for each platform can be found directly in the README files of their respective GitHub repositories.

* * *

### OpenID Connect

If you are using an OIDC-compatible library or identity broker, you can use the standard configuration values below.

**Discovery Document URL**

```
https://oauth.telegram.org/.well-known/openid-configuration
```

**Client Configuration**

<table class="table"><thead><tr><th scope="col" align="left">Parameter</th><th scope="col" align="left">Value</th></tr></thead><tbody><tr><td align="left"><strong>Client ID</strong></td><td align="left">The Client ID provided by BotFather</td></tr><tr><td align="left"><strong>Client Secret</strong></td><td align="left">The Client Secret provided by BotFather</td></tr><tr><td align="left"><strong>Response Type</strong></td><td align="left"><code>code</code></td></tr><tr><td align="left"><strong>PKCE</strong></td><td align="left">Recommended (S256)</td></tr></tbody></table>

#### Available Scopes

You can request specific permissions when initiating authorization. The `openid` scope is required.

<table class="table"><thead><tr><th scope="col" align="left">Scope</th><th scope="col" align="left">Description</th><th scope="col" align="left">Claims Returned</th></tr></thead><tbody><tr><td align="left"><code>openid</code></td><td align="left"><strong>Required.</strong> Returns the user's unique identifier and auth timestamp.</td><td align="left"><code>sub</code>, <code>iss</code>, <code>iat</code>, <code>exp</code></td></tr><tr><td align="left"><code>profile</code></td><td align="left">User's basic info: name, username, and profile photo URL.</td><td align="left"><code>name</code>, <code>preferred_username</code>, <code>picture</code></td></tr><tr><td align="left"><code>phone</code></td><td align="left">User's verified <strong>phone number</strong>. Requires user consent.</td><td align="left"><code>phone_number</code></td></tr><tr><td align="left"><code>telegram:bot_access</code></td><td align="left">Allows your bot to send direct messages to the user after login.</td><td align="left">—</td></tr></tbody></table>

#### User Data Structure

All requested user information is returned directly in the **ID token**. After successful authentication, the decoded ID token will look like this:

```
{
  "iss": "https://oauth.telegram.org",
  "aud": "123456789",
  "sub": "1234123412341234123",
  "iat": 1700000000,
  "exp": 1700003600,
  "id": 987654321,
  "name": "John Doe",
  "preferred_username": "johndoe",
  "picture": "https://cdn4.telesco.pe/file...",
  "phone_number": "971577777777"
}
```

> Note that Telegram does not currently provide a separate `UserInfo` endpoint. However, some OIDC libraries may expect this endpoint by default, and you may need to **configure them** to skip a separate `userinfo` request.

* * *

### Manual Implementation

If you are integrating the OIDC flow manually without a library, use the endpoints and flow details below.

#### Endpoints

-   **Authorization:** `https://oauth.telegram.org/auth`
-   **Token:** `https://oauth.telegram.org/token`
-   **Keys (JWKS):** `https://oauth.telegram.org/.well-known/jwks.json`

#### Initiate Authorization

Direct the user to the authorization endpoint with the following parameters. This URL must be opened in the user's browser.

```
GET https://oauth.telegram.org/auth?
    client_id=<YOUR_BOT_ID>&
    redirect_uri=<YOUR_CALLBACK_URL>&
    response_type=code&
    scope=openid%20profile%20phone&
    state=<RANDOM_STRING>&
    code_challenge=<PKCE_CHALLENGE>&
    code_challenge_method=S256
```

-   **client\_id**: Client ID provided by BotFather.
-   **state**: A random string generated by your backend to prevent CSRF.
-   **code\_challenge**: Base64URL-encoded SHA256 hash of your code verifier (PKCE).

#### Exchange Code for Tokens

If the user approves the login, they will be redirected to your `redirect_uri` with a `code` parameter. Exchange this code for an access token and ID token by making a server-side POST request.

This request requires **Basic Authorization** using your Client ID and Client Secret (`base64(client_id:client_secret)`).

```
POST https://oauth.telegram.org/token
Content-Type: application/x-www-form-urlencoded
Authorization: Basic <BASE64_CREDENTIALS>

grant_type=authorization_code&
code=<AUTHORIZATION_CODE>&
redirect_uri=<YOUR_CALLBACK_URL>&
client_id=<YOUR_BOT_ID>&
code_verifier=<PKCE_VERIFIER>
```

**Response:**

```
{
  "access_token": "...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "id_token": "eyJhbGciOiJ..."
}
```

#### Validating ID Tokens

The `id_token` is a signed JSON Web Token (JWT). Before trusting the user data inside, you **must** validate the signature:

1.  **Fetch Keys:** specific public keys from the [JWKS endpoint](https://oauth.telegram.org/.well-known/jwks.json).
2.  **Verify Signature:** Ensure the token was signed by Telegram.
3.  **Verify Claims:** Check that `iss` is `https://oauth.telegram.org`, `aud` matches your Bot ID, and the token has not expired (`exp`).

* * *

> Once you have established a connection with the user, you can optionally use your **linked bot** to provide services **directly in the chat interface** via the [Bot API](/bots/), or seamlessly offer your **entire web application inside Telegram** using [Mini Apps](/bots/webapps/).
