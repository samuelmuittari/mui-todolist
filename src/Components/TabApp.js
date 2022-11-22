import React, { useState } from'react';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';


function TabApp() {
    const [value, setValue] = useState('one');
    const handleChange = (event, value) => {
        setValue(value);
    }
    return (
    <div>
        <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="Item one"/>
            <Tab value="two" label="Item two"/>
            <Tab value="three" label="Item three"/>
        </Tabs>
        {value === 'one' && <div>Item one</div>}
        {value === 'two' && <div>Item two</div>}
        {value === 'three' && <div>Item three</div>}
    </div>
    );
}
    
    
    
    
    export default TabApp;