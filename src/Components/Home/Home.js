import React, { useEffect, useState } from 'react';
import img1 from '../../wild_images/wild-predator-lioness-website-header.jpg';
import img2 from '../../wild_images/lonely-tiger-in-golden-sand-desert-website-header.jpg';
import img3 from '../../wild_images/elephants-in-the-distance-sunset-landscape-website-header.jpg';
import img4 from '../../wild_images/pexels-pixabay-247431.jpg';
import ServiceHome from '../service-home/ServiceHome';
import { Link } from 'react-router-dom';
import award from '../../wild_images/podium_laurel_wreath_golden_02.jpg'
import sony from '../../wild_images/sony.jpg';
import bwpa from '../../wild_images/BWPA.jpg';
import sipa from '../../wild_images/sipa.jpg';
import nature from '../../wild_images/download.jpg';
import land from '../../wild_images/Windland-Smith-Rice-Wildlife-Photo-Competition.jpg';
import sentury from '../../wild_images/Sanctuary-Wildlife-Photography-Awards.jpg';
import thirty from '../../wild_images/35-Awards-Photo-Contest.jpg';
import comedy from '../../wild_images/Comedy-Wildlife-Photography-Awards.jpg';
import Nature from '../../wild_images/NAture-Photographer-of-The-Year-Photo-contest.jpg';

import { BsFillArrowRightCircleFill, BsEmojiNeutralFill,BsTrophy } from 'react-icons/bs';
import useTitle from '../hook/useTitle';

const Home = () => {
    const [homeservices, setHomeservices] = useState([]);
    useTitle("home");
    useEffect(() => {
        fetch('https://wild-star-server.vercel.app/home-services')
            .then(res => res.json())
            .then(data => setHomeservices(data));
    }, [])
    return (
        <div className='mt-6'>
            <div className="carousel w-full shadow-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='m-12 lg:flex gap-4 '>
                {
                    homeservices.map(homeservice => <ServiceHome
                        key={homeservice.id}
                        homeservice={homeservice}
                    ></ServiceHome>)
                }
            </div>
            <div className="grid justify-items-center mb-6  mr-6">
                <Link to="/services"><button className="btn btn-ghost text-xl font-bold shadow-md">See All <BsFillArrowRightCircleFill /></button></Link>

            </div>
            <div className='shadow-xl m-6 rounded'>
                <div className="card card-side bg-base-100  mx-6 p-6">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">What To Know About Becoming a Wildlife Photographer <BsEmojiNeutralFill /> </h2>
                        <p>If you are fascinated by animals, have a passion for photography and love to travel, then becoming a wildlife photographer could offer exciting career opportunities. As a wildlife photographer, you can build a career around focussing on the subjects that interest you most. In this article, we discuss what working as a wildlife photographer is like, assess what skills you'll need to have and explore how to start a career in wildlife photography.A wildlife photographer is a photographer who takes pictures of animals and plants in their natural environments. Wildlife photographers can come from a number of different backgrounds, but most share an interest in animals and observing how different species live in the wild. A wildlife photographer might work on a freelance basis, but many work for digital or print publications that publish content about wildlife. Wildlife photographers might also specialize in observing and photographing a specific type of environment or species of animal or plant, so there are several opportunities to find work that involves subjects you're interested in.</p>

                    </div>
                </div>
            </div>
            <div className='shadow-xl m-6 rounded-md'>
                <footer className="footer p-10 bg-base-200 text-base-content ">
                    <div className='gap-6'>
                        <img className='w-36' src={award} alt="" srcset="" />
                        <p className='text-xl font-bold'>Awards and Achivements <BsTrophy/></p>
                    </div>
                    <div className='gap-6'>
                        <img className='w-36 gap-6' src={sony} alt="" />
                        <img className='w-36 gap-6' src={bwpa} alt="" />
                        <img className='w-28 gap-6' src={sipa} alt="" />

                    </div>
                    <div className='gap-6'>
                        <img className='w-28 gap-6' src={nature} alt="" />
                        <img className='w-28 gap-6' src={sentury} alt="" />
                        <img className='w-28 h-16 gap-6 ' src={land} alt="" />

                    </div>
                    <div className='gap-6'>
                        <img className='w-28 gap-6' src={thirty} alt="" />
                        <img className='w-28 gap-6' src={Nature} alt="" />
                        <img className='w-32  h-16 gap-6' src={comedy} alt="" />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;