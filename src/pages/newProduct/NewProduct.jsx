import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="productFormItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="productFormItem">
          <label>Name</label>
          <input type="text" placeholder="New Product" />
        </div>
        <div className="productFormItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>

        <div className="productFormItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductionButton">Create</button>
      </form>
    </div>
  );
}