// Card.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Share2, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { CardBookingIO } from "../typeIO/priliminaryIO";


const Card: React.FC<CardBookingIO> = ({
  heading,
  username,
  details,
  board,
  topic,
  language,
  preferredMode,
  address,
  payment,
  status,
  cardId,
}) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const maxLength = 200;
  const isLong = details.length > maxLength;
  const preview = isLong ? details.substring(0, maxLength) + "..." : details;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="card shadow-xl bg-base-100 mx-4 md:mx-20 mt-10 font-poppins transition-all duration-200"
    >
      <div className="card-body space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="card-title text-2xl md:text-3xl text-primary">{heading}</h2>
            <p className="text-sm italic text-gray-500">– by {username}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-primary">{board}</div>
            <div className="badge badge-accent">{topic}</div>
            <div className="badge badge-secondary">{language}</div>
          </div>
        </div>

        <p className="text-base text-gray-500">
          {preview}
          {isLong && (
            <Link to={`/user-details`} className="link link-primary ml-1">
              See More
            </Link>
          )}
        </p>

        <div className="card-actions mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => setShowComments(!showComments)}
            className="btn btn-sm btn-info flex gap-2 items-center"
          >
            <MessageSquare size={16} />
            Comment
          </button>
          <button className="btn btn-sm btn-success flex gap-2 items-center">
            <Share2 size={16} />
            Share
          </button>
          <button className="btn btn-sm btn-warning flex gap-2 items-center text-white">
            <Edit size={16} />
            Edit
          </button>
        </div>

        {showComments && (
          <div className="mt-4 space-y-2">
            <h4 className="text-md font-semibold text-gray-600">Comments</h4>
            <textarea
              className="textarea textarea-bordered w-full"
              rows={3}
              placeholder="Add a comment..."
            ></textarea>
            <button className="btn btn-sm btn-primary mt-1">Submit</button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;