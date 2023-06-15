export const gigasecond = (date) => {
  const dateCopy = new Date(date);
  dateCopy.setSeconds(dateCopy.getSeconds() + 1000000000);
  return dateCopy;
};