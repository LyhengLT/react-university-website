import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

const faqs = [
    {
        q: 'What programs does BELTEI International University offer?',
        a: 'BIU offers over 60 accredited programs across Associate, Bachelor, Master, and PhD levels — spanning Business Administration, Computer Science, Law, Healthcare Management, Education, Arts, Sport Science, and more.'
    },
    {
        q: 'How do I apply for admission?',
        a: 'You can apply online through our website or visit any of our three campuses in person. The application requires your high school diploma (Bac II), a completed application form, and a passport-sized photo. Our admissions team will guide you through every step.'
    },
    {
        q: 'Are scholarships available at BIU?',
        a: 'Yes! BIU offers merit-based and need-based scholarships covering partial to full tuition. Scholarships are awarded based on academic excellence, extracurricular achievements, and financial need. Contact our scholarships office for details.'
    },
    {
        q: 'Are BIU degrees recognized internationally?',
        a: 'Absolutely. BIU degrees are accredited by the Ministry of Education, Youth and Sport of Cambodia and are recognized by numerous international universities, allowing graduates to pursue further studies or careers globally.'
    },
    {
        q: 'Does BIU offer student exchange programs?',
        a: 'Yes. BIU has formal exchange partnerships with universities in South Korea, France, Malaysia, and Vietnam. Students can spend one to two semesters abroad as part of their degree program.'
    },
    {
        q: 'What are the tuition fees?',
        a: 'Tuition fees vary by program and level. Associate degrees start from approximately $500/year, Bachelor programs from $800/year, and postgraduate programs from $1,200/year. Flexible payment plans are available. Contact our admissions office for a full fee schedule.'
    },
];

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <span className='section-label mb-4'>FAQ</span>
            <h2 className='text-center text-capitalize mb-2 heading-underline'>Frequently Asked Questions</h2>
            <p className='text-center mb-5' style={{maxWidth:'520px',fontSize:'0.9rem',opacity:0.7}}>
                Everything you need to know about studying at BELTEI International University.
            </p>
            <Accordion defaultActiveKey="0" flush className='w-100 faq-accordion'>
                {faqs.map((faq, i) => (
                    <Accordion.Item key={i} eventKey={String(i)}>
                        <Accordion.Header>{faq.q}</Accordion.Header>
                        <Accordion.Body>{faq.a}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    </div>
  );
}

export default FaqAccordion;
