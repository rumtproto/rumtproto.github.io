---
title: "todoCompletion"
original: "https://core.telegram.org/constructor/todoCompletion"
section: ref
description: "A completed todo list » item."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"todoCompletion","url":"/constructor/todoCompletion/"}]
layout: layout.njk
---

# todoCompletion

A completed [todo list »](/api/todo/) item.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/todoCompletion/" class="current_page_link">todoCompletion</a>#221bb5e4 id:<a href="/type/int/">int</a> completed_by:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> = <a href="/type/TodoCompletion/">TodoCompletion</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The ID of the completed item.</td></tr><tr><td><strong>completed_by</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>ID of the user that completed the item.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the item completed.</td></tr></tbody></table>

### Type

[TodoCompletion](/type/TodoCompletion/)

### Related pages

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
