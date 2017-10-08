const fetchProducts = () => Promise.resolve({data: [1,2,3]})
const fetchAdditional = (products) => Promise.resolve({data: [2,3,4]})

const getProducts = async () => {
  const products = await fetchProducts()

  if (!products.data.length) {
    return products.data
  }

  return await fetchAdditional(products.data)
}

// const getProducts = async () => {
//   return fetchProducts().then(products => {
//     if (products.data.length) {
//       return fetchAdditional(products.data)
//         .then(additionalData => {
//           return additionalData
//         })
//     } else {
//       return products.data
//     }
//   })
// }

getProducts().then(result => {
  console.log('result', result)
})