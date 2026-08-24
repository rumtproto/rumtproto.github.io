---
title: "chatlists.exportChatlistInvite"
original: "https://core.telegram.org/method/chatlists.exportChatlistInvite"
section: ref
kind: method
description: "Экспортировать папку », создав глубокую ссылку на папку чатов »."
layout: layout.njk
---

# chatlists.exportChatlistInvite

Экспортировать [папку »](/api/folders/), создав [глубокую ссылку на папку чатов »](/api/links/#chat-folder-links).

```
chatlists.exportedChatlistInvite#10e6e3a6 filter:DialogFilter invite:ExportedChatlistInvite = chatlists.ExportedChatlistInvite;
---functions---
chatlists.exportChatlistInvite#8472478e chatlist:InputChatlist title:string peers:Vector<InputPeer> = chatlists.ExportedChatlistInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist">InputChatlist</a></td><td>Папка для экспорта</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Необязательное название ссылки</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Список каналов, групп и супергрупп, доступ к которым предоставляется по ссылке. Обычные группы при вызове метода будут автоматически <a href="/api/channel#migration">преобразованы в супергруппы</a>.</td></tr></tbody></table>

### Результат

[chatlists.ExportedChatlistInvite](/type/chatlists.ExportedChatlistInvite/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHATLISTS_TOO_MUCH</td><td>Вы создали слишком много ссылок на папки, достигнув заданных параметрами <code>chatlist_invites_limit_default</code>/<code>chatlist_invites_limit_premium</code> <a href="/api/config#chatlist-invites-limit-default">ограничений&nbsp;»</a>.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>FILTER_ID_INVALID</td><td>Указанный идентификатор фильтра недействителен.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>Указанный фильтр нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>INVITES_TOO_MUCH</td><td>Достигнуто максимальное число пригласительных ссылок на папку, заданное <code>chatlist_invites_limit_default</code>/<code>chatlist_invites_limit_premium</code> <a href="/api/config#chatlist-invites-limit-default">параметрами клиентской конфигурации&nbsp;»</a>.</td></tr><tr><td>400</td><td>PEERS_LIST_EMPTY</td><td>Указанный список пиров пуст.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
