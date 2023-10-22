import { Button, Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProductFromDatabase } from '../../manager/actions/productAction';


function Dashboard() {
  const prState = useSelector((state) => state.pr);
    const dispatch = useDispatch();

  return (
   <Container>
    <h1 className='text-center text my-5 text-light'>Admin Panel</h1>
    <Link className="btn btn-success my-4" to="/admin/add">Add product</Link>  
    <Link className="btn btn-success my-4 mx-2" to="/">Home</Link>  
    <Link className="btn btn-success my-4 mx-2" to="/blogadmin">Blog Admin Page</Link>  
        <Col md={12}>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Imagetwo</th>
          <th>Title</th>
          <th>Price</th>
          <th>Type</th>
          <th>Typeaz</th>
          <th>Desc</th>
          <th>Descaz</th>
          <th>Brand</th>
          <th>Availability</th>
          <th>Availabilityaz</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {prState.reverse().map((item,count)=>(
            <tr key={count}>
          <td>{count+1}</td>
          <td><img src={item.image} width={100} alt="" /></td>
          <td><img src={item.imagetwo} width={100} alt="" /></td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.type} </td>
          <td>{item.typeaz} </td>
          <td>{item.desc} </td>
          <td>{item.descaz} </td>
          <td>{item.brand} </td>
          <td>{item.availability}</td>
          <td>{item.availabilityaz}</td>
          
          <td><Link className='btn btn-warning' to={`/admin/edit/${item.id}`}>Edit</Link></td>
          <td><Button onClick={()=>{dispatch(removeProductFromDatabase(item.id))}} variant='danger'>X</Button></td>
        </tr>
        
        ))}
      
      </tbody>
    </Table>
        </Col>
   </Container>
  );
}

export default Dashboard;