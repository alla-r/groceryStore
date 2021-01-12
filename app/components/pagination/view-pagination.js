export default class ViewPagination {
  htmlPagContainer = document.querySelector('.pagination-container');

  constructor(numOfPages, cbChangePage) {
    const linkPages = this.renderLinks(numOfPages);

    this.htmlPagContainer.innerHTML = `
    <ul class="pagination justify-content-center">
      ${linkPages}
    </ul>`;

    [...this.htmlPagContainer.querySelectorAll('.page-link')].forEach((btn) => btn.addEventListener('click', cbChangePage));
    // document.getElementById('1').parentNode.classList.add('activePage');
  }

  changeActivePage = (num) => {
    const activePage = document.querySelector('.activePage');

    if (activePage) {
      activePage.classList.remove('activePage');
    }

    document.getElementById(num).parentNode.classList.add('activePage');
  }

  renderLinks = (num) => {
    let result = '';
    for (let i = 1; i <= num; i += 1) {
      result += `<li class="page-item"><a class="page-link" href="#" data-num-page="${i}" id="${i}">${i}</a></li>`;
    }

    return result;
  }
}
