import React, { useContext, useEffect, useState } from 'react';
import ProductsHeader from './subcomponents/ProductsHeader/ProductsHeader';


export const Products = () => {
  const productsPerPage = 8;

  const [productsData, setProductsData] = useState([]);
  const [searchingQuery, setSearchingQuery] = useState('');
  const [isActiveRequered, setIsActiveRequered] = useState(false);
  const [isPromoRequered, setIsPromoRequered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  const handleOnToggleActive = () => {
    setIsActiveRequered(!isActiveRequered);
    setCurrentPage(1);
  };
  const handleOnTogglePromo = () => {
    setIsPromoRequered(!isPromoRequered);
    setCurrentPage(1);
  };
  const handleOnSearchingChange = (event) => {
    setSearchingQuery(event.target.value);
    setCurrentPage(1);
  };
  const handleOnChangeCurrentPage = (event) => {
    setCurrentPage(Number(event.target.dataset.topage))
  };

  const fetchData = async (url) => {

    const response = await fetch(url);
    const data = await response.json();
    setProductsData(data);

  }

  useEffect(() => {
    fetchData(`https://join-tsh-api-staging.herokuapp.com/products?search=${searchingQuery}&limit=${productsPerPage}&page=${currentPage}${isPromoRequered ? `&promo=true` : ''}${isActiveRequered ? `&active=true` : ''}`);
  }, [searchingQuery, isActiveRequered, isPromoRequered, currentPage]);

  console.log(productsData);

  return (
    <>
      <ProductsHeader
        toggleActive={handleOnToggleActive}
        togglePromo={handleOnTogglePromo}
        searchingChange={handleOnSearchingChange}
        isActiveRequered={isActiveRequered}
        isPromoRequered={isPromoRequered}
        searchingQuery={searchingQuery}
      />
    </>
  );
};
