import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import UserCard from './User';

export default function UsersList({ users }) {

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{ users.map((user, index) => {
					<Grid item xs={4} key={index}>
						<UserCard 
							user={user}
						/>
					</Grid>
				}) }
			</Grid>
		</Box>
	)
}
