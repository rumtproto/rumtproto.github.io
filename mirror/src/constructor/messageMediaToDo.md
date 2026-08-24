---
title: "messageMediaToDo"
original: "https://core.telegram.org/constructor/messageMediaToDo"
section: ref
description: "Represents a todo list »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaToDo","url":"/constructor/messageMediaToDo/"}]
layout: layout.njk
---

# messageMediaToDo

Represents a [todo list »](/api/todo/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaToDo/" class="current_page_link">messageMediaToDo</a>#8a53b014 flags:<a href="/type/%23/">#</a> todo:<a href="/type/TodoList/">TodoList</a> completions:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TodoCompletion/">TodoCompletion</a>&gt; = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>todo</strong></td><td style="text-align: center;"><a href="/type/TodoList/">TodoList</a></td><td>The todo list.</td></tr><tr><td><strong>completions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TodoCompletion/">TodoCompletion</a>&gt;</td><td>Completed items.</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
