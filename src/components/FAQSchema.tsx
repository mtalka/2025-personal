import { useEffect } from 'react';

export default function FAQSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Markus Talka's current role?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Markus Talka is currently a Senior Consultant at Columbia Road, where he focuses on full-stack development, IT project leadership, and recruiting. He has been with the company since August 2021."
          }
        },
        {
          "@type": "Question",
          "name": "What are Markus Talka's main areas of expertise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Markus specializes in front-end development and user experience design, with additional expertise in back-end technologies, platform development, and full-stack development. He has experience with progressive web applications and agile methodologies."
          }
        },
        {
          "@type": "Question",
          "name": "What is Markus Talka's educational background?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Markus holds a Master of Science (M.Sc.) from the University of Turku, focused on software design, programming techniques, and platform business design. He also has a Bachelor of Engineering (B.Eng.) from Turku University of Applied Sciences, specializing in multimedia technology."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Markus Talka located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Markus Talka is based in Helsinki, Finland, where he works as a Senior Consultant at Columbia Road."
          }
        },
        {
          "@type": "Question",
          "name": "What companies has Markus Talka worked for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Markus has worked at Columbia Road (2021-present), Ecraft (2019-2021), Wärtsilä (2014-2019), ICT-Portti (2013), and City of Lieto (2012). He has experience in various roles from trainee to senior consultant."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies does Markus Talka work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Markus works with full-stack technologies, progressive web applications, Java, databases, algorithms, augmented reality applications, Linux servers, and various front-end frameworks. He has experience with HTML5, jQuery, and modern web development tools."
          }
        },
        {
          "@type": "Question",
          "name": "What is Markus Talka's approach to development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Markus focuses on creating measurable growth for businesses through user-centered design, agile methodologies, and full-stack development. He emphasizes front-end development and user experience while maintaining expertise in back-end technologies."
          }
        }
      ]
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
}
