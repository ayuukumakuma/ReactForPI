import {
  ButtonGroup,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react'
import { Props } from 'framer-motion/types/types'

export const CopyButtonGroup = (props: Props) => {
  const handleOnCopy = (onlyNumber: boolean) => {
    if (onlyNumber) {
      navigator.clipboard
        .writeText(props.content)
        .then(() => console.log('成功'))
    } else {
      const entryTicket = `■${props.text}：` + props.content
      navigator.clipboard.writeText(entryTicket).then(() => console.log('成功'))
    }
  }
  return (
    <ButtonGroup variant={'outline'} colorScheme={'cyan'} mx={6}>
      <Popover closeDelay={2000}>
        <PopoverTrigger>
          <Button
            _hover={{ bg: 'cyan.100' }}
            onClick={() => handleOnCopy(true)}
          >
            数字だけコピー
          </Button>
        </PopoverTrigger>
        <PopoverContent w={'150px'}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>コピー完了</PopoverHeader>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Button
            _hover={{ bg: 'cyan.100' }}
            onClick={() => handleOnCopy(false)}
          >
            記述形式でコピー
          </Button>
        </PopoverTrigger>
        <PopoverContent w={'150px'}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>コピー完了</PopoverBody>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
