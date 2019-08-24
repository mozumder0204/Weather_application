const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8fb14fbfa0d1e1a2a153fc31e40e03d5/' + latitude + ',' + longitude+'?units=si'

    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (res.body.error) {
            callback('Unable to find location', undefined)
        } else {
            // callback(undefined, res.body.daily.data[0].summary + ' It is currently ' + res.body.currently.temperature + ' degress out. There is a ' + res.body.currently.precipProbability + '% chance of rain.')
            callback(undefined, {
                temperature: res.body.currently.temperature,
                summary: res.body.daily.data[0].summary,
                temperatureHigh: res.body.daily.data[0].temperatureHigh,
                temperatureLow: res.body.daily.data[0].temperatureLow,
                
            });
        }
    })
}

module.exports = forecast