import { useState } from 'react';
import PropTypes from 'prop-types';


const SearchBar = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim() !== '') {
      alert("Thank you for your submission! Our Team is right on it.")
        if(typeof onCommentSubmit === 'function')
      onCommentSubmit(comment);
      
      else {
        console.error('onCommentSubmit is not a function')
      }
      setComment('');

    }

  };


  return (

    <>
    <h1>Flower Search</h1>
    <p>We know that searching for your perfect flower is important, and here at FabsFlowers we want to ensure our customers get the best of the best!</p>
    <p>We want to know what flowers you love best and want to see at   <code>Fabs Flowers</code></p>
    <p> <em> <strong>list your fab-orite flowers below</strong> </em></p>
    <div className="comment-input-container">
      <textarea
        className="rounded-input"
        rows="4"
        cols="50"
        placeholder="Leave a comment..."
        value={comment}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <button className="styled-button" onClick={handleSubmit}>
        Submit 
      </button>
    </div>
    </>
  );
};

SearchBar.propTypes = {
  onCommentSubmit: PropTypes.func,
};

export default SearchBar;



// was having alot of trouble remember where my redirect route is coming from to be able to create this page

// // import React from 'react'
// // import { ErrorResponseImpl } from '@remix-run/router/dist/utils';
// import axios from 'axios';
// import { useEffect, useReducer, useState } from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom'
// import { getError } from '../../utils';
// import { Toast } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import LoadingBox from './LoadingBox';
// import MessageBox from './MessageBox';
// import Product from './Product';

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'FETCH_REQUEST':
//             return{
//                 ...state, loading: true
//             }
//         case 'FETCH_SUCCESS':
//             return{
//                 ...state,
//                 products: action.payload.products,
//                 countProducts: action.payload.countProducts,
//                 loading: false,
//             }
//           case 'FETCH_FAIL': 
//           return {
//             ...state,
//             laoding: false,
//             error: action.payload
//           } 
//      default: 
//     return state;
//  } 
// }

// const prices = [
//     {
//         name: '$1 to $25',
//         value: '1-25'
//     },
//     {
//         name: '$26 to $50',
//         value: '26-50'
//     },
//     {
//         name: '$51 to $100',
//         value: '51-100'
//     },
//     {
//         name: '$101 to $125',
//         value: '101-125'
//     },
// ]


// export default function SearchBar() {

//     const navigate = useNavigate();
//     const { search } = useLocation();
//     const sp = new URLSearchParams(search)
//     const category = sp.get('category') || 'all';
//     const price = sp.get('price') || 'all';
//     const query = sp.get('query') || 'all';
//     const description = sp.get('description') || 'all';
//     const products = sp.get('products') || 'all';


//     const [{ loading, error, countProducts}, dispatch] =
//     useReducer(reducer, {
//         loading: true,
//         error:'',
//     })    

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const { data } = await axios.get(
//                     `/api/products/search?/query=${query}&category=${category}&price=${price}&description=${description}&products=${products}`
//                 );
//                 dispatch({type: 'FETCH_SUCCESS', payload: data});
//             } catch (err) {
//                 dispatch({
//                     type: "FETCH_FAIL",
//                     payload: getError(error),
//                 })
//             }
//         }
//         fetchData()
//     }, [category, price, error, description, products, query])

//     const [ {categories, setCategories}] = useState([''])
    
//         useEffect (() =>{
//             const fetchCategories = async () => {
//                 try {
//                     const {data} = await axios.get(`/api/products/categories`);
//                     setCategories(data)
//                 } catch (error) {
//                     Toast.error(getError(error))
//                 }
//             };
//             fetchCategories()
//         }, [setCategories])

//         const getFilterUrl = (filter) => {
//             const filterCategory = filter.category || category;
//             const filterQuery = filter.query || query;
//             const filterPrice = filter.price || price;
//             const filterDescription = filter.description || description;
//                     return  `/search?/query=${filterQuery}%category=${filterCategory}%price=${filterPrice}&description=${filterDescription}`

//         }
//   return ( 
//     <div>
//       Looking for something specific
//       <Row>
//         <Col md={3}>
//                 <h3>Department</h3>
//                 <div>
//                     <ul>
//                         <li>
//                             <Link 
//                             className={'all' === category ? 'text-bold' : ''} to={getFilterUrl({category: 'all'})}
//                             >
//                                 ANY
//                             </Link>
//                         </li>
//                         {categories.find((c)=> {
//                             <li key ={c}>
//                                 <Link className={c === category ? 'text-bold' : ''} to={getFilterUrl({ category: c})}
//                                 >
//                                     {c}
//                                 </Link>
//                             </li>
//                         })}
//                     </ul>
//                 </div>
//                 <div>
//                 <h3>Price</h3>
//                 <div>
//                     <ul>
//                         <li>
//                             <Link 
//                             className={'all' === price ? 'text-bold' : ''} to={getFilterUrl({price: 'all'})}
//                             >
//                                 ANY
//                             </Link>
//                         </li>
//                         {prices.map((p)=> {
//                             <li key ={p.value}>
//                                 <Link className={p.value === price ? 'text-bold' : ''} to={getFilterUrl({ price: price.value})}
//                                 >
//                                     {p.name}
//                                 </Link>
//                             </li>
//                         })}
//                     </ul>
//                 </div>
//                 </div>
//         </Col>
//         <Col md={9}>
//             {loading ? (
//                 <LoadingBox></LoadingBox>
//             ) : error ? (
//                 <MessageBox variant ="danger">{error}</MessageBox>
//             ): (
//                 <>
//                 <Row className="justify-content-between mb-3">
//                     <Col md={6}>
//                         <div>
//                             {countProducts === 0 ? 'NO' : countProducts} Search Results
//                             {query === 'all' && ':' + query} 
//                             {category === 'all' && ':' + category} 
//                             {price === 'all' && 'Price' + price} 
//                             {query != 'all'  || 
//                             category != 'all' ||
//                             price !== 'all' ? (
//                                 <Button
//                                 variant='light'
//                                 onClick={() => navigate('/search')}>
//                                     <i className='fas fa-times-circle'></i>
//                                 </Button>
//                             ) : null }
//                         </div>
//                     </Col>   
//                     <Col className='text-end'>
//                             Sort by {''}
//                             <select
//                             // value={order}
//                             onChange={(e) => {
//                                 navigate(getFilterUrl({order: e.target.value}))
//                             }}
//                             >
//                                 <option value="justIn">Just In Flowers</option>
//                                 <option value="fabsfavorite">FabsFavs</option>
//                                 <option value="highest">Price: High to Low</option>
//                                 <option value="lowest">Price: Low to High</option>

//                             </select>    
                    
//                     </Col> 
//                 </Row>
//                 {Array.isArray && products.length === 0 && (
//                     <MessageBox>No Flowers of that kind</MessageBox>
//                 )}

//                 <Row>
//                     {Array.isArray && products.map((product) => (
//                         <Col sm={8} lg={3} className="mb-4" key={product._id}>
//                             <Product products ={product}></Product>
//                         </Col>
//                     ))}
//                 </Row>
//                 </>
//             )}
//         </Col>

//       </Row>
//     </div>
//   )
// }
