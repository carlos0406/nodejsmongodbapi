import mongoose, { Document, Schema } from 'mongoose'

type Usuario= Document&{}

const UsuarioSchema = new Schema(
  {
    nome: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    telefone: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    senha: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    cpf: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },

    cnh: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    veiculo: {
      type: Schema.Types.ObjectId,
      ref: 'Veiculo'
    }

  }
)

export default mongoose.model<Usuario>('Usuario', UsuarioSchema)
