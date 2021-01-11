export default class ModelSortSearch {
  records = [];

  categories = [];

  activeCateg = {};

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
    this.activeCateg[categ] === true ? this.activeCateg[categ] = false : this.activeCateg[categ] = true;

    return this.records.filter(({ category }) => this.activeCateg[category]);
  }
}
