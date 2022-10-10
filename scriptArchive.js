


const date4 = window.document.querySelector("#datepicker-1"),
fp1 = new flatpickr(date4);
const date3 = window.document.querySelector("#datepicker-2"),
fp2 = new flatpickr(date3);


$(".archiv-datepicker").flatpickr({
    minDate: "2015-01-01",// hätte funktionieren sollen tuts aber nicht 
    maxDate: "today"});


$(document).ready(function () {
    $(document).on("click", "#klick", function () {
        const startDate = $("#datepicker-1").val();
        const endDate = $("#datepicker-2").val();
        $.ajax({
            url: "https://api.nasa.gov/planetary/apod",
            type: "get",
            data: {
                start_date: startDate,
                end_date: endDate,
                api_key: "WeJQydmgkMuduN5VfyYepdvelVujh0GjH4e7yJro"
            },
            success: function (response) {
                response.forEach(function(item) {
                   $(".listContainer").append('<div class="archive-item"><p>'+ item.date+' <a href="#">'+ item.title +'</a> </p> </div>')
                });
            },
            error: function (xhr) {
                console.log("Error message", xhr);
            }
        });
    });
    $(document).on("click", "#buttontoday", function () {
        const dateToday = Date.now();
        $.ajax({
            url: "https://api.nasa.gov/planetary/apod",
            type: "get",
            data:{
                date: "",
                api_key: "WeJQydmgkMuduN5VfyYepdvelVujh0GjH4e7yJro"
            },
            success: function (item) {
                   $(".listContainer").append('<div class="archive-item"><p><p>'+ item.date+' <a href="#">'+ item.title +'</a><p>'+item.explanation+'</p> </p> </div>')
                       
 
    // img oder video dispayn hmmm  ?



            },
            error: function (xyz) {
                console.log("Error message", xyz);
            }
        });
    });
    $(document).on("click", "#submit", function () {
        var start_date = $("#custom-select3").val();
        var end_date= parseInt(start_date)+1;
        $.ajax({
            url: "https://api.nasa.gov/planetary/apod",
             type: "get",
             data: {
                start_date:start_date + "-01-01",
                end_date: end_date +"-01-01",
                api_key: "WeJQydmgkMuduN5VfyYepdvelVujh0GjH4e7yJro"
            },
            success: function (response) {
                response.forEach(function(item) {
                    $(".listContainer").append('<div class="archive-item"><p>'+ item.date+' <a href="#">'+ item.title +'</a> </div>')
                });
            },
            error: function (xyz) {
                console.log("Error message", xyz);
            }
        });
    });
    $(document).on("click", "#reset", function () {
        console.log("here");
        $(".listContainer").empty();
    });
});



