---
title: "pendingSuggestion"
original: "https://core.telegram.org/constructor/pendingSuggestion"
section: ref
kind: constructor
description: "Представляет пользовательскую ожидающую рекомендацию »."
layout: layout.njk
---

# pendingSuggestion

Представляет [пользовательскую ожидающую рекомендацию »](/api/config/#custom-suggestions).

```
pendingSuggestion#e7e82e12 suggestion:string title:TextWithEntities description:TextWithEntities url:string = PendingSuggestion;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>suggestion</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор подсказки, который можно передать в <a href="/method/help.dismissSuggestion">help.dismissSuggestion</a>.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Заголовок предложения.</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Текст рекомендации.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL, который нужно открыть при нажатии пользователем на подсказку.</td></tr></tbody></table>

### Тип

[PendingSuggestion](/type/PendingSuggestion/)

### Связанные страницы

#### [help.dismissSuggestion](/method/help.dismissSuggestion/)

Отклонить [подсказку, подробнее см. здесь »](/api/config/#suggestions).

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
