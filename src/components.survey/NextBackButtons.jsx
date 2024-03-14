export const NextBackButtons = ({onNext, onBack}) => {
  return (
    <div className="next-back-buttons">
      <button className="back-button" onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  )
}
