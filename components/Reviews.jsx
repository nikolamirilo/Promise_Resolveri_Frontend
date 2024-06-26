const Reviews = ({ reviews }) => {
  return (
    <div className="mx-auto flex w-full flex-wrap items-center justify-start gap-3 md:w-3/5">
      {reviews?.map((review) => {
        return (
          <div className="flex min-w-[15rem] flex-col items-center justify-center rounded-2xl bg-white/30 px-4 py-2">
            <h2 className="text-lg text-white">Rate: {review.rating}</h2>
            <span className="text-md italic text-white">"{review.description}"</span>
          </div>
        )
      })}
    </div>
  )
}

export default Reviews
