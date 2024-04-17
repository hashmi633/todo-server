import React from "react"
import { InputField } from "../inputField"

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Update Task {params.id}</h1>
      <InputField
        text="Update"
        id={Number(params.id)}
      />

    </div>
  )
}

export default Page