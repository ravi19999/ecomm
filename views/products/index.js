module.exports = ({ products }) => {
  const renderedProducts = products
    .map((product) => {
      return `
        <li>${product.title} - ${product.price}
        `;
    })
    .join("");

  return `
    <ul>
        ${renderedProducts}
    </ul>
    `;
};
