---
title: "updateGroupCallChainBlocks"
original: "https://core.telegram.org/constructor/updateGroupCallChainBlocks"
section: ref
description: "Contains conference call blockchain blocks, see handling E2E group call updates »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateGroupCallChainBlocks","url":"/constructor/updateGroupCallChainBlocks/"}]
layout: layout.njk
---

# updateGroupCallChainBlocks

Contains conference call blockchain blocks, see [handling E2E group call updates »](/api/end-to-end/group-calls/#handling-updates).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateGroupCallChainBlocks/" class="current_page_link">updateGroupCallChainBlocks</a>#a477288f call:<a href="/type/InputGroupCall/">InputGroupCall</a> sub_chain_id:<a href="/type/int/">int</a> blocks:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; next_offset:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Conference whose specified subchain received these blocks</td></tr><tr><td><strong>sub_chain_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><code>0</code> for the main state blockchain, <code>1</code> for the call verification subchain</td></tr><tr><td><strong>blocks</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt;</td><td>Serialized subchain blocks with the server-adjusted constructor IDs described in the <a href="/api/end-to-end/group-calls/#subchains">subchain documentation »</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Height of the block located <em>after</em> the last block in <code>blocks</code>; the first returned block has height <code>next_offset - blocks.length</code></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
