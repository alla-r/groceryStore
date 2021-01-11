const events = {
  LOADED_DATA: 'When data loaded from server',
  // AFTER_SORT: 'Products after sort by price',
  // AFTER_SEARCH: 'Products after search',
  AFTER_FILTER: 'Products after filter categories',
  SHOW_DETAILS: 'Show details window of product',
  ADD_TO_CART: 'Add product to cart',
  SHOW_CART: 'Show modal window for cart and get product details',
  CLOSE_MODAL_ORDER: 'Close modal window for getting user info',
  GET_DATA_FROM_LS: 'Get data from Local Storage',
  CHANGE_IN_CART: 'After any changes in the cart',
  NEW_ORDER: 'After successful submiting new order',
  ON_PAGINATION: 'A list of products on page',
};

export default events;
