import React from "react"
import { Input, Button } from "formik-semantic-ui"
import { Divider, Segment } from "semantic-ui-react"
import { Formik, Form } from "formik"
import { Persist } from "formik-persist"

export const AuthForm = ({ onDummyAuth }) => (
  <Segment>
    <Formik
      initialValues={{ accessToken: "", url: "" }}
      onSubmit={values => {
        onDummyAuth(values)
      }}
      render={() => (
        <Form>
          {/* <Divider horizontal>URL</Divider>
          <Input
            inputProps={{
              fluid: true,
              type: 'text',
              placeholder: 'url',
            }}
            name="url"
          /> */}
          <Divider horizontal>ACCESS TOKEN</Divider>
          <Input
            inputProps={{
              fluid: true,
              type: "text",
              placeholder: "access token",
            }}
            name="accessToken"
          />
          <Divider horizontal>SUBMIT</Divider>
          <Button.Submit>AUTH</Button.Submit>
          <Persist name="dummyAuthForm" />
        </Form>
      )}
    />
  </Segment>
)

export default AuthForm
