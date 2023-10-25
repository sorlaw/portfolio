import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import project1 from "../assets/projects/1.png";
  import Project2 from "../assets/projects/2.png";
  import Project3 from "../assets/projects/3.png";
  import Project4 from "../assets/projects/4.png";
  import Project5 from "../assets/projects/sekolah.png";  

  
  const CardDefault = ({ img, title, description, link }) => (
    <Card className="mt-6 w-100 my-5 mx-5 md:w-3/12">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={img} alt='gambar project' />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>
          <a href={link} target='_blank'>Klik disini</a>
        </Button>
      </CardFooter>
    </Card>
  );

const Project = () => {
  return (
    <div className='flex flex-col' id='projects'>
        <h1 className='text-4xl text-center font-bold'>Apa Saja yang pernah saya buat?</h1>
        <div className="project-list flex flex-col md:flex-row self-center justify-self-center mt-8">
            <CardDefault img={project1} title='Prakiraan Cuaca' description='Website ini saya buat menggunakan html,css, dan javascript murni. Untuk Api saya mengambil dari Openweathermap' link='https://sorlaw.github.io/weather-web' />
            <CardDefault img={Project2} title='Pengaduan Masyarakat' description='Website ini saya buat untuk menyelesaikan syarat kelulusan dari SMK Fatahillah Cileungsi yaitu ujikom' link='https://github.com/sorlaw/aplikasi_pengaduan_masyarakat' />
            <CardDefault img={Project3} title='Sajin' description='Aplikasi mobile ini saya buat menggunakan framework expo react native. Aplikasi ini dibuat untuk memenuhi syarat kelulusan SMK Fatahillah Cileungsi yaitu Tugas Akhir' link='https://github.com/sorlaw/sajin'  />
            <CardDefault img={Project4} title='Personal App' description='Aplikasi mobile ini saya buat untuk mengerjakan proyek freelance saya. Yaitu membuat CRUD sederhana dengan gambar menggunakan expo react native' link='https://github.com/sorlaw/PersonalApp'  />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly mt-5">
            <CardDefault img={Project5} title='Sekolahku' description='Aplikasi mobile ini saya buat untuk kebutuhan kantor menggunakan react native dan sqlite' link='https://github.com/sorlaw/Sekolahku'  />
            <CardDefault img={Project5} title='Sekolahku' description='Aplikasi mobile ini saya buat untuk kebutuhan kantor menggunakan flutter dan sqflite' link='https://github.com/sorlaw/sekolahku101'  />
        </div>
    </div>
  )
}

export default Project