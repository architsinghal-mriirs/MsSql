// reuire the dependencies just installed from above commands
const sql = require('mssql/msnodesqlv8');

//create a database configuration 

var config = {

       server : "DESKTOP-CG9DECV\\SQLEXPRESS", // eg:: 'DESKTOP_mjsi\\MSSQLEXPRESS'
      databse: "master",
    //   user :'sa',      // please read above note
    //   password:"your password",   // please read above note
     options :{
       trustedConnection:true,
     },
    driver:"msnodesqlv8",
 }

//note: please make double ( \\ ) before your instance name
//if you get confused then please watch the video link at the bottom you can see in details about this

// now make the connections as 

// sql.connect(config,function(err){
//     if(err)conole.log(err)

//     // make a request as

//     var request = new sql.Request();

//    //make the query

//     var query = "your query goes here";  // eg : "select * from tbl_name"

//     request.query(query,funnction(err,records){
//         if(err) 
//         {
//             console.log(err);
//         }else{
//            console.log(records);
//            //  your out put as records  
//         }
//     })

// })

sql.connect(config, function(err){
    if(err){
        console.log(err)
    }
    const request = new sql.Request()
    request.query("SELECT * FROM Persons", function(err,records){
        if(err){
            console.log(err)
        }else{
            console.log(records)
        }
    })
})