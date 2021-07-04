import {
  isTypedArrayNative,
  typedArrayToString,
  valueToTypedArray,
} from './typed-array-utils';
describe('Common utilities to work easier with typed array', () => {
  describe('isTypedArrayNative', () => {
    it('Should return true for an Int8Array', () => {
      expect(isTypedArrayNative(new Int8Array(20))).toBe(true);
    });
  });
  describe('valueToTypedArray', () => {
    it('Should convert a string to a typed array', () => {
      expect(valueToTypedArray('a')).toEqual(expect.any(ArrayBuffer));
    });
    it('Should convert an object to a typed array', () => {
      expect(valueToTypedArray({isObject: 'isObject'})).toEqual(
        expect.any(ArrayBuffer)
      );
    });
    it('Should convert an object to a typed array which can be handled by the "typedArrayToString"', () => {
      const valueExpectedToBeContained = 'isObject';
      const result = typedArrayToString(
        valueToTypedArray({isObject: valueExpectedToBeContained})
      );
      expect(result).toEqual(
        expect.stringContaining(valueExpectedToBeContained)
      );
    });
    it('Should convert an object to a typed array which can be handled by the "typedArrayToString" and than parsed by the JSON.parse to an object equals to the original', () => {
      const testObject = {isObject: 'isObject', a: 'a', d: 'd'};
      const result = typedArrayToString(valueToTypedArray(testObject));
      expect(result).toEqual(expect.stringContaining('isObject'));
      expect(JSON.parse(result)).toEqual(expect.objectContaining(testObject));
    });
  });
});
