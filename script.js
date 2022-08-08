// Add event listener to save user input to Local Storage when clicking the save button
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

// This tells you what gets put into local storage
     localStorage.setItem(time, text);
    })
    
   
 // Apply Moment time tracker 
    function timeTracker() {
        var timeNow = moment().hour();
        timeTracker();
    }

// Created variable to display users current date and time using Moment  
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDate").html(todayDate);



        })
    // })

// Local Storage for previously input tasks
   
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

	



