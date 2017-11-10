let ejsExcel=require('ejsexcel');
let fs=require('fs');

let exBuf=fs.readFileSync(__dirname+'/resource/test.xlsx');
ejsExcel.getExcelArr(exBuf).then(exlJson=>{
    console.log("************  read success:getExcelArr");
    let workBook=exlJson;
    let workSheets=workBook[0];
    console.log(workSheets[0][0]);
    workSheets.forEach((item,index)=>{
            console.log((index+1)+" row:"+item[1]);
    })
}).catch(error=>{
    console.log("************** had error!");
    console.log(error);
});