import { memo } from 'react';

const SlidingNfts = ({nftItems}) => {
    return (
        <div className='sliding'>
            <div className="container-fluid">
                <div className="sliding--nfts flex">
                    {
                        nftItems.map(nft => {
                            return (
                                <div 
                                    key={nft.id} 
                                    className='small--nfts-item sliding--nfts-item'    
                                >
                                    <img src={nft.url} alt="" />
                                    <img src={nft.url} alt="" className='blured' />
                                    <span>{nft.price}ETH</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(SlidingNfts)