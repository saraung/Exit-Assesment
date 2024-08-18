//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )


//Write your code here

import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'





const Home = () => {


    const [blogs,setBlogs]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:3001/get")
        .then((res)=>{
            console.log(res.data);
            setBlogs(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    },[])
    
    const handleDelete=()=>{
        console.log("btn clicked")
    }
    
    const handleEdit=()=>{
        console.log("btn clicked")
    }
    





  return (
    <div style={{marginTop:"70px",marginLeft:"70px",marginRight:"70px"}}>
      <Grid container spacing={2}>
      {blogs.map((blog) => {
        return(
            <Grid item xs={12} md={4} key={blog._id} >
            <Card  sx={{ maxWidth: 345, maxHeight:300}} className='blogcard'>
            <CardContent >
            <img src={blog.img_url} alt={blog.title} style={{ width: '200px', height: '150px' }} />
            <Typography variant="body2">{blog.title}</Typography>
            <Typography variant="h4">{blog.content}</Typography><br />
            <Button variant='contained' onClick={() => handleDelete(blogs._id)} color='error'>Delete</Button>&nbsp;&nbsp;
            <Button variant='contained' onClick={() => handleEdit(blogs._id)} color='secondary'>Update</Button>
            </CardContent>
            </Card>
            </Grid>
    )
})}
      </Grid>
    </div>
  )
}

export default Home
