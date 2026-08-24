---
title: "pollAnswerVoters"
original: "https://core.telegram.org/constructor/pollAnswerVoters"
section: ref
description: "A poll answer, and how users voted on it"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pollAnswerVoters","url":"/constructor/pollAnswerVoters/"}]
layout: layout.njk
---

# pollAnswerVoters

A poll answer, and how users voted on it

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pollAnswerVoters/" class="current_page_link">pollAnswerVoters</a>#3b6ddad2 flags:<a href="/type/%23/">#</a> chosen:flags.0?true correct:flags.1?true option:<a href="/type/bytes/">bytes</a> voters:<a href="/type/int/">int</a> = <a href="/type/PollAnswerVoters/">PollAnswerVoters</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>chosen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether we have chosen this answer</td></tr><tr><td><strong>correct</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>For quizzes, whether the option we have chosen is correct</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>The param that has to be passed to <a href="/method/messages.sendVote/">messages.sendVote</a>.</td></tr><tr><td><strong>voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>How many users voted for this option</td></tr><tr><td><strong>recent_voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;</td><td>Peers of the most recent voters for this option; mutually exclusive with <code>voters</code></td></tr></tbody></table>

### Type

[PollAnswerVoters](/type/PollAnswerVoters/)

### Related pages

#### [messages.sendVote](/method/messages.sendVote/)

Vote in a [poll](/constructor/poll/)

Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](/api/poll/#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](/api/poll/#country-restricted-polls) and the user's [`phone_country_iso2` »](/api/config/#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](/api/poll/#vote-restrictions) for the full list of conditions.
