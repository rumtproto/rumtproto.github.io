---
title: "auth.Authorization"
original: "https://core.telegram.org/type/auth.Authorization"
section: ref
description: "Object contains info on user authorization."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.Authorization","url":"/type/auth.Authorization/"}]
layout: layout.njk
---

# auth.Authorization

Object contains info on user authorization.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;
<a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;

---functions---

<a href="/method/auth.signUp/">auth.signUp</a>#aac7b717 flags:<a href="/type/%23/">#</a> no_joined_notifications:flags.0?true phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> first_name:<a href="/type/string/">string</a> last_name:<a href="/type/string/">string</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;
<a href="/method/auth.signIn/">auth.signIn</a>#8d52a951 flags:<a href="/type/%23/">#</a> phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> phone_code:flags.0?<a href="/type/string/">string</a> email_verification:flags.1?<a href="/type/EmailVerification/">EmailVerification</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;
<a href="/method/auth.importAuthorization/">auth.importAuthorization</a>#a57a7dad id:<a href="/type/long/">long</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;
<a href="/method/auth.importBotAuthorization/">auth.importBotAuthorization</a>#67a3ff2c flags:<a href="/type/int/">int</a> api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> bot_auth_token:<a href="/type/string/">string</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;
<a href="/method/auth.checkPassword/">auth.checkPassword</a>#d18b4d16 password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;
<a href="/method/auth.recoverPassword/">auth.recoverPassword</a>#37096c70 flags:<a href="/type/%23/">#</a> code:<a href="/type/string/">string</a> new_settings:flags.0?<a href="/type/account.PasswordInputSettings/">account.PasswordInputSettings</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;
<a href="/method/auth.importWebTokenAuthorization/">auth.importWebTokenAuthorization</a>#2db873a9 api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> web_auth_token:<a href="/type/string/">string</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;
<a href="/method/auth.finishPasskeyLogin/">auth.finishPasskeyLogin</a>#9857ad07 flags:<a href="/type/%23/">#</a> credential:<a href="/type/InputPasskeyCredential/">InputPasskeyCredential</a> from_dc_id:flags.0?<a href="/type/int/">int</a> from_auth_key_id:flags.0?<a href="/type/long/">long</a> = <a href="/type/auth.Authorization/" class="current_page_link">auth.Authorization</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.authorization/">auth.authorization</a></td><td>Contains user authorization info.</td></tr><tr><td><a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a></td><td>An account with this phone number doesn't exist on telegram: the user has to <a href="/api/auth/">enter basic information and sign up</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.signUp/">auth.signUp</a></td><td>Registers a validated phone number in the system.</td></tr><tr><td><a href="/method/auth.signIn/">auth.signIn</a></td><td>Signs in a user with a validated phone number.</td></tr><tr><td><a href="/method/auth.importAuthorization/">auth.importAuthorization</a></td><td>Logs in a user using a key transmitted from his native data-center.</td></tr><tr><td><a href="/method/auth.importBotAuthorization/">auth.importBotAuthorization</a></td><td>Login as a bot</td></tr><tr><td><a href="/method/auth.checkPassword/">auth.checkPassword</a></td><td>Try logging to an account protected by a <a href="/api/srp/">2FA password</a>.</td></tr><tr><td><a href="/method/auth.recoverPassword/">auth.recoverPassword</a></td><td>Reset the <a href="/api/srp/">2FA password</a> using the recovery code sent using <a href="/method/auth.requestPasswordRecovery/">auth.requestPasswordRecovery</a>.</td></tr><tr><td><a href="/method/auth.importWebTokenAuthorization/">auth.importWebTokenAuthorization</a></td><td>Login by importing an authorization token</td></tr><tr><td><a href="/method/auth.finishPasskeyLogin/">auth.finishPasskeyLogin</a></td><td>Complete login with a passkey over an unauthenticated connection, see <a href="/api/passkeys/#logging-in-with-a-passkey">here »</a> for more info.<br><br>Must be sent to the user's native DC, as specified by the <code>user_handle</code> (<code>dcId:userId</code>) returned in the passkey assertion, see <a href="/api/passkeys/#logging-in-with-a-passkey">here »</a> for the full flow.</td></tr></tbody></table>
