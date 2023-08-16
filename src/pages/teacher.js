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
import './login.css';

const Teacher = () => {
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
  const [isSubmit, setSubmit] = useState(false);
  const [image, setImage] = useState({ preview: '', raw: '' });

  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [photoPreview, setPhotoPreview] = useState([]);
  const navigate = useNavigate();

  const submit = async (data) => {
    setSubmit(true);
    console.log(image.preview);
    const formData = new FormData();
    formData.append('image', image.raw);
    formData.append('name', data.name);
    const headers = {
      Authorization: `Bearer ${auth}`,
      'Content-Type': 'multipart/form-data',
    };
    const newdata = {
      name: data.name,
      id: data.id,
      dob: data.dob,
      mobile: data.mobile,
      state: data.state,
      district: data.district,
      designation: data.designation,
      image: btoa(image.raw),
    };
    await axios
      .post('https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/addMaster/lambda', newdata, { headers })
      .then((response) => {
        console.log(response);
        setSubmit(false);
        setIsAdded(true);
      })
      .catch((error) => {
        console.log('Error', error);
        setSubmit(false);
      });
  };

  const onclose = () => {
    navigate('/admin');
  };

  const handleUpload = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }
    }
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
              <label>Id</label>
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
                placeholder='Id'
                {...register('id', { required: true })}
              />
            </div>
            <div
              style={{
                fontWeight: 'bold',
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <label>Dob</label>
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
                {...register('dob', {
                  required: true,
                  //   value: data.color + 'date' ? data.color + 'date'.slice(0, 10) : '',
                })}
              />
            </div>
            <div
              style={{
                fontWeight: 'bold',
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
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
                placeholder='Mobile'
                {...register('mobile', { required: true })}
              />
            </div>
            <div
              style={{
                fontWeight: 'bold',
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <label>Designation</label>
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
                placeholder='Designation'
                {...register('designation', { required: true })}
              />
            </div>
            <div
              style={{
                fontWeight: 'bold',
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <label>State</label>
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
                placeholder='State'
                {...register('state', { required: true })}
              />
            </div>
            <div
              style={{
                fontWeight: 'bold',
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <label>District</label>
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
                placeholder='District'
                {...register('district', { required: true })}
              />
            </div>
            <div
              style={{
                fontWeight: 'bold',
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <label>Photo</label>
              <input
                style={{
                  padding: '10px',
                  width: '200px',
                  marginLeft: '5px',
                  background: 'hsl(0 0% 0%/0.2)',
                  color: 'white',
                  border: 'none',
                }}
                {...register('testPhotos', {
                  validate: {
                    lessThan10MB: (files) => files[0]?.size < 3000000 || 'Max 3MB',
                    // acceptedFormats: (files) =>
                    //   ["image/jpeg", "image/png", "image/gif"].includes(
                    //     files[0]?.type
                    //   ) || "Only PNG, JPEG e GIF"
                  },
                })}
                type='file'
                onChange={handleUpload}
                name='testPhotos'
                accept='image/png, image/jpeg'
                multiple
              />
              <label htmlFor='upload-button'>
                {image.preview ? (
                  <img src={image.preview} alt='dummy' width='300' height='300' />
                ) : (
                  <>
                    <span className='fa-stack fa-2x mt-3 mb-2'>
                      <i className='fas fa-circle fa-stack-2x' />
                      <i className='fas fa-store fa-stack-1x fa-inverse' />
                    </span>
                  </>
                )}
              </label>
              {errors.testPhotos && (
                <span style={{ color: 'red', fontWeight: 'bold' }}>{errors.testPhotos.message}</span>
              )}
            </div>

            {}
            {!isSubmit && (
              <Button style={{ marginTop: '10px', backgroundColor: '#8338ec' }} type='submit' variant='contained'>
                Add
              </Button>
            )}
            {isSubmit && (
              <div
                style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className='spinner-container'>
                <div className='loading-spinner'></div>
              </div>
            )}
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

export default Teacher;
