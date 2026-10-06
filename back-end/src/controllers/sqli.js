import prisma from '../database/client.js'

const controller = {}

controller.login = async function(req, res) {
  const username = req.body?.username ?? ''
  const password = req.body?.password ?? ''

  try {
    // Consulta parametrizada via Prisma:
    // os valores recebidos não podem alterar a estrutura da consulta.
    const user = await prisma.user.findFirst({
      where: {
        username,
        password
      }
    })

    if(user) {
      return res.send({
        success: true,
        message: `Bem-vindo, ${username}!`,
        result: [user]
      })
    }

    return res.status(401).send({
      success: false,
      message: 'Login falhou!',
      result: []
    })
  }
  catch(error) {
    console.error(error)

    return res.status(500).send({
      success: false,
      message: 'Erro no servidor'
    })
  }
}

export default controller