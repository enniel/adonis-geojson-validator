'use strict'

/**
 * adonis-geojson-validator
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const indicative = require('indicative')
const Validations = require('../src/Validations')

indicative.extend('geojson', Validations.geojson, '{{field}} is not valid geojson')

const rules = {
  geojson: 'geojson:feature_collection'
}

const data = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [102.0, 0.5]
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

indicative
  .validate(data, rules)
  .then(function () {
    console.log('validation passed')
  })
  .catch(function (errors) {
    console.log('validation failed')
  })
