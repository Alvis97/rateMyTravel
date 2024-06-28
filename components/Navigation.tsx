import React, { Component } from 'react'
import { SmallLogo } from './Icons';
import Link from 'next/link';

//Styles
import navigationStyle from "../styles/components/navigation.module.scss";


function Navigation() {
    return(
        <div className={navigationStyle.Parent}>
            <div>
             <Link href={''}> 
              <SmallLogo />
             </Link>
              <Link className={navigationStyle.link} href={''}>Home</Link>  
              <Link className={navigationStyle.link }href={''}>About</Link>  
              <Link className={navigationStyle.link} href={''}>Features</Link>  
            </div>

            <div className={navigationStyle.section2}>
            <Link href={"./Community"} className={navigationStyle.CFAButton}>
              <span>Community</span>
            </Link>
            <>
            <Link className={navigationStyle.link} href={"./login"}>Login</Link>
            <span>|</span>
            <Link className={navigationStyle.CFAButton} href={""}>
            <span>Join Community</span>
            </Link>
            </>
        
            </div>
        </div>
    );
}

export default Navigation;