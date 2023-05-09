import type { NextApiRequest, NextApiResponse } from 'next'
import headerStaticLink from '@/data/navigation.json'
import { IHeaderStaticLinks } from '@/types/Response/IHeaderStaticLinks'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IHeaderStaticLinks>
) {
    res.status(200).json(headerStaticLink)
}
