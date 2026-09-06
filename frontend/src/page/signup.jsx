import { useState } from 'react';
import { Container, Title, Paper, TextInput, PasswordInput, Button, Flex } from '@mantine/core';
import classes from './css/AuthenticationTitle.module.css';

export default function Signup() {
  const [signupdata , savesignupdata] = useState({
    username : '' ,
    password : ''
  })


  return (
    <Container size={500} my={40}>
      <Title ta="center" size={32}>
        Welcome back!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" className='LoginCard' w={400} h={300} >
        <TextInput label="Username" placeholder="John Pork" required radius="md" />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" />
        <Button fullWidth mt="xl" radius="md">
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}