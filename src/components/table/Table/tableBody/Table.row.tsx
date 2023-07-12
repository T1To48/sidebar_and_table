
const TableRow = ({id,customer,location,orderDate,status,amount}:{id:number,customer:string,location:string,orderDate:number,status:string,amount:string}) => {
  return (
    <tr>
                <td>{id}</td>
                <td><img src="public/DuckDuckGo-icon.png" alt="IMG"/>{customer}</td>
                <td>{location}</td>
                <td>{orderDate}</td>
                <td><p className={`status ${status}`}>{status}</p></td>
                <td>{amount}</td>
            </tr>
  )
}

export default TableRow