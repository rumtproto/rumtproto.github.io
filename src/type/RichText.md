---
title: "RichText (тип)"
original: "https://core.telegram.org/type/RichText"
section: ref
kind: type
layout: layout.njk
---

# RichText

*Тип из схемы TL.*

> Rich text

## Определение TL

```
textEmpty#dc3d824f = RichText;
textPlain#744694e0 text:string = RichText;
textBold#6724abc4 text:RichText = RichText;
textItalic#d912a59c text:RichText = RichText;
textUnderline#c12622c4 text:RichText = RichText;
textStrike#9bf8bb95 text:RichText = RichText;
textFixed#6c3f19b9 text:RichText = RichText;
textUrl#3c2884c1 text:RichText url:string webpage_id:long = RichText;
textEmail#de5a0dd6 text:RichText email:string = RichText;
textConcat#7e6260d7 texts:Vector<RichText> = RichText;
textSubscript#ed6a8504 text:RichText = RichText;
textSuperscript#c7fb5e01 text:RichText = RichText;
textMarked#34b8621 text:RichText = RichText;
textPhone#1ccb966a text:RichText phone:string = RichText;
textImage#81ccf4f document_id:long w:int h:int = RichText;
textAnchor#35553762 text:RichText name:string = RichText;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [textEmpty](/constructor/textEmpty/) | Empty rich text element |
| [textPlain](/constructor/textPlain/) | Plain text |
| [textBold](/constructor/textBold/) | Bold text |
| [textItalic](/constructor/textItalic/) | Italic text |
| [textUnderline](/constructor/textUnderline/) | Underlined text |
| [textStrike](/constructor/textStrike/) | Strikethrough text |
| [textFixed](/constructor/textFixed/) | fixed-width rich text |
| [textUrl](/constructor/textUrl/) | Link |
| [textEmail](/constructor/textEmail/) | Rich text email link |
| [textConcat](/constructor/textConcat/) | Concatenation of rich texts |
| [textSubscript](/constructor/textSubscript/) | Subscript text |
| [textSuperscript](/constructor/textSuperscript/) | Superscript text |
| [textMarked](/constructor/textMarked/) | Highlighted text |
| [textPhone](/constructor/textPhone/) | Rich text linked to a phone number |
| [textImage](/constructor/textImage/) | Inline image |
| [textAnchor](/constructor/textAnchor/) | Text linking to another section of the page |
