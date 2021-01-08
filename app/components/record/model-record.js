export default class ModelRecord {
  link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';

  records = [];

  categories = [];

  names = ['id', 'pName', 'manufacture', 'category', 'ingridients', 'amount', 'units', 'price', 'image'];

  loadRecords = () => fetch(this.link)
    .then((res) => res.json())
    .then((data) => {
      this.records = this.parseData(data.feed.entry);
      return {
        records: this.records,
        categories: this.categories,
      };
    });

  parseData = (arr) => {
    const shift = this.names.length;

    return arr.reduce((acc, { content }, i) => {
      const index = Math.floor(i / shift) - 1;
      const name = this.names[i % shift];

      if (index === -1) {
        return acc;
      }

      if (name === 'category' && !this.categories.includes(content.$t)) {
        this.categories.push(content.$t);
      }

      if (!acc[index]) {
        acc[index] = {};
      }

      acc[index][name] = this.parseContent(name, content.$t);

      // console.log(this.categories);
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

  sort = (type) => {
    const sortMethods = {
      cheapFirst: (a, b) => a.price - b.price,
      expFirst: (a, b) => b.price - a.price,
    };

    this.records.sort(sortMethods[type]);

    return this.records;
  }

  search = (t) => {
    const text = t.toLowerCase().trim();

    return this.records.filter(({ pName }) => pName.toLowerCase().includes(text));
  }

  // filter = (categ) => {
  //   console.log(this.records.filter(({ category }) => category === categ));
  // }
}
