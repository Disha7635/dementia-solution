"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import { BACKEND_URL } from '../../../constants';
import { Container, TextField, Button, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const prompt = "This chat is designed to support individuals with dementia. Dementia is a condition that affects memory, thinking, and social abilities, making everyday activities more challenging. The responses should be user-friendly, descriptive, and soothing. Use simple language, be empathetic, and offer clear, detailed information. Maintain a calm and positive tone, and provide support and encouragement. The goal is to create a comforting and understanding environment where users feel safe and supported.";

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/chatbot`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: prompt }),
        });
        const data = await response.json();
        console.log("Prompt response:", data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleClick = async () => {
    const userMessage: Message = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    try {
      const response = await fetch(`${BACKEND_URL}/api/chatbot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages([...messages, userMessage, { sender: 'bot', text: data.reply }]);
      setInput('');
    } catch (err) {
      console.error("Error sending message:", err);
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Dementia Support Chat
      </Typography>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} style={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <ListItemText 
                primary={msg.text} 
                primaryTypographyProps={{ 
                  style: { 
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    backgroundColor: msg.sender === 'user' ? '#e1f5fe' : '#fff9c4',
                    borderRadius: '10px',
                    padding: '8px',
                    display: 'inline-block',
                    maxWidth: '70%'  // Limit width for better readability
                  } 
                }} 
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box display="flex" alignItems="center">
        <TextField 
          fullWidth 
          variant="outlined" 
          value={input} 
          onChange={handleChange} 
          placeholder="Type your message here..." 
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleClick} 
          style={{ marginLeft: '8px' }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  )
}

export default ChatBot;