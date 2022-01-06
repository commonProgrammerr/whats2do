import { NextApiRequest, NextApiResponse } from 'next'
import { TaskDTO } from '../../contexts/tasks-context'
import { crud_api } from "../../services/api"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, status } = await crud_api.get('/tasks')
    const valid_tasks = data?.filter(task => task.enable).reverse()

    const page = Number(req.query.page)
    const limit = Number(req.query.limit)

    const response_data = [...valid_tasks].slice((page - 1) * limit, limit * page)
    
    return res.status(status).json(response_data as TaskDTO[])

  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: error.message
    })
  }

}