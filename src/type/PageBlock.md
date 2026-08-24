---
title: "PageBlock"
original: "https://core.telegram.org/type/PageBlock"
section: ref
kind: type
description: "Представляет элемент страницы instant view"
layout: layout.njk
---

# PageBlock

Представляет [элемент страницы instant view](https://instantview.telegram.org)

```
pageBlockUnsupported#13567e8a = PageBlock;
pageBlockTitle#70abc3fd text:RichText = PageBlock;
pageBlockSubtitle#8ffa9a1f text:RichText = PageBlock;
pageBlockAuthorDate#baafe5e0 author:RichText published_date:int = PageBlock;
pageBlockHeader#bfd064ec text:RichText = PageBlock;
pageBlockSubheader#f12bb6e1 text:RichText = PageBlock;
pageBlockParagraph#467a0766 text:RichText = PageBlock;
pageBlockPreformatted#c070d93e text:RichText language:string = PageBlock;
pageBlockFooter#48870999 text:RichText = PageBlock;
pageBlockDivider#db20b188 = PageBlock;
pageBlockAnchor#ce0d37b0 name:string = PageBlock;
pageBlockList#e4e88011 items:Vector<PageListItem> = PageBlock;
pageBlockBlockquote#263d7c26 text:RichText caption:RichText = PageBlock;
pageBlockPullquote#4f4456d3 text:RichText caption:RichText = PageBlock;
pageBlockPhoto#1759c560 flags:# photo_id:long caption:PageCaption url:flags.0?string webpage_id:flags.0?long = PageBlock;
pageBlockVideo#7c8fe7b6 flags:# autoplay:flags.0?true loop:flags.1?true video_id:long caption:PageCaption = PageBlock;
pageBlockCover#39f23300 cover:PageBlock = PageBlock;
pageBlockEmbed#a8718dc5 flags:# full_width:flags.0?true allow_scrolling:flags.3?true url:flags.1?string html:flags.2?string poster_photo_id:flags.4?long w:flags.5?int h:flags.5?int caption:PageCaption = PageBlock;
pageBlockEmbedPost#f259a80b url:string webpage_id:long author_photo_id:long author:string date:int blocks:Vector<PageBlock> caption:PageCaption = PageBlock;
pageBlockCollage#65a0fa4d items:Vector<PageBlock> caption:PageCaption = PageBlock;
pageBlockSlideshow#31f9590 items:Vector<PageBlock> caption:PageCaption = PageBlock;
pageBlockChannel#ef1751b5 channel:Chat = PageBlock;
pageBlockAudio#804361ea audio_id:long caption:PageCaption = PageBlock;
pageBlockKicker#1e148390 text:RichText = PageBlock;
pageBlockTable#bf4dea82 flags:# bordered:flags.0?true striped:flags.1?true title:RichText rows:Vector<PageTableRow> = PageBlock;
pageBlockOrderedList#9a8ae1e1 items:Vector<PageListOrderedItem> = PageBlock;
pageBlockDetails#76768bed flags:# open:flags.0?true blocks:Vector<PageBlock> title:RichText = PageBlock;
pageBlockRelatedArticles#16115a96 title:RichText articles:Vector<PageRelatedArticle> = PageBlock;
pageBlockMap#a44f3ef6 geo:GeoPoint zoom:int w:int h:int caption:PageCaption = PageBlock;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/pageBlockUnsupported">pageBlockUnsupported</a></td><td>Неподдерживаемый элемент IV</td></tr><tr><td><a href="/constructor/pageBlockTitle">pageBlockTitle</a></td><td>Название</td></tr><tr><td><a href="/constructor/pageBlockSubtitle">pageBlockSubtitle</a></td><td>Подзаголовок</td></tr><tr><td><a href="/constructor/pageBlockAuthorDate">pageBlockAuthorDate</a></td><td>Автор и дата создания статьи</td></tr><tr><td><a href="/constructor/pageBlockHeader">pageBlockHeader</a></td><td>Верхний колонтитул страницы</td></tr><tr><td><a href="/constructor/pageBlockSubheader">pageBlockSubheader</a></td><td>Подзаголовок</td></tr><tr><td><a href="/constructor/pageBlockParagraph">pageBlockParagraph</a></td><td>Абзац</td></tr><tr><td><a href="/constructor/pageBlockPreformatted">pageBlockPreformatted</a></td><td>Форматированный текст (<code>&lt;pre&gt;</code>)</td></tr><tr><td><a href="/constructor/pageBlockFooter">pageBlockFooter</a></td><td>Нижний колонтитул страницы</td></tr><tr><td><a href="/constructor/pageBlockDivider">pageBlockDivider</a></td><td>Пустой блок, разделяющий страницу</td></tr><tr><td><a href="/constructor/pageBlockAnchor">pageBlockAnchor</a></td><td>Ссылка на раздел внутри самой страницы (вида <code>&lt;a href="#target"&gt;anchor&lt;/a&gt;</code>)</td></tr><tr><td><a href="/constructor/pageBlockList">pageBlockList</a></td><td>Неупорядоченный список блоков IV</td></tr><tr><td><a href="/constructor/pageBlockBlockquote">pageBlockBlockquote</a></td><td>Цитата (эквивалент HTML-тега <code>&lt;blockquote&gt;</code>)</td></tr><tr><td><a href="/constructor/pageBlockPullquote">pageBlockPullquote</a></td><td>Врезка с цитатой</td></tr><tr><td><a href="/constructor/pageBlockPhoto">pageBlockPhoto</a></td><td>Фотография</td></tr><tr><td><a href="/constructor/pageBlockVideo">pageBlockVideo</a></td><td>Видео</td></tr><tr><td><a href="/constructor/pageBlockCover">pageBlockCover</a></td><td>Обложка страницы</td></tr><tr><td><a href="/constructor/pageBlockEmbed">pageBlockEmbed</a></td><td>Встроенная веб-страница</td></tr><tr><td><a href="/constructor/pageBlockEmbedPost">pageBlockEmbedPost</a></td><td>Встроенный пост</td></tr><tr><td><a href="/constructor/pageBlockCollage">pageBlockCollage</a></td><td>Коллаж из медиа</td></tr><tr><td><a href="/constructor/pageBlockSlideshow">pageBlockSlideshow</a></td><td>Слайд-шоу</td></tr><tr><td><a href="/constructor/pageBlockChannel">pageBlockChannel</a></td><td>Ссылка на канал Telegram</td></tr><tr><td><a href="/constructor/pageBlockAudio">pageBlockAudio</a></td><td>Аудио</td></tr><tr><td><a href="/constructor/pageBlockKicker">pageBlockKicker</a></td><td>Надзаголовок</td></tr><tr><td><a href="/constructor/pageBlockTable">pageBlockTable</a></td><td>Таблица</td></tr><tr><td><a href="/constructor/pageBlockOrderedList">pageBlockOrderedList</a></td><td>Упорядоченный список блоков IV</td></tr><tr><td><a href="/constructor/pageBlockDetails">pageBlockDetails</a></td><td>Сворачиваемый блок подробностей</td></tr><tr><td><a href="/constructor/pageBlockRelatedArticles">pageBlockRelatedArticles</a></td><td>Связанные статьи</td></tr><tr><td><a href="/constructor/pageBlockMap">pageBlockMap</a></td><td>Карта</td></tr></tbody></table>
