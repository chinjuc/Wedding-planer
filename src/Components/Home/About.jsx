import React from 'react'
import { asset } from '../../assets/asset'
import './About.css'
import ImageSlider from '../Contents/ImageSlider'
import Contact from '../../Pages/Contact'
const About = () => {

  const abouts=[
    {title:"Why Choose Us",
      para:"We believe your wedding should be more than just an event—it should be a magical experience filled with love and joy. Our team is passionate about turning your dreams into reality, ensuring every detail is handled with care. With creativity, professionalism, and attention to detail, we make your big day truly unforgettable."},
    {title:"Personalized Planning",
      para:"Every couple is unique, and so should be their wedding. We take time to understand your story, style, and preferences, creating a personalized plan that reflects your vision perfectly. Whether it’s an intimate ceremony or a grand celebration, our planners customize every detail, from décor to guest experiences, making sure everything feels truly yours."},
    {title:"Trending Services",
      para:"We bring the latest wedding trends to life with elegance and class. From destination weddings, luxury décor, themed parties, to modern entertainment options, we offer services that match current styles while staying timeless. Our creative approach ensures your celebration stands out, impresses your guests, and becomes a memorable event talked about for years."},
    {title:"Stress-Free Experience",
      para:"Planning a wedding can be overwhelming, but with us, it’s a smooth and enjoyable journey. Our dedicated team manages vendors, schedules, décor, and every small detail, allowing you to focus on creating memories. We handle challenges with professionalism and care, ensuring your wedding day flows perfectly so you can relax and celebrate fully."},
  ]
  return (
    <>
    <h2 className='abt-title' id='about'>About</h2>
      <div className=' abt-head'>
  <div className='abt-img'>
    <img src={asset.Wedding2} alt="" />
  </div>
  <div className='abt-right'>
    {abouts.map((section,index)=>(
      <div key={index} className='abt-para'>
        <h1>{section.title}</h1>
        <p>{section.para}</p>
      </div>
    ))}
  </div>
</div>
<Contact />
    </>
  )
}

export default About