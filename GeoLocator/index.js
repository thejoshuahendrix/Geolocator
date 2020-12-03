const express = require("express");
const Datastore = require("nedb");

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));

const database = new Datastore("database.db");
database.loadDatabase();
app.use(express.json({ limit: "1mb" }));
app.post("/api", (request, response) => {
  console.log("I got a request!");
  console.log(request.body);
  const data = request.body;

  const timestamp=Date.now();//getcurrenttime
  data.timestamp= timestamp;//putcurrenttime
  database.insert(data);

  response.json(data);

/*
  response.json({
    status: "success",
    timestamp: timestamp,  //send timestamp to client
    latitude: data.lat,
    longitude: data.lon,
  });
  */
 app.get('/api',(request,response)=>{
     database.find({},(err,data)=>{//findwillfinddata,wefindall{}
 if(err){
     response.end();
     return;
    }
    response.json(data);//Wesenddatatoclenets});
});
})})
