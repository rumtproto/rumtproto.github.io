---
title: "Crowdsourcing a More Secure Future"
original: "https://telegram.org/blog/crowdsourcing-a-more-secure-future"
section: blog
description: "A few days ago we launched a contest to improve Telegram's security and are delighted to already have the first results. A Russian IT-community user identified a potentially…"
crumbs: []
layout: layout.njk
---

# Crowdsourcing a More Secure Future

<img src="https://telegram.org/img/tl_card_castle.png" class="blog_side_image">

> **UPD:** See [this page](/bug-bounty/) for the latest details about the [Telegram Bug Bounty Program](/bug-bounty/).

A few days ago we launched a [**contest**](/blog/winter-contest-ends/) to improve Telegram's security and are delighted to already have the first results. A [Russian IT-community](http://habrahabr.ru) user identified a potentially vulnerable spot in our secret chat implementation. While this would not help him decipher the traffic and win [the contest](/blog/winter-contest-ends/), his achievement deserves a notice — and a big prize.

> The habrahabr user [x7mz](http://habrahabr.ru/users/x7mz/) had discovered that in case the Telegram server could be seized by a malicious third party, it could send different nonce numbers to each of the clients participating in a secret chat.
> 
> These nonce numbers were introduced to add more randomness to the secret chat keys, mostly because of possible undiscovered vulnerabilities of the random generators on mobile devices (for example, one such vulnerability was found this August in [android phones](http://android-developers.blogspot.ru/2013/08/some-securerandom-thoughts.html)).
> 
> As was pointed out, this solution would have also made it possible for the visual representations of the shared secret key to be identical in case of a man-in-the-middle attack — provided such attack was done by the seized server. Obviously, the server has been under Telegram's control all this time, so this theoretical threat never had a chance to come to life.

The developer who found the potential weakness has earned a reward of **$100,000**. We have contacted him to find out how he would like to collect his prize.

A similar reward awaits anyone who finds viable ways of compromising [MTProto’s](/mtproto/) security (and there is an outstanding reward of $200,000 for [deciphering Telegram traffic](/blog/winter-contest-ends/)). All submissions to **security@telegram.org** which result in a change of code or configuration are eligible for bounties, ranging from **$500** to **$100,000** or more, depending on the severity of the issue.

This story showcases the importance of keeping the [protocol specification](/mtproto/) and [source code](/apps/) open — this way thousands of bright minds from all over the world can help us find potential vulnerabilities and improve the protocol.

Let’s keep on looking for any weak spots. Together we can make Telegram unbreakable.

December 21, 2013  
_The Telegram Team_
