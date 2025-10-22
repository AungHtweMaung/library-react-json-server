import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import Navbar from '../../components/Navbar'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './layout.css';

export default function Layout() {
    const location = useLocation();
    const nodeRef = useRef();
    return (
        <div>
            <Navbar />
            <hr />
            <SwitchTransition>
                <CSSTransition timeout={200} classNames='fade' key={location.pathname} nodeRef={nodeRef}>
                    <div ref={nodeRef} className='max-w-6xl mx-auto p-5'>
                        <Outlet />
                    </div>
                </CSSTransition>
            </SwitchTransition>



        </div>
    )
}
