export const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();
export const truncate = (str, n = 50) =>
  str.length > n ? str.substring(0, n) + "..." : str;
