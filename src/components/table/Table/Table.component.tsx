import TableBody from "./tableBody/Table.body";
import TableHeader from "./Table.header";

const Table = () => {
  return (
    <div className="table-container">
        <main className="table">
     <TableHeader />
      <TableBody /> 
        </main >
    </div>
  );
};

export default Table;
