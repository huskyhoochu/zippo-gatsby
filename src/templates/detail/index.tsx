import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '@src/layouts';

const DetailPage: React.FC = ({ data } : PageProps) => {
  const post = (data as any).markdownRemark;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Layout>
  );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
            }
        }
    }
`;

export default DetailPage;
