const Stats = ({items}) => {
  if(!items.length){
    return(
      <>
        <p className='stats'>
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      </>
    )
  }

  const numItems = items.length;
  const numPacked = items.filter(item=>item.packed).length;
  const percPacked = Math.round(numPacked/numItems*100);

  return (
    <footer className="stats">
      {percPacked !== 100 ?
      <em> 👜 You have {numItems} items on your list,
         and you already packed {numPacked} ({percPacked}%)</em>
         :<em> You got everything! Ready to go ✈️</em>}
      
    </footer>
  );
};
export default Stats;
