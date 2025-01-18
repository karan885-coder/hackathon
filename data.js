const images = ["1","2","3","4","5","6","7","8","9","10","11","12","food1","food2","food3","food4","food5","food6","food7",'food8',"13","tech1","tech2","tech3","tech4","tech5","tech6","tech7","tech8","tech9"];
const newsimg=["1","2","3","4","5","6","7","8","9","10","11","12","13"]
const techimg=["tech1","tech2","tech3","tech4","tech5","tech6","tech7","tech8","tech9"]
const foodimg=["food1","food2","food3","food4","food5","food6","food7",'food8']
const type=["tech","food","news"];

const para=[]
/*const d = new Date();

console.log(d.toDateString()); */
/*
cosnt obj={
   images="";
   type="tech/news/food"
   date="";
   ago read="";

   //same in all obj
   heading="";
   para="";
   footer with admin img and heart;
} */

for(let i=1;i<=20;i++){
    const obj={};
    obj["images"]=images[Math.floor(Math.random()*images.length)];
    obj["type"]="all"
    obj["date"]=new Date().toDateString();
    obj["ago_read"]=Math.floor(Math.random()*10);
    obj["tittle"]="Lorem ipsum dolor sit amet";
    obj["para"]="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta temporibus corporisculpa ipsum dolor....";
   // console.log(obj);

}
for(let i=1;i<=20;i++){
    const obj={};
    obj["images"]=newsimg[Math.floor(Math.random()*newsimg.length)];
    obj["type"]="news"
    obj["date"]=new Date().toDateString();
    obj["ago_read"]=Math.floor(Math.random()*10);
    obj["tittle"]="Lorem ipsum dolor sit amet";
    obj["para"]="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta temporibus corporisculpa ipsum dolor....";
    //console.log(obj);

}
for(let i=1;i<=10;i++){
    const obj={};
    obj["images"]=techimg[Math.floor(Math.random()*techimg.length)];
    obj["type"]="tech"
    obj["date"]=new Date().toDateString();
    obj["ago_read"]=Math.floor(Math.random()*10);
    obj["tittle"]="Lorem ipsum dolor sit amet";
    obj["para"]="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta temporibus corporisculpa ipsum dolor....";
    //console.log(obj);

}
for(let i=1;i<=10;i++){
    const obj={};
    obj["images"]=foodimg[Math.floor(Math.random()*foodimg.length)];
    obj["type"]='food'
    obj["date"]=new Date().toDateString();
    obj["ago_read"]=Math.floor(Math.random()*10);
    obj["tittle"]="Lorem ipsum dolor sit amet";
    obj["para"]="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta temporibus corporisculpa ipsum dolor....";
    console.log(obj);

}



