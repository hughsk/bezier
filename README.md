# bezier [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

n-degree Bezier curve interpolation.

## Usage ##

[![bezier](https://nodei.co/npm/bezier.png?mini=true)](https://nodei.co/npm/bezier)

### `require('bezier')(points, t)` ###

Returns the value at `t` for a bezier curve of `points.length` degrees.
In other words, if you pass it a 3-element array you'll get the results of a
3-degree (quadratic) curve.

``` javascript
var bezier = require('bezier')
bezier([0, 1, 2], 0.5)    // 1
bezier([0, 1, 2, 3], 0.5) // 1.5
```

You can use a curve for each dimension to get the resulting bezier you're
probably familiar with:

``` javascript
var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')

var bezier = require('bezier')
var x = [0, 1, 2]
var y = [2, 1, 0]

ctx.beginPath()
ctx.strokeStyle = '#000'
for (var t = 0; t < 1; t += 0.01) {
  ctx.lineTo(bezier(x, t), bezier(y, t))
}
ctx.stroke()
ctx.closePath()
```

### `curve = require('bezier').prepare(pointCount)` ###

Generates a function which takes `pointCount` number of points to draw a
bezier curve. For higher values of `pointCount`, this function is generated on
the fly such that it can run with as little overhead as possible.

It's a small trade-off in flexibility for a small benefit in performance :)

### `curve(points, t)` ###

Given an array of `points` that is `pointCount` long, return the value across
the curve at `t`.

``` javascript
var quadratic = require('bezier').prepare(3)
var cubic = require('bezier').prepare(4)

quadratic([0, 1, 2], 0.5) // 1
cubic([0, 1, 2, 3], 0.5)  // 1.5

// Note that these functions expect
// arrays of the correct length:
quadratic([0, 1, 2, 3], 0.5) // 1
quadratic([0, 1], 0.5)       // NaN
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/bezier/blob/master/LICENSE) for details.
