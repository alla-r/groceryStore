import ControllerRecord from './components/record/controller-record.js';

const record = new ControllerRecord();

// const link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';

// function parseContent(name, data) {
//   let newVal;
//   let num;
//   let unit;

//   switch (name) {
//     case 'id':
//     case 'amount':
//     case 'price':
//       newVal = +(data.replace(',', '.').trim());
//       break;
//     case 'units':
//       num = +(data.match(/([^a-z]+)/gi)[0].replace(',', '.').trim());
//       unit = data.match(/([a-z]+)/gi)[0].trim();
//       newVal = [num, unit];
//       break;
//     default:
//       newVal = data;
//   }

//   return newVal;
// }

// function parseData(arr) {
//   const names = ['id', 'productName', 'manufacture', 'category',
// 'ingridients', 'amount', 'units', 'price', 'image'];
//   const shift = names.length;

//   return arr.reduce((acc, { content }, i) => {
//     const index = Math.floor(i / shift) - 1;
//     const name = names[i % shift];

//     if (index === -1) {
//       return acc;
//     }

//     if (!acc[index]) {
//       acc[index] = {};
//     }

//     acc[index][name] = parseContent(name, content.$t);

//     return acc;
//   }, []);
// }

// fetch(link)
//   .then((res) => res.json())
//   .then((data) => {
//     render(parseData(data.feed.entry));
//     // console.log(parseData(data.feed.entry));
//   });

// function render(arr) {
//   const cards = arr.map(renderCard).join('');

//   document.getElementById('product-list').innerHTML = `<div class="row">${cards}</div>`;
// }

// function renderCard(card) {
//   // console.log(card);
//   return `
//   <div class="col-lg-4 col-md-12 mb-4">
//     <div class="card h-100">
//       <div class="bg-image hover-overlay h-100">
//         <img
//           src="${card.image}"
//           class="img-fluid"
//           alt="${card.productName} photo"
//         />
//       </div>
//       <div class="card-body">
//         <h5 class="card-title">${card.productName}</h5>
//         <p class="mb-1 card-ubits">${card.units[0]} ${card.units[1]}</p>
//         <h6 class="price">$${card.price}</h6>
//         <div>
//           <a href="#!" class="btn btn-details btn-outline-success">Details</a>
//           <a href="#!" class="btn btn-add-to-cart btn-success">Add to cart</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   `;
// }
