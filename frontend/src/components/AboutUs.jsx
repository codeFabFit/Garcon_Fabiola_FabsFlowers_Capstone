

// import React from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const AboutUs = () => {

    const externalLink = "https://www.waitroseflorist.com/inspiration-and-advice/care-guides/caring-for-your-flowers";
    const handleLearnMoreClick = () => {
        window.open(externalLink, '_blank');
      };
    
    
  return (
    <Container className="about-us-container">
      

<img className="logo-img" src="https://static.vecteezy.com/system/resources/previews/008/420/922/original/flower-alphabet-f-logo-vector.jpg"></img>

<h2>About Fabs Flowers</h2>
<p>The flower shops purpose is to provide our customers with quality flowers and floral arrangements at a fair price. We will strive to match and surpass the expectations that our customers expect from us and our products.</p>
      <div className="about-us-content">
        <div className="about-us-item">
          <Image className="flower-img"src="https://img.freepik.com/premium-photo/dahlia-flower-banquet-beautiful-spectacular-flower-arrangement-background_31965-57489.jpg" alt="Flowers Importance" fluid />
          <hr/>
          <code><h6>Flower Importance</h6></code>
          <p>Discover the beauty and importance of flowers in enhancing our environment and well-being. flowers attract pollinators to make seeds, helping plants to reproduce and form the next generation. Flowers also play important roles in ecosystems. Floral nectar, pollen and even petals are an important food source for a huge range of animals, from bees and beetles to birds and bats</p>

        </div>

        <div className="about-us-item">
          <Image className="flower-img" src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" alt="Flowers as Gifts" fluid />
         <hr/>
         <code> <h6>Flowers as Gifts</h6> </code>

          <p>Explore the meaningful tradition of expressing emotions and sentiments through flowers as gifts. Flowers have long been a timeless gift, expressing emotions and sentiments when words fall short. Whether it is a birthday, anniversary, or a simple gesture of appreciation, giving flowers is a tradition that brings joy and delight to both the giver and the recipient. </p>
        </div>

        <div className="about-us-item">
          <Image className="flower-img" src="https://img.freepik.com/premium-photo/dahlia-flower-banquet-beautiful-spectacular-flower-arrangement-background_31965-55899.jpg" alt="Flower Care" fluid />
         <hr/>
         <code> <h6>Flower Care</h6> </code>

          <p>Learn essential tips and techniques for ensuring the longevity and vitality of your beautiful flowers. Check out tips to care for your flowers to last longer. </p>
                   <li> For the flowers to last longer, place them in a vase.</li>
                   <li>Put a little water in the vase.</li>
                   <li>Avoid very stuffy places for the flowers to last longer.</li>
                   <li>Remove damaged leaves and petals.</li>
                   <li>Change the water frequently.</li>
                   <li>Avoid direct exposure to the sun.</li>

                   
        </div>
        <br/>
<p>Want to know how to care for any flower type? click the button below </p>
        <Button variant="primary" onClick={handleLearnMoreClick}>
          Learn More
        </Button>
        
      </div>
    </Container>
  );
}

export default AboutUs;
