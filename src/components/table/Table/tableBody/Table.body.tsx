import TableRow from "./Table.row";

const TableBody = () => {
  const tableData = [
    {
      id: 1,
      customer: "taufiq Zayyad",
      location: "Nazareth",
      orderDate: Date.now() - 999999,
      status: "Delivered",
      amount: "$199.99",
    },
    {
      id: 2,
      customer: "Pickle Rick",
      location: "USA",
      orderDate: Date.now() - 30,
      status: "Canceled",
      amount: "$420.69",
    },
    {
      id: 3,
      customer: "Morty sanchez",
      location: "USA",
      orderDate: Date.now() - 3330,
      status: "Shipped",
      amount: "$133.45",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
    {
      id: 4,
      customer: "abo al falafel",
      location: "Nazareth",
      orderDate: Date.now() - 1220,
      status: "Pending",
      amount: "$51.99",
    },
  ].sort((a, b) => a.orderDate - b.orderDate); //oldest first (a - b)
  return (
    <section className="table-body">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Location</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody >
          {tableData.map((order, index) => {
            const {  customer, location, orderDate, status, amount } = order;
            return (
              <TableRow
                key={Math.random()}
                id={index + 1}
                customer={customer}
                location={location}
                orderDate={orderDate}
                status={status}
                amount={amount}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableBody;
