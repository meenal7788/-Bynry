import React from 'react';
import { Button, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={profile.photo}
        alt={profile.name}
      />
      <CardContent>
        <Typography variant="h5">{profile.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.description}
        </Typography>
        <Button onClick={() => onSummaryClick(profile)}>Summary</Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
