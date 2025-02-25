'use client'
import Card from '@mui/material/Card'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const CurrentTimeline = () => {
  return (
    <Card>
      <Alert icon={false} severity='warning' onClose={() => {}}>
        <AlertTitle>Currently Scanning File</AlertTitle>
        src/encryption/encryption.service.ts
      </Alert>
    </Card>
  )
}

export default CurrentTimeline
