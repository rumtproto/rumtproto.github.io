---
title: "Login"
original: "https://core.telegram.org/blackberry/login"
section: other
description: "After the Intro, users arrive on the login page, where they are invited to enter their mobile phone number and country code — either manually or by selecting their country from a…"
crumbs: [{"title":"Telegram for Blackberry Spec","url":"/blackberry/"},{"title":"Login","url":"/blackberry/login/"}]
layout: layout.njk
---

# Login

After the [Intro](/blackberry/intro/), users arrive on the login page, where they are invited to enter their mobile phone number and country code — either manually or by selecting their country from a list. You can get a list of countries and codes on [**countrycode.org**](http://countrycode.org) or simply exctract it from the source code of other Telegram apps.

#### 1\. Enter phone number, select a country code

  

<img src="https://core.telegram.org/file/811140405/1/jE99c_j4wJ4/77fa51ec8b5a280040" width="360" height="360">

  

#### 2\. Enter confirmation code

  

<img src="https://core.telegram.org/file/811140955/1/iJayEFyFH5k/7959ec3d301ed8099f" width="360" height="360">

  

If the user doesn‘t enter the activation code within a period of time (determined by the Telegram server), the app must invoke an automatic phone call from Telegram that’ll dictate the activation code.

After the user enters a valid activation code:

-   Existing users are redirected to their [Chats](/blackberry/chats/) list.
-   New users are invited to register by entering their name and uploading a photo. After a successful registration, users are redirected to the [Chats](/blackberry/chats/) section.

#### 3\. Registration

  

<img src="https://core.telegram.org/file/811140406/1/HG36fzax2x0/9aaa19ccc034790b03" width="360" height="360">

  

#### 4\. Errors

This window is displayed in case the entered data is invalid or there's a connection issue.

  

<img src="https://core.telegram.org/file/811140907/2/1nRnS6NtgBg/00b402cabe2dbae029" width="360" height="360">

  

[« Previous page](/blackberry/intro/) | [Next page »](/blackberry/chats/)
