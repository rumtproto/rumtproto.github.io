---
title: "Sequence numbers in Secret Chats"
original: "https://core.telegram.org/api/end-to-end/seq_no"
section: api
description: "It is necessary to interpret all messages in their original order to protect against reordering, reflection, replay, omission and other manipulations (decryptedMessageActionResend…"
crumbs: [{"title":"API","url":"/api/"},{"title":"Secret Chats","url":"/api/end-to-end/"},{"title":"Sequence numbers in Secret Chats","url":"/api/end-to-end/seq_no/"}]
layout: layout.njk
---

# Sequence numbers in Secret Chats

It is necessary to interpret **all** messages in their original order to protect against reordering, reflection, replay, omission and other manipulations ([decryptedMessageActionResend](/constructor/decryptedMessageActionResend/) messages are the only exception to this rule, see [avoiding concurrent gaps](#avoiding-concurrent-gaps)). Secret chats support a special mechanism for handling **seq\_no** counters independently from the server. Note that any _service messages_ in secret chats must also increment the **seq\_no**.

All Secret Chats messages in clients using Layer 17 or higher are wrapped in [decryptedMessageLayer](/constructor/decryptedMessageLayer/) and have **seq\_no** (sequence number) counters attached to them. The **seq\_no** counters in their raw form are initialized with **(out\_seq\_no, in\_seq\_no) := (0,0)**, and incremented strictly by 1 after any message (service or not) is sent/received and processed. They must be protected from mirroring before being sent to the remote client by transformation according to formula **2\*raw\_seq\_no+x**, where **x** is 0 or 1, determined by the following rule:

<table class="table"><thead><tr><th scope="col">&nbsp;</th><th scope="col"><strong>in_seq_no</strong></th><th scope="col"><strong>out_seq_no</strong></th></tr></thead><tbody><tr><td>secret chat initiated by sender</td><td>0</td><td>1</td></tr><tr><td>secret chat initiated by recipient</td><td>1</td><td>0</td></tr></tbody></table>

In this way the least significant bit of each **seq\_no** field included in the message is different for incoming and outgoing messages. This is done to prevent a possible attacker from mirroring the messages. If any of the received **in\_seq\_no** or **out\_seq\_no** are not consistent in terms of parity (see table above), the client is required to immediately abort the secret chat.

> E.g., the first message the local client sends to any secret chat will have **out\_seq\_no** of **0+x\_out**, the second one will have **out\_seq\_no** of **2\*1+x\_out**, and so on, where **x\_out** is 0 if the chat was initiated by the remote client, 1 otherwise; similarly for the received messages, but there **x\_in** is used instead of **x\_out** and is equal to 0 if the chat was initiated by the local client, 1 otherwise.

Raw sequence numbers will be used in the remaining part of this text, unless otherwise specified.

#### Preventing gaps

Your client must ensure that all outgoing secret chat messages are queued on the server in the correct order. This is achieved by correctly placing them into the [invokeAfterMsgs](/method/invokeAfterMsgs/) chain. Failure to do this may result in gaps on the remote client, which may in turn lead to aborted secret chats. The local client must maintain the correct sequence of **in\_seq\_no** for the remote client. To achieve this, assign **in\_seq\_no** and **out\_seq\_no** to each message at the _exact_ moment when the message is created, and never change them in the future.

## Security checks

#### Checking out\_seq\_no

Your client must check that it has received _each_ message with the sequence number **out\_seq\_no** starting from 0 to some current point **C**. It should then expect the next message to have the sequence number **out\_seq\_no=C+1**. If the **out\_seq\_no** in the received message does not match this, the following needs to be done:

-   If the received **out\_seq\_no&lt;=C**, the local client must drop the message (repeated message). The client should not check the contents of the message because the original message could have been deleted (see [Deleting unacknowledged messages](#deleting-unacknowledged-messages)).
-   If the received **out\_seq\_no>C+1**, it most likely means that the server left out some messages due to a technical failure or due to the messages becoming obsolete. A temporary solution to this is to simply abort the secret chat. But since this may cause some existing older secret chats to be aborted, it is strongly recommended for the client to properly handle such **seq\_no** gaps. Note that **in\_seq\_no** is not increased upon receipt of such a message; it is advanced only after all preceding gaps are filled.

#### Proper handling of gaps

In order to correctly handle incoming messages after a hole has been identified (when received **out\_seq\_no>C+1**), it is necessary to put received messages with the wrong **seq\_no** into a "waiting queue" on the local client, and to re-request the missing messages using the special constructor [decryptedMessageActionResend](/constructor/decryptedMessageActionResend/). The sequence numbers used in this constructor must be ready for interpretation by the remote client and therefore _cannot_ be in their raw form: you can easily get the necessary **start\_seq\_no** by adding 2 to the **out\_seq\_no** of the last message before the hole and the **end\_seq\_no** by subtracting 2 from the **out\_seq\_no** of the received message with the wrong sequence number.

Each hole normally requires only one request to resend messages — if the remote client keeps sending out of sync messages, they should be put into the queue without sending a new request. Having received the missing messages, the local client must first interpret these messages in the right order by their **seq\_no**. Once this is done, the client can proceed to interpret messages from the queue (again, in the right **seq\_no** order).

Special cases:

-   Note that having _two_ gaps simultaneously is very rare (provided that the remote client and server are operating normally) and it is acceptable to abort the secret chat in this situation.
-   If a local client receives [decryptedMessageActionResend](/constructor/decryptedMessageActionResend/) but is unable to satisfy the request, it must abort the secret chat.

#### Avoiding concurrent gaps

In order to avoid getting stuck with concurrent gaps on both sides, [decryptedMessageActionResend](/constructor/decryptedMessageActionResend/) must always be interpreted _immediately upon receipt_ in all cases, even if its **out\_seq\_no>=C+1**. Note that each [decryptedMessageActionResend](/constructor/decryptedMessageActionResend/) must only be handled once, it must not be interpreted again when we interpret messages in the queue.

#### Checking and handling in\_seq\_no

**in\_seq\_no** of all received messages must be _valid_. To ensure this, perform the following checks:

-   **in\_seq\_no** must form a non-decreasing sequence of non-negative integer numbers.
-   **in\_seq\_no** must be valid at the moment of receiving the message, that is, if **D** is the **out\_seq\_no** of last message we sent, the received **in\_seq\_no** should not be greater than **D + 1**. This also allows us to insert the received message into its correct place in the secret chat. For example, imagine that the local client has sent 5 secret chat messages, and then receives a secret chat message with the text "Yes" and **in\_seq\_no=2**. In this situation the local client _must_ place that message after the second message it sent. This makes manipulations with delayed messages impossible.

If `in_seq_no` contradicts these criteria, the local client is required to immediately abort the secret chat. This could happen only in case of malicious or buggy behaviour on either server or remote client side.

#### Deleting unacknowledged messages

In case the user on the local client has deleted a message _before_ the server (or the remote client, if [decryptedMessageActionResend](/constructor/decryptedMessageActionResend/) is handled correctly) could acknowledge the message, for security reasons, you must:

-   securely destroy the contents of the message (as in case of any other deleted Secret Chat message);
-   change the local copy of the original message to `decryptedMessageActionDeleteMessages` with **random\_id** equal to its own **random\_id**;
-   create a new outgoing message deleting the original message.

This must be done because your client doesn't know whether the remote client really received the message or not. In the case the message was already received, it will be deleted by the second message; otherwise it must arrive as a "self-delete" message to maintain the correct sequence of seq\_no.
