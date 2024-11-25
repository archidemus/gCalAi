# Extension Privacy Policy

## Intro

Different extensions use personal data in different ways. This privacy policy encompasses general principles of how extensions I create collect and handle personal data. Individual extensions, when you first use them, will display their own unique privacy policies and ask you to agree to them before continued use.

## Data Collection

None of the extensions I write collect any data at all. Since no data is collected, it stands to reason, and is, indeed, the case, that none of your data can be sold to third parties.

That being said, there are a few other ways your data is used.

## Chrome Storage API

Several of my extensions take advantage of [Google Chrome's Storage API](https://developers.chrome.com/extensions/storage) to locally store minimal state information. This is similar to a [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies). Examples of data stored this way might include your information about if and when you agreed to the privacy policy or your tokens for third party API's. Google syncs this information across your various computers and Chrome installations. However, my extensions only access this data locally on your machine and they do not transmit it.

## Third-Party APIs

Some of my extensions access third party APIs and report back the results. However, when extensions access a third party API, there is some personal information that third party receives in the [request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header), most notably your [IP address](https://computer.howstuffworks.com/internet/basics/what-is-an-ip-address.htm) and [user agent string](https://developer.chrome.com/multidevice/user-agent). Some companies will use information like that to develop a “[browser fingerprint](https://pixelprivacy.com/resources/browser-fingerprinting/)" that can probably track and personally identify you. Unfortunately, this is not something that I or my extensions have control over. If this is a concern for you, consider using a VPN to mask your IP address.

## Changes to the Privacy Policy

If there are substantive<sup>1</sup> changes made to this blanket privacy policy or to the individual privacy policies of any of my extensions, I will push out a new version of the affected extension(s) and ask you to agree to the amended privacy policy.

## Feedback

If you have questions or concerns about this privacy policy, feel free to [send me an email](mailto:david.heidelberger@gmail.com) or [file an issue](https://github.com/dheidelberger/extension-privacy-policy/issues/new) to this repository.

---

#### Notes:

1 - When I say "substantive," I mean that I won't push out app updates for minor changes like fixing a typo.
