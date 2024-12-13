"use client"

import moment from "moment";
import { Avatar, Rating } from "@mui/material";
import Heading from "@/app/components/Heading";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full mx-auto">
      <Heading title="Product Reviews" />
      <div className="text-sm mt-6">
        {product.reviews && product.reviews.map((review: any) => {
          return (
            <div key={review.id} className="border-b pb-4 mb-6">
              <div className="flex gap-3 items-center">
                <Avatar src={review?.user.image} alt={review?.user.name} sx={{ width: 50, height: 50 }} />
                <div>
                  <div className="font-semibold text-lg text-gray-800">{review?.user.name}</div>
                  <div className="font-light text-sm text-gray-500">{moment(review.createdDate).fromNow()}</div>
                </div>
              </div>
              <div className="mt-3">
                <Rating value={review.rating} readOnly sx={{ color: '#fbc02d' }} />
              </div>
              <div className="mt-3 text-gray-700">{review.comment}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListRating
