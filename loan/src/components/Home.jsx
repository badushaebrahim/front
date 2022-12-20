import React from 'react'
import Card from '@mui/material/Card';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
 import { useFormik } from 'formik';
 
import Select, { SelectChangeEvent } from '@mui/material/Select';
function Home() {
const url ="localhost:8007/immobilier/v1/loan-application/loan"k
const checkOffer =() =>{
	var data = '{  "amount": {{amount}},  "tenure": "{{Tenure}}"}';

	
	var config = {
	
	  method: 'post',
	
	  url: url+'/loan-offers?country=JO&lang=en',
	
	  headers: { 
	
	    'source-id': 'neo', 
	
	    'uuid': 'ba71d13f-c472-4f30-bf51-1fb92adb546c', 
	
	    'x-channel-identifier': 'MB', 
	
	    'x-fapi-interaction-id': '7f089413-90d1-470e-8260-16297785b8bf', 
	
	    'x-jws-signature': 'officia Duis non cupidatat incididunt', 
	
	    'Content-Type': 'application/json', 
	
	    'Accept': '*/*'
	
	  },
	
	  data : data
	
	};
	
	axios(config)
	
	.then(function (response) {
	
	  console.log(JSON.stringify(response.data));
	setInstallment(response.data.data.installment)
	setIntrestRate(response.data.data.intrestRate)
	setTotalIntrestAmount(response.data.data.totalIntrestAmount)
	setFee(response.data.data.fee)
	
	})
	
	.catch(function (error) {
	
	  console.log(error);
	
	});
}
const confirmLoan = (values) =>{var data = '{ "age": {{values.age}}, "loanAmount": {{values.amount}}, "name": "{{values.name}}",  "nationalId": "{{values.NId}}",  "salaryRange": "{{salary}}", "tenure": "{{Month}}"}';



var config = {
  method: 'post',

  url: url+'/submission?country=JO&lang=en',

  headers: { 

    'source-id': 'neo', 

    'uuid': '53d5d2dd-82c7-4111-8106-503110b97b77', 

    'x-channel-identifier': 'MB', 

    'x-fapi-interaction-id': 'd020b730-cc9d-44dd-bfd3-d3bd5bd59f07', 

    'x-jws-signature': 'officia Duis non cupidatat incididunt', 

    'Content-Type': 'application/json', 

    'Accept': '*/*'

  },

  data : data

};



axios(config)

.then(function (response) {

  console.log(JSON.stringify(response.data));

})

.catch(function (error) {

  console.log(error);

});}



	const validate = values => {
		const errors = {};
		 if (values.firstName.length > 15) {
		  errors.firstName = 'Must be 15 characters or less';
		}else{errors.firstName=""}
	      
		if(!values.age){
			errors.firstName = 'Required';
		}
	      
		
	      
		return errors;
	      };
	const [tenure, setTenure] = React.useState('');
	const [salary, setSalary] = React.useState('');
	const[fee,setFee]=React.useState('');
	const[totalIntrestAmount,setTotalIntrestAmount]=React.useState('');
	const[intrestRate,setIntrestRate]=React.useState('');
	const[installment,setInstallment]=React.useState('');

	const handleChangeTenure = (e) => {
		setTenure(e.target.value);
	alert(tenure)
	      };const handleChangeSalarye = (e) => {
		setSalary(e.target.value);
		alert(salary)
	      };const formik = useFormik({
		initialValues: {
		  firstName: '',
		  age: '',
		  amount : '',
		  Nid : ' ',
		  Tenure : '',

		},
		validate,
		onSubmit: values => {
		  alert(JSON.stringify(values, null, 2));

		},
	      });
	return (
		<div>
		 <form onSubmit={formik.handleSubmit}>
				 <Card sx={{ maxWidth: 545 }}>
					 <h1>Loan Finder</h1>
					 
					 <TextField id="outlined-basic"  label="Name" onChange={formik.handleChange}
         				onBlur={formik.handleBlur}
         				value={formik.values.firstName} variant="outlined" />
					 <p>{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}</p>
					 <br/>
					 <TextField id="outlined-basic" onBlur={formik.handleBlur}
         				value={formik.values.lage} label="Age" variant="outlined" />
					  {formik.errors.age ? <div>{formik.errors.age}</div> : null}
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
					 <TextField id="outlined-basic" value={installment} label="Installment" variant="outlined" />
					 <br/>
					 <TextField id="outlined-basic" value{intrestRate} label="intrestRate" variant="outlined" />
					 <br/>
					 <TextField id="outlined-basic" value={totalIntrestAmount} label="totalIntrestAmount" variant="outlined" />
					 <br/>
					 <TextField id="outlined-basic" value={fee} label="fee" variant="outlined" />
					 <br/>
					 <TextField id="outlined-basic" validate={total} label="total" variant="outlined" />
					 <br/>
					 <Button variant="contained">Submit</Button>
				 </Card>
		</form>
		</div>

	)
}

export default Home
