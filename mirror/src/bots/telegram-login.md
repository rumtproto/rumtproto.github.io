---
title: "Log In With Telegram"
original: "https://core.telegram.org/bots/telegram-login"
section: bots
description: "Telegram offers app and website developers a free and open platform that lets over 1 billion users seamlessly sign up and log in with their Telegram accounts."
crumbs: []
layout: layout.njk
---

# Log In With Telegram

Telegram offers app and website developers **a free and open platform** that lets over **1 billion** users seamlessly **sign up and log in** with their Telegram accounts.

<div class="blog_video_player_wrap" style="max-width: 600px; margin: 20px auto 20px;"><div><video class="blog_video_player tl_blog_vid_autoplay" onclick="videoTogglePlay(this)" autoplay="" loop="" controls="" muted="" poster="https://core.telegram.org/file/400780400046/6/lzgRh3Hn0Ec.49953.jpg/d6bd5793f35f463749" style="max-width: 600px;" alt="Telegram Login"><source src="https://core.telegram.org/file/400780400885/2/Qc3SOZNZOLA.3171201.mp4/da53cf9e54f1eeab73" type="video/mp4"></video></div></div>

#### Benefits of Telegram Login

-   **Higher conversion**  
    Users sign in with a few taps, boosting conversion and retention.
    
-   **Lower verification costs**  
    Users can share their **verified phone number**, removing the need for expensive codes.
    
-   **Direct communication channels**  
    You can reach your users within Telegram, with built-in push notification support.
    
-   **Further integration**  
    You can deliver more services directly via the [Bot API](/bots/) and [Mini Apps](/bots/webapps/).
    

