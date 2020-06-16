const asyncErrorWrapper = require("express-async-handler");
var nodes7 = require('nodes7');  // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
var conn = new nodes7;
const MachineState = require("../models/MachineState");


var newData;

var doneReading = false;
var doneWriting = false;

var variables = { 

    M1   : 'DB7,BYTE0', // Makine 1
    M2   : 'DB7,BYTE1', // Makine 2
    M3   : 'DB7,BYTE2', // Makine 3
    M4   : 'DB7,BYTE3', // Makine 4
    M5   : 'DB7,BYTE4', // Makine 5
    M6   : 'DB7,BYTE5', // Makine 6
    M7   : 'DB7,BYTE6', // Makine 7
    M8   : 'DB7,BYTE7', // Makine 8
    M9   : 'DB7,BYTE8', // Makine 9
    M10   : 'DB7,BYTE9',  // Makine 10
    M11   : 'DB7,BYTE10', // Makine 11
    M12   : 'DB7,BYTE11', // Makine 12
    M13   : 'DB7,BYTE12', // Makine 13
    M14   : 'DB7,BYTE13', // Makine 14
    M15   : 'DB7,BYTE14'  // Makine 15
};

  var data;

  conn.initiateConnection({port: 102, host: '192.168.200.1', rack: 0, slot: 1}, connected); // slot 2 for 300/400, slot 1 for 1200/1500

  function connected(err) {
    if (typeof(err) !== "undefined") {
      // We have an error.  Maybe the PLC is not reachable.
      console.log(err);
      process.exit();
    }

    conn.setTranslationCB(function(tag) {return variables[tag];}); 	// This sets the "translation" to allow us to work with object names
    conn.addItems(['M1' , 'M2' , 'M3' , 'M4' , 'M5' , 'M6' , 'M7' , 'M8' , 'M9' , 'M10' , 'M11' , 'M12' , 'M13' , 'M14' , 'M15']);     
    
  }

  async function valuesReady(anythingBad, values) {
    if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
    //console.log(values);
    console.log("Done reading.");  
    doneReading = true;



    if (doneWriting) { process.exit(); }
    data = values;
   
    sendDataToDB(values);
    
  }


const readPlcDataWriteToDB = asyncErrorWrapper(async (req,res,next) => { 

    conn.readAllItems(valuesReady);
    newData = await data;
         

    return res
    .status(200)
    .json({
      success :   true,
      data    :   newData
    });
    


    

});



const sendDataToDB = asyncErrorWrapper(async (req,res,next) => {

    let allMachineStates = await MachineState.findOne();
    allMachineStates.Machine.M1 = newData.M1;
    allMachineStates.Machine.M2 = newData.M2;
    allMachineStates.Machine.M3 = newData.M3;
    allMachineStates.Machine.M4 = newData.M4;
    allMachineStates.Machine.M5 = newData.M5;
    allMachineStates.Machine.M6 = newData.M6;
    allMachineStates.Machine.M7 = newData.M7;
    allMachineStates.Machine.M8 = newData.M8;
    allMachineStates.Machine.M9 = newData.M9;
    allMachineStates.Machine.M10 = newData.M10;
    allMachineStates.Machine.M11 = newData.M11;
    allMachineStates.Machine.M12 = newData.M12;
    allMachineStates.Machine.M13 = newData.M13;
    allMachineStates.Machine.M14 = newData.M14;
    allMachineStates.Machine.M15 = newData.M15;
    await allMachineStates.save();
    console.log("PLC'den Alınan Verilere Göre Database Güncellendi");
        
});
 


module.exports = {
    readPlcDataWriteToDB
};