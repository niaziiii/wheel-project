export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const dataArea = {
  "1": {
    id: "1 menu effert",
    area: [40, 137],
    winPercentage: "20",
    gap: 20, // 0 - 20
  },
  "2": {
    id: "une boisson",
    area: [138, 230],
    winPercentage: "10",
    gap: 30, // 20 - 30
  },
  "3": {
    id: "une dessert",
    area: [231, 315],
    winPercentage: "50",
    gap: 80, // 30-80
  },
  "4": {
    id: "1 Voyage A Ny",
    area: [316, 400],
    winPercentage: "20",
    gap: 100, // 80 - 100
  },
};

export const getLuckyResult = () => {
  let valid = false;
  let luckyData;
  const number = getRandomNumber(0, 100);

  Object.keys(dataArea).map((_data) => {
    const data = dataArea[_data];
    const winGap = data.gap;
    if (winGap >= number && !valid) {
      valid = true;
      luckyData = data as any;
    }
  });

  const deg = getRandomNumber(luckyData?.area[0], luckyData?.area[1]);

  return {
    deg,
    luckyData,
  };
};