> **Note:** This document describes the Telegram Login library and the new [OpenID Connect](https://en.wikipedia.org/wiki/OpenID) login flow.  
> The legacy iframe-based JavaScript widget documentation is archived [here](/widgets/login-legacy/).

* * *

### Getting Started

Telegram offers a [compact tool](#using-the-telegram-login-library) to quickly add Telegram login buttons to your interface. You can also directly access our library's [JS API](#available-methods).

For mobile developers, we also provide ready-to-use **[Native SDKs](#native-sdks)** for iOS and Android.

Alternatively, Telegram supports the standard [OpenID Connect](https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_\(OIDC%29) protocol. This allows you to integrate Telegram authentication into your application using any OIDC-compatible library or authentication platform (e.g., Keycloak, Authentik, Auth0 etc.).

Our implementation follows the standard [Authorization Code Flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) with **PKCE** support.

> For an in-depth understanding of the general OIDC flow, please refer to the [OpenID Foundation's Developer Guide](https://openid.net/developers/how-connect-works).

#### TL;DR

-   **[Set up a bot](#setting-up-a-bot)** to represent your application.
-   **[Register your Allowed URLs](#registering-your-allowed-urls)** via [@BotFather](https://t.me/botfather) and obtain your Client ID and Secret.
-   **[Add the Telegram Login library](#using-the-telegram-login-library)** to your page.
-   **[Integrate Native SDKs](#native-sdks)** if you are building an iOS or Android mobile application.
-   **[Validate ID tokens](#validating-id-tokens)** to cryptographically verify incoming requests.

Alternatively, you can [use an OpenID integration](#openid-connect).

> Having trouble with any of the steps above? Feel free to reach out to us at [@BotSupport](https://t.me/botsupport), making sure to include the hashtag #oidc in your message.

#### Setting up a bot

To use Telegram Login, you'll need a [**Telegram bot**](/bots/#how-do-i-create-a-bot) to represent your application.

We strongly recommend that the **profile picture** of the bot corresponds with your website's logo, and that the bot's **name** reflects that connection. Users will see a confirmation box similar to the one below when logging in:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/400780400680/1/LQAYyWKJXy0.260963.png/8fe2cdf47d8a182740" target="_blank"><img src="https://core.telegram.org/file/400780400680/1/LQAYyWKJXy0.260963.png/8fe2cdf47d8a182740" title="Login confirmation box"></a></div>

> Users are much more likely to authorize your app if the bot has a name and logo they recognize and expect. Official services can also [apply for verification](/verify/) from Telegram or [third parties](/verify/#third-party-verification) for greater transparency.

#### Registering your Allowed URLs

Once you have chosen a bot, open the [**@BotFather**](https://t.me/botfather?startapp) mini app, select the bot and then select **Login Widget**.

Add all **Allowed URLs** for your application. This includes the website origins where you embed the login widget (e.g., `https://example.com`) and specific redirect URIs for your OIDC flow (e.g., `https://example.com/auth/callback`). You can register multiple URLs to support different domains or endpoints.

In this section, [@BotFather](https://t.me/botfather) will also display your **Client ID** and **Client Secret**. Save these values securely – you will need them to configure your OIDC client.

> **Important:** For security reasons, Telegram will only process logins or redirect users using your pre-registered URLs.

### Using the Telegram Login library

Use the tool below to customize your button and get the HTML snippet for your website.

.tg-auth-button { margin: 24px auto; }

Client ID:

Button Style:

 Rounded Outlined  Icon  Shine

Scopes:

 Request Direct Messages Request Phone Number

Embed Code:

Alternatively, you can interact with the library using the following JS methods:

#### Available Methods

<table class="table"><thead><tr><th scope="col" align="left">Method</th><th scope="col" align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>Telegram.Login.init(InitOptions, callback)</code></td><td align="left">Initialize the SDK and register an auth callback.</td></tr><tr><td align="left"><code>Telegram.Login.open([callback])</code></td><td align="left">Open the login popup using the initialized options.</td></tr><tr><td align="left"><code>Telegram.Login.auth(InitOptions, callback)</code></td><td align="left">Open the login popup with explicit options.</td></tr></tbody></table>

#### InitOptions

<table class="table"><thead><tr><th scope="col" align="left">Option</th><th scope="col" align="left">Type</th><th scope="col" align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>client_id</code></td><td align="left">number</td><td align="left">Your bot’s Client ID provided by <a href="https://t.me/botfather">@BotFather</a>.</td></tr><tr><td align="left"><code>scope</code></td><td align="left">array(<code>profile</code> | <code>phone</code> | <code>write</code>)</td><td align="left"><em>Optional.</em> Ask for public profile info, a phone number, permission for your bot to message the user.</td></tr><tr><td align="left"><code>lang</code></td><td align="left">string</td><td align="left"><em>Optional.</em> UI language code (e.g., <code>en</code>, <code>es</code>).</td></tr><tr><td align="left"><code>nonce</code></td><td align="left">string</td><td align="left"><em>Optional.</em> Server-generated random string to be included in the resulting <code>id_token</code> to prevent replay attacks.</td></tr></tbody></table>

#### Callback Data

When the login flow completes, the callback may receive either a success payload (user data) or an error.

<table class="table"><thead><tr><th scope="col" align="left">Field</th><th scope="col" align="left">Type</th><th scope="col" align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>id_token</code></td><td align="left">string</td><td align="left">An OIDC JWT token containing user claims. <strong>Important: <a href="#validating-id-tokens">Verify the validity of ID token server-side</a></strong></td></tr><tr><td align="left"><code>user</code></td><td align="left"><a href="#user-data-structure">UserData</a></td><td align="left">Decoded <code>id_token</code>, containing the requested user info.</td></tr><tr><td align="left"><code>error</code></td><td align="left">string</td><td align="left">Error description.</td></tr></tbody></table>

> **Important:** The `telegram-login.js` library relies on communicating with a popup window to complete the authentication flow. If your website serves the `Cross-Origin-Opener-Policy: same-origin` HTTP header, this cross-window communication will be blocked and the login process will fail. To ensure the JavaScript library functions correctly, you must either remove this header or use a more permissive policy, such as `Cross-Origin-Opener-Policy: same-origin-allow-popups`.

* * *

### Native SDKs

If you are building a native mobile application, Telegram provides dedicated SDKs to streamline the login experience on iOS and Android devices, bypassing the need for web-based views.

-   **[Telegram Login for iOS](https://github.com/TelegramMessenger/telegram-login-ios)**  
    A native Swift package for integrating Telegram authentication into your iOS or iPadOS applications.
    
-   **[Telegram Login for Android](https://github.com/TelegramMessenger/telegram-login-android)**  
    A native Android library allowing you to seamlessly authenticate users within your Kotlin or Java Android applications.
    

> **Note:** Complete setup guides, installation instructions, and usage examples for each platform can be found directly in the README files of their respective GitHub repositories.

* * *

### OpenID Connect

If you are using an OIDC-compatible library or identity broker, you can use the standard configuration values below.

**Discovery Document URL**

```
https://oauth.telegram.org/.well-known/openid-configuration
```

**Client Configuration**

<table class="table"><thead><tr><th scope="col" align="left">Parameter</th><th scope="col" align="left">Value</th></tr></thead><tbody><tr><td align="left"><strong>Client ID</strong></td><td align="left">The Client ID provided by BotFather</td></tr><tr><td align="left"><strong>Client Secret</strong></td><td align="left">The Client Secret provided by BotFather</td></tr><tr><td align="left"><strong>Response Type</strong></td><td align="left"><code>code</code></td></tr><tr><td align="left"><strong>PKCE</strong></td><td align="left">Recommended (S256)</td></tr></tbody></table>

#### Available Scopes

You can request specific permissions when initiating authorization. The `openid` scope is required.

<table class="table"><thead><tr><th scope="col" align="left">Scope</th><th scope="col" align="left">Description</th><th scope="col" align="left">Claims Returned</th></tr></thead><tbody><tr><td align="left"><code>openid</code></td><td align="left"><strong>Required.</strong> Returns the user's unique identifier and auth timestamp.</td><td align="left"><code>sub</code>, <code>iss</code>, <code>iat</code>, <code>exp</code></td></tr><tr><td align="left"><code>profile</code></td><td align="left">User's basic info: user ID, name, username, and profile photo URL.</td><td align="left"><code>id</code>, <code>name</code>, <code>preferred_username</code>, <code>picture</code></td></tr><tr><td align="left"><code>phone</code></td><td align="left">User's verified <strong>phone number</strong>. Requires user consent.</td><td align="left"><code>phone_number</code></td></tr><tr><td align="left"><code>telegram:bot_access</code></td><td align="left">Allows your bot to send direct messages to the user after login.</td><td align="left">—</td></tr></tbody></table>

#### User Data Structure

All requested user information is returned directly in the **ID token**. After successful authentication, the decoded ID token will look like this:

```
{
  "iss": "https://oauth.telegram.org",
  "aud": "123456789",
  "sub": "1234123412341234123",
  "iat": 1700000000,
  "exp": 1700003600,
  "id": 987654321,
  "name": "John Doe",
  "given_name": "John",
  "family_name": "Doe",
  "preferred_username": "johndoe",
  "picture": "https://cdn4.telesco.pe/file...",
  "phone_number": "971577777777",
  "phone_number_verified": true,
}
```

> Note that Telegram does not currently provide a separate `UserInfo` endpoint. However, some OIDC libraries may expect this endpoint by default, and you may need to **configure them** to skip a separate `userinfo` request.

* * *

### Manual Implementation

If you are integrating the OIDC flow manually without a library, use the endpoints and flow details below.

#### Endpoints

-   **Authorization:** `https://oauth.telegram.org/auth`
-   **Token:** `https://oauth.telegram.org/token`
-   **Keys (JWKS):** `https://oauth.telegram.org/.well-known/jwks.json`

#### Initiate Authorization

Direct the user to the authorization endpoint with the following parameters. This URL must be opened in the user's browser.

```
GET https://oauth.telegram.org/auth?
    client_id=<YOUR_BOT_ID>&
    redirect_uri=<YOUR_CALLBACK_URL>&
    response_type=code&
    scope=openid%20profile%20phone&
    state=<RANDOM_STRING>&
    code_challenge=<PKCE_CHALLENGE>&
    code_challenge_method=S256
```

-   **client\_id**: Client ID provided by BotFather.
-   **state**: A random string generated by your backend to prevent CSRF.
-   **code\_challenge**: Base64URL-encoded SHA256 hash of your code verifier (PKCE).

#### Exchange Code for Tokens

If the user approves the login, they will be redirected to your `redirect_uri` with a `code` parameter. Exchange this code for an access token and ID token by making a server-side POST request.

This request requires **Basic Authorization** using your Client ID and Client Secret (`base64(client_id:client_secret)`).

```
POST https://oauth.telegram.org/token
Content-Type: application/x-www-form-urlencoded
Authorization: Basic <BASE64_CREDENTIALS>

grant_type=authorization_code&
code=<AUTHORIZATION_CODE>&
redirect_uri=<YOUR_CALLBACK_URL>&
client_id=<YOUR_BOT_ID>&
code_verifier=<PKCE_VERIFIER>
```

**Response:**

```
{
  "access_token": "...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "id_token": "eyJhbGciOiJ..."
}
```

#### Validating ID Tokens

The `id_token` is a signed JSON Web Token (JWT). Before trusting the user data inside, you **must** validate the signature:

1.  **Fetch Keys:** specific public keys from the [JWKS endpoint](https://oauth.telegram.org/.well-known/jwks.json).
2.  **Verify Signature:** Ensure the token was signed by Telegram.
3.  **Verify Claims:** Check that `iss` is `https://oauth.telegram.org`, `aud` matches your Bot ID, and the token has not expired (`exp`).

#### Signing algorithm

Telegram signs ID tokens with `RS256` by default, which works with all OIDC libraries out of the box. If you need a different algorithm, you can change it under **Login Widget > Advanced** in [@BotFather](https://t.me/botfather):

<table class="table"><thead><tr><th scope="col" align="left">Algorithm</th><th scope="col" align="left">Notes</th></tr></thead><tbody><tr><td align="left"><code>RS256</code></td><td align="left">Default.</td></tr><tr><td align="left"><code>ES256</code></td><td align="left">Smaller tokens, faster verification.</td></tr><tr><td align="left"><code>EdDSA</code></td><td align="left">Ed25519 (TON, Solana curve). For Web3 integrations.</td></tr><tr><td align="left"><code>ES256K</code></td><td align="left">secp256k1 (Bitcoin, Ethereum curve). For Web3 integrations.</td></tr></tbody></table>

`EdDSA` and `ES256K` are restricted to the `openid` scope, since tokens signed with these algorithms may be relayed on-chain or verified by smart contracts. Currently, selecting either will reject `profile` and `phone` scopes.

* * *

> Once you have established a connection with the user, you can optionally use your **linked bot** to provide services **directly in the chat interface** via the [Bot API](/bots/), or seamlessly offer your **entire web application inside Telegram** using [Mini Apps](/bots/webapps/).
