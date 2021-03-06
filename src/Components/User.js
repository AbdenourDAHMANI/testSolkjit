import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function UserCard({user}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          FirstName: 
        </Typography>
        <Typography variant="h4" component="div">
          LastName: 
        </Typography>
        <Typography variant="body2">
          Year
          <br />
          Year Of Experinece
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Modify</Button>
      </CardActions>
    </Card>
  );
}