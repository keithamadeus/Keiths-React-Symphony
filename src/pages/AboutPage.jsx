// This is a static page mocking an "About Us" section for our fake user data
import profilePicture from '../assets/images/keith-trees.jpeg';
import bannerPicture from '../assets/images/02-hero-bg.jpg';
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <h1 className="d-flex justify-content-center">About Me</h1>
      <div className='row'>
        <div className="col-md-2 text-center">
        <img 
            src={profilePicture} 
            alt="Profile" 
            className="rounded float-left opacity-70" 
            style={{ width: '100px', height: '150px' }} 
          />
        </div>
        <div className="col-md-9">
          <p className="lead mb-0">
          With a BS in Economics from Utah State University and over five years as a QA Supervisor, I've transitioned into a dynamic Full Stack Developer, blending analytical skills with coding expertise. Proficient in React, JavaScript, HTML5, CSS, Python, and SQL, I leverage tools like Node.js and Express.js to create RESTful APIs and applications. My background has refined my problem-solving abilities and organizational skills, fostering a team-focused approach to developing reusable, efficient code through collective efforts. My leadership experience and commitment to continuous learning in tech equip me to lead projects effectively, staying updated with cutting-edge technologies to drive innovation. My passion for technology fuels my creativity and enhances my interpersonal skills, aiming to contribute to a community where we can all grow and create something extraordinary.
          </p>
        </div>

        
      </div>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-12">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <img 
                  src={bannerPicture} 
                  alt="Profile" 
                  className="img-fluid rounded opacity-75" 
                  style={{ width: '100%', height: 'auto' }} 
                />
                <h3>If you write the problem down clearly, then the matter is half solved</h3>
                <p className="lead mb-0">
                Remember, if code looks too perfect, you might just be doing it wrong. Embrace the chaos, debug with glee, and let&apos;s see what masterpiece is created
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
