import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from "../components/layout/seo";
// import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import RenderLuisElProgramador from "../components/sections/RenderLuisElProgramador";

const Container = styled.section`
`

const IndexPage = () => {




  return (
    <Layout pageTitle="Luis Benítez">
      <Container>
        <RenderLuisElProgramador />
      </Container>
    </Layout>
  )
}



export const Head = () => (
  <Seo title="Luis Benítez" description="Hello, nice to meet you!I'm MO.MA*" image='/home.png' />
)
export default IndexPage