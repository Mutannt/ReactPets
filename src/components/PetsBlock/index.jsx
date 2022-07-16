import React from "react";

function PetsBlock({ title, price, imageUrl, ages, types }) { // В props хранятся все аргументы (title, price ...)
    // PetsBlock(props)
    // const {a,b,c}={a:1,b:2,c:3}; // В одну строчку
    // console.log(a,b,c);
    // Сделать через redux
    // const [petCount, setPetCount] = React.useState(0); // Счётчик питомцев (useState елси что-то будет меняться, иначе используй let)
    // const onClickAddButton = () => {setPetCount(petCount + 1)} // Функция при клике

    const colorNames = ["Белый", "Зелёный", "Красный", "Рыжий", "Чёрный"];
    //const colors = ["white", "green", "red", "ginger", "black", "yellow"];
    const [activeType, setActiveType] = React.useState(0);
    const [activeAge, setActiveAge] = React.useState(0);

    // Хук useState
    return (
        <div className="pets-block-wrapper">
            <div className="pets-block">
                <img
                    className="pets-block__image"
                    src={imageUrl}
                    alt="Pet"
                />
                <h4 className="pets-block__title">{title}</h4>
                <div className="pets-block__selector">
                    <ul>
                        {
                            types.map((value, i) => (
                                <li key={i} onClick={() => setActiveType(i)} className={activeType === i ? "active" : ""}>{colorNames[value]}</li>
                            ))
                            // colorNames.map((value, i) => (
                            //     <li key={value} onClick={() => setActiveType(i)} className={activeType === i ? "active": ""}>{value}</li>
                            // ))
                        }
                    </ul>
                    <ul>
                        {ages.map((value, i) => (<li key={value} onClick={() => setActiveAge(i)} className={activeAge === i ? "active" : ""}>{value}</li>))}
                    </ul>
                </div>
                <div className="pets-block__bottom">
                    <div className="pets-block__price">от {price} ₽</div>
                    <button className="button button--outline button--add" >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>0</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PetsBlock;