import React from 'react';

type ToggleButtonProps = {
	onClick: () => void;
	isExpanded: boolean;
	expandedText?: string;
	collapsedText?: string;
	className?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
	onClick,
	isExpanded,
	expandedText = 'Show Less',
	collapsedText = 'Show More',
	className = '',
}) => {
  return (
    <div className={`mt-10 flex justify-center ${className}`}>
      <button
        className="btn btn-primary btn-md transition duration-200 ease-in-out hover:scale-105 shadow-md"
        onClick={onClick}
      >
        {isExpanded ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            {expandedText}
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            {collapsedText}
          </>
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
