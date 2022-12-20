import React from 'react'
import Card from '@mui/material/Card';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
 import { useFormik } from 'formik';
 
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Home() {const url ="http://localhost:5500/loan-application/v1/loan"
const checkOffer =() =>{
	console.log(tenure)
	var data = JSON.stringify({
  "amount": parseFloat(amount),
  "tenure": tenure
});
var config = {
  method: 'post',
  url: 'http://localhost:5500/loan-application/v1/loan/loan-offers',
  headers: { 
    'country': 'JO', 
    'uuid': 'dolor esse', 
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
	setFee(response.data.data.fees)
	setTotal(response.data.data.total)
	console.log(response.data.data.installment)	
	})

	.catch(function (error) {

	  alert(JSON.stringify(error.response.data))
	
	});
}
const confirmLoan = (values) =>{
	
	let data = JSON.stringify({
		"age": values.age,
		"name": values.name,
		"nationalId": values.NId, 
		 "salaryRange": salary,
		"amount": parseFloat(amount),
		"tenure": tenure
	  });
	// var data = '{ "age": {{values.age}}, "loanAmount": {{values.amount}}, "name": "{{values.name}}",  "nationalId": "{{values.NId}}",  "salaryRange": "{{salary}}", "tenure": "{{Month}}"}';

console.log(data)

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

	alert(JSON.stringify(error.response.data))

});}

  return (
	<div><Card sx={{ maxWidth: 545 }}>
	<h1>Loan Finder</h1>
	
	<TextField id="outlined-basic"  label="Name" onChange={formik.handleChange}
		onBlur={formik.handleBlur}
		value={formik.values.firstName} variant="outlined" />
	{/* <p>{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}</p> */}
	<br/>
	<TextField id="outlined-basic" onBlur={formik.handleBlur}
		value={formik.values.lage} label="Age" variant="outlined" />
	 {/* {formik.errors.age ? <div>{formik.errors.age}</div> : null} */}
	<br/>
	<TextField id="outlined-basic" label="Amount" onChange={(e)=>{setAmount(e.target.value)}} onBlur={checkOffer} variant="outlined" />
	<br/>
	<TextField id="outlined-basic" label="National Id" variant="outlined" />
	<br/>
	<InputLabel id="demo-simple-select-label">Tenure</InputLabel>
	
   <Select
   labelId="demo-simple-select-label"
   id="demo-simple-select"
   value={tenure}
   label="Month"
   onChange={(e)=>{setTenure(e.target.value)}}
   >
   <MenuItem value={"Month12"}>12 Month</MenuItem>
   <MenuItem value={"Month24"}>24 Month</MenuItem>
   <MenuItem value={"Month36"}>36 Month</MenuItem>
   <MenuItem value={"Monthl̥48"}>48 Month</MenuItem>
   <MenuItem value={"Month60"}>60 Month</MenuItem>
   </Select><br/>
   <InputLabel id="demo-simple-select-label">Salary Range</InputLabel>
	
	<Select
	labelId="demo-simple-select-label"
	id="demo-simple-select"
	value={salary}
	label="Month"
	onChange={(e)=>{setSalary(e.target.value)}}
	>
	<MenuItem value={"JOD_300_TO_500"}>300 JOD - 500 JOD</MenuItem>
	<MenuItem value={"JOD_500_TO_750"}>500 JOD - 750 JOD</MenuItem>
	<MenuItem value={"JOD_750To1000"}>750 JOD - 1000 JOD</MenuItem>
	<MenuItem value={"JOD_1000_OR_ABOVE"}>more than 1000 JOD</MenuItem>

	</Select><br/>
	<br/>
	<TextField id="outlined-basic" value={installment} label="Installment" variant="outlined" />
	<br/>
	<TextField id="outlined-basic" value={intrestRate} label="intrestRate" variant="outlined" />
	<br/>
	<TextField id="outlined-basic" value={totalIntrestAmount} label="totalIntrestAmount" variant="outlined" />
	<br/>
	<TextField id="outlined-basic" value={fee} label="fee" variant="outlined" />
	<br/>
	<TextField id="outlined-basic" value={total}  label="total" variant="outlined" />
	<br/>
	<Button variant="contained" onClick={confirmLoan}>Submit</Button>
</Card></div>
  )
}

export default Home