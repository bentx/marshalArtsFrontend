import { Grid } from '@mui/material';
import React from 'react';
import Chart from './chart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { width } from '@mui/system';
import TableView from './table';
import adminimg from '../assets/admin.svg';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const createuser = () => {
    navigate('/details');
  };

  return (
    <>
      <img
        style={{
          height: '100vh',
          width: '100%',
          zIndex: '-2',
          position: 'fixed',
          filter: 'blur(3px)',
          opacity: '.5',
        }}
        src={adminimg}
      />
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              margin: '10px',
            }}>
            <Card sx={{ minWidth: 275, margin: '4px', backgroundColor: '#8338ec' }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <h4>Total Users</h4>
                <h1>1000</h1>
              </div>
            </Card>
            <Card sx={{ minWidth: 275, margin: '4px' }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <h4>Today Total</h4>
                <h1>100</h1>
              </div>
            </Card>
          </div>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <Chart />
        </Grid>
      </Grid>
      <div>
        {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Button onClick={createuser} style={{ margin: '10px', backgroundColor: '#8338ec' }} variant='contained'>
              create
            </Button>
          </div>
          <div>
            <div style={{ marginTop: '4px' }}>
              <input style={{ padding: '10px', width: '200px' }} type='text' placeholder='First name' />
              <Button style={{ margin: '10px', backgroundColor: '#8338ec' }} variant='contained'>
                Search
              </Button>
            </div>
          </div>
        </div> */}
        <TableView />
      </div>
    </>
  );
};

export default Admin;
