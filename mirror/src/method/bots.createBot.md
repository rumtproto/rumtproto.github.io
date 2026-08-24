---
title: "bots.createBot"
original: "https://core.telegram.org/method/bots.createBot"
section: ref
description: "Create a managed bot » owned by the current user and controlled by the specified manager bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.createBot","url":"/method/bots.createBot/"}]
layout: layout.njk
---

# bots.createBot

Create a [managed bot »](/api/bots/managed-bots/#creating-a-managed-bot) owned by the current user and controlled by the specified manager bot.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="https://core.telegram.org/method/bots.createBot?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>via_deeplink</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set only if the creation prompt was opened from a <a href="/api/links/#managed-bot-creation-request-links">managed bot creation request deep link »</a></td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Display name of the bot, 1–64 characters</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Username for the bot, as validated by <a href="/method/bots.checkUsername/">bots.checkUsername</a></td></tr><tr><td><strong>manager_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The manager bot that will control the created bot; must have the <a href="/constructor/user/">user</a>.<code>bot_can_manage_bots</code> flag set</td></tr></tbody></table>

### Result

[User](/type/User/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_CREATE_LIMIT_EXCEEDED</td><td>The current user already owns the maximum allowed number of owned bots, as specified by <a href="/api/config/#bots-create-limit-default"><code>bots_create_limit_default</code>&nbsp;»</a> and <a href="/api/config/#bots-create-limit-premium"><code>bots_create_limit_premium</code>&nbsp;»</a>; if the current user doesn't have Telegram Premium, upgrading to Premium will allow them to create more bots.</td></tr><tr><td>400</td><td>MANAGER_INVALID</td><td>The specified manager bot is invalid.</td></tr><tr><td>400</td><td>MANAGER_PERMISSION_MISSING</td><td>The specified manager bot does not have the <a href="/constructor/user/">user</a>.<code>bot_can_manage_bots</code> flag set.</td></tr><tr><td>400</td><td>NAME_INVALID</td><td>The specified bot name is invalid.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>The provided username is already occupied.</td></tr><tr><td>400</td><td>USERNAME_SUFFIX_MISSING</td><td>The required <code>bot</code> suffix is missing from the passed username.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [bots.checkUsername](/method/bots.checkUsername/)

Check whether a username is available and valid for use when [creating a managed bot »](/api/bots/managed-bots/#creating-a-managed-bot).

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](/api/peers/).

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
