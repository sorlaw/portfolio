import React from 'react'
import htmlImage from "../assets/skills/html.png"
import css from "../assets/skills/css-3.png"
import jsImage from "../assets/skills/js.png"
import reactImage from "../assets/skills/physics.png"
import expressImage from "../assets/skills/icons8-express-js-500.png"
import mysqlImage from "../assets/skills/icons8-mysql-480.png"
import nodeImage from "../assets/skills/icons8-node-js-240.png"
import flutterImage from "../assets/skills/icons8-flutter-480.png"
import bashImage from "../assets/skills/gnu-bash.png"
import phpImage from "../assets/skills/php.png"

const Tech = () => {
  return (
    <div id='tech'>
        <h1 className='text-center text-4xl my-5 font-bold font-main'>My Skills</h1>
        <div className="skills px-5 flex flex-col items-center md:justify-evenly md:flex-row gap-10">
            <img src={htmlImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
            <img src={css} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
            <img src={jsImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
            <img src={reactImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
            <img src={expressImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
        </div>
        <div className="skills px-5 flex flex-col mt-0 md:mt-5 items-center md:justify-evenly md:flex-row gap-10">
        <img src={mysqlImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
            <img src={nodeImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
            <img src={flutterImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
            <img src={bashImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
            <img src={phpImage} alt='Logo html' className='w-52 opacity-100 md:opacity-50 hover:opacity-100' />
        </div>
    </div>
  )
}

export default Tech