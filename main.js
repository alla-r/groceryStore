const link = `https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/2/public/full?alt=json`;

fetch(link)
  .then(res => res.json())
  .then(data => console.log(parseData(data.feed.entry)));


function parseData(arr) {
  const names = ['id', 'productName', 'manufacture', 'category', 'ingridients', 'amount', 'units', 'price', 'image'];
  const shift = names.length;

  return arr.reduce( (acc, {content}, i) => {
    const index = Math.floor(i / shift) - 1;
    const name = names[i % shift];

    if ( index === -1 ) {
      return acc;
    }

    if (!acc[index]) {
      acc[index] = {}
    }

    acc[index][name] = parseContent(name, content.$t);

    return acc;
  }, []);
}

function parseContent(name, data) {
  let newVal;

  switch (name) {
    case 'id':
    case 'amount':
    case 'price':
      newVal = +(data.replace(',', '.').trim());
      break;
    case 'units':
      const num = +(data.match(/([^a-z]+)/gi)[0].replace(',', '.').trim());
      const unit = data.match(/([a-z]+)/gi)[0].trim();
      newVal = [num, unit];
      break;
    default:
      newVal = data;
  }

  return newVal;
}