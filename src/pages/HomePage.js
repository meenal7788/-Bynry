import {ProfileList } from '../components/ProfileList';
import {MapComponent } from '../components/MapComponent';
import { useState } from 'react';

export const HomePage =() => {
  const [profiles] = useState([
    {
      id: 1,
      name: "John Doe",
      description: "Software Engineer",
      photo: "/images/john.jpg",
      address: "1234 Elm Street, Springfield"
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Designer",
      photo: "/images/jane.jpg",
      address: "5678 Oak Street, Metropolis"
    }
  ]);  // Example profile data
  
  const [ selectedProfile, setSelectedProfile] = useState({});
  const [showMap, setShowMap] = useState(false);

  const onSummaryClick = (profile) => {
      setSelectedProfile(profile);
      setShowMap(true);
  };

  return (
    <div>
      <ProfileList profiles={profiles} onSummaryClick={onSummaryClick} />
      {showMap && <MapComponent address={selectedProfile.address} />}
    </div>
  );
};