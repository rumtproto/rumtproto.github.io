---
title: "Bots.RequestedButton"
original: "https://core.telegram.org/type/bots.RequestedButton"
section: ref
description: "Contains the Mini App request ID generated when a bot prepares a peer request button, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Bots.RequestedButton","url":"/type/bots.RequestedButton/"}]
layout: layout.njk
---

# Bots.RequestedButton

Contains the Mini App request ID generated when a bot prepares a peer request button, see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="/type/bots.RequestedButton/">Switch »</a></code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/bots.requestedButton/">bots.requestedButton</a></td><td>Contains the request ID a bot should pass to a <a href="/api/bots/webapps/">Mini App</a> after preparing a peer request button with <a href="/method/bots.requestWebViewButton/">bots.requestWebViewButton</a>, see <a href="/api/bots/buttons/#requesting-peers-via-mini-apps">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.requestWebViewButton/">bots.requestWebViewButton</a></td><td>Bots may use this method to prepare a peer request button for a <a href="/api/bots/webapps/">Mini App</a>, see <a href="/api/bots/buttons/#requesting-peers-via-mini-apps">here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
