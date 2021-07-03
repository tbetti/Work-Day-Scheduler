// Display current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// Create multiple time blocks:
for(i=0; i < 10; i++){
    var container = $(".container");
    var row = $("<div>").attr("class", "row hour time-block");
    var time = $("<div>").attr("class", "col-2 column");
    var column8 = $("<div>").attr("class", "col-8 column");
    var saveBtn = $("<div>").attr("class", "col-2 column saveBtn");
    var textArea = $("<textarea>");

    container.append(row);
    row.append(time);
    row.append(column8);
    column8.append(textArea);
    row.append(saveBtn);
}