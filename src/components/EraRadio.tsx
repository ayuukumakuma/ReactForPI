import { Box, useRadio } from '@chakra-ui/react'
import { Props } from 'framer-motion/types/types'

export const EraRadio = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()
  return (
    <Box as={'label'} m={6}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor={'pointer'}
        borderWidth={'2px'}
        borderRadius={'md'}
        _checked={{ bg: 'cyan.500', color: 'white', borderColor: 'cyan.500' }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}
