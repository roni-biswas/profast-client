import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

const centerPosition = [23.685, 90.3563]; // Center of Bangladesh

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
});

// Helper component to move map
const FlyToDistrict = ({ coords }) => {
  const map = useMap();

  if (coords) {
    map.flyTo(coords, 14, { duration: 1.5 });
  }
  return null;
};

const BangladeshMap = ({ serviceCenters }) => {
  const [searchText, setSearchText] = useState("");
  const [activeCoords, setActiveCoords] = useState(null);
  const [activeDistrict, setActiveDistrict] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    const district = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (district) {
      setActiveCoords([district.latitude, district.longitude]);
      setActiveDistrict(district.district);
    }
  };

  return (
    <div className="h-[600px] w-full rounded-md overflow-hidden shadow-md">
      {/* Search Box */}
      <form
        onSubmit={handleSearch}
        className="max-w-2xl mx-auto mb-4 z-[1000] relative"
      >
        <div className="join w-full shadow-lg">
          <input
            type="text"
            placeholder="Search district..."
            className="input input-bordered join-item w-full focus:outline-none focus:ring-0 text-base"
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="btn btn-neutral join-item text-base">
            Search
          </button>
        </div>
      </form>

      {/* map */}
      <MapContainer
        center={centerPosition}
        zoom={7}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToDistrict coords={activeCoords} />

        {serviceCenters.map((center, index) => (
          <Marker
            key={index}
            position={[center.latitude, center.longitude]}
            icon={customIcon}
          >
            <Popup autoOpen={center.district === activeDistrict}>
              <strong>{center.district}</strong> <br />
              {center.covered_area.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
