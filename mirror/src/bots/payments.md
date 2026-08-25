---
title: "Bot Payments API"
original: "https://core.telegram.org/bots/payments"
section: bots
description: "Telegram Bot Payments are a free and open platform that allows sellers to accept payments for goods and services from Telegram users. Telegram doesn't collect payment information…"
crumbs: []
layout: layout.njk
---

# Bot Payments API

[<img src="https://core.telegram.org/file/811140095/1/lfTvDVqVS8M.43169/1a191248e6cf027581" title="Payments API. Click for hi-res picture">](https://core.telegram.org/file/811140227/2/ZTXUngAbELM.193805/ba6aa233d1d4206207)

**Telegram Bot Payments** are a free and open platform that allows sellers to accept payments for goods and services from Telegram users. Telegram doesn't collect payment information and takes **no commission**. This page covers payments for **physical goods and services** – if you’re interested in selling **digital goods and services**, please check out our [dedicated page](/bots/payments-stars/).

> **Note:** This article is intended for bot developers and store owners. If you're looking for a general overview of Telegram Payments for physical goods and services, check out the [Telegram blog](/blog/payments-2-0-scheduled-voice-chats/#payments-2-0).

If you are new to Telegram bots and would like to learn how to create and set up a bot, please consult our [**Introduction to Bots**](/bots/) and [**Bot FAQ**](/bots/faq/).

### Payments for Physical Products

Payments for physical goods and services were first added to Telegram in [2017](/evolution/#may-2017) and allow bots to:

-   Accept payments from over **200 countries** using more than 20 providers.
-   Send invoices to **any chat**, including groups and channels.
-   Receive payments from users on mobile or **desktop apps**.
-   Try [@ShopBot](https://t.me/shopbot) to create a test invoice – or start a message with `@ShopBot ...` in any chat for an **inline invoice**.
-   Check out [Demo Shop](https://t.me/teststore) for an example of a [Telegram Channel](/tour/channels/) used as **virtual storefront**.

<div class="blog_video_player_wrap" style="max-width: 400px; margin: 20px auto 20px;"><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://core.telegram.org/file/464001377/1/0o3vSvY22g8.123356/deb4ed6951d780f7b7" style="max-width: 400px;" title="If your pizza place can't deliver a clone army, you're buying pizza from the wrong shop." alt="Video: Ordering a pizza through a Telegram channel"><source src="https://core.telegram.org/file/464001705/2/Hg-klQnZ_n4.4889245.mp4/d324511ffdab7b4668" type="video/mp4"></video></div>

> Check out [@ShopBot](https://t.me/shopbot) for an example of a virtual storefront – then use our dedicated guides for [digital](/bots/payments-stars/) and [physical](/bots/payments/) products to build your own.

#### How does this work?

You create a **bot** that offers goods and services to Telegram users. Merchant bots can send specially formatted **invoice messages** to users, groups or channels. If your bot supports [inline mode](/bots/inline/), users can also send invoices to other chats _via the bot_, including to one-on-one chats with other users.

<div class="blog_video_player_wrap" style="max-width: 400px; margin: 20px auto 20px;"><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://core.telegram.org/file/464001361/2/0tUACjLHgog.102443/ba08e6374676fd1918" style="max-width: 400px;" alt="Video: Paying for goods via an inline invoice"><source src="https://core.telegram.org/file/464001302/1/H6KwJFdtIRk.4794843.mp4/e8b988bdd940e7a952" type="video/mp4"></video></div>

Invoice messages feature a **photo** and **description** of the product along with a prominent **Pay** button. Tapping this button opens a special payment interface in the Telegram app. In this interface, users can choose a **tip amount** (if allowed by the merchant) and enter additional details like shipping info, phone number, or email address.

The bot can offer several shipping options for physical goods based on the delivery address. When ready, users enter their credit card info or choose a saved card — and pay for the product. Telegram also supports _Apple Pay_ and _Google Pay_. Once the transaction is done, the merchant bot can send a **receipt message** with payment details, shipping and delivery information.

> [Detailed information](#the-payments-api) and [step-by-step instructions](#step-by-step-process) are available below.

#### Payments Through Third-Party Providers

Telegram does **not** process payments from users and instead allows developers to integrate directly with different third-party **payment providers** around the world. It is the payment providers that handle and store all sensitive information, like credit card details. Neither Telegram nor the bot developers have access to it.

If you work for a company that provides services similar to standalone accounts in [Stripe Connect](https://stripe.com/connect), please let us know via [@BotSupport](https://t.me/botsupport) (include the hashtag `#paymentsprovider` in your message).

* * *

### The Payments API

This section explores payments via Telegram's Bot API in more detail.

#### Connecting Payments

To start accepting payments, you need a **Telegram bot**. Use [BotFather](https://t.me/botfather) to create a bot if you don't have one already.

Now you have a merchant bot that can offer goods or services to Telegram users. Let's call it `@merchantbot` in this document.

#### Getting a Token

-   Use the `/mybots` command in the chat with [BotFather](https://t.me/botfather) and choose the `@merchantbot` that will be offering goods or services.
-   Go to _Bot Settings > Payments_.
-   Choose a provider, and you will be redirected to the relevant bot.
-   Enter the required details so that the payments provider is connected successfully, go back to the chat with Botfather.
-   The message will now show available providers. Each will have a name, a **token**, and the date the provider was connected.
-   You will use the **token** when working with the Bot API.

#### Implementing Payments

You will find the necessary methods for building your payment implementation in the [Payments Section of the Bot API Manual](/bots/api/#payments).

#### Testing Payments: the 'Stripe TEST MODE' Provider

While you're still developing and testing payments for your bot, use the “Stripe TEST MODE” provider. When in this mode, you can make payments without actually billing any accounts. Real cards can't be used in test mode, but you can use test cards like `4242 4242 4242 4242` ([full list here](https://stripe.com/docs/testing#cards)). You can switch between test mode and live mode as many times as you want, but please see the [live checklist](#going-live) **before** you go live.

### Step-by-Step Process

> See [Bot API: Payments](/bots/api/#payments) for the complete list of available methods and objects.

#### 1\. Create Invoice

The user contacts `@merchantbot` and requests to purchase something. The bot forms an invoice message with a description of the goods or service, amount to be paid, and requested shipping info. There are two ways of creating an invoice:

##### A. Bot Invoice

Use the [sendInvoice](/bots/api/#sendinvoice) method to generate an invoice and send it to a chat. The _provider\_token_ parameter is where you put the _token_ value that you've [obtained earlier via Botfather](#getting-a-token). It is possible for one merchant bot to use several different tokens for different users or different goods and services.

Invoice messages with a pay button can be sent to **chats of any type**: private chats with the user, groups, or channels. The resulting invoice message will look like this:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/464001285/4/UBRF1ViiEOU.106159/0bbcdcb7f5af77a782" target="_blank"><img src="https://core.telegram.org/file/464001285/4/UBRF1ViiEOU.106159/0bbcdcb7f5af77a782" title="Join button"></a><p>Bot Invoice</p></div>

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

#### 3\. Tips (optional step)

If the _max\_tip\_amount_ parameter is set to above `0`, users can add a tip to their payment. You can use the parameter _suggested\_tip\_amounts_ to suggest particular amounts that you feel will be relevant for the invoice.

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/464001701/6/-BJZJqe9VeA.70226/75a192d58d76dc96c1" target="_blank"><img src="https://core.telegram.org/file/464001701/6/-BJZJqe9VeA.70226/75a192d58d76dc96c1" title="Join button"></a><p>Adding Tips</p></div>

#### 4\. Shipping info and other details (optional step)

The user specifies shipping information or other info requested by the bot. This could be the user's full name, an email address, a phone number in international format, or a full postal address for delivery.

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/464001896/2/9gTF8_aGQkE.45826/d5b11a999a40a1a6d9" target="_blank"><img src="https://core.telegram.org/file/464001896/2/9gTF8_aGQkE.45826/d5b11a999a40a1a6d9" title="Shipping Info"></a><p>Shipping Info</p></div>

#### 5\. Offer delivery options based on shipping address (optional step)

If a shipping address was requested and you included the parameter _is\_flexible_, the Bot API will send an [Update](/bots/api/#update) with a _shipping\_query_ field to the bot. The bot must respond using [answerShippingQuery](/bots/api/#answershippingquery) either with a list of possible delivery options and the relevant delivery prices, or with an error (for example, if delivery to the specified address is not possible).

> **Tip:** It is recommended that the merchant bot confirms availability of the goods/services at this step – to let the user know in case they are no longer available. This is especially important if you are using [multi-chat](#2-choose-forwarding-behavior), [inline](#2-choose-forwarding-behavior) or [single-chat, multi-use](#2-choose-forwarding-behavior) invoices.

#### 6\. Select delivery option (optional step)

The user selects a delivery option from the list (the overall amount to be paid may change at this point) and proceeds to checkout.

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/464001836/2/rwUQeqMOsnI.31142/b0cc9d885ccb78ab39" target="_blank"><img src="https://core.telegram.org/file/464001836/2/rwUQeqMOsnI.31142/b0cc9d885ccb78ab39" title="Choose Delivery Option"></a><p>Choose Delivery Option</p></div>

#### 7\. Pre-Checkout

The user enters their payment information and presses the final pay button. At this moment the Bot API sends an [Update](/bots/api/#update) with the field _pre\_checkout\_query_ to the bot that contains all the available information about the order. Your bot must reply using [answerPrecheckoutQuery](/bots/api/#answerprecheckoutquery) within **10 seconds** after receiving this update or the transaction is canceled.

The bot may return an error if it can't process the order for any reason. We highly recommend specifying a reason for failure to complete the order in human readable form (e.g. _"Sorry, we're all out of rubber ducks! Would you be interested in a cast iron bear instead?"_). Telegram will display this reason to the user.

> **Warning:** It is critical to make sure your bot **only** accepts multiple payments when the order can be processed correctly. This is especially important if you are using [multi-chat](#2-choose-forwarding-behavior), [inline](#2-choose-forwarding-behavior) or [single-chat, multi-use](#2-choose-forwarding-behavior) invoices.

#### 8\. Checkout

In case the bot confirms the order, Telegram requests the payment provider to complete the transaction. If the payment information was entered correctly and the payment goes through, the API will send a receipt message of the type [_successful\_payment_](/bots/api/#message) from the user. Once your bot receives this message, it should proceed with delivering the goods or services purchased by the user.

If the invoice message was sent in the chat with `@merchantbot`, it becomes a Receipt in the UI for the user — they can open this receipt at any time and see all the details of the transaction:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/464001648/1/1-P1Pb7TusA.105628/b9cb2cf4c7427302c0" target="_blank"><img src="https://core.telegram.org/file/464001648/1/1-P1Pb7TusA.105628/b9cb2cf4c7427302c0" title="Receipt"></a><p>Receipt</p></div>

If the message was sent to any other chat, the **Pay button** remains and can be used again. It is up to the merchant bot whether to actually accept multiple payments.

### Going Live

Once you've tested everything and confirmed that your payments implementation works, you're ready to switch to LIVE MODE. To do this, go to BotFather > /mybots > select `@merchantbot` > Bot Settings / Payments and enable Stripe LIVE MODE. You will get a token that has the string `:LIVE:` in the middle, e.g. `123:LIVE:XXXX`. Do not give this token to any third parties!

Before your merchant bot goes into live mode, please ensure the following:

#### Live Checklist

-   We highly recommend turning on [2-step verification](/faq/#q-how-does-2-step-verification-work) for the Telegram account that controls your bot.
-   You as the bot owner have **full responsibility** in case any conflicts or disputes arise. You must be prepared to correctly process disputes and chargebacks (in the case of Stripe, see [here](https://stripe.com/docs/disputes)).
-   To prevent any misunderstandings and possible legal issues, make sure your bot can respond to a /terms command (or offers a similarly easy way of accessing your Terms and Conditions). Your Terms and Conditions should be written in a clear way and easy to understand for your users. The users must confirm that they have read and agree to your terms before they make the purchase.
-   Your bot must provide support for its customers, either by responding to a /support command or by some other clearly communicated means. Users must have a clear way of contacting you about their purchases and you must process their support requests in a timely fashion. You must notify your users that Telegram support or [bot support](https://t.me/botsupport) will not able to help them with purchases made via your bot.
-   Make sure that your server hardware and software is stable. Use backups to make sure that you don't lose data about your users' payments.
-   Make sure that you have completed the live checklist for your selected **payments provider** as well as this one.

* * *

### FAQ

#### How do I join as a payment provider?

If you work for a company that provides services similar to standalone accounts in [Stripe Connect](https://stripe.com/connect), please let us know via [@BotSupport](https://t.me/botsupport) (kindly include the hashtag `#paymentsprovider` in your message).

#### How much do you charge?

Telegram does **not** charge any commission for using the Payments API. Note though, that most payment providers will have their own commissions. For example, Stripe in the US charges 2.9% + 30¢ per successful card charge (see the [Stripe website](https://stripe.com/pricing) for more details on pricing).

#### Do I need a bot to accept payments?

Yes. If you are not a developer, you will need to either hire someone to make a bot for you (recommended), or use a bot created by a third-party company. We advise extreme caution when using services of bots that process payments for you – Telegram doesn't maintain any such bots and doesn't endorse any of the third-party bots offering these services.

#### What can my bot sell?

Telegram does not impose any limits on what products or services your bot can offer. But please note that you **must** comply with the rules of the payments provider you choose in our system. E.g., Stripe has a special page for [prohibited businesses](https://stripe.com/us/prohibited-businesses) – you may want to consult that one before you start selling harvested organs.

**Special Note:** Due to Apple's limitations, bot developers are currently not allowed to accept payments for digital goods and virtual services from **iOS users**.

> **UPD 2024:** Thanks to [recent changes](https://developer.apple.com/news/?id=f1v8pyay) in the Apple Review Guidelines, users will soon be able to pay for digital goods and services with [Telegram Stars](https://t.me/botnews/90) on all platforms.

#### How are disputes handled?

Telegram acts as a messenger between the paying user, the bot developer, and their chosen payment system. The user sends their credit card details directly to the payment system. Then the payment system's response and the shipping details entered by the user are passed to the bot developer so that they can process the order.

Since Telegram doesn‘t process the payments, we don’t store and can‘t access any sensitive data. Due to this structure, it is impossible for Telegram to handle complaints or cashbacks – any disputed payments are the responsibility of the bot developers, payment providers, and banks that participated in the exchange.

> See also: [Telegram Privacy Policy](/privacy/#7-third-party-payment-services)

#### How do I support payments in my third-party app that uses the Telegram API?

You are welcome to study the [MTProto payment documentation](/api/payments/).

#### Supported Currencies

Telegram payments currently support the currencies listed below (here's a [JSON version](/bots/payments/currencies.json/) in case you need it).

If you're using Stripe as the payments provider, supported currencies may vary depending on the country you have specified in your Stripe account ([more info](https://support.stripe.com/questions/which-currencies-does-stripe-support)).

The minimum and maximum amounts for each of the currencies roughly correspond to the limit of `US$ 1-10000`. The amount must be expressed in 12 digits or less, so the maximum value will be correspondingly lower for some lower-value currencies. Note that for each currency except USD these limits depend on exchange rates and may change over time (plan ahead for this when you implement limits in your code).

<table class="table table-hover table-bordered"><thead><tr><th scope="col">Code</th><th scope="col">Title</th><th scope="col">Min amount</th><th scope="col">Max amount</th></tr></thead><tbody><tr><td>AED</td><td>United Arab Emirates Dirham</td><td>AED&nbsp;3.67</td><td>AED&nbsp;36,729.47</td></tr><tr><td>AFN</td><td>Afghan Afghani</td><td>AFN72.60</td><td>AFN726,016.70</td></tr><tr><td>ALL</td><td>Albanian Lek</td><td>87,70ALL</td><td>876.972,42ALL</td></tr><tr><td>AMD</td><td>Armenian Dram</td><td>390.68&nbsp;AMD</td><td>3,906,802.09&nbsp;AMD</td></tr><tr><td>ARS</td><td>Argentine Peso</td><td>ARS&nbsp;1.198,23</td><td>ARS&nbsp;11.982.342,03</td></tr><tr><td>AUD</td><td>Australian Dollar</td><td>AU$1.58</td><td>AU$15,750.39</td></tr><tr><td>AZN</td><td>Azerbaijani Manat</td><td>1,70&nbsp;AZN</td><td>17&nbsp;017,91&nbsp;AZN</td></tr><tr><td>BAM</td><td>Bosnia &amp; Herzegovina Convertible Mark</td><td>1,73&nbsp;BAM</td><td>17.255,51&nbsp;BAM</td></tr><tr><td>BDT</td><td>Bangladeshi Taka</td><td>BDT&nbsp;121.61</td><td>BDT&nbsp;1,216,126.20</td></tr><tr><td>BGN</td><td>Bulgarian Lev</td><td>1,73&nbsp;BGN</td><td>17&nbsp;262,03&nbsp;BGN</td></tr><tr><td>BHD</td><td>Bahraini dinar</td><td>BHD&nbsp;0.377</td><td>BHD&nbsp;3,768.690</td></tr><tr><td>BND</td><td>Brunei Dollar</td><td>BND1,32</td><td>BND13.169,58</td></tr><tr><td>BOB</td><td>Bolivian Boliviano</td><td>BOB&nbsp;6,92</td><td>BOB&nbsp;69.160,83</td></tr><tr><td>BRL</td><td>Brazilian Real</td><td>R$&nbsp;5,89</td><td>R$&nbsp;58.879,01</td></tr><tr><td>BYN</td><td>Belarusian ruble</td><td>3,28&nbsp;BYN</td><td>32&nbsp;755,01&nbsp;BYN</td></tr><tr><td>CAD</td><td>Canadian Dollar</td><td>CA$1.39</td><td>CA$13,938.70</td></tr><tr><td>CHF</td><td>Swiss Franc</td><td>0.82&nbsp;CHF</td><td>8'158.79&nbsp;CHF</td></tr><tr><td>CLP</td><td>Chilean Peso</td><td>CLP&nbsp;969</td><td>CLP&nbsp;9.694.501</td></tr><tr><td>CNY</td><td>Chinese Renminbi Yuan</td><td>CN¥7.35</td><td>CN¥73,484.60</td></tr><tr><td>COP</td><td>Colombian Peso</td><td>COP&nbsp;4.351,00</td><td>COP&nbsp;43.510.000,00</td></tr><tr><td>CRC</td><td>Costa Rican Colón</td><td>CRC505,71</td><td>CRC5.057.148,78</td></tr><tr><td>CZK</td><td>Czech Koruna</td><td>22,12&nbsp;CZK</td><td>221&nbsp;236,02&nbsp;CZK</td></tr><tr><td>DKK</td><td>Danish Krone</td><td>6,58&nbsp;DKK</td><td>65835,85&nbsp;DKK</td></tr><tr><td>DOP</td><td>Dominican Peso</td><td>DOP61.16</td><td>DOP611,592.20</td></tr><tr><td>DZD</td><td>Algerian Dinar</td><td>DZD&nbsp;132.62</td><td>DZD&nbsp;1,326,179.86</td></tr><tr><td>EGP</td><td>Egyptian Pound</td><td>EGP&nbsp;50.98</td><td>EGP&nbsp;509,827.03</td></tr><tr><td>ETB</td><td>Ethiopian Birr</td><td>ETB132.53</td><td>ETB1,325,303.83</td></tr><tr><td>EUR</td><td>Euro</td><td>0,88&nbsp;€</td><td>8&nbsp;817,10&nbsp;€</td></tr><tr><td>GBP</td><td>British Pound</td><td>£0.75</td><td>£7,539.95</td></tr><tr><td>GEL</td><td>Georgian Lari</td><td>2,75&nbsp;GEL</td><td>27&nbsp;496,46&nbsp;GEL</td></tr><tr><td>GHS</td><td>Ghanaian cedi</td><td>GHS15.51</td><td>GHS155,137.66</td></tr><tr><td>GTQ</td><td>Guatemalan Quetzal</td><td>GTQ7.72</td><td>GTQ77,172.49</td></tr><tr><td>HKD</td><td>Hong Kong Dollar</td><td>HK$7.76</td><td>HK$77,573.85</td></tr><tr><td>HNL</td><td>Honduran Lempira</td><td>HNL&nbsp;25.95</td><td>HNL&nbsp;259,476.72</td></tr><tr><td>HRK</td><td>Croatian Kuna</td><td>6,64&nbsp;HRK</td><td>66.422,00&nbsp;HRK</td></tr><tr><td>HUF</td><td>Hungarian Forint</td><td>359,61&nbsp;HUF</td><td>3&nbsp;596&nbsp;060,17&nbsp;HUF</td></tr><tr><td>IDR</td><td>Indonesian Rupiah</td><td>IDR16.843,40</td><td>IDR168.434.000,00</td></tr><tr><td>ILS</td><td>Israeli New Sheqel</td><td>₪&nbsp;3.68</td><td>₪&nbsp;36,788.20</td></tr><tr><td>INR</td><td>Indian Rupee</td><td>₹85.54</td><td>₹855,405.50</td></tr><tr><td>IQD</td><td>Iraqi dinar</td><td>IQD&nbsp;1,311.147</td><td>IQD&nbsp;13,111,470.880</td></tr><tr><td>IRR</td><td>Iranian rial</td><td>42,112/50&nbsp;IRR</td><td>421,124,986/09&nbsp;IRR</td></tr><tr><td>ISK</td><td>Icelandic Króna</td><td>128&nbsp;ISK</td><td>1.281.102&nbsp;ISK</td></tr><tr><td>JMD</td><td>Jamaican Dollar</td><td>JMD158.35</td><td>JMD1,583,505.01</td></tr><tr><td>JOD</td><td>Jordanian dinar</td><td>JOD0.709</td><td>JOD7,092.020</td></tr><tr><td>JPY</td><td>Japanese Yen</td><td>¥142</td><td>¥1,424,895</td></tr><tr><td>KES</td><td>Kenyan Shilling</td><td>KES129.70</td><td>KES1,297,008.65</td></tr><tr><td>KGS</td><td>Kyrgyzstani Som</td><td>87-45&nbsp;KGS</td><td>874&nbsp;492-05&nbsp;KGS</td></tr><tr><td>KRW</td><td>South Korean Won</td><td>₩1,428</td><td>₩14,281,050</td></tr><tr><td>KZT</td><td>Kazakhstani Tenge</td><td>KZT517-84</td><td>KZT5&nbsp;178&nbsp;372-13</td></tr><tr><td>LBP</td><td>Lebanese Pound</td><td>LBP&nbsp;89,680.40</td><td>LBP&nbsp;896,803,991.37</td></tr><tr><td>LKR</td><td>Sri Lankan Rupee</td><td>LKR&nbsp;298.37</td><td>LKR&nbsp;2,983,673.52</td></tr><tr><td>MAD</td><td>Moroccan Dirham</td><td>MAD&nbsp;9.30</td><td>MAD&nbsp;92,950.95</td></tr><tr><td>MDL</td><td>Moldovan Leu</td><td>17.29&nbsp;MDL</td><td>172,911.07&nbsp;MDL</td></tr><tr><td>MMK</td><td>Myanmar kyat</td><td>MMK2,099.52</td><td>MMK20,995,177.49</td></tr><tr><td>MNT</td><td>Mongolian Tögrög</td><td>MNT3&nbsp;535,48</td><td>MNT35&nbsp;354&nbsp;753,21</td></tr><tr><td>MOP</td><td>Macanese pataca</td><td>MOP8.00</td><td>MOP79,984.29</td></tr><tr><td>MUR</td><td>Mauritian Rupee</td><td>MUR45.09</td><td>MUR450,944.18</td></tr><tr><td>MVR</td><td>Maldivian Rufiyaa</td><td>15.41&nbsp;MVR</td><td>154,102.22&nbsp;MVR</td></tr><tr><td>MXN</td><td>Mexican Peso</td><td>MX$20.12</td><td>MX$201,198.97</td></tr><tr><td>MYR</td><td>Malaysian Ringgit</td><td>MYR4.42</td><td>MYR44,159.51</td></tr><tr><td>MZN</td><td>Mozambican Metical</td><td>MZN63.90</td><td>MZN638,979.70</td></tr><tr><td>NGN</td><td>Nigerian Naira</td><td>NGN1,604.82</td><td>NGN16,048,198.43</td></tr><tr><td>NIO</td><td>Nicaraguan Córdoba</td><td>NIO&nbsp;36.83</td><td>NIO&nbsp;368,349.31</td></tr><tr><td>NOK</td><td>Norwegian Krone</td><td>NOK&nbsp;10,62</td><td>NOK&nbsp;106&nbsp;231,30</td></tr><tr><td>NPR</td><td>Nepalese Rupee</td><td>NPR137.23</td><td>NPR1,372,285.38</td></tr><tr><td>NZD</td><td>New Zealand Dollar</td><td>NZ$1.69</td><td>NZ$16,909.75</td></tr><tr><td>PAB</td><td>Panamanian Balboa</td><td>PAB&nbsp;1.00</td><td>PAB&nbsp;10,009.31</td></tr><tr><td>PEN</td><td>Peruvian Nuevo Sol</td><td>PEN&nbsp;3.74</td><td>PEN&nbsp;37,391.65</td></tr><tr><td>PHP</td><td>Philippine Peso</td><td>PHP56.59</td><td>PHP565,894.98</td></tr><tr><td>PKR</td><td>Pakistani Rupee</td><td>PKR280.83</td><td>PKR2,808,293.37</td></tr><tr><td>PLN</td><td>Polish Złoty</td><td>3,80&nbsp;PLN</td><td>37&nbsp;960,65&nbsp;PLN</td></tr><tr><td>PYG</td><td>Paraguayan Guaraní</td><td>PYG&nbsp;7.999</td><td>PYG&nbsp;79.986.942</td></tr><tr><td>QAR</td><td>Qatari Riyal</td><td>QAR&nbsp;3.65</td><td>QAR&nbsp;36,536.72</td></tr><tr><td>RON</td><td>Romanian Leu</td><td>4,39&nbsp;RON</td><td>43.889,02&nbsp;RON</td></tr><tr><td>RSD</td><td>Serbian Dinar</td><td>103,45&nbsp;RSD</td><td>1.034.456,90&nbsp;RSD</td></tr><tr><td>RUB</td><td>Russian Ruble</td><td>87,73&nbsp;RUB</td><td>877&nbsp;271,92&nbsp;RUB</td></tr><tr><td>SAR</td><td>Saudi Riyal</td><td>SAR&nbsp;3.75</td><td>SAR&nbsp;37,524.26</td></tr><tr><td>SEK</td><td>Swedish Krona</td><td>9,84&nbsp;SEK</td><td>98.413,65&nbsp;SEK</td></tr><tr><td>SGD</td><td>Singapore Dollar</td><td>SGD1.32</td><td>SGD13,154.65</td></tr><tr><td>SYP</td><td>Syrian pound</td><td>SYP&nbsp;13,001.86</td><td>SYP&nbsp;130,018,582.69</td></tr><tr><td>THB</td><td>Thai Baht</td><td>฿33.32</td><td>฿333,234.95</td></tr><tr><td>TJS</td><td>Tajikistani Somoni</td><td>10;85&nbsp;TJS</td><td>108&nbsp;497;55&nbsp;TJS</td></tr><tr><td>TRY</td><td>Turkish Lira</td><td>38,11&nbsp;TRY</td><td>381.131,98&nbsp;TRY</td></tr><tr><td>TTD</td><td>Trinidad and Tobago Dollar</td><td>TTD6.80</td><td>TTD67,969.77</td></tr><tr><td>TWD</td><td>New Taiwan Dollar</td><td>NT$32.49</td><td>NT$324,874.98</td></tr><tr><td>TZS</td><td>Tanzanian Shilling</td><td>TZS2,665.00</td><td>TZS26,650,002.38</td></tr><tr><td>UAH</td><td>Ukrainian Hryvnia</td><td>41,22UAH</td><td>412&nbsp;168,53UAH</td></tr><tr><td>UGX</td><td>Ugandan Shilling</td><td>UGX3,669</td><td>UGX36,693,767</td></tr><tr><td>USD</td><td>United States Dollar</td><td>$1.00</td><td>$10,000.00</td></tr><tr><td>UYU</td><td>Uruguayan Peso</td><td>UYU&nbsp;42,70</td><td>UYU&nbsp;427.028,05</td></tr><tr><td>UZS</td><td>Uzbekistani Som</td><td>12&nbsp;980,89&nbsp;UZS</td><td>129&nbsp;808&nbsp;943,61&nbsp;UZS</td></tr><tr><td>VND</td><td>Vietnamese Đồng</td><td>25.868&nbsp;₫</td><td>258.675.000&nbsp;₫</td></tr><tr><td>YER</td><td>Yemeni Rial</td><td>YER&nbsp;245.33</td><td>YER&nbsp;2,453,250.35</td></tr><tr><td>ZAR</td><td>South African Rand</td><td>ZAR&nbsp;19.03</td><td>ZAR&nbsp;190,316.50</td></tr></tbody></table>
