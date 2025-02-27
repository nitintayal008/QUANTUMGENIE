import { useEffect, useState } from 'react'
import mqtt from 'mqtt'

// const MQTT_BROKER_URL = ''
const TOPIC = 'issues'

export const useMqtt = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
      clean: true,
      reconnectPeriod: 1000
    })

    console.log('Connecting to MQTT broker...', client)

    client.on('connect', () => {
      console.log('Connected to MQTT broker')
      client.subscribe(TOPIC, err => {
        if (err) {
          console.error('Subscription error:', err)
        } else {
          console.log(`Subscribed to topic: ${TOPIC}`)
        }
      })
    })

    client.on('message', (topic, message) => {
      if (topic === TOPIC) {
        try {
          const data = JSON.parse(message.toString())
          console.log('Nitin Received MQTT message:', data)
          setMessages(prevMessages => [data, ...prevMessages]) // Update state dynamically
        } catch (error) {
          console.error('Error parsing MQTT message:', error)
        }
      }
    })

    client.on('error', err => {
      console.error('MQTT Connection Error:', err)
    })

    client.on('close', () => {
      console.log('MQTT connection closed')
    })

    return () => {
      client.end() // Clean up on unmount
    }
  }, [])

  return { messages }
}
