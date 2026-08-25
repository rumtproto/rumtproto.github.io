---
title: "More Speed and Security&#33;"
original: "https://telegram.org/blog/encrypted-cdns"
section: blog
date: 2017-07-23
description: "We at Telegram love to build sophisticated technologies that combine speed with security. Starting with Telegram 4.2, we support CDN caching. CDNs are third-party caching nodes…"
crumbs: []
layout: layout.njk
---

# More Speed and Security&#33;

<img src="https://telegram.org/file/811140669/160d/g_PcT-M-m8A.24441.gif/bd548b27837cc8f195" class="blog_side_image">

[<img src="https://telegram.org/file/811140290/150b/IpxYa5K2_3E.127469/11d888bbf92b4b42d8" title="Encrypted CDNs for Speed and Security">](https://telegram.org/file/811140886/164e/NRgod4GLJ74.739306/3d3e38ddcf093e95f9)

We at Telegram love to build sophisticated technologies that combine speed with security. Starting with Telegram **4.2**, we support [CDN caching](https://en.wikipedia.org/wiki/Content_delivery_network). CDNs are third-party caching nodes that we’ll use to cache publicly available videos and photos posted in massive channels (say, with **100,000+** subscribers) for users in remote locations where Telegram is popular.

This will increase download speeds for tens of millions of users as CDN caching allows data to travel shorter distances and helps avoid bottlenecks that exist between regions.

While these caching nodes are only used to temporarily store **public** media (imagine Telegram versions of superpopular YouTube hits), all data that goes through them is **encrypted** with a key unknown to the caching nodes. In other words, we treat these CDN caching nodes just like we treat your internet provider – they only ever get encrypted junk they can't decipher.

#### Here’s how it works

[<img src="https://telegram.org/file/811140934/1815/aSQ-nSUHJzc.45662/40c2955965574cef80" title="Content Delivery Network">](https://telegram.org/file/811140934/1815/aSQ-nSUHJzc.45662/40c2955965574cef80)

If you're interested in the technical details, feel free to check out [this page](/cdn/) that describes the relevant encryption and security checks. And as always – the updated source code for the Telegram apps is open and available for your scrutiny. Security experts are welcome to verify the implementation of CDNs based on the [open source code](/apps/#source-code) we make available for all of our apps.

Thanks to this technology, the download speed for public photos and videos in places like South America, Turkey, Indonesia, India, Iran or Iraq will significantly increase without the slightest compromise in security.

#### To sum up

-   Download speeds for popular public media are set to increase several times for millions of Telegram users.
-   CDN caching nodes are not Telegram servers and not part of the Telegram cloud.
-   CDNs are used only for caching popular public media from massive channels. Private data never goes there.
-   CDNs only get encrypted data and they never have the keys: even if they are accessed by hackers or third parties, the attacker won’t be able to decipher the files.
-   Data downloaded from CDN caching nodes is always verified by the receiving Telegram app by way of hash: attackers won’t be able to replace any files with their own versions.
-   Detailed technical info about CDNs can be found [here](/cdn/), the updated source code of Telegram apps ready for CDN support can be found [here](/apps/#source-code).
-   Telegram 4.2 also includes [a bucketful of other goodies](/blog/now-you-see-me/) for you to enjoy.

  

Stay safe (and fast)!

_July 23, 2017  
The Telegram Team_
