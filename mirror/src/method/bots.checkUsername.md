---
title: "bots.checkUsername"
original: "https://core.telegram.org/method/bots.checkUsername"
section: ref
description: "Check whether a username is available and valid for use when creating a managed bot »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.checkUsername","url":"/method/bots.checkUsername/"}]
layout: layout.njk
---

# bots.checkUsername

Check whether a username is available and valid for use when [creating a managed bot »](/api/bots/managed-bots/#creating-a-managed-bot).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="/method/bots.checkUsername/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Username to check; only letters, digits and underscores are allowed, must end in <code>bot</code>, and the full username must be 5–32 characters long</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>The provided username is already occupied.</td></tr><tr><td>400</td><td>USERNAME_SUFFIX_MISSING</td><td>The required <code>bot</code> suffix is missing from the passed username.</td></tr></tbody></table>

### Related pages

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).
