import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/action';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableView = () => {
  const [data, setData] = React.useState([]);
  const [filtereddata, setfilteredData] = React.useState([]);

  const [selected, setSelected] = React.useState('Kung Fu');
  const auth = useSelector((state) => state.dataState.auth);
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    getData();
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

  const createuser = () => {
    navigate('/details');
  };

  const fetchName = () => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };

    axios
      .get('http://localhost:8080/users/' + search, { headers })
      .then((response) => {
        console.log(response);
        setData(response.data);
        console.log('Error', response.data);

        setfilteredData(response.data.filter((user) => user.type === selected));
      })
      .catch((error) => {
        console.log('Error', error);
      });

    console.log(auth.token);
  };
  const getData = () => {
    const headers = {
      Authorization: `Bearer ${auth.token}`,
    };

    axios
      .get('http://localhost:8080/users', { headers })
      .then((response) => {
        console.log(response);
        setData(response.data);
        console.log('Error', response.data);

        setfilteredData(response.data.filter((user) => user.type === 'Kung Fu'));
      })
      .catch((error) => {
        console.log('Error', error);
      });

    console.log(auth.token);
  };
  const editUser = (user) => {
    console.log(user);
    dispatch(setUser(user));
    navigate('/details?edit=yes');
  };
  const deleteUser = (userID) => {
    console.log('WWWWWWW');
    let headers = {
      Authorization: `Bearer ${auth.token}`,
    };
    let del = filtereddata.filter((user) => user.id === userID);
    console.log(del[0]);
    axios
      .delete('http://localhost:8080/user', { headers, data: del[0] })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('Error', error);
      });

    console.log(auth.token);
    setfilteredData(filtereddata.filter((user) => user.id !== userID));
    console.log(data.filter((user) => user.id !== userID));

    setData(filtereddata.filter((user) => user.id !== userID));
  };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Button onClick={createuser} style={{ margin: '10px', backgroundColor: '#8338ec' }} variant='contained'>
            create
          </Button>
        </div>
        <div>
          <div style={{ marginTop: '4px' }}>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              style={{ padding: '10px', width: '200px' }}
              type='text'
              placeholder='First name'
            />
            <Button onClick={fetchName} style={{ margin: '10px', backgroundColor: '#8338ec' }} variant='contained'>
              Search
            </Button>
          </div>
        </div>
      </div>
      <label>
        <select
          value={selected}
          onChange={(event) => {
            setSelected(event.target.value);
            console.log(event.target.value);
            setfilteredData(data.filter((user) => user.type === event.target.value));
          }}
          style={{
            margin: '5px',
            padding: '10px',
            width: '220px',
            marginLeft: '5px',
            background: 'hsl(0 0% 0%/0.7)',
            color: 'white',
            border: 'none',
          }}>
          <option value='Kung Fu'>Kung Fu</option>
          <option value='Karate'>karate</option>
          <option value='Taekwondo'>Taekwondo</option>
        </select>
      </label>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Mobile</TableCell>
              <TableCell align='right'>Yellow</TableCell>
              <TableCell align='right'>Green</TableCell>
              {(selected === 'Karate' || selected === 'Kung Fu') && <TableCell align='right'>Orange</TableCell>}
              {selected === 'Taekwondo' && <TableCell align='right'>Green1</TableCell>}
              <TableCell align='right'>Blue</TableCell>
              {selected === 'Kung Fu' && <TableCell align='right'>Purple</TableCell>}
              {selected === 'Taekwondo' && <TableCell align='right'>Blue1</TableCell>}
              {(selected === 'Taekwondo' || selected === 'Kung Fu') && <TableCell align='right'>Red</TableCell>}
              {selected === 'Taekwondo' && <TableCell align='right'>Red1</TableCell>}
              {selected === 'Karate' && <TableCell align='right'>Maroon</TableCell>}
              {(selected === 'Karate' || selected === 'Kung Fu') && <TableCell align='right'>Brown</TableCell>}
              {selected === 'Karate' && <TableCell align='right'>BlackandBrown</TableCell>}
              <TableCell align='right'>Black</TableCell>
              <TableCell align='right'>Edit</TableCell>
              <TableCell align='right'>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtereddata.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.mobile}</TableCell>
                <TableCell style={{ color: 'yellow' }} align='right'>
                  {row.yellow ? <CheckIcon /> : <ClearIcon />}
                </TableCell>
                <TableCell style={{ color: 'green' }} align='right'>
                  {row.green ? <CheckIcon /> : <ClearIcon />}
                </TableCell>
                {(selected === 'Karate' || selected === 'Kung Fu') && (
                  <TableCell style={{ color: 'orange' }} align='right'>
                    {row.orange ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}
                {selected === 'Taekwondo' && (
                  <TableCell style={{ color: 'green' }} align='right'>
                    {row.green1 ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}
                <TableCell style={{ color: 'blue' }} align='right'>
                  {row.blue ? <CheckIcon /> : <ClearIcon />}
                </TableCell>
                {selected === 'Kung Fu' && (
                  <TableCell style={{ color: 'purple' }} align='right'>
                    {row.purple ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}
                {selected === 'Taekwondo' && (
                  <TableCell style={{ color: 'blue' }} align='right'>
                    {row.blue1 ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}
                {(selected === 'Taekwondo' || selected === 'Kung Fu') && (
                  <TableCell style={{ color: 'red' }} align='right'>
                    {row.red ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}
                {selected === 'Taekwondo' && (
                  <TableCell style={{ color: 'red' }} align='right'>
                    {row.red1 ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}
                {selected === 'Karate' && (
                  <TableCell style={{ color: 'maroon' }} align='right'>
                    {row.maroon ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}
                {(selected === 'Karate' || selected === 'Kung Fu') && (
                  <TableCell style={{ color: 'brown' }} align='right'>
                    {row.brown ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}
                {selected === 'Karate' && (
                  <TableCell style={{ color: 'brown' }} align='right'>
                    {row.brownandblack ? <CheckIcon /> : <ClearIcon />}
                  </TableCell>
                )}

                <TableCell align='right'>{row.black ? <CheckIcon /> : <ClearIcon />}</TableCell>
                <TableCell onClick={() => editUser(filtereddata[index])} align='right'>
                  {<EditIcon />}
                </TableCell>

                <TableCell onClick={() => deleteUser(row.id)} align='right'>
                  {<DeleteForeverIcon style={{ color: 'red' }} />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableView;
