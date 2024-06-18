// helpers

function removeExtraDecimals(inputString: string) {
    let decimalPosition = inputString.indexOf('.');
    if (decimalPosition === -1 || decimalPosition === inputString.length - 1 || Number(inputString) > 10) {
        return Math.floor(parseFloat(inputString)).toString();
    }
    return inputString.slice(0, decimalPosition + 2);
}

function padStart(str: string, targetLength: number, padString: string = '0'): string {
    while (str.length < targetLength) { str = padString + str; }
    return str;
}


// functions

export const numTokandM = (numString: string | number) => {
    const number = Number(numString)
    if (number > 999 && number < 1000000) {
        return removeExtraDecimals((number / 1000).toString()) + "k"
    } else if (number >= 1000000) {
        return removeExtraDecimals((number / 1000000).toString()) + "M"
    } else {
        return numString
    }
}



export const getDate = (date: number | string, fullDay?: string): string => {
    date = Number(date); let currentDate: Date;

    if (!fullDay) { currentDate = new Date(); }
    else {
        currentDate = new Date(fullDay);
        if (isNaN(currentDate.getTime())) {
            console.error(`Invalid date format: ${fullDay}`);
            return "Invalid date";
        }
    }

    currentDate.setDate(currentDate.getDate() + date);
    const month = padStart(String(currentDate.getMonth() + 1), 2, '0');
    const day = padStart(String(currentDate.getDate()), 2, '0');
    const year = currentDate.getFullYear();

    if (isNaN(year) || isNaN(parseInt(month)) || isNaN(parseInt(day))) {
        console.error(`Date calculation resulted in NaN: year=${year}, month=${month}, day=${day}`);
        return "Invalid date";
    }

    return `${year}-${month}-${day}`;
};


export function getTimeDifference(targetDate: string) {
    const currentDate = new Date();
    const targetDateTime = new Date(targetDate).getTime();
    const currentTime = currentDate.getTime();
    const timeDifference = Math.abs(targetDateTime - currentTime);

    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 365);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    let timeString = '';

    if (years > 0) { timeString += years + (years === 1 ? ' year ' : ' years '); }
    if (months > 0) { timeString += months + (months === 1 ? ' month ' : ' months '); }
    if (days > 0) { timeString += days + (days === 1 ? ' day ' : ' days '); }
    if (hours > 0) { timeString += hours + (hours === 1 ? ' hour ' : ' hours '); }
    if (minutes > 0) { timeString += minutes + (minutes === 1 ? ' minute ' : ' minutes '); }

    return timeString.trim();
}

export const getLastMonths = (monthCount: number) => {
    let currentDate = new Date().getMonth(); monthCount -= 1
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const lastMonths = []
    while (monthCount > -1) {
        lastMonths.push(monthNames[currentDate]);
        currentDate--
        monthCount--
        if (currentDate < 0) { currentDate = 11 }
    }
    return lastMonths.reverse()
}


export const getDatesOfCurrentYear = (arrayOfDays: string[]) => {
    const currentYear = new Date().getFullYear()
    const filteredArray = arrayOfDays.filter(item => {
        let dateYear = new Date(item).getFullYear()
        return dateYear <= currentYear
    })
    return filteredArray
}

export const generateOtp = () => Number(padStart(String(Math.floor(Math.random() * 1000000)), 6, '9'))

