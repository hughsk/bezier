var choose = require('choose')
var cache = {}

module.exports = bezier

function bezier(pieces) {
  pieces = +pieces|0
  if (!pieces) throw new Error('Cannot create a spline with no elements')
  if (cache[pieces]) return cache[pieces]

  var coefficients = []
  var i = pieces

  while (i--) {
    coefficients.push(choose(pieces-1, i))
  }

  var fn = []
  fn.push('if (t === 0) return pts[0]')
  fn.push('if (t === 1) return pts['+(pieces-1)+']')
  fn.push('var ut = 1 - t')

  var sum = []
  for (var i = 0; i < coefficients.length; i += 1) {
    sum.push(
        coefficients[i]
      + '*pts['+i+']'
      + '*' + power('ut', coefficients.length-i-1)
      + '*' + power('t', i)
    )
  }
  fn.push('return ' + sum.join(' + '))

  return cache[pieces] = Function(
    'return function bezier'+pieces+'(pts, t) {\n'+fn.join('\n')+'\n}'
  )()
}

function power(key, n) {
  if (n === 0) return '1'
  if (n === 1) return key
  if (n === 2) return key + '*' + key
  if (n === 3) return [key, key, key].join('*')
  if (n === 4) return [key, key, key, key].join('*')
  if (n === 5) return [key, key, key, key, key].join('*')
  return 'Math.pow('+key+','+n+')'
}
