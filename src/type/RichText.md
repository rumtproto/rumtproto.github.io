---
title: "RichText"
original: "https://core.telegram.org/type/RichText"
section: ref
kind: type
description: "Форматированный текст"
layout: layout.njk
---

# RichText

Форматированный текст

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

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/textEmpty">textEmpty</a></td><td>Пустой элемент форматированного текста</td></tr><tr><td><a href="/constructor/textPlain">textPlain</a></td><td>Обычный текст</td></tr><tr><td><a href="/constructor/textBold">textBold</a></td><td><strong>Полужирный</strong> текст</td></tr><tr><td><a href="/constructor/textItalic">textItalic</a></td><td><em>Курсивный</em> текст</td></tr><tr><td><a href="/constructor/textUnderline">textUnderline</a></td><td>Подчёркнутый текст</td></tr><tr><td><a href="/constructor/textStrike">textStrike</a></td><td><del>Зачёркнутый</del> текст</td></tr><tr><td><a href="/constructor/textFixed">textFixed</a></td><td>Моноширинный (<code>fixed-width</code>) форматированный текст</td></tr><tr><td><a href="/constructor/textUrl">textUrl</a></td><td>Ссылка</td></tr><tr><td><a href="/constructor/textEmail">textEmail</a></td><td>Форматированный текст со ссылкой на адрес электронной почты</td></tr><tr><td><a href="/constructor/textConcat">textConcat</a></td><td>Объединение форматированных текстов</td></tr><tr><td><a href="/constructor/textSubscript">textSubscript</a></td><td>Подстрочный текст</td></tr><tr><td><a href="/constructor/textSuperscript">textSuperscript</a></td><td>Надстрочный текст</td></tr><tr><td><a href="/constructor/textMarked">textMarked</a></td><td>Выделенный текст</td></tr><tr><td><a href="/constructor/textPhone">textPhone</a></td><td>Форматированный текст со ссылкой на номер телефона</td></tr><tr><td><a href="/constructor/textImage">textImage</a></td><td>Встроенное изображение</td></tr><tr><td><a href="/constructor/textAnchor">textAnchor</a></td><td>Текст, ссылающийся на другой раздел страницы</td></tr></tbody></table>
