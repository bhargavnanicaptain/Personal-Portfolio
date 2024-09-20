import React from "react";

const Home = () => {
    return (
        <>
            <div style={{
                fontFamily: "'Briem Hand', cursive",
                fontOpticalSizing: "auto",
                fontWeight: "normal",
                fontStyle: "normal"
            }}>
                <style>{`
                *{
                    box-sizing:border-box;
                    margin:0;
                    padding:0;
                }
                    @keyframes slideInFromLeft {
                        0% {
                            transform: translateX(-100%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                    body {
                        background-image: url('https://miro.medium.com/v2/0*_4QMKLmDcLolMwAt.jpeg');
                        overflow-x:hidden;
                    }
                    .glass-container {
                        background-color: rgba(255, 255, 255, 0.3);
                        border-radius: 25px;
                        margin-top: 7%;
                        padding: 90px;
                        width: 50%;
                        padding-bottom:0.1px;
                        
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
                        animation: slideInFromLeft 0.5s ease-in-out forwards;
                    }
                    .head1 {
                        margin-top: -7%;
                    }
                    .span1 {
                        color: #d3d3d3;
                        text-shadow: 2px solid black;
                        font-size: 35px;
                        font-family: sans-serif;
                    }
                    .span1:hover {
                        color: #01beae;
                        text-shadow: 2px solid black;
                        font-size: 35px;
                        font-family: sans-serif;
                    }
                    .a1 {
                        text-decoration: none;
                    }
                    .para1 {
                        color:black;
                        font-size:23px;
                    }
                    /* Styles for mobile devices (up to 600px) */
@media only screen and (max-width: 600px) {
    .glass-container {
        padding: 30px;
        width: 90%;
        margin-top: 10%;
    }

    .span1 {
        font-size: 25px;
    }

    .para1 {
        font-size: 18px;
    }
}

/* Styles for tablets (601px to 768px) */
@media only screen and (min-width: 601px) and (max-width: 768px) {
    .glass-container {
        padding: 50px;
        width: 70%;
    }

    .span1 {
        font-size: 30px;
    }

    .para1 {
        font-size: 20px;
    }
    body{
        overflow-x:hidden;
    }
}

/* Styles for laptops (769px to 1200px) */
@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .glass-container {
        padding: 70px;
        width: 60%;
    }

    .span1 {
        font-size: 33px;
    }

    .para1 {
        font-size: 22px;
    }
}

/* Styles for extra large devices (above 1200px) */
@media only screen and (min-width: 1201px) {
    .glass-container {
        padding: 90px;
        width: 50%;
    }

    .span1 {
        font-size: 35px;
    }

    .para1 {
        font-size: 23px;
    }
}
    .sonata{
    width: 25%;
    height: 25%;
    border:0;
    border-radius: 25px;

    }
    .sonata:hover{
        width: 30%;
        height: 30%;
        border:0;
        border-radius: 25px;
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
    }
                `}</style>
                <center>
                    <div className="glass-container">
                        <h1 className="head1">Hi, my name is <a href="https://www.linkedin.com/in/v-t-bhargav-64bb51214?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRAC9AhctSeGyw2%2F2jKdSZA%3D%3D" className="a1"> <span className="span1">VALLAMKONDA THIRUMALA BHARGAV</span></a><br />DET at Sonata Software <a href="https://www.sonata-software.com/" target="_blank"><img src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230315085701.jpg" className="sonata"/></a>    </h1><br />
                        <p className="para1">
                            "As a Digital Engineer Trainee at Sonata Software, I am gaining hands-on experience in developing integrated digital solutions. I am learning to master both client and server-side technologies, with a focus on crafting dynamic and resilient applications using Java and other modern tools in our tech stack."
                        </p>
                    </div>
                </center>
            </div>
        </>
    );
}

export default Home;