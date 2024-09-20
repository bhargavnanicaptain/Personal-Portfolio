import React from 'react';

const Projects = () => {
    return (
        <>
            <style>{`
            *{
                color:white;
            }
            .react{
            color:skyblue !important;
            }
            body{
                background-color:#14213d;
            }
            .animation {
                animation: slideIn 1s ease forwards;
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
            p {
                font-size: 20px;
                text-align: justify;
                margin-left: 5%;
                line-height: 1.5;
            }
            h2 {
                margin-left: 5%;
                font-weight: bold;
            }
            b {
                font-weight: bold;
            }
            h3 {
                margin-left: 5%;
                font-weight: bold;
                font-size:2rem;
                color:#fca311;
            }
            .btn {
                border: none;
                border-radius: 25px;
                background-color: #01beae;
                margin-left: 10%;
                padding: 1%;
                width: 200px;
                font-size: 20px;
                color: white;
            }
            .btn:hover {
                background-color: #ff5733;
                color: white;
                cursor: pointer;
            }
            .btn1 {
                border: none;
                border-radius: 25px;
                background-color: #01beae;
                margin-left: 5%;
                padding: 1.9%;
                width: 200px;
                font-size: 20px;
                color: white;
            }
            .btn1:hover {
                background-color: #ff5733;
                color: white;
                cursor: pointer;
            }
            .li1{
                margin-left:5%;
            }
            .fa-star{
                color:#fca311;
            }
            .pro{
                text-align:center;
                color:#fca311;
                font-size:4rem;
            }
            p{
                text-align:justify;
                margin-left:3%;
                margin-right:3%;
            }
            /* Styles for mobile devices (up to 600px) */
@media only screen and (max-width: 600px) {
    p {
        font-size: 16px;
        margin-left: 2%;
        margin-right: 2%;
        line-height: 1.4;
    }

    h2, h3 {
        margin-left: 3%;
        font-size: 1.5rem;
    }

    .btn, .btn1 {
        width: 150px;
        font-size: 18px;
        margin-left: 5%;
    }

    .btn {
        padding: 2%;
    }

    .btn1 {
        padding: 3%;
    }
}

/* Styles for tablets (601px to 768px) */
@media only screen and (min-width: 601px) and (max-width: 768px) {
    p {
        font-size: 18px;
        margin-left: 3%;
        margin-right: 3%;
        line-height: 1.5;
    }

    h2, h3 {
        margin-left: 4%;
        font-size: 1.75rem;
    }

    .btn, .btn1 {
        width: 180px;
        font-size: 19px;
        margin-left: 7%;
    }

    .btn {
        padding: 1.5%;
    }

    .btn1 {
        padding: 2.5%;
    }
}

/* Styles for laptops (769px to 1200px) */
@media only screen and (min-width: 769px) and (max-width: 1200px) {
    p {
        font-size: 20px;
        margin-left: 4%;
        margin-right: 4%;
        line-height: 1.6;
    }

    h2, h3 {
        margin-left: 5%;
        font-size: 2rem;
    }

    .btn, .btn1 {
        width: 200px;
        font-size: 20px;
        margin-left: 10%;
    }

    .btn {
        padding: 1%;
    }

    .btn1 {
        padding: 1.9%;
    }
}

/* Styles for extra large devices (above 1200px) */
@media only screen and (min-width: 1201px) {
    p {
        font-size: 20px;
        margin-left: 3%;
        margin-right: 3%;
        line-height: 1.5;
    }

    h2, h3 {
        margin-left: 5%;
        font-size: 2rem;
    }

    .btn, .btn1 {
        width: 200px;
        font-size: 20px;
        margin-left: 10%;
    }

    .btn {
        padding: 1%;
    }

    .btn1 {
        padding: 1.9%;
    }
}

              
                
            `}</style>
            <h1 className='pro'>My Projects</h1><br />
            <p><i className="fa-solid fa-hand-point-right"></i> Welcome to my portfolio of projects where I showcase my technical skills and expertise. Each project represents a unique challenge and opportunity for learning and growth. Through these projects, I demonstrate my proficiency in various technologies and my ability to develop innovative solutions to real-world problems.</p>
            <br />
            <h2>Key Features: </h2>
            <p>
                <b>Technologies Utilized:</b> Each project employs a diverse range of technologies, including but not limited to Java, Advanced Java, JDBC (Java Database Connectivity), HTML, CSS, Bootstrap, JavaScript, React JS, MySQL, IoT (Internet of Things), and various IDE platforms such as IntelliJ Idea and Arduino IDE.
                <br />
                <b>Problem-Solving Approach:</b> I specialize in tackling complex problems with precision and efficiency. By leveraging my technical skills and staying updated with the latest technologies, I ensure that each project meets high standards of quality and functionality.
                <br />
                <b>Innovative Solutions:</b> Whether it's developing a dynamic web application, integrating IoT devices, or implementing cutting-edge features, I strive to deliver innovative solutions that address the unique requirements of each project. Utilizing Smart sensor technologies and Communication Topologies, I enhance the functionality and effectiveness of my solutions.
                <br />
                <b>Collaborative Development:</b> Many projects involve collaboration with teams, showcasing my ability to work effectively in a team environment. Through effective communication and teamwork, we achieve our project goals and deliver exceptional results.
            </p><br />
            <h2>Projects Showcase:</h2>
            <p>Explore my portfolio below to learn more about each project, its objectives, technologies used, and key accomplishments. Feel free to reach out if you have any questions or would like to discuss potential collaborations.
            </p><br />
            <div className='projects section'>
                <h2>REACT-BASED PROJECTS</h2>
                <div>
                    <h3> <span className='react'>⚛</span> HOSPITAL MANAGEMENT SYSTEM USING REACT</h3>
                    <p><strong>Description: </strong> Crafted a robust Hospital Management System with React, seamlessly integrating APIs for data handling, and employing JavaScript (ES6+), HTML5, and CSS3 for dynamic user interfaces. Leveraged React Router for efficient navigation and Git for version control, ensuring collaborative development.</p>
                    <a href='https://github.com/bhargavnanicaptain/HOSPTAL-MANAGEMENT-SYSTEM.git' className='a1' target='_blank'><button className='btn'>Github Source Code</button></a>
                    <a href='https://hosptal-management-system-lxi0gphmo.vercel.app/'><button className='btn1'>React Site</button></a><br />
                </div>
                <div>
                    <h3> <span className='react'>⚛</span> PERSONAL FINANCE TRACKER USING REACT</h3>
                    <p><strong>Description: </strong> Developed a sleek Personal Finance Tracker with React, harnessing JavaScript (ES6+), HTML5, and CSS3 for intuitive interfaces. Integrated React Router for smooth navigation and incorporated Chart.js for dynamic data visualization. Utilized Git for version control, ensuring seamless collaboration.</p>
                    <a href='https://github.com/bhargavnanicaptain/FINANCE-TRACKER-USING-REACT.git' className='a1' target='_blank'><button className='btn'>Github Source Code</button></a>
                    <a href='https://finance-tracker-using-react-mjyww7l35.vercel.app/'><button className='btn1'>React Site</button></a><br />
                </div>
            </div>
            <h3><i className="fa-regular fa-star"></i>  HOSPITAL MANAGEMENT SYSTEM:</h3>
            <p><b>Description: </b> The Hospital Management System represents a robust Java-based application meticulously crafted to optimize and simplify various administrative and operational tasks within a hospital environment. Its core functionalities revolve around efficient patient management, effective doctor management, and streamlined appointment booking processes.</p>
            <p>At the heart of this system lies the utilization of JDBC (Java Database Connectivity), a Java API that enables Java applications to interact with a relational database management system such as MySQL. By leveraging JDBC, the Hospital Management System ensures seamless communication with a MySQL database, facilitating the storage, retrieval, and management of critical patient and doctor information.</p><br />
            <p>Here's a breakdown of the key components and features of the Hospital Management System:</p>
            <p><b>Patient Management: </b>The system provides comprehensive tools for managing patient records, including personal details, medical history, treatment plans, and billing information. Through an intuitive user interface, hospital staff can efficiently create, update, and retrieve patient records as needed.</p>
            <p><b>Doctor Management: </b>It offers robust functionalities for managing doctor profiles, including their specialties, qualifications, schedules, and patient assignments. Hospital administrators can easily add new doctors, assign them to specific departments or wards, and manage their availability for appointments.</p>
            <p><b>Appointment Booking: </b>The system facilitates seamless appointment scheduling between patients and doctors, allowing patients to book appointments based on their preferences and doctor availability. Automated reminders and notifications ensure that patients and doctors stay informed about upcoming appointments, reducing the likelihood of missed or delayed appointments.</p>
            <p><b>Database Integration: </b>Through JDBC, the system establishes a secure and efficient connection to a MySQL database, enabling real-time storage and retrieval of patient and doctor information. This integration ensures data integrity, scalability, and reliability, supporting the system's day-to-day operations.</p>
            <p>Overall, the Hospital Management System represents a sophisticated yet user-friendly solution for hospitals seeking to enhance their operational efficiency, improve patient care, and streamline administrative processes. By leveraging Java technology and JDBC integration with MySQL, the system empowers hospitals to effectively manage patient records, doctor profiles, and appointment scheduling, ultimately contributing to better healthcare delivery and patient outcomes.</p>
            <a href='https://github.com/bhargavnanicaptain/HOSTEL-MANAGEMENT-SYSTEM.git' className='a1' target='_blank'><button className='btn'>Github Source Code</button></a>
            {/* Use embed or object tag to display PDF */}
            <a href='https://drive.google.com/file/d/1Q2EIgWVut7CdANim6O16Ie3aad3psyhi/view?usp=sharing'><button className='btn1'>Document</button></a><br />
            <h3><i className="fa-regular fa-star"></i> HOSTEL MANAGEMENT SYSTEM</h3>
            <p>The Hospital Management System (HMS) is a sophisticated Java-based application designed to streamline patient and doctor management, as well as appointment booking within a hospital setting. Leveraging JDBC, it interacts with a MySQL database, ensuring seamless storage and retrieval of crucial information.</p>

            <p><strong>Features:</strong> Patient Management allows adding/viewing patients and Doctor Management facilitates viewing doctor profiles and checking availability. Appointment Booking enables efficient scheduling.</p>

            <p><strong>File Structure:</strong> Includes Patient.java, Doctor.java, and HospitalManagementSystem.java.</p>

            <p><strong>Implementation:</strong> Patient class manages patient data, Doctor class handles doctor-related tasks, and HospitalManagementSystem orchestrates appointment bookings.</p>

            <p><strong>Database Connectivity:</strong> Utilizes JDBC to connect to MySQL, ensuring secure and efficient execution of SQL queries.</p>

            <p><strong>Development Environment:</strong> Developed using IntelliJ IDEA, enhancing productivity with advanced features.</p>

            <p><strong>External Libraries:</strong> Besides JDBC, it may use external libraries for enhanced functionality, such as web development frameworks or data visualization tools.</p>

            <p><strong>Conclusion:</strong> HMS offers a comprehensive solution for hospital operations, contributing to better healthcare delivery and improved patient outcomes.</p>
            <a href='https://github.com/bhargavnanicaptain/HOSTEL-MANAGEMENT-SYSTEM.git' target='_blank'><button className='btn'>GitHub Source Code</button></a>
            <a href='https://drive.google.com/file/d/1-5n7cBYiAnAPwE-pULaL_bUkPJEhiwJF/view?usp=sharing' target='_blank'><button className='btn1'>Documentation</button></a><br />
            <h3><i className="fa-regular fa-star"></i>  TO-DO LIST</h3>
            <p>
                The To-Do List project represents a fundamental example of web development, showcasing the integration of HTML, CSS, and JavaScript to create a dynamic user interface for managing tasks. Beyond its simplicity, the project embodies several key features and design considerations that contribute to its effectiveness and user appeal.
            </p>

            <p>
                <strong>Task Management Functionality:</strong> At its core, the project enables users to perform essential task management actions, including adding new tasks, editing existing ones, and deleting tasks. This functionality forms the backbone of the application, allowing users to organize their tasks efficiently.
            </p>

            <p>
                <strong>Clean and Intuitive Interface:</strong> The user interface of the To-Do List project is designed to be clean and intuitive, prioritizing ease of use and accessibility. Clear visual cues, such as distinct buttons for adding, editing, and deleting tasks, guide users through the task management process seamlessly.
            </p>

            <p>
                <strong>Visually Appealing Design:</strong> While simplicity is a hallmark of the project, attention is also given to visual aesthetics. The design employs a harmonious color scheme, thoughtful typography, and well-defined layout principles to create a visually appealing experience for users. This visual polish enhances user engagement and satisfaction with the application.
            </p>

            <p>
                <strong>Responsive and Interactive Experience:</strong> Leveraging modern web development techniques, the To-Do List project delivers a responsive and interactive user experience. The interface adjusts smoothly across different devices and screen sizes, ensuring usability on desktops, tablets, and smartphones. Additionally, interactive features such as hover effects and button animations enhance user interaction and delight.
            </p>

            <p>
                <strong>Scalability and Extensibility:</strong> While the current iteration of the project focuses on core task management functionality, its architecture and design allow for scalability and extensibility. Future iterations could incorporate additional features such as task prioritization, due dates, categories, and user authentication, expanding the scope and utility of the application.
            </p>

            <p>
                <strong>Conclusion:</strong> Overall, the To-Do List project serves as a testament to the power of HTML, CSS, and JavaScript in crafting functional and visually appealing web applications. By prioritizing user experience, design principles, and modern development techniques, the project demonstrates how simple ideas can be transformed into effective digital solutions.
            </p>
            <a href='https://github.com/bhargavnanicaptain/To-Do-List.git' target='_blank'><button className='btn'>GitHub Source Code</button></a> <a href='https://to-do-list-sand-psi.vercel.app/' target='_blank'><button className='btn1'>Out Put</button></a><br />
            <h3><i className="fa-regular fa-star"></i> GUARDIANS GALAXY GATEWAYS(TRAVEL SITE)</h3>
            <p>
                Guardians Galaxy Gateways is a captivating travel website meticulously crafted using a combination of HTML, CSS, and Bootstrap. This immersive digital platform serves as a gateway to explore a myriad of destinations across the cosmos, offering users an unforgettable journey through the stars.
            </p>
            <p>
                <strong>Immersive Travel Experience:</strong> Guardians Galaxy Gateways aims to provide users with an immersive travel experience unlike any other. Through stunning visual imagery, engaging content, and seamless navigation, the website transports visitors to distant galaxies, alien worlds, and celestial wonders.
            </p>
            <p>
                <strong>Dynamic Destination Showcase:</strong> At the heart of the website lies a dynamic destination showcase, featuring an extensive array of interstellar locales waiting to be discovered. From bustling spaceports to serene moonscapes, each destination is meticulously curated to inspire wanderlust and ignite the imagination.
            </p>
            <p>
                <strong>Responsive Design and Accessibility:</strong> Leveraging the power of Bootstrap, Guardians Galaxy Gateways boasts a responsive design that ensures optimal viewing across various devices and screen sizes. Whether accessing the website from a desktop computer, tablet, or smartphone, users can enjoy a seamless browsing experience.
            </p>
            <p>
                <strong>Interactive Features and Engaging Content:</strong> The website incorporates interactive features and engaging content to captivate users and encourage exploration. From interactive maps and virtual tours to immersive multimedia experiences, Guardians Galaxy Gateways offers a wealth of interactive elements designed to enhance user engagement.
            </p>
            <p>
                <strong>Personalized Travel Planning:</strong> With personalized travel planning tools and resources, users can customize their cosmic adventures to suit their preferences and interests. Whether planning a solo journey to distant stars or embarking on a family space vacation, the website provides users with the tools they need to plan and book their dream interstellar getaway.
            </p>
            <p>
                <strong>Community and Social Integration:</strong> Guardians Galaxy Gateways fosters a vibrant community of space travel enthusiasts, allowing users to connect, share experiences, and exchange travel tips and recommendations. Social integration features enable users to seamlessly share their favorite destinations and travel experiences with friends and fellow travelers across social media platforms.
            </p>
            <p>
                <strong>Secure Booking and Payment Options:</strong> The website prioritizes user security and convenience by offering secure booking and payment options for travel reservations. Users can confidently book their interstellar adventures knowing that their personal and financial information is protected through robust security measures.
            </p>
            <p>
                Overall, Guardians Galaxy Gateways is more than just a travel website—it's a portal to a universe of endless exploration and discovery. With its immersive design, interactive features, and personalized travel experiences, the website invites users to embark on an unforgettable cosmic journey unlike any other.
            </p>
            <a href='https://github.com/bhargavnanicaptain/Tourist-Site.git' target='_blank'><button className='btn'>GitHub Source Code</button></a> <a href='https://tourist-site-brown.vercel.app/'><button className='btn1'>Out Put</button></a>    <br />
            <h3 ><i className='fa-regular fa-star'></i>PAYTM - CLONE </h3>
            <p>
                The "Paytm Clone" is a comprehensive web application designed to replicate the core functionalities of the Paytm platform, providing users with a seamless and interactive experience for online transactions, mobile recharges, bill payments, and more.
            </p>
            <p>
                <strong>Key Features:</strong>
            </p>
            <ul>
                <li><strong>User Registration and Login:</strong> Secure user authentication allowing new users to register and existing users to log in using their credentials.</li>
                <li><strong>Mobile Recharge:</strong> Users can recharge their mobile numbers by selecting their operator, entering their mobile number, and specifying the recharge amount.</li>
                <li><strong>Bill Payments:</strong> The application supports payment of various utility bills such as electricity, water, gas, and broadband, providing a convenient one-stop solution for users.</li>
                <li><strong>Transaction History:</strong> Users can view a detailed history of their transactions, including the date, time, and status of each transaction.</li>
            </ul>
            <p>
                <strong>Technical Details:</strong>
            </p>
            <ul>
                <li><strong>HTML and CSS:</strong> The frontend of the application is built using HTML for structure and CSS for styling, providing a responsive and visually appealing user interface.</li>
                <li><strong>JavaScript:</strong> Client-side scripting is implemented using JavaScript to add interactivity and dynamic behavior to the application, enhancing the user experience.</li>
            </ul>
            <p>
                <strong>Conclusion:</strong>
            </p>
            <p>
                The "Paytm Clone" web application showcases the use of HTML, CSS, and JavaScript to create a functional and user-friendly platform for online transactions and bill payments. It serves as an excellent project for web developers, providing practical experience in building modern web applications.
            </p>
            <a href='https://github.com/bhargavnanicaptain/PYTM-CLONE.git' target='_blank'><button class='btn'>GitHub Source Code</button></a> <a href='https://paytm-clone-lake.vercel.app/'><button className='btn1'>Out Put</button></a><br />
            <br />
            <h3><i className="fa-regular fa-star"></i> QUIZ USING CORE JAVA </h3>
            <p>
                The "Online Java Paper Test" is a dynamic application built using Java Swing for creating an interactive platform to conduct Java programming assessments. It provides users with a simulated environment to test their knowledge and understanding of Java concepts through a series of multiple-choice questions.
            </p>
            <p>
                <strong>Key Features:</strong>
            </p>
            <ul>
                <li className='li1'><strong>Interactive Quiz Interface:</strong> The application features an intuitive quiz interface with questions presented sequentially, allowing users to select their answers using radio buttons.</li>
                <li className='li1'><strong>Dynamic Questionnaire:</strong> Users are presented with a variety of Java-related questions covering topics such as data types, classes, packages, keywords, and functions.</li>
                <li className='li1'><strong>Bookmarking Functionality:</strong> Users can bookmark questions for later review, enabling them to revisit specific questions and revise their answers before submitting the test.</li>
                <li className='li1'><strong>Scoring and Result Display:</strong> The application keeps track of correct answers selected by the user and provides instant feedback on completion, displaying the total score achieved.</li>
            </ul>
            <p>
                <strong>Technical Details:</strong>
            </p>
            <ul>
                <li className='li1'><strong>Java Swing:</strong> The graphical user interface (GUI) of the application is implemented using Java Swing components, providing a platform-independent solution for creating rich desktop applications.</li>
                <li className='li1'><strong>Action Listeners:</strong> Event handling is facilitated through ActionListener interfaces, enabling the application to respond to user actions such as selecting answers and navigating through questions.</li>
                <li className='li1'><strong>Button Group:</strong> Radio buttons are grouped together using ButtonGroup to ensure that only one option can be selected at a time for each question.</li>
                <li className='li1'><strong>Bookmarked Questions:</strong> The application allows users to bookmark questions by creating additional buttons dynamically, providing a convenient way to mark and revisit specific questions.</li>
            </ul>
            <p>
                <strong>Conclusion:</strong>
            </p>
            <p>
                The "Online Java Paper Test" application demonstrates the use of Java Swing to create a user-friendly and interactive testing environment for assessing Java programming skills. It serves as a valuable tool for educators, students, and Java enthusiasts alike, offering a convenient platform to evaluate and enhance Java proficiency.
            </p>
            <a href='https://github.com/bhargavnanicaptain/JAVA-QUIZ.git' target='_blank'><button className='btn'>GitHub Source Code</button></a><br />
            <h3><i className="fa-regular fa-star"></i>  GARBAGE MONITORING AND AUTO ALERTING SYSTEM TO MUNCIPALITY USING IOT:</h3>
            <p>Introducing our cutting-edge Garbage Monitoring and Auto Alerting System utilizing IoT technology, designed to revolutionize municipal waste management. By deploying smart sensors across designated areas, our system continuously monitors garbage levels in bins. When levels reach a predefined threshold, automatic alerts are triggered, notifying municipality officials for timely intervention. This innovative solution not only streamlines waste collection processes but also promotes efficiency, cleanliness, and environmental sustainability in urban areas. Say goodbye to overflowing bins and hello to a smarter, cleaner city with our IoT-powered Garbage Monitoring System.</p>
            <a href='https://drive.google.com/drive/u/0/home'><button className='btn'>Documentation</button></a><br />
            <h3><i className="fa-regular fa-star"></i> SMART RAILWAY PLATFORM WITH PASSENGER SAFETY GATES TO PREVENT LEVEL CROSSING USING IOT </h3>
            <p>Introducing our innovative Smart Railway Platform equipped with IoT technology and passenger safety gates to eliminate level crossing risks. Our system ensures enhanced safety and efficiency in railway operations.</p>
            <h2>Features:</h2>
            <ul>
                <li className='li1'>IoT-enabled sensors monitor train schedules and platform occupancy in real-time.</li>
                <li className='li1'>Passenger safety gates automatically close during train arrival, preventing unauthorized access to the tracks.</li>
                <li className='li1'>Integration with railway management systems for seamless operation and coordination.</li>
                <li className='li1'>Real-time alerts to railway staff and passengers about train arrivals and departures.</li>
                <li className='li1'>Improved safety measures to prevent accidents and ensure passenger well-being.</li>
            </ul>
            <p>Experience a safer and more efficient railway system with our Smart Railway Platform solution.</p>

            <a href='https://drive.google.com/drive/u/0/home'><button className='btn'>Documentation</button></a><br />
            <h3><i className="fa-regular fa-star"></i> OBSTACLES AVOIDING ROBOT USING ARDUINO </h3>
            <p>Presenting our Obstacles Avoiding Robot, powered by Arduino technology, designed to navigate autonomously while avoiding obstacles in its path.</p>
            <h2>Key Components:</h2>
            <ul>
                <li className='li1'>Arduino microcontroller for real-time control and decision-making.</li>
                <li className='li1'>Ultrasonic sensors for detecting obstacles and determining distances.</li>
                <li className='li1'>Motor drivers to enable precise movement and maneuverability.</li>
                <li className='li1'>Algorithm for obstacle avoidance and path planning.</li>
                <li className='li1'>Compact and agile design for versatile use in various environments.</li>
            </ul>
            <p>Experience the future of robotics with our Obstacles Avoiding Robot, delivering efficiency and intelligence in navigating complex terrains.</p>
            <a href='https://drive.google.com/drive/u/0/home' target='_blank'><button className='btn'>Documentation</button></a><br />
            <h3><i className="fa-regular fa-star"></i> RADAR DETECTOR USING ARDUINO </h3>
            <p>Introducing our Radar Detector, built with Arduino technology, providing accurate detection and monitoring of surrounding objects.</p>
            <h2>Key Features:</h2>
            <ul>
                <li className='li1'>Arduino microcontroller for signal processing and data analysis.</li>
                <li className='li1'>Radar sensor module for detecting objects within a specified range.</li>
                <li className='li1'>Visual and audible alerts to notify users of detected objects.</li>
                <li className='li1'>Customizable settings for sensitivity and detection range.</li>
                <li className='li1'>Compact and portable design for easy installation and use in various applications.</li>
            </ul>
            <p>Enhance safety and awareness with our Radar Detector, offering reliable object detection and monitoring for a range of scenarios.</p>
            <a href='https://drive.google.com/drive/u/0/home'><button className='btn'>Documentation</button></a>






        </>
    );
};

export default Projects;