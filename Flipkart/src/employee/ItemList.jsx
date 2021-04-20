import ListIem from "./ListItem"
function ItemList(props){

    const num =[10,20.30];
    const elment = num.map(item=><li>{item}</li>)
    return (
        <div>
            <h2>Item are Display.... </h2>
            <ol>
                {elment}
            </ol>
        </div>
    )
}
export default ItemList;