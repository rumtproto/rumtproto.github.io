---
title: "DecryptedMessageAction"
original: "https://core.telegram.org/type/DecryptedMessageAction"
section: ref
description: "Object describes the action to which a service message is linked."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DecryptedMessageAction","url":"/type/DecryptedMessageAction/"}]
layout: layout.njk
---

# DecryptedMessageAction

Object describes the action to which a service message is linked.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessageActionSetMessageTTL/">decryptedMessageActionSetMessageTTL</a>#a1733aec ttl_seconds:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionReadMessages/">decryptedMessageActionReadMessages</a>#c4f40be random_ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionDeleteMessages/">decryptedMessageActionDeleteMessages</a>#65614304 random_ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionScreenshotMessages/">decryptedMessageActionScreenshotMessages</a>#8ac1f475 random_ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionFlushHistory/">decryptedMessageActionFlushHistory</a>#6719e45c = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;

===17===
<a href="/constructor/decryptedMessageActionResend/">decryptedMessageActionResend</a>#511110b0 start_seq_no:<a href="/type/int/">int</a> end_seq_no:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionNotifyLayer/">decryptedMessageActionNotifyLayer</a>#f3048883 layer:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionTyping/">decryptedMessageActionTyping</a>#ccb27641 action:<a href="/type/SendMessageAction/">SendMessageAction</a> = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;

===20===
<a href="/constructor/decryptedMessageActionRequestKey/">decryptedMessageActionRequestKey</a>#f3c9611b exchange_id:<a href="/type/long/">long</a> g_a:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionAcceptKey/">decryptedMessageActionAcceptKey</a>#6fe1735b exchange_id:<a href="/type/long/">long</a> g_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionAbortKey/">decryptedMessageActionAbortKey</a>#dd05ec6b exchange_id:<a href="/type/long/">long</a> = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionCommitKey/">decryptedMessageActionCommitKey</a>#ec2e0b9b exchange_id:<a href="/type/long/">long</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionNoop/">decryptedMessageActionNoop</a>#a82fdd63 = <a href="/type/DecryptedMessageAction/" class="current_page_link">DecryptedMessageAction</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessageActionSetMessageTTL/">decryptedMessageActionSetMessageTTL</a></td><td>Setting of a message lifetime after reading.<br><br>Upon receiving such message the client shall start deleting of all messages of an encrypted chat <strong>ttl_seconds</strong> seconds after the messages were read by user.</td></tr><tr><td><a href="/constructor/decryptedMessageActionReadMessages/">decryptedMessageActionReadMessages</a></td><td>Messages marked as read.</td></tr><tr><td><a href="/constructor/decryptedMessageActionDeleteMessages/">decryptedMessageActionDeleteMessages</a></td><td>Deleted messages.</td></tr><tr><td><a href="/constructor/decryptedMessageActionScreenshotMessages/">decryptedMessageActionScreenshotMessages</a></td><td>A screenshot was taken.</td></tr><tr><td><a href="/constructor/decryptedMessageActionFlushHistory/">decryptedMessageActionFlushHistory</a></td><td>The entire message history has been deleted.</td></tr><tr><td><a href="/constructor/decryptedMessageActionResend/">decryptedMessageActionResend</a></td><td>Request for the other party in a Secret Chat to automatically resend a contiguous range of previously sent messages, as explained in <a href="/api/end-to-end/seq_no/">Sequence number is Secret Chats</a>.</td></tr><tr><td><a href="/constructor/decryptedMessageActionNotifyLayer/">decryptedMessageActionNotifyLayer</a></td><td>A notification stating the API layer that is used by the client. You should use your current layer and take notice of the layer used on the other side of a conversation when sending messages.</td></tr><tr><td><a href="/constructor/decryptedMessageActionTyping/">decryptedMessageActionTyping</a></td><td>User is preparing a message: typing, recording, uploading, etc.</td></tr><tr><td><a href="/constructor/decryptedMessageActionRequestKey/">decryptedMessageActionRequestKey</a></td><td>Request rekeying, see <a href="/api/end-to-end/pfs/">rekeying process</a></td></tr><tr><td><a href="/constructor/decryptedMessageActionAcceptKey/">decryptedMessageActionAcceptKey</a></td><td>Accept new key</td></tr><tr><td><a href="/constructor/decryptedMessageActionAbortKey/">decryptedMessageActionAbortKey</a></td><td>Abort rekeying</td></tr><tr><td><a href="/constructor/decryptedMessageActionCommitKey/">decryptedMessageActionCommitKey</a></td><td>Commit new key, see <a href="/api/end-to-end/pfs/">rekeying process</a></td></tr><tr><td><a href="/constructor/decryptedMessageActionNoop/">decryptedMessageActionNoop</a></td><td>NOOP action</td></tr></tbody></table>
