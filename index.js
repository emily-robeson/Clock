let date = new Date();

console.log(date)


let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = `${hrs}:${mins}:${secs}`
    // log the time in console
    console.log(time)
  }
  // call the clock function
  clock();


  let period = "AM";
if (hrs == 0) hrs = 12;

if (hrs > 12) {	    
	hrs = hrs - 12;	    
	period = "PM";	  
}

hrs = hrs < 10 ? `0${hrs}` : hrs;
mins = mins < 10 ? `0${mins}` : mins;
secs = secs < 10 ? `0${secs}` : secs;