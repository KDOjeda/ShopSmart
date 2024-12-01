const StarRating = ({ rating = 0 }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => {
          const starIndex = index + 1;
          const isFilled = starIndex <= rating;
          return (
            <svg
              key={index}
              className={`w-8 h-8 ${
                isFilled ? 'text-yellow-400' : 'text-gray-300'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 17.27 18.18 21 15.27 13.97 21 9.24 13.91 8.63 12 2 10.09 8.63 3 9.24 8.73 13.97 5.82 21 12 17.27" />
            </svg>
          );
        })}
      </div>
    );
  };
  
  export default StarRating;
  