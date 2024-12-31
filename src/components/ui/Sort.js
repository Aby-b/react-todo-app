import React from 'react';

export default function Sorting({ sortTasks }){
    return (
        <div style={{margin:'10px auto'}}>
            <select onChange={(e) => sortTasks(e.target.value)} defaultValue="">
                <option value="">Filter</option>
                <option value="dateAsc">Date (In Ascending ) </option>
                <option value="dateDesc">Date (In Descending )</option>
                <option value="priority">Priority</option>
            </select>
        </div>
    );
}