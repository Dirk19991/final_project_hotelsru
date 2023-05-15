import type { NextApiRequest, NextApiResponse } from 'next'
import movies from '../../data/mockData'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(movies)
}
