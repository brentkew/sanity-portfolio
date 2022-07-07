import React from "react";
import homeBannerImg from '../ezgif.com-gif-maker.jpg';

export default function Home(){
    return (
        <main>
            <img src={homeBannerImg} alt="" className="absolute object-cover w-full h-full" style={{ height: 750 }} />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-8xl font-bold text-black-100 cursive leading-none lg:leading-snug">Welcome to my Portfolio</h1>
            </section>
        </main>
    );
}