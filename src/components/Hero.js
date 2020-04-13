import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ children, className, home, img }) => {
  // home props is the gradient
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(Hero)`
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "40vh")};
  background-size: cover;
  /* somehow default opacity is 0.99. */
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: ${props => (props.home ? "80vh" : "70vh")};
  }
  @media (min-width: 1200px) {
    min-height: 100vh;
  }
`
