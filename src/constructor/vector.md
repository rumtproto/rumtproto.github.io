---
title: "vector (конструктор)"
original: "https://core.telegram.org/constructor/vector"
section: ref
kind: constructor
layout: layout.njk
---

# vector

*Конструктор из схемы TL.*

> A universal vector constructor.

## Определение TL

```
vector#1cb5c415 {t:Type} # [ t ] = Vector t;
```

## Параметры

This constructor does not require any parameters.

## Тип

[Vector t](https://core.telegram.org/type/Vector%20t)

## Params additional

For serialization write the constructor id `0x1cb5c415`:**int**, then the number of vector elements - #:**int**, then, one after another, the # of the elements of the type **t**, that was implicitly passed to the constructor.
