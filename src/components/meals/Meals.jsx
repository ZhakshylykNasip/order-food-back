import React, { useEffect, useState } from "react";
import { product } from "../utils/constants";
import styled from "styled-components";
import { MealSummaryCard } from "./MealSummaryCard";
import { MealItem } from "./MealItem";

export const Meals = () => {
  const [meals,setMeals]=useState()
  const BASE_URL =
    "http://ec2-35-156-167-238.eu-central-1.compute.amazonaws.com:5500/api/v1";

  async function getFoods() {
   try{
    const response = await fetch(`${BASE_URL}/foods`);
    const data = await response.json();
    setMeals(data.data)
   }catch(error){
    new Error(error)
   }
  }

  useEffect(() => {
    getFoods();
  }, []);


  return (
    <>
      <MealSummaryCard />
      <Container>
        {meals?.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 50px auto;
  padding: 40px;
  border-radius: 16px;
  margin-top: 40px;
`;
