import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '@src/layouts';

import './index.scss';
import { Helmet } from 'react-helmet';

const DetailPage: React.FC = ({ data } : PageProps) => {
  const post = (data as any).markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | 지포의 나날들</title>
      </Helmet>
      <div className="post">
        <div className="post__thumbnail" style={{ backgroundImage: `url(${post.frontmatter.thumbnail})` }} />
        <div className="container">
          <div className="post__tags">
            <p>{post.frontmatter.tag}</p>
            <p>{post.frontmatter.date}</p>
          </div>
          <div className="post__title">
            <h1>{post.frontmatter.title}</h1>
            <hr />
          </div>
          <div className="post__markdown" dangerouslySetInnerHTML={{ __html: post.html }}/>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
                date
                thumbnail
                slug
                tag
            }
        }
    }
`;

export default DetailPage;
