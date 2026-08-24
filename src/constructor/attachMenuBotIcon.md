---
title: "attachMenuBotIcon"
original: "https://core.telegram.org/constructor/attachMenuBotIcon"
section: ref
kind: constructor
description: "Представляет значок в меню вложений для mini app ботов »"
layout: layout.njk
---

# attachMenuBotIcon

[@term:Mini App] Представляет значок в меню вложений для [mini app ботов »](/api/bots/attach/)

```
attachMenuBotIcon#b2a7386b flags:# name:string icon:Document colors:flags.0?Vector<AttachMenuBotIconColor> = AttachMenuBotIcon;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Одно из следующих значений; учтите, что анимированные значки должны воспроизводиться, когда пользователь нажимает кнопку, запускающую mini app бота.<br><br><code>default_static</code> - Значок меню вложений по умолчанию в формате SVG<br><code>placeholder_static</code> - Заполнитель по умолчанию для открытых веб-приложений в формате SVG<br><code>ios_static</code> - Значок меню вложений в формате SVG для официального приложения iOS<br><code>ios_animated</code> - Анимированный значок меню вложений в формате TGS для официального приложения iOS<br><code>android_animated</code> - Анимированный значок меню вложений в формате TGS для официального приложения Android<br><code>macos_animated</code> - Анимированный значок меню вложений в формате TGS для официального нативного приложения Mac OS<br><code>ios_side_menu_static</code> - Значок бокового меню в формате PNG для официального приложения iOS<br><code>android_side_menu_static</code> - Значок бокового меню в формате SVG для официального приложения Android<br><code>macos_side_menu_static</code> - Значок бокового меню в формате PNG для официального нативного приложения Mac OS</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/type/Document">Document</a></td><td>Сам файл значка.</td></tr><tr><td><strong>colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AttachMenuBotIconColor">AttachMenuBotIconColor</a>&gt;</td><td>Цвета значка меню вложений.</td></tr></tbody></table>

### Тип

[AttachMenuBotIcon](/type/AttachMenuBotIcon/)

### Связанные страницы

#### [Пункты меню вложений и бокового меню для ботов](/api/bots/attach/)

Боты могут добавлять пункты в меню вложений и в боковое меню, предлагая легкодоступные многофункциональные веб-приложения.
