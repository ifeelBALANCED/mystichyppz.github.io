import React from 'react'
import './change.css'
import { Input, Button } from 'antd'
import {Link} from "react-router-dom";

function ChangeName() {
    const saveUser = () => {
        alert("User is saved!");
    }
    return (
        <div className="change_container">
            <h1 className="change__title">Name</h1>
            <Input className="input_change" placeholder="Luke" />
            <Link to="/">
                <Button className="btn_danger" type="danger" onClick={saveUser}>Save</Button>
            </Link>
            <p className="change__description">Dev note: can be in-place editing, not a new view</p>
        </div>        
    )
}

export default ChangeName