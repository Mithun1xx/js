import mongoose ,{Schema} from "mongoose";
const videoSchema= new Schema({
    title: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        default: '',
        trim: true
      },
      url: {
        type: String,
        required: true,
        unique: true
      },
      thumbnail: {
        type: String,
        default: ''
      },
      duration: {
        type: Number, // Duration in seconds
        required: true
      },
      uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
     
      views: {
        type: Number,
        default: 0
      },
      likes: {
        type: Number,
        default: 0
      },
      dislikes: {
        type: Number,
        default: 0
      },
  
},{timestamps:true})