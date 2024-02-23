import React, { useEffect, useState } from 'react'
import {shortList,longList,list} from './data';
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';



const Carousel = () => {
    const [people,setPeople] = useState(list);
    const [currentPerson,setCurrentPerson] = useState(0);

    const prevSlide = () => {
        setCurrentPerson((oldPerson) => {
            const newIndex = oldPerson - 1;
            if(newIndex<0){
                return people.length-1;
            }
            return newIndex;
        });

    };
    const nextSlide = () => {
        setCurrentPerson((oldPerson) => {
            const result = (oldPerson + 1) % people.length;
            return result;
        });
    }

    useEffect(() => {
        setInterval(() => {
            nextSlide();
        }, 2000);
    },[currentPerson])


  return (
    <section className='slider-container'>
        {people.map((person,personIndex) => {
            const {id,image,name,title,quote} = person
            return(
            <article className='slide'
                style={{transform:`translateX(${100 * 
                    (personIndex - currentPerson)}%)`,
                    opacity:personIndex=== currentPerson? 1 : 0,
                    visibility : personIndex=== currentPerson? 'visible' : 'hidden' }}
             key={id}>
                <img className='person-img' src={image} alt={name}></img>
                <h5 className='name'> {name}</h5>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon'/>
            </article>);
        })}
        <button type='button' className='prev' onClick={prevSlide}><FiChevronLeft/></button>
        <button type='button' className='next' onClick={nextSlide}><FiChevronRight/></button>
    </section>
  )
}

export default Carousel
