import React from 'react';
import Layout from '@src/layouts';
import { graphql, PageProps, Link } from 'gatsby';

const IndexPage: React.FC = ({ data }: PageProps) => {
  const posts = (data as any).allMarkdownRemark;
  return (
    <Layout>
      <div className="main container">
        <p>{posts.totalCount} posts</p>
        {Array.prototype.map.call(posts.edges, ({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.slug}>
              <p>{node.frontmatter.title}</p>
              <p>{node.frontmatter.date}</p>
            </Link>
          </div>
        ))}
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
                  }
              }
          }
      }
  }
`;

export default IndexPage;
