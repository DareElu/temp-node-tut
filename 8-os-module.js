const os = require("os");

//info about the current user
const user = os.userInfo();
console.log(user);

//method returns the systems uptime in seconds >> how long the computer has been running
console.log(`The System Uptime is ${os.uptime()} seconds`);

//data about operating systems
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);
