---
title: "A DDoS in Asia Pacific"
original: "https://telegram.org/blog/ddos"
section: blog
date: 2015-07-13
description: "Just in case you're not following us on Twitter, Telegram's Asia Pacific server cluster has been under a DDoS attack since morning on July, 10."
crumbs: []
layout: layout.njk
---

# A DDoS in Asia Pacific

<img src="https://telegram.org/img/tl_card_destruct.gif" class="blog_side_image">

> **UPD:** As of July, 13, ordinary service has been restored everywhere, except for mainland China.

Just in case you're not following us on [Twitter](https://twitter.com/telegram), Telegram's **Asia Pacific** server cluster has been under a [DDoS](https://en.wikipedia.org/wiki/Denial-of-service_attack) attack since morning on July, 10.

This means that if you live in **South East Asia**, **Oceania**, **Australia** or certain parts of **India**, you may have been experiencing slower connection speeds or no connection at all for several hours that weekend.

#### What is this DDasdf thing?

**DDoS** stands for _Distributed Denial of Service_ and means that a lot of computers start making requests to a server, so that the server is slowed down or stops responding. To put this into familiar terms, imagine a thousand people jamming themselves into a bus at 6 PM on a weekday. They get in, you don‘t and that’s all a DDoS attack is.

Unlike on the bus though, the people who are getting in your way don‘t even know they’re doing this. DDoS attacks are carried out by **botnets** — thousands of computers and servers that were turned into remotely controlled zombies by malware and viruses.

#### What exactly hit Telegram?

We've been hit with **200 Gbps** of junk traffic, which feels roughly like having 200 billion very random people squeeze into your bus every second. For the most part, it was a relatively new type of DDoS known as [Tsunami SYN flood](http://blog.radware.com/security/2014/10/tsunami-syn-flood-attack/), but the attackers have shown some flexibility in their methods and adapted to changes pretty quickly.

The garbage traffic came from about a hundred thousand infected servers, most noticeably, in LeaseWeb B.V., Hetzner Online AG, PlusServer AG, NFOrce Entertainment BV, Amazon and Comcast networks. That said, the attack was distributed evenly across thousands of hosts and none contributed more than 5% of the total volume.

Fighting back would‘ve been a little easier, if the abuse departments in most of the mentioned companies didn’t process requests 9-5, Mon-Fri only. (Hours more befitting a scuba-diving shop in Vatican.)

#### Who's behind this?

Orchestrating a DDoS attack is a criminal offence in most countries and wouldn't bring good publicity to a company, so attackers usually hide their traces as best they can. It could be an angry government or an unhappy competitor.

By now we know that the attack was being coordinated from **East Asia**.

#### What's next?

Attacks on the scale of the one we were facing have become possible only recently and it‘s the first time we’ve met anything like this. But some of us have over 10 years of operating major web-services in Europe under our belts, so don't you worry!

We've managed to stay online for **95%** of our users worldwide. And as for defending the affected 5%, we‘ve got quite a few surprises up our sleeve. But we’d rather not talk about them here, since the attackers are certainly reading this as well. (hi there! ;)

So while we can't really tell you any details, we have good reasons to hope that connection will be flawless as usual for 100% of our users again. Take heart and tell your friends. Our sysadmin cyborgs are working on this 24 hours a day.

  

_July 13, 2015  
The Telegram Team_

  

[<img src="https://telegram.org/file/811140106/1/ZMgfjJeLHDI/4f698aec38eafff03b" title="200 Gbps?" style="max-width: 400px; max-height: 400px;">](https://telegram.me/addstickers/animals)
