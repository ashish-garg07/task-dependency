const assert = require('assert')

const taskOP = require('./taskOperation');

it('execute task for []]', () => {
    assert.deepEqual(taskOP.calcTaskOp({}), [])
});

it('execute task for [a,b]', () => {
    assert.deepEqual(taskOP.calcTaskOp({ a: [], b: [] }), ['a', 'b'])
});

it('execute task for [a,b]', () => {
    assert.deepEqual(taskOP.calcTaskOp({ a: ['b'], b: [] }), ['b', 'a'])
});

it('execute task for [a,b,c,d]', () => {
    assert.deepEqual(taskOP.calcTaskOp({ a: ['b'], b: [], c: ['d'], d: [] }), ['b', 'a', 'd', 'c'])
});

it('execute task for [a,b,c]', () => {
    assert.deepEqual(taskOP.calcTaskOp({ a: ['b'], b: ['c'], c: [] }), ['c', 'b', 'a'])
});

it('execute task for [a,b,c,d]', () => {
    assert.deepEqual(taskOP.calcTaskOp({ a: ['b', 'd'], b: ['c'], c: ['d'], d: [] }), ['d', 'c', 'b', 'a'])
});

it('execute dependend task for cyclic dependency', () => {
    assert.throws(() => taskOP.calcTaskOp({ a: ['b'], b: ['c'], c: ['a'] }), Error, 'this is a cyclic dependency');
});