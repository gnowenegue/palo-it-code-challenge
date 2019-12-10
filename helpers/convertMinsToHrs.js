export default mins => {
  return {
    hrs: Math.floor(mins / 60),
    mins: mins % 60,
    originalMins: mins,
  };
};
