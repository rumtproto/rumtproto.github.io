---
title: "Apple Privacy Labels Explained"
original: "https://telegram.org/apple_privacy"
section: other
description: "Telegram has several fundamental principles when it comes to collecting and processing private data:"
crumbs: []
layout: layout.njk
---

# Apple Privacy Labels Explained

Telegram has several fundamental principles when it comes to collecting and processing private data:

-   We don't use your data to track you or show you ads.
-   We don't use your data to help others track you or show you ads.
-   We only store the data that Telegram needs to function as a secure and feature-rich messaging service, for as long as you need it.

This page explains Apple's privacy labels shown for Telegram iOS and how they can be misleading.

> Note that Telegram apps, including [Telegram for iOS](https://github.com/TelegramMessenger/Telegram-iOS), are [open source](/apps/#source-code). Independent researchers can **confirm** that the app is not doing anything behind your back, and [**verify**](/reproducible-builds/#reproducible-builds-for-ios) that Telegram downloaded from the App Store is built from the exact same code that was published.

-   [Purchases](#purchases)
-   [Financial Info](#financial-info)
-   [Location](#location)
-   [Contact Info](#contact-info)
-   [Contacts](#contacts)
-   [User Content](#user-content)
-   [Identifiers](#identifiers)

* * *

#### Purchases

_Purchase History_. **This label may mislead you.**  
If you decide to use a Telegram bot to [buy something](/blog/payments-2-0-scheduled-voice-chats/#payments-2-0), the bot may send a confirmation message or receipt to your chat with the bot. Like other messages in cloud chats, Telegram will store that message to display it to you on all your devices.

[More in the Privacy Policy »](/privacy/#3-3-your-messages)

* * *

#### Financial Info

_Payment info._ **This label is completely irrelevant.**  
When you use a Telegram bot to [buy something](/blog/payments-2-0-scheduled-voice-chats/#payments-2-0), you can enter your credit card details and may opt to store them _with the payment provider_. Credit card information is never shared with Telegram.

[More in the Privacy Policy »](/privacy/#7-1-payment-information)

> Any third-party researcher can confirm this by checking Telegram's open source code ([1](https://github.com/TelegramMessenger/Telegram-iOS/blob/master/submodules/BotPaymentsUI/Sources/BotCheckoutNativeCardEntryControllerNode.swift#L251) and [2](https://github.com/TelegramMessenger/Telegram-iOS/blob/master/submodules/BotPaymentsUI/Sources/BotCheckoutNativeCardEntryControllerNode.swift#L298)).

* * *

#### Location

_Precise Location._ **This label may mislead you.**  
If you share your [Live Location](/blog/live-locations/) in any chat or turn on _’Make Myself Visible’_ in [People Nearby](/blog/new-profiles-people-nearby/#people-nearby-2-0), Telegram will use your data to display your location to those users with whom you are sharing it – only for as long as you keep the features enabled. By default, you don't share your location with anyone.

[More in the Privacy Policy »](/privacy/#3-5-location-data)

* * *

#### Contact Info

_Name_, _Phone Number_

Telegram uses phone numbers as unique identifiers so that it is easy for you to switch from SMS and other messaging apps and retain your social graph. Telegram does not verify display names and users are free to choose any display name they like.

[More in the Privacy Policy »](/privacy/#3-4-phone-number-and-contacts)

* * *

#### Contacts

Telegram stores your up-to-date contacts in order to notify you as soon as one of your contacts signs up for Telegram and to properly display names in notifications. We only need the number and name (first and last) for this to work and store no other data about your contacts.

Our automatic algorithms can also use anonymized sets of phone numbers to calculate the average number of potential contacts an unregistered phone number may have on Telegram. When you open the 'Invite friends' interface, we display the resulting statistics next to your contacts to give you an idea of who could benefit most from joining Telegram.

Users are not required to share their contacts with Telegram, and can delete their synced contacts at any time.

[More in the Privacy Policy »](/privacy/#3-4-phone-number-and-contacts)

* * *

#### User Content

_Emails or Text Messages, Photos or Videos, Audio Data_

Telegram is a cloud service. We store messages, photos, videos and documents from your **cloud chats** on our servers so that you can access your data from any of your devices anytime without having to rely on third-party backups. All data is stored heavily encrypted and the encryption keys in each case are stored in several other data centers in different jurisdictions. This way local engineers or physical intruders cannot get access to user data.

[More in the Privacy Policy »](/privacy/#3-3-your-messages)

_Gameplay Content._ **This label may mislead you.**  
If you use a bot like [@gamebot](https://t.me/gamebot) to play a game, it will publish your **high scores** as a message in the chat. Like other messages in cloud chats, Telegram will store that message to display it to you on all your devices.

* * *

#### Identifiers

_User ID_  
Like any other app where users have accounts (as opposed to, say, a weather or stocks app that just shows you info that is not connected to you), Telegram needs an “identifier” for each user to know which chats they will see when they log in. Like in other messaging apps, this identifier is linked to your phone number, so you easily switch from SMS and other messaging apps and retain your social graph.

We also support optional [usernames](/faq/#usernames-and-t-me) that help users get in touch without sharing phone numbers with each other.
