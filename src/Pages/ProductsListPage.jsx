import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsListUser } from '../Redux/usersActions/usersAction'
import { Card } from 'react-bootstrap'

const ProductsListPage = () => {
  const dispatch = useDispatch()
  const data = useSelector(state=>state.userReducer.products)
  useEffect(()=>{
    dispatch(fetchProductsListUser())
  },[])
  return (
    <div>
      <h4>Products List</h4>
      <div>
        {data.map(item=> <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img src={item.image}></Card.Img>
        <Card.Title>{item?.title}</Card.Title>
      </Card.Body>
    </Card>)}
      </div>
      </div>
  )
}

export default ProductsListPage