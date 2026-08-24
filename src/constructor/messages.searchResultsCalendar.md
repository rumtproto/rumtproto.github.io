---
title: "messages.searchResultsCalendar"
original: "https://core.telegram.org/constructor/messages.searchResultsCalendar"
section: ref
kind: constructor
description: "Информация о найденных сообщениях, отправленных в определённый день"
layout: layout.njk
---

# messages.searchResultsCalendar

Информация о найденных сообщениях, отправленных в определённый день

```
messages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>inexact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что результаты могут быть неточными</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число результатов, соответствующих запросу</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Начальная временная метка прикреплённых сообщений</td></tr><tr><td><strong>min_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Конечная временная метка прикреплённых сообщений</td></tr><tr><td><strong>offset_id_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Указывает абсолютную позицию <code>messages[0]</code> в полном наборе результатов размером <code>count</code>.<br>Это полезно, например, если требуется показать счётчик вида <code>progress/total</code> (например, <code>photo 134 of 200</code> для всех медиафайлов в чате — мы можем просто использовать <code>photo ${offset_id_offset} of ${count}</code>.</td></tr><tr><td><strong>periods</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SearchResultsCalendarPeriod">SearchResultsCalendarPeriod</a>&gt;</td><td>Используется для разбивки поля <code>messages</code> по дням: возвращается несколько конструкторов <a href="/type/SearchResultsCalendarPeriod">SearchResultsCalendarPeriod</a>, каждый из которых содержит сведения о первом и последнем сообщении, а также об общем количестве сообщений, соответствующих фильтру и отправленных в конкретный день.<br>Эти сведения позволяют легко разбить возвращённое поле <code>messages</code> по дням.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Сообщения</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr></tbody></table>

### Тип

[messages.SearchResultsCalendar](/type/messages.SearchResultsCalendar/)

### Связанные страницы

#### [SearchResultsCalendarPeriod](/type/SearchResultsCalendarPeriod/)

Информация о найденных сообщениях, отправленных в определённый день; используется для разбивки поля `messages` в конструкторах [messages.searchResultsCalendar](/constructor/messages.searchResultsCalendar/) по дням.
