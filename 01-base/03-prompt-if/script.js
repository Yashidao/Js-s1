
// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
  // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
  console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
  console.log('Hello Keller programmer');

  // YOUR CODE HERE
  
  let cake = prompt("Do you want some cake?", "yes or no");
  if(cake === "yes"){
    alert("Nice! We all love cakes!");
  }
  else if(cake === "no"){
    alert("More cake for me then :p");
  }
  else{
    alert("You've made a mistake, it's <yes> or <no>.");
  }
})();

