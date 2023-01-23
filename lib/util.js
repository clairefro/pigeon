const getMissing = (dataObj, requiredVals) => {
  const missing = [];
  requiredVals.forEach((val) => {
    if (!dataObj[val]) {
      missing.push(val);
    }
  });
  return missing;
};

module.exports = { getMissing };
