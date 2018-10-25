import flatten from '../flattenArr';

test('flat1', () => {
    expect(flatten([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
})