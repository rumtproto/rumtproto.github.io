---
title: "pollResults"
original: "https://core.telegram.org/constructor/pollResults"
section: ref
description: "In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pollResults","url":"/constructor/pollResults/"}]
layout: layout.njk
---

# pollResults

Results of poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pollResults/" class="current_page_link">pollResults</a>#7adf2420 flags:<a href="/type/%23/">#</a> min:flags.0?true results:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PollAnswerVoters/">PollAnswerVoters</a>&gt; total_voters:flags.2?<a href="/type/int/">int</a> recent_voters:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; solution:flags.4?<a href="/type/string/">string</a> solution_entities:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/PollResults/">PollResults</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Similar to <a href="/api/min/">min</a> objects, used for poll constructors that are the same for all users so they don't have the option chosen by the current user (you can use <a href="/method/messages.getPollResults/">messages.getPollResults</a> to get the full poll results).</td></tr><tr><td><strong>has_unread_votes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether there are unread votes in this non-anonymous poll, see <a href="/api/poll/#unread-poll-votes">polls »</a></td></tr><tr><td><strong>can_view_stats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether the current user can view detailed <a href="/api/stats/#poll-statistics">poll statistics »</a></td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PollAnswerVoters/">PollAnswerVoters</a>&gt;</td><td>Poll results</td></tr><tr><td><strong>total_voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Total number of people that voted in the poll</td></tr><tr><td><strong>recent_voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;</td><td>IDs of the last users that recently voted in the poll</td></tr><tr><td><strong>solution</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>Explanation of quiz solution</td></tr><tr><td><strong>solution_entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text in quiz solution</a></td></tr><tr><td><strong>solution_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/MessageMedia/">MessageMedia</a></td><td>Optional media attachment shown alongside the quiz solution explanation</td></tr></tbody></table>

### Type

[PollResults](/type/PollResults/)

### Related pages

#### [Min constructors](/api/min/)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.

#### [messages.getPollResults](/method/messages.getPollResults/)

Get poll results

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
