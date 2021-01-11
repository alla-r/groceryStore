export default class ViewPagination {
  htmlPagContainer = document.querySelector('.pagination-container');

  constructor(numOfPages, cbChangePage) {
    const linkPages = this.renderLinks(numOfPages);

    this.htmlPagContainer.innerHTML = `
    <ul class="pagination justify-content-center">
      ${linkPages}
    </ul>`;

    [...this.htmlPagContainer.querySelectorAll('.page-link')].forEach((btn) => btn.addEventListener('click', cbChangePage));
  }

  renderLinks = (num) => {
    let result = '';
    for (let i = 1; i <= num; i++) {
      result += `<li class="page-item"><a class="page-link" href="#" data-num-page="${i}">${i}</a></li>`;
    }

    return result;
  }
}
