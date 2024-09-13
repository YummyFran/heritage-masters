import React from 'react'
import { useNavigate, useParams } from 'react-router'
import ArtistData from '../artistProfile.json'

const ArtistProfile = () => {
    const nav = useNavigate()
    const { id } = useParams()

    window.scrollTo(0,0)

    if(!ArtistData[id]) {
        return <div className='not-found'>Artist not found</div>
    }
  return (
    <div className='artist-profile'>
        <div className="header">
            <h1 className='name'>{ArtistData[id].name}</h1>
            <h2 className="title">{ArtistData[id].title}</h2>
        </div>
        <div className="content">
            <img src={ArtistData[id].url} alt={ArtistData[id].name} />
            <div className="section">
                <h3>Biography</h3>
                <p>{ArtistData[id].biography}</p>
            </div>
            <div className="section">
                <h3>Artistic Contributions</h3>
                {ArtistData[id].artistic_contributions.map((el, i) => {
                    return (
                        <ul>
                            <li key={i}>{el}</li>
                        </ul>
                    )
                })}
            </div>
            <div className="section">
                <h3>Legacy</h3>
                <p>{ArtistData[id].legacy}</p>
            </div>
            <div className="section">
                <h3>Gallery</h3>
            </div>
        </div>
    </div>
  )
}

export default ArtistProfile