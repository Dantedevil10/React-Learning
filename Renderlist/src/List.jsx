import PropTypes from 'prop-types'

function List(props){

    // const fruits = [{id: 1 ,name:'Uc' ,calories: 99},
    //                 {id: 2 ,name:'banana' ,calories: 12},
    //                 {id: 3 ,name:'pika' ,calories: 54},
    //                 {id: 4 ,name:'Apple' ,calories: 200},]


        // fruits.sort((a,b) => a.name.localeCompare(b.name)) //Ordem alfabetica
        // fruits.sort((a,b) => b.name.localeCompare(a.name)) //Ordem alfabetica Reversa

    const category = props.category
    const itemList = props.item
    const listofItens = itemList.map(itemList => <li key={itemList.id}> {itemList.name} : {itemList.calories || itemList.price} </li>)

    //dentro do .map tem uma arrow function

    return (
        <>
       <h3 className="category-title">{category}</h3> <ul className="list-itens">{listofItens}</ul>
       </>
    )
}
List.propTypes ={
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,name: PropTypes.string,
    calories: PropTypes.number,price:PropTypes.number}))
}

List.defaultProps = {
    category:'Category',
    items:[],
}

export default List