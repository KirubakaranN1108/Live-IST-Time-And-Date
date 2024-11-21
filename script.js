let ampm=document.getElementById('ampm');
let week={1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",7:"Sunday"}
function datefunction(){
    let date=new Date();
    let day=date.getDate();
    let month=(date.getMonth())+1;
    let year=date.getFullYear()
    let weekday=date.getDay()
    // console.log(day,month,year)

    document.getElementById('day').innerHTML=day
    document.getElementById('month').innerHTML=month
    document.getElementById('year').innerHTML=year
    document.getElementById('weekday').innerHTML=week[weekday]
}
function timefunction(){
    let time=new Date();
    let hr=time.getHours();
    let min=zero(time.getMinutes());
    let sec=zero(time.getSeconds());
    if(hr>=12){
        ampm.innerHTML='PM';
        if (hr>12) hr-=12;
    }
    else{
        ampm.innerHTML='AM';
    }
    if(hr===0)hr=12;
    document.getElementById('hours').innerHTML=zero(hr);
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
}
function zero(num){
    return (num<10)?'0'+num:num;
}

setInterval(timefunction,500);
setInterval(datefunction,500);
