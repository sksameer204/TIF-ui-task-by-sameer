import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Articles = () => {

  const [pagination, setPagination] = useState("firstLook")

  const articlesArr = [
    { id: 1, title: "Grilled  Tomatoes at Home", decsription: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: require("../assets/a1.png") },
    { id: 2, title: "Snacks for Travel", decsription: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: require("../assets/a2.png") },
    { id: 3, title: "Post-workout Recipes", decsription: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: require("../assets/a3.png") },
    { id: 4, title: "How To Grill Corn", decsription: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: require("../assets/a4.png") },
    { id: 5, title: "Crunchwrap Supreme", decsription: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: require("../assets/a5.png") },
    { id: 6, title: "Broccoli Cheese Soup", decsription: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: require("../assets/a6.png") },
  ]

  const articlesCard = articlesArr.map((card, index) => {
    return (
      <div key={index} className="a-card">
        <img src={card.image} alt={card.title} />
        <div className='card-info'>
          <h3>{card.title}</h3>
          <p>{card.decsription}</p>
          <button className='button'>Read More</button>
        </div>
      </div>
    )
  })

  return (
    <section className='articles-section'>
      <h2>Latest Articles</h2>
      <div className='articles-cards'>
        {pagination === "firstLook" && (
          articlesCard.slice(0, 3)
        )}
        {pagination === "secondLook" && (
          articlesCard.slice(3, 6)
        )}
      </div>
      <div className='pagination-btns'>
        <button
          onClick={() => setPagination("firstLook")}
          className={`${pagination === "secondLook" ? 'pagination-button pb-active' : 'pagination-button pb-disabled'}`}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <p>{pagination === "firstLook" ? ("1/2") : ("2/2")}</p>

        <button
          onClick={() => setPagination("secondLook")}
          className={`${pagination === "firstLook" ? 'pagination-button pb-active' : 'pagination-button pb-disabled'}`}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  )
}

export default Articles