import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProductForm = ({sendData,editproduct}) => {
    const [image,setImage] = useState(editproduct?editproduct.image:"");
    const [imagetwo,setImagetwo] = useState(editproduct?editproduct.imagetwo:"");
    const [title,setTitle] = useState(editproduct?editproduct.title:"");
    const [price,setPrice] = useState(editproduct?editproduct.price:"");
    const [availability,setAvailability] = useState(editproduct?editproduct.availability:"");
    const [availabilityaz,setAvailabilityaz] = useState(editproduct?editproduct.availabilityaz:"");
    const [type,setType] = useState(editproduct?editproduct.type:"");
    const [typeaz,setTypeaz] = useState(editproduct?editproduct.typeaz:"");
    const [brand,setBrand] = useState(editproduct?editproduct.brand:"");
    const [desc , setDesc] = useState(editproduct?editproduct.desc:"");
    const [descaz , setDescaz] = useState(editproduct?editproduct.descaz:"");
    const productFormSubmit =e=>{
        e.preventDefault();
        sendData({
            image:image,
            imagetwo:imagetwo,
            title:title,
            price:price,
            availability:availability,
            availabilityaz:availabilityaz,
            type:type,
            typeaz:typeaz,
            brand:brand,
            desc:desc,
            descaz:descaz,

        })
    }
    return (
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <Form onSubmit={productFormSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >image</Form.Label>
                        <Form.Control  value={image} onChange={e=>setImage(e.target.value)} type="text" placeholder="Enter image url" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >imagetwo</Form.Label>
                        <Form.Control  value={imagetwo} onChange={e=>setImagetwo(e.target.value)} type="text" placeholder="Enter image url" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Title</Form.Label>
                        <Form.Control   value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Enter title" />
                    </Form.Group>     

                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Price</Form.Label>
                        <Form.Control   value={price}onChange={e=>setPrice(e.target.value)} type="text" placeholder="Enter price" />
                    </Form.Group>


                   
                    
                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Availability</Form.Label>
                        <Form.Control  value={availability} onChange={e=>setAvailability(e.target.value)} type="text" placeholder="Enter rate" />
                    </Form.Group> 
                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Availabilityaz</Form.Label>
                        <Form.Control  value={availabilityaz} onChange={e=>setAvailabilityaz(e.target.value)} type="text" placeholder="Enter rate" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Type</Form.Label>
                        <Form.Control  value={type} onChange={e=>setType(e.target.value)} type="text" placeholder="Enter rate" />
                    </Form.Group><Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Typeaz</Form.Label>
                        <Form.Control  value={typeaz} onChange={e=>setTypeaz(e.target.value)} type="text" placeholder="Enter rate" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Brand</Form.Label>
                        <Form.Control  value={brand} onChange={e=>setBrand(e.target.value)} type="text" placeholder="Enter rate" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Description</Form.Label>
                        <Form.Control  value={desc} onChange={e=>setDesc(e.target.value)} type="text" placeholder="Enter rate" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label className='text-light' >Description</Form.Label>
                        <Form.Control  value={descaz} onChange={e=>setDescaz(e.target.value)} type="text" placeholder="Enter rate" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                       {editproduct?"Edit":"Add"}
                    </Button>
                </Form>
            </Col>
        </div>
    )
}

export default ProductForm