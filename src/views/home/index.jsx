import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from '@/constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop, useProduct
} from '@/hooks';
import bannerImg from '@/images/fashionabler.png';
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  useDocumentTitle('TetouShopping | Home');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      {
        <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>作る</strong>
              &nbsp;あなたが見える&nbsp;
              <strong>より良い!</strong>
            </h1>
            <p>
              {/* Buying clothes should leave you happy and good-looking, with money in your pocket. */}
              服を買うことで、あなたは幸せで見栄えがよくなり、お金をポケットに入れることができます.
            </p>
            <br />
            <Link to={SHOP} className="button">
            今買う &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>
        {/*<div className="display">*/}
        {/*  <div className="display-header">*/}
        {/*    <h1>Featured Products</h1>*/}
        {/*    <Link to={FEATURED_PRODUCTS}>See All</Link>*/}
        {/*  </div>*/}
        {/*  {(errorFeatured && !isLoadingFeatured) ? (*/}
        {/*    <MessageDisplay*/}
        {/*      message={errorFeatured}*/}
        {/*      action={fetchFeaturedProducts}*/}
        {/*      buttonLabel="Try Again"*/}
        {/*    />*/}
        {/*  ) : (*/}
        {/*    <ProductShowcaseGrid*/}
        {/*      products={featuredProducts}*/}
        {/*      skeletonCount={6}*/}
        {/*    />*/}
        {/*  )}*/}
        {/*</div>*/}
        <div className="display">
          <div className="display-header">
            <h1>商品</h1>
            <Link to={SHOP}>すべてを見る</Link>
          </div>
          {
         //   (errorRecommended && !isLoadingRecommended) ? (
          //   <MessageDisplay
          //     message={errorRecommended}
          //     action={fetchRecommendedProducts}
          //     buttonLabel="Try Again"
          //   />
          // ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          // )
          }
        </div>
      </div>
      }
    </main>
  );
};

export default Home;
