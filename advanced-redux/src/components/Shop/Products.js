import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'First',
    price: 6,
    description: 'First book'
  },
  {
    id: 'p2',
    title: 'Second',
    price: 12,
    description: 'Second book'
  },
  {
    id: 'p3',
    title: 'Third',
    price: 18,
    description: 'Third book'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
