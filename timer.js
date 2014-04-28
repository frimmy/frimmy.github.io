$(function() {
	var today = new Date();
	var moveToNyc = new Date(2014, 0, 16, 5,16);
	
	//seconds are the unit in seconds
	var dateDiff = (moveToNyc - today)/1000;

	//one day in seconds
	var days = 60*60*24;
	
	//one hour in seconds
	var hours = 60*60;

	//on minute in seconds
	var minutes = 60;



	//calc the diff between days 

	$('#countdown').text("Only "+Math.floor(dateDiff/(days)) + " days " +
		Math.floor(dateDiff/hours%24) + " hours " + 
		Math.floor(dateDiff/minutes%60) + " minutes" + 
		Math.floor(dateDiff%seconds) + " seconds!"
});