import { useState } from 'react';
import axios from 'axios'
import { Modal, Group, Button, TextInput, Text, Select } from '@mantine/core';
import './css/Dialog.css'

export default function FoodDialog({ opened, toggle, close }) {
  const [formdata , saveformdata ] = useState({
    'mealname' : '' , 
    'carb' : '' , 
    'protein' : '' ,
    'fat' : ''
  })

  const handleChange = (field) => (event) => {
    const value = event.currentTarget.value; 
    saveformdata((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlesubmit = async() => {

    }
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Add your meal"
      size="lg"
      centered
      overlayProps={{
        backgroundOpacity: 0.85,
        color: '#000',
        blur: 2,
      }}
    >
        <Group align="flex-end">
            <div>
                <Select 
                label="Select meal of the day"
                placeholder="Pick value"
                data={['Breakfast', 'Lunch', 'Dinner']}
                 />
            </div>
            <div>
                <label>Meal name : </label><TextInput placeholder="French Fries" value={formdata.mealname} onChange={handleChange('mealname')}  />
            </div>
            <div>
                <label>Carb : </label><TextInput placeholder="e.g. 20g"  value={formdata.carb}  onChange={handleChange('carb')}/>
            </div>

            <div>
                <label>Protein : </label><TextInput placeholder="e.g. 30g"  value={formdata.protein}  onChange={handleChange('protein')}/>
            </div>

            <div>
                <label>Fat : </label><TextInput placeholder="e.g. 40g"  value={formdata.fat}  onChange={handleChange('fat')}/>
            </div>

        </Group>
        <Group className='Submit_button'>
            <Button onClick={handlesubmit}>Add meal</Button>
        </Group>
    </Modal>
  );
}