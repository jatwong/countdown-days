const getDaysLeft = (dateStr) => {
  let date = new Date(dateStr);
  let now = new Date();

  const stringDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;

  const diffTime = date - now;
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays < 0) {
    diffDays = 0;
  }

  let daysLeftString = `${diffDays} days left`;
  if (diffDays === 1) {
    daysLeftString = `${diffDays} day left`;
  }

  return {
    stringDate: stringDate,
    daysLeftString: daysLeftString,
  };
}


export default getDaysLeft;