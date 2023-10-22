import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

const BlogCard = ({ image, title, titleaz, text1, textaz1, id }) => {
  const [lang] = useContext(LangContext);
  const maxTitleLength = 17;
  const maxText1Length = 90;
  const truncatedTitle = truncateText(lang === "az" ? title : titleaz, maxTitleLength);
  const truncatedText1 = truncateText(lang === "az" ? text1 : textaz1, maxText1Length);

  return (
    <div className="blogcard blogcard2 mt-2" style={{ width: '18rem' }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-dark">{truncatedTitle}</h5>
        <p className="card-text py-2">{truncatedText1}</p>
        <Link className="btn btn-primary mx-1 blogbtn" to={`/blogs/${id}`}> {lang === "az" ? 'Read Blog' : '  Daha Çox'}</Link>
      </div>
    </div>
  );
}

export default BlogCard;
