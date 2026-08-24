---
title: "updates.ChannelDifference"
original: "https://core.telegram.org/type/updates.ChannelDifference"
section: ref
description: "Contains the difference (new messages) between our local channel state and the remote state"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.ChannelDifference","url":"/type/updates.ChannelDifference/"}]
layout: layout.njk
---

# updates.ChannelDifference

Contains the difference (new messages) between our local channel state and the remote state

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updates.channelDifferenceEmpty/">updates.channelDifferenceEmpty</a>#3e11affb flags:<a href="/type/%23/">#</a> final:flags.0?true pts:<a href="/type/int/">int</a> timeout:flags.1?<a href="/type/int/">int</a> = <a href="/type/updates.ChannelDifference/" class="current_page_link">updates.ChannelDifference</a>;
<a href="/constructor/updates.channelDifferenceTooLong/">updates.channelDifferenceTooLong</a>#a4bcc6fe flags:<a href="/type/%23/">#</a> final:flags.0?true timeout:flags.1?<a href="/type/int/">int</a> dialog:<a href="/type/Dialog/">Dialog</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/updates.ChannelDifference/" class="current_page_link">updates.ChannelDifference</a>;
<a href="/constructor/updates.channelDifference/">updates.channelDifference</a>#2064674e flags:<a href="/type/%23/">#</a> final:flags.0?true pts:<a href="/type/int/">int</a> timeout:flags.1?<a href="/type/int/">int</a> new_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; other_updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/updates.ChannelDifference/" class="current_page_link">updates.ChannelDifference</a>;

---functions---

<a href="/method/updates.getChannelDifference/">updates.getChannelDifference</a>#3173d78 flags:<a href="/type/%23/">#</a> force:flags.0?true channel:<a href="/type/InputChannel/">InputChannel</a> filter:<a href="/type/ChannelMessagesFilter/">ChannelMessagesFilter</a> pts:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/updates.ChannelDifference/" class="current_page_link">updates.ChannelDifference</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/updates.channelDifferenceEmpty/">updates.channelDifferenceEmpty</a></td><td>There are no new updates</td></tr><tr><td><a href="/constructor/updates.channelDifferenceTooLong/">updates.channelDifferenceTooLong</a></td><td>The passed <code>pts</code> is too old: one or more updates starting from the specified PTS were deleted from the message box of this channel.<br><br>For supergroups/channels, this usually happens for updates older than <code>latestPts - 100000</code> (though do not rely on this value, it's a server-side implementation detail that may change, and should not be used by clients in any way).</td></tr><tr><td><a href="/constructor/updates.channelDifference/">updates.channelDifference</a></td><td>The new updates</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/updates.getChannelDifference/">updates.getChannelDifference</a></td><td>Returns the difference between the current state of updates of a certain channel and transmitted.</td></tr></tbody></table>
