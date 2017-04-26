console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);

function WelcomeController(){
  this.full_name = "Jessica Wood";
  this.age = "30";
  this.city = "Rangely";
  this.state = "CO";
  this.letters = this.full_name.length;
  this.shout = function(name) {
  	return name.toUpperCase() + "!";
  };
}


function ClassController(){
  this.class_name = "WDI";
  this.enrolled_students = ["Jess", "Alex", "Taylor", "Troy", "Jacy", "Bob", "Nate", "Cam", "Alexi", "Billy", "Cole", "Tyler"];
  this.start_date = "3/13/2017";
  this.end_date = "6/2/2017";
  this.daysRemaining = function() {
  	var oneDay = 1000*24*60*60;
  	var months = Date.parse(this.end_date)-Date.now();
  	console.log(months);
    var days = Math.round( months/oneDay );
    console.log(days);
   	 return days;
  	};
}