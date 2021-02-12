import React from 'react';
import Layout from '@src/layouts';
import { graphql, PageProps, Link } from 'gatsby';

import '@src/styles/main.scss';
import Card from '@src/components/card';

const IndexPage: React.FC = ({ data }: PageProps) => {
  const posts = (data as any).allMarkdownRemark;
  return (
    <Layout>
      <div className="main container">
        <div className="main__wrapper">
          {Array.prototype.map.call(posts.edges, ({ node }) => (
            <Card node={node} key={node.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          totalCount
          edges {
              node {
                  id
                  frontmatter {
                      title
                      slug
                      date
                      tag
                      thumbnail
                  }
              }
          }
      }
  }
`;

export default IndexPage;
