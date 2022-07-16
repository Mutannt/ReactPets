import React from "react"; // imr, rafc - создать компонент по умолчанию

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ["Все","Коты","Собаки","Попугаи","Ящерицы","Черепахи"];

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }

  
  return (
    <div className="categories">
      <ul>
        {/* map над каждый элементом массива выполнить действие 
        + передаём каждой li свой индекс в массиве i*/
        categories.map((value, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? "active" : ""}>{value}</li>)
        // i индекс можно, когда список не изменяется
        )
        }
        {/* <li onClick={() => onClickCategory(0)} className={activeIndex == 0 ? "active" : ""}>Все</li>
        <li onClick={() => onClickCategory(1)} className={activeIndex == 1 ? "active" : ""}>Коты</li>
        <li onClick={() => onClickCategory(2)} className={activeIndex == 2 ? "active" : ""}>Собаки</li>
        <li onClick={() => onClickCategory(3)} className={activeIndex == 3 ? "active" : ""}>Попугаи</li>
        <li onClick={() => onClickCategory(4)} className={activeIndex == 4 ? "active" : ""}>Ящерицы</li>
        <li onClick={() => onClickCategory(5)} className={activeIndex == 5 ? "active" : ""}>Черепахи</li> */}
      </ul>
    </div>
  )
}

export default Categories;