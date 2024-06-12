import React from 'react';
import { Card } from '@mui/material';
import { CardContent, Typography } from '@mui/material';

export default function ExpenseDate({ date }) {
    const month = date.toLocaleString("en-US", { month: "long" })
    const day = date.toLocaleString("en-US", { day: "2-digit" })
    const year = date.toLocaleString("en-US", { year: "numeric" })
    return (
        <Card>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant='h5'>
                    {month}
                </Typography >
                <Typography variant='h6'>
                    {year}
                </Typography>
                <Typography variant='h4'>
                    {day}
                </Typography>
              
            </CardContent>
        </Card>
         
    )

} 