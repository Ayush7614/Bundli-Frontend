const inputDate = document.querySelector(".input-bday");
const checkButton = document.querySelector(".btn-check");
const output = document.querySelector(".result")

function reverseString(str) {
    var listOfChars = str.split("");
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join("");
    return reversedString;
}

function isStringPalindrome(str) {
    var reversedString = reverseString(str);
    return str === reversedString;
}

function getDateAsString(date) {
    var dateInStr = {
        day: "",
        month: "",
        year: ""
    };

    if (date.day < 10) {
        dateInStr.day = "0" + date.day;
    } else {
        dateInStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateInStr.month = "0" + date.month;
    } else {
        dateInStr.month = date.month.toString();
    }

    dateInStr.year = date.year.toString();
    return dateInStr;
}

function getDateInAllFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var yyyyddmm = date.year + date.day + date.month;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yymmdd = date.year.slice(-2) + date.month + date.day;
    var yyddmm = date.year.slice(-2) + date.day + date.month;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, yyyyddmm, ddmmyy, mmddyy, yymmdd, yyddmm];
}

function checkPalindromeForAllDateFormats(date) {
    var dateFormatList = getDateInAllFormats(date);
    var palindromeList = [];

    for (var i = 0; i < dateFormatList.length; i++) {
        var result = isStringPalindrome(dateFormatList[i]);
        palindromeList.push(result);
    }
    return palindromeList;
}

function isLeapYear(year) {
    if (year % 400 === 0)
        return true;

    if (year % 100 === 0)
        return false;

    if (year % 4 === 0)
        return true;

    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month = 3;
            }
        } else {
            if (day > 28) {
                day = 1;
                month = 3;
            }
        }
    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year,
    };
}

function getNextPalindromeDate(date) {
    var nextDate = getNextDate(date);
    var ctr = 0;

    while (1) {
        ctr++;
        var dateStr = getDateAsString(nextDate);
        var resultList = checkPalindromeForAllDateFormats(dateStr);

        for (let i = 0; i < resultList.length; i++) {
            if (resultList[i]) {
                return [ctr, nextDate];
            }
        }
        nextDate = getNextDate(nextDate);
    }
}

function getPreviousDate(date) {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day === 0) {
        month--;

        if (month === 0) {
            month = 12;
            day = 31;
            year--;
        } else if (month === 2) {
            if (isLeapYear(year)) {
                day = 29;
            } else {
                day = 28;
            }
        } else {
            day = daysInMonth[month - 1];
        }
    }

    return {
        day: day,
        month: month,
        year: year,
    };
}

function getPreviousPalindromeDate(date) {
    var previousDate = getPreviousDate(date);
    var ctr = 0;

    while (1) {
        ctr++;
        var dateStr = getDateAsString(previousDate);
        var resultList = checkPalindromeForAllDateFormats(dateStr);

        for (let i = 0; i < resultList.length; i++) {
            if (resultList[i]) {
                return [ctr, previousDate];
            }
        }
        previousDate = getPreviousDate(previousDate);
    }
}

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
    var bdayString = inputDate.value;

    if (bdayString !== "") {
        var date = bdayString.split("-");
        var yyyy = date[0];
        var mm = date[1];
        var dd = date[2];

        var date = {
            day: Number(dd),
            month: Number(mm),
            year: Number(yyyy),
        };

        var dateStr = getDateAsString(date);
        var list = checkPalindromeForAllDateFormats(dateStr);
        var isPalindrome = false;

        for (let i = 0; i < list.length; i++) {
            if (list[i]) {
                isPalindrome = true;
                break;
            }
        }

        if (!isPalindrome) {
            const [ctr1, nextDate] = getNextPalindromeDate(date);
            const [ctr2, prevDate] = getPreviousPalindromeDate(date);

            if (ctr1 > ctr2) {
                output.innerText = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed it by ${ctr2} days.`;

            } else {
                output.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr1} days.`;
            }
        } else {
            output.innerText = "YAY! Your birthday is a palindrome";
        }
    }
}