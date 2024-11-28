const FormatDate = (date) =>
  date.toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric",
  });

export default FormatDate;
