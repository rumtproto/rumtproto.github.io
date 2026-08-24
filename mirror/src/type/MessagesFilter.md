---
title: "MessagesFilter"
original: "https://core.telegram.org/type/MessagesFilter"
section: ref
description: "Object describes message filter."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessagesFilter","url":"/type/MessagesFilter/"}]
layout: layout.njk
---

# MessagesFilter

Object describes message filter.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMessagesFilterEmpty/">inputMessagesFilterEmpty</a>#57e2f66c = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterPhotos/">inputMessagesFilterPhotos</a>#9609a51c = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterVideo/">inputMessagesFilterVideo</a>#9fc00e65 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterPhotoVideo/">inputMessagesFilterPhotoVideo</a>#56e9f0e4 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterDocument/">inputMessagesFilterDocument</a>#9eddf188 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterUrl/">inputMessagesFilterUrl</a>#7ef0dd87 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterGif/">inputMessagesFilterGif</a>#ffc86587 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterVoice/">inputMessagesFilterVoice</a>#50f5c392 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterMusic/">inputMessagesFilterMusic</a>#3751b49e = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterChatPhotos/">inputMessagesFilterChatPhotos</a>#3a20ecb8 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterPhoneCalls/">inputMessagesFilterPhoneCalls</a>#80c99768 flags:<a href="/type/%23/">#</a> missed:flags.0?true = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterRoundVoice/">inputMessagesFilterRoundVoice</a>#7a7c17a4 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterRoundVideo/">inputMessagesFilterRoundVideo</a>#b549da53 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterMyMentions/">inputMessagesFilterMyMentions</a>#c1f8e69a = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterGeo/">inputMessagesFilterGeo</a>#e7026d0d = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterContacts/">inputMessagesFilterContacts</a>#e062db83 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;
<a href="/constructor/inputMessagesFilterPinned/">inputMessagesFilterPinned</a>#1bb00451 = <a href="/type/MessagesFilter/" class="current_page_link">MessagesFilter</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputMessagesFilterEmpty/">inputMessagesFilterEmpty</a></td><td>Filter is absent.</td></tr><tr><td><a href="/constructor/inputMessagesFilterPhotos/">inputMessagesFilterPhotos</a></td><td>Filter for messages containing photos.</td></tr><tr><td><a href="/constructor/inputMessagesFilterVideo/">inputMessagesFilterVideo</a></td><td>Filter for messages containing videos.</td></tr><tr><td><a href="/constructor/inputMessagesFilterPhotoVideo/">inputMessagesFilterPhotoVideo</a></td><td>Filter for messages containing photos or videos.</td></tr><tr><td><a href="/constructor/inputMessagesFilterDocument/">inputMessagesFilterDocument</a></td><td>Filter for messages containing documents.</td></tr><tr><td><a href="/constructor/inputMessagesFilterUrl/">inputMessagesFilterUrl</a></td><td>Return only messages containing URLs</td></tr><tr><td><a href="/constructor/inputMessagesFilterGif/">inputMessagesFilterGif</a></td><td>Return only messages containing gifs</td></tr><tr><td><a href="/constructor/inputMessagesFilterVoice/">inputMessagesFilterVoice</a></td><td>Return only messages containing voice notes</td></tr><tr><td><a href="/constructor/inputMessagesFilterMusic/">inputMessagesFilterMusic</a></td><td>Return only messages containing audio files</td></tr><tr><td><a href="/constructor/inputMessagesFilterChatPhotos/">inputMessagesFilterChatPhotos</a></td><td>Return only chat photo changes</td></tr><tr><td><a href="/constructor/inputMessagesFilterPhoneCalls/">inputMessagesFilterPhoneCalls</a></td><td>Return only phone calls</td></tr><tr><td><a href="/constructor/inputMessagesFilterRoundVoice/">inputMessagesFilterRoundVoice</a></td><td>Return only round videos and voice notes</td></tr><tr><td><a href="/constructor/inputMessagesFilterRoundVideo/">inputMessagesFilterRoundVideo</a></td><td>Return only round videos</td></tr><tr><td><a href="/constructor/inputMessagesFilterMyMentions/">inputMessagesFilterMyMentions</a></td><td>Return only messages where the current user was <a href="/api/mentions/">mentioned</a>.</td></tr><tr><td><a href="/constructor/inputMessagesFilterGeo/">inputMessagesFilterGeo</a></td><td>Return only messages containing geolocations</td></tr><tr><td><a href="/constructor/inputMessagesFilterContacts/">inputMessagesFilterContacts</a></td><td>Return only messages containing contacts</td></tr><tr><td><a href="/constructor/inputMessagesFilterPinned/">inputMessagesFilterPinned</a></td><td>Fetch only pinned messages</td></tr><tr><td><a href="/constructor/inputMessagesFilterPoll/">inputMessagesFilterPoll</a></td><td>Filter for poll messages, see <a href="/api/poll/#searching-for-polls">searching for polls »</a></td></tr></tbody></table>
