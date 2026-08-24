---
title: "Messages.HighScores"
original: "https://core.telegram.org/type/messages.HighScores"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.HighScores","url":"/type/messages.HighScores/"}]
layout: layout.njk
---

# Messages.HighScores

High scores (in games)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.highScores/">messages.highScores</a>#9a3bfd99 scores:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/HighScore/">HighScore</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.HighScores/" class="current_page_link">messages.HighScores</a>;

---functions---

<a href="/method/messages.getGameHighScores/">messages.getGameHighScores</a>#e822649d peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/messages.HighScores/" class="current_page_link">messages.HighScores</a>;
<a href="/method/messages.getInlineGameHighScores/">messages.getInlineGameHighScores</a>#f635e1b id:<a href="/type/InputBotInlineMessageID/">InputBotInlineMessageID</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/messages.HighScores/" class="current_page_link">messages.HighScores</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.highScores/">messages.highScores</a></td><td>Highscores in a game</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getGameHighScores/">messages.getGameHighScores</a></td><td>Get highscores of a game</td></tr><tr><td><a href="/method/messages.getInlineGameHighScores/">messages.getInlineGameHighScores</a></td><td>Get highscores of a game sent using an inline bot</td></tr></tbody></table>
