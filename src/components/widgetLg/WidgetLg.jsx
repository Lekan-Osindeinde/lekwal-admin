import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGFY3PDZFyOAQ/profile-displayphoto-shrink_800_800/0/1643410903425?e=1653523200&v=beta&t=VSm9xghFEThT2hxVy4COLt0JxN6IHtx9fCXbVjgmpq0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Esther Wale</span>
          </td>
          <td className="widgetLgDate">21st March, 2022</td>
          <td className="widgetLgAmount">$5032.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGFY3PDZFyOAQ/profile-displayphoto-shrink_800_800/0/1643410903425?e=1653523200&v=beta&t=VSm9xghFEThT2hxVy4COLt0JxN6IHtx9fCXbVjgmpq0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Esther Wale</span>
          </td>
          <td className="widgetLgDate">21st March, 2022</td>
          <td className="widgetLgAmount">$5032.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGFY3PDZFyOAQ/profile-displayphoto-shrink_800_800/0/1643410903425?e=1653523200&v=beta&t=VSm9xghFEThT2hxVy4COLt0JxN6IHtx9fCXbVjgmpq0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Esther Wale</span>
          </td>
          <td className="widgetLgDate">21st March, 2022</td>
          <td className="widgetLgAmount">$5032.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGFY3PDZFyOAQ/profile-displayphoto-shrink_800_800/0/1643410903425?e=1653523200&v=beta&t=VSm9xghFEThT2hxVy4COLt0JxN6IHtx9fCXbVjgmpq0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Esther Wale</span>
          </td>
          <td className="widgetLgDate">21st March, 2022</td>
          <td className="widgetLgAmount">$5032.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
export default WidgetLg;
