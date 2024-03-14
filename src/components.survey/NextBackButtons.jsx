export const NextBackButtons = ({onNext, onBack}) => {
  return (
    <div>
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  )
}
