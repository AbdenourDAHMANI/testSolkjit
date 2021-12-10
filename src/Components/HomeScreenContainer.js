import { makeStyles } from '@mui/styles';
import { Box} from '@mui/system';
import Grid from '@mui/material/Grid';
import Button  from '@mui/material/Button';
import React, { useState } from 'react';
import Filter from './Filter';
import UsersList from './UsersList';
import AddUser from './AddUser';

const useStyle = makeStyles({
	home: {
		marginTop: 20
	},
	button: {
		padding: "15.5px 31px"
	}
})

export const Home = (props)=>{

const [users, setUsers] = useState([]);
const [types, setTypes] = useState([]);
const [type, setType] = useState('');
const [dialog, setDialog] = useState(false);

const handleClick = () => {
	setDialog(true)
}

const classes = useStyle();

    return (
		<Box
			className = { classes.home }
		>
		<AddUser 
			dialog={dialog}
			setDialog={setDialog }
		/>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Filter 
						types={types}
						setType={setType}
					/>

				</Grid>
				
				<Grid item xs={4}>
					<Button 
						className={classes.button} 
						variant="outlined"
						onClick={handleClick}
					>
						Add
					</Button>
				</Grid>

			</Grid>
			
			<UsersList 
				users={users}
			/>
		</Box>
		
	)
}