// Test file for Google Maps JavaScript API Definition file

const version = google.maps.version; // $ExpectType string

let mapOptions: google.maps.MapOptions = {
    backgroundColor: '#fff',
    center: { lat: -25.363, lng: 131.044 },
    clickableIcons: true,
    controlSize: 30,
    draggable: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
    },
    gestureHandling: 'cooperative',
    restriction: {
        latLngBounds: { east: 180, west: -180, north: 85, south: -85 },
        strictBounds: true,
    },
    scrollwheel: true,
    styles: [
        {
            elementType: 'geometry',
            featureType: 'water',
            stylers: [
                {
                    color: '#00bdbd',
                },
            ],
        },
        {
            elementType: 'geometry',
            featureType: 'landscape.man_made',
            stylers: [
                {
                    color: '#f7f1df',
                },
            ],
        },
    ],
    zoom: 4,
};

/***** Create map *****/
let map: google.maps.Map = new google.maps.Map(document.createElement('div'), mapOptions);

/***** Fitting map to bounds *****/
map.fitBounds(
    {
        north: 10,
        east: 10,
        west: 10,
        south: 10,
    },
    50,
);

map.fitBounds(
    {
        east: 10,
        north: 10,
        south: 10,
        west: 10,
    },
    {
        bottom: 100,
        left: 150,
        right: 150,
        top: 50,
    },
);

/***** Pan map to bounds *****/
map.panToBounds({
    north: 10,
    east: 10,
    west: 10,
    south: 10,
});

map.panToBounds(
    {
        north: 10,
        east: 10,
        west: 10,
        south: 10,
    },
    50,
);

map.panToBounds(
    {
        east: 10,
        north: 10,
        south: 10,
        west: 10,
    },
    {
        bottom: 100,
        left: 150,
        right: 150,
        top: 50,
    },
);

map.getProjection(); // $ExpectType Projection | null

/***** Data *****/

new google.maps.Data();
new google.maps.Data({ map });

let latLng = new google.maps.LatLng(52.201203, -1.72437);
let feature = new google.maps.Data.Feature();
let geometry = new google.maps.Data.Geometry();

let data = map.data;

data.add(feature);

data.add({
    geometry: latLng,
    id: 'Test feature',
    properties: {},
});

let isIn: boolean = map.data.contains(feature);

data.forEach((feature: google.maps.Data.Feature) => {
    console.log(feature.getId());
});

map = data.getMap();
data.setMap(map);

let style = data.getStyle();
data.setStyle(style);

data.setStyle({
    clickable: true,
    cursor: 'pointer',
    fillColor: '#79B55B',
    fillOpacity: 1,
    icon: { url: '//maps.google.com/mapfiles/ms/icons/blue.png' },
    shape: { coords: [1, 2, 3], type: 'circle' },
    strokeColor: '#79B55B',
    strokeOpacity: 1,
    strokeWeight: 1,
    title: 'string',
    visible: true,
    zIndex: 1,
});

data.overrideStyle(feature, { visible: true });
data.revertStyle(feature);

data.addGeoJson({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [59.32709, 18.103701] },
});
data.addGeoJson(
    {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: { dymmy: '7' },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [123.61, -22.14],
                            [122.38, -21.73],
                            [121.06, -21.69],
                            [119.66, -22.22],
                            [119.0, -23.4],
                            [123.61, -22.14],
                        ],
                    ],
                },
            },
        ],
    },
    { idPropertyName: 'Test feature' },
);

data.loadGeoJson('http://magicGeoJsonSource.com');

data.loadGeoJson('http://magicGeoJsonSource.com', { idPropertyName: 'test' });

data.loadGeoJson('http://magicGeoJsonSource.com', { idPropertyName: 'test' }, features => {
    for (let i = 0, len = features.length; i < len; i++) {
        console.log(features[i].getId());
    }
});

data.toGeoJson(feature => {});

let dataMouseEvent: google.maps.Data.MouseEvent = {
    feature,
    latLng,
    stop: (): void => {},
};

let addFeatureEvent: google.maps.Data.AddFeatureEvent = {
    feature,
};

let removeFeatureEvent: google.maps.Data.RemoveFeatureEvent = {
    feature,
};

let setGeometryEvent: google.maps.Data.SetGeometryEvent = {
    feature,
    newGeometry: geometry,
    oldGeometry: geometry,
};

let setPropertyEvent: google.maps.Data.SetPropertyEvent = {
    feature,
    name: 'test',
    newValue: {},
    oldValue: {},
};

let removePropertyEvent: google.maps.Data.RemovePropertyEvent = {
    feature,
    name: 'test',
    oldValue: {},
};

let lineString = new google.maps.Data.LineString([
    { lat: 52.201203, lng: -1.72437 },
    { lat: 52.201203, lng: -2.72437 },
]);
lineString.forEachLatLng(latLng => console.log(`${latLng.lat} ${latLng.lng}`));

