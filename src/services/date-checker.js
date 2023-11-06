class DateChecker {
  constructor(date) {
    const parts = date.split('-');
    this.dateRecived = new Date(parts[0], parts[1] - 1, parts[2]);
    this.dateRecived.setHours(0, 0, 0, 0);
  }

  checkDate() {
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);

    if (this.dateRecived.toString() === newDate.toString()) {
      return 'Today';
    }

    newDate.setDate(newDate.getDate() + 1);

    if (this.dateRecived.toString() === newDate.toString()) {
      return 'Tomorrow';
    }

    newDate.setDate(newDate.getDate() + 1);

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysAsNumber = newDate.getDay();

    return weekDays[daysAsNumber];
  }
}

export { DateChecker };
