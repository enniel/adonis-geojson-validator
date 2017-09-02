'use strict'

/**
 * adonis-geojson-validator
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const { ServiceProvider } = require('@adonisjs/fold')
const Validations = require('../src/Validations')

class GeoJsonValidatorProvider extends ServiceProvider {
  boot () {
    const Validator = this.app.use('Adonis/Addons/Validator')

    Validator.extend('geojson', Validations.geojson, '{{field}} is not valid geojson')
  }
}

module.exports = GeoJsonValidatorProvider
