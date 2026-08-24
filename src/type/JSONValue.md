---
title: "JSONValue"
original: "https://core.telegram.org/type/JSONValue"
section: ref
kind: type
description: "Значение JSON"
layout: layout.njk
---

# JSONValue

Значение JSON

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===216===
jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
jsonBool#c7345e6a value:Bool = JSONValue;
jsonNull#3f6d7b68 = JSONValue;
jsonNumber#2be0dfa4 value:double = JSONValue;
jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;
jsonString#b71e767a value:string = JSONValue;
```

Схема API:

```
jsonNull#3f6d7b68 = JSONValue;
jsonBool#c7345e6a value:Bool = JSONValue;
jsonNumber#2be0dfa4 value:double = JSONValue;
jsonString#b71e767a value:string = JSONValue;
jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/jsonNull">jsonNull</a></td><td>Значение JSON null</td></tr><tr><td><a href="/constructor/jsonBool">jsonBool</a></td><td>Логическое значение JSON</td></tr><tr><td><a href="/constructor/jsonNumber">jsonNumber</a></td><td>Числовое значение JSON</td></tr><tr><td><a href="/constructor/jsonString">jsonString</a></td><td>Строка JSON</td></tr><tr><td><a href="/constructor/jsonArray">jsonArray</a></td><td>Массив JSON</td></tr><tr><td><a href="/constructor/jsonObject">jsonObject</a></td><td>Объектное значение JSON</td></tr></tbody></table>
