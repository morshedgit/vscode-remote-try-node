function formatTimePassed(dateString:string) {
    const date = new Date(dateString); // convert dateString to a Date object
    const now = new Date(); // get the current date and time
  
    // create a new Intl.RelativeTimeFormat object with the "auto" option to automatically choose the appropriate time unit
    const timePassedFormatter = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });
  
    // calculate the time passed from the date to now in milliseconds
    const timePassedMillis = now.getTime() - date.getTime();
  
    // calculate the time passed in days, hours, minutes, and seconds
    const secondsPassed = Math.round(timePassedMillis / 1000);
    const minutesPassed = Math.round(secondsPassed / 60);
    const hoursPassed = Math.round(minutesPassed / 60);
    const daysPassed = Math.round(hoursPassed / 24);
    const weeksPassed = Math.round(daysPassed / 7);
  
    // choose the appropriate time unit based on the magnitude of the time passed
    let timePassed, unit:any;
    if (weeksPassed > 0) {
      // if the date is more than a week ago, format the date instead
      const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      return dateFormatter.format(date);
    } else if (daysPassed > 0) {
      timePassed = daysPassed;
      unit = 'day';
    } else if (hoursPassed > 0) {
      timePassed = hoursPassed;
      unit = 'hour';
    } else if (minutesPassed > 0) {
      timePassed = minutesPassed;
      unit = 'minute';
    } else {
      timePassed = secondsPassed;
      unit = 'second';
    }
  
    // format the time passed using the timePassedFormatter object
    const timePassedFormatted = timePassedFormatter.format(-timePassed, unit);
  
    // return the time passed as a string
    return timePassedFormatted;
  }

  export {formatTimePassed}
  