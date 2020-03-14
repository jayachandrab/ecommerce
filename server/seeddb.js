/*app.get('/seeddb',(req,res)=>{
  const items =  [
    {
      id: 1,
      description:"Product 1",
      // tslint:disable-next-line: max-line-length
      image: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
      name: 'CHECK PRINT SHIRT',
      price: 110
    },
    {
      id: 2,
      description:"Product 2",
      // tslint:disable-next-line: max-line-length
      image: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
      name: 'GLORIA HIGH LOGO SNEAKER',
      price: 91
    },
    {
      id: 3,
      description:"Product 3",
      // tslint:disable-next-line: max-line-length
      image: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
      name: 'CATE RIGID BAG',
      price: 94.5
    },
    {
      id: 4,
      description:"Product 4",
      // tslint:disable-next-line: max-line-length
      image: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
      name: 'GUESS CONNECT WATCH',
      price: 438.9
    },
    {
      id: 5,
    description:"Product 5",
      // tslint:disable-next-line: max-line-length
      image: 'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
      name: '\'70s RETRO GLAM KEFIAH',
      price: 20
    }
  ];
  items.forEach((product)=>{
    const newProduct = new Product({
      name:product.name,
      description:product.description,
      image:product.image,
      price:product.price
    });
    newProduct.save();
  })
  res.send("ok");
})*/
