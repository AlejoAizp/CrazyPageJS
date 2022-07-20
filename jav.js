window.onscroll = function(){
  console.log(document.documentElement.scrollTop);
  if(document.documentElement.scrollTop > 130) {
    document.querySelector('.go-top-container').classList.add('show');
     
  }
  else{
    document.querySelector('.go-top-container').classList.remove('show');
  }
}
 
document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


setInterval (()=>{

document.getElementById('como').innerHTML= ("<b>AIZPITARTE")

},1000)

setInterval (()=>{

document.getElementById('estas').innerHTML= (" <b>JEWERLY.")

},1500)


setInterval (()=>{

document.getElementById('pointer1').innerHTML= ("<b>.")

},1800)

setInterval (()=>{

document.getElementById('pointer2').innerHTML= ("<b>.")

},2000)




