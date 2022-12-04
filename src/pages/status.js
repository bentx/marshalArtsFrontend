import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import fitness from '../assets/fitness.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BoyIcon from '@mui/icons-material/Boy';
import DiamondIcon from '@mui/icons-material/Diamond';
import { useSelector } from 'react-redux';
const Status = () => {
  const data = useSelector((state) => state.dataState.mobNo);

  console.log(data);
  return (
    <div>
      <img
        style={{
          height: '100vh',
          width: '100%',
          zIndex: '-1',
          position: 'fixed',
          filter: 'blur(3px)',
          opacity: '.5',
        }}
        src={fitness}
      />
      <div style={{ textAlign: 'center' }}>
        <h1>Results</h1>
      </div>
      {data.map((item, index) => (
        <Timeline key={index} position='alternate'>
          <h3 style={{ textAlign: 'center' }}>{item.name}</h3>
          <h4 style={{ textAlign: 'center', marginTop: '-10px' }}>{item.type}</h4>
          {}
          <TimelineItem>
            {item.yellow ? (
              <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                {item.yellowdate}
              </TimelineOppositeContent>
            ) : (
              ''
            )}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ background: 'yellow' }} />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                yellow Belt
              </Typography>
              <Typography>{item.yellow ? 'Completed' : 'in progress ...'}</Typography>
            </TimelineContent>
          </TimelineItem>
          {(item.type === 'Karate' || item.type === 'Kung Fu') && (
            <TimelineItem>
              {item.orange ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.orangedate}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'orange' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  orange Belt
                </Typography>
                <Typography>{item.orange ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          <TimelineItem>
            {item.green ? (
              <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                {item.greendate}
              </TimelineOppositeContent>
            ) : (
              ''
            )}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ background: 'green' }} />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                green Belt
              </Typography>
              <Typography>{item.green ? 'Completed' : 'in progress ...'}</Typography>
            </TimelineContent>
          </TimelineItem>

          {item.type === 'Taekwondo' && (
            <TimelineItem>
              {item.green1 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.green1date}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'green' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  green1 Belt
                </Typography>
                <Typography>{item.green1 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          <TimelineItem>
            {item.blue ? (
              <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                {item.bluedate}
              </TimelineOppositeContent>
            ) : (
              ''
            )}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ background: 'blue' }} />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                bllue Belt
              </Typography>
              <Typography>{item.blue ? 'Completed' : 'in progress ...'}</Typography>
            </TimelineContent>
          </TimelineItem>
          {item.type === 'Kung Fu' && (
            <TimelineItem>
              {item.purple ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.purpledate}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'purple' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  purple Belt
                </Typography>
                <Typography>{item.purple ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'Taekwondo' && (
            <TimelineItem>
              {item.blue1 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blue1date}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'blue' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  blue1 Belt
                </Typography>
                <Typography>{item.blue1 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {(item.type === 'Taekwondo' || item.type === 'Kung Fu') && (
            <TimelineItem>
              {item.red ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.reddate}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'red' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  red Belt
                </Typography>
                <Typography>{item.red ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'Taekwondo' && (
            <TimelineItem>
              {item.red1 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.red1date}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'red' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  red1 Belt
                </Typography>
                <Typography>{item.red1 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'Karate' && (
            <TimelineItem>
              {item.maroon ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.maroondate}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'maroon' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  maroon Belt
                </Typography>
                <Typography>{item.maroon ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {(item.type === 'Karate' || item.type === 'Kung Fu') && (
            <TimelineItem>
              {item.brown ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.browndate}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'brown' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  brown Belt
                </Typography>
                <Typography>{item.brown ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'Karate' && (
            <TimelineItem>
              {item.brownandblack ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.brownandblackdate}
                </TimelineOppositeContent>
              ) : (
                ''
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'brown' }} />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant='h6' component='span'>
                  brownandblack Belt
                </Typography>
                <Typography>{item.brownandblack ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}

          <TimelineItem>
            {item.black ? (
              <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                {item.blackdate}
              </TimelineOppositeContent>
            ) : (
              ''
            )}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ background: 'black' }} />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                black Belt
              </Typography>
              <Typography>{item.black ? 'Completed' : 'in progress ...'}</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ))}
    </div>
  );
};

export default Status;
