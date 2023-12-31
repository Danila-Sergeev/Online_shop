import { NavLink } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import headerStiles from './Header.module.css';
import CardPopup from '../CardPopup/CardPopup';
import CardElement from '../CardElement/CardElement';
import { useDispatch, useSelector } from 'react-redux';
export default function Header() {
	/* Обработчик состояния попапа */
	const [modal, setModal] = useState(false);
	const CarditemsUnq = useSelector((store) => store.cardItem.unq);

	/*  Обработчики открытия/закрытия попапа */
	const handleOpenModal = () => {
		setModal(true);
	};
	const handleCloseModal = () => {
		setModal(false);
	};

	return (
		<div>
			<div className={headerStiles.headerStatic}>
				<div className={headerStiles.header}>
					<div className={headerStiles.links}>
						<div>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? headerStiles.activeLink : headerStiles.link
								}
							>
								New Arrivals
							</NavLink>
						</div>

						<NavLink
							to="/shop"
							className={({ isActive }) =>
								isActive ? headerStiles.activeLink : headerStiles.link
							}
						>
							Shop
						</NavLink>
						<NavLink
							to="/"
							className={headerStiles.link}
						>
							About Us
						</NavLink>
					</div>
					<h1 className={headerStiles.title}>Online shop</h1>
					<div className={headerStiles.links}>
						<div className={headerStiles.imgBox}>
							<NavLink
								to="/"
								className={headerStiles.link}
							>
								Search
							</NavLink>
							<img
								className={headerStiles.img}
								src={require('../../logo/free-icon-search-2414255.png')}
							/>
						</div>

						<NavLink
							to="/"
							className={headerStiles.link}
						>
							Sign In
						</NavLink>
						<div className={headerStiles.imgBox}>
							<div
								onClick={handleOpenModal}
								className={headerStiles.link}
							>
								{CarditemsUnq.length} items
							</div>
							<img
								className={headerStiles.img_shop}
								src={require('../../logo/free-icon-shopping-bag-4903482.png')}
							/>
						</div>
					</div>
				</div>
				<hr className={headerStiles.line}></hr>
			</div>
			{modal && (
				<CardPopup
					onClose={handleCloseModal}
					setModal={setModal}
				>
					{' '}
					<CardElement onClose={handleCloseModal} />
				</CardPopup>
			)}
		</div>
	);
}
