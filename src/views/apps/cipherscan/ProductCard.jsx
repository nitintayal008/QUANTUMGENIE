'use client'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Vars
const data = [
  {
    title: 'Total Files Scanned',
    value: '5',
    icon: 'tabler-smart-home',
    desc: '5',
    change: 5.7
  },
  {
    title: 'Files Scanned Per Minute',
    value: '7',
    icon: 'tabler-device-laptop',
    desc: '21',
    change: 12.4
  },
  {
    title: 'Time Elapsed',
    value: '1',
    icon: 'tabler-gift',
    desc: '6'
  },
  {
    title: 'Estimated Time Remaining',
    value: '8',
    icon: 'tabler-wallet',
    desc: '150',
    change: -3.5
  }
]

const UpperCardJSON = {
  total_files_scanned: {
    value: 533,
    icon: 'tabler-smart-home',
    change: '+5.7%'
  },
  files_scanned_per_minute: {
    value: 533,
    icon: 'tabler-device-laptop',
    change: '+12.7%'
  },
  time_elapsed: {
    value: 533,
    icon: 'tabler-gift',
    note: 'Renew requirred in 30 days'
  },
  estimated_time_remaining: {
    value: 895,
    icon: 'tabler-wallet',
    change: '+3.7%'
  }
}

const ProductCard = () => {
  // Hooks
  const isBelowMdScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          {data.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              className={classnames({
                '[&:nth-of-type(odd)>div]:pie-6 [&:nth-of-type(odd)>div]:border-ie': isBelowMdScreen && !isSmallScreen,
                '[&:not(:last-child)>div]:pie-6 [&:not(:last-child)>div]:border-ie': !isBelowMdScreen
              })}
            >
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-1'>
                    <Typography>{item.title}</Typography>
                    <Typography variant='h4'>{item.value}</Typography>
                  </div>
                  <CustomAvatar variant='rounded' size={44}>
                    <i className={classnames(item.icon, 'text-[28px]')} />
                  </CustomAvatar>
                </div>
                {item.change ? (
                  <div className='flex items-center gap-2'>
                    <Typography>{`${item.desc} orders`}</Typography>
                    <Chip
                      variant='tonal'
                      label={`${item.change}%`}
                      size='small'
                      color={item.change > 0 ? 'success' : 'error'}
                    />
                  </div>
                ) : (
                  <Typography>{`${item.desc} orders`}</Typography>
                )}
              </div>
              {isBelowMdScreen && !isSmallScreen && index < data.length - 2 && (
                <Divider
                  className={classnames('mbs-6', {
                    'mie-6': index % 2 === 0
                  })}
                />
              )}
              {isSmallScreen && index < data.length - 1 && <Divider className='mbs-6' />}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductCard
