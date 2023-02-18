import Ajv, {JSONSchemaType} from "ajv"
const ajv = new Ajv()

interface MyData {
    email: string
    bar?: string
}

interface RegData{
  fullName : string
  email : string
  password: string
}

const loginSchema: JSONSchemaType<MyData> = {
    type: "object",
    properties: {
      email: {type: "string", nullable: false},
      password: {type: "string", nullable: false}
    },
    required: ["email", "password"],
    additionalProperties: false
}

const registerSchema: JSONSchemaType<RegData> = {
    type: "object",
    properties: {
      email: {type: "string", nullable: false},
      password: {type: "string", nullable: false},
      fullName : {type: "string", nullable: false}
    },
    required: ["email", "password" , "fullName"],
    additionalProperties: false
}

export default {loginSchema , registerSchema}