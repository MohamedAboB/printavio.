// const product =[
//     { image: 'imgs/shopping 2.1.jpg', title: 'Printavio T-shirt', price: 200 },
//     { image: 'imgs/shopping 2.2.jpg', title: 'Printavio T-shirt', price: 200 },
//     { image: 'imgs/shopping 2.5.jpg', title: 'Printavio T-shirt', price: 200 },
//     { image: 'imgs/shopping 2.4.jpg', title: 'Printavio T-shirt', price: 200 }
// ];


// const categories = [...new Set(product.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));

// function displayCart() {
//     let container = document.getElementById("root");
//     document.getElementById("itemA").innerHTML = categories.length +  "Items";
//     document.getElementById("itemB").innerHTML = categories.length +  "Items";
//     if (categories.length === 0) {
//         container.innerHTML = "Your cart is empty.";
//     } else {
//         const rows = categories.map((item, index) => {
//             let { image, title, price } = item;
//             return `
//                 <tr>
//                     <td width="250"><div class="img-box"><img class="img" src="${image}"></div></td>
//                     <td width="250"><p style='font-size:15px;'>${title}</p></td>
//                     <td width="280"><h2 style='font-size:15px; color:red;'>$${price}.00</h2></td>
//                     <td width="70"><i class='fa-solid fa-trash-can' onclick='delElement(${index})'></i></td>
//                 </tr>
//             `;
//         }).join('');

//         container.innerHTML = `<table>${rows}</table>`;
//     }
// }

// function delElement(index) {
//     categories.splice(index, 1);
//     displayCart();
// }


// displayCart();


