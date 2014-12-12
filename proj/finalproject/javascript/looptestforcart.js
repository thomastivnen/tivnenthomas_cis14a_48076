//  testing for shoppping cart 
//Paycheck program  
 //variable names and their values 
var hours = parseInt(Math.random()*20+60); 
 var payRate = 10; 
 var ovt = 40; 
 var ovtRate = 15; 
 var doublTime = 60; 
 var doublRate = 20; 
 var triplTime = 70; 
 var triplRate = 30; 
 var payCheck; 
 //paycheck output formula 
 document.write("<h1>Hours worked  = "+hours+" hrs</h1>"); 
 document.write("<h1>Pay rate    =   $"+payRate+"  </h1>"); 
 document.write("<h1>Over time start  =  "+ovt+" hrs</h1>"); 
 document.write("<h1>Double time start  =  "+doublTime+" hrs</h1>"); 
 document.write("<h1>Triple time start  =  "+triplTime+" hrs</h1>"); 
 //paycheck calculation formula for payout 
 if(hours<=ovt)payCheck = hours * payRate; 
 if(hours>triplTime)payCheck = (ovt * payRate) + (20 * ovtRate) + (10 * doublRate) + ((hours-triplTime) * triplRate); 
 if(hours>doublTime)payCheck = (ovt * payRate) + (20 * ovtRate) + ((hours-doublTime) * doublRate); 
 else payCheck = (ovt * payRate) + ((hours-ovt) * ovtRate);  
payCheck=payCheck.toFixed(2); 
 //output 
 document.write("<h1>My paycheck = $"+payCheck+" </h1>"); 