data.setDrawingMode('LineString');
data.setDrawingMode(null);

data.setControls(['Point', 'Polygon']);
data.setControls(null);

/***** Overlays *****/

let icon: google.maps.Icon = {
    anchor: new google.maps.Point(16, 16),
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(32, 32),
    size: new google.maps.Size(32, 32),
    url: 'dummy',
};

/***** MapTypeStyle *****/

let mapTypeStyle1: google.maps.MapTypeStyle = {
    featureType: 'all',
};

let mapTypeStyle2: google.maps.MapTypeStyle = {
    featureType: 'administrative.country',
    elementType: 'all',
    stylers: [],
};

let mapTypeStyle3: google.maps.MapTypeStyle = {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [],
};

let mapTypeStyle4: google.maps.MapTypeStyle = {
    featureType: 'poi.school',
    elementType: 'labels',
    stylers: [],
};

/***** OverlayView *****/
// https://developers.google.com/maps/documentation/javascript/customoverlays
let div = document.createElement('div');
class Overlay extends google.maps.OverlayView {
    draw(): void {
        const panes = this.getPanes();
        panes.floatPane.appendChild(div);
        panes.mapPane.appendChild(div);
        panes.markerLayer.appendChild(div);
        panes.overlayLayer.appendChild(div);
        panes.overlayMouseTarget.appendChild(div);
    }
}
let overlay = new Overlay();
overlay.setMap(map);

/***** Rectangles *****/
// https://developers.google.com/maps/documentation/javascript/examples/rectangle-simple
let rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map,
    bounds: {
        north: 33.685,
        south: 33.671,
        east: -116.234,
        west: -116.251,
    },
});

/***** Circles *****/
// circleOptions with LatLng center
let circle1 = new google.maps.Circle({
    center: new google.maps.LatLng(59.327, 18.067),
    radius: 20,
    fillColor: '#FF0000',
    strokeColor: '#FF0000',
    fillOpacity: 0.35,
    strokeOpacity: 0.5,
    strokeWeight: 1,
});

// circleOptions with LatLngLiteral center
let circle2 = new google.maps.Circle({
    center: { lat: 59.327, lng: 18.067 },
    radius: 20,
    fillColor: '#FF0000',
    strokeColor: '#FF0000',
    fillOpacity: 0.35,
    strokeOpacity: 0.5,
    strokeWeight: 1,
});

/***** StreetViewPanorama *****/
let panoramaOptions: google.maps.StreetViewPanoramaOptions = {
    zoom: 0,
    pano: 'reception',
    scrollwheel: false,
    mode: 'webgl',
    disableDefaultUI: true,
    linksControl: true,
    visible: true,
    motionTracking: true,
    motionTrackingControl: true,
    showRoadLabels: true,
};
let panorama = new google.maps.StreetViewPanorama(document.createElement('div'), panoramaOptions);

// MVCObject method on StreetViewPanorama
let panoramaEvent = panorama.addListener('pano_changed', () => {});

/***** StreetViewService *****/
let street_view_service = new google.maps.StreetViewService();
street_view_service.getPanorama(
    {
        location: new google.maps.LatLng(37.782551, -122.445368),
        radius: 50,
    },
    (data, status) => {
        if (status === google.maps.StreetViewStatus.OK) {
            const location_pano = data == null || data.location == null ? null : data.location.pano;
            if (location_pano == null) {
                // Not good
                return;
            }

            const new_panorama = new google.maps.StreetViewPanorama(document.createElement('div'), panoramaOptions);
            new_panorama.setPano(location_pano);
            new_panorama.setPov({
                heading: 0,
                pitch: 0,
            });
        }
    },
);

/***** HeatMaps *****/

let heatmap = new google.maps.visualization.HeatmapLayer({
    data: [
        new google.maps.LatLng(37.782551, -122.445368),
        new google.maps.LatLng(37.782745, -122.444586),
        new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 }),
    ],
    map,
});

// setData Should Accept MVCArray<LatLng>
heatmap.setData(
    new google.maps.MVCArray<google.maps.LatLng>([
        new google.maps.LatLng(37.782551, -122.445368),
        new google.maps.LatLng(37.782745, -122.444586),
        new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 }),
    ]),
);

// setData Should Accept MVCArray<WeightedLocation>
heatmap.setData(
    new google.maps.MVCArray<google.maps.visualization.WeightedLocation>([
        { weight: 1, location: new google.maps.LatLng(37.782551, -122.445368) },
        { weight: 2, location: new google.maps.LatLng(37.782745, -122.444586) },
        { weight: 3, location: new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 }) },
    ]),
);

// setData Should Accept LatLng[]
heatmap.setData([
    new google.maps.LatLng(37.782551, -122.445368),
    new google.maps.LatLng(37.782745, -122.444586),
    new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 }),
]);

