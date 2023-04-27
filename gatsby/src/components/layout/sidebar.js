import React from 'react'
import styled from "styled-components";
// import { StaticImage } from 'gatsby-plugin-image'

const Sidebar = () => {
    return(
        <SidebarContainer>
            <aside className="sidebar glow">
                <section id="foto">
                    <div className='image'></div>
                    <h1>Luis Benítez</h1>
                    <h2>Programador Front End</h2>

                </section>
                <section id="text">
                    <p>Amo el <strong>arte</strong>, digital y tradicional y tengo pasión por mezclar arte y <strong>tecnología</strong> creando interfaces visualmente atractivas explorando nuevas tecnologías y estando a la <strong>vanguardia</strong> en las últimas tendencias en desarrollo <strong>web.</strong></p>
                </section>
                <section id="skills">
                    <ul>
                        <li>shopify</li>
                        <li>react gatsby</li>
                        <li>wordpress</li>
                        <li>woocommerce</li>
                        <li>three js</li>
                        <li>html / css / javascript</li>
                        <li>sass / styled-components</li>
                    </ul>
                </section>
                <section id="social">
                    <ul>
                        <li>
                            <a href='https://www.instagram.com/btz_luis/'>Instgram</a>
                        </li>
                        <li>
                            <a href='https://twitter.com/luisbtzart'>Twitter</a>
                        </li>
                    </ul>
                </section>
            </aside>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.header`
width: 400px;
height: 100vh;
text-align: center;
position: fixed;
left: 0%;
top: 0;
    .sidebar {
        position: relative;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, black, black);
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .glow::before, .glow::after {
        content: '';
        position: absolute;
        left: -2px;
        top: -2px;
        background: linear-gradient(45deg, #e6fb04, #ff6600, #00ff66, #00ffff, #ff00ff, #ff0099, #6e0dd0, #ff3300, #099fff);
        background-size: 400%;
        width: calc(100% + 3px);
        height: 100%;
        z-index: -1;
        animation: anima 20s linear infinite;
    }
    @keyframes anima {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
    .glow::after {
        filter: blur(20px);
    }
    .image {
        position: relative;
        width: 100%;
        height: 200px;
        background-image: url('./perfil.webp');
        background-size: cover;
        &:hover {
            ::before {
                animation: none !important;
            }
            }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 200px;
            background-image: url('./perfil.webp');
            background-size: cover;
            opacity: .5;
            mix-blend-mode: hard-light;
            animation: animate .5s linear infinite;
            
        }
        @keyframes animate {
            0% {
                background-position: 0 0;
                filter: hue-rotate(0deg);
            }
            10% {
                background-position: 5px 0;
            }
            20% {
                background-position: -7px 0;
            }
            30% {
                background-position: 10px 0;
            }
            40% {
                background-position: 6px 0;
            }
            50% {
                background-position: -7px 0;
            }
            60% {
                background-position: -10px 0;
            }
            70% {
                background-position: 0 -7px;
            }
            80% {
                background-position: -11px -7px;
            }
            81% {
                background-position: 0 0;
            }
            100% {
                background-position: 0 0;
                filter: hue-rotate(360deg);
            }
            
        }
        
        
    }
    #foto {
        h1 {
            text-align: center;
            font-weight: normal;
            font-size: 1.5rem;
            margin-top: 15px;
        }
        h2 {
            font-weight: normal;
            font-size: 1.2rem;
            color: var(--pink);
        }
    }
    #text {
        strong {
            font-weight: normal;
            &:nth-child(1) {
                color: var(--pink);
            }
            &:nth-child(2) {
                color: var(--green);
            }
            &:nth-child(3) {
                color: var(--purple);
            }
            &:nth-child(4) {
                color: var(--pink);
            }
        }
    }
    #social {
        ul {
            display: flex;
            justify-content: space-between;
        }
    }
    
`

export default Sidebar