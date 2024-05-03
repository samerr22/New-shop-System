import React from 'react'
import { Link } from 'react-router-dom'

const Shops = () => {
  return (
    <div className='flex justify-center items-center gap-6'>

        <Link to="/ClothShop">
      <div  className='bg-white rounded-lg  border w-60 h-44 mt-40'>  
      <div className='flex justify-center items-center mt-2 '>
          
        <img className='rounded-full w-28 h-28  object-cover' src='https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg'/>
        
         </div>
         <div className='flex justify-center items-center  font-serif text-gray-500 mt-1 text-xl'> Cloth</div>
         
        </div>
        </Link>

        <Link to="/BeautyShop">
        <div  className='bg-white rounded-lg  border w-60 h-44 mt-40'>  
      <div className='flex justify-center items-center mt-2  '>
          
        <img className='rounded-full w-28 h-28   object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzET4BuI4_ITRlzsZ9BcQyJ-YAXUUVGe6XnQ&s'/>
        
         </div>
         <div className='flex justify-center items-center  font-serif text-gray-500 mt-1 text-xl'> Beauty </div>
         
        </div>
        </Link>


        <Link to="/BookShop">
        
        <div  className='bg-white rounded-lg  border w-60 h-44 mt-40'>  
      <div className='flex justify-center items-center mt-2 '>
          
        <img className='rounded-full w-28 h-28  object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73ZnhbzyoosYXcbwgkmrzAOGW50g60rEo_NT4t1-WCQ&s'/>
        
         </div>
         <div className='flex justify-center items-center  font-serif text-gray-500 mt-1 text-xl'> Book</div>
         
        </div>
        </Link>

    </div>
  )
}

export default Shops