---
title: "messages.getGameHighScores"
original: "https://core.telegram.org/method/messages.getGameHighScores"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getGameHighScores","url":"/method/messages.getGameHighScores/"}]
layout: layout.njk
---

# messages.getGameHighScores

Get highscores of a game

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.highScores/">messages.highScores</a>#9a3bfd99 scores:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/HighScore/">HighScore</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.HighScores/">messages.HighScores</a>;
---functions---
<a href="/method/messages.getGameHighScores/" class="current_page_link">messages.getGameHighScores</a>#e822649d peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/messages.HighScores/">messages.HighScores</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Where was the game sent</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of message with game media attachment</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Get high scores made by a certain user</td></tr></tbody></table>

### Result

[messages.HighScores](/type/messages.HighScores/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>
