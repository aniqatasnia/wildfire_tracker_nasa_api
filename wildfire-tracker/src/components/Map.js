import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

const Map = ( { center=defaultProps.center, zoom=defaultProps.zoom }) => {
  return (
    <div className="map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={ center }
            defaultZoom={ zoom }
        >
            <LocationMarker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>      
    </div>
  )
}

export default Map
