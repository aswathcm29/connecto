export const timingFunction = (createdAt) => {
    const createdDate = new Date(createdAt);

    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime - createdDate);

    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInMonth = millisecondsInDay * 30;
    const millisecondsInYear = millisecondsInDay * 365;

    const yearsDifference = Math.floor(timeDifference / millisecondsInYear);
    const monthsDifference = Math.floor(timeDifference / millisecondsInMonth);
    const daysDifference = Math.floor(timeDifference / millisecondsInDay);
    const hoursDifference = Math.floor(timeDifference / millisecondsInHour);
    const minutesDifference = Math.floor(timeDifference / millisecondsInMinute);


    if (yearsDifference > 0) {
        return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
    } else if (monthsDifference > 0) {
        return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
    } else if (daysDifference > 0) {
        return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    } else if (hoursDifference > 0) {
        return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
    } else {
        return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
    }
}

