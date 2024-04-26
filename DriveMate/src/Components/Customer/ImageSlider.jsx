import React from 'react'
import Slider from './Slider.jsx'

const ImageSlider = () => {
    const slides=[
        {url:"https://cdn.quotesgram.com/img/13/26/1696068046-wallpaper-1920x1080.jpg",title:"Travel"},
        {url:"https://i.pinimg.com/564x/bd/23/64/bd2364cd7edaf22fdb4299dbdf4e8638.jpg",title:"Travel"},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCmHHHZZa3ED8pXzl1ZizMZeFoWHXrs-LAw&s",title:"Travel"},
        {url:"https://marvel-b1-cdn.bc0a.com/f00000000259540/blog.campersinn.com/hs-fs/hub/366142/file-1322091076-jpg/background1-4.jpg",title:"Travel"},
        {url:"https://lifejourney4two.com/wp-content/uploads/2021/07/w-Road-quote-on-Iceland-road-bendy-road-1080x989.jpg",title:"Travel"},
    ]

    const containerStyles={
        width:"100%",
        height: "500px",
        margin: "0 auto", 
    }
  return (
    <div>
      <div style={containerStyles}>
      <Slider slides={slides}/></div>
    </div>
  )
}

export default ImageSlider;
