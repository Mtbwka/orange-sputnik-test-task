const convert = input => {
  let days_of_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let values = [];

  for (let i = 0; i < input.list.length; i++) {
    let numericDayOne = new Date(input.list[i].dt * 1000).getDay();

    const temp = {
      day: 0,
      array: []
    };

    input.list.forEach(element => {
      let numericDayTwo = new Date(element.dt * 1000).getDay();
      if (numericDayTwo !== numericDayOne) return;
      temp.day = numericDayTwo;
      temp.array.push(element.main.temp);
    });

    values = [...values, temp];
  }

  function getUnique(arr, comp) {
    const unique = arr
      .map(element => element[comp])
      .map((element, index, final) => final.indexOf(element) === index && index)
      .filter(element => arr[element])
      .map(element => arr[element]);

    return unique;
  }

  const unique = getUnique(values, 'day');

  const labels = unique.map(element => days_of_week[element.day]);
  const data = unique.map(element => {
    if (element.array.length === 1)
      return [Math.round(element.array[0]), Math.round(element.array[0])];
    return [
      Math.round(Math.min(...element.array)),
      Math.round(Math.max(...element.array))
    ];
  });

  return { labels, data };
};

export default convert;
