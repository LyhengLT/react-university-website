import React, { useEffect, useState } from 'react';
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
import { FOUNDING_YEAR, formatCambodiaDateTime, getSiteDateInfo } from '../../utils/siteDates';

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

const getStats = (yearsOfExcellence) => [
    { label: 'Students Enrolled', value: 15000, suffix: '+' },
    { label: 'Programs Offered', value: 60, suffix: '+' },
    { label: 'Years of Excellence', value: yearsOfExcellence, suffix: '' },
    { label: 'Graduate Employment', value: 95, suffix: '%' },
];

const heroHighlights = [
    'Global transfer pathways',
    'Industry-ready programs',
    'Scholarship support'
];

const getCampusSignals = ({ intakeYear, yearsOfExcellence }) => [
    {
        eyebrow: 'Admissions Pulse',
        title: `${intakeYear} Intake Now Open`,
        text: 'Applications are active across undergraduate, postgraduate, and doctoral pathways.',
        meta: 'Live application cycle',
    },
    {
        eyebrow: 'Student Experience',
        title: 'Connected Campus Life',
        text: 'Clubs, events, exchange programs, and industry sessions keep the student journey active.',
        meta: '3 Phnom Penh campuses',
    },
    {
        eyebrow: 'Institution Signal',
        title: `${yearsOfExcellence} Years Strong`,
        text: 'A long-running academic network with international pathways and career-ready programs.',
        meta: 'Since 1992',
    },
];

const getApplicationSteps = (intakeYear) => [
    {
        label: 'Step 01',
        title: 'Choose your pathway',
        text: `Compare programs for the ${intakeYear} intake and match your degree to your career target.`,
    },
    {
        label: 'Step 02',
        title: 'Send your documents',
        text: 'Prepare academic records, ID documents, and scholarship materials for review.',
    },
    {
        label: 'Step 03',
        title: 'Meet admissions',
        text: 'Get guided by the admissions team on program fit, tuition, and campus options.',
    },
    {
        label: 'Step 04',
        title: 'Confirm enrollment',
        text: 'Reserve your place, finish payment planning, and start orientation with BIU.',
    },
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

function LiveDateBadge() {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='hero-date-pill hero-text-3' aria-live='polite'>
            <span className='hero-date-orbit'></span>
            <span>Today in Phnom Penh</span>
            <strong>{formatCambodiaDateTime(now)}</strong>
        </div>
    );
}

function Home() {
  const siteDates = getSiteDateInfo();
  const stats = getStats(siteDates.yearsOfExcellence);
  const campusSignals = getCampusSignals(siteDates);
  const applicationSteps = getApplicationSteps(siteDates.intakeYear);

  return (
    <div className='home-page'>
        <header className='home-hero text-light'>
            <div className='container hero-shell'>
                <div className='hero-content'>
                    <span className='hero-badge hero-text-1'>Cambodia's Premier University Since {FOUNDING_YEAR}</span>
                    <h1 className='fw-bold hero-text-2'>Build your future at BELTEI International University</h1>
                    <p className='hero-subtitle hero-text-3'>
                        International programs, practical learning, and a connected campus experience
                        for students ready to lead in Cambodia and beyond.
                    </p>
                    <LiveDateBadge />
                    <div className='d-flex flex-column flex-sm-row align-items-sm-center gap-3 hero-text-4'>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg btn-shimmer px-4'>Explore Degrees</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg btn-shimmer px-4'>Apply Now</button>
                        </Link>
                    </div>
                </div>

                <div className='hero-highlight-bar hero-text-4'>
                    {heroHighlights.map((item) => (
                        <div className='hero-highlight' key={item}>
                            <span className='highlight-dot'></span>
                            <span>{item}</span>
                        </div>
                    ))}
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

        <section className='campus-signal-section py-5'>
            <div className='container'>
                <div className='campus-signal-header reveal reveal-up'>
                    <span className='section-label'>Campus Dashboard</span>
                    <h2>Modern learning, live admissions, real outcomes.</h2>
                    <p>
                        A quick snapshot of what is active right now across BELTEI International University.
                    </p>
                </div>
                <div className='row g-4'>
                    {campusSignals.map((signal, index) => (
                        <div key={signal.title} className={`col-lg-4 reveal reveal-up delay-${index + 1}`}>
                            <article className='campus-signal-card'>
                                <span className='signal-index'>0{index + 1}</span>
                                <p className='signal-eyebrow'>{signal.eyebrow}</p>
                                <h3>{signal.title}</h3>
                                <p className='signal-text'>{signal.text}</p>
                                <div className='signal-meta'>
                                    <span className='signal-dot'></span>
                                    <span>{signal.meta}</span>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <div className="py-5 reveal reveal-up">
            <ChooseSection />
        </div>

        {/* Start Courses Section */}
        <div className='py-5 start-courses-section'>
            <div className='container'>
                <div className='row d-flex align-items-center justify-content-around gy-5'>
                    <div className='col-lg-5 reveal reveal-left'>
                        <span className='section-label'>Enroll Now</span>
                        <h2 className='mt-3 mb-3'>{siteDates.intakeYear} Academic<br />Intake Is Open</h2>
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

                <div className='application-journey reveal reveal-up'>
                    <div className='journey-heading'>
                        <span className='section-label'>Application Journey</span>
                        <h3>From interest to enrollment in four clear moves.</h3>
                    </div>
                    <div className='journey-track'>
                        {applicationSteps.map((step, index) => (
                            <article key={step.label} className={`journey-step delay-${index + 1}`}>
                                <span>{step.label}</span>
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </article>
                        ))}
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
