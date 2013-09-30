# bezier [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

n-degree Bezier spline interpolation.

## Usage ##

[![bezier](https://nodei.co/npm/bezier.png?mini=true)](https://nodei.co/npm/bezier)

### curve = require('bezier')(pointCount) ###

Generates a function which takes `pointCount` number of points to draw a
bezier curve.

### curve(points, t) ###

Given an array of `points` that is `pointCount` long, return the value across
the curve at `t`.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/bezier/blob/master/LICENSE) for details.
