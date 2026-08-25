---
title: "Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More"
original: "https://telegram.org/blog/ai-bot-revolution-11-new-features"
section: blog
date: 2026-05-07
description: "Today's update is an AI Bot revolution and more, adding over 10 new features and hundreds of improvements to Telegram:"
crumbs: []
layout: layout.njk
---

# Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More

<img src="https://telegram.org/file/400780400900/3/HuO9tiwk-F8.40295.png/91e41d14a75242e7de">

[<img src="https://telegram.org/file/400780400475/2/BwY041V7nZg.149454.webp/873ed0c0321c7633e7" srcset="/file/400780400505/2/GUHmQ5APEzI.428898.webp/504e9beaefda79c577, 1200w" alt="Guest AI Bots, Bot-to-Bot Chats, Chat Automation, 100M+ Emoji &amp; Sticker Search">](https://telegram.org/file/400780400505/2/GUHmQ5APEzI.428898.webp/504e9beaefda79c577)

Today's update is an AI Bot revolution and more, adding over **10 new features** and [hundreds of improvements](https://bugs.telegram.org) to Telegram:

-   Get responses from AI bots **in any chat** by tagging their @username.
-   Set up **autonomous bots** that communicate with other bots.
-   Watch bots **stream text** as it is generated.
-   **Automate your chats** by connecting a bot to your profile.
-   Build and share **custom AI styles** for the text editor.
-   Search through over **100M emoji and stickers** in **36 languages**.
-   **Set limits** for voting in polls – by channel or country.
-   View **poll statistics** to track votes for each option over time.
-   **Schedule** messages that will be **delivered silently**.
-   **Remove reactions** in groups where you're a moderator.

#### Guest Bots

Telegram is the **only platform** where all AI models can **compete freely** — while users have **full control** over their experience.

**AI assistants** and automated tools built as Telegram bots can now be mentioned in **any private or group chat** — even when they aren’t members. This lets them quickly answer questions, fact-check, **generate text or images**, perform tasks and more.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400097/2/Cfjt6tSE0UE.75990.jpg/e408f7a9eb1ff93736" style="max-width: 600px;" alt="Guest Bots"><source src="https://telegram.org/file/400780400507/2/HA9w0y-JaJA.4068142.mp4/72dbc63ed44ef9fe89" type="video/mp4"></video></div></div>

To mention a bot that supports this feature, simply include its `@username` in your message. Once the bot processes your request, it will reply **directly in the chat** where you mentioned it.

> To enable Guest Mode, bot developers are invited to check out [this guide](/bots/features/#guest-bots).

Bots only have access to the **specific message** they are tagged in and any replies to that message. Bots **cannot see** which users are in the chat and **cannot access** other messages.

#### Bot-to-Bot Communication

With this update, bots are now able to **respond to other bots**, not just users. AI enthusiasts can leverage this to **automate workflows** with fully **autonomous agents**.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400644/2/R_ttVkMMoRY.75448.jpg/013cb741088be33c80" style="max-width: 600px;" alt="Bot-to-Bot Communication"><source src="https://telegram.org/file/400780400259/4/a3TzJEdJiug.2941981.mp4/ecc56db01994d4326f" type="video/mp4"></video></div></div>

> To enable Bot-to-Bot Communication and learn more about this feature, see [this guide](/bots/features/#bot-to-bot-communication).

#### Streaming Text for Bots

For a seamless user experience, bots can **stream responses** as they are generated — rather than waiting for the full message before sending.

Recent updates to the [Bot API](/bots/api/) have made this **even more efficient**, for faster responses that have **new animations**.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400085/4/bZ4p-Av_XQs.62528.jpg/a9eeb0b97a640f2ea7" style="max-width: 600px;" alt="Streaming Text for Bots"><source src="https://telegram.org/file/400780400434/3/2Ju3ell42to.5230079.mp4/856bd9fde86a4f24ac" type="video/mp4"></video></div></div>

#### Chat Automation in Profiles

With this update, every Telegram user can **connect a bot** to their profile — and allow it to **respond to messages** on their behalf.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400930/3/QMwGE9AXKNk.48714.jpg/bee21dd7651808f60c" style="max-width: 600px;" alt="Chat Automation in Profiles"><source src="https://telegram.org/file/400780400803/1/9xSXl1meOTA.5835521.mp4/acd5f90714167b12d8" type="video/mp4"></video></div></div>

When connecting a bot, you configure **which chats it can access** — like excluding all chats with your contacts, or only responding to new chats.

> Developers can [follow this guide](/bots/features/#secretary-bots) to enable this feature. To connect a bot to your profile, go to _Settings > Chat Automation_.

#### Custom AI Styles

Any user can now use **their own prompts** to build **unique styles** in the [text editor](/blog/ai-editor-mighty-polls-and-more/#ai-text-editor). With this, teams can easily **standardize text** for posts and promotions, while communities can create meme-filled styles for their members.

Each custom style has a **shareable link** that allows other users to **preview the style** by generating examples and **instantly add** it to their text editor.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400804/5/FSmcgogf61I.65636.jpg/68b620da8a6e3af94f" style="max-width: 600px;" alt="Custom AI Styles"><source src="https://telegram.org/file/400780400076/5/8WdXQjctN40.6493392.mp4/d626c9be235873d78e" type="video/mp4"></video></div></div>

> To build your own AI Style, tap the _'Create'_ button in the _'Style'_ tab of the AI Text Editor.

#### Expanded Emoji and Sticker Search

Over **100 million** emoji and stickers created by Telegram users can now be easily found via the **search function** in the sticker panel. The search bar supports **keywords in 36 languages** — with more coming soon.

The search function is powered by **custom AI models** that run on the [Cocoon Network](https://cocoon.org/) to efficiently **scan and label** the millions of public stickers generated by Telegram users each year.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400580/3/EdmWwdhdRoE.66683.jpg/0b59a5df39713bb658" style="max-width: 600px;" alt="Expanded Emoji and Sticker Search"><source src="https://telegram.org/file/400780400532/7/M1dag-POzU4.8881072.mp4/d90bf0ed05adf18ba5" type="video/mp4"></video></div></div>

> To quickly make your own stickers, use the built-in [sticker editor](/blog/sticker-maker/#make-a-sticker) or upload your artwork via the [@Stickers Mini App](/blog/profile-music-gift-themes/#stickers-mini-app).

#### Statistics for Polls

Polls in groups and channels now display an **interactive graph** for admins, which tracks the **number of votes** for each option over time.

<div class="blog_image_wrap blog_wide_image_wrap"><a href="https://telegram.org/file/400780400207/5/_TJH-nqzoOk.123672.jpg/5f7f92c4399d39b755" target="_blank"><img src="https://telegram.org/file/400780400207/5/_TJH-nqzoOk.123672.jpg/5f7f92c4399d39b755" alt="Statistics for Polls" srcset="/file/400780400207/5/_TJH-nqzoOk.123672.jpg/5f7f92c4399d39b755 , 2x"></a></div>

> Poll stats become available after a poll receives **100 votes**.

#### Custom Limits for Polls

Channel admins are now able to set **custom limits** on who can participate in polls — allowing **only subscribers** or only users from **specific countries**.

<div class="blog_image_wrap blog_wide_image_wrap"><a href="https://telegram.org/file/400780400930/4/req8ApBjWKc.63332.jpg/876c4453b9cd4dbf99" target="_blank"><img src="https://telegram.org/file/400780400930/4/req8ApBjWKc.63332.jpg/876c4453b9cd4dbf99" alt="Custom Limits for Polls" srcset="/file/400780400930/4/req8ApBjWKc.63332.jpg/876c4453b9cd4dbf99 , 2x"></a></div>

> To set limits for your poll, enable _'Restrict to subscribers'_ or _'Limit by country'_ in the poll settings.

#### Silent Scheduled Messages

Messages you schedule in advance can now be **delivered silently** — so your updates and reminders won't disturb the recipient.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://telegram.org/file/400780400117/5/qDtKWPpWkCo.41691.jpg/92c3bb7c1ed78508dc" style="max-width: 600px;" alt="Silent Scheduled Messages"><source src="https://telegram.org/file/400780400281/2/G2TR70Q2x78.3397508.mp4/c6bcef8a16d91a6e72" type="video/mp4"></video></div></div>

> To silence a scheduled message, hold the _'Send'_ button, select _'Schedule Message'_ and then tap the <img class="emoji" src="https://telegram.org/img/emoji/40/F09F9494.png" width="20" height="20" alt="🔔"> icon.

#### Removing Reactions

Group admins can now **delete reactions** from specific users to make moderation in communities even easier. When deleting a reaction, admins can also choose to **remove all reactions** from that user in just **two taps**.

<div class="blog_image_wrap blog_wide_image_wrap"><a href="https://telegram.org/file/400780400794/3/PDxWt9U1c9o.96017.jpg/4a1ad574b7046d6316" target="_blank"><img src="https://telegram.org/file/400780400794/3/PDxWt9U1c9o.96017.jpg/4a1ad574b7046d6316" alt="Removing Reactions" srcset="/file/400780400794/3/PDxWt9U1c9o.96017.jpg/4a1ad574b7046d6316 , 2x"></a></div>

> To remove a reaction, tap or hold a message, tap again to expand the list of reactions, then hold down to delete a reaction.

#### Hundreds of Bug Fixes

Thanks to user reports on Telegram's [Bug and Suggestion Platform](https://bugs.telegram.org/), our developers were able to make **over 200 improvements** across all Telegram apps.

Enjoy spring while our developers and AI agents are working to bring you more.

  

_May 7, 2026  
The Telegram Team_
