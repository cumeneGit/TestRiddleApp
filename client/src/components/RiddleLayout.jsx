import './RiddleLayout.css'

export default function RiddleLayout({ title, image, onSubmit }) {
  return (
    <div className="riddle-container">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} className="riddle-image" />}
      <form onSubmit={onSubmit} className="riddle-form">
        <input name="answer" placeholder="答えを入力..." required />
        <button type="submit">送信</button>
      </form>
    </div>
  )
}
