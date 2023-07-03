import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Col, Container, Row } from 'react-bootstrap';
import login from '../assets/login.svg';
import Grid from '@mui/material/Grid';
import { setMobNo } from '../redux/action';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import axios from 'axios';
import './login.css';
import { height, width } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .get(`https://marshalartsbackend-production.up.railway.app/result/${data.password}`)
      .then((response) => {
        console.log(response);
        dispatch(setMobNo(response.data));
        navigate('/status');
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sm={12}>
          <form onSubmit={handleSubmit(submit)}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: '100px',
                flexDirection: 'column',
              }}>
              <h2>Welcome to Buddham World</h2>
              <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                <label>MobileNumber</label>
              </div>
              <div style={{ marginTop: '4px' }}>
                <input
                  style={{ padding: '10px', width: '200px' }}
                  type='text'
                  placeholder='Number'
                  {...register('password', { required: true })}
                />
              </div>

              <Button style={{ marginTop: '10px', backgroundColor: '#8338ec' }} type='submit' variant='contained'>
                Check Status
              </Button>
            </div>
          </form>
        </Grid>
        <Grid style={{ height: '100vh' }} item md={8} xs={12} sm={12}>
          <img style={{ width: '100%' }} src={login} />
        </Grid>
      </Grid>
    </>
  );
};

export default StudentLogin;
