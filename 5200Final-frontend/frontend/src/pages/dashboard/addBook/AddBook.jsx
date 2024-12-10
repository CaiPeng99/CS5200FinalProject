import React, { useState } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import { useForm } from 'react-hook-form';
import { useAddBookMutation } from '../../../redux/features/books/booksApi';
import Swal from 'sweetalert2';

const AddBook = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setimageFile] = useState(null);
    const [addBook, {isLoading, isError}] = useAddBookMutation()
    const [imageFileName, setimageFileName] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        
        const newBookData = {
            ...data,
            // coverImage: imageFileName
        }
        

        try {
            await addBook(newBookData).unwrap();
            Swal.fire({
                title: "Book added",
                text: "Your book is uploaded successfully!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, It's Okay!"
              });
              reset();
            
        } catch (error) {
            console.error(error);
            alert("Failed to add book. Please try again.")   
        }
      
    }

 
  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        {/* Input Field for Title */}
        <InputField
          label="Book Title"
          name="title"
          placeholder="Enter book title"
          register={register}
        />

        {/* Textarea for Description */}
        <InputField
          label="Description"
          name="description"
          placeholder="Enter book description"
          type="textarea"
          register={register}

        />

        {/* Reusable Select Field for Type */}
        <SelectField
          label="Type"
          name="type"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'Fiction', label: 'Fiction' },
            { value: 'Nonfiction', label: 'Nonfiction' },
            { value: 'Blended', label: 'Blended' },
            // Add more options as needed
          ]}
          register={register}
        />

        {/* Textarea for Author */}
        <InputField
          label="Author"
          name="author"
          placeholder="Enter the Author"
          type="textarea"
          register={register}
        />

        {/* Textarea for SeriesName */}
        <InputField
          label="SeriesName"
          name="seriesName"
          placeholder="Enter the SeriesName"
          type="textarea"
          register={register}
        />

        {/* Textarea for Genres */}
        <InputField
          label="Genres"
          name="genres"
          placeholder="Enter the Genres"
          type="textarea"
          register={register}
        />

        {/* Textarea for SubGenres */}
        <InputField
          label="SubGenres"
          name="subGenres"
          placeholder="Enter the SubGenres"
          type="textarea"
          register={register}
        />

        {/* Textarea for Form */}
        <InputField
          label="Form"
          name="form"
          placeholder="Enter the Form"
          type="textarea"
          register={register}
        />

        {/* Textarea for Format */}
        <InputField
          label="Format"
          name="format"
          placeholder="Enter the Format"
          type="textarea"
          register={register}
        />

        {/* ISBN */}
        <InputField
          label="ISBN"
          name="ISBN"
          type="textarea"
          placeholder="Enter the ISBN"
          register={register}
        />

        {/* Page */}
        <InputField
          label="Page"
          name="page"
          type="number"
          placeholder="Enter the Page"
          register={register}
        />

        {/* Textarea for Publisher */}
        <InputField
          label="Publisher"
          name="publisher"
          placeholder="Enter the Publisher"
          type="textarea"
          register={register}
        />

        {/* PublicationYear */}
        <InputField
          label="PublicationYear"
          name="publicationYear"
          type="number"
          placeholder="Enter the PublicationYear"
          register={register}
        />

        {/* Textarea for Lexile */}
        <InputField
          label="Lexile"
          name="lexile"
          placeholder="Enter the Lexile"
          type="textarea"
          register={register}
        />

        {/* Submit Button */}
        <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
         {
            isLoading ? <span className="">Adding.. </span> : <span>Add Book</span>
          }
        </button>
      </form>
    </div>
  )
}

export default AddBook
