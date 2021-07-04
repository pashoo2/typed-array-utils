import {stringify} from '@pashoo2/serialization-utils';

import {TTypedArrays, TMainDataTypes, TTypedArraysNative} from './types';
import {
  encodeArrayBufferToDOMString,
  decodeDOMStringToArrayBuffer,
} from './string-encoding';

export const arrayBufferFromTypedArray = (
  typedArray: TTypedArrays | ArrayBuffer
): ArrayBuffer => {
  if (typedArray instanceof ArrayBuffer) {
    return typedArray;
  }
  if (ArrayBuffer.isView(typedArray)) {
    return typedArray.buffer;
  }
  throw new Error('The data given is not a typed array');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type isTypedArrayData = any;

export const isTypedArrayNative = (
  data: isTypedArrayData
): data is TTypedArraysNative =>
  data instanceof Int8Array ||
  data instanceof Uint8Array ||
  data instanceof Uint8ClampedArray ||
  data instanceof Int16Array ||
  data instanceof Uint16Array ||
  data instanceof Int32Array ||
  data instanceof Uint32Array ||
  data instanceof Float32Array ||
  data instanceof Float64Array ||
  data instanceof BigInt64Array ||
  data instanceof BigUint64Array;

export const isTypedArray = (data: isTypedArrayData): data is TTypedArrays =>
  data instanceof ArrayBuffer || ArrayBuffer.isView(data);

export const isEqualArrayBufferNative = (
  arr1: TTypedArraysNative | ArrayBuffer,
  arr2: TTypedArraysNative | ArrayBuffer
) => {
  const arr1Uint8 = new Uint8Array(arr1);
  const arr2Uint8 = new Uint8Array(arr2);

  if (arr1Uint8.byteLength !== arr2Uint8.byteLength) {
    return false;
  }
  for (let idx = 0; idx < arr1Uint8.byteLength; idx++) {
    if (arr1Uint8[idx] !== arr2Uint8[idx]) {
      return false;
    }
  }
  return true;
};

export const valueToTypedArray = (data: TMainDataTypes): ArrayBuffer => {
  const strData = stringify(data);

  return decodeDOMStringToArrayBuffer(strData);
};

export const typedArrayToString = (data: TTypedArrays | string): string => {
  if (typeof data === 'string') {
    return data;
  }
  if (!isTypedArray(data)) {
    throw new Error('The data is not a typed array');
  }

  const dataAsArrayBuffer = arrayBufferFromTypedArray(data);

  return encodeArrayBufferToDOMString(dataAsArrayBuffer);
};

type TConvertedToTypedArrayData = TMainDataTypes | TTypedArrays;

export const convertToTypedArray = (
  data: TConvertedToTypedArrayData
): TTypedArrays => {
  if (isTypedArray(data)) {
    return data;
  }
  return valueToTypedArray(data);
};

export const getOverallLength = (...typedArrays: ArrayBuffer[]): number => {
  return typedArrays.reduce(
    (allLength, typedArray) => (allLength += typedArray.byteLength),
    0
  );
};

export const concatArrayBuffers = (
  ...typedArrays: ArrayBuffer[]
): ArrayBuffer => {
  const len = getOverallLength(...typedArrays);

  const arrayResulted = new Uint8Array(len);
  const count = typedArrays.length;
  let idx = 0;
  let arrayBuffer = null;
  let currentLength = 0;
  let newTypedArray;

  for (; idx < count; idx += 1) {
    arrayBuffer = typedArrays[idx];
    newTypedArray = new Uint8Array(arrayBuffer);
    arrayResulted.set(newTypedArray, currentLength);
    currentLength += newTypedArray.byteLength;
  }
  return arrayBufferFromTypedArray(arrayResulted);
};

export const getBytesFromArrayBuffer = (
  typedArray: ArrayBuffer,
  from: number,
  to?: number
): ArrayBuffer => {
  const arrayResulted = new Uint8Array(typedArray);

  return arrayBufferFromTypedArray(arrayResulted.slice(from, to));
};
