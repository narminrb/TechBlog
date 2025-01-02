import React from 'react'

const CustomPopular = ({name,desc,image,url}) => {
  return (
    <div class="max-w-2xl mx-auto">
    <div class="flex gap-3 overflow-hidden items-center justify-start">

        <div class="relative w-[100px] h-[100px] flex-shrink-0 rounded-xl overflow-hidden">
            <img class="absolute left-0 top-0 w-full h-full object-cover object-center duration-50  transform transition-transform duration-300 ease-in-out hover:scale-110" loading="lazy" src={image}/>
        </div>

        <div class="flex flex-col gap-2 py-2">

            <p class="text-[16px] w-[200px] leading-5 text-black font-semibold">{desc}</p>

            <p class="text-gray-500">
                Description of your 
            </p>

            <span class="flex items-center justify-start text-gray-500">
                <svg class="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                </svg>
                <a href="amitpachange.com" target="_blank">amitpachange.com</a>
            </span>

        </div>

    </div>

</div>
  )
}

export default CustomPopular