// setData Should Accept WeightedLocation[]
heatmap.setData([
    { weight: 1, location: new google.maps.LatLng(37.782551, -122.445368) },
    { weight: 2, location: new google.maps.LatLng({ lat: 37.782745, lng: -122.444586 }) },
]);

// setOptions should required data and accepted any HeatmapLayerOptions
heatmap.setOptions({
    data: [
        new google.maps.LatLng(37.782551, -122.445368),
        new google.maps.LatLng(37.782745, -122.444586),
        new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 }),
    ],
    dissipating: true,
    map,
    opacity: 8,
});

/***** google.maps.places.PlacesService *****/
let service = new google.maps.places.PlacesService(new HTMLDivElement());

service.getDetails(
    {
        placeId: '-a1',
        fields: ['name'],
        sessionToken: new google.maps.places.AutocompleteSessionToken(),
    },
    (result, status) => {
        if (status === google.maps.places.PlacesServiceStatus.NOT_FOUND) {
            return;
        }

        result.name; // $ExpectType string
        result.reviews; // $ExpectType PlaceReview[] | undefined
        if (result.reviews && result.reviews.length) {
            result.reviews[0].rating; // $ExpectType number
        }
    },
);

service.findPlaceFromQuery(
    {
        query: 'Big Ben London',
        fields: ['name'],
    },
    (results, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
        }

        results[0].name; // $ExpectType string
    },
);

service.findPlaceFromPhoneNumber(
    {
        phoneNumber: '123456',
        fields: ['name'],
    },
    (results, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
        }

        results[0].name; // $ExpectType string
    },
);

/***** google.maps.places.Autocomplete *****/
const autocomplete = new google.maps.places.Autocomplete(document.createElement('input'));
const placeResult = autocomplete.getPlace();
placeResult.name; // $ExpectType string

/***** google.maps.places.AutocompleteService *****/
new google.maps.places.AutocompleteService().getPlacePredictions(
    { input: 'Kyiv, Ukr', origin: { lat: 50.4021368, lng: 30.252522 } },
    result => {
        result[0].distance_meters; // $ExpectType number | undefined
        result[0].structured_formatting.secondary_text_matched_substrings; // $ExpectType PredictionSubstring[] | undefined
    },
);

/***** google.maps.ImageMapType *****/
const imageMapType = new google.maps.ImageMapType({
    alt: 'alt',
    getTileUrl: (tileCoord: google.maps.Point, zoom: number) => 'string',
    maxZoom: 20,
    minZoom: 10,
    name: 'name',
    opacity: 0.5,
    tileSize: new google.maps.Size(256, 256),
});
imageMapType.alt; // $ExpectType string
imageMapType.maxZoom; // $ExpectType number
imageMapType.minZoom; // $ExpectType number
imageMapType.name; // $ExpectType string
imageMapType.projection; // $ExpectType Projection
imageMapType.radius; // $ExpectType number
imageMapType.tileSize; // $ExpectType Size

/***** google.maps.StyledMapType *****/
const styledMapType = new google.maps.StyledMapType([], {
    alt: 'alt',
    maxZoom: 20,
    minZoom: 10,
    name: 'name',
});
styledMapType.alt; // $ExpectType string
styledMapType.maxZoom; // $ExpectType number
styledMapType.minZoom; // $ExpectType number
styledMapType.name; // $ExpectType string
styledMapType.projection; // $ExpectType Projection
styledMapType.radius; // $ExpectType number
styledMapType.tileSize; // $ExpectType Size

const directionsWaypointEmpty: google.maps.DirectionsWaypoint = {};
const directionsWaypointLocationString: google.maps.DirectionsWaypoint = {
    location: '',
};
const directionsWaypointLocationLatLng: google.maps.DirectionsWaypoint = {
    location: new google.maps.LatLng(0, 0),
};
const directionsWaypointLocationPlace: google.maps.DirectionsWaypoint = {
    location: { query: '' },
};
const directionsWaypointStopover: google.maps.DirectionsWaypoint = {
    stopover: true,
};

/***** google.maps.DirectionsService *****/
let directionsService = new google.maps.DirectionsService();

directionsService.route(
    {
        avoidFerries: true,
        avoidHighways: true,
        avoidTolls: true,
        destination: 'destination',
        origin: 'origin',
        provideRouteAlternatives: true,
        transitOptions: {
            arrivalTime: new Date(),
            departureTime: new Date(),
            modes: [google.maps.TransitMode.BUS, google.maps.TransitMode.RAIL],
            routingPreference: google.maps.TransitRoutePreference.FEWER_TRANSFERS,
        },
        travelMode: google.maps.TravelMode.TRANSIT,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
    },
    (result: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) => {
        const routes = result.routes; // $ExpectType DirectionsRoute[]
        const legs = routes[0].legs; // $ExpectType DirectionsLeg[]
        const steps = legs[0].steps; // $ExpectType DirectionsStep[]
        steps[0].steps; // $ExpectType BaseDirectionsStep[]
    },
);
