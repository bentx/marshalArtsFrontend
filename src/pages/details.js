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
  const buddham = [
    'yellow',
    'yellow1',
    'yellow2',
    'blue',
    'blue1',
    'blue2',
    'black',
    'blackBeltDan1',
    'blackBeltDan2',
    'blackBeltDan3',
    'blackBeltDan4',
    'blackBeltDan5',
    'blackBeltDan6',
    'blackBeltDan7',
    'blackBeltDan8',
    'blackBeltDan9',
    'blackBeltDan10',
  ];
  const buddhamMap = {
    yellow: 'Yellow1 Belt',
    yellow1: 'Yellow2 Belt',
    yellow2: 'Yellow3 Belt',
    blue: 'Blue1 Belt',
    blue1: 'Blue2 Belt',
    blue2: 'Blue3 Belt',
    black: 'Black Belt',
    blackBeltDan1: 'Black Belt Dan 1',
    blackBeltDan2: 'Black Belt Dan 2',
    blackBeltDan3: 'Black Belt Dan 3',
    blackBeltDan4: 'Black Belt Dan 4',
    blackBeltDan5: 'Black Belt Dan 5',
    blackBeltDan6: 'Black Belt Dan 6',
    blackBeltDan7: 'Black Belt Dan 7',
    blackBeltDan8: 'Black Belt Dan 8',
    blackBeltDan9: 'Black Belt Dan 9',
    blackBeltDan10: 'Black Belt Dan 10',
  };
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
      } else if (data.type === 'Kung Fu') {
        console.log('selected Kung Fu  ');

        setcolors(kungfucolors);
      } else {
        console.log('selected Buddham');

        setcolors(buddham);
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
      setValue('yellow1', data.yellow1);
      setValue('yellow2', data.yellow2);
      setValue('blue2', data.blue2);
      setValue('blackBeltDan1', data.blackBeltDan1);
      setValue('blackBeltDan2', data.blackBeltDan2);
      setValue('blackBeltDan3', data.blackBeltDan3);
      setValue('blackBeltDan4', data.blackBeltDan4);
      setValue('blackBeltDan5', data.blackBeltDan5);
      setValue('blackBeltDan6', data.blackBeltDan6);
      setValue('blackBeltDan7', data.blackBeltDan7);
      setValue('blackBeltDan8', data.blackBeltDan8);
      setValue('blackBeltDan9', data.blackBeltDan9);
      setValue('blackBeltDan10', data.blackBeltDan10);

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
      if (data.yellow1date) {
        setValue('yellow1date', data.yellow1date.slice(0, 10));
      }
      if (data.yellow2date) {
        setValue('yellow2date', data.yellow2date.slice(0, 10));
      }
      if (data.blue2date) {
        setValue('blue2date', data.blue2date.slice(0, 10));
      }
      if (data.blackBeltdan1date) {
        setValue('blackBeltdan1date', data.blackBeltdan1date.slice(0, 10));
      }
      if (data.blackBeltdan2date) {
        setValue('blackBeltdan2date', data.blackBeltdan2date.slice(0, 10));
      }
      if (data.blackBeltdan3date) {
        setValue('blackBeltdan3date', data.blackBeltdan3date.slice(0, 10));
      }
      if (data.blackBeltdan4date) {
        setValue('blackBeltdan4date', data.blackBeltdan4date.slice(0, 10));
      }
      if (data.blackBeltdan5date) {
        setValue('blackBeltdan5date', data.blackBeltdan5date.slice(0, 10));
      }

      if (data.blackBeltdan6date) {
        setValue('blackBeltdan6date', data.blackBeltdan6date.slice(0, 10));
      }
      if (data.blackBeltdan7date) {
        setValue('blackBeltdan7date', data.blackBeltdan7date.slice(0, 10));
      }

      if (data.blackBeltdan8date) {
        setValue('blackBeltdan8date', data.blackBeltdan8date.slice(0, 10));
      }
      if (data.blackBeltdae9date) {
        setValue('blackBeltdae9date', data.blackBeltdae9date.slice(0, 10));
      }
      if (data.blackBeltdae10date) {
        setValue('blackBeltdae10date', data.blackBeltdae10date.slice(0, 10));
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
      Authorization: `Bearer ${auth}`,
    };
    axios
      .post('https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/addUser/lambda', data, { headers })
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
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
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
                    } else if (getValues('type') === 'Kung Fu') {
                      console.log('selected Kung Fu  ');

                      setcolors(kungfucolors);
                    } else {
                      setcolors(buddham);
                    }
                    console.log('e');

                    console.log(getValues('type'));
                  },
                })}>
                <option value='Kung Fu'>Kung Fu</option>
                <option value='Karate'>Karate</option>
                <option value='Taekwondo'>Taekwondo</option>
                <option value='buddham'>Buddham</option>
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
              <label>Code</label>
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
                placeholder='code'
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
                  {getValues('type') === 'buddham' ? <label>{buddhamMap[color]} </label> : <label>{color} Belt</label>}
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
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
