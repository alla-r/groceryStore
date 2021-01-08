export default class ModelSortSearch {
  records = [];

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

  filter = (categ) => {
    console.log(categ);
    console.log(this.records.filter(({ category }) => category === categ));
  }
}
