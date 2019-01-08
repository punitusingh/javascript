const fs=require('fs');
const csv=require('fast-csv');
var stream = fs.createReadStream("header.csv");

var csvStream = csv()
    .on("data", function(data){
        //console.log(data[0].split("\t"));
        const x = data[0].split("\t");
        console.log(`update pros_header set name="${x[2]}" where HEADER_ID="${x[1]}"`);
    })
    .on("end", function(){
        console.log("done");
    });

stream.pipe(csvStream);