---
title: "Telegram Applications"
original: "https://telegram.org/apps"
section: other
description: "Telegram apps are open source and support reproducible builds. Anyone can independently verify that Telegram apps you download from App Store or Google Play were built using the…"
crumbs: []
layout: layout.njk
---

# Telegram Applications

<img src="https://telegram.org/file/464001916/10d69/wMJtQWE_ZwI.17701.png/f4e97997cb38fc577a">

Telegram apps are **open source** and support [reproducible builds](/reproducible-builds/). Anyone can independently verify that Telegram apps you download from App Store or Google Play were built using the [exact same code](#source-code) that we publish.

#### Mobile apps

-   [Telegram for Android](/android/)
-   [Telegram for iPhone and iPad](https://telegram.org/dl/ios)

#### Desktop apps

-   [Telegram for Windows/Mac/Linux](https://desktop.telegram.org/)
-   [Telegram for macOS](https://macos.telegram.org)

#### Web apps

-   [Telegram WebK](https://telegram.org/dl/webk)
-   [Telegram WebA](https://telegram.org/dl/weba)

#### Telegram Database Library (TDLib)

-   [TDLib](/tdlib/) – a cross-platform client designed to facilitate creating custom apps on the Telegram platform.
-   [Telegram X for Android](https://play.google.com/store/apps/details?id=org.thunderdog.challegram&hl=en) – a slick experimental Telegram client based on TDLib.

#### Unofficial apps

-   [Unigram, a client optimized for Windows](https://github.com/UnigramDev/Unigram) (based on [TDLib](/tdlib/))
-   [Telegram CLI for Linux](https://telegram.org/dl/cli)
-   [MadelineProto](https://github.com/danog/MadelineProto)

* * *

### Source code

This code allows security researchers to **fully evaluate** our [end-to-end encryption implementation](/api/end-to-end/). It is also possible to **independently verify** that Telegram apps available on Google Play and App Store are built using the [same code](/reproducible-builds/) that we publish on GitHub.

##### [Telegram Database Library](https://github.com/tdlib/td)

Cross-platform library for building custom Telegram apps, see [TDLib](/tdlib/) for details.  
Licensed under [Boost 1.0](https://www.boost.org/LICENSE_1_0.txt).  
[GitHub »](https://github.com/tdlib/td)

##### [Telegram for Android](https://github.com/DrKLO/Telegram)

Official Android App, see [Google Play Market page](https://telegram.org/dl/android) for full description.  
Licensed under [GNU GPL v. 2 or later](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).  
[GitHub »](https://github.com/DrKLO/Telegram)  
[Download APK File »](https://telegram.org/dl/android/apk)

##### [Telegram for iOS](https://github.com/TelegramMessenger/Telegram-iOS)

Licensed under [GNU GPL v. 2 or later](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).  
[GitHub »](https://github.com/TelegramMessenger/Telegram-iOS)

##### [Telegram for macOS](https://github.com/overtake/TelegramSwift)

Native macOS client.  
Licensed under [GNU GPL v. 2](https://www.gnu.org/licenses/gpl.html).  
[GitHub »](https://github.com/overtake/TelegramSwift)

##### Telegram for Web browsers

-   [**Telegram Web, Version K**](https://github.com/morethanwords/tweb). Mac, Windows, Linux, Mobile.  
    Licensed under [GNU GPL v. 3](https://github.com/morethanwords/tweb/blob/master/LICENSE).  
    [GitHub »](https://github.com/morethanwords/tweb)
    
-   [**Telegram Web, Version A**](https://github.com/Ajaxy/telegram-tt). Mac, Windows, Linux, Mobile.  
    Licensed under [GNU GPL v. 3](https://github.com/Ajaxy/telegram-tt/blob/master/LICENSE).  
    [GitHub »](https://github.com/Ajaxy/telegram-tt)
    
-   [Legacy JavaScript client](https://github.com/zhukov/webogram). Mac, Windows, Linux.  
    Licensed under [GNU GPL v. 3](https://www.gnu.org/licenses/gpl.html).  
    [GitHub »](https://github.com/zhukov/webogram)
    

##### [Telegram React](https://github.com/evgeny-nadymov/telegram-react)

JavaScript client for browsers. Mac, Windows, Linux.  
Licensed under [GNU GPL v. 3](https://www.gnu.org/licenses/gpl.html).  
[GitHub »](https://github.com/evgeny-nadymov/telegram-react)

##### [Telegram Desktop](https://github.com/telegramdesktop/tdesktop)

Qt-based desktop client. Mac, Windows, Linux.  
Licensed under [GNU GPL v. 3](https://www.gnu.org/licenses/gpl.html).  
[GitHub »](https://github.com/telegramdesktop/tdesktop)

##### [Telegram for WP](https://github.com/evgeny-nadymov/telegram-wp)

Licensed under [GNU GPL v. 2 or later](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).  
[GitHub »](https://github.com/evgeny-nadymov/telegram-wp)

##### [Telegram X for Android](https://github.com/TGX-Android/Telegram-X)

Alternative Telegram client for Android based on TDLib.  
Licensed under [GPL v.3.0](https://github.com/TGX-Android/Telegram-X/blob/main/LICENSE)  
[GitHub »](https://github.com/TGX-Android/Telegram-X)

#### Unofficial apps

##### [Telegram CLI](https://github.com/vysheng/tg) (Unofficial)

Linux Command-line interface for Telegram.  
Licensed under [GNU GPL v. 2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).  
[GitHub »](https://github.com/vysheng/tg)

##### [Unigram](https://github.com/UnigramDev/Unigram) (Unofficial)

A Telegram client optimized for Windows.  
Licensed under [GNU GPL v. 3 or later](https://www.gnu.org/licenses/gpl.html).  
[GitHub »](https://github.com/UnigramDev/Unigram)

##### [MadelineProto](https://github.com/danog/MadelineProto) (Unofficial)

A PHP MTProto Telegram client.  
Licensed under [GNU AGPL v. 3](https://www.gnu.org/licenses/agpl-3.0.en.html).  
[GitHub »](https://github.com/danog/MadelineProto)

* * *

### Bug Bounty Program

Telegram welcomes developers and the security research community to audit its services, [code](/apps/#source-code) and [protocol](/mtproto/) seeking vulnerabilities or security-related issues. [Learn more about our Bug Bounty Program here](/bug-bounty/).
