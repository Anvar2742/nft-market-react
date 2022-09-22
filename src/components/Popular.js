import { memo } from 'react';
import NftItem from './NftItem';
import nfts from './../data/nfts.json'

const Popular = ({switchFav, nftItems, switchCat, selectedCat, popularItemCount, showMore}) => {
    const cats = nfts.categories
    const nftItemsFiltered = nftItems.filter(nft => {
        if (nft.cat === selectedCat) return nft
        else if (selectedCat === "all") return nft
    })

    let nftItemsSliced = []

    if (nftItemsFiltered.length > popularItemCount) {
        nftItemsSliced = nftItemsFiltered.slice(0, popularItemCount)
    } else {
        nftItemsSliced = nftItemsFiltered
    }

    return (
        <div className='popular'>
            <div className="container popular--container">
                <h2>Most popular live auctions</h2>
                <div className="popular--cats">
                    <label htmlFor="all" className={`popular--cat ${selectedCat === "all" ? "selected" : ""}`} >
                        <input 
                            type="radio"
                            name="category"
                            value="all"
                            id="all"
                            onChange={(e) => switchCat(e)}
                        />
                            All
                    </label>
                    {
                        cats.map(cat => {
                            return (
                                <label key={cat.slug} htmlFor={cat.slug} className={`popular--cat ${selectedCat === cat.slug ? "selected" : ""}`}>
                                    <input
                                        key={cat.slug}
                                        type="radio"
                                        name='category'
                                        value={cat.slug}
                                        id={cat.slug}
                                        onChange={(e) => switchCat(e)}
                                    />
                                        {cat.name}
                                </label>
                            )
                        })
                    }
                </div>
                <div className="popular--nfts flex">
                    {
                        nftItemsSliced.map(nft => {
                            return (
                                <NftItem
                                    key={nft.id}
                                    nft={nft}
                                    switchFav={switchFav}
                                />
                            )
                        })
                    }
                </div>

                {nftItemsFiltered.length > popularItemCount && <button className="btn btn-border" onClick={showMore}>Show me more</button>}
            </div>
        </div>
    )
}

export default memo(Popular)