import React from 'react';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const Bio = ({ author }) => {
  const { social } = author;

  if (!author) return null;
  return (
    <div className="bio-wrapper">
      <div className="bio">
          <div className="introduction korean">
            <p className="title">
                <strong>쿠키</strong>의 개발 블로그
            </p>
            <div className="social-links">
              <IconButtonBar links={social} />
            </div>
          </div>
        {/*<Image className="thumbnail" src={bio.thumbnail} alt="thumbnail" />*/}
      </div>
    </div>
  );
};

export default Bio;
