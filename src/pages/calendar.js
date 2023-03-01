import React from 'react'
import Admin from '../components/Admin/admin'
import { Grid, Typography } from '@mui/material';
import CustomHeader from "../component/CustomHeader/index";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Divider } from "@mui/material";
import SearchRounded from "@mui/icons-material/Search";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function UsersManager() {

  const localizer = momentLocalizer(moment);
  const events = [
    {
      start: new Date('2023-03-03T10:00:00'),
      end: new Date('2023-03-03T12:00:00'),
      title: 'Meeting with John',
    },
    {
      start: new Date('2023-03-05T14:00:00'),
      end: new Date('2023-03-05T15:00:00'),
      title: 'Lunch with Sarah',
    },
  ];
  return (
    <>
      <CustomHeader />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={3}>
          <Admin />
        </Grid>
        <Grid sx={{ mt: 6 }} item xs={12} sm={12} md={6} lg={9}>
          <Grid sx={{ mr: 6, display: 'flex', justifyContent: 'space-between' }}>

            <div>
              <Typography variant="h6">Calendar</Typography>
            </div>

            <div style={{ display: 'flex', marginBottom: '5px' }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#edf3f5",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 35,
                  width: 35,
                  marginRight: '20px',
                  cursor: 'pointer'
                }}>
                <SearchRounded
                  style={{
                    fontSize: 20,
                    color: "#000",
                  }}
                />
              </div>
              <HelpOutlineIcon sx={{ marginTop: '5px', cursor: 'pointer' }} />
            </div>
          </Grid>
          <Divider sx={{ width: '96%', mb: 1, mb: 2 }} />
          <Grid sx={{ mr: 6, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}