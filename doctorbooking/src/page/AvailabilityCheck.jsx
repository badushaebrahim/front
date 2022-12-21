import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import { useFormik } from 'formik';

import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs, { Dayjs } from 'dayjs';
function AvailabilityCheck() {
    // const[data,setData]=useState({})
    const [docs, SetDocs] = useState([])
    const[clinics,setClinics]=useState([])
    const[clinic,setClinic]=useState()
    const[city,setCity]=useState()
    const[doctor,setDoctor]=useState()
    const[timeFrame,setTimeFrame]=useState()

    const[doctors,setDoctors]=useState([])
    // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
    // const
    const cityHandle = (e) =>{
        // console.log("data",docs)
        setCity(e.target.value)
        let tmp = [];
        docs.map(i=>{if(i.clinicCity==city){
                tmp.push(i)
                console.log("found",i)
        }})
        console.log("ras",tmp)
        setClinics(tmp)
            // alert(clinics)
    }
    const handleclinic=(e)=>{setClinic(e.target.value)
        let tmp = [];
        docs.map(i=>{if(i.clinicName==clinic){
                tmp.push(i)
                console.log("found",i)
        }})
        console.log("ras",tmp)
        setDoctors(tmp)}
    useEffect(() => {
        // ⬇ This calls my get request from the server
        getDocs();
      
    }, []);
    function getDocs() {
        var config = {
            method: 'get',
            url: 'http://localhost:5501/doctor-appointment/v1/doctors',
            headers: {
                'uuid': 'cupidatat qui nostrud amet consectetur',
                'Accept': '*/*'
            }
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.data);
                SetDocs(response.data.data)
                // console.log(docs)

            })
            .catch(function (error) {
                console.log( error);
            });
    }
    return (
        <div>
            <Card sx={{ maxWidth: 545 }}>
                <h1>Doctor Finder</h1>

                {/* <TextField id="outlined-basic"  label="DoctorName"  variant="outlined" />
					 {/* <p>{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}</p> */}
                     {/* {docs.map(o=><h1>{o.clinicName}</h1>)} */}
                     <label>City</label><br />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={cityHandle}
                    label="city"
                    // onChange={handleChangeTenure}
                >   
                       {docs.map( i =><MenuItem key={i.id} value={i.clinicCity}>{i.clinicCity}</MenuItem>)}

                </Select><br />
                {/* {clinics?.map( i =><h5>{i.clinicName}</h5>)} */}
                <label>Clinic</label><br />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={clinic}
                    label="Clinic"
                    onChange={handleclinic}
                >   
                       {clinics.map( i =><MenuItem value={i.clinicName}>{i.clinicName}</MenuItem>)}

                </Select><br />
                {/* {clinics?.map( i =><h5>{i.clinicName}</h5>)} */}
                
                <label>Doctor</label><br />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={doctor}
                    label="Doctor"
                    onChange={(e)=>{setDoctor(e.target.value)}}
                >   
                       {clinics.map( i =><MenuItem value={i.doctorName}>{i.doctorName}</MenuItem>)}

                </Select><br />
                <label>Time Frame</label><br />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={doctor}
                    label="Doctor"
                    onChange={(e)=>{setTimeFrame(e.target.value)}}
                >   
                       <MenuItem value={"TIME9AM_10AM"}>{"9Am to 10Am"}</MenuItem>
                       <MenuItem value={"TIME10AM_11AM"}>{"10Am to 11Am"}</MenuItem>


                </Select><br />
                
                
                <br/>
                
                <Button variant="contained">Check</Button>
                <br /></Card>


        </div>
    )
}

export default AvailabilityCheck