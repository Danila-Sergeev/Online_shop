import shopStyles from './Shop.module.css';
import data from '../../utils/data';
import Card from '../Card/Card';
import React, { useMemo } from 'react';
import { SortingControl } from '../SortingControl/SortingControl';
import { useSearchParams } from 'react-router-dom';
export const ASC = 'asc';
export const DESC = 'desc';
export default function Shop() {
	/*   const sortCountries = useCallback(
    (type) => {
      let nextSortingValue;
      switch (type) {
        case "price": {
          nextSortingValue = countrySorting
            ? countrySorting === ASC
              ? DESC
              : ASC
            : ASC;
          break;
        }

        default: {
          break;
        }
      }

      setSearchParams({ [type]: nextSortingValue });
    },
    [personCountSorting, countrySorting]
  ); */

	const [searchParams, setSearchParams] = useSearchParams();

	const onChange = (e) => {
		let filter = e.target.value;
		if (filter) {
			setSearchParams({ filter });
		} else {
			setSearchParams({});
		}
	};

	const preparedData = useMemo(() => {
		const searchValue = searchParams.get('filter') || '';
		return data.filter(
			(obj) =>
				obj.name
					.toLocaleLowerCase()
					.indexOf(searchValue.toLocaleLowerCase(), 0) > -1
		);
	}, [data, searchParams]);

	return (
		<div className={shopStyles.shop}>
			<button className={shopStyles.BtnFilter}>price</button>

			<input
				placeholder="Поиск"
				onChange={onChange}
				value={searchParams.get('filter') || ''}
			/>

			<div className={shopStyles.itemList}>
				{preparedData.map((obj) => {
					if (obj.id <= 15) {
						return (
							<Card
								key={obj.image}
								{...obj}
							></Card>
						);
					}
				})}
			</div>
		</div>
	);
}
