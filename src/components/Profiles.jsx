import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const artistData = {
    muzones: {
        name: "Ramon Muzones",
        title: "National Artist for Literature (2018)",
        imageURL: "./assets/muzones.jpg"
    },
    sulaiman: {
        name: "Samaon Sulaiman",
        title: "GAMABA Awardee for Traditional Music (1993)",
        imageURL: "./assets/sulaiman.png"
    },
    intaray: {
        name: "Masino Intaray",
        title: "GAMABA Awardee for Traditional Music, Epic Chanting, and Storytelling (1993)",
        imageURL: "./assets/intaray.jpg"
    },
    gamaba: {
        name: "GAMABA awardees",
        title: "(Click to see all GAMABA awardees)"
    },
    national: {
        name: "National Artists",
        title: "(Click to see all National artists)"
    }
}

const Profiles = () => {
    const [mouseData, setMouseData] = useState({
        x: 0,
        y: 0,
        target: '',
        isBelow: false
    })

    const animationFrameId = useRef(null)
    const lastMousePosition = useRef(mouseData)

    const updateMouseData = () => {
        setMouseData(lastMousePosition.current)
        animationFrameId.current = null
    }

    const handleMouseMove = (e) => {

        if(!['muzones','sulaiman','intaray','gamaba','national'].includes(e.target.id)) {
            handleMouseLeave()
            return
        }

        let isBelow = e.clientY > window.innerHeight / 2

        lastMousePosition.current = {
            x: e.clientX,
            y: e.clientY,
            target: e.target.id,
            isBelow
        };

        if (!animationFrameId.current) {
            animationFrameId.current = requestAnimationFrame(updateMouseData)
        }
    }

    const handleMouseLeave = () => {
        lastMousePosition.current = {
            x: 0, y: 0, target: '', isBelow: false
        }
    }

    useEffect(() => {
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [])

    return (
        <div className='profiles' id='artist-profiles'  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="artist" 
                style={mouseData.target !== '' ? 
                    { display: 'block', left: mouseData.x + 10, top: mouseData.isBelow ? mouseData.y - 300 : mouseData.y + 20 } : 
                    { display: 'none' }}
            >
                <img src={artistData[mouseData.target]?.imageURL} alt={artistData[mouseData.target]?.name} 
                    style={['gamaba', 'national'].includes(mouseData.target) ? {display: 'none'} : {display: 'block'}}/>
                <p className='name'>{artistData[mouseData.target]?.name}</p>
                <p className="title">{artistData[mouseData.target]?.title}</p>
            </div>
            <h3>Artist Profiles</h3>
            <div className="profiles-list">
                <Link to="/artist/NationalArtist/RamonMuzones" id='muzones'><b>Ramon Muzones</b><span>{">"}</span></Link>
                <Link to="/artist/GAMABA/SamaonSulaiman" id='sulaiman'><b>Samaon Sulaiman</b><span>{">"}</span></Link>
                <Link to="/artist/GAMABA/MasinoIntaray" id='intaray'><b>Masino Intaray</b><span>{">"}</span></Link>
                <Link to="/artist/GAMABA" id='gamaba'><small>View All GAMABA Awardees</small><span>{">"}</span></Link>
                <Link to="/artist/NationalArtist" id='national'><small>View All National Artists</small><span>{">"}</span></Link>
            </div>
        </div>
    )
}

export default Profiles;
