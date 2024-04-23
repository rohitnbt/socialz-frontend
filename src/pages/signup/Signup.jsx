import React, { useState } from 'react'
import logo from "../../assets/socialz-logo.svg"
import "./style.scss";
import { useDispatch } from 'react-redux';
import { setisAuthenticated } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { HideShowPassword } from '../../components/hideShowPassword/HideShowPassword';
import { UserIcon } from '../../components/Icons/UserIcon';
import { MailIcon } from '../../components/Icons/MailIcon';
import { LockIcon } from '../../components/Icons/LockIcon';
import { BASE_URL } from '../../BASE_URL';

export const SignUp = () => {
    const [cookieValue, setCookieValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
          });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(confirmPassword === formData.password)
        {
            try {
                const response = await axios.post(`${BASE_URL}/signup`, formData);
                setCookieValue(response.data)

              } catch (error) {
                console.warn(error);
              }
            
            // Clear form fields
            setFormData({
                name: '',
                email: '',
                password: ''
            });
        } else {
            alert("Password is not same");
            setConfirmPassword('');
        }
        
    }
        useEffect(() => {
            if(cookieValue) {
                Cookies.set('UserData', JSON.stringify(cookieValue), { expires: 1 });
                dispatch(setisAuthenticated(true));
                navigate('/');
            }
        }, [cookieValue]);
  return (
    <div className='login-page'>
        <div className="login-outer">
        <div className="Content-box">
            <img src={logo} alt="" />
            <p>
                <b>Register For Free</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus maiores quidem perferendis magnam nesciunt suscipit sequi quas ratione. Est, accusantium!.
            </p>
            <h5>Join Us And Be Social</h5>
        </div>
        <div className="login-box">
            <form onSubmit={handleSubmit}>
            <div className="input-field">
                    <input type="text" placeholder='name' name="name" value={formData.name} onChange={handleInputChange} />
                    <UserIcon />
                </div>
                <div className="input-field">
                    <input type="text" placeholder='email' name="email" value={formData.email} onChange={handleInputChange} />
                    <MailIcon />
                </div>
                <div className="input-field">
                    <input type={showPassword ? "text" : "password"} value={formData.password} placeholder='password' name="password" onChange={handleInputChange} />
                    <div className="show-password" onClick={()=>setShowPassword(!showPassword)}>
                        <HideShowPassword showPassword={showPassword}/>
                    </div>
                    <LockIcon />
                </div>
                <div className="input-field">
                    <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} placeholder='confirm password' name="confirm-password" onChange={(e)=>setConfirmPassword(e.target.value)} />
                    <div className="show-password" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                        <HideShowPassword showPassword={showConfirmPassword}/>
                    </div>
                    <LockIcon />
                </div>
                <div className="input-field">
                    <button type='submit'>Signup</button>
                </div>
            </form>
            <p>Already have an account. <span onClick={()=>navigate('/login')}>Login</span></p>
        </div>
        </div>
    </div>
  )
}
