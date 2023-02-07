export const startColorsArray = [
  { id: 1, color: "black", isOpen: false },
  { id: 2, color: "red", isOpen: false },
  { id: 3, color: "purple", isOpen: false },
  { id: 4, color: "orange", isOpen: false },
  { id: 5, color: "green", isOpen: false },
  { id: 6, color: "aqua", isOpen: false },
  { id: 7, color: "brown", isOpen: false },
  { id: 8, color: "pink", isOpen: false },
  { id: 9, color: "black", isOpen: false },
  { id: 10, color: "red", isOpen: false },
  { id: 11, color: "purple", isOpen: false },
  { id: 12, color: "orange", isOpen: false },
  { id: 13, color: "green", isOpen: false },
  { id: 14, color: "aqua", isOpen: false },
  { id: 15, color: "brown", isOpen: false },
  { id: 16, color: "pink", isOpen: false },
];

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
  return array;
};

export const deepCopy = (array) => {
  const deepCopiedArray = [];
  array.forEach((el) => {
    deepCopiedArray.push({ ...el });
  });
  return deepCopiedArray;
};

