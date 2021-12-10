import React, { useEffect } from 'react';
import { Tabs,Tab,Box} from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";

function LinkTab(props) {

    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
export const NavBar = (props) => {
    const [value, setValue] = React.useState(0);
    let navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log('ne',event)
        navigate('/SecondPage')
      };
    
    return (
        <Box sx={{ width: '100%' }}>

        <Tabs aria-label="nav tabs example" value={value} onChange={handleChange}>
            <LinkTab label="Page One" href="/" />
            <LinkTab label="Page Two" href="/SecondPage" />
            <LinkTab label="Page Three" href="/ThirdPage" />
            <LinkTab label="Not Found" href="/NotFound" />
        </Tabs>
        </Box>
    )
}