---
title: "todoList"
original: "https://core.telegram.org/constructor/todoList"
section: ref
description: "Represents a todo list »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"todoList","url":"/constructor/todoList/"}]
layout: layout.njk
---

# todoList

Represents a [todo list »](/api/todo/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/todoList/" class="current_page_link">todoList</a>#49b92a26 flags:<a href="/type/%23/">#</a> others_can_append:flags.0?true others_can_complete:flags.1?true title:<a href="/type/TextWithEntities/">TextWithEntities</a> list:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TodoItem/">TodoItem</a>&gt; = <a href="/type/TodoList/">TodoList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>others_can_append</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, users different from the creator of the list can append items to the list.</td></tr><tr><td><strong>others_can_complete</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, users different from the creator of the list can complete items in the list.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Title of the todo list, maximum length equal to <a href="/api/config/#todo-title-length-max">todo_title_length_max »</a>.</td></tr><tr><td><strong>list</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TodoItem/">TodoItem</a>&gt;</td><td>Items of the list.</td></tr></tbody></table>

### Type

[TodoList](/type/TodoList/)

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
