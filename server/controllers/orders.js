import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    customerName: String,
    customerAddess: String, 
    customerPincode: Number,
    orderedItems: [{
        id: Number,
        name: String,
        amount: Number,
        price: Number
    }]
})
const orderModel = mongoose.model('OrderCollection', orderSchema);

export const saveOrder = (req, res) => {
    // console.log(req.body);
    let temp = new orderModel({
        customerName: req.body.userData.name,
        customerAddess: req.body.userData.address,
        customerPincode: req.body.userData.pin,
        ordereredItems: []
    })
    for(let i=0; i<req.body.orderedItems.length; i++ )
    {
        let temp2 = {
            id: req.body.orderedItems[i].id,
            name: req.body.orderedItems[i].name,
            amount: req.body.orderedItems[i].amount,
            price: req.body.orderedItems[i].price
        }
        temp.orderedItems.push(temp2);
    }
    console.log(temp);
    temp.save();
}  