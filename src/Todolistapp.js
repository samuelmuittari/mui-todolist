import React, { useState, useRef } from 'react';
//import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';



function Todolistapp() {
  const [todo, setTodo] = useState({description: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }
  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0){
    setTodos(todos.filter((todo, index) =>
      index !== gridRef.current.getSelectedNodes()[0].childIndex))
  } else {
    alert('Select row first')
  }
}

const handleDateChange = (newValue)=> {
  const newSelectedDate = newValue.toString();
  setSelectedDate(newSelectedDate)
  setTodo({...todo, date: newSelectedDate})      
}

const columns = [
  {field: 'date', sortable:true, filter: true,  },
  {field: 'description', sortable:true, filter: true,  },
  {field: 'priority', sortable:true, filter: true, 
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},

]
 
  return (
    <div className='App'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          label="Description"
          variant="standard"
          name="description" value={todo.description}
          onChange={inputChanged}/>
          <TextField
          label="Priority"
          variant="standard"
          name="priority" value={todo.priority}
          onChange={inputChanged}/>
        <Button onClick={addTodo} variant="contained">Add</Button>
        <Button onClick={deleteTodo} variant="contained">Delete</Button>
      </Stack>
      </LocalizationProvider>
      <div 
      className="ag-theme-material"
      style={{  
        height: '700px',
        width: '80%',
        margin: 'auto'
      }}>
        <AgGridReact justifyContent="center" alignItems="center"
        animateRows={true}
        ref={gridRef}
        onGridReady = {params => gridRef.current = params.api}
        rowSelection='single'
        columnDefs={columns}
        rowData={todos}>
        </AgGridReact> 
      </div> 
    </div>
  );
};

export default Todolistapp;
