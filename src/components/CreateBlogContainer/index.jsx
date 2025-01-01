import React, { useState } from 'react'
import { postCard } from '../../http/api';

const CreateBlogContainer = () => {
  const [loading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    desc:'',
    image:null
  })
  const handleChange = (e) => {
    const fileReder = new FileReader()
    if (e.target.name === "image") {
        fileReder.onload = () => {
            setForm({ ...form, [e.target.name]: fileReder.result })
        }

        fileReder.readAsDataURL(e.target.files[0])

    }

    else {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
}

const handleSubmit = (e) =>{
  setIsLoading(true);
  e.preventDefault();
  postCard("/blogs", form, (data) => {
    setIsLoading(false)
    window.location.reload()

  })
Object.keys(form).forEach((key) => {
  setForm((prev) => ({...prev, [key]: ''}))
})
}
  return (
    <div className='container mx-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <form
                    onSubmit={handleSubmit}
                    className='my-10'>
                    <div className='my-4'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <div className="mt-1">
                            <input
                                onChange={handleChange}
                                value={form.name}
                                type="text" placeholder='enter the name' name="name"
                                id="name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm outline-none border  px-5 py-4 border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="desc" className="block text-sm font-medium text-gray-700">description</label>
                        <div className="mt-1">
                            <textarea
                                onChange={handleChange}
                                name='desc'
                                value={form.desc} placeholder='enter the description' className=' px-4 py-2 shadow-sm border border-gray-300 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  rounded-md' rows='3'>
                            </textarea>
                        </div>
                    </div>

                    <div className='my-3'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Profile Image</label>
                        <div className="mt-1 relative border-dashed border-2 border-gray-300 px-4 py-6 flex justify-center items-center rounded-md">
                            <div className='border border-solid border-gray-300 rounded-md p-4'>
                                <i class="ri-upload-cloud-2-line"></i>
                            </div>
                            <input
                                name='image'
                                accept='image/*'
                                onChange={handleChange}
                                type="file" id="file" className="w-full h-full opacity-0 absolute" />

                        </div>
                    </div>
                    <button
                        type='submit'
                        disabled={loading}
                        className=' disabled:bg-slate-400 disabled:text-black bg-blue-500 text-white px-4 py-2 w-full rounded-md'>
                        {loading ? 'loading...' : 'Create'}
                    </button>
                </form>
      </div>
    </div>
  )
}

export default CreateBlogContainer