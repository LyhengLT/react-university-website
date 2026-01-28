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

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: "BELTEI International University will become the most well-known university in Cambodia with high quality of education in alignment with national program and international program standards, which is recognized worldwide and in accordance with the BELTEI's slogan"
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: "Builds the spirit to love nation and motherland, preserve its culture and national identity, obey the state laws and the BELTEI's regulations as well as possess justice, morality, and virtue like a bamboo shoot growing up to bamboo for the future of the country"
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Invites special guest speakers who are professionals to conduct presentation on various topics related to each sector in order to offer the students are well as lecturers more important experiences and new ideas to supplementary and enhance the knowledge that they have learnt from the university​'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Blog 4',
        description: "BELTEI International University's graduated will obtain the higher education of high quality in accordance with national and international standards​ as well as, and be able to transfer to study at overseas universities in the same year as they study at BELTEI International University."
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Blog 5',
        description: "BELTEI International University's graduated will obtain the higher education of high quality in accordance with national and international standards​ as well as, and be able to transfer to study at overseas universities in the same year as they study at BELTEI International University."

    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Blog 6',
        description: "BELTEI International University's graduated will obtain the higher education of high quality in accordance with national and international standards​ as well as, and be able to transfer to study at overseas universities in the same year as they study at BELTEI International University."


    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Blog 7',
        description: "BELTEI International University's graduated will obtain the higher education of high quality in accordance with national and international standards​ as well as, and be able to transfer to study at overseas universities in the same year as they study at BELTEI International University."


    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Blog 8',
        description: "BELTEI International University's graduated will obtain the higher education of high quality in accordance with national and international standards​ as well as, and be able to transfer to study at overseas universities in the same year as they study at BELTEI International University."

    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Blog 9',
        description: "BELTEI International University's graduated will obtain the higher education of high quality in accordance with national and international standards​ as well as, and be able to transfer to study at overseas universities in the same year as they study at BELTEI International University."

    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>BELTEI International University's graduated will obtain the higher education of high quality in accordance with national and international standards​ as well as, and be able to transfer to study at overseas universities in the same year as they study at BELTEI International University.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;