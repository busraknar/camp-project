import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect}  from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
  let { id } = useParams()  //Sayfanın idsi


  const [product, setProduct] = useState({}); //ilk değeri array değil boş bir obje

  useEffect(() => {
   let productService = new ProductService()
   productService.getById(id).then(result => setProduct(result.data.data))
  },[])



  return (
    <div>
      {id} 
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='/images/avatar/large/steve.jpg'
            />
            <Card.Header>{product.productId}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

