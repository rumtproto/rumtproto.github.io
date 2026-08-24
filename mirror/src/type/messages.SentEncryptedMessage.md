---
title: "Messages.SentEncryptedMessage"
original: "https://core.telegram.org/type/messages.SentEncryptedMessage"
section: ref
description: "Contains info on message sent to an encrypted chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.SentEncryptedMessage","url":"/type/messages.SentEncryptedMessage/"}]
layout: layout.njk
---

# Messages.SentEncryptedMessage

Contains info on message sent to an encrypted chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.sentEncryptedMessage/">messages.sentEncryptedMessage</a>#560f8935 date:<a href="/type/int/">int</a> = <a href="/type/messages.SentEncryptedMessage/" class="current_page_link">messages.SentEncryptedMessage</a>;
<a href="/constructor/messages.sentEncryptedFile/">messages.sentEncryptedFile</a>#9493ff32 date:<a href="/type/int/">int</a> file:<a href="/type/EncryptedFile/">EncryptedFile</a> = <a href="/type/messages.SentEncryptedMessage/" class="current_page_link">messages.SentEncryptedMessage</a>;

---functions---

<a href="/method/messages.sendEncrypted/">messages.sendEncrypted</a>#44fa7a15 flags:<a href="/type/%23/">#</a> silent:flags.0?true peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> random_id:<a href="/type/long/">long</a> data:<a href="/type/bytes/">bytes</a> = <a href="/type/messages.SentEncryptedMessage/" class="current_page_link">messages.SentEncryptedMessage</a>;
<a href="/method/messages.sendEncryptedFile/">messages.sendEncryptedFile</a>#5559481d flags:<a href="/type/%23/">#</a> silent:flags.0?true peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> random_id:<a href="/type/long/">long</a> data:<a href="/type/bytes/">bytes</a> file:<a href="/type/InputEncryptedFile/">InputEncryptedFile</a> = <a href="/type/messages.SentEncryptedMessage/" class="current_page_link">messages.SentEncryptedMessage</a>;
<a href="/method/messages.sendEncryptedService/">messages.sendEncryptedService</a>#32d439a4 peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> random_id:<a href="/type/long/">long</a> data:<a href="/type/bytes/">bytes</a> = <a href="/type/messages.SentEncryptedMessage/" class="current_page_link">messages.SentEncryptedMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.sentEncryptedMessage/">messages.sentEncryptedMessage</a></td><td>Message without file attachments sent to an encrypted file.</td></tr><tr><td><a href="/constructor/messages.sentEncryptedFile/">messages.sentEncryptedFile</a></td><td>Message with a file enclosure sent to a protected chat</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.sendEncrypted/">messages.sendEncrypted</a></td><td>Sends a text message to a secret chat.</td></tr><tr><td><a href="/method/messages.sendEncryptedFile/">messages.sendEncryptedFile</a></td><td>Sends a message with a file attachment to a secret chat</td></tr><tr><td><a href="/method/messages.sendEncryptedService/">messages.sendEncryptedService</a></td><td>Sends a service message to a secret chat.</td></tr></tbody></table>
