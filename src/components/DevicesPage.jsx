import React, {useEffect, useState} from "react";
import {
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import DeviceList from "./Lists/DeviceList";
import APIClient from "../utils/APIClient";
import { tokens } from "../theme";
import "./index.css";

const DevicesPage = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [devices, setDevices] = useState([])

  useEffect(() => {
    APIClient.Devices.getAllDevices().then(r => {
      setDevices(r.map((device) => ({
            name: device.name,
            id: device.id
          })).sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
      );
    });
  }, []);

  return (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper style={{padding: '20px', textAlign: 'center', marginTop: '60px'}}>
                <Typography variant="h3">Fleet Management Tool</Typography>
                <Typography variant="h5">
                  Click a device to manage its configuration.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{padding: '30px'}}>
                <DeviceList devices={devices}/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
  );

}

export default DevicesPage;
