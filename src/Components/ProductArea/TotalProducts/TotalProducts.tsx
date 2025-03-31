import { useEffect, useState } from "react";
import { AppState, store } from "../../../Redux/store";
import "./TotalProducts.css";
import { useSelector } from "react-redux";

export function TotalProducts(): JSX.Element {

    // const [count, setCount] = useState<number>(0);
    // useEffect(() => {
    //     const unsubscribe = store.subscribe(() => {
    //         setCount(store.getState().products.length);    
    //     });
    //     return () => unsubscribe();
    // }, []);

    // Instead of the above: 
    const count = useSelector<AppState, number>(store => store.products.length);

    return (
        <div className="TotalProducts">
            <span>Total Products: {count}</span>
        </div>
    );
}
