import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Filter = ({ types, setType }) => {

	
  const handleChange = (event) => {
    setType(event.target.value);
  };


	return (
		<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Types</InputLabel>
				<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={types}
				label="Type"
				onChange={handleChange}
				>

					{
						types.map((type, index) => {
							return(
								<MenuItem value={10}>Ten</MenuItem>
							)
						} )
					}
				
				</Select>
			</FormControl>
	);
}

export default Filter;
