'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'
import CustomTextField from '@core/components/mui/TextField'

const ProductVariants = () => {
  // States
  const [count, setCount] = useState(1)

  return (
    <Card>
      <CardHeader title='Connect Your Repository' />
      <CardContent>
        <Grid container spacing={6}>
          {Array.from(Array(count).keys()).map((item, index) => (
            <Grid key={index} size={{ xs: 12 }} className='repeater-item'>
              <Grid container spacing={6}>
                <Grid size={{ xs: 12 }}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Repository Type'
                    placeholder='Repository Type'
                    defaultValue='Size'
                  >
                    <MenuItem value='Choose Key Type'>Choose Key Type</MenuItem>
                    <MenuItem value='Color'>Color</MenuItem>
                    <MenuItem value='Weight'>Weight</MenuItem>
                    <MenuItem value='Smell'>Smell</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <div className='flex items-center gap-6'>
                    <CustomTextField fullWidth placeholder='Repository URL' />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid size={{ xs: 12 }}>
            <Button variant='contained' onClick={() => setCount(count + 1)}>
              Connect
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductVariants
