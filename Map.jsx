import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { businessData } from '../data/businessData'

export default function Map() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapRef.current) {
      mapRef.current = L.map('map').setView([53.3900, -2.5970], 13)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current)

      businessData.forEach(business => {
        L.marker([business.lat, business.lng])
          .addTo(mapRef.current)
          .bindPopup(`<b>${business.name}</b><br>${business.type}`)
      })
    }
  }, [])

  return <div id="map" className="w-full h-96"></div>
}

