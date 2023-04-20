# JS Web API Geolocation

## Locate the User's Position

The HTML Geolocation API is used to get the geographical position of a user.

Since this can compromise privacy, the position is not available unless the user approves it.

```
NOTE

The Geolocation API will only work on secure contexts such as HTTPS.

If your site is hosted on a non-secure origin (such as HTTP) the requests to get the users location will no longer function.
```

## The getCurrentPosition() Method - Return Data

The `getCurrentPosition()` method returns an object on success. 

The latitude, longitude and accuracy properties are always returned. 

The other properties are returned if available:

| Property | Returns |
|----------|---------|
| coords.latitude | The latitude as a decimal number (always returned)
| coords.longitude | The longitude as a decimal number (always returned)
| coords.accuracy | The accuracy of position (always returned)
| coords.altitude | The altitude in meters above the mean sea level (returned if available)
| coords.altitudeAccuracy | The altitude accuracy of position (returned if available)
| coords.heading | The heading as degrees clockwise from North (returned if available)
| coords.speed | The speed in meters per second (returned if available)
| timestamp	| The date/time of the response (returned if available)

## Geolocation Object - Other interesting Methods

The Geolocation object also has other interesting methods:

° `watchPosition()` - Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).

° `clearWatch()` - Stops the `watchPosition()` method.

The example below shows the `watchPosition()` method. You need an accurate GPS device to test this (like smartphone):
