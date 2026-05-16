import React from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-trophy-fill" viewBox="0 0 16 16">
        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
      </svg>
    ),
    title: 'Many Trophies Received',
    text: 'Recognized nationally and internationally for academic excellence.',
    delay: 'delay-1',
    iconDelay: '',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
      </svg>
    ),
    title: 'Happy Students',
    text: 'We put student wellbeing and success at the heart of everything we do.',
    delay: 'delay-2',
    iconDelay: 'delay-icon-2',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
      </svg>
    ),
    title: '3 Locations in Cambodia',
    text: 'Toul Sleng · Chom Chav · Prey Sor',
    delay: 'delay-3',
    iconDelay: 'delay-icon-3',
  },
];

function ChooseSection() {
  return (
    <div className="container">
      <div className="text-center mb-5 reveal reveal-up">
        <span className="section-label">Why BIU?</span>
        <h2 className="fw-800 mt-2 heading-underline" style={{fontWeight:800,color:'inherit'}}>Why Choose BIU?</h2>
      </div>
      <div className='row g-4'>
        {features.map((f, i) => (
          <div key={i} className={`col-lg-4 reveal reveal-up ${f.delay}`}>
            <div className='text-center p-4 h-100' style={{
              background:'#fff',
              borderRadius:'16px',
              boxShadow:'0 4px 24px rgba(13,27,62,0.08)',
              border:'1px solid #eef2ff',
              transition:'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.boxShadow='0 20px 48px rgba(13,27,62,0.14)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 4px 24px rgba(13,27,62,0.08)'; }}
            >
              <div className={`icon-float ${f.iconDelay} mb-4 mx-auto d-flex align-items-center justify-content-center`}
                style={{
                  width:'72px', height:'72px', borderRadius:'50%',
                  background:'linear-gradient(135deg, #c1272d 0%, #ff5252 100%)',
                  boxShadow:'0 8px 24px rgba(193,39,45,0.3)',
                }}>
                {f.icon}
              </div>
              <h5 className='fw-bold mb-2' style={{color:'#0d1b3e',fontSize:'1rem'}}>{f.title}</h5>
              <p className='mb-0' style={{color:'#64748b',fontSize:'0.88rem',lineHeight:'1.6'}}>{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseSection;
