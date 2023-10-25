import React from 'react'
import mainImage from "../assets/main.png"

const MainContent = () => {
  return (
    <div className='mx-5 md:mx-40 my-20 md flex flex-col md:flex-row' id='about'>
    <img src={mainImage} alt='Gambar Putra' className='w-100 h-88 md:w-88 md:h-88' />
    <div className="main-msg flex flex-col pb-3">
        <h1 className='text-7xl font-main self-center text-center mt-20 mb-10'>Putra <span className='text-green-600'>Jangjaya</span></h1>
        <p className='text-center'>Saya adalah orang yang senang mempelajari teknologi baru, dan mudah memahami instruksi yang diberikan orang lain. hubungi saya untuk lebih lanjut <a href="https://linktr.ee/putrajk" className='underline' target='_blank'>disini</a>.</p>
    </div>
</div>
  )
}

export default MainContent