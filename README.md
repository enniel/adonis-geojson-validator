# Adonis GeoJSON Validator

Easy [GeoJSON](http://geojson.org) validation for [adonis framework](http://adonisjs.com).

## Installation

1. Add package:

```bash
$ npm i adonis-geojson-validator --save
```
or

```bash
$ yarn add adonis-geojson-validator
```

2. Register providers inside the your bootstrap/app.js file.

```js
const providers = [
  ...
  'adonis-geojson-validator/providers/GeoJsonValidatorProvider',
  ...
]
```
## Validation example

```js
const rules = {
  geojson: 'geojson:feature_collection'
}

const data = {
  geojson: {
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
}

yield Validator.validate(data, rules)
```

Supported types:
 - [geometry_object](https://github.com/craveprogramminginc/GeoJSON-Validation#isgeometryobjectgeojson-callback)
 - [position](https://github.com/craveprogramminginc/GeoJSON-Validation#ispositionarray-callback)
 - [point](https://github.com/craveprogramminginc/GeoJSON-Validation#ispointgeojson-callback)
 - [multi_point_coords](https://github.com/craveprogramminginc/GeoJSON-Validation#ismultipointcoorarray-callback)
 - [multi_point](https://github.com/craveprogramminginc/GeoJSON-Validation#ismultipointgeojson-callback)
 - [line_string_coords](https://github.com/craveprogramminginc/GeoJSON-Validation#islinestringcoorarray-callback)
 - [line_string](https://github.com/craveprogramminginc/GeoJSON-Validation#islinestringgeojson-callback)
 - [multi_line_string_coords](https://github.com/craveprogramminginc/GeoJSON-Validation#ismultilinestringcoorarray-callback)
 - [multi_line_string](https://github.com/craveprogramminginc/GeoJSON-Validation#ismultilinestringgeojson-callback)
 - [polygon_coords](https://github.com/craveprogramminginc/GeoJSON-Validation#ispolygoncoorarray-callback)
 - [polygon](https://github.com/craveprogramminginc/GeoJSON-Validation#ispolygongeojson-callback)
 - [multi_polygon_coords](https://github.com/craveprogramminginc/GeoJSON-Validation#ismultipolygoncoorarray-callback)
 - [multi_polygon](https://github.com/craveprogramminginc/GeoJSON-Validation#ismultipolygongeojson-callback)
 - [geometry_collection](https://github.com/craveprogramminginc/GeoJSON-Validation#isgeometrycollectiongeojson-callback)
 - [feature](https://github.com/craveprogramminginc/GeoJSON-Validation#isfeaturegeojson-callback)
 - [feature_collection](https://github.com/craveprogramminginc/GeoJSON-Validation#isfeaturecollectiongeojson-callback)
 - [bbox](https://github.com/craveprogramminginc/GeoJSON-Validation#isbboxarray-callback)

## Credits

- [Evgeni Razumov](https://github.com/enniel)

## Support

Having trouble? [Open an issue](https://github.com/enniel/adonis-geojson-validator/issues/new)!

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
