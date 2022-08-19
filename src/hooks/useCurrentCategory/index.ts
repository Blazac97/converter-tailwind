import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "constants/categories";
export const useCurrentCategory = () => {
  const { category } = useParams()
  const foundCategory = categories.find((value) => {
    if (value.label === category) {
      return true
    }
  }
  )
  return foundCategory
}