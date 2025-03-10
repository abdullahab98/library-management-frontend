
import axios from 'axios';
import {useEffect, useState} from "react";
const BookTable = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try{
            const response = await axios.get("http://localhost:8080/book/get-all");
            setBooks(response.data);
            console.log(response.data);
        } catch (error){
            console.error("Error fetching users", error);
        }
    }
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/book/delete/${id}`);
            fetchBooks();
        } catch (error){
            console.error("Error deleting user", error);
        }
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-white bg-blue-600 py-3 px-6 rounded-lg shadow-md text-center">
                Book Table
            </h2>
            <table className="w-full border border-gray-300 rounded-lg shadow-md">
                <thead className="bg-gray-200">
                <tr>
                    <th className="px-4 py-2 text-left">ISBN</th>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left">Authors</th>
                    <th className="px-4 py-2 text-left">Genere</th>
                    <th className="px-4 py-2 text-left">Edition</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id} className="odd:bg-gray-100 hover:bg-gray-200">
                        <td className="px-4 py-2 border">{book.isbn}</td>

                        <td className="px-4 py-2 border">{book.title}</td>
                        <td className="px-4 py-2 border">{book.authors.join(', ')}</td>
                        <td className="px-4 py-2 border">{book.genere}</td>
                        <td className="px-4 py-2 border">{book.edition}</td>
                        <td className="px-4 py-2 border">{book.quantity}</td>
                        <td className="px-4 py-2 border">
                            <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(book.id)} className="px-3 py-1 ml-2 text-white bg-red-500 rounded hover:bg-red-600">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default BookTable;