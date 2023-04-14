//DESAFIO DE LÓGICA    -------   SHIPPING FUNCTION 


function dailyShipping(startDate, endDate, totalQuantity, stock, deliveryCapacity) {
    const days = getDaysUntilDelivery(startDate, endDate);
    const dailyShippingResult = {};
    let remainingQuantity = totalQuantity;

    // Verifica se o estoque é suficiente para o pedido
    if (stock < totalQuantity) {
      console.log("Sem Estoque para o Pedido!")
      return null;
    } 

    days.forEach(day => {
        const dailyCapacity = deliveryCapacity[getDayOfWeekByDate(day)];
        const availableInStock = Math.min(stock, dailyCapacity);
        const quantityToShip = Math.min(remainingQuantity, availableInStock);

        if (quantityToShip === 0) {
          return null;
        }
        
        dailyShippingResult[day] = quantityToShip;
        remainingQuantity -= quantityToShip;
        stock -= quantityToShip;
    })

      console.log('DAILY SHIPPING: ', dailyShippingResult)
      return dailyShippingResult;
}


function getDaysUntilDelivery(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const daysUntilDelivery = [];
  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
    daysUntilDelivery.push(date.toISOString().substring(0, 10));
  }
  return daysUntilDelivery;
}


function getDayOfWeekByDate(date) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayIndex = new Date(date).getDay();
    return daysOfWeek[dayIndex];
  }




const deliveryCapacity = {
  Monday: 10,
  Tuesday: 20,
  Wednesday: 30,
  Thursday: 20,
  Friday: 10,
  Saturday: 5,
  Sunday: 5
  };


  dailyShipping( "2023-04-14", "2023-04-20", 100, 120, deliveryCapacity)
 