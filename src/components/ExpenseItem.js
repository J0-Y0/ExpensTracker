import React from 'react';
import { Box, Card } from '@mui/material';
import { CardContent, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem({expense}) {
    const {date, amount,title} = expense;
  
    return (
        
        <Card sx={{marginY:2, backgroundColor:"lightgray"}}    >
            <CardContent sx={{p:0,m:0}}  >
                <Grid container sx={{ p: 0, }}>
                    <Grid item xs={12} sm={3} >
                        <Typography variant="h6" component="h2">
                            <ExpenseDate date={date}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box  component="section" >
                            <Typography variant="h6" component="h2" >

                                {title}
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Typography variant="h6" component="h2" >
                            $ {amount}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>)


}

