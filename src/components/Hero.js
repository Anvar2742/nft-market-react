import { memo } from 'react'
import data from './../data/data.json'

const Hero = () => {
    const photos = data.photos.slice(0, 6)

    return (
        <div className="container">
            <div className="hero">
                <h1>
                    A new NFT <span>Experience</span>
                </h1>
                <h2 className="hero--subtitle">Discover, collect and sell</h2>
                <div className="search--bar">
                    <input type="text" placeholder="Items, collections and creators" />
                    <select name="cat" id="cat">
                        <option value="option-1">Option-1</option>
                        <option value="option-2">Option-2</option>
                        <option value="option-3">Option-3</option>
                        <option value="option-4">Option-4</option>
                        <option value="option-5">Option-5</option>
                    </select>
                    <button className="search--btn">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1.93934" y1="22.9393" x2="17.4957" y2="7.38299" stroke="#2A27C9" strokeWidth="3"/>
                            <circle cx="15.5" cy="9.5" r="8" fill="white" stroke="#2A27C9" strokeWidth="3"/>
                        </svg>
                    </button>
                </div>
                <div className="hero--nfts">
                    {
                        photos.map(photo => {
                            return (
                                <div 
                                    key={photo.id} 
                                    className='small--nfts-item'    
                                >
                                    <img src={photo.img_src} alt="" />
                                    <img src={photo.img_src} alt="" className='blured' />
                                    <span>{photo.earth_date}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Hero)