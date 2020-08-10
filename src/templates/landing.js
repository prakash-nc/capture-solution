import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

// List of all Sections Components
import Intro from "../components/Intro/Intro";

import Layout from "../components/Layout";

const Sections = {
  introduction_section: Intro,
};

export const LandingPageTemplate = ({ sections, helmet }) => {
  return (
    <main className="main">
      {helmet || ""}
      {sections.map((section, index) => {
        const Component = Sections[section.type];
        return <Component key={index} {...section} />;
      })}
    </main>
  );
};

LandingPageTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(data);
  return (
    <Layout>
      <LandingPageTemplate
        sections={post.frontmatter.sections}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default LandingPage;

export const pageQuery = graphql`
  query LandingByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        sections {
          color
          description
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          type
        }
      }
    }
  }
`;
