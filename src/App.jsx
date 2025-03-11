import BookTable from "./component/BookTable.jsx";
import NavBar from "./NavBar.jsx";
import AddBook from "./component/AddBook.jsx";



function App() {
    // const [books, setBooks] = useState([]);
    // const fetchBooks = async () => {
    //     try{
    //         const response = await axios.get("http://localhost:8080/book/get-all");
    //         setBooks(response.data);
    //         console.log(response.data);
    //     } catch (error){
    //         console.error("Error fetching users", error);
    //     }
    // }

  return (
    <>
        {/*<NavBar></NavBar>*/}
        <AddBook></AddBook>
        <BookTable ></BookTable>


    </>
  )
}

export default App
