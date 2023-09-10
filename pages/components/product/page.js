"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';


export default function MultiActionAreaCard({text,para,route,price}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{height:"250px"}}>
      <CardActionArea>
        
        <CardContent style={{height:"170px", backgroundColor:"black", color:"white"}}>
          <Typography gutterBottom variant="h5" component="div" className='text'>
            {text}
          </Typography>
          <Typography variant="body2" color="white" className='para'>
            {para}
          </Typography>
          <Typography variant="body1" color="white" className='para'>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`${route}`}><Button size="small" style={{color:"black"}} className='btn_prod'>
          Visit
        </Button></Link>
      </CardActions>
    </Card>
  );
}
