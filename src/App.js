import { useEffect, useState } from "react";
import nfts from './data/nfts.json'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Offers from "./components/Offers";
import Popular from "./components/Popular";
import SlidingNfts from "./components/SlidingNfts";
import ExtraInfo from "./components/ExtraInfo";
import Footer from "./components/Footer";


export const App = () => {
	const [theme, setTheme] = useState(false)
	const [menuBar, setMenuBar] = useState(false)
	const [nftItems, setNftsItems] = useState(nfts.nftItems)
	const [selectedCat, setSelectedCat] = useState("all")
	const [popularItemCount, setPopularItemCount] = useState(6)

	function switchTheme() {
		setTheme(prevTheme => !prevTheme)
	}

	function switchFav(e, id) {
		e.preventDefault()
		setNftsItems(prevNftItems => {
			return prevNftItems.map(nft => {
				if (nft.id === id) {
					return {
						...nft,
						"isLiked": !nft.isLiked
					}
				} else {
					return nft
				}
			})
		})
	}

	function switchCat(e) {
		setSelectedCat(e.target.value)
	}

	function showMore() {
		setPopularItemCount(prevPopularCount => prevPopularCount + prevPopularCount)
	}

	function openMenu() {
		setMenuBar(true)
	}

	function closeMenu() {
		setMenuBar(false)
	}

	useEffect(() => {
		theme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')
	}, [theme])

	useEffect(() => {
		menuBar ? document.body.classList.add('menu--active') : document.body.classList.remove('menu--active')
	}, [menuBar])

	return (
		<>
			<Navbar 
				switchTheme={switchTheme}
				openMenu={openMenu}
				closeMenu={closeMenu}
			/>
			<Hero />
			<Latest 
				nftItems={nftItems}
				switchFav={switchFav}
			/>
			<Offers
				nftItems={nftItems}
				switchFav={switchFav}
			/>
			<Popular
				nftItems={nftItems}
				switchFav={switchFav}
				switchCat={switchCat}
				selectedCat={selectedCat}
				popularItemCount={popularItemCount}
				showMore={showMore}
			/>
			<ExtraInfo />
			<SlidingNfts 
				nftItems={nftItems}
			/>
			<Footer />
		</>
	);
}