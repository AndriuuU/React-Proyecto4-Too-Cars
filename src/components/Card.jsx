import React from "react"
import "../style/main.scss"

const Card = ({ title, image, onClick }) => {
  return (
    <article className="card card--clickable" onClick={onClick}>
      <img className="card__image" src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
    </article>
  )
}

export default Card

