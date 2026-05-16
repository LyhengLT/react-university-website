import React, { useState } from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: BusinessCourseImg,
        title: 'Bachelor of Business Administration',
        level: 'Undergraduate',
        duration: '4 Years',
        credits: '120 Credits',
        category: 'Business',
        description: 'Develop leadership and strategic thinking skills to excel in Cambodia\'s dynamic business environment and global markets.'
    },
    {
        id: 2,
        img: ComputerScienceCourseImg,
        title: 'Bachelor of Computer Science',
        level: 'Undergraduate',
        duration: '4 Years',
        credits: '120 Credits',
        category: 'Technology',
        description: 'Master software engineering, AI, and data science with hands-on labs and real-world industry projects.'
    },
    {
        id: 3,
        img: LawCourseImg,
        title: 'Bachelor of Law',
        level: 'Undergraduate',
        duration: '4 Years',
        credits: '120 Credits',
        category: 'Law',
        description: 'Build a strong foundation in Cambodian and international law with guidance from practicing legal professionals.'
    },
    {
        id: 4,
        img: HealthcareCourseImg,
        title: 'Bachelor of Healthcare Management',
        level: 'Undergraduate',
        duration: '4 Years',
        credits: '120 Credits',
        category: 'Health',
        description: 'Combine medical knowledge and management skills to lead Cambodia\'s rapidly growing healthcare sector.'
    },
    {
        id: 5,
        img: ArtCourseImg,
        title: 'Master of Arts in Communication',
        level: 'Postgraduate',
        duration: '2 Years',
        credits: '60 Credits',
        category: 'Arts',
        description: 'Advance your expertise in media, journalism, and digital communication in the modern landscape.'
    },
    {
        id: 6,
        img: EducationCourseImg,
        title: 'Master of Education Leadership',
        level: 'Postgraduate',
        duration: '2 Years',
        credits: '60 Credits',
        category: 'Education',
        description: 'Equip yourself to transform educational institutions with innovative pedagogy and leadership excellence.'
    },
    {
        id: 7,
        img: MusicCourseImg,
        title: 'Associate Degree in Music',
        level: 'Associate',
        duration: '2 Years',
        credits: '60 Credits',
        category: 'Arts',
        description: 'Explore music theory, performance, and production in a creative and supportive environment.'
    },
    {
        id: 8,
        img: SportCourseImg,
        title: 'Bachelor of Sport Science',
        level: 'Undergraduate',
        duration: '4 Years',
        credits: '120 Credits',
        category: 'Sport',
        description: 'Study human performance, coaching, and sports management to build a career in the growing sports industry.'
    },
];

const filters = ['All', 'Undergraduate', 'Postgraduate', 'Associate'];

function Courses() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? courses : courses.filter(c => c.level === active);

  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light text-center'>
                <span className='hero-badge hero-text-1'>Academic Programs</span>
                <h1 className='fw-bold hero-text-2 mt-3'>Explore Our Degrees</h1>
                <p className='hero-text-3 mt-2' style={{maxWidth:'560px',opacity:0.82,fontSize:'1rem'}}>
                    Choose from 60+ nationally and internationally accredited programs designed to launch your career on the world stage.
                </p>
            </div>
        </header>

        {/* Filter Tabs */}
        <div className='course-filter-bar py-4'>
            <div className='container d-flex justify-content-center gap-3 flex-wrap'>
                {filters.map(f => (
                    <button
                        key={f}
                        className={`filter-btn ${active === f ? 'active' : ''}`}
                        onClick={() => setActive(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>

        <div className='container py-5'>
            <div className='row g-4'>
                {filtered.map((course, index) => (
                    <div key={course.id} className={`col-lg-6 reveal reveal-scale delay-${(index % 2) + 1}`}>
                        <Card className='course-card shadow-sm h-100'>
                            <div className='course-card-image'>
                                <img src={course.img} alt={course.title} />
                                <div className='course-card-overlay'>
                                    <span className='course-level-badge'>{course.level}</span>
                                </div>
                            </div>
                            <Card.Body className='p-4'>
                                <div className='d-flex gap-3 mb-3'>
                                    <span className='course-meta-chip'><i>📅</i> {course.duration}</span>
                                    <span className='course-meta-chip'><i>📚</i> {course.credits}</span>
                                    <span className='course-meta-chip'><i>🏷</i> {course.category}</span>
                                </div>
                                <Card.Title className='course-title'>{course.title}</Card.Title>
                                <Card.Text className='course-desc'>{course.description}</Card.Text>
                                <button className='btn btn-outline-danger btn-sm btn-shimmer mt-2'>Learn More →</button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5 reveal reveal-up'>
            <FaqAccordion />
        </div>
    </div>
  );
}

export default Courses;
