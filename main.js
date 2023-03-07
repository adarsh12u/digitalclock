// setInterval(()=>{
//   let a=new Date()
//   time.innerHTML=a
// },1000)

setInterval(() => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
  
    time.innerHTML = today.toLocaleString("en-US"); // 9/17/2016
  
  }, 1000)
  