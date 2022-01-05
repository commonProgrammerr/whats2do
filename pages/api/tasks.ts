import { NextApiRequest, NextApiResponse } from 'next'
import { TaskDTO } from '../../contexts/tasks-context'
import { crud_api } from "../../services/api"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, status } = await crud_api.get('/tasks', {
      params: req.query
    })
    console.log(data)
    const valid_tasks = data?.filter(task => task.enable)
    
    return res.status(status).json(valid_tasks as TaskDTO[])
  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: error.message
    })
  }

}