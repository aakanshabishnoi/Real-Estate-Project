import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as ELG from 'esri-leaflet-geocoder'

let DeafaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DeafaultIcon

const GeoCoderMarker = ({address}) => {

    const map = useMap();
    const [position, setPosition] = useState([60,19])
    console.log(address);

    useEffect(()=>{
        
        ELG.geocode().text(address).run((err,results,response) => {
            console.log(results)
            if(results?.results?.length > 0){
                console.log("inside map component")
                const {lat, lng} = results?.results[0].latlng
                setPosition([lat,lng])
                map.flyTo([lat, lng], 6)
            }
        })
    }, [address])
    console.log("map component")
  return (
    <Marker position={position} icon={DeafaultIcon}>
        <Popup/>
    </Marker>
  )
}

export default GeoCoderMarker