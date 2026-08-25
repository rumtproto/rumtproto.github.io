---
title: "Voice Calls: Secure, Crystal-Clear, AI-Powered"
original: "https://telegram.org/blog/calls"
section: blog
date: 2017-03-30
description: "Over the past few months, we’ve worked hard to make sure Telegram calls are the best in terms of quality, speed, and security. The wait is over: today Voice Calls are available…"
crumbs: []
layout: layout.njk
---

# Voice Calls: Secure, Crystal-Clear, AI-Powered

<img src="https://telegram.org/file/811140024/2/lPo1rDxjlkc.19519.gif/584fde66edba589e42" class="blog_side_image">

[<img src="https://telegram.org/file/811140828/2/h5OI_7y7Vjs.186012/4a68dedb2b8f10c50c" title="Introducing Telegram Calls!">](https://telegram.org/file/811140683/1/gck84E2uvJE.876923/62b2d7a3cb2a9b36c0)

> **UPD, August 2020:** Telegram also supports **end-to-end encrypted** [**video calls**](/blog/video-calls/).
> 
> **UPD, December 2020:** You can start a [**voice chat**](/blog/voice-chats/) with thousands of participants in any **group**.

Over the past few months, we’ve worked hard to make sure Telegram calls are the best in terms of quality, speed, and security. The wait is over: today Voice Calls are available all over the world in our mobile and [desktop](https://desktop.telegram.org) apps.

The Voice Call interface is familiar and easy to use, but as always, you get loads of innovation under the hood with Telegram.

<div class="blog_video_player_wrap" style="max-width: 640px; margin: 20px auto 20px;"><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/811140611/1/r98N01VmU9Q.85127/7e4b275ad7254e604d" style="max-width: 640px;"><source src="https://telegram.org/file/811140117/4/FGak4L3ns8Y.1257015.mp4/5110053354660494ac" type="video/mp4"></video></div>

### Secure

Telegram Calls are built upon the time-tested end-to-end encryption of Telegram's Secret Chats. The key verification UI we came up with in 2013 to protect against man-in-the-middle attacks served well for Telegram (and for other apps that adopted it), but for Calls we needed something easier.

That's why we've [improved the key exchange mechanism](/techfaq/). To make sure your call is 100% secure, you and your recipient just need to compare **four emoji** over the phone. No lengthy codes or complicated pictures!

<div class="blog_image_wrap"><a href="https://telegram.org/file/811140066/3/RSbvw7bT3pQ.32736/e03a39c31f5656df61" target="_blank"><img src="https://telegram.org/file/811140066/3/RSbvw7bT3pQ.32736/e03a39c31f5656df61" title="Emoji verification"></a><p>Key verification</p></div>

### Super-Fast

Whenever possible, your calls will go over a peer-to-peer connection, using the best audio codecs to save traffic while providing crystal-clear quality.

If a peer-to-peer connection can't be established, Telegram will use the closest server to you to connect you with the person you’re calling in the fastest way possible. Unlike other apps, Telegram has a distributed infrastructure all over the world which we’ve already been using to deliver your texts faster than other apps. Now these servers will also be used for calls.

In the coming months, we’ll be expanding our content delivery network around the globe, getting the connection up to light-speed even in remote areas.

### AI-Powered

Each time you make a Voice Call on Telegram, a neural network learns from your and your device's feedback (naturally, it doesn't have access to the contents of the conversation, it has only technical information such as network speed, ping times, packet loss percentage, etc.). The machine optimizes dozens of parameters based on this input, improving the quality of future calls on the given device and network.

These parameters can also be adjusted during a conversation if there's a change in your connection. Telegram will adapt and provide excellent sound quality on stable WiFi — or use less data when you walk into a refrigerator with bad reception.

According to our tests, Telegram Calls are already superior to any of our competitors on comparable connections. But the quality of Telegram Calls will further improve as you and others use them, thanks to the built-in machine learning.

### Complete Control

If you’re like us, you don’t like to be bothered. On Telegram, you can control who can and who can't call you with granular precision. You can even switch voice calls off altogether, blocking anyone and everyone from calling you.

<div class="blog_image_wrap"><a href="https://telegram.org/file/811140599/1/t4OzpC_5CD4.58064/4284f45dd783ad1739" target="_blank"><img src="https://telegram.org/file/811140599/1/t4OzpC_5CD4.58064/4284f45dd783ad1739" title="Privacy Settings for calls"></a><p>Privacy settings for calls</p></div>

By default, Telegram calls are lightweight and automatically adapt to the speed and type of your connection, so as to consume the least data possible. But if you want to reduce your data spending by another 25-30% at the expense of sound quality, you’re welcome to enable the **Use Less Data** option in Data and Storage Settings.

### No Added Calories

Telegram is the most powerful messaging platform out there, but it is also famous for being the easiest one to use. We want to keep things this way, and that’s why by default we won’t clutter your screen with additional tabs and redundant buttons.

Once you start making calls, Telegram for iOS will offer you to add a dedicated tab for calls on the main screen of the app. Alternatively, you can turn the Calls tab on right away from the Recent Calls section in Settings. On Android, the call tab is accessible via the pull-out main menu on the left.

It's always easy to make a call, even if you've never opened the calls tab. As soon as Voice Calls are enabled for your country, a phone icon will appear on every profile page. You can also call by tapping the top bar in a chat and choosing 'Call' on iOS. On Android, the Call button is in the '…' menu at the top.

<div class="blog_image_wrap"><a href="https://telegram.org/file/811140114/4/lBHGStIoAYU.65887/1429453aac8cfbcf48" target="_blank"><img src="https://telegram.org/file/811140114/4/lBHGStIoAYU.65887/1429453aac8cfbcf48" title="Call button in profiles"></a><p>New call button</p></div>

### One more thing

For those of you who don’t do voice calls, v.3.18 brings something different: direct control over the **quality of videos** you share. Use this brand-new setting to select the degree of compression before sending a video. For the first time in the history of messaging, you can preview how the recipient will see your video before you send it.

The app will remember the compression rate you selected and will use it by default for your future video uploads.

  

And that's it for today. Stay tuned, there's always more coming!

  

_March 30, 2017  
The Telegram Team_
