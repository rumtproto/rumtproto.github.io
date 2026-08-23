---
title: "ExportedStoryLink (тип)"
original: "https://core.telegram.org/type/ExportedStoryLink"
section: ref
kind: type
layout: layout.njk
---

# ExportedStoryLink

*Тип из схемы TL.*

> Represents a [story deep link](https://core.telegram.org/api/stories#story-links)

## Определение TL

```
exportedStoryLink#3fc9053b link:string = ExportedStoryLink;

---functions---

stories.exportStoryLink#7b8def20 peer:InputPeer id:int = ExportedStoryLink;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [exportedStoryLink](/constructor/exportedStoryLink/) | Represents a [story deep link](https://core.telegram.org/api/stories#story-links). |

## Методы

| Method | Описание |
|---|---|
| [stories.exportStoryLink](/method/stories.exportStoryLink/) | Generate a [story deep link](https://core.telegram.org/api/links#story-links) for a specific story |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
