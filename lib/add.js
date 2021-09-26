const add = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const addUsingKey = (obj1, obj2, key) => {
  if (compare(obj1[key], obj2[key])) {
    return { ...obj1, ...obj2 };
  } else {
    return new Error(
      "Keys given are not equal. Could not perform addition using Keys"
    );
  }
};

const intersection = (obj1, obj2) => {
  let keyArr = Object.keys(obj1).filter((k) => k in obj2);
  let toReturn = {};
  keyArr.map((key) => {
    if (obj1[key] === obj2[key]) toReturn[key] = obj1[key];
  });
  return toReturn;
};

const compare = (item1, item2) => {
  return JSON.stringify(item1) === JSON.strigify(item2);
};

const leftJoin = (obj1, obj2) => {
  let keyArr = Object.keys(obj1).filter((k) => k in obj2);
  let commonElements = {};
  keyArr.map((key) => {
    if (obj1[key] === obj2[key]) commonElements[key] = obj1[key];
  });
  return { ...obj1, ...commonElements };
};

const rightJoin = (obj1, obj2) => {
  let keyArr = Object.keys(obj1).filter((k) => k in obj2);
  let commonElements = {};
  keyArr.map((key) => {
    if (obj1[key] === obj2[key]) commonElements[key] = obj1[key];
  });
  return { ...obj2, ...commonElements };
};

const distintJoin = (obj1, obj2) => {
  let keyArr1 = Object.keys(obj1).filter((k) => (k in obj2 ? false : true));
  let keyArr2 = Object.keys(obj2).filter((k) => (k in obj1 ? false : true));
  let leftDistinct = {};
  let rightDistinct = {};
  console.log(keyArr1, keyArr2);
  keyArr1.map((key) => {
    leftDistinct[key] = obj1[key];
  });
  keyArr2.map((key) => {
    rightDistinct[key] = obj2[key];
  });
  return { ...leftDistinct, ...rightDistinct };
};

const distinctAttributeMerge = (obj1, obj2) => {
  let keyArr = Object.keys(obj1).filter((k) => k in obj2);
  console.log(keyArr);
  let toReturn = {};
  keyArr.map((key) => {
    let valSet = new Set();
    valSet.add(obj1[key]);
    valSet.add(obj2[key]);
    toReturn[key] = Array.from(valSet);
  });
  return toReturn;
};

const attributeMerge = (obj1, obj2) => {
  let keyArr = Object.keys(obj1).filter((k) => k in obj2);
  console.log(keyArr);
  let toReturn = {};
  keyArr.map((key) => {
    let valSet = new Set();
    valSet.add(obj1[key]);
    valSet.add(obj2[key]);
    toReturn[key] = Array.from(valSet);
  });
  return { ...obj1, ...obj2, ...toReturn };
};

export {
  add,
  addUsingKey,
  intersection,
  leftJoin,
  rightJoin,
  distintJoin,
  attributeMerge,
  distinctAttributeMerge,
};
