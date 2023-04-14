//DESAFIO DE LÓGICA    -------   SHIPPING FUNCTION 

function dailyShipping(startDate, endDate, totalOrderQuantity, stock, deliveryCapacity) {
    const days = getDaysUntilDelivery(startDate, endDate);
    let remainingQuantity = totalOrderQuantity;
    let totalStock = stock;

    const dailyShippingResult = days.reduce((dailyShipping, day) => {
      const dailyCapacity = deliveryCapacity[getDayOfWeekByDate(day)];
      const availableInStock = Math.min(stock, dailyCapacity);
      const quantityToShip = Math.min(remainingQuantity, availableInStock);
  
      if (quantityToShip === 0) return dailyShipping;
    
      dailyShipping[day] = quantityToShip;
      remainingQuantity -= quantityToShip;
      totalStock -= quantityToShip;
  
      return dailyShipping;
    }, {});

    console.log('DAILY SHIPPING RESULT: ', dailyShippingResult)
    return dailyShippingResult;
}


function getDaysUntilDelivery(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const daysUntilDelivery = [];
  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) daysUntilDelivery.push(date.toISOString().substring(0, 10));
  return daysUntilDelivery;
}


function getDayOfWeekByDate(date) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayIndex = new Date(date).getDay();
    return daysOfWeek[dayIndex];
}



//------------------- TESTADANDO A FUNÇÃO ------------------------
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
 