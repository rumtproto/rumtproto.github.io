---
title: "GroupCallParticipant"
original: "https://core.telegram.org/type/GroupCallParticipant"
section: ref
description: "Info about a group call participant"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"GroupCallParticipant","url":"/type/GroupCallParticipant/"}]
layout: layout.njk
---

# GroupCallParticipant

Info about a group call participant

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/groupCallParticipant/">groupCallParticipant</a>#2a3dc7ac flags:<a href="/type/%23/">#</a> muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> active_date:flags.3?<a href="/type/int/">int</a> source:<a href="/type/int/">int</a> volume:flags.7?<a href="/type/int/">int</a> about:flags.11?<a href="/type/string/">string</a> raise_hand_rating:flags.13?<a href="/type/long/">long</a> video:flags.6?<a href="/type/GroupCallParticipantVideo/">GroupCallParticipantVideo</a> presentation:flags.14?<a href="/type/GroupCallParticipantVideo/">GroupCallParticipantVideo</a> paid_stars_total:flags.16?<a href="/type/long/">long</a> = <a href="/type/GroupCallParticipant/" class="current_page_link">GroupCallParticipant</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/groupCallParticipant/">groupCallParticipant</a></td><td>Describes a group call participant and their current state, see <a href="/api/group-calls/#applying-group-call-updates">applying group call updates »</a>.</td></tr></tbody></table>
