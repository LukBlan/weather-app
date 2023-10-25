export {DateChecker}

class DateChecker {
  constructor(date) {
    this.dateRecived = new Date(date);
    this.dateRecived.setHours(0,0,0,0);
  }

  checkDate() {
    const today = new Date();
    const tomorrow = new Date();
    const dayAfterTomorrow = new Date();
    let text = "";

    today.setHours(0,0,0,0)
    tomorrow.setHours(0,0,0,0)
    dayAfterTomorrow.setHours(0,0,0,0)

    tomorrow.setDate(today.getDate() + 1);
    dayAfterTomorrow.setDate(tomorrow.getDate() + 1);

    if (this.dateRecived.toString() === today.toString()) {
      text = "Today";
    } else if (this.dateRecived.toString() === tomorrow.toString()) {
      text = "Tomorrow";
    } else {
      const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const daysAsNumber = dayAfterTomorrow.getDay();
      text = weekDays[daysAsNumber];
    }

    return text;
  }

}