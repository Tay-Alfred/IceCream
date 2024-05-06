"use strict";

//display variables
const radioCup = document.getElementById("radioCup");
const toppingsBox = document.getElementById("toppingsBox");
const radioCone =document.getElementById("radioCone");

 // Add event listener to the cup radio button
 radioCup.addEventListener('change', function() {
    // If cup radio button is checked, show toppings box, otherwise hide it
    toppingsBox.style.display = this.checked ? 'block' : 'none';
 })

    radioCone.addEventListener('change', function(){
        toppingsBox.style.display = this.checked ? 'none' : 'block';
    });