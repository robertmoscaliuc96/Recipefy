const mongoose= require("mongoose");
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    title:{
        type: String,
        required: true,
    },
    keyword:{
        type: String,
        required: false,
    },
    description:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    ingredients:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        
    },
    time:{
        type: String, 
    },
    
    
    name : {
        type: String,    
    },
    avatar:{
        type: String
    },
    data: {
        type: Date,
        default: Date.now
    },
    stars:[
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: "users"
            }
        }
    ],
    likes:[
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: "users"
            }
        }
    ],
    review:[
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: "users"
            },
            text:{
                type: String,
                required: true,
            },
            name : {
                type: String,    
            },
            avatar:{
                type: String
            },
            data: {
                type: Date,
                default: Date.now
            },
            upvote:[
                {
                    user:{
                        type: Schema.Types.ObjectId,
                        ref: "users"
                    }
                }
            ],
        }
    ]
});

module.exports = Post = mongoose.model("post", RecipeSchema);