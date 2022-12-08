export const formatPrice = (num) => {
  const newNumber = Intl.NumberFormat("fr", {
    style: "currency",
    currency: "EUR",
  }).format(num / 100);
  return newNumber;
};
// make prices presentable
// check later how to change the format according to users' location

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
    // flatten arrays
  }
  return ["all", ...new Set(unique)];
};
// create color categories from existing options
