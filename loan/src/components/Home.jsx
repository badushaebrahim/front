import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from "yup";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate} from 'react-router-dom';

function Home() {
	let url = "'http://localhost:5500/loan-application/v1/loan"
	const [intrestRate, setIntrestRate] = useState('')

	const [totalIntrestAmount, setTotalIntrestAmount] = useState('')
	const [fee, setFee] = useState('')
	const [total, setTotal] = useState('')
	const [tenure, setTenure] = useState('')
	const [amount, setAmount] = useState('')
	const [installment, setInstallment] = useState('');
	const [salary, setSalary] = useState('');
	const [details, setDetails] = useState({});
	const [view, setView] = useState(false);
	const urlval = "http://localhost:5500/loan-application/v1/loan"
	const checkOffer = () => {
		if (tenure != "") {
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
				data: data
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
		else { alert("select tenure") }
	}
	function confirmLoan(values) {
		if (tenure != "" && salary != "" && view) {
			console.log("66")
			let data = JSON.stringify({
				"age": parseInt(values.age),
				"name": values.name,
				"nationalId": values.NId,
				"salaryRange": salary,
				"loanAmount": parseFloat(amount),
				"tenure": tenure
			});
			console.log(data)

			var config = {
				method: 'post',

				url: urlval + '/submission?country=JO&lang=en',

				headers: {
					'country': 'JO',
					'uuid': 'dolor esse',
					'Content-Type': 'application/json',
					'Accept': '*/*'

				},
				data: data
			};

			axios(config)

				.then(function (response) {

					console.log(JSON.stringify(response.data.data.status));
					if(JSON.stringify(response.data.data.status)=='"CONFIRMED"'){
			// 			const navigate = useNavigate();
			// navigate('/submited');
			window.location.href = "/submited";
					}else{
						alert("try again")
					}

				})

				.catch(function (error) {

					alert(JSON.stringify(error.response.data))

				});

		} else { alert("select salary") }
	}

	//formik
	const formik = useFormik({
		initialValues: {
			name: "",
			age: "",
			nid: ""

		},
		validationSchema: Yup.object().shape({
			name: Yup.string()
				.min(5, "Must be 6 character long")
				.max(30, "maximum length should be 30")
				.required("Required"),
			age: Yup.string().required("Required"),
			nid: Yup.string().required("required")
			
		}),
		onSubmit: (values) => {
			//   alert(JSON.stringify(values, null, 2));

			setDetails(values);
			setView(true);
			confirmLoan(values);
			console.log(values);
			
		},
	});
	//end

	return (
		<div>
			<form onSubmit={formik.handleSubmit} className="custom">
				<Card sx={{ maxWidth: 545 }}>
					<h1>Loan Finder</h1>

					<TextField id="outlined-basic" label="Name" {...formik.getFieldProps("name")} variant="outlined" />
					{formik.touched.name && formik.errors.name ? (<p>{formik.errors.name}</p>) : null}
					<br />
					<TextField id="outlined-basic"   {...formik.getFieldProps("age")} label="Age" variant="outlined" />
					{formik.touched.age && formik.errors.age ? (<p>{formik.errors.age}</p>) : null}
					<br />
					<InputLabel id="demo-simple-select-label">Tenure</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={tenure}
						label="Month"
						onChange={(e) => { setTenure(e.target.value) }}
					>
						<MenuItem value={"Month12"}>12 Month</MenuItem>
						<MenuItem value={"Month24"}>24 Month</MenuItem>
						<MenuItem value={"Month36"}>36 Month</MenuItem>
						<MenuItem value={"Monthl̥48"}>48 Month</MenuItem>
						<MenuItem value={"Month60"}>60 Month</MenuItem>
					</Select><br />
					<InputLabel id="demo-simple-select-label">Salary Range</InputLabel>

					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={salary}
						label="Month"
						onChange={(e) => { setSalary(e.target.value) }}
					>
						<MenuItem value={"JOD_300_TO_500"}>300 JOD - 500 JOD</MenuItem>
						<MenuItem value={"JOD_500_TO_750"}>500 JOD - 750 JOD</MenuItem>
						<MenuItem value={"JOD_750To1000"}>750 JOD - 1000 JOD</MenuItem>
						<MenuItem value={"JOD_1000_OR_ABOVE"}>more than 1000 JOD</MenuItem>

					</Select><br />
					<br />
					<TextField id="outlined-basic" label="Amount" onChange={(e) => { setAmount(e.target.value) }} onBlur={checkOffer} variant="outlined" />
					<br />
					<TextField id="outlined-basic" {...formik.getFieldProps("nid")} label="National Id" variant="outlined" />
					{formik.touched.nid && formik.errors.nid ? (<p>{formik.errors.nid}</p>) : null}



					<br />
					<Card sx={{ maxWidth: 545 }}>
						<TextField id="outlined-basic" value={installment} label="Installment" variant="outlined" />
						<br />
						<TextField id="outlined-basic" value={intrestRate} label="intrestRate" variant="outlined" />
						<br />
						<TextField id="outlined-basic" value={totalIntrestAmount} label="totalIntrestAmount" variant="outlined" />
						<br />
						<TextField id="outlined-basic" value={fee} label="fee" variant="outlined" />
						<br />
						<TextField id="outlined-basic" value={total} label="total" variant="outlined" />
						<br />
					</Card>
					<Button variant="contained" onClick={formik.handleSubmit}>Submit</Button>
				</Card></form></div>
	)
}

export default Home