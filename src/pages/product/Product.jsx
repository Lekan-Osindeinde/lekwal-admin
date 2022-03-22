import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import "./product.css";
export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="sales performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://solobrown.com/wp-content/uploads/2020/07/original-apple-airpods-500x500-1.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">4123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stoock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="data:image/jpeg;base64,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"
                className="productUploadImg"
                alt=""
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
