import List from "./List"


function App() {
 
  const fruits = [{id: 1 ,name:'Uc' ,calories: 99},
                  {id: 2 ,name:'banana' ,calories: 12},
                  {id: 3 ,name:'pika' ,calories: 54},
                  {id: 4 ,name:'Apple' ,calories: 200},]
  
  const Price = [{id: 5 ,name:'Uc' ,price: 10},
                  {id: 6 ,name:'banana' ,price: 12},
                  {id: 7 ,name:'pika' ,price: 22},
                  {id: 8 ,name:'Apple' ,price: 11},]

  return (
    <>
      {fruits.length > 0 ? <List category='Fruits' item={fruits}/> : null}
      {Price.length > 0 ? <List category='Price' item={Price}/> : null}
      <List item={['fdfsdwqeq']} />
    </>
  )
}

export default App
