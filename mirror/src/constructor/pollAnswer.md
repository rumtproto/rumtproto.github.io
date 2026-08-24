---
title: "pollAnswer"
original: "https://core.telegram.org/constructor/pollAnswer"
section: ref
description: "A possible answer of a poll"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pollAnswer","url":"/constructor/pollAnswer/"}]
layout: layout.njk
---

# pollAnswer

A possible answer of a poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pollAnswer/" class="current_page_link">pollAnswer</a>#ff16e2ca text:<a href="/type/TextWithEntities/">TextWithEntities</a> option:<a href="/type/bytes/">bytes</a> = <a href="/type/PollAnswer/">PollAnswer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Textual representation of the answer (only <a href="/api/premium/">Premium</a> users can use <a href="/api/custom-emoji/">custom emoji entities</a> here).</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>The param that has to be passed to <a href="/method/messages.sendVote/">messages.sendVote</a>.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/MessageMedia/">MessageMedia</a></td><td>Optional media attachment displayed alongside the answer</td></tr><tr><td><strong>added_by</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Peer/">Peer</a></td><td>The peer who added this answer; only set for answers dynamically added to an open-answer poll, see <a href="/api/poll/#open-answer-polls">polls »</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>When this answer was added; only set for answers dynamically added to an open-answer poll</td></tr></tbody></table>

### Type

[PollAnswer](/type/PollAnswer/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [messages.sendVote](/method/messages.sendVote/)

Vote in a [poll](/constructor/poll/)

Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](/api/poll/#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](/api/poll/#country-restricted-polls) and the user's [`phone_country_iso2` »](/api/config/#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](/api/poll/#vote-restrictions) for the full list of conditions.

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
