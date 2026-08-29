import { Dialog, Group, Button, TextInput, Text, Select } from '@mantine/core';
import './Dialog.css'

export default function FoodDialog({ opened, toggle, close }) {
  return (
    <>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        style={{
          position: 'fixed',
          top: '20%',
          left: '35%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Text size="sm" mb="xs" fw={500}  style={{fontSize : '1.3rem'}} className='DialogText'>
            Add your meal
        </Text>

        <Group align="flex-end">
            <div>
                <Select 
                label="Select meal of the day"
                placeholder="Pick value"
                data={['Breakfast', 'Lunch', 'Dinner']}
                 />
            </div>
            <div>
                <label>Meal name : </label><TextInput placeholder="French Fries"  />
            </div>
            <div>
                <label>Carb : </label><TextInput placeholder="e.g. 20g"  />
            </div>

            <div>
                <label>Protein : </label><TextInput placeholder="e.g. 30g"  />
            </div>

            <div>
                <label>Fat : </label><TextInput placeholder="e.g. 40g"  />
            </div>

        </Group>
        <Group className='Submit_button'>
            <Button onClick={close}>Add meal</Button>
        </Group>
      </Dialog>
    </>
  );
}