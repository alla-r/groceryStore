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
    // console.log(this.categories);
    // console.log(categ);

    this.activeCateg[categ] === true
      ? this.activeCateg[categ] = false
      : this.activeCateg[categ] = true;
    // this.categories[1] = this.categories[0].map((el) => true);
    // console.log(this.activeCateg[categ]);
    // console.log(this.activeCateg);
    return this.records.filter(({ category }) => this.activeCateg[category]);
  }
}
