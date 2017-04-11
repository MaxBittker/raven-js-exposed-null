# Exposed Null Checker
This plugin allows Raven-js to report when and where a null type may have been rendered into the DOM.
By default, it looks for occurrences of: "NaN", "undefined", and "[object Object]".

why? Because javascript is perfectly happy to let you do this:
![spotify-undefined](https://spotify.i.lithium.com/t5/image/serverpage/image-id/28942i787980A970079666?v=1.0)
![NaN](https://pbs.twimg.com/media/C7P_4k2U0AA16Bp.jpg:large)


without raising exceptions.
Usage:
`npm i raven-js-exposed-null -S`

```
var Raven = require('raven-js') ;
Raven
    .config('https://YOURDSN@sentry.io/*******')
    .install();

var exposedNullCheck = require('raven-js-exposed-null');
exposedNullCheck(Raven);
```

![nyt-NaN](https://pbs.twimg.com/media/C8aCN_cWAAQEENI.jpg)
![paypall-undefined](http://i.imgur.com/iac3qtJ.jpg)
