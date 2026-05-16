import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import { useCountUp } from '../../hooks/useCountUp';

const blogs = [
    {
        id: 1,
        img: Blog1Img,
        title: 'Scholarship Opportunities at BIU',
        description: 'BELTEI International University offers a wide range of scholarships for outstanding students, covering tuition fees and living expenses to ensure every talented student can access world-class education.'
    },
    {
        id: 2,
        img: Blog2Img,
        title: 'Campus Life & Student Activities',
        description: 'From cultural festivals to sports championships, life at BIU is vibrant and enriching. Our student clubs, events, and exchange programs help students build lifelong connections and leadership skills.'
    },
    {
        id: 3,
        img: Blog3Img,
        title: 'Academic Excellence & Rankings',
        description: 'Consistently recognized as one of Cambodia\'s top institutions, BIU partners with international universities to offer globally accredited programs that open doors to careers worldwide.'
    }
];

const stats = [
    { label: 'Students Enrolled', value: 15000, suffix: '+' },
    { label: 'Programs Offered', value: 60, suffix: '+' },
    { label: 'Years of Excellence', value: 32, suffix: '' },
    { label: 'Graduate Employment', value: 95, suffix: '%' },
];

function StatCounter({ value, suffix, label }) {
    const [count, ref] = useCountUp(value, 1800);
    return (
        <div ref={ref} className='stat-item reveal reveal-up'>
            <div className='stat-number'>{count.toLocaleString()}{suffix}</div>
            <div className='stat-label'>{label}</div>
        </div>
    );
}

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center text-center'>
                <span className='hero-badge hero-text-1'>Cambodia's Premier University Since 1992</span>
                <h1 className='fw-bold hero-text-2'>BELTEI International<br />University</h1>
                <p className='hero-subtitle hero-text-3'>
                    Empowering the next generation of Cambodian leaders through world-class education,
                    cutting-edge research, and a vibrant campus community.
                </p>
                <div className='d-flex flex-column flex-sm-row align-items-center gap-3 hero-text-4'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg btn-shimmer px-4'>Explore Degrees</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg btn-shimmer px-4'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        {/* Stats Section */}
        <div className='stats-section py-5'>
            <div className='container'>
                <div className='row g-4 justify-content-center'>
                    {stats.map((s, i) => (
                        <div key={i} className='col-6 col-lg-3'>
                            <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="py-5 reveal reveal-up">
            <ChooseSection />
        </div>

        {/* Start Courses Section */}
        <div className='py-5 start-courses-section'>
            <div className='container'>
                <div className='row d-flex align-items-center justify-content-around gy-5'>
                    <div className='col-lg-5 reveal reveal-left'>
                        <span className='section-label'>Enroll Now</span>
                        <h2 className='mt-3 mb-3'>2025 Academic<br />Intake Is Open</h2>
                        <p style={{color:'var(--text-muted)',lineHeight:'1.8',marginBottom:'28px'}}>
                            Applications are now open for undergraduate, postgraduate, and doctoral programs.
                            Secure your place at Cambodia's most internationally recognized university.
                        </p>
                        <div className='d-flex flex-wrap gap-3'>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg btn-shimmer'>View Programs</button>
                            </Link>
                            <Link to="/contact">
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Apply Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-5 reveal reveal-right'>
                        <div className='img-zoom rounded-3 shadow-lg'>
                            <img src={StartCoursesImg} className='img-fluid rounded-3' alt="BIU Campus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5 reveal reveal-up">
            <FaqAccordion />
        </div>

        {/* Blog Section */}
        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <span className='section-label mb-3 reveal reveal-up' style={{background:'rgba(245,166,35,0.12)',color:'var(--gold)',borderColor:'rgba(245,166,35,0.3)'}}>Latest News</span>
                <h2 className='text-center text-capitalize mb-2 reveal reveal-up heading-underline'>From Our Blog</h2>
                <p className='text-center mb-5 reveal reveal-up' style={{opacity:0.7,maxWidth:'520px',fontSize:'0.92rem'}}>
                    Stay updated with the latest news, events, and insights from BELTEI International University.
                </p>
                <div className='row g-4 w-100'>
                    {blogs.map((blog, index) => (
                        <div key={blog.id} className={`col-md-6 col-lg-4 reveal reveal-up delay-${index + 1}`}>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow card-cool bg-dark text-light border-0'>
                                    <div className='img-zoom'>
                                        <Card.Img variant="top" src={blog.img} style={{height:'200px',objectFit:'cover'}} />
                                    </div>
                                    <Card.Body className='p-4'>
                                        <span className='blog-tag'>News</span>
                                        <Card.Title className='mt-2' style={{fontSize:'1rem',fontWeight:700}}>{blog.title}</Card.Title>
                                        <Card.Text style={{fontSize:'0.85rem',opacity:0.75,lineHeight:'1.65'}}>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5 btn-shimmer reveal reveal-up'>Read More Blogs</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Home;
