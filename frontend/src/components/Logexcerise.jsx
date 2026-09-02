import "./css/Logexcerise.css";
import { useState } from "react";
import { Modal, Group, Button, TextInput, Text, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";

export default function ExceriseUI() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const [formdata, setformdata] = useState({
    Exercisename: "",
    CaloriesBurn: "",
  });

  const handleChange = (field) => (event) => {
    const value = event.currentTarget.value; 
    setformdata((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const handlesubmit = () => {

  };

  return (
    <>
      <div className="Excerise">
        <h2 style={{ fontSize: "2.5rem" }}>Excerise</h2>
        <Button onClick={toggle}>Add Excerise</Button>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Add your excerise"
        size="lg"
        centered
        overlayProps={{
          backgroundOpacity: 0.85,
          color: "#000",
          blur: 2,
        }}
      >
        <Group>
          <div>
            <label>Excerise name : </label>
            <TextInput
              placeholder="e.g Running , Cycling"
              value={formdata.Exercisename}
              onChange={handleChange("Exercisename")}
            />
          </div>

          <div>
            <label>Burned calories : </label>
            <TextInput
              placeholder="e.g 200 , 300cal"
              value={formdata.CaloriesBurn}
              onChange={handleChange("CaloriesBurn")}
            />
          </div>
        </Group>

        <Group className="Submit_button">
          <Button onClick={handlesubmit}>Add meal</Button>
        </Group>
      </Modal>
    </>
  );
}