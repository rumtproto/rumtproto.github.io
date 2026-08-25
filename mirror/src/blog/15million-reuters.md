---
title: "Keep Calm and Send Telegrams&#33;"
original: "https://telegram.org/blog/15million-reuters"
section: blog
date: 2016-08-03
description: "Certain people checked whether some Iranian numbers were registered on Telegram and were able to confirm this for 15 million accounts. As a result, only publicly available data…"
crumbs: []
layout: layout.njk
---

# Keep Calm and Send Telegrams&#33;

<img src="https://telegram.org/img/tl_card_coordinate.gif" class="blog_side_image">

> [Some media](http://www.reuters.com/article/us-iran-cyber-telegram-exclusive-idUSKCN10D1AM) reported on a “massive hacker attack” on Telegram in Iran.  
> Here's what really happened:

#### Telegram accounts

Certain people checked whether some Iranian numbers were registered on Telegram and were able to confirm this for 15 million accounts. As a result, only publicly available data was collected and the accounts themselves were **not accessed**. Such mass checks are no longer possible because of limitations introduced into our API earlier in 2016.

However, since Telegram is based on phone contacts, any party can potentially check whether a phone number is registered in the system. This is also true for any other contact-based messaging app (WhatsApp, Messenger, etc.).

#### SMS codes

The media also reported on _several_ accounts which were accessed earlier this year by intercepting **SMS-verification codes** – this is hardly a new threat as we've been increasingly warning our users in certain countries about it. Last year we introduced [2-Step Verification](/faq/#q-how-does-2-step-verification-work) specifically to defend users in such situations.

If you have reasons to think that your mobile carrier is intercepting your SMS codes, use [2-Step Verification](/faq/#q-how-does-2-step-verification-work) to protect your account with a password. If you do that, there's nothing an attacker can do.

* * *

**See also:**

-   [Security tips](/faq/#q-can-telegram-protect-me-against-everything)
-   [2-Step Verification](/faq/#q-how-does-2-step-verification-work)

  

_August 2, 2016  
The Telegram Team_
