import React from 'react';
import ProfileCard from './ProfileCard';

export const ProfileList = ({ profiles, onSummaryClick }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} onSummaryClick={onSummaryClick} />
      ))}
    </div>
  );
};


