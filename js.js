
(function() {
	"use strict";
  
	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
	  el = el.trim()
	  if (all) {
		return [...document.querySelectorAll(el)]
	  } else {
		return document.querySelector(el)
	  }
	}
  
	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
	  let selectEl = select(el, all)
	  if (selectEl) {
		if (all) {
		  selectEl.forEach(e => e.addEventListener(type, listener))
		} else {
		  selectEl.addEventListener(type, listener)
		}
	  }
	}
  
	
  
	
  
	/**
	 * Mobile nav toggle
	 */
	on('click', '.mobile-nav-toggle', function(e) {
	  select('#navbar').classList.toggle('navbar-mobile')
	  this.classList.toggle('bi-list')
	  this.classList.toggle('bi-x')
	})
  
	/**
	 * Mobile nav dropdowns activate
	 */
	on('click', '.navbar .dropdown > a', function(e) {
	  if (select('#navbar').classList.contains('navbar-mobile')) {
		e.preventDefault()
		this.nextElementSibling.classList.toggle('dropdown-active')
	  }
	}, true)
  
	
  
  })()
  function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
	
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";}
  
	