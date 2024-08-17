/*
var tablinks = document.getElementsByClassName('tab-links');

var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
  for(tablinks of tablinks){
      tablink.classList.remove("active-link");
  }
  for(tabcontents of tabcontents){
      tabcontent.classList.remove("active-tab");
  }
}
*/

let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {

  
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        tabcontent.style.display = 'none';
    }



    const activeLink = document.querySelector(`.tab-links[data-tab="${tabname}"]`);
    if (activeLink) {
        activeLink.classList.add("active-link");
    }



    const activeContent = document.querySelector(`.tab-contents[data-tab="${tabname}"]`);
    if (activeContent) {
        activeContent.classList.add("active-tab");
        activeContent.style.display = 'block';
    }
}

// Hide all contents on page load and show the first tab by default
window.onload = function() {
    for (let tabcontent of tabcontents) {
        tabcontent.style.display = 'none'; 
    }
    if (tabcontents.length > 0) {
        tabcontents[0].style.display = 'block';
        tablinks[0].classList.add("active-link");
    }
}