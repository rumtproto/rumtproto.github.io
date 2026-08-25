---
title: "Improved Videos and Much More"
original: "https://telegram.org/blog/dynamic-video-quality-and-more"
section: blog
date: 2024-10-31
description: "Today's update adds faster loading, better quality and new speed controls to videos, last edit timestamps, attaching media to sent messages, increased limits for mini apps, new…"
crumbs: []
layout: layout.njk
---

# Improved Videos and Much More

<img src="https://telegram.org/file/400780400319/3/FfEDYVGbDN4.60367.png/11645149aa7126df8f">

[<img src="https://telegram.org/file/400780400540/2/-Vx0DcPPVY0.129548.webp/d74459888a4eae5075" srcset="/file/400780400014/3/aeaCLk0IMuA.387662.webp/2557fd7d0372bf9275, 1200w" title="" alt="TITLE">](https://telegram.org/file/400780400014/3/aeaCLk0IMuA.387662.webp/2557fd7d0372bf9275)

Today's update adds **faster loading**, **better quality** and **new speed controls** to videos, **last edit** timestamps, attaching **media** to sent messages, **increased limits** for mini apps, new **monetization options** for developers – and much more.

#### Faster Video Loading, Better Quality

For videos newly uploaded to **large channels**, the video player now **automatically selects** a quality level based on your connection to save your data and **load videos faster**. Users can also **manually select** their preferred quality level – _High_, _Medium_ or _Low_.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400006/2/g4O0gk9xG34.26827/7a935f4e118c3af360" style="max-width: 600px;" alt="TITLE"><source src="https://telegram.org/file/400780400523/3/59AxRfoHEoE.1392514.mp4/488105b6aabe4a14fb" type="video/mp4"></video></div></div>

On iOS, we've also made it easier to switch to **Picture-in-Picture Mode** – simply **swipe up** to continue watching as you browse your chats. Swiping down still closes the video.

> To adjust video quality, tap the <img class="emoji" src="https://telegram.org/img/emoji/40/E29A99.png" width="20" height="20" alt="⚙️"> gear icon in the video player.

Since users no longer have to watch videos in the resolution in which they were uploaded, large channel owners can afford to post **better-quality videos**. They will no longer need to pre-process their videos for the best viewing experience — Telegram will now **optimize** each uploaded video for them and compress it in several qualities.

Users on weaker connections will automatically get more compressed videos, while those with high-speed internet can enjoy the **full resolution**.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400710/5/2mCaT42lBkc.80513/8dedbbcc11cd25de02" style="max-width: 600px;" alt="TITLE"><source src="https://telegram.org/file/400780400187/2/Q7ULuljms7w.3397392.mp4/acf2959d57d3dc3a75" type="video/mp4"></video></div></div>

These new video quality features are currently available for channels with **thousands of subscribers**.

#### Adjusting Playback Speed

[For years](/evolution/#march-2023), videos on Telegram have supported **multiple speed settings** – and now users can **seamlessly speed up** videos with new gestures without tapping through settings.

Just hold down on the right side of a video to activate **2x speed** – and slide right gradually to increase the speed to **up to 2.5x**. Release your finger to return to normal speed.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400381/2/i2wv7Y-u4TQ.103385/2a77b676746aced1cd" style="max-width: 600px;" alt="TITLE"><source src="https://telegram.org/file/400780400245/3/RB9l6fXbYyM.6197477.mp4/ab9077f7b14760c0ed" type="video/mp4"></video></div></div>

> On Android, you can **double-tap** on the left or right side of the video to **skip 10 seconds** in either direction.

#### Add Media to Sent Messages

If you forget to attach your photo, video or file before sending, you can quickly **edit the message** to **add media** in just two taps – rather than deleting it and starting over.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400751/2/gi5RGzNurH0.56019/82838fed4952e9f0be" style="max-width: 600px;" alt="TITLE"><source src="https://telegram.org/file/400780400758/2/iMOwjpET9HY.1284476.mp4/80edac7f0f18f2141f" type="video/mp4"></video></div></div>

> You can also **edit sent media** to re-edit photos or **replace media** in a message.

#### Last Edit Timestamps

Edited messages now **show a timestamp**, displaying when the message was **last edited**. If a message has been edited **more than once**, it will show the time of the **most recent edit**.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400847/1/KBgvs_BvdvE.277776/c2a59b6ed5a3b85997" style="max-width: 600px;" alt="TITLE"><source src="https://telegram.org/file/400780400451/4/Uaaf0H4YZ2A.119173.mp4/7cefc7dd116281ba57" type="video/mp4"></video></div></div>

> Your messages in **small groups** and private chats also have **detailed read receipts** – showing the time when your message was opened by each member.

#### Chat-Specific Hashtags

Group and channel owners can use the new format `#hashtag@username` for hashtags that only show posts and stories **from the same chat** when tapped.

For example, a user tapping _#travel_ would see search results from all of Telegram – while _#travel@durov_ would immediately open results only from the [@durov](https://t.me/durov) channel.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400157/2/HcCEogr_VAM.51373/31b164e37d437465ae" style="max-width: 600px;" alt="TITLE"><source src="https://telegram.org/file/400780400140/5/pb9pB4qAbWk.1717300.mp4/f6a8aa50709fca3119" type="video/mp4"></video></div></div>

Typing a hashtag in the message bar of public chats shows a **special menu** – allowing you to add the chat's username to the hashtag in just **one tap**.

> Only **public posts** and **public stories** appear in global hashtag searches.

#### Telegram Ads in Bots

Bots and mini apps are now able to participate in [revenue sharing](/blog/monetization-for-channels/) from [Telegram Ads](/blog/monetization-for-channels/#ton-based-ads) – giving services another way to help **support their development**.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400621/3/IdLKAeBBUUo.76649/09cee49e7c6f27dc54" style="max-width: 600px;" alt="TITLE"><source src="https://telegram.org/file/400780400184/3/rErQ9dD6_gk.1672517.mp4/5dd26de5a94919d747" type="video/mp4"></video></div></div>

> Telegram Ads are **unobtrusive** and **privacy-conscious** – supporting Telegram's [sustainable monetization strategy](https://t.me/durov/142), while sharing **50% of ad revenue** with content creators and bot developers.

#### Increased Message Limits for Bots

All Telegram bots can send up to **30 messages** per second to their users – completely **free of charge**. To better accommodate large-scale services, bots are now able to enable **increased message limits** and send up to **1000 messages** per second.

Sending messages with increased limits costs just **0.1 Star per message**, paid with Telegram Stars from the bot's balance. Developers can receive Stars from [paid content](/blog/superchannels-star-reactions-subscriptions/#paid-media-for-bots) and [digital products](/blog/telegram-stars/#digital-goods-and-services) in their bot.

#### Exact Reaction Counters

In case you want to know the **exact number** of heart (or star, or pumpkin) reactions your posts receive, _press and hold_ the counters for more details.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400543/2/tWa2MXfdGUU.52782/141f92b98dbb21b7e6" style="max-width: 600px;" alt="TITLE"><source src="https://telegram.org/file/400780400577/2/lYUM0ULd9V0.320374.mp4/cd8476ce934c2648db" type="video/mp4"></video></div></div>

That's it for today. Enjoy the new videos while we work on more stuff to put into demo videos for the next update!

> P.S. Happy Halloween! We've added some new **limited gifts** for those celebrating.

  

_October 31, 2024  
The Telegram Team_
