import { Checkbox } from '@mui/material';
import { padding } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ds from '../assets/teacher.svg';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import axios from 'axios';
import './details.css';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomDatepicker from './customDate';
import './login.css';

const PublicMaster = () => {
  const data = useSelector((state) => state.dataState.masterDetails);
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
      dob: data.dob,
      mobile: data.mobile,
      state: data.state,
      district: data.district,
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
        alignItems: 'center',
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
      {data.map((item, index) => (
        <div
          style={{
            marginTop: '250px',
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            padding: '30px',
            background: 'hsl(0 0% 0%/0.2)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
          }}>
          <h2>Buddham World Martial Arts Federation</h2>
          <img src={atob(item.image)} width='200px' height='200px' />
          <h4 style={{ marginBottom: '0', color: '#8338ec' }}>{item.id}</h4>
          <h4 style={{ margin: '0', marginBottom: '0', color: '#8338ec' }}>{item.name}</h4>
          <h3 style={{ margin: '0' }}>{item.designation}</h3>
        </div>
      ))}
    </div>
  );
};

export default PublicMaster;
