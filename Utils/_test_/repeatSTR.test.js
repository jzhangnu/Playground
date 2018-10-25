import repeat from '../repeatSTR';

test('repeat1', () => {
    String.prototype.repeat = repeat;
    expect('ss'.repeat(2)).toEqual('ssss')
})