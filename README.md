 # Do Product Card

 Testing a deploy package for NPM 


## Example
 ```
      <ProductCard
        product={product}
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
 ```