import "./categories.style.scss"
import Category from "../category/Category"
import React from "react"

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Category key={category.id} category={category} />
      })}
    </div>
  )
}

export default Categories
