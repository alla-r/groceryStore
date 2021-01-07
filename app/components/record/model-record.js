export default class ModelRecord {
  link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';

  names = ['id', 'productName', 'manufacture', 'category', 'ingridients', 'amount', 'units', 'price', 'image'];

  loadRecords = () => {
    return fetch(this.link)
      .then((res) => res.json())
      .then((data) => this.parseData(data.feed.entry));
  }

  parseData = (arr) => {
    const shift = this.names.length;

    return arr.reduce((acc, { content }, i) => {
      const index = Math.floor(i / shift) - 1;
      const name = this.names[i % shift];

      if (index === -1) {
        return acc;
      }

      if (!acc[index]) {
        acc[index] = {};
      }

      acc[index][name] = this.parseContent(name, content.$t);

      return acc;
    }, []);
  }

  parseContent = (name, data) => {
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
}
