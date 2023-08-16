import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Col, Container, Row } from 'react-bootstrap';
import login from '../assets/dashboard.svg';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setAuthToken } from '../redux/action';

import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import './login.css';
import { color, height, width } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state);
  const [isSubmit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    setSubmit(true);
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post('https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/token', data)
      .then((response) => {
        console.log(response);
        dispatch(setAuthToken(response.data));
        navigate('/admin');
      })
      .catch((error) => {
        setSubmit(false);
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sm={12}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: '100px',
                flexDirection: 'column',
              }}>
              <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                <label>UserName</label>
              </div>
              <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column' }}>
                <input
                  style={{ padding: '10px', width: '200px' }}
                  type='text'
                  placeholder='First name'
                  {...register('username', { required: true })}
                />{' '}
                {errors.password && <span style={{ fontSize: '.7rem', color: 'red' }}>*This field is required</span>}
              </div>
              <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                <label>Password</label>
              </div>
              <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column' }}>
                <input
                  style={{ padding: '10px', width: '200px' }}
                  type='password'
                  placeholder='password'
                  {...register('password', { required: true })}
                />

                {errors.password && <span style={{ fontSize: '.7rem', color: 'red' }}>*This field is required</span>}
              </div>
              {isSubmit && (
                <div style={{ marginTop: '10px' }} className='spinner-container'>
                  <div className='loading-spinner'></div>
                </div>
              )}
              {!isSubmit && (
                <Button style={{ marginTop: '10px', backgroundColor: '#8338ec' }} type='submit' variant='contained'>
                  Login
                </Button>
              )}
            </div>
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            <img style={{ height: '100%', width: '100%' }} src={login} />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Login;
