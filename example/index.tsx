import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductTitle,ProductImage } from '../.';
import ProductCard from '../dist/components/index';

const product1 = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};


const App = () => {
  return (
    <ProductCard 
    product={product1}
    initialValues={{ count: 4, maxCount: 12 }}
  >
    {({reset, increaseBy, count, isMaxReached, maxCount}) => (
      <>
        <ProductImage  />
        <ProductTitle title=""  />
        <ProductButtons  />
      </>
    )}
  </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
