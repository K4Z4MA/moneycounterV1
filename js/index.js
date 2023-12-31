function calculate(){
    event.preventDefault();
    let fiveCent = parseFloat(document.getElementById("fiveCentInput").value);
    let tenCent = parseFloat(document.getElementById("tenCentInput").value);
    let twentyFiveCent = parseFloat(document.getElementById("twentyFiveCentInput").value);
    let totalOneDollar = parseInt(document.getElementById("oneDollarInput").value);
    let twoDollar = parseInt(document.getElementById("twoDollarInput").value);
    let fiveDollar = parseInt(document.getElementById("fiveDollarInput").value);
    let tenDollar = parseInt(document.getElementById("tenDollarInput").value);
    let twentyDollar = parseInt(document.getElementById("twentyDollarInput").value);
    let fiftyDollar = parseInt(document.getElementById("fiftyDollarInput").value);
    let hundredDollar = parseInt(document.getElementById("hundredDollarInput").value);

    let totalFiveCent = (fiveCent * 0.05);
    let totalTenCent = (tenCent * 0.1);
    let totalTwentyFiveCent = (twentyFiveCent * 0.25);
    let totalTwoDollar = (twoDollar * 2);
    let totalFiveDollar = (fiveDollar * 5);
    let totalTenDollar = (tenDollar * 10);
    let totalTwentyDollar = (twentyDollar * 20);
    let totalFiftyDollar = (fiftyDollar * 50);
    let totalHundredDollar = (hundredDollar * 100);

    if (Number.isNaN(totalFiveCent)) {
        totalFiveCent = parseInt(0);
    } else {
        document.getElementById("fiveCentOutput").innerHTML = "=" + totalFiveCent.toFixed(2) + "$";
    }

    if (Number.isNaN(totalTenCent)) {
        totalTenCent = parseInt(0);
    } else {
        document.getElementById("tenCentOutput").innerHTML = "=" + totalTenCent.toFixed(2) + "$";
    }

    if (Number.isNaN(totalTwentyFiveCent)) {
        totalTwentyFiveCent = parseInt(0);
    } else {
        document.getElementById("twentyFiveCentOutput").innerHTML = "=" + totalTwentyFiveCent.toFixed(2) + "$";
    }

    if (Number.isNaN(totalOneDollar)) {
        totalOneDollar = parseInt(0);
    } else {
        document.getElementById("oneDollarOutput").innerHTML = "=" + totalOneDollar + "$";
    }

    if (Number.isNaN(totalTwoDollar)) {
        totalTwoDollar = parseInt(0);
    } else {
        document.getElementById("twoDollarOutput").innerHTML = "=" + totalTwoDollar + "$";
    }

    if (Number.isNaN(totalFiveDollar)) {
        totalFiveDollar = parseInt(0);
    } else {
        document.getElementById("fiveDollarOutput").innerHTML = "=" + totalFiveDollar + "$";
    }

    if (Number.isNaN(totalTenDollar)) {
        totalTenDollar = parseInt(0);
    } else {
        document.getElementById("tenDollarOutput").innerHTML = "=" + totalTenDollar + "$";
    }

    if (Number.isNaN(totalTwentyDollar)) {
        totalTwentyDollar = parseInt(0);
    } else {
        document.getElementById("twentyDollarOutput").innerHTML = "=" + totalTwentyDollar + "$";
    }

    if (Number.isNaN(totalFiftyDollar)) {
        totalFiftyDollar = parseInt(0);
    } else {
        document.getElementById("fiftyDollarOutput").innerHTML = "=" + totalFiftyDollar + "$";
    }

    if (Number.isNaN(totalHundredDollar)) {
        totalHundredDollar = parseInt(0);
    } else {
        document.getElementById("hundredDollarOutput").innerHTML = "=" + totalHundredDollar + "$";
    }

    let total = totalFiveCent + totalTenCent + totalTwentyFiveCent + totalOneDollar + totalTwoDollar + totalFiveDollar + totalTenDollar + totalTwentyDollar + totalFiftyDollar + totalHundredDollar;

    document.getElementById("total").innerHTML = "The total of the amount is " + total.toFixed(2) + "$" + "<br/>**Made by Alexandre Sammut. Contact me to remove this message or any other modification, ask me before utilisation!**©";

}


function reset(){
    document.getElementById("quantityEntry").reset();
    document.getElementById("fiveCentOutput").innerHTML = "";
    document.getElementById("tenCentOutput").innerHTML = "";
    document.getElementById("twentyFiveCentOutput").innerHTML = "";
    document.getElementById("oneDollarOutput").innerHTML = "";
    document.getElementById("twoDollarOutput").innerHTML =  "";
    document.getElementById("fiveDollarOutput").innerHTML = "";
    document.getElementById("tenDollarOutput").innerHTML = "";
    document.getElementById("twentyDollarOutput").innerHTML = "";
    document.getElementById("fiftyDollarOutput").innerHTML = "";
    document.getElementById("hundredDollarOutput").innerHTML = "";
    document.getElementById("total").innerHTML = "";
}