import React from "react";
import { Link } from "react-router-dom";

import items from "../../data.json";

function ItemBlock({
    id,
    imageUrl,
    title,
    item,
    types,
    sizes,
    price,
    category,
    description,
    color,
    sale,
    gender,
}) {
    return (
        <>
            {items.map((value, index) => {
                return (
                    value.trends === true && (
                        <div className="item-block" key={index}>
                            <>
                                {/* <Link to={""}> */}
                                <img src={value.imageUrl} alt="img" />
                                {/* </Link> */}
                                <div className="item-block__info info-block">
                                    <div className="info-block__wrapper">
                                        <h3 className="info-block__title">
                                            {value.title}
                                        </h3>
                                        <p className="info-block__subtitle">
                                            {value.color}
                                        </p>
                                        <div className="info-block__price">
                                            {value.price} тг
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    )
                );
            })}
        </>
    );
}

export default ItemBlock;