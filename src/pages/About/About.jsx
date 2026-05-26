import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';
import { FOUNDING_YEAR, getSiteDateInfo } from '../../utils/siteDates';

const persons = [
    { id: 1, img: Person1, name: 'H.E. Dr. Sok Vanna', role: 'Rector' },
    { id: 2, img: Person2, name: 'Prof. Chan Dara', role: 'Vice Rector, Academic Affairs' },
    { id: 3, img: Person3, name: 'Dr. Lim Sophea', role: 'Dean, Faculty of Business' },
    { id: 4, img: Person4, name: 'Dr. Meas Kosal', role: 'Dean, Faculty of Technology' },
    { id: 5, img: Person5, name: 'Dr. Heng Piseth', role: 'Dean, Faculty of Law' },
    { id: 6, img: Person6, name: 'Prof. Rin Sokunthea', role: 'Dean, Faculty of Education' },
    { id: 7, img: Person7, name: 'Dr. Keo Bopha', role: 'Director, Research & Innovation' },
    { id: 8, img: Person8, name: 'Mr. Phon Ratana', role: 'Head, Student Affairs' },
    { id: 9, img: Person9, name: 'Ms. Noun Sreymom', role: 'Director, International Relations' },
];

const getMilestones = ({ currentYear, yearsOfExcellence }) => [
    { year: FOUNDING_YEAR, event: 'BELTEI was founded as a pioneering private institution in Cambodia.' },
    { year: '2002', event: 'Achieved full university status and launched degree programs.' },
    { year: '2012', event: 'Opened two additional campuses — Chom Chav and Prey Sor.' },
    { year: currentYear, event: `Celebrating ${yearsOfExcellence} years of excellence with 100,000+ graduates.` },
];

function About() {
  const siteDates = getSiteDateInfo();
  const milestones = getMilestones(siteDates);

  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light text-center'>
                <span className='hero-badge hero-text-1'>Our Story</span>
                <h1 className='text-center fw-bold hero-text-2 mt-3'>About BIU</h1>
                <p className='text-center hero-text-3 mt-2' style={{maxWidth:'620px',opacity:0.82,fontSize:'1rem'}}>
                    "BELTEI International University has become the most well-known university in Cambodia, delivering world-class education aligned with national and international standards recognized globally."
                </p>
            </div>
        </header>

        {/* Study with us */}
        <div className='container my-5 study-section'>
            <div className='row gy-5 align-items-center'>
                <div className='col-lg-6 reveal reveal-left'>
                    <span className='section-label'>Why Study With Us</span>
                    <h2 className='mt-3 mb-4'>Shaping Cambodia's<br />Future Leaders</h2>
                    <p>
                        Founded in {FOUNDING_YEAR}, BELTEI International University has grown into Cambodia's most respected
                        higher education institution. We offer internationally accredited programs taught by leading
                        academics and industry practitioners across three modern campuses in Phnom Penh.
                    </p>
                    <p>
                        Our graduates are employed by Cambodia's top companies, government agencies, and
                        international organizations — proof that a BIU degree truly opens doors.
                    </p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg btn-shimmer mt-2'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center reveal reveal-right'>
                    <div className='img-zoom rounded-3 shadow-lg w-85'>
                        <img src={AboutUsSectionImg} className='img-fluid rounded-3' alt="BIU Campus" />
                    </div>
                </div>
            </div>
        </div>

        {/* Timeline */}
        <div className='milestone-section py-5'>
            <div className='container'>
                <h2 className='text-center mb-5 reveal reveal-up heading-underline'>Our Milestones</h2>
                <div className='row gy-4 justify-content-center'>
                    {milestones.map((m, i) => (
                        <div key={i} className={`col-md-6 col-lg-3 reveal reveal-up delay-${i + 1}`}>
                            <div className='milestone-card'>
                                <div className='milestone-year'>{m.year}</div>
                                <p className='milestone-event'>{m.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5 reveal reveal-up'>
            <ChooseSection />
        </div>

        {/* Leadership team */}
        <div className='bg-body-tertiary py-5'>
            <div className='container'>
                <span className='section-label d-block text-center mb-3 reveal reveal-up' style={{width:'fit-content',margin:'0 auto 12px'}}>Leadership</span>
                <h2 className='text-center mb-5 reveal reveal-up heading-underline'>Meet Our Team</h2>
                <div className='row g-4'>
                    {persons.map((person, index) => (
                        <div key={person.id} className={`col-md-4 reveal reveal-scale delay-${(index % 3) + 1}`}>
                            <div className='team-card'>
                                <div className='person-img'>
                                    <img src={person.img} className='img-fluid' alt={person.name} />
                                </div>
                                <div className='team-info'>
                                    <h6 className='team-name'>{person.name}</h6>
                                    <p className='team-role'>{person.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
