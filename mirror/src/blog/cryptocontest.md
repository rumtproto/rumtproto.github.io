---
title: "&#036;300,000 for Cracking Telegram Encryption"
original: "https://telegram.org/blog/cryptocontest"
section: blog
description: "Earlier this year we had a contest to decipher intercepted Telegram messages, that did not produce a winner. Today we announce a new contest with an easier task and a larger prize…"
crumbs: []
layout: layout.njk
---

# &#036;300,000 for Cracking Telegram Encryption

<img src="https://telegram.org/file/811140704/1/2Er4fG4UQLI/7ee52af54b98564554" class="blog_side_image">

> This contest is [over](/blog/cryptocontest-ends/), but the [Telegram Bug Bounty Program](/bug-bounty/) is **always open**.
> 
> **Security researchers** are welcome to submit any issues they find in the Telegram **apps** or **protocol** to us at **security@telegram.org**. All submissions which result in a change of code or configuration are eligible for bounties, ranging from **$100** to [**$100,000**](/blog/crowdsourcing-a-more-secure-future/) or more, depending on the severity of the issue.

Earlier this year we had a [contest](/blog/winter-contest-ends/) to decipher intercepted Telegram messages, that did not produce a winner. Today we announce a new contest with an easier task and a larger prize — **$300,000** for cracking [Telegram's encryption](/api/end-to-end/), and this time contestants can not only monitor traffic, but also act as the Telegram server and use active attacks, which vastly increases their capabilities.

In this contest you assume the role of a malicious entity in full control of both the communication lines and the Telegram servers themselves.

> **UPD** The current round of the contest is over. [**Go to results »**](/blog/cryptocontest-ends/)

Your goal is to extract sensitive data (a secret email address) from a Secret Chat between two users — Nick and Paul. You control the entire process, from chat creation to the sending of each individual message and can perform various active attacks, including MITM, KPA, CPA, replay attacks, etc.

#### Contest Interface

In order to facilitate the task, we have created an interface, using which you can act as the server and determine which side gets what data. For more details, please check out the **[Cracking Contest Description](/contest300K/)**.

#### Objectives

In order to confirm that Telegram crypto was indeed cracked and claim your **$300,000**, you'll need to send an email to the secret email address that you've extracted from one of the messages exchanged by Paul and Nick.

Your email must contain:  
\- The entire text of the message that contained the secret email.  
\- Session logs for the successful attempt with your user\_id.  
\- A detailed explanation of the attack on the protocol.  
\- Your bank account details to receive the $300,000 prize.

There is also a bonus objective with an independent prize of **$100,000**.  
[See full description for details »](/contest300K/#bonus-objective)

#### End Date

To prove that the competition was fair, we will add a command that returns the keys used for encryption as soon as a winner is announced. In case there is no winner by February 4, 2015, decryption commands will be added at that date.

[<img src="https://telegram.org/file/811140509/1/w7ub14yjRmE/857f9fc6bf21c49411" title="Click for print quality image" class="dev_page_image">](https://telegram.org/file/811140570/1/HuWOtUZqH3Y/ae540ee4fe9e565761)  

_November 4, 2014  
The Telegram Team_
