---
title: "JSONValue (тип)"
original: "https://core.telegram.org/type/JSONValue"
section: ref
kind: type
layout: layout.njk
---

# JSONValue

*Тип из схемы TL.*

> JSON value
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===216===
> jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
> jsonBool#c7345e6a value:Bool = JSONValue;
> jsonNull#3f6d7b68 = JSONValue;
> jsonNumber#2be0dfa4 value:double = JSONValue;
> jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;
> jsonString#b71e767a value:string = JSONValue;
> ```
> API schema:

## Определение TL

```
jsonNull#3f6d7b68 = JSONValue;
jsonBool#c7345e6a value:Bool = JSONValue;
jsonNumber#2be0dfa4 value:double = JSONValue;
jsonString#b71e767a value:string = JSONValue;
jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [jsonNull](/constructor/jsonNull/) | null JSON value |
| [jsonBool](/constructor/jsonBool/) | JSON boolean value |
| [jsonNumber](/constructor/jsonNumber/) | JSON numeric value |
| [jsonString](/constructor/jsonString/) | JSON string |
| [jsonArray](/constructor/jsonArray/) | JSON array |
| [jsonObject](/constructor/jsonObject/) | JSON object value |
