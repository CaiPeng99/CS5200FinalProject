import React, { useEffect } from 'react'
import InputField from '../addBook/InputField'
import SelectField from '../addBook/SelectField'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchBookByIdQuery, useUpdateBookMutation } from '../../../redux/features/books/booksApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateBook = () => {
  const { id } = useParams();
  const { data: bookData, isLoading, isError, refetch } = useFetchBookByIdQuery(id);
  
  console.log(bookData)

  const [updateBook] = useUpdateBookMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    console.log('Set Data!');
    
    if (bookData) {
      setValue('title', bookData.title);
      setValue('type', bookData.type);
      setValue('author', bookData.author);
      setValue('form', bookData.form);
      setValue('format', bookData.format);
      setValue('ISBN', bookData.ISBN);
      setValue('publisher', bookData.publisher)
    }
  }, [bookData, setValue])

  const onSubmit = async (data) => {
    console.log("submit data" ,data);

    const updateBookData = {
      title: data.title,
      // description: data.description,
      type: data.type,
      author: data.author,
      form: data.form,
      format: data.format,
      ISBN: data.ISBN,
      publisher: data.publisher

      // title: bookData.title,
      // // description: data.description,
      // type: bookData.type,
      // author: bookData.author,
      // form: bookData.form,
      // format: bookData.format,
      // ISBN: bookData.ISBN,
      // publisher: bookData.publisher


    
    };
    try {
      
      // await axios.put(`${getBaseUrl()}/api/books/edit/${id}`, updateBookData, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   }
      // })
      await updateBook({ id, ...updateBookData }).unwrap();
      console.log("Await TRY!")

      Swal.fire({
        title: "Book Updated",
        text: "Your book is updated successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!"
      });
      
      await refetch();
      console.log("refetch !!!");
      reset();
      
    } catch (error) {
      console.log("Failed to update book.");
      alert("Failed to update book.");
    }
  }
  // if (isLoading) return <Loading />
  if (isError) return <div>Error fetching book data</div>
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter book title"
          register={register}
        />

        {/* <InputField
          label="Description"
          name="description"
          placeholder="Enter book description"
          type="textarea"
          register={register}
        /> */}

        <SelectField
          label="Type"
          name="type"
          options={[
            { value: '', label: 'Choose A Category' },
            // { value: 'business', label: 'Business' },
            // { value: 'technology', label: 'Technology' },
            // { value: 'fiction', label: 'Fiction' },
            // { value: 'horror', label: 'Horror' },
            // { value: 'adventure', label: 'Adventure' },
            { value: 'Fiction', label: 'Fiction' },
            { value: 'Nonfiction', label: 'Nonfiction' },
            { value: 'Blended', label: 'Blended' },
          ]}
          register={register}
        />
        {/* <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
          </label>
        </div> */}

          {/* Textarea for Author */}
          <InputField
          label="Author"
          name="author"
          placeholder="Enter the Author"
          type="textarea"
          register={register}
        />

        {/* Textarea for SeriesName
        <InputField
          label="SeriesName"
          name="SeriesName"
          placeholder="Enter the SeriesName"
          type="textarea"
          register={register}
        /> */}

         {/* Textarea for Genres
         <InputField
          label="Genres"
          name="Genres"
          placeholder="Enter the Genres"
          type="textarea"
          register={register}
        /> */}

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

          {/* Textarea for Publisher */}
            <InputField
                label="Publisher"
                name="publisher"
                placeholder="Enter the Publisher"
                type="textarea"
                register={register}
            />



        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Book
        </button>
      </form>
    </div>
  )
}

export default UpdateBook