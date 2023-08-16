import express from "express"
import {v4 as uuidv4} from "uuid"
import bcrypt from "bcrypt"


const users = [{id:'1',email:'moshe@gmail',password:'messi'},
{id:'2',email:'davud@gmail',password:'ijoij'},
{id:'3',email:'iziak@gmail',password:'lonoi'}]

const app = express()
app.use(express.json())
app.get('/users', (req, res) => {
    
    res.send(users[0],users[1],users[2])
    
})



app.get('/users/:id', (req, res) => {
    const id = req.params.id
    for (let obj of users){
        if((obj.id)===id){
            res.send(obj)
        }
    }
})


app.post('/users/',(req, res) =>{
    add_user(req)
    res.send(users[(users.length)-1])
   
})

app.put('/users/',(req, res) =>{
    const id = req.body.id
    for (let obj of users){
        if((obj.id)===id){
            obj.email = req.body.email
            obj.password = req.body.password
        }
    }
    res.send(users)
})


app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i<users.length; i++){
        if((users[i].id)===id){
            users.splice(i,1)
        }
    }
    res.send(users)
})

app.post('/users/name',(req, res) =>{
    const email = req.body.email
    const password = req.body.password
    for (let obj of users){
        if(obj.email===email&&bcrypt.compareSync(password,obj.password)){
           res.send('User is connected')
        }
    }
    res.send('wrong credentials')
})

function add_user(req){
    const password = req.body.password
    const hash = bcrypt.hashSync(password, 10);
    const email = req.body.email
    const obj = {id:uuidv4(),email,password:hash}
    users.push(obj)
}

app.listen(3000, () => {

    console.log(`Server is up and running on port: 3000`);
    })




