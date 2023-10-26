import  Express  from "express";
import mongoose, {model, Schema} from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
// import student from "./models/student";

const app = Express();

app.use(Express.json());

const PORT = 5000;



const connectMongoDB = async () => {
  const conne = await mongoose.connect(process.env.MONGODB_URI);

  if(conne){
    console.log('mongoDB connected successfully. ');
  }
};

connectMongoDB();

const productSchema = new Schema({
  image:String,
 title: String,
 description: String,
 price:String,
 brand:String,
 

 

});

const product= model('product',productSchema);



app.get('/products', async (req, res) => {

const products = await product.find()


    res.json({
        success: true,
        data: products,
        message: `successfully fecth data. `,

    });
});

app.post  ('/product', async (req, res) => {
    const { image,
      title,
      description,
      price,brand } = req.body;

    if (!image) {

        return res.json({
            success: false,
            message: `image is required `,

        });
    }

    if (!title) {

        return res.json({
            success: false,
            message: `title is required `,

        });
    }

    if (!description) {

        return res.json({
            success: false,
            message: `description is required `,

        });
    }

    if (!price) {

        return res.json({
            success: false,
            message: `price is required `,

        });
    }

    

    const newproduct = new product({
      image,
      title,
      description,
      price,
      brand
    })
    const saveproduct = await  newproduct.save();

    res.json({
        success: true,
        data: saveproduct,
        message: `successfully added new product. `,

    });

})

app.get('/product/:_id', async (req, res) => {
    const {_id} = req.params;
   
    await product.findOne({_id :_id});
    const products = await product.findOne({_id: _id});


    res.json({
        success: true,
        data: products,
        message: `successfully fatch  product. `,
    })
});

app.delete('/product/:_id', async (req, res) =>{

    const {_id} = req.params;

    await product.deleteOne({_id :_id});

    const deletproduct = await product.deleteOne({_id: _id});

    res.json({
                success: true,
                data : deletproduct,
                message: `successfully delet  product ${_id} . `,
            })

})

app.put('/product/:_id', async (req, res) =>{

    const {_id} = req.params;
    const {title, description, price, brand, image} = req.body;


    if (!image) {

        return res.json({
            success: false,
            message: `image is required `,

        });
    }

    if (!title) {

        return res.json({
            success: false,
            message: `title is required `,

        });
    }

    if (!description) {

        return res.json({
            success: false,
            message: `description is required `,

        });
    }

    if (!price) {

        return res.json({
            success: false,
            message: `price is required `,

        });
    }

    if (!brand) {

        return res.json({
            success: false,
            message: `brand is required `,

        });
    }

    await product.updateOne({_id :_id}, {$set: {
        title:title,
         description: description, 
         image: image, 
         price: price, 
         brand: brand 
        
    }}
    );

    const updatedproduct = await product.findOne({_id: _id});
    res.json({
                success: true,
                data: updatedproduct,
                message: `successfully put  product ${_id} . `,
            })

});

app.patch('/product/:_id', async (req, res) =>{

    const {_id} = req.params;
    const {title, description, price, brand, image} = req.body;
    const products = await product.findById(_id);


    if(image){
        products.image = image;
    }

    if(title && title!== product.title){
        products.title = title;
    }

    if(description){
        products.description =description;
    }

    if(price){
        products.price=price;
    }

    if(brand){
        products.brand = brand;
    }

    

    const updatedproduct = await products.save ();

    res.json({
        success: true,
        data: updatedproduct,
        message: `successfully patch  product.`,
    })

});


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})


