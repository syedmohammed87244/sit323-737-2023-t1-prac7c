const { json } = require('express');
const express = require('express'); 
const app = express(); 
const add = (n1,n2) => {
    return n1+n2;
}
const sub = (n1,n2) => {
    return n1-n2;
}
const div = (n1,n2) => {
    return n1/n2;
}
const mul = (n1,n2) => {
    return n1*n2;
}
app.get("/add",(req,res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)){
            throw new Error("n1 icorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 icorrectly defined");
        }
        if(n1 == NaN || n2 == NaN){
            console.log()
            throw new Error("Parsing Error")
        }
        const result = add(n1,n2);
        res.status(200).json({statuscocde:200,data : result});
        logger.log({
            level: "info", 
            message: `The provided numbers ${n1} & ${n2} have been added, the result is ${result}`,
    });
    } 
    catch(error) {
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
        logger.log({
            level: "info", 
            message: `Error while adding the numbers!`,
    });
    }
});
app.get("/sub",(req,res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)){
            throw new Error("n1 icorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 icorrectly defined");
        }
        if(n1 == NaN || n2 == NaN){
            console.log()
            throw new Error("Parsing Error")
        }
        const result = sub(n1,n2);
        res.status(200).json({statuscocde:200,data : result});
        logger.log({
            level: "info", 
            message: `The provided numbers ${n1} & ${n2} have been subtracted, the result is ${result}`,
    });
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
        logger.log({
            level: "info", 
            message: `Error while subtracting the numbers!`,
    });
    }
});
app.get("/div",(req,res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)){
            throw new Error("n1 icorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 icorrectly defined");
        }
        if(n1 == NaN || n2 == NaN){
            console.log()
            throw new Error("Parsing Error")
        }
        const result = div(n1,n2);
        res.status(200).json({statuscocde:200,data : result});
        logger.log({
            level: "info", 
            message: `The provided numbers ${n1} & ${n2} have been divided, the result is ${result}`,
    });
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
        logger.log({
            level: "info", 
            message: `Error while dividing the numbers!`,
    });
    }
});
app.get("/mul",(req,res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)){
            throw new Error("n1 icorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 icorrectly defined");
        }
        if(n1 == NaN || n2 == NaN){
            console.log()
            throw new Error("Parsing Error")
        }
        const result = mul(n1,n2);
        res.status(200).json({statuscocde:200,data : result});
        logger.log({
            level: "info", 
            message: `The provided numbers ${n1} & ${n2} have been multiplied, the result is ${result}`,
    });
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
        logger.log({
            level: "info", 
            message: `Error while multiplying the numbers!`,
    });
    }
});
const port = 3040;
app.listen(port,()=>{
    console.log("hello i'm listening to port"+port);
})

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
            winston.format.json(),
            winston.format.timestamp()
),
    defaultMeta: {service: 'user-service' },
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
    ]
});

if(process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        ),
    }));
}