---
title: "Telegram Bot Platform"
original: "https://telegram.org/blog/bot-revolution"
section: blog
date: 2015-06-24
description: "Telegram is about freedom and openness – our code is open for everyone, as is our API. Today we’re making another step towards openness by launching a Bot API and platform for…"
crumbs: []
layout: layout.njk
---

# Telegram Bot Platform

<img src="https://telegram.org/file/811140058/2/7GzMJk4Ij54/a1649c56fa9f805828" class="blog_side_image">

> **UPD:** Check out the new [Inline bots](/blog/inline-bots/) as well!

Telegram is about freedom and openness – our code is open for everyone, as is our API. Today we’re making another step towards openness by launching a [Bot API and platform](/bots/api/) for third-party developers to [create bots](/bots/).

**Bots** are simply Telegram accounts operated by software – not people – and they'll often have AI features. They can do anything – teach, play, search, broadcast, remind, connect, integrate with other services, or even pass commands to the Internet of Things.

[<img src="https://telegram.org/file/811140930/1/-2j5fB6r0MA/e02975e21b1977a7db" title="An image bot integrated with the Bing Image search API" style="width: 245px; padding: 10px 5px">](https://telegram.org/file/811140930/1/-2j5fB6r0MA/e02975e21b1977a7db) [<img src="https://telegram.org/file/811140690/1/T81U_kqVHsY/e30a06056bb48fa053" title="An empty conversation with a Poll bot" style="width: 245px; padding: 10px 5px">](https://telegram.org/file/811140690/1/T81U_kqVHsY/e30a06056bb48fa053)  
  

Today’s **3.0** update to the [Telegram apps](/apps/) makes interacting with bots super-easy. In most cases you won’t even have to type anything, because bots will provide you with a set of custom buttons.

> [**"Every application needs a slightly optimized set of buttons, just for it.**”](https://youtu.be/vN4U5FqrOdQ?t=356)  
> Steve Jobs, 2007 iPhone launch

Bots can now provide you with custom keyboards for specialized tasks that could look like this for example:

[<img src="https://telegram.org/file/811140470/1/V7A84eVKQzs/8d2ede71e1c118ec69" title="'Hot or Bot?' with a custom keyboard." style="width: 245px; padding: 10px 5px">](https://telegram.org/file/811140470/1/V7A84eVKQzs/8d2ede71e1c118ec69) [<img src="https://telegram.org/file/811140849/2/hBPe2YGBahk/3a45817b7e70d3e5f1" title="A sticker rating bot with a custom keyboard." style="width: 245px; padding: 10px 5px">](https://telegram.org/file/811140849/2/hBPe2YGBahk/3a45817b7e70d3e5f1)

  

Here are some sample bots that were built by the platform's beta testers this past weekend:

-   [**@ImageBot**](https://telegram.me/imagebot) – send this bot a keyword and it’ll provide you with a relevant picture.
-   [**@TriviaBot**](https://telegram.me/triviabot) – test your trivia knowledge or add to groups to compete with friends.
-   [**@PollBot**](https://telegram.me/pollbot) – add this one to group chats to create polls.
-   [**@RateStickerBot**](https://telegram.me/ratestickerbot) – discover and rate new stickers.
-   [**@AlertBot**](https://telegram.me/alertbot) – set a time and this bot will send you a reminder for anything you like.
-   [**@HotOrBot**](https://telegram.me/hotorbot) – find friends with this Tinder-like dating bot.
-   [**@GithubBot**](https://telegram.me/githubbot) – track GitHub updates.
-   [**@StoreBot**](https://telegram.me/storebot) – find new bots and rate them.

[<img src="https://telegram.org/file/811140934/1/tbDSLHSaijc/fdcc7b6d5fb3354adf" title="The Botfather. Click for hi-res picture" style="max-width: 200px;float:right">](https://telegram.org/file/811140327/1/zlN4goPTupk/9ff2f2f01c4bd1b013)

Our beta testers needed only a few hours to build these bots – setting up a new bot is a breeze. Just generate a key with [**@BotFather**](https://telegram.me/botfather) and use a simple [https API](/bots/api/) to control your bot. If you’re an engineer, check out our [**Introduction to bots**](/bots/) for details.

Bots in Telegram will look different from human users: their chat and profile screens have a slightly different UI and they don't have access to [all messages](/bots/) by default when added to groups.

#### Taking over the world

Once you've launched your bot, watch it spread. In Telegram, any forwarded message contains a link to its original sender. This means any message from your bot forwarded to a person or group is a messaging equivalent of a retweet – bots are viral.

Additionally, all bots have an **Add To Group** and a **Share** button in their profile. You can set up a description and link that will be used when people share your bot on Telegram or other platforms.

[<img src="https://telegram.org/file/811140953/2/dHhrj9y1jtc/345e500fc7e1ffa5cd" title="Bot profile featuring the Add to Group, Share and Help buttons." style="width: 245px; padding: 10px 5px">](https://telegram.org/file/811140953/2/dHhrj9y1jtc/345e500fc7e1ffa5cd) [<img src="https://telegram.org/file/811140572/1/vVg8aeC7SuM/161b45e3907efe6bde" title="Telegram.me link and short info to easily share a bot." style="width: 245px; padding: 10px 5px">](https://telegram.org/file/811140572/1/vVg8aeC7SuM/161b45e3907efe6bde)

  

A typical link to a bot looks like this:

> [https://telegram.me/your\_bot](https://telegram.me/your_bot)

Opening such a link starts a chat with that bot if you have Telegram installed. These links are easy to identify because all bot usernames must end in **bot**.

If the bot developer wants to pass their bot some additional info (like an auth key for example, see [deep linking](/bots/)), the link might also look like this:

> [https://telegram.me/your\_bot?start=value](https://telegram.me/your_bot?start=value)

### The bots are coming

Starting today, you'll see links like this in Telegram and elsewhere. Embrace them, they are bots! They will provide the services you asked us for – polls, news, games, integrations, e-butlers or cat images. Any dream can come true with bots.

  

_The Telegram Team,  
June 24, 2015_

  

**P.S.** All bot developers are welcome to share ideas for our Bot API on [**@BotSupport**](https://telegram.me/botsupport).

> You can read more about the our bot platform in the [**Introduction to Bots**](/bots/) and in the [**Bot API Manual**](/bots/api/).
