import React, { useState, useEffect, useRef } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./style.css";
import Contents from './contents';

function Main_carusel() {
    const contentListRef = useRef(null);
    const [contentList, setContentList] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const contentsDiv = contentListRef.current;
        const divs = contentsDiv ? Array.from(contentsDiv.getElementsByClassName('contents')[0].children) : [];
        const reactElements = divs.map((div, i) => (
            <div key={i} className={`carousel-content`} style={{ '--i': i, '--total': divs.length }} dangerouslySetInnerHTML={{ __html: div.outerHTML }} />
        ));
        setContentList(reactElements);
    }, []);

    const handlePrev = () => {
        setIndex(prevIndex => (prevIndex === 0 ? contentList.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex(prevIndex => (prevIndex === contentList.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
    }, [contentList]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="prev" onClick={handlePrev}>
                    <GrFormPrevious />
                </div>
                <div className='carousel-contents' style={{ transform: `rotateY(${-index * (360 / contentList.length)}deg)` }}>
                    {contentList}
                </div>
                <div className="next" onClick={handleNext}>
                    <GrFormNext />
                </div>
            </div>
            <div ref={contentListRef} style={{ display: 'none' }}>
                <Contents />
            </div>
        </div>
    );
}

export default Main_carusel;
