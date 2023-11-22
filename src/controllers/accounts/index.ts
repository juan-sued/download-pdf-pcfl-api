import { Request, Response } from 'express';
import { accountService } from '@/services';



async function getLinkPdf(request: Request, response: Response)  {

  try {
    const link = await accountService.getLinkPdf();

    response.status(200).send(link)
  } catch (error) {

    response.status(500).send({ success: false, message: error.message });
  }
}

export { getLinkPdf};
