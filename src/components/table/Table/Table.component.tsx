import TableBody from "./tableBody/Table.body";
import TableHeader from "./Table.header";

const Table = () => {
  return (
    <div className="table-container home">
        <main className="table">
     <TableHeader />
      <TableBody /> 
        </main >
    </div>
  );
};

export default Table;
