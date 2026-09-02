import { useState } from "react";
import { Dialog, Group, Button, TextInput, Text, Select, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import userstatus from '../global/userstatus.jsx'

export default function Gettingstart() {

    const [ data , savedata ] = useState({
        'weightgoal' : '' ,
        'caloriestarget' : '',
    })
    const newuser = userstatus((state) => state.newuser);
    const setNewUser = userstatus((state) => state.setNewUser);

      const handleChange = (field) => (event) => {
    const value = event.currentTarget.value; 
    savedata((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlesubmit = async() => {

  }

    return (<Modal
    opened={newuser}
    onClose={() => setNewUser()}
    title="Setting up"
    withCloseButton
        size="lg"
        centered
        overlayProps={{
          backgroundOpacity: 0.85,
          color: "#000",
          blur: 2,
        }}
    >
    <Group>
        <Text c={'dark'}>Set your weight goal : </Text><TextInput value={data.weightgoal} onChange={handleChange('weightgoal')}/>
    </Group>

    <Group>
        <Text c={'dark'}>Set your calories goal : </Text><TextInput value={data.caloriestarget} onChange={handleChange('caloriestarget')}/>
    </Group>

    <Group className='Submit_button'>
            <Button onClick={handlesubmit}>Add Goal</Button>
        </Group>
    </Modal>)
}   