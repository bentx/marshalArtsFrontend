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
import './login.css';
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
  const [masterData, setMasterData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isStudent, setIsStudent] = React.useState(true);
  const [filtereddata, setfilteredData] = React.useState([]);

  const [selected, setSelected] = React.useState('Kung Fu');
  const auth = useSelector((state) => state.dataState.auth);
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isStudent) {
      getData();
    }
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

  React.useEffect(() => {
    if (!isStudent) {
      getMasterData();
    }
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
  }, [isStudent]);

  const createuser = () => {
    if (isStudent) {
      navigate('/details');
    } else {
      navigate('/masterDetails');
    }
  };

  const fetchName = () => {
    const headers = {
      Authorization: `Bearer ${auth}`,
    };
    if (isStudent) {
      axios
        .post('https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/user/' + search, 'data', { headers })
        .then((response) => {
          console.log(response);
          setData(response.data);
          console.log('Error', response.data);

          setfilteredData(response.data.filter((user) => user.type === selected));
        })
        .catch((error) => {
          console.log('Error', error);
        });
    } else {
      axios
        .post('https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/master/' + search, 'data', { headers })
        .then((response) => {
          console.log(response);
          setMasterData(response.data);
          console.log('success', response.data);
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }
    console.log('token' + auth);
  };

  const getMasterData = () => {
    const headers = {
      Authorization: `Bearer ${auth}`,
    };
    setLoading(true);
    axios
      .post('https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/masters/lambda', 'data', { headers })
      .then((response) => {
        console.log(response);
        setMasterData(response.data);
        console.log('success', response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error', error);
        setLoading(true);
      });

    console.log(auth);
  };
  const getData = () => {
    const headers = {
      Authorization: `Bearer ${auth}`,
    };
    setLoading(true);

    axios
      .post('https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/users/lambda', 'data', { headers })
      .then((response) => {
        console.log(response);
        setData(response.data);
        console.log('Error', response.data);

        setfilteredData(response.data.filter((user) => user.type === 'Kung Fu'));
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error', error);
        setLoading(false);
      });

    console.log(auth);
  };
  const editUser = (user) => {
    console.log(user);
    dispatch(setUser(user));
    navigate('/details?edit=yes');
  };
  const deleteUser = (userID) => {
    let headers = {
      Authorization: `Bearer ${auth}`,
    };
    let del = filtereddata.filter((user) => user.id === userID);
    console.log(del[0]);
    axios
      .post('https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/deleteUser/lambda', del[0], {
        headers,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('Error', error);
      });

    console.log(auth);
    setfilteredData(filtereddata.filter((user) => user.id !== userID));
    console.log(data.filter((user) => user.id !== userID));

    setData(data.filter((user) => user.id !== userID));
  };

  const deleteMaster = (id) => {
    let headers = {
      Authorization: `Bearer ${auth}`,
    };
    axios
      .post(
        'https://5nauwalfbc.execute-api.ap-south-1.amazonaws.com/dev/deleteMaster/lambda',
        { id: id },
        {
          headers,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('Error', error);
      });

    console.log(auth);
    setMasterData(masterData.filter((user) => user.id !== id));
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
          <Button
            onClick={() => setIsStudent(true)}
            style={{ margin: '10px', backgroundColor: '#8338ec' }}
            variant='contained'>
            Student
          </Button>
          <Button
            onClick={() => setIsStudent(false)}
            style={{ margin: '10px', backgroundColor: '#8338ec' }}
            variant='contained'>
            Master
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
      {isStudent && (
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
            <option value='buddham'>Buddham</option>
          </select>
        </label>
      )}
      {isStudent && !loading && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Mobile</TableCell>
                <TableCell align='right'> {selected === 'buddham' ? 'Yellow1' : 'yellow'}</TableCell>
                {selected === 'buddham' && <TableCell align='right'>Yellow2</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>Yellow3</TableCell>}
                {(selected === 'Karate' || selected === 'Kung Fu') && <TableCell align='right'>Orange</TableCell>}
                {selected != 'buddham' && <TableCell align='right'>Green</TableCell>}
                {selected === 'Taekwondo' && <TableCell align='right'>Green1</TableCell>}
                <TableCell align='right'>{selected === 'buddham' ? 'Blue1' : 'Blue'}</TableCell>
                {selected === 'buddham' && <TableCell align='right'>Blue2</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>Blue3</TableCell>}
                {selected === 'Kung Fu' && <TableCell align='right'>Purple</TableCell>}
                {selected === 'Taekwondo' && <TableCell align='right'>Blue1</TableCell>}
                {(selected === 'Taekwondo' || selected === 'Kung Fu') && <TableCell align='right'>Red</TableCell>}
                {selected === 'Taekwondo' && <TableCell align='right'>Red1</TableCell>}
                {selected === 'Karate' && <TableCell align='right'>Maroon</TableCell>}
                {(selected === 'Karate' || selected === 'Kung Fu') && <TableCell align='right'>Brown</TableCell>}
                {selected === 'Karate' && <TableCell align='right'>BlackandBrown</TableCell>}
                <TableCell align='right'>Black</TableCell>
                {selected === 'buddham' && <TableCell align='right'>BBD1</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD2</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD3</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD4</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD5</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD6</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD7</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD8</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD9</TableCell>}
                {selected === 'buddham' && <TableCell align='right'>BBD10</TableCell>}
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
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'yellow' }} align='right'>
                      {row.yellow1 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'yellow' }} align='right'>
                      {row.yellow2 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {(selected === 'Karate' || selected === 'Kung Fu') && (
                    <TableCell style={{ color: 'orange' }} align='right'>
                      {row.orange ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected != 'buddham' && (
                    <TableCell style={{ color: 'green' }} align='right'>
                      {row.green ? <CheckIcon /> : <ClearIcon />}
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
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'blue' }} align='right'>
                      {row.blue1 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'blue' }} align='right'>
                      {row.blue2 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
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

                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan1 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan2 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan3 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan4 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan5 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan6 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan7 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan8 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan9 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
                  {selected === 'buddham' && (
                    <TableCell style={{ color: 'black' }} align='right'>
                      {row.blackBeltdan10 ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  )}
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
      )}
      {!isStudent && !loading && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Photo</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Dob</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>State</TableCell>
                <TableCell>District</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {masterData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component='th' scope='row'>
                    <img src={atob(row.image)} width='100px' height='100px' />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell component='th' scope='row'>
                    {row.dob.substring(0, 10)}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.designation}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.state}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.district}
                  </TableCell>

                  <TableCell onClick={() => deleteMaster(row.id)} align='right'>
                    {<DeleteForeverIcon style={{ color: 'red' }} />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {loading && (
        <div
          style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          className='spinner-container'>
          <div className='loading-spinner'></div>
        </div>
      )}
    </div>
  );
};

export default TableView;
