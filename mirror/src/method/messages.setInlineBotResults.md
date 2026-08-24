---
title: "messages.setInlineBotResults"
original: "https://core.telegram.org/method/messages.setInlineBotResults"
section: ref
description: "Answer an inline query, for bots only"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setInlineBotResults","url":"/method/messages.setInlineBotResults/"}]
layout: layout.njk
---

# messages.setInlineBotResults

Answer an inline query, for bots only

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.setInlineBotResults/" class="current_page_link">messages.setInlineBotResults</a>#bb12a419 flags:<a href="/type/%23/">#</a> gallery:flags.0?true private:flags.1?true query_id:<a href="/type/long/">long</a> results:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputBotInlineResult/">InputBotInlineResult</a>&gt; cache_time:<a href="/type/int/">int</a> next_offset:flags.2?<a href="/type/string/">string</a> switch_pm:flags.3?<a href="/type/InlineBotSwitchPM/">InlineBotSwitchPM</a> switch_webview:flags.4?<a href="/type/InlineBotWebView/">InlineBotWebView</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>gallery</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set this flag if the results are composed of media files</td></tr><tr><td><strong>private</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Set this flag if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique identifier for the answered query</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputBotInlineResult/">InputBotInlineResult</a>&gt;</td><td>Vector of results for the inline query</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.</td></tr><tr><td><strong>switch_pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/InlineBotSwitchPM/">InlineBotSwitchPM</a></td><td>If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to a private chat with the bot and sends the bot a start message with a certain parameter.</td></tr><tr><td><strong>switch_webview</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/InlineBotWebView/">InlineBotWebView</a></td><td>If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to the specified <a href="/api/bots/webapps/#inline-mode-mini-apps">inline mode mini app</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ARTICLE_TITLE_EMPTY</td><td>The title of the article is empty.</td></tr><tr><td>400</td><td>AUDIO_CONTENT_URL_EMPTY</td><td>The remote URL specified in the content field is empty.</td></tr><tr><td>400</td><td>AUDIO_TITLE_EMPTY</td><td>An empty audio title was provided.</td></tr><tr><td>400</td><td>BUTTON_DATA_INVALID</td><td>The data of one or more of the buttons you provided is invalid.</td></tr><tr><td>400</td><td>BUTTON_TYPE_INVALID</td><td>The type of one or more of the buttons you provided is invalid.</td></tr><tr><td>400</td><td>BUTTON_URL_INVALID</td><td>Button URL invalid.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>The specified document is invalid.</td></tr><tr><td>400</td><td>FILE_CONTENT_TYPE_INVALID</td><td>File content-type is invalid.</td></tr><tr><td>400</td><td>FILE_TITLE_EMPTY</td><td>An empty file title was specified.</td></tr><tr><td>400</td><td>GIF_CONTENT_TYPE_INVALID</td><td>GIF content-type invalid.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>The caption is too long.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>The provided message is empty.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>The provided message is too long.</td></tr><tr><td>400</td><td>NEXT_OFFSET_INVALID</td><td>The specified offset is longer than 64 bytes.</td></tr><tr><td>400</td><td>PEER_TYPES_INVALID</td><td>The passed <a href="/constructor/keyboardButtonSwitchInline/">keyboardButtonSwitchInline</a>.<code>peer_types</code> field is invalid.</td></tr><tr><td>400</td><td>PHOTO_CONTENT_TYPE_INVALID</td><td>Photo mime-type invalid.</td></tr><tr><td>400</td><td>PHOTO_CONTENT_URL_EMPTY</td><td>Photo URL invalid.</td></tr><tr><td>400</td><td>PHOTO_INVALID</td><td>Photo invalid.</td></tr><tr><td>400</td><td>PHOTO_THUMB_URL_EMPTY</td><td>Photo thumbnail URL is empty.</td></tr><tr><td>400</td><td>QUERY_ID_INVALID</td><td>The query ID is invalid.</td></tr><tr><td>400</td><td>REPLY_MARKUP_INVALID</td><td>The provided reply markup is invalid.</td></tr><tr><td>400</td><td>RESULTS_TOO_MUCH</td><td>Too many results were provided.</td></tr><tr><td>400</td><td>RESULT_ID_DUPLICATE</td><td>You provided a duplicate result ID.</td></tr><tr><td>400</td><td>RESULT_ID_INVALID</td><td>One of the specified result IDs is invalid.</td></tr><tr><td>400</td><td>RESULT_TYPE_INVALID</td><td>Result type invalid.</td></tr><tr><td>400</td><td>SEND_MESSAGE_MEDIA_INVALID</td><td>Invalid media provided.</td></tr><tr><td>400</td><td>SEND_MESSAGE_TYPE_INVALID</td><td>The message type is invalid.</td></tr><tr><td>400</td><td>START_PARAM_EMPTY</td><td>The start parameter is empty.</td></tr><tr><td>400</td><td>START_PARAM_INVALID</td><td>Start parameter invalid.</td></tr><tr><td>400</td><td>STICKER_DOCUMENT_INVALID</td><td>The specified sticker document is invalid.</td></tr><tr><td>400</td><td>SWITCH_PM_TEXT_EMPTY</td><td>The switch_pm.text field was empty.</td></tr><tr><td>400</td><td>SWITCH_WEBVIEW_URL_INVALID</td><td>The URL specified in switch_webview.url is invalid!</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Invalid URL provided.</td></tr><tr><td>403</td><td>USER_BOT_INVALID</td><td>User accounts must provide the <code>bot</code> method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr><tr><td>400</td><td>VIDEO_CONTENT_TYPE_INVALID</td><td>The video's content type is invalid.</td></tr><tr><td>400</td><td>VIDEO_TITLE_EMPTY</td><td>The specified video title is empty.</td></tr><tr><td>400</td><td>WEBDOCUMENT_INVALID</td><td>Invalid webdocument URL provided.</td></tr><tr><td>400</td><td>WEBDOCUMENT_MIME_INVALID</td><td>Invalid webdocument mime type provided.</td></tr><tr><td>400</td><td>WEBDOCUMENT_SIZE_TOO_BIG</td><td>Webdocument is too big!</td></tr><tr><td>400</td><td>WEBDOCUMENT_URL_EMPTY</td><td>The passed web document URL is empty.</td></tr><tr><td>400</td><td>WEBDOCUMENT_URL_INVALID</td><td>The specified webdocument URL is invalid.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/)

Button to switch the user to inline mode

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must insert the bot's username and `query` into the chat input field, triggering an [inline query](/api/bots/inline/).

If `same_peer` is set, clients use the current chat. Otherwise, clients prompt the user to select a chat, filtered by `peer_types` if specified.
