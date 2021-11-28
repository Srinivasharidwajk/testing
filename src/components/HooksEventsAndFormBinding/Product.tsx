import React, {useState} from "react";
interface IProduct{
    sno:string;
    name:string;
    image:string;
    price:number;
    qty:number;
}
interface IProps{}
interface IState{
    product:IProduct
}
let Product:React.FC<IProps> =()=>{
    let[state,setState]=useState({
        product:{
            sno:'111',
            name:'Srinivas',
            image:'http:1461121',
            price:1500,
            qty:5
        }
    })
    let increment=()=>{
        setState({
            product: {
                ...product,
                qty: product.qty+1
            }
        })
    }
    let decrement=()=>{
        setState({
            product: {
                ...product,
                qty: (product.qty -1 > 0)?product.qty -1:0
            }
        })
    }
    let {product}=state
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-striped text-center">
                            <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                            </tr>
                            </thead>
                            <tbody className="bg-light">
                            <tr>
                                <td>{product.sno}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image} height={50} width={50} alt=""/> </td>
                                <td>{product.price}</td>
                                <td>
                                  <i onClick={increment} className="fa fa-plus-circle"/>
                                    {product.qty}
                                  <i onClick={decrement} className="fa fa-minus-circle"/>
                                </td>
                                <td>{product.price*product.qty}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Product;