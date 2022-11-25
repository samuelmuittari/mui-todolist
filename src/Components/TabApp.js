import React, { useState } from'react';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
import Todolistapp from '../Todolistapp'
import './TabApp.css'

function TabApp() {
    const [value, setValue] = useState('one');
    const handleChange = (event, value) => {
        setValue(value);
    }
    return (
    <div>
        <Tabs value={value} onChange={handleChange} centered>
            <Tab value="one" label="Home"/>
            <Tab value="two" label="To Do"/>
        </Tabs>
        {value === 'one' && <div><h1 className='Home'>Welcome to the home page</h1></div>}
        {value === 'two' && <div><Todolistapp /></div>}
    </div>
    );
}
    
    
    export default TabApp;