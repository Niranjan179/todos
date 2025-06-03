import React, { useState, useEffect } from 'react';
import './App.css';

const API_BASE = 'https://todos-slfj.onrender.com';

// TodoItem Component
const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <div className="todo-content">
        <h3 className="todo-title">{todo.title}</h3>
        <p className="todo-description">{todo.description}</p>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        ×
      </button>
    </div>
  );
};

// TodoList Component
const TodoList = ({ todos, onDelete, loading }) => {
  if (loading) {
    return <div className="todo-list"><div>Loading...</div></div>;
  }
  if (!todos || todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No todos yet. Add your first todo above!</p>
      </div>
    );
  }
  return (
    <div className="todo-list">
      <h2>Your Todos ({todos.length})</h2>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [summarizing, setSummarizing] = useState(false);
  const [error, setError] = useState('');

  // Fetch todos
  const fetchTodos = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/todos`);
      const data = await res.json();
      if (data.status === 'success') {
        setTodos(Array.isArray(data.data) ? data.data : []);
      } else {
        setTodos([]);
        setError('Failed to fetch todos');
      }
    } catch (err) {
      setTodos([]);
      setError('Error fetching todos');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add todo
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });
      const data = await res.json();
      if (data.success) {
        setTitle('');
        setDescription('');
        fetchTodos();
      } else {
        setError('Failed to add todo');
      }
    } catch (err) {
      setError('Error adding todo');
    }
    setLoading(false);
  };

  // Delete todo
  const handleDelete = async (id) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/todos/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchTodos();
      } else {
        setError('Failed to delete todo');
      }
    } catch (err) {
      setError('Error deleting todo');
    }
    setLoading(false);
  };

  // Summarize todos
  const handleSummarize = async () => {
    setSummarizing(true);
    setSummary('');
    setError('');
    try {
      const res = await fetch(`${API_BASE}/summerize`);
      const data = await res.json();
      if (data.summary) {
        setSummary(data.summary);
      } else {
        setError('Failed to summarize todos');
      }
    } catch (err) {
      setError('Error summarizing todos');
    }
    setSummarizing(false);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form className="todo-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !title.trim() || !description.trim()}>
          Add Todo
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      <TodoList todos={todos} onDelete={handleDelete} loading={loading} />
      <button className="summarize-btn" onClick={handleSummarize} disabled={summarizing || loading || todos.length === 0}>
        {summarizing ? 'Summarizing...' : 'Summarize Todos'}
      </button>
      {summary && (
        <div className="summary-box">
          <h2>Summary</h2>
          <pre>{summary}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
