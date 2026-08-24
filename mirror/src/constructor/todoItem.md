---
title: "todoItem"
original: "https://core.telegram.org/constructor/todoItem"
section: ref
description: "An item of a todo list »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"todoItem","url":"/constructor/todoItem/"}]
layout: layout.njk
---

# todoItem

An item of a [todo list »](/api/todo/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/todoItem/" class="current_page_link">todoItem</a>#cba9a52f id:<a href="/type/int/">int</a> title:<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/TodoItem/">TodoItem</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the item, a positive (non-zero) integer unique within the current list.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Text of the item, maximum length equal to <a href="/api/config/#todo-item-length-max">todo_item_length_max »</a>.</td></tr></tbody></table>

### Type

[TodoItem](/type/TodoItem/)

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
