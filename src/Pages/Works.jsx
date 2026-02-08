import React from 'react'
import shopifyMockup from "../assets/images/clgprep.png";
import collegeprep from "../assets/images/sec.png";
import movieRecommender from "../assets/images/third.png";
import jobportal from "../assets/images/fifth.png"
import OurWorks from './OurWorks';
import Whyus from './Whyus';
const Works = () => {

   const works = [
  {
    description: `A masterclass in digital minimalism. We designed and developed Shopify
to prove that e-commerce can be both visually stunning and technically
powerful. By combining a clean architectural layout in Figma with a
robust full-stack backbone, we created a seamless shopping journey where
every interaction feels intentional.`,
    image: shopifyMockup,
    name: "SHOPIFY ",
    link: `https://fullstack-ecommerce.netlify.app/`,
    flag:"true"
  },
   {
    description: `"Knowledge grows when it’s shared. College Prep is a centralized platform designed to bring students together by organizing academic resources in one intuitive space. We created a digital library where students can seamlessly upload and access peer-shared notes, turning fragmented study materials into a structured, accessible community asset."`,
    image: collegeprep,
    name: "PREP ",
    link: `https://collage-prep-git-main-sanskar-tamrakars-projects.vercel.app/`,
     flag:"false"
  },
  {
    description:`"An intelligent recommendation engine that uses Machine Learning to suggest movies based on user preferences. It features a seamless Streamlit interface for instant, data-driven results.
Tech Stack: Python, Machine Learning (ML), Pandas, Streamlit.."`,
    image: movieRecommender,
    name: " MOVIE  ",
    link: `https://collage-prep-git-main-sanskar-tamrakars-projects.vercel.app/`,
     flag:"false"
  },
   {
    description:`"A robust career platform connecting job seekers with recruiters. It includes features for job listings, application tracking, and real-time profile management.
Tech Stack: React, Node.js, Vercel."`,
    image: jobportal,
    name: "INSIDERJOBS ",
    link: `https://job-portal-app-client-delta.vercel.app/`,
     flag:"false"
  },
];

  return (
    <div className='flex flex-col'>
        {
            works.map((work, index) => (

                <OurWorks desc={work?.description} image={work?.image} name={work?.name} link={work?.link} flag={work?.flag}></OurWorks>
            ))
        }
        <Whyus></Whyus>
    </div>
  )
}

export default Works
