import React from 'react';

const Skills = () => {
    return (
        <>
            <style>{`
                * {
                    @import url('https://fonts.googleapis.com/css2?family=Briem+Hand:wght@100..900&family=Dancing+Script:wght@400..700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Marvel:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
                    font-family: "Libre Baskerville", serif;
                    font-weight: 400;
                    font-style: italic;
                    color: #fca311;
                    
                }
                .main {
                    text-align: center;
                }
                body {
                    background-color: #14213d;
                }
                h2 {
                    text-align: center;
                    font-size: 2rem;
                }
                .java,
                .chash,
                .html,
                .css,
                .js,
                .spring,
                .hiber,
                .boot,
                .react,
                .mys,
                .git,
                .vs,
                .ec,
                .intel,
                .wind,
                .lin {
                    width: 7%;
                    margin-left: 1%;
                    border: none;
                    border-radius: 50%; /* Set border radius to make images circular */
                    height: 7%; /* Set height in pixels */
                }
                .java:hover,
.chash:hover,
.html:hover,
.css:hover,
.js:hover,
.spring:hover,
.hiber:hover,
.boot:hover,
.react:hover,
.mys:hover,
.git:hover,
.vs:hover,
.ec:hover,
.intel:hover,
.wind:hover,
.lin:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
}
/* Styles for mobile devices (up to 600px) */
@media only screen and (max-width: 600px) {
    h2 {
        font-size: 1.5rem;
    }

    .java,
    .chash,
    .html,
    .css,
    .js,
    .spring,
    .hiber,
    .boot,
    .react,
    .mys,
    .git,
    .vs,
    .ec,
    .intel,
    .wind,
    .lin {
        width: 15%;
        height: auto; /* Maintain aspect ratio */
        margin-left: 2%;
    }
}

/* Styles for tablets (601px to 768px) */
@media only screen and (min-width: 601px) and (max-width: 768px) {
    h2 {
        font-size: 1.75rem;
    }

    .java,
    .chash,
    .html,
    .css,
    .js,
    .spring,
    .hiber,
    .boot,
    .react,
    .mys,
    .git,
    .vs,
    .ec,
    .intel,
    .wind,
    .lin {
        width: 10%;
        height: auto; /* Maintain aspect ratio */
        margin-left: 1.5%;
    }
}

/* Styles for laptops (769px to 1200px) */
@media only screen and (min-width: 769px) and (max-width: 1200px) {
    h2 {
        font-size: 2rem;
    }

    .java,
    .chash,
    .html,
    .css,
    .js,
    .spring,
    .hiber,
    .boot,
    .react,
    .mys,
    .git,
    .vs,
    .ec,
    .intel,
    .wind,
    .lin {
        width: 7%;
        height: auto; /* Maintain aspect ratio */
        margin-left: 1%;
    }
}
    .mss{
    width:10%;
    border:0;
    border-radius:25px;
    height:50% !important;
    margin-left:1.5%;
    }
    .mss:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
}

/* Styles for extra large devices (above 1200px) */
@media only screen and (min-width: 1201px) {
    h2 {
        font-size: 2rem;
    }

    .java,
    .chash,
    .html,
    .css,
    .js,
    .spring,
    .hiber,
    .boot,
    .react,
    .mys,
    .git,
    .vs,
    .ec,
    .intel,
    .wind,
    .lin {
        width: 7%;
        height: auto; /* Maintain aspect ratio */
        margin-left: 1%;
    }
}

            `}</style>
            <h1 className='main'>My Skills</h1><br />
            <h2>PROGRAMMING LANGUAGES</h2><br />
            <center>
                <img src='https://static-00.iconduck.com/assets.00/java-icon-512x512-kvr1nudq.png' className='java' alt='Java' />
                <img src='https://i.pinimg.com/736x/52/85/4b/52854be7602f3b1db549ea52ae1d3d94.jpg' className='chash' alt='C#' /><br />
                <h2 className='head2'>WEB TECHNOLOGIES</h2>
                <img src='https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-6.png' className='html' alt='HTML5' />
                <img src='https://logowik.com/content/uploads/images/123_css3.jpg' className='css' alt='CSS3' />
                <img src='https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg' className='js' alt='JavaScript' />
            </center><br />
            <h2 className='head2'>FRAMEWORKS</h2>
            <center>
                <img src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/spring-boot-1_5zDxm9B.jpg' className='spring' />
                <img src='https://miro.medium.com/v2/resize:fit:400/0*jba3dz1j64rfhl5i.jpg' className='hiber' />
                <img src='https://epss.ucla.edu/static/bootstrap-5.2.0/site/static/docs/5.2/assets/brand/bootstrap-social-logo.png' className='boot' /><br />
                <h2 className='head2'>LIBRARIES</h2>
                <img src='https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png' className='react' /></center><br />
            <h2 className='head2'>DATABASES</h2>
            <center>
                <img src='https://cdn3d.iconscout.com/3d/free/thumb/free-mysql-9294870-7578013.png' className='mys' />
                <img src='https://www.nationalcomputer.com/wp-content/uploads/elementor/thumbs/p4-onwc1jggns04s30gcrizj503uazmf8khmni9gb4ray.jpg' className='mss'      ></img><br />
                <h2 className='head2'>TOOLS & IDE's</h2>
                <img src='https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg' className='git' />
                <img src='https://repository-images.githubusercontent.com/657248114/d3c7b91a-b285-4d1e-8429-5de1acc5f61e' className='vs' />
                <img src='https://seeklogo.com/images/J/jetbrains-intellij-idea-logo-CA1D5DC51F-seeklogo.com.png' className='intel' />
                <img src='https://logowik.com/content/uploads/images/eclipse5466.jpg' className='ec' /></center><br />
            <h2 className='head2'>OPERATING SYSTEMS</h2>
            <center>
                <img src='https://i.pinimg.com/736x/d3/02/d7/d302d7664552bb4bdad844c335c3ad25.jpg' className='wind' />
                <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/linux-logo-design-template-b04c5960543f942cbd64c81280a5a941_screen.jpg?ts=1659251350' className='lin' />
            </center>
        </>
    );
};

export default Skills;