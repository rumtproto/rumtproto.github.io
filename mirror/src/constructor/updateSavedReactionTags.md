---
title: "updateSavedReactionTags"
original: "https://core.telegram.org/constructor/updateSavedReactionTags"
section: ref
description: "The list of reaction tag » names assigned by the user has changed and should be refetched using messages.getSavedReactionTags »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateSavedReactionTags","url":"/constructor/updateSavedReactionTags/"}]
layout: layout.njk
---

# updateSavedReactionTags

The list of [reaction tag »](/api/saved-messages/#tags) names assigned by the user has changed and should be refetched using [messages.getSavedReactionTags »](/method/messages.getSavedReactionTags/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateSavedReactionTags/" class="current_page_link">updateSavedReactionTags</a>#39c67432 = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Type

[Update](/type/Update/)

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/)

Fetch the full list of [saved message tags](/api/saved-messages/#tags) created by the user.
