import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './reviews.scss';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit sed mauris rhoncus dignissim a eget sapien. Mauris vel magna id velit malesuada facilisis.',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Etiam porttitor, sapien ac molestie iaculis, quam dui bibendum odio, vel ultricies nisi nunc eget dolor. Fusce eget risus tellus. Integer feugiat, purus vitae viverra faucibus, justo nunc tempor augue, nec egestas nisi leo non ipsum.',
    rating: 5,
  },
  // Add more reviews here...
];

function ReviewsSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveReviewIndex((index) => (index + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    setActiveReviewIndex((index) => {
      if (index === 0) {
        return reviews.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  const handleNextClick = () => {
    setActiveReviewIndex((index) => (index + 1) % reviews.length);
  };

  const activeReview = reviews[activeReviewIndex];

  return (
    <div className="reviews-section">
      <div className="reviews-section__container">
        <div className="reviews-section__heading">
          <h2>Customer Reviews</h2>
        </div>
        <div className="reviews-section__review">
          <div className="reviews-section__review-text">
            <p>{activeReview.text}</p>
          </div>
          <div className="reviews-section__review-info">
            <div className="reviews-section__review-name">{activeReview.name}</div>
            <div className="reviews-section__review-rating">
              {activeReview.rating} stars
            </div>
          </div>
        </div>
        <div className="reviews-section__controls">
          <div className="reviews-section__prev" onClick={handlePrevClick}>
            <FaChevronLeft />
          </div>
          <div className="reviews-section__next" onClick={handleNextClick}>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
