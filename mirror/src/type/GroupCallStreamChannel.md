---
title: "GroupCallStreamChannel"
original: "https://core.telegram.org/type/GroupCallStreamChannel"
section: ref
description: "Info about an RTMP stream in a group call or livestream"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"GroupCallStreamChannel","url":"/type/GroupCallStreamChannel/"}]
layout: layout.njk
---

# GroupCallStreamChannel

Info about an RTMP stream in a group call or livestream

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/groupCallStreamChannel/">groupCallStreamChannel</a>#80eb48af channel:<a href="/type/int/">int</a> scale:<a href="/type/int/">int</a> last_timestamp_ms:<a href="/type/long/">long</a> = <a href="/type/GroupCallStreamChannel/" class="current_page_link">GroupCallStreamChannel</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/groupCallStreamChannel/">groupCallStreamChannel</a></td><td>Describes an available RTMP stream channel and its current playback timestamp, see <a href="/api/group-calls/#rtmp-mode">playing an RTMP livestream »</a>.</td></tr></tbody></table>
