import React from "react"
import { Button, Modal } from "semantic-ui-react"

import AuthForm from "../AuthForm"

export const AuthModal = () => (
  <Modal trigger={<Button>Auth</Button>} content={<AuthForm />} />
)

export default AuthModal
