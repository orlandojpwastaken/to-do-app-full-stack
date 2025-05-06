// filepath: frontend/src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/users/login`, 
    { email, password }, 
    { withCredentials: true }
  );
  return response.data;
};

const register = async (name, email, password) => {
  let firstName, lastName;
  if (name.includes(' ')) {
    const nameParts = name.split(' ');
    firstName = nameParts[0];
    lastName = nameParts.slice(1).join(' ');
  } else {
    firstName = name;
    lastName = '';
  }
  
  const response = await axios.post(`${API_URL}/users/register`, 
    { email, password, firstName, lastName }, 
    { withCredentials: true }
  );
  return response.data;
};

const logout = async () => {
  const response = await axios.post(`${API_URL}/users/logout`, {}, 
    { withCredentials: true }
  );
  return response.data;
};

const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/profile`, 
      { withCredentials: true }
    );
    return response.data.user;
  } catch (error) {
    return null;
  }
};

const todoService = {
  getAllTodos: async () => {
    const response = await axios.get(`${API_URL}/todos`, 
      { withCredentials: true }
    );
    // Check if the data is in the expected format
    if (response.data && response.data.todos) {
      return response.data.todos;
    } else if (Array.isArray(response.data)) {
      return response.data;
    }
    // Return empty array as fallback
    return [];
  },
  
  addTodo: async (todoData) => {
    const response = await axios.post(`${API_URL}/todos`, 
      todoData, 
      { withCredentials: true }
    );
    return response.data;
  },
  
  updateTodo: async (id, todoData) => {
    const response = await axios.put(`${API_URL}/todos/${id}`, 
      todoData, 
      { withCredentials: true }
    );
    return response.data;
  },
  
  deleteTodo: async (id) => {
    const response = await axios.delete(`${API_URL}/todos/${id}`, 
      { withCredentials: true }
    );
    return response.data;
  }
};

export { login, register, logout, checkAuth, todoService };