// Constants and global variables
var START_HOUR = 8;
var TOTAL_WORKDAY = 8;
var hours = moment().format("h");

// Display current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// Create multiple time blocks:
var container = $(".container");
for(i=START_HOUR; i < TOTAL_WORKDAY+START_HOUR; i++){
    var row = $("<div>").attr("class", "row hour time-block");
    var time = $("<div>").attr("class", "col-2 column");
    var inputColumn = $("<div>").attr("class", "col-8 column");
    var saveBtn = $("<div>").attr("class", "col-2 column saveBtn");
    var textArea = $("<textarea>");

    container.append(row);
    row.append(time);
    row.append(inputColumn);
    inputColumn.append(textArea);
    row.append(saveBtn);

    // display time
    if (i<12)
    {
        time.text(i + " AM");
    } else if (i===12){
        time.text(i + "PM");
    }
    else {
        var analog = i - 12;
        time.text(analog + " PM");
    }

    // change row colors based on current time
    if(hours==i){
        inputColumn.addClass("present");
    } else if (hours>i){
        inputColumn.addClass("past");
    } else{
        inputColumn.addClass("future");
    }
}