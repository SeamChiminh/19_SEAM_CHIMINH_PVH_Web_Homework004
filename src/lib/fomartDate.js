export const formatDate = (dateString) => {
    if (!dateString) return "Invalid Date";
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short", // "Tue"
      month: "short", // "Jan"
      day: "2-digit", // "13"
      year: "numeric", // "2025"
    });
  };