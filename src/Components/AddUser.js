import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
	dialog: {
		// width: '60%'
	},
	forms: {
		display: 'flex',
		flexDirection: 'column'
	},
	field: {
		display: 'block',
		margin: '20px 30px'
	}
}) 

export default function AddUser({ dialog, setDialog }) {

	const classes = useStyle();

	const handleClose = () => {
		setDialog(false)
	}
	return (
		<Dialog
			open={dialog}
			onClose={handleClose}
			className={classes.dialog}
		>
			<DialogTitle>Add User</DialogTitle>
			<Box className={classes.forms}>
				<TextField id="outlined-basic" label="First Name" variant="outlined" className={classes.field}/>
				<TextField id="outlined-basic" label="Last Name" variant="outlined" className={classes.field}/>
				<TextField id="outlined-basic" label="Years Of Experience" variant="outlined" className={classes.field} />
			</Box>
			<Button variant="outlined" >Add</Button>
		</Dialog>
	)
}
