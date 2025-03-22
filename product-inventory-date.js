let calculateDateDifference = () => {
  let date = new Date();
  let noruzDate = new Date("2026-03-21");

  let DifferenceInMiliseconds = noruzDate - date;
  let days = Math.floor(DifferenceInMiliseconds / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (DifferenceInMiliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor(
    (DifferenceInMiliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  return `${days} days, ${hours} hours, ${minutes} minutes`;
};

let result = calculateDateDifference();
console.log(result);
