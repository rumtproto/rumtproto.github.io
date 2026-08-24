---
title: "Чек-листы и списки задач"
original: "https://core.telegram.org/api/todo"
section: api
description: "Пользователи Telegram Premium теперь могут создавать в любом чате совместные чек-листы: с их помощью удобно вести учёт задач и координировать работу команды — или просто держать…"
layout: layout.njk
---

# Чек-листы и списки задач

Пользователи Telegram Premium теперь могут создавать в любом чате совместные чек-листы: с их помощью удобно вести учёт задач и координировать работу команды — или просто держать под рукой список покупок и дел.

### Чек-листы

#### Создание чек-листов

```
todoItem#cba9a52f id:int title:TextWithEntities = TodoItem;

todoList#49b92a26 flags:# others_can_append:flags.0?true others_can_complete:flags.1?true title:TextWithEntities list:Vector<TodoItem> = TodoList;

inputMediaTodo#9fc55fde todo:TodoList = InputMedia;

todoCompletion#221bb5e4 id:int completed_by:Peer date:int = TodoCompletion;
messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

Чтобы опубликовать список задач, вызовите [messages.sendMedia](/method/messages.sendMedia/) с [inputMediaTodo](/constructor/inputMediaTodo/): в результате будет создано сообщение с [messageMediaToDo](/constructor/messageMediaToDo/), которое содержит сам список задач и подробные сведения об [отметках о выполнении »](#mark-items-as-completed).

Максимальная длина заголовка списка задач равна [todo\_title\_length\_max »](/api/config/#todo-title-length-max).

При создании можно установить [todoList](/constructor/todoList/).`others_can_append` — тогда добавлять пункты в список методом [messages.appendTodoList](/method/messages.appendTodoList/) смогут не только вы, но и другие пользователи.  
Флаг [todoList](/constructor/todoList/).`others_can_complete` можно установить, чтобы другие пользователи, а не только вы, могли отмечать пункты как выполненные (и снимать отметку) методом [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/).

Каждый передаваемый [todoItem](/constructor/todoItem/) состоит из заголовка (максимальная длина равна [todo\_item\_length\_max »](/api/config/#todo-item-length-max)) и положительного (ненулевого) идентификатора, уникального в пределах текущего списка.

[@term:deep link] На конкретную задачу внутри сообщения-чек-листа можно сослаться с помощью параметра `task` в [глубокой ссылке на сообщение »](/api/links/#message-links) (`deep link` — ссылка, которая открывает приложение сразу на нужном объекте); в этом параметре передаётся [todoItem](/constructor/todoItem/).`id` задачи, которую нужно подсветить.

Список задач может содержать не более [todo\_items\_max »](/api/config/#todo-items-max) пунктов.

#### Изменение чек-листов

```
todoItem#cba9a52f id:int title:TextWithEntities = TodoItem;

messageActionTodoAppendTasks#c7edbc83 list:Vector<TodoItem> = MessageAction;

---functions---

messages.appendTodoList#21a61057 peer:InputPeer msg_id:int list:Vector<TodoItem> = Updates;

messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
```

Чтобы добавить пункты в уже созданный список задач, используйте [messages.appendTodoList](/method/messages.appendTodoList/): при этом отправляются [сервисные сообщения](/constructor/messageService/) типа [messageActionTodoAppendTasks](/constructor/messageActionTodoAppendTasks/).  
Добавляемые [todoItem](/constructor/todoItem/) обязаны иметь идентификаторы, которых ещё нет в списке пунктов, иначе будет возвращена RPC-ошибка `TODO_ITEM_DUPLICATE`.

Метод [messages.editMessage](/method/messages.editMessage/) позволяет удалять задачи из списка: для этого нужно заново передать изменённую копию существующего [todoList](/constructor/todoList/) в виде [inputMediaTodo](/constructor/inputMediaTodo/). При таком удалении отметки о выполнении у оставшихся пунктов не сбрасываются — при условии, что их идентификаторы не изменились.  
Тот же метод и тем же способом можно применить, чтобы добавить в список сразу несколько задач, не отправляя сервисное сообщение [messageActionTodoAppendTasks](/constructor/messageActionTodoAppendTasks/).

#### Отметка пунктов как выполненных

```
todoCompletion#221bb5e4 id:int completed_by:Peer date:int = TodoCompletion;

messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;

messageActionTodoCompletions#cc7c5c89 completed:Vector<int> incompleted:Vector<int> = MessageAction;

---functions---

messages.toggleTodoCompleted#d3e03124 peer:InputPeer msg_id:int completed:Vector<int> incompleted:Vector<int> = Updates;
```

Метод [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/) позволяет отметить часть пунктов как выполненные или невыполненные, указав их идентификаторы: при этом отправляются [сервисные сообщения](/constructor/messageService/) типа [messageActionTodoCompletions](/constructor/messageActionTodoCompletions/), а список [todoCompletion](/constructor/todoCompletion/) в [messageMediaToDo](/constructor/messageMediaToDo/) этого сообщения соответствующим образом обновляется.

[@term:layer] [@term:send_as] Начиная со слоя 217 (`layer` — версия схемы TL), если [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/) вызывает [анонимный администратор группы »](/api/rights/#anonymous-admins), то [messageActionTodoCompletions](/constructor/messageActionTodoCompletions/) и записи [todoCompletion](/constructor/todoCompletion/) создаются от имени самой группы либо от имени пира, заданного по умолчанию через `send_as` (выбор пира, от лица которого отправляется сообщение) методом [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/); подробнее о `send_as` см. [здесь »](/api/channel/#sending-messages-on-behalf-of-owned-channels-and-groups).

#### Ответ на конкретные пункты

```
inputReplyToMessage#3bd4b7c2 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int poll_option:flags.7?bytes = InputReplyTo;

messageReplyHeader#1b97dd66 flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int poll_option:flags.12?bytes = MessageReplyHeader;
```

Клиенты могут отправлять сообщения в ответ на конкретные пункты списков задач — через поле `todo_item_id` конструкторов [inputReplyToMessage](/constructor/inputReplyToMessage/) и [messageReplyHeader](/constructor/messageReplyHeader/), которое заполняется при ответе на список задач.
