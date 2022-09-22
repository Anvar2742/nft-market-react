import { Swiper, SwiperSlide } from 'swiper/react';
import { memo } from 'react';
import { Navigation } from 'swiper';
import NftItem from './NftItem';

import 'swiper/css';
import 'swiper/css/navigation';

const Latest = ({nftItems, switchFav}) => {
    return (
        <div className='latest'>
            <div className="container-fluid">
                <h2>Latest live auctions</h2>
                <Swiper
                    modules={[Navigation]}
                    className='latest--swiper'
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    navigation
                >
                    {
                        nftItems.map(nft => {
                            return (
                                <SwiperSlide 
                                    key={nft.id}
                                    className='latest--slide'
                                >
                                    <NftItem 
                                        nft={nft}
                                        switchFav={switchFav}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default memo(Latest)