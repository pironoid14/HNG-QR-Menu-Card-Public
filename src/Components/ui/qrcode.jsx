import React from 'react'
import QRCode from 'qrcode.react';
import { Card, CardContent, CardHeader } from '@shadcn/ui/react'; // Or your desired components
const qrcode = ({url}) => {
  return (
    
        <Card className="w-64">
          <CardHeader>
            <CardContent>
              <QRCode value={url} size={256} level={"H"} />
            </CardContent>
          </CardHeader>
        </Card>
      

  )
}

export default qrcode
