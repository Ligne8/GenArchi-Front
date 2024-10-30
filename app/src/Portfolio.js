import React from 'react';
import Navbar from './Navbar';

import timothee from './assets/timothee.png';
import leo from './assets/leo.png';
import daniel from './assets/daniel.png';
import ronan from './assets/ronan.png';
import tom from './assets/tom.png';
import mathieu from './assets/mathieu.png';

const teamMembers = [
    {
        name: 'Timothée Drode',
        role: 'Apiculteur',
        image: timothee,
    },
    {
        name: 'Léo Guazzaroni',
        role: 'Pizzaïolo',
        image: leo,
    },
    {
        name: 'Daniel Roux',
        role: 'Botaniste',
        image: daniel,
    },
    {
        name: 'Ronan Pédron',
        role: 'Ultra trailer',
        image: ronan,
    },
    {
        name: 'Tom Ami',
        role: 'Distillateur',
        image: tom,
    },
    {
        name: 'Mathieu Marin',
        role: 'Humoriste',
        image: mathieu,
    },
];

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto p-28 bg-gray-100">
                <h1 className="text-4xl font-bold text-center mb-4">Notre Équipe</h1>
                <h2 className="text-xl font-medium text-center text-gray-700 mb-6 max-w-2xl mx-auto mb-10">
                    Des développeurs full stack capables de débugger un serveur tout en cuisinant une pizza ou en soignant des abeilles !
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 text-center">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="rounded-full w-48 h-48 mx-auto mb-4 transform transition-transform duration-300 hover:scale-110" 
                            />
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Portfolio;
