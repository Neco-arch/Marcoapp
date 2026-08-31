import "./Logexcerise.css";
import { useState } from "react";
import { Dialog, Group, Button, TextInput, Text, Select } from "@mantine/core";
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

      <Dialog
        opened={opened}
        withBorder
        withCloseButton
        onClose={close}
        size="lg"
        style={{
          position: "fixed",
          top: "40%",
          left: "40%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Group display={"flex"} justify="center">
          <Text
            size="sm"
            mb="xs"
            fw={500}
            style={{ fontSize: "1.3rem" }}
            className="DialogText"
          >
            Add your excerise
          </Text>
        </Group>

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
          <Button onClick={close}>Add meal</Button>
        </Group>
      </Dialog>
    </>
  );
}
