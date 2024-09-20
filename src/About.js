import React from 'react';

const About = () => {
    return (
        <>
            <style>{`
                /* Internal styles */
                @import url('https://fonts.googleapis.com/css2?family=Briem+Hand:wght@100..900&family=Dancing+Script:wght@400..700&family=Marvel:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');
                * {
                    font-family: "Briem Hand", cursive;
                    font-optical-sizing: auto;
                    font-weight: normal;
                    font-style: normal;
                    color:#ffffff;
                    box-sizing:border-box;
                    margin:0;
                    padding:0;
                }

                body {
                    background-color:#14213d;
                    overflow-x:hidden;
                }

                h1 {
                    color: #fca311;
                    text-align: center;
                    margin-top: 50px;
                }

                p {
                    text-align: justify;
                    margin-left: 10%;
                    line-height: 2.5;
                    margin-height:1%;
                }

                .icon {
                    display: inline-block;
                    animation: slideIn 1s ease forwards;
                    margin-right: 10px; /* Add space between bullet and text */
                    color: #fca311; /* Set bullet color */
                }

                @keyframes slideIn {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                img {
                    width: 20%;
                }

                img:hover {
                    transform: scale(1.2);
                    transition: 0.2s; /* Added 's' for seconds */
                }

                .fa-play:hover{
                    color: skyblue; 
                }

                .para1{
                    margin-top:4%;
                }
                
                /* Styles for mobile devices (up to 600px) */
                @media only screen and (max-width: 600px) {
                    h1 {
                        margin-top: 20px;
                        font-size: 24px;
                    }

                    p {
                        margin-left: 5%;
                        line-height: 2;
                        font-size: 16px;
                    }

                    img {
                        width: 50%;
                    }

                    .para1 {
                        margin-top: 8%;
                        font-size: 16px;
                    }
                }

                /* Styles for tablets (601px to 768px) */
                @media only screen and (min-width: 601px) and (max-width: 768px) {
                    h1 {
                        margin-top: 30px;
                        font-size: 28px;
                    }

                    p {
                        margin-left: 8%;
                        line-height: 2.2;
                        font-size: 18px;
                    }

                    img {
                        width: 35%;
                    }

                    .para1 {
                        margin-top: 6%;
                        font-size: 18px;
                    }
                }

                /* Styles for laptops (769px to 1200px) */
                @media only screen and (min-width: 769px) and (max-width: 1200px) {
                    h1 {
                        margin-top: 40px;
                        font-size: 32px;
                    }

                    p {
                        margin-left: 9%;
                        line-height: 2.4;
                        font-size: 20px;
                    }

                    img {
                        width: 25%;
                    }

                    .para1 {
                        margin-top: 5%;
                        font-size: 20px;
                    }
                }

                /* Styles for extra large devices (above 1200px) */
                @media only screen and (min-width: 1201px) {
                    h1 {
                        margin-top: 50px;
                        font-size: 36px;
                    }

                    p {
                        margin-left: 10%;
                        line-height: 2.5;
                        font-size: 23px;
                    }

                    img {
                        width: 20%;
                    }

                    .para1 {
                        margin-top: 4%;
                        font-size: 23px;
                    }
                }
            `}</style>
            <h1>About Myself</h1><br />
            <center>
                <img src='https://res.cloudinary.com/dalpfwtc6/image/upload/v1715512390/Bhargav-modified_xpe0xh.png' />
            </center>
            <p className='para1'>
                <span className="icon">•</span> My name is V.T.BHARGAV, and I am deeply passionate about technology and innovation. Hailing from Khammam district in Telangana, I am driven by the challenge of solving complex problems and the opportunity to constantly learn and grow in the ever-evolving field of technology.
            </p><br />
            <p>
                <span className="icon">•</span> I specialize in completing assigned tasks with precision and efficiency, leveraging my technical skills and staying updated with the latest technologies. My proficiency spans across a wide range of technologies, including "Java, Advanced Java, HTML, CSS, Bootstrap, JavaScript, React JS, mySQL," and I continuously strive to enhance my strengths through ongoing learning and self-improvement.
            </p><br />
            <p>
                <span className="icon">•</span> Among my proudest achievements are securing the 2nd prize in a Hackathon during my undergraduate studies. The project, titled "Obstacles Avoiding Robot," showcased my ability to innovate and collaborate effectively in a team environment. Additionally, I earned the 1st prize in a technical seminar presentation for my project titled "Bionic Eye," demonstrating my aptitude for research and development in cutting-edge technologies.
            </p><br />
            <p>
                <span className="icon">•</span> Currently, I am working at Sonata Software as a Robotic Process Automation (RPA) Developer, where I am focused on automating processes, enhancing efficiency, and contributing to innovative solutions in the field of automation technology.
            </p><br />
            <p>
                <span className="icon">•</span> Outside of my professional pursuits, I am an avid follower of tech trends and innovations. I regularly engage in tech blogs, news websites, and forums to stay abreast of the latest industry developments. I am also passionate about podcasting, where I delve into topics ranging from tech innovations to entrepreneurship and personal growth. Furthermore, I enjoy exploring audiobooks on technology, business, and self-improvement, utilizing platforms like Audible and Librivox to expand my knowledge base. Additionally, I actively participate in online courses, webinars, and hackathons to further hone my skills and contribute to meaningful projects.
            </p>
        </>
    );
};

export default About;
