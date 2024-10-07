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
          I am a passionate and hard working Engineer and Leader. I have a thirst for learning new technology and finding creative ways to solve problems. I love building beautiful and reusable code. I thrive working with a team to achieve success together. I have excellent interpersonal communication and organizational skills. I am excited and ready to continue to learn and sharpen the knowledge I am bringing to the table, because with Software Development you never finish learning.
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
