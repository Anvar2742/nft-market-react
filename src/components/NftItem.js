

const NftItem = ({nft, switchFav}) => {
    return (
        <a href="#" className="nft--item" key={nft.id}>
            <img src={nft.url} alt="" />
            <img src={nft.url} alt="" className='blurred'/>
            <div className="offers--slide-info flex align-center justify-between">
                <h3>{nft.name}</h3>
            </div>
            <div className="offers--slide-info flex align-center justify-between">
                <span className="author">Zaycik</span>
                <span className='price'>{nft.price}ETH</span>
            </div>
            <div className="offers--slide-subinfo flex align-center justify-between">
                <span className="bidding">
                    101 people are bidding
                </span>
                <button className={`fav ${nft.isLiked ? 'liked' : ''}`} onClick={(e) => switchFav(e, nft.id)}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.83268 0.5C2.53185 0.5 0.666016 2.34667 0.666016 4.625C0.666016 6.46417 1.39518 10.8292 8.57268 15.2417C8.70125 15.3199 8.84885 15.3613 8.99935 15.3613C9.14985 15.3613 9.29745 15.3199 9.42602 15.2417C16.6035 10.8292 17.3327 6.46417 17.3327 4.625C17.3327 2.34667 15.4668 0.5 13.166 0.5C10.8652 0.5 8.99935 3 8.99935 3C8.99935 3 7.13352 0.5 4.83268 0.5Z" stroke="#7780A1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </a>
    )
}

export default NftItem