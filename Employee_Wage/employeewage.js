// UC 1
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck === IS_ABSENT) {
    console.log("Employee is absent");
    return;
} else {
    console.log("Employee is present");
}

// UC 2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// UC 3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : " + empWage);

// UC 4
const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs : " + empHrs + "  Emp Wage : " + empWage);

// UC 5
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

// UC 6 Array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days : " + totalWorkingDays + "  Total Hrs : " + totalEmpHrs + "  Emp Wage : " + empWage);

// Array Helper Function
// UC 7A - Calc total wage using forEach or reduce method
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC 7A - Total Days : " + totalWorkingDays + "  Total Hrs : " + totalEmpHrs + "  Emp Wage : " + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC 7A - Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B - Show the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C - Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage === 160;
}
console.log("UC 7D - First time Fulltime wage was earned on Day : " + mapDayWithWageArr.find(findFulltimeWage));

// UC 7E - Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage === 160;
}
console.log("UC 7E - Check All Elements have Full Time Wage : " + fullDayWageArr.every(isAllFulltimeWage));

// UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if Any Part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Employee Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

// UC 8
let empDailyWageMap = new Map();
function totalWagesMap(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

empDailyWageMap.set(totalWorkingDays, empDailyWageArr.reduce(totalWagesMap, 0));
console.log("Emp Wage Map totalHrs : " + Array.from(empDailyWageArr.keys()).reduce(totalWagesMap, 0));