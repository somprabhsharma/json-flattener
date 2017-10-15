require('should')
const index = require('../index')

const flattenedJson = {
  number: 123,
  string: 'value',
  boolean1: true,
  boolean2: false,
  'arrayOfNum[0]': 0,
  'arrayOfNum[1]': 1,
  'arrayOfNum[2]': 2,
  'arrayOfString[0]': 'value0',
  'arrayOfString[1]': 'value1',
  'arrayOfPrimitives[0]': 0,
  'arrayOfPrimitives[1]': 'value0',
  'arrayOfPrimitives[2]': 1,
  'arrayOfPrimitives[3]': 'value1',
  'object.key0': 'value0',
  'object.key1': true,
  'object.key3': 3,
  'nestedObject.number': 123,
  'nestedObject.string': 'value',
  'nestedObject.boolean1': true,
  'nestedObject.boolean2': false,
  'nestedObject.arrayOfNum[0]': 0,
  'nestedObject.arrayOfString[0]': 'value0',
  'nestedObject.arrayOfPrimitives[0]': 0,
  'nestedObject.arrayOfPrimitives[1]': 'value0',
  'nestedObject.object.key0': 'value0',
  'nestedObject.object.key1': true,
  'nestedObject.object.key3': 3,
  'nestedObject.nestedObject.number': 123,
  'nestedObject.nestedObject.string': 'value',
  'nestedObject.nestedObject.boolean1': true,
  'nestedObject.nestedObject.boolean2': false,
  'nestedObject.nestedObject.arrayOfNum[0]': 0,
  'nestedObject.nestedObject.arrayOfString[0]': 'value0',
  'nestedObject.nestedObject.arrayOfPrimitives[0]': 0,
  'nestedObject.nestedObject.arrayOfPrimitives[1]': 'value0',
  'nestedObject.nestedObject.object.key0': 'value0',
  'nestedObject.nestedObject.object.key1': true,
  'nestedObject.nestedObject.object.key3': 3,
  'arrayOfObjects[0].number': 123,
  'arrayOfObjects[0].string': 'value',
  'arrayOfObjects[0].boolean1': true,
  'arrayOfObjects[0].boolean2': false,
  'arrayOfObjects[0].arrayOfNum[0]': 0,
  'arrayOfObjects[0].arrayOfString[0]': 'value0',
  'arrayOfObjects[0].arrayOfPrimitives[0]': 0,
  'arrayOfObjects[0].arrayOfPrimitives[1]': 'value0',
  'arrayOfObjects[0].object.key0': 'value0',
  'arrayOfObjects[0].object.key1': true,
  'arrayOfObjects[0].object.key3': 3,
  'arrayOfObjects[0].nestedObject.number': 123,
  'arrayOfObjects[0].nestedObject.string': 'value',
  'arrayOfObjects[0].nestedObject.boolean1': true,
  'arrayOfObjects[0].nestedObject.boolean2': false,
  'arrayOfObjects[0].nestedObject.arrayOfNum[0]': 0,
  'arrayOfObjects[0].nestedObject.arrayOfString[0]': 'value0',
  'arrayOfObjects[0].nestedObject.arrayOfPrimitives[0]': 0,
  'arrayOfObjects[0].nestedObject.arrayOfPrimitives[1]': 'value0',
  'arrayOfObjects[0].nestedObject.object.key0': 'value0',
  'arrayOfObjects[0].nestedObject.object.key1': true,
  'arrayOfObjects[0].nestedObject.object.key3': 3
}
const unFlattenedJson = {
  'number': 123,
  'string': 'value',
  'boolean1': true,
  'boolean2': false,
  'arrayOfNum': [
    0,
    1,
    2
  ],
  'arrayOfString': [
    'value0',
    'value1'
  ],
  'arrayOfPrimitives': [
    0,
    'value0',
    1,
    'value1'
  ],
  'object': {
    'key0': 'value0',
    'key1': true,
    'key3': 3
  },
  'nestedObject': {
    'number': 123,
    'string': 'value',
    'boolean1': true,
    'boolean2': false,
    'arrayOfNum': [
      0
    ],
    'arrayOfString': [
      'value0'
    ],
    'arrayOfPrimitives': [
      0,
      'value0'
    ],
    'object': {
      'key0': 'value0',
      'key1': true,
      'key3': 3
    },
    'nestedObject': {
      'number': 123,
      'string': 'value',
      'boolean1': true,
      'boolean2': false,
      'arrayOfNum': [
        0
      ],
      'arrayOfString': [
        'value0'
      ],
      'arrayOfPrimitives': [
        0,
        'value0'
      ],
      'object': {
        'key0': 'value0',
        'key1': true,
        'key3': 3
      }
    }
  },
  'arrayOfObjects': [{
    'number': 123,
    'string': 'value',
    'boolean1': true,
    'boolean2': false,
    'arrayOfNum': [
      0
    ],
    'arrayOfString': [
      'value0'
    ],
    'arrayOfPrimitives': [
      0,
      'value0'
    ],
    'object': {
      'key0': 'value0',
      'key1': true,
      'key3': 3
    },
    'nestedObject': {
      'number': 123,
      'string': 'value',
      'boolean1': true,
      'boolean2': false,
      'arrayOfNum': [
        0
      ],
      'arrayOfString': [
        'value0'
      ],
      'arrayOfPrimitives': [
        0,
        'value0'
      ],
      'object': {
        'key0': 'value0',
        'key1': true,
        'key3': 3
      }
    }
  }]
}

describe('## index.flatten()', () => {
  it('should flatten input json object', (done) => {
    const result = index.flatten(unFlattenedJson)
    result.should.eql(flattenedJson)
    done()
  })
})

describe('## index.unflatten()', () => {
  it('should unflatten input json object', (done) => {
    const result = index.unflatten(flattenedJson)
    result.should.eql(unFlattenedJson)
    done()
  })
  it('should return input data as it is if input is not json object', (done) => {
    const input = 'hey'
    const result = index.unflatten(input)
    result.should.eql(input)
    done()
  })
})