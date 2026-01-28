const BRANCHES = [
  { 
    id: 'b1', 
    name: 'Sucursal Centro', 
    address: 'Su Centro Ferretero',
    phone: '5551234567',
    lat: -0.8844806, 
    lng: -78.6153343,
    hours: 'Lun-Vie: 9:00-18:00 | Sab: 9:00-14:00'
  },
  { 
    id: 'b2', 
    name: 'Sucursal Norte', 
    address: 'Su Centro Ferretero Aláquez',
    phone: '5552345678',
    lat: -0.8637144, 
    lng: -78.5960969,
    hours: 'Lun-Vie: 8:00-19:00 | Sab: 8:00-15:00'
  },
  { 
    id: 'b3', 
    name: 'Sucursal Sur', 
    address: 'Boulevard Sur - Quito',
    phone: '5553456789',
    lat: -0.894306, 
    lng: -78.611986,
    hours: 'Lun-Vie: 9:00-18:00 | Sab-Dom: 10:00-16:00'
  },
];

document.addEventListener('DOMContentLoaded', ()=>{
  // Initialize Leaflet map if available
  if(window.L){
    // Center map between all branches
    const centerLat = (BRANCHES[0].lat + BRANCHES[1].lat + BRANCHES[2].lat) / 3;
    const centerLng = (BRANCHES[0].lng + BRANCHES[1].lng + BRANCHES[2].lng) / 3;
    
    const map = L.map('map', {scrollWheelZoom: true}).setView([centerLat, centerLng], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 19, 
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // Add markers for each branch
    const markers = BRANCHES.map(b => {
      const html = `
        <div style="font-family:Arial,sans-serif;font-size:13px">
          <strong style="color:#0b79d0;display:block;margin-bottom:5px">${b.name}</strong>
          <div style="margin:5px 0"><strong>📍</strong> ${b.address}</div>
          <div style="margin:5px 0"><strong>📞</strong> <a href="tel:+1${b.phone}" style="color:#0b79d0;text-decoration:none">${b.phone}</a></div>
          <div style="margin:5px 0"><strong>🕐</strong> ${b.hours}</div>
        </div>
      `;
      
      const marker = L.marker([b.lat, b.lng], {
        title: b.name
      }).addTo(map).bindPopup(html);
      
      return marker;
    });

    // Fit map to show all markers
    const group = new L.featureGroup(markers);
    if(group.getBounds().isValid()){
      map.fitBounds(group.getBounds().pad(0.1));
    }
  }
});
