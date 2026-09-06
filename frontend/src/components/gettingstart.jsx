import { useState } from "react";
import { Group, Button, TextInput, Text, Modal } from "@mantine/core";
import axios from "axios";

export default function Gettingstart() {
  const [data, savedata] = useState({
    weightgoal: '',
    caloriestarget: '',
  });

  const [opened, setOpened] = useState(
    () => window.localStorage.getItem('goalstatus') === null
  );

  const handleChange = (field) => (event) => {
    const value = event.currentTarget.value;
    savedata((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlesubmit = async () => {
    window.localStorage.setItem('goalstatus' , 'setted' )
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
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
        <Text c="dark">Set your weight goal:</Text>
        <TextInput value={data.weightgoal} onChange={handleChange('weightgoal')} />
      </Group>

      <Group>
        <Text c="dark">Set your calories goal:</Text>
        <TextInput value={data.caloriestarget} onChange={handleChange('caloriestarget')} />
      </Group>

      <Group className="Submit_button">
        <Button onClick={handlesubmit}>Add Goal</Button>
      </Group>
    </Modal>
  );
}