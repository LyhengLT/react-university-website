import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';

const locations = [
    {
        img: LondonLocationImg,
        name: 'Toul Sleng Campus',
        address: '#21, Street 360, Sangkat Boeung Keng Kang I, Phnom Penh',
        phone: '023 987 654',
        hours: 'Mon–Fri: 7:30 AM – 5:30 PM',
    },
    {
        img: ManchesterLocationImg,
        name: 'Chom Chav Campus',
        address: 'National Road 3, Sangkat Chom Chav, Khan Dangkor, Phnom Penh',
        phone: '023 876 543',
        hours: 'Mon–Fri: 7:30 AM – 5:30 PM',
    },
    {
        img: LiverpoolLocationImg,
        name: 'Prey Sor Campus',
        address: 'National Road 2, Sangkat Prey Sor, Khan Dangkor, Phnom Penh',
        phone: '023 765 432',
        hours: 'Mon–Fri: 7:30 AM – 5:30 PM',
    },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light text-center'>
                <span className='contact-hero-badge hero-text-1'>We're Here to Help</span>
                <h1 className='text-center fw-bold hero-text-2 mt-3'>Get In Touch</h1>
                <p className='text-center hero-text-3 mt-2' style={{maxWidth:'500px',opacity:0.82,fontSize:'1rem'}}>
                    Have questions about admissions, programs, or scholarships? Our team is ready to guide you.
                </p>
            </div>
        </header>

        {/* Contact info strip */}
        <div className='contact-info-strip py-4'>
            <div className='container'>
                <div className='row g-3 justify-content-center'>
                    <div className='col-md-4 d-flex align-items-center gap-3 contact-info-item reveal reveal-up delay-1'>
                        <div className='contact-info-icon'>📞</div>
                        <div>
                            <p className='mb-0 contact-info-label'>Call Us</p>
                            <p className='mb-0 contact-info-value'>0900 800 700</p>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex align-items-center gap-3 contact-info-item reveal reveal-up delay-2'>
                        <div className='contact-info-icon'>✉️</div>
                        <div>
                            <p className='mb-0 contact-info-label'>Email Us</p>
                            <p className='mb-0 contact-info-value'>info@beltei.edu.kh</p>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex align-items-center gap-3 contact-info-item reveal reveal-up delay-3'>
                        <div className='contact-info-icon'>🕐</div>
                        <div>
                            <p className='mb-0 contact-info-label'>Office Hours</p>
                            <p className='mb-0 contact-info-value'>Mon–Fri: 7:30 AM – 5:30 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact form */}
        <div className='container my-5 d-flex justify-content-center reveal reveal-up'>
            {submitted ? (
                <div className='contact-success text-center'>
                    <div className='success-icon'>✅</div>
                    <h3 className='mt-3'>Message Sent!</h3>
                    <p className='text-muted'>Thank you for reaching out. Our team will get back to you within 1–2 business days.</p>
                    <button className='btn btn-danger btn-shimmer mt-2' onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
            ) : (
                <Form id='contact-form' onSubmit={handleSubmit}>
                    <h4 className='mb-4 fw-bold' style={{color:'var(--navy)'}}>Send Us a Message</h4>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder='First name' required />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder='Last name' required />
                        </Col>
                    </Row>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='your@email.com' required />
                        <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder='e.g. 012 345 678' />
                    </Form.Group>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>Inquiry Type</Form.Label>
                            <Form.Select>
                                <option value="">Select inquiry type</option>
                                <option>Admissions &amp; Enrollment</option>
                                <option>Scholarships &amp; Financial Aid</option>
                                <option>Academic Programs</option>
                                <option>Campus Visit</option>
                                <option>Other</option>
                            </Form.Select>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Preferred Campus</Form.Label>
                            <Form.Select>
                                <option value="">Select campus</option>
                                <option>Toul Sleng Campus</option>
                                <option>Chom Chav Campus</option>
                                <option>Prey Sor Campus</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Form.Group className='mb-4'>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder='Tell us how we can help you...' required />
                    </Form.Group>
                    <Button variant="danger" size="lg" type='submit' className='btn-shimmer w-100'>Send Message</Button>
                </Form>
            )}
        </div>

        {/* Locations */}
        <div className='locations-section p-5'>
            <div className='container'>
                <span className='section-label d-block text-center mb-3 reveal reveal-up' style={{width:'fit-content',margin:'0 auto 12px',background:'rgba(193,39,45,0.15)',color:'rgba(255,150,150,0.9)'}}>Find Us</span>
                <h2 className='text-center mb-5 reveal reveal-up heading-underline'>Our Campuses</h2>
                <div className='row g-4'>
                    {locations.map((loc, i) => (
                        <div key={i} className={`col-lg-4 reveal reveal-up delay-${i + 1}`}>
                            <div className='location-card'>
                                <div className='img-zoom'>
                                    <img src={loc.img} className='img-fluid' alt={loc.name} style={{height:'200px',objectFit:'cover',width:'100%'}} />
                                </div>
                                <div className='location-info'>
                                    <h3>{loc.name}</h3>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='mb-1'><span className='loc-icon'>📍</span> {loc.address}</li>
                                        <li className='mb-1'><span className='loc-icon'>📞</span> {loc.phone}</li>
                                        <li><span className='loc-icon'>🕐</span> {loc.hours}</li>
                                    </ul>
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

export default Contact;
