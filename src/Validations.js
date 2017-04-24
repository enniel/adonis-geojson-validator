'use strict'

/**
 * adonis-geojson-validator
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const geoJsonValidation = require('geojson-validation')

/**
 * @module Validations
 * @description List of schema validations
 * @type {Object}
 */
let Validations = exports = module.exports = {}

/**
 * @description validate geojson.
 * @method geojson
 * @param  {Object} data
 * @param  {String} field
 * @param  {String} message
 * @param  {Array} args
 * @param  {Function} get
 * @return {Object}
 * @public
 */
Validations.geojson = function (data, field, message, args, get) {
  return new Promise((resolve, reject) => {
    const fieldValue = get(data, field)
    if (!fieldValue) {
      return resolve('validation skipped')
    }
    let method = 'valid'
    const specific = args[0]
    const methodsMap = {
      'geometry_object': 'isGeometryObject',
      'position': 'isPosition',
      'point': 'isPoint',
      'multi_point_coords': 'isMultiPointCoor',
      'multi_point': 'isMultiPoint',
      'line_string_coords': 'isLineStringCoor',
      'line_string': 'isLineString',
      'multi_line_string_coords': 'isMultiLineStringCoor',
      'multi_line_string': 'isMultiLineString',
      'polygon_coords': 'isPolygonCoor',
      'polygon': 'isPolygon',
      'multi_polygon_coords': 'isMultiPolygonCoor',
      'multi_polygon': 'isMultiPolygon',
      'geometry_collection': 'isGeometryCollection',
      'feature': 'isFeature',
      'feature_collection': 'isFeatureCollection',
      'bbox': 'isBbox'
    }
    if (Object.keys(methodsMap).includes(specific)) {
      method = methodsMap[specific]
    }
    const isValid = geoJsonValidation[method](fieldValue)
    if (isValid) {
      resolve('valid')
    } else {
      reject(message)
    }
  })
}
