---
title: "Perfect Forward Secrecy"
original: "https://core.telegram.org/api/pfs"
section: api
description: "Telegram supports Perfect Forward Secrecy (PFS)."
crumbs: [{"title":"API","url":"/api/"},{"title":"Perfect Forward Secrecy","url":"/api/pfs/"}]
layout: layout.njk
---

# Perfect Forward Secrecy

##### Related articles

-   [Perfect Forward Secrecy in Secret Chats](/api/end-to-end/pfs/)
-   [Security guidelines for developers](/mtproto/security_guidelines/)

> _This article is about Perfect Forward Secrecy in cloud chats, see also [PFS in Secret Chats](/api/end-to-end/pfs/)._

* * *

Telegram supports Perfect Forward Secrecy (PFS).

To make this possible, the client generates a permanent authorization key using **p\_q\_inner\_data** and a temporary key using **p\_q\_inner\_data\_temp**. (See [Creating an Authorization Key](/mtproto/auth_key/) for more info.) These 2 operations may be done in parallel using different connections. The client must save an **expires\_at** Unix timestamp `expires_at = time + expires_in`.

**Important**: in order to achieve PFS, the client must **never** use the permanent auth\_key\_id directly. Every message that is sent to MTProto, must be encrypted by a **temp\_auth\_key\_id**, that was bound to the **perm\_auth\_key\_id**.

An unbound **temp\_auth\_key\_id** may only be used with the following methods:

-   [auth.bindTempAuthKey](/method/auth.bindTempAuthKey/)
-   [help.getConfig](/method/help.getConfig/)
-   [help.getNearestDc](/method/help.getNearestDc/)

In order to bind a temporary authorization key to the permanent key the client creates a [special binding message](/method/auth.bindTempAuthKey/#binding-message-contents) and executes the [auth.bindTempAuthKey](/method/auth.bindTempAuthKey/) method using **temp\_auth\_key**. Once **auth.bindTempAuthKey** has been executed successfully, the client may continue using the API as usual; the client must also [rewrite client info](/api/invoking/#saving-client-info) using [initConnection](/method/initConnection/) after each binding.

An [auth.bindTempAuthKey](/method/auth.bindTempAuthKey/) request may also return an `ENCRYPTED_MESSAGE_INVALID` error, which must be handled as follows:

-   If and only if the permanent auth key used in the request was created more than 60 seconds ago:
    -   Drop both the temporary and permanent auth keys.  
        If the dropped main auth key is the main logged in auth key (the one used for logging into the user's native DC), this means the user was also logged out.
    -   Recreate temporary and permanent auth keys.
    -   Retry binding the temporary and permanent keys.
    -   On success, if the dropped auth key is **not** the main logged in auth key, re-import authorization from the user's native DC.
-   Otherwise, retry binding the temporary and permanent keys

Once the temporary key expires, the client needs to generate a new temporary key using **p\_q\_inner\_data\_temp**. Then it needs to re-bind that new temporary key to the initial permanent key. A new key can also be generated in advance, so that the client has a new key ready by the time the old one has expired.

For additional security, the client can store the temporary authorization key in RAM only and never save it in persistent storage.

A temporary authorization key may expire at any moment before **expires\_at**, since such keys are also stored only in the RAM on the server-side. Be prepared to handle resulting MTProto errors correctly (non-existent auth\_key\_id results in a 404 error).

When the server permits [multiple parallel main sessions](/api/datacenter/#parallel-sessions) (by advertising `tmp_sessions` > 1), the client **must** apply PFS to all of its sessions: each session generates and binds its own temporary authorization key, all bound to the same permanent key.
