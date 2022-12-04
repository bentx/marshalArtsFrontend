import { Checkbox } from '@mui/material';
import { padding } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ds from '../assets/form.svg';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import axios from 'axios';
import './details.css';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomDatepicker from './customDate';

const Details = () => {
  const data = useSelector((state) => state.dataState.data);
  const defaultValues = {};

  const auth = useSelector((state) => state.dataState.auth);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const [isAdded, setIsAdded] = useState(false);
  const [black, setblack] = useState(false);
  const [blue, setblue] = useState(false);
  const [yellow, setyellow] = useState(false);
  const [red, setred] = useState(false);
  const [brown, setbrown] = useState(false);
  const [colors, setcolors] = useState(['yellow', 'orange', 'green', 'blue', 'purple', 'red', 'brown', 'black']);

  const taekcolors = ['yellow', 'green', 'green1', 'blue', 'blue1', 'red', 'red1', 'black'];
  const karatecolors = ['yellow', 'orange', 'green', 'blue', 'maroon', 'brown', 'brownandblack', 'black'];
  const kungfucolors = ['yellow', 'orange', 'green', 'blue', 'purple', 'red', 'brown', 'black'];

  const [green, setGreen] = useState(false);
  const navigate = useNavigate();
  const [searchparam, setSearchParam] = useSearchParams();
  const search = searchparam.get('edit') || '';
  useEffect(() => {
    console.log(search);
    if (search === 'yes') {
      console.log(data);
      if (data.type === 'Karate') {
        console.log('selected Karate ');
        setcolors(karatecolors);
      } else if (data.type === 'Taekwondo') {
        console.log('selected Taekwondo  ');

        setcolors(taekcolors);
      } else {
        console.log('selected Kung Fu  ');

        setcolors(kungfucolors);
      }
      setValue('name', data.name);
      setValue('mobile', data.mobile);
      setValue('yellow', data.yellow);
      setValue('green', data.green);
      setValue('orange', data.orange);
      setValue('green1', data.green1);
      setValue('blue', data.blue);
      setValue('purple', data.purple);
      setValue('blue1', data.blue1);
      setValue('red', data.red);
      setValue('red1', data.red1);
      setValue('maroon', data.maroon);
      setValue('brown', data.brown);
      setValue('brownandblack', data.brownandblack);
      setValue('black', data.black);
      setValue('type', data.type);

      if (data.yellow) {
        setValue('yellowdate', data.yellowdate.slice(0, 10));
      }
      if (data.green) {
        setValue('greendate', data.greendate.slice(0, 10));
      }
      if (data.orange) {
        setValue('orangedate', data.orangedate.slice(0, 10));
      }
      if (data.green1) {
        setValue('green1date', data.green1date.slice(0, 10));
      }
      if (data.blue) {
        setValue('bluedate', data.bluedate.slice(0, 10));
      }
      if (data.purple) {
        setValue('purpledate', data.purpledate.slice(0, 10));
      }
      if (data.blue1) {
        setValue('blue1date', data.blue1date.slice(0, 10));
      }
      if (data.red) {
        setValue('reddate', data.reddate.slice(0, 10));
      }
      if (data.red1) {
        setValue('red1date', data.red1date.slice(0, 10));
      }
      if (data.maroon) {
        setValue('maroondate', data.maroondate.slice(0, 10));
      }
      if (data.brown) {
        setValue('browndate', data.browndate.slice(0, 10));
      }
      if (data.brownandblack) {
        setValue('brownandblackdate', data.brownandblackdate.slice(0, 10));
      }
      if (data.black) {
        setValue('blackdate', data.blackdate.slice(0, 10));
      }

      // if (data.black) {
      //   console.log(data.black);
      //   console.log(data.blackdate);
      //   setValue('blackdate', data.blackdate.slice(0, 10));
      // }
      // if (data.blue) {
      //   console.log(data.bluedate);
      //   setValue('bluedate', data.bluedate.slice(0, 10));
      // }
      // if (data.green) {
      //   console.log(data.greendate);
      //   setValue('bluedate', data.greendate.slice(0, 10));
      // }
    }
    var date = new Date(data.blackdate);
  }, [register]);

  const handlechange = (type) => {
    console.log('rrr');
    if (type === 'black') {
      setblack(!black);
    } else if (type === 'blue') {
      setblue(!blue);
    } else {
      setGreen(!green);
    }
  };
  const submit = (data) => {
    console.log(data);
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };
    axios
      .post('https://mstc-backend.herokuapp.com/addUser', data, { headers })
      .then((response) => {
        console.log(response);
        setIsAdded(true);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    console.log('10000000');
    setChecked(!checked);
  };

  const onclose = () => {
    navigate('/admin');
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
      <img
        style={{
          height: '100vh',
          width: '100%',
          zIndex: '-1',
          position: 'fixed',
          filter: 'blur(3px)',
          opacity: '.5',
        }}
        src={ds}
      />
      {!isAdded && (
        <div
          style={{
            marginTop: '250px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            padding: '30px',
            background: 'hsl(0 0% 0%/0.2)',

            borderRadius: '10px',
          }}>
          <form onSubmit={handleSubmit(submit)}>
            <div
              style={{
                fontWeight: 'bold',
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <label>Name</label>
              <input
                style={{
                  padding: '10px',
                  width: '200px',
                  marginLeft: '5px',
                  background: 'hsl(0 0% 0%/0.2)',
                  color: 'white',
                  border: 'none',
                }}
                type='text'
                placeholder='First name'
                {...register('name', { required: true })}
              />
            </div>
            <div
              style={{
                fontWeight: 'bold',
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <label>Type</label>
              <select
                style={{
                  padding: '10px',
                  width: '220px',
                  marginLeft: '5px',
                  background: 'hsl(0 0% 0%/0.2)',
                  color: 'white',
                  border: 'none',
                }}
                name='type'
                {...register('type', {
                  required: true,
                  onChange: (e) => {
                    if (getValues('type') === 'Karate') {
                      console.log('selected Karate ');
                      setcolors(karatecolors);
                    } else if (getValues('type') === 'Taekwondo') {
                      console.log('selected Taekwondo  ');

                      setcolors(taekcolors);
                    } else {
                      console.log('selected Kung Fu  ');

                      setcolors(kungfucolors);
                    }
                    console.log('e');

                    console.log(getValues('type'));
                  },
                })}>
                <option value='Kung Fu'>Kung Fu</option>
                <option value='Karate'>Karate</option>
                <option value='Taekwondo'>Taekwondo</option>
              </select>
            </div>
            {/* <div style={{ fontWeight: 'bold', margin: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <label>Age</label>
              <input
                className='formInput'
                style={{
                  padding: '10px',
                  width: '200px',
                  border: 'none',
                  background: 'hsl(0 0% 0%/0.2)',
                  color: 'white',
                }}
                type='number'
                placeholder='First name'
                {...register('age', { required: true })}
              />
            </div> */}
            <div style={{ fontWeight: 'bold', margin: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <label>Mobile</label>
              <input
                style={{
                  padding: '10px',
                  width: '200px',
                  marginLeft: '5px',
                  background: 'hsl(0 0% 0%/0.2)',
                  color: 'white',
                  border: 'none',
                }}
                type='text'
                placeholder='First name'
                {...register('mobile', { required: true })}
              />
            </div>
            {/* <div style={{ fontWeight: 'bold' }}>
              <Checkbox
                checked={watch('black') === true}
                color='success'
                onChange={() => handlechange('black')}
                {...register('black')}
              />

              <label>Black Belt</label>
            </div>
            {watch('black') && (
              <input
                style={{
                  padding: '10px',
                  width: '200px',
                  marginLeft: '5px',
                  background: 'hsl(0 0% 0%/0.2)',
                  color: 'white',
                  border: 'none',
                }}
                {...register('blackdate', { required: true, value: data.blackdate ? data.blackdate.slice(0, 10) : '' })}
                type='date'
              />
            )}
            {}
            <div style={{ fontWeight: 'bold' }}>
              <Checkbox
                color='success'
                checked={watch('blue') === true}
                onChange={() => handlechange('blue')}
                {...register('blue')}
              />
              <label>Blue Belt</label>
            </div>
            {watch('blue') && (
              <input
                style={{
                  padding: '10px',
                  width: '200px',
                  marginLeft: '5px',
                  background: 'hsl(0 0% 0%/0.2)',
                  color: 'white',
                  border: 'none',
                }}
                type='date'
                {...register('bluedate', { required: true, value: data.bluedate ? data.bluedate.slice(0, 10) : '' })}
              />
            )}
            <div style={{ fontWeight: 'bold' }}>
              <Checkbox checked={watch('green') === true} color='success' {...register('green')} />
              <label>Green Belt</label>
            </div>
            {watch('green') && (
              <div>
                <input
                  style={{
                    padding: '10px',
                    width: '200px',
                    marginLeft: '5px',
                    background: 'hsl(0 0% 0%/0.2)',
                    color: 'white',
                    border: 'none',
                  }}
                  type='date'
                  placeholder='First name'
                  {...register('greendate', {
                    required: true,
                    value: data.greendate ? data.greendate.slice(0, 10) : '',
                  })}
                />
              </div>
            )} */}
            {colors.map((color) => (
              <div key={color}>
                <div style={{ fontWeight: 'bold' }}>
                  <Checkbox checked={watch(color) === true} color='success' {...register(color)} />
                  <label>{color} Belt</label>
                </div>
                {watch(color) && (
                  <div>
                    <input
                      style={{
                        padding: '10px',
                        width: '200px',
                        marginLeft: '5px',
                        background: 'hsl(0 0% 0%/0.2)',
                        color: 'white',
                        border: 'none',
                      }}
                      type='date'
                      placeholder='First name'
                      {...register(color + 'date', {
                        required: true,
                        value: data.color + 'date' ? data.color + 'date'.slice(0, 10) : '',
                      })}
                    />
                  </div>
                )}
              </div>
            ))}

            {}
            <Button style={{ marginTop: '10px', backgroundColor: '#8338ec' }} type='submit' variant='contained'>
              Add
            </Button>
          </form>
        </div>
      )}
      {isAdded && (
        <div>
          <Button
            onClick={() => setIsAdded(false)}
            style={{ marginTop: '10px', backgroundColor: '#8338ec' }}
            type='submit'
            variant='contained'>
            Add Another
          </Button>
          <Button
            onClick={onclose}
            style={{ marginTop: '10px', backgroundColor: '#8338ec', marginLeft: '20px' }}
            type='submit'
            variant='contained'>
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

export default Details;
