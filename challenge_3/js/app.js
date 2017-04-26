console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);
app.controller("loanController", loanController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}
 function loanController () {
 	this.amount= 1500;
 	this.apr= 3.25;

 	this.month = function(n){
 		var annualInt = (this.amount * (this.apr/100));
 		console.log(annualInt);
 		var monthInt = (annualInt/12);
 		console.log(monthInt);
 		var accrued_interest = monthInt * n ;
 		console.log(accrued_interest);
 		return accrued_interest;
 	};

 }