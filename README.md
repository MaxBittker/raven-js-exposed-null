# Exposed Null Checker
This plugin allows Raven-js to report when and where a null type may have been rendered into the DOM.
By default, it looks for occurrences of: "NaN", "undefined", and "[object Object]".

why? Because javascript is perfectly happy to let you do this:
![spotify-undefined](https://spotify.i.lithium.com/t5/image/serverpage/image-id/28942i787980A970079666?v=1.0)
and this:
![NaN](https://pbs.twimg.com/media/C7P_4k2U0AA16Bp.jpg:large)
without raising exceptions.

Usage:

```
var Raven = require('raven-js') ;
Raven
    .config('https://YOURDSN@sentry.io/*******')
    .install();

var exposedNullCheck = require('exposed-null-check');
exposedNullCheck(Raven);
```
