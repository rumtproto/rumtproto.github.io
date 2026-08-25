---
title: "Sending Media"
original: "https://core.telegram.org/blackberry/chat-media-send"
section: other
description: "The paperclip icon allows to select an attachment. The are several options:"
crumbs: [{"title":"Telegram for Blackberry Spec","url":"/blackberry/"},{"title":"Chat screens","url":"/blackberry/chat/"},{"title":"Sending Media","url":"/blackberry/chat-media-send/"}]
layout: layout.njk
---

# Sending Media

The paperclip icon allows to select an attachment. The are several options:

  

<img src="https://core.telegram.org/file/811140479/1/z6pSwhtZmG0/6a989a242fc635e9c0" width="360" height="360">

  

#### 1\. Converting Media

Photos and videos are to be converted to a supported format on the client side before they are sent to the server. The X and Y dimesions of photo must not exceed **1280** each, and the photos must be compressed to JPEG with **0.87** compression ratio.

Video dimensions must be set to **480x320** (320x480 for vertical videos).  
H.264 and MPEG-4 should be used as the codec and container.

While the photo, video or document is being uploaded, a progress indicator is shown. The user can cancel the upload by tapping on it.

  

<img src="https://core.telegram.org/file/811140013/2/K4Izy2ldjXg/c5df77353d78e63966" width="360" height="360">

  

The selected attachments are sent independently of the text that the user may have entered in the input field.

#### 2\. Selecting Photos

Users can select photos from a Photo Picker that allows to preview photos and select multiple photos at once.

  

<img src="https://core.telegram.org/file/811140588/1/7mdAmJMbmgM/d5bf0904791058bae3" width="360" height="360"> <img src="https://core.telegram.org/file/811140715/1/nh8WVVVXf3I/aa3e06036cf1acf3d4" width="360" height="360">

  

#### 2\. Selecting Videos

Users can select and preview videos from the Video Picker.

  

<img src="https://core.telegram.org/file/811140071/1/8aPyY7D9BE0/554f35e5db5f0c11f0" width="360" height="360"> <img src="https://core.telegram.org/file/811140672/1/ly4DSaR53yE/ba10d55989267c5a66" width="360" height="360">

  

#### 3\. Sending Location

The pin is set to the user‘s current location by default. The user can drag the pin anywhere across the map. The navigation icon always resets the map scale and position, returning it to the the user’s current location.

  

<img src="https://core.telegram.org/file/811140805/1/tQ9MIYdkqGs/d1baa1d8ef9f6b658a" width="360" height="360">

  

#### 4\. Sharing Contact

Contact details for the selected contact are instantly shared in the current chat.

  

<img src="https://core.telegram.org/file/811140268/1/2IsC4OzHI8Y/15b4d6492822fe526b" width="360" height="360"> <img src="https://core.telegram.org/file/811140554/1/46P9ApUZXqo/00193686bd0fc27bf1" width="360" height="360">

  

[« Previous page](/blackberry/chat-send/) | [Next page »](/blackberry/chat-voice/)
