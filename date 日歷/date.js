// 抓年月日
var date=new Date();
var month=date.getMonth();
var year=date.getFullYear();
var day=date.getDate();

// 改成文字型態
var dayName=date.toLocaleString(navigator.language,{weekday:'long'});
var monthName=date.toLocaleString(navigator.language,{month:'long'});

// 英文轉中文

var c_dayName;
var c_monthName;

//抓星期
if(dayName=="Monday"){
    c_dayName='星期一';
}
else if(dayName=="Tuesday"){
    c_dayName='星期二';
}
else if(dayName=="Wednesday"){
    c_dayName='星期三';
}
else if(dayName=="Thursday"){
    c_dayName='星期四';
}
else if(dayName=="Friday"){
    c_dayName='星期五';
}
else if(dayName=="Saturday"){
    c_dayName='星期六';
}
else {
    c_dayName='星期日';
}
/*
//抓月份
if(monthName =='January'){
    c_monthName='一月';
}
else if(monthName =="February"){
    c_monthName='二月';
}
else if(monthName =='March'){
    c_monthName='三月';
}
else if(monthName =='April'){
    c_monthName='四月';
}
else if(monthName =='May'){
    c_monthName='五月';
}
else if(monthName =='June'){
    c_monthName='六月';
}
else if(monthName =='July'){
    c_monthName='七月';
}
else if(monthName =='Augus'){
    c_monthName='八月';
}
else if(monthName =='September'){
    c_monthName='九月';
}
else if(monthName =='October'){
    c_monthName='十月';
}
else if(monthName =='November'){
    c_monthName='十一月';
}
else{
    c_monthName='十二月';
}*/
console.log(monthName);
//呈現內容

document.getElementById('day').innerHTML=day;
document.getElementById('year').innerHTML=year;
/*document.getElementById('monthName').innerHTML=c_monthName;*/
document.getElementById('monthName').innerHTML=monthName;
document.getElementById('dayName').innerHTML=c_dayName;