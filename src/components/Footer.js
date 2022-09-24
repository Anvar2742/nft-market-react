import { memo } from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer--wrap">
                    <div className="footer--wrap-column">
                        <a href="#">
                            <svg width="213" height="34" viewBox="0 0 213 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='logo--letter' d="M51.5516 25.9999V6.15015H58.8661L66.3438 22.3835H67.2683L66.7245 22.8729V6.15015H70.912V25.9999H63.5431L56.0654 9.76661H55.1409L55.6847 9.27717V25.9999H51.5516Z" fill="#060714"/>
                                <path className='logo--letter' d="M75.5973 25.9999V6.15015H80.0567V25.9999H75.5973ZM79.5129 18.0056V14.3076H87.1809V18.0056H79.5129ZM79.5129 9.84819V6.15015H87.5072V9.84819H79.5129Z" fill="#060714"/>
                                <path className='logo--letter' d="M95.2212 25.9999V9.4947H99.6806V25.9999H95.2212ZM89.647 10.0385V6.15015H105.282V10.0385H89.647Z" fill="#060714"/>
                                <path className='logo--letter' d="M114.25 25.9999V6.15015H120.395L124.936 17.2987H125.453L129.939 6.15015H136.193V25.9999H131.788V9.05964L132.414 9.11402L127.166 21.9756H122.924L117.649 9.11402L118.328 9.05964V25.9999H114.25Z" fill="#060714"/>
                                <path className='logo--letter' d="M149.627 25.9999V21.5949H148.893V16.8092C148.893 16.0478 148.711 15.4768 148.349 15.0961C147.986 14.7155 147.406 14.5251 146.608 14.5251C146.21 14.5251 145.684 14.5342 145.031 14.5523C144.379 14.5704 143.708 14.5976 143.019 14.6339C142.33 14.6701 141.705 14.7064 141.143 14.7427V11.0718C141.56 11.0356 142.049 10.9993 142.611 10.963C143.173 10.9268 143.753 10.8996 144.352 10.8815C144.95 10.8633 145.512 10.8543 146.037 10.8543C147.56 10.8543 148.838 11.0718 149.871 11.5069C150.923 11.9419 151.72 12.6036 152.264 13.4918C152.808 14.362 153.08 15.4859 153.08 16.8636V25.9999H149.627ZM144.868 26.3806C143.799 26.3806 142.856 26.1903 142.04 25.8096C141.243 25.4289 140.617 24.8851 140.164 24.1781C139.711 23.453 139.484 22.5919 139.484 21.5949C139.484 20.5073 139.765 19.619 140.327 18.9301C140.889 18.2232 141.678 17.7065 142.693 17.3802C143.708 17.0358 144.877 16.8636 146.201 16.8636H149.382V19.2836H146.173C145.412 19.2836 144.823 19.474 144.406 19.8547C144.007 20.2172 143.808 20.7157 143.808 21.3502C143.808 21.9484 144.007 22.4378 144.406 22.8185C144.823 23.1811 145.412 23.3624 146.173 23.3624C146.663 23.3624 147.098 23.2808 147.479 23.1176C147.877 22.9364 148.204 22.6373 148.458 22.2203C148.711 21.8034 148.856 21.2233 148.893 20.4801L149.926 21.5677C149.835 22.601 149.581 23.4711 149.164 24.1781C148.766 24.8851 148.204 25.4289 147.479 25.8096C146.772 26.1903 145.902 26.3806 144.868 26.3806Z" fill="#060714"/>
                                <path className='logo--letter' d="M156.998 25.9999V11.099H160.451V17.489H160.37C160.37 15.3862 160.814 13.7638 161.702 12.6217C162.608 11.4797 163.914 10.9087 165.618 10.9087H166.189V14.6611H165.101C163.905 14.6611 162.98 14.9874 162.327 15.64C161.675 16.2744 161.349 17.199 161.349 18.4135V25.9999H156.998Z" fill="#060714"/>
                                <path className='logo--letter' d="M179.165 25.9999L174.461 19.0389H172.367L178.431 11.099H182.999L177.289 18.4951L177.343 16.3741L184.06 25.9999H179.165ZM168.669 25.9999V6.15015H173.02V25.9999H168.669Z" fill="#060714"/>
                                <path className='logo--letter' d="M192.503 26.5166C191.234 26.5166 190.11 26.299 189.132 25.864C188.171 25.4289 187.364 24.8488 186.711 24.1237C186.077 23.3805 185.588 22.5557 185.243 21.6493C184.917 20.7248 184.754 19.7821 184.754 18.8214V18.2775C184.754 17.2805 184.917 16.3288 185.243 15.4224C185.588 14.4979 186.077 13.6731 186.711 12.948C187.346 12.2229 188.134 11.6519 189.077 11.235C190.038 10.7999 191.126 10.5824 192.34 10.5824C193.935 10.5824 195.277 10.9449 196.364 11.67C197.47 12.377 198.313 13.3106 198.893 14.4707C199.473 15.6128 199.763 16.8636 199.763 18.2232V19.6915H186.576V17.2171H197.126L195.712 18.3591C195.712 17.4709 195.585 16.7095 195.331 16.075C195.077 15.4406 194.697 14.9602 194.189 14.6339C193.7 14.2895 193.083 14.1173 192.34 14.1173C191.579 14.1173 190.935 14.2895 190.41 14.6339C189.884 14.9783 189.485 15.4859 189.213 16.1566C188.941 16.8092 188.805 17.6159 188.805 18.5767C188.805 19.4649 188.932 20.2444 189.186 20.9151C189.44 21.5677 189.838 22.0753 190.382 22.4378C190.926 22.8004 191.633 22.9817 192.503 22.9817C193.301 22.9817 193.953 22.8276 194.461 22.5194C194.969 22.2113 195.313 21.8306 195.494 21.3774H199.491C199.274 22.3744 198.848 23.2627 198.213 24.0421C197.579 24.8216 196.781 25.4289 195.821 25.864C194.86 26.299 193.754 26.5166 192.503 26.5166Z" fill="#060714"/>
                                <path className='logo--letter' d="M209.644 26.1903C208.139 26.1903 206.924 26.009 206 25.6464C205.075 25.2658 204.396 24.6404 203.961 23.7702C203.544 22.882 203.335 21.6855 203.335 20.181V7.07466H207.387V20.3441C207.387 21.0511 207.568 21.5949 207.931 21.9756C208.311 22.3381 208.846 22.5194 209.535 22.5194H211.737V26.1903H209.644ZM201.078 14.2804V11.099H211.737V14.2804H201.078Z" fill="#060714"/>
                                <path d="M0 30.6C5.63333 30.6 10.2 26.0332 10.2 20.4C10.2 14.7667 5.63333 10.2 0 10.2V17.3399C1.68998 17.3399 3.05998 18.7099 3.05998 20.4C3.05998 22.09 1.68998 23.46 0 23.46V30.6Z" fill="#76DECC"/>
                                <path d="M33.9997 13.6001C32.2567 13.0479 30.4005 12.75 28.4747 12.75C18.3816 12.75 10.1997 20.9321 10.1997 31.025C10.1997 32.0381 10.2821 33.0319 10.4406 34H21.7955C21.3901 33.0913 21.1648 32.0845 21.1648 31.025C21.1648 26.9878 24.4375 23.715 28.4747 23.715C30.6812 23.715 32.6593 24.6927 33.9997 26.2384V13.6001Z" fill="#EA6CBC"/>
                                <path d="M1.79346 0C2.63911 7.64992 9.12477 13.6001 17.0001 13.6001C24.8753 13.6001 31.361 7.64992 32.2067 0H21.2649C20.5894 1.69339 18.9344 2.88999 17.0001 2.88999C15.0657 2.88999 13.4108 1.69339 12.7352 0H1.79346Z" fill="#2A27C9"/>
                            </svg>
                        </a>

                        <nav className="footer--menu-law menu">
                            <ul>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Term of service</a></li>
                                <li><a href="#">License</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer--wrap-column">
                        <nav className="footer--menu-bottom menu">
                            <ul>
                                <li><a href="#">Auctions</a></li>
                                <li><a href="#">Roadmap</a></li>
                                <li><a href="#">Discover</a></li>
                                <li><a href="#">Community</a></li>
                            </ul>
                        </nav>
                        <button className="btn btn-filled">My account</button>
                        <div className="footer--menu-social menu">
                            <ul>
                                <li><a href="#"><img src="https://anvar2742.github.io/nft-market-react/images/icons/face-icon.svg" alt="" /></a></li>
                                <li><a href="#"><img src="https://anvar2742.github.io/nft-market-react/images/icons/linked-icon.svg" alt="" /></a></li>
                                <li><a href="#"><img src="https://anvar2742.github.io/nft-market-react/images/icons/github-icon.svg" alt="" /></a></li>
                                <li><a href="#"><img src="https://anvar2742.github.io/nft-market-react/images/icons/twitter-icon.svg" alt="" /></a></li>
                                <li><a href="#"><img src="https://anvar2742.github.io/nft-market-react/images/icons/insta-icon.svg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer--wrap-column">
                        <p>
                            Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. 
                        </p>

                        <div className="signup">
                            <input type="text" placeholder='Newsletter' />
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)