import {useState} from "react";
import axios from "axios";


const AddBook = () => {
    const [formData, setFormData] = useState({
        bookId: '',
        isbn: '',
        title: '',
        edition: '',
        publicationYear: '',
        genere: '',
        authors: [],
        quantity: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        // setFormData(prev => ({
        //     ...prev,
        //     [name]: value
        // }));
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleAuthorsChange = (e) => {
        const authors = e.target.value.split(',').map(author => author.trim());
        // setFormData(prev => ({
        //     ...prev,
        //     authors
        // }));
        setFormData({...formData, authors});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            await axios.post("http://localhost:8080/book/save",formData)

            setSuccessMessage('Book added successfully!');
            setFormData({
                bookId: '',
                isbn: '',
                title: '',
                edition: '',
                publicationYear: '',
                genere: '',
                authors: [],
                quantity: ''
            });
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="max-w-2xl mx-auto mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Add New Book</h2>

            {successMessage && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">{successMessage}</div>
            )}

            {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{errorMessage}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Book ID */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Book ID
                        </label>
                        <input
                            type="number"
                            name="bookId"
                            value={formData.bookId}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    {/* ISBN */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            ISBN
                        </label>
                        <input
                            type="text"
                            name="isbn"
                            value={formData.isbn}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>
                </div>

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Edition */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Edition
                        </label>
                        <input
                            type="text"
                            name="edition"
                            value={formData.edition}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    {/* Publication Year */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Publication Year
                        </label>
                        <input
                            type="number"
                            name="publicationYear"
                            value={formData.publicationYear}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>
                </div>

                {/* Genre */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Genre
                    </label>
                    <input
                        type="text"
                        name="genere"
                        value={formData.genere}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                    />
                </div>

                {/* Authors */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Authors (comma-separated)
                    </label>
                    <input
                        type="text"
                        value={formData.authors.join(', ')}
                        onChange={handleAuthorsChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                    />
                </div>

                {/* Quantity */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Quantity
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 dark:focus:ring-offset-gray-800"
                >
                    {isSubmitting ? 'Adding...' : 'Add Book'}
                </button>
            </form>
        </div>
    );
};

export default AddBook;