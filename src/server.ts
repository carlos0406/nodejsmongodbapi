import express, { response } from 'express';

const app =express();


app.get('/',(req,res)=>{
    return response.json({message:'Projeto basico'})
})

app.listen(3333)