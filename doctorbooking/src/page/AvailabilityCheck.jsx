import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import { useFormik } from 'formik';

import Select, { SelectChangeEvent } from '@mui/material/Select';
function AvailabilityCheck() {
    // const[data,setData]=useState({})
    const [docs, SetDocs] = useState([])
    const[clinics,setClinics]=useState([])
    const[clinic,setClinic]=useState()
    const[city,setCity]=useState()
    const[doctors,setDoctors]=useState([])
    // const
    const cityHandle = (e) =>{
        setCity(e.target.value)
        let tmp = [];
        docs.map(i=>{if(i.clinicCity==city){
                tmp.push(i)

        }})
        console.log("ras",tmp)
        setClinics(tmp)
            console.log(clinics)
    }
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
                {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={clinic}
                    label="Clinic"
                    // onChange={handleChangeTenure}
                >   
                       {clinics.map( i =><MenuItem value={clinics.clinicName}>{clinics.clinicName}</MenuItem>)}

                </Select><br /> */}
                {clinics.map( i =><h5>{clinics.clinicName}</h5>)}
                <br /></Card>


        </div>
    )
}

export default AvailabilityCheck