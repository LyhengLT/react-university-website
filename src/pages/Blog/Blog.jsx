import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';
import { getSiteDateInfo } from '../../utils/siteDates';

const getBlogs = ({ currentYear, intakeYear, previousYear }) => [
    {
        id: 1, img: Blog1Img, category: 'Academics', date: `Updated ${currentYear}`,
        title: 'BIU Launches New AI & Data Science Program',
        description: 'BELTEI International University introduces a cutting-edge Artificial Intelligence and Data Science track in partnership with leading tech companies, preparing students for the digital economy.'
    },
    {
        id: 2, img: Blog2Img, category: 'Campus Life', date: `Campus ${currentYear}`,
        title: 'Annual Cultural Festival Celebrates Khmer Heritage',
        description: 'Students from all three campuses came together for the annual Khmer Cultural Festival, showcasing traditional dances, music, and the vibrant diversity of Cambodian culture.'
    },
    {
        id: 3, img: Blog3Img, category: 'Research', date: `ASEAN ${currentYear}`,
        title: 'BIU Research Team Wins ASEAN Innovation Award',
        description: 'A team of BIU students and faculty won first place at the ASEAN Innovation Summit for their groundbreaking research into sustainable water purification technologies for rural Cambodia.'
    },
    {
        id: 4, img: Blog4Img, category: 'Scholarships', date: `${intakeYear} Intake`,
        title: `500 New Scholarships Available for ${intakeYear} Intake`,
        description: 'BELTEI International University is offering 500 merit-based and need-based scholarships for the upcoming academic year, ensuring talented students from all backgrounds can access quality education.'
    },
    {
        id: 5, img: Blog5Img, category: 'Partnerships', date: `Global ${currentYear}`,
        title: 'BIU Signs MOU with South Korean Universities',
        description: 'BIU has formalized academic exchange partnerships with three leading South Korean universities, opening new pathways for students to study abroad and gain global exposure.'
    },
    {
        id: 6, img: Blog6Img, category: 'Events', date: `${previousYear} Ceremony`,
        title: `Graduation Ceremony ${previousYear}: 3,200 Students Graduate`,
        description: `Over 3,200 students from across all faculties received their degrees at the grand ${previousYear} graduation ceremony held at the BIU Main Campus Auditorium, attended by government officials and industry leaders.`
    },
    {
        id: 7, img: Blog7Img, category: 'Career', date: `Career ${currentYear}`,
        title: 'BIU Career Fair Connects Students with Top Employers',
        description: 'More than 80 companies attended this year\'s BIU Career Fair, offering internship and full-time employment opportunities to final-year students across all disciplines.'
    },
    {
        id: 8, img: Blog8Img, category: 'Sports', date: `League ${currentYear}`,
        title: 'BIU Football Team Champions the National University League',
        description: 'The BIU Eagles football team clinched the National University Football Championship, beating 24 teams in a thrilling tournament that showcased the athletic excellence cultivated on campus.'
    },
    {
        id: 9, img: Blog9Img, category: 'Community', date: `Impact ${currentYear}`,
        title: 'Community Outreach: BIU Students Build Schools in Provinces',
        description: 'Volunteers from BIU\'s student union spent the semester break constructing a new school building in Kampong Speu province, contributing to Cambodia\'s rural education development.'
    },
];

function Blog() {
  const blogs = getBlogs(getSiteDateInfo());

  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light text-center'>
                <span className='blog-hero-badge hero-text-1'>Latest from BIU</span>
                <h1 className='text-center fw-bold hero-text-2 mt-3'>Our Blog</h1>
                <p className='text-center hero-text-3 mt-2' style={{maxWidth:'560px',opacity:0.82,fontSize:'1rem'}}>
                    News, stories, and insights from Cambodia's most dynamic university community.
                </p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className='container'>
                <div className='row g-4'>
                    {blogs.map((blog, index) => (
                        <div key={blog.id} className={`col-md-6 col-lg-4 reveal reveal-up delay-${(index % 3) + 1}`}>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow blog-card border-0'>
                                    <div className='img-zoom blog-card-img'>
                                        <Card.Img variant="top" src={blog.img} />
                                    </div>
                                    <Card.Body className='p-4 d-flex flex-column'>
                                        <div className='blog-card-meta mb-2'>
                                            <span className='blog-category-tag'>{blog.category}</span>
                                            <span className='blog-date-chip'>{blog.date}</span>
                                        </div>
                                        <Card.Title className='blog-card-title'>{blog.title}</Card.Title>
                                        <Card.Text className='blog-card-text flex-grow-1'>{blog.description}</Card.Text>
                                        <span className='blog-read-more mt-3'>Read More →</span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Blog;
