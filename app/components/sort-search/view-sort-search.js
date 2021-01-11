export default class ViewSortSearch {
  controlSection = document.getElementById('control-render');

  constructor(cbSort, cbSearch) {
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
      <ul class="dropdown-menu" aria-labelledby="dropdownFilter" id="categories-list"></ul>
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

    this.htmlSort = document.getElementById('sort-price');
    this.htmlSearch = document.querySelector('.inp-search');
    this.htmlCategories = document.getElementById('categories-list');

    this.htmlSort.addEventListener('click', cbSort);
    this.htmlSearch.addEventListener('input', cbSearch);
  }

  renderCategList = (categories, cbFilter) => {
    const categ = categories.map(this.renderCategories).join('');

    this.htmlCategories.innerHTML = categ;

    [...this.htmlCategories.querySelectorAll('.form-check-input')].forEach((btn) => btn.addEventListener('click', cbFilter));
  }

  renderCategories = (category) => `
    <li class="li-check">
      
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" data-type="${category}"> ${category}
      </label>
    </li>`;
}
