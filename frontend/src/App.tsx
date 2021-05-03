import DataTable from "components/DataTable";
import Footer from "components/footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">CONTEÚDO</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
