import { Grid } from '@mui/material';
import { padding } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const [data, setData] = useState([]);
  const auth = useSelector((state) => state.dataState.auth);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };

    axios
      .get('http://localhost:8080/test', { headers })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log('Error', error);
      });

    console.log(auth.token);
    // axios
    //   .get('http://localhost:8080/test', {
    //     headers: {
    //       'content-type': 'applocation/json',
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // dispatch(setAuthToken(response.data));
    //     // navigate('/admin');
    //   })
    //   .catch((error) => {
    //     console.log('Error myr', error);
    //   });
  }, []);
  return (
    <div style={{ margin: '20px', padding: '20px', boxShadow: '0px 0px 15px -10px rgba(0,0,0,.75)' }}>
      <div>
        <h3>Active User </h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey='month' stroke={'#5550bd'} />
            <Line type='monotone' dataKey='activeuser' stroke={'#5550bd'} />
            <Tooltip />
            <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
