---
title: "poll"
original: "https://core.telegram.org/constructor/poll"
section: ref
description: "Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"poll","url":"/constructor/poll/"}]
layout: layout.njk
---

# poll

Poll

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/poll/" class="current_page_link">poll</a>#58747131 id:<a href="/type/long/">long</a> flags:<a href="/type/%23/">#</a> closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true question:<a href="/type/TextWithEntities/">TextWithEntities</a> answers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PollAnswer/">PollAnswer</a>&gt; close_period:flags.4?<a href="/type/int/">int</a> close_date:flags.5?<a href="/type/int/">int</a> = <a href="/type/Poll/">Poll</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the poll</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>closed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the poll is closed and doesn't accept any more answers</td></tr><tr><td><strong>public_voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether cast votes are publicly visible to all users (non-anonymous poll)</td></tr><tr><td><strong>multiple_choice</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether multiple options can be chosen as answer</td></tr><tr><td><strong>quiz</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this is a quiz (with wrong and correct answers, results shown in the return type).<br>When creating a poll, the correct answers are specified in <a href="/constructor/inputMediaPoll/">inputMediaPoll</a>.<code>correct_answers</code>.</td></tr><tr><td><strong>open_answers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether users can add new answer options after the poll is created, see <a href="/api/poll/#open-answer-polls">open-answer polls »</a></td></tr><tr><td><strong>revoting_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>If set, users cannot change their vote after casting it</td></tr><tr><td><strong>shuffle_answers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Whether answer options are displayed in a randomized order to each user</td></tr><tr><td><strong>hide_results_until_close</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether vote results are hidden from all participants until the poll is closed</td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>Whether the current user created this poll</td></tr><tr><td><strong>subscribers_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>Whether only subscribers can vote: a user may vote only if they are currently a member of the channel/supergroup and joined it at least 24 hours before the poll was posted, see <a href="/api/poll/#subscriber-only-polls">subscriber-only polls »</a>.</td></tr><tr><td><strong>question</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>The question of the poll (only <a href="/api/premium/">Premium</a> users can use <a href="/api/custom-emoji/">custom emoji entities</a> here).</td></tr><tr><td><strong>answers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PollAnswer/">PollAnswer</a>&gt;</td><td>The possible answers (2-<a href="/api/config/#poll-answers-max">poll_answers_max</a>), vote using <a href="/method/messages.sendVote/">messages.sendVote</a>.</td></tr><tr><td><strong>close_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Amount of time in seconds the poll will be active after creation, up to <a href="/api/config/#poll-close-period-max"><code>poll_close_period_max</code> »</a> seconds. Can't be used together with close_date.</td></tr><tr><td><strong>close_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>Point in time (Unix timestamp) when the poll will be automatically closed. Up to <a href="/api/config/#poll-close-period-max"><code>poll_close_period_max</code> »</a> seconds in the future; can't be used together with close_period.</td></tr><tr><td><strong>countries_iso2</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>If set, only users from the specified ISO 3166-1 alpha-2 country codes may vote, see <a href="/api/poll/#country-restricted-polls">country-restricted polls »</a>; a user may vote only if the <a href="/api/config/#phone-country-iso2"><code>phone_country_iso2</code> »</a> configuration parameter is contained in this list.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash for use with <a href="/method/messages.getPollResults/">messages.getPollResults</a></td></tr></tbody></table>

### Type

[Poll](/type/Poll/)

### Related pages

#### [inputMediaPoll](/constructor/inputMediaPoll/)

A poll

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [messages.sendVote](/method/messages.sendVote/)

Vote in a [poll](/constructor/poll/)

Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](/api/poll/#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](/api/poll/#country-restricted-polls) and the user's [`phone_country_iso2` »](/api/config/#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](/api/poll/#vote-restrictions) for the full list of conditions.

#### [messages.getPollResults](/method/messages.getPollResults/)

Get poll results
