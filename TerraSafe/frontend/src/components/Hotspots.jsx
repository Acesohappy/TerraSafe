import React from 'react';
import './Hotspots.css';

const Hotspots = () => {
  const sampleHotspots = [
    {
      id: 1,
      location: "Bandipur National Park",
      type: "Elephant Corridor",
      incidents: 12,
      riskLevel: "High",
      lastUpdated: "2024-02-28"
    },
    {
      id: 2,
      location: "Sundarbans Reserve",
      type: "Tiger Territory",
      incidents: 8,
      riskLevel: "Medium",
      lastUpdated: "2024-02-27"
    },
    {
      id: 3,
      location: "Nilgiri Hills",
      type: "Mixed Wildlife Zone",
      incidents: 15,
      riskLevel: "High",
      lastUpdated: "2024-02-28"
    },
    {
      id: 4,
      location: "Kaziranga Border",
      type: "Rhino Habitat",
      incidents: 5,
      riskLevel: "Medium",
      lastUpdated: "2024-02-26"
    }
  ];

  return (
    <div className="hotspots-container">
      <div className="wildlife-pattern"></div>
      <header className="hotspots-header">
        <h1>Wildlife Conflict Hotspots</h1>
        <p>Current active zones requiring attention</p>
      </header>
      
      <div className="hotspots-grid">
        {sampleHotspots.map(hotspot => (
          <div key={hotspot.id} className={`hotspot-card ${hotspot.riskLevel.toLowerCase()}`}>
            <div className="card-header">
              <h3>{hotspot.location}</h3>
              <span className={`risk-badge ${hotspot.riskLevel.toLowerCase()}`}>
                {hotspot.riskLevel}
              </span>
            </div>
            <div className="card-content">
              <p><strong>Type:</strong> {hotspot.type}</p>
              <p><strong>Recent Incidents:</strong> {hotspot.incidents}</p>
              <p className="last-updated">Last updated: {hotspot.lastUpdated}</p>
            </div>
            <button className="details-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotspots; 