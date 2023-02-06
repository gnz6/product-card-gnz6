
import React from "react"
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css"
import { CSSProperties, useCallback, useContext } from "react";


export interface Props{
  className?:string,
  style?: CSSProperties

}



export const ProductButtons = ({className, style}: Props) => {
    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    const isMaxCallReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )
    

    return (
      <div className={ `${styles.buttonsContainer} ${className}`} style={style}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          {" "}
          -{" "}
        </button>
        <div className={styles.countLabel}> {counter}</div>
        <button className={`${styles.buttonAdd} ${isMaxCallReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
          {" "}
          +{" "}
        </button>
      </div>
    );
  };