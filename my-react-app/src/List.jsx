function List(){
   const shoppingCart =[{id: 1, name: "apple",calories:95},
    {id:2 ,name: "milk", calories:50},
    {id:3 ,name: "coconut", calories:40},
     {id:4, name:"crossiant",calories:123}];
   const alphaShoppingCart = shoppingCart.sort((a,b) => a.name.localeCompare(b.name));
   const reverseAlphaCart =shoppingCart.sort((a,b) => b.name.localeCompare(a.name));

   const listItems= shoppingCart.map(item=>
            <li key={item.id}>{item.name}: &nbsp;
                        <b>{item.calories}</b></li>);
     const alphaItems = alphaShoppingCart.map(item =>
    <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>
  );

  const reverseItems = reverseAlphaCart.map(item =>
    <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>
  );

   return(
    <div><h2> My Shopping Cart</h2>
    <ol>{listItems}</ol> <br/>
    <h3>Alphabetically Ordered </h3>
    <ol>{alphaItems}</ol>
    <br/>
    <h3> Reverse Alphabetically Ordered</h3>
    <ol>{reverseItems}</ol>
    </div>
   );
}
export default List