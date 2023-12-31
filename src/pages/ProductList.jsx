import React, {useState, useEffect}  from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'

export default function ProductList() {

  const dispatch = useDispatch()
  //Lifecycle hook
  const [products, setProducts] = useState([]);

  useEffect(() => {
   let productService = new ProductService()
   productService.getProducts().then(result => setProducts(result.data.data))
  },[])

  const handleAddToCart=(product)=>{
      dispatch(addToCart(product))
  }

  return (
    <div>      
       <Table celled>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>ProductName </Table.HeaderCell>
      <Table.HeaderCell>UnitPrice</Table.HeaderCell>
      <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        products.map(product => (
        <Table.Row key={product.productIdid}>
            <Table.Cell><Link to={`/products/${product.productName}`}>
              {product.productName}</Link></Table.Cell>
            <Table.Cell>{product.unitPrice}</Table.Cell>
            <Table.Cell><Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
      </Table.Row>
        ))
      }
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
           

            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
    </div>
  );
}