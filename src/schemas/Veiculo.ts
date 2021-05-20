import mongoose, { Document, Schema } from 'mongoose'

type Veiculo= Document&{}

const VeiculoSchema = new Schema(
  {
    modelo: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    ano: {
      type: Number,
      required: true
    },
    placa: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
      unique: true
    }
  }
)

export default mongoose.model<Veiculo>('Veiculo', VeiculoSchema)
