import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
  return feedback ? (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  ) : (
    <p>No feedback yet</p>
  );
};

export default FeedbackList;
