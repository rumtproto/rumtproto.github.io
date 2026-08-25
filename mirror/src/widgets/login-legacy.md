---
title: "Telegram Login Widget"
original: "https://core.telegram.org/widgets/login-legacy"
section: other
description: "To use the login widget, you'll need a Telegram bot."
crumbs: []
layout: layout.njk
---

# Telegram Login Widget

> The Telegram **login widget** is a simple way to authorize users on your website.  
> Check out [this post](/blog/login/) for a general overview of the widget.

### Setting up a bot

To use the login widget, you'll need a [**Telegram bot**](/bots/).

We strongly recommend that the **profile picture** of the bot you use for authorization corresponds with your website's logo, and that the bot's **name** reflects that connection.

Users will see this message when they log into your website:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/811140314/17c1/xf4ULBL5tmE.58438/07ff5b2958ed0e7e36" target="_blank"><img src="https://core.telegram.org/file/811140220/1a02/WFoFUXRl_C8.20012/170c02fae7a0c638aa" title="Login confirmation box"></a></div>

It is more likely that users will log in if your bot has a name and logo they expect to see.

### Linking your domain to the bot

Once you have chosen a bot, send the **/setdomain** command to [@Botfather](https://t.me/botfather) to link your website's domain to the bot. Then configure your widget below and embed the code on your website.

### Widget configuration

Bot Username:

Log in below to load your bots with linked domains

Button Style:

 Large Medium  Small

 Show User Photo

Corner Radius:

 DefaultCustom 

Authorization Type:

 CallbackRedirect to URL 

Request Access:

 to send messages from your bot

Embed Code:

### Receiving authorization data

After a successful authorization, the widget can return data in two ways:

-   by redirecting the user to the URL specified in the `data-auth-url` attribute with the following parameters: _id_, _first\_name_, _last\_name_, _username_, _photo\_url_, _auth\_date_ and _hash_;
-   by calling the callback function `data-onauth` with the JSON-object containing _id_, _first\_name_, _last\_name_, _username_, _photo\_url_, _auth\_date_ and _hash_ fields.

### Checking authorization

You can verify the authentication and the integrity of the data received by comparing the received _hash_ parameter with the hexadecimal representation of the [HMAC-SHA-256](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) signature of the **data-check-string** with the [SHA256](https://en.wikipedia.org/wiki/SHA-2) hash of the [bot's token](/bots/) used as a secret key.

**Data-check-string** is a concatenation of all received fields, sorted in alphabetical order, in the format `key=<value>` with a [line feed](https://en.wikipedia.org/wiki/Newline) character ('\\n', 0x0A) used as separator – e.g., `'auth_date=<auth_date>\nfirst_name=<first_name>\nid=<id>\nusername=<username>'`.

The full check might look like:

```
data_check_string = ...
secret_key = SHA256(<bot_token>)
if (hex(HMAC_SHA256(data_check_string, secret_key)) == hash) {
  // data is from Telegram
}
```

To prevent the use of outdated data, you can additionally check the _auth\_date_ field, which contains a Unix timestamp when the authentication was received.

### Sample implementation

You can find **sample PHP code** for checking authorization and receiving data about a logged in user [on this page](https://gist.github.com/anonymous/6516521b1fb3b464534fbc30ea3573c2).
