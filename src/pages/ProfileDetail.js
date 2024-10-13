import React from 'react';
import { useParams } from 'react-router-dom';  // Assuming you are using react-router for routing

const ProfileDetail = ({ profiles }) => {
  const { profileId } = useParams();  // Get the profile ID from the route params

  // Find the selected profile based on the ID from the URL
  const selectedProfile = profiles.find(profile => profile.id === parseInt(profileId));

  if (!selectedProfile) {
    return <h2>Profile not found</h2>;
  }

  return (
    <div>
      <h1>{selectedProfile.name}</h1>
      <img src={selectedProfile.photo} alt={selectedProfile.name} style={{ width: '200px', height: '200px' }} />
      <p>{selectedProfile.description}</p>
      <p><strong>Address:</strong> {selectedProfile.address}</p>
      {/* You can add more detailed information here */}
    </div>
  );
};

export default ProfileDetail;
