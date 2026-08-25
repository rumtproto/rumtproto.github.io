---
title: "TDLib – Build Your Own Telegram"
original: "https://telegram.org/blog/tdlib"
section: blog
date: 2018-01-31
description: "Telegram offers developers more than just the Bot API. Since day one, we've also had a free and open Telegram API that allows anyone to create their own messaging apps operating…"
crumbs: []
layout: layout.njk
---

# TDLib – Build Your Own Telegram

<img src="https://telegram.org/file/811140459/1bdb/rl5NwUNbBzM.26909.gif/0ecbc461e020d4bc3a" class="blog_side_image">

[<img src="https://telegram.org/file/811140207/1697/Fr2L4F_Rvpg.61872/10f070def8c6d4d307" srcset="/file/811140123/1b45/-OYMXpEI4d0.172643/cf7ae5c2efbaf53693, 2x" title="Introducing TDLib">](https://telegram.org/file/811140123/1b45/-OYMXpEI4d0.172643/cf7ae5c2efbaf53693)

Telegram offers developers more than just the [Bot API](/bots/). Since day one, we've also had a **free** and **open** [**Telegram API**](/api/) that allows anyone to create **their own messaging apps** operating in the Telegram cloud. These apps openly compete with the official ones and some of them have now reached more than **10 million** downloads on Google Play.

Users of these alternative clients can communicate with anyone on Telegram, but the apps often offer experimental, highly specialized or locally flavored features. Today we are introducing **a new tool** for third-party developers that will make it even easier to build **fast**, **secure** and **feature-rich** Telegram apps on our platform.

### Introducing TDLib

Meet TDLib – the [**Telegram Database Library**](/tdlib/). TDLib takes care of all **network implementation** details, **encryption** and **local data storage**, so that developers can dedicate more time to design, responsive interfaces and beautiful animations.

##### Universally useful

TDLib supports all Telegram features and makes developing Telegram apps a breeze on **any platform**. It can be used on Android, iOS, Windows, macOS, Linux and virtually any other system. The library is compatible with **any programming language** that can execute C functions; it also has native bindings to Java and C#.

##### Open and well-documented

All TDLib API methods and public interfaces are [**fully documented**](https://core.telegram.org/tdlib/docs/). The code is, of course, completely open and available on [**GitHub**](https://github.com/tdlib/td).

##### Secure and reliable

TDLib will remain **stable** on slow and unreliable Internet connections and guarantees that all updates will be delivered in the correct order. All **local data is encrypted** using a user-provided encryption key.

##### Optimized for performance

The library is fully asynchronous and optimized for high performance. We use TDLib in the Telegram Bot API, where **each** TDLib instance handles more than **18,000** active bots simultaneously.

##### Battle-tested

Our new [**Android X**](/blog/telegram-x/) client is an example of what can be done with TDLib. Using TDLib, it took the developer of the app approximately one year to reproduce **all** the major features of Telegram for Android – and add plenty of his own.

  

Let's see what else TDLib will help bring to the Telegram ecosystem this year.

_January 31, 2018,  
The Telegram Team_

  

> P.S. Today, we're also introducing Telegram X for Android, a new official app.  
> [Check out the announcement here »](/blog/telegram-x/)
