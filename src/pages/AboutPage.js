import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            consectetur! Odit itaque magnam, modi quae inventore doloremque
            provident iure eum adipisci quo dolore nobis, ea architecto officiis
            alias accusamus dicta sit nesciunt animi maxime quis blanditiis
            placeat perferendis? Quaerat, exercitationem rem? Dignissimos
            deleniti labore magni, reiciendis expedita quidem sit ducimus
            eveniet unde quibusdam a doloremque enim ipsa accusamus ullam
            recusandae dolor commodi numquam minima reprehenderit, voluptatibus
            ipsum incidunt. Facere omnis eaque blanditiis iusto odio sed
            incidunt quia perspiciatis cum? Et, optio labore natus, quod impedit
            vel quisquam veritatis placeat exercitationem quaerat magnam autem.
            Veritatis accusantium similique, consequatur enim odio harum.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
