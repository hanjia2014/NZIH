$("#map-canvas").gMap({

    styles: [{
        stylers: [
    {
        featureType: 'water', // set the water color
        elementType: 'geometry.fill', // apply the color only to the fill
        stylers: [
            { color: '#adc9b8' }
        ]
    }, {
        featureType: 'landscape.natural', // set the natural landscape
        elementType: 'all',
        stylers: [
            { hue: '#809f80' },
            { lightness: -35 }
        ]
    }
    , {
        featureType: 'poi', // set the point of interest
        elementType: 'geometry',
        stylers: [
            { hue: '#f9e0b7' },
            { lightness: 30 }
        ]
    }, {
        featureType: 'road', // set the road
        elementType: 'geometry',
        stylers: [
            { hue: '#d5c18c' },
            { lightness: 14 }
        ]
    }, {
        featureType: 'road.local', // set the local road
        elementType: 'all',
        stylers: [
            { hue: '#ffd7a6' },
            { saturation: 100 },
            { lightness: -12 }
        ]
    }
        ]
    }],
    zoomControl: true,
    scrollwheel: false,
    maptype: 'ROADMAP',
    markers: [
        {
            latitude: -41.1691284,
            longitude: 174.8243729,
            icon: {
                image: "images/location.png",
                iconsize: [85, 121],
                iconanchor: [85, 121]
            }
        },

    ],
    icon: {
        image: "images/location.png",
        iconsize: [85, 121],
        iconanchor: [85, 121]
    },
    latitude: -41.1691284,
    longitude: 174.8243729,

    zoom: 15,
    mapTypeId: 'Styled'


});