
import Header from "./Header";
import PlaceHolder from "./PlaceHolder";
import Description from "./Description";
import AddImage from "./AddImage";


function MyCart(props){
console.log(props)
const cart ="MBTC Xcelo Office ";
// const desc={
//     // color:'black',
//     // deliveryby : Date(),
//     // policy : 'ten days replacement policy',
//     // price : 12540,
//     // msg : 'save for later'
// }
<h1><img src="chair.jpg" alt=""/></h1>
const submit='submit';
return (
        <div>
            <h1>---------MyCart Details------- </h1>
            <Header/>
            <Description
            cart={cart}
            />
            <PlaceHolder/>
            <AddImage
            
            />
            
        </div>
    )
}
export default MyCart;