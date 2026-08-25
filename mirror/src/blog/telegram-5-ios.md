---
title: "Introducing Telegram 5.0 for iOS"
original: "https://telegram.org/blog/telegram-5-ios"
section: blog
date: 2018-10-01
description: "For the last couple of years we've been quietly rebuilding Telegram for iOS from scratch with Swift – a programming language released by Apple as a faster alternative to Objective…"
crumbs: []
layout: layout.njk
---

# Introducing Telegram 5.0 for iOS

<img src="https://telegram.org/file/811140791/1866/WkFqT-GkLAQ.18952.gif/455699a1841d5f748c" class="blog_side_image">

[<img src="https://telegram.org/file/811140143/1b9d/BeUrP0jadbs.74074/3064e2423d8fb38bf2" srcset="/file/811140852/15c0/07KL8rRD8fc.201096/da6c7661f117a8963c, 1200w" title="Meet Telegram 5 for iOS">](https://telegram.org/file/811140852/15c0/07KL8rRD8fc.201096/da6c7661f117a8963c)

For the last couple of years we've been quietly rebuilding [Telegram for iOS](https://telegram.org/dl/ios) from scratch with Swift – a programming language released by Apple as a faster alternative to Objective C.

Today [**Telegram 5.0**](https://telegram.org/dl/ios) goes live for **all our iOS users**, becoming the most popular messaging app written fully in Swift. This new version of Telegram looks just like the old one, but is **slicker**, more **battery-friendly** and **faster** (which is surprising, given how fast the old one already was).

<div class="blog_video_player_wrap" style="max-width: 480px; margin: 20px auto 20px;"><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/811140159/1581/ht2dP5WQ_2A.43742/ef1297c56cc650a4eb" style="max-width: 480px;"><source src="https://telegram.org/file/811140006/167f/3YFfIY18sjY.1718447.mp4/a746f55092c88ba9f5" type="video/mp4"></video></div>

The new app is superior in many ways. We love the new **smooth animations** in chats. Messages will now **sync quickly**, even if you haven‘t opened Telegram for a long time and there’s a LOT to sync. We‘ve also improved the app’s activity in the background to ensure that all of your **unmuted chats** are **always up to date**.

#### Step aside — and back

The new **expandable in-app notifications** will help you focus on whatever you‘re doing in the app without having to ignore incoming messages. When a notification arrives, pull it down to open the relevant chat. When you’re done with the interruption, simply close it to get right back to what you were doing.

<div class="blog_image_wrap"><a href="https://telegram.org/file/811140461/20f6/uMWqeGz4wZA.98740/01af3f17a3014ed0d3" target="_blank"><img src="https://telegram.org/file/811140461/20f6/uMWqeGz4wZA.98740/01af3f17a3014ed0d3" title="Expanded notification window" srcset="/file/811140461/20f6/uMWqeGz4wZA.98740/01af3f17a3014ed0d3 , 2x"></a><p>Expanded Notification</p></div>

This works **everywhere** in the app, including when you are viewing media or reading Instant View articles.

#### Make every chat count

Previously, badge counters could become less useful after you've joined a group or two with [100,000 members](/tour/groups/). Today we're making private chats great again.

You can now switch the **unread counter** to display the number of **unmuted chats** with unread messages. So instead of 1001 for a thousand messages in a muted group and one very important message from your dog, your badge counter will look like this:

<div class="blog_image_wrap"><a href="https://telegram.org/file/811140720/1616/TiQ_k-1Ng_M.18583/afde7efbaf80ad46a2" target="_blank"><img src="https://telegram.org/file/811140720/1616/TiQ_k-1Ng_M.18583/afde7efbaf80ad46a2" title="Badge counter: one unread chat" srcset="/file/811140720/1616/TiQ_k-1Ng_M.18583/afde7efbaf80ad46a2 , 2x"></a><p>One Unread Chat</p></div>

You can adjust this behavior in _Settings > Notifications and Sounds_.

#### When was that again?

We've improved navigation in busy chats (and elsewhere). Scroll up a little to see the **date** when the messages you are viewing were sent. Tap this date to go to the **first** message of the day in question.

#### The bugs are dead. Long live the bugs!

As much as we would‘ve liked to, we couldn’t port over any of the bugs from the Objective C version. All the old bugs are now gone forever — or, should we say, **fixed**. We might‘ve added some brand new bugs while coding the new version. But don’t worry, we'll fix those in no time. The same goes for any small features that may be missing.

#### Meanwhile on macOS…

You can now use **swipe gestures** to navigate the interfaces on [Telegram for macOS](https://macos.telegram.org). Most notably, you can **swipe to reply** and the chats list now works the same way it does on iOS: swipe right to Mark as Read/Unread, and left to Pin, Mute or Delete.

<div class="blog_image_wrap"><a href="https://telegram.org/file/811140061/185a/NY1UD1nbIKM.64588/9fcc35672b8b1e7f1b" target="_blank"><img src="https://telegram.org/file/811140753/15f8/90wMu_8cwOg.5620/c6448a84a20104ea5b" title="Swipe gestures in the chat list" srcset="/file/811140061/185a/NY1UD1nbIKM.64588/9fcc35672b8b1e7f1b , 2x"></a><p>Swipe Left or Right for Options</p></div>

Fancy MacBook Pro owners just got advanced **Touch Bar** support to help them send stickers and media, control buttons in alerts and pop-up windows and more.

<div class="blog_image_wrap blog_wide_image_wrap"><a href="https://telegram.org/file/811140789/192e/FKFtZ3lS22U.71664/ce667021b1e09bb5c3" target="_blank"><img src="https://telegram.org/file/811140789/192e/FKFtZ3lS22U.71664/ce667021b1e09bb5c3" title="New Settings on Telegram Desktop" srcset="/file/811140789/192e/FKFtZ3lS22U.71664/ce667021b1e09bb5c3 , 2x"></a><p>Stickers and more on MacBook Pro</p></div>

Other new features include **auto-night mode** settings and a photo editor to **rotate** and **crop pictures** before sending. You can also drag and drop photos, media, and documents to **change the order** in which they will be sent.

#### …And Telegram Desktop

As for our universal [Telegram Desktop](https://desktop.telegram.org) app, it just got a massive overhaul in the **Settings** department. The new layout is similar to what you're used to in our mobile apps:

<div class="blog_image_wrap"><a href="https://telegram.org/file/811140789/192d/QND3jNw4QF4.37250/e90e514737177b8007" target="_blank"><img src="https://telegram.org/file/811140789/192d/QND3jNw4QF4.37250/e90e514737177b8007" title="New Settings on Telegram Desktop" srcset="/file/811140789/192d/QND3jNw4QF4.37250/e90e514737177b8007 , 2x"></a><p>Telegram Desktop Settings</p></div>

The latest Telegram Desktop also features **improved caching** for **images** and **GIFs**, as well as new **local storage settings**. Go to _Settings > Advanced > Local Storage_ to control how much disk space Telegram uses on your machine.

We've also redesigned the **theme selector** to make it easier to choose a day and night theme that suits you best. Remember, you can [make your own themes](https://telegra.ph/Create-Theme-Desktop-FAQ) – or check out some [themes](https://telegra.ph/Telegram-Themes-Library-05-06#Collections) created by other users.

<div class="blog_image_wrap"><a href="https://telegram.org/file/811140396/17ab/jbwiTViR_M0.25410/2e8628403bf935f766" target="_blank"><img src="https://telegram.org/file/811140396/17ab/jbwiTViR_M0.25410/2e8628403bf935f766" title="Theme Selector" srcset="/file/811140396/17ab/jbwiTViR_M0.25410/2e8628403bf935f766 , 2x"></a><p>Pick Your Colors</p></div>

And that's it for today. Stay tuned for more updates on all our platforms.

  

_October 1, 2018  
The Telegram Team_
