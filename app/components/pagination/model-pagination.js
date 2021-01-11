export default class ModelPagination {
  cardsPerPage = 9;

  prodList = [];

  getNumOfPages = () => Math.ceil(this.prodList.length / this.cardsPerPage);

  changePage = (newPage) => {
    const indexOfLastCard = newPage * this.cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - this.cardsPerPage;

    return this.prodList.slice(indexOfFirstCard, indexOfLastCard);
  }
}
