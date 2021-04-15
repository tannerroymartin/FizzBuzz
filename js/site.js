//take user input and prints numbers to the page
function printNumbers() {
    let startNum = parseInt(document.getElementById("num1").value);
    let endNum = parseInt(document.getElementById("num2").value);
    let numbers = getRange(startNum, endNum);
    displayData(numbers);
}

//Gets the range of numbers
function getRange(start, end) {
    let numberArray = [];
    for (let index = start; index <= end; index++) {
        //fizzbuzz things here
        numberArray.push(index);
    }

    return numberArray;
}

//display the numbers on the page
//
function displayData(numbers) {
    const rowTemplate = document.getElementById("dataTemplate");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    //clear the table
    resultsBody.innerHTML = "";

    //loop over every element in the numebrs array
    //get the value and write it to the page
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        //return an array of columns from the template
        let cols = dataRow.querySelectorAll("td");

        //loop over columns
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[i + colIndex];
            if (typeof value === "undefined") {
                value = "";
            } else if (value % 15 == 0) {
                cols[colIndex].textContent = "Fizz"
                cols[colIndex].classList.add("boldIt");
            } else if (value % 5 == 0) {
                cols[colIndex].textContent = "Buzz"
                cols[colIndex].classList.add("boldIt");
            } else if (value % 3 == 0) {
                cols[colIndex].textContent = "FizzBuzz"
                cols[colIndex].classList.add("boldIt");
            } else {
                cols[colIndex].textContent = value;
            }
        }
        // add the row to the page
        resultsBody.appendChild(dataRow);
    }
}
//Note: td's use textContent to set content