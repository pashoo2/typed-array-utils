[@pashoo2/typed-array-utils](README.md) / Exports

# @pashoo2/typed-array-utils

## Table of contents

### Type aliases

- [TArrayBufferView](modules.md#tarraybufferview)
- [TMainDataTypes](modules.md#tmaindatatypes)
- [TTypedArrays](modules.md#ttypedarrays)
- [TTypedArraysNative](modules.md#ttypedarraysnative)

### Functions

- [arrayBufferFromTypedArray](modules.md#arraybufferfromtypedarray)
- [concatArrayBuffers](modules.md#concatarraybuffers)
- [convertToTypedArray](modules.md#converttotypedarray)
- [decodeDOMStringToArrayBuffer](modules.md#decodedomstringtoarraybuffer)
- [encodeArrayBufferToDOMString](modules.md#encodearraybuffertodomstring)
- [getBytesFromArrayBuffer](modules.md#getbytesfromarraybuffer)
- [getOverallLength](modules.md#getoveralllength)
- [isEqualArrayBufferNative](modules.md#isequalarraybuffernative)
- [isTypedArray](modules.md#istypedarray)
- [isTypedArrayNative](modules.md#istypedarraynative)
- [typedArrayToString](modules.md#typedarraytostring)
- [valueToTypedArray](modules.md#valuetotypedarray)

## Type aliases

### TArrayBufferView

Ƭ **TArrayBufferView**: [`TTypedArrays`](modules.md#ttypedarrays)

#### Defined in

[types.ts:18](https://github.com/pashoo2/typed-array-utils/blob/master/src/types.ts#L18)

___

### TMainDataTypes

Ƭ **TMainDataTypes**: `TSerializableDataTypes`

#### Defined in

[types.ts:20](https://github.com/pashoo2/typed-array-utils/blob/master/src/types.ts#L20)

___

### TTypedArrays

Ƭ **TTypedArrays**: [`TTypedArraysNative`](modules.md#ttypedarraysnative) \| `DataView` \| `ArrayBuffer`

#### Defined in

[types.ts:16](https://github.com/pashoo2/typed-array-utils/blob/master/src/types.ts#L16)

___

### TTypedArraysNative

Ƭ **TTypedArraysNative**: `Int8Array` \| `Uint8Array` \| `Uint8ClampedArray` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array` \| `BigInt64Array` \| `BigUint64Array`

#### Defined in

[types.ts:3](https://github.com/pashoo2/typed-array-utils/blob/master/src/types.ts#L3)

## Functions

### arrayBufferFromTypedArray

▸ `Const` **arrayBufferFromTypedArray**(`typedArray`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typedArray` | [`TTypedArrays`](modules.md#ttypedarrays) |

#### Returns

`ArrayBuffer`

#### Defined in

[typed-array-utils.ts:9](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L9)

___

### concatArrayBuffers

▸ `Const` **concatArrayBuffers**(...`typedArrays`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...typedArrays` | `ArrayBuffer`[] |

#### Returns

`ArrayBuffer`

#### Defined in

[typed-array-utils.ts:97](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L97)

___

### convertToTypedArray

▸ `Const` **convertToTypedArray**(`data`): [`TTypedArrays`](modules.md#ttypedarrays)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TConvertedToTypedArrayData` |

#### Returns

[`TTypedArrays`](modules.md#ttypedarrays)

#### Defined in

[typed-array-utils.ts:81](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L81)

___

### decodeDOMStringToArrayBuffer

▸ **decodeDOMStringToArrayBuffer**(`str`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`ArrayBuffer`

#### Defined in

[string-encoding.ts:9](https://github.com/pashoo2/typed-array-utils/blob/master/src/string-encoding.ts#L9)

___

### encodeArrayBufferToDOMString

▸ **encodeArrayBufferToDOMString**(`buf`): `string`

The solutions is right from the article
https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `ArrayBuffer` |

#### Returns

`string`

#### Defined in

[string-encoding.ts:6](https://github.com/pashoo2/typed-array-utils/blob/master/src/string-encoding.ts#L6)

___

### getBytesFromArrayBuffer

▸ `Const` **getBytesFromArrayBuffer**(`typedArray`, `from`, `to?`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typedArray` | `ArrayBuffer` |
| `from` | `number` |
| `to?` | `number` |

#### Returns

`ArrayBuffer`

#### Defined in

[typed-array-utils.ts:118](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L118)

___

### getOverallLength

▸ `Const` **getOverallLength**(...`typedArrays`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...typedArrays` | `ArrayBuffer`[] |

#### Returns

`number`

#### Defined in

[typed-array-utils.ts:90](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L90)

___

### isEqualArrayBufferNative

▸ `Const` **isEqualArrayBufferNative**(`arr1`, `arr2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr1` | `ArrayBuffer` \| [`TTypedArraysNative`](modules.md#ttypedarraysnative) |
| `arr2` | `ArrayBuffer` \| [`TTypedArraysNative`](modules.md#ttypedarraysnative) |

#### Returns

`boolean`

#### Defined in

[typed-array-utils.ts:42](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L42)

___

### isTypedArray

▸ `Const` **isTypedArray**(`data`): data is TTypedArrays

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

data is TTypedArrays

#### Defined in

[typed-array-utils.ts:39](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L39)

___

### isTypedArrayNative

▸ `Const` **isTypedArrayNative**(`data`): data is TTypedArraysNative

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

data is TTypedArraysNative

#### Defined in

[typed-array-utils.ts:24](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L24)

___

### typedArrayToString

▸ `Const` **typedArrayToString**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| [`TTypedArrays`](modules.md#ttypedarrays) |

#### Returns

`string`

#### Defined in

[typed-array-utils.ts:66](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L66)

___

### valueToTypedArray

▸ `Const` **valueToTypedArray**(`data`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TSerializableDataTypes` |

#### Returns

`ArrayBuffer`

#### Defined in

[typed-array-utils.ts:60](https://github.com/pashoo2/typed-array-utils/blob/master/src/typed-array-utils.ts#L60)
