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
    products:IProduct[]
}
let Products:React.FC<IProps> =()=>{
    let[state,setState]=useState({
        products:[{
            sno:'111',
            name:'Srinivas',
            image:'http:1461121',
            price:1500,
            qty:5
        },{
            sno:'122',
            name:'Haridwaj',
            image:'ht,,qjhjka',
            price:999,
            qty:9
        }]
    })
    /*
        let incrQty = (sno:string) => {
        let incrItems:IProduct[] = productState.products.map(product => {
            if(product.sno === sno){
                return {
                    ...product,
                    qty : product.qty + 1
                }
            }
            else{
                return product;
            }
        });
        setProductState({
            products : incrItems
        });
    };
     */
    let increment=(sno:string) => {
       let incrItem:IProduct[]=state.products.map(product=>{
           if (product.sno === sno){
               return{
                   ...product,
                   qty:product.qty +1
               }
           }
           else {
               return product
           }
       })
        setState({
            products: incrItem
        })
    }
    let decrement = (sno:string) => {
let decrItem:IProduct[]=state.products.map(product => {
    if (product.sno === sno){
        return{
            ...product,
            qty:(product.qty -1 > 0 )? product.qty -1: 1
        }
    }
    else {
        return product
    }
})
        setState({
            products: decrItem
        })
    }
    let {products}=state
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
                            {
                                products.map(product=>{
                                    // @ts-ignore
                                    // @ts-ignore
                                    return(
                                        <tr key={product.sno}>
                                            <td>{product.sno}</td>
                                            <td>{product.name}</td>
                                            <td><img src={product.image} height={50} width={50} alt=""/> </td>
                                            <td>{product.price}</td>
                                            <td>
                                                <i onClick={increment.bind(product.sno)} className="fa fa-plus-circle"/>
                                                {product.qty}
                                                <i onClick={decrement.bind(product.sno)} className="fa fa-minus-circle"/>
                                            </td>
                                            <td>{product.price*product.qty}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Products;