import React from 'react';


import {motion as m} from 'framer-motion';


function About() {
    return (
        <>
            <div className="banner_outer">

                <m.div
                initial={{x:"-100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
                >
                        <img src='https://tse3.mm.bing.net/th?id=OIP.57UvoMV578pwcK022zlmUgHaIM&pid=Api&P=0&h=180'/>

                </m.div>


                <m.div className='second_div_about'
                initial={{x:"100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
                >

                    <div><h2>About Us</h2></div>
                     <p><q className='testingQuote'> ManageMate is your ultimate solution for all your task and time management needs. As a leading platform dedicated to enhancing productivity and efficiency, ManageMate aims to provide a seamless and enjoyable experience for users across the globe. Our goal is to empower individuals and teams with a comprehensive set of tools to manage tasks, track time, and achieve their goals efficiently.

With ManageMate, you gain access to a wide array of features designed to simplify your workflow and boost your productivity. Whether you’re an individual looking to stay organized or a team striving for better collaboration, our platform offers the latest and most effective solutions in task and time management.

 </q></p>
                </m.div>


            </div>


            <div className="welcomeSection">

                <h2>Welcome to #Manage-Mate.</h2>
                <p>Join our community of productivity enthusiasts and discover how ManageMate can transform the way you work and play. Let’s make managing tasks fun again!</p>
            </div>

            <div className="aboutMesection">
                
                <div>
                    <img src='https://tse3.mm.bing.net/th?id=OIP.DByMJ5tOfMYvl_f_mh3Q-wHaGq&pid=Api&P=0&h=180'/>
                </div>
                <div>

                    <h3>OUR MISSION</h3> <br />
                        <p>At ManageMate, our mission is to transform the way you manage your tasks and time. We aim to provide a user-friendly platform that empowers individuals and teams to achieve their goals with efficiency and ease. We believe that productivity should be accessible, enjoyable, and effective for everyone.</p>
                </div>
            </div>
           

            <div className="detail_about">

               <div>
                
               
                <p><b>USER FRIENDLY</b> </p>      
                <p>Our platform is designed with you in mind, making task and time management intuitive and effortless. ManageMate is crafted to simplify your life, not complicate it.</p>
               </div>





               <div>
                
                <p><b>GLOBAL </b></p>
                <p>No matter where you are, ManageMate is with you. Our platform is accessible worldwide, ensuring you can manage your tasks and time from anywhere.</p>
               </div>
               <div>
                
                <p><b>INSIGHTFUL</b></p>
                <p>Knowledge is power. ManageMate provides detailed analytics and reports to give you valuable insights into your productivity patterns, helping you improve continuously.</p>
               </div>

               <div>
                
                <p><b>COLLABORATION FOCUSED</b></p>
                <p>Great things happen when people work together. ManageMate makes team collaboration seamless, helping you achieve your goals faster and more effectively.</p>
               </div>
               

            </div>
        </>
    );
}

export default About;