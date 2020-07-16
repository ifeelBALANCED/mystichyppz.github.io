import React  from 'react'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
import './Form.css'
import { Link } from "react-router-dom";

function Form() {
    const names = ['Luke','Leia','Yoda']
    const removeElement = () => {
        alert('User is deleted');
    }
        return (
            <div className="form_container">
                <div className="title_container">
                    <h1 className="title">Name</h1>
                </div>
                <div className="container">
                    <div className="buttons">
                        {
                            names.map((name, index) => {
                                return (
                                    <div key={index} className="el_btn">
                                        <span className="item_name">{name}</span>

                                        <Link to="/change" >
                                            <Button type="primary" className="btn">Change</Button>
                                        </Link>

                                        <DeleteOutlined className="outlined" onClick={removeElement}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
}
export default Form