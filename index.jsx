import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badges from "./components/Badges/index"
import Banners from "./components/Banners/index"
import Card from "./components/Card"
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
      <h1>Advanced React course</h1>
      <hr></hr>
      <br />
      <h2>Instructional Part</h2>
      <hr></hr>
      <Star />
      <br />
      <br />
      <Menu onOpen={() => {}}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <br />
      <br />
      <h2>Solo Project Part 1 - Badges</h2>
      <hr></hr>
      <Badges onOpen={() => {}}>
        <div className="badges">
            <p className="square">SQUARE</p>
            <Badges.Badge color="Gray Square" badge="Badge" />
            <Badges.Badge color="Red Square" badge="Badge" />
            <Badges.Badge color="Yellow Square" badge="Badge" />
        </div>
        <div className="badges pill-box">
            <p className="pill">PILL</p>
            <Badges.Badge color="Gray Pill" badge="Badge" radius="pill" />
            <Badges.Badge color="Red Pill" badge="Badge" radius="pill" />
            <Badges.Badge color="Yellow Pill" badge="Badge" radius="pill" />
        </div>
      </Badges>
      <h2>Solo Project Part 2 - Banners</h2>
      <hr></hr>      
      <Banners onOpen={() => {}}>
        
          <div className='banner-index'>
            <Banners.Banner color="lightgreen" lines="multi" category="success">           
              <div className='banner-p banner-line-success'>
                <p>Congratulations!</p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
              </div>
            </Banners.Banner>
            <Banners.Banner color="lightgreen" lines="single" category="success">
              <div className='banner-p banner-line-success'>
                <p>Congratulations!</p> 
              </div>
            </Banners.Banner>
          </div>
          <div className='banner-index'>
            <Banners.Banner color="yellow" lines="multi" category="warning">           
              <div className='banner-p banner-line-warning'>
                <p>Attention</p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
              </div>
            </Banners.Banner>
            <Banners.Banner color="yellow" lines="single" category="warning">
              <div className='banner-p banner-line-warning'>
                <p>Attention</p> 
              </div>
            </Banners.Banner>
          </div>
          <div className='banner-index'>
            <Banners.Banner color="lightred" lines="multi" category="error">           
              <div className='banner-p banner-line-error'>
                <p>There is a problem with your application</p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
              </div>
            </Banners.Banner>
            <Banners.Banner color="lightred" lines="single" category="error">
              <div className='banner-p banner-line-error'>
                <p>There is a problem with your application</p> 
              </div>
            </Banners.Banner>
          </div>
          <div className='banner-index'>
            <Banners.Banner color="lightblue" lines="multi" category="neutral">           
              <div className='banner-p banner-line-neutral'>
                <p>Update available</p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
              </div>
            </Banners.Banner>
            <Banners.Banner color="lightblue" lines="single" category="neutral">
              <div className='banner-p banner-line-neutral'>
                <p>Update available</p> 
              </div>
            </Banners.Banner>
          </div>
        
      </Banners>
      <br />
      <br />
      <h2>Solo Project Part 3 - Cards</h2>
      <hr></hr>      
      <div>
        <h1 className='card-label'>Cards</h1>
        <div className='cards'>
          <Card card_title="card" />
          <Card card_title="card-hover" card_hover="HOVER"/>
        </div>
      </div>
      <h2>Solo Project Part 4 - Testimonials</h2>
      <hr></hr>            
      <div className='testimonial'>
        <h1 className="testimonial-title">Testimonials</h1>
        <Testimonial pic={true} />
        <Testimonial pic={false} />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
