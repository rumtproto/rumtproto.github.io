---
title: "Payments for Bots"
original: "https://telegram.org/blog/payments"
section: blog
date: 2017-05-18
description: "Imagine a world where you can order pizza, pay for a pair of shoes, hire a cab, or refill your subway pass — all in a few button taps on Telegram."
crumbs: []
layout: layout.njk
---

# Payments for Bots

<img src="https://telegram.org/file/811140515/2/CyGl7b4gdEY.21591.gif/3df69327cb536ec5cd" class="blog_side_image">

> **UPD 2024**: Bots can now sell **digital goods and services**. For more details, see [Telegram Stars](/blog/telegram-stars/) and the updated Payments Documentation for [digital](/bots/payments-stars/) and [physical](/bots/payments/) products.
> 
> **UPD 2021:** For up-to-date information about **Payments on Telegram**, see [**Payments 2.0**](/blog/payments-2-0-scheduled-voice-chats/) and the [Payments Documentation](/bots/payments/).

[<img src="https://telegram.org/file/811140819/2/35lGXQhh0BE.186683/c2d4dcc9207478f815" title="Intoducing Bot Payments!">](https://telegram.org/file/811140819/2/35lGXQhh0BE.186683/c2d4dcc9207478f815)

Imagine a world where you can order pizza, pay for a pair of shoes, hire a cab, or refill your subway pass — all in a few button taps on Telegram.

To make this world possible, we are launching [**Bot Payments**](/bots/payments/) today. Bot developers can now **accept payments** from their users around the world, just like that:

  

If you have Telegram 4.0 (or newer) installed, you can order goods or services from bots that offer them. These bots may now add a **Pay button** to their messages. When you tap **Pay**, you'll be asked to fill in your credit card and shipping information and confirm the payment. Then you get what you paid for. Voila!

If your account is protected by [2-Step Verification](/blog/sessions-and-2-step-verification/#two-step-verification), you can **save** your card for future purchases. If you do that, ordering stuff from bots will only take two taps. Bot Payments also support Apple Pay for a completely frictionless experience.

### Check It Out Now

Try our demo [**@ShopBot**](https://t.me/shopbot) to get a taste of what's coming. (Note: Our demo bot thinks it sells time machines, but they're **not** a part of what's coming. Sadly.) If you're looking to test a real payment with actual money, stop by our [**@TelegramDonate**](https://t.me/telegramdonate) bot.

Telegram is an open platform, so bot developers can implement the necessary APIs and accept payments from users starting right now, without lengthy approval dramas. If you’re a **bot developer**, check out [the docs](/bots/payments/) immediately!

### Behind the Scenes

[<img src="https://telegram.org/file/811140301/1/nPcRt5wzlCI.61948/b06d322c70311a6079" title="Payments API. Click for hi-res picture">](https://telegram.org/file/811140227/2/ZTXUngAbELM.193805/ba6aa233d1d4206207)

At launch, most of the payments were handled by [**Stripe**](https://stripe.com/), but Telegram Bot Payments are a **platform for payment providers** all over the world. When accepting a payment from a user, the bot developer can choose between all available payment providers, selecting the one already used by the buyer or the one with the lowest commission.

> **UPD, 14.06.2017:** Bot developers can now process payments from more than **200** countries via the global payment provider [Paymentwall](https://www.paymentwall.com).
> 
> **UPD, 02.06.2017:** [Yandex.Money](https://money.yandex.ru/new) and [Payme](https://payme.uz/) are now also available as payment providers.
> 
> **UPD, 01.09.2017:** [Rave by Flutterwave](https://ravepay.co/) is now available, which is especially helpful for developers in Nigeria, Kenya, Ghana, South Africa, and Uganda.

This is just the beginning. In the next few days, payments will become available to developers in India via [Razorpay](http://razorpay.com), in Russia [Qiwi](https://qiwi.ru) will be joining the club a little later.

Follow our [**@BotNews**](https://t.me/botnews) channel to be the first to know about new providers joining.

If you’re a payment provider (especially in a developing country), [click here](/bots/payments/#how-do-i-join-as-a-payment-provider) to learn how to get on board.

### Just Passing Through

Telegram acts as a messenger (pun intended) between the paying user, the bot developer, and their chosen payment system. The user sends their credit card details directly to the payment system. Then the payment system's response and the shipping details entered by the user are passed to the bot developer so that they can process the order.

Due to this structure, it is impossible for Telegram to handle complaints or cashbacks – any disputed payments are the responsibility of the bot developers, payment providers, and banks that participated in the exchange.

Since Telegram doesn't process the payments, we don't store and can't access any sensitive data. We also don't take any commission from payments and don't profit from these transactions.

Instead, we just do what every sheriff has to do with strangers passing through their turf: shoot the bad bots and award the good ones with a badge. We’re sure there’ll be plenty of good ones.

### If You Are…

-   **…one of our lovely users**, wait and see what wonders Telegram bot developers will soon bring your way using this new platform. Meanwhile, try our demo [@ShopBot](https://t.me/shopbot) to get an idea of what's coming or try spending some real money via [@TelegramDonate](https://t.me/telegramdonate).
-   **…a bot developer**, check out our [Introduction to Payments](/bots/payments/) and [Payments API](/bots/api/#payments) to see what you can build.
-   **…a payments provider**, [learn how to get on board](/bots/payments/#how-do-i-join-as-a-payment-provider).

And if you're none of the above for some weird reason, **be a user**, [do the right thing](/apps/). Happy shopping, everyone!

  

_May 18, 2017  
The Telegram Team_
