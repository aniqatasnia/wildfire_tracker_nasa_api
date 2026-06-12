import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

const Map = ( { eventData, center=defaultProps.center, zoom=defaultProps.zoom }) => 
  {
    const markers = eventData.map(ev => {
      if (ev.categories[0].id === 8) {
        return  <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
      }
      return null
    })
    return (
      <div className="map">
          <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
              defaultCenter={ center }
              defaultZoom={ zoom }
          >
              {markers}
          </GoogleMapReact>      
      </div>
    )
}

export default Map
