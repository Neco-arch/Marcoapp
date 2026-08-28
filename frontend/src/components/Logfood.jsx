import { useState } from 'react';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FoodDialog from './Logfooddialog';

export default function LogFood() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <div className="LogFood_wrapper">
        <div className="LogFood">
          <div className="Period_meal">
            <h2>Breakfast</h2>
            <ul className="Meal_list">
              <li>Example Food</li>
            </ul>
          </div>
          <div className="Period_meal">
            <h2>Lunch</h2>
            <ul className="Meal_list">
              <li>Example Food</li>
            </ul>
          </div>
          <div className="Period_meal">
            <h2>Dinner</h2>
            <ul className="Meal_list">
              <li>Example Food</li>
            </ul>
          </div>
        <Button variant="light" size="md" onClick={toggle}>
          Log Food
        </Button>
        </div>
      </div>
      <FoodDialog opened={opened} toggle={toggle} close={close} />
    </>
  );
}
