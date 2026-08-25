---
title: "Bot Payments API for Digital Goods and Services"
original: "https://core.telegram.org/bots/payments-stars"
section: bots
description: "Telegram Bot Payments are a free and open platform that allows sellers to accept payments for goods and services from Telegram users. This page covers payments for digital goods…"
crumbs: []
layout: layout.njk
---

# Bot Payments API for Digital Goods and Services

[<img src="https://core.telegram.org/file/400780400874/5/9xyVKoKO9-Q.259969/3c41e95fcd95416740" srcset="/file/400780400951/5/_5SWZUmwqrk.284290.webp/c3d85b6123302da2c1, 1200w" title="" alt="Telegram Stars: Pay for Digital Goods and More">](https://core.telegram.org/file/400780400275/2/HQirxDLbG6U.97714.webp/1111a1121d9b762448)

**Telegram Bot Payments** are a free and open platform that allows sellers to accept payments for goods and services from Telegram users. This page covers payments for **digital goods and services** – if you’re interested in selling **physical goods and services**, please check out our [dedicated page](/bots/payments/).

> **Note:** This article is intended for bot developers and store owners. If you're looking for a general overview of Telegram Payments, check out the [Telegram blog](/blog/payments-2-0-scheduled-voice-chats/#payments-2-0).

If you are new to Telegram bots and would like to learn how to create and set up a bot, please consult our [**Introduction to Bots**](/bots/) and [**Bot FAQ**](/bots/faq/).

### Overview

Payments are seamlessly integrated into Telegram, allowing you to sell digital goods and services in exchange for [Telegram Stars](/blog/telegram-stars/), an in-app virtual item that you can later convert to a reward.

With the Payments API, you’ll be able to:

-   Send invoices to **any chat**, including to groups and channels.
-   Create invoices that can be **forwarded** and used by **multiple buyers** to order things.
-   Use [inline mode](/bots/inline/) to help users show your goods and services to their friends and communities.
-   Accept payments from users on mobile or **desktop apps**.
-   Try [@DurgerKingBot](https://t.me/DurgerKingBot) to create a test invoice – or start a message with `@DurgerKingBot ...` in any chat for an **inline invoice**.
-   Check out [Demo Shop](https://t.me/teststore) for an example of a [Telegram Channel](/tour/channels/) used as **virtual storefront**.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://core.telegram.org/file/400780400936/3/oM0NSZq-c-U.70843/aabc7c9f3196368434" style="max-width: 600px;" title="" alt="Telegram Stars"><source src="https://core.telegram.org/file/400780400194/6/alSNP8Zj18E.7354629.mp4/96b4d26b22e610c8bd" type="video/mp4"></video></div>

#### Star Pricing

Here is a table showing a breakdown of how much a user pays to acquire certain amounts of Stars, and the net proceeds received by the developer. Note that these amounts may vary from user to user due to VAT and other applicable fees that are outside of Telegram’s control.

<div class="blog_image_wrap blog_wide_image_wrap"><a href="https://core.telegram.org/file/400780400418/1/NMQCu-wgDpo.397006/5304141797eccc38c4" target="_blank"><img src="https://core.telegram.org/file/400780400418/1/NMQCu-wgDpo.397006/5304141797eccc38c4" title="" alt="" srcset="/file/400780400418/1/NMQCu-wgDpo.397006/5304141797eccc38c4 , 2x"></a></div>

#### How does this work?

You create a **bot** that offers **digital goods and services** to Telegram users. Merchant bots can send specially formatted **invoice messages** to users, groups or channels. If your bot supports [inline mode](/bots/inline/), users can also send invoices to other chats _via the bot_, including to 1-on-1 chats with other users.

Invoice messages feature a **photo** and **description** of the product along with a prominent **Pay** button. Tapping this button opens a special payment interface in the Telegram app.

Since your bot sells **digital** goods and services, all transactions must be carried out in Telegram Stars, with currency tag `XTR`. Users can acquire Stars from Telegram using standard Apple and Google in-app purchases or via [@PremiumBot](https://t.me/premiumbot) and then use them to buy digital goods and services from you.

The invoice interface for digital goods and services is seamless and **doesn’t require** users to enter any personal information, like their full name, shipping address or credit card details.

> [Detailed information](#the-payments-api) and [step-by-step instructions](#step-by-step-process) are available below.

* * *

### The Payments API

This section explores payments via Telegram's Bot API in more detail.

> This section is dedicated to the sale of **digital goods and services** – if you’re interested in selling **physical goods and services**, please check out our [dedicated page](/bots/payments/).

#### Creating a Telegram Bot

To start accepting payments, you need a **Telegram bot**. Use [@BotFather](https://t.me/botfather) to create a bot if you don't have one already. For the purposes of this document, we will assume you named your bot `@merchantbot`.

#### Implementing Payments

You will find the necessary methods for building your payment implementation in the [Payments Section of the Bot API Manual](/bots/api/#payments).

In short, you must:

-   Send an invoice via [sendInvoice](/bots/api/#sendinvoice) (`currency`: “XTR”)
-   Await an [Update](/bots/api/#update) with the field `pre_checkout_query`
-   Approve or cancel the order via [answerPreCheckoutQuery](/bots/api/#answerprecheckoutquery)
-   Await an [Update](/bots/api/#update) with the field `successful_payment`
-   Store the [SuccessfulPayment](/bots/api/#successfulpayment)’s `telegram_payment_charge_id` – it may be needed to issue a refund in the future
-   Deliver the goods and services purchased by the user

> You may find that some API methods for Payments request a `provider_token`. This parameter is only needed for sales of [physical goods and services](/bots/payments/#getting-a-token) – for digital ones, you can leave it empty.

#### Testing Payments

You can freely test payments in Telegram Stars by connecting your bot to Telegram’s dedicated test environment. To find out more about how you can access and use the test environment, please reference our [documentation](/bots/features/#testing-your-bot).

### Step-by-Step Process

> See [Bot API: Payments](/bots/api/#payments) for the complete list of available methods and objects. Be sure to provide the proper set of parameters to account for the type of goods you are selling, differentiating between digital and physical orders.

#### 1\. Create Invoice

The user contacts `@merchantbot` and requests to purchase something. The bot forms an invoice message with a description of the goods or service and amount to be paid (expressed in Telegram Stars). There are two ways of creating an invoice:

##### A. Bot Invoice

Use the [sendInvoice](/bots/api/#sendinvoice) method to generate an invoice and send it to a chat. You can pass an empty string as the _provider\_token_ parameter, since the invoice is for digital goods and services.

Invoice messages with a pay button can be sent to **chats of any type**: private chats with the user, groups, or channels. The resulting invoice message will look like this:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/464001285/4/UBRF1ViiEOU.106159/0bbcdcb7f5af77a782" target="_blank"><img src="https://core.telegram.org/file/464001285/4/UBRF1ViiEOU.106159/0bbcdcb7f5af77a782" title="Join button"></a><p>Bot Invoice</p></div>

> Remember to specify `XTR` in the `currency` field, since all sales of **digital goods and services** are carried out exclusively in Telegram Stars.

##### B. Inline Invoice

If `@merchantbot` supports [inline mode](/bots/inline/), you can use [inputInvoiceMessageContent](/bots/api/#inputinvoicemessagecontent) to allow users to share invoices for your goods and services to their one-on-one chats with friends, or to their groups and channels. These invoices will have a **Pay button** that can be used multiple times.

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/464001162/3/C2wdLOXaMA0.97425/32091afe52ef0e59f2" target="_blank"><img src="https://core.telegram.org/file/464001162/3/C2wdLOXaMA0.97425/32091afe52ef0e59f2" title="Join button"></a><p>Inline Invoice</p></div>

#### 2\. Choose Forwarding Behavior

There are two ways for handling **forwarded copies** of your invoices, controlled by the parameter _start\_parameter_ in the [sendInvoice](/bots/api/#sendinvoice) method.

-   **A. Multi-chat invoice.** Forwarded copies show a **Pay button**, which multiple users can press and attempt to pay for the goods or services. [Inline invoices](#b-inline-invoice) are always multi-chat invoices.
-   **B. Single-chat invoice.** Invoice can only be paid from the chat to which it was sent, _forwarded copies_ show a **URL button** with a deep link to the bot. The deep link can be used to generate a similar invoice in the chat with the bot, to show an error message, or for other purposes. [More info on Deep Linking »](/bots/)

If a _single-chat invoice_ is sent to the chat with `@merchantbot`, it can only be paid **once**. If a _single-chat invoice_ is sent to any other chat, it can be paid **many times** by many users.

> To get a better understanding of how this works, try toggling the _“Pay from Forwards”_ parameter when creating invoices with our demo [@ShopBot](https://t.me/shopbot).

Regardless of whether or not the **Pay** button is available in an invoice, the merchant bot always has the power to decide whether or not to accept new payments for a particular invoice.

#### 3\. Pre-Checkout

The user purchases Stars from Telegram (if necessary), then presses the pay button. At this moment the Bot API sends an [Update](/bots/api/#update) with the field _pre\_checkout\_query_ that contains all the available information about the order to the bot.

Your bot must reply using [answerPrecheckoutQuery](/bots/api/#answerprecheckoutquery) within **10 seconds** after receiving this update or the transaction is canceled.

The bot may return an error if it can't process the order for any reason. We highly recommend specifying a reason for failure to complete the order in human readable form (e.g. _"Sorry, we're all out of rubber duck digital posters! Would you be interested in a cast iron bear digital poster instead?"_). Telegram will display this reason to the user.

> **Warning:** It is critical to make sure your bot **only** accepts multiple payments when the order can be processed correctly. This is especially important if you are using [multi-chat](#2-choose-forwarding-behavior), [inline](#2-choose-forwarding-behavior) or [single-chat, multi-use](#2-choose-forwarding-behavior) invoices.

#### 4\. Checkout

If the bot confirms the order and the payment is successful, the API will send a receipt message of the type [_successful\_payment_](/bots/api/#message) from the user. Once your bot receives this message, it should proceed with sending the digital goods or services purchased by the user.

> **Warning:** You **must** always check that you received a [_successful\_payment_](/bots/api/#message) update before delivering the goods or services purchased by the user – simply answering a _pre\_checkout\_query_ does not guarantee a successful order or payment.

If the invoice message was sent in the chat with `@merchantbot`, it becomes a Receipt in the UI for the user – they can open this receipt at any time and see all the details of the transaction:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/464001648/1/1-P1Pb7TusA.105628/b9cb2cf4c7427302c0" target="_blank"><img src="https://core.telegram.org/file/464001648/1/1-P1Pb7TusA.105628/b9cb2cf4c7427302c0" title="Receipt"></a><p>Receipt</p></div>

If the message was sent to any other chat, the **Pay button** remains and can be used again. It is up to the merchant bot whether to actually accept multiple payments.

### Going Live

Once you've tested everything and confirmed that your payments implementation works, you're ready to go live – to do so, simply switch to the production environment.

Before your merchant bot goes into live mode, please ensure the following:

#### Live Checklist

-   We highly recommend turning on [2-step verification](/faq/#q-how-does-2-step-verification-work) for the Telegram account that controls your bot.
-   You as the bot owner have **full responsibility** in case any conflicts or disputes arise. You must be prepared to correctly process disputes and chargebacks.
-   To prevent any misunderstandings and possible legal issues, make sure your bot can respond to a /terms command (or offers a similarly easy way of accessing your Terms and Conditions). Your Terms and Conditions should be written in a clear way and easy to understand for your users. The users must confirm that they have read and agree to your terms before they make the purchase.
-   Your bot must provide support for its customers, either by responding to a /support command or by some other clearly communicated means. Users must have a clear way of contacting you about their purchases and you must process their support requests in a timely fashion. You must notify your users that Telegram support or [bot support](https://t.me/botsupport) will not be able to help them with purchases made via your bot.
-   Verify your server hardware and software are stable. Use backups to make sure that you don't lose data about your users' payments.
-   Make sure that you have read, understood and agreed to the Telegram [Terms of Service](/tos/) and, by extension, to the Telegram [Bot Platform Developer Terms of Service](/tos/bot-developers/).

* * *

### FAQ

#### Q: Can I use a different currency or payment provider?

Payments for digital goods and services must be carried out exclusively in Telegram Stars. App stores like the Play Store for Android and the App Store for iOS have [specific rules](https://developer.apple.com/app-store/review/guidelines/#third-party-software) for developers regarding the sale of digital goods and services. Due to these rules, Telegram cannot display your bot or mini-app to mobile users if you attempt to sell digital goods and services via other currencies or through third-party payment providers.

> If you’re selling physical goods or services, you may use different currencies or payment providers. Please check out our [dedicated document](/bots/payments/) to learn more.

#### Q: I run my own website to process sales, does this mean I don’t have to use Telegram Stars?

To remain in compliance with Google’s [Payment Policies](https://support.google.com/googleplay/android-developer/answer/9858738) 1, 2 and 4, along with Apple’s [Review Guidelines](https://developer.apple.com/app-store/review/guidelines) 3.1.1, 3.1.1(a) and 3.1.3(b), your bot or mini app must use Telegram Stars for the sale of digital goods and services inside Telegram apps, regardless of any other web portals, apps, services or payment providers you may have set up outside the Telegram ecosystem.

#### Q: Can I accept payment in cryptocurrency instead of Telegram Stars?

No. All payments via bots and mini apps for digital goods and services inside Telegram apps must exclusively use Telegram Stars, in order to comply with the guidelines of the App Store and Play Store.

> For more details on what terms regulate your engagement with Telegram Stars, please reference [Section 6.2. Digital Goods and Services](/tos/bot-developers/#6-2-digital-goods-and-services) of the Telegram Bot Platform Developer Terms of Service.

#### Q: Do I need a bot to accept payments?

Yes. If you are not a developer, you will need to either hire someone to make a bot for you (recommended), or use a bot created by a third-party company. We advise extreme caution when using services of bots that process payments for you – Telegram doesn't maintain any such bots and doesn't endorse any of the third-party bots offering these services.

#### Q: How are disputes handled?

You are solely responsible for **processing** and **rectifying** legitimate user disputes for digital goods and services sold by your bots or mini apps. Your bots and mini apps must be able to respond to the command `/paysupport` and process user requests regarding payment issues , and you must provide customer support in a timely fashion.

The Telegram Bot API also allows you to easily and independently [refund purchases](/bots/api/#refundstarpayment) that were made on your bot or mini app with Telegram Stars.

> For more details on customer disputes, please reference [Section 6.2.1. Payment Disputes for Digital Goods and Services](/tos/bot-developers/#6-2-1-payment-disputes-for-digital-goods-and-services) of the Telegram Bot Platform Developer Terms of Service.

#### Q: How can I issue refunds?

Refunds for **digital goods and services** can be issued via the [refundStarPayment](/bots/api/#refundstarpayment) method on the Telegram Bot API.

#### Q: What can I do with Telegram Stars?

Stars can be used to [place Telegram Ads](/tos/bot-developers/#6-2-3-advertising-with-stars) for your TPA or to [accept a reward](/tos/bot-developers/#6-2-4-rewards-for-stars) for the monetary value that Telegram assigns to each Star.

> For more details on what terms regulate your engagement with Telegram Stars, please reference [Section 6.2. Digital Goods and Services](/tos/bot-developers/#6-2-digital-goods-and-services) of the Telegram Bot Platform Developer Terms of Service.

#### Q: How do I support payments in my third-party app that uses the Telegram API?

You are welcome to study the [MTProto payment documentation](/api/payments/).
