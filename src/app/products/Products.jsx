import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
import ProductDetails from './subcomponents/ProductDetails/ProductDetails';
import ProductsHeader from './subcomponents/ProductsHeader/ProductsHeader';
import ProductsList from './subcomponents/ProductsList/ProductsList.jsx';

export const Products = () => {
  const productsPerPage = 8;

  const [productsData, setProductsData] = useState({});
  const [searchingQuery, setSearchingQuery] = useState('');
  const [isActiveRequered, setIsActiveRequered] = useState(false);
  const [isPromoRequered, setIsPromoRequered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState();

  const closeModal = () => setIsModalShown(false);
  const showProductModal = (productData) => {
    setIsModalShown(true);
    setSelectedProductData(productData);
  }

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
      {productsData?.meta?.totalItems && <ProductsList data={productsData} changePage={handleOnChangeCurrentPage} showProductModal={showProductModal} />}

      {isModalShown && <Modal closeModal={closeModal} mustCloseFromOutSide={true}>
        <ProductDetails data={selectedProductData} />
      </Modal>}
    </>
  );
};
