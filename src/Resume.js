import React from 'react';

const Resume = () => {
    // Function to handle download
    const handleDownload = () => {
        const resumePDFPath = "RESUME.pdf";
        const element = document.createElement("a");
        element.href = resumePDFPath;
        element.download = "V.T.BHARGAV_RESUME.pdf";
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    // Function to handle print
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <style>{`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    padding: 20px;
                }
                .p {
                    color: black;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .a2 {
                    text-decoration: none;
                    color: blue;
                }
                .a2:hover {
                    color: skyblue;
                }
                h1 {
                    font-size: 32px;
                    color: #333;
                    margin-bottom: 20px;
                    text-align: center;
                }
                h2 {
                    font-size: 24px;
                    color: #007bff;
                    margin-bottom: 15px;
                }
                p {
                    font-size: 16px;
                    color: #555;
                    margin-bottom: 10px;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                .section {
                    margin-bottom: 30px;
                }
                .skills {
                    list-style-type: none;
                    margin-left: 20px;
                }
                .skills li {
                    margin-bottom: 5px;
                }
                .projects div {
                    margin-bottom: 20px;
                }
                .projects div strong {
                    font-weight: bold;
                }
                ul {
                    margin-top: 0;
                    padding-left: 20px;
                }
                .declaration p {
                    margin-bottom: 5px;
                }
                .download-button, .print-button {
                    text-align: center;
                }
                .download-button button, .print-button button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .download-button button:hover, .print-button button:hover {
                    background-color: #0056b3;
                }
                .disc {
                    text-align: center;
                }
                /* Styles for mobile devices (up to 600px) */
                @media only screen and (max-width: 600px) {
                    .container {
                        padding: 20px;
                    }
                    h1 {
                        font-size: 24px;
                    }
                    h2 {
                        font-size: 20px;
                    }
                    p {
                        font-size: 14px;
                    }
                    .download-button button, .print-button button {
                        padding: 8px 16px;
                        font-size: 14px;
                    }
                }
                /* Styles for tablets (601px to 768px) */
                @media only screen and (min-width: 601px) and (max-width: 768px) {
                    .container {
                        padding: 25px;
                    }
                    h1 {
                        font-size: 28px;
                    }
                    h2 {
                        font-size: 22px;
                    }
                    p {
                        font-size: 15px;
                    }
                    .download-button button, .print-button button {
                        padding: 9px 18px;
                        font-size: 15px;
                    }
                }
                /* Styles for laptops (769px to 1200px) */
                @media only screen and (min-width: 769px) and (max-width: 1200px) {
                    .container {
                        padding: 30px;
                    }
                    h1 {
                        font-size: 32px;
                    }
                    h2 {
                        font-size: 24px;
                    }
                    p {
                        font-size: 16px;
                    }
                    .download-button button, .print-button button {
                        padding: 10px 20px;
                        font-size: 16px;
                    }
                }
                /* Styles for extra large devices (above 1200px) */
                @media only screen and (min-width: 1201px) {
                    .container {
                        padding: 30px;
                    }
                    h1 {
                        font-size: 32px;
                    }
                    h2 {
                        font-size: 24px;
                    }
                    p {
                        font-size: 16px;
                    }
                    .download-button button, .print-button button {
                        padding: 10px 20px;
                        font-size: 16px;
                    }
                }
                /* Print styles */
                @media print {
                    .download-button, .print-button {
                        display: none;
                    }
                    .container {
                        box-shadow: none;
                        border-radius: 0;
                    }
                }
            `}</style>

            <div className="container">
                <h1>VALLAMKONDA THIRUMALA BHARGAV</h1>
                <p className='disc'>Khammam, Telangana, 507002. | (+91) 8074588232 | <a href="mailto:vallamkondabhargav@gmail.com">vallamkondabhargav@gmail.com</a></p>
                <p className='disc'><a href="https://github.com/bhargavnanicaptain">GitHub</a> | <a href="https://www.linkedin.com/in/v-t-bhargav-64bb51214">LinkedIn</a></p>

                <div className="objective section">
                    <h2>Objective:</h2>
                    <p>Eager Java Full Stack Developer with a solid grasp of Java, JDBC, HTML, CSS, JavaScript,
                        Bootstrap, React JS, Advanced Java with Hibernate and Spring and MySQL. Proficient in crafting
                        dynamic web applications and ensuring seamless database management. I bring a foundation in
                        Java development and database administration, along with an aptitude for front-end design and
                        development. Ready to contribute effectively to a collaborative team environment, eager to learn
                        and grow alongside seasoned professionals.
                    </p>
                </div>

                <div className="technical-skills section">
                    <h2>Technical Skills:</h2>
                    <p><strong>Programming Languages:</strong> Java, JDBC, C# Programming, Basics of Python.</p>
                    <p><strong>Web Technologies:</strong> HTML, CSS, JavaScript</p>
                    <p><strong>Frameworks:</strong> Bootstrap, Spring boot, Hibernate</p>
                    <p><strong>Libraries:</strong> React JS</p>
                    <p><strong>Databases:</strong> MySQL</p>
                    <p><strong>Tools & IDEs:</strong> Visual Studio Code, Eclipse, IntelliJ, MS Office, Version Control</p>
                    <p><strong>Operating Systems:</strong> Windows, Linux</p>
                </div>

                <div className="soft-skills section">
                    <h2>Soft Skills:</h2>
                    <ul className="skills">
                        <li>Communication</li>
                        <li>Leadership</li>
                        <li>Problem Solving</li>
                        <li>Adaptability</li>
                        <li>Teamwork and Collaboration</li>
                        <li>Team Management</li>
                        <li>Professionalism</li>
                        <li>Creativity and Innovation</li>
                        <li>Emotional Intelligence</li>
                    </ul>
                </div>

                <div className="education section">
                    <h2>Education:</h2>
                    <p><strong>B.Tech in Electronics and Communication Engineering</strong></p>
                    <p>Siddhartha Institute of Engineering and Technology, Hyderabad, Telangana.<br />
                        Duration: 2019 to 2023</p>
                    <p><strong>Intermediate in Mathematics Physics & Chemistry</strong></p>
                    <p>Resonance Jr. College, Khammam, Telangana.<br />
                        Duration: 2017 to 2019</p>
                    <p><strong>SSC</strong></p>
                    <p>Resonance Info School, Khammam, Telangana.<br />
                        Duration: 2016 to 2017</p>
                </div>

                <div className="projects section">
                    <h2>Projects:</h2>
                    <div>
                        <p><strong>Project Title: HOSPITAL MANAGEMENT SYSTEM using JDBC</strong></p>
                        <p><strong>Description:</strong> Developed using Java and JDBC, this system efficiently manages patient records, doctor appointments, and inventory control within healthcare facilities. As the sole developer, I utilized IntelliJ and MySQL for database connectivity.</p>
                    </div>

                    <div>
                        <p><strong>Project Title: HOSTEL MANAGEMENT SYSTEM</strong></p>
                        <p><strong>Description:</strong> Developed using Java and JDBC, this system automates student accommodation management in educational institutions. It efficiently handles student records, room allocations, fee payments, and maintenance requests, enhancing administrative efficiency.</p>
                    </div>

                    <div>
                        <p><strong>Project Title: ONLINE SHOPPING</strong></p>
                        <p><strong>Description:</strong> Developed using HTML, CSS, and JavaScript, this e-commerce website offers a user-friendly interface for browsing products, placing orders, and managing user accounts. I designed the front-end and implemented interactive features to enhance user experience.</p>
                    </div>
                </div>

                <div className="declaration section">
                    <h2>Declaration:</h2>
                    <p>I hereby declare that the information provided is true and accurate to the best of my knowledge.</p>
                    <p>Date: [Date]</p>
                    <p>Place: [Place]</p>
                    <p>Signature: V.T. Bhargav</p>
                </div>

                <div className="download-button section">
                    <button onClick={handleDownload}>Download Resume</button>
                </div>

                <div className="print-button section">
                    <button onClick={handlePrint}>Print Resume</button>
                </div>
            </div>
        </>
    );
};

export default Resume;
