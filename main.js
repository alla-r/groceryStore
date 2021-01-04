const link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/2/public/full?alt=json';

function parseContent(name, data) {
  let newVal;
  let num;
  let unit;

  switch (name) {
    case 'id':
    case 'amount':
    case 'price':
      newVal = +(data.replace(',', '.').trim());
      break;
    case 'units':
      num = +(data.match(/([^a-z]+)/gi)[0].replace(',', '.').trim());
      unit = data.match(/([a-z]+)/gi)[0].trim();
      newVal = [num, unit];
      break;
    default:
      newVal = data;
  }

  return newVal;
}

function parseData(arr) {
  const names = ['id', 'productName', 'manufacture', 'category', 'ingridients', 'amount', 'units', 'price', 'image'];
  const shift = names.length;

  return arr.reduce((acc, { content }, i) => {
    const index = Math.floor(i / shift) - 1;
    const name = names[i % shift];

    if (index === -1) {
      return acc;
    }

    if (!acc[index]) {
      acc[index] = {};
    }

    acc[index][name] = parseContent(name, content.$t);

    return acc;
  }, []);
}

fetch(link)
  .then((res) => res.json())
  .then((data) => console.log(parseData(data.feed.entry)));
