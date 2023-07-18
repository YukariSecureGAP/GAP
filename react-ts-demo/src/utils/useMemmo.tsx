import React, { useState, useMemo } from "react";

const CountPrice = () => {
    const [intro, setIntro] = useState("banna" || "apple");
    const [like, setLike] = useState('');
    const [banna, setBanna] = useState({
        num:10,
        unitPrice: 5,
    });
    const [apple, setApple] = useState({
        num: 5,
        unitPrice: 2,
    });

    const Change = () => {
        setIntro(intro === "banna" ? "apple" : "banna");
    };
    const price = useMemo (() =>{
        console.log('counted')
        return (banna.num * banna.unitPrice + apple.num * apple.unitPrice)
    },[banna, apple])

    const likeFn = () =>{
        setLike(like + 1)
    }
    const changePrice = () =>{
        setBanna({
            ...banna,
            unitPrice:99
        })
    }

    return(
        <>
            <h3>点赞数{like}</h3>
            <button onClick={likeFn}>like</button>
            <button onClick={changePrice}>change price</button>
            <button onClick={Change}>改变</button>
            <h3>水果：{intro}</h3>
            <h4>banna:{banna.num},price:{banna.unitPrice}</h4>
            <h4>apple:{apple.num},price:{apple.unitPrice}</h4>
            <h4>总价：{price}</h4>

        </>
    )
 };
export default CountPrice;