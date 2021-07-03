// Constants and global variables
var START_HOUR = 9;
var TOTAL_WORKDAY = 8;
var currentHour = moment().format("h");

// Display current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// Create multiple time blocks:
var container = $(".container");
for(i=START_HOUR; i < TOTAL_WORKDAY+START_HOUR; i++){
    var row = $("<div>").attr("class", "row time-block");
    var hour = $("<div>").attr("class", "col-1 column hour");
    var inputColumn = $("<div>").attr("class", "col-10 column");
    var saveBtn = $("<div>").attr("class", "col-1 column saveBtn");
    var textArea = $("<textarea>");
    var iBtn = $("<i>");

    container.append(row);
    row.append(hour);
    row.append(inputColumn);
    inputColumn.append(textArea);
    row.append(saveBtn);
    saveBtn.append(iBtn); // did not really do anything on styling side

    // display time
    if (i<12)
    {
        hour.text(i + " AM");
    } else if (i===12){
        hour.text(i + "PM");
    }
    else {
        var twelveHour = i - 12;
        hour.text(twelveHour + " PM");
    }

    // change row colors based on current time
    if(currentHour==i){
        inputColumn.addClass("present");
    } else if (currentHour>i){
        inputColumn.addClass("past");
    } else{
        inputColumn.addClass("future");
    }
}