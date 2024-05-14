"use client";

import { useState } from 'react';

function todo() {
    const [value, setValue] = useState('');
    const input = document.querySelector('input');
    const div = document.querySelector('.todo');
    function add(i) {
        if(i.value!=''){
            console.log(i.value);
            const div1 = document.createElement('div');
            const p = document.createElement('p');
            const del = document.createElement('p');
            div1.style.display='flex';
            div1.style.justifyContent='space-between'
            p.textContent = i.value;
            del.textContent='delete';
            del.addEventListener('click',()=>{
                div1.remove();
            })
            div1.appendChild(p);
            div1.appendChild(del);
            div.appendChild(div1)
        }else{
            alert('input vide')
        }
    }
    return <div>
        <h1>ToDoList</h1>
        <input
            type="text"
            value={value}
            onChange={e => { setValue(e.currentTarget.value);}}
        />
        <button onClick={()=>{
            add(input);
        }}>ajouter</button>
        <div className='todo'>

        </div>
    </div>
}
export default todo