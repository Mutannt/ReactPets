import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PetsBlock from "../components/PetsBlock";
import Sckeleton from "../components/PetsBlock/Sckeleton";

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
      fetch("https://62c53736134fa108c24b3306.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false); // Перерисовать, когда всё подгрузится и скелетон уберётся
      });
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories /> {/* ИЛИ  вызвать как функцию Categories()*/}
                <Sort /> {/* ИЛИ  вызвать как функцию Sort()*/}
            </div>
            <h2 className="content__title">Все питомцы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Sckeleton key={index} />)
                        : items.map((obj) => <PetsBlock key={obj.id}{...obj} />)
                    // или Если все атрибуты совпадают в бд и объекте, то можно {...obj} / title={obj.title}
                }
            </div>
        </>
    )
}

export default Home;