const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const students=require("./data.js")
const emp=[{id:"1",name:"murali",age:"20"},{id:"2",name:"sai",age:"22"}]

app.use(cors())

app.get("/",(req,res)=>{
	res.send("hi iam i server")
})

app.get("/user",(req,res)=>{
	res.send("hai how r u") 
})

app.get("/emp",(req,res)=>{
	res.json(emp)
})

app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server is in port 4000"))