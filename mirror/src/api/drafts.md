---
title: "Message drafts"
original: "https://core.telegram.org/api/drafts"
section: api
description: "Message drafts in Telegram allow syncing the text typed into message fields between devices."
crumbs: [{"title":"API","url":"/api/"},{"title":"Message drafts","url":"/api/drafts/"}]
layout: layout.njk
---

# Message drafts

Message [drafts](https://telegram.org/blog/drafts) in Telegram allow syncing the text typed into message fields between devices.

### Drafts

Drafts are represented by the [DraftMessage](/type/DraftMessage/) constructors. The parameters of the peer-specific draft should be used as defaults when composing a message to be sent to a certain peer (in the case of media, the same draft should still be used as base, the message will become the caption). If the user exits the app before sending the message, the message should be saved as a draft:

### Saving drafts

Drafts can be saved using the [messages.saveDraft](/method/messages.saveDraft/) method.

### Downloading drafts

New drafts are automatically sent to all devices via [updateDraftMessage](/constructor/updateDraftMessage/) updates.

[Dialog](/constructor/dialog/) objects fetched via the API also contain the draft associated with the dialog.

### Clearing drafts

Drafts can be cleared by setting the `clear_draft` flag when sending messages or media using [messages.sendMessage](/method/messages.sendMessage/), [messages.sendMedia](/method/messages.sendMedia/), [messages.sendMultiMedia](/method/messages.sendMultiMedia/), [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/) and similar or manually by passing empty values to [messages.saveDraft](/method/messages.saveDraft/).
