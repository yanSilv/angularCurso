class Order {
    constructor(
        public address: string,
        public number: number,
        public optional: string,
        public paymentoptional: string,
        public orderItem: OrderItems[],
        public id?: string
    ) {}
}

class OrderItems {
    constructor(
        public quantity: number,
        public menuId: string
    ) {}
}

export {Order, OrderItems}