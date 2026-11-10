let screenText = "0";
let operation = null;
let num1 = 0;
let num2 = 0;
let result = 0;

$("body").ready(function () {
    $("#screen").text(screenText);

    $("#btn-backspace").on("click", function() {
        if (operation !== null) {

        }
        else {
            if (screenText.length <= 1) {
                screenText = "0";
                $("#screen").text(screenText);
            }
            else {
                screenText = screenText.slice(0, -1);
                $("#screen").text(screenText);
            }
        }
    });

    $("#btn-ac").on("click", function() {
        screenText = "0";
        operation = null;
        num1 = 0;
        num2 = 0;
        result = 0;
        $("#screen").text(screenText);
    });

    $("#btn-percentage").on("click", function () {
        let percentage = parseFloat(screenText);
        screenText = String(percentage / 100);
        $("#screen").text(screenText);
    });

    $("#btn-0").on("click", function() {
        if (screenText === "0") {
            screenText = "0";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "0";
            $("#screen").text(screenText);
        }
    });

    $("#btn-1").on("click", function() {
        if (screenText === "0") {
            screenText = "1";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "1";
            $("#screen").text(screenText);
        }
    });

    $("#btn-2").on("click", function() {
        if (screenText === "0") {
            screenText = "2";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "2";
            $("#screen").text(screenText);
        }
    });

    $("#btn-3").on("click", function() {
        if (screenText === "0") {
            screenText = "3";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "3";
            $("#screen").text(screenText);
        }
    });

    $("#btn-4").on("click", function() {
        if (screenText === "0") {
            screenText = "4";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "4";
            $("#screen").text(screenText);
        }
    });

    $("#btn-5").on("click", function() {
        if (screenText === "0") {
            screenText = "5";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "5";
            $("#screen").text(screenText);
        }
    });

    $("#btn-6").on("click", function() {
        if (screenText === "0") {
            screenText = "6";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "6";
            $("#screen").text(screenText);
        }
    });

    $("#btn-7").on("click", function() {
        if (screenText === "0") {
            screenText = "7";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "7";
            $("#screen").text(screenText);
        }
    });

    $("#btn-8").on("click", function() {
        if (screenText === "0") {
            screenText = "8";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "8";
            $("#screen").text(screenText);
        }
    });

    $("#btn-9").on("click", function() {
        if (screenText === "0") {
            screenText = "9";
            $("#screen").text(screenText);
        }
        else {
            screenText = screenText + "9";
            $("#screen").text(screenText);
        }
    });

    $("#btn-divide").on("click", function() {
        operation = "divide";
        num1 = parseFloat(screenText);
        screenText = "0";
    });

    $("#btn-multiply").on("click", function() {
        operation = "multiply";
        num1 = parseFloat(screenText);
        screenText = "0";
    });

    $("#btn-minus").on("click", function() {
        operation = "minus";
        num1 = parseFloat(screenText);
        screenText = "0";
    });

    $("#btn-plus").on("click", function() {
        operation = "plus";
        num1 = parseFloat(screenText);
        screenText = "0";
    });

    $("#btn-equal").on("click", function() {
        if (operation === null) {
            operation === null;
        }
        else if (operation === "divide") {
            num2 = parseFloat(screenText);
            result = num1 / num2;
            $("#screen").text(result);
        }
        else if (operation === "multiply") {
            num2 = parseFloat(screenText);
            result = num1 * num2;
            $("#screen").text(result);
        }
        else if (operation === "minus") {
            num2 = parseFloat(screenText);
            result = num1 - num2;
            $("#screen").text(result);
        }
        else if (operation === "plus") {
            num2 = parseFloat(screenText);
            result = num1 + num2;
            $("#screen").text(result);
        }
    });

    $("#btn-plus-minus").on("click", function() {
        if (screenText === "0") {
            screenText = screenText;
            $("#screen").text(screenText);
        }
        else {
            screenText = -screenText;
            $("#screen").text(screenText);
        }
    });

    $("#btn-comma").on("click", function() {
        if (screenText === "0") {
            screenText = screenText + ".";
            $("#screen").text(screenText);
        }
        else if (screenText.length >= 1) {
            if (screenText.includes(".")) {
                screenText = screenText;
                $("#screen").text(screenText);
            }
            else {
                screenText = screenText + ".";
                $("#screen").text(screenText);
            }
        }
    });
});