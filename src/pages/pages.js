import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from "./Home";
import SearchResult from "./SearchResult"
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/cuisine/:type" element={<Cuisine />} />
				<Route path="/search/:search" element={<SearchResult />} />
				<Route path="/recipe/:name" element={<Recipe />} />
			</Routes>
		</AnimatePresence>
	)
}

export default Pages;