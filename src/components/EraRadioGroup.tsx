import { HStack, useRadioGroup } from '@chakra-ui/react'
import { Props } from 'framer-motion/types/types'
import { EraRadio } from './EraRadio'

export const EraRadioGroup = (props: Props) => {
  const eras = ['西暦', '大正', '昭和', '平成', '令和']
  const handleOnChange = (value: string) => {
   props.setEra(value)
   props.setDate('')
   props.setFormatDate('')
  }
  const { getRootProps, getRadioProps } = useRadioGroup({
   name: 'Era',
   defaultValue: '西暦',
   onChange: handleOnChange,
  })

  const group = getRootProps()
  return (
    <HStack {...group}>
      {eras.map((era) => {
        const radio = getRadioProps({ value: era })
        return (
          <EraRadio key={era} {...radio}>
            {era}
          </EraRadio>
        )
      })}
    </HStack>
  )
}
