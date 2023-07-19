import{ Request,Response} from 'express'

export const checkHealth = (req:Request, res:Response) => {
    try {
      return res.status(200).json({
        success: true,
        message: "Jili Todo Api is healthy",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Jili Todo Api is down",
      });
    }
  };
