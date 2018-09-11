export function updateMonthlyPrice(new_price) {
  this.setState(state => ({
    price: new_price
  }))
}

export function updateUpFrontPrice(new_price) {
  this.setState(state => ({
    price: new_price
  }))
}
