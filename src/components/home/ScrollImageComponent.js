import React, { useState, useEffect } from 'react';

const ScrollImageComponent = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
      // 이미지 데이터를 가져오는 함수 (예: API 호출)
      const fetchImages = async () => {
        // 이미지 데이터를 가져오는 비동기 작업 수행
        const imageData = await fetchImageData(); // 이미지 데이터 가져오는 함수
        setImages(imageData);
      };
  
      fetchImages(); // 이미지 데이터 가져오기
  
      // 스크롤 이벤트 리스너 등록
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const imagesToShow = images.filter((image) => image.position < scrollPosition);
        setImages(imagesToShow);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [images]); 
  
    return (
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
            className="m-2 opacity-0 transition-opacity duration-500 ease-in-out"
          />
        ))}
      </div>
    );
  };
  
export default ScrollImageComponent;