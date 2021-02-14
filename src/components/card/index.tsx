import React from 'react';

import './index.scss';
import { Link } from 'gatsby';

interface Props {
  node: {
    id: string
    frontmatter: {
      title: string;
      slug: string;
      date: string;
      tag: string;
      thumbnail: string;
    }
  }
}

const Card: React.FC<Props> = ({ node }: Props) => {
  return (
    <div className="card">
      <Link to={node.frontmatter.slug}>
        <div className="card__thumbnail" style={{ backgroundImage: `url(${node.frontmatter.thumbnail})` }} />
        <div className="card__wrapper">
          <div className="card__tag-group">
            <p className="capitalize">{node.frontmatter.tag}</p>
            <p>{node.frontmatter.date}</p>
          </div>
          <h3 className="card__title">{node.frontmatter.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
