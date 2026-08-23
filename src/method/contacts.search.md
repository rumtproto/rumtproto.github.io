---
title: "contacts.search (метод)"
original: "https://core.telegram.org/method/contacts.search"
section: ref
kind: method
layout: layout.njk
---

# contacts.search

*Метод из схемы TL.*

> Returns users found by username substring.

## Определение TL

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;
---functions---
contacts.search#11f812d8 q:string limit:int = contacts.Found;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| q | [string](/type/string/) | Target substring |
| limit | [int](/type/int/) | Maximum number of users to be returned |

## Результат

[contacts.Found](/type/contacts.Found/)

## Notes

This method will exclude the current user's contacts from the search results. It is assumed that searches among the user's contacts can be handled locally by the client.

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | QUERY_TOO_SHORT | The query string is too short. |
| 400 | SEARCH_QUERY_EMPTY | The search query is empty. |
