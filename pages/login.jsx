import styled from "styled-components"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/layout/typography/H1"
import H2 from "../src/components/layout/typography/H2"
import H4 from "../src/components/layout/typography/H4"

const FormContainer = styled.div`
  margin-top: 60px
  `

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap:20px;
`
const Text = styled.p`
  text-align:center;
  `

function LoginPage(){
  return(
    <ImageWithSpace>
      <H1># Social Dev </H1>
      <H4>Tudo que acontece no mundo DEV, está aqui!</H4>
      <FormContainer>
        <H2>Entre em sua conta</H2>
        <Form>
          <input placeholder= "Email ou usuário" type="email"/>
          <input placeholder="Senha" type="password"/>
          <button>Entrar</button>
        </Form>
        <Text>Não possui uma conta?<a href="#"> Faça seu cadastro</a></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default LoginPage