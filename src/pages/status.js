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
                {item.yellowdate.substring(0, 11)}
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
                {item.type === 'buddham' ? 'yellow1 Belt' : 'yellow Belt'}
              </Typography>
              <Typography>{item.yellow ? 'Completed' : 'in progress ...'}</Typography>
            </TimelineContent>
          </TimelineItem>
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.yellow1 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.yellow1date.substring(0, 11)}
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
                  yellow2 Belt
                </Typography>
                <Typography>{item.yellow ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.yellow2 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.yellow2date.substring(0, 11)}
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
                  yellow3 Belt
                </Typography>
                <Typography>{item.yellow2 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {(item.type === 'Karate' || item.type === 'Kung Fu') && (
            <TimelineItem>
              {item.orange ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.orangedate.substring(0, 11)}
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
          {item.type != 'buddham' && (
            <TimelineItem>
              {item.green ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.greendate.substring(0, 11)}
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
          )}
          {item.type === 'Taekwondo' && (
            <TimelineItem>
              {item.green1 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.green1date.substring(0, 11)}
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
                {item.bluedate.substring(0, 11)}
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
                {item.type === 'buddham' ? 'blue1' : 'blue Belt'}
              </Typography>
              <Typography>{item.blue ? 'Completed' : 'in progress ...'}</Typography>
            </TimelineContent>
          </TimelineItem>
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blue1 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blue1date.substring(0, 11)}
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
                  blue2 Belt
                </Typography>
                <Typography>{item.blue1 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blue2 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blue2date.substring(0, 11)}
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
                  blue3 Belt
                </Typography>
                <Typography>{item.blue2 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'Kung Fu' && (
            <TimelineItem>
              {item.purple ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.purpledate.substring(0, 11)}
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
                  {item.blue1date.substring(0, 11)}
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
                  {item.reddate.substring(0, 11)}
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
                  {item.red1date.substring(0, 11)}
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
                  {item.maroondate.substring(0, 11)}
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
                  {item.browndate.substring(0, 11)}
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
                  {item.brownandblackdate.substring(0, 11)}
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
                {item.blackdate.substring(0, 11)}
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

          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan1 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan1date.substring(0, 11)}
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
                  black belt dan1
                </Typography>
                <Typography>{item.blackBeltdan1 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan2 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan2date.substring(0, 11)}
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
                  black belt dan2
                </Typography>
                <Typography>{item.blackBeltdan2 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}

          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan3 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan3date.substring(0, 11)}
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
                  black belt dan3
                </Typography>
                <Typography>{item.blackBeltdan3 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan4 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan4date.substring(0, 11)}
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
                  black belt dan4
                </Typography>
                <Typography>{item.blackBeltdan4 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan5 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan5date.substring(0, 11)}
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
                  black belt dan5
                </Typography>
                <Typography>{item.blackBeltdan5 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan6 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan6date.substring(0, 11)}
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
                  black belt dan6
                </Typography>
                <Typography>{item.blackBeltdan6 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan7 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan7date.substring(0, 11)}
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
                  black belt dan7
                </Typography>
                <Typography>{item.blackBeltdan7 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan8 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan8date.substring(0, 11)}
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
                  black belt dan8
                </Typography>
                <Typography>{item.blackBeltdan8 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}

          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan9 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan9date.substring(0, 11)}
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
                  black belt dan9
                </Typography>
                <Typography>{item.blackBeltdan9 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {item.type === 'buddham' && (
            <TimelineItem>
              {item.blackBeltdan10 ? (
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                  {item.blackBeltdan10date.substring(0, 11)}
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
                  black belt dan10
                </Typography>
                <Typography>{item.blackBeltdan10 ? 'Completed' : 'in progress ...'}</Typography>
              </TimelineContent>
            </TimelineItem>
          )}
        </Timeline>
      ))}
    </div>
  );
};

export default Status;
