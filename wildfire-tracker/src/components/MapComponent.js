import { useState } from 'react'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

const MapComponent = ( { eventData, center=defaultProps.center, zoom=defaultProps.zoom }) => 
  {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map((ev, index) => {
      if (ev.categories[0].id === 8) {
        return (
        <AdvancedMarker 
          key={index}
          position={{
              lat: ev.geometries[0].coordinates[1],
              lng: ev.geometries[0].coordinates[0]
          }}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        >
          <LocationMarker />
        </AdvancedMarker>
        )
      }
      return null
    })
    return (
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <div className="map">
          <Map
              defaultCenter={ center }
              defaultZoom={ zoom }
              mapId="DEMO_MAP_ID"
          >
              {markers}
          </Map>
          {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>     
      </APIProvider>
    )
}

export default MapComponent
