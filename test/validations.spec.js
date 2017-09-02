'use strict'

/**
 * adonis-geojson-validator
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const Validations = require('../src/Validations')
const _ = require('lodash')
const chai = require('chai')
const expect = chai.expect

describe('Validations', function () {
  it('should work fine when geojson is valid geojson object', function * () {
    const data = {
      geojson: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [
                102.0, 0.5
              ]
            },
            properties: {
              prop0: 'value0'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [
                [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
              ]
            },
            properties: {
              prop0: 'value0',
              prop1: 0.0
            }
          }
        ]
      }
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = []
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid GeometryObject', function * () {
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'geometry_object'
    ]
    const point = yield Validations.geojson({
      geojson: {
        type: 'Point',
        coordinates: [100.0, 0.0]
      }
    }, field, message, args, get)
    const multiPoint = yield Validations.geojson({
      geojson: {
        type: 'MultiPoint',
        coordinates: [
          [100.0, 0.0], [101.0, 1.0]
        ]
      }
    }, field, message, args, get)
    const lineString = yield Validations.geojson({
      geojson: {
        type: 'LineString',
        coordinates: [ [100.0, 0.0], [101.0, 1.0] ]
      }
    }, field, message, args, get)
    const multiLineString = yield Validations.geojson({
      geojson: {
        type: 'MultiLineString',
        coordinates: [
          [
            [100.0, 0.0], [101.0, 1.0]
          ],
          [
            [102.0, 2.0], [103.0, 3.0]
          ]
        ]
      }
    }, field, message, args, get)
    const polygon = yield Validations.geojson({
      geojson: {
        type: 'Polygon',
        coordinates: [
          [
            [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]
          ],
          [
            [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]
          ]
        ]
      }
    }, field, message, args, get)
    const multiPolygon = yield Validations.geojson({
      geojson: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]
            ]
          ],
          [
            [
              [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]
            ],
            [
              [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]
            ]
          ]
        ]
      }
    }, field, message, args, get)
    const geometryCollection = yield Validations.geojson({
      geojson: {
        type: 'GeometryCollection',
        geometries: [
          {
            type: 'Point',
            coordinates: [100.0, 0.0]
          },
          {
            type: 'LineString',
            coordinates: [
              [101.0, 0.0], [102.0, 1.0]
            ]
          }
        ]
      }
    }, field, message, args, get)
    expect(point).to.equal('validation passed')
    expect(multiPoint).to.equal('validation passed')
    expect(lineString).to.equal('validation passed')
    expect(multiLineString).to.equal('validation passed')
    expect(polygon).to.equal('validation passed')
    expect(multiPolygon).to.equal('validation passed')
    expect(geometryCollection).to.equal('validation passed')
  })

  it('should work fine when geojson is valid Position', function * () {
    const data = {
      geojson: [100.0, 0.0]
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'position'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid Point', function * () {
    const data = {
      geojson: {
        type: 'Point',
        coordinates: [100.0, 0.0]
      }
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'point'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid MultiPointCoords', function * () {
    const data = {
      geojson: [
        [100.0, 0.0], [101.0, 1.0]
      ]
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'multi_point_coords'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid MultiPoint', function * () {
    const data = {
      geojson: {
        type: 'MultiPoint',
        coordinates: [
          [100.0, 0.0], [101.0, 1.0]
        ]
      }
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'multi_point'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid LineStringCoords', function * () {
    const data = {
      geojson: [ [100.0, 0.0], [101.0, 1.0] ]
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'line_string_coords'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid LineString', function * () {
    const data = {
      geojson: {
        type: 'LineString',
        coordinates: [ [100.0, 0.0], [101.0, 1.0] ]
      }
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'line_string'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid MultiLineString', function * () {
    const data = {
      geojson: {
        type: 'MultiLineString',
        coordinates: [
          [
            [100.0, 0.0], [101.0, 1.0]
          ],
          [
            [102.0, 2.0], [103.0, 3.0]
          ]
        ]
      }
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'multi_line_string'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid PolygonCoords', function * () {
    const data = {
      geojson: [
        [
          [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]
        ],
        [
          [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]
        ]
      ]
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'polygon_coords'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid Polygon', function * () {
    const data = {
      geojson: {
        type: 'Polygon',
        coordinates: [
          [
            [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]
          ],
          [
            [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]
          ]
        ]
      }
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'polygon'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid MultiPolygon', function * () {
    const data = {
      geojson: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]
            ]
          ],
          [
            [
              [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]
            ],
            [
              [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]
            ]
          ]
        ]
      }
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'multi_polygon'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })

  it('should work fine when geojson is valid GeometryCollection', function * () {
    const data = {
      geojson: {
        type: 'GeometryCollection',
        geometries: [
          {
            type: 'Point',
            coordinates: [100.0, 0.0]
          },
          {
            type: 'LineString',
            coordinates: [
              [101.0, 0.0], [102.0, 1.0]
            ]
          }
        ]
      }
    }
    const field = 'geojson'
    const message = 'geojson is not valid'
    const get = _.get
    const args = [
      'geometry_collection'
    ]
    const passes = yield Validations.geojson(data, field, message, args, get)
    expect(passes).to.equal('validation passed')
  })
})
