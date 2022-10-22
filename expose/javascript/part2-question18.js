var a = setInterval(oneSecondFunction, 1000);

function oneSecondFunction() {

  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);

}
