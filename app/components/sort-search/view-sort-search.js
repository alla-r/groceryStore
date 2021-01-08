export default class ViewSortSearch {
  controlSection = document.getElementById('control-render');

  categories = [];

  constructor(cbSort, cbSearch, cbFilter) {
    const categ = this.categories.map(this.renderCategories).join('');
    console.log(categ);
    this.getCateg(this.render);

    // this.controlSection.insertAdjacentHTML('beforeend', `
    // <div class="dropdown mb-3 mb-lg-0">
    //   <button 
    //     class="btn btn-light dropdown-toggle"
    //     type="button" 
    //     id="dropdownFilter" 
    //     data-bs-toggle="dropdown" 
    //     aria-expanded="false">
    //     Filter by category
    //   </button>
    //   <ul class="dropdown-menu" aria-labelledby="dropdownFilter" id="categories-list">${categ}</ul>
    // </div>

    // <div class="dropdown  mb-3 mb-lg-0">
    //   <button 
    //     class="btn btn-light dropdown-toggle"
    //     type="button" 
    //     id="dropdownSortPrice" 
    //     data-bs-toggle="dropdown" 
    //     aria-expanded="false">
    //     Sort by price
    //   </button>
    //   <ul class="dropdown-menu" aria-labelledby="dropdownSortPrice" id="sort-price">
    //     <li><a class="dropdown-item" href="#" data-type="cheapFirst">Cheap first</a></li>
    //     <li><a class="dropdown-item" href="#" data-type="expFirst">Expensive first</a></li>
    //   </ul>
    // </div>

    // <form class="d-flex">
    //   <input
    //     type="search"
    //     class="form-control inp-search"
    //     placeholder="Search..."
    //     aria-label="Search"
    //   />
    // </form>
    // `);

    console.log(categ);

    this.htmlSort = document.getElementById('sort-price');
    this.htmlSearch = document.querySelector('.inp-search');
    // this.htmlCategories = document.getElementById('categories-list');

    // this.htmlSort.addEventListener('click', cbSort);
    // this.htmlSearch.addEventListener('input', cbSearch);
    // this.htmlCategories.addEventListener('click', cbFilter);
  }

  getCateg = (cb) => {
    const categ = this.categories.map(this.renderCategories).join('');

    return categ;
  }

  render = () => {
    console.log('render');
    const categ = this.getCateg();

    this.controlSection.insertAdjacentHTML('beforeend', `
    <div class="dropdown mb-3 mb-lg-0">
      <button 
        class="btn btn-light dropdown-toggle"
        type="button" 
        id="dropdownFilter" 
        data-bs-toggle="dropdown" 
        aria-expanded="false">
        Filter by category
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownFilter" id="categories-list">${categ}</ul>
    </div>

    <div class="dropdown  mb-3 mb-lg-0">
      <button 
        class="btn btn-light dropdown-toggle"
        type="button" 
        id="dropdownSortPrice" 
        data-bs-toggle="dropdown" 
        aria-expanded="false">
        Sort by price
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownSortPrice" id="sort-price">
        <li><a class="dropdown-item" href="#" data-type="cheapFirst">Cheap first</a></li>
        <li><a class="dropdown-item" href="#" data-type="expFirst">Expensive first</a></li>
      </ul>
    </div>

    <form class="d-flex">
      <input
        type="search"
        class="form-control inp-search"
        placeholder="Search..."
        aria-label="Search"
      />
    </form>
    `);
  }

  renderCategories = (category) => {
  // ` <li><a class="dropdown-item" href="#" data-type=${category}>${category}</a></li>`;
    return `
      <li class="li-check">
        <input class="form-check-input" type="checkbox" value=${category} id=${category}>
        <label class="form-check-label" for=${category}>
          ${category}
        </label>
      </li>`;
  }
}
