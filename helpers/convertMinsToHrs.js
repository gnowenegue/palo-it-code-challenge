export default mins => {
  if (mins < 0) throw new Error('Input must be positive.');
  if(typeof mins === 'string' || !Number.isInteger(mins)) throw new Error('Input must be an integer.');
  return {
    hrs: Math.floor(mins / 60),
    mins: mins % 60,
    originalMins: mins,
  };
};
