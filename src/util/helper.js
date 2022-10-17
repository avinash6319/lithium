// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler



const getInfo = {
    name: "Lithium",
    week: "W3D5",
    topic: "Todays Node js Topic -- How to create Module and Export it.",
  };
  
  function getBatchInfo() {
    console.log(
      `Batch name ${getInfo.name} , Current Day ${getInfo.week} , ${getInfo.topic} `
    );
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
  
    console.log(day);
    console.log(month);
    console.log(year);
  }
  module.exports.getBatchInfo = getBatchInfo;