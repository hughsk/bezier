var test = require('tape')
var bezier = require('./').prepare

test('1-degree bezier', function(t) {
  t.equal(bezier(1)([1, 2, 3], 1), 1)
  t.equal(bezier(1)([1, 2, 3], 0), 1)
  t.equal(bezier(1)([1, 2, 3], 2), 1)
  t.end()
})

test('2-degree bezier', function(t) {
  t.equal(bezier(2)([1, 2], 1), 2)
  t.equal(bezier(2)([1, 2], 0.5), 1.5)
  t.equal(bezier(2)([1, 2], 0), 1)
  t.end()
})

test('3-degree bezier', function(t) {
  t.equal(bezier(3)([1, 2, 4], 1), 4)
  t.equal(bezier(3)([1, 2, 4], 0.3).toFixed(2), '1.69')
  t.equal(bezier(3)([1, 2, 4], 0.6).toFixed(2), '2.56')
  t.equal(bezier(3)([0, 4, 2], 0.9).toFixed(2), '2.34')
  t.equal(bezier(3)([-1, 2, 10], 0.4).toFixed(2), '2.20')
  t.end()
})

test('4-degree bezier', function(t) {
  t.equal(bezier(4)([1, 2, 4, 3], 1), 3)
  t.equal(bezier(4)([1, 4, 2, 9], 0.32).toFixed(4), '2.8028')
  t.equal(bezier(4)([1, 2, 4, -5], 0.5).toFixed(4), '1.7500')
  t.equal(bezier(4)([0, 4, 20, 6], 0.72).toFixed(4), '11.6260')
  t.equal(bezier(4)([-1, 2, 10, 3], 0.61).toFixed(4), '5.5319')
  t.end()
})

test('5-degree bezier', function(t) {
  t.equal(bezier(5)([1, 2, 4, 3, 0], 1), 0)
  t.equal(bezier(5)([1, 4, 2, 9, 3], 0.28).toFixed(6), '3.016036')
  t.equal(bezier(5)([1, 2, 4, -2, 2], 0.5).toFixed(6), '1.687500')
  t.equal(bezier(5)([0, 4, 4, 6, 1], 0.72).toFixed(6), '4.005274')
  t.equal(bezier(5)([-1, 2, 0, 3, 3], 0.38).toFixed(6), '1.047556')
  t.end()
})
