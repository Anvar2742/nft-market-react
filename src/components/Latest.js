import { Swiper, SwiperSlide } from 'swiper/react';
import { memo } from 'react';
import { Navigation } from 'swiper';
import NftItem from './NftItem';

import 'swiper/css';
import 'swiper/css/navigation';

const Latest = ({nftItems, switchFav}) => {
    const breakpoints = {
        567: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1500: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
    }
    return (
        <div className='latest'>
            <div className="container-fluid">
                <h2>Latest live auctions</h2>
                <Swiper
                    className='latest--swiper'
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop
                    navigation
                    breakpoints={breakpoints}
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