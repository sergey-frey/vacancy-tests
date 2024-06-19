type InputData = {
	length: number; // mm
	angle: number;
};

type Point = {
	x: number;
	y: number;
};

const inputArray: InputData[] = [
	{
		length: 1665,
		angle: 0,
	},
	{
		length: 947,
		angle: 90,
	},
	{
		length: 557,
		angle: 0,
	},
	{
		length: 1300,
		angle: 90,
	},
	{
		length: 2225,
		angle: 180,
	},
	{
		length: 2239,
		angle: 270,
	},
];

/*
  Нам понадобятся обёртки над математическими функциями
  для достижения нужной точности и избежания популярной 
  проблемы дробной арифметики
*/

const sin = (a: number) => {
	return Number(Math.sin(a).toFixed(3));
};

const cos = (a: number) => {
	return Number(Math.cos(a).toFixed(3));
};

const pixelRound = (num: number) => {
	return Number(num.toFixed(1));
};

/*
  В задаче есть условие по переводу длины
  из миллиметров в сантиметры и, для удобства работы,
  сразу преобразуем углы из градусов в радианы
*/

const convertInputData = (inputArray: InputData[]): InputData[] => {
	return inputArray.map((data) => {
		return {
			...data,
			length: data.length / 10, // mm -> cm
			angle: (data.angle * Math.PI) / 180, // deg -> rad
		};
	});
};

/*
  В задаче даны только углы, кратные 90,
  но, для универсальности, я использую функции
  sin и cos для вычисления изменения x и y координат
*/

const getSvgPoints = (inputArray: InputData[]) => {
	const resultPoints: Point[] = [];
	const convertedData = convertInputData(inputArray);

	const currentPoint: Point = {
		x: 0,
		y: 0,
	};

	for (let i = 0; i < convertedData.length; ++i) {
		const { length, angle } = convertedData[i];

		currentPoint.x = pixelRound(currentPoint.x + length * cos(angle));
		currentPoint.y = pixelRound(currentPoint.y + length * sin(angle));

		resultPoints.push({ ...currentPoint });
	}

	return resultPoints;
};

// Функция для вывода ответа в заданном формате
const writeCoords = (points: Point[]) => {
	const resultViewElement = document.querySelector("#app");
	const result = points
		.reduce<number[]>((acc, point) => acc.concat([point.x, point.y]), [])
		.join(" ");

	if (resultViewElement) {
		resultViewElement.textContent = result;
	}

	console.log(result);
};

writeCoords(getSvgPoints(inputArray));
