---
title: "messageActionTodoCompletions"
original: "https://core.telegram.org/constructor/messageActionTodoCompletions"
section: ref
description: "Items were marked as completed or not completed in a todo list »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionTodoCompletions","url":"/constructor/messageActionTodoCompletions/"}]
layout: layout.njk
---

# messageActionTodoCompletions

Items were marked as completed or not completed in a [todo list »](/api/todo/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionTodoCompletions/" class="current_page_link">messageActionTodoCompletions</a>#cc7c5c89 completed:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; incompleted:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>completed</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Items marked as completed.</td></tr><tr><td><strong>incompleted</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Items marked as not completed.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
