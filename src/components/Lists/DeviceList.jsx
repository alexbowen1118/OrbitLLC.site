import {
    Button,
    ButtonGroup,
    useTheme,
} from '@mui/material';
import React, {useEffect, useState} from "react";
import {tokens} from "../../theme";
import "../index.css";
import APIClient from "../../utils/APIClient";

const DeviceList = (props) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
            style={{width: '100%', boxSizing: 'border-box'}}
        >
            {props.devices.map((device, index) => (
                <Button
                    key={index}
                    style={{
                        width: '100%',
                        height: '50px',
                        fontSize: '16px',
                    }}
                >
                    {device.name}
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default DeviceList;