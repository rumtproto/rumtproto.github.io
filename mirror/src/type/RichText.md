---
title: "RichText"
original: "https://core.telegram.org/type/RichText"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RichText","url":"/type/RichText/"}]
layout: layout.njk
---

# RichText

Rich text

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/textEmpty/">textEmpty</a>#dc3d824f = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textPlain/">textPlain</a>#744694e0 text:<a href="/type/string/">string</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textBold/">textBold</a>#6724abc4 text:<a href="/type/RichText/" class="current_page_link">RichText</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textItalic/">textItalic</a>#d912a59c text:<a href="/type/RichText/" class="current_page_link">RichText</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textUnderline/">textUnderline</a>#c12622c4 text:<a href="/type/RichText/" class="current_page_link">RichText</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textStrike/">textStrike</a>#9bf8bb95 text:<a href="/type/RichText/" class="current_page_link">RichText</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textFixed/">textFixed</a>#6c3f19b9 text:<a href="/type/RichText/" class="current_page_link">RichText</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textUrl/">textUrl</a>#3c2884c1 text:<a href="/type/RichText/" class="current_page_link">RichText</a> url:<a href="/type/string/">string</a> webpage_id:<a href="/type/long/">long</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textEmail/">textEmail</a>#de5a0dd6 text:<a href="/type/RichText/" class="current_page_link">RichText</a> email:<a href="/type/string/">string</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textConcat/">textConcat</a>#7e6260d7 texts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RichText/" class="current_page_link">RichText</a>&gt; = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textSubscript/">textSubscript</a>#ed6a8504 text:<a href="/type/RichText/" class="current_page_link">RichText</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textSuperscript/">textSuperscript</a>#c7fb5e01 text:<a href="/type/RichText/" class="current_page_link">RichText</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textMarked/">textMarked</a>#34b8621 text:<a href="/type/RichText/" class="current_page_link">RichText</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textPhone/">textPhone</a>#1ccb966a text:<a href="/type/RichText/" class="current_page_link">RichText</a> phone:<a href="/type/string/">string</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textImage/">textImage</a>#81ccf4f document_id:<a href="/type/long/">long</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;
<a href="/constructor/textAnchor/">textAnchor</a>#35553762 text:<a href="/type/RichText/" class="current_page_link">RichText</a> name:<a href="/type/string/">string</a> = <a href="/type/RichText/" class="current_page_link">RichText</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/textEmpty/">textEmpty</a></td><td>Empty rich text element</td></tr><tr><td><a href="/constructor/textPlain/">textPlain</a></td><td>Plain text</td></tr><tr><td><a href="/constructor/textBold/">textBold</a></td><td><strong>Bold</strong> text</td></tr><tr><td><a href="/constructor/textItalic/">textItalic</a></td><td><em>Italic</em> text</td></tr><tr><td><a href="/constructor/textUnderline/">textUnderline</a></td><td>Underlined text</td></tr><tr><td><a href="/constructor/textStrike/">textStrike</a></td><td><del>Strikethrough</del> text</td></tr><tr><td><a href="/constructor/textFixed/">textFixed</a></td><td><code>fixed-width</code> rich text</td></tr><tr><td><a href="/constructor/textUrl/">textUrl</a></td><td>Link</td></tr><tr><td><a href="/constructor/textEmail/">textEmail</a></td><td>Rich text email link</td></tr><tr><td><a href="/constructor/textConcat/">textConcat</a></td><td>Concatenation of rich texts</td></tr><tr><td><a href="/constructor/textSubscript/">textSubscript</a></td><td>Subscript text</td></tr><tr><td><a href="/constructor/textSuperscript/">textSuperscript</a></td><td>Superscript text</td></tr><tr><td><a href="/constructor/textMarked/">textMarked</a></td><td>Highlighted text</td></tr><tr><td><a href="/constructor/textPhone/">textPhone</a></td><td>Rich text linked to a phone number</td></tr><tr><td><a href="/constructor/textImage/">textImage</a></td><td>Inline image</td></tr><tr><td><a href="/constructor/textAnchor/">textAnchor</a></td><td>Text linking to another section of the page</td></tr></tbody></table>
