import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import StoryImg from '../../assets/imgs/slideShow27.png';
import {ImTwitter, SiDiscord} from "react-icons/all";
import FooterImg from '../../assets/imgs/storyFooter.png';

import './StoryComp.scss';

const StoryComp = () => {
  return (
    <Container fluid className="story-comp page-bg">
      <Container className="story-comp-container">
        <Row className="story-comp-content comp-margin-top">
          <div className="story-comp-title">
            <TitleComp title={'Story'}/>
          </div>
          <div className="story-content">
            <p data-aos="fade-up" className="story-text-item">He knew that we couldn't keep subdividing Earth's resource
              pie; we need to make the pie bigger if we want to survive. The promise of resources from the Moons, other
              planets, asteroids, and the Sun made space hope for him to save our future. The world population is likely
              to double within 40 years and re-double shortly after that; world resources will not, instead they will
              run out. In space, solar power is infinite (reducing the need to use forests and oil and coal merely for
              fuel and eliminating the pollution they cause), as are asteroid metals. He believed that these unlimited
              resources would enable us to reduce the plundering of our planet and were the only way he could save the
              existence of his kind. But to obtain these resources, he required large structures in space and needed
              rockets to get there. He believed in his abilities and learned how to build the infrastructure to obtain
              those resources. His mission is creating alternative habitats for his kind, and he knew such a mission
              demands massive resources and a lot of sacrifices by the workforce. That is just a bit of the big picture
              showing how he wanted to impact the lives of everyone around him.</p>
            <div
              className="story-img-item d-flex justify-content-center align-items-center">
              <img src={StoryImg} alt="story"/>
            </div>
            <p data-aos="fade-up" className="story-text-item" style={{marginTop: "10px"}}>He was nervous, scared even to
              go on the expedition after finally finding a way to travel to space in search of a new homeland. It took
              him decades to finally create a way that ensured his safe landing and survival, but he knew that were so
              many unknown variables, and anything could happen at any time. He sat there in his seat, listening to the
              rumbling sound of the engine as it warmed up and the countdown installed in the ship started. "First
              turtle," he thought, "I will be the first turtle in space. Those thoughts plagued his senses and told him
              that he was finally going out to space and all those years of hard work were finally paying off. He proved
              nothing is impossible, and turtles can achieve everything if they put their whole heart and soul into
              it.</p>
            <p data-aos="fade-up" className="story-text-item">The engines erupted, and he was in the air. He held his
              breath for the first few minutes waiting for the noise to fade, it felt like forever to him until the
              first part of the ship detached, and then the second countdown began, and he was out of the atmosphere in
              his self-made rocket when the final piece detached. The screen in front of him gave him the view of
              everything his spacecraft passed. Keeping track of time in space is useless, but he knew he was in outer
              space as the third alarm went off. It was almost tough to see anything when he looked outside the screen,
              but he knew he was on the right track. He traveled across multiple galaxies exploring planets and
              conducting experiments to determine if any of them was habitable. After multiple failures, he finally
              discovered a new planet, which had enough resources to sustain life as we know it. With his sheer will and
              determination, he fulfilled his dreams of finding a new home in space, and now he aims to set up a colony
              on this planet.</p>
            <p data-aos="fade-up" className="story-text-item">Turtlеѕ move ѕlоwly bесаuѕе their lifestyle and
              environment doesn't require them to be fast. Thеу’rе hеrbіvоrеѕ, thеу dоn't hаvе tо сhаѕе thеіr fооd. They
              have nісе, thісk ѕhеllѕ, whісh mеаnѕ thаt mоѕt рrеdаtоrѕ ѕіmрlу don't bоthеr thеm. Similarly, human beings
              aren't under threat of another species on planet earth, and the Earth's resources have always been
              substantial to meet all our needs. However, over the years, the resource consumption rate has risen
              exponentially, and space exploration has become necessary to ensure humanity's survival. Turtles are slow
              but precise in their movement, and when they set an objective, no matter what or how far it may be, it
              becomes their holy grail. In complex matters like space exploration, the progress of human beings has been
              slow, steady, full of obstacles and failures. Still, we never gave up, and our perseverance and commitment
              to the cause have made it possible for us to make commercial space flight possible, maybe in the next
              10-20 years. The end goal of traveling into space, like discovering
              the New World, is to work and live there, not only to sit back on Earth and think about what autonomous
              spacecraft report back. We don't deploy cameras to the Grand Canyon; instead, we go there directly.
              America expanded by sowing seeds in many hotspots and filling the gaps with commerce, industries, and
              innovative thinking. </p>
            <div className="last-content">
              <p data-aos="fade-up" className="story-text-item">Humanity has always discovered ways to thrive under
                challenging circumstances, and
                we will do so in space as well. We can't start living and working in space unless we first get there.
                And it is our purpose to leave the cradle of our mother planet.<br/><p
                  className="story-text-item margin-scope">So
                  welcome to our special community where not only will you enjoy the art, get into a great community but
                  also see how the demand after your bellowed art will rise which means that while you are enjoying
                  yourself, you artwork is going up in value. In the future, we will have brief interviews with
                  different podcasts regarding our art and the creators behind it. But for now, just enjoy your stay in
                  our welcoming community and get ready for the next big hit in the NFT world. Welcome fellow
                  Spaceturtle.</p></p>
              <div className="contact d-flex flex-row justify-content-center align-items-center">
                <div className="community d-flex flex-column justify-content-center align-items-center">
                  <h6>JOIN THE COMMUNITY</h6>
                  <div className="contact-social d-flex justify-content-evenly align-items-center">
                    <a href="https://twitter.com/spaceturtlesNFT"><ImTwitter/></a>
                    <a href="https://discord.gg/egdbc6M3"><SiDiscord/></a>
                  </div>
                </div>
                <div className="img">
                  <img src={FooterImg} alt="turtles"/>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default StoryComp;