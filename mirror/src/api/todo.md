---
title: "Checklists and to-do lists"
original: "https://core.telegram.org/api/todo"
section: api
description: "Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists."
crumbs: [{"title":"API","url":"/api/"},{"title":"Checklists and to-do lists","url":"/api/todo/"}]
layout: layout.njk
---

# Checklists and to-do lists

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.

### Checklists

#### Creating checklists

```
todoItem#cba9a52f id:int title:TextWithEntities = TodoItem;

todoList#49b92a26 flags:# others_can_append:flags.0?true others_can_complete:flags.1?true title:TextWithEntities list:Vector<TodoItem> = TodoList;

inputMediaTodo#9fc55fde todo:TodoList = InputMedia;

todoCompletion#221bb5e4 id:int completed_by:Peer date:int = TodoCompletion;
messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

Use [messages.sendMedia](/method/messages.sendMedia/) with [inputMediaTodo](/constructor/inputMediaTodo/) to post a to-do list: this will generate a message containing a [messageMediaToDo](/constructor/messageMediaToDo/), containing the todo list, and detailed information about [item completions »](#mark-items-as-completed).

The title of a todo list has a maximum length equal to [todo\_title\_length\_max »](/api/config/#todo-title-length-max).

During creation, [todoList](/constructor/todoList/).`others_can_append` can be set to allow users different from yourself to invoke [messages.appendTodoList](/method/messages.appendTodoList/) to append items to the list.  
[todoList](/constructor/todoList/).`others_can_complete` can be set to allow users different from yourself to mark items as (not) completed with [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/).

The passed [todoItem](/constructor/todoItem/)s are composed of a title (maximum length equal to [todo\_item\_length\_max »](/api/config/#todo-item-length-max)) and a positive (non-zero) ID, unique within the context of the current list.

A specific task within a checklist message can be linked to using the `task` parameter of a [message deep link »](/api/links/#message-links), which contains the [todoItem](/constructor/todoItem/).`id` of the task to highlight.

A todo list can have at most [todo\_items\_max »](/api/config/#todo-items-max) items.

#### Modifying checklists

```
todoItem#cba9a52f id:int title:TextWithEntities = TodoItem;

messageActionTodoAppendTasks#c7edbc83 list:Vector<TodoItem> = MessageAction;

---functions---

messages.appendTodoList#21a61057 peer:InputPeer msg_id:int list:Vector<TodoItem> = Updates;

messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
```

Use [messages.appendTodoList](/method/messages.appendTodoList/) to append items to the to-do list after creation: this will emit [service messages](/constructor/messageService/) of type [messageActionTodoAppendTasks](/constructor/messageActionTodoAppendTasks/).  
The newly appended [todoItem](/constructor/todoItem/)s must have an ID that isn't already contained within the item list, otherwise a `TODO_ITEM_DUPLICATE` RPC error will be emitted.

[messages.editMessage](/method/messages.editMessage/) can be used to remove tasks from the list, by re-specifying a modified copy of the existing [todoList](/constructor/todoList/) as an [inputMediaTodo](/constructor/inputMediaTodo/): removing items in this manner will not erase the completion tasks of non-deleted items, as long as their IDs aren't changed.  
The same method can also be used in the same manner to add multiple tasks to the list without emitting a [messageActionTodoAppendTasks](/constructor/messageActionTodoAppendTasks/) service message.

#### Mark items as completed

```
todoCompletion#221bb5e4 id:int completed_by:Peer date:int = TodoCompletion;

messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;

messageActionTodoCompletions#cc7c5c89 completed:Vector<int> incompleted:Vector<int> = MessageAction;

---functions---

messages.toggleTodoCompleted#d3e03124 peer:InputPeer msg_id:int completed:Vector<int> incompleted:Vector<int> = Updates;
```

Use [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/) to toggle some items as completed or not completed using their IDs: this will emit [service messages](/constructor/messageService/) of type [messageActionTodoCompletions](/constructor/messageActionTodoCompletions/), and the [todoCompletion](/constructor/todoCompletion/) list in the message's [messageMediaToDo](/constructor/messageMediaToDo/) will be updated accordingly.

Starting from layer 217, [anonymous group admins »](/api/rights/#anonymous-admins) that invoke [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/) will emit [messageActionTodoCompletions](/constructor/messageActionTodoCompletions/) and [todoCompletion](/constructor/todoCompletion/)s on behalf of the group itself, or the default `send_as` configured by [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/), see [here »](/api/channel/#sending-messages-on-behalf-of-owned-channels-and-groups) for more info on `send_as`.

#### Reply to specific items

```
inputReplyToMessage#3bd4b7c2 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int poll_option:flags.7?bytes = InputReplyTo;

messageReplyHeader#1b97dd66 flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int poll_option:flags.12?bytes = MessageReplyHeader;
```

Clients can send messages in reply to specific items of todo lists, through the `todo_item_id` field of [inputReplyToMessage](/constructor/inputReplyToMessage/) and [messageReplyHeader](/constructor/messageReplyHeader/), set when replying to todo lists.
