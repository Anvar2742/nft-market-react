import { memo } from 'react';
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";

const SlidingNfts = ({nftItems}) => {
    return (
        <div className='sliding'>
            <div className="container-fluid">
                <div 
                    className="sliding--nfts"
                >
                    <Marquee direction="rtl" speed={100} delay={5}>
                        {
                            nftItems.map(nft => {
                                return (
                                    <div 
                                        key={nft.id} 
                                        className='small--nfts-item sliding--nfts-item'    
                                    >
                                        <div className="small--nfts-img">
                                            <img src={nft.url} alt="" />
                                            <img src={nft.url} alt="" className='blured' />
                                        </div>
                                        <span>{nft.price}ETH</span>
                                    </div>
                                )
                            })
                        }
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default memo(SlidingNfts)