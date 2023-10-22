import { Button, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeBlogFromDatabase } from "../../manager/actions/blogAction";

function BlogDashboard() {
  const brState = useSelector((state) => state.br);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-center text my-5 text-light ">Admin Panel</h1>
      <Link className="btn btn-success my-4" to="/blogadmin/add">
        Add blog
      </Link>
      <Link className="btn btn-success my-4 mx-2" to="/">
        Home
      </Link>
      <Link className="btn btn-success my-4 mx-2" to="/admin">
        Products Admin Page
      </Link>
      <Col md={12}>
        <Table striped  table-dark hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              {/* <th>Titleaz</th> */}
              {/* <th>Date</th> */}
              {/* <th>Author</th> */}
              <th>text1</th>
              <th>text2</th>
              <th>text3</th>
              <th>text4</th>
              <th>textaz1</th>
              <th>textaz2</th>
              <th>textaz3</th>
              <th>textaz4</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {brState.reverse().map((item, count,id) => (
              <tr key={count}>
                <td>{count + 1}</td>
                <td>
                  <img src={item.image} width={100} alt="" />
                </td>
                <td>{item.title}</td>
                {/* <td>{item.titleaz}</td> */}
                {/* <td>{item.date}</td> */}
                {/* <td>{item.author}</td> */}
                <td>{item.text1} </td>
                <td>{item.text2} </td>
                <td>{item.text3} </td>
                <td>{item.text4} </td>
                <td>{item.textaz1} </td>
                <td>{item.textaz2} </td>
                <td>{item.textaz3} </td>
                <td>{item.textaz4} </td>

                <td>
                  <Link
                    className="btn btn-warning"
                    to={`/blogadmin/edit/${item.id}`}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(removeBlogFromDatabase(item.id));
                    }}
                    variant="danger"
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </>
  );
}

export default BlogDashboard;
