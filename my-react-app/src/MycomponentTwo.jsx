function MycomponentTwo (){
  //learning on change
  const [comment,setComment] =useState("");
  function handlecommentChange
  (event){
    setComment(event.target.value);
  }
  const [review,setReview]= useState("");
  function handleReview(event){
    setReview(event.target.value);
  }

  return(
    <div>
        <p> Leave a comment: </p>
        <textarea value={comment} onChange={handlecommentChange}
        />
        <p>Comment: {comment}</p>
        <select value={review} onChange={handleReview}>
            <option value="">Select Rating</option>
            <option value="1-star">1 STAR</option>
            <option value="2-star">2 STAR</option>
            <option value="3-star">3 STAR</option>
           <option value="4-star">4 STAR</option>
           </select>
        <p> Review: {review} </p>
    </div>
  )
}
export default MycomponentTwo