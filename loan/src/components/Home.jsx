import React from 'react'
import Card from '@mui/material/Card';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function Home() {
	const [tenure, setTenure] = React.useState('');
	const [salary, setSalary] = React.useState('');
	const handleChangeTenure = (e) => {
		setTenure(e.target.value);
	
	      };const handleChangeSalarye = (e) => {
		setSalary(e.target.value);
		
	      };
	return (
		<div>
				 <Card sx={{ maxWidth: 345 }}>
					 <h1>Hellos</h1>
					 
					 <TextField id="outlined-basic" label="Name" variant="outlined" />
					 <br/>
					 <TextField id="outlined-basic" label="Age" variant="outlined" />
					 <br/>
					 <TextField id="outlined-basic" label="Amount" variant="outlined" />
					 <br/>
					 <TextField id="outlined-basic" label="National Id" variant="outlined" />
					 <br/>
					 <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
					 
					<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={tenure}
					label="Month"
					onChange={handleChangeTenure}
					>
					<MenuItem value={12}>12 Month</MenuItem>
					<MenuItem value={24}>24 Month</MenuItem>
					<MenuItem value={36}>36 Month</MenuItem>
					<MenuItem value={48}>48 Month</MenuItem>
					<MenuItem value={60}>60 Month</MenuItem>
					</Select><br/>
					<InputLabel id="demo-simple-select-label">Salary Range</InputLabel>
					 
					 <Select
					 labelId="demo-simple-select-label"
					 id="demo-simple-select"
					 value={salary}
					 label="Month"
					 onChange={handleChangeSalarye}
					 >
					 <MenuItem value={"JOD_300_TO_500"}>300 JOD - 500 JOD</MenuItem>
					 <MenuItem value={"JOD_500_TO_750"}>500 JOD - 750 JOD</MenuItem>
					 <MenuItem value={"JOD_750To1000"}>750 JOD - 1000 JOD</MenuItem>
					 <MenuItem value={"JOD_1000_OR_ABOVE"}>more than 1000 JOD</MenuItem>

					 </Select><br/>
					 <br/>
					 <Button variant="contained">Submit</Button>
				 </Card>
		</div>
	)
}

export default Home
